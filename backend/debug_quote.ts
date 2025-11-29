import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

async function test() {
    try {
        console.log('Fetching BTC-USD quote...');
        const quote = await yahooFinance.quote('BTC-USD');
        console.log('Quote:', JSON.stringify(quote, null, 2));
        console.log('Regular Market Price:', quote.regularMarketPrice);
        console.log('Regular Market Time:', new Date(quote.regularMarketTime!));
    } catch (e) {
        console.error(e);
    }
}

test();
