const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// New ib_3 content - The Power of Diversification
const newIb3 = `    "ib_3": {
        title: "The Power of Diversification",
        content: \`
# The Power of Diversification

[Diversification](/glossary#diversification) is often called "the only free lunch in investing." Why? Because it allows you to **reduce [risk](/glossary#risk)** without necessarily **reducing returns**. It is the mathematical proof that "don't put all your eggs in one basket" is the smartest strategy. Harry Markowitz won a Nobel Prize for proving this in Modern Portfolio Theory. This lesson explains how to harness this powerful tool.

## Part 1: The Only Free Lunch Explained

Usually, to lower [risk](/glossary#risk), you must accept lower returns (like holding cash). [Diversification](/glossary#diversification) breaks this rule. It's the rare exception where you get something for nothing.

*   **The Magic**: By combining [assets](/glossary#asset) that don't move together (uncorrelated), you smooth out the ride while maintaining strong returns.
*   **Example**: Imagine two companies:
    *   Umbrella Company does well when it rains.
    *   Sunscreen Company does well when it's sunny.
    *   If you own both, you make money regardless of weather. Your [volatility](/glossary#volatility) drops, but your average return stays the same.
*   **Real World**: [Stocks](/glossary#stock) and [Bonds](/glossary#bond) often move in opposite directions. When [stocks](/glossary#stock) crash, investors flee to safe [bonds](/glossary#bond), pushing their prices up.
*   **The Math**: A 50/50 [portfolio](/glossary#portfolio) of two uncorrelated [assets](/glossary#asset) has lower [volatility](/glossary#volatility) than either [asset](/glossary#asset) alone.
*   **Why It Works**: Different [assets](/glossary#asset) respond differently to economic conditions. Their movements cancel out some of each other's fluctuations.

## Part 2: Correlation — The Secret Sauce

[Correlation](/glossary#correlation) measures how two [assets](/glossary#asset) move in relation to each other. It's the key to effective [diversification](/glossary#diversification). Understanding this concept is essential.

*   **+1.0 (Perfect Positive [Correlation](/glossary#correlation))**: They move exactly together. Google and Microsoft both rise and fall with tech sentiment.
*   **0.0 (Zero [Correlation](/glossary#correlation))**: They are completely unrelated. [Stocks](/glossary#stock) and fine art prices move independently of each other.
*   **-1.0 (Perfect Negative [Correlation](/glossary#correlation))**: They move in opposite directions. [Gold](/glossary#gold) often rises when [stocks](/glossary#stock) crash.
*   **Goal**: Build a [portfolio](/glossary#portfolio) of [assets](/glossary#asset) with low or negative [correlation](/glossary#correlation). When one zigs, the other zags.
*   **Warning**: In severe crashes (like 2008), correlations spike. Everything falls together. This is when cash and [bonds](/glossary#bond) prove their true worth as safety nets.
*   **Dynamic Nature**: [Correlations](/glossary#correlation) change over time. What was uncorrelated in the past may become correlated in a crisis.

## Part 3: Asset Class Diversification

The first and most important layer of [diversification](/glossary#diversification) is owning different types of investments. Each [asset class](/glossary#asset) serves a specific role in your [portfolio](/glossary#portfolio).

*   **[Stocks](/glossary#stock)**: Growth engine. High [risk](/glossary#risk), high return. Ownership of businesses. Expected return: 8-10% annually.
*   **[Bonds](/glossary#bond)**: Stability anchor. Lower [risk](/glossary#risk), lower return. Loans to governments/companies. Expected return: 4-6% annually.
*   **Real Estate**: [Inflation](/glossary#inflation) hedge. Generates rental income. Low [correlation](/glossary#correlation) to [stocks](/glossary#stock). Accessible via REITs.
*   **[Gold](/glossary#gold)/[Commodities](/glossary#commodities)**: Crisis hedge. Stores value when currencies fail. Insurance against chaos.
*   **Cash**: Ultimate safety. Zero real return but perfect [liquidity](/glossary#liquidity) for emergencies and opportunities.
*   **Mix Example**: A 100% [stock](/glossary#stock) [portfolio](/glossary#portfolio) is a roller coaster — thrilling but nauseating. A 60% [Stock](/glossary#stock) / 40% [Bond](/glossary#bond) [portfolio](/glossary#portfolio) is a cruise ship — same destination, much smoother ride.

## Part 4: Geographic Diversification — Defeating Home Bias

[Home Bias](/glossary#home-bias) is the common mistake of only investing in your own country's [stocks](/glossary#stock). This is a dangerous concentration of [risk](/glossary#risk).

*   **The [Risk](/glossary#risk)**: What if the US economy stagnates for 20 years? Japan's stock market peaked in 1989 and didn't recover for 34 years. If you were Japanese and only owned Japanese stocks, you lost decades of growth.
*   **The Reality**: The US is only ~60% of the global stock market. There's a whole world of opportunity outside American borders.
*   **Solution**: Own International [Stocks](/glossary#stock) (Europe, Asia, Emerging Markets).
    *   VXUS (Total International Stock [ETF](/glossary#etf)) covers developed and emerging markets outside the US.
    *   VEA (Developed Markets) for Europe, Japan, Australia.
    *   VWO (Emerging Markets) for China, India, Brazil.
*   **Lost Decade Example**: From 2000-2009, the S&P 500 returned **-9%** (including dividends). Emerging Markets returned **+162%**. Winners rotate.
*   **Takeaway**: The US won't always be #1. Diversify globally to capture growth wherever it happens.

## Part 5: Sector Diversification

Don't just own Tech [stocks](/glossary#stock). Every sector has its day in the sun — and its winter. Sector rotation is constant.

*   **The Tech Bubble (2000)**: Tech [stocks](/glossary#stock) crashed 80%. Value [stocks](/glossary#stock) held up and even gained value while tech burned.
*   **The Sectors** (GICS Classification):
    *   **Technology**: Growth-oriented, volatile, sensitive to interest rates.
    *   **Healthcare**: Defensive — people always need medicine regardless of economy.
    *   **Energy**: Cyclical, tied to oil prices and economic activity.
    *   **Consumer Staples**: Defensive — people always buy toothpaste and toilet paper.
    *   **Consumer Discretionary**: Cyclical — luxury goods suffer in recessions.
    *   **Financials**: Cyclical, tied to interest rates and loan demand.
    *   **Utilities**: Defensive, stable [dividends](/glossary#dividend), low growth.
    *   **Real Estate**: Interest rate sensitive, income-producing.
    *   **Materials & Industrials**: Cyclical, tied to manufacturing.
*   **Strategy**: Buy a Total Market [Index Fund](/glossary#index-fund). You automatically own all sectors in market-weighted proportions without picking.

## Part 6: Rebalancing — The Automatic Buy Low, Sell High Machine

[Diversification](/glossary#diversification) requires ongoing maintenance. Over time, winners grow and losers shrink, changing your allocation and increasing [risk](/glossary#risk).

*   **Scenario**: You start with 60% [Stocks](/glossary#stock) / 40% [Bonds](/glossary#bond).
*   **[Bull Market](/glossary#bull-market)**: [Stocks](/glossary#stock) double in value. Now you have 75% [Stocks](/glossary#stock) / 25% [Bonds](/glossary#bond). Your [risk](/glossary#risk) has significantly increased without you doing anything.
*   **The Fix**: **[Rebalance](/glossary#rebalancing)**. Sell some [Stocks](/glossary#stock) (selling high) and buy [Bonds](/glossary#bond) (buying low) to return to your original 60/40 target.
*   **Magic**: This forces you to be a contrarian automatically. You systematically take profits from winners and buy undervalued [assets](/glossary#asset).
*   **Frequency**: Rebalance annually on a fixed date (like your birthday), or whenever allocations drift more than 5% from your target.
*   **Tax Consideration**: Rebalance inside tax-advantaged accounts ([401k](/glossary#401k), [IRA](/glossary#ira)) first to avoid [capital gains](/glossary#capital-gains) taxes.

## Part 7: Classic Diversified Portfolios

Several time-tested [portfolio](/glossary#portfolio) allocations have proven to provide excellent [diversification](/glossary#diversification) over decades:

*   **60/40 [Portfolio](/glossary#portfolio)**: 60% [Stocks](/glossary#stock), 40% [Bonds](/glossary#bond). The classic benchmark. Has returned 8-9% annually with far less [volatility](/glossary#volatility) than 100% [stocks](/glossary#stock).
*   **[Three-Fund Portfolio](/glossary#three-fund-portfolio)**: Total US Stocks + Total International Stocks + Total [Bond](/glossary#bond) Market. Simple, cheap (0.05% fees), globally diversified.
*   **[All-Weather Portfolio](/glossary#all-weather-portfolio)**: Ray Dalio's design: 30% [Stocks](/glossary#stock), 40% Long-Term [Bonds](/glossary#bond), 15% Intermediate [Bonds](/glossary#bond), 7.5% [Gold](/glossary#gold), 7.5% [Commodities](/glossary#commodities). Designed to perform in any economic environment.
*   **Age-Based Rule**: Hold [Bonds](/glossary#bond) equal to your age as a percentage. If you're 30, hold 30% [bonds](/glossary#bond). More conservative: Age. More aggressive: Age - 20.
*   **Target Date Funds**: Funds that automatically adjust allocation as you age. Set it and forget it completely.

## Part 8: Over-Diversification — Diworsification

Can you have too much [diversification](/glossary#diversification)? Yes. It's called "diworsification" — a term coined by Peter Lynch.

*   **The Problem**: If you own 10 different Large Cap US Stock Funds, you're essentially owning the same 500 companies 10 times over with higher total fees.
*   **Complexity**: Managing 50 different [ETFs](/glossary#etf) is a nightmare of complexity with no additional [diversification](/glossary#diversification) benefit.
*   **Overlap**: Many funds hold the same top [stocks](/glossary#stock) (Apple, Microsoft, Amazon). You're not more diversified, just more confused and paying more fees.
*   **The Sweet Spot**: You can achieve excellent [diversification](/glossary#diversification) with just 3-4 funds:
    *   VTI (Total US Stock Market)
    *   VXUS (Total International Stock Market)
    *   BND (Total [Bond](/glossary#bond) Market)
    *   Optional: VNQ (Real Estate) or IAU ([Gold](/glossary#gold))
*   **Rule**: Simplicity wins. Every additional fund should add real [diversification](/glossary#diversification), not just complexity.

## Part 9: Modern Portfolio Theory (MPT)

Harry Markowitz won a Nobel Prize for proving [diversification](/glossary#diversification) mathematically in 1952. His work changed investing forever.

*   **The Insight**: An [asset](/glossary#asset)'s [risk](/glossary#risk) should not be viewed in isolation, but by how it contributes to the overall [portfolio](/glossary#portfolio)'s [risk](/glossary#risk).
*   **The Paradox**: Adding a risky [asset](/glossary#asset) (like [Gold](/glossary#gold) or even [stocks](/glossary#stock)) to a [portfolio](/glossary#portfolio) can actually *lower* the total [risk](/glossary#risk) if it's uncorrelated with your other holdings.
*   **[Efficient Frontier](/glossary#efficient-frontier)**: A mathematical curve showing all the optimal [portfolios](/glossary#portfolio) that offer the highest return for each level of [risk](/glossary#risk). You want your [portfolio](/glossary#portfolio) *on* this frontier.
*   **Below the Frontier**: If your [portfolio](/glossary#portfolio) is below the efficient frontier, you're taking unnecessary [risk](/glossary#risk) for your return — you need better [diversification](/glossary#diversification).
*   **The Free Lunch**: You can achieve better risk-adjusted returns through smart [diversification](/glossary#diversification) than by trying to pick individual winning [stocks](/glossary#stock).
*   **Takeaway**: [Diversification](/glossary#diversification) is not just common sense wisdom — it's mathematically proven to work. Trust the math.
\`,
        keyTakeaways: [
            "Diversification is the only free lunch in investing — reduce risk without reducing returns.",
            "Correlation is the key — combine assets that don't move together.",
            "Diversify across asset classes, geographies, and sectors for maximum protection.",
            "Rebalance regularly to maintain your target allocation and automatically buy low, sell high."
        ]
    },`;

// Find and replace ib_3 section
const startMarker = '"ib_3": {';
const endMarker = '"ib_4": {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find ib_3 or ib_4 markers in the file');
    process.exit(1);
}

// Validate new content
const charCount = newIb3.length;
const partCount = (newIb3.match(/## Part \d+/g) || []).length;

console.log('=== ib_3: The Power of Diversification - VALIDATION ===');
console.log('');
console.log('Character Count:', charCount);
console.log('Required Minimum: 6000');
console.log('Status:', charCount >= 6000 ? '✓ PASS' : '✗ FAIL');
console.log('');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');
console.log('');

if (charCount < 6000 || partCount < 5 || partCount > 9) {
    console.log('=== VALIDATION FAILED - NOT APPLYING CHANGES ===');
    process.exit(1);
}

// Replace the content
const before = content.substring(0, startIdx);
const after = content.substring(endIdx);
const newContent = before + newIb3 + '\n    ' + after;

// Write the updated file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('=== VALIDATION PASSED - CHANGES APPLIED ===');
console.log('✓ Successfully updated ib_3 lesson!');
