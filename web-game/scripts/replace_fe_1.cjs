const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_1": {
        title: "Mutual Funds Explained",
        content: \`
# Mutual Funds: The Original Pooled Investment

A [mutual fund](/glossary#mutual-fund) is a financial vehicle that pools money from many investors to purchase securities like [stocks](/glossary#stock), [bonds](/glossary#bond), and other assets. Managed by professional portfolio managers, they allow individual investors to access diversified portfolios that would be difficult to build on their own. While [ETFs](/glossary#etf) have grown in popularity, mutual funds remain a cornerstone of retirement accounts and wealth management.

## Part 1: How Mutual Funds Work

The mechanics of pooling money for shared investment success are simple yet powerful.

*   **Pooling Capital**: Thousands of investors contribute money into a single "pot" (the fund). This aggregation gives the fund immense buying power, allowing it to purchase positions that individual investors couldn't afford.
*   **Professional Management**: A fund manager (or team) decides what to buy and sell based on the fund's objective. You are hiring an expert to make decisions for you.
*   **Shares**: Investors own shares of the fund, representing a proportional slice of the holdings. If the fund owns 100 stocks, your one share represents a tiny fraction of all 100.
*   **[Net Asset Value (NAV)](/glossary#nav)**: The price per share, calculated once daily after markets close. It is the total value of assets minus liabilities, divided by shares outstanding.
*   **Dividends and Gains**: Income (dividends/interest) and profits (capital gains) earned by the fund are passed through to shareholders, usually annually.
*   **Regulation**: Heavily regulated by the SEC (Investment Company Act of 1940) to protect investors from fraud and mismanagement.

## Part 2: Types of Mutual Funds

There is a mutual fund for almost every investment objective, risk tolerance, and time horizon.

*   **[Stock Funds](/glossary#stock)**: Invest in equity. Can be Growth (fast-growing companies), Value (undervalued companies), Large-Cap (big companies), Small-Cap (small companies), International, or Sector-specific.
*   **[Bond Funds](/glossary#bond)**: Invest in fixed income. Government, Corporate, Municipal, or High-Yield. These aim for income and stability rather than aggressive growth.
*   **[Balanced Funds](/glossary#asset-allocation)**: Hold a mix of stocks and bonds (e.g., 60/40) to provide growth and income in one package. Also called "hybrid funds."
*   **[Index Funds](/glossary#index-fund)**: Passively track a market index (like the S&P 500). They don't try to beat the market; they try to *be* the market. Lower fees, less trading.
*   **[Money Market Funds](/glossary#money-market)**: Invest in ultra-short-term debt. Safe, cash-like, stable $1.00 NAV. Used for parking cash.
*   **Target Date Funds**: Automatically adjust asset mix as you approach a specific retirement year (e.g., "Target Retirement 2055"). They start aggressive and get conservative over time.

## Part 3: Active vs. Passive Management

The great debate in the mutual fund world: Should you pay for expertise or settle for the average?

*   **Active Management**: Managers research and pick stocks to try to *beat* the market benchmark.
    *   *Pros*: Potential for outperformance, defensive moves in downturns (moving to cash), risk management.
    *   *Cons*: Higher fees (paying for the manager's salary/research), risk of underperformance, human error/bias.
*   **Passive Management (Indexing)**: Fund simply *tracks* a benchmark index. No stock picking.
    *   *Pros*: Ultra-low fees, tax efficiency (less trading), guaranteed market return (minus tiny fee).
    *   *Cons*: No chance to beat the market, full exposure to market drops (no defensive moves).
*   **The Data**: Over long periods (10-15 years), the vast majority (80-90%) of active managers fail to beat their benchmark after fees. This reality has driven the massive shift toward passive indexing.

## Part 4: Fees and Expenses

Costs matter immensely in mutual fund investing. A small percentage difference compounds to massive amounts over decades.

*   **[Expense Ratio](/glossary#expense-ratio)**: Annual fee expressed as a percentage of assets. 1% = $100 per $10,000 invested annually. This is deducted automatically from the fund's assets.
*   **Sales Load**: A commission paid to a broker or salesperson.
    *   *Front-End Load*: Paid when you buy (Class A shares). E.g., 5.75% load means only $94.25 of your $100 gets invested.
    *   *Back-End Load*: Paid when you sell (Class B shares). Often decreases the longer you hold.
*   **No-Load Funds**: No sales commissions. Bought directly from the fund company (Vanguard, Fidelity) or discount broker. Standard for DIY investors.
*   **12b-1 Fees**: Annual marketing and distribution fees included in the expense ratio. Essentially, you are paying for the fund's advertising.
*   **Impact**: A 1% fee difference on a $100,000 portfolio earning 7% over 30 years costs you over $200,000 in lost value. Always check the fees!

## Part 5: Buying and Selling Mechanics

Mutual funds trade differently than stocks or ETFs. Understanding the "forward pricing" mechanism is key.

*   **Forward Pricing**: Orders are executed at the *next* calculated NAV. You don't know the exact price when you click "buy."
*   **Cut-Off Time**: Usually 4:00 PM ET (market close). Orders placed before 4:00 get that day's closing price. Orders after 4:00 get the *next* day's closing price.
*   **No Intraday Trading**: You cannot buy or sell at 11:00 AM to catch a market move. Everyone gets the same daily price regardless of when they ordered during the day.
*   **Dollar Amounts**: You typically invest in dollar amounts (e.g., "Buy $3,000"), receiving fractional shares to 3 decimal places (e.g., 45.123 shares).
*   **Minimum Investment**: Many funds have initial minimums ($1,000, $3,000) but lower subsequent minimums ($1, $100). Some funds have no minimums.
*   **Automatic Investing**: Mutual funds are perfect for setting up recurring transfers from a bank account (Dollar Cost Averaging). "Invest $500 on the 1st of every month."

## Part 6: Advantages of Mutual Funds

Why they remain popular despite the rise of ETFs.

*   **Professional Management**: Access to experts (for active funds) who analyze markets full-time. You outsource the decision-making.
*   **Automatic Reinvestment**: Dividends and capital gains can be automatically reinvested into more shares without transaction fees, accelerating compounding.
*   **Fractional Shares**: Every dollar works. No leftover cash in the account. You can invest exactly $100.00.
*   **Simplicity**: Perfect for "set it and forget it" automated investing. Once set up, it runs on autopilot.
*   **Retirement Plans**: The default option in 401(k)s and 403(b)s. Most workplace plans only offer mutual funds.
*   **Diversification**: Instant exposure to hundreds or thousands of securities with one purchase. Reduces single-stock risk to near zero.

## Part 7: Disadvantages of Mutual Funds

The drawbacks that led to the ETF revolution and why some investors moved away.

*   **Fees**: Active funds often have high expense ratios (0.50% - 1.50%+) compared to ETFs (0.03% - 0.10%). High fees are a drag on performance.
*   **Tax Inefficiency**: Managers trading within the fund generate capital gains. By law, these must be distributed to shareholders annually. You can owe taxes even if you didn't sell a single share!
*   **Liquidity**: Can only trade once per day. No exit during a mid-day crash. You are locked in until the close.
*   **Cash Drag**: Funds must hold cash to handle potential redemptions. Cash earns little, so holding 5% cash can drag on performance in rising markets.
*   **Minimums**: High initial investment requirements ($3,000+) can lock out small investors starting their journey.
*   **Style Drift**: Active managers may stray from their stated strategy (e.g., a value manager buying tech stocks) to chase returns, messing up your asset allocation.

## Part 8: Reading a Fund Prospectus

The prospectus is the legal document describing the fund. It's boring but essential. Key sections to check:

*   **Investment Objective**: What is the goal? Growth? Income? Preservation of capital? Make sure it matches your goal.
*   **Fees and Expenses**: Look for the "Fee Table." Check the expense ratio and any sales loads. This is the most critical section.
*   **Principal Risks**: What can go wrong? Market risk, credit risk, currency risk? Understand the downside.
*   **Performance**: Historical returns vs. benchmark index over 1, 5, and 10 years. Remember: Past performance does not guarantee future results.
*   **Top Holdings**: What does the fund actually own? Apple? Exxon? Treasury bonds? Does it align with the name?
*   **Manager Tenure**: How long has the current team been running the fund? A great 10-year record means nothing if the star manager left last month.

## Part 9: Mutual Funds in Your Portfolio

Strategic use cases for mutual funds in a modern portfolio.

*   **Core Retirement**: Target Date Funds in 401(k)s are excellent, hands-off solutions. They handle diversification and rebalancing for you.
*   **Index Investing**: Vanguard Admiral Shares or Fidelity Zero funds offer rock-bottom costs for indexers. Fidelity Zero funds have 0.00% expense ratios.
*   **Niche Active**: Some sectors (like high-yield bonds, small-cap international, or emerging markets) may benefit from active management where markets are less efficient.
*   **Automated Savings**: Use mutual funds for monthly automated investments to build wealth slowly. The automation is a behavioral superpower.
*   **Tax-Advantaged Accounts**: Best held in IRAs/401(k)s to avoid capital gains tax distributions. Use ETFs for taxable brokerage accounts.
*   **Comparison**: Always compare a fund's fees and performance to a comparable ETF before buying. If the ETF is cheaper and performs the same, it's usually the better choice.
\`,
        keyTakeaways: [
            "Mutual funds pool money from many investors to buy diversified portfolios, managed by professionals.",
            "They trade once daily at Net Asset Value (NAV), unlike stocks or ETFs which trade intraday.",
            "Active funds try to beat the market (high fees); Index funds track it (low fees).",
            "Watch out for expense ratios and sales loads — high costs destroy long-term returns."
        ]
    },`;

const startMarker = '"fe_1": {';
const endMarker = '"fe_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_1: Mutual Funds Explained - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_1!');
