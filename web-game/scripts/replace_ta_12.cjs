const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_12": {
        title: "Multi-Timeframe Analysis",
        content: \`
# The Bigger Picture: Mastering Multi-Timeframe Analysis

The biggest mistake beginners make is analyzing only one timeframe. They see a buy signal on the 5-minute chart and enter a trade, unaware that the Daily chart shows the stock is hitting major resistance and about to collapse. Multi-Timeframe Analysis (MTA) solves this problem by aligning your trades with the bigger picture. When higher and lower timeframes agree, the probability of success skyrockets. This lesson teaches you to see the market from multiple perspectives.

## Part 1: The Hierarchy of Timeframes

Timeframes are not created equal. Higher timeframes carry more weight.

**The Hierarchy**:
*   **Monthly**: The highest level. Shows the secular trend (years).
*   **Weekly**: The big picture. Shows the primary trend (months to years).
*   **Daily**: The standard for swing traders. Shows the intermediate trend (weeks to months).
*   **4-Hour**: The bridge between Daily and intraday.
*   **1-Hour**: Common for active traders.
*   **15-Minute**: Intraday. Used for timing entries.
*   **5-Minute / 1-Minute**: Scalping. Noise for most traders.

**The Golden Rule**:
*   The higher the timeframe, the more significant the signal.
*   A resistance level on the Weekly chart is far stronger than one on the 15-minute chart.
*   The trend on the Daily chart overrides the trend on the 5-minute chart.

## Part 2: The Top-Down Approach

The standard method for multi-timeframe analysis.

**Step 1: Start with the Highest Timeframe**:
*   Look at the Weekly (or Monthly) chart.
*   Identify the primary trend: Is the market in an uptrend, downtrend, or range?
*   Mark key support/resistance levels.

**Step 2: Move to the Intermediate Timeframe**:
*   Look at the Daily chart.
*   Does the Daily trend align with the Weekly?
*   Identify more detailed S/R levels, moving averages, and patterns.

**Step 3: Zoom to the Execution Timeframe**:
*   Look at the 4-Hour or 1-Hour chart.
*   Find the specific entry signal (candlestick pattern, indicator signal).
*   Time your trade with precision.

**The Rule of Three**:
*   Use three timeframes: Higher, Intermediate, and Execution.
*   Example: Weekly (trend), Daily (setup), 4-Hour (entry).
*   Or: Daily (trend), 4-Hour (setup), 1-Hour (entry).

## Part 3: Identifying Trend Agreement

The most powerful setups occur when all timeframes align.

**Bullish Alignment**:
*   Weekly: Uptrend (price above 50 SMA, higher highs and higher lows).
*   Daily: Uptrend. Pullback to support (e.g., 20 EMA).
*   4-Hour: Bullish candlestick pattern (Hammer, Engulfing) at the support.
*   This is a high-probability buy.

**Bearish Alignment**:
*   Weekly: Downtrend (price below 50 SMA, lower highs and lower lows).
*   Daily: Downtrend. Rally to resistance (e.g., 20 EMA).
*   4-Hour: Bearish candlestick pattern (Shooting Star, Engulfing) at the resistance.
*   This is a high-probability sell/short.

**Conflict (No Trade)**:
*   Weekly: Uptrend.
*   Daily: Downtrend (counter-trend).
*   The timeframes conflict. Proceed with caution or stay out.

## Part 4: Key Levels on Higher Timeframes

Higher timeframe levels are the most significant.

**Weekly Support/Resistance**:
*   If price is approaching a Weekly resistance level, expect a strong reaction.
*   Even if the Daily chart shows bullish momentum, the Weekly resistance may cap the rally.

**Monthly Trendlines**:
*   A trendline drawn on the Monthly chart has been respected for years.
*   Breaking a Monthly trendline is a major event.

**The 200-Day SMA on Weekly/Daily**:
*   Institutions watch the 200-day SMA.
*   If the Daily closes above/below the 200 SMA, the Weekly will eventually follow. This is a major trend signal.

**Fibonacci on Higher Timeframes**:
*   Draw Fibonacci retracements on the Weekly chart.
*   A 61.8% retracement on the Weekly is extremely significant, even if the 4-Hour chart looks bearish.

## Part 5: Timing Entries on Lower Timeframes

Higher timeframes give you direction; lower timeframes give you precision.

**The Scenario**:
*   Weekly: Uptrend.
*   Daily: Pullback to the 50 SMA (potential support).
*   Action: Zoom to the 1-Hour chart to find the exact entry.

**Entry Techniques on Lower Timeframe**:
*   Wait for a bullish candlestick pattern (Hammer, Bullish Engulfing).
*   Wait for RSI to exit oversold (cross above 30).
*   Wait for price to break above a short-term resistance (e.g., the high of the previous 4 hours).

**Stop Loss Placement**:
*   Stop should be based on the Intermediate timeframe level, not the Execution timeframe.
*   If the Daily shows support at $100, place the stop below $100, even if your entry is on the 1-Hour.

## Part 6: Avoiding Common Timeframe Mistakes

**Mistake 1: Shorting Below Daily Support While Weekly is Bullish**:
*   The Daily chart breaks support and you short. But the Weekly trend is strongly bullish.
*   The "breakdown" is a fakeout. Price reverses and rallies.
*   *Solution*: Only short if the Weekly also shows weakness.

**Mistake 2: Buying on a 5-Minute Signal Without Checking Daily**:
*   The 5-minute chart shows a perfect buy setup. You go long.
*   But the Daily chart is at major resistance. Price immediately rejects.
*   *Solution*: Always check higher timeframes before entering.

**Mistake 3: Overcomplicating with Too Many Timeframes**:
*   Analyzing Weekly, Daily, 4-Hour, 1-Hour, 15-Minute, 5-Minute all at once.
*   You get conflicting signals and freeze.
*   *Solution*: Stick to three timeframes max.

**Mistake 4: Exiting Too Early on Lower Timeframe Noise**:
*   You entered based on the Daily chart. But you exit on a 15-minute red candle.
*   The noise shakes you out, and the trade goes on to hit your target.
*   *Solution*: Manage the trade on the timeframe you entered.

## Part 7: Multi-Timeframe Indicator Settings

Indicators behave differently on different timeframes.

**RSI on Higher Timeframes**:
*   RSI on the Weekly chart is more significant than RSI on the 5-minute.
*   Weekly RSI below 30 = major oversold condition. Strong signal.
*   5-minute RSI below 30 = minor oversold. Often noise.

**Moving Averages Across Timeframes**:
*   The 200 SMA on the Daily is more significant than the 200 SMA on the 1-Hour.
*   Watch for alignment: Daily price above 200 SMA AND 4-Hour price above 50 SMA = strong bullish.

**MACD on Higher Timeframes**:
*   A bullish MACD crossover on the Weekly is a major buy signal.
*   On the 15-minute, it might just be noise.

**Volume on Lower Timeframes**:
*   Volume on the 1-minute chart is almost meaningless.
*   Daily and Weekly volume provides better insight into institutional activity.

## Part 8: Practical Multi-Timeframe Workflows

**Swing Trading Workflow**:
1.  **Weekly Chart**: Identify the trend. Mark major S/R.
2.  **Daily Chart**: Look for setups (pullback to support, pattern formation).
3.  **4-Hour Chart**: Time your entry with a candlestick pattern or indicator signal.

**Day Trading Workflow**:
1.  **Daily Chart**: Identify the trend and key levels (yesterday's high/low, 200 SMA).
2.  **1-Hour Chart**: Identify intraday S/R and the current swing.
3.  **15-Minute Chart**: Time your entry.

**Position Trading Workflow**:
1.  **Monthly Chart**: Identify the secular trend.
2.  **Weekly Chart**: Look for pullbacks or pattern completions.
3.  **Daily Chart**: Time your entry.

## Part 9: Summary and Best Practices

*   **Higher timeframes override lower timeframes**. The Weekly trend is more important than the 5-minute.
*   **Use the Top-Down Approach**: Start high, work down.
*   **Use three timeframes**: Trend (higher), Setup (intermediate), Entry (lower).
*   **The best trades have aligned timeframes**: Weekly, Daily, and Intraday all agreeing.
*   **Key levels from higher timeframes are sacred**. Respect them even if lower timeframes look contradictory.
*   **Time your entry on lower timeframes** for precision, but manage the trade on your setup timeframe.
*   **Don't overtrade noise on lower timeframes**. Stay focused on the bigger picture.
*   **Indicators are more significant on higher timeframes**.
\`,
        keyTakeaways: [
            "Higher timeframes (Weekly, Daily) override lower timeframes (15-min, 1-hour).",
            "Use the Top-Down Approach: analyze the trend on high TF, setup on mid TF, entry on low TF.",
            "The best trades occur when all timeframes are aligned in direction.",
            "Key levels from higher timeframes are more significant than lower TF levels.",
            "Manage your trade on the timeframe you used for the setup, not the entry."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_12 content
const startPattern = /    "ta_12": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_12 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_12 not found!');
}
