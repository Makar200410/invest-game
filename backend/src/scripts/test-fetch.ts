
import { fetchHistory } from '../services/fetcher.js';

const test = async () => {
    console.log('Testing fetchHistory for AAPL...');
    try {
        const history = await fetchHistory('AAPL', '1d', true);
        console.log(`AAPL History Length: ${history.length}`);
        if (history.length > 0) {
            console.log('First item:', history[0]);
            console.log('Last item:', history[history.length - 1]);
        }
    } catch (e) {
        console.error('Error fetching AAPL:', e);
    }

    console.log('Testing fetchHistory for PETR4.SA...');
    try {
        const historyBr = await fetchHistory('PETR4.SA', '1d', true);
        console.log(`PETR4.SA History Length: ${historyBr.length}`);
    } catch (e) {
        console.error('Error fetching PETR4.SA:', e);
    }
};

test();
