import YahooFinance from 'yahoo-finance2';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { getMarketHistory, saveMarketHistory, saveMarketItems, getMarketHistoryWithMeta, saveMarketFundamentals, getMarketFundamentals, saveMarketNews } from './storage.js';

// ... (existing code)

export const updateMarketNews = async () => {
    console.log(`[${new Date().toISOString()}] Running Market News Update...`);

    // 1. Load from Repository
    try {
        const repoPath = path.join(__dirname, '../news_repository.json');
        if (fs.existsSync(repoPath)) {
            const repoNews = JSON.parse(fs.readFileSync(repoPath, 'utf-8'));
            if (Array.isArray(repoNews) && repoNews.length > 0) {
                const newsItemsToSave = [];
                for (const item of repoNews) {
                    if (item.tickers && Array.isArray(item.tickers)) {
                        for (const ticker of item.tickers) {
                            newsItemsToSave.push({
                                id: `${item.id}-${ticker}`, // Unique ID per symbol
                                symbol: ticker,
                                title: item.title,
                                url: item.url,
                                site: item.site,
                                time: item.time,
                                imageUrl: item.favicon_url || '',
                                summary: item.tags ? item.tags.join(', ') : ''
                            });
                        }
                    }
                }
                if (newsItemsToSave.length > 0) {
                    await saveMarketNews(newsItemsToSave);
                    console.log(`Loaded ${newsItemsToSave.length} news items from repository.`);
                }
            }
        }
    } catch (e) {
        console.error("Error loading news repository:", e);
    }

    // Process in chunks
    const CHUNK_SIZE = 5;
    const chunks = [];
    for (let i = 0; i < SYMBOLS.length; i += CHUNK_SIZE) {
        chunks.push(SYMBOLS.slice(i, i + CHUNK_SIZE));
    }

    let totalNewsFetched = 0;
    for (const chunk of chunks) {
        await Promise.all(chunk.map(async (symbol) => {
            try {
                // Fetch news from Yahoo Finance
                const result = await yahooFinance.search(symbol, { newsCount: 5 });
                if (result.news && result.news.length > 0) {
                    const newsItems = result.news.map((n: any) => ({
                        id: n.uuid || Math.random().toString(36).substring(7),
                        symbol: symbol, // Store with the symbol we searched for
                        title: n.title,
                        url: n.link,
                        site: n.publisher || 'Yahoo Finance',
                        time: n.providerPublishTime ? new Date(n.providerPublishTime).getTime() : Date.now(),
                        imageUrl: n.thumbnail?.resolutions?.[0]?.url || '',
                        summary: ''
                    }));

                    await saveMarketNews(newsItems);
                    totalNewsFetched += newsItems.length;
                }
            } catch (error) {
                // console.error(`Failed to update news for ${symbol}:`, error);
            }
        }));

        // Small delay between chunks
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    console.log(`[${new Date().toISOString()}] Market News Update Complete. Fetched ${totalNewsFetched} news articles from Yahoo.`);
};


// ... (imports remain the same, just updating the storage import line above)

// ... (existing code)

export const updateFundamentals = async () => {
    console.log(`[${new Date().toISOString()}] Running Fundamentals Update...`);
    let updatedCount = 0;

    // Process in chunks to avoid rate limiting
    const CHUNK_SIZE = 5;
    const chunks = [];
    for (let i = 0; i < SYMBOLS.length; i += CHUNK_SIZE) {
        chunks.push(SYMBOLS.slice(i, i + CHUNK_SIZE));
    }

    for (const chunk of chunks) {
        await Promise.all(chunk.map(async (symbol) => {
            try {
                // Skip crypto for detailed fundamentals if Yahoo doesn't support them well, 
                // but usually Yahoo has some data for major crypto.
                // We'll try for all.

                const result = await yahooFinance.quoteSummary(symbol, {
                    modules: [
                        'summaryDetail',
                        'financialData',
                        'defaultKeyStatistics',
                        'assetProfile',
                        'earnings',
                        'recommendationTrend'
                    ] as any
                }, {
                    validateResult: false  // Disable validation to handle schema mismatches from Yahoo
                });

                if (result) {
                    await saveMarketFundamentals(symbol, result);
                    updatedCount++;
                    console.log(`  [Fundamentals] Updated ${symbol} (${updatedCount}/${SYMBOLS.length})`);
                }
            } catch (error) {
                console.error(`Failed to update fundamentals for ${symbol}:`, error);
            }
        }));

        // Small delay between chunks
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    console.log(`[${new Date().toISOString()}] Fundamentals Update Complete. Updated: ${updatedCount}/${SYMBOLS.length}`);
};

export const fetchYahooAnalysis = async (symbol: string) => {
    // Only return cached data - don't make slow API calls
    // Fundamentals are updated by the scheduled cron job every 30 minutes
    const data = await getMarketFundamentals(symbol);
    return data || null;
};



// Create Yahoo Finance instance
// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();
const SYMBOLS = [
    // --- Crypto (10) ---
    'BTC-USD', 'ETH-USD', 'SOL-USD', 'BNB-USD', 'XRP-USD',
    'ADA-USD', 'DOGE-USD', 'AVAX-USD', 'DOT-USD', 'MATIC-USD',

    // --- Commodities (10) ---
    'GC=F', 'SI=F', 'CL=F', 'NG=F', 'HG=F',
    'PL=F', 'PA=F', 'ZC=F', 'ZS=F', 'ZW=F',

    // --- Forex (Major Pairs) ---
    'EURUSD=X', 'GBPUSD=X', 'JPY=X', 'CNY=X', 'BRL=X',
    'RUB=X', 'INR=X', 'CAD=X',

    // --- US (en) ---
    'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'BRK-B', 'JPM', 'JNJ', 'V', 'PG', 'UNH', 'HD', 'MA',
    '^GSPC', '^DJI', '^IXIC', // Indices
    'ES=F', 'YM=F', 'NQ=F', // Futures

    // --- UK (en-GB) ---
    'HSBA.L', 'SHEL.L', 'AZN.L', 'RIO.L', 'BP.L', 'ULVR.L', 'GSK.L', 'DGE.L', 'BATS.L', 'REL.L', 'RKT.L', 'LSEG.L', 'VOD.L', 'LLOY.L', 'BARC.L',
    '^FTSE', '^FTMC', '^FTAI', // Indices

    // --- Germany (de) ---
    'SAP.DE', 'SIE.DE', 'ALV.DE', 'DTE.DE', 'AIR.DE', 'MBG.DE', 'BMW.DE', 'VOW3.DE', 'BAS.DE', 'IFX.DE', 'MUV2.DE', 'DB1.DE', 'BEI.DE', 'HEN3.DE',
    '^GDAXI', '^MDAXI', '^TECDAX', // Indices

    // --- France (fr) ---
    'MC.PA', 'OR.PA', 'TTE.PA', 'SAN.PA', 'AIR.PA', 'SU.PA', 'AI.PA', 'EL.PA', 'BNP.PA', 'KER.PA', 'CS.PA', 'DG.PA', 'ORA.PA', 'GLE.PA', 'LR.PA',
    '^FCHI', '^SBF120', // Indices

    // --- Spain (es) ---
    'ITX.MC', 'IBE.MC', 'SAN.MC', 'BBVA.MC', 'TEF.MC', 'AMS.MC', 'REP.MC', 'CABK.MC', 'AENA.MC', 'FER.MC', 'NTGY.MC', 'GRF.MC', 'ACS.MC', 'ENG.MC', 'MAP.MC',
    '^IBEX', // Indices

    // --- China/HK (zh) ---
    '0700.HK', '9988.HK', '0939.HK', '0941.HK', '1398.HK', '3690.HK', '2318.HK', '3988.HK', '0883.HK', '1299.HK', '1810.HK', '2015.HK', '1211.HK', '0386.HK', '2628.HK',
    '^HSI', '000001.SS', '399001.SZ', // Indices

    // --- Japan (ja) ---
    '7203.T', '6758.T', '9984.T', '9432.T', '8306.T', '6861.T', '6098.T', '8035.T', '4063.T', '7974.T', '8058.T', '9983.T', '4502.T', '6501.T', '7267.T',
    '^N225', // Indices

    // --- Brazil (pt) ---
    'PETR4.SA', 'VALE3.SA', 'ITUB4.SA', 'BBDC4.SA', 'PETR3.SA', 'ABEV3.SA', 'B3SA3.SA', 'WEGE3.SA', 'BBAS3.SA', 'ITSA4.SA', 'SUZB3.SA', 'GGBR4.SA', 'RENT3.SA', 'RDOR3.SA',
    '^BVSP' // Indices
];

// Helper to fetch ALL crypto prices from Binance in ONE request (more efficient)
// Weight: 4 (vs 10 for 10 separate calls)
let binancePriceCache: Map<string, number> = new Map();
let binanceCacheTime = 0;

// Mapping of Yahoo symbols to Binance symbols for non-crypto assets
const BINANCE_SPECIAL_MAP: { [yahooSymbol: string]: string } = {
    'GC=F': 'PAXGUSDT',      // Gold (PAXG = 1 troy ounce)
    'EURUSD=X': 'EURUSDT',   // EUR/USD forex
    'GBPUSD=X': 'GBPUSDT',   // GBP/USD forex
};

// Set of all symbols that should use Binance real-time data
const BINANCE_SYMBOLS = new Set([
    'BTC-USD', 'ETH-USD', 'SOL-USD', 'BNB-USD', 'XRP-USD',
    'ADA-USD', 'DOGE-USD', 'AVAX-USD', 'DOT-USD', 'MATIC-USD',
    'GC=F', 'EURUSD=X', 'GBPUSD=X'
]);

const fetchAllCryptoPrices = async (): Promise<Map<string, number>> => {
    try {
        // Cache for 2 seconds to avoid redundant calls
        if (Date.now() - binanceCacheTime < 2000 && binancePriceCache.size > 0) {
            return binancePriceCache;
        }

        // Fetch from Binance API with 5 second timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch('https://api.binance.com/api/v3/ticker/price', {
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`[Binance API] Failed with status: ${response.status}`);
            return binancePriceCache;
        }

        const data: { symbol: string; price: string }[] = await response.json();


        const prices = new Map<string, number>();

        // Map Binance symbols to Yahoo-style symbols
        // Create reverse mapping for special symbols (gold, forex)
        const binanceToYahoo: { [key: string]: string } = {};
        Object.entries(BINANCE_SPECIAL_MAP).forEach(([yahoo, binance]) => {
            binanceToYahoo[binance] = yahoo;
        });

        data.forEach(item => {
            // Check for special mappings (gold, forex)
            if (binanceToYahoo[item.symbol]) {
                prices.set(binanceToYahoo[item.symbol], parseFloat(item.price));
            }

            // Handle crypto (-USD suffix)
            if (item.symbol.endsWith('USDT')) {
                const yahooSymbol = item.symbol.replace('USDT', '-USD');
                prices.set(yahooSymbol, parseFloat(item.price));
            }
        });

        binancePriceCache = prices;
        binanceCacheTime = Date.now();
        return prices;
    } catch (error) {
        console.error('[Binance API] Fetch failed with error:', error);
        return binancePriceCache;
    }
};

// Legacy single-symbol fetch (kept for compatibility)
const fetchCryptoPrice = async (symbol: string): Promise<{ price: number, time: number } | null> => {
    const prices = await fetchAllCryptoPrices();
    const price = prices.get(symbol);
    if (price) {
        return { price, time: Date.now() };
    }
    return null;
};

// Helper to fetch history from Binance for all Binance-tracked assets
const fetchCryptoHistory = async (symbol: string, interval: string): Promise<any[]> => {
    // Only try 2 endpoints with a 5 second timeout each to prevent slow page loads
    const endpoints = [
        'https://api.binance.com',
        'https://data-api.binance.vision'
    ];

    // Convert Yahoo symbol to Binance symbol
    let binanceSymbol: string;
    if (BINANCE_SPECIAL_MAP[symbol]) {
        // Use special mapping for gold and forex
        binanceSymbol = BINANCE_SPECIAL_MAP[symbol];
    } else {
        // Standard crypto: BTC-USD -> BTCUSDT
        binanceSymbol = symbol.replace('-USD', 'USDT');
    }

    // Map intervals: 1m, 5m, 15m, 1h, 1d are same. 3h -> 4h (Binance doesn't have 3h)
    let binanceInterval = interval;
    if (interval === '3h') binanceInterval = '4h';
    else if (interval === '1mo') binanceInterval = '1M'; // Binance uses '1M' for monthly

    const limit = 500; // Fetch enough candles
    const TIMEOUT_MS = 5000; // 5 second timeout

    for (const endpoint of endpoints) {
        try {
            // Create AbortController for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

            const response = await fetch(
                `${endpoint}/api/v3/klines?symbol=${binanceSymbol}&interval=${binanceInterval}&limit=${limit}`,
                { signal: controller.signal }
            );

            clearTimeout(timeoutId);

            if (!response.ok) continue; // Try next endpoint

            const data = await response.json();
            // Binance response: [ [openTime, open, high, low, close, volume, closeTime, ...], ... ]
            const candles = data.map((d: any[]) => ({
                date: new Date(d[0]).toISOString(),
                open: parseFloat(d[1]),
                high: parseFloat(d[2]),
                low: parseFloat(d[3]),
                close: parseFloat(d[4]),
                volume: parseFloat(d[5]),
                price: parseFloat(d[4])
            }));

            if (candles.length > 0) return candles;
        } catch (error: any) {
            // Don't log timeout errors to reduce noise
            if (error.name !== 'AbortError') {
                console.warn(`Binance history fetch failed from ${endpoint}: ${error.message || error}`);
            }
            // Continue to next endpoint
        }
    }

    // Return empty - will fall back to Yahoo
    return [];
};

// Helper to update candle history for a specific interval
const updateCandleHistory = async (symbol: string, interval: string, price: number, volume: number, marketTime: number) => {
    try {
        let history = await getMarketHistory(symbol, interval);

        // Self-healing: Detect bad (flat) data for Crypto 1m and force refresh
        // This fixes the issue where previous fetch failures caused flat lines
        if (symbol.includes('-USD') && interval === '1m' && Array.isArray(history) && history.length > 10) {
            // Check last 50 candles (or all if less)
            const checkCount = Math.min(history.length, 50);
            const recentHistory = history.slice(-checkCount);
            const flatCandles = recentHistory.filter((h: any) => h.high === h.low).length;

            // If more than 20% of recent candles are flat, it's likely bad data
            if (flatCandles > checkCount * 0.2) {
                console.log(`[Repair] Detected bad data for ${symbol} ${interval} (${flatCandles}/${checkCount} flat). Forcing refresh...`);
                const fresh = await fetchHistory(symbol, interval, true);
                if (fresh && fresh.length > 0) {
                    history = fresh;
                    // We will save this updated history at the end of the function or right here
                    // The function saves at the end, so updating the 'history' variable is enough
                    // BUT we need to ensure the new data is persisted even if the current candle doesn't change much.
                    // So we force a save here to be safe, or just let the flow continue.
                    // Let's let the flow continue, but we must ensure 'lastPoint' logic works.
                    await saveMarketHistory(symbol, interval, history);
                }
            }
        }

        // Backfill if empty or insufficient data (ensure we have ~120 points if possible)
        const backfillKey = `${symbol}-${interval}`;
        if ((!Array.isArray(history) || history.length < 120) && !backfilledSymbols.has(backfillKey)) {
            // console.log(`Backfilling ${interval} history for ${symbol}...`);
            backfilledSymbols.add(backfillKey);
            // fetchHistory will fetch from Yahoo, slice to 120, and save to DB.
            const backfilled = await fetchHistory(symbol, interval, true); // Force fresh
            if (backfilled && backfilled.length > 0) {
                history = backfilled;
            } else {
                if (!Array.isArray(history)) history = [];
            }
        } else if (!Array.isArray(history)) {
            history = [];
        }

        // Determine candle size in ms
        let candleSize = 0;
        if (interval === '1m') candleSize = 60 * 1000;
        else if (interval === '5m') candleSize = 5 * 60 * 1000;
        else if (interval === '1h') candleSize = 60 * 60 * 1000;
        else return; // Should not happen for this helper

        const timestamp = marketTime;
        const candleStart = Math.floor(timestamp / candleSize) * candleSize;
        const candleStartDate = new Date(candleStart).toISOString();

        const lastPoint = history[history.length - 1];
        let lastPointTime = 0;
        if (lastPoint && lastPoint.date) {
            lastPointTime = new Date(lastPoint.date).getTime();
        }

        const isSameCandle = lastPoint && lastPointTime >= candleStart;

        if (isSameCandle) {
            // Check if anything changed to avoid unnecessary DB writes (WAL growth)
            if (lastPoint.close === price && lastPoint.high === price && lastPoint.low === price && (!volume || lastPoint.volume === volume)) {
                // No change in candle data, skip DB write
                return;
            }

            // Update existing candle
            lastPoint.close = price;
            lastPoint.price = price;
            if (price > lastPoint.high) lastPoint.high = price;
            if (price < lastPoint.low) lastPoint.low = price;
            if (volume) lastPoint.volume = volume;

            await saveMarketHistory(symbol, interval, history);
        } else {
            // Only create new candle if price has actually changed from last candle's close
            // This prevents creating flat candles when there's no trading activity
            if (lastPoint && lastPoint.close === price) {
                // Price hasn't changed, don't create a flat candle
                // Just skip this update - proper historical data will be fetched when needed
                return;
            }

            // Start new candle
            const newDataPoint = {
                date: candleStartDate,
                open: price,
                high: price,
                low: price,
                close: price,
                volume: volume || 0,
                price: price
            };

            history.push(newDataPoint);
            // Limit to 200 values to support indicators (charts will slice to 120)
            if (history.length > 200) history = history.slice(-200);
            await saveMarketHistory(symbol, interval, history);
        }
    } catch (error) {
        console.error(`Error updating ${interval} history for ${symbol}:`, error);
    }
};

export const updateMarketData = async () => {
    console.log('====================================');
    console.log(`[${new Date().toISOString()}] Fetching fresh market data (Batch Mode)...`);

    let items = [];

    try {
        // 1. Prepare Symbols
        const allSymbols = [...SYMBOLS];
        const results: any[] = [];

        // 2. Fetch ALL symbols from Yahoo first (maintains original ordering)
        let yahooRequests = 0;
        const BATCH_SIZE = 166;

        for (let i = 0; i < allSymbols.length; i += BATCH_SIZE) {
            const chunk = allSymbols.slice(i, i + BATCH_SIZE);
            try {
                const quotes = await yahooFinance.quote(chunk);
                yahooRequests++;
                results.push(...quotes);
            } catch (e) {
                console.error('Yahoo batch quote fetch failed:', e);
            }
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        console.log(`[Yahoo] Made ${yahooRequests} API requests for ${allSymbols.length} symbols.`);

        // 3. Overwrite Binance assets with real-time prices (keeps original position)
        const binanceAssets = SYMBOLS.filter(s => BINANCE_SYMBOLS.has(s));
        const binancePrices = await fetchAllCryptoPrices();

        let binanceUpdated = 0;
        binanceAssets.forEach(symbol => {
            const price = binancePrices.get(symbol);
            if (price) {
                const existingIndex = results.findIndex(r => r.symbol === symbol);
                const binanceQuote = {
                    symbol: symbol,
                    regularMarketPrice: price,
                    regularMarketTime: new Date(),
                    regularMarketVolume: 0,
                    shortName: symbol.replace('-USD', '').replace('=F', '').replace('=X', ''),
                    regularMarketChangePercent: existingIndex >= 0 ? results[existingIndex]?.regularMarketChangePercent || 0 : 0
                };

                if (existingIndex >= 0) {
                    results[existingIndex] = { ...results[existingIndex], ...binanceQuote };
                } else {
                    results.push(binanceQuote);
                }
                binanceUpdated++;
            }
        });
        console.log(`[Binance] Updated ${binanceUpdated}/${binanceAssets.length} assets with real-time prices`);

        // 4. Process Results
        const processedItems = await Promise.all(results.map(async (quote: any) => {
            try {
                const symbol = quote.symbol;
                const price = quote.regularMarketPrice;
                const marketTime = quote.regularMarketTime ? new Date(quote.regularMarketTime).getTime() : Date.now();
                const volume = quote.regularMarketVolume || 0;

                if (!price) return null;

                // Update 1m, 5m, 1h databases
                await updateCandleHistory(symbol, '1m', price, volume, marketTime);
                await updateCandleHistory(symbol, '5m', price, volume, marketTime);
                await updateCandleHistory(symbol, '1h', price, volume, marketTime);

                // For Sparkline (Main Page):
                // Instead of fetching 1d history every minute (which is 60 requests),
                // we will read from our local DB. The DB is updated daily via cron.
                // If DB is empty, we might return empty or trigger a background fetch?
                // For now, just read DB.
                const history1d = await getMarketHistory(symbol, '1d');

                // Determine Type
                let type = 'stock';
                if (symbol.includes('-USD')) type = 'crypto';
                else if (['GC=F', 'SI=F', 'CL=F', 'NG=F', 'HG=F', 'PL=F', 'PA=F', 'ZC=F', 'ZS=F', 'ZW=F'].includes(symbol)) type = 'commodity';
                else if (symbol.endsWith('=X')) type = 'forex';
                else if (symbol.startsWith('^')) type = 'index';
                else if (symbol.endsWith('=F')) type = 'future';

                return {
                    id: symbol,
                    symbol: symbol.replace('-USD', '').replace('=F', '').replace('=X', ''),
                    name: quote.shortName || quote.longName || symbol,
                    price: price,
                    change24h: quote.regularMarketChangePercent || 0,
                    type: type,
                    sparkline: Array.isArray(history1d) ? history1d.slice(-90) : []
                };
            } catch (err) {
                console.error(`Error processing ${quote.symbol}:`, err);
                return null;
            }
        }));

        items = processedItems.filter(item => item !== null);

    } catch (error) {
        console.error("Fetch failed:", error);
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
        console.log(`✓ Market data updated. Total: ${items.length}`);
    } else {
        console.error("Failed to update market data from any source.");
    }
    console.log('====================================');
};


const backfilledSymbols = new Set<string>();

export const fetchHistory = async (symbol: string, interval: string = '5m', forceFresh: boolean = false) => {
    try {
        // Check DB for all supported intervals
        if (!forceFresh && ['1m', '5m', '1h', '1d', '1mo'].includes(interval)) {
            const cached = await getMarketHistoryWithMeta(symbol, interval);

            if (cached && cached.data.length > 0) {
                const now = new Date();
                const lastUpdated = new Date(cached.lastUpdated);
                const diffMs = now.getTime() - lastUpdated.getTime();

                // Staleness thresholds
                let staleThreshold = 0;
                if (interval === '1m') staleThreshold = 60 * 1000; // 1 min
                else if (interval === '5m') staleThreshold = 5 * 60 * 1000; // 5 min
                else if (interval === '1h') staleThreshold = 60 * 60 * 1000; // 1 hour
                else if (interval === '1d') staleThreshold = 60 * 60 * 1000; // 1 hour (daily updates are scheduled, but we allow 1h staleness for reads)
                else if (interval === '1mo') staleThreshold = 24 * 60 * 60 * 1000; // 1 day

                if (diffMs < staleThreshold) {
                    // console.log(`Using cached data for ${symbol} (${interval})`);
                    return cached.data;
                }
                // If stale, we might want to fetch fresh, BUT for 1m/5m/1h/1d/1mo we rely on the CRON jobs to keep them updated.
                // However, if the DB is empty or very old, we should probably do an initial fetch.
                // For now, if it's stale, we'll try to fetch fresh from Yahoo just in case the cron isn't running or it's a new symbol.
            }
        }

        // ... (Existing fetch logic for fallback/initial population) ...
        // Map interval
        let periodDays = 1;
        let queryInterval: any = interval;

        switch (interval) {
            case '1m': periodDays = 2; break; // Reduced from 7 to 2 to ensure Yahoo fallback works reliably
            case '5m': periodDays = 5; break;
            case '15m': periodDays = 10; break;
            case '1h': periodDays = 60; break;
            case '3h': periodDays = 90; queryInterval = '1h'; break;
            case '1d': periodDays = 730; break;
            case '1w': periodDays = 3650; queryInterval = '1wk'; break;
            case '1mo': periodDays = 3650; queryInterval = '1mo'; break; // Monthly
            case 'All': periodDays = 3650; queryInterval = '1mo'; break; // Use Monthly for All
            default: periodDays = 1;
        }

        let queryOptions: any = {
            period1: new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000),
            interval: queryInterval
        };

        let historyData: any[] = [];

        // Use Binance for all Binance-tracked assets (crypto, gold, forex)
        // This ensures chart data comes from Binance, not Yahoo
        if (BINANCE_SYMBOLS.has(symbol)) {
            historyData = await fetchCryptoHistory(symbol, interval);
        }

        if (historyData.length === 0) {
            try {
                // Use historical() for daily/weekly/monthly as it's more reliable for US stocks
                if (['1d', '1wk', '1mo'].includes(queryInterval)) {
                    const chartResult = await yahooFinance.chart(symbol, {
                        period1: queryOptions.period1,
                        period2: new Date(), // End date (now)
                        interval: queryInterval
                    });

                    if (chartResult && chartResult.quotes && chartResult.quotes.length > 0) {
                        historyData = chartResult.quotes
                            .filter((q: any) => q.close !== null)
                            .map((q: any) => ({
                                date: q.date.toISOString(),
                                open: q.open, high: q.high, low: q.low, close: q.close, volume: q.volume, price: q.close
                            }));
                    }
                }
            } catch (e) {
                console.error(`Historical fetch failed for ${symbol}:`, e);
            }

            // Fallback to chart() if historical failed or for intraday
            if (historyData.length === 0) {
                let result: any = await yahooFinance.chart(symbol, queryOptions);

                // If we didn't get enough data, try expanding the range (except for 1m which is limited)
                if ((!result.quotes || result.quotes.length < 120) && interval !== '1m') {
                    // Try a much longer period to ensure we fill the chart
                    let extendedDays = periodDays * 5;
                    if (interval === '5m') extendedDays = 55; // Max ~60 days
                    if (interval === '1h') extendedDays = 700; // Max ~730 days

                    queryOptions.period1 = new Date(Date.now() - extendedDays * 24 * 60 * 60 * 1000);
                    try {
                        const extendedResult = await yahooFinance.chart(symbol, queryOptions) as any;
                        if (extendedResult && extendedResult.quotes && (extendedResult.quotes as any[]).length > ((result as any).quotes?.length || 0)) {
                            result = extendedResult;
                        }
                    } catch (e) {
                        // Ignore extension error, use what we have
                    }
                }

                if (!result.quotes || result.quotes.length === 0) {
                    // Last resort fallback
                    queryOptions.period1 = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
                    try {
                        result = await yahooFinance.chart(symbol, queryOptions);
                    } catch (e) { }
                }
                if (result && result.quotes) {
                    historyData = result.quotes
                        .filter((q: any) => q.close !== null)
                        .map((q: any) => ({
                            date: q.date.toISOString(),
                            open: q.open, high: q.high, low: q.low, close: q.close, volume: q.volume, price: q.close
                        }));
                }
            }
        }

        if (historyData.length === 0) return [];

        // Limit to 200 values to support indicators (charts will slice to 120)
        if (historyData.length > 200) historyData = historyData.slice(-200);

        // Save to DB
        if (['1m', '5m', '1h', '1d', '1mo'].includes(interval) && historyData.length > 0) {
            await saveMarketHistory(symbol, interval, historyData);
        }

        return historyData;
    } catch (error) {
        console.error(`Error fetching history for ${symbol} (${interval}):`, error);
        return [];
    }
};

export const updateDailyCandles = async () => {
    console.log(`[${new Date().toISOString()}] Running Daily Candle Update...`);
    await updateLongTermCandles('1d', 7); // Check last 7 days
};

export const updateMonthlyCandles = async () => {
    console.log(`[${new Date().toISOString()}] Running Monthly Candle Update...`);
    await updateLongTermCandles('1mo', 365); // Check last year
};

// Helper for Daily/Monthly updates
const updateLongTermCandles = async (interval: string, daysBack: number) => {
    for (const symbol of SYMBOLS) {
        try {
            let history = await getMarketHistory(symbol, interval);
            if (!Array.isArray(history)) history = [];

            const queryOptions: any = {
                period1: new Date(Date.now() - daysBack * 24 * 60 * 60 * 1000),
                interval: interval === '1mo' ? '1mo' : '1d'
            };

            let newCandles: any[] = [];


            if (symbol.includes('-USD')) {
                const cryptoHistory = await fetchCryptoHistory(symbol, interval);
                newCandles = cryptoHistory.slice(-10);
            } else {
                try {
                    const result = await yahooFinance.chart(symbol, queryOptions) as any;
                    if (result && result.quotes && Array.isArray(result.quotes)) {
                        newCandles = (result.quotes as any[])
                            .filter((q: any) => q.close !== null)
                            .map((q: any) => ({
                                date: q.date.toISOString(),
                                open: q.open, high: q.high, low: q.low, close: q.close, volume: q.volume, price: q.close
                            }));
                    }
                } catch (yError) {
                    // console.warn(`Yahoo fetch failed for ${symbol} ${interval}`);
                }
            }


            if (newCandles.length === 0) continue;

            let updated = false;
            for (const candle of newCandles) {
                if (!candle.date) continue;
                const candleDate = candle.date.split('T')[0]; // YYYY-MM-DD
                // For monthly, we might want to check YYYY-MM
                const compareLen = interval === '1mo' ? 7 : 10; // 2023-01 vs 2023-01-01

                const existingIndex = history.findIndex((h: any) => h.date && h.date.substring(0, compareLen) === candleDate.substring(0, compareLen));

                if (existingIndex !== -1) {
                    const existing = history[existingIndex];
                    if (existing.close !== candle.close || existing.high !== candle.high || existing.low !== candle.low) {
                        history[existingIndex] = candle;
                        updated = true;
                    }
                } else {
                    history.push(candle);
                    updated = true;
                }
            }

            if (updated) {
                // Limit to 200 values to support indicators (charts will slice to 120)
                if (history.length > 200) history = history.slice(-200);
                await saveMarketHistory(symbol, interval, history);
            }
        } catch (error) {
            console.error(`Error updating ${interval} candles for ${symbol}:`, error);
        }
    }
    console.log(`[${new Date().toISOString()}] ${interval} Update Complete.`);
};
