const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_1": {
        title: "Modern Portfolio Theory",
        content: \`
# Modern Portfolio Theory: The Science of Diversification

**Modern Portfolio Theory (MPT)** is a mathematical framework for assembling a portfolio of [assets](/glossary#asset) to maximize expected return for a given level of [risk](/glossary#risk). Developed by Harry Markowitz in 1952, it earned him a Nobel Prize and revolutionized how professional investors think about portfolio construction.

MPT introduced a critical insight: you shouldn't evaluate investments in isolation. What matters is how each investment contributes to the overall portfolio's [risk](/glossary#risk) and return. A risky [asset](/glossary#asset) might actually reduce portfolio [risk](/glossary#risk) if it moves differently than other assets. This is the power of [diversification](/glossary#diversification).

## Part 1: The Core Insight — Diversification

MPT's central message is that [diversification](/glossary#diversification) reduces [risk](/glossary#risk) without necessarily reducing returns.

*   **Individual [Risk](/glossary#risk) vs. Portfolio [Risk](/glossary#risk)**: A [stock](/glossary#stock) might be very volatile on its own, but when combined with other [stocks](/glossary#stock), the portfolio's overall [volatility](/glossary#volatility) can be lower.
*   **Why?** Assets don't move in perfect lockstep. When one zigs, another zags. These movements partially cancel out.
*   **[Correlation](/glossary#correlation)**: The statistical measure of how two [assets](/glossary#asset) move relative to each other.
    *   **+1 [correlation](/glossary#correlation)**: Assets move perfectly together. No [diversification](/glossary#diversification) benefit.
    *   **0 [correlation](/glossary#correlation)**: Assets move independently. Good [diversification](/glossary#diversification).
    *   **-1 [correlation](/glossary#correlation)**: Assets move perfectly opposite. Maximum [diversification](/glossary#diversification) benefit.
*   **The Free Lunch**: [Diversification](/glossary#diversification) is called the only "free lunch" in finance—you reduce [risk](/glossary#risk) without giving up expected return.
*   **Example**: Combining [stocks](/glossary#stock) and [bonds](/glossary#bond). When [stocks](/glossary#stock) crash, [bonds](/glossary#bond) often rise. The portfolio's swing is smaller than [stocks](/glossary#stock) alone.

## Part 2: Risk and Return — The Fundamental Trade-off

MPT formalizes the [risk](/glossary#risk)-return relationship at the portfolio level.

*   **Expected Return**: The weighted average of expected returns of each [asset](/glossary#asset) in the portfolio.
    *   If you have 60% [stocks](/glossary#stock) (expected 10% return) and 40% [bonds](/glossary#bond) (expected 4% return), expected portfolio return = (0.6 × 10%) + (0.4 × 4%) = 7.6%.
*   **Portfolio [Risk](/glossary#risk) (Standard Deviation)**: NOT the weighted average of individual [risks](/glossary#risk). It's lower, thanks to [diversification](/glossary#diversification).
    *   Portfolio [risk](/glossary#risk) depends on: individual [asset](/glossary#asset) [volatility](/glossary#volatility), weights, AND correlations between [assets](/glossary#asset).
*   **The Math**: Portfolio variance involves covariance terms between all pairs of [assets](/glossary#asset). This is where the [diversification](/glossary#diversification) magic happens.
*   **Key Insight**: You can combine two risky [assets](/glossary#asset) and get a portfolio that's less risky than either [asset](/glossary#asset) alone (if their [correlation](/glossary#correlation) is low enough).
*   **[Risk](/glossary#risk)-Return Preference**: Each investor has a different tolerance for [risk](/glossary#risk). MPT helps find the best portfolio for each tolerance level.

## Part 3: The Efficient Frontier

The **Efficient Frontier** is the set of portfolios that offer the highest expected return for each level of [risk](/glossary#risk).

*   **Definition**: The Efficient Frontier is a curve showing all optimal portfolios—those where you can't get more return without more [risk](/glossary#risk).
*   **Below the Frontier**: Suboptimal portfolios. You could get higher return for the same [risk](/glossary#risk), or same return for less [risk](/glossary#risk).
*   **On the Frontier**: Optimal portfolios. These are "efficient."
*   **Finding the Frontier**: Requires mathematical optimization—testing all possible combinations of weights and finding those with the best [risk](/glossary#risk)/return profile.
*   **Shape**: The frontier typically curves upward and to the right. Higher return comes with higher [risk](/glossary#risk).
*   **Your Choice**: Where on the frontier you want to be depends on your [risk](/glossary#risk) tolerance. Conservative? Choose a point to the left (less [risk](/glossary#risk), less return). Aggressive? Choose to the right.

## Part 4: The Role of Correlation

[Correlation](/glossary#correlation) is the key to understanding [diversification](/glossary#diversification) benefits.

*   **Measuring [Correlation](/glossary#correlation)**: [Correlation](/glossary#correlation) coefficient ranges from -1 to +1.
*   **Low [Correlation](/glossary#correlation) = Better [Diversification](/glossary#diversification)**: The lower the [correlation](/glossary#correlation) between [assets](/glossary#asset), the more portfolio [risk](/glossary#risk) is reduced.
*   **Finding Low [Correlations](/glossary#correlation)**:
    *   Different [asset classes](/glossary#asset-class): [stocks](/glossary#stock) vs. [bonds](/glossary#bond) vs. [commodities](/glossary#commodities).
    *   Different geographies: US [stocks](/glossary#stock) vs. emerging market [stocks](/glossary#stock).
    *   Different sectors: tech vs. utilities vs. healthcare.
*   **[Correlation](/glossary#correlation) Changes**: During crises, [correlations](/glossary#correlation) tend to spike. Assets that normally don't move together suddenly fall together. This is why [diversification](/glossary#diversification) fails when you need it most.
*   **Practical Application**: Build portfolios with [assets](/glossary#asset) that have fundamentally different drivers. [Stocks](/glossary#stock) are driven by company earnings; [bonds](/glossary#bond) by [interest rates](/glossary#interest-rate); gold by fear and [inflation](/glossary#inflation).

## Part 5: The Capital Asset Pricing Model (CAPM)

**CAPM** extends MPT to explain how [assets](/glossary#asset) should be priced given their [risk](/glossary#risk).

*   **Key Idea**: Investors should only be rewarded for [systematic risk](/glossary#systematic-risk) (market [risk](/glossary#risk)), not [unsystematic risk](/glossary#unsystematic-risk) (company-specific [risk](/glossary#risk)) because the latter can be diversified away.
*   **[Beta](/glossary#beta)**: Measures an [asset's](/glossary#asset) sensitivity to market movements.
    *   [Beta](/glossary#beta) = 1: Moves with the market.
    *   [Beta](/glossary#beta) > 1: More volatile than the market.
    *   [Beta](/glossary#beta) < 1: Less volatile than the market.
*   **The CAPM Formula**: Expected Return = [Risk-Free Rate](/glossary#risk-free-rate) + [Beta](/glossary#beta) × (Market Return - [Risk-Free Rate](/glossary#risk-free-rate))
*   **Implication**: High-[beta](/glossary#beta) [stocks](/glossary#stock) should earn higher returns to compensate for higher [risk](/glossary#risk).
*   **The Market Portfolio**: In theory, all investors should hold the same "market portfolio" of all risky [assets](/glossary#asset), combined with risk-free [assets](/glossary#asset) based on their [risk](/glossary#risk) tolerance.
*   **Criticism**: CAPM has been partially challenged (see Fama-French factor models), but remains foundational.

## Part 6: Limitations of MPT

MPT is powerful but has important limitations to understand.

*   **Assumes Normal Distributions**: MPT assumes returns follow a bell curve. In reality, markets have "fat tails"—extreme events occur more often than the model predicts.
*   **Historical Data**: MPT relies on historical returns, [volatility](/glossary#volatility), and [correlations](/glossary#correlation). The future may differ significantly.
*   **[Correlation](/glossary#correlation) Instability**: [Correlations](/glossary#correlation) change over time, especially in crises. The 2008 crash saw [correlations](/glossary#correlation) spike, undermining [diversification](/glossary#diversification) when it was needed most.
*   **Static Model**: MPT is a one-period model. It doesn't account for changing investor circumstances or market conditions.
*   **Ignores Liquidity**: MPT doesn't consider whether you can actually buy or sell [assets](/glossary#asset) at the expected prices.
*   **Ignores Taxes and Costs**: Real-world frictions like taxes and transaction costs are not in the model.
*   **[Risk](/glossary#risk) = [Volatility](/glossary#volatility)?**: MPT equates [risk](/glossary#risk) with [volatility](/glossary#volatility). But investors may care more about downside [risk](/glossary#risk) or specific loss thresholds.

## Part 7: Applying MPT in Practice

How to use MPT principles in your own investing.

*   **Diversify Always**: Own multiple [asset classes](/glossary#asset-class)—[stocks](/glossary#stock), [bonds](/glossary#bond), real estate, possibly [commodities](/glossary#commodities) or alternatives.
*   **Think in Correlations**: When adding a new [asset](/glossary#asset), ask: "How does this move relative to what I already own?"
*   **Don't Concentrate**: Avoid putting a large percentage in any single [stock](/glossary#stock), sector, or geography.
*   **Use [Index Funds](/glossary#index-fund) or [ETFs](/glossary#etf)**: Low-cost, broadly diversified vehicles are efficient ways to implement MPT.
*   **Rebalance**: As [asset](/glossary#asset) prices change, your weights drift. Periodically rebalance back to target allocations.
*   **Match Your [Risk](/glossary#risk) Tolerance**: Choose a portfolio on the efficient frontier that matches your ability and willingness to take [risk](/glossary#risk).
*   **Expect the Unexpected**: MPT won't protect you from black swans. Maintain some liquidity for extreme scenarios.
*   **Stay Humble About Forecasts**: MPT inputs (returns, [volatility](/glossary#volatility), [correlations](/glossary#correlation)) are estimates. Small changes can significantly change the "optimal" portfolio.

Modern Portfolio Theory provides the intellectual foundation for understanding [diversification](/glossary#diversification) and portfolio construction. While it has limitations, its core insights—that [diversification](/glossary#diversification) reduces [risk](/glossary#risk) and that you should think about investments in portfolio context—remain essential for every investor.
\`,
        keyTakeaways: [
            "MPT shows that diversification reduces risk without necessarily reducing expected return.",
            "Correlation is key: assets that move independently provide the best diversification benefits.",
            "The Efficient Frontier shows optimal portfolios—maximum return for each level of risk.",
            "CAPM extends MPT: investors should only be compensated for systematic (market) risk.",
            "Limitations exist: MPT assumes normal distributions and stable correlations, which fail in crises."
        ]
    },`;

const startMarker = '"pm_1": {';
const endMarker = '"pm_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_1: Modern Portfolio Theory - VALIDATION ===');
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
console.log('✓ Successfully updated pm_1!');
