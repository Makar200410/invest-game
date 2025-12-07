const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_3": {
        title: "Index Funds vs. Active Funds",
        content: \`
# Index Funds vs. Active Funds: The Great Debate

The choice between [index funds](/glossary#index-fund) (passive) and active funds is the most important decision a fund investor makes. It's a choice between trying to beat the market and choosing to *be* the market. While the idea of beating the market is appealing, the data overwhelmingly supports indexing. This lesson explains why, diving deep into the philosophy, the math, and the psychology of this crucial decision.

## Part 1: The Philosophy of Indexing

Indexing is based on the "Efficient Market Hypothesis" and the power of low costs. It's a humble admission that the market is smarter than any individual.

*   **The Goal**: Don't look for the needle in the haystack. Just buy the haystack. By owning everything, you guarantee you'll own the winners.
*   **Market Efficiency**: Millions of investors (including supercomputers and PhDs) analyze stocks daily. Prices reflect all available information almost instantly. Beating this collective wisdom is incredibly hard.
*   **Zero-Sum Game**: Investing is a zero-sum game relative to the market average. For every investor who beats the market by 1%, another must lose to the market by 1% (before fees).
*   **The Cost Hurdle**: Active management costs money (fees, trading costs). To beat the market *after fees*, a manager must beat it by a wide margin *before fees*. This is a high bar.
*   **John Bogle**: The founder of Vanguard popularized indexing in 1976. His thesis: "In investing, you get what you *don't* pay for." Lower costs equal higher returns.
*   **The Result**: Indexing guarantees you get the market return, minus a tiny fee. You will never be the best, but you will never be the worst, and you will beat most professionals over time.

## Part 2: The Philosophy of Active Management

Active managers believe markets are inefficient and that smart research can find winners. It appeals to our desire to be above average.

*   **The Goal**: Use research, analysis, and timing to generate returns higher than the benchmark index (Alpha).
*   **Inefficiencies**: Managers look for mispriced stocks — good companies that are undervalued due to fear, or bad companies that are overvalued due to hype.
*   **Risk Management**: Active managers can move to cash or defensive sectors during downturns. Index funds cannot; they must ride the market down.
*   **Concentration**: Managers can bet big on their best ideas, rather than owning everything. A high-conviction portfolio might only hold 20 stocks.
*   **The Appeal**: It feels intuitive. In other parts of life (sports, business, school), working harder and being smarter leads to winning. Why not investing?
*   **The Reality**: In investing, working harder often leads to higher costs, more trading, and lower returns. The market is not like a classroom where everyone can get an A.

## Part 3: The Scorecard: SPIVA Data

The S&P Indices Versus Active (SPIVA) scorecard tracks active manager performance. The results are devastating for the active management industry.

*   **1-Year**: In a typical year, 60-70% of active managers underperform their benchmark index.
*   **5-Years**: Over 5 years, ~80% of active managers underperform. The longer the timeframe, the worse the odds.
*   **15-Years**: Over 15 years, ~90-95% of active managers underperform. You have a 1 in 20 chance of picking a winner.
*   **Consistency**: Managers who win in one period rarely win in the next. "Past performance does not guarantee future results" is a warning for a reason. Top quartile managers often fall to the bottom quartile.
*   **Large Cap vs. Small Cap**: Active managers fail most in Large Cap US stocks (the most efficient market). They have slightly better odds in Small Cap or Emerging Markets, but still usually lose.
*   **Conclusion**: Betting on an active manager is a low-probability bet. You are paying high fees for a high chance of failure.

## Part 4: Why Active Managers Fail

It's not that they aren't smart. Most are brilliant. It's the math of the system that is rigged against them.

*   **Fees**: The average active fund charges ~0.70%. The average index fund charges ~0.05%. The active manager starts the race 65 meters behind. They have to outperform just to break even.
*   **Trading Costs**: Active managers trade frequently (high turnover). This incurs bid-ask spreads and market impact costs, dragging down returns. Index funds trade very little.
*   **Taxes**: High turnover generates short-term capital gains taxes for shareholders. This "tax drag" further reduces net returns in taxable accounts.
*   **Cash Drag**: Active funds hold cash (5%+) to handle redemptions. In a rising market, cash underperforms stocks, acting as an anchor. Index funds are fully invested.
*   **The Paradox of Skill**: As investors get smarter and tools get better, the market gets more efficient, making it *harder* to find an edge. The competition is fiercer than ever.
*   **Institutional Domination**: The "market" is mostly institutions trading with other institutions. There are few "suckers" left to exploit.

## Part 5: When Active Management Might Make Sense

There are specific scenarios where active funds can play a role, despite the general rule.

*   **Inefficient Markets**: Emerging markets, high-yield bonds, or micro-cap stocks are less analyzed. Managers may find an edge here where information is scarce.
*   **Downside Protection**: Some active funds prioritize capital preservation over beating the market. They may lag in bull markets but lose less in bear markets, smoothing the ride.
*   **ESG/Values**: If you want to exclude specific industries (guns, tobacco, fossil fuels) or prioritize values, active management can tailor the portfolio more precisely than broad indexes.
*   **Income Focus**: Active managers can target high income through covered calls, dividend capture, or credit selection strategies that indexes can't easily replicate.
*   **The "Star" Manager**: A tiny fraction of managers (like Peter Lynch or Warren Buffett) *do* possess skill. Identifying them in advance is the hard part. Most "stars" eventually fade.

## Part 6: Types of Index Funds

Indexing isn't just the S&P 500. You can index almost any slice of the global market.

*   **Total Market (VTI)**: Owns every public company in the US (~3,700 stocks). The ultimate diversification. Includes large, mid, and small caps.
*   **S&P 500 (VOO)**: Owns the 500 largest US companies. Covers ~80% of the US market value. The standard benchmark.
*   **International (VXUS)**: Indexes the rest of the world (Europe, Asia, Emerging Markets). Essential for global diversification.
*   **Bond Indexes (BND)**: Tracks the entire investment-grade bond market (Treasuries, Corporates, Mortgage-Backed).
*   **Factor Indexes**: "Smart Beta" funds index based on factors like Value, Momentum, or Quality, not just size. A middle ground between active and passive.
*   **Equal Weight**: S&P 500 Equal Weight (RSP) gives every company the same 0.2% weight, reducing the dominance of mega-cap tech stocks.

## Part 7: The Cost of Being Wrong

Choosing the wrong active fund is expensive. The opportunity cost compounds over time.

*   **Underperformance**: If the market returns 10% and your manager returns 8%, you lose 2% per year.
*   **Compounding Loss**: 2% underperformance over 30 years cuts your final wealth by ~45%. You end up with half the money you could have had.
*   **Manager Risk**: A manager might make a catastrophic bet (e.g., avoiding tech in the 2010s, or buying Enron) that ruins your plan. Index funds eliminate single-manager risk.
*   **Style Drift**: A manager might change strategies (e.g., a "value" manager buying growth stocks), leaving you with a portfolio you didn't intend to build.
*   **Closet Indexing**: Some "active" funds just hug the index (owning the same stocks) but charge high fees. This is the worst of both worlds.

## Part 8: Psychological Benefits of Indexing

Indexing solves many behavioral problems that plague investors. It's a strategy for peace of mind.

*   **No "Manager Envy"**: You never have to worry if your manager is losing his touch or if the "hot" fund is beating yours. You get the market return, period.
*   **Set It and Forget It**: You don't need to watch CNBC, analyze earnings, or read annual reports. The index takes care of the details.
*   **Focus on What Matters**: Instead of picking stocks, you focus on your savings rate, asset allocation, and taxes — things you can actually control.
*   **Sleep Well**: You know you won't underperform the market (because you *are* the market). You accept the market's volatility but eliminate the risk of bad picks.
*   **Humility**: Admitting you can't beat the market is liberating. It removes the pressure to be a genius. You can be average and still get rich.

## Part 9: Building an Index Strategy

How to implement a passive portfolio for long-term success.

*   **Asset Allocation**: Decide your mix (e.g., 80% Stocks / 20% Bonds). This determines 90% of your returns.
*   **Fund Selection**: Choose low-cost, broad-market index funds or ETFs (Vanguard, Fidelity, Schwab, iShares). Look for expense ratios < 0.10%.
*   **Global Diversification**: Don't just index the US. Own the global market. The US is only ~60% of the world's stock market.
*   **Dollar Cost Average**: Invest consistently every month regardless of market conditions. Buy more shares when prices are low.
*   **Rebalance**: Once a year, bring your allocation back to target (sell high, buy low). This maintains your risk profile.
*   **Stay the Course**: The only way to fail at indexing is to panic and sell during a crash. You must be passive even when it hurts.
*   **Warren Buffett's Advice**: "Put 10% of the cash in short-term government bonds and 90% in a very low-cost S&P 500 index fund. I believe the trust's long-term results from this policy will be superior to those attained by most investors."
\`,
        keyTakeaways: [
            "Index funds track the market; active funds try to beat it — but usually fail.",
            "90%+ of active managers underperform the index over 15 years.",
            "Fees are the biggest predictor of future success — lower fees usually mean higher returns.",
            "Indexing is the most reliable, stress-free way for most investors to build wealth."
        ]
    },`;

const startMarker = '"fe_3": {';
const endMarker = '"fe_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_3: Index vs Active - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_3!');
