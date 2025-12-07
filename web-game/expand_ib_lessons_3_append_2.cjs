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

const ib_9_append_2 = `
## Part 21: The Flash Crash of 2010
*   **The Event**: On May 6, 2010, the Dow Jones dropped 1,000 points (9%) in minutes, then recovered.
*   **The Cause**: A single algorithm (sell program) triggered a cascade of HFT selling.
*   **The Victim**: Market Orders. People who had "Stop Loss" orders triggered were sold out at the bottom (some stocks traded for $0.01).
*   **The Lesson**: NEVER use a Market Order or a regular Stop Loss during extreme volatility. Use Stop Limit orders.

## Part 22: Dark Pools: The Hidden Market
*   **What**: Private exchanges where institutions trade anonymously.
*   **Volume**: 40% of all US stock trading happens off-exchange (in Dark Pools).
*   **Why**: If a pension fund wants to sell 1 million shares of Apple, they don't want to show it on the public order book (it would crash the price).
*   **Impact**: The "Price" you see on your screen might not reflect the true supply and demand.

## Part 23: Depth of Market (DOM)
*   **Visual**: A ladder showing bids and asks at every price level.
*   **Usage**: Scalpers use this to see where the "liquidity" is.
*   **Imbalance**: If there are 5,000 buyers and only 500 sellers, the price is likely to go up.

## Part 24: IEX: The Flash Boys Exchange
*   **The Problem**: HFTs were "front-running" orders by microseconds.
*   **The Solution**: Brad Katsuyama founded IEX (Investors Exchange).
*   **The Speed Bump**: They installed a 38-mile coil of fiber optic cable to slow down *everyone* by 350 microseconds. This neutralized the HFT speed advantage.
*   **Choice**: You can route your orders specifically to IEX to avoid predatory HFTs.
`;

const ib_10_append_2 = `
## Part 22: Profit Margin (The Efficiency Metric)
*   **Formula**: Net Income / Revenue.
*   **Meaning**: How much of every dollar of sales does the company keep as profit?
*   **Good**: >10% (General), >20% (Software).
*   **Bad**: <5% (Retail, Airlines).
*   **Trend**: Is margin expanding or contracting? Expanding margin = Pricing power.

## Part 23: Return on Equity (ROE)
*   **Formula**: Net Income / Shareholder Equity.
*   **Meaning**: How good is management at using your money to generate profit?
*   **Benchmark**: Look for >15%.
*   **Buffett's Favorite**: This is one of Warren Buffett's primary filters.

## Part 24: Forward P/E vs. Trailing P/E
*   **Trailing P/E**: Based on the *last* 12 months of earnings. (Fact).
*   **Forward P/E**: Based on the *next* 12 months of estimated earnings. (Guess).
*   **Comparison**: If Forward P/E is lower than Trailing P/E, analysts expect earnings to grow.

## Part 25: The PEG Ratio
*   **Problem**: High P/E stocks look expensive.
*   **Solution**: Price / Earnings / Growth Rate.
*   **Rule**:
    *   PEG < 1.0: Undervalued (Growth is cheap).
    *   PEG > 2.0: Overvalued.
*   **Example**: A stock with P/E of 30 growing at 30% (PEG = 1) is cheaper than a stock with P/E of 15 growing at 5% (PEG = 3).

## Part 26: The Value Trap
*   **Scenario**: You see a stock with a P/E of 5 and a Dividend Yield of 8%. Looks like a steal!
*   **The Trap**: The stock is cheap because the business is dying (e.g., Blockbuster in 2010).
*   **Warning Sign**: Declining revenue, high debt, cutting dividends.
`;

const ib_11_append_2 = `
## Part 22: Turnover Rate: The Hidden Transaction Cost
*   **Definition**: How often the fund buys and sells stocks.
*   **High Turnover (100%)**: The fund replaces its entire portfolio every year.
*   **Cost**: Trading costs money (spreads, impact). These costs are *not* included in the Expense Ratio. They are deducted from the fund's assets (NAV).
*   **Impact**: Can drag returns by another 0.5% - 1.0%.
*   **Goal**: Look for Low Turnover (<20%).

## Part 23: Total Cost of Ownership (TCO)
*   **Formula**: Expense Ratio + Transaction Costs + Tax Drag + Cash Drag + Advisor Fee.
*   **Example**:
    *   Expense Ratio: 1.0%
    *   Transaction Costs: 0.5%
    *   Tax Drag: 1.0%
    *   Advisor Fee: 1.0%
    *   **Total Cost**: **3.5%**.
*   **Result**: You need the market to return 13.5% just to get a 10% return. (Impossible).

## Part 24: Case Study: The Vanguard Effect
*   **The Experiment**: Warren Buffett bet $1 Million that an S&P 500 Index Fund would beat a basket of Hedge Funds over 10 years (2008-2017).
*   **The Result**:
    *   Index Fund Return: **+126%**.
    *   Hedge Funds Return: **+36%**.
*   **The Reason**: Fees. The Hedge Funds took huge fees, leaving scraps for the investors. Buffett won easily.

## Part 25: Gross vs. Net Expense Ratio
*   **Gross**: The actual cost to run the fund.
*   **Net**: The amount they charge you *after* a temporary waiver.
*   **Trap**: The waiver can expire, and the fee can jump up. Always look at the Gross ratio to see the potential future cost.
`;

const ib_12_append_2 = `
## Part 22: The Kiddie Tax
*   **Scenario**: You put assets in your child's name to use their lower tax bracket.
*   **The Rule**: Unearned income (dividends, gains) over ~$2,500 for a child is taxed at the *parents'* tax rate.
*   **Goal**: To prevent rich parents from shifting income to children.
*   **Workaround**: Use a 529 Plan (Tax-free for education) or a Custodial Roth IRA (if the child has earned income).

## Part 23: Donor Advised Funds (DAF)
*   **Strategy**: You have a stock that went from $1,000 to $10,000.
*   **Don't Sell**: If you sell, you pay tax on $9,000 gain.
*   **Donate**: Donate the stock directly to a DAF/Charity.
*   **Benefit**:
    1.  You get a tax deduction for the full $10,000.
    2.  The charity gets the full $10,000 (no tax paid).
    3.  You pay **$0 capital gains tax**.

## Part 24: The Step Transaction Doctrine
*   **Warning**: If you try to get too clever with tax loopholes (e.g., selling to your wife to reset basis), the IRS can invoke this doctrine.
*   **Meaning**: "We see what you are really doing. We are collapsing these steps into one transaction and taxing you."
*   **Advice**: Don't be cute. Follow the spirit of the law.

## Part 25: State Tax Traps
*   **Moving**: If you move from California (High Tax) to Texas (Zero Tax) and sell your stock the next day, California might still try to tax you ("Clawback").
*   **Audit**: They check your cell phone records, credit card swipes, and gym membership to prove where you *really* lived.
*   **Rule**: Sever all ties before selling a major asset.
`;

// Execute updates
if (appendToLesson('ib_9', ib_9_append_2)) console.log('Updated ib_9 append 2');
if (appendToLesson('ib_10', ib_10_append_2)) console.log('Updated ib_10 append 2');
if (appendToLesson('ib_11', ib_11_append_2)) console.log('Updated ib_11 append 2');
if (appendToLesson('ib_12', ib_12_append_2)) console.log('Updated ib_12 append 2');

fs.writeFileSync(filePath, content);
console.log('Append updates 2 for ib_9 to ib_12 complete.');
