const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_7": {
        title: "Bollinger Bands",
        content: \`
# The Volatility Envelope: Mastering Bollinger Bands

Bollinger Bands are one of the most popular volatility indicators in technical analysis. Created by John Bollinger in the 1980s, they consist of a moving average with two bands that expand and contract based on market volatility. The bands automatically adjust to market conditions: they widen during high volatility and narrow during low volatility. This dynamic nature makes them invaluable for identifying trading opportunities based on volatility cycles.

## Part 1: The Construction of Bollinger Bands

Understanding how the bands are calculated helps you use them effectively.

**The Three Lines**:
1.  **Middle Band**: A 20-period Simple Moving Average (SMA).
2.  **Upper Band**: Middle Band + (2 × Standard Deviation of price over 20 periods).
3.  **Lower Band**: Middle Band - (2 × Standard Deviation of price over 20 periods).

**Standard Deviation**:
*   Standard deviation measures how much prices deviate from the average.
*   High standard deviation = High volatility = Bands are wide.
*   Low standard deviation = Low volatility = Bands are narrow.

**Why 2 Standard Deviations?**:
*   Statistically, ~95% of price action falls within 2 standard deviations of the mean.
*   This means price touching the outer bands is an "extreme" event.

## Part 2: What the Bands Tell You

**Price Near the Upper Band**:
*   Price is high relative to recent history.
*   The market is potentially overbought.
*   *Caution*: In a strong uptrend, price can "walk the upper band" for extended periods.

**Price Near the Lower Band**:
*   Price is low relative to recent history.
*   The market is potentially oversold.
*   *Caution*: In a strong downtrend, price can "walk the lower band" for extended periods.

**Price Near the Middle Band (20 SMA)**:
*   The middle band acts as dynamic support/resistance.
*   In an uptrend, pullbacks to the middle band are buying opportunities.
*   In a downtrend, rallies to the middle band are selling opportunities.

## Part 3: The Bollinger Squeeze — Volatility Compression

The most powerful Bollinger Bands signal.

**What Is a Squeeze?**:
*   When the bands contract significantly, volatility is at a minimum.
*   The market is "coiling like a spring." A big move is coming.
*   The longer the squeeze, the more explosive the breakout.

**How to Identify a Squeeze**:
*   Look for the narrowest band width in recent history (e.g., months).
*   Use the Bollinger Band Width indicator (a separate indicator that measures the distance between bands).
*   Some platforms have a "Squeeze" indicator that signals when the squeeze is on.

**Trading the Squeeze**:
*   Wait for price to break out of the squeeze (above or below the bands).
*   Enter in the direction of the breakout.
*   The breakout from a squeeze often leads to extended, trending moves.
*   *Caution*: The first breakout can be a fakeout. Some traders wait for a retest.

## Part 4: Walking the Bands — Trending Markets

In strong trends, price hugs the outer band.

**Walking the Upper Band**:
*   Price closes near the upper band repeatedly.
*   Each "touch" of the middle band is a buying opportunity.
*   This is characteristic of a strong uptrend. Do NOT short just because price is at the upper band.

**Walking the Lower Band**:
*   Price closes near the lower band repeatedly.
*   Each "touch" of the middle band is a selling opportunity.
*   This is characteristic of a strong downtrend. Do NOT buy just because price is at the lower band.

**The Key Insight**:
Bollinger Bands are not inherently a reversal indicator. In trends, price will stay at the extremes. Use other indicators (RSI divergence, candlestick patterns) to identify actual reversal points.

## Part 5: Mean Reversion Strategy

When price does revert to the mean.

**The Concept**:
*   After an extreme move to the outer band, price often reverts to the middle band (the mean).
*   This is the "rubber band" effect.

**Mean Reversion Setup**:
1.  Price touches or pierces the outer band.
2.  Look for a reversal candlestick (Hammer, Engulfing, Doji) at the band.
3.  Enter in the direction of the mean (toward the middle band).
4.  Target: The middle band (20 SMA).
5.  Stop Loss: Beyond the wick of the reversal candle.

**When It Works Best**:
*   In ranging (sideways) markets.
*   At key horizontal support/resistance levels.
*   When RSI shows overbought/oversold or divergence.

**When It Fails**:
*   In trending markets. Price will walk the band and not revert.

## Part 6: Bollinger Band Breakout Strategy

Trading the expansion after a squeeze.

**The Setup**:
1.  Identify a squeeze (narrow bands).
2.  Wait for a strong candle to close outside the bands (above upper or below lower).
3.  Enter in the direction of the breakout.
4.  Target: Use a trailing stop or a risk-reward ratio (e.g., 2:1).
5.  Stop Loss: Below the middle band (for long) or above the middle band (for short).

**Confirmation Tools**:
*   High volume on the breakout candle.
*   RSI showing momentum in the breakout direction.
*   Price breaking a key horizontal S/R level simultaneously.

## Part 7: The Double Bottom (W-Bottom) and Double Top (M-Top)

Classic patterns that Bollinger Bands help identify.

**W-Bottom (Bullish)**:
1.  Price falls to the lower band (First Low).
2.  Price bounces to the middle band.
3.  Price falls again, making a new low, but this time the low is ABOVE the lower band even though price is lower.
4.  This is a divergence. The second low shows weakening selling pressure.
5.  Buy signal when price breaks above the middle band.

**M-Top (Bearish)**:
1.  Price rises to the upper band (First High).
2.  Price dips to the middle band.
3.  Price rises again, making a new high, but this time the high is BELOW the upper band even though price is higher.
4.  This is a divergence. The second high shows weakening buying pressure.
5.  Sell signal when price breaks below the middle band.

## Part 8: Combining Bollinger Bands with Other Indicators

**Bollinger Bands + RSI**:
*   Price at lower band + RSI < 30 = Strong oversold condition.
*   Price at upper band + RSI > 70 = Strong overbought condition.
*   This combination filters out noise and increases accuracy.

**Bollinger Bands + MACD**:
*   Use Bollinger Bands to identify volatility conditions.
*   Use MACD crossovers to time entries.
*   A MACD buy signal at the lower band is high probability.

**Bollinger Bands + Volume**:
*   A squeeze followed by a high-volume breakout is the most reliable signal.
*   Low-volume breakouts from squeezes are often fakeouts.

**Bollinger Bands + Candlesticks**:
*   A Hammer at the lower band is a powerful buy signal.
*   A Shooting Star at the upper band is a powerful sell signal.
*   Without a candlestick confirmation, don't trade the band touch.

## Part 9: Summary and Best Practices

*   **Bollinger Bands measure volatility**: Wide bands = high volatility; narrow bands = low volatility.
*   **The Squeeze signals a coming explosion**: Narrow bands compress before big moves.
*   **Walking the Bands = Trend**: Don't fade price that's hugging an outer band in a strong trend.
*   **Mean Reversion works in ranges**: Price often reverts to the middle band after touching the outer band in sideways markets.
*   **Middle Band (20 SMA)** is dynamic support/resistance.
*   **W-Bottoms and M-Tops** are classic reversal patterns with band divergence.
*   **Combine with RSI, MACD, and candlesticks** for best results.
*   **Don't use bands alone**: Bands show conditions, not entry signals. Always wait for confirmation.
\`,
        keyTakeaways: [
            "Bollinger Bands measure volatility using standard deviation.",
            "The Squeeze (narrow bands) signals an imminent big move.",
            "Price 'walking' the bands indicates a strong trend.",
            "Mean reversion (fading band touches) works in ranging markets.",
            "Combine with RSI, candlesticks, or MACD for confirmation."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_7 content
const startPattern = /    "ta_7": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_7 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_7 not found!');
}
