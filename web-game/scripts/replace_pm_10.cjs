const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_10": {
        title: "Drawdown Control",
        content: \`
# Drawdown Control: Surviving the Worst Times

A **drawdown** is the peak-to-trough decline in portfolio value before a new high is reached. It measures how much you've lost from your highest point—the amount of pain you've endured before recovery. Managing drawdowns is essential because large drawdowns can destroy portfolios, investor psychology, and long-term compounding.

## Part 1: Understanding Drawdowns

Drawdowns represent the real experience of investment loss.

*   **Definition**: Drawdown = (Peak Value - Current Value) / Peak Value
*   **Example**: Your portfolio peaks at $100,000, then drops to $70,000. Drawdown = 30%.
*   **Maximum Drawdown**: The largest peak-to-trough decline over a period. This is the "worst case" you experienced.
*   **Recovery Time**: How long it takes to return to the previous peak after a drawdown.
*   **Why It Matters**:
    *   Large drawdowns feel devastating and cause emotional mistakes (selling at the bottom).
    *   Large drawdowns take a long time to recover. A 50% loss requires a 100% gain just to break even.
    *   For retirees drawing income, large drawdowns can permanently impair the portfolio.
*   **Historical Context**: The S&P 500 has experienced drawdowns exceeding 50% twice in the 21st century (2000-2002, 2008-2009).

## Part 2: The Math of Recovery

Why avoiding large drawdowns is mathematically critical.

*   **Asymmetric Returns**: Losses and gains are not symmetric. Recovering from losses requires larger percentage gains.
*   **The Recovery Table**:
    *   10% loss → 11% gain to recover.
    *   20% loss → 25% gain to recover.
    *   30% loss → 43% gain to recover.
    *   50% loss → 100% gain to recover.
    *   75% loss → 300% gain to recover.
*   **Time Factor**: If the market averages 7% real returns, a 50% loss (requiring 100% gain) takes roughly 10 years to recover.
*   **Compound Impact**: Every year spent recovering is a year not spent compounding new gains. Drawdowns hurt twice—the loss itself plus the lost opportunity.
*   **For Retirees**: Drawing income during a drawdown accelerates losses (selling low) and can turn temporary declines into permanent impairment.

## Part 3: Measuring Drawdowns

How to track and analyze drawdowns in your portfolio.

*   **Drawdown Chart**: Plot the percentage decline from the running peak over time. Shows drawdown magnitude and duration.
*   **Maximum Drawdown (MaxDD)**: The worst peak-to-trough decline in the measurement period.
*   **Average Drawdown**: The mean of all drawdowns over the period.
*   **Longest Drawdown**: The most extended time spent below a previous peak.
*   **[Calmar Ratio](/glossary#calmar-ratio)**: Annual return / MaxDD. Higher is better. Measures return relative to worst-case loss.
*   **Ulcer [Index](/glossary#index)**: Measures both depth and duration of drawdowns. Higher = more pain.
*   **Practical Use**: When evaluating strategies or funds, look at MaxDD alongside returns. A 15% annual return with 60% MaxDD may be worse than 10% return with 20% MaxDD.

## Part 4: Strategies for Drawdown Control

Techniques to limit the depth and duration of drawdowns.

### Diversification
*   The first line of defense. Own [assets](/glossary#asset) that don't all decline together.
*   Include [bonds](/glossary#bond), international [stocks](/glossary#stock), [commodities](/glossary#commodities), or alternatives.
*   Limitation: In severe crises, [correlations](/glossary#correlation) spike and [diversification](/glossary#diversification) fails when you need it most.

### Position Sizing
*   No single position large enough to devastate the portfolio.
*   Limit individual positions to 5-10% of portfolio.
*   Limit correlated exposure (e.g., all tech [stocks](/glossary#stock)) to a reasonable percentage.

### Stop-Losses
*   Exit positions before losses become catastrophic.
*   Individual [stop-losses](/glossary#stop-loss) on positions.
*   Portfolio-level [stop-loss](/glossary#stop-loss): reduce exposure if portfolio drops X% from peak.

### Trend Following
*   Stay invested when trends are up; reduce exposure when trends are down.
*   Simple rule: if the [index](/glossary#index) is below its 200-day [moving average](/glossary#moving-average), reduce [stock](/glossary#stock) exposure.
*   Reduces exposure during sustained bear markets.

### Hedging
*   Use [put options](/glossary#put-option) or inverse [ETFs](/glossary#etf) to protect against declines.
*   Cost: [hedging](/glossary#hedging) reduces upside and has ongoing costs.
*   Tail [risk](/glossary#risk) [hedges](/glossary#hedging) protect against extreme events.

## Part 5: The 2:1 Rule

A simple framework for thinking about [risk](/glossary#risk) and return.

*   **Concept**: A good strategy has a maximum drawdown that's roughly half its annualized return.
*   **Example**: 20% annual return with 10% MaxDD is excellent (2:1). 20% return with 40% MaxDD is concerning (0.5:1).
*   **Application**:
    *   If your strategy has a MaxDD of 30%, you should expect at least 15% annualized return to justify that [risk](/glossary#risk).
    *   If returns are lower than half the MaxDD, the strategy may not be worth the [risk](/glossary#risk).
*   **Ratio Guideline**:
    *   Return/MaxDD > 2: Excellent.
    *   Return/MaxDD 1-2: Acceptable.
    *   Return/MaxDD < 1: Questionable.
*   **Not a Law**: Just a rule of thumb. Some strategies (e.g., value investing) may have higher drawdowns but long-term outperformance.

## Part 6: Behavioral Aspects of Drawdowns

Drawdowns test your psychology as much as your strategy.

*   **Panic Selling**: The biggest mistake—selling at the bottom after a drawdown. Locks in losses.
*   **Loss Aversion**: Psychologically, losses feel twice as painful as equivalent gains feel good.
*   **Regret**: "I should have sold earlier" thinking leads to poor decisions post-drawdown.
*   **Capitulation**: After prolonged drawdowns, investors give up and sell right before recovery.
*   **Managing Yourself**:
    *   Set expectations before investing. Know that 30%+ drawdowns happen.
    *   Have a plan written down. Follow it mechanically.
    *   Reduce exposure if you know you can't handle [volatility](/glossary#volatility).
    *   Don't check your portfolio daily during drawdowns.
*   **Historical Perspective**: Every past drawdown eventually recovered (for diversified portfolios). This too shall pass.

## Part 7: Implementing Drawdown Control

Practical steps to limit drawdowns in your portfolio.

*   **Define Your Maximum Acceptable Drawdown**: Before investing, decide how much peak-to-trough decline you can tolerate. 20%? 30%? 50%?
*   **Match [Asset Allocation](/glossary#asset-allocation) to Tolerance**: Higher [stock](/glossary#stock) allocation = higher potential drawdown. If you can't handle 50% drawdowns, don't be 100% [stocks](/glossary#stock).
*   **Set Portfolio-Level [Stop-Loss](/glossary#stop-loss) Rules**: "If my portfolio drops 25% from peak, I will reduce [stock](/glossary#stock) exposure to 50%."
*   **Use Trend Filters**: Consider reducing exposure when major [indices](/glossary#index) are below their [200-day SMA](/glossary#moving-average).
*   **Maintain [Hedge](/glossary#hedging) Positions**: A small allocation to [bonds](/glossary#bond) or gold provides ballast during crashes.
*   **Rebalance After Drawdowns**: Buy more of what fell (rebalancing forces you to buy low).
*   **Review Regularly**: Track your portfolio's maxDD and compare to expectations. If drawdowns exceed tolerance, adjust allocation.
*   **Stay the Course**: For long-term investors, riding out drawdowns often beats trying to time them.

Controlling drawdowns is the art and science of portfolio management. A great strategy that experiences a devastating drawdown you can't stomach is useless. Build a portfolio that maximizes returns within the drawdown limits you can actually endure.
\`,
        keyTakeaways: [
            "Drawdown is the peak-to-trough decline—it measures the pain of loss before recovery.",
            "Large drawdowns require disproportionately large gains to recover: 50% loss needs 100% gain.",
            "Control drawdowns through diversification, position sizing, stop-losses, and trend following.",
            "The 2:1 rule: a strategy should earn roughly twice its maximum drawdown in annual returns.",
            "The biggest mistake is panic selling during drawdowns—have a plan and stick to it."
        ]
    },`;

const startMarker = '"pm_10": {';
const endMarker = '"pm_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_10: Drawdown Control - VALIDATION ===');
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
console.log('✓ Successfully updated pm_10!');
