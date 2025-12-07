const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// New ib_5 content - Active vs. Passive Investing
const newIb5 = `    "ib_5": {
        title: "Active vs. Passive Investing",
        content: \`
# Active vs. Passive Investing: The Great Debate

This is the most important philosophical decision you will make as an investor. Do you try to beat the market (Active)? Or do you accept the market return (Passive)? The data is overwhelmingly on one side, but the marketing budgets are on the other. Understanding this debate will save you hundreds of thousands of dollars over your investing lifetime.

## Part 1: Active Investing — The Hunter

Active investing means trying to outperform a benchmark like the S&P 500 through skill, research, and market timing.

*   **Goal**: Beat the market. Earn 12% when everyone else earns 10%.
*   **Method**: Picking specific [stocks](/glossary#stock), timing market entries and exits, using complex trading strategies.
*   **Who Does It**: Mutual Fund Managers, Hedge Funds, Day Traders, financial advisors who pick [stocks](/glossary#stock).
*   **The Appeal**: The promise of superior returns. "Why settle for average when you can be exceptional?"
*   **The Reality**: It's extremely hard. You're competing against supercomputers, PhDs in mathematics, and traders with decades of experience and inside access.
*   **Time Required**: Research, monitoring, and decision-making consume hours every week. It becomes a second job.
*   **Costs**: Higher fees (1-2% annually), frequent trading costs, higher taxes from short-term gains.

## Part 2: Passive Investing — The Farmer

Passive investing means accepting the market's average return by owning everything at once through [index funds](/glossary#index-fund).

*   **Goal**: Match the performance of the overall market, not beat it.
*   **Method**: Buying [Index Funds](/glossary#index-fund) or [ETFs](/glossary#etf) that track the entire market (like the S&P 500 or Total Stock Market).
*   **Who Does It**: Smart retail investors, pension funds, university endowments, and Warren Buffett's estate instructions.
*   **The Philosophy**: "Don't look for the needle in the haystack. Just buy the entire haystack." — Jack Bogle, founder of Vanguard.
*   **The Appeal**: Low effort, low cost, guaranteed market returns, mathematically proven to work over time.
*   **Time Required**: 30 minutes per year to [rebalance](/glossary#rebalancing). No research, no stress, no second-guessing.
*   **Costs**: Rock-bottom fees (0.03-0.10% annually), minimal trading, high tax efficiency.

## Part 3: The SPIVA Scorecard — The Data Doesn't Lie

S&P Dow Jones Indices releases a report called SPIVA (S&P Indices Versus Active) annually. The results are consistently damning for active management.

*   **The 15-Year Stat**: Over a 15-year period, **90% of actively managed funds fail to beat their benchmark** after fees.
*   **The 20-Year Stat**: Even worse — **95% underperform** the index they're trying to beat.
*   **Survivorship Bias**: These numbers are actually generous because they don't include funds that closed due to poor performance.
*   **Why Do Professionals Fail?**:
    1.  **Fees**: Active funds charge 1-2% annually. [Index funds](/glossary#index-fund) charge 0.03%. The manager must beat the market by 2% just to break even with you.
    2.  **Competition**: Markets are highly efficient. Information spreads instantly to millions of traders.
    3.  **Trading Costs**: Every trade has costs (spreads, market impact) that drag on returns.
    4.  **Consistency**: Even if a manager beats the market some years, they rarely beat it consistently for 10+ years.
*   **Conclusion**: If highly-paid professionals with PhDs and supercomputers can't beat the market, what makes you think you can?

## Part 4: The Fee Difference — The Silent Killer

Fees are the termites quietly eating your wealth. They seem small but compound devastatingly over decades.

*   **Example**: Invest $100,000 for 30 years at 8% annual return:
    *   **Fund A (0.05% [expense ratio](/glossary#expense-ratio))**: Ending Value: **$996,000**
    *   **Fund B (1.00% [expense ratio](/glossary#expense-ratio))**: Ending Value: **$761,000**
*   **The Cost**: That "small" 1% annual fee cost you **$235,000** over 30 years. A quarter million dollars gone to fees.
*   **The Math Rule**: 1% extra annual fee ultimately costs you about 25% of your final wealth over 30 years.
*   **Why It Matters**: You pay fees in good years AND bad years. The fund manager gets paid regardless of your returns.
*   **Lesson**: In investing, **you get what you DON'T pay for**. Low fees = High net returns to you.

## Part 5: Tax Efficiency — The Hidden Advantage

Passive [index funds](/glossary#index-fund) are inherently more tax-efficient than actively managed funds.

*   **Active Fund [Turnover](/glossary#turnover-ratio)**: Managers buy and sell [stocks](/glossary#stock) constantly (50-100% turnover per year), generating [Capital Gains](/glossary#capital-gains) taxes that *you* pay every year — even if you didn't sell anything.
*   **[Index Fund](/glossary#index-fund) [Turnover](/glossary#turnover-ratio)**: Rarely sell. Only trade when the index changes composition (a company drops out or is added). Turnover: 3-5% annually.
*   **Tax Control**: With [index funds](/glossary#index-fund), YOU control when to pay taxes by deciding when to sell. Active funds force taxes on you.
*   **[Tax Drag](/glossary#tax-drag)**: After-tax studies show taxes reduce active fund returns by an additional 1-2% per year compared to passive.
*   **[ETF](/glossary#etf) Advantage**: [ETFs](/glossary#etf) are structured to be even more tax-efficient than mutual funds through "in-kind" creation and redemption.
*   **Result**: After fees AND taxes, active investors fall even further behind passive investors.

## Part 6: The Psychology of Stock Picking

Why do people still pick [stocks](/glossary#stock) when the data overwhelmingly says not to? Human psychology fights against our own best interests.

*   **[Overconfidence Bias](/glossary#overconfidence)**: "I'm smarter than average." Studies show 80% of drivers think they're above-average drivers — statistically impossible.
*   **Gambling Thrill**: Buying an [Index Fund](/glossary#index-fund) is boring. Buying Tesla feels exciting and gives an adrenaline rush.
*   **Lottery Ticket Effect**: We focus on the one [stock](/glossary#stock) that went up 1000% and completely ignore the 10 [stocks](/glossary#stock) that crashed and disappeared.
*   **Narrative Fallacy**: Stories about successful traders get published and go viral. Stories about the millions who failed silently disappear.
*   **Illusion of Control**: Clicking "Buy" makes us feel in control. But the market doesn't care about our feelings.
*   **Advice**: If you MUST pick [stocks](/glossary#stock), use only 5-10% of your money ("Fun Money" or "Play Money"). Keep 90%+ in boring [Index Funds](/glossary#index-fund).

## Part 7: When Active Might Make Sense

Is active investing completely dead? Not entirely, but only in very specific, limited situations.

*   **Inefficient Markets**: In Small Cap [stocks](/glossary#stock), Emerging Markets, or specialized sectors, information spreads slower. A skilled manager *might* have an edge — though most still don't.
*   **[Tax-Loss Harvesting](/glossary#tax-loss-harvesting)**: Active managers or [robo-advisors](/glossary#robo-advisor) can strategically realize losses to offset gains and reduce your tax bill.
*   **ESG/Values Investing**: If you want to exclude certain industries (fossil fuels, guns, tobacco, gambling), you need an actively screened fund or customized [index](/glossary#index-fund).
*   **Factor Investing**: Targeting specific factors (Value, Momentum, Quality, Size) can theoretically enhance returns — though this is debated.
*   **Reality Check**: Even in these niches, most active managers still underperform their specialized benchmarks. The math of fees is brutal.
*   **Warning**: Never pay more than 0.50% [expense ratio](/glossary#expense-ratio) for any fund. Anything higher is almost certainly not worth it.

## Part 8: Core & Satellite Strategy — The Compromise

A hybrid approach lets you scratch the trading itch without destroying your core wealth.

*   **The Core (80-90%)**: Low-cost, broad market [Index Funds](/glossary#index-fund). Total Stock Market (VTI), Total International (VXUS), Total [Bond](/glossary#bond) Market (BND). This is your untouchable foundation.
*   **The Satellite (10-20%)**: Active bets. Individual [stocks](/glossary#stock) you believe in, sector [ETFs](/glossary#etf), thematic bets, crypto, even some speculation.
*   **Benefit**: You can experiment and learn with a small portion while your core wealth grows safely and effortlessly.
*   **Rules**:
    *   Never let "satellite" positions grow beyond 10-20% of your total [portfolio](/glossary#portfolio).
    *   If a satellite bet goes to zero (it might), your retirement is still safe.
    *   Don't fool yourself — track your satellite returns honestly. You'll probably underperform.

## Part 9: Jack Bogle — The People's Champion

The index fund revolution was started by one visionary: Jack Bogle, founder of Vanguard.

*   **The Creation**: In 1976, Bogle launched the first [Index Fund](/glossary#index-fund) available to regular retail investors.
*   **The Ridicule**: Wall Street called it "Bogle's Folly." They said it was "un-American" to settle for average returns. Critics laughed.
*   **The Victory**: Today, over $15 trillion is invested in [index funds](/glossary#index-fund). Passive investing won. Bogle is now considered a hero to everyday investors.
*   **Wealth Transferred**: Bogle's invention transferred hundreds of billions of dollars from Wall Street fees back into the pockets of Main Street investors.
*   **The Message**: "Be lazy, get rich." Own the entire market. Pay almost nothing in fees. Go live your life. Let [compound interest](/glossary#compound-interest) do the heavy lifting while you sleep.
*   **The Bottom Line**: The evidence is clear. For 95%+ of investors, passive [index fund](/glossary#index-fund) investing is the optimal strategy. Don't let ego or excitement convince you otherwise.
\`,
        keyTakeaways: [
            "90%+ of active fund managers fail to beat the market after fees — the data is clear.",
            "A 1% annual fee can cost you 25% of your final wealth over 30 years.",
            "Index funds offer low cost, high tax efficiency, and guaranteed market returns.",
            "Use the Core & Satellite approach: 80-90% passive index funds, 10-20% active for fun."
        ]
    },`;

// Find and replace ib_5 section
const startMarker = '"ib_5": {';
const endMarker = '"ib_6": {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find ib_5 or ib_6 markers in the file');
    process.exit(1);
}

// Validate
const charCount = newIb5.length;
const partCount = (newIb5.match(/## Part \d+/g) || []).length;

console.log('=== ib_5: Active vs. Passive Investing - VALIDATION ===');
console.log('');
console.log('Character Count:', charCount);
console.log('Required Minimum: 6000');
console.log('Status:', charCount >= 6000 ? '✓ PASS' : '✗ FAIL');
console.log('');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');
console.log('');

if (charCount < 6000 || partCount < 5 || partCount > 9) {
    console.log('=== VALIDATION FAILED - NOT APPLYING CHANGES ===');
    process.exit(1);
}

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);
const newContent = before + newIb5 + '\n    ' + after;
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('=== VALIDATION PASSED - CHANGES APPLIED ===');
console.log('✓ Successfully updated ib_5 lesson!');
