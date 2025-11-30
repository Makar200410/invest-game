// Technical Analysis Indicators

// --- Helper Types ---
export interface IndicatorResult {
    value: number;
    action: 'Buy' | 'Sell' | 'Neutral' | 'Strong Buy' | 'Strong Sell' | 'Overbought' | 'Oversold' | 'High Volatility' | 'Less Volatility';
}

export interface PivotPoints {
    classic: { r3: number; r2: number; r1: number; p: number; s1: number; s2: number; s3: number };
    fibonacci: { r3: number; r2: number; r1: number; p: number; s1: number; s2: number; s3: number };
}

// --- Moving Averages ---

export const calculateSMA = (data: number[], period: number): number | null => {
    if (data.length < period) return null;
    const slice = data.slice(-period);
    const sum = slice.reduce((a, b) => a + b, 0);
    return sum / period;
};

export const calculateEMA = (data: number[], period: number): number | null => {
    if (data.length < period) return null;
    const k = 2 / (period + 1);
    let ema = data[0];
    for (let i = 1; i < data.length; i++) {
        ema = data[i] * k + ema * (1 - k);
    }
    // We only need the last value for the table
    // For efficiency in a loop, this simple version recalculates from start.
    // Optimized version would be better for arrays, but for single value return:

    // Re-implementing to return array for other indicators to use
    return calculateEMAArray(data, period).pop() || null;
};

const calculateEMAArray = (data: number[], period: number): (number | null)[] => {
    const k = 2 / (period + 1);
    const ema = new Array(data.length).fill(null);
    if (data.length < period) return ema;

    let sum = 0;
    for (let i = 0; i < period; i++) sum += data[i];
    ema[period - 1] = sum / period;

    for (let i = period; i < data.length; i++) {
        ema[i] = data[i] * k + ema[i - 1]! * (1 - k);
    }
    return ema;
};

// --- Oscillators & Indicators ---

export const calculateRSI = (prices: number[], period: number = 14): number | null => {
    if (prices.length < period + 1) return null;
    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {
        const diff = prices[i] - prices[i - 1];
        if (diff >= 0) gains += diff;
        else losses -= diff;
    }

    let avgGain = gains / period;
    let avgLoss = losses / period;

    let rsi = 100 - (100 / (1 + avgGain / avgLoss));

    for (let i = period + 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        const gain = diff >= 0 ? diff : 0;
        const loss = diff < 0 ? -diff : 0;

        avgGain = (avgGain * (period - 1) + gain) / period;
        avgLoss = (avgLoss * (period - 1) + loss) / period;

        if (avgLoss === 0) rsi = 100;
        else rsi = 100 - (100 / (1 + avgGain / avgLoss));
    }
    return rsi;
};

export const calculateStoch = (highs: number[], lows: number[], closes: number[], period: number = 9, signalPeriod: number = 6): { k: number, d: number } | null => {
    if (highs.length < period) return null;

    // %K = (Current Close - Lowest Low) / (Highest High - Lowest Low) * 100
    const currentClose = closes[closes.length - 1];
    const periodLows = lows.slice(-period);
    const periodHighs = highs.slice(-period);
    const lowestLow = Math.min(...periodLows);
    const highestHigh = Math.max(...periodHighs);

    const k = ((currentClose - lowestLow) / (highestHigh - lowestLow)) * 100;

    // %D = SMA of %K (We need history of K to calculate D correctly, simplifying here to just K for now or calculating a few previous Ks)
    // For proper D, we need at least 'signalPeriod' K values.
    // Let's calculate last 'signalPeriod' K values
    const kValues: number[] = [];
    for (let i = 0; i < signalPeriod; i++) {
        const idx = closes.length - 1 - i;
        if (idx < period) break;
        const subLows = lows.slice(idx - period + 1, idx + 1);
        const subHighs = highs.slice(idx - period + 1, idx + 1);
        const l = Math.min(...subLows);
        const h = Math.max(...subHighs);
        const c = closes[idx];
        kValues.unshift(((c - l) / (h - l)) * 100);
    }

    const d = kValues.reduce((a, b) => a + b, 0) / kValues.length;

    return { k, d };
};

export const calculateStochRSI = (prices: number[], period: number = 14): number | null => {
    // StochRSI = (RSI - Lowest RSI) / (Highest RSI - Lowest RSI)
    // We need RSI history.
    // Calculate RSI array first.
    // This is expensive, optimization needed for production but fine for MVP.
    const rsiArray: number[] = [];
    // We need enough RSI values to find min/max over period
    // Need at least period * 2 data points roughly
    if (prices.length < period * 2) return null;

    // Calculate RSI for the last 'period' points
    // Actually we need RSI for the whole window to get the range
    // Let's just calculate RSI for the last 100 points to be safe
    const lookback = period + 100;
    const slice = prices.slice(-lookback);

    // Helper to get RSI array
    const getRSIArray = (data: number[], p: number) => {
        const results = [];
        let gains = 0, losses = 0;
        for (let i = 1; i <= p; i++) {
            const diff = data[i] - data[i - 1];
            if (diff >= 0) gains += diff; else losses -= diff;
        }
        let avgGain = gains / p;
        let avgLoss = losses / p;
        results.push(100 - (100 / (1 + avgGain / avgLoss)));

        for (let i = p + 1; i < data.length; i++) {
            const diff = data[i] - data[i - 1];
            const gain = diff >= 0 ? diff : 0;
            const loss = diff < 0 ? -diff : 0;
            avgGain = (avgGain * (p - 1) + gain) / p;
            avgLoss = (avgLoss * (p - 1) + loss) / p;
            results.push(100 - (100 / (1 + avgGain / avgLoss)));
        }
        return results;
    };

    const rsis = getRSIArray(slice, period);
    if (rsis.length < period) return null;

    const currentRSI = rsis[rsis.length - 1];
    const periodRSIs = rsis.slice(-period);
    const minRSI = Math.min(...periodRSIs);
    const maxRSI = Math.max(...periodRSIs);

    return ((currentRSI - minRSI) / (maxRSI - minRSI)) * 100;
};

export const calculateMACDValue = (prices: number[]): number | null => {
    // MACD(12, 26)
    const ema12 = calculateEMAArray(prices, 12);
    const ema26 = calculateEMAArray(prices, 26);
    if (!ema12.length || !ema26.length) return null;

    const last12 = ema12[ema12.length - 1];
    const last26 = ema26[ema26.length - 1];

    if (last12 === null || last26 === null) return null;
    return last12 - last26;
};

export const calculateATR = (highs: number[], lows: number[], closes: number[], period: number = 14): number | null => {
    if (highs.length < period + 1) return null;

    const trs = [];
    for (let i = 1; i < highs.length; i++) {
        const hl = highs[i] - lows[i];
        const hc = Math.abs(highs[i] - closes[i - 1]);
        const lc = Math.abs(lows[i] - closes[i - 1]);
        trs.push(Math.max(hl, hc, lc));
    }

    // SMA of TRs for first ATR, then smoothed
    // Simple SMA for now for robustness
    const slice = trs.slice(-period);
    return slice.reduce((a, b) => a + b, 0) / period;
};

export const calculateADX = (highs: number[], lows: number[], closes: number[], period: number = 14): number | null => {
    if (highs.length < period * 2) return null;
    // Simplified ADX implementation
    // True Range
    const getTR = (i: number) => Math.max(highs[i] - lows[i], Math.abs(highs[i] - closes[i - 1]), Math.abs(lows[i] - closes[i - 1]));
    const getDM = (i: number) => {
        const up = highs[i] - highs[i - 1];
        const down = lows[i - 1] - lows[i];
        return {
            plus: (up > down && up > 0) ? up : 0,
            minus: (down > up && down > 0) ? down : 0
        };
    };

    const trs = [], plusDMs = [], minusDMs = [];
    for (let i = 1; i < highs.length; i++) {
        trs.push(getTR(i));
        const dm = getDM(i);
        plusDMs.push(dm.plus);
        minusDMs.push(dm.minus);
    }

    // Smooth
    const smooth = (data: number[], p: number) => {
        const res = [];
        let sum = 0;
        for (let i = 0; i < p; i++) sum += data[i];
        res.push(sum);
        for (let i = p; i < data.length; i++) {
            res.push(res[res.length - 1] - (res[res.length - 1] / p) + data[i]);
        }
        return res;
    };

    const trSmooth = smooth(trs, period);
    const plusDMSmooth = smooth(plusDMs, period);
    const minusDMSmooth = smooth(minusDMs, period);

    const dxs = [];
    for (let i = 0; i < trSmooth.length; i++) {
        const diPlus = (plusDMSmooth[i] / trSmooth[i]) * 100;
        const diMinus = (minusDMSmooth[i] / trSmooth[i]) * 100;
        const dx = (Math.abs(diPlus - diMinus) / (diPlus + diMinus)) * 100;
        dxs.push(dx);
    }

    if (dxs.length < period) return null;
    const adx = dxs.slice(-period).reduce((a, b) => a + b, 0) / period;
    return adx;
};

export const calculateCCI = (highs: number[], lows: number[], closes: number[], period: number = 20): number | null => {
    if (highs.length < period) return null;
    const tps = highs.map((h, i) => (h + lows[i] + closes[i]) / 3);
    const smaTP = calculateSMA(tps, period);
    if (smaTP === null) return null;

    const slice = tps.slice(-period);
    const meanDev = slice.reduce((a, b) => a + Math.abs(b - smaTP), 0) / period;

    const currentTP = tps[tps.length - 1];
    return (currentTP - smaTP) / (0.015 * meanDev);
};

export const calculateHighsLows = (highs: number[], lows: number[], period: number = 14): number | null => {
    if (highs.length < period) return null;
    const max = Math.max(...highs.slice(-period));
    const min = Math.min(...lows.slice(-period));
    // Just return position in range 0-100
    const current = highs[highs.length - 1]; // Using high as proxy
    return ((current - min) / (max - min)) * 100;
};

export const calculateROC = (closes: number[], period: number = 9): number | null => {
    if (closes.length < period + 1) return null;
    const current = closes[closes.length - 1];
    const prev = closes[closes.length - 1 - period];
    return ((current - prev) / prev) * 100;
};

export const calculateWilliamsR = (highs: number[], lows: number[], closes: number[], period: number = 14): number | null => {
    if (highs.length < period) return null;
    const max = Math.max(...highs.slice(-period));
    const min = Math.min(...lows.slice(-period));
    const close = closes[closes.length - 1];
    return ((max - close) / (max - min)) * -100;
};

export const calculateBullBearPower = (highs: number[], lows: number[], closes: number[], period: number = 13): number | null => {
    const ema = calculateEMA(closes, period);
    if (ema === null) return null;
    const currentHigh = highs[highs.length - 1];
    const currentLow = lows[lows.length - 1];
    // Bull Power = High - EMA
    // Bear Power = Low - EMA
    // Return sum or just Bull Power? Usually separate. Let's return Bull Power for now or average.
    // The UI expects a single value? Let's return Bull Power + Bear Power (Elder-Ray Index uses both).
    // Let's return Bull Power for simplicity or define what 'value' means.
    // Let's return Bull Power.
    return currentHigh - ema;
};

export const calculateUO = (highs: number[], lows: number[], closes: number[]): number | null => {
    if (highs.length < 29) return null; // 7 + 14 + 28
    // Ultimate Oscillator
    // BP = Close - Minimum(Low, Prior Close)
    // TR = Maximum(High, Prior Close) - Minimum(Low, Prior Close)
    const bps: number[] = [];
    const trs: number[] = [];
    for (let i = 1; i < highs.length; i++) {
        const priorClose = closes[i - 1];
        const bp = closes[i] - Math.min(lows[i], priorClose);
        const tr = Math.max(highs[i], priorClose) - Math.min(lows[i], priorClose);
        bps.push(bp);
        trs.push(tr);
    }

    const avg = (p: number) => {
        const sBp = bps.slice(-p).reduce((a, b) => a + b, 0);
        const sTr = trs.slice(-p).reduce((a, b) => a + b, 0);
        return sBp / sTr;
    };

    const a7 = avg(7);
    const a14 = avg(14);
    const a28 = avg(28);

    return 100 * ((4 * a7) + (2 * a14) + a28) / 7;
};

// --- Action Logic ---

export const getAction = (indicator: string, value: number): IndicatorResult['action'] => {
    switch (indicator) {
        case 'RSI':
            if (value > 70) return 'Sell';
            if (value < 30) return 'Buy';
            return 'Neutral';
        case 'STOCH':
            if (value > 80) return 'Overbought'; // Screenshot says "Перекупленность"
            if (value < 20) return 'Oversold';
            return 'Neutral';
        case 'STOCHRSI':
            if (value > 80) return 'Sell';
            if (value < 20) return 'Buy';
            return 'Neutral';
        case 'CCI':
            if (value > 100) return 'Sell';
            if (value < -100) return 'Buy';
            return 'Neutral';
        case 'MACD':
            if (value > 0) return 'Buy';
            return 'Sell';
        case 'WilliamsR':
            if (value > -20) return 'Overbought';
            if (value < -80) return 'Oversold';
            return 'Neutral';
        case 'ROC':
            if (value > 0) return 'Buy';
            return 'Sell';
        case 'BullBear':
            if (value > 0) return 'Buy';
            return 'Sell';
        case 'ATR':
            if (value > 100) return 'High Volatility'; // Arbitrary threshold
            return 'Less Volatility';
        default:
            return 'Neutral';
    }
};

export const calculatePivotPoints = (high: number, low: number, close: number): PivotPoints => {
    const p = (high + low + close) / 3;

    // Classic
    const r1 = 2 * p - low;
    const s1 = 2 * p - high;
    const r2 = p + (high - low);
    const s2 = p - (high - low);
    const r3 = high + 2 * (p - low);
    const s3 = low - 2 * (high - p);

    // Fibonacci
    const range = high - low;
    const fp = p;
    const fr1 = p + (range * 0.382);
    const fs1 = p - (range * 0.382);
    const fr2 = p + (range * 0.618);
    const fs2 = p - (range * 0.618);
    const fr3 = p + (range * 1.000);
    const fs3 = p - (range * 1.000);

    return {
        classic: { r3, r2, r1, p, s1, s2, s3 },
        fibonacci: { r3: fr3, r2: fr2, r1: fr1, p: fp, s1: fs1, s2: fs2, s3: fs3 }
    };
};

export const getMAAction = (price: number, ma: number): 'Buy' | 'Sell' => {
    return price > ma ? 'Buy' : 'Sell';
};

export const getYahooIndicators = (yahooData: any, currentPrice: number) => {
    const indicators = [];

    if (!yahooData) return [];

    const { financialData, summaryDetail, defaultKeyStatistics } = yahooData;

    // 1. Analyst Recommendation
    if (financialData?.recommendationKey) {
        const rec = financialData.recommendationKey;
        let action = 'Neutral';
        let signal = 'neutral';

        if (rec === 'strong_buy') { action = 'Strong Buy'; signal = 'buy'; }
        else if (rec === 'buy') { action = 'Buy'; signal = 'buy'; }
        else if (rec === 'sell') { action = 'Sell'; signal = 'sell'; }
        else if (rec === 'strong_sell') { action = 'Strong Sell'; signal = 'sell'; }

        indicators.push({
            name: 'Analyst Rating',
            value: rec.replace('_', ' ').toUpperCase(),
            action,
            signal
        });
    }

    // 2. SMA 50 (Yahoo)
    const sma50 = summaryDetail?.fiftyDayAverage || defaultKeyStatistics?.fiftyDayAverage;
    if (sma50) {
        indicators.push({
            name: 'SMA 50 (Yahoo)',
            value: sma50,
            action: currentPrice > sma50 ? 'Buy' : 'Sell',
            signal: currentPrice > sma50 ? 'buy' : 'sell'
        });
    }

    // 3. SMA 200 (Yahoo)
    const sma200 = summaryDetail?.twoHundredDayAverage || defaultKeyStatistics?.twoHundredDayAverage;
    if (sma200) {
        indicators.push({
            name: 'SMA 200 (Yahoo)',
            value: sma200,
            action: currentPrice > sma200 ? 'Buy' : 'Sell',
            signal: currentPrice > sma200 ? 'buy' : 'sell'
        });
    }

    // 4. Target Price
    if (financialData?.targetMeanPrice) {
        const target = financialData.targetMeanPrice;
        const potential = ((target - currentPrice) / currentPrice) * 100;
        indicators.push({
            name: 'Analyst Target',
            value: target,
            action: target > currentPrice ? `Upside +${potential.toFixed(1)}%` : `Downside ${potential.toFixed(1)}%`,
            signal: target > currentPrice ? 'buy' : 'sell'
        });
    }

    return indicators;
};
