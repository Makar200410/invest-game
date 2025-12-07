const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_2": {
        title: "FOMO (Fear Of Missing Out)",
        content: \`
# FOMO: The Fear of Missing Out

**FOMO**—the Fear Of Missing Out—is one of the most destructive emotions in trading. It's the panicked feeling that everyone else is making money while you're being left behind. FOMO causes traders to chase trades, buy at tops, ignore their rules, and ultimately lose money trying to catch moves that have already happened.

Understanding FOMO and learning to resist it is essential for trading survival. The trades you don't take are often as important as the ones you do.

## Part 1: What Is FOMO?

FOMO is the anxiety that comes from believing others are profiting while you're missing out.

*   **Definition**: A pervasive feeling that you need to act immediately or miss a profitable opportunity.
*   **Symptoms**:
    *   Buying after a [stock](/glossary#stock) has already made a big move.
    *   Entering trades without proper analysis just to "get in."
    *   Feeling anxious when you see others posting gains.
    *   Abandoning your watchlist to chase whatever is moving.
    *   Increasing position sizes to "make up for" missed trades.
*   **The Trigger**: Social media, trading groups, news headlines, and watching assets rally create intense FOMO pressure.
*   **The Danger**: FOMO short-circuits rational thinking and leads to poor decisions made in emotional haste.

## Part 2: Why FOMO Is So Powerful

FOMO exploits fundamental human psychology.

*   **Social Proof**: We're wired to follow the crowd. If everyone is buying, it must be right... right? Often wrong.
*   **Loss Aversion**: Missing out feels like a loss. Psychologically, we fear losses more than we value equivalent gains.
*   **Regret Minimization**: We want to avoid future regret ("I should have bought Bitcoin in 2015!").
*   **Scarcity Mindset**: We believe opportunities are rare and won't come again—even though markets constantly create new opportunities.
*   **Dopamine Seeking**: The rush of catching a big move is addictive. We chase that high.
*   **Comparison Culture**: Social media curates success stories, making it seem like everyone is winning except you. They're not showing their losses.

## Part 3: How FOMO Destroys Accounts

The specific mechanisms by which FOMO leads to losses.

*   **Buying Tops**: FOMO peaks when prices peak. You buy at the worst possible time.
*   **Chasing Extended Moves**: Entering after the easy gains are made, just in time for the pullback.
*   **Oversized Positions**: Trying to make up for "missed gains" by betting too big on the current trade.
*   **Ignoring [Risk Management](/glossary#risk-management)**: Not using [stop-losses](/glossary#stop-loss) because "it can only go up from here."
*   **Abandoning Strategy**: Your rules say wait for a pullback, but FOMO says buy now. You follow FOMO.
*   **Selling Winners Too Early**: You exit good positions to chase shinier objects, missing the real gains.
*   **Account Blow-Up Pattern**: FOMO → Chase → Buy High → Panic → Sell Low → Repeat. Eventually, nothing is left.

## Part 4: Recognizing FOMO in Yourself

Self-awareness is the first step to overcoming FOMO.

*   **Physical Signs**: Racing heart, anxiety, feeling rushed, can't think clearly.
*   **Mental Signs**: "I have to get in NOW," "This is the one," "Everyone else is making money."
*   **Behavioral Signs**: Opening trades without proper analysis, refreshing social media for tips, watching price obsessively.
*   **Time Pressure**: FOMO creates false urgency. If you feel you must act RIGHT NOW, that's a red flag.
*   **Check Your Motivation**: Are you entering because it fits your strategy, or because you're afraid of missing out?
*   **The Pause Test**: Before entering, wait 10 minutes. If the urgency fades, it was FOMO.

## Part 5: Strategies to Combat FOMO

Practical techniques to resist the FOMO urge.

*   **Stick to Your Plan**: A written trading plan provides rules to follow when emotions scream to deviate.
*   **Wait for Pullbacks**: Most strong moves have retracements. Missing the first leg means you can catch the next.
*   **Set Alerts, Don't Watch**: Define your entry criteria and set alerts. Watching every tick fuels FOMO.
*   **Limit Social Media**: Trading Twitter/Reddit during market hours is FOMO fuel. Check sparingly or not at all.
*   **Remember the Losers**: For every winner someone posts, there are dozens of losers they don't mention.
*   **Trust Your Strategy**: If your approach is sound, it will produce opportunities. You don't need THIS trade.
*   **"There's Always Another Trade"**: Markets create opportunities every day. Missing one is not a catastrophe.
*   **Journal FOMO Trades**: Write down trades you entered due to FOMO. Review the results. The data will cure you.

## Part 6: Reframing FOMO

Change your perspective on "missing out."

*   **Missing Trades Is Normal**: Professional traders miss setups constantly. It's fine.
*   **Capital Preservation**: Not losing money on a bad entry is a win, even if the trade would have worked.
*   **Opportunity Cost Is Real**: Chasing one trade means missing another that might have been better.
*   **Quality Over Quantity**: One well-planned trade beats ten FOMO chases.
*   **Long-Term View**: Over a career, thousands of trades will happen. This one doesn't matter.
*   **You Only See Winners**: People don't post their losses. What looks like everyone winning is highly curated.
*   **Patience Pays**: The best traders wait for high-probability setups. They're okay with missing lower-quality trades.

## Part 7: Building FOMO Resilience

Develop the mental fortitude to resist FOMO consistently.

*   **Define Your Edge**: Know exactly what setups you trade best. Only take those.
*   **Pre-Define Entries**: Before the market opens, know exactly what would trigger a trade. If it doesn't meet criteria, no trade.
*   **Review Past FOMO Trades**: Most were likely losers or underperformers. Let the data convince you.
*   **Practice Discipline in Small Doses**: Intentionally skip marginal trades, even if they work. Build the muscle.
*   **Celebrate Not Trading**: A day with no valid setups and no trades is a successful day.
*   **Mindfulness Practices**: Meditation and breathing exercises help create space between emotion and action.
*   **Accountability**: Share your rules with a trusted trading partner. Explain your entries to them. It's harder to justify FOMO.

FOMO is a constant battle. Markets are designed to trigger it—big moves, headlines, the fear of being left behind. The traders who succeed are those who recognize FOMO, resist it, and maintain discipline when others are panicking to get in.
\`,
        keyTakeaways: [
            "FOMO is the anxiety that you're missing profits others are making—it leads to chasing and buying tops.",
            "FOMO exploits human psychology: social proof, loss aversion, and scarcity mindset.",
            "Recognize FOMO by physical urgency, rushed thinking, and abandoning your strategy.",
            "Combat FOMO by sticking to your plan, waiting for pullbacks, and limiting social media.",
            "Remember: there's always another trade. Missing one doesn't matter over a career of thousands."
        ]
    },`;

const startMarker = '"tp_2": {';
const endMarker = '"tp_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_2: FOMO (Fear Of Missing Out) - VALIDATION ===');
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
console.log('✓ Successfully updated tp_2!');
