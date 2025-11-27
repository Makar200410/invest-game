import * as yf from 'yahoo-finance2';

console.log('Keys of namespace:', Object.keys(yf));
console.log('default export:', typeof yf.default);

try {
    // @ts-ignore
    if (yf.default && typeof yf.default.chart === 'function') {
        console.log('yf.default.chart exists');
        // @ts-ignore
        const res = await yf.default.chart('AAPL', { period1: '1d' });
        console.log('Chart success');
    } else {
        console.log('yf.default.chart does not exist');
    }
} catch (e) {
    console.log('Error:', e.message);
}
