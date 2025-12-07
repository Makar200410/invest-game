const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_6": {
        title: "MACD Indicator",
        content: \`
# Moving Average Convergence Divergence: The Trend and Momentum Hybrid

The MACD (Moving Average Convergence Divergence) is one of the most versatile indicators in technical analysis. It combines the trend-following nature of moving averages with momentum measurement, giving traders insights into both the direction and the strength of a move. Invented by Gerald Appel in the late 1970s, MACD has become a staple on trading screens worldwide. This lesson teaches you how to read and trade with MACD.

## Part 1: The Anatomy of MACD

MACD consists of three components displayed together.

**1. The MACD Line (Fast Line)**:
*   Calculated as: 12-period EMA - 26-period EMA.
*   When the 12 EMA is above the 26 EMA, the MACD line is positive.
*   When the 12 EMA is below the 26 EMA, the MACD line is negative.
*   This line measures short-term momentum relative to longer-term momentum.

**2. The Signal Line (Slow Line)**:
*   A 9-period EMA of the MACD line.
*   It smooths out the MACD line and creates crossover signals.
*   The signal line is often displayed as a red or orange line.

**3. The Histogram**:
*   The difference between the MACD line and the Signal line.
*   Displayed as vertical bars above or below the zero line.
*   When the histogram is above zero, the MACD line is above the Signal line (bullish momentum).
*   When the histogram is below zero, the MACD line is below the Signal line (bearish momentum).
*   The histogram helps visualize the strength and direction of the trend.

## Part 2: Interpreting the MACD Line

**Above Zero**:
*   The 12 EMA is above the 26 EMA.
*   Short-term momentum is bullish.
*   The market is in an uptrend or bullish phase.

**Below Zero**:
*   The 12 EMA is below the 26 EMA.
*   Short-term momentum is bearish.
*   The market is in a downtrend or bearish phase.

**Crossing Zero**:
*   When MACD crosses above zero, it's a bullish signal (like a Golden Cross).
*   When MACD crosses below zero, it's a bearish signal (like a Death Cross).
*   This is often the clearest, most reliable signal from MACD.

## Part 3: MACD Crossovers

The classic MACD signal.

**Bullish Crossover**:
*   The MACD line crosses **above** the Signal line.
*   Interpretation: Short-term momentum is accelerating to the upside.
*   Action: Consider buying or closing short positions.

**Bearish Crossover**:
*   The MACD line crosses **below** the Signal line.
*   Interpretation: Short-term momentum is decelerating or reversing.
*   Action: Consider selling or opening short positions.

**Crossover Quality**:
*   Crossovers that occur above the zero line during an uptrend are stronger buy signals.
*   Crossovers that occur below the zero line during a downtrend are stronger sell signals.
*   Crossovers near the zero line in a ranging market often produce whipsaws.

## Part 4: The MACD Histogram

The histogram is a visual representation of the gap between MACD and Signal lines.

**Histogram Growing (Expanding)**:
*   The MACD is moving away from the Signal line.
*   Momentum is increasing in the direction of the trend.
*   If green and expanding: Strong bullish momentum.
*   If red and expanding: Strong bearish momentum.

**Histogram Shrinking (Contracting)**:
*   The MACD is moving toward the Signal line.
*   Momentum is weakening. A crossover is approaching.
*   This is an early warning that the trend may pause or reverse.

**Histogram Crossing Zero**:
*   This is the same as a MACD/Signal crossover.
*   Confirms the shift in momentum.

## Part 5: MACD Divergence

Divergence is the most powerful MACD signal, just like with RSI.

**Bullish Divergence**:
*   Price makes a **lower low**.
*   MACD histogram or MACD line makes a **higher low**.
*   Meaning: Price is falling, but selling momentum is weakening.
*   Signal: Potential bullish reversal.

**Bearish Divergence**:
*   Price makes a **higher high**.
*   MACD histogram or MACD line makes a **lower high**.
*   Meaning: Price is rising, but buying momentum is weakening.
*   Signal: Potential bearish reversal.

**Trading Divergence**:
*   Divergence warns that the trend is losing steam.
*   Wait for a crossover or a candlestick confirmation before entering.
*   Combine with S/R levels for the highest probability setups.

## Part 6: MACD Settings and Customization

The default settings (12, 26, 9) are not universal.

**Default Settings (12, 26, 9)**:
*   Works well for swing trading on daily charts.
*   Provides a good balance between sensitivity and reliability.

**Faster Settings (5, 13, 6) or (8, 17, 9)**:
*   For day trading or scalping.
*   More signals, but more noise and whipsaws.
*   Use on lower timeframes (5-min, 15-min).

**Slower Settings (19, 39, 9) or (24, 52, 9)**:
*   For position trading or weekly charts.
*   Fewer signals, but higher reliability.
*   Filters out short-term noise.

**Experimentation**:
*   There is no "best" setting. Test what works for your timeframe and trading style.

## Part 7: Combining MACD with Other Indicators

MACD is powerful alone, but combining it with other tools increases accuracy.

**MACD + RSI**:
*   MACD shows trend direction and crossovers.
*   RSI shows overbought/oversold conditions.
*   *Example*: RSI is oversold (<30) and MACD makes a bullish crossover = Strong buy.

**MACD + Moving Averages**:
*   Use the 200 SMA to filter trades.
*   Only take MACD buy signals when price is above the 200 SMA.
*   Only take MACD sell signals when price is below the 200 SMA.

**MACD + Support/Resistance**:
*   A MACD buy signal at a major support level is high probability.
*   A MACD sell signal at a major resistance level is high probability.

**MACD + Trendlines**:
*   A trendline break confirmed by a MACD crossover validates the move.

## Part 8: Common Mistakes with MACD

**Mistake 1: Trading Every Crossover**:
*   In ranging markets, MACD will whipsaw back and forth, generating losing trades.
*   *Solution*: Only trade crossovers in the direction of the larger trend.

**Mistake 2: Ignoring the Zero Line**:
*   A bullish crossover below zero is weaker than one above zero.
*   *Solution*: Prioritize crossovers that align with the zero line position.

**Mistake 3: Using MACD Alone**:
*   MACD is a lagging indicator. By the time it signals, the move may be halfway done.
*   *Solution*: Use MACD for confirmation, not as the primary entry signal.

**Mistake 4: Ignoring Divergence**:
*   Divergence is the most profitable MACD signal, yet many traders only watch crossovers.
*   *Solution*: Always scan for divergence at key price levels.

## Part 9: Summary and Best Practices

*   **MACD combines trend and momentum** in one indicator.
*   **MACD Line** = 12 EMA - 26 EMA. Above zero is bullish, below is bearish.
*   **Signal Line** = 9 EMA of MACD. Used for crossover signals.
*   **Histogram** = MACD - Signal. Shows momentum strength.
*   **Bullish Crossover**: MACD crosses above Signal. **Bearish Crossover**: MACD crosses below Signal.
*   **Zero Line Crossover** is a major trend signal.
*   **Divergence** between price and MACD signals potential reversals.
*   **Combine with S/R, MAs, and RSI** for best results.
*   **Avoid trading crossovers in ranges** — they will whipsaw.
*   **MACD is lagging** — use it for confirmation, not prediction.
\`,
        keyTakeaways: [
            "MACD combines moving averages with momentum measurement.",
            "MACD Line crossing above Signal Line = Bullish signal.",
            "Histogram shows the strength and direction of momentum.",
            "MACD Divergence is a powerful reversal indicator.",
            "Avoid trading crossovers in ranging/choppy markets."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_6 content
const startPattern = /    "ta_6": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_6 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_6 not found!');
}
