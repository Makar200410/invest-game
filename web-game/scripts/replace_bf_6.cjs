const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_6": {
        title: "Corporate Bond Analysis",
        content: \`
# Corporate Bond Analysis: Finding Quality Credits

[Corporate bonds](/glossary#corporate-bond) offer higher [yields](/glossary#yield) than government [bonds](/glossary#bond) but require careful analysis. Unlike Treasury [bonds](/glossary#bond) backed by the US government, corporate [bonds](/glossary#bond) are only as safe as the issuing company. This lesson teaches you how to evaluate corporate [bonds](/glossary#bond), understand [credit risk](/glossary#credit-risk), and avoid defaults that can destroy your [principal](/glossary#principal).

## Part 1: Why Corporate Bonds?

Corporate [bonds](/glossary#bond) exist in the space between safe Treasuries and risky [stocks](/glossary#stock).

*   **Higher [Yield](/glossary#yield)**: Corporate [bonds](/glossary#bond) pay more than government [bonds](/glossary#bond) to compensate for [credit risk](/glossary#credit-risk).
*   **[Credit Spread](/glossary#credit-spread)**: The extra [yield](/glossary#yield) over Treasuries. Investment-grade typically 1-2%; high-[yield](/glossary#yield) 3-6%+.
*   **Fixed Income**: Predictable interest payments. Unlike [dividends](/glossary#dividend), interest is contractual.
*   **Priority over [Stocks](/glossary#stock)**: [Bond](/glossary#bond) holders are paid before shareholders in bankruptcy.
*   **[Diversification](/glossary#diversification)**: Correlation with [stocks](/glossary#stock) varies. Investment-grade is more [bond](/glossary#bond)-like; high-[yield](/glossary#yield) is more [stock](/glossary#stock)-like.
*   **Use Case**: Investors seeking higher income than Treasuries with moderate [risk](/glossary#risk).

## Part 2: Credit Rating Deep Dive

[Credit ratings](/glossary#credit-rating) are the starting point for corporate [bond](/glossary#bond) analysis.

*   **Rating Scale (S&P/Moody's)**:
    *   AAA/Aaa: Prime. Lowest default [risk](/glossary#risk). (Microsoft, Johnson & Johnson)
    *   AA/Aa: High Grade. Very low [risk](/glossary#risk).
    *   A: Upper Medium Grade.
    *   BBB/Baa: Medium Grade. Lowest investment-grade.
    *   BB/Ba and below: High [Yield](/glossary#yield) / Junk. Speculative.
*   **Split Ratings**: Sometimes agencies disagree. A/BBB+ is a split rating.
*   **Fallen Angels**: Former investment-grade [bonds](/glossary#bond) downgraded to junk.
*   **Rising Stars**: Junk [bonds](/glossary#bond) upgraded to investment-grade.
*   **Rating Lag**: Agencies are slow to downgrade. Market prices often move before ratings.
*   **Pay Attention to Outlook**: "Negative Outlook" warns of potential downgrade.

## Part 3: Key Financial Metrics

Beyond ratings, analyze the company's financial health directly.

*   **Debt-to-[EBITDA](/glossary#ebitda)**: Total debt divided by [EBITDA](/glossary#ebitda). Lower is better. <3x is healthy.
*   **Interest Coverage Ratio**: [EBITDA](/glossary#ebitda) divided by interest expense. Higher is better. >3x is comfortable.
*   **[Free Cash Flow](/glossary#free-cash-flow)**: Cash generated after capital expenditures. Must be positive and stable.
*   **Leverage Trend**: Is debt increasing or decreasing? Rising leverage is a warning.
*   **Liquidity**: Does the company have cash to pay near-term obligations? Check current ratio.
*   **Maturity Schedule**: When does existing debt mature? A wall of maturities coming due is risky.

## Part 4: Industry and Business Analysis

The nature of the business affects [credit risk](/glossary#credit-risk) independent of financials.

*   **Cyclical Industries**: Auto, airlines, retail have volatile earnings. Higher [risk](/glossary#risk) during recessions.
*   **Stable Industries**: Utilities, consumer staples, healthcare have consistent earnings. Lower [risk](/glossary#risk).
*   **Competitive Position**: Is the company a leader? Market leaders default less.
*   **Secular Trends**: Disrupted industries (newspapers, traditional retail) face structural [risk](/glossary#risk).
*   **Regulation**: Heavily regulated industries have stable but capped profits.
*   **Diversification**: Companies with diverse revenue streams are safer than one-product companies.

## Part 5: Bond-Specific Terms

Beyond company analysis, the specific [bond](/glossary#bond) terms matter.

*   **[Maturity](/glossary#maturity)**: Longer [maturity](/glossary#maturity) = more time for things to go wrong. More [risk](/glossary#risk).
*   **[Coupon](/glossary#coupon)**: Fixed or floating? Fixed [coupons](/glossary#coupon) lock in income. Floating adjusts with rates.
*   **Callable**: Issuer can repurchase early. Limits your [upside](/glossary#upside) if rates fall.
*   **Secured vs. Unsecured**: Secured [bonds](/glossary#bond) have collateral. Higher recovery if default.
*   **Senior vs. Subordinated**: Senior gets paid first in bankruptcy. Subordinated is riskier.
*   **Covenants**: Restrictions on company behavior (debt limits, dividend limits). More covenants protect [bond](/glossary#bond) holders.

## Part 6: Analyzing Yield and Value

How to determine if a corporate [bond](/glossary#bond) offers fair value.

*   **Compare to Benchmark**: Is the [spread](/glossary#credit-spread) over Treasuries appropriate for the [credit risk](/glossary#credit-risk)?
*   **Compare to Peers**: How does the [yield](/glossary#yield) compare to similar-rated [bonds](/glossary#bond) in the same industry?
*   **Historical [Spreads](/glossary#credit-spread)**: Is the current [spread](/glossary#credit-spread) tight (expensive) or wide (cheap) vs. history?
*   **[Yield](/glossary#yield) vs. Default [Risk](/glossary#risk)**: Does the extra [yield](/glossary#yield) compensate for the realistic default probability?
*   **Breakeven Analysis**: How much default can you sustain and still beat Treasuries? Calculate the math.
*   **New Issue [Premium](/glossary#premium)**: New [bonds](/glossary#bond) often offer slightly higher [yields](/glossary#yield) than existing [bonds](/glossary#bond).

## Part 7: Default and Recovery

Understanding what happens when things go wrong.

*   **Default Definition**: Failure to make interest or [principal](/glossary#principal) payment, or bankruptcy filing.
*   **Investment-Grade Default Rate**: Historically ~0.1% per year. Very rare.
*   **High-[Yield](/glossary#yield) Default Rate**: Historically 3-4% per year. 10%+ in recessions.
*   **Recovery Rate**: How much [bond](/glossary#bond) holders recover after default. Average 40-50% for senior unsecured.
*   **Secured Recovery**: 60-70%+ typical for secured [bonds](/glossary#bond).
*   **Subordinated Recovery**: Often <30%. Much worse outcome.
*   **Time**: Recovery can take years through bankruptcy proceedings.

## Part 8: Building a Corporate Bond Portfolio

Applying analysis to portfolio construction.

*   **[Diversify](/glossary#diversification)**: Own 20+ issuers minimum. One default shouldn't ruin [portfolio](/glossary#portfolio).
*   **Sector Balance**: Spread across industries. Don't concentrate in one sector.
*   **Quality Mix**: Core in A/BBB. Small allocation to BB for extra [yield](/glossary#yield) if desired.
*   **[Duration](/glossary#duration) Management**: Match [duration](/glossary#duration) to your interest rate view and time horizon.
*   **Ladder Structure**: Stagger [maturities](/glossary#maturity) for [liquidity](/glossary#liquidity) and reinvestment averaging.
*   **[Fund](/glossary#mutual-fund) Alternative**: LQD ([ETF](/glossary#etf)) tracks investment-grade corporate [bonds](/glossary#bond). Instant [diversification](/glossary#diversification).

## Part 9: Practical Corporate Bond Strategies

Approaches for different investor types.

*   **Conservative**: Investment-grade only (BBB or higher). Short/intermediate [duration](/glossary#duration). [ETF](/glossary#etf) like LQD.
*   **Moderate**: Mix of investment-grade and BB-rated. [Diversify](/glossary#diversification) across 30+ issuers.
*   **Aggressive**: High-[yield](/glossary#yield) [ETF](/glossary#etf) (HYG, JNK) for maximum income. Accept [stock](/glossary#stock)-like [volatility](/glossary#volatility).
*   **Individual [Bonds](/glossary#bond)**: Good for larger portfolios ($200K+). Buy at issuance or on dips.
*   **[Fund](/glossary#mutual-fund) Benefits**: Professional credit analysis, instant [diversification](/glossary#diversification), [liquidity](/glossary#liquidity).
*   **Active vs. Passive**: Corporate [bond](/glossary#bond) space may benefit from active management due to credit selection opportunities.
\`,
        keyTakeaways: [
            "Credit ratings (AAA to D) measure default risk but lag market prices.",
            "Key metrics: Debt-to-EBITDA (<3x), Interest Coverage (>3x), Free Cash Flow (positive).",
            "Bond-specific terms (callable, secured, covenants) affect risk and recovery.",
            "Diversify across 20+ issuers and multiple sectors to protect against defaults."
        ]
    },`;

const startMarker = '"bf_6": {';
const endMarker = '"bf_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_6: Corporate Bond Analysis - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_6!');
