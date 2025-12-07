const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_6": {
        title: "Stop-Loss Strategies",
        content: \`
# Stop-Loss Strategies: Protecting Your Downside

A **[stop-loss](/glossary#stop-loss)** is a predetermined price at which you'll exit a losing position to prevent further damage. It's one of the most important tools in a trader's arsenal. Without a [stop-loss](/glossary#stop-loss), small losses can become catastrophic ones. A trade without a [stop](/glossary#stop-loss) is not a trade—it's a prayer.

This lesson explores different [stop-loss](/glossary#stop-loss) strategies, when to use each, and common mistakes that undermine their effectiveness.

## Part 1: Why Stop-Losses Are Essential

[Stop-losses](/glossary#stop-loss) protect you from your own worst impulses.

*   **Limits Losses**: A defined [stop](/glossary#stop-loss) caps how much you can lose on any single trade.
*   **Enables Position Sizing**: Without knowing your [stop](/glossary#stop-loss), you can't calculate proper position size.
*   **Removes Emotion**: The exit decision is made in advance, not in the panic of a falling price.
*   **Preserves Capital**: Capital saved from one loss can be deployed to the next opportunity.
*   **Protects Against Black Swans**: Catastrophic moves can destroy accounts without [stop-losses](/glossary#stop-loss).
*   **Psychological Relief**: Knowing your maximum loss reduces anxiety and enables clearer thinking.
*   **Asymmetric Math Reminder**: Recovering from a 50% loss requires a 100% gain. Small losses are manageable; large losses are not.

## Part 2: Types of Stop-Losses

Different situations call for different [stop-loss](/glossary#stop-loss) approaches.

### Fixed Percentage Stop
*   **Definition**: Exit if the price falls X% below entry.
*   **Example**: Buy at $100, [stop](/glossary#stop-loss) at $90 (10% [stop](/glossary#stop-loss)).
*   **Advantage**: Simple, easy to calculate.
*   **Disadvantage**: Doesn't account for the [stock's](/glossary#stock) normal [volatility](/glossary#volatility).

### Technical Stop
*   **Definition**: Place [stop](/glossary#stop-loss) at a logical [support](/glossary#support) level (below [support](/glossary#support) for longs).
*   **Example**: [Stock](/glossary#stock) has strong [support](/glossary#support) at $95. Place [stop](/glossary#stop-loss) at $94.
*   **Advantage**: Based on market structure, not arbitrary percentages.
*   **Disadvantage**: Requires [technical analysis](/glossary#technical-analysis) skill. [Support](/glossary#support) levels can fail.

### Volatility Stop (ATR-Based)
*   **Definition**: Set [stop](/glossary#stop-loss) at a multiple of the Average True Range (ATR).
*   **Example**: ATR = $3. Place [stop](/glossary#stop-loss) 2 ATRs below entry = $6 below entry.
*   **Advantage**: Adjusts for each [stock's](/glossary#stock) normal [volatility](/glossary#volatility).
*   **Disadvantage**: Requires calculating ATR; may be wider than comfortable.

### Time Stop
*   **Definition**: Exit if the expected move doesn't occur within a set time.
*   **Example**: "If this trade isn't profitable in 5 days, I exit."
*   **Advantage**: Frees capital from dead positions.
*   **Disadvantage**: May exit just before the move happens.

### Trailing Stop
*   **Definition**: [Stop](/glossary#stop-loss) moves up as price rises (for longs), locking in profits.
*   **Example**: Trailing [stop](/glossary#stop-loss) at 10%. Buy at $100. Price rises to $120. [Stop](/glossary#stop-loss) moves to $108.
*   **Advantage**: Captures trend gains while protecting profits.
*   **Disadvantage**: Can be whipsawed out of a position during normal retracements.

## Part 3: Setting Your Stop-Loss

Where to place your [stop](/glossary#stop-loss) is a critical decision.

*   **Technical Levels**: Just below [support](/glossary#support) (for longs) or above [resistance](/glossary#resistance) (for shorts).
*   **ATR Multiples**: 2-3x ATR is common for swing trades; tighter for [day trades](/glossary#day-trading).
*   **Chart Structure**: Below recent swing lows, below [moving averages](/glossary#moving-average), below consolidation zones.
*   **Risk/Reward**: Ensure your target gives at least 2:1 reward for the [risk](/glossary#risk). If the [stop](/glossary#stop-loss) makes the trade unprofitable, pass.
*   **Not Too Tight**: Stops that are too close get hit by normal [volatility](/glossary#volatility). Give room to breathe.
*   **Not Too Loose**: Stops that are too far away defeat the purpose. You'll lose too much when hit.
*   **Before Entry**: Decide your [stop](/glossary#stop-loss) BEFORE entering. Not after.

## Part 4: Hard Stops vs. Mental Stops

How you implement your [stop](/glossary#stop-loss) matters.

### Hard Stops (Placed in Market)
*   **Definition**: A [stop](/glossary#stop-loss) order placed with your broker that triggers automatically.
*   **Advantage**: Executes even if you're not watching. Removes temptation to override.
*   **Disadvantage**: Visible to market makers; may get hit during brief dips ("stop hunting").
*   **Best For**: New traders who struggle with discipline; volatile markets; can't monitor constantly.

### Mental Stops
*   **Definition**: A price level you commit to exit at, but don't place an order until price reaches it.
*   **Advantage**: Not visible to market makers. Can assess conditions in real-time.
*   **Disadvantage**: Requires discipline. Easy to talk yourself out of exiting.
*   **Best For**: Experienced traders with proven discipline; highly liquid markets.

### Recommendation
*   Beginners should always use hard [stops](/glossary#stop-loss).
*   If you've ever rationalized holding past your [stop](/glossary#stop-loss), use hard [stops](/glossary#stop-loss).
*   Mental [stops](/glossary#stop-loss) are for disciplined traders who have proven they can execute them reliably.

## Part 5: Trailing Stop Strategies

Trailing [stops](/glossary#stop-loss) adapt as the trade progresses.

### Fixed Trailing Stop
*   Trail by a fixed amount (e.g., $5) or percentage (e.g., 8%).
*   Moves up with price but never moves down.
*   Simple but may exit during normal fluctuations.

### ATR Trailing Stop
*   Trail by 2-3x ATR.
*   Adjusts for each [stock's](/glossary#stock) [volatility](/glossary#volatility).
*   Gives more room for volatile [stocks](/glossary#stock).

### Swing Low Trailing Stop
*   Move [stop](/glossary#stop-loss) to just below each new swing low as price makes higher lows.
*   Based on market structure, not arbitrary numbers.
*   Requires attention and judgment.

### [Moving Average](/glossary#moving-average) Trail
*   Trail [stop](/glossary#stop-loss) at or just below a [moving average](/glossary#moving-average) (e.g., 20-day SMA).
*   Exit if price closes below the MA.
*   Good for trend-following strategies.

### Parabolic SAR
*   An indicator that provides trailing [stop](/glossary#stop-loss) levels.
*   Tightens as the trend progresses.
*   Exits quickly when trend reverses.

## Part 6: Common Stop-Loss Mistakes

Avoid these errors that undermine your [stop-losses](/glossary#stop-loss).

*   **No [Stop-Loss](/glossary#stop-loss)**: Trading without a defined exit point. Recipe for disaster.
*   **Moving [Stops](/glossary#stop-loss) Further Away**: "I'll give it more room" when facing a loss. This defeats the entire purpose.
*   **Too Tight Stops**: Getting stopped out by normal [volatility](/glossary#volatility), then watching the [stock](/glossary#stock) reverse in your favor.
*   **Inconsistent Use**: Using [stops](/glossary#stop-loss) sometimes but not others.
*   **Ignoring [Volatility](/glossary#volatility)**: Using the same [stop](/glossary#stop-loss) percentage for a [volatile](/glossary#volatility) biotech and a stable utility.
*   **Round Number Stops**: Placing [stops](/glossary#stop-loss) at obvious levels ($100, $50) where everyone else has [stops](/glossary#stop-loss).
*   **Removing [Stops](/glossary#stop-loss) Before Events**: For example, removing [stop](/glossary#stop-loss) before [earnings](/glossary#earnings) "to see what happens."
*   **Reactive [Stop](/glossary#stop-loss) Setting**: Deciding your [stop](/glossary#stop-loss) after the trade moves against you. It should be decided before entry.

## Part 7: Stop-Losses for Investors vs. Traders

Different approaches for different time horizons.

### For Short-Term Traders
*   Tight [stops](/glossary#stop-loss) are appropriate—often 1-3% or 1-2 ATRs.
*   Quick exits preserve capital for the next trade.
*   Hard [stops](/glossary#stop-loss) or very disciplined mental [stops](/glossary#stop-loss).

### For Swing Traders
*   Medium [stops](/glossary#stop-loss)—5-10% or based on swing lows.
*   Technical [stops](/glossary#stop-loss) at [support](/glossary#support) levels work well.
*   Trailing [stops](/glossary#stop-loss) to capture larger moves.

### For Long-Term Investors
*   Wider [stops](/glossary#stop-loss) or no hard [stops](/glossary#stop-loss) at all.
*   Focus on [fundamentals](/glossary#fundamental-analysis), not price action.
*   Use mental "re-evaluation triggers" rather than automatic exits.
*   Rebalancing serves as implicit [risk management](/glossary#risk-management).

### Universal Truth
*   Regardless of time frame, never allow a single position to devastate your portfolio.
*   Define the maximum acceptable loss before entering.
*   Honor your discipline.

[Stop-losses](/glossary#stop-loss) are your last line of defense against catastrophic losses. Use them consistently, set them intelligently, and never, ever move them in the wrong direction.
\`,
        keyTakeaways: [
            "A stop-loss is a predetermined exit point that limits losses and enables proper position sizing.",
            "Types include fixed percentage, technical, volatility-based (ATR), time-based, and trailing stops.",
            "Set stops based on market structure and volatility—not arbitrary numbers.",
            "Hard stops (placed orders) are safer for most traders; mental stops require proven discipline.",
            "Never move a stop further away to 'give it room'—that defeats the entire purpose."
        ]
    },`;

const startMarker = '"pm_6": {';
const endMarker = '"pm_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_6: Stop-Loss Strategies - VALIDATION ===');
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
console.log('✓ Successfully updated pm_6!');
