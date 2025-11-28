import YahooFinance from 'yahoo-finance2';
import { getMarketHistory, saveMarketHistory, saveMarketItems } from './storage.js';

// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();
const SYMBOLS = [
    'BTC-USD', 'ETH-USD', 'SOL-USD', 'DOGE-USD', // Crypto
    'AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA' // Stocks
];

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const updateMarketData = async () => {
    console.log('====================================');
    console.log('Fetching market data...');

    let items = [];

    // Try fetching from Yahoo Finance first
    try {
        console.log(`Symbols to fetch: ${SYMBOLS.join(', ')}`);
        for (const symbol of SYMBOLS) {
            try {
                console.log(`Fetching ${symbol}...`);
                const quoteResult = await yahooFinance.quote(symbol);

                // ... (existing history logic) ...
                let history = await getMarketHistory(symbol, '5m');
                if (history.length === 0) {
                    history = await fetchHistory(symbol);
                } else {
                    // Append logic
                    const lastPoint = history[history.length - 1];
                    const newTime = quoteResult.regularMarketTime ? new Date(quoteResult.regularMarketTime).toISOString() : new Date().toISOString();
                    if (lastPoint && lastPoint.date !== newTime) {
                        history.push({
                            date: newTime,
                            open: quoteResult.regularMarketPrice,
                            high: quoteResult.regularMarketPrice,
                            low: quoteResult.regularMarketPrice,
                            close: quoteResult.regularMarketPrice,
                            volume: 0,
                            price: quoteResult.regularMarketPrice
                        });
                        if (history.length > 300) history = history.slice(-300);
                        await saveMarketHistory(symbol, '5m', history);
                    }
                }

                const item = {
                    id: symbol,
                    symbol: symbol.replace('-USD', ''),
                    name: quoteResult.shortName || quoteResult.longName || symbol,
                    price: quoteResult.regularMarketPrice,
                    change24h: quoteResult.regularMarketChangePercent,
                    type: symbol.includes('-USD') ? 'crypto' : 'stock',
                    sparkline: history
                };
                items.push(item);
                console.log(`✓ ${symbol}: $${item.price}`);
            } catch (err) {
                console.error(`Error fetching ${symbol}:`, err);
            }
        }
    } catch (error) {
        console.error("Yahoo Finance fetch failed:", error);
    }

    // If Yahoo Finance failed or returned partial data, load from repository
    if (items.length === 0) {
        console.log("Fetching failed or empty. Loading from local repository...");
        try {
            const repoPath = path.join(__dirname, '../market_repository.json');
            if (fs.existsSync(repoPath)) {
                const repoData = JSON.parse(fs.readFileSync(repoPath, 'utf-8'));
                if (repoData.items) {
                    items = repoData.items;
                    // Also save history from repo if needed
                    for (const item of items) {
                        if (item.sparkline) {
                            await saveMarketHistory(item.id, '5m', item.sparkline);
                        }
                    }
                    console.log(`Loaded ${items.length} items from repository.`);
                }
            } else {
                console.warn("market_repository.json not found.");
            }
        } catch (repoError) {
            console.error("Error loading repository:", repoError);
        }
    }

    if (items.length > 0) {
        await saveMarketItems(items);
        console.log(`Market data updated. Total items: ${items.length}`);
    } else {
        console.error("Failed to update market data from any source.");
    }
    console.log('====================================');
};

export const fetchHistory = async (symbol: string, interval: string = '5m') => {
    try {
        // Check cache first for non-default intervals if needed, but usually we fetch fresh for charts
        // For '5m' we might want to check DB, but this function is often called when DB is empty or for specific chart view.
        // Let's check DB for '5m' to avoid re-fetching if we just did it.
        // Check DB for '5m' and '1d' to avoid re-fetching
        if (interval === '5m' || interval === '1d') {
            const cached = await getMarketHistory(symbol, interval);
            if (cached.length > 0) return cached;
        }

        // Map interval to appropriate range/period
        let periodDays = 1;
        switch (interval) {
            case '1m': periodDays = 2; break; // 1m needs short range (max 7 days)
            case '5m': periodDays = 1; break;
            case '15m': periodDays = 5; break;
            case '1h': periodDays = 30; break;
            case '3h': periodDays = 60; break;
            case '1d': periodDays = 1825; break; // 5 years for monthly charts
            default: periodDays = 1;
        }

        let queryInterval: any = interval;
        if (interval === '3h') queryInterval = '1h';

        let queryOptions: any = {
            period1: new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000),
            interval: queryInterval
        };

        let result: any = await yahooFinance.chart(symbol, queryOptions);

        // Fallback logic for empty data (e.g. weekend/closed market)
        if (!result.quotes || result.quotes.length === 0) {
            console.log(`No data for ${symbol} with interval ${interval}, extending range...`);
            // Extend range significantly
            queryOptions.period1 = new Date(Date.now() - (periodDays * 3) * 24 * 60 * 60 * 1000);
            result = await yahooFinance.chart(symbol, queryOptions);
        }

        const historyData = result.quotes
            .filter((q: any) => q.close !== null && q.close !== undefined)
            .map((q: any) => ({
                date: q.date.toISOString(),
                open: q.open,
                high: q.high,
                low: q.low,
                close: q.close,
                volume: q.volume,
                price: q.close // Keep price for backward compatibility
            }));

        // If we got no data, return empty
        if (historyData.length === 0) {
            console.log(`Warning: No history data found for ${symbol} (${interval})`);
            return [];
        }

        // For default 5m, update cache
        // For default 5m and 1d (used for weekly/monthly), update cache
        if (interval === '5m') {
            await saveMarketHistory(symbol, '5m', historyData.slice(-100));
        } else if (interval === '1d') {
            await saveMarketHistory(symbol, '1d', historyData);
        }

        return historyData;
    } catch (error) {
        console.error(`Error fetching history for ${symbol} (${interval}):`, error);
        return [];
    }
};
