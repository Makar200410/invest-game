/**
 * Calculate Simple Moving Average for a given period
 */
export function calculateSMA(prices: number[], period: number): number {
    if (prices.length < period) {
        return 0;
    }

    const relevantPrices = prices.slice(-period);
    const sum = relevantPrices.reduce((acc, price) => acc + price, 0);
    return sum / period;
}

/**
 * Get market signal based on SMA crossover strategy
 * Returns 'buy' when short SMA > long SMA (bullish)
 * Returns 'sell' when short SMA < long SMA (bearish)
 * Returns 'neutral' when insufficient data or SMAs are too close
 */
export function getMarketSignal(sparkline: { price: number }[]): 'buy' | 'sell' | 'neutral' {
    if (!sparkline || sparkline.length < 20) {
        return 'neutral';
    }

    const prices = sparkline.map(point => point.price);

    const shortSMA = calculateSMA(prices, 7);
    const longSMA = calculateSMA(prices, 20);

    if (shortSMA === 0 || longSMA === 0) {
        return 'neutral';
    }

    // Calculate percentage difference
    const difference = ((shortSMA - longSMA) / longSMA) * 100;

    // Require at least 0.5% difference to avoid noise
    if (Math.abs(difference) < 0.5) {
        return 'neutral';
    }

    return difference > 0 ? 'buy' : 'sell';
}
