const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_3": {
        title: "Rebalancing Your Portfolio",
        content: \`
# Rebalancing: Keeping Your Portfolio on Track

**Rebalancing** is the process of realigning your portfolio back to your target [asset allocation](/glossary#asset-allocation). As markets move, some investments grow faster than others, causing your allocation to drift from your plan. Rebalancing restores the original weights, maintaining your intended [risk](/glossary#risk) level and [diversification](/glossary#diversification).

Rebalancing is a disciplined practice that forces you to buy low and sell high—the opposite of what most investors do emotionally. It's a simple but powerful technique for long-term success.

## Part 1: Why Rebalancing Matters

Portfolios drift over time, and that drift has consequences.

*   **Maintaining [Risk](/glossary#risk) Level**: If your target is 60% [stocks](/glossary#stock)/40% [bonds](/glossary#bond), but a bull market pushes you to 75% [stocks](/glossary#stock), you're now exposed to more [risk](/glossary#risk) than you intended.
*   **Preserving [Diversification](/glossary#diversification)**: Concentrated positions reduce [diversification](/glossary#diversification) benefits.
*   **Forced Discipline**: Rebalancing makes you sell what's gone up (sell high) and buy what's lagged (buy low)—countercyclical behavior that improves returns.
*   **Removing Emotion**: A systematic rebalancing rule removes the temptation to chase winners or hold losers.
*   **Example**: In 1999, tech [stocks](/glossary#stock) soared. Portfolios that rebalanced sold some tech and bought other [assets](/glossary#asset). When tech crashed in 2000-2002, rebalanced portfolios suffered less.

## Part 2: How Drift Happens

Understanding drift helps you appreciate why rebalancing is necessary.

*   **Bull Markets**: Riskier [assets](/glossary#asset) ([stocks](/glossary#stock)) outperform, increasing their weight.
*   **Bear Markets**: Riskier [assets](/glossary#asset) fall more, decreasing their weight.
*   **Different Return Rates**: Even in stable markets, different [assets](/glossary#asset) grow at different speeds.
*   **Example Scenario**:
    *   You start with $60,000 in [stocks](/glossary#stock) and $40,000 in [bonds](/glossary#bond) (60/40).
    *   [Stocks](/glossary#stock) rise 25%, [bonds](/glossary#bond) rise 5%.
    *   New values: [Stocks](/glossary#stock) = $75,000, [Bonds](/glossary#bond) = $42,000. Total = $117,000.
    *   New allocation: [Stocks](/glossary#stock) = 64%, [Bonds](/glossary#bond) = 36%. You've drifted 4%.
*   **Compounding Drift**: Over years without rebalancing, drift can become extreme—70%, 80%, or more in one [asset class](/glossary#asset-class).

## Part 3: Rebalancing Methods

There are several approaches to rebalancing, each with trade-offs.

### Calendar Rebalancing
*   **Method**: Rebalance at fixed intervals—quarterly, semi-annually, or annually.
*   **Advantages**: Simple, predictable, easy to automate.
*   **Disadvantage**: May rebalance when unnecessary or miss rebalancing opportunities between intervals.
*   **Common Choice**: Annual rebalancing (often at year-end for tax planning purposes).

### Threshold Rebalancing
*   **Method**: Rebalance when any [asset class](/glossary#asset-class) drifts beyond a set threshold (e.g., ±5% from target).
*   **Advantages**: Only trades when necessary. Reacts to significant market moves.
*   **Disadvantage**: Requires monitoring; may trigger frequent rebalancing in volatile markets.
*   **Example**: Target is 60% [stocks](/glossary#stock). Rebalance if [stocks](/glossary#stock) exceed 65% or drop below 55%.

### Hybrid Approach
*   **Method**: Check at fixed intervals AND rebalance if thresholds are breached.
*   **Example**: Review quarterly; rebalance if any [asset class](/glossary#asset-class) is ±5% off target.
*   **Advantage**: Balances simplicity with responsiveness.

### Cash Flow Rebalancing
*   **Method**: Direct new contributions to underweight [assets](/glossary#asset) instead of selling.
*   **Advantages**: No trading costs; no taxable events.
*   **Best For**: Those still in the accumulation phase with regular contributions.

## Part 4: The Mechanics of Rebalancing

How to actually execute a rebalancing transaction.

### Step-by-Step Process
1.  **Calculate Current Values**: Determine the current market value of each [asset class](/glossary#asset-class).
2.  **Calculate Current Weights**: Divide each [asset class](/glossary#asset-class) value by total portfolio value.
3.  **Compare to Target**: Identify which [assets](/glossary#asset) are overweight and underweight.
4.  **Determine Trade Amounts**: Calculate how much to sell from overweight and buy into underweight.
5.  **Execute Trades**: Place orders. Consider using limit orders for better prices.
6.  **Document**: Record the rebalancing for future reference.

### Example Calculation
*   Portfolio: $100,000 total. Target: 60% [stocks](/glossary#stock), 40% [bonds](/glossary#bond).
*   Current: [Stocks](/glossary#stock) $70,000 (70%), [Bonds](/glossary#bond) $30,000 (30%).
*   To rebalance: Sell $10,000 [stocks](/glossary#stock); buy $10,000 [bonds](/glossary#bond).
*   Result: [Stocks](/glossary#stock) $60,000 (60%), [Bonds](/glossary#bond) $40,000 (40%).

## Part 5: Tax Considerations

Rebalancing in taxable accounts triggers tax consequences.

*   **Capital Gains**: Selling winners generates taxable gains in taxable accounts.
*   **Long-Term vs. Short-Term**: Gains on [assets](/glossary#asset) held over a year are taxed at lower long-term rates.
*   **Tax-Loss Harvesting**: If selling losers during rebalancing, you can use losses to offset gains.
*   **Tax-Advantaged Accounts**: Rebalance in IRAs, 401(k)s, and other tax-advantaged accounts first—no tax consequences.
*   **Tax-Efficient Placement**: Keep assets that generate regular taxable income ([bonds](/glossary#bond), [REITs](/glossary#reit)) in tax-advantaged accounts.
*   **Asset Location Strategy**: Consider your entire portfolio across accounts. Rebalance by trading in the most tax-efficient location.
*   **Cash Flow Rebalancing**: Using new contributions avoids selling and the associated taxes.

## Part 6: Rebalancing Frequency — How Often?

Finding the right rebalancing frequency involves trade-offs.

### Too Frequent
*   More trading costs (commissions, bid-ask [spreads](/glossary#spread)).
*   More taxable events in taxable accounts.
*   May miss out on momentum—selling winners too early.

### Too Infrequent
*   [Risk](/glossary#risk) level drifts significantly from target.
*   Lose the "buy low, sell high" discipline.
*   Miss rebalancing opportunities after large market moves.

### Research Findings
*   Studies suggest annual rebalancing performs similarly to more frequent approaches with lower costs.
*   Threshold-based rebalancing at ±5% thresholds has performed well historically.
*   The exact frequency matters less than having a systematic approach.

### Practical Guidance
*   **Annual Calendar**: Simple and effective for most investors.
*   **5% Threshold with Quarterly Check**: Good balance of responsiveness and simplicity.
*   **Stay Consistent**: Whatever method you choose, stick to it.

## Part 7: Common Rebalancing Mistakes

Avoid these pitfalls when rebalancing.

*   **Never Rebalancing**: Letting your portfolio drift indefinitely defeats the purpose of [asset allocation](/glossary#asset-allocation).
*   **Rebalancing Too Often**: Excessive trading costs and taxes erode returns.
*   **Emotional Rebalancing**: Changing your target allocation based on recent performance. Your target should be stable.
*   **Ignoring Costs**: Transaction costs and taxes matter. Minimize them through smart rebalancing.
*   **Forgetting Across Accounts**: Consider all accounts (taxable, IRA, 401k) as one portfolio when calculating allocation.
*   **Rebalancing Small Drifts**: A 1% drift doesn't warrant action. Use thresholds.
*   **Chasing Performance**: Thinking "I'll rebalance after [stocks](/glossary#stock) recover a bit more." Defeats the purpose.

### Best Practice
*   Set your rebalancing rules in advance (calendar, threshold, or hybrid).
*   Automate if possible (many 401(k)s and robo-advisors offer automatic rebalancing).
*   Execute mechanically without second-guessing based on market conditions.

Rebalancing is one of the simplest yet most powerful portfolio management techniques. It enforces discipline, maintains your [risk](/glossary#risk) profile, and systematically implements "buy low, sell high." Make it a habit.
\`,
        keyTakeaways: [
            "Rebalancing restores your portfolio to target allocation as market moves cause drift.",
            "It forces discipline: sell what's risen (high) and buy what's lagged (low).",
            "Methods: calendar (fixed intervals), threshold (when drift exceeds limit), or hybrid.",
            "Prioritize rebalancing in tax-advantaged accounts to minimize tax consequences.",
            "Annual rebalancing with 5% thresholds works well for most investors."
        ]
    },`;

const startMarker = '"pm_3": {';
const endMarker = '"pm_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_3: Rebalancing Your Portfolio - VALIDATION ===');
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
console.log('✓ Successfully updated pm_3!');
