const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_3": {
        title: "Breakout Trading",
        content: \`
# Breakout Trading: Catching the Start of Big Moves

**[Breakout](/glossary#breakout) trading** is one of the most popular strategies among technical traders. The idea is simple: when price breaks through a significant level of [support](/glossary#support) or [resistance](/glossary#resistance), a strong move often follows. Catching these [breakouts](/glossary#breakout) early can lead to exceptional risk-reward trades.

However, false [breakouts](/glossary#breakout) are common, and many traders lose money chasing moves that quickly reverse. Mastering [breakout](/glossary#breakout) trading requires understanding when [breakouts](/glossary#breakout) are likely to succeed and when to stay away.

## Part 1: What Is a Breakout?

A **[breakout](/glossary#breakout)** occurs when price moves decisively beyond a defined level that has previously acted as a barrier.

*   **Definition**: A [breakout](/glossary#breakout) happens when price closes convincingly above [resistance](/glossary#resistance) (bullish [breakout](/glossary#breakout)) or below [support](/glossary#support) (bearish [breakout](/glossary#breakout)).
*   **[Resistance](/glossary#resistance)**: A price level where selling pressure has repeatedly prevented upward movement.
*   **[Support](/glossary#support)**: A price level where buying pressure has repeatedly prevented downward movement.
*   **The Psychology**: When price breaks through, traders who bet against the move cover their positions, adding fuel. New traders jump in, creating momentum.
*   **Continuation [Breakouts](/glossary#breakout)**: [Breakouts](/glossary#breakout) in the direction of the existing trend.
*   **Reversal [Breakouts](/glossary#breakout)**: [Breakouts](/glossary#breakout) that signal a trend change—less common but potentially powerful.

## Part 2: Identifying High-Probability Breakout Setups

Not all [breakouts](/glossary#breakout) are created equal. The best setups share common characteristics.

### Key Criteria for Strong Breakouts
*   **Multiple Touches**: The level being broken has been tested multiple times. More touches = more significant level.
*   **Tight Consolidation**: Price has been compressing near the level, building energy for the move.
*   **[Volume](/glossary#volume) Confirmation**: The [breakout](/glossary#breakout) candle has notably higher [volume](/glossary#volume) than recent candles.
*   **Clean Level**: The [support](/glossary#support)/[resistance](/glossary#resistance) level is obvious—you shouldn't need to squint.
*   **Catalyst**: News, earnings, or sector strength provides fundamental reason for the move.
*   **Market Context**: [Breakouts](/glossary#breakout) in the direction of the broader market trend are more reliable.
*   **Time of Day**: [Breakouts](/glossary#breakout) in the first hour of trading or around major news events often have follow-through.

### Consolidation Patterns That Precede Breakouts
*   **Ascending/Descending Triangle**: Higher lows into [resistance](/glossary#resistance) (bullish) or lower highs into [support](/glossary#support) (bearish).
*   **Rectangle/Range**: Price bouncing between horizontal [support](/glossary#support) and [resistance](/glossary#resistance).
*   **Pennant/Flag**: Tight consolidation after a strong move, suggesting continuation.
*   **Cup and Handle**: Rounded base with a small pullback before [breakout](/glossary#breakout).

## Part 3: False Breakouts — The Trader's Trap

**False [breakouts](/glossary#breakout)** (also called "fakeouts" or "bull/bear traps") occur when price breaks a level but quickly reverses.

*   **Why They Happen**:
    *   Stop-loss hunting by institutions: Price breaks the level just enough to trigger [stops](/glossary#stop-loss), then reverses.
    *   Lack of conviction: No real buyers/sellers behind the move.
    *   [Liquidity](/glossary#liquidity) grab: Market makers push price to fill orders at key levels.
*   **Signs of a False [Breakout](/glossary#breakout)**:
    *   Low [volume](/glossary#volume) on the [breakout](/glossary#breakout) candle.
    *   Long wick (shadow) on the [breakout](/glossary#breakout) candle showing immediate rejection.
    *   [Breakout](/glossary#breakout) occurs in the opposite direction of the larger trend.
    *   No catalyst or news driving the move.
*   **Avoiding False [Breakouts](/glossary#breakout)**:
    *   Wait for a close above/below the level (not just a wick).
    *   Require [volume](/glossary#volume) confirmation.
    *   Wait for a retest of the level before entering.
    *   Use wider [stops](/glossary#stop-loss) to survive initial whipsaws.

## Part 4: Breakout Entry Strategies

There are multiple ways to enter a [breakout](/glossary#breakout) trade, each with trade-offs.

### 1. Anticipation Entry (Before the Breakout)
*   Enter while price is still in the consolidation, near [support](/glossary#support).
*   **Advantage**: Better entry price, larger reward if [breakout](/glossary#breakout) occurs.
*   **Disadvantage**: The [breakout](/glossary#breakout) may never happen—you're betting on it.
*   **Best For**: Experienced traders who can read consolidation tightness.

### 2. Breakout Entry (At the Breakout)
*   Enter immediately when price breaks the level.
*   **Advantage**: Confirmation that the move is happening.
*   **Disadvantage**: Prone to false [breakouts](/glossary#breakout) and slippage.
*   **Best For**: Fast execution with tight [stops](/glossary#stop-loss).

### 3. Retest Entry (After the Breakout)
*   Wait for price to break out, then pull back to retest the level as new [support](/glossary#support)/[resistance](/glossary#resistance).
*   **Advantage**: Confirms the level is holding. Better risk/reward.
*   **Disadvantage**: Sometimes price runs without retesting—you miss the move.
*   **Best For**: Patient traders who prioritize risk management.

### Combining Approaches
*   Take a partial position on anticipation, add on [breakout](/glossary#breakout), and complete on retest.
*   Scale in to manage [risk](/glossary#risk) while capturing different entry opportunities.

## Part 5: Risk Management for Breakout Trades

[Breakout](/glossary#breakout) trades require disciplined [risk management](/glossary#risk-management) because false [breakouts](/glossary#breakout) are common.

*   **Stop-Loss Placement**:
    *   Just below the [breakout](/glossary#breakout) level for long trades (or above for shorts).
    *   Alternatively, below the consolidation low for wider stop.
    *   Account for normal [volatility](/glossary#volatility)—too tight and you'll get stopped by noise.
*   **Position Sizing**: Size the trade so that if your [stop](/glossary#stop-loss) is hit, you lose no more than 1-2% of capital.
*   **Profit Targets**:
    *   Measured move: The height of the consolidation pattern, projected from the [breakout](/glossary#breakout) point.
    *   Fixed risk/reward: Aim for 2:1 or 3:1 reward-to-[risk](/glossary#risk).
    *   Trail your [stop](/glossary#stop-loss): As price moves in your favor, raise your [stop](/glossary#stop-loss) to lock in profits.
*   **Early Exit**: If the [breakout](/glossary#breakout) immediately stalls and [volume](/glossary#volume) fades, consider exiting early rather than waiting for your [stop](/glossary#stop-loss).

## Part 6: Breakout Trading on Different Timeframes

[Breakout](/glossary#breakout) strategies work on any timeframe, but characteristics differ.

### Intraday Breakouts (1-min to 15-min charts)
*   Fast-moving, requires quick execution.
*   Many false [breakouts](/glossary#breakout) due to noise.
*   Best for experienced traders with direct access.
*   Trade the opening range [breakout](/glossary#breakout) in the first hour.

### Daily Chart Breakouts
*   More significant levels, fewer false signals.
*   Requires holding overnight.
*   Suitable for swing traders.
*   [Volume](/glossary#volume) confirmation is critical.

### Weekly Chart Breakouts
*   Major moves that can last weeks or months.
*   Very reliable when they occur—but infrequent.
*   Best for position traders and investors.

### Multi-Timeframe Confirmation
*   Identify [breakout](/glossary#breakout) levels on daily/weekly charts.
*   Use lower timeframes (hourly, 15-min) to time your entry.
*   This combines the significance of higher-timeframe levels with the precision of lower-timeframe entries.

## Part 7: Real-World Breakout Trading Tips

Practical wisdom from traders who've traded thousands of [breakouts](/glossary#breakout).

*   **Trade the Best Setups Only**: Most [breakouts](/glossary#breakout) fail. Be selective—only trade the most textbook setups.
*   **[Volume](/glossary#volume) Is Your Friend**: Never trade a [breakout](/glossary#breakout) without [volume](/glossary#volume) confirmation.
*   **Morning [Breakouts](/glossary#breakout) > Afternoon [Breakouts](/glossary#breakout)**: The first hour has the most [volume](/glossary#volume) and momentum.
*   **Respect the Retest**: If the level breaks and price retests it without failing, that's an excellent entry.
*   **Know Your Sector**: [Breakouts](/glossary#breakout) in the direction of sector strength are more reliable.
*   **Don't Chase**: If you miss the entry, wait for a pullback. Chasing extended moves is risky.
*   **Journal Your Trades**: Track which setups work for you and which don't.
*   **Be Patient**: Wait for the setup; don't force trades.

[Breakout](/glossary#breakout) trading is a powerful strategy, but success requires patience, selectivity, and robust [risk management](/glossary#risk-management). Master it, and you'll be positioned to catch some of the market's most explosive moves.
\`,
        keyTakeaways: [
            "A breakout occurs when price moves decisively through support or resistance with volume.",
            "High-probability breakouts have multiple touches, tight consolidation, and volume confirmation.",
            "False breakouts are common—wait for confirmation, use volume, and place stops wisely.",
            "Entry options: anticipation (before), breakout (at), or retest (after)—each has trade-offs.",
            "Multi-timeframe analysis improves reliability: identify levels on higher timeframes, enter on lower."
        ]
    },`;

const startMarker = '"as_3": {';
const endMarker = '"as_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_3: Breakout Trading - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated as_3!');
