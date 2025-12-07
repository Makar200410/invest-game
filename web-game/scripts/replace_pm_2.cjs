const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_2": {
        title: "Asset Allocation Strategies",
        content: \`
# Asset Allocation: The Most Important Investment Decision

**[Asset allocation](/glossary#asset-allocation)** is how you divide your portfolio among different [asset classes](/glossary#asset-class)—[stocks](/glossary#stock), [bonds](/glossary#bond), cash, real estate, [commodities](/glossary#commodities), and alternatives. Research consistently shows that [asset allocation](/glossary#asset-allocation) explains 90%+ of portfolio performance variability over time. It's more important than individual [stock](/glossary#stock) selection or market timing.

Your [asset allocation](/glossary#asset-allocation) should reflect your goals, time horizon, and [risk](/glossary#risk) tolerance. Get this right, and the rest of investing becomes much simpler.

## Part 1: Why Asset Allocation Matters

[Asset allocation](/glossary#asset-allocation) is the foundation of investment success.

*   **Dominates Returns**: Studies show [asset allocation](/glossary#asset-allocation) explains over 90% of return variation between portfolios. [Stock](/glossary#stock) picking and timing matter much less.
*   **Controls [Risk](/glossary#risk)**: Different [asset classes](/glossary#asset-class) have different [risk](/glossary#risk) profiles. Your allocation determines your portfolio's overall [volatility](/glossary#volatility).
*   **Forces Discipline**: A target allocation gives you rules for buying and selling, reducing emotional decisions.
*   **Simplifies Investing**: Focus on the big picture rather than obsessing over individual securities.
*   **Harnesses [Diversification](/glossary#diversification)**: Proper allocation across uncorrelated [assets](/glossary#asset) reduces [risk](/glossary#risk) without sacrificing return.
*   **Aligns with Goals**: Different goals require different allocations. Retirement in 30 years differs from a house down payment in 5 years.

## Part 2: Major Asset Classes

Understanding each [asset class](/glossary#asset-class) is essential for thoughtful allocation.

### Stocks (Equities)
*   **Role**: Growth engine of the portfolio. Highest long-term returns.
*   **[Risk](/glossary#risk)**: Highest [volatility](/glossary#volatility). Can drop 50%+ in bear markets.
*   **Sub-categories**: Large-cap, small-cap, international, emerging markets, sectors.
*   **Expected Return**: Historically 7-10% annually (real, after [inflation](/glossary#inflation)).

### Bonds (Fixed Income)
*   **Role**: Stability and income. Cushion against [stock](/glossary#stock) [volatility](/glossary#volatility).
*   **[Risk](/glossary#risk)**: Lower [volatility](/glossary#volatility), but sensitive to [interest rate](/glossary#interest-rate) changes.
*   **Sub-categories**: Government, corporate, municipal, high-[yield](/glossary#yield), short-term, long-term.
*   **Expected Return**: Historically 2-5% annually (real).

### Cash and Cash Equivalents
*   **Role**: Safety, [liquidity](/glossary#liquidity), opportunity fund.
*   **[Risk](/glossary#risk)**: Minimal—but loses purchasing power to [inflation](/glossary#inflation).
*   **Sub-categories**: Money market funds, Treasury bills, savings accounts.
*   **Expected Return**: 0-2% (often negative real return).

### Real Estate
*   **Role**: Income and [inflation](/glossary#inflation) protection. Low [correlation](/glossary#correlation) to [stocks](/glossary#stock)/[bonds](/glossary#bond).
*   **Access**: Direct ownership, [REITs](/glossary#reit), real estate funds.
*   **Expected Return**: 6-8% historically (including rental income and appreciation).

### Commodities
*   **Role**: [Inflation](/glossary#inflation) [hedge](/glossary#hedging), [diversification](/glossary#diversification). Often negatively correlated with [stocks](/glossary#stock).
*   **Types**: Gold, silver, oil, agricultural products.
*   **Consideration**: No income; volatile; best in small allocations.

### Alternatives
*   **Types**: Hedge funds, private equity, venture capital, art, collectibles.
*   **Role**: [Diversification](/glossary#diversification), potential higher returns.
*   **Access**: Often limited to accredited investors. Higher fees.

## Part 3: Strategic vs. Tactical Allocation

Two fundamentally different approaches to [asset allocation](/glossary#asset-allocation).

### Strategic [Asset Allocation](/glossary#asset-allocation)
*   **Definition**: Set target weights based on long-term goals and [risk](/glossary#risk) tolerance. Stick to them.
*   **Philosophy**: Markets are hard to time. Stay the course.
*   **Implementation**: Choose a static allocation (e.g., 60% [stocks](/glossary#stock)/40% [bonds](/glossary#bond)) and rebalance periodically.
*   **Advantages**: Simple, low-cost, removes emotional decisions, works for most investors.
*   **Example**: A 60/40 portfolio maintained for 20+ years regardless of market conditions.

### Tactical [Asset Allocation](/glossary#asset-allocation)
*   **Definition**: Actively adjust allocations based on market conditions or forecasts.
*   **Philosophy**: Markets can be timed to some degree.
*   **Implementation**: Overweight [asset classes](/glossary#asset-class) expected to outperform; underweight those expected to lag.
*   **Advantages**: Potential to boost returns or reduce [risk](/glossary#risk) if you're skillful.
*   **Disadvantages**: Requires accurate forecasting (very hard), more trading costs, potential for emotional mistakes.
*   **Recommendation**: Most investors should stick to strategic allocation.

## Part 4: Common Allocation Strategies

Several time-tested allocation approaches exist.

### Age-Based Allocation
*   **Rule of Thumb**: "100 minus your age" in [stocks](/glossary#stock). A 30-year-old would have 70% [stocks](/glossary#stock).
*   **Modern Version**: "120 minus your age" given longer lifespans and low [bond](/glossary#bond) [yields](/glossary#yield).
*   **Rationale**: Younger investors have more time to recover from market downturns.

### Target-Date Funds
*   **Concept**: Funds that automatically adjust allocation as you approach a target date (usually retirement).
*   **Glide Path**: Start aggressive ([stock](/glossary#stock)-heavy), become conservative ([bond](/glossary#bond)-heavy) over time.
*   **Advantages**: Completely hands-off; automatic rebalancing.
*   **Consideration**: One-size-fits-all may not match your exact situation.

### Risk-Based Allocation
*   **Concept**: Choose allocation based on [risk](/glossary#risk) tolerance questionnaires.
*   **Conservative**: 30% [stocks](/glossary#stock), 50% [bonds](/glossary#bond), 20% cash.
*   **Moderate**: 60% [stocks](/glossary#stock), 35% [bonds](/glossary#bond), 5% cash.
*   **Aggressive**: 85% [stocks](/glossary#stock), 15% [bonds](/glossary#bond).
*   **Important**: [Risk](/glossary#risk) tolerance includes both ability and willingness to take [risk](/glossary#risk).

### Core-Satellite Approach
*   **Concept**: Put most of the portfolio in low-cost [index funds](/glossary#index-fund) (core); add actively managed or specialized funds (satellites).
*   **Example**: 80% in total market [index fund](/glossary#index-fund), 20% in sector [ETFs](/glossary#etf) or individual [stocks](/glossary#stock).
*   **Advantages**: Low cost. Allows for some active management without betting the whole portfolio.

## Part 5: Factors That Determine Your Allocation

Your personal situation should drive your allocation decisions.

### Time Horizon
*   **Long (15+ years)**: Can afford more [stocks](/glossary#stock). Time to recover from crashes.
*   **Medium (5-15 years)**: Balanced approach. Can't take huge [risks](/glossary#risk).
*   **Short (< 5 years)**: Need stability. Emphasize [bonds](/glossary#bond) and cash.

### [Risk](/glossary#risk) Tolerance
*   **Ability to Take [Risk](/glossary#risk)**: Based on financial situation. Do you have stable income, emergency fund, low debt?
*   **Willingness to Take [Risk](/glossary#risk)**: Based on psychology. Can you sleep at night during a 30% drawdown?
*   **Important**: Your willingness often shows up only during market stress. Be honest with yourself.

### Goals
*   **Retirement**: Long-term growth, shift to income over time.
*   **House Down Payment**: Capital preservation, short time horizon.
*   **Education Funding**: Medium-term, balance growth and safety.
*   **Wealth Building**: Can be aggressive if time horizon is long.

### Income and Job Stability
*   Stable income? You can afford more [risk](/glossary#risk).
*   Variable income or job insecurity? Need more conservative allocation and larger emergency fund.

### Existing [Assets](/glossary#asset)
*   Consider all [assets](/glossary#asset): retirement accounts, taxable accounts, home equity, pensions.
*   If your employer [stock](/glossary#stock) is a large portion of your net worth, reduce [stock](/glossary#stock) exposure elsewhere.

## Part 6: Implementing Your Allocation

Putting your allocation plan into action.

*   **Choose Vehicles**: For each [asset class](/glossary#asset-class), select specific investments.
    *   [Stocks](/glossary#stock): Total market [index fund](/glossary#index-fund), S&P 500 [ETF](/glossary#etf), international [ETF](/glossary#etf).
    *   [Bonds](/glossary#bond): Total [bond](/glossary#bond) market [index fund](/glossary#index-fund), Treasury [ETFs](/glossary#etf), municipal [bonds](/glossary#bond).
    *   Real Estate: [REIT](/glossary#reit) [ETF](/glossary#etf) or [index fund](/glossary#index-fund).
*   **Consider Tax Location**: Place tax-inefficient [assets](/glossary#asset) ([bonds](/glossary#bond), [REITs](/glossary#reit)) in tax-advantaged accounts.
*   **Simplify**: You can build a solid portfolio with just 3-4 funds.
*   **Automate**: Set up automatic contributions to maintain discipline.
*   **Write It Down**: Document your target allocation and the rationale. This helps you stay disciplined.

## Part 7: Review and Adjust Over Time

[Asset allocation](/glossary#asset-allocation) isn't set-and-forget forever.

*   **Review Annually**: Check if your allocation still fits your goals, time horizon, and [risk](/glossary#risk) tolerance.
*   **Life Changes**: Marriage, kids, job change, inheritance—major events may warrant allocation adjustments.
*   **Age Adjustments**: As you age, generally shift toward more conservative allocations.
*   **Market Changes**: Significant shifts in valuations or [interest rates](/glossary#interest-rate) may justify tactical adjustments (but be cautious).
*   **Don't Overreact**: A single bad year doesn't mean your allocation is wrong. Stick to the plan unless fundamentals have changed.
*   **Rebalance Regularly**: Market movements will drift your allocation away from targets. Rebalance to restore the plan.

[Asset allocation](/glossary#asset-allocation) is both art and science. Get the big picture right, and the details of individual security selection matter far less. Your allocation is the single most important investment decision you'll make.
\`,
        keyTakeaways: [
            "Asset allocation—how you divide among stocks, bonds, and other asset classes—explains 90%+ of portfolio returns.",
            "Major asset classes (stocks, bonds, cash, real estate, commodities) have different risk/return profiles.",
            "Strategic allocation (set and maintain) works for most investors; tactical allocation requires skill.",
            "Your allocation should reflect time horizon, risk tolerance, goals, and personal financial situation.",
            "Review annually and as life circumstances change—but avoid overreacting to short-term market moves."
        ]
    },`;

const startMarker = '"pm_2": {';
const endMarker = '"pm_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_2: Asset Allocation Strategies - VALIDATION ===');
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
console.log('✓ Successfully updated pm_2!');
