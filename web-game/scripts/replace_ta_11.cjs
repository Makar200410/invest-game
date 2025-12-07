const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_11": {
        title: "Fibonacci Retracements",
        content: \`
# The Golden Ratio: Mastering Fibonacci Retracements

Fibonacci Retracements are one of the most popular tools in technical analysis. Based on the Fibonacci sequence—a mathematical series discovered in the 13th century—these levels identify potential support and resistance areas where price is likely to reverse or pause. While the concept may seem mystical, Fibonacci works because millions of traders watch the same levels, making them self-fulfilling prophecies. This lesson teaches you how to use Fibonacci like a professional.

## Part 1: The Fibonacci Sequence and the Golden Ratio

**The Sequence**:
*   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
*   Each number is the sum of the two preceding numbers.
*   Discovered by Leonardo Fibonacci (Leonardo of Pisa) in 1202.

**The Golden Ratio (φ = 1.618)**:
*   Divide any number in the sequence by the previous number: 144/89 = 1.6179... ≈ 1.618.
*   This ratio appears throughout nature: spirals of galaxies, shells, flower petals, human anatomy.
*   In trading, we use percentages derived from this ratio.

**The Key Fibonacci Ratios**:
*   **23.6%**: Shallow retracement.
*   **38.2%**: Common retracement level.
*   **50.0%**: Not technically Fibonacci, but widely used (halfway point).
*   **61.8%**: The "Golden Ratio." The most significant Fibonacci level.
*   **78.6%**: Deep retracement. Square root of 61.8%.
*   **100%**: Full retracement (back to the starting point).

## Part 2: How to Draw Fibonacci Retracements

**In an Uptrend (Looking for Buy)**:
1.  Identify a significant swing low (the start of the move).
2.  Identify a significant swing high (the end of the move).
3.  Draw the Fibonacci tool from the low to the high.
4.  Retracement levels (23.6%, 38.2%, 50%, 61.8%, 78.6%) appear between the high and low.
5.  These levels are potential support where price may bounce during a pullback.

**In a Downtrend (Looking for Sell)**:
1.  Identify a significant swing high (the start of the down move).
2.  Identify a significant swing low (the end of the down move).
3.  Draw the Fibonacci tool from the high to the low.
4.  Retracement levels appear between the low and high.
5.  These levels are potential resistance where price may reverse during a rally.

## Part 3: The Key Fibonacci Levels Explained

**The 23.6% Level**:
*   A shallow retracement.
*   Indicates a very strong trend. Buyers (in uptrend) are aggressive and don't allow deep pullbacks.
*   Often too shallow to offer a good risk/reward entry.

**The 38.2% Level**:
*   A common bounce level.
*   In a healthy trend, price often retraces to 38.2% before continuing.
*   Good for aggressive traders who want to enter early.

**The 50% Level**:
*   The "halfway" point.
*   Not a true Fibonacci ratio, but heavily watched.
*   Psychologically significant: price is exactly in the middle of the move.

**The 61.8% Level (The Golden Zone)**:
*   The most important Fibonacci level.
*   Derived from the Golden Ratio.
*   Often the "last stand" for the trend. If price bounces here, the trend is likely to continue.
*   If price breaks through 61.8%, expect a deeper retracement or potential reversal.

**The 78.6% Level**:
*   A deep retracement.
*   Often the last chance for the trend to resume.
*   Many traders consider a break below 78.6% as a sign of trend failure.

## Part 4: Trading Fibonacci Retracements

**The Basic Strategy (Trend Continuation)**:
1.  Identify a strong trend (up or down).
2.  Wait for a pullback.
3.  Draw Fibonacci from the swing low to swing high (uptrend) or high to low (downtrend).
4.  Look for price to reach the 38.2%, 50%, or 61.8% level.
5.  Wait for a bullish (or bearish) candlestick pattern at the Fib level.
6.  Enter in the direction of the trend.
7.  Stop loss: Below the next Fibonacci level (e.g., enter at 50%, stop below 61.8%).
8.  Target: The previous swing high (uptrend) or new highs.

**The Golden Zone (50% - 61.8%)**:
*   Many traders only take entries within this range.
*   It offers the best risk/reward: deep enough for a good entry, not so deep that the trend is broken.

## Part 5: Fibonacci Confluence

Confluence is when multiple levels align, creating a high-probability zone.

**Fibonacci + Horizontal Support/Resistance**:
*   The 61.8% Fib level coincides with a previous swing high/low.
*   This creates a "double confirmation" zone.
*   Expect strong reactions.

**Fibonacci + Moving Averages**:
*   The 50% Fib level coincides with the 50-day or 200-day SMA.
*   Price is more likely to bounce at this confluence.

**Fibonacci + Trendlines**:
*   The 38.2% Fib level touches an ascending trendline.
*   Two reasons to expect support.

**Fibonacci + Fibonacci (Multi-Timeframe)**:
*   Draw Fib on the Daily chart. Draw Fib on the 4-hour chart.
*   If both have their 61.8% at the same price, that level is extremely significant.

## Part 6: Fibonacci Extensions

Extensions project where price might go after completing a retracement.

**Common Extension Levels**:
*   **100%**: Price moves an equal distance beyond the original swing.
*   **127.2%**: Common extension.
*   **161.8%**: The most significant extension (based on Golden Ratio).
*   **261.8%**: For extended trends.

**How to Use Extensions**:
1.  Draw your retracement from swing low to swing high.
2.  Extensions appear beyond the swing high.
3.  After price bounces off a retracement level, use extensions as profit targets.

**Example**:
*   Price rises from $100 to $120 (range = $20).
*   Price retraces to $110 (50% level) and bounces.
*   Target: 161.8% extension = $120 + ($20 × 0.618) = $132.36.

## Part 7: Common Mistakes with Fibonacci

**Mistake 1: Drawing on Noise**:
*   Fibonacci works on significant swings, not minor fluctuations.
*   Don't draw Fib on a $1 move if the stock normally moves $10/day.
*   *Solution*: Use clear swing highs and lows on higher timeframes.

**Mistake 2: Using Fibonacci Alone**:
*   Fib levels are not magic. Price won't always bounce at 61.8%.
*   *Solution*: Always combine with candlestick confirmation, S/R, or indicators.

**Mistake 3: Ignoring the Trend**:
*   Fibonacci retracements are for trading WITH the trend.
*   Don't use them to catch falling knives or tops.
*   *Solution*: Only draw Fib in the direction of the larger trend.

**Mistake 4: Expecting Perfection**:
*   Price rarely bounces exactly at 50% or 61.8%. It might bounce at 48% or 63%.
*   *Solution*: Think in zones (50%-61.8% zone) rather than exact levels.

## Part 8: Fibonacci in Different Markets

**Stocks**:
*   Fibonacci works well on individual stocks and indices (SPY, QQQ).
*   Best used on Daily and Weekly charts for swing trades.

**Forex**:
*   Extremely popular among Forex traders.
*   Currency pairs respect Fib levels due to the high volume of retail traders using them.

**Crypto**:
*   Works but can be less reliable due to extreme volatility.
*   Use wider zones and combine with volume analysis.

**Futures and Commodities**:
*   Works well on Gold, Oil, and other commodities.
*   Combine with support/resistance zones.

## Part 9: Summary and Best Practices

*   **Fibonacci Retracements** identify potential reversal zones based on the Golden Ratio.
*   **Key Levels**: 23.6%, 38.2%, 50%, **61.8%**, 78.6%.
*   **61.8% (Golden Ratio)** is the most significant level.
*   **Draw from swing low to high (uptrend) or high to low (downtrend)**.
*   **Look for confluence**: Fib + S/R + MA = high probability zone.
*   **Wait for confirmation**: Candlestick pattern at the Fib level before entering.
*   **Use extensions for targets**: 161.8% is the key extension level.
*   **Don't use Fib alone**: Combine with other analysis.
*   **Think in zones, not exact levels**.
\`,
        keyTakeaways: [
            "Fibonacci Retracements identify potential support/resistance based on the Golden Ratio.",
            "The 61.8% level is the most significant 'Golden Zone' level.",
            "Draw from swing low to high (uptrend) or high to low (downtrend).",
            "Confluence (Fib + S/R + MA) creates high-probability zones.",
            "Use extensions (161.8%) for price targets after a retracement bounce."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_11 content
const startPattern = /    "ta_11": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_11 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_11 not found!');
}
