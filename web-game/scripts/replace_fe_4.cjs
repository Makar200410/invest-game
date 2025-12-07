const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_4": {
        title: "NAV: Net Asset Value",
        content: \`
# NAV: The Price Tag of a Fund

[Net Asset Value](/glossary#nav) (NAV) is the fundamental pricing mechanism for mutual funds and ETFs. While stocks trade based on supply and demand, a fund's value is derived from the assets it holds. Understanding NAV helps you understand how funds are priced, how they trade, and why ETFs can sometimes trade at a "premium" or "discount." It's the difference between the price of the basket and the value of the groceries inside.

## Part 1: What Is NAV?

NAV represents the per-share value of the fund's assets minus its liabilities. It is the "fair value" of one share.

*   **The Formula**: (Total Assets - Total Liabilities) / Number of Shares Outstanding.
*   **Total Assets**: The current market value of all stocks, bonds, cash, and other securities held by the fund. This fluctuates every second the market is open.
*   **Total Liabilities**: Fees owed to managers, operational costs, pending redemptions, and any money borrowed.
*   **Shares Outstanding**: The total number of shares held by investors.
*   **Example**: Fund has $100M in stocks, $1M in liabilities, and 10M shares. NAV = ($100M - $1M) / 10M = $9.90 per share.
*   **Daily Calculation**: NAV is calculated once per day, typically at 4:00 PM ET after markets close. This is the official price for mutual fund transactions.

## Part 2: Mutual Funds and NAV

For mutual funds, NAV is the only price that matters. The trading mechanism is rigid.

*   **End-of-Day Pricing**: Mutual funds do not trade intraday. You can't buy at 10:00 AM price. The market closes, the fund accountants do the math, and then the price is set.
*   **Forward Pricing**: When you place an order, you get the *next* calculated NAV. If you buy at 2:00 PM, you get the 4:00 PM price. You are buying "blind" to the exact price.
*   **Certainty**: You always buy and sell exactly at NAV. There is no bid-ask spread. There is no premium or discount. You get exactly what the assets are worth.
*   **The Process**:
    1.  Market closes at 4:00 PM.
    2.  Fund accountants value every security in the portfolio (thousands of stocks).
    3.  They subtract accrued fees/expenses.
    4.  They divide by share count.
    5.  The new NAV is published (usually by 6:00 PM).
    6.  Your order executes at this price.

## Part 3: ETFs and Intraday Pricing

ETFs introduce a layer of complexity because they trade like stocks on an exchange.

*   **Market Price**: The price you pay on the exchange (e.g., $100.50). Determined by buyer/seller supply and demand. This changes every millisecond.
*   **Intraday NAV (iNAV)**: An estimate of the fund's value updated every 15 seconds during the trading day. It helps investors see if the market price is fair.
*   **The Disconnect**: The Market Price can differ from the NAV. The price of the ETF share is distinct from the value of the underlying assets.
*   **Premium**: Market Price > NAV. You are paying $101 for $100 worth of assets. This is bad for buyers.
*   **Discount**: Market Price < NAV. You are paying $99 for $100 worth of assets. This is good for buyers (if it closes).
*   **Arbitrage**: Authorized Participants (APs) step in to close these gaps. If there is a premium, they create shares to sell. If a discount, they buy shares to redeem. This keeps price close to NAV.

## Part 4: Premiums and Discounts Explained

Why do ETF prices deviate from their asset value? It's usually about liquidity and timing.

*   **Supply and Demand**: If everyone wants to buy a specific ETF (e.g., a hot tech fund), price rises above NAV (Premium) before APs can create new shares.
*   **Market Volatility**: In fast-moving markets, the ETF price might move faster than the underlying stocks (or vice versa). The ETF becomes the price discovery vehicle.
*   **International Funds**: If the Japanese market is closed but the US market is open, the Japan ETF trades based on *expectations* of tomorrow's Japan open. This creates natural premiums/discounts relative to the "stale" closing price of Japanese stocks.
*   **Bond ETFs**: Bonds trade infrequently. The ETF price is often a better "real-time" indicator of value than the stale bond prices. The "discount" might actually be the bond market lagging the ETF.
*   **Closed-End Funds**: These funds don't have the creation/redemption mechanism. They can trade at massive premiums (10%+) or discounts (-15%) for years. Never confuse them with ETFs.

## Part 5: The Bid-Ask Spread

Another cost layer related to pricing that acts like a hidden fee.

*   **Bid**: The highest price a buyer is willing to pay right now.
*   **Ask**: The lowest price a seller is willing to accept right now.
*   **Spread**: The difference (Ask - Bid). You pay the spread every time you trade. You buy at the Ask and sell at the Bid.
*   **Mutual Funds**: No spread. You trade at NAV.
*   **ETFs**: Have spreads.
    *   *Liquid ETFs (SPY)*: Spread is $0.01 (0.002%). Negligible.
    *   *Illiquid ETFs*: Spread can be $0.50 or more (1%+). Significant cost.
*   **Hidden Cost**: A wide spread acts like an extra fee. If you trade a fund with a 1% spread, you are instantly down 1%. Always use limit orders for illiquid funds to control your price.

## Part 6: How Distributions Affect NAV

When a fund pays a dividend, the NAV drops. This confuses many investors who think they lost money.

*   **The Mechanism**: A fund accumulates dividends from its stocks. It pays them out to you (say, $1.00 per share).
*   **The Drop**: On the "ex-dividend date," the NAV drops by exactly $1.00. The money moved from the fund's bank account to your pocket.
*   **No Loss**: You have $1.00 in cash and a share worth $1.00 less. Your total wealth is unchanged. It's like taking money out of your left pocket and putting it in your right.
*   **Capital Gains**: Same logic applies to capital gains distributions. The fund sells a winner, distributes the profit, and the NAV drops.
*   **Tax Consequence**: In a taxable account, you owe tax on that $1.00, even though the share price dropped. This is the "phantom tax" issue with mutual funds.
*   **Reinvestment**: If you reinvest, you use that $1.00 to buy more shares at the lower NAV. You end up with more shares, but the same total value.

## Part 7: NAV in Bear Markets

How NAV behaves when markets crash and liquidity dries up.

*   **Direct Reflection**: NAV falls exactly in line with the portfolio's value. No "panic discount" for mutual funds.
*   **ETF Dislocation**: In extreme crashes (like March 2020), bond ETF prices fell *below* NAV. The ETF was trading at a discount.
*   **Price Discovery**: The ETF price was actually "right" — it reflected the true clearing price, while the underlying bond prices were stale because no bonds were trading. The ETF became the market.
*   **Liquidity Illusion**: Mutual funds promise daily liquidity at NAV, but if the underlying assets (like junk bonds) can't be sold, the fund may freeze redemptions (rare but possible).
*   **Stale Pricing**: Sometimes NAV is wrong because it uses the last traded price of an asset that hasn't traded in days.

## Part 8: Evaluating NAV for Purchase

When should you care about NAV? It depends on the vehicle.

*   **Mutual Funds**: Ignore it. You get fair value automatically. Just place your order.
*   **Major ETFs (SPY, VTI)**: Ignore it. Arbitrage keeps it tight. The premium/discount is usually < 0.01%.
*   **Niche ETFs**: Check the premium/discount. Don't buy if the premium is >1%. Wait for it to normalize. You don't want to overpay.
*   **International ETFs**: Understand that premiums/discounts are normal due to time zone differences. Don't panic if you see a 0.5% discount on a European fund.
*   **Closed-End Funds**: NEVER ignore it. Buying at a huge premium is a wealth killer. Buying at a discount can be a strategy (buying $1.00 of assets for $0.90).

## Part 9: Summary of Pricing Mechanics

Recap of how your funds are valued and traded.

*   **Mutual Fund**: Price = NAV. Calculated once/day. No spread. Forward pricing. Simple, fair, but rigid.
*   **ETF**: Price = Market Supply/Demand. Trades intraday. Has spread. Usually close to NAV. Flexible, transparent, but requires care.
*   **Premium**: Price > NAV. Bad for buyers, good for sellers. Avoid buying large premiums.
*   **Discount**: Price < NAV. Good for buyers, bad for sellers.
*   **Total Return**: Change in NAV + Distributions (dividends/gains). This is the number that matters for your wealth, not just the price chart.
*   **The Lesson**: For most index investors, NAV mechanics work in the background. Just be aware of spreads and premiums when trading niche or illiquid ETFs.
\`,
        keyTakeaways: [
            "NAV is the per-share value of a fund's assets minus liabilities — the 'fair value'.",
            "Mutual funds always trade at NAV; ETFs trade at market prices that can deviate (premium/discount).",
            "Distributions (dividends) reduce NAV by the amount paid out — this is a transfer, not a loss.",
            "Beware of wide bid-ask spreads and large premiums when trading niche ETFs."
        ]
    },`;

const startMarker = '"fe_4": {';
const endMarker = '"fe_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_4: NAV - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_4!');
