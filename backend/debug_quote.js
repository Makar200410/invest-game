import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

async function test() {
    try {
        const symbols = ['BTC-USD', 'ETH-USD', 'AAPL'];
        for (const symbol of symbols) {
            console.log(`\nFetching ${symbol} quote...`);
            const quote = await yahooFinance.quote(symbol);
            console.log(`Symbol: ${symbol}`);
            console.log(`Price: ${quote.regularMarketPrice}`);
            console.log(`Time: ${new Date(quote.regularMarketTime).toISOString()}`);
        }
    } catch (e) {
        console.error(e);
    }
}

test();
