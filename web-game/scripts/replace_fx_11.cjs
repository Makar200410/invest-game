const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_11": {
        title: "Correlation in Forex",
        content: \`
# The Invisible Link: Currency Correlations

In the Forex market, no currency pair is an island. They are all connected by the global flow of capital. When the US Dollar moves, it affects EUR/USD, GBP/USD, USD/JPY, Gold, and Oil simultaneously. Understanding these connections—called **Correlations**—is vital to avoid doubling your risk or accidentally hedging your profit.

## Part 1: What is Correlation?

Correlation measures how two currency pairs move in relation to each other.

*   **The Coefficient**: It is measured on a scale from -1 to +1.
    *   **+1 (Perfect Positive Correlation)**: The two pairs move in the exact same direction 100% of the time. (If Pair A goes up, Pair B goes up).
    *   **-1 (Perfect Negative Correlation)**: The two pairs move in the exact opposite direction 100% of the time. (If Pair A goes up, Pair B goes down).
    *   **0 (No Correlation)**: The pairs have no relationship. Their movements are random relative to each other.
*   **Timeframe Matters**: Correlation can change over time. Two pairs might be correlated on a yearly chart but uncorrelated on a 5-minute chart.

## Part 2: Classic Positive Correlations

Pairs that tend to hold hands.

*   **EUR/USD and GBP/USD**:
    *   *Why*: Both quote the US Dollar as the second currency. If the USD weakens, both the Euro and Pound rise against it. Also, the Eurozone and UK economies are closely linked.
    *   *Coefficient*: Usually > +0.80.
    *   *Risk*: If you buy EUR/USD and buy GBP/USD, you are essentially doubling your bet against the Dollar.
*   **AUD/USD and NZD/USD**:
    *   *Why*: Australia and New Zealand are neighbors with similar resource-based economies.
    *   *Coefficient*: Usually > +0.90.
*   **EUR/JPY and GBP/JPY**:
    *   *Why*: When risk sentiment is high, traders sell Yen to buy yield. Both pairs rise.

## Part 3: Classic Negative Correlations

Pairs that mirror each other.

*   **EUR/USD and USD/CHF**:
    *   *Why*: The Swiss Franc is a safe haven in Europe. When the Dollar is strong, EUR/USD falls and USD/CHF rises.
    *   *Coefficient*: Usually < -0.90. It is almost a perfect mirror.
    *   *Risk*: If you buy EUR/USD and buy USD/CHF, you are betting on the Dollar to go down AND up at the same time. You are hedging yourself (paying two spreads to make zero profit).
*   **GBP/USD and USD/JPY**:
    *   *Why*: Often negative, but less reliable. Depends on whether the driver is the Dollar or Risk Sentiment.

## Part 4: Commodity Correlations

Currencies linked to stuff.

*   **AUD/USD and Gold**:
    *   *Why*: Australia is the world's 2nd largest gold producer.
    *   *Relationship*: Positive. Gold Up -> AUD Up.
    *   *Strategy*: Sometimes Gold moves first. If Gold breaks out, look for a long setup on AUD/USD.
*   **USD/CAD and Oil**:
    *   *Why*: Canada is a major oil exporter. The US imports oil.
    *   *Relationship*: Negative. Oil Up -> CAD Up -> USD/CAD Down.
    *   *Strategy*: If Oil crashes, look to buy USD/CAD.
*   **USD/JPY and Stocks (S&P 500)**:
    *   *Why*: Risk sentiment. When stocks rise (Risk On), traders sell Yen to buy stocks.
    *   *Relationship*: Positive. Stocks Up -> USD/JPY Up.

## Part 5: How to Use Correlations

Don't just observe them; use them.

1.  **Avoid Over-Exposure**:
    *   *Bad*: Buy EUR/USD, Buy GBP/USD, Buy AUD/USD.
    *   *Reality*: You are 3x Short USD. If NFP data is good for the Dollar, you get stopped out on 3 trades instantly.
    *   *Fix*: Pick the strongest setup of the three. Or split your risk (0.33% on each).
2.  **Hedging**:
    *   *Scenario*: You are Long EUR/USD and it's going well. You want to protect some profit but don't want to close.
    *   *Action*: Buy a small amount of USD/CHF. Since they move oppositely, if EUR/USD drops, USD/CHF will rise, offsetting the loss.
3.  **Confirmation**:
    *   *Scenario*: You want to buy EUR/USD breakout.
    *   *Check*: Look at GBP/USD. Is it also breaking out? Look at the Dollar Index (DXY). Is it breaking down?
    *   *Result*: If all correlated pairs agree, the probability of success is higher.

## Part 6: When Correlations Break

The danger zone.

*   **Divergence**: Sometimes, correlations break down.
    *   *Example*: EUR/USD is rising, but GBP/USD is falling.
    *   *Meaning*: This implies the move is not about the Dollar. It is about the Euro (strong) or the Pound (weak).
    *   *Opportunity*: Trade the cross! If Euro is strong and Pound is weak, **Buy EUR/GBP**. This is often the cleanest trade.
*   **Crisis Mode**: In a panic (like 2008 or 2020), correlations go to 1. Everything falls against the US Dollar (Cash is King). Gold falls, Stocks fall, Oil falls, Euro falls. The only thing that rises is USD and JPY.

## Part 7: The Dollar Index (DXY)

The master key.

*   **What is it?**: A weighted average of the US Dollar against a basket of currencies (Euro, Yen, Pound, CAD, SEK, CHF).
*   **Weighting**: Euro is 57% of the index. So DXY is basically the inverse of EUR/USD.
*   **Usage**: Always check the DXY chart before trading any major pair.
    *   *Setup*: If DXY is at major support, do not buy EUR/USD (which is at resistance). Wait for DXY to break or bounce.

## Part 8: Correlation Heatmaps

Tools of the trade.

*   **The Tool**: Most charting platforms have a "Correlation Matrix" or Heatmap.
*   **Usage**: Check it daily. Correlations change.
    *   *Green*: Strong Positive (> 0.8).
    *   *Red*: Strong Negative (< -0.8).
    *   *Grey*: No correlation.
*   **Strategy**: Look for pairs with low correlation to diversify your portfolio.
    *   *Example*: Long EUR/USD (Dollar play) and Long AUD/JPY (Risk play). These might move independently, smoothing out your equity curve.

## Part 9: Summary and Checklist

*   **Check Exposure**: Are you accidentally betting everything on one currency?
*   **Use DXY**: The Dollar Index is your compass.
*   **Look for Divergence**: If correlated pairs disagree, something interesting is happening (usually a Cross trade).
*   **Commodities**: Watch Oil for CAD and Gold for AUD.
*   **The Rule**: If you don't know the correlation, you don't know your risk.
\`,
        keyTakeaways: [
            "Correlation measures how two pairs move together (-1 to +1).",
            "Avoid taking multiple trades that are highly correlated (doubling risk).",
            "USD/CHF is often the inverse of EUR/USD.",
            "Commodities like Gold and Oil drive currencies like AUD and CAD."
        ]
    },`;

const marker = '"fx_10":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fx_10 not found'); process.exit(1); }

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

if (endIdx === -1) { console.error('fx_10 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_11: Correlation - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fx_11!');
