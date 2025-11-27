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

        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

// User Functions
export const getUsers = async (): Promise<User[]> => {
    try {
        const res = await query('SELECT * FROM users');
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
        const res = await query('SELECT * FROM users WHERE username = $1', [username]);
        if (res.rows.length === 0) return undefined;
        const row = res.rows[0];
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
        await query(
            `INSERT INTO users (id, username, password, ip, email, game_state, portfolio_value, last_active)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [user.id, user.username, user.password, user.ip, user.email, user.gameState, user.portfolioValue, user.lastActive]
        );
    } catch (error) {
        console.error('Error creating user:', error);
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
        console.error('Error saving market items:', error);
    }
};

export const getMarketItems = async (): Promise<any[]> => {
    try {
        const res = await query('SELECT data FROM market_items');
        return res.rows.map(row => row.data);
    } catch (error) {
        console.error('Error fetching market items:', error);
        return [];
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
