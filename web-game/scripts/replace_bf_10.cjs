const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_10": {
        title: "Bond Ladders",
        content: \`
# Bond Ladders: Systematic Fixed Income

A [bond ladder](/glossary#bond-ladder) is a strategy that spreads [bond](/glossary#bond) investments across multiple [maturities](/glossary#maturity). When one [bond](/glossary#bond) matures, you reinvest in a longer-term [bond](/glossary#bond), maintaining a constant structure. This approach smooths interest rate [risk](/glossary#risk), provides regular [liquidity](/glossary#liquidity), and creates predictable income streams — perfect for retirees and conservative investors.

## Part 1: The Ladder Concept

Understanding how [bond ladders](/glossary#bond-ladder) work mechanically.

*   **Structure**: Hold [bonds](/glossary#bond) maturing in years 1, 2, 3, 4, 5 (or any sequence).
*   **Example**: Invest $50,000. Buy $10,000 in [bonds](/glossary#bond) maturing each year for 5 years.
*   **Rolling**: When year 1 [bond](/glossary#bond) matures, buy a new 5-year [bond](/glossary#bond). Ladder rolls forward.
*   **Continuous**: The structure perpetuates indefinitely. Always one [bond](/glossary#bond) maturing soon.
*   **Average [Duration](/glossary#duration)**: A 5-year ladder has ~2.5-year average [duration](/glossary#duration). Moderates rate [risk](/glossary#risk).
*   **Autopilot**: Once built, minimal management required. Just reinvest at [maturity](/glossary#maturity).

## Part 2: Benefits of Laddering

Why sophisticated investors and institutions use [ladders](/glossary#bond-ladder).

*   **Reduces [Reinvestment Risk](/glossary#reinvestment-risk)**: Not all money reinvests at the same rate. Averages across environments.
*   **Smooths Interest Rate [Risk](/glossary#risk)**: Rising rates? New purchases get higher [yields](/glossary#yield). Falling rates? Existing [bonds](/glossary#bond) lock in prior [yields](/glossary#yield).
*   **[Liquidity](/glossary#liquidity)**: Regular maturities provide cash without selling (and price [risk](/glossary#risk)).
*   **Income Predictability**: Know exactly what [coupons](/glossary#coupon) arrive when. Retirement planning.
*   **No Price [Volatility](/glossary#volatility) If Held**: Hold to [maturity](/glossary#maturity), get face value. No interest rate [risk](/glossary#risk) realized.
*   **Psychological Comfort**: Removes the need to guess where rates are going.

## Part 3: Building a Treasury Ladder

Step-by-step construction using Treasury [bonds](/glossary#bond).

*   **Choose Length**: 3-year, 5-year, 7-year, 10-year ladders are common.
*   **Equal Rungs**: Divide total investment by number of years.
*   **Buy at TreasuryDirect.gov**: No fees. $100 minimum per purchase.
*   **Alternative — Broker**: Your brokerage can buy Treasuries too. May have small fees.
*   **[Maturity](/glossary#maturity) Selection**: Buy at auction or secondary. Match desired [maturity](/glossary#maturity) dates.
*   **Track Dates**: Create spreadsheet of each [bond](/glossary#bond): purchase date, [maturity](/glossary#maturity), [coupon](/glossary#coupon), face value.

## Part 4: CD Ladder Alternative

Certificates of Deposit work similarly with added FDIC protection.

*   **[FDIC](/glossary#fdic) Insurance**: Each CD is insured up to $250,000 per bank. Zero [credit risk](/glossary#credit-risk).
*   **Higher [Yields](/glossary#yield) Available**: Online banks (Marcus, Ally, Discover) often beat Treasury rates.
*   **Penalty for Early Withdrawal**: Unlike [bonds](/glossary#bond), CDs have penalties if you break early.
*   **[Liquidity](/glossary#liquidity) Trade-Off**: CDs are less liquid. Plan [maturities](/glossary#maturity) to match cash needs.
*   **Best Use**: Short-term ladders (1-5 years) for money you won't need early.
*   **Combine with [I Bonds](/glossary#tips)**: Add $10,000/year in [I Bonds](/glossary#tips) for [inflation](/glossary#inflation)-protected rung.

## Part 5: Extending vs. Shortening Your Ladder

Adjusting ladder length based on market conditions.

*   **High Rates Environment**: Extend ladder to lock in attractive [yields](/glossary#yield) longer.
*   **Low Rates Environment**: Keep ladder short. Wait for better rates.
*   **Rising Rates**: Maturing [bonds](/glossary#bond) reinvest at higher [yields](/glossary#yield). Good outcome.
*   **Falling Rates**: Existing rungs maintain locked-in higher [yields](/glossary#yield). Protection.
*   **Transitioning**: Gradually extend by buying longer [maturities](/glossary#maturity) as rungs mature.
*   **No Need to Predict**: That's the point. Ladder works in any rate environment.

## Part 6: Corporate Bond Ladders

Higher [yields](/glossary#yield) but additional considerations.

*   **[Credit Risk](/glossary#credit-risk)**: Corporates can default. Diversify across many issuers.
*   **Higher [Yields](/glossary#yield)**: 1-2% more than Treasuries. Compensation for [credit risk](/glossary#credit-risk).
*   **Research Required**: Evaluate each issuer's [creditworthiness](/glossary#credit-rating).
*   **Minimum Size**: Individual corporate [bonds](/glossary#bond) often require $5,000+ minimums.
*   **Complexity**: More work than Treasury or CD ladders.
*   **Alternative**: Use corporate [bond](/glossary#bond) [ETFs](/glossary#etf) if you want corporate exposure without individual selection.

## Part 7: Municipal Bond Ladders

Tax-free income for high-bracket investors.

*   **Tax Advantage**: [Muni](/glossary#muni-bonds) interest is federal tax-exempt. State-exempt if in-state.
*   **Who Benefits**: Investors in 32%+ tax brackets. High-tax states (CA, NY, NJ).
*   **Lower Nominal [Yields](/glossary#yield)**: [Yields](/glossary#yield) are lower, but after-tax can be superior.
*   **Tax-Equivalent Calculation**: [Muni](/glossary#muni-bonds) [Yield](/glossary#yield) / (1 - Tax Rate) = Comparable taxable [yield](/glossary#yield).
*   **[Credit](/glossary#credit-rating) Considerations**: General Obligation vs. Revenue [bonds](/glossary#bond). Research needed.
*   **[Liquidity](/glossary#liquidity) Challenges**: Individual [munis](/glossary#muni-bonds) less liquid than Treasuries.

## Part 8: Ladder vs. Bond Fund

When to choose each approach.

*   **Ladder Advantages**: Defined [maturity](/glossary#maturity), no price [volatility](/glossary#volatility) if held, no ongoing management fees.
*   **[Fund](/glossary#mutual-fund) Advantages**: Instant [diversification](/glossary#diversification), professional management, any amount investable.
*   **Ladder Best For**: Investors with $50,000+, specific time horizons, preference for [maturity](/glossary#maturity) dates.
*   **[Fund](/glossary#mutual-fund) Best For**: Smaller portfolios, hands-off investors, ongoing contributions.
*   **Hybrid Approach**: Use ladder for specific goals, [fund](/glossary#mutual-fund) for general [bond](/glossary#bond) allocation.
*   **Defined [Maturity](/glossary#maturity) [ETFs](/glossary#etf)**: BulletShares and iShares iBonds combine [ETF](/glossary#etf) diversification with defined [maturity](/glossary#maturity).

## Part 9: Implementing Your Ladder Strategy

Practical steps to get started.

*   **Start Small**: Begin with 3-year ladder. Add years over time.
*   **Automate**: TreasuryDirect allows scheduled reinvestment.
*   **Document**: Track each rung on spreadsheet: purchase, [maturity](/glossary#maturity), [coupon](/glossary#coupon), face value.
*   **Set Reminders**: Calendar alerts for maturing [bonds](/glossary#bond).
*   **[Coupon](/glossary#coupon) Strategy**: Reinvest [coupons](/glossary#coupon) to accelerate growth, or take as income.
*   **Annual Review**: Once per year, assess ladder length vs. goals and rates.
*   **Combine with [TIPS](/glossary#tips)**: Add [TIPS](/glossary#tips) ladder for [inflation](/glossary#inflation)-protected income stream.
\`,
        keyTakeaways: [
            "A bond ladder spreads investments across staggered maturities (e.g., 1-5 years).",
            "When each bond matures, reinvest in a new long-term bond to maintain structure.",
            "Ladders reduce reinvestment risk and provide predictable liquidity.",
            "CD ladders offer FDIC protection; muni ladders offer tax advantages."
        ]
    },`;

// Find bf_9 and insert after it
const marker = '"bf_9":';
const bf9Start = content.indexOf(marker);
if (bf9Start === -1) { console.error('bf_9 not found'); process.exit(1); }

let braceCount = 0;
let bf9End = -1;
let inBf9 = false;
for (let i = bf9Start; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inBf9 = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inBf9 && braceCount === 0) { bf9End = i + 1; break; }
    }
}

if (bf9End === -1) { console.error('bf_9 end not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_10: Bond Ladders - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

let insertPos = bf9End;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const before = content.substring(0, bf9End) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added bf_10!');
