// Technical Analysis Indicators

export const calculateRSI = (prices: number[], period: number = 14): (number | null)[] => {
    if (prices.length < period + 1) {
        return new Array(prices.length).fill(null);
    }

    const rsi = new Array(prices.length).fill(null);
    let gains = 0;
    let losses = 0;

    // Calculate initial average gain/loss
    for (let i = 1; i <= period; i++) {
        const diff = prices[i] - prices[i - 1];
        if (diff >= 0) gains += diff;
        else losses -= diff;
    }

    let avgGain = gains / period;
    let avgLoss = losses / period;

    rsi[period] = 100 - (100 / (1 + avgGain / avgLoss));

    // Calculate subsequent values
    for (let i = period + 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        const gain = diff >= 0 ? diff : 0;
        const loss = diff < 0 ? -diff : 0;

        avgGain = (avgGain * (period - 1) + gain) / period;
        avgLoss = (avgLoss * (period - 1) + loss) / period;

        if (avgLoss === 0) {
            rsi[i] = 100;
        } else {
            const rs = avgGain / avgLoss;
            rsi[i] = 100 - (100 / (1 + rs));
        }
    }

    return rsi;
};

export const calculateMACD = (prices: number[], fastPeriod: number = 12, slowPeriod: number = 26, signalPeriod: number = 9) => {
    const macdLine = new Array(prices.length).fill(null);
    const signalLine = new Array(prices.length).fill(null);
    const histogram = new Array(prices.length).fill(null);

    if (prices.length < slowPeriod) return { macd: macdLine, signal: signalLine, histogram };

    // Calculate EMAs
    const fastEMA = calculateEMA(prices, fastPeriod);
    const slowEMA = calculateEMA(prices, slowPeriod);

    // Calculate MACD Line
    for (let i = 0; i < prices.length; i++) {
        if (fastEMA[i] !== null && slowEMA[i] !== null) {
            macdLine[i] = fastEMA[i]! - slowEMA[i]!;
        }
    }

    // Calculate Signal Line (EMA of MACD)
    // Filter out nulls from start
    const validMacdStartIndex = macdLine.findIndex(v => v !== null);
    if (validMacdStartIndex !== -1) {
        const validMacdValues = macdLine.slice(validMacdStartIndex) as number[];
        const signalValues = calculateEMA(validMacdValues, signalPeriod);

        for (let i = 0; i < signalValues.length; i++) {
            signalLine[validMacdStartIndex + i] = signalValues[i];
        }
    }

    // Calculate Histogram
    for (let i = 0; i < prices.length; i++) {
        if (macdLine[i] !== null && signalLine[i] !== null) {
            histogram[i] = macdLine[i] - signalLine[i];
        }
    }

    return { macd: macdLine, signal: signalLine, histogram };
};

export const calculateBollingerBands = (prices: number[], period: number = 20, stdDevMultiplier: number = 2) => {
    const upper = new Array(prices.length).fill(null);
    const lower = new Array(prices.length).fill(null);
    const middle = new Array(prices.length).fill(null);

    if (prices.length < period) return { upper, lower, middle };

    for (let i = period - 1; i < prices.length; i++) {
        const slice = prices.slice(i - period + 1, i + 1);
        const sum = slice.reduce((a, b) => a + b, 0);
        const mean = sum / period;

        const squaredDiffs = slice.map(x => Math.pow(x - mean, 2));
        const variance = squaredDiffs.reduce((a, b) => a + b, 0) / period;
        const stdDev = Math.sqrt(variance);

        middle[i] = mean;
        upper[i] = mean + (stdDev * stdDevMultiplier);
        lower[i] = mean - (stdDev * stdDevMultiplier);
    }

    return { upper, lower, middle };
};

const calculateEMA = (data: number[], period: number): (number | null)[] => {
    const k = 2 / (period + 1);
    const ema = new Array(data.length).fill(null);

    if (data.length < period) return ema;

    // Initial SMA
    let sum = 0;
    for (let i = 0; i < period; i++) {
        sum += data[i];
    }
    ema[period - 1] = sum / period;

    // Calculate EMA
    for (let i = period; i < data.length; i++) {
        ema[i] = data[i] * k + ema[i - 1]! * (1 - k);
    }

    return ema;
};
