const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_11": {
        title: "Investment Costs",
        content: \`
# Investment Costs: The Silent Wealth Killer

Costs are the termites of investing — they silently eat your wealth from the inside. A 2% annual fee might seem small, but over 30 years it can consume half your potential wealth. Understanding and minimizing costs is one of the few guaranteed ways to improve your returns. This lesson exposes all the hidden costs and shows you how to avoid them.

## Part 1: Why Costs Matter So Much

Costs seem small when expressed as percentages. But over decades, they compound against you with devastating effect.

*   **The Math**: $100,000 invested for 30 years at 8% return:
    *   **No fees**: Grows to **$1,006,266**
    *   **1% annual fee**: Grows to **$761,225** (You lose $245,000)
    *   **2% annual fee**: Grows to **$574,349** (You lose $432,000!)
*   **The Rule**: 1% extra annual fees = ~25% less wealth over 30 years.
*   **Why It Hurts**: Fees don't just take your money — they take the [compound interest](/glossary#compound-interest) that money would have earned forever.
*   **Jack Bogle's Warning**: "In investing, you get what you DON'T pay for."
*   **Guaranteed Improvement**: You can't control market returns. You CAN control costs. Cutting 1% in fees is equivalent to a 1% guaranteed annual return boost.

## Part 2: Expense Ratios — The Biggest Hidden Cost

The [Expense Ratio](/glossary#expense-ratio) is the annual fee charged by [mutual funds](/glossary#mutual-fund) and [ETFs](/glossary#etf). It's automatically deducted from your returns.

*   **What It Is**: An annual percentage fee (e.g., 0.05% or 1.50%) covering fund management, administration, and operations.
*   **How It Works**: If a fund returns 10% and has a 1% expense ratio, your net return is 9%. You never see the fee — it's deducted from NAV.
*   **Good vs Bad**:
    *   **Excellent**: <0.10% (Most Vanguard, Fidelity, Schwab [index funds](/glossary#index-fund))
    *   **Acceptable**: 0.10% - 0.50%
    *   **Bad**: 0.50% - 1.00%
    *   **Terrible**: >1.00% (Many actively managed funds, avoid these)
*   **Example**: Vanguard VTI charges 0.03%. The average [mutual fund](/glossary#mutual-fund) charges 0.50-1.00%. This difference is massive over time.
*   **Action**: Never buy a fund with an [expense ratio](/glossary#expense-ratio) above 0.50% unless there's an extraordinary reason.

## Part 3: Trading Commissions (Mostly Eliminated)

Trading commissions used to be significant. The fee wars have largely eliminated them.

*   **History**: In the 1990s, buying 100 shares cost $50-100 per trade. This made [diversification](/glossary#diversification) expensive.
*   **Revolution**: In 2019, major brokers went to $0 commissions for US stocks and [ETFs](/glossary#etf).
*   **Current State**: Fidelity, Schwab, Vanguard, Robinhood all charge $0 for stock/[ETF](/glossary#etf) trades.
*   **Exceptions**:
    *   [Options](/glossary#options): Still $0.50-0.65 per contract
    *   [Mutual Funds](/glossary#mutual-fund) (non-proprietary): May charge $20-50 per trade
    *   [Bonds](/glossary#bond): Implicit costs in the spread
    *   International stocks: May have additional fees
*   **Impact**: Zero commissions removed barriers for small investors and frequent [rebalancing](/glossary#rebalancing).

## Part 4: Payment for Order Flow (PFOF)

"Free" commissions aren't actually free. Brokers make money through [PFOF](/glossary#pfof).

*   **What It Is**: Brokers like Robinhood sell your order data to [market makers](/glossary#market-maker) (Citadel, Virtu) who execute your trades.
*   **How They Profit**: [Market makers](/glossary#market-maker) make money from the [bid-ask spread](/glossary#bid-ask-spread). They pay brokers for the order flow.
*   **The Concern**: Your order might get slightly worse execution (a fraction of a cent per share) to benefit the market maker.
*   **Reality Check**: For most retail investors buying liquid stocks, the impact is tiny — a few cents per trade.
*   **Controversy**: Some argue [PFOF](/glossary#pfof) creates conflicts. Others say it enables zero commissions which benefit everyone.
*   **Mitigation**: Use [limit orders](/glossary#limit-order) instead of [market orders](/glossary#market-order) to ensure you get your desired price.

## Part 5: Bid-Ask Spread — The Invisible Tax

The [spread](/glossary#bid-ask-spread) is a real cost that affects every trade, especially in illiquid securities.

*   **What It Is**: Difference between the highest buyer price (bid) and lowest seller price (ask).
*   **Example**: A stock with a $100.00 bid and $100.10 ask has a $0.10 spread (0.1%).
*   **The Cost**: If you buy at $100.10 and immediately sell at $100.00, you lose $0.10 per share. That's the spread cost.
*   **Liquid [Stocks](/glossary#stock)**: SPY has spreads of $0.01 on a $450 stock — virtually nothing (0.002%).
*   **Illiquid [Stocks](/glossary#stock)**: Penny stocks may have $0.20 spreads on a $1.00 stock — 20% gone instantly!
*   **Impact**: Wide spreads make frequent trading extremely expensive. Day traders in illiquid stocks lose money to spreads alone.
*   **Solution**: Trade liquid securities. Use [limit orders](/glossary#limit-order). Don't trade obscure penny stocks.

## Part 6: Load Fees — The Original Ripoff

[Load](/glossary#load-fund) fees are sales commissions charged by some [mutual funds](/glossary#mutual-fund). They're pure wealth destruction.

*   **Front-End Load**: A fee charged when you buy (e.g., 5%). Invest $10,000, $500 goes to the salesperson, $9,500 gets invested.
*   **Back-End Load**: A fee charged when you sell (e.g., 5% if you sell within 5 years).
*   **No-Load Funds**: Funds with no sales charge. All your money goes to work immediately.
*   **Historical Context**: Loads were how advisors got paid before the internet age. They're now obsolete.
*   **Rule**: NEVER buy a [load fund](/glossary#load-fund). There is zero justification. Plenty of excellent no-load alternatives exist.
*   **Red Flag**: If an advisor recommends a load fund, they're prioritizing their commission over your returns.

## Part 7: Advisor Fees — The Ongoing Drain

Financial advisors charge fees for managing your money. Are they worth it?

*   **[AUM Fee](/glossary#aum-fee) Model**: Advisor charges 1% annually of your total Assets Under Management.
*   **The Math**: $500,000 portfolio = $5,000/year to the advisor, every year, regardless of performance.
*   **Over 30 Years**: That 1% [AUM fee](/glossary#aum-fee) costs you $250,000+ in lost wealth.
*   **Alternative - [Robo-Advisors](/glossary#robo-advisor)**: Automated platforms (Betterment, Wealthfront) charge 0.25% and do similar work.
*   **Alternative - DIY**: Manage your own three-fund [portfolio](/glossary#portfolio) for 0.03% in [expense ratios](/glossary#expense-ratio). Save the rest.
*   **When Advisors Add Value**: Complex tax situations, estate planning, behavioral coaching during panics.
*   **Question to Ask**: "Will this advisor add more than 1% of value annually after their fee?" Usually the answer is no.

## Part 8: Hidden Fund Costs

Beyond the [expense ratio](/glossary#expense-ratio), funds have additional hidden costs that drag on returns.

*   **[12b-1 Fees](/glossary#12b-1-fee)**: Marketing fees buried inside [expense ratios](/glossary#expense-ratio). You pay for the fund to advertise to get more clients.
*   **[Turnover Ratio](/glossary#turnover-ratio)**: How often the fund trades its holdings. High turnover = higher transaction costs passed to you.
*   **Cash Drag**: Funds that hold too much cash underperform because cash earns less than invested [assets](/glossary#asset).
*   **Securities Lending Income**: Some funds lend out their holdings for extra income. Some keep it; others (like Vanguard) pass it to shareholders.
*   **Taxes**: High turnover generates taxable [capital gains](/glossary#capital-gains) distributed to you, even if you didn't sell. [Index funds](/glossary#index-fund) minimize this.
*   **Solution**: Choose funds with low [expense ratios](/glossary#expense-ratio), low turnover, and no [12b-1 fees](/glossary#12b-1-fee). [Index funds](/glossary#index-fund) excel on all counts.

## Part 9: The Low-Cost Portfolio

Here's a simple, ultra-low-cost [portfolio](/glossary#portfolio) any investor can implement:

*   **VTI** (Total US Stock Market): Expense Ratio 0.03%
*   **VXUS** (Total International Stock): Expense Ratio 0.07%
*   **BND** (Total Bond Market): Expense Ratio 0.03%
*   **Blended Cost**: A 60% VTI / 30% VXUS / 10% BND [portfolio](/glossary#portfolio) costs about 0.04% annually.
*   **Comparison**: The average [mutual fund](/glossary#mutual-fund) costs 0.50-1.00%. You save 0.46-0.96% per year.
*   **Over 30 Years**: That savings translates to hundreds of thousands of dollars more in your pocket.
*   **[Robo-Advisor](/glossary#robo-advisor) Alternative**: If you want automation, Betterment/Wealthfront charge 0.25% and handle everything.
*   **Bottom Line**: You can invest like a billionaire's family office for less than the cost of a Netflix subscription. Costs are within your control.
\`,
        keyTakeaways: [
            "1% extra annual fees can cost you 25% of your final wealth over 30 years.",
            "Never buy a fund with expense ratio above 0.50% or any load fund.",
            "Zero-commission brokers make money through PFOF — use limit orders to protect yourself.",
            "A three-fund portfolio costs about 0.04% annually — cheaper than almost any alternative."
        ]
    },`;

const startMarker = '"ib_11": {';
const endMarker = '"ib_12": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_11: Investment Costs - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');
if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_11!');
