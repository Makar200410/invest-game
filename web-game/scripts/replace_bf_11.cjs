const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_11": {
        title: "Inflation-Protected Securities (TIPS)",
        content: \`
# TIPS: Guarding Against Inflation

[Treasury Inflation-Protected Securities](/glossary#tips) (TIPS) are US government [bonds](/glossary#bond) designed to protect your purchasing power. Unlike regular [bonds](/glossary#bond) where [inflation](/glossary#inflation) erodes your returns, [TIPS](/glossary#tips) adjust their [principal](/glossary#principal) based on the Consumer Price Index. When [inflation](/glossary#inflation) rises, your [TIPS](/glossary#tips) value rises too — the only government-guaranteed [inflation](/glossary#inflation) hedge.

## Part 1: How TIPS Work

The mechanics of [inflation](/glossary#inflation) protection through [principal](/glossary#principal) adjustment.

*   **[Principal](/glossary#principal) Adjustment**: The face value changes based on CPI-U (Consumer Price Index for All Urban Consumers).
*   **Example**: You buy $10,000 [TIPS](/glossary#tips). [Inflation](/glossary#inflation) is 5%. [Principal](/glossary#principal) becomes $10,500.
*   **[Coupon](/glossary#coupon) Application**: Fixed interest rate applies to the adjusted [principal](/glossary#principal).
*   **[Coupon](/glossary#coupon) Example**: 2% [coupon](/glossary#coupon) on $10,500 [principal](/glossary#principal) = $210 (vs. $200 originally).
*   **Deflation Protection**: [Principal](/glossary#principal) can decrease with deflation, but at [maturity](/glossary#maturity) you get at least the original face value.
*   **Semi-Annual Payments**: Interest paid every 6 months, like regular Treasuries.

## Part 2: Real Yield Explained

[TIPS](/glossary#tips) [yields](/glossary#yield) represent [real returns](/glossary#real-yield) — what you earn after [inflation](/glossary#inflation).

*   **Nominal [Yield](/glossary#yield)**: Regular [bond](/glossary#bond) [yields](/glossary#yield). Includes [inflation](/glossary#inflation) expectations.
*   **[Real Yield](/glossary#real-yield)**: [TIPS](/glossary#tips) [yield](/glossary#yield). Your return ABOVE [inflation](/glossary#inflation).
*   **Example**: [TIPS](/glossary#tips) [yields](/glossary#yield) 2%. [Inflation](/glossary#inflation) is 3%. Your total return is ~5%.
*   **Breakeven [Inflation](/glossary#inflation)**: Nominal Treasury [Yield](/glossary#yield) - [TIPS](/glossary#tips) [Yield](/glossary#yield) = Market's [inflation](/glossary#inflation) expectation.
*   **Decision Rule**: If actual [inflation](/glossary#inflation) exceeds breakeven, [TIPS](/glossary#tips) outperform nominal [bonds](/glossary#bond).
*   **2022 Example**: 8% [inflation](/glossary#inflation) crushed nominal [bonds](/glossary#bond). [TIPS](/glossary#tips) outperformed despite price declines.

## Part 3: TIPS Maturities

Available [maturities](/glossary#maturity) and their characteristics.

*   **5-Year [TIPS](/glossary#tips)**: Shortest. Lower [duration](/glossary#duration), less interest rate sensitivity.
*   **10-Year [TIPS](/glossary#tips)**: Most liquid benchmark. Standard [inflation](/glossary#inflation) expectations reference.
*   **30-Year [TIPS](/glossary#tips)**: Longest. Highest [duration](/glossary#duration), most price [volatility](/glossary#volatility).
*   **Auction Schedule**: 5-year: April, October. 10-year: January, March, May, July, September, November. 30-year: February, August.
*   **[I Bonds](/glossary#tips)**: Savings [bonds](/glossary#bond) with [inflation](/glossary#inflation) adjustment. $10,000/year limit. Different mechanics.
*   **Short-Term Preference**: Many investors prefer 5-10 year [TIPS](/glossary#tips). 30-year has excessive rate [risk](/glossary#risk).

## Part 4: Tax Considerations

The critical tax issue with [TIPS](/glossary#tips) in taxable accounts.

*   **Phantom Income Problem**: [Inflation](/glossary#inflation) adjustment to [principal](/glossary#principal) is taxed annually — even though you receive no cash.
*   **Example**: [Principal](/glossary#principal) adjusts from $10,000 to $10,300. You owe tax on $300, but receive nothing until [maturity](/glossary#maturity).
*   **Tax Drag**: This creates negative cash flow in taxable accounts.
*   **Solution**: Hold [TIPS](/glossary#tips) in tax-advantaged accounts ([IRA](/glossary#ira), [401k](/glossary#401k), [HSA](/glossary#hsa)).
*   **[I Bond](/glossary#tips) Advantage**: [I Bonds](/glossary#tips) defer taxes until redemption. Better for taxable accounts.
*   **Critical Rule**: Never hold [TIPS](/glossary#tips) in taxable accounts unless you're prepared for phantom income tax.

## Part 5: I Bonds vs. TIPS

Comparing the two main [inflation](/glossary#inflation)-protected options.

*   **Market Pricing**: [TIPS](/glossary#tips) trade on exchanges. Prices fluctuate. [I Bonds](/glossary#tips) are redeemable at [par](/glossary#par-value).
*   **Purchase Limits**: [TIPS](/glossary#tips) have no limit. [I Bonds](/glossary#tips) limited to $10,000/year per person.
*   **[Liquidity](/glossary#liquidity)**: [TIPS](/glossary#tips) are highly liquid. [I Bonds](/glossary#tips) have 1-year lock-up, 5-year interest penalty.
*   **Rate Structure**: [TIPS](/glossary#tips) have fixed real rate. [I Bonds](/glossary#tips) have fixed rate plus [inflation](/glossary#inflation) rate (resets every 6 months).
*   **Tax Treatment**: [TIPS](/glossary#tips) have phantom income. [I Bonds](/glossary#tips) can defer taxes.
*   **Strategy**: Max [I Bonds](/glossary#tips) first for taxable. Use [TIPS](/glossary#tips) in tax-advantaged.

## Part 6: TIPS in Portfolio Construction

Where [TIPS](/glossary#tips) fit in overall [asset allocation](/glossary#asset-allocation).

*   **Role**: Hedge against unexpected [inflation](/glossary#inflation). Insurance, not primary return driver.
*   **Typical Allocation**: 5-20% of fixed income allocation.
*   **Complement to Nominal [Bonds](/glossary#bond)**: Combine for balanced interest rate and [inflation](/glossary#inflation) protection.
*   **Uncorrelated Returns**: [TIPS](/glossary#tips) perform differently during [inflation](/glossary#inflation) shocks.
*   **Retirement Focus**: Retirees need protection from [inflation](/glossary#inflation) eroding fixed income.
*   **[Social Security](/glossary#social-security) Substitute**: Some use [TIPS](/glossary#tips) to replicate SS's [inflation](/glossary#inflation) adjustment.

## Part 7: Buying TIPS

Methods to add [TIPS](/glossary#tips) exposure.

*   **TreasuryDirect.gov**: Direct from government. No fees. $100 minimum.
*   **[TIPS](/glossary#tips) [ETFs](/glossary#etf)**: TIP (iShares), SCHP (Schwab), VTIP (Vanguard short-term).
*   **[Mutual Funds](/glossary#mutual-fund)**: Actively managed options available. Higher fees.
*   **Individual [Bonds](/glossary#bond)**: Buy through broker. More control, less convenient.
*   **Auction vs. [Secondary](/glossary#secondary-market)**: New issue at auction or buy existing [TIPS](/glossary#tips) on market.
*   **Simplest**: [TIPS](/glossary#tips) [ETF](/glossary#etf) in tax-advantaged account.

## Part 8: When TIPS Underperform

Scenarios where nominal [bonds](/glossary#bond) beat [TIPS](/glossary#tips).

*   **Low [Inflation](/glossary#inflation)**: If actual [inflation](/glossary#inflation) is lower than breakeven, nominal [bonds](/glossary#bond) win.
*   **Deflation**: [Principal](/glossary#principal) adjusts down. You get original face at [maturity](/glossary#maturity), but opportunity cost.
*   **Rising Real Rates**: If real [yields](/glossary#yield) rise, [TIPS](/glossary#tips) prices fall — same interest rate [risk](/glossary#risk) as nominal.
*   **2022 Paradox**: [TIPS](/glossary#tips) lost money despite high [inflation](/glossary#inflation) because real rates surged.
*   **Long [Duration](/glossary#duration)**: Long-term [TIPS](/glossary#tips) have high [duration](/glossary#duration), massive rate sensitivity.
*   **Key Insight**: [TIPS](/glossary#tips) protect against [inflation](/glossary#inflation), NOT against rising real rates.

## Part 9: Building Your TIPS Strategy

Implementation for different investor profiles.

*   **Young Investor**: 5-10% of [bond](/glossary#bond) allocation. Long-term [inflation](/glossary#inflation) hedge.
*   **Pre-Retiree**: 10-20% of [bonds](/glossary#bond). Protecting accumulated wealth.
*   **Retiree**: Consider 20%+ of [bonds](/glossary#bond). Fixed income must maintain purchasing power.
*   **Account Location**: [TIPS](/glossary#tips) in [Roth IRA](/glossary#roth-ira) ideal. No phantom tax, growth is tax-free.
*   **Short vs. Long**: VTIP (short-term) for less [volatility](/glossary#volatility). TIP or SCHP for higher [yield](/glossary#yield).
*   **Combined Approach**: Max [I Bonds](/glossary#tips) annually, supplement with [TIPS](/glossary#tips) [ETF](/glossary#etf) in retirement accounts.
\`,
        keyTakeaways: [
            "TIPS principal adjusts with inflation (CPI), protecting purchasing power.",
            "TIPS yield 'real yield' — return after inflation. Compare vs. breakeven rate.",
            "Phantom income taxation makes TIPS unsuitable for taxable accounts.",
            "I Bonds ($10k limit) defer taxes — use for taxable; TIPS for tax-advantaged."
        ]
    },`;

const marker = '"bf_10":';
const bf10Start = content.indexOf(marker);
if (bf10Start === -1) { console.error('bf_10 not found'); process.exit(1); }

let braceCount = 0;
let bf10End = -1;
let inBf10 = false;
for (let i = bf10Start; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inBf10 = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inBf10 && braceCount === 0) { bf10End = i + 1; break; }
    }
}

if (bf10End === -1) { console.error('bf_10 end not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_11: TIPS - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

let insertPos = bf10End;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const before = content.substring(0, bf10End) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added bf_11!');
