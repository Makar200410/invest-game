const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_3": {
        title: "Interest Rates (The Fed)",
        content: \`
# The Master Lever: Understanding Interest Rates and the Federal Reserve

[Interest rates](/glossary#interest-rate) are the most powerful force in financial markets. When the [Federal Reserve](/glossary#fed) speaks, markets move. A single word change in a Fed statement can send [stocks](/glossary#stock), [bonds](/glossary#bond), and currencies swinging by billions of dollars. Understanding how interest rates work and how the Fed uses them is essential knowledge for any trader or investor.

The phrase "Don't fight the Fed" exists for a reason. When the Fed raises rates, money gets more expensive, and asset prices often fall. When they lower rates, money gets cheaper, and asset prices often rise. Central bank policy is the tide that lifts—or sinks—all boats.

## Part 1: What Is an Interest Rate?

An **interest rate** is the cost of borrowing money, expressed as a percentage of the principal. It's also the reward for lending money.

*   **Definition**: An interest rate is the price of money. If you borrow $100 at 5% annual interest, you owe $105 after one year.
*   **Dual Role**: For borrowers, it's a cost. For lenders and savers, it's a return on their money.
*   **Key Rates**:
    *   **Federal Funds Rate**: The rate banks charge each other for overnight loans. The Fed's primary policy tool.
    *   **Prime Rate**: The rate banks charge their best customers. Tied to the federal funds rate.
    *   **Mortgage Rates**: What you pay for a home loan. Influenced by the 10-year Treasury [yield](/glossary#yield).
    *   **Treasury Yields**: The [interest rate](/glossary#interest-rate) on government [bonds](/glossary#bond). The benchmark "risk-free" rate.
*   **Nominal vs. Real Rates**:
    *   **Nominal Rate**: The stated interest rate.
    *   **Real Rate**: Nominal rate minus [inflation](/glossary#inflation). If inflation is 4% and nominal rates are 5%, the real rate is 1%.
*   **Short-Term vs. Long-Term**: Short-term rates are directly controlled by the Fed. Long-term rates are set by the market based on expectations.

## Part 2: The Federal Reserve — America's Central Bank

The **Federal Reserve** (the "Fed") is the central bank of the United States. It was created in 1913 to provide stability to the financial system.

*   **Structure**: 12 regional Federal Reserve Banks, overseen by the Board of Governors in Washington, D.C.
*   **The FOMC (Federal Open Market Committee)**: The Fed's monetary policy-making body. Meets eight times per year to decide on interest rates.
*   **Dual Mandate**: The Fed has two primary goals:
    1. **Maximum Employment**: Keep unemployment low.
    2. **Stable Prices**: Keep [inflation](/glossary#inflation) around 2%.
*   **The Fed Chair**: The public face of the Fed. Recent chairs: Jerome Powell (current), Janet Yellen, Ben Bernanke, Alan Greenspan. Their words are parsed obsessively by markets.
*   **Independence**: The Fed is meant to be politically independent, making decisions based on economic data, not political pressure—though this is often contested.
*   **"Don't Fight the Fed"**: The Fed has immense power to move markets. Going against Fed policy is often a losing trade.

## Part 3: How the Fed Controls Interest Rates

The Fed doesn't set rates by decree. It uses several tools to influence where rates land.

*   **Open Market Operations**: The primary tool. The Fed buys and sells government [bonds](/glossary#bond).
    *   **Buying Bonds**: Injects money into the banking system, lowering rates.
    *   **Selling Bonds**: Pulls money out of the system, raising rates.
*   **Federal Funds Rate Target**: The Fed sets a target range (e.g., 5.25%-5.50%). Through open market operations, they guide actual rates toward this target.
*   **Discount Rate**: The rate the Fed charges banks for emergency borrowing directly from the Fed.
*   **Reserve Requirements** (less common now): The percentage of deposits banks must hold in reserve. Higher requirements = less money to lend = higher rates.
*   **Interest on Reserves (IORB)**: The rate the Fed pays banks on reserves held at the Fed. A floor for the fed funds rate.
*   **Quantitative Easing (QE)**: Large-scale bond buying to lower long-term rates when short-term rates are already near zero.
*   **Quantitative Tightening (QT)**: Letting bonds mature without reinvestment, shrinking the Fed's balance sheet and tightening conditions.

## Part 4: Why Interest Rates Matter for the Economy

Interest rates are the transmission mechanism through which monetary policy affects the real economy.

*   **Consumer Spending**: Higher rates make borrowing more expensive (car loans, credit cards, mortgages). Consumers spend less.
*   **Business Investment**: Higher rates increase the cost of financing new projects. Companies invest less.
*   **Housing Market**: Mortgage rates directly affect home affordability. Higher rates = fewer buyers = lower home prices.
*   **Currency Value**: Higher rates attract foreign capital seeking better returns, strengthening the dollar.
*   **Inflation Control**: By cooling demand, higher rates reduce inflationary pressure.
*   **Unemployment Trade-Off**: Lower demand can lead to layoffs. The Fed must balance [inflation](/glossary#inflation) control with job preservation.
*   **Stock Valuations**: Higher rates increase the [discount rate](/glossary#discount-rate) used to value future [earnings](/glossary#earnings), reducing stock prices—especially for [growth stocks](/glossary#growth-stock).

## Part 5: The Yield Curve — Reading the Market's Mind

The **yield curve** plots [interest rates](/glossary#interest-rate) across different maturities. Its shape tells a story about economic expectations.

*   **Normal Yield Curve**: Upward sloping. Short-term rates are lower than long-term rates. This is typical—investors demand more compensation for locking up money longer.
*   **Flat Yield Curve**: Short and long-term rates are similar. Often a transition phase, signaling uncertainty.
*   **Inverted Yield Curve**: Short-term rates are *higher* than long-term rates. This is a warning sign.
    *   **Recession Indicator**: An inverted curve has preceded every US recession in the past 50 years.
    *   **Logic**: Markets expect the Fed will cut rates in the future because of economic weakness.
*   **Steepening Curve**: Long-term rates rising faster than short-term. Often bullish, signaling economic growth expectations.
*   **Flattening Curve**: The opposite—can signal slowing growth or tighter policy.
*   **Key Spread**: The 2-year / 10-year Treasury spread is the most-watched measure of curve shape. Negative = inverted.

## Part 6: Fed Meetings and Market Impact

FOMC meetings are major market events. Traders position carefully around these dates.

*   **Meeting Schedule**: Eight meetings per year, roughly every six weeks.
*   **The Rate Decision**: Will the Fed raise, cut, or hold rates? Markets price in expectations beforehand. Surprises cause major moves.
*   **The Statement**: Every word is analyzed. Changes from the previous statement are highlighted. Phrases like "patient" or "data-dependent" are dissected.
*   **The Dot Plot**: Quarterly, FOMC members project where they expect rates to be in coming years. A visual map of policy intentions.
*   **The Press Conference**: The Fed Chair answers questions. Tone matters. A "hawkish" (tough on inflation) tone is bearish for [stocks](/glossary#stock); "dovish" (easier policy) is bullish.
*   **Trading the Fed**:
    *   Volatility spikes around announcements.
    *   The knee-jerk reaction is often reversed ("fade the move").
    *   Focus on forward guidance, not just the current decision.
    *   Fed Funds [Futures](/glossary#futures) show market expectations for future rate moves.

## Part 7: Interest Rates and Your Investments

Understanding the rate environment informs every investment decision.

*   **[Bonds](/glossary#bond)**: Bond prices fall when rates rise (and vice versa). Long-duration bonds are most sensitive.
    *   **Rule of Thumb**: If rates rise 1%, a 10-year bond falls roughly 8-10%.
*   **[Stocks](/glossary#stock)**: Higher rates reduce valuations, especially for [growth stocks](/glossary#growth-stock) with profits far in the future.
    *   **Value vs. Growth**: [Value stocks](/glossary#value-stock) often outperform when rates rise.
    *   **Financials**: Banks often benefit from higher rates (higher net interest margins).
*   **Real Estate**: Higher mortgage rates reduce affordability and compress property values.
*   **Gold**: Gold pays no [yield](/glossary#yield), so high rates increase the opportunity cost of holding gold. Gold tends to struggle when real rates are high.
*   **[Forex](/glossary#forex)**: Higher US rates attract capital, strengthening the dollar against other currencies.
*   **Savings**: Finally, higher rates mean better returns on savings accounts and CDs.
*   **Strategic Positioning**: In a rising rate environment, shorten bond duration, favor value over growth, and consider financials. In a falling rate environment, extend duration, favor growth, and consider rate-sensitive sectors.

The Fed is the most powerful player in markets. Understand their goals, their tools, and their signals, and you'll have a significant edge in navigating financial markets.
\`,
        keyTakeaways: [
            "Interest rates are the cost of borrowing money; the Fed controls short-term rates through open market operations.",
            "The Fed has a dual mandate: maximum employment and 2% inflation. Rate decisions balance these goals.",
            "An inverted yield curve (short rates > long rates) has predicted every modern recession.",
            "When rates rise, bond prices fall, stock valuations compress, and the dollar strengthens.",
            "FOMC meetings are major market events—focus on forward guidance and the Fed Chair's tone."
        ]
    },`;

const startMarker = '"eco_3": {';
const endMarker = '"eco_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_3: Interest Rates (The Fed) - VALIDATION ===');
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
console.log('✓ Successfully updated eco_3!');
