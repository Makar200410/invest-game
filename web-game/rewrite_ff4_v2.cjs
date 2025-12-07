const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const ff_4_new = `
# The Eighth Wonder: Mastering Compound Interest

Compound interest is the most powerful force in personal finance. Albert Einstein allegedly called it the "eighth wonder of the world." Whether he said it or not, the principle remains true: when you earn interest on your interest, wealth grows not in a straight line, but in an accelerating curve that becomes explosive over time. Those who understand this force become wealthy. Those who ignore it stay poor forever.

## The Snowball on a Mountain
Imagine rolling a snowball down a snowy mountain.
*   **At the top**: The ball is small. It picks up a little snow. Progress seems slow.
*   **Halfway down**: The ball is larger. Each rotation adds more snow than before.
*   **At the bottom**: The ball is a boulder. Each rotation adds more snow than the first 1,000 rotations combined.

This is compound interest. The early years are frustrating. The later years are magical. Most people quit before the magic happens.

## Part 1: The Mechanics — Simple vs. Compound Interest

**Simple Interest** is linear and predictable. You deposit $1,000 at 10% annual interest, and you earn exactly $100 every year — no more, no less. After 10 years, you have $2,000. The formula is straightforward: **Principal × Rate × Time**. There is no acceleration, no growth curve.

**Compound Interest** operates on a fundamentally different principle.
*   **Year 1**: $1,000 × 10% = $100 interest. Balance: $1,100.
*   **Year 2**: $1,100 × 10% = $110 interest. Balance: $1,210.
*   **Year 3**: $1,210 × 10% = $121 interest. Balance: $1,331.
*   **Year 10**: Balance = **$2,594** (vs. $2,000 with simple interest).
*   **Year 30**: Balance = **$17,449** (vs. $4,000 with simple interest).
*   **Year 40**: Balance = **$45,259** (vs. $5,000 with simple interest).

The insight is that compound growth is **back-loaded**. The difference between Year 30 and Year 40 ($27,810) is far greater than everything earned in the first 20 years combined. This is the **hockey stick curve** that creates millionaires from modest savers. Those who quit early never experience the exponential phase. Those who persist long enough become wealthy almost automatically.

## Part 2: The Rule of 72 — Your Mental Calculator

There is a formula that every investor must memorize: divide 72 by your annual interest rate to find years to double.
*   **10% return (Stock Market Average)**: 72 ÷ 10 = **7.2 years** to double.
*   **6% return (Bonds)**: 72 ÷ 6 = **12 years** to double.
*   **3% return (High-Yield Savings)**: 72 ÷ 3 = **24 years** to double.
*   **0.1% return (Regular Savings)**: 72 ÷ 0.1 = **720 years** to double.

### The Power of Multiple Doublings
Starting with $10,000 at age 25 and earning 10% annually:
*   Age 32: **$20,000** (1st doubling)
*   Age 39: **$40,000** (2nd doubling)
*   Age 46: **$80,000** (3rd doubling)
*   Age 53: **$160,000** (4th doubling)
*   Age 60: **$320,000** (5th doubling)
*   Age 67: **$640,000** (6th doubling)

Six doublings turn a modest $10,000 into a fortune. Each doubling feels impossible at first, then inevitable in retrospect.

### The Rule of 72 for Debt
The formula works equally well against you.
*   **Credit Card (24%)**: Debt doubles every **3 years**. A $5,000 balance becomes $40,000 in 9 years if unpaid.
*   **Payday Loan (400%)**: Debt doubles every **2 months**. This is financial suicide.

The same mathematical force that builds millionaires also creates bankruptcies. Which side you stand on determines your financial destiny.

## Part 3: Compounding Frequency — The Hidden Multiplier

Interest can compound at different intervals: **annually**, **quarterly**, **monthly**, **daily**, or even **continuously**. The more frequently interest compounds, the faster your money grows.

### The Math
Consider $10,000 invested at 10% for one year:
*   **Annual compounding**: $11,000
*   **Quarterly compounding**: $11,038
*   **Monthly compounding**: $11,047
*   **Daily compounding**: $11,052

The difference seems minor ($52 extra for daily vs. annual), but over 30 years it compounds into a significant gap.

### APR vs. APY
*   **APR (Annual Percentage Rate)**: The stated rate without compounding effects.
*   **APY (Annual Percentage Yield)**: The actual rate including compounding.

Banks advertise savings with APY (looks higher). Credit cards advertise with APR (looks lower). Credit cards compound daily, making the **true cost** significantly higher than the stated APR. When comparing financial products, always convert to APY for an apples-to-apples comparison.

## Part 4: The Three Variables You Control

Building wealth through compound interest comes down to three variables:
*   **Principal**: How much you invest.
*   **Rate**: What return you earn.
*   **Time**: How long you stay invested.

Most people obsess over Rate — finding the hot stock or perfect timing. But Rate is the variable you control **least**. The market returns what it returns.

### The Power of Principal
If you earn $60,000 per year:
*   Save 10% → Invest $6,000 annually.
*   Save 20% → Invest $12,000 annually.

This single behavioral change **doubles your ending wealth**. It is mathematically equivalent to doubling your investment returns — but far more achievable. You cannot force the market to give you 20% returns, but you can absolutely control whether you save 10% or 20%.

### The Power of Time
A 25-year-old investing $5,000/year for 40 years will accumulate vastly more than a 35-year-old investing $10,000/year for 30 years — despite investing less total money. The 10-year head start creates an insurmountable advantage. Every year you delay is a year of compounding lost forever.

**The Hierarchy**: Time > Principal > Rate. Start early, save aggressively, and don't chase returns.

## Part 5: The Tale of Two Investors

Consider Alice and Bob:
*   **Alice**: Starts investing $200/month at age 19. Stops at age 27 (8 years). Total invested: $19,200. She never invests again.
*   **Bob**: Starts at 27, invests $200/month until age 65 (38 years). Total invested: $91,200.

Both earn 10% annually. At age 65:
*   **Alice**: $1,019,000
*   **Bob**: $722,000

Alice invested **79% less** but ends up **41% wealthier**. Her 8-year head start gave those early dollars 38 extra years to compound — an advantage that sheer persistence couldn't overcome.

### The Lesson
The best time to start investing was yesterday. The second best time is **today**. If you are young, you possess a superpower no money can buy: **time**. Every month you delay is a month of compounding you will never recover.

Those who understand this in their twenties become millionaires in their fifties. Those who delay become regretful in their sixties.

## Part 6: The Dark Side — Debt, Fees, and Inflation

Compound interest is a neutral force. It builds wealth when working for you, but destroys it when aimed against you.

### Debt: Compound Interest in Reverse
*   A $25,000 car loan at 7% costs $4,600 in interest over 5 years.
*   That $4,600 invested over 30 years could grow to **$35,000+**.
*   Every dollar paid in interest is a dollar that can never compound for you.

### Fees: The Silent Killer
*   A 1% annual fee sounds trivial.
*   Over 30 years, it can consume **25-30% of your wealth**.
*   A portfolio that would reach $1,000,000 shrinks to $700,000 from this "small" fee.
*   Low-cost **Index Funds** charging 0.03-0.10% should be your default choice.

### Inflation: Compound Interest for Prices
*   At 3% inflation, costs double every 24 years.
*   The $50,000 car becomes $100,000, then $200,000.
*   If your money doesn't grow faster than inflation, you're getting **poorer** even as your bank balance stays flat.
*   Cash savings paying 0.5% when inflation is 3% means you lose 2.5% purchasing power annually.

## Part 7: Practical Strategies for Maximum Compounding

### Strategy 1: Automate Immediately
Don't wait until you have $1,000 or $10,000. Open a brokerage today and set up automatic transfers on payday. Start with $50 if that's all you have. The **habit** matters more than the amount. You can always increase later.

### Strategy 2: Reinvest Everything
Enable **DRIP** (Dividend Reinvestment Plan) so dividends automatically buy more shares. Those small reinvestments become enormous over decades. Compounding only works if gains stay invested. Every time you withdraw, you reset the clock.

### Strategy 3: Use Tax-Advantaged Accounts
*   **Roth IRA**: Compounds completely **tax-free**. You pay no tax on gains or withdrawals.
*   **401(k)**: Tax-deferred growth plus employer matching (free money).
*   **Taxable Account**: Loses 15-30% of gains to annual taxes, drastically reducing effective compounding.

### Strategy 4: Stay Invested Through Volatility
Markets crash. The market dropped 50% in 2008. It dropped 34% in 2020. Those who panic-sold crystallized their losses and missed the recovery. Those who stayed invested became wealthier than ever. **Time in the market beats timing the market.** Patience is the investor's ultimate weapon.

## Conclusion

The formula is simple:
1.  Start now.
2.  Invest consistently.
3.  Reinvest all gains.
4.  Choose low fees.
5.  Use tax-advantaged accounts.
6.  Be patient.

The mathematics of compounding will do the rest. In 10 years, you'll wish you had started today. In 30 years, you'll thank yourself for starting today.
        `;

// Find and replace ff_4
const ff4Start = content.indexOf('"ff_4": {');
if (ff4Start === -1) {
    console.error('ff_4 not found');
    process.exit(1);
}

const ff4ContentStart = content.indexOf('content: `', ff4Start);
const ff4KeyTakeawaysStart = content.indexOf('keyTakeaways:', ff4Start);
const ff4End = content.indexOf('},', ff4KeyTakeawaysStart);

const newFF4 = `"ff_4": {
        title: "Compound Interest Magic",
        content: \`${ff_4_new}
        \`,
        keyTakeaways: [
            "Compound interest creates exponential growth — the magic happens in the later years.",
            "Rule of 72: Divide 72 by your rate to find years to double your money.",
            "Time > Principal > Rate. Start early, even with small amounts.",
            "High-interest debt is compound interest working against you.",
            "Automate investing, reinvest dividends, use tax-advantaged accounts, and be patient."
        ]
    }`;

content = content.substring(0, ff4Start) + newFF4 + content.substring(ff4End + 2);

fs.writeFileSync(filePath, content);
console.log('ff_4 rewritten to match ff_2 style');
console.log('Character count:', ff_4_new.length);
