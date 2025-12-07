const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// New ib_6 content - Market Participants
const newLesson = `    "ib_6": {
        title: "Market Participants",
        content: \`
# Market Participants: Who Are You Playing Against?

The stock market is an ecosystem — a financial jungle. To survive and thrive, you need to know who the predators are, who the prey is, and where you fit in the food chain. You are a "Retail Investor." You are a small fish in a very big ocean. But small fish can thrive if they understand the waters and don't swim directly into the shark's mouth.

## Part 1: Retail Investors — The Small Fish

Retail investors are individuals trading their own personal money. That's you, your friends, your neighbors.

*   **Who**: You, your colleague with a Robinhood account, your grandmother who bought Apple in the 1990s.
*   **Strengths**: No boss demanding quarterly performance. No minimum trade sizes. Can hold investments forever. Can invest in small [stocks](/glossary#stock) that big institutions can't touch without moving prices.
*   **Weaknesses**: Often emotional and reactive. Less access to research and data. Historically paid high fees. Prone to panic selling and FOMO buying.
*   **Evolution**: With Reddit (r/WallStreetBets), zero-commission apps, and social media, retail investors have become a powerful collective force. The GameStop [short squeeze](/glossary#short-squeeze) in 2021 proved they can move markets and challenge Wall Street.
*   **The Truth**: Retail isn't inherently "dumb money." The main disadvantage is emotional decision-making, not intelligence.

## Part 2: Institutional Investors — The Whales

Institutions are the giants that control the vast majority of the money in markets.

*   **Who**: Pension Funds, [Mutual Funds](/glossary#mutual-fund), Insurance Companies, University Endowments (Harvard, Yale), Sovereign Wealth Funds (Norway, Saudi Arabia).
*   **Size**: They control approximately 80% of stock market volume. When they buy or sell, prices move significantly.
*   **Constraints**: Strict regulatory rules limit what they can buy. Many can't own [small cap](/glossary#market-cap) [stocks](/glossary#stock) because they're too big to get in and out without moving the price. Must report quarterly performance, creating short-term pressure to look good.
*   **Advantage**: Better research departments, direct access to company management, sophisticated trading algorithms, lower transaction costs.
*   **Their Problem**: Size works against them. A $100 billion fund can't buy a small $500 million company without massively moving the price against themselves.
*   **Your Edge**: You can invest in companies too small for institutions to touch. You have no reporting requirements.

## Part 3: Market Makers — The House

[Market Makers](/glossary#market-maker) are the infrastructure that keeps markets functioning smoothly. They're always there.

*   **Who**: Citadel Securities, Virtu Financial, Jane Street, and other trading firms.
*   **Role**: They provide "[Liquidity](/glossary#liquidity)." They're always willing to buy your [stock](/glossary#stock) when you want to sell, and sell when you want to buy — instantly.
*   **Profit Mechanism**: They make money on the "[Bid-Ask Spread](/glossary#bid-ask-spread)" — the small difference between the buy price and sell price. They don't care if [stocks](/glossary#stock) go up or down; they want high *volume*.
*   **Value to You**: They ensure you can sell your [stock](/glossary#stock) in milliseconds at any time, rather than waiting hours or days for a human buyer.
*   **Controversy**: Some profit from [PFOF (Payment for Order Flow)](/glossary#pfof), where they pay brokers like Robinhood for your order data and may trade against your orders.

## Part 4: Hedge Funds — The Sharks

Hedge funds are the elite hunters of the market. They use sophisticated strategies most investors can't access.

*   **Who**: Bridgewater Associates, Renaissance Technologies, Citadel, Pershing Square Capital.
*   **Goal**: "Absolute returns" — making money regardless of whether markets go up or down. Aim for 15-25%+ annual returns.
*   **Tools**: [Short selling](/glossary#short-selling), massive [leverage](/glossary#leverage), complex [derivatives](/glossary#derivative), algorithmic trading, exclusive data sources.
*   **Fees**: The infamous "2 and 20" — 2% annual management fee PLUS 20% of all profits. Expensive for investors.
*   **Myth**: They're all geniuses who consistently beat the market with secret formulas.
*   **Reality**: Most hedge funds underperform the S&P 500 after fees. Warren Buffett famously won a $1 million bet proving that a simple [index fund](/glossary#index-fund) beats hedge funds over 10 years.

## Part 5: Central Banks — The Gods

[Central banks](/glossary#central-bank) are the most powerful entities in all of finance. They literally create money out of thin air.

*   **Who**: The [Federal Reserve](/glossary#federal-reserve) (Fed) in the US, European Central Bank (ECB), Bank of Japan (BOJ), Bank of England (BOE).
*   **Role**: They control the [money supply](/glossary#money-supply) and [interest rates](/glossary#interest-rate) for entire national economies.
*   **Impact**: The saying goes: "Don't Fight the Fed." When the Fed prints money ([Quantitative Easing](/glossary#quantitative-easing)), [asset](/glossary#asset) prices rise. When they raise [interest rates](/glossary#interest-rate) ([Quantitative Tightening](/glossary#quantitative-tightening)), [assets](/glossary#asset) fall.
*   **2020-2022 Example**: The Fed printed trillions of dollars to fight COVID; [stocks](/glossary#stock), real estate, and [crypto](/glossary#cryptocurrency) soared to all-time highs. Then they raised rates aggressively; everything crashed.
*   **Fed Watching**: "Fed watching" is literally a profession. Their announcements move trillions of dollars globally in seconds.
*   **Your Strategy**: Pay attention to Fed policy direction. Don't fight the trend they're creating.

## Part 6: High-Frequency Traders — The Machines

[HFT](/glossary#hft) firms are algorithms running on supercomputers, executing trades in microseconds. You cannot compete with them directly.

*   **Who**: Renaissance Technologies, Two Sigma, Citadel Securities, Jump Trading, and anonymous quant firms.
*   **Speed**: They trade in nanoseconds — billionths of a second. Faster than you can literally blink your eye.
*   **Strategy**: Arbitrage (making fractions of pennies on millions of trades), statistical pattern recognition, [front-running](/glossary#hft) large orders by microseconds.
*   **Volume**: 70-80% of daily stock market trading volume is now algorithmic. Humans are the minority.
*   **Impact**: They provide [liquidity](/glossary#liquidity) and tighter [spreads](/glossary#bid-ask-spread) (good for you), but can cause "[Flash Crashes](/glossary#flash-crash)" when algorithms malfunction.
*   **Your Strategy**: Don't day trade against supercomputers — you will lose. Invest for the long term where computers have no advantage over humans.

## Part 7: Company Insiders — The Know-It-Alls

Company insiders can legally trade their own company's [stock](/glossary#stock), but are heavily monitored by regulators.

*   **Who**: CEOs, CFOs, Board Members, executives, and employees with access to material non-public information.
*   **Rules**: They MUST file Form 4 with the SEC within 2 business days of any trade. These are public documents.
*   **[Insider Trading](/glossary#insider-trading) (Illegal)**: Trading on non-public material information — like knowing earnings before they're announced — is a serious crime.
*   **Bullish Signal**: When a CEO buys their own [stock](/glossary#stock) with their personal money, they clearly believe in the company's future. Smart investors track insider *buying*.
*   **Selling Signal**: Less meaningful. Insiders sell for many legitimate reasons (paying taxes, buying a house, [diversification](/glossary#diversification)). One sale means little.
*   **Research Tool**: Websites like InsiderTracking.com, SEC.gov's EDGAR database, and WhaleWisdom show all reported insider trades.

## Part 8: Wall Street Analysts — Take With Salt

Analysts at investment banks issue "Buy/Sell/Hold" ratings on [stocks](/glossary#stock). Their opinions are everywhere, but beware their biases.

*   **Who**: Research teams at Goldman Sachs, Morgan Stanley, JP Morgan issuing reports and price targets.
*   **Conflict of Interest**: Analysts work for banks that want profitable investment banking business (IPOs, M&A deals) from the same companies. Rating a [stock](/glossary#stock) "Sell" might cost the bank millions in future deals.
*   **Overwhelming Bias**: They are overwhelmingly bullish. True "Sell" ratings are extremely rare because of these conflicts. Most ratings are "Buy" or "Hold" (which often means "Sell" in analyst language).
*   **Lagging Indicators**: Their price target upgrades often come *after* [stocks](/glossary#stock) have already risen significantly. They chase momentum.
*   **Utility**: Their earnings estimates move markets and are useful data. Their subjective buy/sell opinions are often worthless.
*   **Takeaway**: Use analyst data, but be skeptical of their recommendations and conflicts.

## Part 9: How Retail Investors Can Win

Given this competitive ecosystem, how should a retail investor behave to actually succeed?

*   **Don't Day Trade**: You're fighting [HFTs](/glossary#hft) with nanosecond connections and billion-dollar infrastructure. You will statistically lose.
*   **Play Your Game**: Your unique advantage is **TIME**. Institutions must show profits every quarter. You can wait 30 years.
*   **Be the Remora Fish**: Attach yourself to the whale (the global economy via [Index Funds](/glossary#index-fund)) and ride along as it grows.
*   **Ignore the Noise**: 70%+ of trading volume is robots fighting robots over pennies. Short-term price movements are meaningless noise to long-term investors.
*   **Stay Humble**: The market reflects the collective wisdom of millions of participants with billions of dollars. It's smarter than any individual. Accept it, don't fight it.
*   **Your Edge**: Patience, low costs, and discipline. These beat complexity and rapid trading every time over long periods.
\`,
        keyTakeaways: [
            "Retail investors are small fish, but patience and low costs are superpowers.",
            "80% of market volume is institutions and algorithms — don't compete on their terms.",
            "The Fed controls market direction — 'Don't Fight the Fed' is critical advice.",
            "Your edge is TIME — you can hold for decades while institutions chase quarterly results."
        ]
    },`;

// Find and replace
const startMarker = '"ib_6": {';
const endMarker = '"ib_7": {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find markers in the file');
    process.exit(1);
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;

console.log('=== ib_6: Market Participants - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 6000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED');
    process.exit(1);
}

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Successfully updated ib_6!');
