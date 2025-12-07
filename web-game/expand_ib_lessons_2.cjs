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

    const newLesson = `"${lessonId}": {
        title: "${newTitle}",
        content: \`
${newContent}
        \`,
        keyTakeaways: [
            "${newKeyTakeaways.join('",\n            "')}"
        ]
    }`;

    const closingBrace = content.indexOf('},', keyTakeawaysEnd);
    if (closingBrace === -1) return false;

    const before = content.substring(0, lessonStart);
    const after = content.substring(closingBrace + 2);

    content = before + newLesson + after;
    return true;
}

const ib_5_content = `
# Active vs. Passive Investing: The Great Debate

This is the most important philosophical decision you will make as an investor.
Do you try to beat the market (Active)? Or do you accept the market return (Passive)?
The data is overwhelmingly on one side, but the marketing is on the other.

## Part 1: Active Investing: The Hunter
*   **Goal**: Outperform a benchmark (like the S&P 500).
*   **Method**: Picking specific stocks, timing the market, using complex strategies.
*   **Who does it**: Mutual Fund Managers, Hedge Funds, Day Traders.
*   **The Appeal**: The promise of superior returns. "Why settle for average?"
*   **The Reality**: It is extremely hard. You are competing against supercomputers and PhDs.

## Part 2: Passive Investing: The Farmer
*   **Goal**: Match the performance of the market.
*   **Method**: Buying Index Funds or ETFs that track the whole market.
*   **Who does it**: Most smart retail investors, Pension Funds.
*   **The Philosophy**: "Don't look for the needle in the haystack. Just buy the haystack." (Jack Bogle).
*   **The Appeal**: Low effort, low cost, guaranteed market returns.

## Part 3: The SPIVA Scorecard: Data Doesn't Lie
S&P Dow Jones Indices releases a report called SPIVA (S&P Indices Versus Active).
*   **The Stat**: Over a 15-year period, **90% of active fund managers fail to beat the market**.
*   **Why?**:
    1.  **Fees**: Active funds charge 1-2%. Index funds charge 0.05%. The manager has to beat the market by 2% just to break even.
    2.  **Competition**: The market is efficient. Information is instant.
*   **Conclusion**: If professionals can't beat the market, what makes you think you can?

## Part 4: Fees: The Silent Killer
Fees are the termite of wealth.
*   **Scenario**: You invest $100k for 30 years at 8% return.
    *   **Fund A (0.05% fee)**: Ending Value: **$996,000**.
    *   **Fund B (1.00% fee)**: Ending Value: **$761,000**.
*   **The Cost**: That 1% fee cost you **$235,000**.
*   **Lesson**: In investing, you get what you *don't* pay for. Low fees = High net returns.

## Part 5: Tax Efficiency
Passive funds are tax-efficient. Active funds are tax-inefficient.
*   **Turnover**: Active managers buy and sell stocks constantly. This generates Capital Gains Taxes that *you* have to pay every year.
*   **Buy and Hold**: Index funds rarely sell. You control when you pay the tax (only when you sell the fund).
*   **Drag**: Taxes can reduce your returns by another 1-2% per year in an active fund.

## Part 6: The Psychology of Picking Stocks
Why do people still pick stocks?
*   **Overconfidence Bias**: "I am smarter than the average." (80% of drivers think they are above average).
*   **Gambling Thrill**: Buying an Index Fund is boring. Buying Tesla is exciting.
*   **Lottery Ticket Effect**: We focus on the one stock that went up 1000% and ignore the 10 that went to zero.
*   **Advice**: If you must pick stocks, do it with 5% of your money ("Fun Money"). Keep 95% in boring Index Funds.

## Part 7: When Active Makes Sense
Is active investing dead? Not entirely.
*   **Inefficient Markets**: In Small Cap stocks or Emerging Markets, information is less perfect. A skilled manager *might* have an edge.
*   **Downside Protection**: Some active managers focus on not losing money during crashes (though they usually lag during bull markets).
*   **ESG**: If you want to exclude oil companies or gun manufacturers, you need an active strategy (or a specific ESG Index).

## Part 8: Core & Satellite Strategy
A hybrid approach.
*   **The Core (80-90%)**: Low-cost, broad market Index Funds (Total Stock Market, Total Bond Market). This is your safety and growth engine.
*   **The Satellite (10-20%)**: Active bets. Individual stocks, Sector ETFs, Crypto.
*   **Benefit**: You scratch the itch to trade without blowing up your financial future.

## Part 9: The Rise of Index Funds
*   **Jack Bogle**: Founder of Vanguard. Created the first Index Fund in 1976.
*   **Ridicule**: Wall Street called it "Bogle's Folly." They said it was un-American to settle for average.
*   **Victory**: Today, trillions of dollars are in Index Funds. Bogle is a hero to the retail investor. He transferred billions of dollars from Wall Street fees to Main Street pockets.

## Part 10: Conclusion: Be Lazy, Get Rich
*   **Active**: High Stress, High Fees, High Taxes, Likely Underperformance.
*   **Passive**: Zero Stress, Low Fees, Low Taxes, Guaranteed Market Performance.
*   **The Choice**: Be the casino, not the gambler. Own the market. Go enjoy your life.

## Part 11: The Zero-Sum Game Theory
*   **Concept**: For every investor who beats the market by 1%, there must be another investor who trails the market by 1% (before fees).
*   **After Fees**: Since trading costs money, the *average* active investor must underperform the market. It is a mathematical certainty.
*   **The Poker Table**: If you don't know who the patsy is at the poker table, it's you. In the stock market, the institutional algorithms are the sharks. Don't play their game.

## Part 12: The "Manager Risk"
*   **Star Managers**: Sometimes a manager beats the market for 5 years (Peter Lynch).
*   **The Fade**: Usually, they revert to the mean. Or they retire. Or they get too much money to manage and can't move nimble anymore.
*   **Reliance**: With an Index Fund, you don't rely on a human. You rely on capitalism.

## Part 13: ETF vs. Mutual Fund Structure
*   **Mutual Fund**: Priced once a day at close. Can have minimum investments ($3,000).
*   **ETF (Exchange Traded Fund)**: Trades like a stock (buy/sell anytime). No minimums (buy 1 share). More tax-efficient.
*   **Verdict**: ETFs are generally superior for most modern investors.

## Part 14: Recommended Reading
*   *The Simple Path to Wealth* by JL Collins
*   *The Little Book of Common Sense Investing* by John Bogle
*   *A Random Walk Down Wall Street* by Burton Malkiel
`;

const ib_6_content = `
# Market Participants: Who Are You Playing Against?

The stock market is an ecosystem. It is a jungle.
To survive, you need to know who the predators are, who the prey is, and where you fit in.
You are a "Retail Investor." You are a small fish. But small fish can thrive if they don't swim into the shark's mouth.

## Part 1: Retail Investors (The Dumb Money?)
*   **Who**: You, me, your grandma. Individuals trading their own money.
*   **Strengths**: No boss, no quarterly targets, can hold forever, small size allows buying small stocks.
*   **Weaknesses**: Emotional, less information, high fees (historically), prone to panic.
*   **Evolution**: With Reddit (WallStreetBets) and zero-commission apps, Retail is becoming a powerful force ("The Ape Army").

## Part 2: Institutional Investors (The Whales)
*   **Who**: Pension Funds, Mutual Funds, Insurance Companies, Endowments (Harvard).
*   **Size**: They control 80% of the market volume. When they move, the market moves.
*   **Constraints**: They have strict rules. They can't buy small stocks (too big). They have to report performance every quarter (short-termism).
*   **Advantage**: They have access to management and better research.

## Part 3: Market Makers (The House)
*   **Who**: Citadel, Virtu.
*   **Role**: They provide "Liquidity." They are always willing to buy and sell.
*   **Profit**: They make money on the "Spread" (The difference between Buy and Sell price). They don't care if the stock goes up or down. They want volume.
*   **Power**: They ensure you can sell your stock instantly.

## Part 4: Hedge Funds (The Sharks)
*   **Who**: Bridgewater, Renaissance, Pershing Square.
*   **Goal**: Absolute returns (making money in any market).
*   **Tools**: Short selling, Leverage, Derivatives, Algo trading.
*   **Fees**: "2 and 20" (2% management fee, 20% of profits).
*   **Myth**: They are all geniuses. **Reality**: Many blow up or underperform the S&P 500.

## Part 5: Central Banks (The Gods)
*   **Who**: The Federal Reserve (Fed), ECB, BOJ.
*   **Role**: They control the money supply and interest rates.
*   **Impact**: "Don't Fight the Fed." If the Fed is printing money (QE), stocks go up. If they are raising rates (QT), stocks go down.
*   **Observation**: They are the most important participant to watch.

## Part 6: High-Frequency Traders (The Machines)
*   **Who**: Algorithms running on supercomputers next to the exchange.
*   **Speed**: They trade in microseconds.
*   **Strategy**: Arbitrage, Front-running (legal version).
*   **Impact**: They provide liquidity but can cause "Flash Crashes."
*   **You**: You cannot beat them at speed. Don't try to day trade against them.

## Part 7: Insiders (The Know-It-Alls)
*   **Who**: CEOs, CFOs, Board Members.
*   **Rule**: They must report their trades to the SEC (Form 4).
*   **Signal**: If a CEO is buying their own stock with their own money, it is a very bullish signal. (They know something good is coming).
*   **Selling**: Less meaningful. They might sell just to buy a house or pay taxes.

## Part 8: Analysts (The Cheerleaders)
*   **Who**: Banks (Goldman Sachs, Morgan Stanley) issuing "Buy/Sell" ratings.
*   **Conflict**: They want to keep good relations with companies to get investment banking business.
*   **Bias**: They are overwhelmingly bullish. "Sell" ratings are rare.
*   **Utility**: Their earnings estimates matter, but their opinions are often lagging indicators.

## Part 9: Regulators (The Referees)
*   **Who**: SEC (Securities and Exchange Commission), FINRA.
*   **Role**: Protect investors, maintain fair markets, punish fraud.
*   **Power**: They can halt trading, fine companies, and ban bad actors.
*   **Reality**: They are often underfunded and slow ("The cop on the beat is asleep").

## Part 10: How to Survive in the Ocean
*   **Don't Day Trade**: You are fighting HFTs and Hedge Funds. You will lose.
*   **Play Your Game**: Your advantage is **Time**. Institutions have to show profits this quarter. You can wait 10 years.
*   **Be a Remora**: Attach yourself to the growth of the global economy (Index Funds) and let the whales push the market up.

## Part 11: The Rise of Algorithms (Algos)
*   **Dominance**: 70-80% of trading is done by computers, not humans.
*   **Behavior**: They react to keywords in news headlines instantly.
*   **Effect**: Markets move faster than ever. Volatility is higher.
*   **Defense**: Ignore short-term noise. It's just robots fighting robots.

## Part 12: The "Plunge Protection Team"
*   **Myth or Reality?**: Officially the "Working Group on Financial Markets."
*   **Purpose**: Created after the 1987 crash to coordinate response to financial crises.
*   **Conspiracy**: Some believe they secretly buy stocks to prop up the market. (Unproven, but widely discussed).

## Part 13: Dark Pools
*   **What**: Private exchanges where institutions trade large blocks of shares anonymously.
*   **Why**: To avoid moving the market price.
*   **Transparency**: Retail investors cannot see these trades until later.
*   **Fairness**: It creates a two-tiered market.

## Part 14: Recommended Movie
*   *The Big Short* (Understanding the 2008 crisis and the players involved).
*   *Margin Call* (Inside an investment bank during a crash).
`;

const ib_7_content = `
# Bull vs. Bear Markets: The Cycle of Life

The market breathes. It inhales (Bull) and exhales (Bear).
Understanding this cycle is crucial. Most people get rich in Bull markets but lose it all in Bear markets because they don't understand the cycle.
"History doesn't repeat itself, but it often rhymes." - Mark Twain.

## Part 1: Anatomy of a Bull Market
*   **Definition**: Prices are rising. Optimism is high. (Usually defined as +20% from lows).
*   **Duration**: They last longer than Bear markets (Average 5-10 years).
*   **Psychology**: Disbelief -> Hope -> Optimism -> Euphoria.
*   **Driver**: Economic growth, low interest rates, strong earnings.
*   **Danger**: At the end, people think "Stocks only go up." Valuations get insane.

## Part 2: Anatomy of a Bear Market
*   **Definition**: Prices are falling. Pessimism is high. (Defined as -20% from highs).
*   **Duration**: Short and sharp (Average 1-2 years).
*   **Psychology**: Anxiety -> Denial -> Panic -> Capitulation -> Despair.
*   **Driver**: Recession, high interest rates, bubbles bursting, external shocks (War, Pandemic).
*   **Opportunity**: "Stocks return to their rightful owners." (From the impatient to the patient).

## Part 3: Corrections vs. Crashes
*   **Correction**: A drop of 10-20%.
    *   *Frequency*: Happens every 1-2 years. Healthy. Cleans out the froth.
*   **Crash (Bear Market)**: A drop of >20%.
    *   *Frequency*: Happens every 5-10 years. Painful.
*   **Lesson**: Don't panic at a correction. It's normal.

## Part 4: History of Bear Markets
*   **1929 (Great Depression)**: -89%. Took 25 years to recover. (The worst).
*   **2000 (Dot Com Bubble)**: -50%. Tech stocks fell 80%.
*   **2008 (Financial Crisis)**: -57%. The banking system almost collapsed.
*   **2020 (COVID)**: -34%. The fastest crash in history (1 month), followed by the fastest recovery.
*   **Lesson**: Every single bear market in history has eventually been followed by a new all-time high.

## Part 5: What Causes a Bear Market?
1.  **Fed Tightening**: Raising interest rates to kill inflation. (The most common cause).
2.  **Valuation**: Prices get too high relative to earnings. Gravity takes over.
3.  **Exogenous Shocks**: War, Oil Embargo, Pandemic.
4.  **Financial Instability**: Debt bubbles bursting (2008).

## Part 6: How to Invest in a Bull Market
*   **Ride the Wave**: Stay invested. Don't sell too early.
*   **Don't Get Cocky**: You are not a genius; the market is just going up.
*   **Rebalance**: As stocks go up, they become a bigger part of your portfolio. Sell some to buy bonds/cash. This naturally takes chips off the table.
*   **Avoid FOMO**: Don't buy the hype at the top.

## Part 7: How to Invest in a Bear Market
*   **Don't Panic Sell**: This is the cardinal sin. You lock in losses.
*   **Buy the Dip**: If you have cash, deploy it. Stocks are on sale.
*   **Dollar Cost Average**: Just keep buying your fixed amount every month. You buy more shares when they are cheap.
*   **Tax Loss Harvest**: Sell losers to offset taxes.
*   **Mantra**: "This too shall pass."

## Part 8: The Recovery Shapes
*   **V-Shape**: Sharp drop, sharp recovery (2020). Best case.
*   **U-Shape**: Drop, bottom for a while, slow recovery. (Normal recession).
*   **L-Shape**: Drop, and stay down for a decade. (Japan 1990). Worst case.
*   **K-Shape**: Some sectors recover (Tech), others die (Travel). (2020 Economy).

## Part 9: Secular vs. Cyclical Markets
*   **Secular Bull**: A long-term trend (15-20 years) of rising prices (1982-2000, 2009-2021).
*   **Secular Bear**: A long-term period of stagnation (1966-1982, 2000-2009).
*   **Cyclical**: Shorter ups and downs within the big trend.
*   **Context**: Know where you are in the big picture.

## Part 10: The Trend is Your Friend
*   **Momentum**: Markets tend to trend.
*   **Don't catch a falling knife**: In a crash, wait for stabilization before going all in.
*   **Don't short a bubble**: "The market can remain irrational longer than you can remain solvent."

## Part 11: Indicators to Watch
*   **Yield Curve Inversion**: When short-term rates are higher than long-term rates. Predicts recessions with high accuracy.
*   **Buffett Indicator**: Total Stock Market Cap / GDP. If > 100%, stocks are expensive.
*   **P/E Ratio**: Price to Earnings. High P/E = Expensive.

## Part 12: The "Dead Cat Bounce"
*   **Definition**: A temporary recovery in a bear market.
*   **Trap**: Investors think the bottom is in, buy, and then the market drops again.
*   **Origin**: "Even a dead cat will bounce if you drop it from high enough."

## Part 13: Cash is King (in a Bear Market)
*   **Dry Powder**: Having cash allows you to buy when everyone is selling.
*   **Opportunity Cost**: Holding cash in a bull market is expensive. Holding cash in a bear market is strategic.
*   **Balance**: Always have some cash (Emergency Fund + Opportunity Fund).

## Part 14: Recommended Reading
*   *The Intelligent Investor* by Benjamin Graham (Chapter 8 & 20).
*   *Market Wizards* by Jack Schwager.
`;

const ib_8_content = `
# Brokerage Accounts 101: Your Gateway to Wealth

You cannot buy stocks at the grocery store. You need a Brokerage Account.
It is a special bank account that has access to the stock market.
Choosing the right one and understanding how it works is the first practical step to investing.

## Part 1: Types of Accounts
*   **Cash Account**: You can only trade with the money you have deposited.
    *   *Pros*: Safe. No debt.
    *   *Cons*: Settlement times (T+2) slow you down.
*   **Margin Account**: You can borrow money from the broker to buy stock.
    *   *Pros*: Leverage (magnify gains), Instant settlement.
    *   *Cons*: You can lose more than you deposit. Interest rates. Margin Calls.
*   **Retirement Accounts (IRA/Roth IRA)**: Tax-advantaged accounts.
    *   *Pros*: Tax breaks.
    *   *Cons*: Penalties for early withdrawal (before 59.5).

## Part 2: Full-Service vs. Discount Brokers
*   **Full-Service (Old School)**: Morgan Stanley, Merrill Lynch.
    *   *Service*: You have a human advisor. They give advice.
    *   *Cost*: High fees (1-2% of assets).
*   **Discount Brokers (The Standard)**: Fidelity, Schwab, Vanguard, E*TRADE.
    *   *Service*: DIY. Good tools.
    *   *Cost*: $0 commissions on stocks/ETFs.
*   **Fintech (The New Wave)**: Robinhood, Webull.
    *   *Service*: Gamified mobile apps.
    *   *Cost*: $0.
    *   *Warning*: They encourage frequent trading (Payment for Order Flow).

## Part 3: Robo-Advisors
*   **Who**: Betterment, Wealthfront.
*   **What**: Algorithms manage your money. You answer a quiz ("I am 30, risk-tolerant"), and they build a portfolio of ETFs for you.
*   **Cost**: 0.25% fee.
*   **Verdict**: Great for people who want to be completely hands-off but don't want to pay a human 1%.

## Part 4: Opening an Account
*   **KYC (Know Your Customer)**: Federal law requires brokers to verify your identity.
*   **Info Needed**: SSN, Address, Employment info.
*   **Funding**: Link your checking account (ACH). Takes 1-3 days to transfer.
*   **Verification**: They might ask for a photo of your ID.

## Part 5: Fees to Watch Out For
*   **Commissions**: Mostly $0 now for stocks. Still exist for Options ($0.65/contract) and Crypto.
*   **Expense Ratios**: The fee charged by the ETF/Mutual Fund itself. (Not the broker).
*   **Margin Interest**: If you borrow money, you pay interest (can be 8-13%!).
*   **Inactivity Fees**: Rare now, but check.
*   **ACATS Fee**: Fee to transfer your account to another broker ($75).

## Part 6: SIPC Insurance
*   **What**: Securities Investor Protection Corporation.
*   **Protection**: If your broker goes bankrupt (like FTX, but for stocks), SIPC protects your assets up to $500,000 (including $250k cash).
*   **Note**: It does NOT protect against market loss. If you buy a bad stock and it goes to zero, SIPC does nothing. It only protects against *broker failure*.

## Part 7: Margin Trading: Playing with Fire
*   **Leverage**: You put up $5k, borrow $5k, buy $10k of stock.
*   **Upside**: Stock goes up 10%. You make $1k. Return on your cash = 20%. (Double gain).
*   **Downside**: Stock goes down 10%. You lose $1k. Return on your cash = -20%. (Double loss).
*   **Margin Call**: If stock drops too much, the broker sells your stock *without asking you* to cover the loan. You can lose everything.

## Part 8: Pattern Day Trader (PDT) Rule
*   **The Rule**: If you have less than $25,000 in a margin account, you cannot make more than 3 "Day Trades" in a rolling 5-day period.
*   **Day Trade**: Buying and selling the same stock in the same day.
*   **Penalty**: Account locked for 90 days.
*   **Workaround**: Use a Cash Account (but wait for settlement) or have >$25k.

## Part 9: Transferring Assets (ACATS)
*   **Scenario**: You want to switch from Robinhood to Fidelity.
*   **Don't Sell**: If you sell, you trigger taxes.
*   **ACATS**: Automated Customer Account Transfer Service.
*   **Process**: You tell Fidelity to pull your assets from Robinhood. The stocks move over "in-kind" (as stocks). No tax event.

## Part 10: Choosing the Right Broker
*   **For Traders**: Thinkorswim (Schwab), Webull, Interactive Brokers. (Great charts, speed).
*   **For Investors**: Fidelity, Vanguard. (Great customer service, fractional shares, research).
*   **For Beginners**: Robinhood, Public. (Easy UI, but be careful of gamification).

## Part 11: Fractional Shares
*   **Revolution**: You used to need $3,000 to buy 1 share of Amazon.
*   **Now**: You can buy $1 of Amazon.
*   **Benefit**: Allows small investors to diversify instantly.
*   **Availability**: Not all brokers offer this (Fidelity and Robinhood do).

## Part 12: DRIP (Dividend Reinvestment Plan)
*   **Feature**: When you get a dividend, the broker automatically uses it to buy more shares of that stock.
*   **Power**: Accelerates compound interest.
*   **Setting**: Turn this "ON" for long-term growth.

## Part 13: Order Flow (PFOF)
*   **Controversy**: "Free" brokers sell your order data to Market Makers (Citadel).
*   **Impact**: You might get a slightly worse price on your trade (pennies).
*   **Trade-off**: It allows zero commissions. For long-term investors, it doesn't matter. For day traders, it matters.

## Part 14: Security
*   **2FA**: Enable Two-Factor Authentication immediately. Your life savings are in there.
*   **Beneficiaries**: Designate a beneficiary. If you die, the money goes to them directly, bypassing probate court.
`;

// Execute updates
if (replaceLessonContent('ib_5', 'Active vs. Passive Investing', ib_5_content, [
    "Passive Investing beats Active Investing 90% of the time.",
    "Fees and Taxes are the enemies of wealth.",
    "Index Funds are the best tool for most people.",
    "Be the Casino, not the Gambler."
])) console.log('Updated ib_5');

if (replaceLessonContent('ib_6', 'Market Participants', ib_6_content, [
    "Retail Investors are small fish; avoid the sharks.",
    "Institutions control the market.",
    "Don't fight the Fed.",
    "Time is your biggest advantage over Wall Street."
])) console.log('Updated ib_6');

if (replaceLessonContent('ib_7', 'Bull vs. Bear Markets', ib_7_content, [
    "Bull Markets are for making money; Bear Markets are for creating wealth.",
    "Don't panic sell in a crash.",
    "Corrections are normal and healthy.",
    "History shows the market always recovers."
])) console.log('Updated ib_7');

if (replaceLessonContent('ib_8', 'Brokerage Accounts 101', ib_8_content, [
    "Choose a Discount Broker with $0 fees.",
    "Avoid Margin unless you are an expert.",
    "SIPC protects against broker failure, not market loss.",
    "Enable DRIP to compound automatically."
])) console.log('Updated ib_8');

fs.writeFileSync(filePath, content);
console.log('Updates for ib_5 to ib_8 complete.');
