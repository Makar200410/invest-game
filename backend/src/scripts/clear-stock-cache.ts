import { query } from '../services/db.js';

const clearStockCache = async () => {
    try {
        console.log('Clearing stock history cache from database...');

        // Delete history for stocks (not crypto, commodities, forex, indices, futures)
        const stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'HSBA.L', 'SHEL.L', 'AZN.L', 'SAP.DE', 'SIE.DE'];

        for (const symbol of stocks) {
            await query('DELETE FROM market_history WHERE symbol = $1 AND interval = $2', [symbol, '1d']);
            console.log(`Cleared cache for ${symbol}`);
        }

        console.log('Cache cleared. Restart the backend to fetch fresh data.');
        process.exit(0);
    } catch (error) {
        console.error('Error clearing cache:', error);
        process.exit(1);
    }
};

clearStockCache();
