const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_12": {
        title: "Sector Breakdown",
        content: \`
# Sector Breakdown: Understanding Market Segments

The stock market is divided into sectors — groups of companies in similar industries. Different sectors perform differently depending on economic conditions, [interest rates](/glossary#interest-rate), and business cycles. Understanding sector dynamics helps you [diversify](/glossary#diversification) effectively and interpret market movements. This lesson covers the 11 official sectors and how they behave.

## Part 1: What Are Market Sectors?

Sectors are standardized categories that group companies by their primary business activity.

*   **Definition**: A classification system that groups similar businesses together.
*   **GICS Standard**: Global Industry Classification Standard, created by MSCI and S&P Dow Jones. The dominant system used worldwide.
*   **11 GICS Sectors**: Information Technology, Healthcare, Financials, Consumer Discretionary, Communication Services, Industrials, Consumer Staples, Energy, Utilities, Real Estate, Materials.
*   **Why It Matters**: Sectors respond differently to economic conditions. Tech booms during growth; utilities outperform during downturns.
*   **Sector [ETFs](/glossary#etf)**: Each sector has dedicated [ETFs](/glossary#etf) (XLK for Tech, XLV for Healthcare) allowing targeted exposure.
*   **[Portfolio](/glossary#portfolio) Analysis**: Check your sector allocation. Over-concentration in one sector is hidden [risk](/glossary#risk).

## Part 2: Technology — The Growth Engine

Information Technology is the largest sector and often the market's driver.

*   **Weight in S&P 500**: ~28% — by far the largest sector.
*   **Key Companies**: Apple, Microsoft, NVIDIA, Adobe, Salesforce, Cisco, Accenture.
*   **Characteristics**: High growth, high [valuations](/glossary#valuation), high [volatility](/glossary#volatility). Often leads [bull markets](/glossary#bull-market).
*   **Note**: Some "tech" giants are actually in other sectors. Google and Meta are Communication Services. Amazon is Consumer Discretionary.
*   **Economic Sensitivity**: Best during economic expansion and low [interest rate](/glossary#interest-rate) environments.
*   **[Risk](/glossary#risk) Factors**: Valuation compression when rates rise, regulatory pressure, rapid innovation cycles.
*   **[ETF](/glossary#etf)**: XLK (Technology Select Sector SPDR), VGT (Vanguard Information Technology).

## Part 3: Healthcare — Defensive Growth

Healthcare combines defensive characteristics with long-term growth potential.

*   **Weight in S&P 500**: ~14%.
*   **Key Companies**: UnitedHealth, Johnson & Johnson, Eli Lilly, Pfizer, AbbVie, Merck, Thermo Fisher.
*   **Subsectors**: Pharmaceuticals, Biotechnology, Health Insurance, Medical Devices, Healthcare Services.
*   **Characteristics**: Relatively defensive (people need healthcare in recessions). Aging demographics provide secular tailwind.
*   **[Volatility](/glossary#volatility) Driver**: Drug trial results can cause huge single-[stock](/glossary#stock) swings.
*   **Regulatory [Risk](/glossary#risk)**: Drug pricing debates, Medicare negotiations, and FDA approvals affect the sector.
*   **[ETF](/glossary#etf)**: XLV (Health Care Select Sector SPDR), VHT (Vanguard Health Care).

## Part 4: Financials — Banks and Beyond

The Financial sector includes banks, insurers, and investment firms. Sensitive to [interest rates](/glossary#interest-rate) and economic health.

*   **Weight in S&P 500**: ~12%.
*   **Key Companies**: Berkshire Hathaway, JPMorgan Chase, Bank of America, Wells Fargo, Goldman Sachs, Visa, Mastercard.
*   **Subsectors**: Banks, Insurance, Asset Management, Payment Processors.
*   **Interest Rate Sensitivity**: Banks make more money when [interest rates](/glossary#interest-rate) rise (widening net interest margin).
*   **Economic Sensitivity**: Loan losses increase during recessions. 2008 crisis was centered on financials.
*   **Regulation**: Heavily regulated. Capital requirements, stress tests, and consumer protection laws affect profitability.
*   **[ETF](/glossary#etf)**: XLF (Financial Select Sector SPDR), VFH (Vanguard Financials).

## Part 5: Consumer Discretionary vs. Consumer Staples

Two consumer-facing sectors with opposite defensive characteristics.

*   **Consumer Discretionary**: Non-essential goods and services. Amazon, Tesla, Home Depot, Nike, Starbucks, McDonald's.
    *   **Weight**: ~10% of S&P 500.
    *   **Behavior**: Thrives in strong economy. Falls hard in recessions as consumers cut back.
    *   **Examples**: New TVs, vacations, restaurants, clothing.
*   **Consumer Staples**: Essential goods people buy regardless of economy. Procter & Gamble, Coca-Cola, Walmart, Costco, PepsiCo.
    *   **Weight**: ~7% of S&P 500.
    *   **Behavior**: Defensive. Stable performance in recessions (people still buy toothpaste).
    *   **Examples**: Food, beverages, household products, personal care.
*   **Trade-Off**: Discretionary offers higher growth in good times; Staples offers protection in bad times.
*   **[ETFs](/glossary#etf)**: XLY (Consumer Discretionary), XLP (Consumer Staples).

## Part 6: Energy and Materials — Commodity Plays

These cyclical sectors are tied to raw material prices and global demand.

*   **Energy (~5%)**: Exxon Mobil, Chevron, ConocoPhillips, Schlumberger. Oil, gas, and energy equipment.
    *   **Driver**: Oil prices dominate returns. Energy booms when oil rises; crashes when it falls.
    *   **[Inflation](/glossary#inflation) Hedge**: Historically performs well during [inflationary](/glossary#inflation) periods.
    *   **Transition [Risk](/glossary#risk)**: Shift to renewables creates long-term uncertainty.
*   **Materials (~3%)**: Linde, Air Products, Sherwin-Williams, Freeport-McMoRan. Chemicals, mining, construction materials.
    *   **Driver**: Industrial demand and commodity prices.
    *   **Economic Sensitivity**: Highly cyclical. Boom during construction and manufacturing expansions.
*   **[Volatility](/glossary#volatility)**: Both sectors experience dramatic swings based on external commodity factors.
*   **[ETFs](/glossary#etf)**: XLE (Energy), XLB (Materials).

## Part 7: Industrials and Utilities — The Workhorses

These sectors represent the "old economy" with different characteristics.

*   **Industrials (~8%)**: Caterpillar, Union Pacific, Boeing, Honeywell, United Parcel Service, General Electric.
    *   **Characteristics**: Manufacturing, transportation, aerospace, machinery.
    *   **Economic Sensitivity**: Cyclical. Boom during expansions; suffer in recessions.
    *   **Leading Indicator**: Industrial activity often predicts broader economic trends.
*   **Utilities (~3%)**: NextEra Energy, Duke Energy, Southern Company, Dominion Energy.
    *   **Characteristics**: Boring but stable. Regulated profits more predictable.
    *   **Defensive**: People pay electricity bills even in recessions.
    *   **[Dividend](/glossary#dividend) Focus**: High [dividend yields](/glossary#dividend-yield) (3-4%+). Popular for income investors.
    *   **[Interest Rate](/glossary#interest-rate) Sensitivity**: Utilities fall when rates rise (their [yields](/glossary#dividend-yield) become less attractive vs. [bonds](/glossary#bond)).
*   **[ETFs](/glossary#etf)**: XLI (Industrials), XLU (Utilities).

## Part 8: Communication Services and Real Estate

Two sectors reclassified relatively recently with distinct characteristics.

*   **Communication Services (~9%)**: Google (Alphabet), Meta (Facebook), Netflix, Disney, Verizon, AT&T, T-Mobile.
    *   **Origins**: Created in 2018 by moving media and telecom from other sectors.
    *   **Duality**: Mix of growth (Google, Meta) and mature [dividend](/glossary#dividend) payers (Verizon).
    *   **[Volatility](/glossary#volatility)**: Tech-like swings for digital media companies.
*   **[Real Estate](/glossary#reit) (~3%)**: American Tower, Prologis, Equinix, Simon Property Group, Public Storage.
    *   **Structure**: Mostly [REITs](/glossary#reit) (Real Estate Investment Trusts) that must pay 90% of income as [dividends](/glossary#dividend).
    *   **[Income](/glossary#dividend)**: High [yields](/glossary#dividend-yield), but [dividends](/glossary#dividend) taxed as ordinary income.
    *   **[Interest Rate](/glossary#interest-rate) Sensitivity**: Suffers when rates rise (competes with [bonds](/glossary#bond) for income investors).
*   **[ETFs](/glossary#etf)**: XLC (Communication Services), XLRE (Real Estate).

## Part 9: Sector Rotation and Strategy

Understanding how sectors behave through economic cycles can inform [portfolio](/glossary#portfolio) decisions.

*   **Early Expansion**: Technology, Consumer Discretionary, Industrials lead. Economic optimism.
*   **Late Expansion**: Energy, Materials outperform. Commodity demand peaks.
*   **Early [Recession](/glossary#recession)**: Defensive sectors (Utilities, Consumer Staples, Healthcare) outperform.
*   **Late [Recession](/glossary#recession)/Recovery**: Financials rebound as bad loans stabilize and rates fall.
*   **Caution**: Timing sector rotation is extremely difficult. Most professionals fail at it.
*   **Better Strategy**: Own a [diversified](/glossary#diversification) [index fund](/glossary#index-fund) that includes all sectors. Let the market weight them.
*   **Check Your Allocation**: Review your [portfolio](/glossary#portfolio)'s sector exposure. Concentrated positions hide [risk](/glossary#risk) — if your job is in tech and your entire [portfolio](/glossary#portfolio) is tech [stocks](/glossary#stock), you're dangerously concentrated.
\`,
        keyTakeaways: [
            "11 GICS sectors divide the market: Technology is largest (~28%), followed by Healthcare and Financials.",
            "Cyclical sectors (Tech, Discretionary, Energy) outperform in growth; Defensives (Utilities, Staples) outperform in downturns.",
            "Sector rotation timing is extremely difficult — most investors should stay diversified.",
            "Check your portfolio's sector exposure to avoid hidden concentration risk."
        ]
    },`;

const startMarker = '"sm_12": {';
const endMarker = '"sm_13": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_12: Sector Breakdown - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_12!');
