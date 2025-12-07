const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_8": {
        title: "Volume Analysis",
        content: \`
# The Truth in the Tape: Mastering Volume Analysis

Price tells you what happened. Volume tells you **why** it happened. Volume is the number of shares or contracts traded during a given period. It represents the intensity of trading, the conviction behind moves, and the participation of large institutional players. High volume confirms price moves; low volume exposes weak moves. Ignoring volume is like watching a movie with the sound off—you're missing half the story.

## Part 1: What is Volume?

**The Basic Definition**:
*   Volume = the total number of shares (or contracts) traded in a given period.
*   A daily candlestick with volume of 10 million means 10 million shares changed hands that day.

**Why Volume Matters**:
*   Volume represents **commitment**. A move on high volume has more conviction than one on low volume.
*   Volume shows **institutional activity**. Hedge funds and mutual funds move millions of shares. Their footprints are in the volume.
*   Volume **confirms** or **denies** price action. A breakout on heavy volume is real. A breakout on light volume is suspect.

**Where to See Volume**:
*   Most charting platforms display volume as vertical bars at the bottom of the chart.
*   Green bars = Price closed higher (bullish volume).
*   Red bars = Price closed lower (bearish volume).

## Part 2: The Volume-Price Relationship

Volume must be interpreted in the context of price.

**Price Up + Volume Up = Strong Bullish**:
*   Institutions are buying aggressively.
*   The rally is "healthy" and likely to continue.
*   Trend traders should be long.

**Price Up + Volume Down = Weak Bullish**:
*   Price is rising, but participation is declining.
*   The rally is "running out of steam."
*   Caution: a reversal may be near.

**Price Down + Volume Up = Strong Bearish**:
*   Institutions are selling aggressively.
*   The selloff is "confirmed" and likely to continue.
*   Trend traders should be short or out.

**Price Down + Volume Down = Weak Bearish**:
*   Price is falling, but selling pressure is declining.
*   The decline may be exhausting.
*   Watch for a reversal or bounce.

## Part 3: Volume on Breakouts

Volume is essential for validating breakouts.

**High Volume Breakout = Legitimate**:
*   Price breaks above resistance on volume 2-3x the average.
*   Institutions are committing capital behind the move.
*   The breakout is likely to follow through. This is a buy signal.

**Low Volume Breakout = Suspect (Fakeout)**:
*   Price breaks above resistance, but volume is below average.
*   "Who is really buying here?" Not the big money.
*   The breakout is likely to fail. Price will fall back below resistance.

**Volume Confirmation Rule**:
*   Before entering a breakout trade, confirm that volume is above average (ideally 1.5x to 2x the 20-day average volume).
*   Some traders require volume to be the highest in 10+ days for a valid breakout.

## Part 4: Volume Climax — Exhaustion Signals

Extremely high volume can signal the END of a move, not the continuation.

**Buying Climax (Blow-Off Top)**:
*   Price surges on the highest volume seen in months.
*   Everyone who wanted to buy has bought. There are no more buyers.
*   The market is "exhausted." A reversal follows.
*   *Example*: A meme stock that rallies 50% on record volume. The next day, it crashes.

**Selling Climax (Capitulation Bottom)**:
*   Price crashes on the highest volume seen in months.
*   Everyone who wanted to sell has sold. There are no more sellers.
*   Panic is complete. A bottom forms.
*   *Example*: A market crash where the VIX spikes and volume is record-breaking. Often marks the low.

**Identifying Climaxes**:
*   Compare current volume to the 50-day or 100-day average.
*   If volume is 5x, 10x, or more above average, a climax may be occurring.
*   Look for candlestick reversal patterns (Hammer, Engulfing) at the same time.

## Part 5: Volume Moving Averages

Just like price, volume can be smoothed with a moving average.

**The Volume MA**:
*   A 20-period or 50-period SMA of volume.
*   Displayed as a horizontal line through the volume bars.
*   Provides a baseline for "normal" volume.

**How to Use It**:
*   Volume above the MA = Above-average interest.
*   Volume below the MA = Below-average interest.
*   A sustained increase in volume (consistently above the MA) often precedes a big move.

## Part 6: On-Balance Volume (OBV)

A cumulative volume indicator that tracks buying and selling pressure.

**The Calculation**:
*   If price closes up: Add the day's volume to the running OBV total.
*   If price closes down: Subtract the day's volume from the running OBV total.
*   OBV becomes a line that rises or falls based on net volume flow.

**How to Use OBV**:
*   **Rising OBV + Rising Price** = Strong uptrend. Volume is confirming.
*   **Falling OBV + Falling Price** = Strong downtrend. Volume is confirming.
*   **Rising OBV + Flat Price** = Accumulation. Institutions are buying before a breakout.
*   **Falling OBV + Flat Price** = Distribution. Institutions are selling before a breakdown.

**OBV Divergence**:
*   Price makes a new high, but OBV does not. Bearish divergence.
*   Price makes a new low, but OBV does not. Bullish divergence.

## Part 7: Volume Profile (Advanced)

Volume Profile shows volume at each price level, not time period.

**The Concept**:
*   Instead of showing volume for each day, it aggregates volume at each price level.
*   Creates a histogram on the side of the chart.

**Key Levels**:
*   **Point of Control (POC)**: The price level with the highest traded volume. Acts as a magnet for price.
*   **High Volume Nodes (HVN)**: Price levels with significant volume. Act as support/resistance.
*   **Low Volume Nodes (LVN)**: Price levels with little volume. Price tends to move quickly through these zones.

**Trading with Volume Profile**:
*   Expect price to "fill in" low volume areas quickly (fast moves).
*   Expect price to stall and consolidate at high volume areas (slow moves).
*   The POC is often a reversion target.

## Part 8: Common Mistakes in Volume Analysis

**Mistake 1: Ignoring Volume on Breakouts**:
*   "The chart broke out! I'm buying!" — But if volume is low, the breakout is likely to fail.
*   *Solution*: Always check volume before trading a breakout.

**Mistake 2: Expecting Volume in After-Hours**:
*   Pre-market and after-hours volume is very low and misleading.
*   *Solution*: Focus on regular trading hours volume.

**Mistake 3: Treating Volume in Crypto Like Stocks**:
*   Crypto trades 24/7. Volume patterns differ from traditional markets.
*   Much crypto volume is wash trading (fake).
*   *Solution*: Be skeptical of reported crypto volume.

**Mistake 4: Volume Without Context**:
*   High volume after news is expected. High volume out of nowhere is significant.
*   *Solution*: Evaluate volume relative to expected catalysts.

## Part 9: Summary and Best Practices

*   **Volume measures conviction**: High volume = strong move; low volume = weak move.
*   **Price up + volume up = bullish confirmation**. Price up + volume down = warning.
*   **Breakouts require volume**: Low volume breakouts are fakeouts.
*   **Volume climaxes signal exhaustion**: Extremely high volume can mark tops and bottoms.
*   **OBV shows accumulation/distribution**: Rising OBV before a breakout = smart money buying.
*   **Volume Profile reveals key levels**: POC and HVNs act as support/resistance.
*   **Always compare to average**: Use a 20-day or 50-day volume MA as your baseline.
*   **Volume + Price = Truth**: Never trade without checking what volume is telling you.
\`,
        keyTakeaways: [
            "Volume measures the conviction and participation behind price moves.",
            "Rising price on rising volume = healthy trend; rising price on falling volume = warning.",
            "Valid breakouts require above-average volume; low volume breakouts are fakeouts.",
            "Volume climaxes can signal exhaustion and potential reversals.",
            "OBV and Volume Profile reveal accumulation, distribution, and key price levels."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_8 content
const startPattern = /    "ta_8": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_8 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_8 not found!');
}
