const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_12": {
        title: "Long-Term Wealth Building",
        content: \`
# Long-Term Wealth Building: The Power of Time and Discipline

Building lasting wealth isn't about getting rich quick—it's about consistently doing the right things over a long time horizon. The most powerful force in investing isn't a hot [stock](/glossary#stock) tip or a secret strategy; it's compound growth working over decades. This lesson covers the principles and practices that turn ordinary savers into wealthy individuals.

The path to financial independence is well-documented: spend less than you earn, invest the difference wisely, and let time do the heavy lifting. Simple in concept, but requires discipline to execute.

## Part 1: The Power of Compounding

Compounding is the engine of wealth creation—and patience is the fuel.

*   **Definition**: [Compounding](/glossary#compound-interest) is earning returns on your returns. Growth builds on growth, creating an exponential curve.
*   **The Math**:
    *   $10,000 invested at 7% annual return:
    *   After 10 years: $19,672
    *   After 20 years: $38,697
    *   After 30 years: $76,123
    *   After 40 years: $149,745
*   **The Acceleration**: Compounding is slow and boring at first, then becomes explosive. Most wealth builds in the later years of the journey.
*   **Einstein Quote**: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it."
*   **Time Is Your Greatest Asset**: A 25-year-old with 40 years to compound beats a 45-year-old with 20 years, even with less capital invested.
*   **The Rule of 72**: Divide 72 by your annual return to estimate doubling time. At 7%, money doubles roughly every 10 years.
*   **Why It Matters**: Even modest returns, given enough time, produce extraordinary wealth. Patience is rewarded.

## Part 2: Start Early, Stay Invested

Time in the market beats timing the market—every time.

*   **The Earlier, The Better**: Starting at 25 instead of 35 can double your retirement wealth due to that extra decade of compounding.
*   **Dramatic Example**:
    *   Investor A invests $500/month from age 25 to 65 (40 years). At 7% return: ~$1.2 million.
    *   Investor B invests $500/month from age 35 to 65 (30 years). At 7% return: ~$567,000.
    *   Same monthly investment; half the result due to starting 10 years later.
*   **Stay Invested**: Don't try to time the market. Missing just the best 10 days in a decade can halve your returns.
*   **Dollar-Cost Averaging**: Invest a fixed amount regularly regardless of market conditions. Reduces timing [risk](/glossary#risk) and removes emotion.
*   **Ride Out [Volatility](/glossary#volatility)**: Bear markets are painful but temporary. Selling locks in losses; staying invested allows recovery.
*   **The Market Always Recovers**: Every bear market in history has been followed by a recovery and new highs. Stay the course.

## Part 3: Live Below Your Means

The first and most important rule of wealth: save more than you spend.

*   **Savings Rate Matters Most**: How much you save often matters more than investment returns (especially in early years).
*   **The Gap**: Wealth = Income - Expenses. Widen the gap relentlessly.
*   **Lifestyle Inflation**: As income rises, many increase spending proportionally. The wealthy increase savings instead.
*   **Frugality Is Freedom**: Low expenses mean less money needed for retirement and more capital available to compound.
*   **Automate Savings**: Set up automatic transfers to investment accounts. Pay yourself first before spending.
*   **Target Savings Rates**:
    *   10-15%: Acceptable minimum.
    *   20-30%: Good progress.
    *   40-50%+: Financial independence advocates save aggressively for early retirement.
*   **Delayed Gratification**: The ability to delay consumption for future wealth is one of the strongest predictors of financial success.

## Part 4: Invest in Low-Cost, Diversified Funds

Simplicity and low costs win for most investors over the long run.

*   **[Index Funds](/glossary#index-fund) and [ETFs](/glossary#etf)**: Low-cost, diversified, passive investing beats most active managers over time. Research consistently shows this.
*   **Costs Matter Enormously**: A 1% annual fee on a $500,000 portfolio is $5,000/year—compounding against you forever.
*   **Fee Comparison**:
    *   0.03% (Vanguard total market [ETF](/glossary#etf)) vs. 1.00% (typical actively managed fund)
    *   Over 30 years, the difference in final wealth can exceed 25%.
*   **[Diversification](/glossary#diversification)**: Own the whole market (or broad slices of it) rather than trying to pick individual [stocks](/glossary#stock).
*   **"Three-Fund Portfolio"**: Total US [stock](/glossary#stock) market + International [stocks](/glossary#stock) + Total [bond](/glossary#bond) market. Simple, effective, cheap.
*   **Don't Chase Performance**: Last year's best fund is often next year's laggard. Stick with your boring, cheap allocation.
*   **Rebalance Periodically**: Restore target weights to maintain your intended [risk](/glossary#risk) level. Simple annual rebalancing works well.

## Part 5: Tax-Advantaged Accounts

Taxes are a major drag on wealth accumulation—use every legal means to minimize them.

*   **401(k)/403(b)**: Employer-sponsored retirement accounts with significant tax advantages.
    *   Traditional: Pre-tax contributions, taxed on withdrawal. Reduces current taxes.
    *   Roth: Post-tax contributions, tax-free withdrawal. Tax-free growth forever.
*   **IRA (Individual Retirement Account)**: Traditional or Roth variants, with annual contribution limits.
*   **HSA (Health Savings Account)**: Triple tax advantage—tax-deductible contributions, tax-free growth, tax-free withdrawal for medical expenses. The best account type available.
*   **Employer Match**: Free money. Contribute at least enough to get the full employer match—this is an instant 50-100% return.
*   **Priority Order for Contributions**:
    1. Get full employer match in 401(k) (instant 100% return).
    2. Max HSA if eligible.
    3. Max Roth IRA if eligible.
    4. Max remaining 401(k) space.
    5. Taxable brokerage account for additional savings.
*   **Tax [Diversification](/glossary#diversification)**: Having both traditional (tax-deferred) and Roth (tax-free) accounts provides flexibility in retirement.

## Part 6: Avoid Common Wealth Destroyers

Protect your wealth from common mistakes that derail progress.

*   **High-[Interest](/glossary#interest-rate) Debt**: Credit card debt at 20%+ interest destroys wealth faster than investing builds it. Pay off high-[interest](/glossary#interest-rate) debt first—always.
*   **Lifestyle Creep**: Upgrading lifestyle with every income increase keeps you on the treadmill. Keep expenses flat as income grows.
*   **Market Timing**: Trying to buy low and sell high sounds logical but usually results in the opposite—buying high and selling low.
*   **Panic Selling**: Selling during crashes locks in losses permanently. The market has always recovered for those who stayed invested.
*   **Speculative Bets**: Gambling on meme [stocks](/glossary#stock), [crypto](/glossary#cryptocurrency) hype, or "sure things." Stick to diversified investing.
*   **Not Investing at All**: "Waiting for the right time" means missing years of compounding. The best time to invest was yesterday; the second best is today.
*   **Inflation Erosion**: Cash sitting in a bank account loses purchasing power every year. Long-term savings must be invested.

## Part 7: The Long Game Mindset

Wealth building is a marathon, not a sprint. Adopt the right mindset.

*   **Patience**: The market grows over decades, not days. Stay focused on long-term goals, not short-term noise.
*   **Discipline**: Stick to your savings rate and investment plan regardless of headlines, market conditions, or emotional urges.
*   **Detachment**: Don't check your portfolio obsessively. Short-term fluctuations are noise, not signal.
*   **Continuous Learning**: Keep improving your financial literacy. Small optimizations compound just like money.
*   **Avoid Comparisons**: Everyone's situation is different. Focus on your own progress, not someone else's Instagram lifestyle.
*   **Define "Enough"**: Know what you're building wealth for. Financial independence? Early retirement? Security for your family?
*   **Enjoy the Journey**: Wealth is a tool, not a goal. Use money to build the life you want—don't sacrifice your life to build wealth.

### The Simple Formula for Wealth
1. Earn more (grow income through skills and career).
2. Spend less (live below your means, avoid lifestyle inflation).
3. Invest the difference (in low-cost, diversified funds).
4. Stay invested (let compounding work through market cycles).
5. Repeat for decades.

Long-term wealth building isn't complicated—but it requires discipline, patience, and time. Start now, stay the course, and let the math of compounding do the heavy lifting.
\`,
        keyTakeaways: [
            "Compound growth is the most powerful wealth-building force—start early and let time work for you.",
            "Stay invested consistently: time in the market beats timing the market every time.",
            "Live below your means: the gap between income and expenses determines long-term wealth.",
            "Use low-cost index funds and maximize tax-advantaged accounts (401k, IRA, HSA).",
            "Avoid wealth destroyers: high-interest debt, lifestyle creep, panic selling, and market timing."
        ]
    },`;

const startMarker = '"pm_12": {';
const endMarker = '"tp_1": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_12: Long-Term Wealth Building - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    // Module 13: Trading Psychology\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated pm_12!');
