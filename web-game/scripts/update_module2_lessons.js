/**
 * This script validates the character count of each lesson in Module 2
 * Each lesson should have 5-9 parts and at least 6000 characters
 * 
 * Run this script to check the character counts before applying changes:
 * node scripts/update_module2_lessons.js
 */

const lessons = {
    ib_1: {
        title: "Why Invest?",
        content: `
# Investments: Growing Your Wealth

There are many ways to invest money, but the fundamental question is: Why bother? Why not just spend it or keep it in a bank? The answer lies in two powerful forces: **[Inflation](/glossary#inflation)** (the enemy) and **[Compound Interest](/glossary#compound-interest)** (the ally). Investing is not about getting rich quick; it is about securing your future freedom. It is the process of making your money work for you, so you don't have to work for money forever.

## Part 1: The Silent Thief — Inflation

[Inflation](/glossary#inflation) is the rate at which the price of goods and services rises over time. It silently erodes the [purchasing power](/glossary#purchasing-power) of your money while you sleep.

*   **The Math**: If inflation is 3% per year, a $100 bill today will only buy $97 worth of goods next year.
*   **The Erosion**: Over 20 years at 3% inflation, the value of your money is cut roughly in *half*.
*   **The Bank Trap**: Traditional savings accounts pay 0.01% to 0.5%. If inflation is 3%, you are *losing* 2.5% of your real wealth every year by "saving" it.
*   **The Solution**: You must invest in [assets](/glossary#asset) that grow faster than inflation — [Stocks](/glossary#stock), [Real Estate](/glossary#real-estate), [Commodities](/glossary#commodities) — to preserve and grow your [purchasing power](/glossary#purchasing-power).
*   **Historical Reality**: Since 1900, the US dollar has lost over 95% of its value due to inflation. Cash is not safe; it's slowly dying.

## Part 2: The Eighth Wonder — Compound Interest

Albert Einstein reportedly called [compound interest](/glossary#compound-interest) the "eighth wonder of the world." He said, "Those who understand it, earn it; those who don't, pay it."

*   **Simple Interest**: You earn interest only on your [principal](/glossary#principal). $100 at 10% earns $10 every year forever.
*   **Compound Interest**: You earn interest on your [principal](/glossary#principal) *plus* the interest you already earned. $100 → $110 → $121 → $133.10 → …
*   **The Snowball Effect**: In the beginning, growth looks slow. But after 20 or 30 years, the curve goes vertical. This is exponential growth.
*   **[Rule of 72](/glossary#rule-of-72)**: Divide 72 by your annual interest rate to estimate how many years it takes to double your money. At 10% returns, money doubles every 7.2 years. At 1% (a savings account), it takes 72 years.
*   **Time Magnifies**: The difference between starting at 25 vs 35 is not 10 extra years — it's potentially millions of dollars in final wealth.

## Part 3: Financial Independence vs. Traditional Retirement

The concept of retirement is being redefined by a growing movement called [FIRE](/glossary#fire) (Financial Independence, Retire Early).

*   **Old Model**: Work until 65, retire on Social Security and a pension, hope you don't outlive your money.
*   **New Model (FIRE)**: Build investments that generate enough [passive income](/glossary#passive-income) to cover your living expenses, at any age.
*   **Definition of FI**: You are financially independent when your **[Passive Income](/glossary#passive-income) > Living Expenses**. You no longer *need* a paycheck.
*   **The 4% Rule**: A common guideline says you can safely withdraw 4% of your [portfolio](/glossary#portfolio) per year in retirement. To retire on $40k/year, you need $1 million invested.
*   **True Freedom**: Financial independence isn't about doing nothing. It's about having the choice to do what you love, without money dictating your decisions.

## Part 4: The Cost of Waiting

Time is your greatest [asset](/glossary#asset), not money. The mathematics of compounding punish procrastination severely.

*   **Investor A**: Starts at 25, invests $500/month for 10 years, then stops completely at 35. Total invested: $60,000.
*   **Investor B**: Starts at 35, invests $500/month for 30 years until age 65. Total invested: $180,000.
*   **The Result**: At age 65, assuming 10% annual returns, **Investor A has more money than Investor B**, despite investing only a third as much.
*   **Why?**: Money invested earlier has more time to compound. The first $10,000 you invest in your 20s is worth more than the last $100,000 in your 60s.
*   **The Lesson**: Start now. Even if it's $50/month. The [opportunity cost](/glossary#opportunity-cost) of waiting is measured in millions over a lifetime.

## Part 5: Risk vs. Regret — The Real Trade-off

People fear the [risk](/glossary#risk) of losing money in the stock market. But they ignore the certainty of losing [purchasing power](/glossary#purchasing-power) to [inflation](/glossary#inflation) — and the regret of running out of money in old age.

*   **Short-Term [Risk](/glossary#risk)**: The market drops 30% in a crash. Scary, but historically temporary. Every crash has recovered.
*   **Long-Term [Risk](/glossary#risk)**: Keeping cash under your mattress while inflation erodes 50% of its value over 20 years. Devastating and permanent.
*   **Historical Perspective**: The US stock market has returned roughly 10% per year on average for over 100 years, through world wars, recessions, pandemics, and everything else. Betting against long-term growth is betting against human innovation.
*   **Real [Risk](/glossary#risk)**: The biggest risk isn't market [volatility](/glossary#volatility). It's outliving your savings. It's being 80 years old and broke.
*   **Action Over Fear**: Imperfect action today beats perfect planning tomorrow. Start small, learn as you go.

## Part 6: The Three Engines of Wealth

Wealth accumulation depends on just three variables. Understanding this equation changes how you think about money.

1.  **Money ([Principal](/glossary#principal))**: The amount you invest. You control this by increasing your income and reducing expenses.
2.  **Time**: How long your money stays invested. You control this by starting early and never withdrawing.
3.  **Rate of Return**: How fast your investments grow. The market largely controls this, though your [asset allocation](/glossary#asset-allocation) matters.

*   **The Formula**: Final Wealth = Principal × (1 + Rate)^Time
*   **Strategy**: Since you can't control market returns, maximize what you *can* control: your savings rate and your time in the market.
*   **The Savings Rate**: Someone who saves 50% of their income will reach financial independence 10x faster than someone saving 10%, regardless of income level.

## Part 7: Active Income vs. Passive Income

The fundamental shift in wealth building is moving from trading time for money to owning [assets](/glossary#asset) that produce money while you sleep.

*   **[Active Income](/glossary#active-income)**: You trade hours for dollars. Salaries, wages, consulting fees. Limit: 24 hours per day. Taxed at the highest rates (up to 37%).
*   **[Passive Income](/glossary#passive-income)**: Your [assets](/glossary#asset) generate income without your active involvement. [Dividends](/glossary#dividend), rent, [interest](/glossary#interest-rate), business profits. Limit: None. Taxed at lower rates ([capital gains](/glossary#capital-gains): 0-20%).
*   **The Goal**: Convert [active income](/glossary#active-income) into [assets](/glossary#asset) that produce [passive income](/glossary#passive-income). Every dollar of [dividends](/glossary#dividend) reduces your dependence on a paycheck.
*   **$1 = $25**: If [dividend](/glossary#dividend) stocks yield 4%, then $1 in annual [passive income](/glossary#passive-income) requires $25 in [capital](/glossary#capital). To replace a $50,000 salary, you need roughly $1.25 million invested.
*   **The Flywheel**: Once [passive income](/glossary#passive-income) exceeds expenses, you've escaped the rat race. Additional earnings accelerate your wealth exponentially.

## Part 8: The Mindset Shift — Consumer to Owner

The difference between the wealthy and everyone else often comes down to mindset. Rich people buy [assets](/glossary#asset). Everyone else buys liabilities.

*   **Consumer Mindset**: "I want to buy an iPhone." Spend $1,000 on a depreciating device.
*   **Owner Mindset**: "I want to own Apple." Invest $1,000 in AAPL [stock](/glossary#stock) — a share of the most profitable company in history.
*   **The Difference**: In 10 years, the consumer's phone is worthless. The owner's [stock](/glossary#stock) may have tripled.
*   **Be on Both Sides**: Love Nike? Buy the shoes AND buy the [stock](/glossary#stock). When you see major brands, think: "Who owns that company? It could be me."
*   **Every Dollar is a Soldier**: Warren Buffett said every dollar can work for you and earn more soldiers. Don't send your soldiers to die (depreciate).

## Part 9: Common Myths That Keep People Poor

False beliefs about investing keep millions of people on the sidelines while their savings erode to [inflation](/glossary#inflation).

*   **"Investing is Gambling"**: Gambling is zero-sum (the house always wins). Investing is positive-sum (companies create real value; shareholders own that value).
*   **"I Need a Lot of Money to Start"**: False. You can buy [fractional shares](/glossary#fractional-shares) for $1. A $50/month habit becomes $500,000 over 40 years at 10% returns.
*   **"I'm Not an Expert"**: You don't need to be. Buying a broad [index fund](/glossary#index-fund) (like the S&P 500) beats 90% of professional fund managers over time.
*   **"The Market is Too High"**: People have said this every year for 100 years. Time in the market beats timing the market. Missing the 10 best days over 20 years cuts your returns in half.
*   **"I'll Start When..."**: This is how people never start. The best time to plant a tree was 20 years ago. The second best time is today.

        `
    }
};

// Calculate character count
function countCharacters(content) {
    // Remove backticks and template literal formatting
    return content.trim().length;
}

// Count parts
function countParts(content) {
    const partMatches = content.match(/## Part \d+/g);
    return partMatches ? partMatches.length : 0;
}

// Validate lessons
console.log("\n=== MODULE 2 LESSON VALIDATION ===\n");

for (const [id, lesson] of Object.entries(lessons)) {
    const charCount = countCharacters(lesson.content);
    const partCount = countParts(lesson.content);

    const charStatus = charCount >= 6000 ? "✓" : "✗";
    const partStatus = (partCount >= 5 && partCount <= 9) ? "✓" : "✗";

    console.log(`${id}: "${lesson.title}"`);
    console.log(`  Characters: ${charCount} (min: 6000) ${charStatus}`);
    console.log(`  Parts: ${partCount} (range: 5-9) ${partStatus}`);
    console.log(`  Status: ${charStatus === "✓" && partStatus === "✓" ? "PASS" : "FAIL"}`);
    console.log("");
}

console.log("\n=== END VALIDATION ===\n");
