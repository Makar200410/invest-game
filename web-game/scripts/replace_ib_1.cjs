const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_1": {
        title: "Why Invest?",
        content: \`
# Why Invest? The Path to Financial Freedom

Investing is not just for the wealthy; it is a necessity for anyone who wants to secure their financial future. In a world where [inflation](/glossary#inflation) constantly erodes the value of money, keeping cash under your mattress is a guaranteed way to become poorer over time. Investing is the act of putting your money to work so that it grows and compounds, allowing you to achieve financial freedom.

## Part 1: The Silent Killer: Inflation

To understand why you must invest, you must first understand the enemy: Inflation.

*   **Definition**: Inflation is the rate at which the general level of prices for goods and services is rising.
*   **The Erosion**: If inflation is 3% per year, a dollar today will only buy $0.97 worth of goods next year. Over 20 years, that dollar loses nearly half its value.
*   **The Treadmill**: If your savings are in a bank account earning 0.5% interest while inflation is 3%, you are losing 2.5% of your purchasing power every single year. You are running backwards.
*   **The Solution**: You must invest in assets that grow faster than inflation (Stocks, Real Estate) to preserve and grow your wealth.

## Part 2: The Eighth Wonder of the World: Compound Interest

Albert Einstein reportedly called [compound interest](/glossary#compound-interest) the "eighth wonder of the world." It is the engine of wealth creation.

*   **Simple Interest**: You earn interest only on your principal (the original money).
*   **Compound Interest**: You earn interest on your principal *plus* the interest you've already earned. Interest on interest.
*   **The Snowball**: At first, it seems slow. But over time, the growth becomes exponential.
*   **Example**:
    *   Invest $10,000 at 10% return.
    *   Year 1: $11,000 (Gain $1,000).
    *   Year 10: $25,937 (Gain in Year 10 is ~$2,300).
    *   Year 30: $174,494 (Gain in Year 30 is ~$15,800).
*   **Time is Money**: The earlier you start, the more powerful compounding becomes. A 20-year-old who invests $100/month will have significantly more than a 40-year-old who invests $500/month, simply due to time.

## Part 3: Financial Freedom vs. Being Rich

Investing isn't just about buying a Lamborghini; it's about buying your time back.

*   **Being Rich**: Having a high income. You can be a doctor making $500k a year but spend it all. If you stop working, you go broke. You are "rich" but not free.
*   **Financial Freedom**: Having assets that generate enough income to cover your living expenses. You can stop working and your lifestyle doesn't change.
*   **The Goal**: The goal of investing is to build a "Money Machine" (portfolio) that pays for your life.
*   **The FIRE Movement**: "Financial Independence, Retire Early." A community dedicated to aggressive saving and investing to retire in their 30s or 40s.

## Part 4: The Risk of NOT Investing

Many people are afraid of the stock market crashing. They should be more afraid of not investing.

*   **Market Risk**: The risk that your investments will go down in value temporarily. This is real, but historically, the market has always recovered and reached new highs.
*   **Shortfall Risk**: The risk that you will reach age 65 and not have enough money to survive. This is a permanent disaster.
*   **The Safe Path is Dangerous**: Playing it "safe" with cash guarantees failure due to inflation. Taking calculated risks in the market is the only path to success.
*   **Longevity Risk**: People are living longer. You might need your money to last until age 95 or 100. Cash won't cut it.

## Part 5: Your Human Capital

For most young people, their biggest asset is not their bank account, but their ability to earn money.

*   **Human Capital**: The present value of all your future wages.
*   **Converting Capital**: The game of life is converting your *Human Capital* (work) into *Financial Capital* (investments).
*   **Diminishing Asset**: As you age, your Human Capital decreases (you have fewer working years left). You must replace it with Financial Capital so that when you can no longer work, your money works for you.
*   **Investing in Yourself**: Education, skills, and health are also investments that increase your Human Capital.

## Part 6: The Magic of Ownership

When you buy a stock, you are not buying a lottery ticket; you are buying a piece of a business.

*   **Equity**: You become a partial owner. You have a claim on the company's assets and future earnings.
*   **Profit Participation**: When Apple sells an iPhone or Coca-Cola sells a soda, you profit.
*   **Passive Income**: You don't have to manage the company, hire employees, or develop products. You just provide the capital and reap the rewards.
*   **The Wealth Gap**: The primary difference between the wealthy and the middle class is that the wealthy own *equity* (businesses, real estate), while the middle class owns *liabilities* (cars, credit card debt).

## Part 7: Setting Your Goals

Before you buy your first stock, you need a destination.

*   **Short-Term Goals (< 3 years)**: Buying a car, wedding, down payment.
    *   *Vehicle*: Cash, High-Yield Savings, CDs. Do NOT put this money in the stock market.
*   **Medium-Term Goals (3-10 years)**: Starting a business, dream vacation.
    *   *Vehicle*: Bonds, Conservative Mix of Stocks.
*   **Long-Term Goals (10+ years)**: Retirement, Generational Wealth.
    *   *Vehicle*: Stocks (Equities), Real Estate. You need growth.
*   **The "Why"**: Investing is hard. When the market drops 20%, you need a strong "Why" to keep you from selling.

## Part 8: Overcoming Barriers

Why doesn't everyone invest?

*   **"I don't have enough money"**: You can start with $1 thanks to fractional shares. The habit is more important than the amount.
*   **"It's too complicated"**: It can be, but it doesn't have to be. A simple index fund strategy beats most professionals.
*   **"It's gambling"**: Short-term trading is gambling. Long-term investing is wealth building based on economic growth.
*   **"I'll start later"**: The most expensive sentence in the English language. Waiting 10 years can cut your final net worth in half.

## Part 9: Summary and First Steps

You are standing at the beginning of a journey that will change your life.

*   **Start Now**: Today is the best day to start.
*   **Pay Yourself First**: Automate a transfer from your checking to your investment account every payday. Treat it like a bill.
*   **Think Long Term**: Ignore the daily news. Focus on the next 20 years.
*   **Educate Yourself**: You are already doing this by playing this game. Knowledge is the best leverage.
*   **The Reward**: The prize is not just money; it is freedom, security, and the ability to live life on your own terms.
\`,
        keyTakeaways: [
            "Investing is necessary to beat inflation and preserve purchasing power.",
            "Compound interest is the engine of wealth; time is your biggest advantage.",
            "The goal is financial freedom: assets paying for your lifestyle.",
            "Not investing is riskier than investing due to 'shortfall risk'."
        ]
    },`;

const startMarker = '"ib_1": {';
const endMarker = '"ib_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_1: Why Invest? - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated ib_1!');
