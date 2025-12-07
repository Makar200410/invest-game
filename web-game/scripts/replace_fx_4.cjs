const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_4": {
        title: "Major, Minor, & Exotic Pairs",
        content: \`
# The Hierarchy of Currencies: Majors, Minors, and Exotics

Not all currency pairs are created equal. Some are highways of liquidity with massive volume and tight spreads. Others are dirt roads with potholes, erratic moves, and expensive tolls. Knowing which pairs to trade—and which to avoid—is critical for survival.

## Part 1: The Majors (The Big 7)

The "Majors" are the elite. They all involve the US Dollar (USD) and represent the world's largest economies. They account for ~85% of all Forex volume.

*   **EUR/USD (Euro / US Dollar)**: "The Fiber."
    *   *Volume*: #1.
    *   *Personality*: Stable, trends well, lowest spread.
    *   *Best Time*: London/NY Overlap (8 AM - 12 PM EST).
*   **USD/JPY (US Dollar / Japanese Yen)**: "The Gopher."
    *   *Volume*: #2.
    *   *Personality*: Can range for days, then explode. Sensitive to Asian markets.
*   **GBP/USD (British Pound / US Dollar)**: "The Cable."
    *   *Personality*: Volatile. "The Queen of Volatility." Can fake you out.
*   **USD/CHF (US Dollar / Swiss Franc)**: "The Swissy."
    *   *Personality*: Safe haven. Often mirrors EUR/USD inversely.
*   **USD/CAD (US Dollar / Canadian Dollar)**: "The Loonie."
    *   *Personality*: The "Petro-currency." Watch oil prices.
*   **AUD/USD (Australian Dollar / US Dollar)**: "The Aussie."
    *   *Personality*: Commodity currency (Gold, Iron Ore). Proxy for China.
*   **NZD/USD (New Zealand Dollar / US Dollar)**: "The Kiwi."
    *   *Personality*: Similar to Aussie but smaller. Good for carry trades.

## Part 2: The Minors (Crosses)

"Minors" or "Crosses" are pairs that do **not** contain the USD. They are derived from the Majors.

*   **The Euro Crosses**: EUR/GBP, EUR/JPY, EUR/CHF.
    *   *EUR/GBP*: Very slow, choppy. Good for range trading.
    *   *EUR/JPY*: "The Beast Junior." Volatile and trendy.
*   **The Yen Crosses**: GBP/JPY, AUD/JPY, NZD/JPY.
    *   *GBP/JPY*: "The Widowmaker." The most volatile pair commonly traded. Can move 200 pips in hours. High risk, high reward.
    *   *AUD/JPY*: The ultimate "Risk On" pair. Rises when stocks rise, falls when stocks crash.
*   **The Pound Crosses**: GBP/AUD, GBP/NZD.
    *   *Personality*: Massive range. Can move 300 pips a day. Expensive spreads.
*   **Why Trade Them?**:
    *   *Diversification*: If the USD is choppy/flat, crosses might be trending.
    *   *Volatility*: They often move more than majors.
    *   *Carry Trade*: Often have higher interest rate differentials.

## Part 3: The Exotics

Pairs pairing a Major with an Emerging Market currency.

*   **Examples**:
    *   USD/TRY (Turkish Lira)
    *   USD/ZAR (South African Rand)
    *   USD/MXN (Mexican Peso)
    *   USD/BRL (Brazilian Real)
    *   USD/SGD (Singapore Dollar)
*   **Characteristics**:
    *   *Liquidity*: Low.
    *   *Spreads*: Huge. You might pay 50-100 pips just to open a trade.
    *   *Movement*: Can be explosive. Political instability can cause 10% moves in a day.
    *   *Swap*: Often massive. You can earn 10%+ interest holding Lira or Rand (if the price doesn't crash).
*   **The Danger**: "Picking up pennies in front of a steamroller." You earn interest for months, then one devaluation wipes out a year of profit.

## Part 4: Correlations

Currencies do not move in isolation. They are interconnected.

*   **Positive Correlation**: Pairs that move together.
    *   *EUR/USD and GBP/USD*: usually move in the same direction (weak USD).
    *   *AUD/USD and Gold*: Australia produces gold. Gold up = Aussie up.
*   **Negative Correlation**: Pairs that move in opposite directions.
    *   *EUR/USD and USD/CHF*: Almost a perfect mirror image.
    *   *USD/CAD and Oil*: Oil up = USD/CAD down (Loonie strengthens).
*   **Risk On / Risk Off**:
    *   *Risk On (Optimism)*: Stocks up. AUD, NZD, CAD, GBP rise. USD, JPY, CHF fall.
    *   *Risk Off (Fear)*: Stocks down. USD, JPY, CHF rise (Safe Havens). AUD, NZD, CAD fall.

## Part 5: Choosing Your Pair

Don't try to trade everything. Pick a specialization.

*   **The Beginner Portfolio**: EUR/USD only.
    *   *Why*: Cheapest, most news coverage, most predictable.
*   **The Intermediate Portfolio**: EUR/USD, GBP/USD, USD/JPY, AUD/USD.
    *   *Why*: Covers all major time zones and commodities.
*   **The Scalper's Choice**: GBP/JPY.
    *   *Why*: Volatility is needed for quick profits.
*   **The Swing Trader's Choice**: AUD/USD, NZD/USD.
    *   *Why*: Clean trends that last for weeks.

## Part 6: Liquidity and Time Zones

When you trade matters as much as what you trade.

*   **Asian Session (Tokyo)**: 7 PM - 4 AM EST.
    *   *Pairs*: USD/JPY, AUD/USD, NZD/USD.
    *   *Action*: Usually slow, range-bound. Good for range trading.
*   **London Session (Europe)**: 3 AM - 12 PM EST.
    *   *Pairs*: EUR/USD, GBP/USD, EUR/GBP.
    *   *Action*: The biggest volume. Trends often start here. Breakouts happen.
*   **New York Session (US)**: 8 AM - 5 PM EST.
    *   *Pairs*: All USD pairs.
    *   *Action*: Volatile morning (overlap with London). Slow afternoon.
*   **The Overlap (8 AM - 12 PM EST)**: London + New York are both open.
    *   *The Golden Hours*: 70% of all volume happens here. Best time to trade.

## Part 7: The Cost of Trading (Spreads)

Comparing costs across pairs.

*   **EUR/USD**: ~1 pip spread. (Cost: $10 per lot).
*   **GBP/JPY**: ~3-5 pip spread. (Cost: $30-$50 per lot).
*   **USD/ZAR**: ~50-100 pip spread. (Cost: $500-$1000 per lot).
*   **Impact**: If you are a scalper aiming for 10 pips profit:
    *   On EUR/USD, you need 11 pips movement (10 + 1 spread). Easy.
    *   On GBP/JPY, you need 15 pips movement (10 + 5 spread). Harder.
    *   On Exotics, scalping is impossible.

## Part 8: The Dollar Index (DXY)

The master key to the Forex market.

*   **What is it?**: A weighted average of the US Dollar against a basket of 6 major currencies.
    *   Euro (57.6%)
    *   Japanese Yen (13.6%)
    *   British Pound (11.9%)
    *   Canadian Dollar (9.1%)
    *   Swedish Krona (4.2%)
    *   Swiss Franc (3.6%)
*   **Why it matters**: Since the Euro is >50% of the index, the DXY is basically the inverse of EUR/USD.
*   **Strategy**: Always check the DXY chart.
    *   If DXY is hitting major resistance, EUR/USD is likely hitting major support.
    *   If DXY breaks out, the Dollar is strengthening across the board. Don't buy EUR/USD.

## Part 9: Summary and Strategy

*   **Start with Majors**: Master EUR/USD before touching anything else.
*   **Respect the Crosses**: GBP/JPY is a wealth builder and a wealth destroyer. Treat it with respect (lower position size).
*   **Avoid Exotics**: Unless you have a PhD in Turkish macroeconomics, stay away.
*   **Watch Correlations**: Don't buy EUR/USD and buy GBP/USD at the same time. You are just doubling your risk on the US Dollar.
*   **Time it Right**: Trade the Majors during the London/NY overlap for the best moves.
\`,
        keyTakeaways: [
            "Majors (EUR/USD) have the lowest spreads and highest volume.",
            "Minors (GBP/JPY) are more volatile and good for experienced traders.",
            "Exotics (USD/TRY) are risky, expensive, and prone to crashes.",
            "Correlations matter: don't double up on the same trade idea."
        ]
    },`;

const startMarker = '"fx_4": {';
const endMarker = '"fx_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_4: Majors & Minors - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_4!');
