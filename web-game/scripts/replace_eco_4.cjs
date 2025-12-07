const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_4": {
        title: "GDP (Gross Domestic Product)",
        content: \`
# The Scoreboard of Nations: Understanding GDP

**Gross Domestic Product (GDP)** is the most comprehensive measure of economic activity. It's the headline number that tells us whether an economy is growing or shrinking, booming or busting. Investors, policymakers, and central bankers all watch GDP closely because it affects everything from corporate [earnings](/glossary#earnings) to [interest rate](/glossary#interest-rate) policy to stock market valuations.

When GDP is strong, [stocks](/glossary#stock) tend to rise, unemployment falls, and confidence grows. When GDP falters, the market gets nervous. Understanding GDP gives you a window into the economic cycle and helps you position your portfolio accordingly.

## Part 1: What Is GDP?

**GDP (Gross Domestic Product)** is the total monetary value of all finished goods and services produced within a country's borders during a specific period (usually a quarter or a year).

*   **Definition**: GDP measures the economic output of a nation. It's the "size" of the economy.
*   **Key Word — "Finished"**: GDP counts only final goods, not intermediate products. The value of a car counts; the steel sold to the car factory doesn't (to avoid double-counting).
*   **Geographic Boundary**: GDP measures production *within* the country, regardless of who owns the factors of production. A German company's factory in the US contributes to US GDP.
*   **The Numbers**:
    *   **US GDP**: Approximately $27 trillion (2024).
    *   **Global GDP**: Approximately $105 trillion.
    *   **US vs. China**: The two largest economies. China catching up rapidly.
*   **GDP Per Capita**: GDP divided by population. A better measure of individual prosperity and living standards.
*   **Nominal vs. Real GDP**:
    *   **Nominal GDP**: At current prices. Includes both real growth and [inflation](/glossary#inflation).
    *   **Real GDP**: Adjusted for inflation. Shows the true change in output. This is what economists focus on.

## Part 2: How Is GDP Calculated?

There are three methods to calculate GDP, each providing the same result from different perspectives.

### 1. Expenditure Approach (Most Common)
GDP = C + I + G + (X – M)

*   **C (Consumer Spending)**: What households spend on goods and services. About 68% of US GDP. The biggest driver.
*   **I (Investment)**: Business spending on equipment, structures, and inventories. Also includes residential construction.
*   **G (Government Spending)**: Federal, state, and local government purchases of goods and services (not transfer payments like Social Security).
*   **X (Exports)**: Goods and services sold to foreigners.
*   **M (Imports)**: Goods and services bought from foreigners. Subtracted because they represent production outside the country.
*   **(X – M) = Net Exports**: The trade balance. The US typically runs a trade deficit (imports more than exports).

### 2. Income Approach
Add up all the income earned by factors of production: wages, rents, interest, and profits. Total income equals total output.

### 3. Production (Output) Approach
Add up the value added at each stage of production across all sectors. Less common for headline figures.

## Part 3: GDP Growth — The Economy's Pulse

What investors care about most is not the absolute size of GDP, but the rate of change—**GDP growth**.

*   **Reported as an Annual Rate**: US GDP is released quarterly but expressed at an annual rate (what the growth would be if it continued for a full year).
*   **Example**: Q1 GDP growth of 2.5% means the economy grew at a pace that, if sustained, would produce 2.5% growth for the full year.
*   **Positive Growth**: Economy is expanding. Usually good for [stocks](/glossary#stock).
*   **Negative Growth**: Economy is contracting. Usually bad for [stocks](/glossary#stock).
*   **Trend Growth**: The long-run average growth rate. For the US, approximately 2-2.5% real GDP growth is considered "normal."
*   **Above-Trend Growth**: May signal overheating and coming [inflation](/glossary#inflation). The [Fed](/glossary#fed) might raise rates.
*   **Below-Trend Growth**: The economy is sluggish. The Fed might cut rates to stimulate.

## Part 4: Recessions and the Business Cycle

GDP is central to understanding the **business cycle**—the natural fluctuation of economic activity over time.

*   **Expansion**: GDP is growing, jobs are plentiful, incomes rise.
*   **Peak**: The high point before a downturn.
*   **Contraction (Recession)**: GDP is shrinking.
    *   **Technical Recession**: Two consecutive quarters of negative GDP growth.
    *   **NBER Definition**: The National Bureau of Economic Research officially declares recessions based on broader criteria: employment, income, spending, and production.
*   **Trough**: The low point before recovery begins.
*   **Recovery**: Growth resumes after the trough.
*   **Average US Expansion**: About 6-7 years historically, though recent cycles have been longer.
*   **Recession Stocks**: Defensive sectors (utilities, healthcare, consumer staples) tend to outperform. Cyclical sectors (tech, industrials, consumer discretionary) tend to underperform.

## Part 5: GDP Reports and Market Impact

GDP data releases are major market events. Understanding what to expect and how to interpret the numbers is essential.

*   **Release Schedule (US)**:
    *   **Advance Estimate**: Approximately 4 weeks after the quarter ends. The first look. Often moves markets.
    *   **Second Estimate**: About 2 months after the quarter. Revisions based on more data.
    *   **Third (Final) Estimate**: About 3 months after the quarter.
*   **Source**: Bureau of Economic Analysis (BEA), Department of Commerce.
*   **Market Impact**:
    *   **Stronger-Than-Expected GDP**: Bullish for [stocks](/glossary#stock) (strong economy), but can be bearish for [bonds](/glossary#bond) (higher rates expected).
    *   **Weaker-Than-Expected GDP**: Bearish for [stocks](/glossary#stock), bullish for [bonds](/glossary#bond) (lower rates expected).
*   **Revisions Matter**: Initial estimates are often revised significantly. Don't overreact to a single number.
*   **Components**: The breakdown (consumer spending, investment, government, trade) is as important as the headline. Strong consumer spending is bullish.
*   **GDP Deflator**: A measure of price changes within the GDP calculation—another inflation indicator.

## Part 6: GDP's Limitations

While GDP is the most-watched economic indicator, it has significant limitations that investors should understand.

*   **Doesn't Measure Well-Being**: GDP measures production, not happiness or quality of life.
*   **Ignores Distribution**: GDP can grow while inequality worsens. A few billionaires could drive growth while median incomes stagnate.
*   **Misses the Informal Economy**: Cash transactions, barter, and illegal activities aren't captured.
*   **Doesn't Account for Environmental Costs**: Pollution, resource depletion, and climate damage aren't subtracted.
*   **Non-Market Activities**: Volunteer work, home production (raising children, home cooking) isn't counted.
*   **Time Lag**: GDP data is backward-looking. The economy may have already changed by the time the data is released.
*   **Quality Improvements**: GDP struggles to capture improvements in product quality (smartphones today are far superior to 2010 models but might not be reflected proportionally).

## Part 7: Using GDP Data in Investment Decisions

How do savvy investors incorporate GDP data into their strategy?

*   **Sector Rotation**: During early expansion, cyclical sectors (tech, industrials, consumer discretionary) often outperform. During late cycle or contraction, defensive sectors gain favor.
*   **Bond Duration**: If GDP is strong and rates are expected to rise, shorten bond duration. If weakness looms and cuts are coming, extend duration.
*   **International Allocation**: Compare GDP growth across countries. Faster-growing economies may offer better opportunities (emerging markets).
*   **Earnings Expectations**: Strong GDP growth supports corporate [earnings](/glossary#earnings). Weak GDP growth often leads to [earnings](/glossary#earnings) misses.
*   **[Fed Policy](/glossary#fed) Forecast**: GDP is a major input for [Fed](/glossary#fed) decisions. Strong GDP = Fed may hike rates. Weak GDP = Fed may cut.
*   **Currency Impact**: Strong GDP attracts foreign investment, potentially strengthening the currency.
*   **Leading Indicators**: GDP is a lagging indicator. For forward-looking signals, watch the PMI (Purchasing Managers' Index), jobless claims, and consumer confidence.
*   **Don't Trade the Number Blindly**: Context matters. A strong GDP print during high [inflation](/glossary#inflation) may be bearish (more rate hikes coming). A weak GDP print with low [inflation](/glossary#inflation) may be bullish (cuts coming).

GDP is the ultimate scorecard for an economy. Understand it, and you'll have crucial context for every investment decision you make.
\`,
        keyTakeaways: [
            "GDP measures the total value of goods and services produced—it's the 'size' of the economy.",
            "GDP = Consumption + Investment + Government Spending + (Exports – Imports).",
            "A recession is typically defined as two consecutive quarters of negative GDP growth.",
            "Strong GDP is bullish for stocks but may trigger Fed tightening; weak GDP is bearish but may bring rate cuts.",
            "GDP is a lagging indicator—watch leading indicators like PMI and consumer confidence for forward signals."
        ]
    },`;

const startMarker = '"eco_4": {';
const endMarker = '"eco_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_4: GDP (Gross Domestic Product) - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated eco_4!');
