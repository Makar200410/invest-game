const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_12": {
        title: "Fixed Income ETFs",
        content: \`
# Fixed Income ETFs: Bonds Made Easy

[Bond ETFs](/glossary#etf) have revolutionized fixed income investing. Instead of researching and buying individual [bonds](/glossary#bond), you can own thousands of [bonds](/glossary#bond) through a single, low-cost [ETF](/glossary#etf). They trade like [stocks](/glossary#stock), offer instant diversification, and make [bond](/glossary#bond) investing accessible to everyone. This lesson covers the major categories of [bond ETFs](/glossary#etf) and how to use them.

## Part 1: Why Bond ETFs?

The advantages of [ETFs](/glossary#etf) over individual [bonds](/glossary#bond) for most investors.

*   **Instant [Diversification](/glossary#diversification)**: One purchase gives exposure to thousands of [bonds](/glossary#bond).
*   **Low Minimums**: Buy one share (~$50-100) vs. $1,000+ for individual [bonds](/glossary#bond).
*   **[Liquidity](/glossary#liquidity)**: Trade anytime during market hours. Bid-ask [spreads](/glossary#bid-ask-spread) are tight for major [ETFs](/glossary#etf).
*   **Transparency**: Holdings disclosed daily. Know exactly what you own.
*   **Low Costs**: [Expense ratios](/glossary#expense-ratio) of 0.03-0.15% for major [bond ETFs](/glossary#etf).
*   **Professional Management**: Index [ETFs](/glossary#etf) automatically rebalance and reinvest.

## Part 2: Total Bond Market ETFs

The core building block for most [bond portfolios](/glossary#portfolio).

*   **BND (Vanguard)**: Tracks Bloomberg US Aggregate [Bond](/glossary#bond) Index. ~10,000 [bonds](/glossary#bond). 0.03% fee.
*   **AGG (iShares)**: Similar index. Largest [bond ETF](/glossary#etf). Very liquid.
*   **SCHZ (Schwab)**: Schwab's total [bond](/glossary#bond) offering. 0.04% fee.
*   **What's Included**: US investment-grade [bonds](/glossary#bond) — Treasuries, corporates, mortgages.
*   **Duration**: ~6 years. Moderate interest rate sensitivity.
*   **[Yield](/glossary#yield)**: Reflects the overall investment-grade [bond](/glossary#bond) market. Currently 4-5%.
*   **Use Case**: Core [bond](/glossary#bond) allocation for most investors. One-stop solution.

## Part 3: Treasury ETFs

Pure US government exposure — maximum safety.

*   **Short-Term (0-3 years)**: SHY (iShares), SCHO (Schwab), VGSH (Vanguard).
*   **Intermediate (3-10 years)**: IEI, SCHR, VGIT.
*   **Long-Term (10-30 years)**: TLT, SPTL, VGLT.
*   **Ultra-Short (Bills)**: BIL, SGOV. Near-cash alternatives. Minimal [volatility](/glossary#volatility).
*   **[Duration](/glossary#duration) Impact**: TLT has ~17-year [duration](/glossary#duration). Huge swings with rate changes.
*   **Flight to Safety**: Treasuries rally during crises. Pure [diversification](/glossary#diversification) vs. [stocks](/glossary#stock).
*   **Use Case**: Conservative allocation, crisis hedging, rate speculation.

## Part 4: Corporate Bond ETFs

Higher [yields](/glossary#yield) with [credit risk](/glossary#credit-risk).

*   **Investment-Grade Corporate**: LQD (iShares), VCIT (Vanguard intermediate), VCSH (short).
*   **High-[Yield](/glossary#yield) (Junk)**: HYG (iShares), JNK (SPDR), USHY (broad high-[yield](/glossary#yield)).
*   **Short-Term Corporate**: VCSH, IGSB. Lower [duration](/glossary#duration), less rate [risk](/glossary#risk).
*   **[Spread](/glossary#credit-spread) Exposure**: Corporate [ETFs](/glossary#etf) capture [credit spreads](/glossary#credit-spread) over Treasuries.
*   **Credit Cycle**: Corporates outperform during growth, underperform during recessions.
*   **High-[Yield](/glossary#yield) Caution**: Behaves more like [stocks](/glossary#stock) during stress.
*   **Use Case**: [Yield](/glossary#yield) enhancement for those accepting [credit risk](/glossary#credit-risk).

## Part 5: Municipal Bond ETFs

Tax-free income for taxable accounts.

*   **National [Muni](/glossary#muni-bonds)**: MUB (iShares), VTEB (Vanguard). Broad exposure.
*   **State-Specific**: NYF (NY), CMF (CA), and others. Double tax exemption for residents.
*   **Short-Term [Muni](/glossary#muni-bonds)**: SUB, VMSXX for lower [duration](/glossary#duration).
*   **High-[Yield](/glossary#yield) [Muni](/glossary#muni-bonds)**: HYMB for riskier municipal [bonds](/glossary#bond).
*   **Tax Advantage**: Compare [yields](/glossary#yield) on after-tax basis. [Munis](/glossary#muni-bonds) win for high brackets.
*   **Where to Hold**: Taxable accounts ONLY. Don't waste tax exemption in [IRA](/glossary#ira).
*   **Use Case**: High-income investors in taxable accounts.

## Part 6: Inflation-Protected ETFs

[TIPS](/glossary#tips) exposure for [inflation](/glossary#inflation) hedging.

*   **TIP (iShares)**: Largest [TIPS](/glossary#tips) [ETF](/glossary#etf). Intermediate [duration](/glossary#duration) (~7 years).
*   **SCHP (Schwab)**: Similar exposure. Very low cost.
*   **VTIP (Vanguard)**: Short-term [TIPS](/glossary#tips). Lower [duration](/glossary#duration) (~2.5 years).
*   **STIP (iShares)**: 0-5 year [TIPS](/glossary#tips). Minimal rate sensitivity.
*   **Phantom Income**: Hold in tax-advantaged accounts only.
*   **[Real Yield](/glossary#real-yield)**: Current [yields](/glossary#yield) reflect return after [inflation](/glossary#inflation).
*   **Use Case**: 5-20% of [bond](/glossary#bond) allocation for [inflation](/glossary#inflation) protection.

## Part 7: International Bond ETFs

Global [diversification](/glossary#diversification) beyond US [bonds](/glossary#bond).

*   **BNDX (Vanguard)**: International [bond](/glossary#bond) index. [Currency](/glossary#currency)-hedged. Developed markets.
*   **IAGG (iShares)**: International aggregate. [Currency](/glossary#currency)-hedged.
*   **EMB (iShares)**: Emerging market government [bonds](/glossary#bond). USD-denominated. Higher [yields](/glossary#yield).
*   **VWOB (Vanguard)**: Emerging market [bonds](/glossary#bond). Lower cost alternative.
*   **[Currency](/glossary#currency) [Risk](/glossary#risk)**: Unhedged [ETFs](/glossary#etf) add FX exposure. Hedged preserve USD returns.
*   **[Diversification](/glossary#diversification) Benefit**: International rates don't move in lockstep with US.
*   **Use Case**: 10-30% of [bond](/glossary#bond) allocation for global exposure.

## Part 8: Specialty Bond ETFs

Niche exposures for specific needs.

*   **Floating Rate**: FLOT, BKLN. Rates reset with short-term rates. Low [duration](/glossary#duration).
*   **Mortgage-Backed Securities**: MBB, VMBS. Agency MBS exposure.
*   **Convertible [Bonds](/glossary#bond)**: CWB. [Bonds](/glossary#bond) that convert to [stock](/glossary#stock). Hybrid exposure.
*   **Defined [Maturity](/glossary#maturity)**: BulletShares, iShares iBonds. Mature on specific dates. Ladder building blocks.
*   **Ultra-Short**: MINT, JPST. Near-cash [yields](/glossary#yield) with minimal [volatility](/glossary#volatility).
*   **Senior Loans**: BKLN, SRLN. Floating-rate leveraged loans.
*   **Use Case**: Tactical positions, specific rate views, income optimization.

## Part 9: Building Your Bond ETF Portfolio

Putting it all together for different investor profiles.

*   **Simple Core**: BND or AGG for 80-100% of [bonds](/glossary#bond). Done.
*   **[Three-Fund Portfolio](/glossary#three-fund-portfolio)**: US [Stocks](/glossary#stock) (VTI) + International [Stocks](/glossary#stock) (VXUS) + [Bonds](/glossary#bond) (BND).
*   **Conservative Tilt**: Replace some BND with VGSH (short Treasury). Lower [volatility](/glossary#volatility).
*   **Income Tilt**: Add 10-20% LQD or HYG for higher [yields](/glossary#yield).
*   **[Inflation](/glossary#inflation) Protection**: Add 10-20% TIP or VTIP.
*   **International**: Add 10-20% BNDX for global diversification.
*   **Taxable Account**: Use [muni](/glossary#muni-bonds) [ETFs](/glossary#etf) (MUB, VTEB) instead of taxable [bond ETFs](/glossary#etf).
*   **Retirement Account**: Use [TIPS](/glossary#tips) [ETFs](/glossary#etf) (TIP, SCHP) to avoid phantom income.
*   **Keep It Simple**: For most investors, BND alone is sufficient for the [bond](/glossary#bond) allocation.
\`,
        keyTakeaways: [
            "Bond ETFs offer instant diversification, low costs, and easy trading.",
            "BND/AGG (Total Bond Market) is the core building block for most investors.",
            "Use muni ETFs (MUB) in taxable accounts; TIPS ETFs in retirement accounts.",
            "Specialty ETFs exist for every need — but keep it simple for core allocation."
        ]
    },`;

const marker = '"bf_11":';
const bf11Start = content.indexOf(marker);
if (bf11Start === -1) { console.error('bf_11 not found'); process.exit(1); }

let braceCount = 0;
let bf11End = -1;
let inBf11 = false;
for (let i = bf11Start; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inBf11 = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inBf11 && braceCount === 0) { bf11End = i + 1; break; }
    }
}

if (bf11End === -1) { console.error('bf_11 end not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_12: Fixed Income ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

let insertPos = bf11End;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const before = content.substring(0, bf11End) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n\n    ' + after, 'utf8');
console.log('✓ Added bf_12!');
console.log('\n=== ALL MODULE 4 LESSONS (bf_1 - bf_12) COMPLETE! ===');
