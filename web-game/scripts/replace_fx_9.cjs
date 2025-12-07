const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_9": {
        title: "Forex Chart Patterns",
        content: \`
# The Language of Charts: Forex Patterns

Charts are not just random squiggles; they are a visual representation of human psychology. Fear, greed, hope, and despair play out in repetitive patterns. By recognizing these shapes, you can predict where the price is likely to go next. This lesson covers the most reliable classic chart patterns used by professional traders.

## Part 1: The Head and Shoulders (Reversal)

The most famous pattern in trading. It signals the end of a trend.

*   **Appearance**:
    1.  **Left Shoulder**: Price rises to a peak and declines.
    2.  **Head**: Price rises to a higher peak and declines.
    3.  **Right Shoulder**: Price rises to a lower peak (similar to Left Shoulder) and declines.
*   **The Neckline**: The support line connecting the lows of the two troughs.
*   **The Psychology**: Buyers tried three times to push the price up. The second attempt (Head) was the strongest, but the third attempt (Right Shoulder) failed to make a new high. The buyers are exhausted.
*   **The Trade**: Sell when the price breaks *below* the Neckline.
*   **The Target**: Measure the distance from the Head to the Neckline. Project that distance downward from the breakout point.
*   **Inverse Head and Shoulders**: The same pattern, but upside down. It signals the bottom of a downtrend. Buy the breakout of the neckline.

## Part 2: Double Top and Double Bottom (Reversal)

The "M" and "W" patterns.

*   **Double Top ("M")**:
    *   *Formation*: Price hits a resistance level, falls, rallies back to the *same* level, and fails again.
    *   *Psychology*: "The market rejected this price twice." The bulls gave up.
    *   *Trade*: Sell when price breaks the "neckline" (the low between the two peaks).
*   **Double Bottom ("W")**:
    *   *Formation*: Price hits a support level, bounces, falls back to the *same* level, and bounces again.
    *   *Psychology*: "The market found a floor." The bears gave up.
    *   *Trade*: Buy when price breaks the neckline (the high between the two troughs).
*   **Reliability**: Very high. These are easy to spot and trade.

## Part 3: Triangles (Continuation)

Coiled springs ready to explode.

*   **Ascending Triangle**:
    *   *Shape*: Flat top (Resistance) + Rising bottom (Higher Lows).
    *   *Psychology*: Buyers are getting more aggressive (buying at higher prices), while sellers are holding the line. Eventually, sellers run out of ammo.
    *   *Direction*: Usually breaks UP (Bullish).
*   **Descending Triangle**:
    *   *Shape*: Flat bottom (Support) + Falling top (Lower Highs).
    *   *Psychology*: Sellers are getting more aggressive, while buyers hold the line. Eventually, buyers fold.
    *   *Direction*: Usually breaks DOWN (Bearish).
*   **Symmetrical Triangle**:
    *   *Shape*: Lower Highs + Higher Lows. The market is squeezing into a point.
    *   *Direction*: Neutral. It can break either way. Wait for the breakout before trading.

## Part 4: Flags and Pennants (Continuation)

Brief pauses in a strong trend.

*   **Bull Flag**:
    *   *Formation*: A sharp rise (The Pole) followed by a rectangular downward consolidation (The Flag).
    *   *Psychology*: Traders who bought early are taking profits, but new buyers are stepping in. It's a "breather."
    *   *Trade*: Buy when price breaks the top of the flag.
*   **Bear Flag**:
    *   *Formation*: A sharp drop (The Pole) followed by a rectangular upward consolidation.
    *   *Trade*: Sell when price breaks the bottom of the flag.
*   **Pennants**: Similar to flags, but the consolidation is triangular (small symmetrical triangle).
*   **Target**: Measure the length of the "Pole" and project it from the breakout. These patterns often result in explosive moves.

## Part 5: The Wedge (Reversal or Continuation)

A tricky pattern that signals a struggle.

*   **Rising Wedge**:
    *   *Shape*: Price is making Higher Highs and Higher Lows, but the range is narrowing (lines are converging).
    *   *Psychology*: Buyers are struggling to push price higher. The momentum is fading.
    *   *Direction*: **Bearish**. Even though it's pointing up, it usually breaks DOWN.
*   **Falling Wedge**:
    *   *Shape*: Price is making Lower Highs and Lower Lows, but the range is narrowing.
    *   *Psychology*: Sellers are losing steam.
    *   *Direction*: **Bullish**. Even though it's pointing down, it usually breaks UP.

## Part 6: The Cup and Handle (Bullish Continuation)

A long-term pattern of accumulation.

*   **Appearance**: Looks like a tea cup.
    1.  **Cup**: A "U" shaped recovery. Price falls, bases, and rises back to the start.
    2.  **Handle**: A small pullback or flag on the right side.
*   **Psychology**: The "Cup" shakes out the weak hands. The "Handle" is the final shakeout before the rocket launch.
*   **Trade**: Buy when price breaks above the rim of the cup.
*   **Timeframe**: This pattern works best on Daily or Weekly charts. It is a powerful signal for a massive trend.

## Part 7: Candlestick Patterns (Micro Patterns)

Patterns formed by 1-3 candles.

*   **Pin Bar (Hammer / Shooting Star)**:
    *   *Shape*: Small body, long wick (tail).
    *   *Meaning*: Rejection. If the wick is down (Hammer), buyers rejected lower prices. Bullish. If the wick is up (Shooting Star), sellers rejected higher prices. Bearish.
*   **Engulfing Pattern**:
    *   *Bullish Engulfing*: A small red candle followed by a massive green candle that "eats" it. Strong buy signal.
    *   *Bearish Engulfing*: A small green candle followed by a massive red candle. Strong sell signal.
*   **Doji**:
    *   *Shape*: A cross. Open and Close are the same.
    *   *Meaning*: Indecision. A tug-of-war between bulls and bears. Often signals a reversal if found at a top or bottom.

## Part 8: How to Trade Patterns

Don't just jump in.

1.  **Wait for the Breakout**: A pattern is not confirmed until the price breaks the key level (Neckline, Trendline).
2.  **The Retest**: Conservative traders wait for the price to break out, come back to "kiss" the level (Retest), and then bounce. This confirms the level has flipped from Support to Resistance (or vice versa).
3.  **Volume**: A valid breakout should have high volume. Low volume breakouts are often "fakeouts."
4.  **Context**: A Bull Flag at the top of a chart is less reliable than a Bull Flag in the middle of a trend. Always look left.

## Part 9: Summary and Checklist

*   **Reversal Patterns**: Head & Shoulders, Double Top/Bottom, Wedges. Use these to catch the *end* of a trend.
*   **Continuation Patterns**: Flags, Pennants, Triangles. Use these to join an *existing* trend.
*   **Patience**: The biggest mistake is "anticipating" the pattern. Wait for the break.
*   **Stop Loss**: Place your stop inside the pattern (e.g., above the Right Shoulder or below the Flag).
*   **Target**: Use the "Measured Move" technique to set realistic profit targets.
\`,
        keyTakeaways: [
            "Chart patterns are visual representations of market psychology.",
            "Head & Shoulders and Double Tops are powerful reversal signals.",
            "Flags and Triangles are continuation signals to join a trend.",
            "Always wait for a confirmed breakout before entering."
        ]
    },`;

const marker = '"fx_8":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fx_8 not found'); process.exit(1); }

let braceCount = 0;
let endIdx = -1;
let inObj = false;
for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inObj = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inObj && braceCount === 0) { endIdx = i + 1; break; }
    }
}

if (endIdx === -1) { console.error('fx_8 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_9: Chart Patterns - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fx_9!');
