const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_9": {
        title: "Sharpe & Sortino Ratios",
        content: \`
# Sharpe & Sortino Ratios: Measuring Risk-Adjusted Returns

Raw returns don't tell the whole story. A 20% return sounds great, but not if you took massive [risk](/glossary#risk) to achieve it. **[Risk-adjusted return](/glossary#risk-adjusted-return)** metrics like the Sharpe Ratio and Sortino Ratio help you evaluate whether returns adequately compensate for the [risks](/glossary#risk) taken.

These ratios are essential tools for comparing investments, evaluating portfolio managers, and understanding your own portfolio's efficiency.

## Part 1: Why Risk-Adjusted Returns Matter

Raw returns can be misleading without [risk](/glossary#risk) context.

*   **The Problem with Raw Returns**: Two funds both return 15%. But one experienced 10% [volatility](/glossary#volatility), the other 30%. The first is clearly better—same return, less [risk](/glossary#risk).
*   **[Risk](/glossary#risk) Is the Cost of Return**: You "pay" for returns by accepting [risk](/glossary#risk). The question is: was the return worth the [risk](/glossary#risk)?
*   **Comparing Apples to Apples**: [Risk-adjusted](/glossary#risk-adjusted-return) metrics level the playing field, allowing fair comparison across investments with different [risk](/glossary#risk) profiles.
*   **Manager Evaluation**: Did the fund manager show skill, or just take more [risk](/glossary#risk) in a rising market?
*   **Goal**: Find investments that maximize return per unit of [risk](/glossary#risk)—the most efficient use of capital.

## Part 2: The Sharpe Ratio

The **[Sharpe Ratio](/glossary#sharpe-ratio)** is the most widely used [risk-adjusted return](/glossary#risk-adjusted-return) metric.

*   **Definition**: Measures excess return per unit of total [risk](/glossary#risk) ([volatility](/glossary#volatility)).
*   **Formula**: [Sharpe Ratio](/glossary#sharpe-ratio) = (Portfolio Return - [Risk-Free Rate](/glossary#risk-free-rate)) / Portfolio Standard Deviation
*   **Components**:
    *   **Portfolio Return**: The investment's actual return over the period.
    *   **[Risk-Free Rate](/glossary#risk-free-rate)**: Usually the Treasury bill rate. The return you could get with zero [risk](/glossary#risk).
    *   **Standard Deviation**: A measure of [volatility](/glossary#volatility)—how much returns varied.
*   **Interpretation**:
    *   Higher is better. More return per unit of [risk](/glossary#risk).
    *   [Sharpe](/glossary#sharpe-ratio) below 0: Return was less than the [risk-free rate](/glossary#risk-free-rate)—you took [risk](/glossary#risk) for nothing.
    *   [Sharpe](/glossary#sharpe-ratio) 0-1: Acceptable but not great.
    *   [Sharpe](/glossary#sharpe-ratio) 1-2: Good.
    *   [Sharpe](/glossary#sharpe-ratio) above 2: Excellent. Rare for long periods.
*   **Example**: Portfolio returns 12%, [risk-free rate](/glossary#risk-free-rate) 2%, standard deviation 15%.
    *   [Sharpe](/glossary#sharpe-ratio) = (12% - 2%) / 15% = 0.67.

## Part 3: Calculating and Using the Sharpe Ratio

Practical application of the [Sharpe Ratio](/glossary#sharpe-ratio).

*   **Annualized [Sharpe](/glossary#sharpe-ratio)**: If using monthly returns, multiply by √12 to annualize (standard deviation scales with the square root of time).
*   **Comparison Rule**: Compare [Sharpe Ratios](/glossary#sharpe-ratio) only for investments in similar [asset classes](/glossary#asset-class) or strategies.
*   **Your Portfolio's [Sharpe](/glossary#sharpe-ratio)**: Calculate your portfolio's [Sharpe](/glossary#sharpe-ratio) to assess efficiency. Compare to benchmarks.
*   **Improving Your [Sharpe](/glossary#sharpe-ratio)**:
    *   Reduce [volatility](/glossary#volatility) through [diversification](/glossary#diversification).
    *   Choose investments with better [risk-adjusted returns](/glossary#risk-adjusted-return).
    *   Reduce costs, which come directly out of returns.
*   **Manager Selection**: Prefer managers with higher [Sharpe Ratios](/glossary#sharpe-ratio) (all else equal). They generate more return per unit of [risk](/glossary#risk).
*   **Limitations Preview**: [Sharpe](/glossary#sharpe-ratio) penalizes ALL [volatility](/glossary#volatility)—including upside [volatility](/glossary#volatility). This is addressed by [Sortino](/glossary#sortino-ratio).

## Part 4: The Sortino Ratio

The **[Sortino Ratio](/glossary#sortino-ratio)** refines [Sharpe](/glossary#sharpe-ratio) by focusing only on downside [risk](/glossary#risk).

*   **Definition**: Measures excess return per unit of downside [risk](/glossary#risk).
*   **Formula**: [Sortino Ratio](/glossary#sortino-ratio) = (Portfolio Return - Minimum Acceptable Return) / Downside Deviation
*   **Key Difference from [Sharpe](/glossary#sharpe-ratio)**: [Sortino](/glossary#sortino-ratio) uses downside deviation (only negative [volatility](/glossary#volatility)), not total standard deviation.
*   **Rationale**: Investors don't mind upside [volatility](/glossary#volatility)—they love it when their [stocks](/glossary#stock) go up a lot! Only downside [volatility](/glossary#volatility) is true [risk](/glossary#risk).
*   **Minimum Acceptable Return (MAR)**: Often set to 0%, the [risk-free rate](/glossary#risk-free-rate), or some target return.
*   **Downside Deviation**: Standard deviation calculated only using returns below the MAR.
*   **Interpretation**: Like [Sharpe](/glossary#sharpe-ratio), higher is better. [Sortino](/glossary#sortino-ratio) above 2 is good.
*   **When [Sortino](/glossary#sortino-ratio) > [Sharpe](/glossary#sharpe-ratio)**: The investment has more upside than downside [volatility](/glossary#volatility)—a good sign.

## Part 5: Comparing Sharpe and Sortino

When to use each metric.

*   **[Sharpe Ratio](/glossary#sharpe-ratio) Pros**:
    *   Industry standard. Everyone knows it.
    *   Simple to calculate.
    *   Works well for symmetric return distributions.
*   **[Sharpe Ratio](/glossary#sharpe-ratio) Cons**:
    *   Treats upside and downside [volatility](/glossary#volatility) equally (both are "bad").
    *   Understates the attractiveness of strategies with positive skew.
*   **[Sortino Ratio](/glossary#sortino-ratio) Pros**:
    *   Focuses on what investors actually care about—downside [risk](/glossary#risk).
    *   Better for strategies with asymmetric returns (e.g., [options](/glossary#options) strategies, trend following).
*   **[Sortino Ratio](/glossary#sortino-ratio) Cons**:
    *   Less universally recognized.
    *   Requires defining MAR (some subjectivity).
*   **Use Both**: Together, they give a fuller picture. A high [Sharpe](/glossary#sharpe-ratio) with even higher [Sortino](/glossary#sortino-ratio) is ideal.

## Part 6: Other Risk-Adjusted Metrics

[Sharpe](/glossary#sharpe-ratio) and [Sortino](/glossary#sortino-ratio) aren't the only options.

*   **[Treynor Ratio](/glossary#treynor-ratio)**: Excess return per unit of [beta](/glossary#beta) (market [risk](/glossary#risk)).
    *   Formula: (Return - [Risk-Free Rate](/glossary#risk-free-rate)) / [Beta](/glossary#beta)
    *   Useful for diversified portfolios where unsystematic [risk](/glossary#risk) is minimal.
*   **[Calmar Ratio](/glossary#calmar-ratio)**: Annual return / maximum drawdown.
    *   Measures return relative to worst-case loss.
    *   Useful for trading strategies and hedge funds.
*   **Information Ratio**: [Alpha](/glossary#alpha) / tracking error.
    *   Measures active return per unit of active [risk](/glossary#risk).
    *   Used to evaluate managers vs. their benchmark.
*   **Omega Ratio**: Considers the entire return distribution, not just mean and variance.
    *   More complex but captures skew and kurtosis.
*   **Practical Tip**: Don't get lost in the metrics. [Sharpe](/glossary#sharpe-ratio) and [Sortino](/glossary#sortino-ratio) cover most needs. The others are for specialized analysis.

## Part 7: Applying These Metrics to Your Portfolio

How to use [risk-adjusted](/glossary#risk-adjusted-return) metrics in practice.

*   **Calculate Your [Sharpe](/glossary#sharpe-ratio) and [Sortino](/glossary#sortino-ratio)**: Export your portfolio returns, calculate standard deviation and downside deviation, then apply formulas.
*   **Compare to Benchmarks**: Is your [Sharpe](/glossary#sharpe-ratio) better than a simple 60/40 portfolio or the S&P 500?
*   **Evaluate Funds Before Investing**: Many fund fact sheets list [Sharpe Ratios](/glossary#sharpe-ratio). Compare before committing capital.
*   **Improve Efficiency**:
    *   If [Sharpe](/glossary#sharpe-ratio) is low, you're taking too much [risk](/glossary#risk) for your return.
    *   Consider rebalancing, diversifying, or choosing lower-cost options.
*   **Track Over Time**: A declining [Sharpe](/glossary#sharpe-ratio) may signal a deteriorating strategy or changing market conditions.
*   **Don't Chase Ratios**: These are backward-looking. Past [Sharpe](/glossary#sharpe-ratio) doesn't guarantee future performance.
*   **Use in Context**: A 0.5 [Sharpe](/glossary#sharpe-ratio) for a speculative [stock](/glossary#stock) fund might be fine; the same for a [bond](/glossary#bond) fund would be concerning.

[Risk-adjusted returns](/glossary#risk-adjusted-return) are the true measure of investment success. Absolute returns matter, but only in context of the [risk](/glossary#risk) taken. Use [Sharpe](/glossary#sharpe-ratio), [Sortino](/glossary#sortino-ratio), and related metrics to ensure you're being adequately compensated for every unit of [risk](/glossary#risk) you accept.
\`,
        keyTakeaways: [
            "Risk-adjusted returns account for risk taken—higher returns aren't always better if risk was higher.",
            "Sharpe Ratio = excess return / total volatility. Higher is better; above 1 is good, above 2 is excellent.",
            "Sortino Ratio is like Sharpe but only considers downside volatility—what investors actually fear.",
            "Use both metrics together for a complete picture of risk-adjusted performance.",
            "Compare your portfolio's ratios to benchmarks; improve efficiency through diversification and cost reduction."
        ]
    },`;

const startMarker = '"pm_9": {';
const endMarker = '"pm_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_9: Sharpe & Sortino Ratios - VALIDATION ===');
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
console.log('✓ Successfully updated pm_9!');
