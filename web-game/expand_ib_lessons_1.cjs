const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to replace lesson content
function replaceLessonContent(lessonId, newTitle, newContent, newKeyTakeaways) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) {
        console.error(`Lesson ${lessonId} not found`);
        return false;
    }

    const contentStart = content.indexOf('content: `', lessonStart);
    if (contentStart === -1) return false;

    const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);
    if (keyTakeawaysStart === -1) return false;

    const keyTakeawaysEnd = content.indexOf(']', keyTakeawaysStart);
    if (keyTakeawaysEnd === -1) return false;

    // Find the end of the lesson object to ensure we replace everything correctly
    // We assume the structure is:
    // "id": {
    //    title: "...",
    //    content: `...`,
    //    keyTakeaways: [...]
    // },

    // Construct the new lesson string
    const newLesson = `"${lessonId}": {
        title: "${newTitle}",
        content: \`
${newContent}
        \`,
        keyTakeaways: [
            "${newKeyTakeaways.join('",\n            "')}"
        ]
    }`;

    // Find the end of the current lesson object
    // It ends with `},` usually
    const nextLessonStart = content.indexOf('    "', keyTakeawaysEnd);
    // This is a bit risky. Let's find the closing brace.
    const closingBrace = content.indexOf('},', keyTakeawaysEnd);

    if (closingBrace === -1) return false;

    const before = content.substring(0, lessonStart);
    const after = content.substring(closingBrace + 2); // +2 for },

    content = before + newLesson + after;
    return true;
}

const ib_1_content = `
# Investments: Growing Your Wealth

There are many ways to invest money, but the fundamental question is: Why bother? Why not just spend it or keep it in a bank?
The answer lies in two powerful forces: **Inflation** (the enemy) and **Compound Interest** (the ally).
Investing is not about getting rich quick; it is about securing your future freedom. It is the process of making your money work for you, so you don't have to work for money forever.

## Part 1: The Silent Thief: Inflation
Inflation is the rate at which the price of goods and services rises.
*   **The Math**: If inflation is 3% per year, a $100 bill today will only buy $97 worth of goods next year.
*   **The Erosion**: Over 20 years, 3% inflation cuts the value of your money in *half*.
*   **The Bank Trap**: Savings accounts pay 0.01% to 0.5%. If inflation is 3%, you are *losing* 2.5% of your wealth every year by "saving" it.
*   **The Solution**: You must invest in assets that grow faster than inflation (Stocks, Real Estate) to preserve your purchasing power.

## Part 2: The Eighth Wonder: Compound Interest
Albert Einstein reportedly called compound interest the "eighth wonder of the world."
*   **Simple Interest**: You earn interest only on your principal. ($100 + $10/year).
*   **Compound Interest**: You earn interest on your principal *plus* the interest you already earned. ($100 -> $110 -> $121 -> $133).
*   **The Snowball Effect**: In the beginning, it looks slow. But after 20 or 30 years, the curve goes vertical.
*   **Rule of 72**: Divide 72 by your interest rate to see how many years it takes to double your money.
    *   At 10% return, money doubles every 7.2 years.
    *   At 1% return, money doubles every 72 years.

## Part 3: Financial Independence vs. Retirement
*   **Old Model**: Work until 65, then retire and hope you die before your money runs out.
*   **New Model (FIRE)**: Financial Independence, Retire Early.
*   **Definition**: You are financially independent when your **Passive Income > Living Expenses**.
*   **The Goal**: It's not about doing nothing. It's about doing what you *want* without worrying about a paycheck. Investing is the bridge to this state.

## Part 4: The Cost of Waiting
Time is your greatest asset, not money.
*   **Investor A**: Starts at 25, invests $500/month for 10 years, then stops. (Total invested: $60k).
*   **Investor B**: Starts at 35, invests $500/month for 30 years. (Total invested: $180k).
*   **The Result**: At age 65, **Investor A has more money**, even though they invested 3x less.
*   **Lesson**: Start now. Even if it's $50. The cost of waiting is millions.

## Part 5: Risk vs. Regret
People are afraid of losing money in the market (Risk). They should be afraid of running out of money in old age (Regret).
*   **Short-Term Risk**: The market goes down 20% this year. (Scary, but temporary).
*   **Long-Term Risk**: You keep cash, inflation eats 50% of it, and you can't afford healthcare at 80. (Devastating and permanent).
*   **Perspective**: The stock market has historically gone up 10% per year on average for 100 years. Betting against it is betting against human progress.

## Part 6: The 3 Engines of Wealth
Wealth is generated by three variables:
1.  **Money (Principal)**: How much you invest. (You control this by earning/saving more).
2.  **Time**: How long you stay invested. (You control this by starting early).
3.  **Rate of Return**: How fast it grows. (The market controls this, mostly).
*   **Strategy**: You can't control the market returns. Focus on maximizing your Contributions (Money) and Duration (Time).

## Part 7: Active vs. Passive Income
*   **Active Income**: You trade time for money. (Salary, Hourly Wage).
    *   *Limit*: You only have 24 hours a day.
    *   *Tax*: Taxed at the highest rates.
*   **Passive Income**: Your assets trade time for money. (Dividends, Rent, Interest).
    *   *Limit*: Infinite. Your money works 24/7/365. It never calls in sick.
    *   *Tax*: Taxed at lower rates (Capital Gains).
*   **The Shift**: Your goal is to convert Active Income into Passive Income.

## Part 8: The Mindset Shift: Consumer to Owner
*   **Consumer Mindset**: "I want to buy an iPhone." (Spend $1,000).
*   **Owner Mindset**: "I want to own Apple." (Invest $1,000).
*   **The Difference**: The consumer has a depreciating phone. The owner has a share of the profits of the most profitable company in history.
*   **Action**: Next time you buy a product you love (Nike shoes, Starbucks coffee), buy their stock too. Be on the side of the profit.

## Part 9: Common Myths
*   **"Investing is Gambling"**: Gambling is zero-sum (the house wins). Investing is positive-sum (companies create value, everyone wins).
*   **"I need a lot of money to start"**: False. You can buy fractional shares for $1.
*   **"I'm not an expert"**: You don't need to be. Buying an Index Fund (S&P 500) beats 90% of professional experts.
*   **"The market is too high"**: Time in the market beats timing the market. Just buy.

## Part 10: Your First Step
Don't get paralyzed by analysis.
1.  Open a brokerage account (Fidelity, Vanguard, Robinhood).
2.  Link your bank account.
3.  Transfer $100.
4.  Buy 1 share of a broad market ETF (like VOO or VTI).
5.  Congratulations, you are now a capitalist. You own a piece of the global economy.
`;

const ib_2_content = `
# The Golden Rule: Risk vs. Return

In finance, there is no free lunch. If you want higher returns, you must accept higher risk. If you want safety, you must accept lower returns.
Understanding this relationship is the key to not getting scammed and not going broke.
*   **Low Risk**: Cash, Government Bonds. (Return: 3-5%).
*   **Medium Risk**: Real Estate, Blue Chip Stocks. (Return: 7-10%).
*   **High Risk**: Crypto, Startups, Penny Stocks. (Return: -100% to +1000%).

## Part 1: Defining Risk: It's Not Just Volatility
Academics define risk as "Volatility" (how much the price jumps up and down). Real investors define risk as **Permanent Loss of Capital**.
*   **Volatility**: The stock drops 20% but recovers. (This is the price of admission).
*   **Permanent Loss**: The company goes bankrupt. The stock goes to $0. (This is failure).
*   **Your Job**: Accept volatility to get growth. Avoid permanent loss to stay in the game.

## Part 2: The Risk Spectrum
Imagine a ladder.
1.  **Cash**: Risk: Inflation. Return: Low.
2.  **US Treasury Bonds**: Risk: Interest Rates. Return: Low/Medium.
3.  **Corporate Bonds**: Risk: Default. Return: Medium.
4.  **Large Cap Stocks (Apple)**: Risk: Market/Business. Return: High.
5.  **Small Cap Stocks**: Risk: High Volatility. Return: Very High.
6.  **Crypto/Options**: Risk: Total Loss. Return: Astronomical.
*   *Strategy*: Don't climb higher than you can handle.

## Part 3: Risk Tolerance: The Sleep Test
How much risk can you handle?
*   **The Test**: If the market drops 30% tomorrow, would you:
    *   A) Sell everything in panic? (Low Tolerance).
    *   B) Do nothing? (Medium Tolerance).
    *   C) Buy more? (High Tolerance).
*   **The Reality**: Everyone thinks they have high tolerance when the market is going up. The truth comes out when the market crashes.
*   **Rule**: Never invest money you need in the next 5 years in the stock market.

## Part 4: Risk Capacity: Can You Afford to Lose?
Tolerance is psychological. Capacity is financial.
*   **Scenario A**: You are 25, single, have a stable job. You have **High Risk Capacity**. If you lose money, you have 40 years to make it back.
*   **Scenario B**: You are 65, retired, living off your portfolio. You have **Low Risk Capacity**. A 50% crash ruins your life.
*   **Alignment**: Your portfolio must match your capacity, not just your tolerance.

## Part 5: Time Horizon: The Great Equalizer
Time dilutes risk.
*   **1 Day**: The stock market is a casino. It's a coin flip.
*   **1 Year**: Still risky. Could be down 20%.
*   **10 Years**: Historically, the US market has *never* lost money over a 15-year period.
*   **20 Years**: Compound interest dominates.
*   *Lesson*: If you are investing for 20 years, short-term volatility is irrelevant noise.

## Part 6: Systemic vs. Unsystematic Risk
*   **Systemic Risk (Market Risk)**: The risk that the *entire* market crashes (2008 Crisis, COVID).
    *   *Fix*: You can't diversify this away. You just have to ride it out.
*   **Unsystematic Risk (Specific Risk)**: The risk that *one specific company* fails (Enron, FTX).
    *   *Fix*: **Diversification**. If you own 500 companies and one fails, it doesn't hurt you.

## Part 7: The Sharpe Ratio: Risk-Adjusted Return
How much return are you getting for every unit of risk?
*   **Investment A**: Returns 10% with wild swings.
*   **Investment B**: Returns 10% with a smooth line.
*   **Winner**: Investment B. It has a higher Sharpe Ratio.
*   **Goal**: We want the highest return with the lowest volatility. (This is the Holy Grail).

## Part 8: Black Swans: The Unknown Unknowns
Nassim Taleb's concept.
*   **Definition**: A rare, unpredictable event that has massive consequences. (9/11, The Internet, COVID-19).
*   **The Problem**: Models based on history cannot predict Black Swans.
*   **The Defense**: Be "Antifragile." Have a cash cushion. Don't use excessive leverage. Assume the impossible can happen.

## Part 9: Managing Risk: The Toolkit
You cannot eliminate risk, but you can manage it.
1.  **Diversification**: Don't put all eggs in one basket.
2.  **Asset Allocation**: Mix stocks and bonds.
3.  **Dollar Cost Averaging (DCA)**: Buy a fixed amount every month. You buy more shares when prices are low and fewer when high.
4.  **Hedging**: Buying insurance (Options, Gold) - Advanced.

## Part 10: The Psychology of Fear
Fear causes investors to sell at the bottom. Greed causes them to buy at the top.
*   **Cycle of Emotions**: Optimism -> Euphoria (Top) -> Anxiety -> Panic (Bottom) -> Hope -> Optimism.
*   **The Contrarian**: "Be fearful when others are greedy, and greedy when others are fearful." (Buffett).
*   **Action**: Automate your investing to remove emotion from the equation.
`;

const ib_3_content = `
# The Power of Diversification

Diversification is often called "the only free lunch in investing."
Why? Because it allows you to **reduce risk** without necessarily **reducing returns**.
It is the mathematical proof that "don't put all your eggs in one basket" is the smartest strategy.

## Part 1: The Only Free Lunch
Usually, to lower risk, you must accept lower returns (like cash).
*   **The Magic**: By combining assets that don't move together (uncorrelated), you smooth out the ride.
*   **Example**:
    *   Umbrella Company does well when it rains.
    *   Sunscreen Company does well when it's sunny.
    *   If you own both, you make money whether it rains or shines. Your volatility drops, but your average return remains high.

## Part 2: Correlation: The Secret Sauce
Correlation measures how two assets move in relation to each other.
*   **+1.0 (Perfect Correlation)**: They move exactly together. (Google & Microsoft).
*   **-1.0 (Negative Correlation)**: They move opposite. (Stocks & Bonds, historically).
*   **0.0 (No Correlation)**: They are unrelated. (Stocks & Art).
*   **Goal**: You want a portfolio of assets with low or negative correlation. When one zigs, the other zags.

## Part 3: Asset Class Diversification
The first layer of defense.
*   **Stocks**: Growth engine. High risk.
*   **Bonds**: Stability engine. Low risk.
*   **Real Estate**: Inflation hedge. Uncorrelated to stocks.
*   **Gold/Commodities**: Crisis hedge.
*   **Cash**: Ultimate safety.
*   *Mix*: A 100% stock portfolio is a roller coaster. A 60% Stock / 40% Bond portfolio is a cruise ship.

## Part 4: Geographic Diversification: Home Bias
Most people only buy stocks from their own country. This is "Home Bias."
*   **The Risk**: What if the US economy stagnates for 20 years (like Japan did in 1990)?
*   **The World**: The US is only 60% of the global stock market.
*   **Solution**: Own International Stocks (Europe, Asia, Emerging Markets).
    *   *Ticker*: VXUS (Total International Stock ETF).

## Part 5: Sector Diversification
Don't just own Tech stocks.
*   **The Tech Bubble (2000)**: Tech stocks crashed 80%. Value stocks held up.
*   **The Sectors**:
    *   Technology (Growth).
    *   Healthcare (Defensive).
    *   Energy (Cyclical).
    *   Consumer Staples (Defensive - people always buy toothpaste).
    *   Financials (Cyclical).
*   **Strategy**: Buy a Total Market Index Fund. You automatically own all sectors in the right proportions.

## Part 6: Rebalancing: The Buy Low, Sell High Machine
Diversification requires maintenance.
*   **Scenario**: You start with 50% Stocks / 50% Bonds.
*   **Bull Market**: Stocks double. Now you have 70% Stocks / 30% Bonds. Your risk has increased.
*   **The Fix**: **Rebalance**. Sell some Stocks (selling high) and buy Bonds (buying low) to get back to 50/50.
*   **Magic**: This forces you to be a contrarian. You are systematically taking profits and buying undervalued assets.

## Part 7: Over-Diversification: Diworsification
Can you have too much? Yes.
*   **The Problem**: If you own 10 different Large Cap US Stock Funds, you are just owning the same companies 10 times with higher fees.
*   **Complexity**: Managing 50 different ETFs is a nightmare.
*   **The Sweet Spot**: You can achieve perfect diversification with just 3 funds (Total US Stock, Total International Stock, Total Bond).

## Part 8: The 60/40 Portfolio
The classic benchmark.
*   **Composition**: 60% Stocks (for growth), 40% Bonds (for stability).
*   **History**: It has returned about 8-9% per year with much less volatility than 100% stocks.
*   **Criticism**: With bond yields being low recently, some say "60/40 is dead."
*   **Defense**: Bonds still provide protection during crashes (flight to safety).

## Part 9: The All-Weather Portfolio
Ray Dalio's strategy for any economic environment.
*   **Theory**: There are 4 economic seasons:
    1.  Inflation.
    2.  Deflation.
    3.  High Growth.
    4.  Low Growth.
*   **The Mix**:
    *   30% Stocks (Growth).
    *   40% Long-Term Bonds (Deflation).
    *   15% Intermediate Bonds.
    *   7.5% Gold (Inflation).
    *   7.5% Commodities (Inflation).
*   **Result**: Lower returns than pure stocks, but *much* lower risk. You sleep like a baby.

## Part 10: Building Your Mix
How to choose?
1.  **Age**: Rule of thumb: % Bonds = Your Age. (If you are 30, have 30% bonds). *Modern update*: Age - 20.
2.  **Goals**: Retirement in 30 years? Go heavy on stocks (90/10). Buying a house in 5 years? Go heavy on bonds/cash (20/80).
3.  **Simplicity**: A "Target Date Fund" does all of this for you automatically. You just pick the year you retire (e.g., Target Retirement 2060).
`;

const ib_4_content = `
# Asset Classes Overview

An "Asset Class" is a group of investments that exhibit similar characteristics and behave similarly in the marketplace.
Think of them as food groups. You need a balanced diet. You can't just eat carbs (Stocks) or you'll crash. You need protein (Real Estate) and veggies (Bonds).

## Part 1: Equities (Stocks) - Ownership
*   **What it is**: You own a tiny piece of a company.
*   **Role**: Growth. This is the engine of your portfolio.
*   **Risk**: High. Prices fluctuate daily.
*   **Return**: Historically 10% average.
*   **Types**: Large Cap (Apple), Small Cap (Startups), International, Emerging Markets.

## Part 2: Fixed Income (Bonds) - Lending
*   **What it is**: You lend money to a government or company. They pay you interest (Coupon) and return your money later (Principal).
*   **Role**: Income and Stability. The shock absorber.
*   **Risk**: Low to Medium.
*   **Return**: Historically 4-6%.
*   **Types**: Treasuries (Risk-free), Corporate (Medium risk), Junk Bonds (High risk).

## Part 3: Cash & Equivalents - Safety
*   **What it is**: Money in the bank, CDs, Money Market Funds.
*   **Role**: Liquidity and Emergency Fund.
*   **Risk**: None (except Inflation).
*   **Return**: 0-5% (depends on Fed rates).
*   **Rule**: Keep 3-6 months of expenses here. Don't invest the rest.

## Part 4: Real Estate - Tangible Wealth
*   **What it is**: Land and buildings.
*   **Role**: Income (Rent), Appreciation, Inflation Hedge, Tax Benefits.
*   **Risk**: Medium. Illiquid (hard to sell).
*   **Return**: 8-12% (with leverage).
*   **Ways to buy**:
    *   Physical: Buy a rental property.
    *   REITs (Real Estate Investment Trusts): Stocks of real estate companies. Liquid and easy.

## Part 5: Commodities - Raw Materials
*   **What it is**: Physical goods used in commerce. Gold, Oil, Corn, Copper.
*   **Role**: Inflation Hedge. When money loses value, hard stuff gains value.
*   **Risk**: High. No cash flow (Gold doesn't pay dividends).
*   **Return**: Volatile. Matches inflation over centuries.
*   **Warning**: Most commodities are for trading, not long-term investing.

## Part 6: Cryptocurrencies - Digital Assets
*   **What it is**: Decentralized digital money and platforms (Bitcoin, Ethereum).
*   **Role**: Speculative Growth, Potential "Digital Gold."
*   **Risk**: Extreme. Can drop 80% in a year.
*   **Return**: Astronomical or Zero.
*   **Allocation**: Keep it small (1-5% of portfolio). It's the hot sauce, not the meal.

## Part 7: Collectibles - Passion Assets
*   **What it is**: Art, Classic Cars, Wine, Pokemon Cards, Watches.
*   **Role**: Fun, Status, Non-correlated returns.
*   **Risk**: High. Illiquid. High fees. Hard to value.
*   **Rule**: Buy it because you love it, not just to get rich. If it goes to zero, at least you have a nice painting.

## Part 8: Private Equity / Venture Capital
*   **What it is**: Investing in private companies not listed on the stock market.
*   **Role**: Massive returns (100x).
*   **Risk**: Most startups fail. Money is locked for 10 years.
*   **Access**: Usually only for "Accredited Investors" (Rich people).
*   **Democratization**: Crowdfunding platforms are opening this up.

## Part 9: Derivatives - The Casino?
*   **What it is**: Contracts whose value is derived from another asset. Options, Futures.
*   **Role**: Hedging (Insurance) or Speculation (Gambling).
*   **Risk**: Infinite. You can lose more than you invest.
*   **Warren Buffett**: Called them "Financial Weapons of Mass Destruction."
*   **Advice**: Stay away until you are an expert.

## Part 10: Choosing Your Vehicle
How do you buy these?
*   **Direct**: Buy a stock, buy a house, buy a gold bar. (High control, high effort).
*   **Funds (Mutual Funds / ETFs)**: Buy a basket of stocks/bonds. (Low effort, instant diversification).
*   **The Winner**: For 99% of people, **ETFs (Exchange Traded Funds)** are the best vehicle. They are cheap, tax-efficient, and liquid.
`;

// Execute updates
if (replaceLessonContent('ib_1', 'Why Invest?', ib_1_content, [
    "Inflation destroys cash savings.",
    "Compound interest is the engine of wealth.",
    "Start early: Time is more important than money.",
    "Invest to become an Owner, not just a Consumer."
])) console.log('Updated ib_1');

if (replaceLessonContent('ib_2', 'Risk vs. Return', ib_2_content, [
    "Higher Return requires Higher Risk.",
    "Risk = Permanent Loss, not just Volatility.",
    "Diversification eliminates Unsystematic Risk.",
    "Don't invest money you need in < 5 years."
])) console.log('Updated ib_2');

if (replaceLessonContent('ib_3', 'The Power of Diversification', ib_3_content, [
    "Diversification is the only free lunch.",
    "Combine uncorrelated assets to smooth volatility.",
    "Avoid Home Bias: Invest globally.",
    "Rebalance to buy low and sell high automatically."
])) console.log('Updated ib_3');

if (replaceLessonContent('ib_4', 'Asset Classes Overview', ib_4_content, [
    "Stocks = Growth (Ownership).",
    "Bonds = Stability (Lending).",
    "Real Estate = Tangible Wealth.",
    "ETFs are the best vehicle for most investors."
])) console.log('Updated ib_4');

fs.writeFileSync(filePath, content);
console.log('Updates for ib_1 to ib_4 complete.');
