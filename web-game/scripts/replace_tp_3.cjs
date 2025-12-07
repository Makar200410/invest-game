const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_3": {
        title: "Confirmation Bias",
        content: \`
# Confirmation Bias: Seeing What You Want to See

**Confirmation bias** is the tendency to seek out, interpret, and remember information that confirms your existing beliefs while ignoring or dismissing contradictory evidence. In trading, this bias causes you to find reasons why your position is right, even when the market is telling you otherwise.

Confirmation bias is one of the most dangerous cognitive errors in trading because it feels like rational analysis—but it's actually self-deception. Overcoming it requires active effort to challenge your own views.

## Part 1: What Is Confirmation Bias?

Understanding this universal human tendency.

*   **Definition**: The tendency to favor information that supports what you already believe.
*   **How It Works**:
    *   You form an opinion (e.g., "This [stock](/glossary#stock) will go up").
    *   You selectively notice evidence supporting that opinion.
    *   You discount or ignore evidence against it.
    *   You're more confident in your view, but less accurate.
*   **Universal Problem**: Everyone has confirmation bias. Scientists, doctors, lawyers—and traders.
*   **Why It Exists**: Our brains prefer consistency. Contradictory information creates cognitive dissonance, which is uncomfortable.
*   **In Trading**: Confirmation bias causes you to hold losing positions, ignore warning signs, and miss exit signals.

## Part 2: How Confirmation Bias Appears in Trading

Specific manifestations in market decisions.

*   **Selective Research**: You read bullish articles about a [stock](/glossary#stock) you own, but skip bearish ones.
*   **Interpreting News**: Neutral news is seen as positive for your position; negative news is dismissed as temporary.
*   **Ignoring [Stop-Losses](/glossary#stop-loss)**: "The chart still looks good" when price has clearly broken down.
*   **Choosing Indicators**: You add indicators until one confirms your bias, ignoring the five that don't.
*   **Social Echo Chambers**: You follow analysts who agree with you, unfollowing those who challenge your views.
*   **Forgetting Losses**: You remember your winning trades vividly but forget the losers that should have taught you something.
*   **Rationalization**: When a trade goes against you, you invent new reasons why it will work out.

## Part 3: The Dangers in Trading

Why confirmation bias destroys trading accounts.

*   **Holding Losers Too Long**: You keep finding reasons not to sell, even as losses mount.
*   **Adding to Losing Positions**: "It's even cheaper now!" Averaging down based on hope, not analysis.
*   **Missing Valid Exits**: The exit signal fires, but you ignore it because it doesn't fit your narrative.
*   **Overconfidence**: You believe you've done thorough research, but you've only read one side.
*   **Larger Position Sizes**: False confidence leads to betting bigger than you should.
*   **Ignoring [Risk](/glossary#risk)**: You convince yourself the [risk](/glossary#risk) isn't real because you've filtered it out of your analysis.
*   **Repeated Mistakes**: If you don't honestly review losses, you don't learn—and repeat the same errors.

## Part 4: Recognizing Confirmation Bias in Yourself

Self-awareness is the first defense.

*   **Notice Selective Reading**: Are you only reading content that agrees with your position?
*   **Check Your Reactions**: Do you feel defensive when someone disagrees with your thesis?
*   **Monitor Rationalization**: Are you inventing new reasons to hold a position that's going against you?
*   **Ask "What Would Change My Mind?"**: If you can't answer this, you're not being objective.
*   **Review Your Sources**: Are the analysts you follow all bullish on your positions? That's suspicious.
*   **Post-Trade Honesty**: When a trade fails, do you objectively analyze why, or make excuses?
*   **The Discomfort Test**: Objective analysis should sometimes make you uncomfortable. If it never does, you're filtering.

## Part 5: Strategies to Overcome Confirmation Bias

Active techniques to fight this natural tendency.

*   **Seek Disconfirming Evidence**: Before entering a trade, actively search for reasons it will fail.
*   **Play Devil's Advocate**: Argue the opposite side of your trade. Make the bearish case for your long position.
*   **Pre-Define Invalidation**: Write down what would prove your thesis wrong BEFORE entering. Honor it.
*   **Diversify Your Sources**: Read analysts with different views. Follow both bulls and bears.
*   **Trust Price, Not Narrative**: If price is falling despite your bullish view, price is right. You're wrong.
*   **Blind Analysis**: Analyze charts without knowing the ticker. Does the setup look good without the story?
*   **Trading Partner**: Have someone challenge your thesis before you trade. Require yourself to defend it objectively.
*   **[Stop-Losses](/glossary#stop-loss) Are Objective**: A [stop-loss](/glossary#stop-loss) triggers based on price, not on your opinion. Use them.

## Part 6: Building Objective Thinking Habits

Develop systems that force objectivity.

*   **Checklists**: Create a checklist of criteria that must be met for a trade. Follow it mechanically.
*   **Written Trading Plans**: Document your thesis, entry, exit, and invalidation BEFORE trading. Review it during.
*   **Journaling**: Record why you entered, how you felt, and what actually happened. Review regularly.
*   **Quantify Your Thesis**: "I think it will go up" is vague. "I expect a 15% move in 4 weeks based on X" is testable.
*   **Market Review Process**: Weekly, honestly assess which views were right and wrong. No rationalization.
*   **Probabilistic Thinking**: Trade in probabilities, not certainties. "60% chance of success" acknowledges you could be wrong.
*   **Timeouts After Losses**: Take a break before re-entering a losing position. Fresh eyes see more clearly.

## Part 7: The Deeper Lesson

Confirmation bias reveals something important about humility.

*   **The Market Doesn't Care**: Your opinion, your analysis, your ego—none of it matters to the market. Price moves where price moves.
*   **Being Right vs. Making Money**: You can be "right" about the fundamentals and still lose money on a trade.
*   **Flexibility Wins**: The best traders update their views when evidence changes. They're not married to opinions.
*   **Ego Is the Enemy**: Confirmation bias is ego protection. The market punishes ego.
*   **Respect Uncertainty**: No one knows the future. Trade with humility and appropriate position sizes.
*   **Continuous Improvement**: Overcoming confirmation bias is a lifelong practice, not a one-time fix.
*   **The Ultimate Filter**: When in doubt, ask: "Would I enter this trade fresh today, or am I just holding because I'm already in?" Let the answer guide you.

Confirmation bias feels comfortable because it tells you what you want to hear. But comfort in trading is often a warning sign. Seek discomfort, challenge your views, and let the market—not your ego—define reality.
\`,
        keyTakeaways: [
            "Confirmation bias makes you seek information that supports your position while ignoring contradictions.",
            "In trading, this leads to holding losers, missing exits, and overconfidence based on filtered research.",
            "Recognize it by noticing selective reading, defensiveness, and constant rationalization.",
            "Overcome it by actively seeking disconfirming evidence and playing devil's advocate.",
            "Trust price over narrative—if the market disagrees with your thesis, update your thesis."
        ]
    },`;

const startMarker = '"tp_3": {';
const endMarker = '"tp_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_3: Confirmation Bias - VALIDATION ===');
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
console.log('✓ Successfully updated tp_3!');
