const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_12": {
        title: "Consistency is Key",
        content: \`
# Consistency Is Key: The Path to Trading Success

**Consistency** is the single most important quality for long-term trading success. It means following your rules on every trade, maintaining your process through wins and losses, and showing up day after day with the same discipline. Consistent execution is what allows a trading edge to manifest over time.

Without consistency, even the best strategy is worthless. With it, even a modest edge compounds into substantial results.

## Part 1: What Is Consistency in Trading?

Defining what it truly means to be consistent.

*   **Rule Adherence**: Following your trading rules on every single trade, without exception.
*   **Process Execution**: Using the same pre-trade, during-trade, and post-trade processes.
*   **Emotional Stability**: Approaching each trade with similar emotional equilibrium, regardless of recent results.
*   **[Risk Management](/glossary#risk-management)**: Applying the same position sizing and [stop-loss](/glossary#stop-loss) rules consistently.
*   **Showing Up**: Being present and prepared for trading during your scheduled hours.
*   **Continuous Improvement**: Consistently reviewing, learning, and refining your approach.
*   **Long-Term Commitment**: Staying the course through drawdowns, plateaus, and challenges.

## Part 2: Why Consistency Matters

The fundamental importance of consistent execution.

*   **Edge Manifestation**: Your trading edge only appears over many trades. Inconsistent execution means no edge.
*   **Statistical Relevance**: Random execution creates random results. Consistency creates measurable patterns.
*   **Compound Effect**: Small advantages, consistently applied, compound into large results over time.
*   **Rule Validation**: You can't evaluate whether your rules work if you don't follow them consistently.
*   **Emotional Ground**: Consistent process provides stability when results are volatile.
*   **Professional Standard**: Institutions demand consistency. Individual traders should too.
*   **Trust Building**: You build trust in yourself by following through on commitments repeatedly.

## Part 3: The Challenge of Consistency

Why consistency is so hard to maintain.

*   **Emotional Interference**: Fear, greed, and boredom push us to deviate from rules.
*   **Winning Changes Behavior**: After wins, we become overconfident and take larger, riskier trades.
*   **Losing Changes Behavior**: After losses, we become fearful and deviate from our process.
*   **Boredom**: Following the same rules day after day isn't exciting.
*   **Market Temptations**: Every day, the market offers seemingly compelling reasons to break rules.
*   **Short Memory**: We forget past lessons and repeat old mistakes.
*   **Fatigue**: Mental discipline wears down, especially after extended trading sessions.
*   **Illusion of Special Cases**: We convince ourselves that "this time is different" and deserves an exception.

## Part 4: Building Consistent Habits

Practical strategies for developing consistency.

*   **Written Trading Plan**: You can't consistently follow what you haven't defined. Write it down.
*   **Checklists**: Use pre-trade checklists to ensure consistent analysis and execution.
*   **Routines**: Same preparation, same process, same review. Routines create consistency.
*   **Small Positions**: Consistency is easier with less money at stake. Start small.
*   **Tracking Compliance**: Record whether each trade followed rules. Calculate your consistency score.
*   **Accountability**: Tell someone your rules. Report your trades. External pressure helps.
*   **Celebrate Discipline**: Reward yourself for following rules, not just for profits.
*   **Start Fresh Daily**: Each day is a new opportunity to execute consistently, regardless of yesterday.

## Part 5: Consistency Through Different Conditions

Maintaining consistency when circumstances change.

*   **During Winning Streaks**: Don't increase size, don't get sloppy. The market will test your discipline.
*   **During Losing Streaks**: Don't panic, don't abandon strategy. Trust the process. Maybe reduce size.
*   **In Volatile Markets**: Same rules apply. Volatility justifies smaller size, not abandoned rules.
*   **In Quiet Markets**: Fewer setups is not a reason to lower standards.
*   **When Life Intrudes**: Stressed? Distracted? Reduce trading or skip the day. Consistency includes knowing when not to trade.
*   **Over Time**: Markets evolve. Consistent process includes periodic review and refinement.
*   **Across Assets**: Same discipline applies whether trading [stocks](/glossary#stock), [forex](/glossary#forex), or [crypto](/glossary#cryptocurrency).

## Part 6: Measuring and Improving Consistency

Tracking and enhancing your consistency over time.

*   **Consistency Score**: Percentage of trades that fully followed your rules. Track weekly.
*   **Deviation Log**: Record every rule violation and why it happened.
*   **Pattern Analysis**: What conditions trigger inconsistency? Time of day? Size of losses?
*   **Root Cause Work**: Address underlying causes, not just symptoms.
*   **Incremental Improvement**: Aim to improve consistency score by 5% each month.
*   **Feedback Loop**: Review consistency weekly, adjust approach, measure again.
*   **Long-Term Tracking**: Over months, consistency should trend upward.

## Part 7: The Compound Payoff of Consistency

How consistent execution creates extraordinary results.

*   **Small Edge + Many Trades**: A consistent 1% edge over 1,000 trades is substantial.
*   **Avoiding Big Mistakes**: Consistent [risk management](/glossary#risk-management) prevents the blow-ups that end trading careers.
*   **Psychological Confidence**: Each consistent trade reinforces trust in yourself and your process.
*   **Objective Feedback**: Consistent execution allows you to evaluate and improve your strategy objectively.
*   **Survivorship**: The consistent traders are the ones still trading after 5, 10, 20 years.
*   **Professional Identity**: Consistency transforms you from a gambler into a professional trader.
*   **The Long Game**: Trading is a marathon. Consistency is the pace that gets you to the finish line.

Consistency isn't glamorous. There are no headlines for "Trader Follows Rules for 500th Consecutive Day." But consistency is what separates the professionals from the amateurs, the survivors from the blow-ups, and the profitable from the unprofitable. Master consistency, and the results will follow.
\`,
        keyTakeaways: [
            "Consistency means following your rules on every trade, maintaining process through all conditions.",
            "Your edge only manifests over many consistently executed trades—inconsistency destroys edge.",
            "Challenges: emotions after wins/losses, boredom, fatigue, and the illusion of 'special cases.'",
            "Build consistency with written plans, checklists, routines, tracking, and accountability.",
            "The compound payoff: small edges + consistent execution = long-term success and survival."
        ]
    },`;

const startMarker = '"tp_12": {';
const endMarker = '"tp_13": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_12: Consistency is Key - VALIDATION ===');
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
console.log('✓ Successfully updated tp_12!');
