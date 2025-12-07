const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');
const lines = fileContent.split('\n');

// We want to replace lines 366 to 538 (1-based)
// In 0-based index: 365 to 537
const startLineIndex = 365;
const endLineIndex = 538; // Slice is exclusive at end, so 538 means up to 537

const newContent = `    "ff_4": {
        title: "Compound Interest Magic",
        content: \`
# The 8th Wonder of the World

Albert Einstein reportedly said: *"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it."*

Compound interest is the force that explains how a snowflake becomes an avalanche, how a virus becomes a pandemic, and how a middle-class worker becomes a multi-millionaire. It is exponential growth in action.

## Part 1: Linear vs. Exponential (The Human Flaw)
Human brains are wired for linear thinking.
*   **Linear**: 1, 2, 3, 4, 5. (Walking).
*   **Exponential**: 1, 2, 4, 8, 16, 32. (Viral spread).
*   **The Paper Fold**: If you fold a piece of paper 42 times, how thick is it?
    *   Most people guess "a few feet" or "a building."
    *   **Answer**: It would reach the Moon. That is the power of doubling.

## Part 2: The Hockey Stick Effect
*   **The Penny Challenge**: Would you rather have $1 million today, or a magic penny that doubles every day for 30 days?
    *   Day 1: $0.01
    *   Day 10: $5.12 (You regret your choice).
    *   Day 20: $5,242 (You still look foolish).
    *   Day 29: $2,684,354.
    *   Day 30: **$5,368,709**.
*   **The Lesson**: The growth is slow and boring at the start. All the magic happens at the very end. This is why patience is the hardest part of investing. You have to suffer through the "boring years" to get to the "magic years."

## Part 3: The Rule of 72
A mental math hack to instantly calculate the power of compounding.
*   **Formula**: $72 / Interest Rate = Years to Double$.
*   **Example A (Savings Account)**: 0.5% interest. $72 / 0.5 = 144$ years to double. (Useless).
*   **Example B (S&P 500)**: 10% return. $72 / 10 = 7.2$ years to double.
*   **Example C (Credit Card Debt)**: 24% interest. $72 / 24 = 3$ years for your debt to double.

## Part 4: The Three Levers of Wealth
You can control three variables in the compounding formula:

### 1. Principal (How much you save)
This is important in the beginning. You need "seed capital."
*   *Strategy*: Increase your income (Side hustles, career growth) and decrease expenses.
*   *The First $100k*: Charlie Munger said, "The first $100,000 is a b*tch, but you gotta do it." Once you have that snowball, it rolls itself.

### 2. Rate of Return (r)
This is the accelerator.
*   **Safe Assets (Bonds)**: 4-5% return. Doubles every 16 years.
*   **Growth Assets (Stocks)**: 8-10% return. Doubles every 7 years.
*   **Speculative Assets (Crypto)**: High potential, but high risk of reaching 0%.
*   *Warning*: Chasing too high a return often leads to ruin. Consistency beats intensity.

### 3. Time (t) - The Superpower
This is the most powerful variable.
*   **Warren Buffett**: He is worth $100 Billion. He accumulated **99%** of that wealth *after* his 50th birthday. He started investing at age 11.
*   **The Cost of Waiting**:
    *   **Jack**: Invests $500/mo from age 25 to 35. Then stops. (Total invested: $60k).
    *   **Jill**: Waits until 35. Invests $500/mo from age 35 to 65. (Total invested: $180k).
    *   **Winner**: **Jack wins**. Even though he invested 3x less money, his money had 10 extra years to compound.

## Part 5: The "Latte Factor" vs. The Big Wins
David Bach coined the "Latte Factor"—saving $5 a day on coffee.
*   $5/day = $150/month.
*   Invested at 10% for 40 years = **$948,000**.
*   That coffee is costing you a million dollars.
*   *Counterpoint*: Don't make yourself miserable. It's better to focus on earning more than pinching pennies. But the math remains true: Small, consistent habits create massive results.

## Part 6: Coast FIRE
This is a powerful concept for young people.
*   **The Idea**: Save aggressively in your 20s until your "snowball" is big enough to grow into a full retirement fund by itself.
*   **Example**: You save $200k by age 30. You stop saving completely.
*   At 7% return, that $200k grows to **$1.5 Million** by age 60 without you adding another cent.
*   **The Benefit**: You can switch to a lower-paying, lower-stress job just to cover your living expenses, knowing your retirement is already secured.

## Part 7: The Dark Side: Reverse Compounding
Compound interest is a double-edged sword.
*   **The Trap**: Credit card debt is "Reverse Compounding." The interest grows exponentially against you.
*   **Minimum Payments**: These are designed to keep you in debt forever. They usually cover only the interest, so the principal never goes down.
*   **Rule**: Never invest while you have high-interest debt (15%+). There is no investment that guarantees 15% returns. Paying off the debt is a guaranteed 15% return.

## Part 8: Tax-Advantaged Growth
Taxes are a drag on compounding. If you lose 30% of your gains to taxes every year, the snowball melts.
*   **Taxable Account**: You pay taxes on dividends and capital gains every year.
*   **Tax-Advantaged (IRA/401k)**: You pay zero taxes while the money grows.
*   **The Difference**: Over 30 years, the tax-free account can be worth **30-40% more** just because you didn't interrupt the compounding with tax payments.

## Part 9: The Trinity Study (The 4% Rule)
How do you know when you have enough to retire?
*   **The Study**: In 1998, professors at Trinity University studied stock/bond portfolios over every 30-year period since 1925.
*   **The Result**: If you withdraw **4%** of your initial portfolio value each year (adjusted for inflation), you have a 95% chance of *never* running out of money.
*   **The FIRE Number**: Annual Expenses x 25.
    *   Spend $40k/year? You need $1 Million.
    *   Spend $100k/year? You need $2.5 Million.

## Part 10: Sequence of Returns Risk
The *order* of your returns matters, especially when you start withdrawing.
*   **Scenario A**: Market drops 20% the year you retire. You withdraw 4%. Your portfolio is now down 24%. It needs a massive rally just to get back to even. You might run out of money.
*   **Scenario B**: Market rises 20% the year you retire. You withdraw 4%. Your portfolio is still up 16%. You are set for life.
*   **The Hedge**: This is why you need a "Cash Cushion" (1-2 years of expenses) so you don't have to sell stocks during a crash.

## Part 11: Die With Zero
A counter-argument to endless compounding.
*   **The Concept**: If you die with $5 Million, you worked for free for years. You traded your life energy for money you never used.
*   **The Goal**: Maximize *life experiences*, not just the number in your bank account.
*   **The Balance**: Use compounding to buy freedom, but don't become a miser who eats cat food to die the richest person in the graveyard.

## Part 12: The Math of Consistency (Table)
Investing $500/month at 8% return:
*   Year 1: $6,200
*   Year 5: $36,000
*   Year 10: $91,000
*   Year 20: $296,000
*   Year 30: $745,000
*   Year 40: **$1,745,000**
Notice that the last 10 years added $1 Million, while the first 10 years added only $91k. Stay the course.

## Part 13: The Psychology of Saving (Hedonic Adaptation)
Why is it hard to save?
*   **Hedonic Adaptation**: When you get a raise, you buy a nicer car. For 2 weeks, you are happy. Then, the new car becomes "normal." You are no happier than before, but now you have a higher monthly payment.
*   **The Trap**: This is the "Lifestyle Creep."
*   **The Fix**: When you get a raise, save 100% of the difference. Keep your lifestyle the same. You won't miss the money you never saw.

## Part 14: The Rule of 100 (Asset Allocation)
How much should you invest in stocks vs. bonds?
*   **Old Rule**: 100 - Age = % in Stocks.
    *   If you are 30: 70% Stocks, 30% Bonds.
*   **New Rule (Longer Life Expectancy)**: 120 - Age = % in Stocks.
    *   If you are 30: 90% Stocks, 10% Bonds.
*   **Why the shift?**: People are living longer. You need your money to grow for 30 years *after* you retire, so you need more stocks (growth) and fewer bonds (safety).

## Conclusion
You don't need to be a genius to get rich. You need a plan, and you need **Time**. The biggest mistake young people make is thinking they don't have enough money to start. You don't need money to start; you need to start to get money. Plant the tree today.
        \`,
        keyTakeaways: [
            "Compound interest is exponential growth (The Hockey Stick).",
            "Rule of 72: 72 / Rate = Years to Double.",
            "Time is the most powerful variable. Start as early as possible.",
            "The 'Penny Doubling' analogy shows that most growth happens at the end.",
            "Debt is reverse compounding; pay it off before investing."
        ]
    },
    "ff_5": {
        title: "Central Banks & Monetary Policy",
        content: \`
# The Architects of the Global Economy

Central banks are the most powerful financial institutions in the world. They are the "banks for banks" and the guardians of a country's currency. They operate in the shadows, but their decisions determine the price of your mortgage, the value of your savings, and whether you have a job next year.

## Part 1: Who Are They?
*   **USA**: The Federal Reserve ("The Fed"). The most important bank on Earth because the US Dollar is the global reserve currency.
*   **Europe**: European Central Bank (ECB).
*   **Japan**: Bank of Japan (BOJ).
*   **China**: People's Bank of China (PBOC).
*   **Independence**: Most central banks are supposed to be "independent" from politics. Politicians always want to print money to win votes; Central Bankers are supposed to be the adults in the room who say "no."

## Part 2: The Origin Story (Jekyll Island)
The Fed wasn't always here.
*   **Pre-1913**: The US had no central bank. Panics and bank runs were common.
*   **1910**: A secret meeting was held on Jekyll Island, Georgia, by the most powerful bankers (Morgan, Rockefeller, Warburg). They drafted the plan for the Federal Reserve System.
*   **1913**: The Federal Reserve Act was passed.
*   **The Goal**: To provide a "Lender of Last Resort" to stop bank runs and stabilize the currency.

## Part 3: The Dual Mandate: A Balancing Act
Congress gave the Fed two specific goals:
1.  **Maximum Employment**: Keep the unemployment rate as low as possible.
2.  **Stable Prices**: Keep inflation under control (Target: 2%).

**The Conflict**: These two goals often fight each other.
*   To lower unemployment, the Fed lowers rates (stimulus). But this causes inflation.
*   To lower inflation, the Fed raises rates (tightening). But this causes unemployment.
*   The Fed is constantly walking a tightrope between Recession and Inflation.

## Part 4: The Toolkit: How They Control Money
Central banks don't set the price of milk, but they control the supply and price of the money that buys the milk.

### 1. Interest Rates (The Hammer)
*   **Discount Rate**: The rate at which banks borrow from the Fed.
*   **Effect**: When the Fed raises rates, banks raise rates for you (mortgages, car loans). This sucks money out of the economy, slowing it down.
*   **The Lag**: Rate hikes take 12-18 months to fully impact the economy. It's like steering a Titanic; you turn the wheel today, but the ship turns next year.

### 2. Open Market Operations (QE & QT)
*   **Quantitative Easing (QE)**: The Fed prints digital money and buys government bonds from banks.
    *   **Result**: Banks are flooded with cash -> Interest rates fall -> Stock market goes up. (Used during 2008 and 2020 crises).
    *   **Criticism**: It creates asset bubbles and increases wealth inequality (rich people own the assets that go up).
*   **Quantitative Tightening (QT)**: The Fed sells bonds and deletes the cash it receives.
    *   **Result**: Money supply shrinks -> Interest rates rise -> Markets often fall.

### 3. Reserve Requirements
*   The Fed tells banks how much cash they must keep in the vault overnight.
*   **Lower Requirement**: Banks lend more (Stimulus).
*   **Higher Requirement**: Banks lend less (Tightening).

### 4. Forward Guidance (The Mouth)
*   Sometimes the Fed doesn't even need to act; they just need to *speak*. If the Fed Chair says "We might raise rates next year," the market reacts immediately.

## Part 5: Hawks vs. Doves: Decoding the Language
You will hear these terms daily in financial news.
*   **Hawk (Like a predator)**: Worried about inflation. Wants to **raise rates**. "Tight" monetary policy. Bad for stocks, good for the dollar.
*   **Dove (Peaceful)**: Worried about unemployment. Wants to **lower rates**. "Loose" monetary policy. Good for stocks, bad for the dollar.

## Part 6: The "Fed Put": A Dangerous Safety Net
A controversial belief among traders that the Fed will always step in to save the stock market if it crashes too hard (by cutting rates or doing QE).
*   **Moral Hazard**: This encourages risky behavior because investors feel they have a safety net. "Heads I win, Tails the taxpayer bails me out."
*   **The Limit**: The Fed can only save the market if inflation is low. If inflation is high, they *cannot* print money to save stocks, or they will destroy the currency.

## Part 7: The Eurodollar System (Shadow Banking)
There is a massive market of US Dollars *outside* the United States that the Fed doesn't control.
*   **Eurodollars**: Dollars held in banks in London, Tokyo, or Cayman Islands.
*   **The Size**: Estimated to be larger than the domestic US money supply.
*   **The Risk**: When there is a shortage of dollars globally, foreign banks scramble to buy dollars, causing the dollar value to spike and crashing emerging market economies.

## Part 8: The Triffin Dilemma (The Curse of the Reserve Currency)
Being the World Reserve Currency is a double-edged sword.
*   **The Paradox**: To provide the world with enough dollars for trade, the US must run massive trade deficits (buy more than it sells).
*   **The Result**: The US manufacturing base hollows out because it's cheaper to import goods with strong dollars. The US becomes a nation of consumers, not producers.
*   **The End Game**: Eventually, the debt becomes too large, and confidence in the dollar collapses. This is the historical cycle of all reserve currencies (Dutch Guilder, British Pound).

## Part 9: The Petrodollar System
Why does the world need dollars?
*   **The Deal**: In the 1970s, the US made a deal with Saudi Arabia. "We protect you militarily; you price oil exclusively in US Dollars."
*   **The Effect**: Every country needs oil. To buy oil, they need dollars. To get dollars, they must sell goods to the US. This creates artificial demand for the dollar and allows the US to print money without immediate hyperinflation.
*   **The Crack**: Recently, countries like China and Russia have started trading oil in Yuan and Rubles, threatening this system.

## Part 10: Modern Monetary Theory (MMT)
A new, controversial economic theory gaining popularity.
*   **The Idea**: A government that prints its own currency can never go bankrupt. It can print as much as it wants to pay for healthcare, jobs, etc.
*   **The Constraint**: The only limit is **Inflation**. If they print too much, prices rise.
*   **The Solution**: If inflation gets too high, the government should raise taxes to suck money out of the economy.
*   **Critique**: Politicians love the "printing" part but hate the "raising taxes" part. MMT critics say it is a recipe for hyperinflation.

## Part 11: The Death of Gold (A Timeline)
*   **1933**: FDR issues Executive Order 6102, making it illegal for US citizens to own gold. He confiscates it to devalue the dollar during the Depression.
*   **1944**: Bretton Woods Agreement. The world pegs currencies to the Dollar, and the Dollar is pegged to Gold ($35/oz).
*   **1971**: The Nixon Shock. France demands gold for its dollars. Nixon "temporarily" suspends the convertibility of dollars to gold. The link is broken. We enter the era of pure Fiat Money.

## Part 12: CBDCs: The Future of Money?
Central Bank Digital Currencies are the next frontier.
*   **What**: A digital dollar issued directly by the Fed to your phone wallet.
*   **Pros**: Instant payments, easier stimulus distribution.
*   **Cons**: Total surveillance. The government could theoretically program the money to expire, or block you from buying certain items. It is the ultimate tool of control.

## Conclusion
"Don't Fight the Fed." It is the golden rule of trading. If the Fed is printing money, buy everything. If the Fed is sucking money out, cash is king. Watch the liquidity flows, not just the headlines.
        \`,
        keyTakeaways: [
            "Central banks control the money supply and interest rates.",
            "They balance the conflicting goals of low unemployment and low inflation.",
            "QE (Money Printing) pushes asset prices up; QT pushes them down.",
            "Hawks want high rates; Doves want low rates.",
            "The 'Fed Put' is the belief that the central bank will rescue the stock market."
        ]
    },
    "ff_6": {
        title: "Economic Cycles",
        content: \`
# The Pulse of the Market

The economy is not a straight line up. It breathes. It expands and contracts. It booms and busts. These are **Economic Cycles**. Understanding where we are in the cycle is the difference between buying at the bottom and buying at the top.

## Part 1: The Short-Term Debt Cycle (5-8 Years)
This is the standard "Business Cycle" you hear about on the news.
1.  **Expansion**: Credit is cheap. People borrow and spend. Businesses hire. Stocks go up.
2.  **Peak**: Inflation rises. The Central Bank raises rates to cool it down.
3.  **Contraction (Recession)**: Borrowing becomes expensive. Spending drops. Businesses fire people. Stocks crash.
4.  **Trough**: The Central Bank cuts rates to restart the engine.
5.  **Repeat**: This happens every 5-8 years. (2000, 2008, 2020).

## Part 2: The Long-Term Debt Cycle (75-100 Years)
This is the big one. It happens once in a lifetime.
*   **The Buildup**: Over many short-term cycles, debts get bigger and bigger. People forget the last depression.
*   **The Peak**: Debt becomes too massive to ever be paid back (e.g., 1929, 2008). Interest rates hit 0%, so the Central Bank can't cut them anymore.
*   **The Deleveraging**: The bubble bursts.
    *   **Ugly Deleveraging**: Mass defaults, austerity, riots, depression (1930s).
    *   **Beautiful Deleveraging**: The government prints enough money to inflate away the debt without causing hyperinflation (2008-2020).

## Part 3: The Four Seasons of the Economy
Ray Dalio breaks the economy into four quadrants based on Growth and Inflation.
1.  **Goldilocks (Growth Up, Inflation Down)**: The best time. Stocks soar. (The 1990s).
2.  **Reflation (Growth Up, Inflation Up)**: Commodities and Real Estate do well.
3.  **Stagflation (Growth Down, Inflation Up)**: The nightmare scenario. Cash and Commodities are king. (The 1970s).
4.  **Deflationary Bust (Growth Down, Inflation Down)**: Bonds are the best asset. Stocks get crushed. (2008).

## Part 4: The Psychology of Cycles
Cycles are driven by human nature.
*   **Greed**: When things are good, we assume they will be good forever. We borrow to buy more. This creates the bubble.
*   **Fear**: When things go bad, we assume they will be bad forever. We sell everything. This creates the crash.
*   **The Minsky Moment**: Hyman Minsky famously said, "Stability leads to instability." When the economy is stable, people take more risks, which eventually causes the crash.

## Part 5: Leading vs. Lagging Indicators
How do you know where we are?
*   **Leading Indicators (The Future)**: Stock Market, Building Permits, Yield Curve. These turn *before* the economy turns.
*   **Lagging Indicators (The Past)**: Unemployment Rate, CPI (Inflation). These turn *after* the economy has already turned.
    *   *Mistake*: Waiting for unemployment to rise before selling stocks. By the time unemployment rises, the market has already crashed.

## Part 6: The Kondratiev Wave (The Tech Cycle)
A 50-60 year cycle driven by technological revolution.
1.  **Steam Engine & Textiles** (1780-1830).
2.  **Railways & Steel** (1830-1880).
3.  **Electricity & Chemicals** (1880-1930).
4.  **Automobiles & Petrochemicals** (1930-1970).
5.  **Information Technology** (1970-Present).
6.  **The Next Wave?**: AI, Biotech, Green Energy.

## Part 7: The Real Estate Cycle (18 Years)
Land has its own rhythm, usually lasting 18 years.
*   **Recovery**: Vacancies fall, rents stabilize.
*   **Expansion**: Rents rise, new construction begins.
*   **Hypersupply**: Too many cranes in the sky. Vacancies rise, but prices are still high.
*   **Recession**: Prices crash. Developers go bankrupt.
*   *Note*: The 2008 crash fit this cycle perfectly (18 years after the 1990 crash).

## Part 8: The Inventory Cycle (Kitchin Cycle)
A short 3-5 year cycle driven by businesses stocking up.
1.  Companies overestimate demand and order too much inventory.
2.  They stop ordering to clear the shelves.
3.  Factories slow down (mini-recession).
4.  Shelves get empty, they order again.

## Conclusion
"History doesn't repeat itself, but it often rhymes." - Mark Twain. You cannot predict the future, but you can prepare for it. If you know it's winter, you don't plant seeds; you put on a coat.
        \`,
        keyTakeaways: [
            "The economy moves in cycles, not a straight line.",
            "Short-term debt cycles last 5-8 years; Long-term cycles last 75-100 years.",
            "Leading indicators (Stocks, Yield Curve) predict the future; Lagging indicators (Unemployment) confirm the past.",
            "Human psychology (Greed and Fear) drives the boom and bust.",
            "Different assets perform better in different 'seasons' (Inflation vs Deflation)."
        ]
    },
    "ff_7": {
        title: "GDP & Economic Indicators",
        content: \`
# The Global Dashboard: Reading the Economic Weather

Imagine you are the pilot of a massive 747 jet (the Global Economy). You can't see outside because it's cloudy. How do you fly? You trust your instruments.

In finance, these instruments are called **Economic Indicators**. They tell us if we are flying high, stalling, or about to crash into a mountain. Traders who ignore these instruments fly blind—and usually crash.

## Part 1: GDP: The Economy's Scorecard
**Gross Domestic Product** is the "score" of the economy. It measures the total value of everything produced in a country.
*   **The Formula**: $GDP = C + I + G + (NX)$
    *   **C (Consumption)**: 70% of the US economy. You buying coffee, iPhones, and haircuts. If the consumer stops spending, the plane stalls.
    *   **I (Investment)**: Businesses buying factories, software, and robots.
    *   **G (Government)**: Building bridges, paying the military.
    *   **NX (Net Exports)**: What we sell to the world minus what we buy.
*   **How to Read It**:
    *   **+3%**: Cruising altitude. Healthy growth.
    *   **+5%**: Afterburners. Overheating risk (Inflation).
    *   **Negative**: Losing altitude. Two quarters of this = **Recession**.

## Part 2: Jobs: The Engine of Growth
Every first Friday of the month, the world stops for the **NFP (Non-Farm Payrolls)** report.
*   **The Question**: Are businesses hiring?
*   **The Logic**: Jobs -> Wages -> Spending -> Corporate Profits -> Higher Stock Prices.
*   **The Paradox ("Bad News is Good News")**:
    *   Sometimes, a *weak* jobs report makes stocks go *up*.
    *   *Why?* Because if the economy is weak, the Federal Reserve might cut interest rates (stimulus). Traders love cheap money more than they love a strong economy.

## Part 3: Inflation: The Temperature Gauge
Is the engine overheating?
*   **CPI (Consumer Price Index)**: Measures the price of a basket of goods (Milk, Gas, Rent).
*   **PCE (Personal Consumption Expenditures)**: The Fed's favorite measure. It adjusts for when people switch from expensive steak to cheaper chicken.
*   **The Danger Zone**: If this gauge goes above 2%, the Fed hits the brakes (raises interest rates). If it hits 9% (like in 2022), they slam the brakes, sending passengers (investors) flying.

## Part 4: Consumer Confidence Index (CCI)
This measures how "optimistic" people are.
*   **Why it matters**: Since consumption is 70% of GDP, if people *feel* poor, they stop spending, and the economy crashes.
*   **Self-Fulfilling Prophecy**: If everyone thinks a recession is coming, they stop spending, which *causes* the recession.

## Part 5: Retail Sales
This is the hard data of what people are actually buying.
*   **Strong Retail Sales**: Companies are making money. Stock prices go up.
*   **Weak Retail Sales**: Warning sign.
*   **The Amazon Effect**: Online sales are taking a bigger chunk every year.

## Part 6: Durable Goods Orders
Orders for long-lasting goods (planes, appliances, machinery).
*   **Significance**: You don't buy a new washing machine or a Boeing 737 if you think the economy is about to tank.
*   **Leading Indicator**: A drop in durable goods often precedes a recession by 6-12 months.

## Part 7: The VIX (The Fear Index)
The **Volatility Index** measures how much traders expect the stock market to move in the next 30 days.
*   **VIX < 15**: Calm waters. Complacency. (Good for stocks).
*   **VIX > 30**: Panic. Fear. (Stocks usually crashing).
*   **VIX > 80**: The world is ending (2008, 2020). This is usually the best time to buy.

## Part 8: The Baltic Dry Index (BDI)
A measure of the cost to ship raw materials (iron ore, grain) across the ocean.
*   **Why it's cool**: It is pure supply and demand. You can't fake shipping volume.
*   **Rising BDI**: Global trade is booming. Factories are ordering raw materials.
*   **Falling BDI**: Global trade is slowing down.

## Part 9: Predicting the Future: Leading Indicators
GDP and Unemployment tell you what *already* happened (Lagging). You want to know what *will* happen.
1.  **The Yield Curve**: When short-term bonds pay more than long-term bonds, a recession is coming. It has predicted 10 out of the last 10 recessions.
2.  **PMI (Purchasing Managers' Index)**: We ask factory managers: "Are you ordering more raw materials?" If they say "No," a recession is starting *now*, even if the GDP looks fine.
3.  **Building Permits**: You can't build a house overnight. If permits drop today, construction jobs drop in 6 months.

## Case Study: The 2008 Crash
*   **2006**: Housing prices peaked and started falling. (Leading Indicator).
*   **2007**: Subprime lenders started going bankrupt. (Credit Spreads widened).
*   **2008**: GDP turned negative. (Lagging Indicator).
*   **Lesson**: The stock market peaked in late 2007, *after* housing had already cracked. If you watched the leading indicators, you had time to eject.

## Conclusion
You don't need to be an economist. Just watch the Big Three: **GDP** (Growth), **Jobs** (Fuel), and **Inflation** (Heat). If Growth slows while Inflation rises, we enter **Stagflation**—the worst weather imaginable.
        \`,
        keyTakeaways: [
            "GDP is the scorecard; Consumption is 70% of the US score.",
            "Leading indicators (Yield Curve, PMI) predict the future; Lagging indicators (Unemployment) confirm the past.",
            "The 'Bad News is Good News' phenomenon occurs when traders hope for rate cuts.",
            "Stagflation (Low Growth + High Inflation) is the nightmare scenario."
        ]
    },
    "ff_8": {
        title: "Assets vs. Liabilities",
        content: \`
# The Wealth Equation: A New Way to See Money

Most people think "Wealth = High Income." This is false.
* Mike Tyson earned $400 million and went bankrupt.
* A janitor in Vermont died with $8 million in the bank.
**Wealth is not what you make; it's what you keep.** And what you keep depends on understanding the difference between an Asset and a Liability.

## Part 1: Redefining Wealth: Cash Flow is King
Accountants define assets as "things you own." This is dangerous.
*   **Rich Dad's Definition**:
    *   **Asset**: Anything that puts money **IN** your pocket (Cash Flow).
    *   **Liability**: Anything that takes money **OUT** of your pocket (Expenses).

## Part 2: The House Trap: Asset or Liability?
Ask a banker, and they say "Yes." Ask a wealthy investor, and they say "No."
*   **The Math**:
    *   Mortgage: -$2,000/mo
    *   Property Tax: -$500/mo
    *   Insurance: -$200/mo
    *   Maintenance: -$300/mo
    *   **Total Cash Flow**: -$3,000/mo.
*   **Verdict**: It is a **Liability**. It eats cash.
*   **The Exception**: If you rent it out and the rent covers all expenses + profit, *then* it becomes an Asset.

## Part 3: Tale of Two Investors: Doctor vs. Janitor
Let's look at two balance sheets.

### Dr. High Roller (Income: $250k/year)
*   **Assets**: None. (He thinks his Porsche is an asset).
*   **Liabilities**: $1M Mortgage, $100k Student Loans, $80k Car Loan, Country Club Membership.
*   **Cash Flow**: $0. (He spends every penny to maintain his lifestyle).
*   **Status**: **Poor**. He is one paycheck away from ruin. He is on the "Hedonic Treadmill."

### Janitor Joe (Income: $40k/year)
*   **Assets**: $500k in Dividend Stocks (accumulated over 40 years), a small Rental Property ($1k/mo profit).
*   **Liabilities**: None. (Paid off his small house, drives a 10-year-old truck).
*   **Cash Flow**: $2,500/mo from assets + Salary.
*   **Status**: **Wealthy**. If he gets fired, he can survive forever on his asset income.

## Part 4: The 4 Pillars of Riches
1.  **Business**: You own a system that makes money without you. (Highest risk, highest return).
2.  **Real Estate**: You own land/buildings that pay rent. (Tax advantages + Leverage).
3.  **Paper Assets**: Stocks, Bonds, ETFs. (Liquid, easy to buy).
4.  **Commodities**: Gold, Silver, Oil, Bitcoin. (Hedges against inflation, but no cash flow).

## Part 5: The Freedom Formula
Financial Freedom is a simple math equation:
$$Passive Income > Living Expenses$$
Once your assets pay for your life, you are free. You don't have to work. You work because you *want* to.

## Conclusion
Stop buying liabilities to look rich. Start buying assets to *be* rich. The first step is to audit your life: Look at every expense and ask, "Is this making me money, or costing me money?"
        \`,
        keyTakeaways: [
            "Asset = Cash Flow In. Liability = Cash Flow Out.",
            "Your home is a liability unless it pays you rent.",
            "High income does not equal wealth; Net Worth and Cash Flow equal wealth.",
            "Financial Freedom is when Passive Income exceeds Living Expenses.",
            "The 4 Asset Classes: Business, Real Estate, Paper Assets, Commodities."
        ]
    },
`;

const newLines = newContent.split('\n');

// Insert new lines
lines.splice(startLineIndex, endLineIndex - startLineIndex, ...newLines);

const finalContent = lines.join('\n');
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('File updated successfully.');
