const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_8": {
        title: "Trading Hours",
        content: \`
# Trading Hours: When Markets Are Open

The stock market doesn't run 24/7. Understanding when markets are open, what happens during different trading sessions, and how to navigate extended hours trading helps you execute trades effectively and avoid costly mistakes. Timing isn't everything, but knowing the schedule is essential.

## Part 1: Regular Trading Hours

US stock exchanges have specific hours during which normal trading occurs. This is when most [liquidity](/glossary#liquidity) exists.

*   **NYSE and NASDAQ Hours**: 9:30 AM to 4:00 PM Eastern Time (ET), Monday through Friday.
*   **Duration**: 6.5 hours of trading per day.
*   **Why ET?**: New York is the financial capital. All US market times are in Eastern Time.
*   **West Coast Impact**: If you're in California, regular trading is 6:30 AM to 1:00 PM PT.
*   **Continuous Trading**: During these hours, trades execute almost instantly. [Limit orders](/glossary#limit-order) and [market orders](/glossary#market-order) work as expected.
*   **Maximum [Liquidity](/glossary#liquidity)**: [Bid-ask spreads](/glossary#bid-ask-spread) are tightest during regular hours. Best prices for buyers and sellers.

## Part 2: Pre-Market Trading

Before the official bell, a pre-market session allows early trading with important limitations.

*   **Hours**: Typically 4:00 AM to 9:30 AM ET (varies by broker).
*   **Who Participates**: Institutional investors, active traders reacting to overnight news.
*   **Lower [Volume](/glossary#volume)**: Far fewer shares traded than regular hours. Less [liquidity](/glossary#liquidity).
*   **Wider [Spreads](/glossary#bid-ask-spread)**: [Bid-ask spreads](/glossary#bid-ask-spread) can be 5-10x wider. Expensive to trade.
*   **Earnings Reactions**: Companies often release earnings before the market opens. Pre-market shows the initial reaction.
*   **[Order Types](/glossary#limit-order)**: Most brokers require [limit orders](/glossary#limit-order) only during extended hours. [Market orders](/glossary#market-order) are too risky.
*   **When to Use**: If you absolutely must trade on overnight news. Otherwise, wait for regular hours.

## Part 3: After-Hours Trading

After the 4:00 PM close, trading continues in the after-hours session with similar limitations.

*   **Hours**: 4:00 PM to 8:00 PM ET (varies by broker).
*   **Purpose**: React to news released after the close, earnings reports, and surprise announcements.
*   **Same Limitations**: Lower [volume](/glossary#volume), wider [spreads](/glossary#bid-ask-spread), [limit orders](/glossary#limit-order) only.
*   **Volatility**: [Stocks](/glossary#stock) can move dramatically on thin [volume](/glossary#volume). A few sellers can crash a [stock](/glossary#stock) that would barely move during the day.
*   **The Risk**: You might get the opposite of what you expect. Selling after bad news? The price might already have plummeted before your order executes.
*   **Professional Advantage**: Institutions have better access to after-hours [liquidity](/glossary#liquidity). Retail investors are at a disadvantage.

## Part 4: Market Holidays

US exchanges close on specific holidays throughout the year. Plan your trading around these dates.

*   **Closed Days**: New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Good Friday, Memorial Day, Juneteenth, Independence Day, Labor Day, Thanksgiving Day, Christmas Day.
*   **Early Closes (1:00 PM ET)**: Day before Independence Day, Day after Thanksgiving, Christmas Eve.
*   **Regular Days**: When the holiday falls on a weekend, the exchange may observe it on the nearest weekday.
*   **Planning**: No trading on Christmas Day. Check the calendar before setting expiring [options](/glossary#options) or time-sensitive orders.
*   **Global Markets**: Other countries have different holidays. International [ETFs](/glossary#etf) may trade in the US even when foreign markets are closed.

## Part 5: Opening and Closing Auctions

The market open and close have special auction mechanisms that differ from continuous trading.

*   **Opening Auction**: Before 9:30 AM, orders accumulate. At 9:30, a single opening price is calculated to match the most volume. This is the "official" opening price.
*   **Pre-Market Moves**: Prices seen in pre-market often differ from the actual opening price determined by the auction.
*   **Closing Auction**: Similarly, a closing auction at 4:00 PM determines the official closing price.
*   **[MOC/LOC Orders](/glossary#moc-order)**: "Market-on-Close" and "Limit-on-Close" orders execute only in the closing auction.
*   **Why It Matters**: [Index funds](/glossary#index-fund) often rebalance using closing prices. Massive volume occurs at the close.
*   **[Volatility](/glossary#volatility) Spikes**: The first and last 15 minutes of trading are the most volatile. Avoid [market orders](/glossary#market-order) during these times.

## Part 6: Global Market Hours

If you trade international stocks or are affected by global markets, understanding time zones matters.

*   **London Stock Exchange**: 8:00 AM to 4:30 PM GMT (3:00 AM to 11:30 AM ET).
*   **Tokyo Stock Exchange**: 9:00 AM to 3:00 PM JST (8:00 PM to 2:00 AM ET, previous day).
*   **Hong Kong**: 9:30 AM to 4:00 PM HKT (9:30 PM to 4:00 AM ET, previous day).
*   **Overlap**: European markets overlap with US pre-market. Asia trades while Americans sleep.
*   **24-Hour Markets**: Futures on S&P 500 (ES), [currencies](/glossary#currency), and [crypto](/glossary#cryptocurrency) trade nearly 24/7. They move while you sleep.
*   **Wake Up to Surprises**: Global events overnight can dramatically impact US opening prices.

## Part 7: Circuit Breakers — Emergency Shutdowns

In extreme situations, trading can be halted to prevent panic-driven crashes. These are "circuit breakers."

*   **Level 1**: S&P 500 drops 7% from previous close. 15-minute trading halt if before 3:25 PM ET.
*   **Level 2**: S&P 500 drops 13%. Another 15-minute halt if before 3:25 PM.
*   **Level 3**: S&P 500 drops 20%. Trading halts for the remainder of the day.
*   **Purpose**: Give investors time to process information and calm panic selling.
*   **March 2020**: Circuit breakers triggered multiple times during COVID crash.
*   **Individual Stock Halts**: Single [stocks](/glossary#stock) can be halted for pending news, [volatility](/glossary#volatility) (LULD rules), or regulatory issues.
*   **Your Orders**: During halts, your orders sit waiting. When trading resumes, expect [volatility](/glossary#volatility).

## Part 8: Settlement — When You Actually Own the Stock

Buying a [stock](/glossary#stock) doesn't mean instant ownership. There's a settlement process behind the scenes.

*   **Trade Date (T)**: The day you click "buy" and your order executes.
*   **Settlement Date (T+2)**: Two business days later. This is when the official ownership transfer occurs.
*   **Why the Delay?**: Legacy infrastructure. [Brokers](/glossary#broker), clearing houses, and custodians need time to process.
*   **Moving Toward T+1**: Regulators are pushing for faster settlement (T+1) to reduce [risk](/glossary#risk).
*   **Cash Account Impact**: Can't use sale proceeds until settlement. If you sell Monday, you can't use that cash until Wednesday.
*   **[Margin Account](/glossary#margin-account) Impact**: Good faith violations if you trade with unsettled funds.
*   **Corporate Actions**: You receive [dividends](/glossary#dividend) if you own shares by record date, which factors in settlement.

## Part 9: Best Practices for Trading Timing

Here's practical advice on when to trade and when to wait.

*   **Avoid the First 15 Minutes**: [Volatility](/glossary#volatility) spikes at the open. [Market orders](/glossary#market-order) can fill at bad prices. Wait for things to settle.
*   **Avoid the Last 15 Minutes**: Closing [volatility](/glossary#volatility) can be extreme. Institutions balancing portfolios move prices.
*   **Mid-Day Is Calmest**: 11:00 AM to 2:00 PM ET typically has lower [volatility](/glossary#volatility) and tighter [spreads](/glossary#bid-ask-spread).
*   **Fridays Are Quirky**: Traders square positions before the weekend. [Options](/glossary#options) expiration (every Friday) adds complexity.
*   **Extended Hours Caution**: Only use if you have a specific reason (earnings reaction). Otherwise, wait for regular hours.
*   **Don't Rush**: Unless you're day trading (which you shouldn't be), there's rarely urgency. The market will be there tomorrow.
*   **Long-Term View**: If you're investing for 20+ years, whether you buy at 10 AM or 2 PM doesn't matter at all.
\`,
        keyTakeaways: [
            "Regular US trading hours are 9:30 AM to 4:00 PM ET, Monday through Friday.",
            "Pre-market and after-hours have lower liquidity, wider spreads, and more volatility.",
            "The first and last 15 minutes are the most volatile — avoid market orders during these periods.",
            "Settlement takes T+2 (two business days) — you don't officially own shares until then."
        ]
    },`;

const startMarker = '"sm_8": {';
const endMarker = '"sm_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_8: Trading Hours - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_8!');
