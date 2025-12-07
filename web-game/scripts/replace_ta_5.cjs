const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "ta_5": {
        title: "RSI (Relative Strength Index)",
        content: \`
# The Momentum Gauge: Mastering the RSI Indicator

The Relative Strength Index (RSI) is one of the most popular momentum oscillators in technical analysis. Developed by J. Welles Wilder in 1978, RSI measures the speed and magnitude of recent price changes to evaluate whether an asset is overbought or oversold. It is displayed as a line oscillating between 0 and 100, giving traders a quick read on market momentum. But using RSI correctly requires understanding its nuances—not just the basic overbought/oversold zones.

## Part 1: How RSI is Calculated

Understanding the formula helps you interpret the indicator better.

**The Formula**:
*   RSI = 100 - [100 / (1 + RS)]
*   RS (Relative Strength) = Average Gain / Average Loss over the lookback period.

**Breaking It Down**:
1.  Choose a lookback period (default is 14 periods).
2.  Calculate the average of all gains (up closes) over 14 periods.
3.  Calculate the average of all losses (down closes) over 14 periods.
4.  Divide average gain by average loss to get RS.
5.  Plug RS into the formula to get RSI.

**Interpretation**:
*   If gains are large and losses are small, RSI is high (approaching 100).
*   If losses are large and gains are small, RSI is low (approaching 0).
*   RSI measures how aggressive the recent buying or selling has been.

## Part 2: The Classic Overbought/Oversold Zones

The most common way to use RSI.

**Overbought Zone (RSI > 70)**:
*   Price has been rising too fast, too soon.
*   The market may be due for a pullback or reversal.
*   *Caution*: Overbought does NOT mean "sell now." In strong uptrends, RSI can stay overbought for weeks.

**Oversold Zone (RSI < 30)**:
*   Price has been falling too fast, too hard.
*   The market may be due for a bounce or reversal.
*   *Caution*: Oversold does NOT mean "buy now." In strong downtrends, RSI can stay oversold for extended periods.

**The Key Insight**:
Overbought and oversold are warnings, not signals. They say, "Pay attention, momentum is stretched." They do NOT say, "Enter a trade now." Always wait for a price confirmation (e.g., a bullish candlestick in the oversold zone).

## Part 3: Adjusting RSI Levels for the Trend

The default 70/30 levels are not sacred.

**In a Strong Uptrend**:
*   RSI rarely dips below 40. It tends to oscillate between 40 and 80.
*   Adjust your oversold zone to 40 instead of 30.
*   A dip to RSI 40 in a bull market is a buying opportunity.

**In a Strong Downtrend**:
*   RSI rarely rises above 60. It tends to oscillate between 20 and 60.
*   Adjust your overbought zone to 60 instead of 70.
*   A rally to RSI 60 in a bear market is a shorting opportunity.

**Practical Rule**:
*   Bull Market Buying Zone: RSI 40-50.
*   Bear Market Selling Zone: RSI 50-60.

## Part 4: RSI Divergence — The Holy Grail Signal

Divergence is when price and RSI move in opposite directions. It signals that momentum is weakening and a reversal may be imminent.

**Bullish Divergence**:
*   Price makes a **lower low**.
*   RSI makes a **higher low**.
*   Meaning: Sellers are pushing price down, but momentum is weakening. Buyers are silently stepping in.
*   Signal: Potential bullish reversal. Watch for a buy setup.

**Bearish Divergence**:
*   Price makes a **higher high**.
*   RSI makes a **lower high**.
*   Meaning: Buyers are pushing price up, but momentum is fading. Sellers are silently stepping in.
*   Signal: Potential bearish reversal. Watch for a sell setup.

**Hidden Divergence (Continuation)**:
*   **Hidden Bullish Divergence**: Price makes a higher low, RSI makes a lower low. Signals the uptrend will continue.
*   **Hidden Bearish Divergence**: Price makes a lower high, RSI makes a higher high. Signals the downtrend will continue.

**Trading Divergence**:
*   Divergence is a warning, not an immediate entry signal.
*   Wait for price to break a short-term structure (e.g., a neckline) before entering.
*   Combine with candlestick confirmation (Engulfing, Hammer).

## Part 5: RSI Support and Resistance

RSI itself can form support and resistance levels.

**RSI Trendlines**:
*   Draw trendlines on the RSI chart just like you would on price.
*   A break of an RSI trendline often precedes or confirms a price move.

**The 50 Level (Center Line)**:
*   RSI above 50 = Bullish momentum (buyers stronger than sellers).
*   RSI below 50 = Bearish momentum (sellers stronger than buyers).
*   In an uptrend, RSI often bounces off the 50 level as if it were support.
*   In a downtrend, RSI often gets rejected at the 50 level as if it were resistance.

## Part 6: RSI Swing Failures

Wilder's original RSI strategy.

**Bullish Failure Swing**:
1.  RSI falls into oversold (below 30).
2.  RSI bounces above 30 and makes a small swing high.
3.  RSI dips again but stays above 30 (does not make a new low).
4.  RSI breaks above the swing high.
5.  This is a confirmed buy signal.

**Bearish Failure Swing**:
1.  RSI rises into overbought (above 70).
2.  RSI drops below 70 and makes a small swing low.
3.  RSI rises again but stays below 70 (does not make a new high).
4.  RSI breaks below the swing low.
5.  This is a confirmed sell signal.

**Why It Works**:
The failure swing shows that momentum has shifted. The inability to make a new extreme (high or low) signals exhaustion.

## Part 7: Combining RSI with Other Indicators

RSI is most powerful when combined with other tools.

**RSI + Moving Averages**:
*   Use the 50 or 200 SMA to define the trend.
*   Only take RSI buy signals when price is above the MA.
*   Only take RSI sell signals when price is below the MA.

**RSI + Support/Resistance**:
*   RSI oversold + price at horizontal support = Strong buy setup.
*   RSI overbought + price at horizontal resistance = Strong sell setup.

**RSI + MACD**:
*   RSI shows overbought/oversold conditions.
*   MACD shows trend direction and crossovers.
*   When both agree (e.g., RSI oversold + MACD bullish crossover), the signal is reinforced.

**RSI + Candlesticks**:
*   RSI gives the condition  (oversold).
*   The candlestick gives the trigger (Hammer, Bullish Engulfing).
*   Without the candlestick confirmation, do not enter.

## Part 8: Common Mistakes with RSI

**Mistake 1: Buying Oversold Blindly**:
*   "RSI is 25! Time to buy!" — Wrong.
*   In a strong downtrend, RSI can stay below 30 for weeks while price collapses.
*   *Solution*: Wait for a candlestick signal or divergence before acting.

**Mistake 2: Using RSI in Strongly Trending Markets**:
*   In a parabolic rally, RSI will be overbought for months. Selling just because RSI > 70 will cause you to miss the entire move.
*   *Solution*: Use RSI for counter-trend setups in ranges, not in runaway trends.

**Mistake 3: Ignoring Divergence**:
*   Divergence is the most valuable RSI signal, yet many traders only use the overbought/oversold zones.
*   *Solution*: Always scan for divergence at key price levels.

**Mistake 4: Wrong Lookback Period**:
*   The default 14 periods is not always ideal.
*   *Solution*: For faster signals (scalping), use RSI 7. For smoother signals (swing trading), use RSI 21.

## Part 9: Summary and Best Practices

*   **RSI measures momentum** on a scale of 0 to 100.
*   **Overbought (>70)** and **Oversold (<30)** are warnings, not automatic trade signals.
*   **Adjust levels for the trend**: Use 40/80 in bull markets, 20/60 in bear markets.
*   **Divergence is the best signal**: Price makes new high/low, RSI does not = momentum is weakening.
*   **The 50 level** acts as a momentum divider and often as S/R for RSI itself.
*   **Combine RSI with other tools**: S/R, MAs, and candlesticks for confirmation.
*   **Don't use RSI alone in runaway trends**: It will stay overbought/oversold indefinitely.
*   **Failure Swings** are classic, high-probability setups.
\`,
        keyTakeaways: [
            "RSI measures momentum on a scale of 0 to 100.",
            "Overbought (>70) and Oversold (<30) are warnings, not immediate signals.",
            "RSI Divergence is one of the most powerful reversal signals.",
            "The 50 level acts as a momentum divider (bullish above, bearish below).",
            "Always combine RSI with price action, S/R, or candlesticks for confirmation."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old ta_5 content
const startPattern = /    "ta_5": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('ta_5 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('ta_5 not found!');
}
