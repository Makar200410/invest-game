const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_2": {
        title: "Currency Pairs & Quotes",
        content: \`
# Currency Pairs: The Building Blocks of Forex

In the stock market, you buy a share of Apple. In the Forex market, you can't just "buy Euro." You must exchange it for something else. You buy Euros *with* Dollars, or you sell Yen *for* Pounds. This concept of "Pairs" is fundamental to understanding how currency trading works. Every trade is a relative bet between two economies.

## Part 1: Anatomy of a Currency Pair

Let's dissect a standard pair: **GBP/USD**.

*   **Base Currency (The First One)**: This is the currency you are buying or selling. It is always equal to **1 unit**.
    *   *In this example*: GBP (British Pound).
*   **Quote Currency (The Second One)**: This is the currency used to pay for the base currency. It tells you how much the base is worth.
    *   *In this example*: USD (US Dollar).
*   **The Price**: If GBP/USD = 1.3000, it means **1 GBP = 1.30 USD**.
*   **The Direction**:
    *   If you **BUY** GBP/USD, you are buying Pounds and selling Dollars. You want the price to go UP (Pound gets stronger).
    *   If you **SELL** GBP/USD, you are selling Pounds and buying Dollars. You want the price to go DOWN (Pound gets weaker).

## Part 2: The Majors

The "Majors" are the most liquid and heavily traded pairs in the world. They all involve the US Dollar (USD) on one side.

*   **EUR/USD (The Fiber)**: The titan. Accounts for ~28% of all daily volume. The battle between the US and Europe. Lowest spreads.
*   **USD/JPY (The Gopher)**: The battle between the US and Asia. Highly sensitive to US Treasury yields.
*   **GBP/USD (The Cable)**: Named after the undersea cable that connected London and NY in the 1800s. Volatile and fast-moving.
*   **USD/CHF (The Swissy)**: The safe haven pair. Often moves inversely to EUR/USD.
*   **USD/CAD (The Loonie)**: Highly correlated with oil prices because Canada is a major oil exporter.
*   **AUD/USD (The Aussie)**: Correlated with gold and mining.
*   **NZD/USD (The Kiwi)**: The smallest of the majors, often moves with the Aussie.

## Part 3: The Crosses (Minors)

Currency pairs that do **not** involve the US Dollar are called "Crosses" or "Minors."

*   **Why Trade Them?**: Sometimes the best trend isn't in the USD. Maybe the Euro is strong and the Yen is weak.
*   **EUR/JPY (The Yuppy)**: A barometer for global risk appetite.
*   **EUR/GBP (The Chunnel)**: The battle across the English Channel. Often choppy and slow-moving.
*   **GBP/JPY (The Beast/Widowmaker)**: Extremely volatile. Can move 200-300 pips in a day. Loved by scalpers, feared by beginners.
*   **AUD/JPY**: The ultimate "Risk On" pair. Rises when stocks rise, falls when stocks crash.
*   **Characteristics**: Crosses often have higher spreads (transaction costs) than Majors but can trend very strongly.

## Part 4: The Exotics

Pairs that combine a Major currency with a currency from a developing or emerging economy.

*   **Examples**:
    *   USD/TRY (Turkish Lira)
    *   USD/ZAR (South African Rand)
    *   USD/MXN (Mexican Peso)
    *   EUR/TRY (Euro vs Lira)
*   **Characteristics**:
    *   *Extreme Volatility*: Can move thousands of pips in a day due to political instability.
    *   *Massive Spreads*: It costs a lot to enter and exit.
    *   *High Swaps*: You can earn (or pay) huge interest rates holding these.
*   **Warning**: Do not trade exotics unless you are an expert. The liquidity is low, and "slippage" (getting filled at a worse price) is common.

## Part 5: Reading the Quote Panel

When you open a trading platform (MT4, cTrader), you see two prices.

*   **Bid (Sell Price)**: The price the broker is willing to pay for the Base currency.
    *   *Example*: EUR/USD Bid = 1.1050.
    *   If you click "Sell", you enter at 1.1050.
*   **Ask (Buy Price)**: The price the broker is willing to sell the Base currency for.
    *   *Example*: EUR/USD Ask = 1.1052.
    *   If you click "Buy", you enter at 1.1052.
*   **The Spread**: The difference (Ask - Bid).
    *   1.1052 - 1.1050 = **2 pips**.
    *   This is your cost. You start every trade negative by the amount of the spread. You need the market to move 2 pips in your favor just to break even.

## Part 6: Pips and Pipettes

How we measure movement.

*   **Pip**: "Percentage in Point" or "Price Interest Point."
    *   For most pairs (4 decimal places): The 4th decimal digit.
    *   *Move*: 1.105**0** -> 1.105**1** = 1 Pip.
    *   For JPY pairs (2 decimal places): The 2nd decimal digit.
    *   *Move*: 109.5**0** -> 109.5**1** = 1 Pip.
*   **Pipette**: The fractional pip (5th decimal place).
    *   Most modern brokers quote to 5 decimals (e.g., 1.1050**5**).
    *   This allows for tighter spreads. 10 Pipettes = 1 Pip.

## Part 7: Order Types

How to enter the market.

*   **Market Order**: "Get me in NOW at the current price."
    *   *Pros*: Guaranteed execution.
    *   *Cons*: You pay the spread and might get "slippage" in fast markets.
*   **Limit Order**: "Get me in ONLY if the price reaches X."
    *   *Buy Limit*: Buy below current price (waiting for a dip).
    *   *Sell Limit*: Sell above current price (waiting for a rally).
    *   *Pros*: Better price, no slippage.
    *   *Cons*: You might miss the trade if price doesn't hit your level.
*   **Stop Order**: "Get me in if the price breaks through X."
    *   *Buy Stop*: Buy above current price (breakout).
    *   *Sell Stop*: Sell below current price (breakdown).
    *   *Use Case*: Trading momentum breakouts.
*   **Stop Loss (SL)**: An order to close a losing position at a specific price. This is your insurance policy.
*   **Take Profit (TP)**: An order to close a winning position at a specific price. This locks in your gains.

## Part 8: The Nicknames

Traders love slang. Don't look like a noob.

*   **Greenback / Buck**: US Dollar.
*   **Fiber**: Euro (because the paper used for EUR notes is pure cotton fiber).
*   **Cable**: GBP/USD.
*   **Yen**: JPY.
*   **Swissy**: Swiss Franc.
*   **Loonie**: Canadian Dollar (the bird on the $1 coin).
*   **Kiwi**: New Zealand Dollar (the bird).
*   **Aussie**: Australian Dollar.
*   **Guppy**: GBP/JPY.
*   **Barnie**: USD/RUB (Ruble).

## Part 9: Summary and Best Practices

*   **Stick to Majors**: As a beginner, trade EUR/USD, GBP/USD, or USD/JPY. They have the lowest costs and most predictable behavior.
*   **Watch the Spread**: Avoid trading during news events (spreads widen) or market close (5 PM NY time).
*   **Understand the Quote**: Always remember: Buying the pair means buying the FIRST currency and selling the SECOND.
*   **Calculate Value**: Know how much 1 pip is worth in dollars before you click the button (usually $10 per standard lot).
*   **The Golden Rule**: Never trade a pair you don't understand. If you don't know why the Norwegian Krone is moving, don't trade it.
*   **Final Thought**: The pair you choose dictates your volatility. Choose wisely.
\`,
        keyTakeaways: [
            "Currency pairs are divided into Majors (USD), Minors (Crosses), and Exotics.",
            "The Base currency is the first one; the Quote currency is the second.",
            "The Spread (Ask - Bid) is the cost of trading.",
            "Stick to major pairs for liquidity and low costs."
        ]
    },`;

const startMarker = '"fx_2": {';
const endMarker = '"fx_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_2: Currency Pairs - VALIDATION ===');
console.log('Chars:', charCount, (charCount > 6500) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount <= 6500 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_2!');
