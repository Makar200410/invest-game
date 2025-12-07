const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_8": {
        title: "Alpha vs. Beta",
        content: \`
# Alpha vs. Beta: Measuring Investment Performance

**[Alpha](/glossary#alpha)** and **[Beta](/glossary#beta)** are two of the most important concepts in modern finance. [Beta](/glossary#beta) measures how much an investment moves with the market; [Alpha](/glossary#alpha) measures how much an investment outperforms (or underperforms) after accounting for that market exposure. Understanding these metrics helps you evaluate portfolio managers, assess [risk](/glossary#risk), and make smarter investment decisions.

## Part 1: What Is Beta?

**[Beta](/glossary#beta)** measures an investment's sensitivity to market movements.

*   **Definition**: [Beta](/glossary#beta) quantifies how much an [asset's](/glossary#asset) returns move in relation to the overall market (typically the S&P 500).
*   **[Beta](/glossary#beta) = 1.0**: The [asset](/glossary#asset) moves with the market. If the market rises 10%, the [asset](/glossary#asset) rises approximately 10%.
*   **[Beta](/glossary#beta) > 1.0**: The [asset](/glossary#asset) is more volatile than the market. [Beta](/glossary#beta) of 1.5 means if the market rises 10%, the [asset](/glossary#asset) rises approximately 15%.
*   **[Beta](/glossary#beta) < 1.0**: The [asset](/glossary#asset) is less volatile than the market. [Beta](/glossary#beta) of 0.5 means if the market rises 10%, the [asset](/glossary#asset) rises approximately 5%.
*   **[Beta](/glossary#beta) = 0**: The [asset](/glossary#asset) is uncorrelated with the market (e.g., some [commodities](/glossary#commodities), certain hedge fund strategies).
*   **Negative [Beta](/glossary#beta)**: Rare. The [asset](/glossary#asset) moves inversely to the market (e.g., gold sometimes, inverse [ETFs](/glossary#etf)).
*   **Examples**: Technology [stocks](/glossary#stock) often have [beta](/glossary#beta) > 1.5; utility [stocks](/glossary#stock) often have [beta](/glossary#beta) around 0.5-0.7.

## Part 2: What Is Alpha?

**[Alpha](/glossary#alpha)** measures performance beyond what's explained by market exposure.

*   **Definition**: [Alpha](/glossary#alpha) is the excess return of an investment after adjusting for its [beta](/glossary#beta) (market [risk](/glossary#risk)).
*   **Positive [Alpha](/glossary#alpha)**: The manager or strategy outperformed the market on a [risk-adjusted](/glossary#risk-adjusted-return) basis. Skill added value.
*   **Negative [Alpha](/glossary#alpha)**: The manager underperformed versus what a simple [index](/glossary#index) would have provided at the same [risk](/glossary#risk) level.
*   **[Alpha](/glossary#alpha) = 0**: The return is exactly what you'd expect given the [beta](/glossary#beta) exposure.
*   **The Goal of Active Management**: Generate positive [alpha](/glossary#alpha)—returns above what passive [index](/glossary#index) investing would provide.
*   **Formula**: [Alpha](/glossary#alpha) = Actual Return - [Risk-Free Rate](/glossary#risk-free-rate) - [Beta](/glossary#beta) × (Market Return - [Risk-Free Rate](/glossary#risk-free-rate))
*   **Example**: If a fund returns 15%, the market returns 10%, [risk-free rate](/glossary#risk-free-rate) is 2%, and [beta](/glossary#beta) is 1.2:
    *   Expected return = 2% + 1.2 × (10% - 2%) = 2% + 9.6% = 11.6%
    *   [Alpha](/glossary#alpha) = 15% - 11.6% = 3.4%. Positive [alpha](/glossary#alpha)!

## Part 3: The Relationship Between Alpha and Beta

Understanding how [alpha](/glossary#alpha) and [beta](/glossary#beta) interact.

*   **[Beta](/glossary#beta) Is Easy; [Alpha](/glossary#alpha) Is Hard**:
    *   [Beta](/glossary#beta) exposure is free—just buy an [index fund](/glossary#index-fund).
    *   [Alpha](/glossary#alpha) requires skill (or luck), which is rare and costly to access.
*   **Don't Pay for [Beta](/glossary#beta)**: If a fund charges high fees but delivers returns that match its [beta](/glossary#beta) exposure, you're overpaying. You could get that [beta](/glossary#beta) cheaply with a passive [ETF](/glossary#etf).
*   **True Skill = Consistent [Alpha](/glossary#alpha)**: One year of outperformance could be luck. Multiple years of positive [alpha](/glossary#alpha) suggests skill (though is still not guaranteed).
*   **[Alpha](/glossary#alpha) Before Fees**: Many funds show positive [alpha](/glossary#alpha) before fees, but negative after. Fees eat into excess returns.
*   **[Alpha](/glossary#alpha) Is Zero-Sum**: In aggregate, all investors equal the market. For every outperformer, there's an underperformer. Beating the market is hard.

## Part 4: Using Beta for Portfolio Construction

[Beta](/glossary#beta) helps you understand and control portfolio [risk](/glossary#risk).

*   **Portfolio [Beta](/glossary#beta)**: The weighted average [beta](/glossary#beta) of all holdings.
*   **Calculating Portfolio [Beta](/glossary#beta)**: Sum of (weight × [beta](/glossary#beta)) for each holding.
*   **Example**: 50% in a [stock](/glossary#stock) with [beta](/glossary#beta) 1.5, 50% in a [stock](/glossary#stock) with [beta](/glossary#beta) 0.5. Portfolio [beta](/glossary#beta) = 0.5×1.5 + 0.5×0.5 = 1.0.
*   **Adjusting [Risk](/glossary#risk)**: Want less [volatility](/glossary#volatility)? Add low-[beta](/glossary#beta) [stocks](/glossary#stock), [bonds](/glossary#bond), or cash. Want more? Add high-[beta](/glossary#beta) [stocks](/glossary#stock) or use [leverage](/glossary#leverage).
*   **Sector [Betas](/glossary#beta)**: Tech, consumer discretionary, and financials typically have high [beta](/glossary#beta). Utilities, healthcare, and consumer staples have low [beta](/glossary#beta).
*   **Market Timing with [Beta](/glossary#beta)**: Some investors raise portfolio [beta](/glossary#beta) when bullish, lower it when bearish. But timing the market is notoriously difficult.

## Part 5: Evaluating Fund Managers

Use [alpha](/glossary#alpha) and [beta](/glossary#beta) to assess whether a manager adds value.

*   **Step 1**: Calculate the fund's [beta](/glossary#beta) to understand its market sensitivity.
*   **Step 2**: Calculate expected return given that [beta](/glossary#beta).
*   **Step 3**: Compare actual return to expected return. The difference is [alpha](/glossary#alpha).
*   **Step 4**: Subtract fees. Is there still positive [alpha](/glossary#alpha)?
*   **Step 5**: Assess consistency. Is the [alpha](/glossary#alpha) repeatable over multiple years?
*   **Red Flags**:
    *   High [beta](/glossary#beta) disguised as skill. "I beat the market!" But so does any high-[beta](/glossary#beta) portfolio in a bull market.
    *   [Alpha](/glossary#alpha) that disappeared after fees.
    *   One-time lucky bets masquerading as skill.
*   **Benchmark Comparison**: Compare the fund's [alpha](/glossary#alpha) to an appropriate benchmark (S&P 500 for large-cap US, MSCI EAFE for international, etc.).

## Part 6: Limitations of Alpha and Beta

These metrics are useful but have limitations.

*   **[Beta](/glossary#beta) Is Backward-Looking**: Calculated from historical data. Future [beta](/glossary#beta) may differ.
*   **[Beta](/glossary#beta) Changes**: A company's [beta](/glossary#beta) can change as its business evolves or market conditions shift.
*   **[Alpha](/glossary#alpha) Depends on the Benchmark**: Use the wrong benchmark, and [alpha](/glossary#alpha) is meaningless. Compare international [stocks](/glossary#stock) to the S&P 500, and you'll get misleading results.
*   **[Alpha](/glossary#alpha) May Be Luck**: Short-term [alpha](/glossary#alpha) doesn't prove skill. Statistical significance requires years of data.
*   **Single-Factor Limitation**: [Alpha](/glossary#alpha) and [beta](/glossary#beta) are part of CAPM, a single-factor model. Modern finance recognizes multiple factors (size, value, momentum) that explain returns.
*   **[Beta](/glossary#beta) Assumes Linear Relationship**: Actual relationships may be more complex, especially in extreme markets.
*   **Non-Normal Returns**: Models assume normal distributions, but real returns have fat tails—extreme events occur more often than expected.

## Part 7: Beyond Alpha and Beta — Multi-Factor Models

Modern finance has expanded beyond simple [alpha](/glossary#alpha)/[beta](/glossary#beta).

*   **Fama-French Three-Factor Model**: Adds size and value factors to market [beta](/glossary#beta).
*   **Carhart Four-Factor Model**: Adds momentum as a fourth factor.
*   **Multi-Factor [Alpha](/glossary#alpha)**: Modern [alpha](/glossary#alpha) is excess return after accounting for multiple factors, not just market [beta](/glossary#beta).
*   **Factor Investing**: Many funds now target specific factors (value, momentum, quality) rather than just market exposure.
*   **"Smart [Beta](/glossary#beta)"**: Strategies that systematically tilt toward factors shown to deliver excess returns.
*   **Practical Implication**: What looks like [alpha](/glossary#alpha) might just be exposure to other well-known factors. True [alpha](/glossary#alpha) (after all factors) is even rarer.

Understanding [alpha](/glossary#alpha) and [beta](/glossary#beta) transforms how you evaluate investments. [Beta](/glossary#beta) is the price of market exposure—easy and cheap to obtain. [Alpha](/glossary#alpha) is the value added by skill—rare, expensive, and often illusory. Seek [beta](/glossary#beta) cheaply; be skeptical of claims of [alpha](/glossary#alpha).
\`,
        keyTakeaways: [
            "Beta measures sensitivity to market movements; alpha measures excess return beyond market exposure.",
            "Beta > 1 means more volatile than market; beta < 1 means less volatile.",
            "Positive alpha indicates outperformance after adjusting for risk—the goal of active management.",
            "Beta is cheap (index funds); alpha is rare and expensive—don't pay alpha fees for beta performance.",
            "Modern multi-factor models go beyond simple alpha/beta to explain returns more completely."
        ]
    },`;

const startMarker = '"pm_8": {';
const endMarker = '"pm_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_8: Alpha vs. Beta - VALIDATION ===');
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
console.log('✓ Successfully updated pm_8!');
