import YahooFinance from 'yahoo-finance2';

console.log('Type of default export:', typeof YahooFinance);

try {
    const yf = new YahooFinance();
    console.log('Instance created');
    console.log('Instance keys:', Object.keys(yf));
    console.log('Has chart?', typeof yf.chart);

    if (typeof yf.chart === 'function') {
        const result = await yf.chart('AAPL', { period1: '1d', interval: '5m' });
        console.log('Chart success, points:', result.quotes.length);
    } else {
        console.log('Instance does not have chart method');
    }
} catch (e) {
    console.log('Error with new YahooFinance():', e.message);

    // Try without new?
    try {
        // @ts-ignore
        const result = await YahooFinance.chart('AAPL', { period1: '1d' });
        console.log('Static chart success');
    } catch (e2) {
        console.log('Static chart failed:', e2.message);
    }
}
