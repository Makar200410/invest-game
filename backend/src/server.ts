import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import yahooFinance from 'yahoo-finance2';
import { initDB, getUser, createUser, updateUser, getUsers, getUsersByIp, getMarketItems, getMarketHistory } from './services/storage.js';
import { updateMarketData, fetchHistory } from './services/fetcher.js';
import { calculateRSI, calculateMACD, calculateBollingerBands } from './services/indicators.js';
import newsRoutes from './routes/news.js';

import compression from 'compression';

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
    const items = await getMarketItems();
    // Optimize payload: Only send last 60 points for sparkline and only necessary fields
    const optimizedItems = items.map(item => ({
        ...item,
        sparkline: item.sparkline ? item.sparkline.slice(-60).map((p: any) => ({
            price: p.price || p.close,
            date: p.date,
            open: p.open,
            high: p.high,
            low: p.low,
            close: p.close || p.price
        })) : []
    }));
    res.json(optimizedItems);
});

app.get('/api/history/:symbol', async (req, res) => {
    const { symbol } = req.params;
    let yahooSymbol = symbol;
    if (!['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA'].includes(symbol)) {
        if (!symbol.includes('-USD')) yahooSymbol += '-USD';
    }

    // Try to get from DB first (cache)
    let history = await getMarketHistory(yahooSymbol, '5m');

    // If empty, fetch fresh
    if (!history || history.length === 0) {
        history = await fetchHistory(yahooSymbol);
    }

    res.json(history);
});

app.get('/api/history/:symbol/:interval', async (req, res) => {
    const { symbol, interval } = req.params;
    let yahooSymbol = symbol;
    if (!['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA'].includes(symbol)) {
        if (!symbol.includes('-USD')) yahooSymbol += '-USD';
    }

    try {
        const history = await fetchHistory(yahooSymbol, interval);
        res.json(history);
    } catch (error) {
        console.error(`Error fetching history for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});

app.get('/api/indicators/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const { interval } = req.query; // Get interval from query params
    const queryInterval = (interval as string) || '1d'; // Default to 1d

    let yahooSymbol = symbol;
    if (!['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA'].includes(symbol)) {
        if (!symbol.includes('-USD')) yahooSymbol += '-USD';
    }

    try {
        // Fetch history with the requested interval
        const history: any[] = await fetchHistory(yahooSymbol, queryInterval);
        const prices = history.map((h: any) => h.close); // Use close price for indicators

        const rsi = calculateRSI(prices);
        const macd = calculateMACD(prices);
        const bb = calculateBollingerBands(prices);

        // Align data with dates
        const result = history.map((h: any, i: number) => ({
            date: h.date,
            price: h.close, // Use close as price
            open: h.open,
            high: h.high,
            low: h.low,
            close: h.close,
            volume: h.volume,
            rsi: rsi[i],
            macd: macd.macd[i],
            macdSignal: macd.signal[i],
            macdHistogram: macd.histogram[i],
            bbUpper: bb.upper[i],
            bbLower: bb.lower[i],
            bbMiddle: bb.middle[i]
        }));

        res.json(result);
    } catch (error) {
        console.error(`Error calculating indicators for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to calculate indicators' });
    }
});

app.get('/api/fundamentals/:symbol', async (req, res) => {
    const { symbol } = req.params;
    let yahooSymbol = symbol;
    if (!['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA'].includes(symbol)) {
        if (!symbol.includes('-USD')) yahooSymbol += '-USD';
    }

    try {
        const yf = new yahooFinance();
        const summary = await yf.quoteSummary(yahooSymbol, {
            modules: ['summaryDetail', 'financialData', 'defaultKeyStatistics', 'assetProfile']
        });
        res.json(summary);
    } catch (error: any) {
        console.error(`Error fetching fundamentals for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to fetch fundamentals', details: error.message });
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
        // Return detailed error for debugging
        res.status(500).json({ error: `Registration failed: ${error.message || String(error)}` });
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
