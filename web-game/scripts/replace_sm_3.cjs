const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_3": {
        title: "Market Capitalization",
        content: \`
# Market Capitalization: Sizing Up Companies

[Market capitalization](/glossary#market-cap) (or "market cap") is the most fundamental metric for understanding a company's size in the stock market. It tells you what the market thinks a company is worth today. Understanding [market cap](/glossary#market-cap) helps you compare companies, assess [risk](/glossary#risk), and build a properly diversified [portfolio](/glossary#portfolio).

## Part 1: What Is Market Capitalization?

[Market cap](/glossary#market-cap) represents the total market value of a company's outstanding shares. It's a simple calculation with profound implications.

*   **Formula**: [Market Cap](/glossary#market-cap) = Current Share Price × Shares Outstanding
*   **Example**: Apple trades at $175 with 15.8 billion shares outstanding. [Market Cap](/glossary#market-cap) = $175 × 15.8B = ~$2.77 trillion.
*   **What It Represents**: The price the market would theoretically pay to buy the entire company today.
*   **Dynamic Number**: [Market cap](/glossary#market-cap) changes constantly as stock prices fluctuate throughout the trading day.
*   **Not Book Value**: [Market cap](/glossary#market-cap) is based on perception and expectations, not accounting values. A company with $10B in [assets](/glossary#asset) might have a $5B or $50B [market cap](/glossary#market-cap).
*   **Shares Outstanding vs. Float**: Outstanding = all shares that exist. Float = shares available for public trading (excludes insider-held shares).

## Part 2: Market Cap Categories

Companies are categorized by [market cap](/glossary#market-cap) into tiers. Each tier has different risk and return characteristics.

*   **[Mega Cap](/glossary#market-cap)**: >$200 billion. Examples: Apple, Microsoft, Amazon, Google. Stable giants. Lower [volatility](/glossary#volatility). Widely owned.
*   **[Large Cap](/glossary#market-cap)**: $10-200 billion. Examples: Netflix, Starbucks, Target. Established companies with strong market positions.
*   **[Mid Cap](/glossary#market-cap)**: $2-10 billion. Examples: Etsy, Crocs, Deckers. Growth potential with more stability than small caps.
*   **[Small Cap](/glossary#market-cap)**: $300 million to $2 billion. Examples: Regional banks, specialty manufacturers. Higher growth potential, higher [volatility](/glossary#volatility).
*   **Micro Cap**: $50-300 million. Thinly traded. Often lack analyst coverage. High [risk](/glossary#risk), high potential reward.
*   **Penny Stocks**: <$50 million. Extremely risky. Often on [OTC markets](/glossary#otc). Prone to manipulation. Best avoided entirely.

## Part 3: Large Caps — The Blue Chips

[Large cap](/glossary#market-cap) companies dominate portfolios for good reason. They offer stability, [liquidity](/glossary#liquidity), and reliable performance.

*   **Characteristics**: Household name brands, diversified revenue streams, global operations, decades of operating history.
*   **Pros**: Stable earnings, [dividend](/glossary#dividend) payments, lower [volatility](/glossary#volatility), high [liquidity](/glossary#liquidity) (easy to trade), extensive analyst coverage.
*   **Cons**: Slower growth (already massive), harder to disrupt their industry (they ARE the industry), fully valued (fewer surprises).
*   **[Index Fund](/glossary#index-fund) Dominance**: Most of the S&P 500's performance comes from the top 10 largest companies. Apple, Microsoft, Amazon drive returns.
*   **Too Big to Fail?**: Large caps can still fall. Enron, Lehman Brothers, and GE were giants that crashed or faded. Size doesn't guarantee safety.
*   **Role in [Portfolio](/glossary#portfolio)**: [Large caps](/glossary#market-cap) should form the core of most portfolios. They provide stability and dependable long-term growth.

## Part 4: Small Caps — Higher Risk, Higher Potential Reward

[Small cap](/glossary#market-cap) stocks are where many investors look for outsized returns. They're also where many lose money.

*   **Characteristics**: Emerging companies, regional players, niche markets, often not yet profitable.
*   **Pros**: Room to grow 10x or 100x if successful, often overlooked by Wall Street, potential for explosive returns.
*   **Cons**: Higher [volatility](/glossary#volatility), less [liquidity](/glossary#liquidity), higher [risk](/glossary#risk) of bankruptcy, more susceptible to economic downturns.
*   **Small Cap Premium**: Historically, [small caps](/glossary#market-cap) have outperformed [large caps](/glossary#market-cap) over very long periods. But this comes with gut-wrenching downturns.
*   **Research Challenges**: Less analyst coverage means more opportunity for active investors, but also less information.
*   **Role in [Portfolio](/glossary#portfolio)**: Consider 10-20% allocation to [small cap](/glossary#market-cap) [index funds](/glossary#index-fund) for growth potential. Don't stock-pick unless you're an expert.

## Part 5: Why Share Price Doesn't Equal Value

A common beginner mistake: thinking a $10 [stock](/glossary#stock) is "cheaper" than a $500 [stock](/glossary#stock). This is completely wrong.

*   **The Illusion**: Amazon at $3,500 isn't more expensive than a $5 penny stock. You're comparing apples to oranges.
*   **Example A**: Company A has 1 million shares at $100 = $100M [market cap](/glossary#market-cap).
*   **Example B**: Company B has 100 million shares at $10 = $1B [market cap](/glossary#market-cap).
*   **Reality**: Company B is actually 10x larger despite its lower share price!
*   **[Stock Splits](/glossary#stock-split)**: Companies split shares to lower price. Apple split 4-for-1 in 2020. Share price dropped 75%, but [market cap](/glossary#market-cap) was unchanged.
*   **The Real Question**: What are you paying relative to the company's earnings, revenue, and growth? ([P/E ratio](/glossary#pe-ratio), Price/Sales, etc.)
*   **Lesson**: Always look at [market cap](/glossary#market-cap), never just share price!

## Part 6: Enterprise Value — A Better Measure

[Market cap](/glossary#market-cap) has limitations. [Enterprise Value](/glossary#enterprise-value) (EV) gives a more complete picture of what it costs to "buy" a company.

*   **Formula**: [Enterprise Value](/glossary#enterprise-value) = [Market Cap](/glossary#market-cap) + Total Debt - Cash
*   **Why It's Better**: If you bought the whole company, you'd inherit its debt (liability) and its cash (asset). EV accounts for both.
*   **Example**: Company with $100B [market cap](/glossary#market-cap), $20B debt, $10B cash: EV = $100B + $20B - $10B = $110B.
*   **Debt-Free Company**: [Market cap](/glossary#market-cap) ≈ EV (adjust for cash).
*   **Debt-Heavy Company**: EV is much higher than [market cap](/glossary#market-cap). The company looks cheap on [market cap](/glossary#market-cap) but expensive when you include debt.
*   **Usage**: Analysts use EV/[EBITDA](/glossary#ebitda) instead of [P/E ratio](/glossary#pe-ratio) for more accurate cross-company comparisons.
*   **For Advanced Investors**: EV is more useful for [valuation](/glossary#valuation). For casual investors, [market cap](/glossary#market-cap) is fine for basic size assessment.

## Part 7: Market Cap Weighting in Indexes

Most [index funds](/glossary#index-fund) are [market cap weighted](/glossary#market-cap-weighted). Understanding this affects your portfolio exposure.

*   **How It Works**: In a cap-weighted [index](/glossary#index-fund), larger companies have larger positions. Apple (3% of world economy) gets 3% of the [index](/glossary#index-fund).
*   **S&P 500 Example**: The top 10 companies account for ~30% of the entire [index](/glossary#index-fund). The bottom 250 combined are less than 10%.
*   **Advantage**: Automatically adjusts as companies grow and shrink. No rebalancing needed.
*   **Concern**: You're heavily exposed to a few mega caps. If Apple crashes, your "diversified" [index fund](/glossary#index-fund) suffers.
*   **Alternative — Equal Weight**: Equal weight [index funds](/glossary#index-fund) give the same weight to each company. More exposure to smaller companies, but requires constant rebalancing.
*   **Reality Check**: Despite concerns, cap-weighted [index funds](/glossary#index-fund) have outperformed alternatives historically. Biggest companies usually win.

## Part 8: Sector and Market Cap Diversification

A well-constructed [portfolio](/glossary#portfolio) should diversify across both sectors AND [market cap](/glossary#market-cap) sizes.

*   **Why Both**: Technology [large caps](/glossary#market-cap) might crash while healthcare [small caps](/glossary#market-cap) boom. Different exposures reduce overall [risk](/glossary#risk).
*   **Sample Allocation**:
    *   70% [Large Cap](/glossary#market-cap) (S&P 500 or Total Market)
    *   20% International (developed and emerging)
    *   10% [Small Cap](/glossary#market-cap) (Russell 2000)
*   **Automatic Diversification**: VTI (Vanguard Total Stock Market) includes [large](/glossary#market-cap), [mid](/glossary#market-cap), and [small caps](/glossary#market-cap) in one fund.
*   **Tilts**: Some investors "tilt" toward [small cap](/glossary#market-cap) value stocks for potentially higher long-term returns (Fama-French research).
*   **Rebalancing**: As [market caps](/glossary#market-cap) change, periodically rebalance to maintain your target allocation.
*   **Simplest Approach**: Own a Total Stock Market [index fund](/glossary#index-fund). Let it handle the [market cap](/glossary#market-cap) weighting automatically.

## Part 9: Tracking Market Cap Changes

A company's [market cap](/glossary#market-cap) can change dramatically over time. Tracking these changes reveals market trends.

*   **Rise and Fall**: Kodak was once among the largest companies. Nokia dominated mobile phones. Neither is in the top 500 today.
*   **The New Giants**: Apple reached $3 trillion [market cap](/glossary#market-cap) in 2022. Microsoft and Amazon followed. These were mid-caps just 20 years ago.
*   **Sector Rotation**: In 2000, the largest companies were mostly energy and telecoms. Today, it's technology. Winners rotate.
*   **Trillion Dollar Club**: Only a handful of companies have crossed $1 trillion: Apple, Microsoft, Amazon, Google, Meta, Saudi Aramco, NVIDIA.
*   **What It Signals**: Rising [market cap](/glossary#market-cap) reflects investor optimism about future growth. Falling [market cap](/glossary#market-cap) signals concerns or competitive threats.
*   **[Index Fund](/glossary#index-fund) Advantage**: By owning the index, you automatically own the winners and drop the losers. No prediction needed.
\`,
        keyTakeaways: [
            "Market Cap = Share Price × Shares Outstanding — it measures company size, not stock price.",
            "Large caps offer stability; small caps offer growth potential with higher risk.",
            "Share price alone is meaningless — always compare using market cap or valuation ratios.",
            "Most index funds are market-cap weighted, so you're heavily exposed to the largest companies."
        ]
    },`;

const startMarker = '"sm_3": {';
const endMarker = '"sm_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_3: Market Capitalization - VALIDATION ===');
console.log('Character Count:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated sm_3!');
