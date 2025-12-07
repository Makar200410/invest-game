const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_7": {
        title: "Central Bank Interventions",
        content: \`
# The Hand of God: Central Bank Interventions

Most of the time, currency prices float freely based on supply and demand. But occasionally, a currency moves so fast or so far that it threatens a nation's economy. That's when the "Whales" enter the chat. Central Banks (The Fed, BOJ, SNB) have unlimited printing presses, and when they intervene, they can move the market thousands of pips in minutes. Fighting them is financial suicide.

## Part 1: Why Do They Intervene?

Central banks have a mandate (usually Stability and Employment). Extreme currency moves hurt this.

*   **Currency Too Strong (Export Killer)**:
    *   *Problem*: If the Japanese Yen is too strong, Toyota and Sony can't sell cars/electronics abroad because they are too expensive. The economy stalls.
    *   *Action*: The Bank of Japan (BOJ) sells Yen and buys Dollars.
    *   *Goal*: Weaken the Yen to boost exports.
*   **Currency Too Weak (Inflation Creator)**:
    *   *Problem*: If the Turkish Lira collapses, the cost of imported fuel and food skyrockets. Hyperinflation destroys the middle class.
    *   *Action*: The Central Bank raises interest rates to 50% or uses reserves to buy Lira.
    *   *Goal*: Strengthen the currency to stop inflation.
*   **Volatility Control**: Sometimes they don't care about the price, just the *speed*. They want to stop a panic crash.

## Part 2: Types of Intervention

Not all interventions are created equal.

*   **Verbal Intervention ("Jawboning")**: The cheapest method.
    *   *Method*: A central banker gives a speech saying, "We are watching the exchange rate closely and are ready to act."
    *   *Effect*: Traders get scared and close their positions. The price moves without a single dollar being spent.
*   **Direct Intervention (The Nuclear Option)**:
    *   *Method*: The bank hits the "Sell" button on billions of dollars of currency.
    *   *Effect*: Massive, vertical price spike on the chart.
*   **Coordinated Intervention**:
    *   *Method*: The G7 nations (US, Europe, Japan, UK) agree to act together.
    *   *Effect*: Unstoppable force. The trend reverses instantly. (e.g., Plaza Accord 1985).

## Part 3: The SNB Shock (Black Swan)

The most brutal intervention in history.

*   **The Setup**: In 2011, the Swiss Franc (CHF) was getting too strong (safe haven flows). The Swiss National Bank (SNB) pegged the EUR/CHF rate at 1.2000. They promised to buy unlimited Euros to keep it above 1.20.
*   **The Trade**: For 3 years, traders bought EUR/CHF at 1.2005, knowing the SNB would protect them. It was "free money."
*   **The Event**: On Jan 15, 2015, the SNB suddenly gave up. They removed the peg without warning.
*   **The Crash**: EUR/CHF dropped from 1.20 to 0.85 in **minutes**. A 30% move (3000 pips).
*   **The Aftermath**:
    *   Leveraged traders were wiped out instantly.
    *   Many ended up with *negative balances* (owing millions to brokers).
    *   Several major brokers went bankrupt (Alpari).
*   **Lesson**: Never trust a central bank peg.

## Part 4: The Bank of Japan (The Widowmaker)

Japan has a long history of fighting a strong Yen.

*   **The Pattern**: The Yen strengthens (USD/JPY falls). Japanese exporters scream. The Ministry of Finance orders the BOJ to intervene.
*   **The Move**: USD/JPY spikes 300-500 pips in seconds.
*   **The Fade**: Often, the market absorbs the selling and pushes the Yen back up a few weeks later.
*   **The Risk**: Shorting USD/JPY near historical lows is dangerous because you are fighting the BOJ.

## Part 5: The Soros Trade (Breaking the Bank of England)

The most famous trade in history.

*   **The Setup (1992)**: The UK joined the ERM (Exchange Rate Mechanism), pegging the Pound to the German Mark. The rate was too high for the weak UK economy.
*   **The Attack**: George Soros and other hedge funds saw the weakness. They shorted the Pound aggressively.
*   **The Defense**: The Bank of England raised interest rates from 10% to 12%, then to 15% in a single day to attract buyers. They spent billions buying Pounds.
*   **The Defeat**: It wasn't enough. The selling pressure was too high. The UK exited the ERM.
*   **The Profit**: Soros made $1 Billion in a day. The Pound crashed.
*   **Lesson**: Even central banks can lose if the fundamentals are against them.

## Part 6: How to Trade Interventions

Catching a falling knife or riding a rocket?

*   **Don't Anticipate**: Do not buy a falling currency just because you "think" the bank will intervene. They might wait another 10% drop.
*   **The "Post-Intervention" Fade**:
    *   Often, the initial spike is an overreaction.
    *   Strategy: Wait for the intervention spike to stall, then trade the retracement (carefully).
*   **Respect the Floor**: If a central bank draws a line in the sand (like "We will not tolerate USD/JPY below 145"), respect it. Do not short into that level.
*   **Lower Leverage**: Volatility during interventions is infinite. Standard stops won't work (slippage). Reduce size.

## Part 7: Reserves and Firepower

Who has the biggest gun?

*   **China ($3 Trillion)**: Massive reserves. They tightly control the Yuan (CNY).
*   **Japan ($1.2 Trillion)**: Huge firepower. Frequent interveners.
*   **Switzerland ($800 Billion)**: Huge relative to their size.
*   **USA**: Rarely intervenes. They prefer a "Strong Dollar" policy but let the market decide.
*   **Emerging Markets**: Often have low reserves. They try to defend their currency but run out of ammo (dollars) and fail (e.g., Argentina, Turkey).

## Part 8: Summary and Strategy

*   **Rule #1**: Don't fight the Fed (or any major central bank).
*   **Rule #2**: Pegs are meant to be broken. The longer a peg lasts, the more violent the break will be.
*   **Rule #3**: If a Central Banker speaks, listen. "Jawboning" moves markets.
*   **Rule #4**: In Emerging Markets, betting against the central bank (shorting the currency) is often the winning long-term trade, but the "carry cost" (interest) will bleed you while you wait.
\`,
        keyTakeaways: [
            "Central banks intervene to stabilize their economy or control inflation.",
            "Interventions cause massive, instant volatility (thousands of pips).",
            "Pegs (like EUR/CHF) can break violently, wiping out traders.",
            "Never use high leverage when intervention risk is high."
        ]
    },`;

const startMarker = '"fx_7": {';
const endMarker = '"fx_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_7: Interventions - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_7!');
