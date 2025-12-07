const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_2": {
        title: "Inflation & Deflation",
        content: \`
# The Silent Thief: Understanding Inflation and Deflation

[Inflation](/glossary#inflation) is one of the most important economic concepts for investors to understand. It silently erodes the purchasing power of your money, making everything from groceries to housing cost more over time. [Deflation](/glossary#deflation), its opposite, sounds beneficial but can be even more destructive to an economy. Understanding these forces is crucial for protecting and growing your wealth.

Central banks around the world obsess over inflation. The [Federal Reserve](/glossary#fed) has a dual mandate to maintain stable prices (2% inflation target) and maximum employment. Their decisions on [interest rates](/glossary#interest-rate) directly affect your investments, your mortgage, and your purchasing power.

## Part 1: What Is Inflation?

**Inflation** is a sustained increase in the general price level of goods and services over time. When inflation is present, each unit of currency buys fewer goods and services.

*   **Definition**: Inflation measures how much more expensive a set of goods and services has become over a certain period (usually a year).
*   **Measurement**: The most common measure is the Consumer Price Index (CPI), which tracks the price of a basket of typical consumer goods (food, housing, transportation, healthcare, etc.).
*   **Example**: If CPI inflation is 3%, something that cost $100 last year now costs $103.
*   **Types of Inflation**:
    *   **Demand-Pull Inflation**: Too much money chasing too few goods. Demand exceeds supply, pulling prices up.
    *   **Cost-Push Inflation**: Rising production costs (wages, materials, energy) push prices higher.
    *   **Built-In Inflation**: Workers expect prices to rise and demand higher wages, which then raise prices further—a self-reinforcing cycle.
*   **Purchasing Power Erosion**: If your salary doesn't keep pace with inflation, you're effectively taking a pay cut. Your money buys less.
*   **Moderate Inflation is Normal**: A little inflation (2-3%) is considered healthy. It encourages spending and investment rather than hoarding cash.

## Part 2: The Causes of Inflation

Understanding why prices rise helps you anticipate inflationary periods and position your portfolio accordingly.

*   **Monetary Expansion**: When central banks print more money (quantitative easing), more dollars chase the same goods. The classic phrase: "Inflation is always and everywhere a monetary phenomenon" (Milton Friedman).
*   **Government Spending**: Large fiscal deficits funded by borrowing can stimulate demand beyond the economy's capacity, causing inflation.
*   **Supply Chain Disruptions**: The COVID-19 pandemic showed how factory closures, shipping bottlenecks, and chip shortages can spike prices.
*   **Energy Shocks**: Oil price spikes (1970s oil crisis, 2022 Russia-Ukraine war) raise costs throughout the economy, as energy is an input to nearly everything.
*   **Wage-Price Spiral**: Worker wage increases lead to higher production costs, which businesses pass on as higher prices, which triggers demands for more wages—a feedback loop.
*   **Currency Depreciation**: If your country's currency weakens, imports become more expensive, contributing to inflation.
*   **Expectations**: If businesses and workers *expect* inflation, they raise prices and demand higher wages preemptively, making inflation a self-fulfilling prophecy.

## Part 3: What Is Deflation?

**Deflation** is a sustained decrease in the general price level. Prices go down. At first glance, this sounds great—your money buys more. But economists fear deflation more than moderate inflation.

*   **Definition**: Deflation is when the overall price level falls. A basket of goods that cost $100 might cost $97 next year.
*   **Why It's Dangerous**:
    *   **Delayed Spending**: If prices are falling, why buy today when it will be cheaper tomorrow? This delays consumption, hurting businesses.
    *   **Debt Burden Increases**: If you owe $100,000, it's the same nominal amount, but you're paying it back with dollars that are worth *more*. The real burden of debt rises.
    *   **Unemployment**: Falling prices mean falling revenues for businesses. They cut costs by laying off workers.
    *   **Deflationary Spiral**: Falling demand leads to falling prices, which leads to more layoffs, which leads to further falling demand—a vicious cycle.
*   **Historical Example**: The Great Depression (1929–1939) saw severe deflation. Japan struggled with deflation for two decades (the "Lost Decades") after their 1990 real estate bubble burst.
*   **Disinflation**: This is *slowing* inflation (from 6% to 3%), not deflation. It's generally positive.

## Part 4: Measuring Inflation — The Key Indicators

Investors and central bankers watch specific metrics to gauge inflation's trajectory.

*   **CPI (Consumer Price Index)**: The headline measure. Tracks prices paid by urban consumers for a basket of goods.
    *   **Core CPI**: Excludes volatile food and energy prices. Often watched more closely because it's less noisy.
    *   **Release**: Monthly, by the Bureau of Labor Statistics (BLS). Markets react strongly to unexpected CPI readings.
*   **PPI (Producer Price Index)**: Measures prices at the wholesale/producer level. A leading indicator—producer price increases often pass through to consumer prices.
*   **PCE (Personal Consumption Expenditures)**: The [Fed's](/glossary#fed) preferred inflation measure. Covers a broader range of spending than CPI.
    *   **Core PCE**: Excludes food and energy. The 2% inflation target is based on Core PCE.
*   **Breakeven Inflation Rate**: The difference between nominal Treasury [yields](/glossary#yield) and [TIPS](/glossary#tips) yields. Reflects market expectations for future inflation.
*   **Commodity Prices**: Oil, copper, wheat—rising commodity prices often signal future consumer inflation.
*   **Wage Growth**: Rising wages without productivity gains are inflationary.

## Part 5: How Central Banks Fight Inflation

The [Federal Reserve](/glossary#fed) and other central banks are the primary line of defense against runaway inflation. Their main tool is [interest rate](/glossary#interest-rate) policy.

*   **Raising [Interest Rates](/glossary#interest-rate)**: The primary weapon.
    *   Higher rates make borrowing more expensive.
    *   Consumers and businesses spend less.
    *   Demand falls, which cools inflation.
    *   The catch: Higher rates also slow the economy and can trigger recessions.
*   **Quantitative Tightening (QT)**: The Fed sells bonds it owns (or lets them mature without reinvesting), removing money from the system.
*   **Forward Guidance**: The Fed communicates its intentions to shape expectations. If people believe inflation will be controlled, they're less likely to demand higher wages preemptively.
*   **The Volcker Shock (1980)**: [Fed](/glossary#fed) Chair Paul Volcker raised rates to 20% to break the inflationary spiral of the 1970s. It caused a severe recession but crushed inflation.
*   **2022-2023 Tightening Cycle**: The Fed raised rates from 0% to 5%+ to combat post-COVID inflation, the most aggressive tightening in decades.
*   **Fighting Deflation**: Opposite tools—lower rates to near zero, print money (quantitative easing), and encourage spending.

## Part 6: Investing in Inflationary and Deflationary Environments

Different [asset classes](/glossary#asset-class) perform very differently depending on the inflation regime.

### In High Inflation:
*   **Winners**:
    *   **Commodities**: Oil, gold, agricultural products. Prices rise with inflation.
    *   **Real Estate**: Physical [assets](/glossary#asset) tend to hold value. Rents can be raised.
    *   **[TIPS](/glossary#tips) (Treasury Inflation-Protected Securities)**: [Bonds](/glossary#bond) whose principal adjusts with inflation.
    *   **Equities (Some)**: Companies with pricing power (can raise prices) and low debt do better.
    *   **Value [Stocks](/glossary#stock)**: Often outperform [growth stocks](/glossary#growth-stock) as [discount rates](/glossary#discount-rate) rise.
*   **Losers**:
    *   **Long-Term [Bonds](/glossary#bond)**: Lock in fixed payments that are worth less in real terms.
    *   **Cash**: Loses purchasing power every year.
    *   **High-Growth [Stocks](/glossary#stock)**: Future [earnings](/glossary#earnings) are discounted at higher rates, reducing present value.

### In Deflation:
*   **Winners**:
    *   **Cash**: Gains purchasing power.
    *   **High-Quality [Bonds](/glossary#bond)**: Fixed payments become more valuable in real terms.
    *   **Defensive [Stocks](/glossary#stock)**: Utilities, consumer staples, healthcare.
*   **Losers**:
    *   **Debt-Heavy Companies**: Real debt burden increases.
    *   **Commodities**: Prices fall with falling demand.
    *   **Real Estate**: Property values can collapse.

## Part 7: Inflation and Your Personal Finances

Beyond investing, inflation affects your everyday life and long-term planning.

*   **Salary Negotiations**: If you get a 3% raise but inflation is 5%, you've taken a real pay cut. Negotiate with inflation in mind.
*   **Saving vs. Investing**: Cash savings lose value to inflation. Investing in [stocks](/glossary#stock), [real estate](/glossary#real-estate), and other [assets](/glossary#asset) is essential to preserve purchasing power.
*   **Fixed-Rate Mortgages**: If you lock in a mortgage at 3% and inflation rises to 6%, you're paying back with cheaper dollars. Inflation helps debtors.
*   **Retirement Planning**: If you plan to retire in 30 years, even 2% inflation means prices will more than double. Your retirement fund must grow faster than inflation.
*   **Social Security and Pensions**: Some are inflation-adjusted (COLA), some aren't. Know what you're getting.
*   **Real vs. Nominal Returns**: A 7% return sounds great, but if inflation is 4%, your *real* return is only 3%.
*   **The Rule of 72**: Divide 72 by the inflation rate to see how many years until your money's purchasing power is cut in half. At 3% inflation, it takes 24 years.

Understanding inflation and deflation is not optional—it's essential for protecting your financial future. Every investment decision should consider the inflation environment.
\`,
        keyTakeaways: [
            "Inflation erodes purchasing power; deflation increases the real burden of debt.",
            "Central banks fight inflation by raising interest rates and reducing money supply.",
            "In high inflation, own commodities, real assets, and TIPS; avoid long-term bonds and cash.",
            "In deflation, cash and high-quality bonds gain value; debt-heavy companies suffer.",
            "Your real return is your nominal return minus inflation—always think in real terms."
        ]
    },`;

const startMarker = '"eco_2": {';
const endMarker = '"eco_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_2: Inflation & Deflation - VALIDATION ===');
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
console.log('✓ Successfully updated eco_2!');
