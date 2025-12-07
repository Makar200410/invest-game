const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_7": {
        title: "Municipal Bonds",
        content: \`
# Municipal Bonds: Tax-Free Income

[Municipal bonds](/glossary#muni-bonds) ("munis") are issued by state and local governments to fund public projects like schools, roads, and hospitals. Their killer feature is tax-exempt interest — you often pay zero federal tax on the income. For investors in high tax brackets, munis can deliver better after-tax returns than taxable [bonds](/glossary#bond) with higher stated [yields](/glossary#yield).

## Part 1: What Are Municipal Bonds?

[Munis](/glossary#muni-bonds) fund infrastructure and public services at the state and local level.

*   **Issuers**: States, cities, counties, school districts, water authorities, airports, hospitals.
*   **Purpose**: Build roads, bridges, schools, hospitals, water systems. Fund public operations.
*   **Tax Advantage**: Interest is exempt from federal income tax. Often exempt from state tax if you buy in-state.
*   **Market Size**: $4+ trillion market. Smaller than Treasuries but significant.
*   **Types**: General Obligation (GO) [bonds](/glossary#bond) and Revenue [bonds](/glossary#bond) (explained below).
*   **History**: [Munis](/glossary#muni-bonds) have existed since the 1800s. Default rate historically very low.

## Part 2: General Obligation vs. Revenue Bonds

Two main structures exist, with different backing and [risk](/glossary#risk) profiles.

*   **[General Obligation (GO)](/glossary#go-bond)**: Backed by the full taxing power of the issuer. State/city pledges all resources to repay.
*   **GO Safety**: Very safe. The government can raise taxes to pay. Default is political failure.
*   **Revenue [Bonds](/glossary#bond)**: Backed by specific revenue source (tolls, hospital fees, airport fees, etc.).
*   **Revenue [Risk](/glossary#risk)**: If the project fails (hospital closes, toll road unused), [bond](/glossary#bond) holders may not be paid in full.
*   **[Yield](/glossary#yield) Difference**: Revenue [bonds](/glossary#bond) typically [yield](/glossary#yield) more than GO [bonds](/glossary#bond) due to higher [risk](/glossary#risk).
*   **Which to Choose**: GO [bonds](/glossary#bond) for safety. Revenue [bonds](/glossary#bond) for higher [yield](/glossary#yield) with research.

## Part 3: The Tax-Equivalent Yield

To compare [munis](/glossary#muni-bonds) to taxable [bonds](/glossary#bond), calculate the tax-equivalent [yield](/glossary#yield).

*   **Formula**: Tax-Equivalent [Yield](/glossary#yield) = [Muni](/glossary#muni-bonds) [Yield](/glossary#yield) / (1 - Tax Rate)
*   **Example**: 4% [muni](/glossary#muni-bonds), 37% federal bracket: 4% / (1 - 0.37) = 6.35% tax-equivalent.
*   **Interpretation**: The 4% [muni](/glossary#muni-bonds) equals a 6.35% taxable [bond](/glossary#bond) for someone in the 37% bracket.
*   **Lower Bracket Example**: 4% [muni](/glossary#muni-bonds), 22% bracket: 4% / (1 - 0.22) = 5.13% tax-equivalent.
*   **Key Insight**: The higher your tax bracket, the more valuable [munis](/glossary#muni-bonds) become.
*   **In-State Double Exemption**: Add state tax savings for in-state [munis](/glossary#muni-bonds). Benefit compounds.

## Part 4: Who Should Own Munis?

[Munis](/glossary#muni-bonds) are ideal for certain investors and inappropriate for others.

*   **Ideal**:
    *   High income earners (32%+ tax bracket)
    *   Residents of high-tax states (CA, NY, NJ)
    *   Taxable brokerage accounts
    *   Retirees needing tax-efficient income
*   **Avoid**:
    *   Low tax bracket investors (tax benefit is minimal)
    *   Tax-advantaged accounts ([IRA](/glossary#ira), [401k](/glossary#401k)) — tax exemption is wasted since account is already tax-sheltered
*   **Comparison**: Always calculate tax-equivalent [yield](/glossary#yield). Don't assume [munis](/glossary#muni-bonds) are better without the math.

## Part 5: Municipal Bond Credit Analysis

[Munis](/glossary#muni-bonds) rarely default, but credit analysis still matters.

*   **[Credit Ratings](/glossary#credit-rating)**: Moody's and S&P rate [munis](/glossary#muni-bonds). AAA is highest. BB and below is rare.
*   **Revenue Source**: For revenue [bonds](/glossary#bond), can the project generate enough to cover payments?
*   **Economic Base**: Diversified local economy is safer. Single-industry towns are risky.
*   **Demographics**: Population growth vs. decline. Shrinking populations stress budgets.
*   **Pension Obligations**: Unfunded pension liabilities can strain city/state finances.
*   **History**: Track record of balanced budgets and timely debt payment.

## Part 6: Historical Default Experience

[Muni](/glossary#muni-bonds) defaults are rare but instructive when they occur.

*   **Default Rate**: <0.1% for investment-grade [munis](/glossary#muni-bonds) historically. Much lower than [corporate bonds](/glossary#corporate-bond).
*   **Famous Defaults**: Detroit (2013), Puerto Rico (2017), Orange County CA (1994).
*   **Recovery**: [Muni](/glossary#muni-bonds) recovery rates are historically high (60-70%+).
*   **GO vs. Revenue**: GO [bonds](/glossary#bond) almost never default. Revenue [bonds](/glossary#bond) have higher (but still low) rates.
*   **Sector [Risks](/glossary#risk)**: Hospital and housing project [bonds](/glossary#bond) have higher default rates.
*   **[Bond](/glossary#bond) Insurance**: Some [munis](/glossary#muni-bonds) are insured. If issuer defaults, insurer pays.

## Part 7: How to Buy Municipal Bonds

Multiple methods exist for adding [munis](/glossary#muni-bonds) to your [portfolio](/glossary#portfolio).

*   **Individual [Bonds](/glossary#bond)**: Buy through broker. Research required. Larger minimums ($5,000+).
*   **[Muni ETFs](/glossary#etf)**: MUB (National), VTEB (Vanguard National). Instant [diversification](/glossary#diversification).
*   **State-Specific [ETFs](/glossary#etf)**: MUB-CA (California), NYF (New York). Double tax exemption for residents.
*   **[Mutual Funds](/glossary#mutual-fund)**: Actively managed [muni](/glossary#muni-bonds) funds. Higher fees but credit research included.
*   **New Issues**: Buy at initial offering. No markup. May require relationship with broker.
*   **[Secondary Market](/glossary#secondary-market)**: Less liquid than Treasuries. [Spreads](/glossary#bid-ask-spread) can be wide for individual [bonds](/glossary#bond).

## Part 8: Muni Bond Tax Nuances

The tax rules have important details beyond basic federal exemption.

*   **Federal Exemption**: Interest is exempt from federal income tax. Always.
*   **State Exemption**: Usually exempt from your own state's tax (buy NY [munis](/glossary#muni-bonds) if NY resident).
*   **Out-of-State**: Interest from other states is typically taxable in your state.
*   **AMT**: Some "[private activity bonds](/glossary#private-activity-bond)" trigger Alternative Minimum Tax. Check before buying.
*   **[Capital Gains](/glossary#capital-gains)**: If you sell [muni](/glossary#muni-bonds) at a gain, the GAIN is taxable (only interest is exempt).
*   **[Social Security](/glossary#social-security)**: [Muni](/glossary#muni-bonds) interest IS counted for Social Security taxation calculations. May push more SS into taxable range.

## Part 9: Building Municipal Bond Allocation

Practical strategies for incorporating [munis](/glossary#muni-bonds) into your [portfolio](/glossary#portfolio).

*   **Tax Bracket Test**: Calculate tax-equivalent [yield](/glossary#yield). Only buy [munis](/glossary#muni-bonds) if they win after-tax.
*   **Account Location**: [Munis](/glossary#muni-bonds) in taxable accounts ONLY. Never waste tax exemption in [IRA](/glossary#ira)/[401k](/glossary#401k).
*   **In-State Focus**: For high-tax state residents, prioritize in-state [munis](/glossary#muni-bonds) for double exemption.
*   **Quality Focus**: Stick to investment-grade (BBB or higher). Avoid [muni](/glossary#muni-bonds) junk [bonds](/glossary#bond).
*   **Core Holding**: [Muni](/glossary#muni-bonds) [bond](/glossary#bond) [ETF](/glossary#etf) (MUB, VTEB) for [diversification](/glossary#diversification).
*   **Ladder Option**: Build [muni](/glossary#muni-bonds) [ladder](/glossary#bond-ladder) for retirees needing predictable tax-free income.
*   **Allocation**: Replace portion of total [bond](/glossary#bond) allocation with [munis](/glossary#muni-bonds) in taxable accounts.
\`,
        keyTakeaways: [
            "Municipal bond interest is typically exempt from federal income tax.",
            "In-state munis often provide double tax exemption (federal + state).",
            "Tax-Equivalent Yield = Muni Yield / (1 - Tax Rate) — compare to taxable bonds.",
            "Munis belong only in taxable accounts — never in IRAs or 401(k)s."
        ]
    },`;

const startMarker = '"bf_7": {';
const endMarker = '"bf_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_7: Municipal Bonds - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_7!');
