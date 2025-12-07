const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_2": {
        title: "Government vs. Corporate Bonds",
        content: \`
# Government vs. Corporate Bonds: Who Are You Lending To?

The entity that issues a [bond](/glossary#bond) dramatically affects your [risk](/glossary#risk) and reward. Government [bonds](/glossary#bond) are backed by the taxing power of nations. Corporate [bonds](/glossary#bond) are backed only by a company's ability to generate profits. Understanding these differences helps you choose the right [bonds](/glossary#bond) for your [portfolio](/glossary#portfolio) and [risk](/glossary#risk) tolerance.

## Part 1: US Treasury Bonds — The Gold Standard

[Treasury bonds](/glossary#treasury-bond) issued by the US government are considered the safest investments in the world.

*   **Backed By**: Full faith and credit of the United States government.
*   **[Risk](/glossary#risk) Level**: Considered "[risk](/glossary#risk)-free" for default purposes. The US can print dollars to pay debts.
*   **[Yield](/glossary#yield)**: Lowest [yields](/glossary#yield) because of extreme safety. "Risk-free rate" is the benchmark.
*   **Types by [Maturity](/glossary#maturity)**:
    *   T-Bills: 4 weeks to 1 year. Sold at [discount](/glossary#discount), no [coupon](/glossary#coupon) payments.
    *   T-Notes: 2-10 years. Pay semi-annual interest.
    *   T-[Bonds](/glossary#bond): 20-30 years. Longest-[maturity](/glossary#maturity) government debt.
*   **Taxatoin**: Interest is exempt from state and local taxes (only federal tax applies).
*   **[Liquidity](/glossary#liquidity)**: Most liquid [bond](/glossary#bond) market in the world. $750+ billion trades daily.

## Part 2: Other Government Bonds

Beyond US Treasuries, other government and quasi-government [bonds](/glossary#bond) exist.

*   **Agency [Bonds](/glossary#bond)**: Issued by government-sponsored enterprises (Fannie Mae, Freddie Mac).
    *   Not directly backed by US government but have implicit guarantee.
    *   Slightly higher [yields](/glossary#yield) than Treasuries.
    *   Fund mortgages and housing.
*   **TIPS**: [Treasury Inflation-Protected Securities](/glossary#tips). [Principal](/glossary#principal) adjusts with [inflation](/glossary#inflation).
*   **I [Bonds](/glossary#bond)**: Savings [bonds](/glossary#bond) with [inflation](/glossary#inflation) adjustment. Bought directly from government.
*   **Foreign Government [Bonds](/glossary#bond)**: German Bunds, Japanese JGBs, UK Gilts. [Currency](/glossary#currency) [risk](/glossary#risk) applies.
*   **Emerging Market Government [Bonds](/glossary#bond)**: Brazil, Mexico, India. Higher [yields](/glossary#yield), higher [risk](/glossary#risk), [currency](/glossary#currency) exposure.

## Part 3: Corporate Bonds — Higher Risk, Higher Reward

Companies issue [bonds](/glossary#bond) to fund operations, acquisitions, and expansion.

*   **Backed By**: The company's ability to generate cash flow and repay debt.
*   **[Risk](/glossary#risk) Level**: Depends on company health. Ranges from very safe to highly speculative.
*   **[Yield](/glossary#yield)**: Higher than government [bonds](/glossary#bond) to compensate for [credit risk](/glossary#credit-risk).
*   **Creditor Priority**: [Bond](/glossary#bond) holders are paid before shareholders if company fails. Still may lose money.
*   **Examples**: Apple [bonds](/glossary#bond) (very safe), Ford [bonds](/glossary#bond) (moderate [risk](/glossary#risk)), startup [bonds](/glossary#bond) (high [risk](/glossary#risk)).
*   **Callable [Bonds](/glossary#bond)**: Many corporate [bonds](/glossary#bond) can be "called" (repaid early) by the issuer.

## Part 4: Credit Ratings — Measuring Safety

[Credit rating](/glossary#credit-rating) agencies grade [bonds](/glossary#bond) based on the issuer's likelihood of default.

*   **Rating Agencies**: Moody's, Standard & Poor's (S&P), Fitch. The "Big Three."
*   **Investment Grade (Safer)**:
    *   AAA/Aaa: Highest quality. Lowest default [risk](/glossary#risk). (Example: Microsoft, Johnson & Johnson)
    *   AA/Aa: Very high quality.
    *   A: Upper medium grade.
    *   BBB/Baa: Medium grade. Lowest investment-grade rating.
*   **High [Yield](/glossary#yield) / Junk (Riskier)**:
    *   BB/Ba: Speculative.
    *   B: Highly speculative.
    *   CCC to C: Substantial [risk](/glossary#risk).
    *   D: In default.
*   **The Cliff**: Falls from BBB to BB triggers forced selling by funds that can only hold investment-grade.

## Part 5: The Credit Spread

The difference in [yield](/glossary#yield) between corporate [bonds](/glossary#bond) and government [bonds](/glossary#bond) reveals market [risk](/glossary#risk) perception.

*   **Definition**: [Credit Spread](/glossary#credit-spread) = Corporate [Bond](/glossary#bond) [Yield](/glossary#yield) - Treasury [Yield](/glossary#yield) (same [maturity](/glossary#maturity)).
*   **Example**: 10-year corporate [bond](/glossary#bond) [yields](/glossary#yield) 6%, 10-year Treasury [yields](/glossary#yield) 4%. Spread = 2% (200 basis points).
*   **What It Means**: The market demands 2% extra [yield](/glossary#yield) to compensate for [credit risk](/glossary#credit-risk).
*   **Spread Widening**: Happens during fear. Investors demand more compensation. Often signals [recession](/glossary#recession) fears.
*   **Spread Narrowing**: Happens during optimism. Investors accept less compensation. May signal complacency.
*   **High-[Yield](/glossary#yield) Spreads**: Junk [bonds](/glossary#bond) typically have 3-6% spreads over Treasuries; can balloon to 10%+ in crises.

## Part 6: High-Yield (Junk) Bonds

Junk [bonds](/glossary#bond) offer equity-like returns with [bond](/glossary#bond)-like structure. They're a unique asset class.

*   **Definition**: [Bonds](/glossary#bond) rated below investment grade (BB/Ba and lower).
*   **[Yield](/glossary#yield)**: Often 5-10%+ when Treasuries yield 3-4%. Very attractive income.
*   **Default [Risk](/glossary#risk)**: Historically 3-4% annual default rate. During recessions, can spike to 10%+.
*   **Recovery Rate**: When junk [bonds](/glossary#bond) default, [bond](/glossary#bond) holders typically recover 40-50% of face value.
*   **Correlation**: High-[yield](/glossary#yield) [bonds](/glossary#bond) correlate more with [stocks](/glossary#stock) than with government [bonds](/glossary#bond).
*   **Role**: Can enhance returns but don't provide the safety/[diversification](/glossary#diversification) of investment-grade [bonds](/glossary#bond).
*   **[ETF](/glossary#etf)**: HYG, JNK track high-[yield](/glossary#yield) corporate [bonds](/glossary#bond).

## Part 7: Comparing Risk and Reward

Here's how different [bond](/glossary#bond) types stack up on the [risk](/glossary#risk)-reward spectrum.

*   **US Treasuries**: Lowest [risk](/glossary#risk), lowest [yield](/glossary#yield). Safety benchmark. 2-5% typically.
*   **Agency [Bonds](/glossary#bond)**: Slightly more [risk](/glossary#risk), slightly more [yield](/glossary#yield). 2.5-5.5% typically.
*   **Investment-Grade Corporate**: Moderate [risk](/glossary#risk), moderate [yield](/glossary#yield). 3-6% typically.
*   **High-[Yield](/glossary#yield) Corporate**: Higher [risk](/glossary#risk), much higher [yield](/glossary#yield). 5-10%+ typically.
*   **Emerging Market Government**: High [risk](/glossary#risk) (political, [currency](/glossary#currency)), high [yield](/glossary#yield). 5-12%+ typically.
*   **Diversification**: Own multiple types. Don't put all [bond](/glossary#bond) allocation in one category.

## Part 8: When Each Type Shines

Different economic environments favor different [bond](/glossary#bond) types.

*   **Flight to Safety**: During crises, Treasuries outperform everything. Corporate spreads widen, prices fall.
*   **Economic Growth**: Corporate [bonds](/glossary#bond) outperform. Companies thrive, spreads narrow, prices rise.
*   **Rising Rates**: Short-term [bonds](/glossary#bond) of all types outperform long-term [bonds](/glossary#bond).
*   **Falling Rates**: Long-term Treasuries outperform. Locked-in high [yields](/glossary#yield) become more valuable.
*   **[Inflation](/glossary#inflation)**: [TIPS](/glossary#tips) and short-term [bonds](/glossary#bond) protect purchasing power.
*   **2008 Example**: Treasury [bonds](/glossary#bond) rose while corporate [bonds](/glossary#bond) crashed. Treasuries are real crisis protection.

## Part 9: Building Your Bond Allocation

Putting it all together for a practical [bond portfolio](/glossary#portfolio).

*   **Core Holding**: Total [Bond](/glossary#bond) Market [ETF](/glossary#etf) (BND, AGG) provides instant diversification. 60-80% of [bond](/glossary#bond) allocation.
*   **Add Treasuries for Safety**: Treasury [ETF](/glossary#etf) (GOVT, IEF) for pure safety. 10-20% of [bond](/glossary#bond) allocation.
*   **Optional High-[Yield](/glossary#yield)**: For yield-seekers, 5-15% in HYG or JNK. Understand the [risk](/glossary#risk).
*   **[TIPS](/glossary#tips) for [Inflation](/glossary#inflation)**: 5-10% in TIP [ETF](/glossary#etf) hedges against unexpected [inflation](/glossary#inflation).
*   **International [Bonds](/glossary#bond)**: BNDX for global [diversification](/glossary#diversification). [Currency](/glossary#currency) hedged versions reduce FX [risk](/glossary#risk).
*   **Ladder Strategy**: For individual [bonds](/glossary#bond), a ladder (buying [bonds](/glossary#bond) maturing in 1, 2, 3... years) smooths [interest rate](/glossary#interest-rate) exposure.
*   **Keep It Simple**: For most investors, a Total [Bond](/glossary#bond) Market [ETF](/glossary#etf) is all you need.
\`,
        keyTakeaways: [
            "Government bonds are backed by taxing power; corporate bonds by company profits.",
            "Credit ratings (AAA to D) measure default risk — investment grade is BBB/Baa or higher.",
            "The credit spread measures extra yield demanded for corporate risk vs. Treasuries.",
            "Treasuries provide crisis protection; corporates offer higher yield in good times."
        ]
    },`;

const startMarker = '"bf_2": {';
const endMarker = '"bf_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_2: Government vs Corporate Bonds - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_2!');
