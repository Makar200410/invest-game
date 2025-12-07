const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_11": {
        title: "Market Indices",
        content: \`
# Market Indices: Measuring the Market

A market index is a measurement of a section of the stock market, calculated from the prices of selected [stocks](/glossary#stock). When people say "the market is up 2%," they're referring to an [index](/glossary#index-fund) like the Dow or S&P 500. Understanding indices helps you interpret financial news, benchmark your performance, and choose the right [index funds](/glossary#index-fund).

## Part 1: What Is a Market Index?

An [index](/glossary#index-fund) is a statistical measure of the performance of a group of securities.

*   **Definition**: A weighted average of selected [stock](/glossary#stock) prices that represents a market or sector.
*   **Purpose**: To track overall market or sector performance in a single number.
*   **Benchmark**: Used to compare investment performance. "Did you beat the S&P 500?"
*   **Index Composition**: Each index has rules about which [stocks](/glossary#stock) are included and how they're weighted.
*   **Not Investable**: An [index](/glossary#index-fund) itself is just a number. You invest in [index funds](/glossary#index-fund) that replicate it.
*   **Historical Record**: Indices provide decades of performance data for research and analysis.

## Part 2: The Dow Jones Industrial Average

The [Dow](/glossary#dow-jones) is the oldest and most quoted US [index](/glossary#index-fund), though it has significant limitations.

*   **History**: Created in 1896 by Charles Dow. Originally 12 [stocks](/glossary#stock), now 30.
*   **Composition**: 30 large, blue-chip US companies. Committee selects members subjectively.
*   **Price-Weighted**: Higher-priced [stocks](/glossary#stock) have more influence, regardless of company size.
*   **Problem with Price-Weighting**: A $500 [stock](/glossary#stock) affects the [Dow](/glossary#dow-jones) 10x more than a $50 [stock](/glossary#stock), even if the $50 company is larger.
*   **Current Members**: Apple, Microsoft, Coca-Cola, Goldman Sachs, McDonald's, and more. Updated occasionally.
*   **The Dow Divisor**: To maintain continuity through [stock splits](/glossary#stock-split) and changes, a special divisor adjusts the calculation.
*   **Reputation vs. Reality**: Famous and widely quoted, but the S&P 500 is a better market representation.

## Part 3: The S&P 500 — The Real Benchmark

The S&P 500 is the most important US [stock](/glossary#stock) market [index](/glossary#index-fund) and the true benchmark for professional investors.

*   **Composition**: 500 of the largest US companies, representing ~80% of US equity [market cap](/glossary#market-cap).
*   **Selection**: Committee selects based on [market cap](/glossary#market-cap), [liquidity](/glossary#liquidity), profitability, and other factors.
*   **[Market Cap Weighted](/glossary#market-cap-weighted)**: Larger companies have proportionally larger influence. Apple (~7%) matters more than smaller members.
*   **Sector Representation**: All 11 GICS sectors included. Technology, Healthcare, Financials dominant.
*   **The Benchmark**: When professionals say "beat the market," they mean beat the S&P 500.
*   **Index Funds**: SPY (SPDR), VOO (Vanguard), IVV (iShares) all track the S&P 500 for ~0.03% [expense ratio](/glossary#expense-ratio).

## Part 4: The NASDAQ Composite and NASDAQ 100

The NASDAQ indices are heavily tilted toward technology and growth companies.

*   **NASDAQ Composite**: All [stocks](/glossary#stock) listed on the NASDAQ exchange (~3,000). Tech-heavy, growth-oriented.
*   **NASDAQ 100**: Top 100 largest non-financial companies on NASDAQ. More focused.
*   **Tech Concentration**: Apple, Microsoft, Amazon, Google, Meta, Tesla, NVIDIA dominate.
*   **Higher [Volatility](/glossary#volatility)**: Tech-heavy means more dramatic swings. Great in growth periods, brutal in downturns.
*   **QQQ**: The famous [ETF](/glossary#etf) tracking Nasdaq 100. One of the most traded securities in the world.
*   **2000 Warning**: NASDAQ Composite fell 78% from 2000-2002 during the dot-com crash. High returns come with high [risk](/glossary#risk).

## Part 5: Total Market Indices

Total market indices capture the entire US [stock](/glossary#stock) market, not just the largest companies.

*   **Wilshire 5000**: Originally ~5,000 [stocks](/glossary#stock), now ~3,500. Attempts to include all US [stocks](/glossary#stock).
*   **Russell 3000**: Largest 3,000 US [stocks](/glossary#stock) by [market cap](/glossary#market-cap). 98% of investable US market.
*   **CRSP Total Market Index**: What Vanguard's VTI tracks. ~4,000 [stocks](/glossary#stock).
*   **Why Total Market?**: Includes [small caps](/glossary#market-cap) that S&P 500 misses. More complete [diversification](/glossary#diversification).
*   **Difference from S&P 500**: Minimal in practice. [Large caps](/glossary#market-cap) dominate both. Returns are highly correlated.
*   **Index Fund**: VTI (Vanguard Total Stock Market) — one fund, entire US market.

## Part 6: Small Cap and Specialty Indices

Various indices track specific slices of the market beyond [large caps](/glossary#market-cap).

*   **Russell 2000**: Top [small cap](/glossary#market-cap) index. [Stocks](/glossary#stock) ranked 1,001-3,000 by [market cap](/glossary#market-cap).
*   **S&P 600**: S&P's [small cap](/glossary#market-cap) index. Stricter profitability requirements.
*   **Russell Midcap**: Companies ranked 201-1,000 by [market cap](/glossary#market-cap).
*   **Sector Indices**: S&P Technology (XLK), S&P Healthcare (XLV), S&P Financials (XLF).
*   **Value vs. Growth**: Russell 1000 Value, Russell 1000 Growth segement[stocks](/glossary#stock) by style.
*   **[REIT](/glossary#reit) Indices**: MSCI US REIT, FTSE Nareit track real estate investment trusts.

## Part 7: International and Global Indices

Measuring non-US markets requires different indices designed for global investing.

*   **MSCI EAFE**: Europe, Australasia, Far East. Developed markets excluding US and Canada.
*   **MSCI Emerging Markets**: China, India, Brazil, Taiwan, and other developing economies.
*   **MSCI World**: All developed country [stocks](/glossary#stock) including the US.
*   **MSCI ACWI**: All Country World Index. Everything — developed and emerging.
*   **FTSE Global All Cap**: Similar comprehensive global coverage.
*   **Country-Specific**: Nikkei 225 (Japan), DAX (Germany), FTSE 100 (UK), Shanghai Composite (China).
*   **Currency Impact**: International indices are affected by both [stock](/glossary#stock) performance and [currency](/glossary#currency) movements vs. the dollar.

## Part 8: How Indices Are Calculated

The weighting methodology dramatically affects how an [index](/glossary#index-fund) behaves.

*   **[Market Cap Weighted](/glossary#market-cap-weighted)**: Most common. Larger [market cap](/glossary#market-cap) = higher weight. S&P 500 uses this.
*   **Price-Weighted**: Higher share price = higher weight. [Dow Jones](/glossary#dow-jones) uses this. Outdated methodology.
*   **Equal-Weighted**: Every [stock](/glossary#stock) gets same weight. Requires constant [rebalancing](/glossary#rebalancing).
*   **Float-Adjusted**: Only counts shares available for public trading, excluding insider-held shares.
*   **Fundamental-Weighted**: Weight by [earnings](/glossary#eps), [dividends](/glossary#dividend), or revenue instead of price.
*   **Why It Matters**: Weighting affects performance. Equal-weight outperformed during [small cap](/glossary#market-cap) rallies; market-cap weight outperformed when [mega caps](/glossary#market-cap) dominated.

## Part 9: Using Indices in Your Investing

Here's how to practically apply your knowledge of indices.

*   **Choose Your Benchmark**: If you're a US investor, the S&P 500 or Total Market is your benchmark.
*   **Compare Performance**: "I returned 8% this year" is meaningless without context. How did the S&P 500 do?
*   **Select [Index Funds](/glossary#index-fund)**: Match funds to your desired exposure. VTI for US, VXUS for international, BND for [bonds](/glossary#bond).
*   **Understand News**: When CNBC says "the Dow is down 500 points," you know what that means (price-weighted, blue chips).
*   **Avoid Chasing Indices**: Don't reallocate based on recent index performance. Past returns don't predict future returns.
*   **Keep It Simple**: A Total US + Total International + Total [Bond](/glossary#bond) portfolio covers the world's indices.
\`,
        keyTakeaways: [
            "The S&P 500 is the primary US benchmark — market-cap weighted, 500 largest companies.",
            "The Dow Jones is famous but flawed — price-weighted and only 30 stocks.",
            "Total market indices (VTI, Russell 3000) capture the full US market including small caps.",
            "Use indices to benchmark your performance and select appropriate index funds."
        ]
    },`;

const startMarker = '"sm_11": {';
const endMarker = '"sm_12": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_11: Market Indices - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_11!');
