const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

function replaceLessonContent(lessonId, newTitle, newContent, newKeyTakeaways) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) return false;

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

const ib_9_content = `
# Order Types: How to Speak to the Market

When you click "Buy," you are sending a message to the market.
How you phrase that message determines the price you get and whether the trade happens at all.
Using the wrong order type can cost you thousands of dollars in "Slippage."

## Part 1: The Order Book
*   **The Marketplace**: Imagine a bulletin board.
*   **Bids**: Buyers posting "I will buy Apple for $150."
*   **Asks**: Sellers posting "I will sell Apple for $150.05."
*   **The Spread**: The difference ($0.05).
*   **Matching**: A trade happens when a buyer agrees to pay the Ask, or a seller agrees to hit the Bid.

## Part 2: Market Order (Speed)
*   **Instruction**: "Buy it NOW at whatever price is available."
*   **Pros**: Guaranteed execution. You get the stock immediately.
*   **Cons**: No price guarantee. If the market is moving fast, you might pay $155 instead of $150.
*   **Use Case**: When you need to get in or out *right now* and don't care about a few cents.

## Part 3: Limit Order (Price)
*   **Instruction**: "Buy it ONLY if the price is $150 or lower."
*   **Pros**: Price guarantee. You never pay more than you want.
*   **Cons**: No execution guarantee. If the stock never drops to $150, you don't buy it.
*   **Use Case**: Most trades. Always use Limit Orders to protect yourself from bad fills.

## Part 4: Stop Loss Order (Protection)
*   **Instruction**: "If the price drops to $140, sell it immediately (turn into a Market Order)."
*   **Purpose**: To limit your losses. "I'm out if it hits $140."
*   **Risk**: In a crash, the price might gap down to $130. Your Stop triggers, and you sell at $130 (Market Order).

## Part 5: Stop Limit Order (Precision)
*   **Instruction**: "If the price drops to $140, trigger a Limit Order to sell at $139."
*   **Pros**: You control the exit price.
*   **Cons**: If the stock crashes straight to $130, your order sits at $139 and never fills. You are still holding the bag.

## Part 6: Trailing Stop (Locking in Profits)
*   **Instruction**: "Sell if the price drops 10% from its *highest point* since I bought it."
*   **Scenario**: You buy at $100. Stock goes to $150. Stop moves up to $135. Stock drops to $135. You sell.
*   **Magic**: It lets your winners run but cuts your losers automatically.

## Part 7: Time in Force
*   **Day Order**: Expires at 4:00 PM ET if not filled.
*   **GTC (Good Til Canceled)**: Stays open for 60-90 days until filled or canceled.
*   **Use Case**: Use GTC for target prices ("I want to buy Disney if it ever hits $80").

## Part 8: Extended Hours Trading
*   **Pre-Market**: 4:00 AM - 9:30 AM ET.
*   **After-Hours**: 4:00 PM - 8:00 PM ET.
*   **Risk**: Low liquidity. High volatility. Huge spreads.
*   **Advice**: Avoid trading here unless you are reacting to earnings news.

## Part 9: Bid-Ask Spread: The Hidden Cost
*   **Definition**: The gap between what buyers want to pay and sellers want to accept.
*   **Liquid Stock (Apple)**: Spread is $0.01. (Cheap).
*   **Illiquid Stock (Penny Stock)**: Spread might be $0.50 on a $5.00 stock (10%!).
*   **Cost**: You lose the spread the moment you buy. You are instantly down.

## Part 10: Slippage
*   **Definition**: The difference between the price you saw on the screen and the price you actually got.
*   **Cause**: Fast markets + Market Orders.
*   **Fix**: Use Limit Orders.

## Part 11: Market on Close (MOC)
*   **Instruction**: "Buy this at the exact closing price of the day."
*   **Use Case**: Mutual funds use this to track indices perfectly.

## Part 12: Iceberg Orders
*   **What**: Large orders hidden from the order book. "Buy 100,000 shares, but only show 100 at a time."
*   **Why**: To avoid scaring the market.
*   **Who**: Institutions.

## Part 13: Order Routing
*   **Path**: Your broker sends your order to an Exchange (NYSE) or a Market Maker (Citadel).
*   **PFOF**: Robinhood sends it to Citadel. Citadel pays Robinhood.
*   **Impact**: Usually negligible for retail, but controversial.

## Part 14: Best Execution
*   **Law**: Brokers are legally required to get you the "best execution" reasonably available.
*   **Reality**: It's a gray area.
`;

const ib_10_content = `
# Reading a Quote: The Dashboard

A stock quote is the dashboard of a company.
It tells you the current status, the history, and the sentiment.
Learning to read it fast is a superpower.

## Part 1: Ticker Symbol
*   **What**: The 1-4 letter code. (AAPL, TSLA, BTC).
*   **Fun Fact**: Single letter tickers (F, C) are prestigious.
*   **Suffixes**: GOOG vs GOOGL (Voting vs Non-Voting shares).

## Part 2: Last Price vs. Change
*   **Last Price**: The price of the very last trade that happened.
*   **Change**: How much it moved since yesterday's close.
*   **Color**: Green (+) or Red (-).
*   **Psychology**: Don't let the color dictate your emotions.

## Part 3: Bid and Ask
*   **Bid**: The highest price a buyer is willing to pay. (If you sell, you get this).
*   **Ask**: The lowest price a seller is willing to accept. (If you buy, you pay this).
*   **Size**: "Bid: 150.00 x 100" means someone wants to buy 100 shares at 150.00.

## Part 4: Volume
*   **Definition**: Number of shares traded today.
*   **Significance**: Volume = Conviction.
*   **Scenario**: Price goes up 5% on low volume? Weak move. Price goes up 5% on huge volume? Strong move. Institutional buying.

## Part 5: Market Cap (Size)
*   **Formula**: Share Price x Total Shares Outstanding.
*   **Mega Cap**: >$200B (Apple, Microsoft). Safe.
*   **Large Cap**: $10B - $200B.
*   **Mid Cap**: $2B - $10B.
*   **Small Cap**: $300M - $2B. Risky, high growth.
*   **Micro Cap**: <$300M. Wild West.

## Part 6: P/E Ratio (Valuation)
*   **Price to Earnings**: Price / Earnings Per Share.
*   **Meaning**: How many years of earnings are you paying for?
*   **Average**: Historically 15-20.
*   **High (30+)**: Growth stock. Investors expect earnings to explode.
*   **Low (<10)**: Value stock. Or a dying company.

## Part 7: Dividend Yield
*   **Formula**: Annual Dividend / Stock Price.
*   **Meaning**: The interest rate the stock pays you just for holding it.
*   **Trap**: A 10% yield usually means the stock price crashed, not that the company is generous. It might be a "Dividend Trap."

## Part 8: 52-Week Range
*   **Context**: Is the stock near its high or low?
*   **Momentum**: Stocks near 52-week highs tend to keep going higher. Stocks near lows tend to go lower.

## Part 9: Beta (Volatility)
*   **1.0**: Moves exactly with the market.
*   **1.5**: 50% more volatile than the market. (Tech stocks).
*   **0.5**: 50% less volatile. (Utilities, Walmart).
*   **Negative**: Moves opposite. (Gold miners sometimes).

## Part 10: EPS (Earnings Per Share)
*   **The Bottom Line**: Total Profit / Number of Shares.
*   **Growth**: Is EPS growing year over year? If yes, stock goes up.

## Part 11: Earnings Date
*   **Event**: The day the company reports quarterly results.
*   **Volatility**: Stock can move 10-20% in one day.
*   **Strategy**: Don't gamble on earnings unless you know what you are doing.

## Part 12: Short Interest
*   **Definition**: % of shares that have been sold short (betting against the company).
*   **High (>20%)**: Everyone hates this stock.
*   **Squeeze Potential**: If good news comes, shorts must buy to cover, causing a massive spike (GameStop).

## Part 13: Analyst Ratings
*   **Consensus**: "Strong Buy," "Hold," "Underperform."
*   **Price Target**: Where analysts think the stock will be in 12 months.
*   **Grain of Salt**: Analysts follow the price. They rarely predict the turn.

## Part 14: The Chart
*   **Candlesticks**: Show Open, High, Low, Close.
*   **Moving Averages**: Smooth out the noise (50-day, 200-day).
*   **Trend**: Is the line going up or down? Don't fight the trend.
`;

const ib_11_content = `
# Investment Costs & Fees: The Silent Killer

In investing, you don't get what you pay for. You get what you *don't* pay for.
Every dollar in fees is a dollar that cannot compound for you.
Over 30 years, a 1% fee can eat 30% of your wealth.

## Part 1: Expense Ratio
*   **What**: The annual fee charged by a Mutual Fund or ETF to pay for management, marketing, etc.
*   **Good**: < 0.10% (Vanguard, Schwab).
*   **Bad**: > 0.75%.
*   **Ugly**: > 1.5%.
*   **Impact**: On a $100k portfolio, 0.1% is $100/year. 1.5% is $1,500/year.

## Part 2: Front-End vs. Back-End Loads
*   **Load**: A sales commission paid to the broker who sold you the fund.
*   **Front-End**: You pay 5% upfront. You invest $100, only $95 goes to work. (Criminal).
*   **Back-End**: You pay when you sell.
*   **Rule**: NEVER buy a Load Fund. There are thousands of No-Load funds that are better.

## Part 3: 12b-1 Fees
*   **What**: A hidden annual fee used to pay for "marketing and distribution."
*   **Translation**: You are paying the fund to run ads to find more customers.
*   **Avoid**: Funds with 12b-1 fees.

## Part 4: Advisory Fees (AUM)
*   **Model**: Financial Advisors charge a % of Assets Under Management.
*   **Standard**: 1% per year.
*   **Value**: Is their advice worth 1%? Maybe, if they prevent you from panic selling. But over 30 years, that 1% is massive.
*   **Alternative**: Fee-Only Advisors (Hourly rate).

## Part 5: Trading Commissions
*   **History**: Used to be $50/trade. Then $7. Now $0.
*   **Options**: Still cost money ($0.65/contract).
*   **Crypto**: High fees (Coinbase charges 1-3%).

## Part 6: Bid-Ask Spread Cost
*   **Hidden**: You don't see it on the statement.
*   **Cost**: Buying at the Ask and selling at the Bid.
*   **Mitigation**: Trade liquid stocks. Use Limit Orders.

## Part 7: Tax Cost Ratio
*   **What**: The % of return lost to taxes.
*   **Cause**: High turnover funds generate capital gains distributions.
*   **Fix**: ETFs are more tax-efficient than Mutual Funds.

## Part 8: Inflation (The Hidden Fee)
*   **Nature**: Not charged by a bank, but by the economy.
*   **Rate**: Average 3%.
*   **Hurdle**: Your investments MUST earn >3% just to break even.

## Part 9: Cash Drag
*   **Scenario**: Holding 20% of your portfolio in cash "waiting for a dip."
*   **Cost**: That cash earns 0% (real return). It drags down the performance of the other 80%.
*   **Fix**: Stay fully invested.

## Part 10: The Impact of 1% (The Million Dollar Mistake)
*   **Example**:
    *   Invest $10k/year for 40 years at 8%.
    *   **0.1% Fee**: Result = $2.7 Million.
    *   **1.1% Fee**: Result = $1.9 Million.
    *   **Difference**: **$800,000** lost to a "small" 1% fee.

## Part 11: Robo-Advisor Fees
*   **Charge**: Usually 0.25% on top of the ETF expense ratios.
*   **Total**: ~0.35%.
*   **Verdict**: Acceptable for total automation.

## Part 12: Hedge Fund Fees
*   **2 and 20**: 2% management fee + 20% of profits.
*   **Performance**: Most hedge funds lag the S&P 500 after fees.
*   **Ego**: You are paying for the privilege of saying you have a hedge fund.

## Part 13: How to Find Fees
*   **Document**: The "Prospectus."
*   **Website**: Look for "Expense Ratio" or "Total Annual Fund Operating Expenses."
*   **Don't ask**: The broker might not tell you voluntarily.

## Part 14: The Fee War
*   **Trend**: Fees are racing to zero.
*   **Fidelity**: Has "Zero" funds (FNILX) with 0.00% expense ratio.
*   **Winner**: You.
`;

const ib_12_content = `
# Tax Implications of Investing: Keep What You Make

Uncle Sam is your silent partner. He takes no risk but demands a cut of the profits.
If you ignore taxes, you can lose 30-50% of your gains.
Smart investing is Tax-Efficient investing.

## Part 1: Capital Gains (Short vs. Long Term)
*   **Short-Term**: Held < 1 year. Taxed as Ordinary Income (10-37%).
*   **Long-Term**: Held > 1 year. Taxed at preferential rates (0%, 15%, 20%).
*   **Strategy**: Never sell a winner in 11 months. Wait for day 366.

## Part 2: Dividends (Qualified vs. Ordinary)
*   **Qualified**: Taxed at Long-Term Capital Gains rates (Lower). Most US stocks.
*   **Ordinary**: Taxed at Income rates (Higher). REITs, Bond interest.
*   **Strategy**: Hold REITs and Bonds in tax-advantaged accounts (IRA).

## Part 3: Interest Income
*   **Source**: Savings accounts, CDs, Bonds.
*   **Tax**: Always taxed as Ordinary Income.
*   **Pain**: High earners lose 37% of their bond interest to taxes.

## Part 4: Tax-Loss Harvesting
*   **Concept**: Selling a loser to realize a loss.
*   **Benefit**: The loss offsets your gains.
    *   Gain: $10k. Loss: $4k. Net Taxable: $6k.
*   **Bonus**: Up to $3,000 of excess loss can deduct from your *salary*.

## Part 5: Wash Sale Rule
*   **Trap**: You sell Tesla at a loss and buy it back 2 days later.
*   **Rule**: The IRS disallows the loss deduction. You must wait 30 days to buy it back.
*   **Workaround**: Buy a similar (but not identical) asset. Sell Tesla, buy a Tech ETF.

## Part 6: Asset Location
*   **Taxable Account**: Hold Tax-Efficient assets (ETFs, Growth Stocks that don't pay dividends).
*   **IRA / 401k**: Hold Tax-Inefficient assets (Bonds, REITs, High Dividend stocks).
*   **Roth IRA**: Hold highest growth assets (Crypto, Small Caps). No tax on the huge gains.

## Part 7: Municipal Bonds (Munis)
*   **Magic**: Bonds issued by state/local governments.
*   **Tax**: Free from Federal Tax. Often free from State Tax too.
*   **Who**: Great for high earners in high-tax states (CA, NY).

## Part 8: Cost Basis
*   **Definition**: The original price you paid.
*   **Methods**:
    *   *FIFO (First In, First Out)*: Sells your oldest shares first. (Usually best for Long-Term).
    *   *Specific ID*: You tell the broker exactly which shares to sell (e.g., "Sell the ones I bought at $150"). Best for tax optimization.

## Part 9: Net Investment Income Tax (NIIT)
*   **Obamacare Tax**: An extra 3.8% tax on investment income if you earn >$200k.
*   **Total**: Top rate becomes 20% + 3.8% = 23.8%.

## Part 10: Estate Tax (Stepped-up Basis)
*   **Scenario**: You bought Apple at $1. You die when it's $100.
*   **Heirs**: They inherit it at $100 cost basis.
*   **Tax**: The $99 gain is never taxed.
*   **Strategy**: "Buy, Borrow, Die."

## Part 11: Tax Drag
*   **Definition**: The reduction of return due to taxes.
*   **Active Funds**: High turnover = High Tax Drag.
*   **Index Funds**: Low turnover = Low Tax Drag.

## Part 12: Crypto Taxes
*   **Nightmare**: Every trade is a taxable event.
    *   Buy BTC -> Trade for ETH. (Taxable).
    *   Buy Coffee with BTC. (Taxable).
*   **Tracking**: You need software (Koinly, CoinTracker) to calculate this.
*   **Audit Risk**: High.

## Part 13: Foreign Tax Credit
*   **Scenario**: You own an International Fund (VXUS). Foreign govts withhold taxes on dividends.
*   **Credit**: You can claim a credit on your US tax return to avoid double taxation.

## Part 14: Keeping Records
*   **Responsibility**: The broker sends forms (1099-B), but YOU are responsible for accuracy.
*   **Crypto**: Exchanges are notoriously bad at reporting. Keep your own logs.
`;

if (replaceLessonContent('ib_9', 'Order Types: Market vs. Limit', ib_9_content, [
    "Always use Limit Orders to control price.",
    "Market Orders guarantee speed but risk slippage.",
    "Stop Losses protect against crashes.",
    "Understand the Bid-Ask Spread cost."
])) console.log('Updated ib_9');

if (replaceLessonContent('ib_10', 'Reading a Quote', ib_10_content, [
    "Volume confirms the price move.",
    "P/E Ratio tells you if a stock is cheap or expensive.",
    "Don't chase high Dividend Yields blindly.",
    "Beta measures volatility relative to the market."
])) console.log('Updated ib_10');

if (replaceLessonContent('ib_11', 'Investment Costs & Fees', ib_11_content, [
    "Fees compound against you. Keep them low.",
    "Expense Ratio < 0.10% is the goal.",
    "Avoid Load Funds and 12b-1 fees.",
    "A 1% fee can cost you $800,000 over a lifetime."
])) console.log('Updated ib_11');

if (replaceLessonContent('ib_12', 'Tax Implications of Investing', ib_12_content, [
    "Long-Term Capital Gains tax is lower than Income tax.",
    "Asset Location matters: Bonds in IRA, Stocks in Taxable.",
    "Tax-Loss Harvesting can lower your tax bill.",
    "Never sell a winner in less than a year if possible."
])) console.log('Updated ib_12');

fs.writeFileSync(filePath, content);
console.log('Updates for ib_9 to ib_12 complete.');
