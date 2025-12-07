const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_7": {
        title: "Leveraged ETFs",
        content: \`
# Leveraged ETFs: Turbocharging Returns (and Risks)

[Leveraged ETFs](/glossary#leveraged-etf) are powerful, dangerous tools designed to amplify the daily returns of an index. If the S&P 500 goes up 1%, a 2x leveraged ETF aims to go up 2%. While they sound like a shortcut to wealth, they suffer from a mathematical quirk called "volatility decay" that can destroy long-term value. These are trading instruments, not investments.

## Part 1: How Leverage Works

Leveraged ETFs use financial derivatives (swaps, futures) to multiply exposure.

*   **The Multiplier**: Common leverage ratios are 2x (Double) or 3x (Triple). Some even attempt 4x (though rare due to regulations).
*   **The Goal**: Deliver the multiple of the *daily* return of the benchmark. The word "daily" is the most important word in the prospectus.
*   **Example**:
    *   Index: +2% today.
    *   2x ETF (SSO): +4% today.
    *   3x ETF (UPRO): +6% today.
*   **The Downside**: Leverage works both ways.
    *   Index: -2% today.
    *   2x ETF: -4% today.
    *   3x ETF: -6% today.
*   **Tickers**: Popular ones include TQQQ (3x Nasdaq), UPRO (3x S&P 500), SOXL (3x Semiconductors), NUGT (2x Gold Miners).

## Part 2: The Daily Reset Mechanism

This is the most critical concept. Leveraged ETFs reset their exposure *every single day*.

*   **The Reset**: To maintain a constant 2x or 3x leverage ratio, the fund manager must buy more exposure when the market rises and sell exposure when the market falls.
*   **Buy High, Sell Low**: This daily rebalancing forces the fund to buy high and sell low every day.
    *   *Market Up*: Fund value rises. Leverage drops below 3x. Manager buys more swaps to get back to 3x.
    *   *Market Down*: Fund value falls. Leverage rises above 3x. Manager sells swaps to get back to 3x.
*   **Path Dependence**: Your return over a week or month depends on the *path* the market took, not just the start and end point.
*   **Compounding**: In a trending market (straight up), compounding helps you. You earn more than 3x the return.
*   **Decay**: In a choppy market (up and down), compounding hurts you. You lose money even if the index is flat.

## Part 3: Volatility Decay (The Math)

Let's do the math to prove why holding these long-term is dangerous. This is often called "Beta Slippage."

*   **Scenario**: The market is flat over 2 days.
    *   Day 1: Market UP 10%. ($100 -> $110).
    *   Day 2: Market DOWN 9.09% ($110 -> $100).
    *   **Index Return: 0%**.
*   **2x ETF**:
    *   Day 1: UP 20%. ($100 -> $120).
    *   Day 2: DOWN 18.18% (2 * 9.09%). ($120 * (1 - 0.1818) = $98.18).
    *   **Return: -1.82%**.
*   **3x ETF**:
    *   Day 1: UP 30%. ($100 -> $130).
    *   Day 2: DOWN 27.27% (3 * 9.09%). ($130 * (1 - 0.2727) = $94.55).
    *   **Return: -5.45%**.
*   **The Result**: The index is flat, but the 3x ETF lost over 5% of its value in just two days.
*   **Conclusion**: Volatility eats leveraged returns. The more volatile the asset, the faster the decay.

## Part 4: When Leverage Works

Despite the decay, there are times when leveraged ETFs shine.

*   **Strong Trends**: In a powerful bull market with few down days, leverage compounds beautifully.
    *   *Example*: In 2020-2021, TQQQ (3x Nasdaq) went up hundreds of percent, far exceeding 3x the Nasdaq's return. This "positive convexity" lures investors in.
*   **Short-Term Trading**: For day traders or swing traders holding for a few days, decay is negligible. The daily moves dominate the math.
*   **Hedging**: Using a small amount of capital to get large exposure.
    *   *Scenario*: You have $10,000 cash but want $30,000 exposure for a week. Buying $10,000 of a 3x ETF achieves this without margin interest.
*   **The Trap**: Investors see the "Strong Trend" performance (like 2010-2021) and assume it will last forever. It never does. When the trend turns choppy, the gains evaporate.

## Part 5: The Cost of Leverage

Leverage isn't free. There are explicit and implicit costs that drag on performance.

*   **Expense Ratios**: Leveraged ETFs are expensive. Typically 0.95% - 1.10% per year. This is 30x higher than VOO.
*   **Borrowing Costs**: The fund uses derivatives (swaps) which have embedded interest costs. The counterparty (bank) charges the "Overnight Rate" plus a spread.
*   **Interest Rate Sensitivity**: When the Fed raises rates (like in 2022-2023), the cost of leverage skyrockets. A 3x ETF might be paying 5-6% just in interest expenses, hidden inside the swap performance.
*   **Cost of Carry**: This interest expense is a drag on performance, separate from the expense ratio.
*   **Total Drag**: Between fees, borrowing costs, and volatility decay, a 3x ETF might need the market to rise 10-15% a year just to break even.

## Part 6: The Liquidation Risk

In extreme market crashes, leveraged ETFs can go to zero.

*   **The Math**: If the index drops 33.4% in a single day, a 3x ETF drops 100% (3 * 33.4%). It is wiped out.
*   **Circuit Breakers**: Stock exchanges have halts (at 7%, 13%, 20%) to prevent 33% drops, but it's theoretically possible over a few days or if the market gaps down at the open.
*   **Reverse Splits**: If the price drops too low (e.g., under $5), the fund will do a reverse split (1-for-10) to prop up the share price.
    *   *Example*: You have 100 shares at $2 ($200). After split, you have 10 shares at $20 ($200).
    *   *The Illusion*: The chart looks normal, but long-term holders have lost 99% of their shares.
*   **Closure**: Many leveraged ETFs (especially commodity or volatility ones) have blown up and closed down, returning pennies to investors. XIV (Inverse VIX) is the famous example from 2018 that went to zero in one night.

## Part 7: Leveraged ETFs in a Portfolio?

Can you hold these long-term? Some people try, but it requires extreme caution.

*   **Hedgefundie's Excellent Adventure (HFEA)**: A famous strategy on Reddit/Bogleheads.
    *   *Mix*: 55% UPRO (3x S&P 500) + 45% TMF (3x Long Treasuries).
    *   *Theory*: Stocks and bonds are uncorrelated. When stocks crash, bonds soar. The leverage amplifies the diversification benefit.
    *   *Reality*: In 2022, both stocks and bonds crashed simultaneously (correlation went to 1). The strategy lost ~60-70%.
*   **Risk Management**: If you use leverage, you MUST rebalance frequently (quarterly) to reset the risk.
*   **Allocation**: Never put more than 1-5% of your "gambling money" into these. Never your retirement money.
*   **2x vs 3x**: 2x leverage (SSO, QLD) has much less decay than 3x. Some research suggests 2x is the "optimal" leverage for long-term holding, but it still carries massive drawdown risk.

## Part 8: Psychological Toll

Holding a 3x ETF is mentally exhausting. It tests your sanity.

*   **Volatility**: TQQQ regularly has 60-80% drawdowns. Can you watch $10,000 turn into $2,000 and not sell? Most people say yes, but do no.
*   **The Wipeout**: Most investors panic sell at the bottom. With leverage, the bottom is a total wipeout. Recovering from a 90% loss requires a 900% gain.
*   **Timing**: You have to be right on direction AND timing. Being right on direction but early (before a dip) can still lose money due to decay.
*   **Addiction**: The huge gains are addictive. It feels like easy money until it isn't. It triggers the same dopamine centers as gambling.

## Part 9: Summary and Warnings

Final thoughts on these dangerous tools.

*   **Not for Beginners**: If you don't understand "daily reset" and "volatility decay," do not buy.
*   **Daily Tools**: Designed for 1-day holding periods. The prospectus warns you explicitly.
*   **Read the Prospectus**: The first page literally says "Not intended for buy-and-hold investors." Believe them.
*   **High Fees**: You are paying 1% fees + interest costs.
*   **Decay is Real**: In a flat, choppy market, you will lose money.
*   **The Verdict**: For 99% of investors, standard index funds are enough. Leverage is a tool for professionals and gamblers. If you want higher returns, buy small-cap value or focus on earning more income to invest.
\`,
        keyTakeaways: [
            "Leveraged ETFs (2x, 3x) amplify daily returns but suffer from 'volatility decay' over time.",
            "They reset daily, meaning long-term performance does not equal 3x the index performance.",
            "In choppy markets, you can lose money even if the index stays flat.",
            "These are trading tools, not long-term investments."
        ]
    },`;

const startMarker = '"fe_7": {';
const endMarker = '"fe_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_7: Leveraged ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_7!');
