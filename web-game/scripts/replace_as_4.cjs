const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_4": {
        title: "Mean Reversion",
        content: \`
# Mean Reversion: The Rubber Band Effect

**Mean reversion** is a trading strategy based on the idea that prices tend to return to their average over time. When an [asset](/glossary#asset) moves too far from its mean (whether measured by [moving averages](/glossary#moving-average), [Bollinger Bands](/glossary#bollinger-bands), or other metrics), it often snaps back—like a rubber band being released.

This strategy is the philosophical opposite of [breakout](/glossary#breakout) trading. While [breakout](/glossary#breakout) traders bet on momentum continuing, mean reversion traders bet on overextension reversing. Both approaches can be profitable, but they require different market conditions and mindsets.

## Part 1: The Theory Behind Mean Reversion

The concept of mean reversion has roots in statistics and is widely observed in financial markets.

*   **Statistical Basis**: Mean reversion comes from the concept of "regression to the mean"—extreme values tend to be followed by values closer to the average.
*   **Market Application**: When a [stock's](/glossary#stock) price moves significantly above or below its historical average, there's pressure for it to return to that average.
*   **Why It Works**:
    *   **Overreaction**: Markets often overreact to news, pushing prices too far.
    *   **Profit-Taking**: After a big move, early buyers/sellers take profits, reversing momentum.
    *   **[Arbitrage](/glossary#arbitrage)**: Sophisticated traders exploit temporary mispricings.
    *   **Mean-Seeking Behavior**: Institutions rebalance portfolios, adding to underperformers and trimming outperformers.
*   **The Mean**: Can be a simple [moving average](/glossary#moving-average) (SMA), [exponential moving average](/glossary#moving-average) (EMA), [VWAP](/glossary#vwap), or a regression line.
*   **Time Horizons**: Mean reversion can occur over minutes (intraday), days (swing), or months (position).

## Part 2: Identifying Mean Reversion Opportunities

Finding trades where price is stretched too far from the mean.

### Indicators for Mean Reversion
*   **[Bollinger Bands](/glossary#bollinger-bands)**: 
    *   Price touching or exceeding the upper band = potentially overbought.
    *   Price touching or exceeding the lower band = potentially oversold.
    *   Trades enter when price is at the bands and exit at the middle (20 SMA).
*   **[RSI](/glossary#rsi) (Relative Strength Index)**:
    *   RSI above 70 = overbought (potential short).
    *   RSI below 30 = oversold (potential long).
    *   Look for RSI to reverse from extreme levels.
*   **Percent from [Moving Average](/glossary#moving-average)**:
    *   Calculate how far price is from the 20-day or 50-day SMA.
    *   Historical extremes (e.g., 10%+ from SMA) often reverse.
*   **Standard Deviation Bands**: Price 2+ standard deviations from the mean is statistically extreme.
*   **[VWAP](/glossary#vwap) Deviation**: For intraday trading, track how far price is from the [VWAP](/glossary#vwap).

### Other Signals
*   **Exhaustion Candles**: Large [candlesticks](/glossary#candlestick) with long wicks showing rejection.
*   **[Volume](/glossary#volume) Climax**: Huge [volume](/glossary#volume) spike on a parabolic move—often signals the end.
*   **Multi-Day Streaks**: 5+ up or down days in a row is historically rare and often reverses.

## Part 3: Mean Reversion Entry Strategies

How to time your entry when betting on a reversal.

### 1. Counter-Trend on Extremes
*   Enter when the indicator reaches extreme levels ([RSI](/glossary#rsi) < 20 or > 80, price at 2+ standard deviations).
*   Set a [stop-loss](/glossary#stop-loss) beyond the recent extreme.
*   Target the moving average or middle [Bollinger Band](/glossary#bollinger-bands).

### 2. Confirmation Entry
*   Wait for price to reach an extreme AND show a reversal signal (e.g., RSI divergence, reversal candlestick pattern).
*   Reduces the [risk](/glossary#risk) of catching a falling knife.
*   Slightly worse entry price but higher probability.

### 3. Fade the Move Incrementally
*   Add to the position as price moves further from the mean.
*   This is called "averaging down" (or up for shorts).
*   **Warning**: Very risky if the trend continues. Must have strict maximum position size.

### 4. Intraday [VWAP](/glossary#vwap) Reversion
*   When price is significantly below [VWAP](/glossary#vwap), go long expecting a return.
*   When price is significantly above [VWAP](/glossary#vwap), go short.
*   Works best in range-bound or slow-trend days.

## Part 4: Risk Management for Mean Reversion

Mean reversion has specific [risk](/glossary#risk) characteristics that require careful management.

*   **The Biggest Risk**: "The trend is your friend until it ends." If you're betting against a trend, you can be wrong for a long time.
*   **Stop-Loss Placement**:
    *   Place [stops](/glossary#stop-loss) beyond the recent swing high/low.
    *   Or use a volatility-based [stop](/glossary#stop-loss) (e.g., 2x ATR from entry).
*   **Position Sizing**: Because you're fighting momentum, keep positions smaller than you would for trend-following trades.
*   **Maximum Drawdown**: Define how far you'll let a position go against you before cutting losses. Never remove your [stop-loss](/glossary#stop-loss).
*   **Time [Stop](/glossary#stop-loss)**: If the reversal doesn't happen within a set time (e.g., 3 days), exit anyway.
*   **Avoid Strong Trends**: Mean reversion works poorly in strong trending markets. Price can stay overbought/oversold for extended periods.
*   **Know the Catalyst**: If there's real news driving the move (earnings, FDA decision), mean reversion is less reliable.

## Part 5: When Mean Reversion Works (and When It Doesn't)

Choosing the right market conditions is critical.

### Mean Reversion Works Best In:
*   **Range-Bound (Choppy) Markets**: Price oscillates between [support](/glossary#support) and [resistance](/glossary#resistance).
*   **Low [Volatility](/glossary#volatility) Environments**: Stable conditions favor mean-seeking behavior.
*   **High-[Liquidity](/glossary#liquidity) Instruments**: Large-cap [stocks](/glossary#stock), major [indices](/glossary#index), major [forex](/glossary#forex) pairs.
*   **Sector Rotations**: When a sector gets temporarily beaten down without fundamental change.
*   **End of Panic Moves**: After capitulation selling or euphoric buying exhausts itself.

### Mean Reversion Struggles In:
*   **Strong Trends**: Price keeps making new highs/lows; "overbought" becomes "more overbought."
*   **Breakout Environments**: When [breakouts](/glossary#breakout) have follow-through, mean reversion gets run over.
*   **News-Driven Moves**: Fundamental changes justify the new price level.
*   **Low [Float](/glossary#float) or Illiquid [Stocks](/glossary#stock)**: Squeezes can be extreme and sustained.
*   **Parabolic Moves**: Once a [stock](/glossary#stock) goes parabolic, it can keep going far beyond "rational" levels.

## Part 6: Pairs Trading — A Relative Mean Reversion Strategy

**Pairs trading** is a sophisticated form of mean reversion using two correlated [assets](/glossary#asset).

*   **Concept**: If two [stocks](/glossary#stock) normally move together, and one diverges, bet that they'll converge again.
*   **Example**: Coca-Cola (KO) and Pepsi (PEP) usually trade in sync. If KO drops significantly relative to PEP without a specific reason, you might:
    *   Long KO (the underperformer).
    *   Short PEP (the outperformer).
*   **The [Spread](/glossary#spread)**: Track the ratio or difference between the two. Enter when it reaches extremes; exit when it normalizes.
*   **Market Neutrality**: Because you're long one and short the other, you're insulated from overall market direction.
*   **Risks**:
    *   The correlation may break permanently (structural change).
    *   Requires sophisticated analysis and monitoring.
    *   Transaction costs from two positions.

## Part 7: Practical Tips for Mean Reversion Traders

Wisdom from experienced mean reversion practitioners.

*   **Don't Fight Strong Moves**: If the market is clearly trending, step aside. Wait for range-bound conditions.
*   **Use Multiple Confirmation**: Don't rely on just [RSI](/glossary#rsi)—combine with [Bollinger Bands](/glossary#bollinger-bands), price patterns, and sector analysis.
*   **Partial Profits**: Take some profit at the first target (e.g., middle band), let the rest run to the opposite band.
*   **Watch For Divergence**: [RSI](/glossary#rsi) or [MACD](/glossary#macd) divergence from price adds confidence to reversal trades.
*   **Know Your Instrument**: Some [stocks](/glossary#stock) mean revert reliably; others trend hard. Study historical behavior.
*   **Avoid [Earnings](/glossary#earnings) and News**: Don't take mean reversion trades into known catalysts.
*   **Journal Your Trades**: Track what works. Mean reversion edge varies by market regime.
*   **Be Patient**: Sometimes price stays at extremes longer than you expect. Trust your levels but respect your [stops](/glossary#stop-loss).

Mean reversion is a powerful strategy for the right market conditions. Master the art of identifying overextended moves, and you'll profit from the market's tendency to return to equilibrium.
\`,
        keyTakeaways: [
            "Mean reversion bets that prices stretched from their average will snap back.",
            "Key indicators: Bollinger Bands, RSI, percent from moving average, and VWAP deviation.",
            "Works best in range-bound, low-volatility markets; fails in strong trends.",
            "Stop-losses are critical—you're fighting momentum and can be wrong for a long time.",
            "Pairs trading is a relative mean reversion strategy that is market-neutral."
        ]
    },`;

const startMarker = '"as_4": {';
const endMarker = '"as_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_4: Mean Reversion - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated as_4!');
