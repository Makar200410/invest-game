import YahooFinance from 'yahoo-finance2';
import { getMarketHistory, saveMarketHistory, saveMarketItems, getMarketHistoryWithMeta } from './storage.js';

// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();
const SYMBOLS = [
    'BTC-USD', 'ETH-USD', 'SOL-USD', 'DOGE-USD', // Crypto
    'AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA' // Stocks
];

// Helper to fetch crypto price from Binance
const fetchCryptoPrice = async (symbol: string): Promise<{ price: number, time: number } | null> => {
    try {
        // Map Yahoo symbol to Binance symbol
        const binanceSymbol = symbol.replace('-USD', 'USDT');
        const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${binanceSymbol}`);
        if (!response.ok) return null;
        const data = await response.json();
        return {
            price: parseFloat(data.price),
            time: Date.now()
        };
    } catch (error) {
        console.error(`Binance fetch failed for ${symbol}:`, error);
        return null;
    }
};

// Helper to fetch crypto history from Binance
const fetchCryptoHistory = async (symbol: string, interval: string): Promise<any[]> => {
    try {
        const binanceSymbol = symbol.replace('-USD', 'USDT');
        // Map intervals: 1m, 5m, 15m, 1h, 1d are same. 3h -> 4h (Binance doesn't have 3h)
        let binanceInterval = interval;
        if (interval === '3h') binanceInterval = '4h';

        const limit = 500; // Fetch enough candles
        const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${binanceSymbol}&interval=${binanceInterval}&limit=${limit}`);

        if (!response.ok) return [];

        const data = await response.json();
        // Binance response: [ [openTime, open, high, low, close, volume, closeTime, ...], ... ]
        return data.map((d: any[]) => ({
            date: new Date(d[0]).toISOString(),
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4]),
            volume: parseFloat(d[5]),
            price: parseFloat(d[4])
        }));
    } catch (error) {
        console.error(`Binance history fetch failed for ${symbol}:`, error);
        return [];
    }
};

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
        console.log(`Symbols to fetch: ${SYMBOLS.join(', ')}`);

        // Fetch all symbols in parallel
        const results = await Promise.all(SYMBOLS.map(async (symbol) => {
            try {
                // console.log(`Fetching ${symbol}...`); // Reduce logging
                let price = 0;
                let marketTime = 0;
                let quoteResult: any = null;

                // Try Binance for Crypto first
                if (symbol.includes('-USD')) {
                    const binanceData = await fetchCryptoPrice(symbol);
                    if (binanceData) {
                        price = binanceData.price;
                        marketTime = binanceData.time;
                        // console.log(`✓ ${symbol} (Binance): $${price}`);
                    }
                }

                // Fallback to Yahoo or if it's a Stock
                if (price === 0) {
                    quoteResult = await yahooFinance.quote(symbol);
                    if (quoteResult && quoteResult.regularMarketPrice) {
                        price = quoteResult.regularMarketPrice;
                        marketTime = quoteResult.regularMarketTime ? new Date(quoteResult.regularMarketTime).getTime() : Date.now();
                        // console.log(`✓ ${symbol} (Yahoo): $${price}`);
                    }
                }

                if (price === 0) {
                    console.warn(`No price data for ${symbol}, skipping...`);
                    return null;
                }

                // Update 5m history with new data point
                let history5m = await getMarketHistory(symbol, '5m');
                const currentTime = new Date(marketTime).toISOString();

                // Always append new data point
                const newDataPoint = {
                    date: currentTime,
                    open: price,
                    high: price, // Approximation for live update
                    low: price,  // Approximation for live update
                    close: price,
                    volume: quoteResult?.regularMarketVolume || 0,
                    price: price
                };

                // Check if we need to add a new point (different timestamp)
                const lastPoint = history5m[history5m.length - 1];
                if (!lastPoint || lastPoint.date !== currentTime) {
                    history5m.push(newDataPoint);
                    // Keep last 90 points for 5m
                    if (history5m.length > 90) history5m = history5m.slice(-90);
                    await saveMarketHistory(symbol, '5m', history5m);
                    // console.log(`Updated 5m history for ${symbol}`);
                }

                // Update or fetch 1d history for Sparkline (Main Page)
                // fetchHistory now handles caching and staleness checks
                const history1d = await fetchHistory(symbol, '1d');

                return {
                    id: symbol,
                    symbol: symbol.replace('-USD', ''),
                    name: quoteResult?.shortName || quoteResult?.longName || symbol,
                    price: price,
                    change24h: quoteResult?.regularMarketChangePercent || 0,
                    type: symbol.includes('-USD') ? 'crypto' : 'stock',
                    sparkline: history1d // Use 1d data for main page sparklines
                };
            } catch (err) {
                console.error(`Error fetching ${symbol}:`, err);
                return null;
            }
        }));

        items = results.filter(item => item !== null);
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

        let historyData: any[] = [];

        // Try Binance for Crypto History
        if (symbol.includes('-USD')) {
            historyData = await fetchCryptoHistory(symbol, interval);
            if (historyData.length > 0) {
                console.log(`✓ Fetched ${historyData.length} candles from Binance for ${symbol}`);
            }
        }

        // Fallback to Yahoo if Binance failed or it's not crypto
        if (historyData.length === 0) {
            let result: any = await yahooFinance.chart(symbol, queryOptions);

            // Fallback logic for empty data (e.g. weekend/closed market)
            if (!result.quotes || result.quotes.length === 0) {
                console.log(`No data for ${symbol} with interval ${interval}, extending range...`);
                // Extend range significantly
                queryOptions.period1 = new Date(Date.now() - (periodDays * 2) * 24 * 60 * 60 * 1000);
                result = await yahooFinance.chart(symbol, queryOptions);
            }

            historyData = result.quotes
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
        }

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
