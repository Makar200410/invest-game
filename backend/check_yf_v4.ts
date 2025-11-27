import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const yf = require('yahoo-finance2');

console.log('Require result type:', typeof yf);
console.log('Require keys:', Object.keys(yf));

if (yf.default) {
    console.log('yf.default type:', typeof yf.default);
    console.log('yf.default keys:', Object.keys(yf.default));
}

try {
    if (typeof yf.quote === 'function') {
        console.log('yf.quote exists');
    } else if (yf.default && typeof yf.default.quote === 'function') {
        console.log('yf.default.quote exists');
    } else {
        console.log('Quote not found');
    }
} catch (e) {
    console.log(e);
}
