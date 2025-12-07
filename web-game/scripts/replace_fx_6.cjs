const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_6": {
        title: "Factors Moving Currencies",
        content: \`
# Fundamental Analysis: What Moves Currencies?

Technical analysis (charts) tells you *when* to enter. Fundamental analysis tells you *why* to enter. In the long run, currency prices are driven by the economic health of nations. A strong economy equals a strong currency. A weak economy equals a weak currency. This lesson covers the "Big Three" drivers: Interest Rates, Inflation, and Growth.

## Part 1: Interest Rates (The King)

Interest rates are the single most important driver of Forex markets. Period.

*   **The Concept**: Money flows to where it is treated best. If the US pays 5% interest on deposits and Europe pays 1%, investors will sell Euros and buy Dollars to earn the higher yield.
*   **Central Banks**: They set the "Base Rate."
    *   *Fed (USA)*: Federal Funds Rate.
    *   *ECB (Europe)*: Deposit Facility Rate.
    *   *BOE (UK)*: Bank Rate.
*   **The Mechanism**:
    *   *Rate Hike*: Central bank raises rates. Currency strengthens (Demand increases).
    *   *Rate Cut*: Central bank lowers rates. Currency weakens (Demand decreases).
*   **Hawkish vs. Dovish**:
    *   *Hawkish*: A central banker who wants to raise rates (usually to fight inflation). Good for currency.
    *   *Dovish*: A central banker who wants to lower rates (to stimulate growth). Bad for currency.

## Part 2: Inflation (The Enemy)

Inflation destroys the value of money, but its effect on Forex is tricky.

*   **Purchasing Power**: High inflation means the currency buys less. Theoretically, the currency should fall.
*   **The Central Bank Reaction**: However, high inflation forces the Central Bank to **raise interest rates**.
*   **The Paradox**:
    *   *Scenario A*: Inflation is high, and the Central Bank raises rates aggressively. -> Currency **RISES** (chasing yield).
    *   *Scenario B*: Inflation is high, but the economy is too weak to handle higher rates (Stagflation). -> Currency **CRASHES**.
*   **CPI (Consumer Price Index)**: The main measure of inflation. A "hot" CPI print usually causes the currency to spike up (anticipating a rate hike).

## Part 3: Economic Growth (GDP)

A growing economy attracts capital.

*   **GDP (Gross Domestic Product)**: The scorecard of economic health.
*   **The Logic**:
    *   Strong Growth -> Companies make money -> Foreign investors buy stocks/bonds -> They need the local currency to buy them -> Currency Rises.
    *   Strong Growth -> Central Bank can afford to raise rates -> Currency Rises.
*   **Key Indicators**:
    *   *GDP Growth Rate*: Is the economy expanding or contracting?
    *   *Retail Sales*: Are consumers spending money? (70% of US GDP is consumption).
    *   *PMI (Purchasing Managers' Index)*: A survey of business confidence. > 50 means expansion.

## Part 4: The Labor Market (NFP)

Jobs are the fuel of the economy.

*   **NFP (Non-Farm Payrolls)**: The most important monthly data release in the world. Released the first Friday of every month by the US.
    *   *The Number*: How many jobs were created in the US (excluding farms).
    *   *The Reaction*: A strong number (> 200k) implies a strong economy -> Fed might raise rates -> USD Rises.
    *   *The Volatility*: The market can move 100 pips in seconds.
*   **Unemployment Rate**: Low unemployment is good. High unemployment is bad.
*   **Wage Growth**: Are people earning more? Higher wages = Higher Inflation = Higher Rates.

## Part 5: Geopolitics and Uncertainty

Politics moves money.

*   **Safe Havens**: When the world is scary (War, Pandemic, Crash), money flees to safety.
    *   *Safe Currencies*: USD, JPY, CHF.
    *   *Risk Currencies*: AUD, NZD, CAD, Emerging Markets.
*   **Elections**: Uncertainty is bad. A contested election or a radical candidate can crash a currency.
*   **Trade Wars**: Tariffs and sanctions hurt the targeted country's currency.
*   **Brexit**: The British Pound was crushed (dropped 20%) after the Brexit vote because of the economic uncertainty.

## Part 6: Commodity Prices

Some currencies are pegged to stuff.

*   **CAD (Canada)**: Oil. Canada exports oil.
    *   *Correlation*: Oil Up -> CAD Up (USD/CAD Down).
*   **AUD (Australia)**: Gold and Iron Ore.
    *   *Correlation*: Gold Up -> AUD Up.
*   **NZD (New Zealand)**: Dairy (Milk powder).
*   **The Trade**: If you see Oil crashing, you can short CAD (Buy USD/CAD).

## Part 7: The Balance of Trade

Exports vs. Imports.

*   **Trade Surplus**: Country exports more than it imports. Foreigners must buy the local currency to pay for goods. -> Currency Rises.
*   **Trade Deficit**: Country imports more than it exports. Locals must sell their currency to buy foreign goods. -> Currency Falls.
*   **Current Account**: The broadest measure of trade and capital flows. A persistent deficit is a long-term drag on the currency (like the US Dollar, though its reserve status protects it).

## Part 8: Market Sentiment and Central Bank Calendar

How traders *feel* about the data and the schedule of power.

*   **Expectations vs. Reality**: The market moves based on the *surprise*, not the number.
    *   *Forecast*: NFP +150k.
    *   *Actual*: +300k.
    *   *Result*: Huge deviation. Massive USD spike.
*   **"Buy the Rumor, Sell the Fact"**: Traders buy before the news comes out (anticipation) and sell immediately after (taking profit), causing the price to reverse.
*   **The Calendar**:
    *   *FOMC (Federal Reserve)*: The most important meeting. 8 times a year.
    *   *ECB (European Central Bank)*: Watch for comments on inflation in the Eurozone.
    *   *BOJ (Bank of Japan)*: Watch for "Yield Curve Control" changes.
    *   *Strategy*: Print the calendar. Do not be in a trade 5 minutes before a rate decision unless you are hedging.

## Part 9: Summary and Strategy

*   **Follow the Central Banks**: Don't fight the Fed. If they are raising rates, buy the currency.
*   **Watch the Calendar**: Know when NFP, CPI, and Rate Decisions are released. (ForexFactory is a good source).
*   **Don't Trade the News (Blindly)**: Spreads widen, and slippage occurs. It's gambling. Wait for the dust to settle.
*   **Understand the Narrative**: Is the market focused on inflation? Or growth? Or war? The narrative drives the price.
*   **Final Word**: Fundamental analysis is the long game. Technical analysis is the short game. Combine them for maximum effect.
*   **Politics**: Always keep an eye on elections and geopolitical tensions. They can override economic data in an instant.
\`,
        keyTakeaways: [
            "Interest rates are the #1 driver of currency values.",
            "Strong economic data (GDP, Jobs) leads to a stronger currency.",
            "Safe haven currencies (USD, JPY) rise during geopolitical fear.",
            "Commodity currencies (CAD, AUD) move with Oil and Gold."
        ]
    },`;

const startMarker = '"fx_6": {';
const endMarker = '"fx_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_6: Fundamental Drivers - VALIDATION ===');
console.log('Chars:', charCount, (charCount > 6500) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount <= 6500 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_6!');
