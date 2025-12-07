const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_2": {
        title: "The Rise of ETFs",
        content: \`
# The Rise of ETFs: Investing 2.0

[Exchange-Traded Funds](/glossary#etf) (ETFs) have revolutionized investing by combining the diversification of mutual funds with the flexibility of stocks. Since the launch of SPY in 1993, they have attracted trillions of dollars, largely replacing traditional mutual funds for many investors. Understanding how ETFs work is essential for building a modern, low-cost portfolio.

## Part 1: What Is an ETF?

An [ETF](/glossary#etf) is a basket of securities that trades on an exchange like a single stock.

*   **Hybrid Structure**: Like a mutual fund, it holds a portfolio of assets (stocks, bonds, commodities). Like a stock, it trades intraday on an exchange (NYSE, Nasdaq).
*   **Ticker Symbol**: ETFs have tickers (e.g., VOO, QQQ, GLD) and can be bought/sold through any brokerage account alongside stocks.
*   **Passive Dominance**: Most ETFs track an index (S&P 500, Nasdaq 100, Russell 2000), though active ETFs exist. They aim to replicate market performance.
*   **Transparency**: Most ETFs disclose their holdings daily. You know exactly what you own at any given time, unlike mutual funds which disclose quarterly.
*   **Tax Efficiency**: Due to a unique creation/redemption mechanism, ETFs are extremely tax-efficient, rarely distributing capital gains to shareholders.
*   **Cost**: Generally lower fees than mutual funds because they are cheaper to run (no call centers, no marketing to individual investors).

## Part 2: How ETFs Trade

Unlike mutual funds, ETFs offer real-time trading flexibility, giving you control over price and timing.

*   **Intraday Trading**: Buy at 10:00 AM, sell at 2:00 PM. Price changes second by second based on supply and demand.
*   **Order Types**: You can use [limit orders](/glossary#limit-order) (set max price), [stop-loss orders](/glossary#stop-loss) (protect downside), and margin, just like stocks.
*   **Bid-Ask Spread**: You pay the "ask" (higher) and sell at the "bid" (lower). Liquid ETFs (SPY) have penny spreads; niche ETFs have wider spreads. Always check the spread.
*   **Premium/Discount**: ETF price can drift slightly from the value of underlying assets (NAV), but arbitrage keeps it close. Large gaps are rare for major funds.
*   **Options**: You can trade options on many ETFs for hedging or income strategies (e.g., selling covered calls on SPY).
*   **Short Selling**: You can short ETFs to bet against a market or sector. This allows you to profit from a decline in the S&P 500 or Gold.

## Part 3: The Creation/Redemption Mechanism

The "secret sauce" that keeps ETF prices in line with their assets and minimizes taxes.

*   **Authorized Participants (APs)**: Large institutions (market makers, banks) that work with the ETF issuer. Only APs can create or destroy shares.
*   **Creation**: If ETF price > NAV, AP buys underlying stocks, exchanges them for new ETF shares, and sells shares. This supply lowers the price back to NAV.
*   **Redemption**: If ETF price < NAV, AP buys ETF shares, exchanges them for underlying stocks, and sells stocks. This demand raises the price back to NAV.
*   **Arbitrage**: This profit motive ensures the ETF price tracks the index almost perfectly. The market keeps itself efficient.
*   **Tax Magic**: When redeeming, the ETF manager gives the AP the *lowest cost basis* stocks. This washes out capital gains inside the fund, so retail investors don't get hit with tax bills. This is a huge advantage over mutual funds.

## Part 4: Types of ETFs

The ETF universe has expanded to cover every corner of the market, offering tools for every strategy.

*   **Broad Market**: Track major indices (VTI for Total US Market, VOO for S&P 500). The core of most portfolios.
*   **Sector ETFs**: Target specific industries (XLK for Tech, XLE for Energy, XLV for Healthcare). Used for tactical bets.
*   **Bond ETFs**: Treasuries (TLT), Corporates (LQD), Munis (MUB). Trade bonds as easily as stocks.
*   **Commodity ETFs**: Gold (GLD), Oil (USO), Agriculture. Gain exposure without buying futures or storing bars.
*   **International**: Developed markets (VEA), Emerging markets (VWO). Own the world outside the US.
*   **Style ETFs**: Growth (VUG), Value (VTV), Dividend (VIG). Target specific factors.
*   **Thematic**: Cybersecurity, Clean Energy, Robotics, Cannabis. High risk/reward bets on future trends.
*   **Crypto ETFs**: Bitcoin (IBIT) and Ethereum funds. Direct exposure to digital assets via brokerage.

## Part 5: ETFs vs. Mutual Funds

Comparing the two major pooled investment vehicles to decide which is right for you.

*   **Trading**: ETFs trade all day; Mutual Funds trade once at close. ETFs offer liquidity; Mutual Funds offer simplicity.
*   **Minimums**: ETFs = 1 share price (or fractional shares at some brokers). Mutual Funds = often $1,000 - $3,000 initial minimum.
*   **Taxes**: ETFs are more tax-efficient (fewer capital gains distributions). Better for taxable accounts.
*   **Fees**: ETFs generally lower (0.03% vs 0.50%+), though index mutual funds are competitive (0.04%).
*   **Commissions**: Most brokers now offer commission-free trading for both. Historically, ETFs had commissions.
*   **Automatic Investing**: Mutual funds are better for "invest $500/month." ETFs require buying specific share counts (unless broker supports fractional auto-invest).

## Part 6: Active ETFs

A newer trend: Active management in an ETF wrapper.

*   **Definition**: Manager picks stocks to beat the market, but structure is an ETF. Combines active strategy with ETF tax benefits.
*   **ARK Invest**: Cathie Wood's ARK funds popularized active ETFs (high growth, high volatility). Focused on "disruptive innovation."
*   **Covered Call ETFs**: JEPI, QYLD sell options to generate high income. Popular for income investors.
*   **Benefits**: Intraday liquidity and tax efficiency for active strategies. No "window dressing" or hidden moves.
*   **Drawbacks**: Higher fees (0.75%+) than passive ETFs. Manager risk (manager might be wrong).
*   **Transparency**: Some use "semi-transparent" structures to hide trades for a day, but most reveal daily. You see the manager's moves in real-time.

## Part 7: Risks of ETFs

ETFs aren't risk-free. Understand the potential pitfalls before buying.

*   **Market Risk**: If the S&P 500 falls 20%, your S&P 500 ETF falls 20%. The vehicle doesn't protect you from the asset's performance.
*   **Liquidity Risk**: Niche ETFs (e.g., "Micro-Cap Uzbekistan ETF") may have wide spreads and thin volume. You might pay 2% just to buy/sell.
*   **Tracking Error**: The ETF performance may deviate slightly from the index due to fees or sampling. Usually tiny for major funds.
*   **Closure Risk**: Unpopular ETFs can close, forcing you to sell and realize taxes. Stick to funds with >$100M assets.
*   **Trading Temptation**: Because they are easy to trade, investors may over-trade (day trade) instead of holding long-term. "Liquidity is a double-edged sword."
*   **Leveraged/Inverse Risk**: 2x or 3x ETFs decay over time due to math. Dangerous for long-term holding (more in later lessons).

## Part 8: How to Choose an ETF

With 3,000+ US ETFs, how do you pick the right one? Use these criteria.

*   **Expense Ratio**: Lower is better. <0.10% for core funds. <0.50% for specialty funds. Avoid high fees.
*   **Liquidity**: Look for high daily volume and tight bid-ask spreads. You want to enter and exit easily.
*   **Assets Under Management (AUM)**: Larger funds are less likely to close. >$100M is a safe threshold. >$1B is excellent.
*   **Index Tracking**: Does it track the index well? Check "tracking difference." It should lag by exactly the expense ratio.
*   **Holdings**: Look inside. Does "Clean Energy ETF" hold companies you actually consider clean energy? Don't trust the name; trust the holdings.
*   **Issuer**: Vanguard, BlackRock (iShares), and State Street (SPDR) are the "Big Three" dominant issuers. They are generally safe bets.

## Part 9: Building an ETF Portfolio

Constructing a complete portfolio using just a few ETFs.

*   **The Boglehead 3-Fund**:
    *   VTI (Total US Stock)
    *   VXUS (Total International Stock)
    *   BND (Total Bond Market)
    *   *Result*: You own the entire investable world. Simple, low cost, diversified.
*   **The Core & Satellite**:
    *   Core: 80% in VTI/BND (low cost index).
    *   Satellite: 20% in Sector or Thematic ETFs (e.g., Tech or Clean Energy) for potential alpha.
*   **Income Portfolio**: High-dividend ETFs (VYM) + Corp Bond ETFs (LQD) + REIT ETFs (VNQ). Focused on cash flow.
*   **Rebalancing**: Once a year, sell winners and buy losers to restore target percentages. This forces you to "buy low, sell high."
*   **Simplicity**: You can own the entire global market with just 2 ETFs (VT + BNDW). Complexity is not required for success.
\`,
        keyTakeaways: [
            "ETFs trade like stocks but offer the diversification of mutual funds.",
            "They are generally cheaper and more tax-efficient than mutual funds.",
            "Creation/Redemption mechanism keeps price close to NAV and minimizes taxes.",
            "Passive index ETFs are the best building blocks for most portfolios."
        ]
    },`;

const startMarker = '"fe_2": {';
const endMarker = '"fe_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_2: The Rise of ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_2!');
