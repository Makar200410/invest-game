const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_1": {
        title: "What is a Bond?",
        content: \`
# What is a Bond? The IOU of Investing

A [bond](/glossary#bond) is fundamentally a loan. But instead of you borrowing money from a bank, you are lending money to a government, corporation, or other entity. In exchange for your loan, they promise to pay you regular interest and return your principal at a future date. [Bonds](/glossary#bond) are the "safe" half of investing — providing stable income and capital preservation when [stocks](/glossary#stock) get scary.

## Part 1: The Anatomy of a Bond

Every [bond](/glossary#bond) has specific characteristics that define its terms. Understanding these is essential.

*   **[Principal](/glossary#principal) (Face Value/Par Value)**: The amount you're lending, typically $1,000 per bond. This is what you get back at maturity.
*   **[Coupon Rate](/glossary#coupon)**: The annual interest rate the borrower pays you. A 5% [coupon](/glossary#coupon) on a $1,000 [bond](/glossary#bond) = $50/year.
*   **[Maturity Date](/glossary#maturity)**: When the loan ends and you receive your [principal](/glossary#principal) back. Could be 1 year or 30 years.
*   **Issuer**: Who's borrowing your money — US Treasury, Apple, your local city government.
*   **[Credit Rating](/glossary#credit-rating)**: A grade (AAA to D) indicating how likely the borrower is to repay.
*   **[Yield](/glossary#yield)**: Your actual return, which may differ from the [coupon](/glossary#coupon) if you paid more or less than face value.

## Part 2: How Bonds Work

The lifecycle of a [bond](/glossary#bond) from purchase to [maturity](/glossary#maturity) follows a predictable pattern.

*   **Purchase**: You buy the [bond](/glossary#bond) either at issuance ([primary market](/glossary#primary-market)) or from another investor ([secondary market](/glossary#secondary-market)).
*   **Interest Payments**: The issuer pays you interest (usually semi-annually for most US [bonds](/glossary#bond)).
*   **Hold to [Maturity](/glossary#maturity)**: If you hold until [maturity](/glossary#maturity), you receive your [principal](/glossary#principal) back in full (assuming no default).
*   **Sell Early**: You can sell the [bond](/glossary#bond) before [maturity](/glossary#maturity), but the price may be higher or lower than you paid.
*   **Example**: Buy a $1,000 [bond](/glossary#bond) with 5% [coupon](/glossary#coupon), 10-year [maturity](/glossary#maturity). Receive $50/year for 10 years, then get $1,000 back. Total: $1,500 on a $1,000 investment.
*   **Reinvestment**: Most [bond](/glossary#bond) investors reinvest interest payments to [compound](/glossary#compound-interest) returns over time.

## Part 3: Why Invest in Bonds?

[Bonds](/glossary#bond) serve critical roles in a [portfolio](/glossary#portfolio) that [stocks](/glossary#stock) cannot fill.

*   **Stability**: [Bonds](/glossary#bond) are generally less volatile than [stocks](/glossary#stock). They provide ballast when equity markets crash.
*   **Income**: Regular, predictable interest payments. Essential for retirees living off their [portfolio](/glossary#portfolio).
*   **Capital Preservation**: Unlike [stocks](/glossary#stock), high-quality [bonds](/glossary#bond) return your [principal](/glossary#principal) at [maturity](/glossary#maturity) (barring default).
*   **[Diversification](/glossary#diversification)**: [Bonds](/glossary#bond) often move opposite to [stocks](/glossary#stock) (especially Treasury [bonds](/glossary#bond) during crises).
*   **[Risk](/glossary#risk) Reduction**: As you age, increasing [bond](/glossary#bond) allocation reduces overall [portfolio](/glossary#portfolio) [volatility](/glossary#volatility).
*   **Contractual Obligation**: Unlike [dividends](/glossary#dividend) which companies can cut, [bond](/glossary#bond) interest is a legal obligation. Failure to pay is default.

## Part 4: Types of Bond Issuers

Different entities issue [bonds](/glossary#bond), each with different [risk](/glossary#risk) and return characteristics.

*   **US Treasury [Bonds](/glossary#bond)**: Backed by US government. Considered "[risk](/glossary#risk)-free" (government can print money). Lowest [yields](/glossary#yield).
*   **Government Agency [Bonds](/glossary#bond)**: Fannie Mae, Freddie Mac. Implicitly government-backed. Slightly higher [yields](/glossary#yield).
*   **[Municipal Bonds](/glossary#muni-bonds)**: Issued by states and cities for infrastructure. Often tax-exempt. "Munis."
*   **[Corporate Bonds](/glossary#corporate-bond)**: Issued by companies (Apple, Verizon). Higher [yields](/glossary#yield) than government, higher [risk](/glossary#risk).
*   **High-[Yield](/glossary#yield) (Junk) [Bonds](/glossary#bond)**: Low-rated corporate [bonds](/glossary#bond) (BB or below). High returns, significant default [risk](/glossary#risk).
*   **International [Bonds](/glossary#bond)**: Foreign government and corporate [bonds](/glossary#bond). [Currency](/glossary#currency) [risk](/glossary#risk) adds complexity.

## Part 5: Understanding Bond Pricing

[Bond](/glossary#bond) prices fluctuate based on [interest rates](/glossary#interest-rate), [credit risk](/glossary#credit-risk), and time to [maturity](/glossary#maturity).

*   **Par (100)**: When a [bond](/glossary#bond) trades at its face value. A $1,000 [bond](/glossary#bond) = $1,000.
*   **[Premium](/glossary#premium) (>100)**: [Bond](/glossary#bond) trades above face value. Often when its [coupon](/glossary#coupon) is higher than current rates.
*   **[Discount](/glossary#discount) (<100)**: [Bond](/glossary#bond) trades below face value. Often when its [coupon](/glossary#coupon) is lower than current rates.
*   **Price Quote**: [Bonds](/glossary#bond) are quoted as a percentage of face value. "98.5" means 98.5% of $1,000 = $985.
*   **[Accrued Interest](/glossary#accrued-interest)**: When you buy between [coupon](/glossary#coupon) dates, you pay the seller for interest they've earned but not yet received.
*   **Clean vs. Dirty Price**: Clean price excludes [accrued interest](/glossary#accrued-interest). Dirty price includes it. You pay the dirty price.

## Part 6: Coupon vs. Yield — Crucial Distinction

[Coupon](/glossary#coupon) and [yield](/glossary#yield) are related but different. Understanding both is essential.

*   **[Coupon Rate](/glossary#coupon)**: Fixed at issuance. 5% [coupon](/glossary#coupon) = 5% of face value paid annually. Never changes.
*   **[Current Yield](/glossary#current-yield)**: Annual [coupon](/glossary#coupon) payment ÷ Current market price. Changes as price changes.
*   **Example**: 5% [coupon](/glossary#coupon) bond, face value $1,000. If price = $900, [current yield](/glossary#current-yield) = $50/$900 = 5.56%.
*   **[Yield to Maturity](/glossary#ytm) (YTM)**: Total return if held to [maturity](/glossary#maturity), including [coupon](/glossary#coupon) payments and price gain/loss. The most comprehensive measure.
*   **[Yield](/glossary#yield) and Price**: When [yield](/glossary#yield) goes UP, price goes DOWN (and vice versa). This inverse relationship is fundamental.
*   **Example Math**: If rates rise from 5% to 6%, who would pay $1,000 for your 5% [bond](/glossary#bond) when new [bonds](/glossary#bond) pay 6%? They won't — your [bond](/glossary#bond)'s price must fall.

## Part 7: Bond Risks — Not Risk-Free

[Bonds](/glossary#bond) are safer than [stocks](/glossary#stock), but they're not [risk](/glossary#risk)-free. Several [risk](/glossary#risk) types exist.

*   **[Interest Rate Risk](/glossary#interest-rate-risk)**: When rates rise, [bond](/glossary#bond) prices fall. Longer [maturity](/glossary#maturity) [bonds](/glossary#bond) are more sensitive.
*   **[Credit Risk](/glossary#credit-risk) / Default [Risk](/glossary#risk)**: The issuer may fail to make payments or repay [principal](/glossary#principal). Rare for governments, real for corporations.
*   **[Inflation Risk](/glossary#inflation)**: Fixed payments lose purchasing power if [inflation](/glossary#inflation) rises. 3% [yield](/glossary#yield) with 4% [inflation](/glossary#inflation) = negative real return.
*   **[Reinvestment Risk](/glossary#reinvestment-risk)**: If rates fall, you'll reinvest [coupon](/glossary#coupon) payments at lower rates.
*   **[Liquidity Risk](/glossary#liquidity)**: Some [bonds](/glossary#bond) trade infrequently. You might not find a buyer at a fair price.
*   **Call [Risk](/glossary#risk)**: Some issuers can "call" (repurchase) [bonds](/glossary#bond) early, forcing you to reinvest at lower rates.

## Part 8: How to Buy Bonds

Several methods exist for adding [bonds](/glossary#bond) to your [portfolio](/glossary#portfolio).

*   **Individual [Bonds](/glossary#bond)**: Buy specific [bonds](/glossary#bond) through your broker. Requires research and larger minimums.
*   **[Bond](/glossary#bond) [ETFs](/glossary#etf)**: BND (Total [Bond](/glossary#bond) Market), AGG, TLT (Long-Term Treasury). Easy diversification, trades like [stock](/glossary#stock).
*   **[Bond](/glossary#bond) [Mutual Funds](/glossary#mutual-fund)**: Similar to [ETFs](/glossary#etf) but trade once daily at NAV.
*   **Treasury Direct**: Buy Treasury [bonds](/glossary#bond) directly from the government at TreasuryDirect.gov. No fees.
*   **I Bonds**: [Inflation](/glossary#inflation)-protected savings [bonds](/glossary#bond). Purchase limit of $10,000/year. Excellent for protecting cash.
*   **New Issue vs. [Secondary](/glossary#secondary-market)**: New issue [bonds](/glossary#bond) are sold at offering; [secondary market](/glossary#secondary-market) [bonds](/glossary#bond) trade between investors.

## Part 9: Bonds in Your Portfolio

Deciding how much to allocate to [bonds](/glossary#bond) depends on your age, goals, and [risk](/glossary#risk) tolerance.

*   **Classic Rule**: "Your age in [bonds](/glossary#bond)" — 30 years old = 30% [bonds](/glossary#bond). Adjusts as you age.
*   **Modern Adjustments**: With longer lifespans, many suggest "age minus 10" or "age minus 20" for more growth.
*   **Retirement [Portfolio](/glossary#portfolio)**: Traditional 60/40 ([stocks](/glossary#stock)/[bonds](/glossary#bond)) has been a retirement standard for decades.
*   **Young Investors**: 10-20% [bonds](/glossary#bond) provides some stability while maximizing growth.
*   **Near Retirement**: 40-60% [bonds](/glossary#bond) protects accumulated wealth.
*   **Rebalancing**: When [stocks](/glossary#stock) crash, [rebalance](/glossary#rebalancing) by buying more [stocks](/glossary#stock) with [bond](/glossary#bond) proceeds. Automatic "buy low."
*   **Simplest Approach**: A [Total Bond Market](/glossary#bond) [ETF](/glossary#etf) (BND) gives instant diversification across thousands of [bonds](/glossary#bond).
\`,
        keyTakeaways: [
            "A bond is a loan you make to a government or corporation in exchange for regular interest.",
            "Bonds provide stability, income, and capital preservation — essential portfolio diversification.",
            "When interest rates rise, bond prices fall — this inverse relationship is fundamental.",
            "Bond funds (ETFs like BND) offer easy diversification across thousands of bonds."
        ]
    },`;

const startMarker = '"bf_1": {';
const endMarker = '"bf_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_1: What is a Bond? - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_1!');
