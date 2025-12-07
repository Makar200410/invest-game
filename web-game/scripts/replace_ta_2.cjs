const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_2": {
        title: "Support & Resistance",
        content: \`
# The Invisible Walls: Mastering Support and Resistance

If there is one concept that every trader must understand, it is Support and Resistance. These are the horizontal price levels that act as psychological barriers, where buyers and sellers clash repeatedly. Understanding these "invisible walls" is the foundation of chart reading. Professional traders spend their careers drawing lines on charts, waiting for price to interact with these levels. Without this skill, you are trading blind.

## Part 1: The Basic Definitions

**Support**:
A price level where demand (buying pressure) is strong enough to prevent the price from falling further.
*   **Visualization**: Imagine a "floor" that price bounces off of.
*   **Psychology**: At support, buyers believe the asset is cheap and step in to buy. Sellers are reluctant to sell at "bargain" prices.
*   **The Action**: When price approaches support, it tends to bounce back up.

**Resistance**:
A price level where supply (selling pressure) is strong enough to prevent the price from rising further.
*   **Visualization**: Imagine a "ceiling" that price gets rejected from.
*   **Psychology**: At resistance, sellers believe the asset is expensive and take profits. Buyers are hesitant to chase at high prices.
*   **The Action**: When price approaches resistance, it tends to reverse back down.

**The Key Insight**:
Support and Resistance are not exact price points; they are **zones**. Price rarely stops exactly at a round number. It might spike through, wick through, or stop a few cents away. Always think in terms of zones, not lines.

## Part 2: How to Identify Key Levels

**Method 1: Historical Price Action (Swing Highs and Lows)**:
*   Look left on the chart. Find areas where price reversed multiple times.
*   **Swing High**: A peak where price went up, hit a level, and reversed down. This is past resistance.
*   **Swing Low**: A trough where price went down, hit a level, and reversed up. This is past support.
*   *Rule*: The more times a level has been touched, the stronger it is.

**Method 2: Round Psychological Numbers**:
*   Humans are drawn to round numbers. $100, $50, $10, etc.
*   These levels often act as natural support and resistance.
*   *Example*: Bitcoin at $30,000, $40,000, $50,000.

**Method 3: High Volume Nodes**:
*   Use a Volume Profile indicator. Areas where a lot of trading occurred in the past tend to act as S/R.
*   The market has "memory." If many people bought at $150, they remember that level. They might sell there next time.

**Method 4: Moving Averages as Dynamic S/R**:
*   The 50-day and 200-day Simple Moving Averages (SMA) are widely watched.
*   In an uptrend, price often bounces off the 50 SMA (support). In a downtrend, it often gets rejected there (resistance).

## Part 3: The Role Reversal Principle

One of the most powerful concepts in technical analysis.

**When Support Breaks, It Becomes Resistance**:
*   Price is at $100 support. It bounces twice.
*   On the third test, sellers overwhelm buyers. Price crashes through $100 to $90.
*   Now, the old $100 support becomes resistance. When price rallies back to $100, sellers step in again.
*   *Why?*: Traders who bought at $100 are now underwater. When price comes back, they sell into it to "get out at breakeven." This creates selling pressure.

**When Resistance Breaks, It Becomes Support**:
*   Price is at $50 resistance. It gets rejected twice.
*   On the third test, buyers overwhelm sellers. Price breaks out to $55.
*   Now, the old $50 resistance becomes support. When price pulls back to $50, buyers step in.
*   *Why?*: Traders who missed the breakout are waiting to buy the dip. Traders who bought at $50 are not selling—they're adding.

## Part 4: The Strength of Levels

Not all S/R levels are equal. Some are like brick walls; others are like paper.

**Factors That Strengthen a Level**:
1.  **Number of Touches**: A level tested 5 times is stronger than one tested twice.
2.  **Timeframe**: A level visible on the Weekly chart is stronger than one only on the 15-minute chart.
3.  **Volume at the Level**: A rejection with huge volume is more significant than one on low volume.
4.  **Time Since Last Touch**: A level touched recently is more relevant than one from 10 years ago.
5.  **Confluence**: A level that coincides with a Moving Average, Fibonacci, or trendline is extremely strong.

**Factors That Weaken a Level**:
1.  **Multiple Tests in Short Succession**: If price hits resistance 5 times in one day, each touch weakens the level. Eventually, it breaks.
2.  **Low Volume Breakout**: If price breaks through with no conviction, the breakout is likely a fakeout.

## Part 5: Trading Support (Buy the Dip)

The classic strategy.

**The Setup**:
*   Price is in an uptrend.
*   Price pulls back to a significant support level (previous resistance, 50 SMA, or horizontal S/R).
*   You wait for a bullish candlestick pattern (Hammer, Engulfing) to confirm buyers are stepping in.

**The Entry**:
*   Enter long (buy) after the confirmation candle closes.
*   Some traders wait for price to close above the candle's high for extra confirmation.

**The Stop Loss**:
*   Place the stop loss below the support zone.
*   Give it some room (wick below support is common). Stops placed too tight will be hit by noise.

**The Target**:
*   The next resistance level.
*   Or use a Risk/Reward ratio (e.g., 1:2 or 1:3).

## Part 6: Trading Resistance (Sell the Rally)

The opposite strategy.

**The Setup**:
*   Price is in a downtrend (or at a major top).
*   Price rallies back to a significant resistance level (previous support, 50 SMA, or horizontal S/R).
*   You wait for a bearish candlestick pattern (Shooting Star, Engulfing) to confirm sellers are stepping in.

**The Entry**:
*   Enter short (sell) after the confirmation candle closes.
*   For traders who don't short, this is a signal to exit longs or stay out.

**The Stop Loss**:
*   Place the stop loss above the resistance zone.

**The Target**:
*   The next support level.

## Part 7: Trading the Breakout

When the wall crumbles.

**The Setup**:
*   Price has been consolidating near a key resistance level.
*   Volume is building. The spring is coiling.
*   A strong bullish candle (or series of candles) closes above the resistance.

**The Entry (Aggressive)**:
*   Enter long immediately upon the breakout candle close.
*   *Risk*: Fakeouts are common. Price might wick above and then crash.

**The Entry (Conservative)**:
*   Wait for a pullback to the broken resistance (now support).
*   Enter when price holds the new support and forms a bullish candle.
*   *Benefit*: Better risk/reward. Fewer fakeouts.

**The Stop Loss**:
*   Place the stop below the breakout candle low or below the new support zone.

## Part 8: The False Breakout (Fakeout)

The trap laid for impatient traders.

**What It Is**:
*   Price breaks above resistance (or below support), triggering breakout traders.
*   But the move has no follow-through. Price immediately reverses and crashes back below the level.
*   Breakout traders are now trapped and forced to stop out, adding fuel to the reversal.

**How to Identify Fakeouts**:
*   Low volume on the breakout = suspicious.
*   A long wick above resistance (rejection candle) = likely fakeout.
*   Price closing back inside the range within the same candle or next candle = fakeout confirmed.

**How to Trade Fakeouts**:
*   The fakeout is a powerful reversal signal.
*   *Strategy*: Wait for the fakeout to confirm. Then trade in the opposite direction, using the fakeout high/low as your stop loss.
*   This is often called a "Spring" (below support) or "Upthrust" (above resistance) in Wyckoff methodology.

## Part 9: Summary and Best Practices

*   **Support is a floor; Resistance is a ceiling**. Price bounces off these levels.
*   **Role Reversal is the key**: Broken support becomes resistance; broken resistance becomes support.
*   **Confluence makes levels stronger**: When S/R aligns with MAs, Fibs, or trendlines, pay extra attention.
*   **Trade the reaction, not the prediction**: Wait for price to reach the level and show a candlestick signal.
*   **Fakeouts are opportunities**: A failed breakout is a powerful reversal signal.
*   **Zoom out**: Levels on the Daily and Weekly charts are the most significant.
*   **There is no perfect level**: Think in zones, not exact prices.
\`,
        keyTakeaways: [
            "Support is a price zone where buying pressure stops price from falling.",
            "Resistance is a price zone where selling pressure stops price from rising.",
            "When support is broken, it becomes resistance (and vice versa).",
            "Confluence (S/R + MA + Fib) creates the strongest levels.",
            "Trade the reaction at the level, not the expectation."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_2 content
const startPattern = /    "ta_2": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_2 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_2 not found!');
}
