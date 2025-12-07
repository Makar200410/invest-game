const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to append content to a lesson
function appendToLesson(lessonId, newText) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) return false;

    const contentStart = content.indexOf('content: `', lessonStart);
    if (contentStart === -1) return false;

    const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);

    let contentEnd;
    if (keyTakeawaysStart !== -1) {
        contentEnd = content.lastIndexOf('`,', keyTakeawaysStart);
    } else {
        contentEnd = content.indexOf('`,', contentStart + 10);
    }

    if (contentEnd === -1 || (keyTakeawaysStart !== -1 && contentEnd > keyTakeawaysStart)) {
        console.error(`Could not find end of content for ${lessonId}`);
        return false;
    }

    const before = content.substring(0, contentEnd);
    const after = content.substring(contentEnd);

    content = before + '\n' + newText + after;
    return true;
}

const ib_9_append = `
## Part 15: Advanced Order Types (The Pro Tools)
*   **IOC (Immediate or Cancel)**: "Buy what you can right now, and cancel the rest."
    *   *Use*: When you don't want a partial order hanging around.
*   **FOK (Fill or Kill)**: "Buy ALL of it right now, or buy NONE of it."
    *   *Use*: When you need the full size to make the trade worth it.
*   **OCO (One Cancels the Other)**: You place a Stop Loss AND a Profit Target at the same time.
    *   *Scenario*: Buy at $100. Place Sell Limit at $120 (Profit) and Stop Loss at $90 (Loss).
    *   *Result*: If price hits $120, the $90 stop is automatically canceled. You don't have to watch the screen.

## Part 16: Algorithmic Orders
Institutions don't just click "Buy." They use algos.
*   **VWAP (Volume Weighted Average Price)**: "Buy slowly all day so I get the average price."
*   **TWAP (Time Weighted Average Price)**: "Buy 1,000 shares every 5 minutes."
*   **Iceberg**: "Show 100 shares, buy 100,000."
*   **Sniper**: "Wait for a specific price and buy everything available instantly."

## Part 17: The Psychology of the Button
*   **The Market Order Trap**: Beginners use Market Orders because they are impatient. They want in *now*. This is FOMO.
*   **The Limit Order Discipline**: Professionals use Limit Orders. They set a price and wait. If the market doesn't come to them, they don't trade.
*   **Lesson**: The market is a tool to serve you, not a master to obey. Dictate your terms.

## Part 18: Fat Finger Errors
*   **Definition**: Typing the wrong number.
*   **History**: In 2005, a Japanese trader tried to sell 1 share for 610,000 yen. He accidentally sold 610,000 shares for 1 yen. Cost: $225 Million.
*   **Defense**: Always double-check the "Review Order" screen. Check the decimal points.

## Part 19: The Matching Engine
*   **Mechanism**: The exchange computer matches Bids and Asks based on **Price-Time Priority**.
*   **Price**: The best price gets filled first. (Highest Bid, Lowest Ask).
*   **Time**: If two people bid the same price, the one who arrived first gets filled first.
*   **Speed**: This is why HFTs spend billions on faster cables. To be first in line.

## Part 20: Cross-Exchange Arbitrage
*   **Scenario**: Apple is $150.00 on NYSE and $150.01 on NASDAQ.
*   **Arb**: Buy on NYSE, Sell on NASDAQ. Profit $0.01.
*   **Reality**: HFT bots close these gaps in microseconds. You will never see them.
`;

const ib_10_append = `
## Part 15: Level 2 Data (The Matrix)
*   **Level 1**: Shows the Best Bid and Best Ask.
*   **Level 2**: Shows the *entire* order book. You see all the buyers and sellers waiting in line.
*   **Depth**: You can see "Walls." If there are 50,000 shares for sale at $155, that is a "Resistance Wall." The price will struggle to break it.
*   **Spoofing**: Sometimes those walls are fake. A bot places a huge order to scare you, then cancels it before it fills.

## Part 16: Time & Sales (The Tape)
*   **What**: A scrolling list of every trade that actually happened.
*   **Data**: Price, Size, Time, Exchange.
*   **Reading the Tape**:
    *   Green prints: Trades happening at the Ask (Aggressive Buying).
    *   Red prints: Trades happening at the Bid (Aggressive Selling).
    *   Speed: If the tape speeds up, something is happening.

## Part 17: Implied Volatility (IV)
*   **Definition**: The market's expectation of future movement.
*   **High IV**: The market expects a big move (Earnings, FDA approval). Options are expensive.
*   **Low IV**: The market expects calm. Options are cheap.
*   **IV Crush**: After the event (Earnings), IV drops, and option prices collapse.

## Part 18: Short Interest Ratio (Days to Cover)
*   **Formula**: Shares Short / Average Daily Volume.
*   **Meaning**: How many days would it take for all short sellers to buy back their shares?
*   **High Ratio (>10)**: If a squeeze happens, it will be violent because there isn't enough volume for shorts to exit quickly.

## Part 19: Institutional Ownership
*   **Stat**: % of shares owned by big funds.
*   **High (>70%)**: Stable. The big money is in.
*   **Low (<10%)**: Speculative. Retail dominated.
*   **Change**: If Institutional Ownership is rising, it's a great sign. The "Smart Money" is accumulating.

## Part 20: The Greeks (Briefly)
If you trade options, you need to know these.
*   **Delta**: How much the option price moves for every $1 move in the stock.
*   **Theta**: Time decay. How much value the option loses every day.
*   **Vega**: Sensitivity to Volatility.
*   **Gamma**: The acceleration of Delta.

## Part 21: Relative Strength Index (RSI)
*   **Indicator**: Measures momentum.
*   **Overbought (>70)**: Price might drop.
*   **Oversold (<30)**: Price might bounce.
*   **Divergence**: If Price makes a new High but RSI makes a lower High, a crash is coming.
`;

const ib_11_append = `
## Part 15: Payment for Order Flow (PFOF) Deep Dive
*   **The Model**: Robinhood doesn't charge you a commission. They sell your order to Citadel.
*   **The Conflict**: Citadel wants to make money off your trade.
*   **Price Improvement**: Citadel argues they give you a better price than the exchange.
*   **The Reality**: It's a conflict of interest, but for small retail traders, the $0 commission outweighs the fraction of a penny lost in execution.

## Part 16: Soft Dollars
*   **Definition**: Mutual funds paying brokers for research/services using *your* commission dollars.
*   **Transparency**: Very low. It's a way to hide expenses.
*   **Regulation**: The SEC has cracked down, but it still exists.

## Part 17: The Cost of Cash Drag
*   **Scenario**: You have $100k portfolio. You keep $20k in cash "just in case."
*   **Market Return**: 10%.
*   **Cash Return**: 0%.
*   **Portfolio Return**: 8%.
*   **Cost**: You underperformed by 2% because of fear. Over 20 years, that is massive.
*   **Fix**: Invest the cash. Or put it in short-term T-Bills (5%) to minimize the drag.

## Part 18: Advisor Fees: The 1% Tax
*   **Math**: A 1% fee sounds small.
*   **Reality**: If the market returns 7% and inflation is 3%, your real return is 4%.
*   **The Cut**: The advisor takes 1%. That is **25% of your real return**.
*   **Question**: Does your advisor do 25% of the work? No. You take 100% of the risk, they take 25% of the profit.

## Part 19: The "Churning" Scam
*   **Unethical Brokers**: They trade your account excessively to generate commissions.
*   **Red Flag**: If you see hundreds of trades you didn't authorize or understand.
*   **Action**: Report to FINRA immediately.

## Part 20: Breakpoint Discounts
*   **Mutual Funds**: If you invest a large amount (e.g., $50k), the Load Fee might drop from 5% to 3%.
*   **Letter of Intent**: You can promise to invest $50k over 13 months to get the discount now.

## Part 21: ETF Bid-Ask Spread Cost
*   **Liquid ETF (SPY)**: Spread is $0.01. Cost is negligible.
*   **Niche ETF (Obscure Country)**: Spread might be $0.20.
*   **Round Trip**: You pay the spread when you buy AND when you sell.
*   **Lesson**: Stick to high-volume ETFs.
`;

const ib_12_append = `
## Part 15: The "Pro Rata" Rule (Backdoor Roth)
*   **Scenario**: You earn too much to contribute to a Roth IRA directly.
*   **Strategy**: Contribute to Traditional IRA (Non-deductible) -> Convert to Roth.
*   **The Trap**: If you *already* have money in a Traditional IRA (from an old 401k rollover), the IRS taxes the conversion pro-rata.
*   **Result**: You get hit with a surprise tax bill.
*   **Fix**: Move your old IRA into your current 401(k) to "hide" it from the Pro Rata rule.

## Part 16: 1031 Exchange (Real Estate)
*   **Magic**: You sell a rental property for a $500k profit.
*   **Tax**: Normally $100k+.
*   **The 1031**: You use the proceeds to buy *another* investment property within 180 days.
*   **Result**: **$0 Tax**. You defer the tax indefinitely.
*   **Repeat**: You can do this forever. Swap till you drop.

## Part 17: Opportunity Zones
*   **Program**: Created in 2017. Invest capital gains into distressed communities.
*   **Benefit**: Defer taxes until 2026. If held for 10 years, the *new* growth is tax-free.
*   **Risk**: You have to invest in a "distressed" area. The investment might fail.

## Part 18: Roth Conversion Ladder
*   **Goal**: Access 401k money before age 59.5 without penalty.
*   **Strategy**:
    1.  Convert Traditional IRA to Roth IRA. (Pay tax now).
    2.  Wait 5 years.
    3.  Withdraw the *conversion amount* penalty-free.
*   **Ladder**: Do this every year to create a stream of income for early retirement (FIRE).

## Part 19: Tax-Efficient Fund Placement
*   **Bonds**: Pay interest (Ordinary Income). Put in IRA.
*   **REITs**: Pay non-qualified dividends. Put in IRA.
*   **High Growth Stocks**: Pay 0% dividends. Put in Taxable (to harvest losses) or Roth (to avoid tax on huge gains).
*   **International Funds**: Put in Taxable (to claim Foreign Tax Credit).

## Part 20: The "Nanny Tax"
*   **Household Employees**: If you pay a nanny/cleaner >$2,600/year, you must withhold taxes.
*   **Risk**: If you don't, you can get audited and fined. (This has disqualified politicians).

## Part 21: Record Keeping
*   **Basis**: Keep records of home improvements. They increase the "Cost Basis" of your home, reducing tax when you sell.
*   **Crypto**: Every transaction is taxable. Use software.
*   **Audit Defense**: The IRS can audit you for 3 years (or 6 years for large errors). Keep records for 7 years.
`;

// Execute updates
if (appendToLesson('ib_9', ib_9_append)) console.log('Updated ib_9 append');
if (appendToLesson('ib_10', ib_10_append)) console.log('Updated ib_10 append');
if (appendToLesson('ib_11', ib_11_append)) console.log('Updated ib_11 append');
if (appendToLesson('ib_12', ib_12_append)) console.log('Updated ib_12 append');

fs.writeFileSync(filePath, content);
console.log('Append updates for ib_9 to ib_12 complete.');
