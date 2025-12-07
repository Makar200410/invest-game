const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_10": {
        title: "Developing a Trader's Mindset",
        content: \`
# Developing a Trader's Mindset: Thinking Like a Professional

A **trader's mindset** is the mental framework that enables consistent, profitable trading. It encompasses how you think about [risk](/glossary#risk), handle uncertainty, respond to outcomes, and approach the markets. Without the right mindset, even the best strategy will fail.

Developing this mindset takes time and deliberate practice. It's not about personality—it's about learned thought patterns that anyone can develop.

## Part 1: What Is the Trader's Mindset?

Defining the mental characteristics of successful traders.

*   **Probability Thinking**: Understanding that any trade can lose, and that success is measured over many trades.
*   **Emotional Equilibrium**: Not too high after wins, not too low after losses. Steady.
*   **Process Focus**: Judging yourself on execution, not on outcomes you can't control.
*   **[Risk](/glossary#risk) Acceptance**: Fully accepting the [risk](/glossary#risk) of each trade before entering.
*   **Adaptability**: Quickly adjusting to new information without ego attachment.
*   **Patience**: Waiting for the right opportunities, comfortable with inaction.
*   **Discipline**: Following rules consistently, especially when it's hard.
*   **Growth Orientation**: Viewing mistakes as learning opportunities, not failures.

## Part 2: Probability Thinking

The foundation of a professional mindset.

*   **Individual Trades Are Uncertain**: Any single trade can win or lose. Accept this fully.
*   **Edge Plays Out Over Time**: Your advantage only manifests over many trades, not on any particular one.
*   **Think in Samples**: One trade means almost nothing. 100 trades reveal your edge.
*   **Win Rate Isn't Everything**: A 40% win rate can be highly profitable with good [risk](/glossary#risk)/reward.
*   **Losing Streaks Are Normal**: Even with 60% win rate, you'll have 5-10 loss streaks. It's statistics, not bad luck.
*   **Detach from Outcomes**: Did you follow your plan? That's what matters, regardless of the result.
*   **The Casino Analogy**: Casinos don't care about individual gamblers winning—they care about the aggregate. Think like the casino.

## Part 3: Emotional Equilibrium

Maintaining steady emotions through wins and losses.

*   **The Danger of Highs**: Euphoria after wins leads to overconfidence, larger positions, and carelessness.
*   **The Danger of Lows**: Depression after losses leads to fear, hesitation, and revenge trading.
*   **The Goal**: Stay in the middle. Professional. Steady.
*   **Techniques**:
    *   Don't celebrate wins excessively.
    *   Don't catastrophize losses.
    *   Take breaks after significant emotional events.
    *   Maintain perspective—this is one trade of thousands.
*   **Physical State Matters**: Sleep, exercise, and diet affect emotional regulation.
*   **Awareness Practice**: Notice when emotions are running high. Pause before acting.
*   **The Baseline**: After a trade, your emotional state should return to neutral quickly.

## Part 4: Process Over Outcome

Focusing on what you can control.

*   **You Control Process**: Your analysis, entry, [stop-loss](/glossary#stop-loss), and execution are in your hands.
*   **You Don't Control Outcome**: The market decides whether you win or lose.
*   **Judge Yourself Correctly**: A losing trade that followed all rules is a success. A winning trade that broke rules is a failure.
*   **Why This Matters**: If you judge by outcomes, you'll reinforce bad habits when they get lucky.
*   **The Surgeon Analogy**: A surgeon is judged by technique, not by whether every patient survives.
*   **Trading Journal Focus**: Record whether you followed your plan, not just P&L.
*   **Long-Term Benefit**: Good process consistently applied produces good outcomes over time.

## Part 5: Risk Acceptance

Fully embracing the possibility of loss.

*   **Before Every Trade**: Accept that you might lose the amount at [risk](/glossary#risk). Truly accept it.
*   **If You Can't Accept the [Risk](/glossary#risk)**: Trade smaller until you can. Position too large = emotional trading.
*   **Pre-Trade Ritual**: "I accept that this trade might lose [X amount]. I'm okay with that outcome."
*   **No Hoping**: Enter expecting to execute your plan, not hoping for a specific outcome.
*   **The Freedom of Acceptance**: Once you fully accept the [risk](/glossary#risk), there's nothing to fear. You can execute cleanly.
*   **No Surprises**: When a [stop-loss](/glossary#stop-loss) triggers, it should feel normal, not shocking.
*   **[Risk](/glossary#risk) as Expense**: Think of [risk](/glossary#risk) as the cost of being in the game. You pay it willingly.

## Part 6: Continuous Learning and Adaptation

The growth-oriented mindset.

*   **Every Trade Teaches**: Wins and losses both have lessons if you look for them.
*   **Mistakes Are Data**: A mistake isn't a failure—it's information for improvement.
*   **Markets Evolve**: What worked last year may not work next year. Stay a student.
*   **Review and Reflect**: Regular journaling and analysis identify areas for growth.
*   **Intellectual Humility**: You don't know everything. Be open to being wrong.
*   **Learn from Others**: Study successful traders, books, and courses. Stand on giants' shoulders.
*   **Experiment Carefully**: Try new things, but with small size until validated.
*   **Never "Arrive"**: There's no endpoint where you've mastered trading. It's a lifelong journey.

## Part 7: Building the Mindset Daily

Practical habits for developing trader psychology.

*   **Morning Routine**: Start each day with a clear head. Review goals and rules.
*   **Pre-Market Preparation**: Identify opportunities in advance. Enter the day with a plan.
*   **Mindfulness Practice**: Even 10 minutes of meditation improves emotional regulation.
*   **Post-Trade Ritual**: After each trade, breath, note the outcome, and reset emotionally.
*   **End-of-Day Review**: What went well? What needs work? Journal honestly.
*   **Physical Health**: Exercise, sleep, and nutrition directly impact mental performance.
*   **Community and Support**: Connect with other serious traders for perspective and accountability.
*   **Read Trading Psychology**: Books like "Trading in the Zone" reinforce the right mental models.

The trader's mindset isn't something you're born with—it's something you build. Every day, with every trade, you're either strengthening or weakening these mental patterns. Choose deliberately, and the mindset will develop.
\`,
        keyTakeaways: [
            "The trader's mindset includes probability thinking, emotional equilibrium, and a focus on process.",
            "Think in probabilities: any trade can lose, but your edge plays out over many trades.",
            "Maintain steady emotions—don't get too high after wins or too low after losses.",
            "Focus on process (what you control), not outcomes (what the market controls).",
            "Fully accept the risk of every trade before entering—this enables clean execution."
        ]
    },`;

const startMarker = '"tp_10": {';
const endMarker = '"tp_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_10: Developing a Traders Mindset - VALIDATION ===');
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
console.log('✓ Successfully updated tp_10!');
