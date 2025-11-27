async function testTickerTick() {
    try {
        // Fetch general tech/market news (using a broad query or specific tickers)
        // TickerTick uses 'z:' for tickers, 's:' for sources, etc.
        // Let's try fetching news for AAPL and general market
        const response = await fetch('https://api.tickertick.com/feed?q=z:AAPL&n=5');
        const data = await response.json();
        console.log('TickerTick Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

testTickerTick();
