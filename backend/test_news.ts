import yahooFinance from 'yahoo-finance2';

async function testNews() {
    try {
        const news = await yahooFinance.search('AAPL', { newsCount: 5 });
        console.log('Search News:', JSON.stringify(news, null, 2));

        // Also try to see if there is a dedicated news method or if search is the way
        // Some versions have yahooFinance.daily() or similar, but search usually returns news/quotes
    } catch (error) {
        console.error('Error:', error);
    }
}

testNews();
