const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_10": {
        title: "Flags and Pennants",
        content: \`
# Riding the Trend: Mastering Flag and Pennant Patterns

Flags and Pennants are the continuation patterns that every trend trader should know. They represent a brief pause in a strong move before the trend resumes. Unlike reversal patterns (Head and Shoulders, Double Tops), these patterns suggest that the market is catching its breath—not changing direction. When you see a flag or pennant, you are looking at an opportunity to join an ongoing trend at a favorable price.

## Part 1: Understanding Continuation Patterns

**What Are Continuation Patterns?**:
*   Patterns that form in the middle of a trend.
*   They indicate a temporary consolidation, not a reversal.
*   After the pattern completes, the trend is expected to continue in its original direction.

**Why Do They Form?**:
*   After a strong move (up or down), traders take profits.
*   New participants wait for a pullback before entering.
*   This creates a "pause" in price, forming a recognizable pattern.
*   When profit-taking ends and new buyers/sellers enter, the trend resumes.

**The Key Insight**:
Flags and Pennants are among the most reliable patterns because they occur within established trends. You are trading with the momentum, not against it.

## Part 2: The Anatomy of a Bull Flag

**The Pole**:
*   A strong, nearly vertical rally.
*   This is the initial move that defines the trend.
*   The pole should be significant—a 10-20% move in a short time, for example.

**The Flag**:
*   A slight downward-sloping channel (or sideways consolidation) after the pole.
*   Price makes lower highs and lower lows, but the descent is shallow.
*   Looks like a flag hanging from the pole.
*   Typically retraces 20-40% of the pole's length.

**The Breakout**:
*   Price breaks above the upper trendline of the flag.
*   This signals that the consolidation is over and the uptrend is resuming.
*   Volume should increase on the breakout.

## Part 3: Trading the Bull Flag

**Entry (Aggressive)**:
*   Enter long when price closes above the flag's upper trendline.

**Entry (Conservative)**:
*   Wait for a retest of the broken trendline.
*   Enter when price holds above the trendline and forms a bullish candle.

**Stop Loss**:
*   Place below the flag's lower trendline.
*   Or below the lowest point within the flag.

**Target (Measured Move)**:
*   Measure the length of the pole (from bottom to top).
*   Add that length to the breakout point.
*   This gives you the projected target.

**Example**:
*   Stock rallies from $50 to $60 (pole = $10).
*   Stock consolidates in a flag between $58 and $56.
*   Breakout occurs at $58.
*   Target = $58 + $10 = $68.

## Part 4: The Anatomy of a Bear Flag

The bearish mirror image of the bull flag.

**The Pole**:
*   A strong, nearly vertical decline.
*   Represents aggressive selling pressure.

**The Flag**:
*   A slight upward-sloping channel (or sideways consolidation) after the pole.
*   Price makes higher highs and higher lows, but the rise is shallow.
*   It's a weak counter-trend rally within a larger downtrend.

**The Breakdown**:
*   Price breaks below the lower trendline of the flag.
*   This confirms the downtrend is resuming.
*   Volume should increase on the breakdown.

## Part 5: Trading the Bear Flag

**Entry (Aggressive)**:
*   Enter short (or buy puts) when price closes below the flag's lower trendline.

**Entry (Conservative)**:
*   Wait for a retest of the broken trendline from below.
*   Enter when price fails to reclaim the trendline and forms a bearish candle.

**Stop Loss**:
*   Place above the flag's upper trendline.
*   Or above the highest point within the flag.

**Target (Measured Move)**:
*   Measure the length of the pole.
*   Subtract that length from the breakdown point.

**Example**:
*   Stock falls from $100 to $80 (pole = $20).
*   Stock consolidates in a flag between $82 and $85.
*   Breakdown occurs at $82.
*   Target = $82 - $20 = $62.

## Part 6: The Pennant Pattern

Pennants are similar to flags but with a different shape.

**The Pole**:
*   Same as a flag—a strong, impulsive move up (bull) or down (bear).

**The Pennant**:
*   Instead of a channel, price forms a small symmetrical triangle.
*   Converging trendlines (lower highs AND higher lows).
*   Volume typically decreases during pennant formation.

**The Breakout**:
*   Price breaks out of the triangle in the direction of the original trend.
*   Volume should expand on the breakout.

**Trading Pennants**:
*   Entry, Stop, and Target are the same as flags.
*   Measure the pole and project from the breakout point.

**Bull Pennant vs. Bear Pennant**:
*   Bull Pennant: Pole is up, pennant consolidates, breakout is up.
*   Bear Pennant: Pole is down, pennant consolidates, breakout is down.

## Part 7: Volume Confirmation

Volume is critical for validating flags and pennants.

**During the Pole**:
*   Volume should be high. This shows conviction behind the initial move.

**During the Flag/Pennant**:
*   Volume should decrease. The market is pausing; activity is light.
*   Declining volume shows a healthy consolidation, not a reversal.

**On the Breakout**:
*   Volume should spike. New participants are entering.
*   A low-volume breakout is suspect—it may be a fakeout.

**Rule of Thumb**:
*   If breakout volume is less than the volume in the pole, be cautious.
*   If breakout volume is higher than the pole, the move is confirmed.

## Part 8: Common Mistakes and Pitfalls

**Mistake 1: Trading Flags in Weak Trends**:
*   Flags are continuation patterns. They need a strong trend to "continue."
*   A "flag" in a choppy, sideways market is not a real flag.
*   *Solution*: Only trade flags after a clear, impulsive pole.

**Mistake 2: Ignoring the Retracement Depth**:
*   A true flag retraces 20-40% of the pole.
*   If the "flag" retraces 50% or more, it's not a flag—it may be a reversal.
*   *Solution*: Measure the retracement. Deep pullbacks invalidate the pattern.

**Mistake 3: Entering Before the Breakout**:
*   It's tempting to "get in early" at the bottom of the flag.
*   But the flag can fail. Price might break down instead of up.
*   *Solution*: Wait for the breakout. Let the market confirm the direction.

**Mistake 4: Unrealistic Targets**:
*   The measured move is a guideline, not a guarantee.
*   Markets don't always reach the exact target.
*   *Solution*: Take partial profits before the target. Trail your stop.

## Part 9: Summary and Best Practices

*   **Flags and Pennants are continuation patterns** within established trends.
*   **The Pole** is the impulsive move; **the Flag/Pennant** is the consolidation.
*   **Bull Flag**: Downward-sloping channel after rally. Breakout = Buy.
*   **Bear Flag**: Upward-sloping channel after decline. Breakdown = Sell.
*   **Pennant**: Symmetrical triangle after an impulsive move.
*   **Measured Move Target**: Pole length projected from breakout.
*   **Volume should decline** during consolidation and **spike on breakout**.
*   **Wait for confirmation**: Trade the breakout, not the anticipation.
*   **Context matters**: Flags work best in strong, trending markets.
*   **Combine with other analysis**: S/R, moving averages, and RSI for extra confirmation.
\`,
        keyTakeaways: [
            "Flags and Pennants are continuation patterns within strong trends.",
            "The 'pole' is the initial impulsive move; the 'flag' is the consolidation.",
            "Trade the breakout in the direction of the original trend.",
            "Calculate the target using the measured move (pole length from breakout).",
            "Volume should decline during consolidation and spike on breakout."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_10 content
const startPattern = /    "ta_10": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_10 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_10 not found!');
}
