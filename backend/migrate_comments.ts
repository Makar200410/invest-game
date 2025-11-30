import { query } from './src/services/db.ts';

const migrate = async () => {
    try {
        console.log('Migrating asset_comments table...');
        await query(`
            ALTER TABLE asset_comments 
            ADD COLUMN IF NOT EXISTS likes JSONB DEFAULT '[]'::jsonb;
        `);
        console.log('Migration successful!');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
};

migrate();
