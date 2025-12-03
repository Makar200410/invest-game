
import 'dotenv/config';
import { getMarketNews, initDB } from './src/services/storage.js';

const run = async () => {
    await initDB();
    const symbol = 'BTC-USD';
    console.log(`Fetching news for ${symbol} from DB...`);
    const news = await getMarketNews(symbol);
    console.log(`Found ${news.length} news items.`);
    if (news.length > 0) {
        console.log('Sample item:', JSON.stringify(news[0], null, 2));
    } else {
        console.log('No news found in DB for this symbol.');
        // Check if there are ANY news
        const allNews = await getMarketNews();
        console.log(`Total news in DB (unfiltered): ${allNews.length}`);
        if (allNews.length > 0) {
            console.log('Sample from all news:', JSON.stringify(allNews[0], null, 2));
        }
    }
    process.exit(0);
};

run();
