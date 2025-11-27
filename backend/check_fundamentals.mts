import yahooFinance from 'yahoo-finance2';

async function checkFundamentals() {
    try {
        const symbol = 'AAPL';
        const result = await yahooFinance.quoteSummary(symbol, {
            modules: ['summaryDetail', 'financialData', 'defaultKeyStatistics']
        });

        console.log('--- Fundamentals for AAPL ---');
        console.log(JSON.stringify(result, null, 2));

        const crypto = 'BTC-USD';
        const cryptoResult = await yahooFinance.quoteSummary(crypto, {
            modules: ['summaryDetail', 'financialData', 'defaultKeyStatistics']
        });

        console.log('\n--- Fundamentals for BTC-USD ---');
        console.log(JSON.stringify(cryptoResult, null, 2));

    } catch (error) {
        console.error('Error:', error);
    }
}

checkFundamentals();
