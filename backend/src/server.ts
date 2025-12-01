
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cron from 'node-cron';
import yahooFinance from 'yahoo-finance2';
import newsRoutes from './routes/news.js';
import {
    initDB,
    getUsers,
    getUser,
    getUsersByIp,
    createUser,
    updateUser,
    addAssetComment,
    getAssetComments,
    toggleLikeComment,
    getMarketItems,
    getMarketHistory,
    getInsiderTips,
    addInsiderTip,
    deleteAssetComment
} from './services/storage.js';
import { updateMarketData, fetchHistory, fetchYahooAnalysis, updateDailyCandles, updateMonthlyCandles, updateFundamentals } from './services/fetcher.js';
import {
    calculateRSI, calculateStoch, calculateStochRSI, calculateMACDValue, calculateATR,
    calculateADX, calculateCCI, calculateHighsLows, calculateROC, calculateWilliamsR,
    calculateBullBearPower, calculateUO, calculatePivotPoints, calculateSMA, calculateEMA,
    getAction, getMAAction, getYahooIndicators, type PivotPoints
} from './services/indicators.js';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());
app.use(compression()); // Enable gzip compression
app.use(express.json());

// Initialize Database
console.log('Checking DATABASE_URL...');
if (!process.env.DATABASE_URL) {
    console.error('CRITICAL: DATABASE_URL is not defined! The server will likely fail to connect to the database.');
} else {
    console.log('DATABASE_URL is defined (starts with):', process.env.DATABASE_URL.substring(0, 10) + '...');
}

initDB().then(async () => {
    try {
        const users = await getUsers();
        console.log(`Startup DB Check: Found ${users.length} users in the database.`);

        // Seed Insider Tips if empty
        const tips = await getInsiderTips();
        if (tips.length === 0) {
            console.log('Seeding initial insider tips...');
            const initialTips = [
                {
                    title: "Tech Giant Merger Rumors",
                    content: "Sources suggest a major acquisition in the tech sector is imminent. Watch for movement in mid-cap tech stocks.",
                    impact: "High",
                    reliability: "Verified",
                    url: "#"
                },
                {
                    title: "Regulatory Crackdown on Crypto",
                    content: "New regulations regarding stablecoins are being drafted. Expect volatility in the crypto market next week.",
                    impact: "High",
                    reliability: "High",
                    url: "#"
                },
                {
                    title: "Oil Reserves Depleting",
                    content: "Unexpected report on oil reserves shows lower than expected levels. Energy sector might see a boost.",
                    impact: "Medium",
                    reliability: "Medium",
                    url: "#"
                }
            ];

            for (const tip of initialTips) {
                await addInsiderTip({
                    id: Math.random().toString(36).substring(2, 15),
                    ...tip,
                    date: Date.now()
                });
            }
        }
    } catch (e) {
        console.error('Startup DB Check Failed:', e);
    }
});

// Register Routes
console.log('Registering /api/news route...');
app.use('/api/news', newsRoutes);
app.get('/api/test', (req, res) => res.send('Test working'));

// Debug Endpoint
app.get('/api/debug/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json({
            count: users.length,
            users: users.map(u => ({ username: u.username, id: u.id, portfolio: u.portfolioValue })),
            db_url_prefix: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : 'UNDEFINED'
        });
    } catch (error) {
        res.status(500).json({ error: String(error) });
    }
});

console.log('Route registered.');

// Initial fetch
updateMarketData();

// Schedule updates every 1 minute
cron.schedule('* * * * *', () => {
    updateMarketData();
});

// Schedule daily history update at midnight (00:00)
cron.schedule('0 0 * * *', () => {
    updateDailyCandles();
});

// Schedule monthly history update at midnight on the 1st of every month
cron.schedule('0 0 1 * *', () => {
    updateMonthlyCandles();
});

// Schedule fundamentals update every 30 minutes
cron.schedule('*/30 * * * *', () => {
    updateFundamentals();
});

// Endpoints

app.get('/api/health', async (req, res) => {
    try {
        // Simple query to check DB connection
        await getMarketItems();
        res.json({ status: 'ok', database: 'connected', timestamp: new Date().toISOString() });
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(500).json({ status: 'error', database: 'disconnected', error: String(error) });
    }
});

app.get('/api/market', async (req, res) => {
    const { pricesOnly } = req.query;
    const items = await getMarketItems();

    // Optimize payload
    const optimizedItems = items.map(item => {
        const base = {
            ...item,
            sparkline: undefined // Clear by default to rebuild or omit
        };

        if (pricesOnly === 'true') {
            // Return only price data, no sparklines
            return {
                id: item.id,
                symbol: item.symbol,
                name: item.name,
                price: item.price,
                change24h: item.change24h,
                type: item.type,
                high24h: item.high24h,
                low24h: item.low24h
            };
        }

        // Return full data with optimized sparkline
        return {
            ...item,
            sparkline: item.sparkline ? item.sparkline.slice(-90).map((p: any) => ({
                price: p.price || p.close,
                date: p.date,
                open: p.open,
                high: p.high,
                low: p.low,
                close: p.close || p.price
            })) : []
        };
    });

    res.json(optimizedItems);
});

app.get('/api/history/:symbol', async (req, res) => {
    const { symbol } = req.params;
    // Don't modify the symbol - use it as-is since it comes from the market data
    const yahooSymbol = symbol;

    // Try to get from DB first (cache)
    let history = await getMarketHistory(yahooSymbol, '5m');

    // If empty, fetch fresh
    if (!history || history.length === 0) {
        history = await fetchHistory(yahooSymbol);
    }

    // Slice to 120 for chart display
    res.json(history.slice(-120));
});

app.get('/api/history/:symbol/:interval', async (req, res) => {
    const { symbol, interval } = req.params;
    // Don't modify the symbol - use it as-is since it comes from the market data
    const yahooSymbol = symbol;

    try {
        const history = await fetchHistory(yahooSymbol, interval);
        // Slice to 120 for chart display
        res.json(history.slice(-120));
    } catch (error) {
        console.error(`Error fetching history for ${symbol}:`, error);
        res.json([]);
    }
});



// ...

app.get('/api/indicators/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const { interval } = req.query;
    const queryInterval = (interval as string) || '1d';
    const yahooSymbol = symbol; // Symbol is already formatted correctly in most cases

    try {
        // We need enough history for calculations (e.g. MA200 needs 200 points)
        // Fetch 300 points to be safe
        // Note: fetchHistory logic might need to be ensured to return enough points if '1d' is requested.
        // The fetcher currently returns all for '1d', so we are good.
        let history: any[] = await fetchHistory(yahooSymbol, queryInterval);

        console.log(`[Indicators] Symbol: ${yahooSymbol}, History Length: ${history.length}`);

        // Retry with forceFresh if data is insufficient
        if (history.length < 50) {
            console.log(`[Indicators] Insufficient history for ${yahooSymbol} (${history.length}). Retrying with forceFresh...`);
            history = await fetchHistory(yahooSymbol, queryInterval, true);
            console.log(`[Indicators] Retry result for ${yahooSymbol}: ${history.length} items`);
        }

        if (history.length < 15) { // Absolute minimum for RSI(14)
            return res.status(400).json({ error: 'Not enough data for technical analysis' });
        }

        const closes = history.map(h => h.close || h.price); // Handle potential 'price' property
        const highs = history.map(h => h.high || h.close || h.price); // Fallback
        const lows = history.map(h => h.low || h.close || h.price); // Fallback
        const currentPrice = closes[closes.length - 1];

        console.log(`[Indicators] Current Price: ${currentPrice}`);
        const currentHigh = highs[highs.length - 1];
        const currentLow = lows[lows.length - 1];

        // --- Pivot Points ---
        const pivotPoints = calculatePivotPoints(currentHigh, currentLow, currentPrice);

        // --- Moving Averages ---
        const maPeriods = [5, 10, 20, 50, 100, 200];
        const movingAverages = maPeriods.map(period => {
            const sma = calculateSMA(closes, period);
            const ema = calculateEMA(closes, period);
            return {
                period,
                simple: sma,
                simpleAction: sma ? getMAAction(currentPrice, sma) : 'Neutral',
                exponential: ema,
                exponentialAction: ema ? getMAAction(currentPrice, ema) : 'Neutral'
            };
        });

        // --- Yahoo Analysis ---
        const yahooData = await fetchYahooAnalysis(yahooSymbol);
        const yahooIndicators = getYahooIndicators(yahooData, currentPrice);

        // --- Technical Indicators ---
        const rsi = calculateRSI(closes, 14);
        const stoch = calculateStoch(highs, lows, closes, 9, 6);
        const stochRsi = calculateStochRSI(closes, 14);
        const macd = calculateMACDValue(closes);
        const atr = calculateATR(highs, lows, closes, 14);
        const adx = calculateADX(highs, lows, closes, 14);
        const cci = calculateCCI(highs, lows, closes, 14);
        const highsLows = calculateHighsLows(highs, lows, 14);
        const roc = calculateROC(closes, 14);
        const williams = calculateWilliamsR(highs, lows, closes, 14);
        const bullBear = calculateBullBearPower(highs, lows, closes, 13);
        const uo = calculateUO(highs, lows, closes);

        const calculatedIndicators = [
            { name: 'RSI(14)', value: rsi, action: rsi ? getAction('RSI', rsi) : 'Neutral' },
            { name: 'STOCH(9,6)', value: stoch?.k, action: stoch ? getAction('STOCH', stoch.k) : 'Neutral' },
            { name: 'STOCHRSI(14)', value: stochRsi, action: stochRsi ? getAction('STOCHRSI', stochRsi) : 'Neutral' },
            { name: 'MACD(12,26)', value: macd, action: macd ? getAction('MACD', macd) : 'Neutral' },
            { name: 'ATR(14)', value: atr, action: atr ? getAction('ATR', atr) : 'Neutral' },
            { name: 'ADX(14)', value: adx, action: 'Buy' }, // Placeholder
            { name: 'CCI(14)', value: cci, action: cci ? getAction('CCI', cci) : 'Neutral' },
            { name: 'Highs/Lows(14)', value: highsLows, action: 'Buy' }, // Placeholder
            { name: 'UO', value: uo, action: 'Buy' }, // Placeholder
            { name: 'ROC', value: roc, action: roc ? getAction('ROC', roc) : 'Neutral' },
            { name: 'WilliamsR', value: williams, action: williams ? getAction('WilliamsR', williams) : 'Neutral' },
            { name: 'BullBear(13)', value: bullBear, action: bullBear ? getAction('BullBear', bullBear) : 'Neutral' }
        ];

        // Combine Calculated and Yahoo Indicators
        const indicators = [...calculatedIndicators, ...yahooIndicators];

        // --- Summary ---
        let buyCount = 0;
        let sellCount = 0;
        let neutralCount = 0;

        // Count from MAs
        movingAverages.forEach(ma => {
            if (ma.simpleAction === 'Buy') buyCount++; else if (ma.simpleAction === 'Sell') sellCount++; else neutralCount++;
            if (ma.exponentialAction === 'Buy') buyCount++; else if (ma.exponentialAction === 'Sell') sellCount++; else neutralCount++;
        });

        // Count from Indicators (including Yahoo ones)
        indicators.forEach(ind => {
            if (ind.action === 'Buy' || ind.action === 'Strong Buy' || ind.action.includes('Upside')) buyCount++;
            else if (ind.action === 'Sell' || ind.action === 'Strong Sell' || ind.action.includes('Downside')) sellCount++;
            else neutralCount++;
        });

        let recommendation = 'Neutral';
        if (buyCount > sellCount + 5) recommendation = 'Strong Buy';
        else if (buyCount > sellCount) recommendation = 'Buy';
        else if (sellCount > buyCount + 5) recommendation = 'Strong Sell';
        else if (sellCount > buyCount) recommendation = 'Sell';

        res.json({
            pivotPoints,
            movingAverages,
            indicators,
            summary: {
                buy: buyCount,
                sell: sellCount,
                neutral: neutralCount,
                recommendation
            }
        });

    } catch (error) {
        console.error(`Error calculating indicators for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to calculate indicators' });
    }
});

app.get('/api/fundamentals/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const yahooSymbol = symbol;

    try {
        // Use the fetcher service which handles caching/DB
        const summary = await fetchYahooAnalysis(yahooSymbol);

        if (!summary) {
            return res.status(404).json({ error: 'Fundamentals not found' });
        }

        res.json(summary);
    } catch (error: any) {
        console.error(`Error fetching fundamentals for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to fetch fundamentals', details: error.message });
    }
});

// Insider Info Endpoints
app.get('/api/insider', async (req, res) => {
    try {
        const tips = await getInsiderTips();
        res.json(tips);
    } catch (error) {
        console.error('Error fetching insider tips:', error);
        res.status(500).json({ error: 'Failed to fetch insider tips' });
    }
});

app.post('/api/insider', async (req, res) => {
    const { title, content, impact, reliability, url } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const newTip = {
        id: Math.random().toString(36).substring(2, 15),
        title,
        content,
        impact: impact || 'Medium',
        reliability: reliability || 'Unverified',
        date: Date.now(),
        url: url || '#'
    };

    try {
        await addInsiderTip(newTip);
        res.json({ success: true, tip: newTip });
    } catch (error) {
        console.error('Error adding insider tip:', error);
        res.status(500).json({ error: 'Failed to add insider tip' });
    }
});

// Asset Comments Endpoints
app.get('/api/comments/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        const comments = await getAssetComments(symbol);
        res.json(comments);
    } catch (error) {
        console.error(`Error fetching comments for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

app.post('/api/comments', async (req, res) => {
    const { symbol, username, content, parentId } = req.body;
    if (!symbol || !username || !content) {
        return res.status(400).json({ error: 'Symbol, username, and content are required' });
    }

    const newComment = {
        id: Math.random().toString(36).substring(2, 15),
        symbol,
        username,
        content,
        timestamp: Date.now(),
        parentId
    };

    try {
        await addAssetComment(newComment);
        res.json({ success: true, comment: newComment });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Failed to add comment' });
    }
});

app.delete('/api/comments/:id', async (req, res) => {
    const { id } = req.params;
    const { username } = req.body; // User requesting deletion

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        await deleteAssetComment(id, username);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

app.post('/api/comments/:id/like', async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const likes = await toggleLikeComment(id, username);
        res.json({ success: true, likes });
    } catch (error) {
        console.error('Error toggling like:', error);
        res.status(500).json({ error: 'Failed to toggle like' });
    }
});

// Auth & Rating Endpoints

app.post('/api/register', async (req, res) => {
    console.log('Register request received:', req.body.username);
    const { username, password, email } = req.body;
    // Get IP address
    const ip = req.ip || req.connection.remoteAddress || 'unknown';

    if (!username || !password) {
        console.log('Registration failed: Missing username or password');
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {
        const existingUser = await getUser(username);
        if (existingUser) {
            console.log('Registration failed: User already exists', username);
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Check IP Limit
        const usersOnIp = await getUsersByIp(String(ip));
        if (usersOnIp.length >= 4) {
            console.log('Registration failed: IP limit reached', ip);
            return res.status(403).json({ error: 'Registration limit reached for this IP address (Max 4 accounts).' });
        }

        const INITIAL_GAME_STATE = {
            balance: 10000,
            loan: 0,
            portfolio: [],
            leveragedPositions: [],
            shortPositions: [],
            orders: [],
            skills: {
                stopLossMaster: false,
                leverageTrading: false,
                shortSelling: false,
                multiTimeframe: false,
                dayTrader: false,
                technicalAnalyst: false,
                fundamentalAnalyst: false,
                portfolioManager: false,
                marketTimer: false,
                riskManager: false,
                newsAlert: false,
                insiderInfo: false
            },
            lastLogin: null,
            skillPoints: 0,
            tradesToday: 0,
            lastTradeDate: null
        };

        const newUser = {
            id: Math.random().toString(36).substring(2, 15),
            username,
            password,
            ip: String(ip),
            email: email || '',
            gameState: INITIAL_GAME_STATE,
            portfolioValue: 10000,
            lastActive: new Date().toISOString()
        };

        await createUser(newUser);
        console.log('User registered successfully:', username);
        res.json({ success: true, user: { id: newUser.id, username: newUser.username, portfolioValue: newUser.portfolioValue, gameState: newUser.gameState } });
    } catch (error: any) {
        console.error('Registration error:', error);

        let errorMessage = error.message || String(error);
        if (error.name === 'AggregateError' && error.errors) {
            errorMessage += ` (Inner: ${error.errors.map((e: any) => e.message).join(', ')})`;
        }

        // Return detailed error for debugging
        res.status(500).json({ error: `Registration failed: ${errorMessage}` });
    }
});

app.post('/api/login', async (req, res) => {
    console.log('Login request received. Body:', JSON.stringify(req.body, null, 2));
    const { username, password } = req.body;

    try {
        const user = await getUser(username);

        if (!user) {
            console.log(`Login failed: User '${username}' not found in DB.`);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (user.password !== password) {
            console.log(`Login failed: Password mismatch for '${username}'. Received: '${password}', Expected: '${user.password}'`);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log('User logged in successfully:', username);
        res.json({ success: true, user: { id: user.id, username: user.username, portfolioValue: user.portfolioValue, gameState: user.gameState } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error during login' });
    }
});

app.post('/api/sync', async (req, res) => {
    const { username, gameState } = req.body;
    if (!username || !gameState) {
        return res.status(400).json({ error: 'Missing data' });
    }

    // Update portfolio value for leaderboard
    const portfolioValue = gameState.balance + (gameState.portfolio ? gameState.portfolio.reduce((acc: number, item: any) => acc + (item.amount * item.avgPrice), 0) : 0);

    await updateUser(username, {
        gameState,
        portfolioValue: gameState.netWorth || portfolioValue,
        lastActive: new Date().toISOString()
    });

    res.json({ success: true });
});

app.post('/api/recover', async (req, res) => {
    const { username, email, newPassword } = req.body;
    const user = await getUser(username);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (user.email && user.email !== email) {
        return res.status(403).json({ error: 'Email does not match records' });
    }

    if (!user.email) {
        return res.status(400).json({ error: 'No recovery email set for this account. Cannot reset.' });
    }

    await updateUser(username, { password: newPassword });
    res.json({ success: true, message: 'Password reset successfully' });
});

app.post('/api/update-score', async (req, res) => {
    const { username, portfolioValue } = req.body;
    if (!username || portfolioValue === undefined) {
        return res.status(400).json({ error: 'Missing data' });
    }

    await updateUser(username, {
        portfolioValue: Number(portfolioValue),
        lastActive: new Date().toISOString()
    });

    res.json({ success: true });
});

app.get('/api/leaderboard', async (req, res) => {
    const users = await getUsers();
    const leaderboard = users
        .sort((a, b) => b.portfolioValue - a.portfolioValue)
        .map(u => ({
            username: u.username,
            portfolioValue: u.portfolioValue
        }));

    res.json(leaderboard);
});

// Listen on all network interfaces (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on port ${PORT}`);
    console.log('Features active: Market Data, News, Indicators, Player DB');
});
