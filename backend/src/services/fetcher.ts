import YahooFinance from 'yahoo-finance2';
import { getMarketHistory, saveMarketHistory, saveMarketItems } from './storage.js';

// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();
const SYMBOLS = [
    'BTC-USD', 'ETH-USD', 'SOL-USD', 'DOGE-USD', // Crypto
    'AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA' // Stocks
];

export const updateMarketData = async () => {
    console.log('====================================');
    console.log('Fetching market data from Yahoo Finance...');
    console.log(`Symbols to fetch: ${SYMBOLS.join(', ')}`);

    const items = [];

    for (const symbol of SYMBOLS) {
        try {
            console.log(`Fetching ${symbol}...`);
            const quoteResult = await yahooFinance.quote(symbol);

            // Optimize history: Append new data instead of re-fetching all
            // Use '5m' as default interval for sparklines
            let history = await getMarketHistory(symbol, '5m');

            if (history.length === 0) {
                // Initial fetch if empty
                history = await fetchHistory(symbol);
            } else {
                // Append new data point if it's new
                const lastPoint = history[history.length - 1];
                const newTime = quoteResult.regularMarketTime ? new Date(quoteResult.regularMarketTime).toISOString() : new Date().toISOString();

                // Only append if time is different (and newer)
                if (lastPoint && lastPoint.date !== newTime) {
                    console.log(`Appending new data point for ${symbol}: ${newTime}`);
                    history.push({
                        date: newTime,
                        open: quoteResult.regularMarketPrice,
                        high: quoteResult.regularMarketPrice,
                        low: quoteResult.regularMarketPrice,
                        close: quoteResult.regularMarketPrice,
                        volume: 0, // Volume not always available in quote
                        price: quoteResult.regularMarketPrice
                    });

                    // Limit size to prevent memory overload (keep last 300 points)
                    if (history.length > 300) {
                        history = history.slice(-300);
                    }

                    // Update repo
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
            console.log(`✓ ${symbol}: $${item.price} (${item.change24h?.toFixed(2)}%)`);
        } catch (error) {
            console.error(`✗ Error fetching ${symbol}:`, error instanceof Error ? error.message : error);
        }
    }

    await saveMarketItems(items);
    console.log(`Market data updated. Total items: ${items.length}/10`);
    console.log('====================================');
};

export const fetchHistory = async (symbol: string, interval: string = '5m') => {
    try {
        // Check cache first for non-default intervals if needed, but usually we fetch fresh for charts
        // For '5m' we might want to check DB, but this function is often called when DB is empty or for specific chart view.
        // Let's check DB for '5m' to avoid re-fetching if we just did it.
        if (interval === '5m') {
            const cached = await getMarketHistory(symbol, '5m');
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
            case '1d': periodDays = 365; break;
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
        if (interval === '5m') {
            await saveMarketHistory(symbol, '5m', historyData.slice(-100));
        }

        return historyData;
    } catch (error) {
        console.error(`Error fetching history for ${symbol} (${interval}):`, error);
        return [];
    }
};
