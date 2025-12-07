const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_8": {
        title: "Inverse ETFs",
        content: \`
# Inverse ETFs: Profiting from the Crash

[Inverse ETFs](/glossary#inverse-etf) allow you to profit when the market falls. Also known as "Short ETFs" or "Bear ETFs," they are designed to deliver the *opposite* of an index's daily return. If the S&P 500 drops 1%, an Inverse ETF rises 1%. They are popular tools for hedging or speculating on a downturn, but like leveraged ETFs, they carry significant risks for long-term holders.

## Part 1: How Inverse ETFs Work

The mechanics of betting against the market without a margin account.

*   **The Goal**: Deliver the inverse (-1x) of the daily return of the benchmark.
*   **Derivatives**: The fund uses swaps, futures, and other derivatives to create this short exposure. You don't need to borrow shares to short.
*   **Example**:
    *   Index: -2% today.
    *   Inverse ETF (SH): +2% today.
*   **Leveraged Inverse**: Some funds are -2x or -3x.
    *   Index: -2% today.
    *   -3x ETF (SPXU): +6% today.
*   **Tickers**: SH (-1x S&P 500), PSQ (-1x Nasdaq), SQQQ (-3x Nasdaq), SPXU (-3x S&P 500), DOG (-1x Dow Jones).

## Part 2: Why Use Them?

Inverse ETFs serve two main purposes: Speculation and Hedging.

*   **Speculation**: You think the market will crash tomorrow or next week. You buy SQQQ to make a quick profit. It's easier than shorting stocks (no borrowing costs, no margin account needed).
*   **Hedging**: You have a $100,000 portfolio of tech stocks. You are worried about earnings next week. Instead of selling everything (and paying taxes), you buy $10,000 of PSQ (-1x Nasdaq) to offset potential losses.
*   **IRA Accounts**: You cannot short sell in an IRA. Inverse ETFs are the only way to bet against the market in a retirement account. This is their unique superpower.

## Part 3: The Math of Inverse Decay

Just like leveraged ETFs, inverse ETFs suffer from daily reset decay. In fact, it's often worse because markets tend to go up over time.

*   **Scenario**: Market is volatile but flat.
    *   Day 1: Index UP 10% ($100 -> $110).
    *   Day 2: Index DOWN 9.09% ($110 -> $100).
    *   **Index Return: 0%**.
*   **Inverse ETF (-1x)**:
    *   Day 1: DOWN 10% ($100 -> $90).
    *   Day 2: UP 9.09% ($90 * 1.0909 = $98.18).
    *   **Return: -1.82%**.
*   **The Result**: The market went nowhere, but you lost money.
*   **Long-Term Trend**: Since markets generally rise (7-10% per year), inverse ETFs are fighting gravity. They are guaranteed to go to zero over the very long run. Look at a 5-year chart of SQQQ — it is down 99%.

## Part 4: The Danger of Compounding Losses

When the market goes up, inverse ETFs get crushed.

*   **Example**: S&P 500 goes up 20% in a year.
*   **Inverse ETF**: You might expect it to be down 20%.
*   **Reality**: It will likely be down 25% or 30% due to the daily reset math and fees.
*   **Leveraged Inverse**: A -3x ETF (SQQQ) in a bull market can lose 80-90% of its value in a single year.
*   **Reverse Splits**: These funds constantly do reverse splits (1-for-5, 1-for-10) to keep the share price from falling below $1.
    *   *History*: If you adjust for splits, SQQQ was "worth" $400,000 per share in 2010. Today it's $20. That's the power of compounding losses.
    *   *The Illusion*: The chart looks normal, but long-term holders have lost 99.99% of their capital.

## Part 5: The Cost of Shorting

Betting against the market is expensive.

*   **Expense Ratios**: Inverse ETFs charge high fees (0.90% - 1.10%).
*   **Cost of Derivatives**: The swaps used to create short exposure cost money.
*   **Dividend Payments**: When you are short stocks (via the fund), you are responsible for paying the dividends.
    *   *Mechanism*: The S&P 500 pays ~1.5% dividend. The Inverse ETF must pay that out. This drag is embedded in the fund's performance.
*   **Opportunity Cost**: The biggest cost is missing out on the market's long-term upward drift. You are betting against human ingenuity and corporate profits.

## Part 6: Inverse ETFs vs. Short Selling

Comparing the two ways to bet against the market.

*   **Short Selling**:
    *   *Pros*: No daily reset decay. You can hold for months.
    *   *Cons*: Unlimited risk (stock can go to infinity). Margin interest fees. Hard to borrow shares. Not allowed in IRAs.
*   **Inverse ETFs**:
    *   *Pros*: Limited risk (can only lose 100%). No margin needed. Allowed in IRAs. Easy to trade.
    *   *Cons*: Daily reset decay destroys long-term value. High fees.
*   **Verdict**: Short selling is better for multi-month bets. Inverse ETFs are better for multi-day bets.

## Part 7: The Short Squeeze Risk

Even if you are right, you can lose.

*   **Definition**: A short squeeze happens when a heavily shorted stock rises, forcing short sellers to buy back shares to cover their position, which drives the price even higher.
*   **Inverse ETFs**: While less susceptible than individual short sellers (because they use swaps), a massive market rally can trigger a "melt-up."
*   **GameStop Example**: In 2021, hedge funds shorting GME were wiped out. While broad market Inverse ETFs (like SH) didn't blow up, sector-specific inverse funds can be destroyed by a squeeze.
*   **The Pain**: In a squeeze, the price moves parabolically. A -3x ETF can lose 50% of its value in a few days.

## Part 8: Alternatives: Put Options

A more precise tool for betting on a crash.

*   **Put Options**: Give you the right to sell a stock at a specific price.
*   **Pros**:
    *   *Defined Risk*: You can only lose the premium you paid.
    *   *Leverage*: Massive upside potential (1000%+) if the crash happens fast.
    *   *No Decay*: Unlike ETFs, options don't suffer from daily reset decay (though they suffer from "time decay" or Theta).
*   **Cons**:
    *   *Expiration*: Options expire worthless if the move doesn't happen by a specific date.
    *   *Complexity*: Requires understanding Greeks (Delta, Theta, Vega).
*   **Verdict**: Options are for snipers. Inverse ETFs are for shotgun blasts.

## Part 9: Tax Consequences

Trading these funds can be a tax nightmare.

*   **Short-Term Capital Gains**: Since you hold these for days or weeks, all profits are taxed at your ordinary income rate (up to 37%), not the lower long-term rate (15-20%).
*   **Wash Sales**: If you sell an inverse ETF at a loss and buy it back within 30 days, you cannot claim the tax loss. This is very common for active traders who jump in and out.
*   **K-1 Forms**: Some inverse commodity ETFs issue K-1 forms, which complicate your tax filing.
*   **The Drag**: High taxes combined with high fees and volatility decay make the hurdle rate for profitability extremely high. You need to be *very* right to make money after tax.

## Part 10: Summary and Rules

If you must use Inverse ETFs, follow these rules.

*   **Short-Term Only**: Hold for days, maybe weeks. Never months or years.
*   **Have an Exit Plan**: Know your stop-loss. If the market rallies, get out. Don't "hope" it turns around.
*   **Use for Hedging**: Use them to protect a portfolio you don't want to sell, not just to gamble.
*   **Understand the Math**: Know that in a flat market, you lose. In a rising market, you lose big.
*   **Small Sizing**: Never put more than 1-2% of your portfolio in these hedges.
*   **The Golden Rule**: The stock market is a wealth-generating machine. Betting against it is betting against human progress. It works occasionally, but fails usually.
*   **The Final Warning**: If you bought $10,000 of SQQQ in 2010 and held it until 2024, you would have less than $1 left. That is the mathematical reality of inverse ETFs.
\`,
        keyTakeaways: [
            "Inverse ETFs profit when the market falls (-1x daily return).",
            "They suffer from the same 'volatility decay' as leveraged ETFs.",
            "Markets tend to rise over time, making inverse ETFs guaranteed long-term losers.",
            "Use only for very short-term hedging or speculation."
        ]
    },`;

const startMarker = '"fe_8": {';
const endMarker = '"fe_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_8: Inverse ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 10) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 10) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_8!');
