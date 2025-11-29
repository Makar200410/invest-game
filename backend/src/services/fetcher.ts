import YahooFinance from 'yahoo-finance2';
import { getMarketHistory, saveMarketHistory, saveMarketItems, getMarketHistoryWithMeta } from './storage.js';

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
    console.log(`[${new Date().toISOString()}] Fetching fresh market data from Yahoo Finance...`);

    let items = [];

    // ALWAYS fetch fresh data from Yahoo Finance
    try {
        console.log(`Symbols to fetch: ${SYMBOLS.join(', ')}`);
        for (const symbol of SYMBOLS) {
            try {
                console.log(`Fetching ${symbol}...`);
                // Always get fresh quote data
                const quoteResult = await yahooFinance.quote(symbol);

                if (!quoteResult || !quoteResult.regularMarketPrice) {
                    console.warn(`No price data for ${symbol}, skipping...`);
                    continue;
                }

                console.log(`✓ ${symbol}: $${quoteResult.regularMarketPrice}`);

                // Update 5m history with new data point
                let history5m = await getMarketHistory(symbol, '5m');
                const currentTime = quoteResult.regularMarketTime ? new Date(quoteResult.regularMarketTime).toISOString() : new Date().toISOString();

                // Always append new data point
                const newDataPoint = {
                    date: currentTime,
                    open: quoteResult.regularMarketPrice,
                    high: quoteResult.regularMarketDayHigh || quoteResult.regularMarketPrice,
                    low: quoteResult.regularMarketDayLow || quoteResult.regularMarketPrice,
                    close: quoteResult.regularMarketPrice,
                    volume: quoteResult.regularMarketVolume || 0,
                    price: quoteResult.regularMarketPrice
                };

                // Check if we need to add a new point (different timestamp)
                const lastPoint = history5m[history5m.length - 1];
                if (!lastPoint || lastPoint.date !== currentTime) {
                    history5m.push(newDataPoint);
                    // Keep last 90 points for 5m
                    if (history5m.length > 90) history5m = history5m.slice(-90);
                    await saveMarketHistory(symbol, '5m', history5m);
                    console.log(`Updated 5m history for ${symbol}, now has ${history5m.length} points`);
                }

                // Update or fetch 1d history for Sparkline (Main Page)
                // fetchHistory now handles caching and staleness checks
                const history1d = await fetchHistory(symbol, '1d');

                const item = {
                    id: symbol,
                    symbol: symbol.replace('-USD', ''),
                    name: quoteResult.shortName || quoteResult.longName || symbol,
                    price: quoteResult.regularMarketPrice,
                    change24h: quoteResult.regularMarketChangePercent || 0,
                    type: symbol.includes('-USD') ? 'crypto' : 'stock',
                    sparkline: history1d // Use 1d data for main page sparklines
                };
                items.push(item);
            } catch (err) {
                console.error(`Error fetching ${symbol}:`, err);
            }
        }
    } catch (error) {
        console.error("Yahoo Finance fetch failed:", error);
    }

    // If Yahoo Finance failed completely, load from repository as last resort
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
                            await saveMarketHistory(item.id, '1d', item.sparkline);
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
        console.log(`✓ Market data updated successfully. Total items: ${items.length}`);
    } else {
        console.error("Failed to update market data from any source.");
    }
    console.log('====================================');
};


export const fetchHistory = async (symbol: string, interval: string = '5m') => {
    try {
        // Check DB for '5m' and '1d' to avoid re-fetching
        if (interval === '5m' || interval === '1d') {
            const cached = await getMarketHistoryWithMeta(symbol, interval);

            if (cached && cached.data.length > 0) {
                const now = new Date();
                const lastUpdated = new Date(cached.lastUpdated);
                const diffMs = now.getTime() - lastUpdated.getTime();

                // Define staleness thresholds
                // 5m: 5 minutes
                // 1d: 1 hour (to keep daily charts somewhat fresh during the day)
                const staleThreshold = interval === '5m' ? 5 * 60 * 1000 : 60 * 60 * 1000;

                if (diffMs < staleThreshold) {
                    return cached.data;
                }
                console.log(`Cache stale for ${symbol} (${interval}). Age: ${Math.round(diffMs / 1000)}s. Fetching fresh...`);
            }
        }

        // Map interval to appropriate range/period with correct Yahoo Finance limits
        let periodDays = 1;
        let queryInterval: any = interval;

        switch (interval) {
            case '1m':
                periodDays = 7; // 1m data is only available for last 7 days
                break;
            case '5m':
                periodDays = 5; // Get 5 days to have enough data
                break;
            case '15m':
                periodDays = 10;
                break;
            case '1h':
                periodDays = 60; // Get 60 days for hourly to ensure enough candles
                break;
            case '3h':
                periodDays = 90;
                queryInterval = '1h'; // Yahoo doesn't have 3h, use 1h and aggregate later
                break;
            case '1d':
                periodDays = 730; // 2 years for daily charts
                break;
            default:
                periodDays = 1;
        }

        let queryOptions: any = {
            period1: new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000),
            interval: queryInterval
        };

        console.log(`Fetching ${symbol} with interval ${queryInterval}, period: ${periodDays} days`);
        let result: any = await yahooFinance.chart(symbol, queryOptions);

        // Fallback logic for empty data (e.g. weekend/closed market)
        if (!result.quotes || result.quotes.length === 0) {
            console.log(`No data for ${symbol} with interval ${interval}, extending range...`);
            // Extend range significantly
            queryOptions.period1 = new Date(Date.now() - (periodDays * 2) * 24 * 60 * 60 * 1000);
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

        console.log(`Successfully fetched ${historyData.length} data points for ${symbol} (${interval})`);

        // For default 5m and 1d (used for weekly/monthly), update cache
        if (interval === '5m') {
            await saveMarketHistory(symbol, '5m', historyData.slice(-90));
        } else if (interval === '1d') {
            await saveMarketHistory(symbol, '1d', historyData);
        }

        return historyData;
    } catch (error) {
        console.error(`Error fetching history for ${symbol} (${interval}):`, error);
        return [];
    }
};
