const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_6": {
        title: "Sector & Thematic ETFs",
        content: \`
# Sector & Thematic ETFs: Targeted Investing

While broad market ETFs (like the S&P 500) are the foundation of a portfolio, [Sector](/glossary#sector) and Thematic ETFs allow you to target specific slices of the economy. Whether you want to bet on Big Tech, Energy, or the future of Robotics, there is an ETF for that. This lesson explains how to use these precision tools to enhance returns — and the risks of getting too narrow.

## Part 1: What Are Sector ETFs?

Sector ETFs track one of the 11 official GICS (Global Industry Classification Standard) sectors of the economy.

*   **The 11 Sectors**:
    1.  **Technology (XLK)**: Apple, Microsoft, Nvidia. Growth-oriented.
    2.  **Financials (XLF)**: Banks, insurers, Berkshire Hathaway. Rate-sensitive.
    3.  **Healthcare (XLV)**: Pharma, biotech, insurance. Defensive growth.
    4.  **Consumer Discretionary (XLY)**: Amazon, Tesla, Nike. Cyclical.
    5.  **Consumer Staples (XLP)**: P&G, Coke, Walmart. Defensive.
    6.  **Energy (XLE)**: Exxon, Chevron. Oil prices drive returns.
    7.  **Utilities (XLU)**: Power companies. Bond-like income.
    8.  **Industrials (XLI)**: Boeing, CAT, Railroads. Economic backbone.
    9.  **Materials (XLB)**: Chemicals, mining. Commodity-linked.
    10. **Real Estate (XLRE)**: REITs. Income and rates.
    11. **Communication Services (XLC)**: Google, Meta, Disney.
*   **Purpose**: Allows you to overweight parts of the economy you think will outperform.
*   **State Street SPDRs**: The "Select Sector SPDRs" (tickers starting with X) are the most popular way to trade these.

## Part 2: What Are Thematic ETFs?

Thematic ETFs go beyond traditional sectors to target cross-industry trends or "megatrends."

*   **Definition**: Funds that invest in companies benefiting from a specific structural change in the world.
*   **Examples**:
    *   *Clean Energy (ICLN)*: Solar, wind, hydrogen companies.
    *   *Cybersecurity (CIBR)*: Companies protecting digital assets.
    *   *Robotics & AI (BOTZ)*: Automation and artificial intelligence.
    *   *Cannabis (MSOS)*: Legal marijuana industry.
    *   *Genomics (ARKG)*: Gene editing and biotech innovation.
*   **Cross-Sector**: A "FinTech" ETF might own banks (Financials) and payment processors (Tech).
*   **Growth Focus**: Most thematic ETFs are high-growth, high-risk bets on the future.

## Part 3: Using Sectors for Business Cycles

Sector rotation is a classic strategy of moving money based on the economic cycle.

*   **Early Cycle (Recovery)**: Economy is waking up.
    *   *Buy*: Financials, Consumer Discretionary, Industrials, Tech.
    *   *Why*: People start spending, borrowing, and building.
*   **Mid Cycle (Expansion)**: Peak growth.
    *   *Buy*: Tech, Communication Services.
    *   *Why*: Growth stocks thrive.
*   **Late Cycle (Slowdown)**: Inflation rises, growth slows.
    *   *Buy*: Energy, Materials.
    *   *Why*: Commodities often spike late in the cycle.
*   **Recession (Contraction)**: Economy shrinks.
    *   *Buy*: Consumer Staples, Utilities, Healthcare.
    *   *Why*: "Defensive" sectors. People still need food, power, and medicine.
*   **The Challenge**: Timing the cycle is incredibly difficult. If you are wrong, you underperform the broad market.

## Part 4: The Risks of Thematic Investing

Thematic ETFs are exciting ("Invest in the future!"), but they have a dark side.

*   **The Hype Cycle**: Thematic ETFs often launch *after* a theme has already boomed. You might be buying at the top.
*   **Valuation**: "Great story, terrible price." A company can change the world but still be a bad investment if you pay 100x earnings.
*   **Concentration**: A "Solar ETF" might be dominated by 2-3 companies. If one fails (like Solyndra), the ETF crashes.
*   **Fees**: Thematic ETFs charge higher fees (0.40% - 0.75%) than sector ETFs (0.10%).
*   **Closet Indexing**: Some thematic ETFs just own big tech stocks. A "Metaverse ETF" might just be 10% Meta and 10% Nvidia. You already own those in the S&P 500.
*   **Survivorship Bias**: We remember the Internet ETFs that worked; we forget the 3D Printing ETFs that collapsed.

## Part 5: "Core and Satellite" Strategy

The responsible way to use these funds.

*   **The Core (80-90%)**: Broad market index funds (VTI, VOO). This ensures you capture the market return and keep fees low.
*   **The Satellite (10-20%)**: Targeted bets on sectors or themes you have high conviction in.
*   **Example**:
    *   80% VTI (Total US Market)
    *   10% XLK (Tech) - "I think Tech will continue to eat the world."
    *   10% ICLN (Clean Energy) - "I believe in the green transition."
*   **Benefit**: Satisfies your itch to pick winners without risking your entire retirement.
*   **Rule**: If a satellite position goes to zero, it shouldn't ruin your financial life.

## Part 6: Evaluating a Sector/Thematic ETF

Don't just buy the cool name. Look under the hood.

*   **Holdings**: What are the top 10 stocks? Do they make sense?
    *   *Bad Example*: A "Space Exploration ETF" where the top holding is John Deere (because they make GPS tractors).
*   **Weighting**: Is it market-cap weighted (big companies dominate) or equal-weighted?
*   **Liquidity**: Does it trade enough volume? Wide spreads on niche ETFs kill returns.
*   **AUM**: Is the fund tiny (<$50M)? It might close down.
*   **Expense Ratio**: Is it worth 0.75%? Can you just buy the top 3 stocks yourself and save the fee?
*   **Correlation**: Does it actually move differently than the S&P 500? If it has a 0.99 correlation, just buy the S&P 500.

## Part 7: The Tech Sector Dominance

Technology (XLK) has become so big it distorts the market.

*   **Weighting**: Tech is ~30% of the S&P 500.
*   **Overlap**: If you own VOO (S&P 500) and buy XLK (Tech), you are doubling down on Apple, Microsoft, and Nvidia.
*   **Concentration Risk**: You might think you are diversified, but your portfolio is 50% tech. If tech crashes (like 2000 or 2022), you get crushed.
*   **Reclassification**: Sometimes sectors change. In 2018, Google and Meta moved from Tech to "Communication Services." Visa and Mastercard moved to "Financials."
*   **Lesson**: Know what is in your "Core" before adding "Satellite" exposure. You might already have enough.

## Part 8: Dividend and Income Sectors

Some investors use sectors specifically for income.

*   **The "Bond Proxies"**: Utilities (XLU) and Consumer Staples (XLP) pay high dividends and are stable.
*   **Use Case**: Retirees often overweight these sectors to generate cash flow with less volatility than pure growth stocks.
*   **Interest Rate Sensitivity**: These sectors often fall when interest rates rise (because bonds become more attractive alternatives).
*   **Real Estate (XLRE)**: REITs are their own sector. High income, but sensitive to rates and the economy.
*   **Energy (XLE)**: High dividends, but extreme volatility. Not a "safe" income play.

## Part 9: Summary and Action Plan

How to integrate sectors into your plan.

*   **Start Broad**: Build your core with VTI/VOO first.
*   **Identify Conviction**: Do you genuinely know more about Biotech than the market? If not, skip the sector bet.
*   **Limit Exposure**: Keep sectors/themes to <20% of the portfolio.
*   **Check Fees**: Don't pay >0.50% unless the strategy is truly unique.
*   **Monitor**: Sectors go in and out of favor. Tech led for a decade; Energy led in 2022. You must rebalance.
*   **Thematic Caution**: Be very careful with "hot" themes. By the time there is an ETF for it, the easy money has often been made.
\`,
        keyTakeaways: [
            "Sector ETFs track specific parts of the economy (e.g., Tech, Energy, Financials).",
            "Thematic ETFs track cross-industry trends (e.g., Clean Energy, Robotics).",
            "Use the 'Core and Satellite' approach: 80% broad market, 20% targeted bets.",
            "Beware of high fees and hype in thematic funds."
        ]
    },`;

const startMarker = '"fe_6": {';
const endMarker = '"fe_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_6: Sector ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_6!');
