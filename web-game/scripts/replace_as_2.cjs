const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_2": {
        title: "Scalping Strategies",
        content: \`
# Scalping: The Art of Capturing Tiny Moves

**Scalping** is the fastest form of trading, where positions are held for seconds to minutes with the goal of capturing very small price movements repeatedly throughout the day. Scalpers are the sprinters of the trading world—quick, decisive, and always ready to act.

This strategy requires lightning-fast execution, laser-like focus, and ironclad discipline. It's not for everyone, but for those who master it, scalping can provide consistent returns with minimal overnight exposure. The challenge is that everything happens at high speed, leaving little room for hesitation or error.

## Part 1: What Is Scalping?

**Scalping** is an ultra-short-term trading style focused on making many small profits that add up over time.

*   **Definition**: Scalpers aim to profit from tiny price movements—often just a few cents or [pips](/glossary#pip) per trade. They execute dozens or hundreds of trades daily.
*   **Holding Period**: Seconds to a few minutes. Rarely more than 5-10 minutes.
*   **Profit Targets**: Typically 0.1%-0.5% per trade. What matters is consistency and volume.
*   **Stop-Losses**: Very tight—often matching or smaller than the profit target.
*   **Instruments**: Works best in highly liquid markets: large-cap [stocks](/glossary#stock), major [forex](/glossary#forex) pairs (EUR/USD), [futures](/glossary#futures) (ES, NQ), and high-[volume](/glossary#volume) [ETFs](/glossary#etf).
*   **Win Rate**: Scalpers often aim for 55%-70% win rates with small winners and even smaller losers.
*   **Core Philosophy**: "Many small bites make a feast." Instead of hunting for home runs, scalpers take singles consistently.

## Part 2: Why Scalping Works

Understanding the mechanics behind scalping reveals why it can be profitable.

*   **[Liquidity](/glossary#liquidity) Exploitation**: In liquid markets, small price discrepancies and temporary imbalances occur constantly. Scalpers exploit these micro-opportunities.
*   **Bid-Ask [Spread](/glossary#spread)**: Market makers profit from the [spread](/glossary#spread). Scalpers can capture part of this by reading order flow and acting quickly.
*   **Minimal Market Exposure**: By being in trades for only seconds or minutes, scalpers avoid the [risk](/glossary#risk) of major news events or trend reversals.
*   **Compounding Small Wins**: A 0.1% profit per trade doesn't sound impressive, but 20-50 trades a day compounds quickly.
*   **Psychological Edge**: Scalpers get immediate feedback. No agonizing over overnight positions—just rapid resolution.
*   **Technical Setup Frequency**: The market provides new scalping setups constantly on short timeframes.

## Part 3: Essential Requirements for Scalping

Scalping demands specific infrastructure and conditions that not all traders can provide.

*   **Ultra-Fast Execution**: You need a direct-access broker with minimal latency. Standard retail platforms may be too slow.
*   **Low Commissions**: With hundreds of trades, even small fees add up. Commission-free or per-share pricing is essential.
*   **Tight [Spreads](/glossary#spread)**: Only trade instruments with very tight bid-ask [spreads](/glossary#spread). Wide [spreads](/glossary#spread) make scalping impossible.
*   **Level 2 / Depth of Market**: Seeing the order book is crucial for reading supply and demand in real-time.
*   **Fast, Reliable Internet**: Milliseconds matter. A lag can turn a winning trade into a loser.
*   **Multiple Monitors**: Most scalpers use 2-4 monitors to track charts, order flow, news, and positions simultaneously.
*   **Hot Keys**: Pre-programmed buy/sell keys for instant order execution. Mouse clicks are too slow.
*   **Trading Platform**: Professional platforms like DAS Trader, Sterling, or broker-specific direct access tools.
*   **Mental Stamina**: Scalping is mentally exhausting. It requires sustained focus for hours.

## Part 4: Common Scalping Strategies

There are several approaches scalpers use to find their edge.

### 1. Order Flow Scalping
*   Watch Level 2 for large orders (icebergs, walls).
*   Enter when you see aggressive buying/selling overwhelming the book.
*   Exit when the move stalls or reverses.

### 2. Tape Reading
*   Monitor the Time & Sales (the "tape") for patterns.
*   Look for acceleration in trade speed and size indicating momentum.
*   Jump in with momentum; exit at the first sign of slowing.

### 3. Range Scalping
*   Identify a tight consolidation range on a 1-minute chart.
*   Buy at [support](/glossary#support); sell at [resistance](/glossary#resistance).
*   Use very tight [stops](/glossary#stop-loss) if the range breaks.

### 4. [Breakout](/glossary#breakout) Scalping
*   Watch for consolidation, then enter on [breakout](/glossary#breakout) with [volume confirmation](/glossary#volume).
*   Ride the quick momentum burst; exit at the first pause.
*   False [breakouts](/glossary#breakout) are common—be ready to cut losses immediately.

### 5. News Scalping
*   Trade the immediate reaction to scheduled news (economic data releases, earnings).
*   Extremely fast—often over in 30 seconds.
*   Requires specialized feeds and preparation.

## Part 5: Risk Management for Scalpers

Given the speed and frequency, [risk management](/glossary#risk-management) must be automatic and disciplined.

*   **Max Loss Per Trade**: Define before you enter—typically 0.2%-0.5% of account. Use hard [stop-losses](/glossary#stop-loss).
*   **Daily Loss Limit**: Stop trading if you lose a set amount (e.g., 2% of account). Walk away.
*   **Daily Goal**: Some scalpers set a profit target. Once reached, they stop to preserve gains.
*   **Trade Size Consistency**: Use the same position size for every trade. Don't increase size after losses (revenge trading).
*   **[Spread](/glossary#spread) Awareness**: If the [spread](/glossary#spread) widens suddenly, step back. Don't force trades.
*   **Avoid News Surprises**: Know the economic calendar. Big news can blow through [stops](/glossary#stop-loss).
*   **Review Daily**: Track every trade. Identify patterns in mistakes.

## Part 6: Advantages and Disadvantages

### Advantages
*   **Minimal Overnight [Risk](/glossary#risk)**: All positions closed by end of day.
*   **High Trade Frequency**: Many opportunities regardless of market direction.
*   **Quick Feedback**: Immediate results—no waiting days for a trade to play out.
*   **Works in Any Market Condition**: Scalpers profit from [volatility](/glossary#volatility), not direction.
*   **Capital Efficiency**: Can generate meaningful returns from smaller accounts (with proper [leverage](/glossary#leverage)).

### Disadvantages
*   **Extremely Stressful**: Requires intense focus for hours. Burnout is common.
*   **High Transaction Costs**: Even with low commissions, volume adds up.
*   **Requires Infrastructure**: Professional tools, fast internet, multiple monitors.
*   **Tight Margins**: One big loss can wipe out many small wins.
*   **Not Passive**: This is active, real-time trading. No "set and forget."
*   **Slippage [Risk](/glossary#risk)**: In fast markets, you may not get your expected price.

## Part 7: Is Scalping Right for You?

Scalping is a specialized skill that rewards certain personality types.

### You Might Succeed at Scalping If:
*   You thrive under pressure and make fast decisions well.
*   You can maintain focus for extended periods without fatigue.
*   You're disciplined about cutting losses immediately without hesitation.
*   You have access to professional-grade tools and fast execution.
*   You can emotionally handle many small losses as the price of doing business.
*   You prefer immediate resolution over waiting for trades to develop.

### You Might Struggle With Scalping If:
*   You need time to analyze and deliberate before acting.
*   You get frustrated by frequent small losses.
*   You tend to hold losing trades hoping they'll turn around.
*   You don't have access to fast execution and tight [spreads](/glossary#spread).
*   You find high-pressure environments exhausting or anxiety-inducing.

### Starting Out
*   Practice on a simulator with realistic execution speeds.
*   Start with 5-10 trades per day, not 50-100.
*   Focus on one instrument until you master the patterns.
*   Track every trade, analyze your results, and iterate.
*   Expect to spend months (not days) developing consistency.

Scalping is the extreme end of trading—fast, intense, and demanding. For those who master it, it offers a unique edge in capturing the market's constant micro-movements.
\`,
        keyTakeaways: [
            "Scalping captures tiny price moves (0.1%-0.5%) repeatedly—seconds to minutes per trade.",
            "Requires ultra-fast execution, tight spreads, low commissions, and professional tools.",
            "Common strategies: order flow, tape reading, range trading, and breakout scalping.",
            "Risk management is critical: daily loss limits, consistent sizing, and immediate stop-losses.",
            "Scalping suits decisive, high-pressure personalities with access to proper infrastructure."
        ]
    },`;

const startMarker = '"as_2": {';
const endMarker = '"as_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_2: Scalping Strategies - VALIDATION ===');
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
console.log('✓ Successfully updated as_2!');
