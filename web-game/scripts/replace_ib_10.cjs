const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_10": {
        title: "Reading Stock Quotes",
        content: \`
# Reading Stock Quotes: Understanding the Data

A stock quote is like a patient's vital signs — it tells you everything about the current health and activity of an investment. Understanding how to read these numbers turns you from a novice into an informed investor. This lesson decodes every element you'll see on a quote screen.

## Part 1: The Basic Quote Elements

Every stock quote displays the same core information. Here's what each piece means.

*   **Ticker Symbol**: The unique 1-5 letter code for a company. AAPL = Apple. MSFT = Microsoft. GOOG = Alphabet.
*   **Last Price**: The most recent price at which a trade occurred. This is the "current price."
*   **Change ($)**: How much the price moved from yesterday's close. Green/positive = up. Red/negative = down.
*   **Change (%)**: The percentage change from yesterday's close. More useful than dollar change for comparison.
*   **[Bid](/glossary#bid-ask-spread)**: Highest price buyers are willing to pay right now.
*   **Ask**: Lowest price sellers are willing to accept right now.
*   **Volume**: Number of shares traded today. High volume = more activity and interest.
*   **Example**: AAPL | $175.50 | +$2.30 (+1.33%) | Bid: $175.48 | Ask: $175.52 | Volume: 45,230,100

## Part 2: Open, High, Low, Close (OHLC)

These four prices summarize the day's trading range. They form the building blocks of [candlestick charts](/glossary#candlestick).

*   **Open**: The price of the first trade when the market opened at 9:30 AM ET.
*   **High**: The highest price traded during the day so far.
*   **Low**: The lowest price traded during the day so far.
*   **Close**: The price of the last trade at market close (4:00 PM ET). This is what "yesterday's close" refers to.
*   **Range Analysis**: A stock that opened at $100, hit a high of $105, low of $98, and closed at $103 had a volatile day but ended up.
*   **[Candlestick](/glossary#candlestick)**: Each candle on a chart shows OHLC visually. The body shows open/close. The wicks show high/low.

## Part 3: 52-Week High and Low

These show the [stock](/glossary#stock)'s trading range over the past year, providing context for where the current price sits.

*   **52-Week High**: The highest price reached in the last 52 weeks. If close to this, the stock is near its peak.
*   **52-Week Low**: The lowest price in the last 52 weeks. If close to this, the stock is near its bottom (or falling).
*   **Interpretation**: A stock at $95 with a 52-week range of $50-$100 is near its high. Momentum is strong, but upside may be limited.
*   **Breakout Watch**: When a [stock](/glossary#stock) breaks above its 52-week high, it often continues higher. Technical traders watch these breakouts.
*   **Caution**: A [stock](/glossary#stock) near its 52-week low could be cheap... or it could be falling for good reasons. Low price doesn't mean bargain.

## Part 4: Market Cap — Company Size

[Market Cap](/glossary#market-cap) (Market Capitalization) tells you the total value of a company — its "size" in the market.

*   **Formula**: [Market Cap](/glossary#market-cap) = Share Price × Shares Outstanding
*   **Example**: Apple at $175/share with 15.8 billion shares = ~$2.8 Trillion market cap.
*   **Size Categories**:
    *   **Mega Cap**: >$200 billion (Apple, Microsoft, Amazon)
    *   **[Large Cap](/glossary#market-cap)**: $10B - $200B (Netflix, Starbucks)
    *   **[Mid Cap](/glossary#market-cap)**: $2B - $10B (More growth potential, more [volatility](/glossary#volatility))
    *   **[Small Cap](/glossary#market-cap)**: $300M - $2B (Higher [risk](/glossary#risk), higher potential return)
    *   **Micro Cap**: $50M - $300M (Very risky, often speculative)
    *   **Penny Stocks**: <$50M (Extremely risky, should avoid)
*   **Use**: [Market cap](/glossary#market-cap) is more meaningful than share price when comparing companies.

## Part 5: P/E Ratio — Is It Expensive?

The [P/E Ratio](/glossary#pe-ratio) (Price-to-Earnings) is the most common valuation metric. It tells you what you're paying per dollar of earnings.

*   **Formula**: [P/E](/glossary#pe-ratio) = Share Price / [Earnings Per Share](/glossary#eps) (EPS)
*   **Interpretation**: A [P/E](/glossary#pe-ratio) of 25 means you pay $25 for every $1 of annual earnings.
*   **Historical Average**: S&P 500 average is around 15-17.
*   **High [P/E](/glossary#pe-ratio)** (25+): Investors expect high future growth and are willing to pay a premium. Risk: If growth disappoints, price crashes.
*   **Low [P/E](/glossary#pe-ratio)** (<15): Either undervalued OR a poor business with declining earnings. Cheapness isn't always good.
*   **[Forward P/E](/glossary#forward-pe)**: Uses estimated future earnings instead of past. Lower than trailing [P/E](/glossary#pe-ratio) suggests expected growth.
*   **Sectors Differ**: Tech often trades at 30+ [P/E](/glossary#pe-ratio). Banks at 10-12. Compare within sectors.

## Part 6: Dividend Information

For income investors, [dividend](/glossary#dividend) data is crucial. Here's how to read it.

*   **[Dividend](/glossary#dividend)**: Annual cash payment per share. If $4.00/year and you own 100 shares, you receive $400/year.
*   **[Yield](/glossary#dividend-yield)**: Annual [dividend](/glossary#dividend) divided by share price. A $4 dividend on a $100 stock = 4% yield.
*   **[Payout Ratio](/glossary#payout-ratio)**: What percentage of earnings is paid as [dividends](/glossary#dividend). Below 60% is generally safe and sustainable.
*   **Ex-Dividend Date**: You must own the [stock](/glossary#stock) BEFORE this date to receive the upcoming [dividend](/glossary#dividend).
*   **Payment Date**: When the [dividend](/glossary#dividend) cash actually appears in your account.
*   **Frequency**: Most US companies pay quarterly. Some pay monthly. Others annually or not at all.
*   **[Dividend Aristocrats](/glossary#dividend-aristocrats)**: Companies that have increased [dividends](/glossary#dividend) for 25+ consecutive years. Very reliable.

## Part 7: Volume Analysis

Volume tells you how actively a [stock](/glossary#stock) is being traded. Activity often precedes price moves.

*   **Volume**: Number of shares traded in a given period.
*   **Average Volume**: The typical daily volume (often 20-day or 50-day average).
*   **High Volume Days**: Significantly above average. Often indicates news, earnings, or institutional activity.
*   **Low Volume Days**: Below average. Price moves on low volume are less meaningful and may reverse.
*   **Volume + Price Up**: Strong signal. Buyers are convinced and aggressive.
*   **Volume + Price Down**: Strong selling pressure. Something may be wrong.
*   **Price Move on Low Volume**: Less trustworthy. Could be just a few traders moving the price.

## Part 8: Additional Data Points

Advanced quote systems show much more information. Here are key additional metrics.

*   **[Beta](/glossary#beta)**: Measures [volatility](/glossary#volatility) relative to the market. [Beta](/glossary#beta) of 1.5 means 50% more volatile than S&P 500. [Beta](/glossary#beta) of 0.5 means half as volatile.
*   **Shares Outstanding**: Total shares that exist. Used to calculate [market cap](/glossary#market-cap).
*   **Float**: Shares actually available for trading (excluding insider-held shares). Low float = more [volatility](/glossary#volatility).
*   **[Short Interest](/glossary#short-interest)**: Percentage of shares sold short (betting the [stock](/glossary#stock) falls). High short interest (>20%) can lead to [short squeezes](/glossary#short-squeeze).
*   **Average Analyst Rating**: Aggregate of buy/hold/sell ratings from Wall Street analysts.
*   **Price Target**: Average of analyst predictions for where the [stock](/glossary#stock) will be in 12 months.
*   **Next Earnings Date**: When the company will report quarterly results. Often causes [volatility](/glossary#volatility).

## Part 9: Putting It All Together

Here's how to quickly analyze a quote to assess an investment. Practice this process.

1.  **Check Price Trend**: Is it near 52-week high (strength) or low (weakness)? What's the recent trajectory?
2.  **Assess Valuation**: Is the [P/E](/glossary#pe-ratio) reasonable for its sector? Is it much higher than peers?
3.  **Check Size**: Is it a stable [large cap](/glossary#market-cap) or a risky [small cap](/glossary#market-cap)?
4.  **Review [Dividend](/glossary#dividend)**: If seeking income, what's the [yield](/glossary#dividend-yield) and is the [payout ratio](/glossary#payout-ratio) sustainable?
5.  **Analyze Volume**: Is there unusual activity suggesting news or accumulation?
6.  **Check [Beta](/glossary#beta)**: Can you handle the [volatility](/glossary#volatility) level?
7.  **Research Short Interest**: Is there significant short pressure that could cause [volatility](/glossary#volatility)?
*   **Remember**: A quote is a snapshot. Combine it with deeper fundamental analysis before investing significant money.
\`,
        keyTakeaways: [
            "Bid/Ask spread tells you the true cost of buying and selling — tighter is better.",
            "Market Cap measures company size — more meaningful than share price.",
            "P/E Ratio shows what you're paying for earnings — compare within sectors.",
            "Volume confirms price moves — high volume moves are more significant."
        ]
    },`;

const startMarker = '"ib_10": {';
const endMarker = '"ib_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_10: Reading Stock Quotes - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');
if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_10!');
