const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_7": {
        title: "Hedging Your Portfolio",
        content: \`
# Hedging: Insurance for Your Investments

**[Hedging](/glossary#hedging)** is an investment strategy designed to reduce the [risk](/glossary#risk) of adverse price movements in your portfolio. It's like buying insurance—you pay a premium to protect against potential losses. While [hedging](/glossary#hedging) reduces downside [risk](/glossary#risk), it also typically reduces potential upside.

Not every investor needs to [hedge](/glossary#hedging), but understanding [hedging](/glossary#hedging) concepts is valuable for navigating uncertain markets and protecting wealth during turbulent times.

## Part 1: What Is Hedging?

[Hedging](/glossary#hedging) involves taking a position to offset potential losses in another position.

*   **Definition**: A [hedge](/glossary#hedging) is an investment that moves inversely to another investment, reducing overall portfolio [risk](/glossary#risk).
*   **Insurance Analogy**: Just as you pay a premium for car insurance (hoping you never need it), you pay a cost to [hedge](/glossary#hedging) (hoping the market doesn't crash).
*   **Not Speculation**: [Hedging](/glossary#hedging) is about protection, not profit. The goal is to reduce [volatility](/glossary#volatility), not maximize returns.
*   **Trade-Off**: [Hedges](/glossary#hedging) cost money (premiums, carry costs, opportunity cost). They reduce both [risk](/glossary#risk) and potential return.
*   **Perfect vs. Imperfect [Hedges](/glossary#hedging)**: A perfect [hedge](/glossary#hedging) eliminates all [risk](/glossary#risk). In practice, most [hedges](/glossary#hedging) are imperfect—they reduce but don't eliminate [risk](/glossary#risk).
*   **When to [Hedge](/glossary#hedging)**: Before expected [volatility](/glossary#volatility) (elections, [earnings](/glossary#earnings), geopolitical events), when you can't sell (tax reasons, lock-up periods), or when you want to stay invested but sleep better at night.

## Part 2: Common Hedging Instruments

Several tools are available for [hedging](/glossary#hedging) portfolio [risk](/glossary#risk).

### Put Options
*   **How It Works**: Buy a [put option](/glossary#put-option) on a [stock](/glossary#stock) or [index](/glossary#index) you own. If the price falls below the strike, the [put](/glossary#put-option) gains value, offsetting losses.
*   **Advantage**: Limited cost (premium), defined protection.
*   **Disadvantage**: Time decay erodes value; costs accumulate if held continuously.
*   **Example**: Own $100,000 in SPY. Buy a $95 strike [put](/glossary#put-option). If SPY falls to $80, the [put](/glossary#put-option) protects you below $95.

### Inverse ETFs
*   **How It Works**: [ETFs](/glossary#etf) that rise when an [index](/glossary#index) falls.
*   **Examples**: SH (inverse S&P 500), PSQ (inverse Nasdaq), SDS (2x inverse S&P 500).
*   **Advantage**: Easy to trade; no options knowledge required.
*   **Disadvantage**: Subject to decay from daily rebalancing; not ideal for long-term [hedging](/glossary#hedging).

### Short Selling
*   **How It Works**: Short the market [index](/glossary#index) or correlated [assets](/glossary#asset).
*   **Advantage**: Direct [hedge](/glossary#hedging); no expiration.
*   **Disadvantage**: Unlimited loss potential if the market rises; requires margin; dividend liability.

### VIX Products
*   **How It Works**: VIX rises when fear increases. Long VIX positions profit during market crashes.
*   **Products**: VXX, UVXY, VIX [options](/glossary#options).
*   **Advantage**: Spikes dramatically during crashes.
*   **Disadvantage**: Severe decay in calm markets; expensive long-term protection.

### Treasury Bonds
*   **How It Works**: [Bonds](/glossary#bond) typically rise when [stocks](/glossary#stock) crash ("flight to safety").
*   **Advantage**: Positive carry (earn [interest](/glossary#interest-rate)); natural [portfolio diversification](/glossary#diversification).
*   **Disadvantage**: [Correlation](/glossary#correlation) can break down; rising [interest rates](/glossary#interest-rate) hurt [bonds](/glossary#bond).

### Gold
*   **How It Works**: Often considered a "safe haven" during market turmoil.
*   **Advantage**: Physical [asset](/glossary#asset); no counterparty [risk](/glossary#risk); historical crisis performance.
*   **Disadvantage**: No income; [correlation](/glossary#correlation) to [stocks](/glossary#stock) varies.

## Part 3: Hedging Strategies

Different approaches for different situations.

### Portfolio [Put](/glossary#put-option) Protection
*   Buy [puts](/glossary#put-option) on an [index](/glossary#index) [ETF](/glossary#etf) (e.g., SPY) to protect your overall [stock](/glossary#stock) portfolio.
*   Size the [put](/glossary#put-option) to the portfolio value you want to protect.
*   Choose strike and expiration based on the level of protection needed and cost tolerance.

### Collar Strategy
*   Buy a [put](/glossary#put-option) for downside protection AND sell a [call](/glossary#call-option) to offset the [put's](/glossary#put-option) cost.
*   Limits both downside and upside.
*   Often done at zero or low net cost.

### Tail [Risk](/glossary#risk) [Hedging](/glossary#hedging)
*   Buy far out-of-the-money [puts](/glossary#put-option) to protect against catastrophic moves (2008-style crashes).
*   Very cheap most of the time; pays off dramatically in crashes.
*   Small, continuous allocation (1-3% of portfolio) to tail [hedges](/glossary#hedging).

### Cross-[Asset](/glossary#asset) [Hedging](/glossary#hedging)
*   Use [assets](/glossary#asset) that naturally move inversely to your main holdings.
*   [Bonds](/glossary#bond) to [hedge](/glossary#hedging) [stocks](/glossary#stock); gold to [hedge](/glossary#hedging) inflation/currency; short [commodities](/glossary#commodities) to [hedge](/glossary#hedging) manufacturing costs.

### Currency [Hedging](/glossary#hedging)
*   For international investments, currency fluctuations add [risk](/glossary#risk).
*   Use currency forwards, futures, or hedged [ETFs](/glossary#etf) to neutralize exchange rate [risk](/glossary#risk).

## Part 4: Cost of Hedging

[Hedges](/glossary#hedging) aren't free—understand the costs.

*   **Option Premiums**: [Puts](/glossary#put-option) cost money. The more protection, the higher the cost.
*   **Time Decay**: [Options](/glossary#options) lose value over time. Continuous protection requires rolling [hedges](/glossary#hedging).
*   **Opportunity Cost**: Money spent on [hedges](/glossary#hedging) could have been invested in productive [assets](/glossary#asset).
*   **Reduced Returns**: In up markets, [hedges](/glossary#hedging) are a drag on performance.
*   **Complexity**: Managing [hedges](/glossary#hedging) requires attention and skill. Mistakes can be costly.
*   **When It Costs Most**: [Hedging](/glossary#hedging) is most expensive when you need it most—during high [volatility](/glossary#volatility). That's when fear is priced into [options](/glossary#options).
*   **When It's Cheapest**: [Hedge](/glossary#hedging) when [volatility](/glossary#volatility) is low and markets are calm. Protection is cheap when no one wants it.

## Part 5: When to Hedge (and When Not To)

[Hedging](/glossary#hedging) isn't always the right choice.

### Good Times to Hedge
*   **Before Known Events**: [Earnings](/glossary#earnings), elections, [Fed](/glossary#fed) meetings, geopolitical crises.
*   **At Market Highs**: When valuations are stretched and [risk](/glossary#risk) is elevated.
*   **When You Can't Sell**: Restricted stock, tax considerations, concentrated positions.
*   **Approaching Goals**: Near retirement or major purchases, you have less time to recover.
*   **Large Concentrated Positions**: Company [stock](/glossary#stock), inheritance, founder [shares](/glossary#stock).

### Poor Times to Hedge
*   **After a Crash**: Protection is expensive after the drop. The damage is done.
*   **Long Time Horizons**: Young investors can ride out [volatility](/glossary#volatility). [Hedging](/glossary#hedging) costs compound.
*   **Small Portfolios**: Transaction costs may outweigh benefits.
*   **Excessive [Hedging](/glossary#hedging)**: If protection costs too much, just reduce the underlying position.

### Alternative to [Hedging](/glossary#hedging)
*   Sometimes the best "[hedge](/glossary#hedging)" is simply reducing position size.
*   If you're worried about a position, consider selling some rather than paying to [hedge](/glossary#hedging) it.

## Part 6: Hedging Mistakes to Avoid

Common errors that undermine [hedging](/glossary#hedging) effectiveness.

*   **Over-[Hedging](/glossary#hedging)**: [Hedging](/glossary#hedging) so much that you eliminate all upside. At that point, just sell.
*   **Under-[Hedging](/glossary#hedging)**: A token [hedge](/glossary#hedging) that doesn't provide meaningful protection.
*   **Wrong Instrument**: Using a [hedge](/glossary#hedging) that doesn't match your underlying exposure.
*   **Wrong Timing**: [Hedging](/glossary#hedging) after [volatility](/glossary#volatility) spikes (expensive) rather than before.
*   **Set and Forget**: Not monitoring and adjusting [hedges](/glossary#hedging) as conditions change.
*   **Panic [Hedging](/glossary#hedging)**: Buying protection after a 20% drop. The crash premium is already priced in.
*   **Neglecting Costs**: Ignoring the drag that continuous [hedging](/glossary#hedging) creates on long-term returns.

## Part 7: Practical Hedging for Individual Investors

How to implement [hedging](/glossary#hedging) in your own portfolio.

*   **Simple [Diversification](/glossary#diversification)**: The easiest "[hedge](/glossary#hedging)"—own [bonds](/glossary#bond), international [stocks](/glossary#stock), and other uncorrelated [assets](/glossary#asset).
*   **[Index](/glossary#index) [Puts](/glossary#put-option) for Large Portfolios**: If you have $100,000+ in [stocks](/glossary#stock), consider buying [index](/glossary#index) [puts](/glossary#put-option) during high-[risk](/glossary#risk) periods.
*   **Tail [Hedge](/glossary#hedging) Allocation**: Consider a small (2-3%) permanent allocation to deep out-of-the-money [puts](/glossary#put-option) or VIX [calls](/glossary#call-option).
*   **[Covered Calls](/glossary#covered-call)**: Sell [calls](/glossary#call-option) against [stock](/glossary#stock) holdings to generate income that partially offsets declines.
*   **Stay Informed**: Know when major events are coming and consider temporary [hedges](/glossary#hedging).
*   **Don't Overdo It**: For most long-term investors, simple [diversification](/glossary#diversification) and [stop-losses](/glossary#stop-loss) are sufficient. Active [hedging](/glossary#hedging) is for specific situations.
*   **Consult Professionals**: Complex [hedging](/glossary#hedging) strategies may benefit from professional advice.

[Hedging](/glossary#hedging) is a powerful tool for managing [risk](/glossary#risk), but it's not free and not always necessary. Use it thoughtfully, understand the costs, and remember that the best [hedge](/glossary#hedging) is often simply not taking excessive [risk](/glossary#risk) in the first place.
\`,
        keyTakeaways: [
            "Hedging protects against losses but costs money and reduces potential upside.",
            "Common instruments: put options, inverse ETFs, VIX products, bonds, and gold.",
            "Strategies include protective puts, collars, tail-risk hedging, and cross-asset hedging.",
            "Hedge before volatility spikes (cheap) rather than after (expensive).",
            "For most investors, diversification is the simplest and most cost-effective hedge."
        ]
    },`;

const startMarker = '"pm_7": {';
const endMarker = '"pm_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_7: Hedging Your Portfolio - VALIDATION ===');
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
console.log('✓ Successfully updated pm_7!');
