const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_9": {
        title: "Chart Patterns (Head & Shoulders)",
        content: \`
# The Shapes of Sentiment: Mastering Chart Patterns

Chart patterns are visual formations on price charts that signal potential future moves. They are not arbitrary shapes; they represent the psychology of millions of traders—fear, greed, hope, and despair—crystallized into geometric forms. The Head and Shoulders pattern, in particular, is one of the most reliable and widely recognized reversal patterns in technical analysis. This lesson teaches you to identify and trade these powerful formations.

## Part 1: Why Chart Patterns Work

Chart patterns are self-fulfilling prophecies, but they work for deeper reasons.

**Mass Psychology**:
*   Every pattern represents a battle between buyers and sellers.
*   A "Head and Shoulders" forms because buyers become exhausted, and sellers gradually take control.
*   The pattern completion (neckline break) is when the crowd realizes the buyers have lost.

**The Crowd Effect**:
*   Millions of traders study the same patterns.
*   When a "textbook" pattern appears, traders expect the textbook outcome.
*   Their collective action (buying or selling) creates the predicted outcome.
*   *Caution*: Because patterns are popular, institutions sometimes "fake" classic setups to trap retail traders.

**Pattern Categories**:
1.  **Reversal Patterns**: Signal a change in trend direction (e.g., Head and Shoulders, Double Top).
2.  **Continuation Patterns**: Signal a pause in the trend before it resumes (e.g., Flags, Triangles).

## Part 2: The Head and Shoulders Pattern — Anatomy

The most famous reversal pattern.

**The Components**:
1.  **Left Shoulder**: Price rises to a peak, then declines.
2.  **Head**: Price rises higher than the left shoulder, forming the highest peak, then declines.
3.  **Right Shoulder**: Price rises again, but not as high as the head. This shows weakening buying power.
4.  **Neckline**: A line connecting the lows between the left shoulder/head and the head/right shoulder.

**What It Means**:
*   The left shoulder shows strong initial buying.
*   The head shows one more push higher, but buyers are struggling.
*   The right shoulder shows buyers failing to reach the head's high. Sellers are taking over.
*   The neckline break confirms the pattern. Buyers capitulate. Sellers dominate.

## Part 3: Trading the Head and Shoulders

**The Entry (Aggressive)**:
*   Enter short (or close longs) when price breaks below the neckline.
*   This is the "confirmation" of the pattern.

**The Entry (Conservative)**:
*   Wait for a retest of the neckline from below.
*   After a break, price often rallies back to "kiss" the neckline (now resistance).
*   Enter short after the retest fails with a bearish candle.

**The Stop Loss**:
*   Place above the right shoulder.
*   If price moves back above the right shoulder, the pattern is invalidated.

**The Target**:
*   Measure the distance from the head to the neckline.
*   Project that distance downward from the neckline break.
*   This is the "measured move" target.

## Part 4: Inverse Head and Shoulders — The Bullish Mirror

The exact opposite of the Head and Shoulders. It appears at market bottoms.

**The Components**:
1.  **Left Shoulder**: Price falls to a trough, then rises.
2.  **Head**: Price falls lower than the left shoulder, forming the lowest trough, then rises.
3.  **Right Shoulder**: Price falls again, but not as low as the head.
4.  **Neckline**: A line connecting the highs between the troughs.

**What It Means**:
*   The pattern shows selling pressure weakening.
*   Buyers gain control as the right shoulder forms higher than the head.
*   The neckline break signals the reversal is complete.

**Trading the Inverse H&S**:
*   Entry: Buy when price breaks above the neckline.
*   Stop Loss: Below the right shoulder.
*   Target: Measured move (distance from head to neckline projected upward).

## Part 5: Double Top and Double Bottom

The simpler reversal patterns.

**Double Top (Bearish)**:
*   Price rises to a high (Peak 1).
*   Price pulls back to a support level.
*   Price rises again to approximately the same high (Peak 2).
*   Price fails to break above Peak 1. The pattern looks like an "M."
*   Signal: Sell when price breaks below the support between the two peaks.

**Double Bottom (Bullish)**:
*   Price falls to a low (Trough 1).
*   Price rebounds to a resistance level.
*   Price falls again to approximately the same low (Trough 2).
*   Price fails to break below Trough 1. The pattern looks like a "W."
*   Signal: Buy when price breaks above the resistance between the two troughs.

**Why They Form**:
*   Double Tops: Sellers defended the resistance twice. Buyers gave up.
*   Double Bottoms: Buyers defended the support twice. Sellers gave up.

## Part 6: Triple Top and Triple Bottom

Same concept as double patterns, but with three touches.

**Triple Top**:
*   Three peaks at approximately the same level.
*   Shows persistent resistance and weakening buying power.
*   Break below the support between peaks confirms the pattern.

**Triple Bottom**:
*   Three troughs at approximately the same level.
*   Shows persistent support and weakening selling pressure.
*   Break above the resistance between troughs confirms the pattern.

**Significance**:
*   Multiple tests of a level build the significance. If support/resistance holds three times, it's very strong.
*   But when it finally breaks, the move is often explosive.

## Part 7: Continuation Patterns — Flags and Pennants

**Bull Flag**:
*   A strong, almost vertical rally (the "pole").
*   Followed by a slight downward-sloping consolidation (the "flag").
*   Breakout: Price breaks above the flag's upper trendline.
*   Target: Add the length of the pole to the breakout point.

**Bear Flag**:
*   A strong, almost vertical decline (the "pole").
*   Followed by a slight upward-sloping consolidation (the "flag").
*   Breakdown: Price breaks below the flag's lower trendline.
*   Target: Subtract the length of the pole from the breakdown point.

**Pennants**:
*   Similar to flags, but the consolidation is a small symmetrical triangle rather than a channel.
*   Trading rules are the same: enter on the breakout, target the pole length.

## Part 8: Triangles — Symmetrical, Ascending, Descending

**Symmetrical Triangle**:
*   Lower highs and higher lows converging.
*   Shows indecision. Both buyers and sellers are compressing.
*   Can break either direction. Trade the breakout.

**Ascending Triangle (Bullish)**:
*   Flat resistance (horizontal top) and rising support (higher lows).
*   Buyers are getting more aggressive.
*   Usually breaks upward.

**Descending Triangle (Bearish)**:
*   Flat support (horizontal bottom) and falling resistance (lower highs).
*   Sellers are getting more aggressive.
*   Usually breaks downward.

**Trading Triangles**:
*   Wait for the breakout.
*   Measure the widest part of the triangle and project from the breakout.

## Part 9: Summary and Best Practices

*   **Head and Shoulders** is a powerful top reversal pattern. Enter on neckline break.
*   **Inverse Head and Shoulders** is a powerful bottom reversal pattern.
*   **Double Tops/Bottoms** show failed attempts at new highs/lows.
*   **Flags and Pennants** are continuation patterns within a trend.
*   **Triangles** show compression before a breakout.
*   **Always wait for confirmation**: Don't anticipate a pattern. Trade the break.
*   **Use measured move targets**: Calculate the target based on the pattern's size.
*   **Combine with volume**: A breakout on high volume is more reliable.
*   **Beware of fakeouts**: Patterns are popular, so institutions often fake them.
*   **Context matters**: A pattern at a major support/resistance level is more significant.
\`,
        keyTakeaways: [
            "Chart patterns represent mass psychology crystallized in price action.",
            "Head and Shoulders (and Inverse) are powerful reversal patterns.",
            "Trade the breakout/breakdown, not the pattern formation.",
            "Use 'measured move' to calculate price targets from the pattern's size.",
            "Combine patterns with volume and S/R for higher probability trades."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_9 content
const startPattern = /    "ta_9": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_9 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_9 not found!');
}
