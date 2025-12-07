const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_7": {
        title: "Market Cycles",
        content: \`
# Market Cycles: Understanding the Rhythm

Markets don't move in straight lines. They breathe — expanding and contracting in predictable patterns driven by human psychology and economic forces. Understanding these cycles gives you an emotional edge. When others panic, you stay calm. When others are euphoric, you stay cautious. This knowledge turns [volatility](/glossary#volatility) from an enemy into an opportunity.

## Part 1: The Four Phases of Market Cycles

Every market cycle moves through four distinct phases. Recognizing where we are helps you make better decisions.

*   **1. Accumulation Phase**: The smart money quietly buys after a crash. Prices are low, pessimism is high, and most investors have given up. Headlines scream doom. This is actually the best time to buy.
*   **2. Mark-Up Phase ([Bull Market](/glossary#bull-market))**: Prices rise steadily. More investors notice and join in. Optimism grows, then becomes exuberance. Returns are strong and consistent. Most investors buy during this phase.
*   **3. Distribution Phase**: Smart money quietly sells to latecomers. Prices are high, everyone is excited, and "this time is different" thinking prevails. Warning signs appear but are ignored.
*   **4. Mark-Down Phase ([Bear Market](/glossary#bear-market))**: Prices fall, often sharply. Fear turns to panic. Everyone sells at the same time. Headlines predict the end of the world. This is when the next accumulation opportunity begins.
*   **The Irony**: Most people buy at the top (Phase 3) and sell at the bottom (Phase 4). Smart investors do the exact opposite.

## Part 2: Bull Markets — The Good Times

A [Bull Market](/glossary#bull-market) is defined as a sustained period of rising prices, typically up 20%+ from recent lows.

*   **Duration**: Bull markets historically last 3-10 years on average. The 2009-2020 bull market lasted 11 years — the longest in US history.
*   **Characteristics**: Rising prices, positive headlines, IPO booms, new investors entering, increasing speculation, "everyone is getting rich" stories.
*   **Psychology**: Optimism → Confidence → Greed → Euphoria → "This time is different" → Mania
*   **Danger Zone**: Bull markets don't die of old age. They die of excess. When your Uber driver gives you [stock](/glossary#stock) tips, be worried.
*   **Stats**: Over the past 100 years, the S&P 500 has been in a [bull market](/glossary#bull-market) approximately 75% of the time. Bulls are the norm, not the exception.
*   **Your Behavior**: Stay invested but gradually become more cautious as valuations stretch. Don't sell everything, but rebalance.

## Part 3: Bear Markets — The Bad Times

A [Bear Market](/glossary#bear-market) is defined as a decline of 20%+ from recent highs. They are painful but temporary.

*   **Duration**: Bear markets typically last 9-18 months on average. Much shorter than bull markets.
*   **Characteristics**: Falling prices daily, negative headlines everywhere, layoffs, bankruptcies, "the world is ending" predictions.
*   **Psychology**: Denial → Fear → Panic → Capitulation (everyone sells in despair) → Despair → Hope (recovery begins)
*   **Historical Examples**:
    *   2008 Financial Crisis: -57% over 17 months. Recovered by 2013.
    *   2020 COVID Crash: -34% in just 1 month. Recovered in 5 months (fastest ever).
    *   2000-2002 Dot-Com Bust: -49% over 31 months.
*   **The Secret**: Every bear market in history eventually ended and was followed by new all-time highs. 100% recovery rate.
*   **Your Behavior**: DO NOT SELL. If possible, buy more. This is when the wealthy get wealthier — they buy everyone else's panic.

## Part 4: Corrections — Minor Turbulence

A [Correction](/glossary#correction) is a 10-20% drop from recent highs. They are normal, healthy, and frequent.

*   **Frequency**: Corrections happen approximately every 1-2 years on average. They're completely routine.
*   **Duration**: Most corrections last only 2-4 months before recovery.
*   **Cause**: Often no major reason. Sometimes profit-taking, fear of rate hikes, geopolitical tension, or temporary economic concerns.
*   **Purpose**: Corrections prevent bubbles by releasing pressure. They're like market maintenance.
*   **Your Behavior**: Do nothing. Keep your regular investment schedule. These are noise, not signals.
*   **Opportunity**: Corrections are mini-sales. If you have extra cash, deploying it during a correction often produces strong returns.

## Part 5: Economic Cycles and Markets

The economy and the stock market are related but NOT the same. Markets often lead the economy.

*   **Expansion**: GDP growing, unemployment falling, consumer spending high. Stocks generally rise.
*   **Peak**: Growth slows, [inflation](/glossary#inflation) rises, [Fed](/glossary#federal-reserve) raises rates to cool things down. Stocks become volatile.
*   **[Recession](/glossary#recession)**: Two consecutive quarters of negative GDP growth. Unemployment rises. Stocks often fall.
*   **Trough/Recovery**: Economy hits bottom, stimulus deployed, green shoots appear. Stocks begin rising BEFORE the economy fully recovers.
*   **The Disconnect**: The stock market looks 6-12 months ahead. Stocks often rise during recessions because investors see upcoming recovery. Don't wait for "good news" to invest — you'll be late.
*   **2020 Example**: March 2020 — economy in freefall, 30 million unemployed. Stock market hit bottom and started rallying before any good news appeared.

## Part 6: Secular vs. Cyclical Markets

Within long-term secular trends, shorter cyclical swings occur. Understanding both timeframes is crucial.

*   **[Secular Market](/glossary#secular-market)**: Long-term trend lasting 15-20+ years.
    *   **Secular Bull** (1982-2000, 2013-?): Generally rising trend with new all-time highs. Corrections are buying opportunities.
    *   **Secular Bear** (1966-1982, 2000-2013): Sideways or declining trend. Multiple crashes. Stocks go nowhere for years.
*   **Cyclical Market**: Shorter trends within the secular trend lasting months to a few years.
    *   Even in secular bulls, you get cyclical bears (2018, 2020, 2022).
    *   Even in secular bears, you get cyclical bulls (rallies within stagnation).
*   **Japan Warning**: Japan's market peaked in 1989 and didn't recover for 34 years. Secular bears can last a generation.
*   **Strategy**: Stay diversified globally to avoid being stuck in one country's secular bear.

## Part 7: Market Indicators and Signals

Several indicators help gauge where we are in the cycle. None are perfect, but they provide context.

*   **[VIX](/glossary#vix) (Fear Index)**: Measures expected [volatility](/glossary#volatility). VIX > 30 = fear/panic. VIX < 15 = calm/complacency. Extreme VIX spikes often mark bottoms.
*   **[P/E Ratio](/glossary#pe-ratio)**: Price-to-Earnings ratio. Average is ~16. Above 25 = expensive. Above 30 = potentially overvalued.
*   **[Buffett Indicator](/glossary#buffett-indicator)**: Total market cap divided by GDP. Above 100% suggests overvaluation. Hit 200% in 2021.
*   **[Yield Curve](/glossary#yield-curve)**: When short-term rates exceed long-term rates (inversion), [recession](/glossary#recession) often follows within 12-18 months.
*   **CNN Fear & Greed Index**: Tracks 7 sentiment indicators. Extreme fear = buying opportunity. Extreme greed = caution.
*   **Warning**: No indicator is perfect. Markets can stay "overvalued" for years. Use indicators for context, not timing.

## Part 8: Famous Market Crashes (Case Studies)

History doesn't repeat exactly, but it rhymes. Study past crashes to understand the pattern.

*   **1929 Great Depression**: -89% over 3 years. Took 25 years to fully recover. Caused by excessive [leverage](/glossary#leverage) and no Fed intervention.
*   **1987 Black Monday**: -22% in a single day (still the record). Recovered within 2 years. Caused by program trading and portfolio insurance.
*   **2000 Dot-Com Crash**: -49% over 2.5 years. Tech stocks fell 80%+. Caused by extreme speculation in unprofitable internet companies.
*   **2008 Financial Crisis**: -57% over 17 months. Worst since 1929. Caused by housing bubble, bad mortgages, bank failures.
*   **2020 COVID Crash**: -34% in 33 days (fastest crash ever). Recovered in 5 months (fastest recovery ever). Caused by pandemic panic.
*   **Common Thread**: Every crash felt like "this time the world is ending." Every crash eventually recovered and reached new highs.

## Part 9: How to Behave Through Cycles

Your behavior during market cycles determines your wealth more than your investment selection.

*   **Stay Invested**: Missing the 10 best trading days over 20 years cuts your return in half. Those best days often occur during crashes.
*   **Don't Time**: Even professionals can't consistently time the market. Time IN the market beats timing.
*   **[Rebalance](/glossary#rebalancing)**: Rebalancing forces you to sell high and buy low automatically. Do it once per year.
*   **Cash Reserves**: Keep 3-6 months expenses in cash. This prevents forced selling during downturns.
*   **Buy During Fear**: The best buying opportunities come when the world feels like it's ending. 2009, 2020 were generational opportunities.
*   **Maintain Perspective**: Zoom out. Daily charts look terrifying. 10-year charts show steady upward progress.
*   **Emotional Discipline**: Write down your investment plan when calm. Follow it when panicked. Don't deviate.
\`,
        keyTakeaways: [
            "Markets cycle through accumulation, mark-up (bull), distribution, and mark-down (bear) phases.",
            "Bear markets average 9-18 months; bull markets average 3-10 years — the odds favor optimists.",
            "Every crash in history eventually recovered — 100% batting average on patience.",
            "Your behavior during cycles matters more than your investment picks — stay invested."
        ]
    },`;

const startMarker = '"ib_7": {';
const endMarker = '"ib_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_7: Market Cycles - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_7!');
