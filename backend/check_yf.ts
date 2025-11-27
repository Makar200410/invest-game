import yahooFinance from 'yahoo-finance2';
console.log('Type of default export:', typeof yahooFinance);
console.log('Keys:', Object.keys(yahooFinance));
try {
    const q = await yahooFinance.quote('AAPL');
    console.log('Quote successful:', q.symbol);
} catch (e) {
    console.log('Quote failed:', e.message);
}

try {
    // @ts-ignore
    const c = await yahooFinance.chart('AAPL', { period1: '1d' });
    console.log('Chart successful');
} catch (e) {
    console.log('Chart failed:', e.message);
}
