const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_7": {
        title: "Index Funds & ETFs",
        content: \`
# Index Funds & ETFs: The Foundation of Smart Investing

[Index funds](/glossary#index-fund) and [ETFs](/glossary#etf) (Exchange-Traded Funds) are the most important investment innovation of the last 50 years. They allow anyone to own a piece of the entire market for nearly zero cost. For most investors, these vehicles are all you'll ever need. Master this lesson and you've mastered the core of successful investing.

## Part 1: What Is an Index Fund?

An [index fund](/glossary#index-fund) is a [mutual fund](/glossary#mutual-fund) or [ETF](/glossary#etf) designed to track the performance of a specific market index, like the S&P 500.

*   **Definition**: A fund that passively replicates an [index](/glossary#index-fund) by holding the same [stocks](/glossary#stock) in the same proportions.
*   **S&P 500 Index Fund**: Holds all 500 companies in the S&P 500, weighted by their [market cap](/glossary#market-cap). When Apple is 7% of the index, it's 7% of the fund.
*   **Passive Management**: No active stock picking. The fund simply matches the [index](/glossary#index-fund). Changes only when the [index](/glossary#index-fund) composition changes.
*   **Low Cost**: Because there's no research team picking [stocks](/glossary#stock), [expense ratios](/glossary#expense-ratio) are rock-bottom (0.03-0.10%).
*   **Diversification**: Own hundreds or thousands of companies in one purchase. Instant, perfect [diversification](/glossary#diversification).
*   **The Goal**: Match the market return, minus tiny fees. Don't try to beat the market — just own the market.

## Part 2: What Is an ETF?

An [ETF](/glossary#etf) (Exchange-Traded Fund) is a fund that trades on a stock exchange like an individual [stock](/glossary#stock).

*   **Structure**: Like a [mutual fund](/glossary#mutual-fund), an [ETF](/glossary#etf) holds a basket of securities. But unlike a [mutual fund](/glossary#mutual-fund), you buy and sell it intraday on exchanges.
*   **Trading**: Buy at 10:15 AM, sell at 2:30 PM if you want. Prices update throughout the day, just like [stocks](/glossary#stock).
*   **Ticker Symbols**: SPY (S&P 500), QQQ (Nasdaq 100), VTI (Total US Stock Market), VOO (Vanguard S&P 500).
*   **[Bid-Ask Spread](/glossary#bid-ask-spread)**: [ETFs](/glossary#etf) have [spreads](/glossary#bid-ask-spread) like [stocks](/glossary#stock). Popular [ETFs](/glossary#etf) (SPY) have penny spreads. Niche [ETFs](/glossary#etf) have wider spreads.
*   **[Creation/Redemption](/glossary#creation-redemption)**: A unique mechanism keeps [ETF](/glossary#etf) prices close to their Net Asset Value (NAV). More later.
*   **Tax Efficiency**: [ETFs](/glossary#etf) are often more tax-efficient than [mutual funds](/glossary#mutual-fund) due to in-kind redemptions.

## Part 3: Index Fund vs. ETF — What's the Difference?

Many [index funds](/glossary#index-fund) exist as both traditional [mutual funds](/glossary#mutual-fund) and [ETFs](/glossary#etf). The underlying [index](/glossary#index-fund) is the same, but the wrapper differs.

*   **Trading**: [Mutual funds](/glossary#mutual-fund) trade once per day at NAV (4 PM ET). [ETFs](/glossary#etf) trade throughout the day at market prices.
*   **Minimum Investment**: [Mutual funds](/glossary#mutual-fund) often have minimums ($1,000-$3,000). [ETFs](/glossary#etf) can be bought for one share (or less with [fractional shares](/glossary#fractional-shares)).
*   **Automatic Investing**: [Mutual funds](/glossary#mutual-fund) are better for automatic dollar-amount investments. Buy exactly $500/month.
*   **[Expense Ratio](/glossary#expense-ratio)**: Often identical or very similar between fund and [ETF](/glossary#etf) versions of the same [index](/glossary#index-fund).
*   **Tax Efficiency**: [ETFs](/glossary#etf) are slightly more tax-efficient due to creation/redemption process.
*   **Which to Choose?**: For automated retirement contributions, [mutual funds](/glossary#mutual-fund) are convenient. For taxable accounts and one-time purchases, [ETFs](/glossary#etf) are great.

## Part 4: Popular Index Funds and What They Track

Knowing the major [index funds](/glossary#index-fund) and their focus helps you build a coherent [portfolio](/glossary#portfolio).

*   **S&P 500 Funds** (SPY, VOO, IVV): Track the 500 largest US companies. Classic [large cap](/glossary#market-cap) US exposure.
*   **Total US Stock Market** (VTI, ITOT): Track all US [stocks](/glossary#stock) — [large](/glossary#market-cap), [mid](/glossary#market-cap), and [small cap](/glossary#market-cap). ~4,000 [stocks](/glossary#stock).
*   **Total International** (VXUS, IXUS): Non-US [stocks](/glossary#stock) — developed and emerging markets. Global [diversification](/glossary#diversification).
*   **Total World** (VT): All [stocks](/glossary#stock) worldwide in one fund. Ultimate one-fund solution.
*   **Total [Bond](/glossary#bond) Market** (BND, AGG): Investment-grade US [bonds](/glossary#bond). Fixed income exposure.
*   **Nasdaq 100** (QQQ): Top 100 non-financial Nasdaq companies. Tech-heavy.
*   **[Small Cap](/glossary#market-cap) Funds** (VB, IJR): Russell 2000 or S&P 600 [small cap](/glossary#market-cap) [stocks](/glossary#stock).

## Part 5: Why Index Funds Beat Most Active Managers

Data consistently shows that [index funds](/glossary#index-fund) outperform the vast majority of actively managed funds. This is the strongest argument for passive investing.

*   **SPIVA Data**: Over 15 years, 90%+ of actively managed funds underperform their benchmark [index](/glossary#index-fund).
*   **Fee Drag**: Active funds charge 0.50-1.50%. [Index funds](/glossary#index-fund) charge 0.03-0.10%. That 1% difference compounds massively.
*   **Trading Costs**: Active funds trade frequently, incurring [spreads](/glossary#bid-ask-spread) and market impact costs. [Index funds](/glossary#index-fund) trade rarely.
*   **[Tax Inefficiency](/glossary#tax-drag)**: Active trading generates taxable [capital gains](/glossary#capital-gains) distributed to you annually.
*   **Survivorship Bias**: Failing funds close and disappear from the data. The ones that "survive" to be measured are the luckier ones.
*   **Professional Difficulty**: If PhDs at hedge funds can't beat the market consistently, retail investors almost certainly can't.

## Part 6: Building a Portfolio with Index Funds

You can construct a globally diversified [portfolio](/glossary#portfolio) with just 2-4 [index funds](/glossary#index-fund). Simplicity is powerful.

*   **[Three-Fund Portfolio](/glossary#three-fund-portfolio)**: 
    *   US Stocks (VTI) — 50-60%
    *   International Stocks (VXUS) — 20-30%
    *   [Bonds](/glossary#bond) (BND) — 10-30%
*   **Two-Fund Portfolio**:
    *   Total World (VT) — 70-90%
    *   Total [Bond](/glossary#bond) (BND) — 10-30%
*   **Target Date Funds**: One fund that holds the right mix for your retirement year and adjusts automatically. Truly set and forget.
*   **Aggressive (Young)**: 90% [stocks](/glossary#stock), 10% [bonds](/glossary#bond). Maximum growth, maximum [volatility](/glossary#volatility).
*   **Balanced (Mid-Life)**: 60% [stocks](/glossary#stock), 40% [bonds](/glossary#bond). Classic allocation.
*   **Conservative (Retired)**: 40% [stocks](/glossary#stock), 60% [bonds](/glossary#bond). Capital preservation priority.

## Part 7: Dollar Cost Averaging with Index Funds

[Index funds](/glossary#index-fund) are perfect for systematic, automatic investing. Set it up once and let it run for decades.

*   **[Dollar Cost Averaging](/glossary#dollar-cost-averaging) (DCA)**: Invest a fixed amount on a regular schedule, regardless of market conditions.
*   **How It Works**: $500/month buys more shares when prices are low, fewer when prices are high. Automatic "buy low" behavior.
*   **Removes Emotion**: No decision paralysis about timing. You invest every paycheck whether the market is up or down.
*   **[401(k)](/glossary#401k) Integration**: Your workplace retirement contributions are DCA into [index funds](/glossary#index-fund) by default.
*   **Brokerage Automation**: Set up automatic transfers from your bank to your brokerage, then auto-invest in your chosen [ETF](/glossary#etf).
*   **Long-Term Power**: 30 years of consistent contributions to an [index fund](/glossary#index-fund) beats market timing strategies almost every time.

## Part 8: Thematic and Specialty ETFs — Proceed with Caution

Beyond core [index funds](/glossary#index-fund), thousands of niche [ETFs](/glossary#etf) exist. Most are not suitable for long-term investing.

*   **Sector [ETFs](/glossary#etf)**: Technology (XLK), Healthcare (XLV), Financials (XLF). More concentrated [risk](/glossary#risk).
*   **Thematic [ETFs](/glossary#etf)**: Clean energy, AI, cannabis, metaverse, space exploration. Often launch at peak hype.
*   **Leveraged [ETFs](/glossary#etf)**: 2x or 3x daily returns. These decay over time and are NOT for long-term holding. Only for day traders.
*   **Inverse [ETFs](/glossary#etf)**: Bet against the market. Also decay over time. Speculative tools.
*   **High Fees**: Niche [ETFs](/glossary#etf) often charge 0.50-0.75% — 10-25x the cost of core [index funds](/glossary#index-fund).
*   **Rule of Thumb**: Stick to broad market [index funds](/glossary#index-fund) for 90%+ of your [portfolio](/glossary#portfolio). Specialty [ETFs](/glossary#etf) should be 10% max (if any).

## Part 9: Jack Bogle and the Index Fund Revolution

Understanding the history of [index funds](/glossary#index-fund) helps appreciate their importance.

*   **Jack Bogle**: Founder of Vanguard. Created the first [index fund](/glossary#index-fund) for individual investors in 1976.
*   **Initial Ridicule**: Wall Street called it "Bogle's Folly." Critics said settling for average was "un-American."
*   **The Victory**: Today, over $15 trillion is in [index funds](/glossary#index-fund). Passive investing won the debate decisively.
*   **Vanguard's Structure**: Vanguard is owned by its funds (and thus its fund holders). No outside shareholders extracting profit.
*   **The Legacy**: Bogle transferred hundreds of billions from Wall Street fees back to Main Street investors.
*   **His Advice**: "Don't look for the needle in the haystack. Just buy the haystack."
*   **Final Lesson**: You already know everything you need. Buy a diversified [index fund](/glossary#index-fund), keep costs low, stay the course.
\`,
        keyTakeaways: [
            "Index funds passively track a market index for rock-bottom fees (0.03-0.10%).",
            "90%+ of actively managed funds underperform their index over 15 years.",
            "A 2-3 fund portfolio (US stocks, international, bonds) is all most investors need.",
            "Dollar cost averaging into index funds removes emotion and builds wealth systematically."
        ]
    },`;

const startMarker = '"sm_7": {';
const endMarker = '"sm_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_7: Index Funds & ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_7!');
