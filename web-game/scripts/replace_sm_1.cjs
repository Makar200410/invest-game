const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_1": {
        title: "What is a Stock?",
        content: \`
# Owning a Piece of the Pie

A [stock](/glossary#stock) (also called a share or equity) represents fractional ownership in a corporation. When you buy a [stock](/glossary#stock), you become a part-owner of that company. You're not just placing a bet on a ticker symbol — you're buying a real piece of a real business with real employees, products, and profits. Understanding this fundamental truth changes how you think about investing.

## Part 1: The Essence of Stock Ownership

Owning [stock](/glossary#stock) means you literally own a piece of the company. This is not an abstract concept — it's a legal reality.

*   **Fractional Ownership**: Apple has about 15.8 billion shares outstanding. If you own 100 shares, you own approximately 0.0000006% of Apple. Small, but real.
*   **What You Own**: A proportional claim on all company [assets](/glossary#asset) (buildings, patents, cash) and future profits.
*   **Legal Rights**: You are a registered owner with voting rights, [dividend](/glossary#dividend) rights, and a claim on [assets](/glossary#asset) if the company liquidates.
*   **Stock Certificates**: Historically, ownership was proven by paper certificates. Today, it's all electronic and held by your broker on your behalf in "street name."
*   **Ticker Symbol**: Each publicly traded company has a unique ticker (AAPL, MSFT, GOOGL) used to identify it on exchanges.
*   **The Mindset Shift**: Don't think "I'm buying AAPL stock." Think "I'm becoming a part-owner of the most profitable technology company in history."

## Part 2: Why Companies Issue Stock

Companies issue [stock](/glossary#stock) to raise money ([capital](/glossary#capital)) without taking on debt. It's a fundamental way businesses fund their growth.

*   **Raising Capital**: Instead of borrowing money and paying interest, companies can sell ownership stakes. The money raised goes directly to the company (in the [IPO](/glossary#ipo) or follow-on offerings).
*   **No Repayment Obligation**: Unlike [bonds](/glossary#bond) or bank loans, [stock](/glossary#stock) doesn't have to be repaid. There's no due date.
*   **Sharing Risk**: If the company fails, shareholders lose their investment. But the company doesn't owe them money — the [risk](/glossary#risk) is shared.
*   **Currency for Acquisitions**: Companies can use their [stock](/glossary#stock) to acquire other companies without spending cash.
*   **Employee Compensation**: Stock options and grants align employee interests with shareholders and reduce cash compensation needs.
*   **Trade-Off**: By issuing [stock](/glossary#stock), existing owners become diluted — their ownership percentage decreases.

## Part 3: Shareholder Rights

As a [stock](/glossary#stock) owner, you have specific legal rights. These aren't just ceremonial — they give you real power.

*   **Voting Rights**: You can vote on major company decisions:
    *   Electing the Board of Directors (who oversee management)
    *   Approving mergers and acquisitions
    *   Changes to corporate charter
    *   Executive compensation packages (advisory "Say on Pay" votes)
*   **[Dividend](/glossary#dividend) Rights**: If the company distributes profits to shareholders, you receive your proportional share.
*   **Information Rights**: Public companies must disclose financial statements, executive pay, risks, and material events (10-K, 10-Q, 8-K filings with the SEC).
*   **Preemptive Rights**: In some cases, the right to buy new shares before the public to maintain your ownership percentage.
*   **Residual Claim**: If the company liquidates, shareholders get what's left after all debts are paid (usually nothing, unfortunately).
*   **Class Differences**: Some companies have multiple share classes. Class A might have 1 vote per share. Class B (often held by founders) might have 10 votes per share.

## Part 4: Limited Liability — The Safety Net

Limited liability is one of the greatest inventions in capitalism. It's why people are willing to risk money in [stocks](/glossary#stock).

*   **What It Means**: As a shareholder, you can only lose what you invested. Your personal [assets](/glossary#asset) are protected.
*   **Worst Case Scenario**: If a company goes bankrupt with $50 billion in debt, creditors cannot sue you personally. Your maximum loss is your investment going to $0.
*   **Historical Context**: Before limited liability (19th century), investors could be personally responsible for company debts. This made investing extremely risky.
*   **Why It Matters**: Without limited liability, no one would invest in risky ventures like startups. Innovation would grind to a halt.
*   **Contrast with Partnerships**: In traditional partnerships, partners ARE personally liable for business debts. That's why corporations became the dominant business form.
*   **Protection**: This protection is why buying [stock](/glossary#stock) is fundamentally different from being a business partner or sole proprietor.

## Part 5: Common Stock vs. Preferred Stock

Not all [stock](/glossary#stock) is created equal. There are two main types with different characteristics.

*   **[Common Stock](/glossary#common-stock)**: What most investors buy. Full voting rights. [Dividends](/glossary#dividend) if declared (not guaranteed). Last in line if company liquidates.
*   **[Preferred Stock](/glossary#preferred-stock)**: A hybrid between [stocks](/glossary#stock) and [bonds](/glossary#bond). Fixed [dividend](/glossary#dividend) (like [bond](/glossary#bond) interest). First claim on [assets](/glossary#asset) before common. Usually no voting rights.
*   **[Dividend](/glossary#dividend) Priority**: [Preferred](/glossary#preferred-stock) shareholders get paid before common shareholders. If company struggles, common [dividends](/glossary#dividend) may be cut while preferred continues.
*   **[Upside](/glossary#upside) Difference**: [Preferred](/glossary#preferred-stock) has limited [upside](/glossary#upside) (acts more like a [bond](/glossary#bond)). [Common stock](/glossary#common-stock) has unlimited [upside](/glossary#upside) potential if the company grows.
*   **Who Buys Preferred?**: Income-focused investors who want higher [yields](/glossary#yield) than [bonds](/glossary#bond) with more safety than [common stock](/glossary#common-stock).
*   **Callable**: Many [preferred stocks](/glossary#preferred-stock) can be "called" (repurchased) by the company at a set price, limiting your [upside](/glossary#upside).

## Part 6: How Stock Prices Are Determined

Stock prices move constantly based on supply and demand. Understanding this mechanism is crucial.

*   **Auction Market**: Stock exchanges are giant auctions. Buyers bid prices they'll pay. Sellers ask prices they'll accept.
*   **The Bid-[Ask Spread](/glossary#bid-ask-spread)**: The [bid](/glossary#bid-ask-spread) is the highest price buyers offer. The [ask](/glossary#bid-ask-spread) is the lowest price sellers accept. Trades happen when they meet.
*   **Supply & Demand**: If more people want to buy than sell, price goes up. If more want to sell than buy, price goes down.
*   **What Moves Prices?**: Earnings reports, news, [economic indicators](/glossary#economic-indicators), management changes, industry trends, investor sentiment, and thousands of other factors.
*   **Efficient Market Hypothesis**: Academic theory that prices instantly reflect all available information. In practice, prices can deviate from "fair value" for extended periods.
*   **[Intrinsic Value](/glossary#intrinsic-value)**: The "true" value of a company based on fundamentals. Prices fluctuate around this value but may spend years above or below it.

## Part 7: Stock Exchanges — The Marketplace

[Stocks](/glossary#stock) trade on organized exchanges that provide regulation, transparency, and [liquidity](/glossary#liquidity).

*   **NYSE (New York Stock Exchange)**: The world's largest exchange by [market cap](/glossary#market-cap). Traditional floor trading with specialists. Home to blue-chip companies.
*   **NASDAQ**: Electronic exchange. Home to many tech giants (Apple, Microsoft, Amazon, Google). Known for growth companies.
*   **Other US Exchanges**: NYSE American (small caps), Cboe, IEX (featured in "Flash Boys").
*   **Global Exchanges**: London Stock Exchange, Tokyo Stock Exchange, Hong Kong Exchange, Shanghai, Euronext.
*   **Listing Requirements**: Companies must meet financial standards (revenue, profits, share price) to be listed on major exchanges.
*   **[OTC Markets](/glossary#otc)**: Stocks that don't qualify for major exchanges trade "over the counter." Higher [risk](/glossary#risk), less regulation.

## Part 8: The Primary vs. Secondary Market

There are two distinct markets where [stocks](/glossary#stock) are bought and sold. They serve different purposes.

*   **[Primary Market](/glossary#primary-market)**: Where companies issue NEW shares. Money goes directly to the company. Includes [IPOs](/glossary#ipo) and follow-on offerings.
*   **[Secondary Market](/glossary#secondary-market)**: Where existing shares trade between investors. The company gets nothing from these trades — it's all between buyers and sellers.
*   **Example**: When Apple did its [IPO](/glossary#ipo) in 1980, it raised $100 million from new investors ([primary market](/glossary#primary-market)). When you buy Apple [stock](/glossary#stock) today, you're buying from another investor ([secondary market](/glossary#secondary-market)).
*   **[Liquidity](/glossary#liquidity)**: The [secondary market](/glossary#secondary-market) provides [liquidity](/glossary#liquidity) — you can sell your shares anytime during market hours.
*   **Price Discovery**: The [secondary market](/glossary#secondary-market) determines the current price through millions of transactions daily.
*   **Why It Matters**: Understanding that your stock purchase doesn't give money to the company helps you think about what you're really buying.

## Part 9: Thinking Like an Owner

The best investors don't trade [stocks](/glossary#stock) — they buy businesses. This mental shift transforms how you approach investing.

*   **Warren Buffett's Advice**: "If you aren't willing to own a [stock](/glossary#stock) for 10 years, don't even think about owning it for 10 minutes."
*   **Business Analysis**: Instead of looking at charts, look at: What does this company do? Is it growing? Does it have a [competitive moat](/glossary#moat)? Is management honest and capable?
*   **Price vs. Value**: Stock price is what you pay. [Intrinsic value](/glossary#intrinsic-value) is what you get. A great company at a terrible price is a bad investment.
*   **[Mr. Market](/glossary#mr-market)**: Benjamin Graham's allegory. The market is like a manic-depressive business partner who offers to buy or sell your shares daily at wildly varying prices. You can ignore him.
*   **Patience**: Building wealth through [stocks](/glossary#stock) requires patience. Short-term prices are noise. Long-term value is signal.
*   **The Goal**: Own a diversified collection of excellent businesses purchased at reasonable prices. Hold them for decades. Let [compounding](/glossary#compound-interest) work.
\`,
        keyTakeaways: [
            "A stock represents real fractional ownership in a corporation — not just a ticker symbol.",
            "Shareholders have voting rights, dividend rights, and limited liability protection.",
            "Stock prices are determined by supply and demand in the secondary market.",
            "Think like an owner of a business, not a trader of symbols."
        ]
    },`;

const startMarker = '"sm_1": {';
const endMarker = '"sm_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_1: What is a Stock? - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 9000-13000');
console.log('Status:', (charCount >= 9000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated sm_1!');
