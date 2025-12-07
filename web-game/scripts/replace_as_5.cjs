const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_5": {
        title: "Gap Trading",
        content: \`
# Gap Trading: Profiting from Overnight Price Jumps

A **gap** occurs when a [stock](/glossary#stock) opens at a significantly different price than it closed the previous day. These price discontinuities create unique trading opportunities for those who understand gap dynamics. Gap trading is a specialized strategy that capitalizes on the market's tendency to either continue or fill these overnight price jumps.

Understanding why gaps occur and how to trade them can give you an edge during the market's most volatile moments—the first minutes and hours after the open.

## Part 1: What Is a Gap?

A **gap** is a price area on a chart where no trading occurred, creating a visual "gap" between two trading sessions.

*   **Definition**: A gap forms when a security opens higher (gap up) or lower (gap down) than its previous close, skipping over price levels entirely.
*   **Gap Up**: The opening price is higher than the prior day's high. Often caused by positive news.
*   **Gap Down**: The opening price is lower than the prior day's low. Often caused by negative news.
*   **Partial Gap**: The open is above/below the prior close but still within the prior day's range.
*   **Full Gap**: The open is completely outside the prior day's entire range—more significant.
*   **Gap Size**: Measured as a percentage from prior close to opening price. A 5% gap is more significant than a 0.5% gap.
*   **Why Gaps Matter**: They represent overnight sentiment changes caused by news, earnings, or events that occurred when traders couldn't react.

## Part 2: Types of Gaps

Different gaps have different implications for trading.

### 1. Common Gaps (Area Gaps)
*   Occur in low-[volatility](/glossary#volatility), sideways markets.
*   Have no significant catalyst.
*   Usually fill quickly—price returns to the prior close level.
*   **Trading Implication**: Fade them (trade against the gap direction).

### 2. Breakaway Gaps
*   Occur at the start of a new trend, breaking out of a consolidation pattern.
*   High [volume](/glossary#volume) and a significant catalyst.
*   Often do NOT fill—or take a long time to fill.
*   **Trading Implication**: Trade with the gap direction.

### 3. Runaway Gaps (Continuation Gaps)
*   Occur in the middle of a strong trend, showing momentum acceleration.
*   Signal that the trend is strong and more move is likely.
*   May not fill for weeks or months.
*   **Trading Implication**: Trade with the gap direction.

### 4. Exhaustion Gaps
*   Occur at the END of a trend, representing final capitulation.
*   High [volume](/glossary#volume) and often followed by reversal.
*   Usually fill relatively quickly as the trend reverses.
*   **Trading Implication**: Fade the gap after confirmation.

Identifying which type of gap you're seeing is crucial to choosing the right strategy.

## Part 3: Gap Fill Strategy

The **gap fill** strategy is based on the tendency for gaps to "fill"—meaning price returns to the prior close.

### The Theory
*   Many gaps are emotional overreactions to news.
*   Once the initial excitement fades, price returns to rational levels.
*   Statistically, a high percentage of gaps fill eventually (especially common gaps).

### Trading the Gap Fill
*   **Gap Down**: If a [stock](/glossary#stock) gaps down without a major catalyst, go long at the open, targeting the prior close.
*   **Gap Up**: If a [stock](/glossary#stock) gaps up without a major catalyst, go short at the open, targeting the prior close.
*   **Stop-Loss**: Place below the opening range low (for longs) or above the opening range high (for shorts).
*   **Time Frame**: Most gap fills happen within the first 1-2 hours of trading if they're going to fill that day.

### When Gap Fill Works Best
*   Common gaps in stable [stocks](/glossary#stock).
*   No significant news or catalyst.
*   The gap is relatively small (1-3%).
*   Overall market is calm.

### When to Avoid Gap Fill
*   [Breakout](/glossary#breakout) or runaway gaps.
*   Major news (earnings, FDA approval, etc.).
*   Very large gaps (5%+).
*   Strong trending market.

## Part 4: Gap and Go Strategy

The **Gap and Go** strategy is the opposite of gap fill—you trade with the gap's direction.

### The Theory
*   Strong gaps often indicate new information that justifies a new price level.
*   [Breakaway](/glossary#breakout) and runaway gaps tend to continue.
*   Momentum begets momentum in the opening hour.

### Trading Gap and Go
*   Identify [stocks](/glossary#stock) with strong pre-market gaps (ideally 5%+).
*   Look for a catalyst: earnings beat, news, upgrade.
*   Wait for the market open; let the first few minutes establish a range.
*   **Entry**: Buy on breakout above the opening range high.
*   **Stop-Loss**: Below the opening range low.
*   **Target**: Trail your stop or target 50%-100% of the gap size as extension.

### Criteria for Gap and Go
*   Strong catalyst (not just random movement).
*   High pre-market [volume](/glossary#volume).
*   Gap is in the direction of the broader market trend.
*   [Stock](/glossary#stock) has relative strength vs. the market.

### Risk Considerations
*   Morning [volatility](/glossary#volatility) can be extreme—use smaller position sizes.
*   Gaps can reverse violently after the initial push.
*   Be disciplined about cutting losses.

## Part 5: The Opening Range Breakout

Many gap traders use the **Opening Range [Breakout](/glossary#breakout)** (ORB) as a filter.

*   **Opening Range**: The high and low of the first 5, 15, or 30 minutes of trading.
*   **ORB Long**: If price breaks above the opening range high, go long.
*   **ORB Short**: If price breaks below the opening range low, go short.
*   **Why It Works**: The opening range captures the battle between buyers and sellers. The [breakout](/glossary#breakout) indicates who won.
*   **Combining with Gaps**:
    *   Gap up + ORB high break = Strong Gap and Go signal.
    *   Gap up + ORB low break = Gap may fill.
    *   Gap down + ORB low break = Strong Gap and Go (short).
    *   Gap down + ORB high break = Gap may fill.
*   **[Volume](/glossary#volume) Confirmation**: The [breakout](/glossary#breakout) should come with increased [volume](/glossary#volume).

## Part 6: Pre-Market Gap Analysis

Preparation before the market opens is essential for gap trading.

### What to Scan For
*   [Stocks](/glossary#stock) gapping 3%+ in pre-market.
*   [Volume](/glossary#volume): Higher than average pre-market [volume](/glossary#volume).
*   Float: Lower [float](/glossary#float) [stocks](/glossary#stock) can move more dramatically.
*   News: Always know WHY the [stock](/glossary#stock) is gapping.

### Pre-Market Levels to Watch
*   Prior day's close (the gap level).
*   Prior day's high and low.
*   Pre-market high and low.
*   Key moving averages (20-day, 50-day SMA).

### Creating a Watchlist
*   Use a gap scanner (most trading platforms have one).
*   Filter by gap percentage, [volume](/glossary#volume), and price range.
*   Review news for each candidate.
*   Identify 5-10 [stocks](/glossary#stock) to focus on each morning.

### The First 30 Minutes
*   The most important trading period for gaps.
*   Let the opening range establish before acting.
*   Don't chase—wait for setups.

## Part 7: Risk Management for Gap Trading

Gap trading can be highly profitable but also extremely risky. Manage [risk](/glossary#risk) carefully.

*   **Smaller Position Sizes**: Morning [volatility](/glossary#volatility) justifies using 50% of your normal size.
*   **Tight [Stops](/glossary#stop-loss)**: Define your [stop](/glossary#stop-loss) before entry and honor it. Use the opening range extremes.
*   **Time Limit**: If your gap fill or gap and go doesn't work within 1-2 hours, consider exiting.
*   **Avoid Overtrading**: Focus on 1-3 quality setups, not 10 mediocre ones.
*   **Know the Catalyst**: Trading gaps without understanding the news is gambling.
*   **Watch the Market**: In a strong down day, even gap-up [stocks](/glossary#stock) may fade. Context matters.
*   **Review and Adapt**: Keep a journal of your gap trades. Learn what works for you.

Gap trading rewards those who prepare, stay disciplined, and respect the volatility of the opening hour. Master this style, and you'll turn overnight price jumps into consistent profits.
\`,
        keyTakeaways: [
            "A gap is a price jump between yesterday's close and today's open—caused by overnight news or events.",
            "Four types: common gaps (fill quickly), breakaway (start trends), runaway (continue trends), exhaustion (end trends).",
            "Gap fill strategy fades the gap, expecting prices to return to the prior close.",
            "Gap and Go trades with the gap direction on strong catalysts and volume.",
            "Use the Opening Range Breakout to confirm direction before entering gap trades."
        ]
    },`;

const startMarker = '"as_5": {';
const endMarker = '"as_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_5: Gap Trading - VALIDATION ===');
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
console.log('✓ Successfully updated as_5!');
