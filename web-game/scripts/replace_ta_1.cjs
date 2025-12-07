const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_1": {
        title: "Candlestick Basics",
        content: \`
# The Language of Price: Mastering Japanese Candlesticks

Before computers, before ticker tapes, before even the telegraph, Japanese rice traders in the 1700s developed a visual system to track commodity prices. This system, perfected over centuries, became the foundation of modern technical analysis: **Japanese Candlestick Charts**. Today, candlesticks are the default charting method for stocks, Forex, crypto, and commodities worldwide. If you want to read price action, you must first learn to read candles.

## Part 1: The Anatomy of a Single Candlestick

A single candlestick contains four pieces of information about price during a specific time period.

**The Four Data Points (OHLC)**:
*   **Open**: The price at the beginning of the period.
*   **High**: The highest price reached during the period.
*   **Low**: The lowest price reached during the period.
*   **Close**: The price at the end of the period.

**The Body and Wicks**:
*   **The Body (Real Body)**: The thick rectangle. It represents the range between the Open and Close.
    *   *Green/White Candle (Bullish)*: The Close is higher than the Open. Buyers won.
    *   *Red/Black Candle (Bearish)*: The Close is lower than the Open. Sellers won.
*   **The Upper Wick (Shadow)**: The thin line above the body. Shows the High relative to the body.
*   **The Lower Wick (Shadow)**: The thin line below the body. Shows the Low relative to the body.

**Reading the Story**:
*   A candle with a long body and short wicks = Strong momentum in one direction.
*   A candle with a small body and long wicks = Indecision, a battle between buyers and sellers.
*   A green candle with a long lower wick = Buyers rejected lower prices (bullish rejection).
*   A red candle with a long upper wick = Sellers rejected higher prices (bearish rejection).

## Part 2: Essential Single-Candle Patterns

Individual candles can signal major shifts in sentiment.

**The Doji (Indecision)**:
*   **Appearance**: Very small body (Open ≈ Close), with wicks on both ends.
*   **Meaning**: Neither buyers nor sellers won. The market is pausing.
*   **Context**: A Doji at the end of a strong trend can signal a reversal. In the middle of a range, it means nothing.
*   **Variants**: Gravestone Doji (long upper wick), Dragonfly Doji (long lower wick), Long-legged Doji (long wicks both ways).

**The Hammer (Bullish Reversal)**:
*   **Appearance**: Small body at the top, long lower wick (at least 2x the body), little to no upper wick.
*   **Meaning**: Price dropped during the period, but buyers pushed it back up. Sellers failed.
*   **Context**: Must appear at the bottom of a downtrend. A Hammer in an uptrend is weak.
*   **The Inverted Hammer**: Small body at the bottom, long upper wick. Also bullish at the bottom of a downtrend.

**The Shooting Star (Bearish Reversal)**:
*   **Appearance**: Small body at the bottom, long upper wick (at least 2x the body), little to no lower wick.
*   **Meaning**: Price rallied during the period, but sellers pushed it back down. Buyers failed.
*   **Context**: Must appear at the top of an uptrend. A Shooting Star at a bottom is meaningless.
*   **The Hanging Man**: Looks like a Hammer but appears at the top of an uptrend. Bearish.

**The Marubozu (Maximum Momentum)**:
*   **Appearance**: A full body with no wicks. Open = High or Low, Close = High or Low.
*   **Meaning**: One side dominated the entire session. Extreme conviction.
*   **Green Marubozu**: Strong bullish signal.
*   **Red Marubozu**: Strong bearish signal.

## Part 3: Essential Two-Candle Patterns

Some patterns require two candles to form.

**The Bullish Engulfing Pattern**:
*   **Formation**: A small red candle followed by a larger green candle that completely "engulfs" the red body.
*   **Meaning**: The bulls overwhelmed the bears. The momentum has shifted.
*   **Context**: Strong signal at the bottom of a downtrend or at support.
*   **Volume**: The engulfing candle should have above-average volume for confirmation.

**The Bearish Engulfing Pattern**:
*   **Formation**: A small green candle followed by a larger red candle that completely engulfs the green body.
*   **Meaning**: The bears overwhelmed the bulls.
*   **Context**: Strong signal at the top of an uptrend or at resistance.

**The Piercing Line (Bullish)**:
*   **Formation**: A red candle (Day 1) followed by a green candle that opens below Day 1's Low but closes above the midpoint of Day 1's body.
*   **Meaning**: Sellers tried to continue the downtrend but buyers took over mid-session.

**The Dark Cloud Cover (Bearish)**:
*   **Formation**: A green candle (Day 1) followed by a red candle that opens above Day 1's High but closes below the midpoint of Day 1's body.
*   **Meaning**: Buyers tried to continue the uptrend but sellers took over.

## Part 4: Essential Three-Candle Patterns

The most reliable patterns often involve three candles.

**The Morning Star (Bullish Reversal)**:
*   **Formation**:
    1.  A large red candle (Day 1).
    2.  A small-bodied candle (Doji or Spinning Top) that gaps down (Day 2).
    3.  A large green candle that closes above the midpoint of Day 1 (Day 3).
*   **Meaning**: Day 1 shows selling pressure. Day 2 shows indecision (the "star"). Day 3 shows buyers taking control.
*   **Context**: One of the most reliable bottoming patterns.

**The Evening Star (Bearish Reversal)**:
*   **Formation**:
    1.  A large green candle (Day 1).
    2.  A small-bodied candle that gaps up (Day 2).
    3.  A large red candle that closes below the midpoint of Day 1 (Day 3).
*   **Meaning**: The inverse of the Morning Star. A topping pattern.

**Three White Soldiers (Continuation/Reversal)**:
*   **Formation**: Three consecutive large green candles, each opening within the body of the previous and closing near its high.
*   **Meaning**: Strong bullish momentum. If it occurs at a bottom, it's a reversal signal.

**Three Black Crows (Continuation/Reversal)**:
*   **Formation**: Three consecutive large red candles, each opening within the body of the previous and closing near its low.
*   **Meaning**: Strong bearish momentum. If it occurs at a top, it's a reversal signal.

## Part 5: Context is King

A pattern means nothing without context.

**The Role of Location**:
*   A Hammer at the 200-day moving average? Powerful buy signal.
*   A Hammer in the middle of nowhere? Just noise.
*   *Rule*: Candlestick patterns work best at key levels (Support, Resistance, Trendlines, Fibonacci levels).

**The Role of Trend**:
*   Reversal patterns (Hammer, Engulfing) only work if there is a trend to reverse.
*   A "Bearish Engulfing" after the stock has already fallen 50% is not a sell signal—the damage is done.

**The Role of Volume**:
*   A Hammer on high volume is much more reliable than a Hammer on low volume.
*   Volume confirms that the pattern is backed by real participation.

**The Role of Timeframe**:
*   A pattern on a Weekly chart is more significant than one on a 5-minute chart.
*   Daily and Weekly patterns are the gold standard.

## Part 6: Common Mistakes to Avoid

**Mistake 1: Trading Every Pattern**:
*   Not every Hammer leads to a rally. Not every Engulfing leads to a reversal.
*   *Solution*: Wait for confirmation (e.g., the next candle closes above the signal candle).

**Mistake 2: Ignoring the Bigger Picture**:
*   You see a "Bullish Engulfing" on the 15-minute chart, but the Daily chart is in a massive downtrend.
*   *Solution*: Higher timeframes override lower timeframes.

**Mistake 3: Perfect Pattern Hunting**:
*   "The wick is 1.9x the body, not 2x... it's not a Hammer."
*   *Solution*: Look for the *intent* of the pattern, not a textbook replica.

**Mistake 4: Using Candlesticks Alone**:
*   Candlesticks are a tool, not a strategy. They work best when combined with other indicators (RSI, Moving Averages, Trendlines).

## Part 7: Candlesticks vs. Other Chart Types

Why are candlesticks superior?

**Line Charts**:
*   Shows only the closing price.
*   You lose all information about intraday volatility and sentiment.
*   Useful for seeing long-term trends but useless for trading.

**Bar Charts (OHLC)**:
*   Shows Open, High, Low, Close as a bar.
*   The same data as candlesticks but harder to read visually.
*   Popular with old-school traders.

**Candlesticks**:
*   The body immediately shows who won (bulls or bears).
*   Patterns are easy to recognize at a glance.
*   The global standard for professional trading.

## Part 8: Building a Candlestick Checklist

Before acting on a pattern:

1.  **Identify the Pattern**: What candle or pattern am I looking at?
2.  **Check the Trend**: Is this a continuation or reversal setup?
3.  **Check the Location**: Is the pattern at a key level (S/R, MA, Fib)?
4.  **Check the Volume**: Is there conviction behind this pattern?
5.  **Wait for Confirmation**: Does the next candle confirm the signal?
6.  **Set Risk**: Where is the pattern invalidated (Stop Loss)?
7.  **Set Target**: Where is the logical profit target?

## Part 9: Summary and Key Takeaways

*   **Candlesticks show the battle between buyers and sellers** in a visual, intuitive way.
*   **Single candlestick patterns** (Doji, Hammer, Shooting Star) signal sentiment shifts.
*   **Two-candle patterns** (Engulfing) show momentum reversal.
*   **Three-candle patterns** (Morning Star) are the most reliable.
*   **Context matters**: Patterns work best at key price levels and on higher timeframes.
*   **Don't trade patterns in isolation**: Combine with trend analysis, support/resistance, and volume.
*   **Confirmation is essential**: Wait for the next candle before entering a trade.
\`,
        keyTakeaways: [
            "A candlestick shows Open, High, Low, Close (OHLC) for a given time period.",
            "Green candles are bullish (buyers won); red candles are bearish (sellers won).",
            "Patterns like Hammer, Engulfing, and Morning Star signal potential reversals.",
            "Context (trend, location, volume) is essential for pattern reliability.",
            "Always wait for confirmation before trading a candlestick pattern."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_1 content
const startPattern = /    "ta_1": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_1 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_1 not found!');
}
