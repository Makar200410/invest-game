import { query } from './db.js';

export interface User {
    id: string;
    username: string;
    password: string;
    ip: string;
    email?: string;
    gameState: any;
    portfolioValue: number;
    lastActive: string;
}

export interface MarketData {
    lastUpdated: string;
    items: any[];
    history: Record<string, any[]>;
    users: User[];
}

// In-memory cache
let marketItemsCache: any[] = [];

// Initialize Database Tables
export const initDB = async () => {
    try {
        console.log('Initializing Database...');

        // Users Table
        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(255) PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                ip VARCHAR(255),
                email VARCHAR(255),
                game_state JSONB,
                portfolio_value NUMERIC,
                last_active TIMESTAMP
            );
        `);

        // Market Items Table (Latest Snapshot)
        await query(`
            CREATE TABLE IF NOT EXISTS market_items (
                symbol VARCHAR(50) PRIMARY KEY,
                data JSONB,
                last_updated TIMESTAMP
            );
        `);

        // Market History Table (TimeSeries)
        await query(`
            CREATE TABLE IF NOT EXISTS market_history (
                symbol VARCHAR(50),
                interval VARCHAR(10),
                data JSONB,
                last_updated TIMESTAMP,
                PRIMARY KEY (symbol, interval)
            );
        `);

        // Insider Tips Table
        await query(`
            CREATE TABLE IF NOT EXISTS insider_tips (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255),
                content TEXT,
                impact VARCHAR(50),
                reliability VARCHAR(50),
                date BIGINT,
                url VARCHAR(500)
            );
        `);

        // Asset Comments Table
        await query(`
            CREATE TABLE IF NOT EXISTS asset_comments (
                id VARCHAR(255) PRIMARY KEY,
                symbol VARCHAR(50) NOT NULL,
                username VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                timestamp BIGINT NOT NULL
            );
        `);

        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

// User Functions
export const getUsers = async (): Promise<User[]> => {
    try {
        const res = await query('SELECT * FROM users');
        console.log(`getUsers: Retrieved ${res.rows.length} users.`);
        return res.rows.map(row => ({
            id: row.id,
            username: row.username,
            password: row.password,
            ip: row.ip,
            email: row.email,
            gameState: row.game_state,
            portfolioValue: Number(row.portfolio_value),
            lastActive: row.last_active
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const getUser = async (username: string): Promise<User | undefined> => {
    try {
        console.log(`getUser: Querying for username='${username}'`);
        const res = await query('SELECT * FROM users WHERE username = $1', [username]);
        console.log(`getUser: Found ${res.rows.length} rows for '${username}'`);
        if (res.rows.length === 0) return undefined;
        const row = res.rows[0];
        // Log found user details (masking password)
        console.log(`getUser: User found. ID=${row.id}, StoredPwd=${row.password ? '***' : 'MISSING'}`);
        return {
            id: row.id,
            username: row.username,
            password: row.password,
            ip: row.ip,
            email: row.email,
            gameState: row.game_state,
            portfolioValue: Number(row.portfolio_value),
            lastActive: row.last_active
        };
    } catch (error) {
        console.error('Error fetching user:', error);
        return undefined;
    }
};

export const getUsersByIp = async (ip: string): Promise<User[]> => {
    try {
        const res = await query('SELECT * FROM users WHERE ip = $1', [ip]);
        return res.rows.map(row => ({
            id: row.id,
            username: row.username,
            password: row.password,
            ip: row.ip,
            email: row.email,
            gameState: row.game_state,
            portfolioValue: Number(row.portfolio_value),
            lastActive: row.last_active
        }));
    } catch (error) {
        console.error('Error fetching users by IP:', error);
        return [];
    }
};

export const createUser = async (user: User): Promise<void> => {
    try {
        const res = await query(
            `INSERT INTO users (id, username, password, ip, email, game_state, portfolio_value, last_active)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [user.id, user.username, user.password, user.ip, user.email, user.gameState, user.portfolioValue, user.lastActive]
        );
        console.log(`createUser: Inserted ${res.rowCount} row(s) for user ${user.username}`);
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Rethrow to let caller know
    }
};

export const updateUser = async (username: string, updates: Partial<User>): Promise<void> => {
    try {
        // Build dynamic query
        const fields: string[] = [];
        const values: any[] = [];
        let idx = 1;

        if (updates.password) { fields.push(`password = $${idx++}`); values.push(updates.password); }
        if (updates.email) { fields.push(`email = $${idx++}`); values.push(updates.email); }
        if (updates.gameState) { fields.push(`game_state = $${idx++}`); values.push(updates.gameState); }
        if (updates.portfolioValue !== undefined) { fields.push(`portfolio_value = $${idx++}`); values.push(updates.portfolioValue); }
        if (updates.lastActive) { fields.push(`last_active = $${idx++}`); values.push(updates.lastActive); }

        if (fields.length === 0) return;

        values.push(username);
        await query(`UPDATE users SET ${fields.join(', ')} WHERE username = $${idx}`, values);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// Market Data Functions
export const saveMarketItems = async (items: any[]) => {
    // Update cache immediately
    marketItemsCache = items;
    console.log(`saveMarketItems: Updated in-memory cache with ${items.length} items.`);

    try {
        for (const item of items) {
            await query(
                `INSERT INTO market_items (symbol, data, last_updated)
                 VALUES ($1, $2, NOW())
                 ON CONFLICT (symbol) DO UPDATE SET data = $2, last_updated = NOW()`,
                [item.symbol, item]
            );
        }
    } catch (error) {
        console.error('Error saving market items to DB (cache updated):', error);
    }
};

export const getMarketItems = async (): Promise<any[]> => {
    if (marketItemsCache.length > 0) {
        return marketItemsCache;
    }

    try {
        const res = await query('SELECT data FROM market_items');
        const items = res.rows.map(row => row.data);
        if (items.length > 0) {
            marketItemsCache = items; // Populate cache from DB
        }
        return items;
    } catch (error) {
        console.error('Error fetching market items:', error);
        return marketItemsCache; // Return cache (even if empty) on error
    }
};

export const saveMarketHistory = async (symbol: string, interval: string, data: any[]) => {
    try {
        await query(
            `INSERT INTO market_history (symbol, interval, data, last_updated)
             VALUES ($1, $2, $3, NOW())
             ON CONFLICT (symbol, interval) DO UPDATE SET data = $3, last_updated = NOW()`,
            [symbol, interval, JSON.stringify(data)]
        );
    } catch (error) {
        console.error('Error saving market history:', error);
    }
};

export const getMarketHistory = async (symbol: string, interval: string): Promise<any[]> => {
    try {
        const res = await query('SELECT data FROM market_history WHERE symbol = $1 AND interval = $2', [symbol, interval]);
        if (res.rows.length > 0) {
            return res.rows[0].data; // Postgres JSONB returns object/array directly
        }
        return [];
    } catch (error) {
        console.error('Error fetching market history:', error);
        return [];
    }
};


export const getMarketHistoryWithMeta = async (symbol: string, interval: string): Promise<{ data: any[], lastUpdated: Date } | null> => {
    try {
        const res = await query('SELECT data, last_updated FROM market_history WHERE symbol = $1 AND interval = $2', [symbol, interval]);
        if (res.rows.length > 0) {
            return {
                data: res.rows[0].data,
                lastUpdated: res.rows[0].last_updated
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching market history with meta:', error);
        return null;
    }
};

// Insider Tips Functions
export const addInsiderTip = async (tip: any) => {
    try {
        await query(
            `INSERT INTO insider_tips (id, title, content, impact, reliability, date, url)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [tip.id, tip.title, tip.content, tip.impact, tip.reliability, tip.date, tip.url]
        );
        console.log(`addInsiderTip: Added tip ${tip.title}`);
    } catch (error) {
        console.error('Error adding insider tip:', error);
    }
};

export const getInsiderTips = async (): Promise<any[]> => {
    try {
        // Get random 5 tips
        const res = await query('SELECT * FROM insider_tips ORDER BY RANDOM() LIMIT 5');
        return res.rows.map(row => ({
            id: row.id,
            title: row.title,
            content: row.content,
            impact: row.impact,
            reliability: row.reliability,
            date: Number(row.date), // Ensure date is number (timestamp)
            url: row.url
        }));
    } catch (error) {
        console.error('Error fetching insider tips:', error);
        return [];
    }
};

// Asset Comments Functions
export const addAssetComment = async (comment: { id: string, symbol: string, username: string, content: string, timestamp: number }) => {
    try {
        await query(
            `INSERT INTO asset_comments (id, symbol, username, content, timestamp)
             VALUES ($1, $2, $3, $4, $5)`,
            [comment.id, comment.symbol, comment.username, comment.content, comment.timestamp]
        );
    } catch (error) {
        console.error('Error adding asset comment:', error);
        throw error;
    }
};

export const getAssetComments = async (symbol: string): Promise<any[]> => {
    try {
        const res = await query('SELECT * FROM asset_comments WHERE symbol = $1 ORDER BY timestamp DESC', [symbol]);
        return res.rows.map(row => ({
            id: row.id,
            symbol: row.symbol,
            username: row.username,
            content: row.content,
            timestamp: Number(row.timestamp)
        }));
    } catch (error) {
        console.error('Error fetching asset comments:', error);
        return [];
    }
};


