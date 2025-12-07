const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_12": {
        title: "Trading News Events",
        content: \`
# Trading the News: Riding the Tsunami

In Forex, news is fuel. A single data release can move a currency pair more in 5 minutes than it moved in the previous 5 days. For some traders, this volatility is terrifying. For others, it is the only time they trade. This lesson covers how to trade high-impact economic events without getting destroyed.

## Part 1: The Big Three Events

Not all news matters. Focus on the "Tier 1" events that move the needle.

1.  **Non-Farm Payrolls (NFP)**:
    *   *What*: US Jobs report.
    *   *When*: First Friday of the month (8:30 AM EST).
    *   *Impact*: Massive. The USD often whipsaws 50-100 pips in seconds. It sets the trend for the month.
2.  **Central Bank Rate Decisions (FOMC, ECB, BOE)**:
    *   *What*: Interest rate changes and press conferences.
    *   *When*: 8 times a year per bank.
    *   *Impact*: Trend-changing. If the Fed raises rates unexpectedly, the USD can rally for weeks.
3.  **CPI (Inflation)**:
    *   *What*: Consumer Price Index.
    *   *When*: Monthly.
    *   *Impact*: High currently. Inflation dictates interest rates, so CPI is watched closely.

## Part 2: The Mechanics of a Release

What happens in that split second?

*   **The Freeze**: 1 minute before the release, liquidity dries up. Spreads widen. The market goes silent.
*   **The Release**: The number hits the wires (Bloomberg/Reuters). Algorithms react in microseconds.
*   **The Whip**: The price often spikes one way (fakeout) and then reverses hard. This is "clearing the stops."
*   **The Trend**: After 15-30 minutes, the real move begins as human traders digest the data.
*   **Slippage**: If you have a stop loss at 1.1000 and the price gaps to 1.0950, you get filled at 1.0950. You lose 50 pips more than you planned. This is the danger.

## Part 3: Strategy 1: The Straddle (Non-Directional)

Betting on volatility, not direction.

*   **The Setup**: 5 minutes before the news, the market is usually in a tight range.
*   **The Order**: Place a Buy Stop 10 pips *above* the range and a Sell Stop 10 pips *below* the range.
*   **The Logic**: When the news hits, the price will explode. It will trigger one of your orders and ride the momentum.
*   **The Risk**: **The Whipsaw**. The price spikes up (triggers Buy), then crashes down (hits Stop Loss), then spikes down (triggers Sell), then rallies back up (hits Stop Loss). You lose twice.
*   **Mitigation**: Use "OCO" (One Cancels Other) orders if your broker supports it. Or wait for the initial whip to settle.

## Part 4: Strategy 2: The Fade (Contrarian)

Betting on the overreaction.

*   **The Setup**: The news is good, but not *that* good. The price spikes vertically into a major resistance level.
*   **The Logic**: Algorithms drove the price up, but real buyers aren't there. The move is exhausted.
*   **The Trade**: Sell at the resistance level. Target a return to the pre-news price.
*   **The Risk**: The news was actually a game-changer, and the price keeps going for 200 pips. You get run over.
*   **Rule**: Only fade if the price hits a major Higher Timeframe level (Daily/Weekly).

## Part 5: Strategy 3: The Retest (Conservative)

The safest way to trade news.

*   **The Setup**: Do nothing during the release. Watch the fireworks.
*   **The Wait**: Wait 15-30 minutes. Let the market pick a direction.
*   **The Trade**: If the price broke a key level (e.g., 1.1000), wait for it to come back and retest that level. Enter on the bounce.
*   **Pros**: You avoid the spread widening and slippage. You have a clear direction.
*   **Cons**: Sometimes the market never looks back, and you miss the trade.

## Part 6: Interpreting the Numbers

It's all about expectations.

*   **Consensus**: The number the market expects (priced in).
*   **Deviation**: The difference between Actual and Consensus.
    *   *Example*: NFP Forecast: 150k. Actual: 160k.
    *   *Result*: Small deviation. Market ignores it.
    *   *Example*: NFP Forecast: 150k. Actual: 300k.
    *   *Result*: Huge deviation. Massive USD rally.
*   **Revisions**: Sometimes the headline number is good, but last month's number is revised down. The market might react to the revision, confusing beginners.

## Part 7: The "Buy the Rumor, Sell the Fact"

Why good news makes the price drop.

*   **Scenario**: The market expects the Fed to raise rates. The USD rallies for 2 weeks *before* the meeting.
*   **The Event**: The Fed raises rates (as expected).
*   **The Reaction**: The USD crashes.
*   **Why?**: Traders who bought 2 weeks ago are now taking profits. There are no new buyers left. The news was "fully priced in."
*   **Lesson**: If the market has already moved significantly in anticipation of an event, be very careful trading the event itself.

## Part 8: Risk Management During News

Survival guide.

*   **Reduce Size**: Cut your position size by 50% or more. Volatility will be double, so your risk is the same.
*   **Widen Stops**: Tight stops will get hunted. You need to give the trade room to breathe (which is why you reduce size).
*   **No Stops?**: Never. Trading news without a stop is suicide.
*   **Guaranteed Stops**: Some brokers offer "Guaranteed Stop Losses" for a fee. This protects you from slippage/gaps. Worth it for NFP.

## Part 9: Summary and Checklist

*   **Check the Calendar**: Every morning, check ForexFactory. Know when the bombs are dropping.
*   **Flat is Safe**: The best position during NFP is usually "Cash."
*   **Don't Chase**: If you miss the initial spike, don't buy at the top. Wait for the pullback.
*   **Watch the Spreads**: If the spread on EUR/USD goes to 10 pips, don't trade. You are paying too much.
*   **The Reaction Matters**: Price action > The Number. If the news is Good but the price falls, the market is telling you something (Bearish sentiment). Listen to the price.
\`,
        keyTakeaways: [
            "News events like NFP and Rate Decisions cause massive volatility.",
            "Slippage and wide spreads are major risks during releases.",
            "The 'Retest' strategy is safer than trying to predict the initial spike.",
            "Market reaction depends on the deviation from the forecast, not just the number."
        ]
    },`;

const marker = '"fx_11":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fx_11 not found'); process.exit(1); }

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

if (endIdx === -1) { console.error('fx_11 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_12: Trading News - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fx_12!');
