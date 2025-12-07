const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_9": {
        title: "Short Selling",
        content: \`
# Short Selling: Betting Against Stocks

[Short selling](/glossary#short-selling) is a trading strategy where you profit when a [stock](/glossary#stock) price falls. It's the opposite of traditional investing. While most investors buy low and hope to sell high, short sellers sell high first and buy low later. Understanding short selling helps you comprehend market dynamics, even if you never short a [stock](/glossary#stock) yourself.

## Part 1: How Short Selling Works

[Short selling](/glossary#short-selling) is mechanically complex. You sell something you don't own, then buy it back later.

*   **Step 1 — Borrow Shares**: Through your broker, you borrow shares from another investor (often without them knowing).
*   **Step 2 — Sell Immediately**: You sell those borrowed shares at the current market price.
*   **Step 3 — Wait for Decline**: You hope the [stock](/glossary#stock) price drops.
*   **Step 4 — Buy to Cover**: You buy shares at the (hopefully) lower price to return to the lender.
*   **Step 5 — Return Shares**: The shares go back to the original owner. You keep the price difference as profit.
*   **Example**: Borrow and sell 100 shares at $50 (receive $5,000). Stock falls to $30. Buy back at $30 (spend $3,000). Profit: $2,000.

## Part 2: Why Investors Short Sell

There are legitimate reasons to short beyond just speculation. Short sellers play an important market role.

*   **Profit from Overvaluation**: If you believe a [stock](/glossary#stock) is overpriced, shorting lets you profit from its decline.
*   **Hedging**: [Portfolio](/glossary#portfolio) managers short to offset [risk](/glossary#risk). Long one tech company, short another to hedge sector exposure.
*   **Market Efficiency**: Short sellers uncover fraud and overvaluation. Enron's collapse was predicted by short sellers long before analysts.
*   **Trading Strategies**: Pairs trading, statistical arbitrage, and market-neutral strategies require shorting.
*   **Speculation**: Some traders simply bet against struggling or overvalued companies.
*   **The Contrarian Role**: Short sellers provide price discovery by betting against the crowd when valuations disconnect from reality.

## Part 3: The Enormous Risks of Short Selling

[Short selling](/glossary#short-selling) is far riskier than buying [stocks](/glossary#stock). The math is fundamentally different and extremely dangerous.

*   **Unlimited Loss Potential**: When you buy a [stock](/glossary#stock), maximum loss is 100% (it goes to $0). When you short, losses are theoretically infinite (stock can rise forever).
*   **Example Disaster**: Short at $50. Stock rises to $500. You owe $450 per share. 900% loss.
*   **[Margin Calls](/glossary#margin-call)**: As the [stock](/glossary#stock) rises against you, your broker demands more collateral. If you can't pay, they force-close your position at a huge loss.
*   **Borrowing Costs**: You pay interest to borrow shares. Hard-to-borrow [stocks](/glossary#stock) can cost 20-100%+ annually.
*   **[Dividend](/glossary#dividend) Payments**: If the [stock](/glossary#stock) pays [dividends](/glossary#dividend), YOU must pay them to the share lender.
*   **Buy-In [Risk](/glossary#risk)**: The lender can recall shares anytime, forcing you to close at a potentially terrible price.

## Part 4: Short Squeeze — The Short Seller's Nightmare

A [short squeeze](/glossary#short-squeeze) is when rising prices force short sellers to buy, which causes prices to rise even faster.

*   **The Mechanism**: Price rises → Short sellers panic and "buy to cover" → Their buying pushes price higher → More shorts cover → Feedback loop.
*   **Famous Example — GameStop (2021)**: Heavily shorted [stock](/glossary#stock) triggered epic [short squeeze](/glossary#short-squeeze). Rose from $20 to $483 in weeks. Hedge funds lost billions.
*   **[Short Interest](/glossary#short-interest)**: Percentage of shares sold short. When >20% of shares are short, squeeze potential is high.
*   **Days to Cover**: [Short interest](/glossary#short-interest) ÷ Average daily [volume](/glossary#volume). If it takes 10 days of trading to cover all shorts, pressure builds.
*   **Coordinated Buying**: Reddit's r/WallStreetBets showed retail investors could coordinate buying to trigger squeezes.
*   **Your Safety**: Even if you don't short, understanding squeezee dynamics helps explain extreme [volatility](/glossary#volatility).

## Part 5: Locating and Borrowing Shares

Before you can short, your broker must find shares to borrow. This isn't always possible.

*   **Easy to Borrow**: Large, liquid [stocks](/glossary#stock) (Apple, Microsoft) have abundant shares available. Low borrowing costs.
*   **Hard to Borrow (HTB)**: Heavily shorted [stocks](/glossary#stock) or small floats may have limited shares. Premium rates charged.
*   **Impossible to Borrow**: Sometimes no shares are available at any price. You simply cannot short.
*   **Locate Requirements**: Before shorting, broker must "locate" shares. Failed locates mean you can't execute the trade.
*   **[Naked Short Selling](/glossary#naked-short)**: Selling without actually borrowing shares. Mostly illegal. Results in "failure to deliver."
*   **Regulation SHO**: SEC rules governing short sales, including locate requirements and threshold lists.

## Part 6: Short Sale Restrictions

Regulators have implemented rules to prevent manipulative short selling from destabilizing markets.

*   **Alternative [Uptick Rule](/glossary#uptick-rule)**: If a [stock](/glossary#stock) drops 10% in a day, short selling is restricted. Shorts can only execute at prices above the best [bid](/glossary#bid-ask-spread).
*   **Purpose**: Prevent short sellers from pile-driving already-falling [stocks](/glossary#stock).
*   **Duration**: Restriction applies for remainder of day and the following trading day.
*   **History**: Original uptick rule eliminated in 2007. After 2008 crisis, new version implemented.
*   **[ETF](/glossary#etf) Shorting**: Shorting [ETFs](/glossary#etf) has different dynamics. "Authorized Participants" can create/redeem shares.
*   **Index Shorts**: Shorting S&P 500 [ETFs](/glossary#etf) (like SPY) is a way to short the entire market.

## Part 7: Alternatives to Direct Short Selling

You don't need to borrow shares to bet against [stocks](/glossary#stock). Alternatives exist with different [risk](/glossary#risk) profiles.

*   **[Put Options](/glossary#options)**: Buy the right to sell a [stock](/glossary#stock) at a set price. Max loss = [premium](/glossary#premium) paid. Capped [risk](/glossary#risk).
*   **Inverse [ETFs](/glossary#etf)**: Funds that go up when the market goes down (SH, SPXU). Easy but suffer from decay.
*   **[Short ETFs](/glossary#etf)**: Single-stock inverse products (e.g., -1x Apple). Very high [risk](/glossary#risk) and fees.
*   **Compare [Risk](/glossary#risk)**: Direct shorting = unlimited loss. Put [options](/glossary#options) = max loss is [premium](/glossary#premium) paid. Different tools for different situations.
*   **Time Decay**: [Options](/glossary#options) lose value over time. Your timing must be right, not just your direction.
*   **For Most Investors**: These tools are speculative. Stick to long-term buy-and-hold strategies.

## Part 8: Famous Short Sellers and Their Stories

History's great short sellers made fortunes (and enemies) betting against the crowd.

*   **Michael Burry**: Shorted subprime mortgages before 2008 crash. Made ~$100 million personally. Featured in "The Big Short."
*   **David Einhorn**: Shorted Lehman Brothers before its collapse. Called out Allied Capital's fraud years earlier.
*   **Jim Chanos**: Identified Enron as a fraud while everyone loved it. Warned of implosion years before bankruptcy.
*   **Bill Ackman**: Famous for both wins (Valeant) and losses (Herbalife). Public short campaigns.
*   **Andrew Left (Citron)**: Retail-focused short seller publishing reports on alleged fraud. Often controversial.
*   **The Pattern**: Great short sellers are contrarian researchers who dig deep, often facing intense backlash before vindication.

## Part 9: Should You Short Sell?

For most investors, the answer is clearly no. Here's the honest assessment.

*   **Beginner Verdict**: Absolutely not. The unlimited loss potential can destroy your [portfolio](/glossary#portfolio) and more.
*   **Intermediate Verdict**: Still no. You're battling against the market's long-term upward bias.
*   **Advanced Verdict**: Maybe, but only as a hedge within sophisticated strategies, with strict [risk](/glossary#risk) management.
*   **The Odds**: The stock market goes up ~75% of all years. Shorting is betting against long-term odds.
*   **Alternative**: If you're bearish, just reduce equity exposure and hold more cash or [bonds](/glossary#bond). No need to short.
*   **Educational Value**: Understanding shorting helps you interpret [short interest](/glossary#short-interest) data, squeeze dynamics, and market mechanics.
*   **Final Advice**: For 99% of investors, shorting should remain a concept you understand but never practice.
\`,
        keyTakeaways: [
            "Short selling profits from falling prices — you borrow, sell, then buy back at lower prices.",
            "Short selling has unlimited loss potential — stocks can rise infinitely against you.",
            "Short squeezes occur when rising prices force short sellers to buy, pushing prices even higher.",
            "Most investors should never short sell — understand it, but don't practice it."
        ]
    },`;

const startMarker = '"sm_9": {';
const endMarker = '"sm_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_9: Short Selling - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_9!');
