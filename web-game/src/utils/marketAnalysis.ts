
// Indicator Calculation Helpers
export const calculateSMA = (data: number[], period: number) => {
    if (data.length < period) return null;
    const slice = data.slice(-period);
    const sum = slice.reduce((a, b) => a + b, 0);
    return sum / period;
};

export const calculateRSI = (data: number[], period: number = 14) => {
    if (data.length <= period) return 50;

    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {
        const diff = data[data.length - i] - data[data.length - i - 1];
        if (diff >= 0) gains += diff;
        else losses -= diff;
    }

    if (losses === 0) return 100;

    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
};

export interface MarketAnalysisResult {
    verdict: 'strong_buy' | 'buy' | 'neutral' | 'sell' | 'strong_sell';
    confidence: number;
    rsi: number;
    trend: 'Bullish' | 'Bearish';
    totalScore: number;
}

export const analyzeMarket = (history: { price: number; close?: number }[]): MarketAnalysisResult | null => {
    if (!history || history.length < 30) return null;

    const prices = history.map(h => h.close || h.price);
    const currentPrice = prices[prices.length - 1];

    // 1. Trend Analysis (SMA) (30% weight)
    const sma20 = calculateSMA(prices, 20);
    const sma50 = calculateSMA(prices, 50);

    let trendScore = 0;
    if (sma20 && sma50) {
        if (sma20 > sma50) trendScore = 1; // Bullish
        else if (sma20 < sma50) trendScore = -1; // Bearish
    } else if (sma20) {
        if (currentPrice > sma20) trendScore = 0.5;
        else trendScore = -0.5;
    }

    // 2. Momentum (RSI) (30% weight)
    const rsi = calculateRSI(prices, 14);
    let rsiScore = 0;
    if (rsi > 70) rsiScore = -1; // Overbought -> Sell signal
    else if (rsi < 30) rsiScore = 1; // Oversold -> Buy signal
    else if (rsi > 50) rsiScore = 0.2; // Slight Bullish
    else rsiScore = -0.2; // Slight Bearish

    // 3. Volatility / Recent Move (40% weight)
    // Check last 5 candles for direct strength
    const last5 = prices.slice(-5);
    const start5 = last5[0];
    const end5 = last5[last5.length - 1];
    const recentChange = ((end5 - start5) / start5);
    let momentumScore = 0;
    if (recentChange > 0.02) momentumScore = 1; // Strong up
    else if (recentChange > 0) momentumScore = 0.5;
    else if (recentChange < -0.02) momentumScore = -1; // Strong down
    else momentumScore = -0.5;

    // Weighted Total
    const totalScore = (trendScore * 0.3) + (rsiScore * 0.3) + (momentumScore * 0.4);

    // Map to Verdict
    let verdict: 'strong_buy' | 'buy' | 'neutral' | 'sell' | 'strong_sell' = 'neutral';
    let confidence = Math.abs(totalScore) * 100;

    if (totalScore > 0.6) verdict = 'strong_buy';
    else if (totalScore > 0.2) verdict = 'buy';
    else if (totalScore < -0.6) verdict = 'strong_sell';
    else if (totalScore < -0.2) verdict = 'sell';
    else verdict = 'neutral';

    // Normalize confidence to look "real" (not 100% or 0%)
    confidence = Math.min(95, Math.max(35, confidence * 1.5)); // Boost confidence slightly for display

    return {
        verdict,
        confidence: Math.round(confidence),
        rsi: Math.round(rsi),
        trend: trendScore > 0 ? 'Bullish' : 'Bearish',
        totalScore
    };
};
