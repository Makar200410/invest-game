const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_4": {
        title: "Moving Averages (SMA/EMA)",
        content: \`
# The Smoother Path: Mastering Moving Averages

Price action is noisy. Day-to-day volatility makes it hard to see the underlying trend. **Moving Averages (MAs)** solve this problem by smoothing out price data, revealing the true direction of the market. They are the most widely used indicators in technical analysis for good reason: they work. From day traders to central banks, everyone watches moving averages. This lesson teaches you how to use them.

## Part 1: What is a Moving Average?

A moving average is simply the average price over a specified number of periods.

**The Basic Concept**:
*   Take the last 10 closing prices.
*   Add them together and divide by 10.
*   You get the 10-period moving average.
*   As each new candle closes, the oldest price is dropped and the newest is added. The average "moves."

**Why It's Useful**:
*   Filters out noise. You see the trend, not the chaos.
*   Provides dynamic support and resistance.
*   Creates clear buy/sell signals.

**The Two Main Types**:
1.  **Simple Moving Average (SMA)**: Every price is weighted equally.
2.  **Exponential Moving Average (EMA)**: Recent prices are weighted more heavily.

## Part 2: Simple Moving Average (SMA)

The most basic form of moving average.

**Calculation**:
*   SMA = (P1 + P2 + P3 + ... + Pn) / n
*   Where P = Price and n = Number of periods.

**Example** (5-day SMA):
*   Day 1: $100
*   Day 2: $102
*   Day 3: $101
*   Day 4: $105
*   Day 5: $103
*   SMA = (100 + 102 + 101 + 105 + 103) / 5 = **$102.20**

**Characteristics**:
*   Smooth line.
*   Lags behind price (because it uses past data).
*   Longer periods = smoother line = more lag.
*   Shorter periods = choppier line = less lag.

**Common SMA Periods**:
*   **20 SMA**: Short-term trend. Used by swing traders.
*   **50 SMA**: Intermediate-term trend. Widely watched.
*   **100 SMA**: Medium-term trend.
*   **200 SMA**: Long-term trend. The "big one." Institutional level.

## Part 3: Exponential Moving Average (EMA)

The EMA gives more weight to recent prices, making it more responsive.

**Why Use EMA?**:
*   Price today is more relevant than price 50 days ago.
*   EMA reacts faster to recent changes.
*   Better for short-term trading and fast-moving markets.

**Calculation** (Simplified):
*   Multiplier = 2 / (Period + 1)
*   EMA Today = (Close - EMA Yesterday) × Multiplier + EMA Yesterday
*   *Note*: Most platforms calculate this automatically.

**Characteristics**:
*   More responsive than SMA.
*   Less lag.
*   Can whipsaw more in choppy markets.

**Common EMA Periods**:
*   **9 EMA**: Very short-term. Day traders love it.
*   **12 EMA**: Short-term. Used in MACD.
*   **21 EMA**: Popular swing trading level.
*   **26 EMA**: Used in MACD.
*   **50 EMA**: Intermediate trend.

## Part 4: SMA vs. EMA — Which to Use?

There is no "better" choice. It depends on your style.

**Use SMA When**:
*   You want a smoother, less reactive line.
*   You are a longer-term investor.
*   You want to avoid false signals in choppy markets.

**Use EMA When**:
*   You need faster signals.
*   You are day trading or scalping.
*   You are trading fast-moving assets (crypto, high-beta stocks).

**Practical Approach**:
*   Many traders use both. For example: 200 SMA for long-term trend, 9 EMA for short-term entries.
*   Test what works for your trading style.

## Part 5: Moving Averages as Dynamic Support and Resistance

MAs are not just trend indicators; they are price levels.

**In an Uptrend**:
*   Price tends to bounce off the moving average.
*   The 50 SMA/EMA is a popular pullback level.
*   If price dips to the 50 MA and forms a bullish candle, it's a buy signal.

**In a Downtrend**:
*   Price tends to get rejected at the moving average.
*   The 50 SMA/EMA acts as dynamic resistance.
*   If price rallies to the 50 MA and forms a bearish candle, it's a sell signal.

**The 200-Day SMA**:
*   The most significant level.
*   Institutions watch this line. When price closes above the 200 SMA, funds that are mandated to be "long only in bull markets" start buying.
*   If price is above the 200 SMA, the market is considered "bullish."
*   If price is below the 200 SMA, the market is considered "bearish."

## Part 6: The Golden Cross and Death Cross

The most famous MA signals.

**The Golden Cross (Bullish)**:
*   The 50-day SMA crosses **above** the 200-day SMA.
*   Interpretation: Short-term momentum is now bullish, and it's strong enough to overcome the long-term average.
*   This is a major buy signal. It often marks the start of a bull market.
*   *Caution*: It is a lagging signal. By the time it happens, price has already moved.

**The Death Cross (Bearish)**:
*   The 50-day SMA crosses **below** the 200-day SMA.
*   Interpretation: Short-term momentum is now bearish, dragging the market lower.
*   This is a major sell signal. It often marks the start of a bear market.
*   *Caution*: It can produce false signals in choppy markets.

## Part 7: Using Multiple Moving Averages

Combining MAs gives you a complete picture.

**The Moving Average Ribbon**:
*   Plot several MAs of increasing period (e.g., 10, 20, 50, 100, 200).
*   When all MAs are aligned (shortest on top, longest on bottom), the trend is strong.
*   When MAs are tangled and crossing each other, the market is ranging/indecisive.

**The Short-Term/Long-Term Combo**:
*   Use the 200 SMA to determine the trend direction.
*   Use the 9 or 21 EMA for entry signals.
*   *Rule*: Only take long entries when price is above the 200 SMA. Only take short entries when price is below the 200 SMA.

## Part 8: Common Mistakes with Moving Averages

**Mistake 1: Using MAs in Ranging Markets**:
*   MAs are trend-following indicators. In a sideways market, they whipsaw back and forth, generating endless false signals.
*   *Solution*: Identify if you are in a trending or ranging market before using MAs.

**Mistake 2: Using Too Many MAs**:
*   Plotting 10 MAs on your chart creates confusion, not clarity.
*   *Solution*: Use 2-3 key MAs (e.g., 20, 50, 200).

**Mistake 3: Treating MA Crossovers as Holy Grails**:
*   The Golden Cross sounds great, but it can lag by months. By the time it triggers, you may have missed half the move.
*   *Solution*: Use crossovers for confirmation, not as primary entry signals.

**Mistake 4: Ignoring the Context**:
*   A 50 SMA bounce means nothing if the stock is hitting major resistance.
*   *Solution*: Always combine MAs with other analysis (S/R, candlesticks, volume).

## Part 9: Summary and Best Practices

*   **SMA** = Equal weight to all prices. Smoother. More lag.
*   **EMA** = More weight to recent prices. Faster. Less lag.
*   **200-day SMA** is the key institutional level. Above = Bullish. Below = Bearish.
*   **Golden Cross** (50 above 200) = Major buy signal.
*   **Death Cross** (50 below 200) = Major sell signal.
*   **MAs act as dynamic support/resistance** in trends.
*   **Don't use MAs in ranges** — they will whipsaw.
*   **Combine MAs with other tools** (candlesticks, S/R, volume) for best results.
*   **Simplicity is key**: 2-3 MAs are enough.
\`,
        keyTakeaways: [
            "Moving Averages smooth price data to reveal the underlying trend.",
            "SMA treats all prices equally; EMA gives more weight to recent prices.",
            "The 200-day SMA is the most significant level for long-term trend.",
            "Golden Cross (50 > 200) is bullish; Death Cross (50 < 200) is bearish.",
            "MAs work best in trending markets, not ranges."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_4 content
const startPattern = /    "ta_4": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_4 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_4 not found!');
}
