const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_5": {
        title: "Forex Market Sessions",
        content: \`
# The 24-Hour Market: Trading Sessions

The Forex market never sleeps, but it does take naps. While you *can* trade 24 hours a day during the week, you *shouldn't*. Liquidity and volatility shift dramatically as the sun moves around the globe. Understanding the three major trading sessions—Asian, London, and New York—is crucial for finding the right moves and avoiding "dead" markets.

## Part 1: The Three Major Sessions

The market is a relay race between financial hubs.

1.  **Asian Session (Tokyo)**: Starts the day.
    *   *Open*: ~7:00 PM EST (00:00 GMT).
    *   *Close*: ~4:00 AM EST (09:00 GMT).
    *   *Hubs*: Tokyo, Sydney, Singapore, Hong Kong.
2.  **London Session (European)**: The main event.
    *   *Open*: ~3:00 AM EST (08:00 GMT).
    *   *Close*: ~12:00 PM EST (17:00 GMT).
    *   *Hubs*: London, Frankfurt, Paris, Zurich.
3.  **New York Session (North American)**: The closer.
    *   *Open*: ~8:00 AM EST (13:00 GMT).
    *   *Close*: ~5:00 PM EST (22:00 GMT).
    *   *Hubs*: New York, Chicago, Toronto.

## Part 2: The Asian Session (Tokyo)

The "Quiet" Session.

*   **Characteristics**: Lower volatility, thinner liquidity. Markets often "range" (move sideways) rather than trend.
*   **Key Pairs**: JPY pairs (USD/JPY, GBP/JPY), AUD pairs (AUD/USD), NZD pairs (NZD/USD).
*   **Why Trade It?**:
    *   *Range Trading*: Buying support and selling resistance works well here.
    *   *News*: Major data from Japan, Australia, and China comes out.
*   **The Trap**: Breakouts during Asia are often "fakeouts." The market lacks the power to sustain a big move.
*   **Strategy**: "Asian Range Breakout." Mark the high and low of the Asian session. When London opens, trade the breakout.

## Part 3: The London Session (Europe)

The "Trend Setter."

*   **Characteristics**: Massive liquidity. ~35-40% of all daily Forex volume happens here. London is the financial capital of the world for Forex.
*   **Key Pairs**: EUR/USD, GBP/USD, EUR/GBP, USD/CHF.
*   **The Action**:
    *   *The Open (3 AM EST)*: Often sees an explosion of volatility. The "London Breakout."
    *   *Trends*: Trends established in London often last until the NY close.
*   **Why Trade It?**: If you want big moves and pips, this is the place. Spreads are tightest.
*   **The "London Fix"**: At 11:00 AM EST (4 PM London), massive flows occur as banks balance their books. Prices can whip wildly.

## Part 4: The New York Session (US)

The "Volatile" Session.

*   **Characteristics**: High volatility, especially in the morning.
*   **Key Pairs**: All USD pairs (EUR/USD, USD/JPY, etc.).
*   **The Action**:
    *   *The Open (8 AM EST)*: Coincides with major US economic data releases (Non-Farm Payrolls, CPI, GDP).
    *   *Reversals*: Sometimes NY reverses the London trend.
*   **The Afternoon Slump**: After 12:00 PM EST (when London closes), liquidity dries up. The market often goes dead until the next day.
*   **Friday Close**: Traders close positions for the weekend. Weird moves can happen.

## Part 5: The Overlap (The Golden Hours)

The sweet spot.

*   **Time**: 8:00 AM EST to 12:00 PM EST.
*   **What is it?**: Both London and New York are open simultaneously.
*   **Why it matters**:
    *   *Peak Liquidity*: The two biggest financial centers are trading at the same time.
    *   *Peak Volatility*: The biggest moves happen here.
    *   *Best Spreads*: Spreads are virtually zero on majors.
*   **Strategy**: If you can only trade 4 hours a day, trade the Overlap. This is where the money is made.

## Part 6: The "Dead" Zones and Weekend Gaps

When to stay away.

*   **The Gap (5 PM - 7 PM EST)**: The "Roll Over."
    *   New York is closed. Tokyo hasn't opened. Sydney is just waking up.
    *   *Spreads*: Widen massively (can go from 1 pip to 10 pips).
    *   *Liquidity*: Zero.
    *   *Danger*: Do not trade here. You will get slipped and pay huge fees.
*   **Friday Afternoon**: Everyone is at the pub or the Hamptons. Volume dies.
*   **Weekend Gaps**: The market closes Friday at price X and opens Sunday at price Y.
    *   *Risk*: If you hold a trade over the weekend, your stop loss might not work. You could lose much more than planned.
    *   *Strategy*: Close short-term trades on Friday.

## Part 7: Best Times for Each Pair

Match the pair to the session.

*   **EUR/USD**: London & NY Overlap. (Most volume).
*   **GBP/USD**: London Open & NY Overlap. (Most volatile).
*   **USD/JPY**: Asian Session (for news) & NY Session.
*   **AUD/USD**: Asian Session (Australian news) & London Open.
*   **EUR/JPY**: London Open (Euro moves) & Asian Open (Yen moves).

## Part 8: Day of the Week Matters

Not all days are equal.

*   **Monday**: Slow. The market is waking up. Traders are assessing weekend news. "Correction" day.
*   **Tuesday**: Volatility picks up. Trends start to form.
*   **Wednesday**: Peak volatility. Mid-week reversals. Triple Swap day.
*   **Thursday**: Strong trending day.
*   **Friday**: Morning is volatile (US data). Afternoon is dead.
*   **Sunday Night**: The Open. Watch for "Gaps" (price jumping over the weekend).

## Part 9: Summary and Strategy

*   **Know Your Time Zone**: Convert EST/GMT to your local time. Set alarms.
*   **Don't Overtrade**: You don't need to trade 24 hours. 3-4 hours of focused trading during the Overlap is better than 12 hours of staring at a slow Asian screen.
*   **Respect the Overlap**: This is prime time. Be ready.
*   **Avoid the Rollover**: Never open a trade at 5 PM EST.
*   **Lifestyle**: Choose a session that fits your life. If you have a day job in the US, trade the Asian session (evening) or the London Open (early morning).
*   **Final Tip**: The market will be there tomorrow. Don't force a trade when the session is dead. Patience pays.
*   **Algorithms**: Remember that 80% of volume is algorithmic. They love liquidity. They hunt for stops during low liquidity times. Stay safe.
\`,
        keyTakeaways: [
            "The market has three main sessions: Asian (Quiet), London (Trend), New York (Volatile).",
            "The 'Overlap' (London + NY) is the best time to trade due to high volume.",
            "Avoid trading during the 'Rollover' (5 PM EST) when spreads widen.",
            "Match your currency pair to the active session (e.g., JPY in Asia)."
        ]
    },`;

const startMarker = '"fx_5": {';
const endMarker = '"fx_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_5: Market Sessions - VALIDATION ===');
console.log('Chars:', charCount, (charCount > 6500) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount <= 6500 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_5!');
