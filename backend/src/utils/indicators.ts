export const calculateRSI = (prices: number[], period: number = 14): number[] => {
    if (prices.length < period + 1) return [];

    const changes = [];
    for (let i = 1; i < prices.length; i++) {
        changes.push(prices[i] - prices[i - 1]);
    }

    const gains = [];
    const losses = [];

    for (let i = 0; i < changes.length; i++) {
        if (changes[i] > 0) {
            gains.push(changes[i]);
            losses.push(0);
        } else {
            gains.push(0);
            losses.push(Math.abs(changes[i]));
        }
    }

    let avgGain = gains.slice(0, period).reduce((a, b) => a + b, 0) / period;
    let avgLoss = losses.slice(0, period).reduce((a, b) => a + b, 0) / period;

    const rsi = [];
    // First RSI
    let rs = avgGain / avgLoss;
    rsi.push(100 - (100 / (1 + rs)));

    // Subsequent RSIs
    for (let i = period; i < changes.length; i++) {
        avgGain = ((avgGain * (period - 1)) + gains[i]) / period;
        avgLoss = ((avgLoss * (period - 1)) + losses[i]) / period;

        if (avgLoss === 0) {
            rsi.push(100);
        } else {
            rs = avgGain / avgLoss;
            rsi.push(100 - (100 / (1 + rs)));
        }
    }

    // Pad with nulls or zeros to match input length if needed, 
    // but typically we just return the calculated values aligned to the end.
    // For charting, we usually want them aligned with the dates.
    // Let's return an array of same length as input, with nulls for initial period.
    const result: (number | null)[] = new Array(period).fill(null);
    return [...result, ...rsi] as number[];
};

export const calculateSMA = (prices: number[], period: number): number[] => {
    const sma = [];
    for (let i = 0; i < prices.length; i++) {
        if (i < period - 1) {
            sma.push(null);
            continue;
        }
        const sum = prices.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
        sma.push(sum / period);
    }
    return sma as number[];
};

export const calculateEMA = (prices: number[], period: number): number[] => {
    const k = 2 / (period + 1);
    const ema = [];
    let prevEma = prices[0]; // Simple initialization

    // Better initialization: SMA of first 'period' elements
    if (prices.length >= period) {
        const firstSma = prices.slice(0, period).reduce((a, b) => a + b, 0) / period;
        for (let i = 0; i < period - 1; i++) ema.push(null);
        ema.push(firstSma);
        prevEma = firstSma;

        for (let i = period; i < prices.length; i++) {
            const currentEma = (prices[i] * k) + (prevEma * (1 - k));
            ema.push(currentEma);
            prevEma = currentEma;
        }
    } else {
        return prices.map(() => null) as any;
    }

    return ema as number[];
};

export const calculateMACD = (prices: number[]) => {
    const ema12 = calculateEMA(prices, 12);
    const ema26 = calculateEMA(prices, 26);

    const macdLine = [];
    for (let i = 0; i < prices.length; i++) {
        if (ema12[i] === null || ema26[i] === null) {
            macdLine.push(null);
        } else {
            macdLine.push((ema12[i] as number) - (ema26[i] as number));
        }
    }

    // Signal line is 9-day EMA of MACD line
    // Filter out nulls for calculation, then map back
    const validMacd = macdLine.filter(v => v !== null) as number[];
    const signalLineValid = calculateEMA(validMacd, 9);

    const signalLine = [];
    let validIdx = 0;
    for (let i = 0; i < macdLine.length; i++) {
        if (macdLine[i] === null) {
            signalLine.push(null);
        } else {
            // The signalLineValid array corresponds to the validMacd array
            // We need to align them.
            // If validMacd starts at index X in macdLine, signalLineValid[0] corresponds to macdLine[X] (but wait, EMA of MACD needs 9 points of MACD)
            // It's easier to just pad.
            if (validIdx < signalLineValid.length) {
                // This logic is slightly complex because signalLineValid is shorter than validMacd by 8 points.
                // Let's simplify:
                // We need to reconstruct the full array.
                // The first 26 points of MACD are null (due to EMA26).
                // The first 9 points of Signal are null relative to MACD start.
                // So first 26+8 = 34 points are null.

                // Let's just use the valid array and map back carefully.
                // Actually, let's just re-run EMA logic on the full MACD array treating nulls as skip? No, EMA depends on previous.
                // We already have calculateEMA handling nulls? No, it expects numbers.

                // Let's stick to the valid slice approach.
                // signalLineValid has length = validMacd.length. First 8 are null.
                signalLine.push(signalLineValid[validIdx]);
                validIdx++;
            } else {
                signalLine.push(null);
            }
        }
    }

    // Histogram
    const histogram = [];
    for (let i = 0; i < macdLine.length; i++) {
        if (macdLine[i] !== null && signalLine[i] !== null) {
            histogram.push((macdLine[i] as number) - (signalLine[i] as number));
        } else {
            histogram.push(null);
        }
    }

    return { macd: macdLine, signal: signalLine, histogram };
};

export const calculateBollingerBands = (prices: number[], period: number = 20, stdDevMultiplier: number = 2) => {
    const sma = calculateSMA(prices, period);
    const upper = [];
    const lower = [];

    for (let i = 0; i < prices.length; i++) {
        if (sma[i] === null) {
            upper.push(null);
            lower.push(null);
            continue;
        }

        const slice = prices.slice(i - period + 1, i + 1);
        const mean = sma[i] as number;
        const squaredDiffs = slice.map(p => Math.pow(p - mean, 2));
        const variance = squaredDiffs.reduce((a, b) => a + b, 0) / period;
        const stdDev = Math.sqrt(variance);

        upper.push(mean + (stdDev * stdDevMultiplier));
        lower.push(mean - (stdDev * stdDevMultiplier));
    }

    return { middle: sma, upper, lower };
};
