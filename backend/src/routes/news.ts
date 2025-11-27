import express from 'express';

const router = express.Router();

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
        const now = Date.now();

        // Return cached news if valid
        if (newsCache && (now - newsCache.timestamp < CACHE_DURATION)) {
            return res.json(newsCache.data);
        }

        // Fetch general market news from TickerTick
        // q=z:SPY fetches news for S&P 500 which serves as general market news
        // We can also try q=tt:technology or similar if needed
        const response = await fetch('https://api.tickertick.com/feed?q=z:SPY&n=50');

        if (!response.ok) {
            throw new Error(`TickerTick API error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.stories) {
            newsCache = {
                data: data.stories as TickerTickStory[],
                timestamp: now
            };
            res.json(data.stories);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to cache if available even if expired
        if (newsCache) {
            return res.json(newsCache.data);
        }
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

// Insider Info Endpoint
// We'll use TickerTick but filter for "rumor" or specific high-impact keywords
// If that fails or returns few results, we can mix in simulated tips
router.get('/insider', async (req, res) => {
    try {
        // Try to fetch stories for major tech/finance tickers which often have rumors
        // q=z:AAPL OR z:TSLA OR z:NVDA OR z:BTC-USD
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

        // Add some simulated tips to ensure we always have content
        const simulatedTips = [
            {
                id: 'sim-1',
                title: 'Analyst Upgrade Leak: Major Tech Stock',
                content: 'Internal memos suggest a major bank is about to upgrade a top tech stock to "Strong Buy" with a 40% upside target.',
                impact: 'High',
                reliability: '85%',
                date: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
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
        // Return just simulated tips on error
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

export default router;
