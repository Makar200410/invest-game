const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_4": {
        title: "Dividends: Getting Paid",
        content: \`
# Dividends: Getting Paid to Own Stocks

[Dividends](/glossary#dividend) are cash payments that companies make to shareholders from their profits. They represent a tangible return on your investment that doesn't depend on selling your shares. For many investors, [dividends](/glossary#dividend) are the primary reason to own [stocks](/glossary#stock) — they provide income while you sleep and compound powerfully over decades.

## Part 1: What Are Dividends?

A [dividend](/glossary#dividend) is a distribution of a company's earnings to its shareholders. It's your share of the profits as a part-owner.

*   **Definition**: Cash payment per share, distributed to all shareholders on a regular schedule.
*   **Example**: Apple declares a $0.24 quarterly [dividend](/glossary#dividend). If you own 100 shares, you receive $24 every quarter ($96/year).
*   **Why Companies Pay**: To return profits to shareholders when they can't reinvest all earnings at high returns.
*   **Not Guaranteed**: Unlike [bond](/glossary#bond) interest, [dividends](/glossary#dividend) are optional. Companies can reduce or eliminate them anytime.
*   **Board Decision**: The Board of Directors approves [dividend](/glossary#dividend) payments. Shareholders don't vote on each [dividend](/glossary#dividend).
*   **Form of Return**: [Dividends](/glossary#dividend) + [Capital Gains](/glossary#capital-gains) = Total Return. Some [stocks](/glossary#stock) return 100% via [dividends](/glossary#dividend), others 100% via appreciation.

## Part 2: Dividend Yield — The Key Metric

[Dividend Yield](/glossary#dividend-yield) tells you how much income you receive relative to the stock price. It's the first number income investors check.

*   **Formula**: [Dividend Yield](/glossary#dividend-yield) = Annual [Dividend](/glossary#dividend) Per Share / Current Stock Price
*   **Example**: Stock pays $4/year [dividend](/glossary#dividend), price is $100. [Yield](/glossary#dividend-yield) = 4/100 = 4%.
*   **Average S&P 500 [Yield](/glossary#dividend-yield)**: Currently ~1.5% (historically ranged from 1% to 6%).
*   **High Yield Warning**: [Yields](/glossary#dividend-yield) above 5-6% often signal trouble. The company may be distressed, and the [dividend](/glossary#dividend) may be cut.
*   **[Yield](/glossary#dividend-yield) Traps**: A falling stock price increases [yield](/glossary#dividend-yield). Don't chase high [yields](/glossary#dividend-yield) — check if the company can sustain the payment.
*   **Compare Within Sectors**: Utilities naturally have higher [yields](/glossary#dividend-yield) (4%+) than tech companies (0-2%). Compare apples to apples.

## Part 3: Important Dividend Dates

Understanding [dividend](/glossary#dividend) dates is crucial if you want to receive the payment. Miss the deadlines and you get nothing.

*   **Declaration Date**: The day the Board announces the [dividend](/glossary#dividend) amount and upcoming dates. "We will pay $0.25 on March 15th."
*   **[Ex-Dividend Date](/glossary#ex-dividend)**: THE CRITICAL DATE. You must own the [stock](/glossary#stock) BEFORE this date to receive the [dividend](/glossary#dividend). If you buy on or after, no [dividend](/glossary#dividend) for you.
*   **Record Date**: The day the company checks who owns shares. Usually 1 business day after [ex-dividend](/glossary#ex-dividend).
*   **Payment Date**: The day cash appears in your brokerage account. Usually 2-4 weeks after record date.
*   **Price Adjustment**: On the [ex-dividend](/glossary#ex-dividend) date, the stock price typically drops by approximately the [dividend](/glossary#dividend) amount (since the company is "worth less" without that cash).
*   **T+2 Settlement**: Due to [settlement](/glossary#settlement) rules, you must buy 2 business days before record date. The [ex-date](/glossary#ex-dividend) accounts for this.

## Part 4: Dividend Payout Ratio

The [Payout Ratio](/glossary#payout-ratio) measures what percentage of earnings a company distributes as [dividends](/glossary#dividend). It signals sustainability.

*   **Formula**: [Payout Ratio](/glossary#payout-ratio) = Annual [Dividends](/glossary#dividend) / Annual Earnings
*   **Safe Zone**: 30-60% payout ratio is generally sustainable. Company keeps enough for reinvestment and cushion.
*   **High Ratio (>80%)**: Concerning. Little room for earnings decline. [Dividend](/glossary#dividend) cut becomes likely if profits fall.
*   **Over 100% Ratio**: Red flag! Company is paying more than it earns. Unsustainable — either using reserves or going into debt.
*   **Very Low Ratio (<20%)**: Growth company retaining earnings for expansion. Might increase [dividends](/glossary#dividend) later.
*   **Check Consistency**: A stable [payout ratio](/glossary#payout-ratio) over 10 years suggests reliable [dividend](/glossary#dividend) policy.

## Part 5: Dividend Growth Investing

Growing [dividends](/glossary#dividend) beat static high [yields](/glossary#dividend-yield) over time. [Dividend](/glossary#dividend) growth investors focus on companies that consistently raise payments.

*   **The Strategy**: Buy companies with a history of increasing [dividends](/glossary#dividend) annually. The [yield](/glossary#dividend-yield) on your original cost grows every year.
*   **Example**: You buy at $100 with a 2% [yield](/glossary#dividend-yield) ($2/year). Company raises [dividend](/glossary#dividend) 10% annually. In 10 years, you receive $5.19/year — a 5.2% [yield](/glossary#dividend-yield) on your original cost.
*   **[Dividend Aristocrats](/glossary#dividend-aristocrats)**: S&P 500 companies that have raised [dividends](/glossary#dividend) for 25+ consecutive years. Examples: Coca-Cola, Johnson & Johnson, Procter & Gamble.
*   **[Dividend Kings](/glossary#dividend-kings)**: Companies with 50+ years of consecutive [dividend](/glossary#dividend) increases. Ultimate reliability.
*   **Power of Growth**: A growing [dividend](/glossary#dividend) hedges against [inflation](/glossary#inflation). Your income increases even as prices rise.
*   **[ETF](/glossary#etf) Options**: VIG (Vanguard [Dividend](/glossary#dividend) Appreciation) focuses on [dividend](/glossary#dividend) growers, not high current [yield](/glossary#yield).

## Part 6: Dividend Reinvestment (DRIP)

[Reinvesting](/glossary#drip) [dividends](/glossary#dividend) to buy more shares is one of the most powerful wealth-building techniques.

*   **[DRIP](/glossary#drip)**: [Dividend Reinvestment Plan](/glossary#drip). Automatically uses [dividends](/glossary#dividend) to buy more shares instead of taking cash.
*   **[Compound Interest](/glossary#compound-interest) on Steroids**: Each new share earns future [dividends](/glossary#dividend), which buy more shares, which earn more [dividends](/glossary#dividend)...
*   **Historical Impact**: From 1930-2020, [dividends](/glossary#dividend) reinvested accounted for ~40% of total S&P 500 returns.
*   **Automatic**: Most brokers offer automatic [DRIP](/glossary#drip) with no commissions. Set it and forget it.
*   **[Fractional Shares](/glossary#fractional-shares)**: [DRIP](/glossary#drip) can buy partial shares, so every dollar gets invested.
*   **When to Turn Off**: In retirement, you might want the cash for living expenses instead of reinvesting.

## Part 7: Tax Treatment of Dividends

How [dividends](/glossary#dividend) are taxed depends on their type. Understanding this affects which accounts to hold [dividend](/glossary#dividend) [stocks](/glossary#stock) in.

*   **[Qualified Dividends](/glossary#qualified-dividend)**: From US corporations (and some foreign) on shares held 60+ days. Taxed at long-term [capital gains](/glossary#capital-gains) rates (0%, 15%, or 20%).
*   **Ordinary [Dividends](/glossary#dividend)**: Everything else. [REITs](/glossary#reit), some foreign [stocks](/glossary#stock), short holding periods. Taxed as ordinary income (up to 37%).
*   **Account Location**: Hold high-[dividend](/glossary#dividend) [stocks](/glossary#stock) (especially REITs) in tax-advantaged accounts ([IRA](/glossary#ira), [401k](/glossary#401k)) to avoid taxes.
*   **1099-DIV**: You'll receive this form annually showing your [dividend](/glossary#dividend) income, separated by type.
*   **Tax Drag**: [Dividends](/glossary#dividend) are taxed when received, unlike unrealized gains. This creates "tax drag" in taxable accounts.
*   **Foreign [Dividend](/glossary#dividend) Withholding**: Foreign [stocks](/glossary#stock) may withhold taxes at source. You can claim foreign tax credits.

## Part 8: Dividend Stocks vs. Growth Stocks

Should you prioritize [dividend](/glossary#dividend) payers or high-growth companies? The answer depends on your goals and stage of life.

*   **[Dividend](/glossary#dividend) [Stocks](/glossary#stock)**: Mature companies returning profits. Lower [volatility](/glossary#volatility), steady income, slower growth (Coca-Cola, Johnson & Johnson).
*   **Growth [Stocks](/glossary#stock)**: Companies reinvesting all profits for expansion. Higher [volatility](/glossary#volatility), no income, faster appreciation potential (Amazon, Tesla).
*   **Young Investor**: Might prefer growth. Long [time horizon](/glossary#time-horizon) to recover from [volatility](/glossary#volatility). Doesn't need current income.
*   **Retiree**: Might prefer [dividends](/glossary#dividend). Needs income to live on. Values stability over rapid growth.
*   **Total Return Perspective**: A [stock](/glossary#stock) returning 10% via [dividends](/glossary#dividend) is equivalent to one returning 10% via appreciation. Total return matters, not source.
*   **Balanced Approach**: Own both through a Total Market [index fund](/glossary#index-fund). You automatically own [dividend](/glossary#dividend) payers and growers.

## Part 9: Building a Dividend Portfolio

If you want to focus on [dividends](/glossary#dividend), here's how to construct a solid income-generating [portfolio](/glossary#portfolio).

*   **[Diversify](/glossary#diversification)**: Don't concentrate in one sector. Utilities, consumer staples, healthcare, financials all pay good [dividends](/glossary#dividend).
*   **Quality Over [Yield](/glossary#dividend-yield)**: High [yields](/glossary#dividend-yield) are often warnings. Prioritize sustainable [payout ratios](/glossary#payout-ratio) and [dividend](/glossary#dividend) growth history.
*   **[ETF](/glossary#etf) Options**:
    *   SCHD (Schwab US [Dividend](/glossary#dividend) Equity): High-quality [dividend](/glossary#dividend) payers
    *   VIG (Vanguard [Dividend](/glossary#dividend) Appreciation): [Dividend](/glossary#dividend) growers
    *   VYM (Vanguard High [Dividend Yield](/glossary#dividend-yield)): Higher current [yield](/glossary#dividend-yield)
*   **[Reinvest](/glossary#drip) Until Retirement**: Let [compounding](/glossary#compound-interest) work for decades. Turn off [DRIP](/glossary#drip) when you need income.
*   **Monitor Annually**: Check [payout ratios](/glossary#payout-ratio) and earnings. Companies in trouble often cut [dividends](/glossary#dividend).
*   **Realistic Expectations**: A 3% [yielding](/glossary#dividend-yield) [portfolio](/glossary#portfolio) worth $1 million generates $30,000/year before taxes. Plan accordingly.
\`,
        keyTakeaways: [
            "Dividends are cash payments from company profits — your share as a part-owner.",
            "Dividend Yield = Annual Dividend / Stock Price — but beware of high-yield traps.",
            "You must own shares BEFORE the ex-dividend date to receive payment.",
            "Reinvested dividends compound powerfully — they drove ~40% of historical S&P 500 returns."
        ]
    },`;

const startMarker = '"sm_4": {';
const endMarker = '"sm_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_4: Dividends - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_4!');
