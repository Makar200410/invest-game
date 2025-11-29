
import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

async function test() {
    try {
        console.log('Fetching BTC-USD quote...');
        const quote = await yahooFinance.quote('BTC-USD');
        console.log('Quote Time:', quote.regularMarketTime);
        console.log('Quote Price:', quote.regularMarketPrice);

        console.log('\nFetching BTC-USD chart (1d)...');
        const chart = await yahooFinance.chart('BTC-USD', { interval: '1d', period1: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) });
        const lastCandle = chart.quotes[chart.quotes.length - 1];
        console.log('Last Chart Candle Date:', lastCandle.date);
        console.log('Last Chart Candle Close:', lastCandle.close);

        console.log('\nFetching BTC-USD chart (5m)...');
        const chart5m = await yahooFinance.chart('BTC-USD', { interval: '5m', period1: new Date(Date.now() - 24 * 60 * 60 * 1000) });
        const lastCandle5m = chart5m.quotes[chart5m.quotes.length - 1];
        console.log('Last 5m Candle Date:', lastCandle5m.date);
        console.log('Last 5m Candle Close:', lastCandle5m.close);

    } catch (e) {
        console.error(e);
    }
}

test();
