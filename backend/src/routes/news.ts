import express from 'express';
import { getMarketNews } from '../services/storage.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YahooFinance from 'yahoo-finance2';

const router = express.Router();
const yahooFinance = new YahooFinance();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface TickerTickStory {
    id: string;
    title: string;
    url: string;
    site: string;
    time: number;
    favicon_url?: string;
    tags?: string[];
    tickers?: string[];
}

// Cache for general news to avoid hitting rate limits (10 req/min)
let newsCache: { data: TickerTickStory[], timestamp: number } | null = null;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

router.get('/', async (req, res) => {
    try {
        // 1. Try DB first
        const dbNews = await getMarketNews();
        if (dbNews.length > 0) {
            return res.json(dbNews);
        }

        // 2. Fallback to TickerTick/Cache
        const now = Date.now();
        if (newsCache && (now - newsCache.timestamp < CACHE_DURATION)) {
            return res.json(newsCache.data);
        }

        const response = await fetch('https://api.tickertick.com/feed?q=z:SPY&n=50');
        if (!response.ok) throw new Error(`TickerTick API error: ${response.statusText}`);

        const data = await response.json();
        if (data.stories) {
            newsCache = {
                data: data.stories as TickerTickStory[],
                timestamp: now
            };
            res.json(data.stories);
        } else {
            throw new Error("No stories found");
        }
    } catch (error) {
        console.error('Error fetching news, falling back to repository:', error);
        try {
            const repoPath = path.join(__dirname, '../news_repository.json');
            if (fs.existsSync(repoPath)) {
                const repoData = JSON.parse(fs.readFileSync(repoPath, 'utf-8'));
                res.json(repoData);
            } else {
                res.json([]);
            }
        } catch (repoError) {
            res.json([]);
        }
    }
});

// Insider Info Endpoint
router.get('/insider', async (req, res) => {
    try {
        const response = await fetch('https://api.tickertick.com/feed?q=z:AAPL,z:TSLA,z:NVDA,z:BTC-USD&n=20');
        let stories: any[] = [];
        if (response.ok) {
            const data = await response.json();
            if (data.stories) {
                stories = data.stories.map((s: any) => ({
                    id: s.id,
                    title: s.title,
                    content: `Source: ${s.site}. This story is tagged as a rumor or exclusive. Market impact could be significant.`,
                    impact: 'High',
                    reliability: 'Unverified',
                    date: s.time,
                    url: s.url
                }));
            }
        }

        const simulatedTips = [
            {
                id: 'sim-1',
                title: 'Analyst Upgrade Leak: Major Tech Stock',
                content: 'Internal memos suggest a major bank is about to upgrade a top tech stock to "Strong Buy" with a 40% upside target.',
                impact: 'High',
                reliability: '85%',
                date: Date.now() - 1000 * 60 * 60 * 2,
                url: '#'
            },
            {
                id: 'sim-2',
                title: 'Regulatory Approval Imminent',
                content: 'Sources indicate the FDA is in final stages of approving a new biotech drug. Announcement expected within 48 hours.',
                impact: 'High',
                reliability: '90%',
                date: Date.now() - 1000 * 60 * 60 * 12,
                url: '#'
            }
        ];

        res.json([...stories, ...simulatedTips]);
    } catch (error) {
        console.error('Error fetching insider news:', error);
        res.json([
            {
                id: 'sim-err-1',
                title: 'Market Volatility Alert',
                content: 'High frequency trading algorithms are signaling increased volatility in the upcoming session.',
                impact: 'Medium',
                reliability: 'High',
                date: Date.now(),
                url: '#'
            }
        ]);
    }
});

// Get news for specific symbol
router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        // 1. Try DB first
        const dbNews = await getMarketNews(symbol);
        if (dbNews.length > 0) {
            return res.json(dbNews);
        }

        // 2. Fallback to TickerTick
        const querySymbol = symbol.includes('-') ? symbol : `z:${symbol}`;
        try {
            const response = await fetch(`https://api.tickertick.com/feed?q=${querySymbol}&n=50`);
            if (response.ok) {
                const data = await response.json();
                if (data.stories && data.stories.length > 0) {
                    return res.json(data.stories);
                }
            }
        } catch (ttError) {
            console.warn(`TickerTick failed for ${symbol}:`, ttError);
        }

        // 3. Fallback to Yahoo Finance
        try {
            const result = await yahooFinance.search(symbol, { newsCount: 50 });
            if (result.news && result.news.length > 0) {
                const yahooNews = result.news.map((n: any) => ({
                    id: n.uuid || Math.random().toString(36).substring(7),
                    title: n.title,
                    url: n.link,
                    site: n.providerPublishTime ? new Date(n.providerPublishTime).toLocaleDateString() : 'Yahoo Finance',
                    time: n.providerPublishTime ? new Date(n.providerPublishTime).getTime() : Date.now(),
                    favicon_url: '',
                    tags: [symbol],
                    tickers: [symbol]
                }));
                return res.json(yahooNews);
            }
        } catch (yfError) {
            console.error(`Yahoo Finance news fetch failed for ${symbol}:`, yfError);
        }

        // 4. Fallback to repository
        const repoPath = path.join(__dirname, '../news_repository.json');
        if (fs.existsSync(repoPath)) {
            const repoData: TickerTickStory[] = JSON.parse(fs.readFileSync(repoPath, 'utf-8'));
            const filtered = repoData.filter(story =>
                story.tickers && story.tickers.some(t => t.toLowerCase() === symbol.toLowerCase())
            );
            return res.json(filtered);
        }

        res.json([]);
    } catch (error) {
        console.error(`Error fetching news for ${symbol}:`, error);
        res.json([]);
    }
});

export default router;
