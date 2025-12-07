const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_8": {
        title: "TIPS (Inflation-Protected)",
        content: \`
# TIPS: Inflation Insurance for Your Portfolio

[Treasury Inflation-Protected Securities](/glossary#tips) (TIPS) are US government [bonds](/glossary#bond) that adjust for [inflation](/glossary#inflation). Unlike regular [bonds](/glossary#bond) where [inflation](/glossary#inflation) erodes your purchasing power, [TIPS](/glossary#tips) [principal](/glossary#principal) rises with the Consumer Price Index. They're the only investment that directly hedges [inflation risk](/glossary#inflation) with a government guarantee.

## Part 1: How TIPS Work

[TIPS](/glossary#tips) protect your purchasing power through a unique adjustment mechanism.

*   **[Principal](/glossary#principal) Adjustment**: The face value of [TIPS](/glossary#tips) increases with [inflation](/glossary#inflation) (measured by CPI).
*   **Example**: You buy $1,000 TIPS. [Inflation](/glossary#inflation) is 3%. [Principal](/glossary#principal) becomes $1,030.
*   **[Coupon](/glossary#coupon) Calculation**: Interest rate is fixed, but applies to adjusted [principal](/glossary#principal).
*   **Example Continued**: 2% [coupon](/glossary#coupon) on $1,030 [principal](/glossary#principal) = $20.60 (vs. $20 originally).
*   **[Maturity](/glossary#maturity)**: At [maturity](/glossary#maturity), you receive the greater of adjusted [principal](/glossary#principal) or original face value.
*   **Deflation Floor**: If CPI falls, [principal](/glossary#principal) adjusts down. But at [maturity](/glossary#maturity), you get at least the original face value.

## Part 2: Real Yield vs. Nominal Yield

Understanding [TIPS](/glossary#tips) requires distinguishing between real and nominal returns.

*   **Nominal [Yield](/glossary#yield)**: Regular [bond](/glossary#bond) [yields](/glossary#yield). Includes [inflation](/glossary#inflation) expectations. What you see quoted.
*   **[Real Yield](/glossary#real-yield)**: [TIPS](/glossary#tips) [yields](/glossary#yield). The return AFTER [inflation](/glossary#inflation). What you actually gain in purchasing power.
*   **Breakeven [Inflation](/glossary#inflation)**: Nominal Treasury [Yield](/glossary#yield) - [TIPS](/glossary#tips) [Yield](/glossary#yield) = Market's [inflation](/glossary#inflation) expectation.
*   **Example**: 10-year Treasury [yields](/glossary#yield) 4%. 10-year [TIPS](/glossary#tips) [yields](/glossary#yield) 2%. Breakeven [inflation](/glossary#inflation) = 2%.
*   **Decision Rule**: If actual [inflation](/glossary#inflation) > breakeven, [TIPS](/glossary#tips) outperform. If [inflation](/glossary#inflation) < breakeven, nominal [bonds](/glossary#bond) outperform.
*   **2022 Example**: [TIPS](/glossary#tips) outperformed dramatically because [inflation](/glossary#inflation) (8%+) exceeded breakeven (~2.5%).

## Part 3: TIPS Maturity Options

[TIPS](/glossary#tips) are available in various [maturities](/glossary#maturity) for different needs.

*   **5-Year [TIPS](/glossary#tips)**: Short-term [inflation](/glossary#inflation) protection. Lower [duration](/glossary#duration), less interest rate [risk](/glossary#risk).
*   **10-Year [TIPS](/glossary#tips)**: Most liquid. Standard benchmark for [inflation](/glossary#inflation) expectations.
*   **30-Year [TIPS](/glossary#tips)**: Long-term protection. High [duration](/glossary#duration), significant price [volatility](/glossary#volatility).
*   **I [Bonds](/glossary#bond)**: Not technically [TIPS](/glossary#tips), but similar. Savings [bonds](/glossary#bond) with [inflation](/glossary#inflation) adjustment. $10,000/year limit.
*   **Short-Term Preference**: Most investors use 5-10 year [TIPS](/glossary#tips). 30-year has excessive interest rate [risk](/glossary#risk).
*   **[Ladder](/glossary#bond-ladder) Strategy**: Build [TIPS](/glossary#tips) [ladder](/glossary#bond-ladder) across [maturities](/glossary#maturity) for long-term [inflation](/glossary#inflation) protection.

## Part 4: TIPS in Your Portfolio

Where [TIPS](/glossary#tips) fit in overall [asset allocation](/glossary#asset-allocation).

*   **Role**: Hedge against unexpected [inflation](/glossary#inflation). Insurance policy, not primary return driver.
*   **Allocation**: 5-20% of fixed income allocation is common.
*   **Complement**: Combine with nominal [bonds](/glossary#bond) for balanced interest rate and [inflation](/glossary#inflation) protection.
*   **[Diversification](/glossary#diversification)**: [TIPS](/glossary#tips) are uncorrelated with [stocks](/glossary#stock) and nominal [bonds](/glossary#bond) during [inflation](/glossary#inflation) shocks.
*   **Retirement Focus**: Retirees on fixed income are vulnerable to [inflation](/glossary#inflation). [TIPS](/glossary#tips) protect purchasing power.
*   **[Social Security](/glossary#social-security) Alternative**: Some use [TIPS](/glossary#tips) to replicate SS's [inflation](/glossary#inflation) adjustment for retirement income.

## Part 5: Tax Implications of TIPS

[TIPS](/glossary#tips) have a unique tax problem that affects account placement.

*   **Phantom Income**: The [inflation](/glossary#inflation) adjustment to [principal](/glossary#principal) is taxed annually—even though you don't receive cash.
*   **Example**: [Principal](/glossary#principal) adjusts from $1,000 to $1,050. You owe tax on $50, but receive no cash until [maturity](/glossary#maturity).
*   **Problem**: Negative cash flow. You pay taxes on gains you haven't received.
*   **Solution**: Hold [TIPS](/glossary#tips) in tax-advantaged accounts ([IRA](/glossary#ira), [401k](/glossary#401k), [HSA](/glossary#hsa)). No phantom income tax.
*   **I [Bond](/glossary#bond) Advantage**: I [Bonds](/glossary#bond) defer tax until redemption. Better for taxable accounts.
*   **Critical Rule**: Never hold [TIPS](/glossary#tips) in taxable accounts. The tax drag is too punishing.

## Part 6: How to Buy TIPS

Several methods exist for acquiring [TIPS](/glossary#tips) exposure.

*   **TreasuryDirect.gov**: Buy directly from government. No fees. Minimum $100.
*   **[TIPS](/glossary#tips) [ETFs](/glossary#etf)**: TIP (iShares), SCHP (Schwab), VTIP (Vanguard short-term). Easy, liquid, diversified.
*   **[TIPS](/glossary#tips) [Mutual Funds](/glossary#mutual-fund)**: Actively managed options available. Higher fees.
*   **Individual [Bonds](/glossary#bond)**: Buy through broker. More control, less convenient.
*   **I [Bonds](/glossary#bond)**: Through TreasuryDirect.gov only. $10,000/year limit. 30-year term.
*   **Simplest Approach**: [TIPS](/glossary#tips) [ETF](/glossary#etf) in tax-advantaged account. VTIP for short-term, TIP for intermediate-term.

## Part 7: TIPS vs. I Bonds

Both protect against [inflation](/glossary#inflation) but differ significantly.

*   **[TIPS](/glossary#tips)**: Trade on exchanges. Price fluctuates. Any quantity. Interest rate fixed.
*   **I [Bonds](/glossary#bond)**: Non-tradable savings [bonds](/glossary#bond). Redeemable at [par](/glossary#par-value). $10k/year limit. Rate resets every 6 months.
*   **Tax**: [TIPS](/glossary#tips) phantom income. I [Bonds](/glossary#bond) can defer taxes until redemption.
*   **[Liquidity](/glossary#liquidity)**: [TIPS](/glossary#tips) are highly liquid. I [Bonds](/glossary#bond) have 1-year lock-up, 5-year penalty.
*   **[Yield](/glossary#yield) Comparison**: Compare current I [Bond](/glossary#bond) fixed rate to [TIPS](/glossary#tips) [real yield](/glossary#real-yield).
*   **Recommendation**: Use I [Bonds](/glossary#bond) first (up to limit) in taxable. Use [TIPS](/glossary#tips) in tax-advantaged accounts.

## Part 8: When TIPS Underperform

[TIPS](/glossary#tips) aren't always the best choice. Understand the scenarios.

*   **Low [Inflation](/glossary#inflation)**: If actual [inflation](/glossary#inflation) is lower than breakeven, nominal [bonds](/glossary#bond) win.
*   **Deflation**: [Principal](/glossary#principal) adjusts down. You still get original face at [maturity](/glossary#maturity), but opportunity cost.
*   **Rising Real Rates**: If real [yields](/glossary#yield) rise, [TIPS](/glossary#tips) prices fall. Same interest rate [risk](/glossary#risk) as nominal [bonds](/glossary#bond).
*   **2022 Paradox**: [TIPS](/glossary#tips) lost money in 2022 despite high [inflation](/glossary#inflation). Why? Real rates rose sharply, crushing prices.
*   **Long [Duration](/glossary#duration)**: Long-term [TIPS](/glossary#tips) have high [duration](/glossary#duration). Very sensitive to rate changes.
*   **Key Insight**: [TIPS](/glossary#tips) protect against [inflation](/glossary#inflation), but NOT against rising real rates.

## Part 9: Building TIPS into Your Strategy

Practical implementation for different investor types.

*   **Young Investor**: 5-10% of [bond](/glossary#bond) allocation in [TIPS](/glossary#tips). [Inflation](/glossary#inflation) hedge for long-term.
*   **Pre-Retiree**: 10-20% of [bond](/glossary#bond) allocation. Protecting accumulated wealth from [inflation](/glossary#inflation).
*   **Retiree**: Consider higher allocation (20%+). Fixed income must maintain purchasing power.
*   **Accumulators**: VTIP ([short-term TIPS](/glossary#tips)) in [Roth IRA](/glossary#roth-ira). No phantom income, all growth tax-free.
*   **Near-Term Protection**: VTIP (1-5 year [duration](/glossary#duration)). Less price [volatility](/glossary#volatility).
*   **Long-Term Protection**: TIP or SCHP (7-10 year [duration](/glossary#duration)). Higher [yield](/glossary#yield), more rate [risk](/glossary#risk).
*   **Combined with I [Bonds](/glossary#bond)**: Max I [Bonds](/glossary#bond) annually, supplement with [TIPS](/glossary#tips) [ETF](/glossary#etf) in tax-advantaged.
\`,
        keyTakeaways: [
            "TIPS principal adjusts with inflation (CPI), protecting purchasing power.",
            "TIPS yield 'real yield' — your return after inflation. Compare to breakeven rate.",
            "Hold TIPS only in tax-advantaged accounts (IRA, 401k) to avoid phantom income tax.",
            "I Bonds have $10k limit but no phantom tax — use for taxable accounts."
        ]
    },`;

const startMarker = '"bf_8": {';
const endMarker = '// Module 5';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_8: TIPS - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_8!');
console.log('\n=== ALL MODULE 4 LESSONS UPDATED SUCCESSFULLY! ===');
