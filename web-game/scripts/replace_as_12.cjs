const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_12": {
        title: "Trading Volatility (VIX)",
        content: \`
# Trading Volatility: The VIX and Beyond

**[Volatility](/glossary#volatility)** is a measure of how much prices fluctuate. For most investors, [volatility](/glossary#volatility) is something to endure—the roller coaster ride of market ups and downs. But for sophisticated traders, [volatility](/glossary#volatility) itself is an [asset class](/glossary#asset-class) that can be traded directly.

The **VIX** ([CBOE](/glossary#cboe) Volatility [Index](/glossary#index)) is the market's "fear gauge"—it rises when investors are scared and falls when they're complacent. Understanding [volatility](/glossary#volatility) dynamics is essential because [volatility](/glossary#volatility) affects everything from [option](/glossary#options) prices to [risk management](/glossary#risk-management) and portfolio construction. This lesson explores how [volatility](/glossary#volatility) works and how traders can profit from it.

## Part 1: What Is Volatility?

**[Volatility](/glossary#volatility)** measures the degree of price variation over a given period.

*   **Historical [Volatility](/glossary#volatility)**: Measures actual past price movements. Calculated as the standard deviation of returns over a period.
*   **Implied [Volatility](/glossary#volatility) (IV)**: Derived from [option](/glossary#options) prices. It represents the market's expectation of future [volatility](/glossary#volatility)—essentially what the market expects will happen.
*   **High [Volatility](/glossary#volatility)**: Prices are moving dramatically—big swings up and down. Traders are uncertain.
*   **Low [Volatility](/glossary#volatility)**: Prices are calm and stable. Markets are complacent.
*   **Why [Volatility](/glossary#volatility) Matters**:
    *   [Options](/glossary#options) are priced based on implied [volatility](/glossary#volatility). Higher IV = more expensive [options](/glossary#options).
    *   [Risk management](/glossary#risk-management) depends on understanding potential price ranges.
    *   Market [volatility](/glossary#volatility) regimes (calm vs. turbulent) affect which strategies work best.
*   **[Volatility](/glossary#volatility) is Mean-Reverting**: Periods of high [volatility](/glossary#volatility) tend to be followed by low [volatility](/glossary#volatility), and vice versa. This creates trading opportunities.

## Part 2: The VIX — The Fear Index

The **VIX** is the most famous measure of market [volatility](/glossary#volatility) and the foundation of [volatility](/glossary#volatility) trading.

*   **What It Measures**: The expected 30-day [volatility](/glossary#volatility) of the S&P 500, derived from the prices of S&P 500 [options](/glossary#options).
*   **Calculation**: Based on the prices of S&P 500 [options](/glossary#options) across multiple strike prices. A complex weighted average.
*   **"Fear Gauge"**: The VIX rises when investors are fearful and buy [put](/glossary#put-option) [options](/glossary#options) for protection. It falls when markets are calm.
*   **Typical Levels**:
    *   **Below 15**: Low fear, calm markets. Sometimes called complacency.
    *   **15-20**: Normal [volatility](/glossary#volatility). The long-term average.
    *   **20-30**: Elevated fear, market stress.
    *   **Above 30**: High fear, often during corrections or crises.
    *   **40+**: Extreme fear. The VIX hit 80 in 2008 and 82 in March 2020.
*   **VIX and S&P 500**: Generally inversely correlated. When the S&P 500 falls sharply, the VIX rises sharply. When markets are calm and rising, the VIX falls.
*   **VIX Spikes**: The VIX can spike dramatically in hours or days because fear arrives suddenly. But it declines slowly because fear fades gradually.

## Part 3: How to Trade the VIX

You cannot buy the VIX directly—it's an [index](/glossary#index), not a tradeable security. However, several products allow exposure.

### VIX Futures
*   [Futures](/glossary#futures) contracts on the VIX trade on the CBOE Futures Exchange.
*   **Contango**: Usually, longer-dated VIX [futures](/glossary#futures) trade at higher prices than near-term [futures](/glossary#futures). This upward-sloping term structure is called contango.
*   **Backwardation**: During fear spikes, near-term [futures](/glossary#futures) may be higher than longer-dated (an inverted curve).
*   **Roll Cost**: Holding long VIX exposure via [futures](/glossary#futures) costs money due to contango—you're constantly selling cheap near-term and buying expensive later-dated contracts.

### VIX ETFs/ETNs
*   **VXX**: Tracks short-term VIX [futures](/glossary#futures). Decays over time due to contango—about 70% per year in calm markets.
*   **UVXY**: 1.5x leveraged VIX [futures](/glossary#futures) [ETF](/glossary#etf). Even faster decay than VXX.
*   **SVXY**: Inverse VIX (short [volatility](/glossary#volatility)). Profits when [volatility](/glossary#volatility) falls.
*   **Warning**: These products are designed for short-term trading only. Holding long-term virtually guarantees losses due to decay.
*   **Use Case**: Trade around [volatility](/glossary#volatility) spikes, not as long-term investments.

### VIX Options
*   [Options](/glossary#options) on the VIX [index](/glossary#index) itself are available.
*   Used to speculate on [volatility](/glossary#volatility) moves or [hedge](/glossary#hedging) portfolio [risk](/glossary#risk).
*   Settlement is based on VIX Special Opening Quotation—not the VIX close—which can be surprising.

## Part 4: Volatility Trading Strategies

Professional traders use several approaches to trade [volatility](/glossary#volatility) directly.

### Long Volatility
*   **Objective**: Profit when [volatility](/glossary#volatility) rises.
*   **Strategies**:
    *   Buy VXX or UVXY before expected events (elections, [Fed](/glossary#fed) meetings, [earnings](/glossary#earnings) season).
    *   Buy VIX [call](/glossary#call-option) [options](/glossary#options).
    *   Buy long [straddles](/glossary#straddle) or [strangles](/glossary#strangle) on the S&P 500.
*   **When to Use**: When you expect a major move or crisis, but don't know the direction.
*   **[Risk](/glossary#risk)**: Time decay destroys long [volatility](/glossary#volatility) positions in calm markets.

### Short Volatility
*   **Objective**: Profit when [volatility](/glossary#volatility) stays low or declines.
*   **Strategies**:
    *   Sell VIX [futures](/glossary#futures) or put [options](/glossary#options).
    *   Buy SVXY (inverse [volatility](/glossary#volatility) [ETF](/glossary#etf)).
    *   Sell [straddles](/glossary#straddle) or [strangles](/glossary#strangle) on the S&P 500.
    *   Sell [covered calls](/glossary#covered-call) or cash-secured [puts](/glossary#put-option).
*   **When to Use**: In calm markets, when IV is elevated relative to historical levels.
*   **[Risk](/glossary#risk)**: Potentially unlimited losses if [volatility](/glossary#volatility) spikes. Short vol blew up spectacularly in February 2018 ("Volmageddon") and March 2020.

### Volatility Mean Reversion
*   [Volatility](/glossary#volatility) tends to return to its average over time.
*   **High IV**: Sell [volatility](/glossary#volatility) expecting it to fall.
*   **Low IV**: Buy [volatility](/glossary#volatility) expecting it to rise.
*   **Indicator**: Compare current IV to historical IV using IV Rank or IV Percentile.

## Part 5: The VIX Term Structure

The relationship between different VIX [futures](/glossary#futures) maturities reveals important market expectations.

*   **Contango (Normal)**: Longer-dated [futures](/glossary#futures) priced higher than near-term. Markets are calm; future [volatility](/glossary#volatility) is expected to be higher.
*   **Backwardation (Inverted)**: Near-term [futures](/glossary#futures) priced higher than longer-dated. Markets are panicking; current fear exceeds future expectations.
*   **Trading Implications**:
    *   **In Contango**: Long [volatility](/glossary#volatility) products (VXX) decay over time. Short [volatility](/glossary#volatility) strategies profit.
    *   **In Backwardation**: Long [volatility](/glossary#volatility) products gain as they roll into lower prices.
*   **VIX [Futures](/glossary#futures) Curve**: Track the full VIX [futures](/glossary#futures) term structure to understand market sentiment and position appropriately.

## Part 6: Using VIX for Hedging

The VIX is a powerful tool for portfolio protection against market crashes.

*   **Tail [Risk](/glossary#risk) [Hedge](/glossary#hedging)**: Buy VIX [calls](/glossary#call-option) or VXX to protect against sudden market crashes.
    *   In a crash: S&P 500 falls, VIX spikes—your [hedge](/glossary#hedging) pays off.
*   **Cost of Protection**: Long [volatility](/glossary#volatility) [hedges](/glossary#hedging) cost money through time decay. It's like buying insurance—you pay premiums hoping you never need it.
*   **Portfolio Context**: For a portfolio of [stocks](/glossary#stock), a small VIX [call](/glossary#call-option) allocation (2-5%) can provide catastrophic crash protection.
*   **Timing**: [Hedging](/glossary#hedging) is cheapest when no one wants protection (low VIX). [Hedging](/glossary#hedging) is most expensive when fear is already elevated.
*   **Roll Continuously**: Protection expires. To maintain a [hedge](/glossary#hedging), you must roll positions forward—each roll costs money.

## Part 7: Practical Tips for Trading Volatility

Wisdom from experienced [volatility](/glossary#volatility) traders to help you avoid common mistakes.

*   **Respect the [Risk](/glossary#risk)**: [Volatility](/glossary#volatility) can spike faster and higher than you expect. Never underestimate tail [risk](/glossary#risk).
*   **Size Appropriately**: [Volatility](/glossary#volatility) positions can move 10-50%+ in a single day. Keep sizes small.
*   **Avoid Holding Long VIX Products**: VXX, UVXY, and similar products decay relentlessly. Trade them tactically, don't hold them.
*   **Understand the Product**: VIX [options](/glossary#options), [futures](/glossary#futures), and [ETFs](/glossary#etf) all behave differently. Know exactly what you're trading.
*   **Watch the Term Structure**: Contango vs. backwardation determines whether long or short [volatility](/glossary#volatility) has the wind at its back.
*   **IV Rank/Percentile**: Before trading, check if IV is high or low relative to history. High IV = better for selling; low IV = better for buying.
*   **Event Calendars**: [Volatility](/glossary#volatility) often rises before known events ([Fed](/glossary#fed) meetings, [earnings](/glossary#earnings), elections) and collapses immediately after.
*   **Pairs with S&P 500**: Consider how your VIX positions relate to your overall portfolio exposure.

Trading [volatility](/glossary#volatility) is a sophisticated skill that separates amateur traders from professionals. Master it, and you'll have tools to profit—or protect yourself—in virtually any market environment.
\`,
        keyTakeaways: [
            "Volatility measures price fluctuation; implied volatility (IV) is derived from option prices.",
            "The VIX is the S&P 500's 'fear gauge'—it spikes when markets fall and fear rises.",
            "Trade VIX via futures, ETFs (VXX, UVXY, SVXY), or VIX options—never hold VXX long-term.",
            "Long volatility profits from spikes; short volatility profits from calm—both carry significant risk.",
            "Use VIX for hedging portfolio tail risk, but understand the ongoing cost of protection."
        ]
    },`;

const startMarker = '"as_12": {';
const endMarker = '"as_13": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_12: Trading Volatility (VIX) - VALIDATION ===');
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
console.log('✓ Successfully updated as_12!');
