const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_5": {
        title: "Bond Ladders",
        content: \`
# Bond Ladders: Managing Maturity Risk

A [bond ladder](/glossary#bond-ladder) is a [portfolio](/glossary#portfolio) of [bonds](/glossary#bond) with staggered [maturities](/glossary#maturity). It's one of the most elegant strategies for managing interest rate [risk](/glossary#risk) while maintaining steady income. Laddering reduces reinvestment [risk](/glossary#risk), provides [liquidity](/glossary#liquidity), and creates predictable cash flows. It's perfect for investors who want simplicity and stability.

## Part 1: What Is a Bond Ladder?

A [bond ladder](/glossary#bond-ladder) spreads investments across [bonds](/glossary#bond) maturing at regular intervals.

*   **Structure**: Buy [bonds](/glossary#bond) maturing in 1, 2, 3, 4, 5 years (or longer). When each matures, buy a new long-term [bond](/glossary#bond).
*   **Example**: You have $100,000. Buy $20,000 each in [bonds](/glossary#bond) maturing in 1, 2, 3, 4, and 5 years.
*   **Annual Rollover**: Each year, one rung matures. Reinvest in a new 5-year [bond](/glossary#bond). The ladder maintains itself.
*   **Continuous Income**: [Coupon](/glossary#coupon) payments arrive throughout the year from different [bonds](/glossary#bond).
*   **Flexibility**: You can access [principal](/glossary#principal) annually without selling. Built-in [liquidity](/glossary#liquidity).
*   **Predictability**: You know exactly when each [bond](/glossary#bond) matures and what you'll receive.

## Part 2: Benefits of Bond Laddering

Laddering solves multiple problems that individual [bond](/glossary#bond) or [fund](/glossary#mutual-fund) investments face.

*   **Reduces [Reinvestment Risk](/glossary#reinvestment-risk)**: You don't invest everything at one rate. Some [bonds](/glossary#bond) reinvest at higher rates, some lower. It averages out.
*   **Reduces Interest Rate [Risk](/glossary#risk)**: If rates rise, maturing [bonds](/glossary#bond) reinvest at higher rates. If rates fall, you still have locked-in higher rates.
*   **Predictable Income**: [Coupon](/glossary#coupon) payments from multiple [bonds](/glossary#bond) create steady cash flow.
*   **[Liquidity](/glossary#liquidity)**: Annual maturities provide regular access to [principal](/glossary#principal) without selling.
*   **Psychological Comfort**: No need to time interest rates. The strategy works automatically.
*   **No [Duration](/glossary#duration) Guessing**: Average [duration](/glossary#duration) stays constant as ladder rolls.

## Part 3: Building Your First Ladder

Here's how to construct a basic [bond ladder](/glossary#bond-ladder) step by step.

*   **Decide Range**: Common ranges are 1-5 years, 1-10 years, or 2-7 years. Match to your investment horizon.
*   **Equal Rungs**: Divide investment equally among maturities. $50,000 total = $10,000 per year for 5-year ladder.
*   **Use Treasuries**: For simplicity, use Treasury [bonds](/glossary#bond). Buy through TreasuryDirect.gov or your broker.
*   **Consider CDs**: [FDIC](/glossary#fdic)-insured CDs work well in ladders. Often higher rates than Treasuries.
*   **Corporate [Bond](/glossary#bond) Ladder**: Higher [yields](/glossary#yield) but research [credit risk](/glossary#credit-risk). Stick with investment-grade.
*   **Start Small**: You can build a ladder with as little as $5,000 ($1,000 per rung for 5 years).

## Part 4: Ladder Length Considerations

The length of your ladder affects [yield](/glossary#yield), [risk](/glossary#risk), and strategy.

*   **Short Ladder (1-3 years)**: Lower [yield](/glossary#yield), very low [risk](/glossary#risk). Best when you might need money soon or rates are rising.
*   **Medium Ladder (3-7 years)**: Balanced [yield](/glossary#yield) and [risk](/glossary#risk). Most common for general investors.
*   **Long Ladder (5-10+ years)**: Higher [yield](/glossary#yield), higher [risk](/glossary#risk). Best for long-term investors comfortable with rate fluctuations.
*   **Extending vs. Shortening**: If rates are high, extend ladder to lock them in. If rates are low, stay short and wait.
*   **Mixed Approach**: Build a 5-year ladder now; extend to 10 years over time as [bonds](/glossary#bond) mature.
*   **Match to Goals**: If you need money in 5 years, don't build a 10-year ladder. Match [maturities](/glossary#maturity) to needs.

## Part 5: Rolling the Ladder

Maintaining the ladder over time is simple and automatic.

*   **Year 1 Matures**: Your 1-year [bond](/glossary#bond) returns [principal](/glossary#principal). Buy a new 5-year [bond](/glossary#bond).
*   **New Structure**: Your old 2-year is now 1-year, old 3-year is now 2-year, etc. Plus your new 5-year.
*   **Rate Averaging**: Each year you reinvest at current rates. Over time, your [portfolio](/glossary#portfolio) reflects average rates.
*   **Continuous Process**: Repeat annually. The ladder perpetuates itself indefinitely.
*   **[Reinvest](/glossary#reinvest) [Coupons](/glossary#coupon)**: Use [coupon](/glossary#coupon) payments to buy additional [bonds](/glossary#bond) or fund living expenses if retired.
*   **Calendar Reminder**: Set annual reminders to reinvest maturing [bonds](/glossary#bond). Most Important step.

## Part 6: Bond Ladder vs. Bond Funds

Why choose a ladder over a [bond](/glossary#bond) [ETF](/glossary#etf) like BND or AGG?

*   **Known [Maturity](/glossary#maturity)**: Individual [bonds](/glossary#bond) return exact [principal](/glossary#principal) at [maturity](/glossary#maturity). [Funds](/glossary#mutual-fund) have no [maturity](/glossary#maturity) — price fluctuates perpetually.
*   **No Price [Risk](/glossary#risk)**: Hold [bonds](/glossary#bond) to [maturity](/glossary#maturity) and interest rate changes don't affect you. [Funds](/glossary#mutual-fund) can't do this.
*   **Defined Outcome**: You know exactly what you'll receive and when. [Funds](/glossary#mutual-fund) are uncertain.
*   **Control**: You choose the [bonds](/glossary#bond). [Fund](/glossary#mutual-fund) managers control fund holdings.
*   **[Fund](/glossary#mutual-fund) Advantages**: [Diversification](/glossary#diversification), [low cost](/glossary#expense-ratio), automatic reinvestment, no research needed.
*   **Hybrid**: Use a [bond](/glossary#bond) fund for most holdings; build small ladder for specific needs (e.g., college tuition in 5 years).

## Part 7: CD Ladders vs. Bond Ladders

Certificates of Deposit (CDs) work similarly to [bonds](/glossary#bond) in a ladder strategy.

*   **[FDIC](/glossary#fdic) Insurance**: CDs are insured up to $250,000 per bank. Zero [credit risk](/glossary#credit-risk).
*   **Higher [Yields](/glossary#yield)**: Online banks often offer CDs with higher rates than Treasuries.
*   **Less [Liquidity](/glossary#liquidity)**: Early withdrawal penalties apply. [Bonds](/glossary#bond) can be sold (with price [risk](/glossary#risk)).
*   **Simple Ladder**: Use CDs from online banks like Marcus, Ally, or Discover.
*   **No Price Fluctuation**: CD value doesn't change. No interest rate [risk](/glossary#risk) if held to [maturity](/glossary#maturity).
*   **Best Use**: Short to medium-term ladders for money you won't need before [maturity](/glossary#maturity).

## Part 8: Treasury Ladder Mechanics

Building a Treasury ladder is straightforward using TreasuryDirect.gov or your broker.

*   **TreasuryDirect.gov**: Direct from government. No fees. Automatic reinvestment available.
*   **Broker**: May charge small commission but offers more flexibility.
*   **Treasury Options**: Use T-Notes (2-10 years) and T-[Bonds](/glossary#bond) (20-30 years) for different ladder lengths.
*   **Auction Schedule**: Treasuries are auctioned regularly. 2-year notes weekly, 10-year notes monthly.
*   **TIPS Ladder**: Consider [TIPS](/glossary#tips) ladder for [inflation](/glossary#inflation) protection. [Principal](/glossary#principal) adjusts with CPI.
*   **I [Bond](/glossary#bond) Component**: Add I [Bonds](/glossary#bond) ($10,000/year limit) as a rung for [inflation](/glossary#inflation) protection.

## Part 9: Implementing Your Strategy

Practical steps to get started with [bond laddering](/glossary#bond-ladder).

*   **Start Simple**: 3-year or 5-year Treasury ladder is a great first step.
*   **Minimum Capital**: $5,000-$10,000 is sufficient to start. $1,000+ per rung works.
*   **Document It**: Create a spreadsheet tracking each [bond](/glossary#bond): purchase date, [maturity](/glossary#maturity), [coupon](/glossary#coupon), face value.
*   **Set Reminders**: Calendar reminders for maturing [bonds](/glossary#bond) and reinvestment dates.
*   **Reinvest Automatically**: On TreasuryDirect, you can set up automatic reinvestment.
*   **Stay Consistent**: The strategy works through discipline. Don't abandon it during rate swings.
*   **Combine with [Funds](/glossary#mutual-fund)**: Use ladder for specific goals, [bond funds](/glossary#mutual-fund) for general [portfolio](/glossary#portfolio) allocation.
\`,
        keyTakeaways: [
            "A bond ladder holds bonds maturing at regular intervals (e.g., 1, 2, 3, 4, 5 years).",
            "Laddering reduces reinvestment risk by averaging across different rate environments.",
            "When each bond matures, buy a new long-term bond to maintain the ladder.",
            "Individual bonds return exact principal at maturity — no price risk if held."
        ]
    },`;

const startMarker = '"bf_5": {';
const endMarker = '"bf_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_5: Bond Ladders - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_5!');
