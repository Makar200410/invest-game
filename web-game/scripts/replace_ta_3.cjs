const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_3": {
        title: "Trend Lines & Channels",
        content: \`
# The Trend is Your Friend: Mastering Trend Lines and Channels

"The trend is your friend" is one of the oldest adages in trading. It means you should trade in the direction of the dominant price movement, not against it. But how do you define a trend? How do you know when it's alive or dead? The answer lies in drawing **Trend Lines** and **Channels**. These simple lines become roadmaps that tell you where price is likely to go and where it's likely to stop.

## Part 1: Defining a Trend

Before you draw a line, you must understand what a trend is.

**Uptrend (Bull Market)**:
*   **Definition**: A series of **Higher Highs (HH)** and **Higher Lows (HL)**.
*   **Meaning**: Buyers are in control. Each dip is bought at a higher price than the previous dip. Each rally pushes to a new high.
*   **Strategy**: Look to BUY. "Buy the dip."

**Downtrend (Bear Market)**:
*   **Definition**: A series of **Lower Highs (LH)** and **Lower Lows (LL)**.
*   **Meaning**: Sellers are in control. Each rally fails at a lower price than the previous high. Each selloff pushes to a new low.
*   **Strategy**: Look to SELL (or short). "Sell the rally."

**Sideways/Range (Consolidation)**:
*   **Definition**: Price bounces between a horizontal support and resistance. No clear HH/HL or LH/LL pattern.
*   **Meaning**: Neither side has control. The market is waiting for a catalyst.
*   **Strategy**: Trade the range (buy at support, sell at resistance) or wait for a breakout.

## Part 2: Drawing an Uptrend Line

**The Rules**:
1.  Identify the trend: Confirm you are in an uptrend (HH and HL).
2.  Locate two or more significant swing lows.
3.  Draw a straight line connecting the lows.
4.  Extend the line into the future.

**The Interpretation**:
*   The trend line acts as **dynamic support**. As price rises, the support level rises with it.
*   Each time price pulls back to the trend line, it's a potential buying opportunity.
*   As long as price stays above the trend line, the uptrend is intact.

**When the Trend Line Breaks**:
*   A close below the uptrend line is a warning sign.
*   It does NOT immediately mean the trend is over; it means buyers are losing momentum.
*   Wait for a retest of the broken line (now resistance) to confirm the reversal.

## Part 3: Drawing a Downtrend Line

**The Rules**:
1.  Identify the trend: Confirm you are in a downtrend (LH and LL).
2.  Locate two or more significant swing highs.
3.  Draw a straight line connecting the highs.
4.  Extend the line into the future.

**The Interpretation**:
*   The trend line acts as **dynamic resistance**. As price falls, the resistance level falls with it.
*   Each time price rallies to the trend line, it's a potential selling (or shorting) opportunity.
*   As long as price stays below the trend line, the downtrend is intact.

**When the Trend Line Breaks**:
*   A close above the downtrend line is a bullish signal.
*   The trend might be reversing or transitioning to a range.
*   Wait for a retest of the broken line (now support) to confirm.

## Part 4: The Art of Drawing Good Lines

Drawing trend lines is subjective. Two traders can draw different lines on the same chart. Here are best practices:

**Use Wicks or Bodies?**:
*   **Bodies Only**: More conservative. Ignores intraday spikes.
*   **Wicks Included**: More accurate for some. Shows the true extremes.
*   *Best Practice*: Use whatever method gives you more touches. The more touches, the more valid the line.

**How Many Touches?**:
*   **Two touches**: Minimum to draw a line.
*   **Three or more touches**: The line is confirmed and reliable.
*   *Rule*: Each touch without a break strengthens the line.

**The Angle of the Line**:
*   **Steep Angles (45°+)**: Unsustainable. The trend will eventually slow down or break.
*   **Shallow Angles (20-30°)**: Healthier, slower trend. More sustainable.
*   *Dangerous*: A vertical (parabolic) move almost always ends in a crash.

**Adjust, Don't Force**:
*   If price breaks your trend line but the overall trend continues, redraw the line with a shallower or steeper angle.
*   Lines are guides, not gospel.

## Part 5: Trading with Trend Lines

**Strategy 1: Buy at the Uptrend Line**:
*   Wait for price to pull back to the uptrend line.
*   Look for a bullish candlestick pattern (Hammer, Engulfing) at the line.
*   Enter long with a stop loss just below the trend line.
*   Target the previous swing high or higher.

**Strategy 2: Sell at the Downtrend Line**:
*   Wait for price to rally to the downtrend line.
*   Look for a bearish candlestick pattern (Shooting Star, Engulfing) at the line.
*   Enter short with a stop loss just above the trend line.
*   Target the previous swing low or lower.

**Strategy 3: Trade the Trend Line Break**:
*   A break of an established trend line can signal a trend reversal.
*   Wait for a clean close beyond the line (not just a wick).
*   Enter in the direction of the break after a retest confirms.

## Part 6: Introduction to Channels

A channel adds a parallel line to the trend line, creating a "highway" for price.

**Ascending Channel (Up Channel)**:
*   Draw an uptrend line connecting the swing lows.
*   Draw a parallel line connecting the swing highs.
*   Price oscillates between the two lines.
*   *Strategy*: Buy at the lower line (support), sell/take profit at the upper line (resistance).

**Descending Channel (Down Channel)**:
*   Draw a downtrend line connecting the swing highs.
*   Draw a parallel line connecting the swing lows.
*   Price oscillates between the two lines.
*   *Strategy*: Sell at the upper line (resistance), cover/take profit at the lower line (support).

**Horizontal Channel (Range)**:
*   Price bounces between horizontal support and horizontal resistance.
*   There is no clear upward or downward tilt.
*   *Strategy*: Buy at support, sell at resistance, or trade the breakout.

## Part 7: Advanced Channel Techniques

**The Median Line**:
*   Draw a line in the middle of the channel (halfway between the trendlines).
*   Price often pauses or reverses at the median line.
*   Use it as a secondary target or entry point.

**Channel Breakouts**:
*   When price breaks out of the channel (above resistance for up channel, below support for down channel), it signals acceleration.
*   *Warning*: Breakouts can be false. Wait for confirmation (retest, volume).
*   Target: Measure the width of the channel. Project that distance from the breakout point.

**Channel Failures**:
*   If price fails to reach the upper boundary of an ascending channel, it shows weakening momentum. Expect a break of the lower boundary soon.
*   If price fails to reach the lower boundary of a descending channel, it shows weakening selling pressure. Expect a break of the upper boundary.

## Part 8: Combining Trend Lines with Other Tools

Trend lines are most powerful when combined with other analysis.

**Trend Line + Support/Resistance**:
*   If the trend line intersects with a horizontal support level, the confluence creates a very strong buy zone.

**Trend Line + Fibonacci Retracements**:
*   Draw Fibonacci from the swing low to swing high.
*   If the trend line coincides with the 50% or 61.8% Fibonacci level, that's a high-probability entry.

**Trend Line + Moving Average**:
*   If the trend line is near the 50-day or 200-day MA, expect strong reactions.

**Trend Line + RSI/MACD**:
*   If price touches the trend line and RSI shows oversold or bullish divergence, the signal is reinforced.

## Part 9: Summary and Best Practices

*   **Uptrend** = Higher Highs and Higher Lows. Draw line at the LOWS.
*   **Downtrend** = Lower Highs and Lower Lows. Draw line at the HIGHS.
*   **The more touches, the stronger the line**.
*   **Trend line break ≠ instant reversal**: Wait for confirmation (retest).
*   **Channels are highways**: Price oscillates between support and resistance trend lines.
*   **Combine with other tools**: Trend lines work best with S/R, Fibs, and indicators.
*   **Redraw as needed**: Trends evolve. Adjust your lines accordingly.
*   **Trade WITH the trend**: Don't fight the direction of the dominant market.
\`,
        keyTakeaways: [
            "An uptrend has Higher Highs and Higher Lows; draw the line at the lows.",
            "A downtrend has Lower Highs and Lower Lows; draw the line at the highs.",
            "Trend lines act as dynamic support (up) or resistance (down).",
            "Channels add a parallel line to create a trading range.",
            "Trade with the trend, not against it."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_3 content
const startPattern = /    "ta_3": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_3 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_3 not found!');
}
