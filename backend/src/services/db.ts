import pg from 'pg';

const { Pool } = pg;

// Use DATABASE_URL from environment variables (Railway provides this)
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Initializing DB Pool. NODE_ENV=${process.env.NODE_ENV}, SSL=${isProduction ? 'Enabled' : 'Disabled (Auto)'}`);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Railway/Heroku often require SSL, even in "dev" if connecting remotely.
    // We'll force permissive SSL if DATABASE_URL is set, to be safe.
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export const getClient = () => pool.connect();
