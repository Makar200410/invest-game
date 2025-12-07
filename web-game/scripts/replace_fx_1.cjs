const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_1": {
        title: "What is Forex?",
        content: \`
# Forex: The Largest Market in the World

[Forex](/glossary#forex) (Foreign Exchange) is the global marketplace for exchanging national currencies against one another. It is the largest, most liquid financial market in the world, with a daily trading volume exceeding **$6 trillion**. That is larger than all the world's stock markets combined. Unlike the stock market, which has a central exchange (like the NYSE), Forex is decentralized and operates 24 hours a day, 5 days a week.

## Part 1: The Basics of Currency Trading

At its core, Forex is simple: you are buying one currency and selling another simultaneously.

*   **The Pair**: Currencies are always traded in pairs (e.g., EUR/USD).
    *   *Base Currency*: The first currency (EUR).
    *   *Quote Currency*: The second currency (USD).
*   **The Price**: If EUR/USD = 1.10, it means 1 Euro is worth 1.10 US Dollars.
*   **The Action**:
    *   *Long (Buy)*: You believe the Base currency will rise against the Quote currency.
    *   *Short (Sell)*: You believe the Base currency will fall against the Quote currency.
*   **Zero Sum Game**: Unlike stocks, where everyone can win if the economy grows, Forex is a zero-sum game. For one currency to rise, another must fall. This makes it highly competitive.

## Part 2: A Brief History of Money

To understand Forex, you must understand the history of money.

*   **The Gold Standard (1875-1914)**: Currencies were pegged to gold. This created stability but limited economic flexibility.
*   **Bretton Woods (1944-1971)**: After WWII, the world pegged their currencies to the US Dollar, and the Dollar was pegged to gold ($35/oz).
*   **The Nixon Shock (1971)**: President Nixon ended the gold convertibility. Currencies began to "float" freely against each other based on supply and demand. This was the birth of the modern Forex market.
*   **The Digital Age**: Today, money is just digits on a screen, moving at the speed of light.

## Part 3: Who Trades Forex?

The market is a battlefield of giants.

*   **Central Banks**: The biggest players. They intervene to stabilize their currency or control inflation (e.g., The Fed, ECB, Bank of Japan). They have infinite firepower.
*   **Commercial Banks**: Deutsche Bank, Citi, JPMorgan. They facilitate trade for companies and speculate with their own money. They handle ~80% of the volume.
*   **Corporations**: Apple needs to convert Billions of Euros into Dollars to pay shareholders. Toyota needs to convert Dollars into Yen to pay workers. They trade for business, not profit.
*   **Hedge Funds**: George Soros and others who speculate on macroeconomic trends. They use massive leverage to bet on directional moves.
*   **Retail Traders**: You. We make up a tiny fraction (< 5%) of the market. We are "plankton" swimming with whales. We provide liquidity to the big players.

## Part 4: Why Trade Forex?

Why choose currencies over stocks?

*   **Liquidity**: You can enter and exit positions of any size instantly. There is always a buyer and a seller. You will never get "stuck" in a trade.
*   **24-Hour Market**: The market opens Monday morning in New Zealand and closes Friday afternoon in New York. You can trade at 3 AM if you want.
*   **Leverage**: Brokers offer massive leverage (50:1, 100:1). This allows you to control large positions with small capital. (e.g., $1,000 controls $100,000).
*   **Profit in Both Directions**: It is just as easy to short a currency as it is to buy it. There are no "uptick rules" or borrowing costs like in stocks.
*   **Low Costs**: Most brokers charge no commission, just the "spread" (the difference between buy and sell price).

## Part 5: The Risks of Forex

The graveyard of traders.

*   **Leverage Kills**: The same leverage that amplifies gains also amplifies losses. A 1% move against you at 100:1 leverage wipes out your entire account.
*   **Volatility**: Currencies can move violently due to news (Non-Farm Payrolls, Interest Rate decisions). A 100-pip move in seconds can skip your stop loss ("slippage").
*   **The "Rigged" Game**: You are trading against banks that see the order flow. They know where your stop-loss is.
*   **Scams**: The Forex industry is rife with fraudulent brokers and "get rich quick" signal sellers. Always use a regulated broker.
*   **Statistic**: 90% of retail Forex traders lose money. 10% break even. Only the top 1% make life-changing wealth.

## Part 6: The Major Currencies

The "Majors" dominate the volume.

*   **USD (US Dollar)**: The King. Involved in 88% of all trades. The world's reserve currency. When in doubt, cash is King.
*   **EUR (Euro)**: The second most traded. Used by the Eurozone. It is the "anti-dollar."
*   **JPY (Japanese Yen)**: The third most traded. A "safe haven" currency that investors flock to during crises. Low yielding.
*   **GBP (British Pound)**: "Cable." Volatile and popular with speculators.
*   **CHF (Swiss Franc)**: Another safe haven. Stable and neutral.
*   **CAD (Canadian Dollar)**: The "Loonie." Highly correlated with oil prices.
*   **AUD (Australian Dollar)**: The "Aussie." Correlated with gold and commodities.
*   **NZD (New Zealand Dollar)**: The "Kiwi." Often a proxy for Chinese growth.

## Part 7: Reading a Quote

How to decipher the numbers.

*   **Bid vs. Ask**:
    *   *Bid*: The price the broker will pay you (Sell price).
    *   *Ask*: The price the broker will sell to you (Buy price).
    *   *Spread*: Ask - Bid. This is the broker's fee.
*   **Pips**: The "Percentage in Point." Usually the 4th decimal place (0.0001).
    *   If EUR/USD moves from 1.1000 to 1.1001, that is a **1 pip** move.
    *   Exception: JPY pairs use the 2nd decimal place (0.01).
*   **The Lot**: The standard unit of trade.
    *   *Standard Lot*: 100,000 units of base currency.
    *   *Mini Lot*: 10,000 units.
    *   *Micro Lot*: 1,000 units.

## Part 8: What Moves the Market?

Forex is driven by macroeconomics.

*   **Interest Rates**: The single biggest driver. Capital flows to the currency with the higher interest rate (yield). If the US raises rates and Europe keeps them low, money flows from EUR to USD.
*   **Inflation**: High inflation devalues a currency's purchasing power. However, central banks usually raise rates to fight inflation, which can strengthen the currency. It's a tug-of-war.
*   **Economic Growth (GDP)**: A strong economy attracts foreign investment, boosting demand for the currency.
*   **Geopolitics**: Wars, elections, and trade disputes cause volatility. Safe havens (USD, JPY, CHF) rise during uncertainty.

## Part 9: Summary and First Steps

Ready to enter the arena?

*   **Demo Trading**: Never trade real money until you have been profitable on a demo account for 3 months.
*   **Choose a Regulated Broker**: Ensure your broker is regulated by a top-tier authority (FCA, NFA, ASIC).
*   **Start Small**: Use Micro lots. Risk only 1% of your account per trade.
*   **Learn Technical Analysis**: Charts are the language of Forex. You must learn to read them.
*   **Respect the Market**: It is bigger than you. It doesn't care if you win or lose. Survive first, profit second.
\`,
        keyTakeaways: [
            "Forex is the global market for exchanging currencies ($6T daily volume).",
            "Currencies trade in pairs (EUR/USD); you are always buying one and selling another.",
            "Interest rates are the primary driver of currency values.",
            "Leverage is a double-edged sword that can wipe out accounts quickly."
        ]
    },`;

const startMarker = '"fx_1": {';
const endMarker = '"fx_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_1: What is Forex? - VALIDATION ===');
console.log('Chars:', charCount, (charCount > 6500) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount <= 6500 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_1!');
