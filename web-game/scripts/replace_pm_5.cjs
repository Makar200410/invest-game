const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_5": {
        title: "Position Sizing",
        content: \`
# Position Sizing: How Much to Invest in Each Trade

**[Position sizing](/glossary#position-sizing)** is the decision of how much capital to allocate to each investment or trade. It's arguably the most important aspect of [risk management](/glossary#risk-management). Even with a great strategy, poor position sizing can lead to ruin. Even with a mediocre strategy, proper position sizing can lead to survival and eventual success.

Your position size for each trade should be calculated before you enter, based on your [risk](/glossary#risk) tolerance, the trade's [risk](/glossary#risk) parameters, and your overall portfolio context.

## Part 1: Why Position Sizing Matters

The importance of position sizing is often underestimated.

*   **Survival First**: The wrong size can blow up your account even if your strategy is profitable on average.
*   **Asymmetric Math**: A 50% loss requires a 100% gain to recover. Loss recovery is harder than the original loss.
*   **Variance Management**: Proper sizing smooths returns and reduces the chance of devastating drawdowns.
*   **Emotional Control**: Oversized positions cause emotional panic. Right-sized positions allow you to trade with discipline.
*   **Compounding**: Consistent, right-sized wins compound. Oversized losses break the compounding chain.
*   **Example**: Two traders with the same strategy. One bets 2% per trade; the other bets 30%. The 30% trader may win big initially, but one bad streak ends the journey. The 2% trader survives and compounds.

## Part 2: The Fixed Percentage Method

The simplest and most common approach.

*   **Concept**: [Risk](/glossary#risk) a fixed percentage of your account on each trade.
*   **Common Range**: Professionals typically [risk](/glossary#risk) 0.5%-2% per trade. 1% is a popular choice.
*   **Calculation**:
    *   Account size: $100,000
    *   [Risk](/glossary#risk) per trade: 1% = $1,000
    *   This $1,000 is the maximum you're willing to lose on this trade.
*   **Position Size Formula**: Position Size = [Risk](/glossary#risk) Amount / [Risk](/glossary#risk) Per Share
    *   If your [stop-loss](/glossary#stop-loss) is $2 below your entry, you can buy $1,000 / $2 = 500 shares.
*   **Advantages**: Simple, scales with account size, enforces discipline.
*   **Key Point**: The 1% [risk](/glossary#risk) is based on where your [stop-loss](/glossary#stop-loss) is, not on the position size itself. A $50,000 position could have 1% [risk](/glossary#risk) if the [stop](/glossary#stop-loss) is tight.

## Part 3: The Kelly Criterion

A mathematically optimal sizing method.

*   **Origin**: Developed by John Kelly at Bell Labs for gambling, later applied to investing.
*   **Formula**: Kelly % = W - [(1 - W) / R]
    *   W = Win rate (probability of winning)
    *   R = Win/Loss ratio (average win / average loss)
*   **Example**: Win rate 55%, average win $100, average loss $80. R = 100/80 = 1.25.
    *   Kelly % = 0.55 - (0.45 / 1.25) = 0.55 - 0.36 = 0.19 or 19%.
*   **Interpretation**: Bet 19% of your bankroll on each trade to maximize long-term growth.
*   **In Practice**: Full Kelly is too aggressive. Most use "Half Kelly" or "Quarter Kelly" (9.5% or 4.75% respectively).
*   **Advantages**: Mathematically optimizes growth; adjusts for your edge.
*   **Disadvantages**: Requires accurate estimates of win rate and payoff ratio. Full Kelly has high [volatility](/glossary#volatility).

## Part 4: Volatility-Based Position Sizing

Adjust position size based on the [asset's](/glossary#asset) [volatility](/glossary#volatility).

*   **Concept**: More volatile [assets](/glossary#asset) get smaller positions; less volatile [assets](/glossary#asset) get larger positions. Equalize [risk](/glossary#risk) across trades.
*   **ATR Method**: Use the Average True Range (ATR) to measure [volatility](/glossary#volatility).
    *   Position Size = (Account × [Risk](/glossary#risk) %) / (N × ATR × Price)
    *   N = Number of ATRs for your [stop-loss](/glossary#stop-loss) (e.g., 2 ATRs).
*   **Example**: $100,000 account, 1% [risk](/glossary#risk), ATR = $5, 2 ATR [stop](/glossary#stop-loss).
    *   Position = $1,000 / ($5 × 2) = $1,000 / $10 = 100 shares.
*   **Advantage**: Positions in volatile [stocks](/glossary#stock) are automatically smaller, reducing the chance of large losses from a single high-vol position.
*   **Used By**: Many professional trend followers and CTAs (Commodity Trading Advisors).

## Part 5: Portfolio Heat and Correlated Positions

Consider your total portfolio [risk](/glossary#risk), not just individual positions.

*   **Portfolio Heat**: The total [risk](/glossary#risk) you have open at any time.
*   **Limit Portfolio Heat**: If you [risk](/glossary#risk) 1% per trade and have 10 open positions, your portfolio heat is 10%. But if the positions are correlated, actual [risk](/glossary#risk) is higher.
*   **[Correlation](/glossary#correlation) Adjustment**: Correlated positions (e.g., 5 tech [stocks](/glossary#stock)) should be treated as one position for [risk](/glossary#risk) purposes.
*   **Sector Limits**: Cap exposure to any single sector or theme.
*   **Rule of Thumb**: Many traders limit portfolio heat to 10-20% of account at any time.
*   **Example**: If you have 5 [stocks](/glossary#stock) in the same sector, each [risking](/glossary#risk) 1%, your actual sector [risk](/glossary#risk) is closer to 5% (they'll move together).

## Part 6: Scaling In and Out

Position sizing isn't all-or-nothing.

### Scaling In (Building Positions Gradually)
*   **Concept**: Add to a position as it proves itself (going in your favor).
*   **Example**: Buy half your intended position initially. Add the other half if price breaks [resistance](/glossary#resistance).
*   **Advantage**: Reduces [risk](/glossary#risk) if the initial thesis is wrong.
*   **Disadvantage**: Average cost is higher if the trade works immediately.

### Scaling Out (Taking Profits Gradually)
*   **Concept**: Sell part of the position at the first target; let the rest run.
*   **Example**: Sell half at 2:1 reward/[risk](/glossary#risk); trail a [stop](/glossary#stop-loss) on the remainder.
*   **Advantage**: Locks in some profit while keeping upside exposure.
*   **Psychology**: Easier to hold through pullbacks when you've already taken some profit.

### Pyramiding
*   **Concept**: Add to winners. Increase position size as the trade moves in your favor.
*   **Rule**: Only add at higher prices (for longs) or lower prices (for shorts). Never average down.
*   **[Risk](/glossary#risk) Management**: Each addition should have its own [stop-loss](/glossary#stop-loss).

## Part 7: Common Position Sizing Mistakes

Avoid these traps that destroy accounts.

*   **Risking Too Much**: Betting 10%, 20%, or more per trade. One losing streak ends the game.
*   **No Defined [Stop-Loss](/glossary#stop-loss)**: If you don't know where you'll exit, you can't calculate proper size.
*   **Averaging Down**: Adding to losers, hoping they'll recover. Increases [risk](/glossary#risk) instead of managing it.
*   **Ignoring [Correlation](/glossary#correlation)**: 10 "separate" positions that all move together is really one big position.
*   **Betting Big After Wins**: Increasing size after a winning streak, thinking you're on a roll. Then a loss wipes out all gains.
*   **Betting Big to Recover Losses**: "I need to win this back." This is how accounts blow up.
*   **Inconsistency**: Sizing based on emotion or randomness rather than a systematic approach.
*   **Not Adjusting for [Volatility](/glossary#volatility)**: Treating a [volatile](/glossary#volatility) small-cap [stock](/glossary#stock) the same as a stable blue-chip.

### Best Practices
*   Define your maximum [risk](/glossary#risk) per trade (1-2%) BEFORE entering.
*   Always know your [stop-loss](/glossary#stop-loss) level before calculating position size.
*   Scale back when losing; stay consistent when winning.
*   Treat [correlated](/glossary#correlation) exposure as a single position.
*   Journal every trade to review sizing decisions.

Position sizing is the bridge between strategy and [risk management](/glossary#risk-management). Get it right, and you'll survive long enough for your edge to compound. Get it wrong, and even the best strategy won't save you.
\`,
        keyTakeaways: [
            "Position sizing determines how much capital to allocate to each trade—critical for survival.",
            "The fixed percentage method (risking 1-2% per trade) is simple and effective for most traders.",
            "The Kelly Criterion optimizes growth but is aggressive—use half or quarter Kelly in practice.",
            "Volatility-based sizing equalizes risk across trades—more volatile assets get smaller positions.",
            "Watch portfolio heat and correlated positions—10 tech stocks is really one big bet."
        ]
    },`;

const startMarker = '"pm_5": {';
const endMarker = '"pm_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_5: Position Sizing - VALIDATION ===');
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
console.log('✓ Successfully updated pm_5!');
