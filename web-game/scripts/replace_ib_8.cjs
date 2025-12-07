const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_8": {
        title: "Opening a Brokerage Account",
        content: \`
# Opening a Brokerage Account

Before you can invest a single dollar, you need a brokerage account. This is your gateway to the markets. Think of it as a bank account specifically designed for buying and selling investments. Choosing the right broker and understanding account types will save you money and headaches. This lesson walks you through everything you need to get started.

## Part 1: What Is a Brokerage Account?

A brokerage account is a financial account that allows you to buy and sell investments like [stocks](/glossary#stock), [bonds](/glossary#bond), [ETFs](/glossary#etf), and [mutual funds](/glossary#mutual-fund).

*   **The Broker**: A brokerage firm (like Fidelity, Schwab, Vanguard, or Robinhood) acts as the intermediary between you and the stock exchange.
*   **Your Ownership**: When you buy [stocks](/glossary#stock), you actually own them. The broker just holds them on your behalf for convenience.
*   **Account vs. Investment**: The account is the container. The investments are what you put in the container. An empty account earns nothing.
*   **Regulation**: Brokers are heavily regulated by the SEC and FINRA in the US to protect investors from fraud.
*   **Getting Started**: Opening an account typically takes 10-15 minutes online with your Social Security number and bank info for funding.

## Part 2: Cash Account vs. Margin Account

There are two main types of brokerage accounts. Understanding the difference is crucial for your safety.

*   **[Cash Account](/glossary#cash-account)**:
    *   You can only trade with money you've actually deposited. No borrowing allowed.
    *   Safest option for beginners. You can never lose more than you put in.
    *   Trades "[settle](/glossary#settlement)" in T+2 (two business days after trade execution).
    *   Cannot short sell [stocks](/glossary#stock) or use [leverage](/glossary#leverage).
*   **[Margin Account](/glossary#margin-account)**:
    *   Allows you to borrow money from the broker to buy more securities ([leverage](/glossary#leverage)).
    *   Can amplify gains but also amplify losses. You can lose MORE than you deposit.
    *   Broker will issue a "[Margin Call](/glossary#margin-call)" if your account falls below minimum requirements — forcing you to deposit more or sell.
    *   Required for short selling and most options trading.
*   **Recommendation**: Start with a [Cash Account](/glossary#cash-account). Only use margin after years of experience, if ever.

## Part 3: Account Protections — Is Your Money Safe?

What happens if your broker goes bankrupt? Multiple layers of protection exist.

*   **[SIPC Insurance](/glossary#sipc)**: Securities Investor Protection Corporation protects up to $500,000 per account (including $250,000 for cash) if your broker fails.
*   **What SIPC DOESN'T Cover**: Investment losses. If your [stocks](/glossary#stock) drop 50%, that's not covered. SIPC only covers broker failure.
*   **Excess Insurance**: Major brokers (Fidelity, Schwab, Vanguard) carry additional insurance beyond SIPC limits for high-net-worth clients.
*   **Segregated Assets**: Your investments are kept separate from the broker's own assets. If the broker fails, your [stocks](/glossary#stock) are still yours.
*   **FDIC for Cash**: Cash in brokerage cash sweeps may be FDIC insured up to $250,000, depending on the broker's arrangement.
*   **Bottom Line**: Choose a large, reputable broker. Your investments are very safe.

## Part 4: Major Brokers Compared

The brokerage industry has consolidated around a few giants. Most offer $0 commission trading now.

*   **Fidelity**: Oldest and largest retail broker. No minimums, no fees, excellent research, great customer service. Best overall choice.
*   **Charles Schwab**: Merged with TD Ameritrade. Comprehensive platform, $0 commissions, excellent research and banking integration.
*   **Vanguard**: Pioneer of [index funds](/glossary#index-fund). Best for long-term, buy-and-hold investors. Interface is dated but functional.
*   **Robinhood**: Best mobile app, [fractional shares](/glossary#fractional-shares), crypto access, user-friendly. Criticized for [PFOF](/glossary#pfof) practices and gamification.
*   **Interactive Brokers**: Best for advanced traders, options, and international access. Lower-cost margin rates.
*   **E-Trade**: Acquired by Morgan Stanley. Good platform, educational content, options trading tools.
*   **Recommendation**: For most beginners, **Fidelity** or **Schwab** offer the best combination of low cost, features, and service.

## Part 5: Account Minimums and Fees

The fee war is over — and investors won. Most costs have gone to zero.

*   **Account Minimums**: Most major brokers now require $0 to open an account. You can start with literally $1.
*   **Stock/[ETF](/glossary#etf) Commissions**: $0 at all major brokers for US-listed securities.
*   **[Mutual Fund](/glossary#mutual-fund) Fees**: Varies. Broker's own funds are usually free. Third-party funds may carry fees ($20-50 per trade).
*   **Account Maintenance Fees**: Generally $0 at major brokers. Watch out for smaller or specialized brokers.
*   **Wire Transfer Fees**: $25-50 for outgoing wires. ACH transfers are free.
*   **Foreign Stock Fees**: ADRs (American Depository Receipts) may carry small fees.
*   **Hidden Fees to Avoid**: Paper statement fees, account closure fees, inactivity fees at smaller brokers.

## Part 6: Fractional Shares — Start Small

[Fractional shares](/glossary#fractional-shares) have revolutionized investing for beginners. You no longer need hundreds of dollars to buy a single share.

*   **What It Is**: The ability to buy a portion of a share based on a dollar amount, not a share count.
*   **Example**: Amazon trades at $3,500. With [fractional shares](/glossary#fractional-shares), you can invest $50 and own 0.014 shares of Amazon.
*   **Benefit**: Perfect [diversification](/glossary#diversification) is now possible even with small amounts. $100 can be spread across 10 [stocks](/glossary#stock).
*   **Dividend Treatment**: If you own 0.5 shares and the [dividend](/glossary#dividend) is $1 per share, you receive $0.50.
*   **Availability**: Fidelity, Schwab, Robinhood, and others support [fractional shares](/glossary#fractional-shares). Not all brokers offer this feature.
*   **Game Changer**: This removed the "I can't afford to start" excuse forever. You can invest with literally $1.

## Part 7: Funding Your Account

Once you open an account, you need to add money. Multiple methods exist with different speeds.

*   **ACH Transfer** (Bank Link): Free. Takes 1-3 business days. Link your bank account and transfer electronically.
*   **Wire Transfer**: Fast (same day) but costly ($25-50 fee). Use for large amounts when speed matters.
*   **Check Deposit**: Most brokers accept mobile check deposits. Takes 1-5 days to clear.
*   **Account Transfer (ACAT)**: Moving accounts from another broker. Free at receiving broker, may be charged at old broker.
*   **Instant Deposits**: Robinhood and others offer instant access to transferred funds (up to a limit) before they actually clear.
*   **Pro Tip**: Set up automatic recurring transfers from your bank on payday. "[Dollar Cost Averaging](/glossary#dollar-cost-averaging)" happens automatically.

## Part 8: The PDT Rule — For Active Traders

If you plan to trade actively, you need to understand the Pattern Day Trader ([PDT](/glossary#pdt-rule)) rule.

*   **What It Is**: SEC/FINRA regulation that restricts frequent trading in [margin accounts](/glossary#margin-account) under $25,000.
*   **Definition**: A "day trade" is buying AND selling the same security within the same trading day.
*   **The Rule**: If you make 4+ day trades within 5 business days, and day trades exceed 6% of activity, you're flagged as a "[Pattern Day Trader](/glossary#pdt-rule)."
*   **Consequence**: Your account is restricted until you deposit $25,000 minimum OR wait 90 days.
*   **Workaround 1**: Use a [cash account](/glossary#cash-account) (not margin). PDT rule doesn't apply, but you must wait for trades to settle (T+2).
*   **Workaround 2**: Swing trade (hold overnight) instead of day trading.
*   **Reality Check**: Day trading is statistically terrible for retail investors anyway. 95% lose money. The rule might save you from yourself.

## Part 9: Your First Investment Steps

You've opened the account, funded it, and you're ready to invest. Here's the practical checklist.

1.  **Research**: Decide what to buy. For beginners, a simple [index fund](/glossary#index-fund) [ETF](/glossary#etf) like VTI or VOO is sufficient.
2.  **Order Entry**: Enter the ticker symbol, quantity (or dollar amount for [fractional shares](/glossary#fractional-shares)), and order type.
3.  **Order Type**: For beginners, use "[Market Order](/glossary#market-order)" during market hours. It executes immediately at best available price.
4.  **Review**: Check the estimated cost including any fees before confirming.
5.  **Confirm**: Submit the order. For [market orders](/glossary#market-order), execution is nearly instant during trading hours.
6.  **Document**: Save trade confirmations for tax records.
7.  **Repeat**: Set up automatic investments every paycheck. Consistency beats timing.
*   **Congratulations**: Once you own one share of the market, you're officially an investor. You now own a piece of the global economy.
\`,
        keyTakeaways: [
            "Start with a Cash Account — no leverage, no risk of losing more than you invest.",
            "SIPC protects up to $500k if your broker fails, but not against investment losses.",
            "Major brokers like Fidelity and Schwab charge $0 commissions with no minimums.",
            "Fractional shares allow anyone to start investing with as little as $1."
        ]
    },`;

const startMarker = '"ib_8": {';
const endMarker = '"ib_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_8: Brokerage Accounts - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');
if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_8!');
