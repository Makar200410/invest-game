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
    rankTier: number;
    weeklyStartBalance: number;
    isInTournament: boolean;
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
                last_active TIMESTAMP,
                rank_tier INTEGER DEFAULT 1,
                weekly_start_balance NUMERIC DEFAULT 0,
                is_in_tournament BOOLEAN DEFAULT FALSE
            );
        `);

        // Migrations for existing tables
        try {
            await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS rank_tier INTEGER DEFAULT 1`);
            await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS weekly_start_balance NUMERIC DEFAULT 0`);
            await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS is_in_tournament BOOLEAN DEFAULT FALSE`);
        } catch (e) {
            console.log('Migration note: User columns might already exist');
        }

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
                timestamp BIGINT NOT NULL,
                likes JSONB DEFAULT '[]'::jsonb
            );
        `);

        // Market Fundamentals Table
        await query(`
            CREATE TABLE IF NOT EXISTS market_fundamentals (
                symbol VARCHAR(50) PRIMARY KEY,
                data JSONB,
                last_updated TIMESTAMP
            );
        `);

        // Market News Table
        await query(`
            CREATE TABLE IF NOT EXISTS market_news (
                id VARCHAR(255) PRIMARY KEY,
                symbol VARCHAR(50),
                title VARCHAR(500),
                url VARCHAR(500),
                site VARCHAR(255),
                time BIGINT,
                image_url VARCHAR(500),
                summary TEXT
            );
        `);

        // Migration: Ensure likes column exists
        try {
            await query(`ALTER TABLE asset_comments ADD COLUMN IF NOT EXISTS likes JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            console.log('Migration note: likes column might already exist or error ignored');
        }

        // Migration: Ensure parent_id column exists for nested comments
        try {
            await query(`ALTER TABLE asset_comments ADD COLUMN IF NOT EXISTS parent_id VARCHAR(255)`);
        } catch (e) {
            console.log('Migration note: parent_id column might already exist or error ignored');
        }

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
            lastActive: row.last_active,
            rankTier: row.rank_tier || 1,
            weeklyStartBalance: Number(row.weekly_start_balance) || 0,
            isInTournament: row.is_in_tournament || false
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
            lastActive: row.last_active,
            rankTier: row.rank_tier || 1,
            weeklyStartBalance: Number(row.weekly_start_balance) || 0,
            isInTournament: row.is_in_tournament || false
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
            lastActive: row.last_active,
            rankTier: row.rank_tier || 1,
            weeklyStartBalance: Number(row.weekly_start_balance) || 0,
            isInTournament: row.is_in_tournament || false
        }));
    } catch (error) {
        console.error('Error fetching users by IP:', error);
        return [];
    }
};

export const createUser = async (user: User): Promise<void> => {
    try {
        const res = await query(
            `INSERT INTO users (id, username, password, ip, email, game_state, portfolio_value, last_active, rank_tier, weekly_start_balance, is_in_tournament)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [user.id, user.username, user.password, user.ip, user.email, user.gameState, user.portfolioValue, user.lastActive, user.rankTier || 1, user.weeklyStartBalance || 0, user.isInTournament || false]
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
        if (updates.rankTier !== undefined) { fields.push(`rank_tier = $${idx++}`); values.push(updates.rankTier); }
        if (updates.weeklyStartBalance !== undefined) { fields.push(`weekly_start_balance = $${idx++}`); values.push(updates.weeklyStartBalance); }
        if (updates.isInTournament !== undefined) { fields.push(`is_in_tournament = $${idx++}`); values.push(updates.isInTournament); }

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
        // Enforce strict limit of 500 data points per timeframe to save DB space
        const limitedData = data.length > 500 ? data.slice(-500) : data;

        await query(
            `INSERT INTO market_history (symbol, interval, data, last_updated)
             VALUES ($1, $2, $3, NOW())
             ON CONFLICT (symbol, interval) DO UPDATE SET data = $3, last_updated = NOW()`,
            [symbol, interval, JSON.stringify(limitedData)]
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

export const pruneMarketHistory = async () => {
    try {
        console.log('Pruning old market history...');
        // Keep 1m data for 2 days
        await query("DELETE FROM market_history WHERE interval = '1m' AND last_updated < NOW() - INTERVAL '2 days'");
        // Keep 5m data for 14 days
        await query("DELETE FROM market_history WHERE interval = '5m' AND last_updated < NOW() - INTERVAL '14 days'");
        // Keep 1h data for 60 days
        await query("DELETE FROM market_history WHERE interval = '1h' AND last_updated < NOW() - INTERVAL '60 days'");

        console.log('Market history pruned successfully.');
    } catch (error) {
        console.error('Error pruning market history:', error);
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
export const addAssetComment = async (comment: { id: string, symbol: string, username: string, content: string, timestamp: number, parentId?: string }) => {
    try {
        await query(
            `INSERT INTO asset_comments (id, symbol, username, content, timestamp, likes, parent_id)
             VALUES ($1, $2, $3, $4, $5, '[]'::jsonb, $6)`,
            [comment.id, comment.symbol, comment.username, comment.content, comment.timestamp, comment.parentId || null]
        );
    } catch (error) {
        console.error('Error adding asset comment:', error);
        throw error;
    }
};

export const deleteAssetComment = async (commentId: string, username: string) => {
    try {
        // Only allow deleting own comments
        const res = await query('DELETE FROM asset_comments WHERE id = $1 AND username = $2', [commentId, username]);
        if (res.rowCount === 0) {
            throw new Error('Comment not found or unauthorized');
        }
    } catch (error) {
        console.error('Error deleting asset comment:', error);
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
            timestamp: Number(row.timestamp),
            likes: row.likes || [],
            parentId: row.parent_id
        }));
    } catch (error) {
        console.error('Error fetching asset comments:', error);
        return [];
    }
};

export const toggleLikeComment = async (commentId: string, username: string): Promise<string[]> => {
    try {
        // First get the current likes
        const res = await query('SELECT likes FROM asset_comments WHERE id = $1', [commentId]);
        if (res.rows.length === 0) {
            throw new Error('Comment not found');
        }

        let likes: string[] = res.rows[0].likes || [];

        if (likes.includes(username)) {
            // Unlike
            likes = likes.filter(u => u !== username);
        } else {
            // Like
            likes.push(username);
        }

        // Update the database
        await query('UPDATE asset_comments SET likes = $1 WHERE id = $2', [JSON.stringify(likes), commentId]);

        return likes;
    } catch (error) {
        console.error('Error toggling like:', error);
        throw error;
    }
};

// Market Fundamentals Functions
export const saveMarketFundamentals = async (symbol: string, data: any) => {
    try {
        await query(
            `INSERT INTO market_fundamentals (symbol, data, last_updated)
             VALUES ($1, $2, NOW())
             ON CONFLICT (symbol) DO UPDATE SET data = $2, last_updated = NOW()`,
            [symbol, data]
        );
    } catch (error) {
        console.error('Error saving market fundamentals:', error);
    }
};

export const getMarketFundamentals = async (symbol: string): Promise<any | null> => {
    try {
        const res = await query('SELECT data FROM market_fundamentals WHERE symbol = $1', [symbol]);
        if (res.rows.length > 0) {
            return res.rows[0].data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching market fundamentals:', error);
        return null;
    }
};

// Market News Functions
export const saveMarketNews = async (newsItems: any[]) => {
    try {
        for (const item of newsItems) {
            await query(
                `INSERT INTO market_news (id, symbol, title, url, site, time, image_url, summary)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                 ON CONFLICT (id) DO NOTHING`,
                [item.id, item.symbol, item.title, item.url, item.site, item.time, item.imageUrl || '', item.summary || '']
            );
        }
    } catch (error) {
        console.error('Error saving market news:', error);
    }
};

export const getMarketNews = async (symbol?: string): Promise<any[]> => {
    try {
        let queryStr = 'SELECT * FROM market_news';
        const params: any[] = [];

        if (symbol) {
            queryStr += ' WHERE symbol = $1';
            params.push(symbol);
        }

        queryStr += ' ORDER BY time DESC LIMIT 50';

        const res = await query(queryStr, params);
        return res.rows.map(row => ({
            id: row.id,
            symbol: row.symbol,
            title: row.title,
            url: row.url,
            site: row.site,
            time: Number(row.time),
            imageUrl: row.image_url,
            summary: row.summary
        }));
    } catch (error) {
        console.error('Error fetching market news:', error);
        return [];
    }
};
