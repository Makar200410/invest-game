const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_13": {
        title: "Forex vs. Stocks",
        content: \`
# The Battle of Asset Classes: Forex vs. Stocks

Should you trade currencies or companies? Both markets offer the potential for wealth, but they are fundamentally different beasts. Stocks are about ownership and growth. Forex is about macroeconomics and relative value. This lesson compares the two titans to help you decide which arena suits your personality.

## Part 1: Market Structure

Centralized vs. Decentralized.

*   **Stocks (Centralized)**:
    *   *Venue*: Exchanges like NYSE, Nasdaq, LSE.
    *   *Mechanism*: All orders go to one place. The price is the price. You can see the "Order Book" (Level 2 data).
    *   *Regulation*: Highly regulated. Insider trading is illegal.
*   **Forex (Decentralized)**:
    *   *Venue*: Over-the-Counter (OTC). A network of banks (Interbank market).
    *   *Mechanism*: There is no central price. Your broker's price might be slightly different from another broker's price.
    *   *Regulation*: Looser. The "Wild West."

## Part 2: Trading Hours

Sleep is for the weak?

*   **Stocks**:
    *   *Hours*: 9:30 AM - 4:00 PM EST (Mon-Fri).
    *   *Pros*: You have a life. You know when to work and when to rest.
    *   *Cons*: "Gaps." If bad news happens overnight, the stock opens 20% lower. You can't exit.
*   **Forex**:
    *   *Hours*: 24 hours / 5 days.
    *   *Pros*: No gaps (during the week). You can react to news instantly at 3 AM.
    *   *Cons*: It can be addicting. You might wake up at night to check your phone. Burnout is real.

## Part 3: Liquidity and Volume

The size of the ocean.

*   **Stocks**:
    *   *Volume*: ~$200 Billion daily (NYSE).
    *   *Liquidity*: Variable. Blue chips (Apple) are liquid. Penny stocks are illiquid (you might get stuck).
*   **Forex**:
    *   *Volume*: ~$6.6 Trillion daily.
    *   *Liquidity*: Infinite. You can sell $10 million of EUR/USD in a split second without moving the price.
    *   *Benefit*: No slippage on normal days. Instant execution.

## Part 4: Leverage

The power to destroy.

*   **Stocks**:
    *   *Leverage*: Typically 2:1 (Day Trading Buying Power is 4:1).
    *   *Safety*: Harder to blow up your account instantly.
*   **Forex**:
    *   *Leverage*: Typically 50:1 or 100:1 (Offshore can be 500:1).
    *   *Danger*: You can lose 50% of your account in minutes.
    *   *Opportunity*: You can grow a small account ($500) much faster in Forex than in stocks.

## Part 5: Number of Choices

Focus vs. Breadth.

*   **Stocks**:
    *   *Choices*: Thousands (Apple, Tesla, Amazon, Ford...).
    *   *Pros*: Always a bull market somewhere. If Tech is down, Energy might be up.
    *   *Cons*: Analysis paralysis. Scanning 5,000 stocks is hard work.
*   **Forex**:
    *   *Choices*: ~7 Major pairs.
    *   *Pros*: Laser focus. You can become a master of just ONE pair (e.g., GBP/JPY). You know its personality intimately.
    *   *Cons*: If the market is flat, you have nothing to trade.

## Part 6: Drivers of Price

Micro vs. Macro.

*   **Stocks**:
    *   *Drivers*: Earnings, Product Launches, CEO scandals, Sector trends.
    *   *Analysis*: Reading balance sheets, listening to earnings calls.
*   **Forex**:
    *   *Drivers*: Interest Rates, GDP, Inflation, Unemployment, Geopolitics.
    *   *Analysis*: Understanding global economics.
    *   *Note*: Stocks are biased to go UP (companies create value). Currencies have no bias (it's a see-saw).

## Part 7: Short Selling

Betting on the crash.

*   **Stocks**:
    *   *Difficulty*: Hard. You need a margin account. You need to "borrow" shares (which costs money). Uptick rule restrictions.
    *   *Bias*: The market hates shorts. "Stonks only go up."
*   **Forex**:
    *   *Difficulty*: Easy. Buying and Selling are identical mechanics.
    *   *Bias*: None. Currencies crash as often as they rally. It is a two-way market.

## Part 8: Transaction Costs

The fee.

*   **Stocks**:
    *   *Commissions*: Often $0 (Robinhood model), but you pay via "Payment for Order Flow" (worse execution).
    *   *Spreads*: Can be wide on illiquid stocks.
*   **Forex**:
    *   *Commissions*: Usually $0.
    *   *Spreads*: Tiny. < 1 pip on EUR/USD.
    *   *Cost*: Generally cheaper to trade Forex than stocks for high-frequency traders.

## Part 9: Summary and Verdict

Which one is for you?

*   **Choose Stocks If**:
    *   You want to build long-term wealth (investing).
    *   You like analyzing companies and products.
    *   You prefer a structured 9-5 schedule.
    *   You are risk-averse.
*   **Choose Forex If**:
    *   You want to trade short-term (day trading/scalping).
    *   You love macroeconomics and politics.
    *   You have a small account and need leverage to grow it.
    *   You want action 24 hours a day.
*   **The Hybrid**: Many traders do both. They invest in stocks for retirement and trade Forex for income.
\`,
        keyTakeaways: [
            "Forex is larger, more liquid, and operates 24/7 compared to stocks.",
            "Stocks offer ownership and long-term growth bias; Forex is a zero-sum relative value game.",
            "Leverage is much higher in Forex, increasing both risk and potential reward.",
            "Short selling is seamless in Forex, unlike the restrictions in the stock market."
        ]
    },`;

const marker = '"fx_12":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fx_12 not found'); process.exit(1); }

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

if (endIdx === -1) { console.error('fx_12 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_13: Forex vs Stocks - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n\n    ' + after, 'utf8');
console.log('✓ Added fx_13!');
console.log('\n=== ALL MODULE 6 LESSONS (fx_1 - fx_13) COMPLETE! ===');
