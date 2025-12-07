const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_1": {
        title: "Fear & Greed",
        content: \`
# Fear & Greed: The Twin Emotions of Trading

**Fear** and **greed** are the two most powerful emotions in financial markets. They drive market cycles, create bubbles and crashes, and cause individual traders to make costly mistakes. Understanding these emotions—both in yourself and in the broader market—is essential for trading success.

The greatest edge in trading isn't a better strategy; it's the ability to control your emotions when others cannot. Markets are driven by human psychology, and those who master their emotions have a significant advantage.

## Part 1: Understanding Fear in Trading

Fear is the emotion that protects us from danger—but in trading, it often causes more harm than good.

*   **What Fear Looks Like**:
    *   Hesitating to enter a valid trade setup.
    *   Exiting winners too early, leaving money on the table.
    *   Refusing to take any trades after a losing streak.
    *   Paralysis during market volatility.
    *   Moving [stop-losses](/glossary#stop-loss) to avoid realizing a loss.
*   **Root Causes**:
    *   Fear of losing money.
    *   Fear of being wrong.
    *   Fear of missing out (FOMO).
    *   Past traumatic trading experiences.
*   **Physiological Effects**: Fear triggers the "fight or flight" response. Heart rate increases, thinking becomes clouded, and rational analysis gives way to panic.
*   **Market Context**: Extreme fear in the broader market often creates buying opportunities (Warren Buffett: "Be greedy when others are fearful").

## Part 2: Understanding Greed in Trading

Greed is the desire for more, more, more—and it's equally destructive as fear.

*   **What Greed Looks Like**:
    *   Holding winners too long, watching profits evaporate.
    *   Increasing position size after wins (overconfidence).
    *   Ignoring [stop-losses](/glossary#stop-loss) because "it'll come back."
    *   Chasing trades after they've already run.
    *   Refusing to take profits at targets.
*   **Root Causes**:
    *   Desire for quick wealth.
    *   Ego—wanting to be right.
    *   Comparing yourself to others who seem to make more.
    *   Unrealistic expectations about returns.
*   **The Trap**: Greed convinces you that every trade could be "the big one." This leads to poor [risk management](/glossary#risk-management) and oversized bets.
*   **Market Context**: Extreme greed in the broader market often signals impending corrections (think: dot-com bubble, crypto mania).

## Part 3: The Fear & Greed Cycle

Fear and greed create predictable market cycles.

*   **Bull Market (Greed Dominates)**:
    1. Optimism → Excitement → Euphoria ("Prices can only go up!")
    2. Position sizes increase, [risk](/glossary#risk) is ignored.
    3. Late buyers rush in (FOMO).
    4. Market peaks when greed is maximum.
*   **Bear Market (Fear Dominates)**:
    1. Anxiety → Denial → Panic → Capitulation
    2. Everyone sells, often at the worst time.
    3. Market bottoms when fear is maximum.
*   **The Cycle Repeats**: This pattern has repeated for centuries. Understanding it helps you avoid being swept up in the crowd.
*   **Contrarian Opportunity**: The best trades often feel the most uncomfortable—buying when everyone is fearful, selling when everyone is greedy.

## Part 4: The Fear & Greed Index

Quantifying market sentiment helps identify extremes.

*   **CNN Fear & Greed Index**: Measures seven factors to create a score from 0 (Extreme Fear) to 100 (Extreme Greed).
*   **Factors Measured**:
    *   Stock price momentum
    *   Stock price strength
    *   Stock price breadth
    *   Put/call ratio
    *   Market [volatility](/glossary#volatility) (VIX)
    *   Safe haven demand
    *   Junk [bond](/glossary#bond) demand
*   **Using the Index**:
    *   Extreme Fear (0-25): Potential buying opportunity.
    *   Neutral (45-55): Market is balanced.
    *   Extreme Greed (75-100): Potential selling opportunity, exercise caution.
*   **Not a Timing Tool**: The index can stay extreme for weeks. Use it as context, not as a timing signal.

## Part 5: Managing Your Own Fear

Practical techniques for controlling fear in your trading.

*   **Trade Smaller**: If a position causes anxiety, it's too large. Reduce size until you can trade without emotion.
*   **Define [Risk](/glossary#risk) in Advance**: Know exactly how much you can lose before entering. Uncertainty amplifies fear.
*   **Accept Losses as Normal**: Losing trades are part of the game. If you can't accept losses, you can't trade.
*   **Use [Stop-Losses](/glossary#stop-loss)**: Knowing your maximum loss reduces fear of the unknown.
*   **Focus on Process, Not Outcome**: Did you follow your plan? That's success, regardless of the trade result.
*   **Take Breaks After Stress**: If fear is overwhelming, step away. The market will be there tomorrow.
*   **Build Confidence Through Practice**: Paper trade or trade small until the fear subsides naturally.

## Part 6: Managing Your Own Greed

Practical techniques for controlling greed in your trading.

*   **Set Profit Targets in Advance**: Know where you'll take profits before you enter. Write it down.
*   **Take Partial Profits**: Sell half at Target 1, let the rest run. Locks in gains while maintaining upside.
*   **Position Sizing Rules**: Never increase position size based on recent wins. Stick to your rules.
*   **Remember the Goal**: Consistent returns compound. You don't need to hit home runs.
*   **Define "Enough"**: What would success look like? Keep expectations realistic.
*   **Avoid Comparisons**: Someone else's P&L doesn't affect yours. Focus on your own journey.
*   **Celebrate Following the Plan**: Reward yourself for discipline, not just for big wins.

## Part 7: Balancing Fear and Greed

The goal isn't to eliminate emotions—it's to balance them.

*   **Healthy Fear**: Some fear is useful. It prevents reckless trading and enforces [risk management](/glossary#risk-management).
*   **Healthy Ambition**: Some desire for profit motivates you to put in the work and take calculated [risks](/glossary#risk).
*   **The Sweet Spot**: Act with confidence (not arrogance) and caution (not paralysis).
*   **Trading Plan as Anchor**: A written plan provides objectivity when emotions run high. Follow it.
*   **Self-Awareness**: Notice when fear or greed is influencing your decisions. Pause before acting.
*   **Post-Trade Review**: Ask: "Was that decision rational or emotional?" Learn from emotional mistakes.
*   **Long-Term Perspective**: Individual trades matter less than cumulative results over hundreds of trades.

Mastering fear and greed is a lifelong journey. The markets will constantly test your emotions. Those who develop emotional discipline will thrive; those who don't will be consumed by the very emotions that drive market cycles.
\`,
        keyTakeaways: [
            "Fear causes hesitation, early exits, and paralysis—often leading to missed opportunities.",
            "Greed causes overtrading, holding too long, and ignoring risk—often leading to blown accounts.",
            "Market cycles are driven by collective fear and greed: bottoms form in fear, tops in euphoria.",
            "Manage fear by trading smaller, using stop-losses, and accepting losses as normal.",
            "Manage greed by setting targets in advance, taking partial profits, and keeping expectations realistic."
        ]
    },`;

const startMarker = '"tp_1": {';
const endMarker = '"tp_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_1: Fear & Greed - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 7000-13000');
console.log('Status:', (charCount >= 7000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated tp_1!');
