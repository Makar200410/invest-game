const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_8": {
        title: "Carry Trade Strategy",
        content: \`
# The Carry Trade: Making Money While You Sleep

Most traders focus on "Capital Appreciation" (buying low, selling high). But in Forex, there is a second way to make money: **Interest Yield**. The "Carry Trade" is the strategy of borrowing a low-interest currency to buy a high-interest currency, pocketing the difference every single day. It is the strategy that powers the biggest hedge funds in the world.

## Part 1: The Concept

It's simple arbitrage.

*   **Currency A (Japan)**: Interest Rate = 0.1%.
*   **Currency B (USA)**: Interest Rate = 5.0%.
*   **The Trade**:
    1.  Borrow Yen (pay 0.1%).
    2.  Convert Yen to Dollars.
    3.  Deposit Dollars (earn 5.0%).
*   **The Profit**: 5.0% - 0.1% = **4.9% per year**.
*   **The Kicker**: You do this with **Leverage**.
    *   *10:1 Leverage*: 4.9% x 10 = **49% return per year** (assuming the exchange rate stays flat).

## Part 2: How It Works in Retail Forex

You don't actually go to a Japanese bank to borrow Yen. Your broker handles it via "Swaps."

*   **Long USD/JPY**: You are buying USD (5%) and selling JPY (0.1%).
    *   *Result*: You earn a **Positive Swap** every day at 5 PM EST. Money is added to your account.
*   **Short USD/JPY**: You are selling USD (5%) and buying JPY (0.1%).
    *   *Result*: You pay a **Negative Swap** every day. Money is deducted from your account.
*   **The Calculation**:
    *   1 Standard Lot ($100,000).
    *   Interest Differential: 4.9%.
    *   Daily Income: ($100,000 * 0.049) / 365 = **$13.42 per day**.
    *   Just for holding the position.

## Part 3: The Best Carry Pairs

You look for the widest gap between interest rates.

*   **The Funders (Low Rate)**: JPY (Yen), CHF (Franc). These have historically had near-zero or negative rates.
*   **The Yielders (High Rate)**:
    *   *Majors*: USD, NZD, AUD, CAD (depending on the cycle).
    *   *Exotics*: MXN (Mexico), TRY (Turkey), ZAR (South Africa), BRL (Brazil).
*   **Classic Examples**:
    *   *AUD/JPY*: The classic "Risk On" carry trade.
    *   *USD/MXN (Short)*: Selling USD to buy Peso (earning 11% in Mexico vs 5% in US).

## Part 4: The Risks (The Steamroller)

"Picking up pennies in front of a steamroller."

*   **Exchange Rate Risk**: This is the killer.
    *   *Scenario*: You earn 5% interest a year on USD/JPY.
    *   *Disaster*: The JPY strengthens by 10% in one month.
    *   *Result*: You made 0.4% in interest but lost 10% in capital. Net loss: -9.6%.
    *   *Leveraged Result*: If you were 10:1 leveraged, you lost 96% of your account.
*   **Unwinding**: When the market gets scared (Risk Off), everyone rushes to exit the Carry Trade at once. They sell the high-yield currency and buy back the funding currency (Yen).
    *   *Effect*: The Yen spikes vertically. The Carry Trade collapses.

## Part 5: The "Mrs. Watanabe" Effect

Retail power.

*   **Who is Mrs. Watanabe?**: The archetypal Japanese housewife who manages the family savings.
*   **The Behavior**: Japanese savings accounts pay 0%. So, Japanese retail traders aggressively buy foreign currencies (AUD, NZD, USD) to earn yield.
*   **The Impact**: They are a massive force in the market, keeping the Yen weak and supporting the Carry Trade... until they panic.

## Part 6: Carry Trade Strategies

How to trade it safely.

*   **Directional Carry**: Only take a carry trade if the *trend* is also in your favor.
    *   *Example*: USD/JPY is in an uptrend AND pays positive swap. This is the Holy Grail. You get paid to wait.
*   **Basket Trading**: Don't bet it all on one pair. Buy a basket of high-yielders (AUD, NZD, USD) against a basket of funders (JPY, CHF) to diversify specific country risk.
*   **Hedging**: Some pros buy the currency for yield and use options to hedge the downside risk (expensive, eats into profit).

## Part 7: Economic Cycles

The Carry Trade is cyclical.

*   **Boom Times (Risk On)**: Central banks raise rates to fight inflation. Investors feel brave. Carry Trade booms. AUD/JPY soars.
*   **Recession (Risk Off)**: Central banks cut rates to zero to save the economy. The interest rate gap disappears. Investors flee to safety. Carry Trade crashes. AUD/JPY collapses.
*   **The Signal**: Watch the stock market. If the S&P 500 is crashing, close your Carry Trades immediately.

## Part 8: The Turkey/Argentina Trap

The temptation of 50% yields.

*   **The Trap**: Turkey raises rates to 50% to stop the Lira from crashing.
*   **The Math**: You buy TRY. You earn massive daily swaps.
*   **The Reality**: Inflation in Turkey is 70%. The real yield is negative. The currency devalues by 5% a week.
*   **The Lesson**: High nominal rates usually mean high inflation and a dying currency. Never carry trade a hyperinflating currency. Stick to stable economies (USD, AUD, NZD).

## Part 9: Summary and Checklist

*   **Check the Swap**: Before entering any long-term trade, check if the swap is positive or negative.
*   **Trend is King**: Never buy a downtrend just for the swap. Price movement > Interest income.
*   **Leverage Kills**: Do not over-leverage a carry trade. You need room to survive the pullbacks.
*   **Patience**: This is a strategy for weeks, months, or years. Not for day traders.
\`,
        keyTakeaways: [
            "Carry Trade involves borrowing a low-rate currency to buy a high-rate currency.",
            "You earn daily interest (Swap) while holding the position.",
            "Leverage can amplify yields to 20-50% per year.",
            "Exchange rate risk is the main danger; capital losses can wipe out interest gains."
        ]
    },`;

const startMarker = '"fx_8": {';
// Logic to find start and end of fx_8
const startIdx = content.indexOf('"fx_8": {');
if (startIdx === -1) { console.error('fx_8 start not found'); process.exit(1); }

// Find the matching closing brace for fx_8
let braceCount = 0;
let endIdx = -1;
let inObj = false;
for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inObj = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inObj && braceCount === 0) { endIdx = i + 1; break; }
    }
}
if (endIdx === -1) { console.error('fx_8 end not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_8: Carry Trade - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_8!');
