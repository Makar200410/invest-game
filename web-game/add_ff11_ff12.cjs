const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const lessons = {
    ff_11: {
        title: "Psychology of Investing",
        content: `
# Your Biggest Enemy: The Psychology of Investing

The market doesn't care about your feelings. But your feelings determine your actions, and your actions determine your returns. Behavioral finance studies show that most investors underperform because of psychology, not strategy.

## Part 1: The Behavioral Gap

Studies show the average investor earns 2-4% less than the funds they invest in. Why?
*   **Buying high**: FOMO drives buying after rallies
*   **Selling low**: Panic drives selling during crashes
*   **Chasing performance**: Buying last year's winners (which become losers)

Your behavior matters more than your investments. A boring [index fund](/glossary#index-fund) held forever beats constant trading.

## Part 2: Loss Aversion

We feel losses 2x more intensely than equivalent gains:
*   Losing $100 hurts twice as much as gaining $100 feels good
*   This causes us to hold losers too long (hoping to break even)
*   And sell winners too early (locking in small gains)

The result: [portfolios](/glossary#portfolio) full of losers, stripped of winners.

## Part 3: Recency Bias

We overweight recent events:
*   After a crash: "The market will never recover"
*   After a rally: "This time is different"
*   We extrapolate current trends into infinity

Reality: Markets are cyclical. What happened yesterday tells you little about tomorrow.

## Part 4: Overconfidence

Most investors think they're above average:
*   80% of drivers think they're above average (impossible)
*   After a few wins, traders believe they have skill
*   Overconfidence leads to excessive trading and [risk](/glossary#risk)

The more you trade, the worse you usually do. Humility is profitable.

## Part 5: Herd Mentality

Humans are social animals:
*   We feel safe following the crowd
*   When everyone is buying, we buy. When everyone panics, we panic.
*   But the crowd is usually wrong at extremes

Contrarian thinking is uncomfortable but profitable. Buy when blood is in the streets.

## Part 6: Confirmation Bias

We seek information that confirms what we already believe:
*   Own Tesla? You'll find bullish articles.
*   Shorted Tesla? You'll find bearish articles.
*   We ignore evidence that contradicts our position.

Actively seek opposing viewpoints. If you can't steelman the bear case, you don't understand your investment.

## Part 7: Systems Over Emotions

The solution is removing yourself from decisions:
*   **Automate**: Set up automatic investment on payday
*   **Rules**: Write your investment policy and follow it
*   **Long-term**: Zoom out. Daily noise is meaningless.
*   **Diversify**: If you don't know what will win, own everything
*   **Don't look**: Check [portfolio](/glossary#portfolio) quarterly, not daily

The best investors are boring. No market timing. No hot tips. Just consistent, patient, automated investing.
`,
        keyTakeaways: [
            "The behavioral gap: investors earn 2-4% less than their funds due to psychology.",
            "Loss aversion makes losses hurt 2x more than equivalent gains feel good.",
            "Recency bias causes us to extrapolate recent trends indefinitely.",
            "Overconfidence increases after wins, leading to excessive risk.",
            "Automate investing to remove emotional decision-making."
        ]
    },
    ff_12: {
        title: "Taxes & Investing",
        content: `
# Uncle Sam's Cut: Taxes and Investing

Taxes are the biggest expense most investors ignore. A dollar saved in taxes is a dollar that compounds for you. Understanding tax basics can add hundreds of thousands to your lifetime wealth.

## Part 1: Capital Gains Tax Basics

Tax on investment profits depends on holding period:
*   **Short-Term [Capital Gains](/glossary#capital-gains)** (<1 year): Taxed as ordinary income (up to 37%)
*   **Long-Term [Capital Gains](/glossary#capital-gains)** (>1 year): 0%, 15%, or 20% depending on income

The difference is massive. Selling $10,000 profit at 37% = $6,300 net. At 15% = $8,500 net. That extra $2,200 compounds for decades.

**Rule**: Never sell a winning position before 1 year if you can avoid it.

## Part 2: Tax-Advantaged Accounts

Maximize these before taxable accounts:
*   **[Roth IRA](/glossary#roth-ira)**: Contribute after-tax money. All growth and withdrawals are TAX-FREE forever.
*   **Traditional IRA/[401(k)](/glossary#401k)**: Contribute pre-tax. Pay taxes on withdrawal in retirement.
*   **HSA**: Triple tax advantage if used for medical expenses.

If you can use a tax-advantaged account, never use taxable.

## Part 3: Tax-Loss Harvesting

Sell losing positions to offset gains:
*   Lost $5,000 on Stock A, gained $5,000 on Stock B = $0 taxable gain
*   Can offset up to $3,000 of ordinary income per year
*   Carry forward unlimited losses to future years

**Wash Sale Rule**: Can't buy back "substantially identical" security within 30 days.

## Part 4: Dividend Taxation

[Dividends](/glossary#dividend) are taxed based on type:
*   **Qualified [Dividends](/glossary#dividend)**: Held 60+ days, taxed at [capital gains](/glossary#capital-gains) rates (0-20%)
*   **Non-Qualified [Dividends](/glossary#dividend)**: Taxed as ordinary income (up to 37%)

High-[dividend](/glossary#dividend) [stocks](/glossary#stock) in taxable accounts create tax drag. Hold them in [Roth IRA](/glossary#roth-ira) instead.

## Part 5: Asset Location Strategy

Where you hold [assets](/glossary#asset) matters:
*   **Taxable Account**: Hold [index funds](/glossary#index-fund), growth [stocks](/glossary#stock) (low turnover, long-term gains)
*   **[Roth IRA](/glossary#roth-ira)**: Hold [bonds](/glossary#bond), REITs, high-[dividend](/glossary#dividend) [stocks](/glossary#stock) (taxed at highest rates)
*   **Traditional 401(k)**: Hold anything — it's all taxed as income eventually

Proper [asset](/glossary#asset) location can add 0.5-1% per year to after-tax returns.

## Part 6: Estate Planning Basics

Death has tax implications:
*   **Step-Up in Basis**: Heirs receive [assets](/glossary#asset) at current value, erasing all gains. Huge benefit.
*   **[Roth IRA](/glossary#roth-ira)**: No required minimum distributions. Can grow tax-free for heirs.
*   **Estate Tax**: Only applies to estates over $13M+ (2024). Most people don't pay.

If you have significant [assets](/glossary#asset), consult an estate attorney.

## Part 7: Common Tax Mistakes

Avoid these expensive errors:
*   Selling winners before 1 year (triggers short-term [capital gains](/glossary#capital-gains))
*   Not harvesting losses at year-end
*   Holding [bonds](/glossary#bond) in taxable accounts
*   Ignoring [Roth IRA](/glossary#roth-ira) contribution room
*   Not maximizing 401(k) employer match (literally free money)

A good accountant or tax advisor can save more than they cost.
`,
        keyTakeaways: [
            "Long-term capital gains (>1 year) taxed at 0-20%; short-term at up to 37%.",
            "Maximize tax-advantaged accounts: Roth IRA, 401(k), HSA.",
            "Tax-loss harvesting offsets gains with losses (watch 30-day wash sale rule).",
            "Asset location: high-tax investments in Roth; low-tax in taxable.",
            "Never sell winners before 1 year if you can avoid it."
        ]
    }
};

const ff10End = content.indexOf('"ff_10":');
if (ff10End === -1) { console.error('Could not find ff_10'); process.exit(1); }
const ff10CloseMatch = content.indexOf('    },', content.indexOf('keyTakeaways:', ff10End));
const insertPoint = ff10CloseMatch + 6;

let insertContent = '\n';
for (const [id, lesson] of Object.entries(lessons)) {
    insertContent += `    "${id}": {
        title: "${lesson.title}",
        content: \`${lesson.content}
        \`,
        keyTakeaways: [
            "${lesson.keyTakeaways.join('",\n            "')}"
        ]
    },
`;
}

content = content.substring(0, insertPoint) + insertContent + content.substring(insertPoint);
fs.writeFileSync(filePath, content);
console.log('Added ff_11 and ff_12');
