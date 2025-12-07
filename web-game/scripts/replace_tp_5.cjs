const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_5": {
        title: "The Gambler's Fallacy",
        content: \`
# The Gambler's Fallacy: When Random Feels Predictable

The **Gambler's Fallacy** is the mistaken belief that past random events affect the probability of future random events. In trading, this manifests as believing that a [stock](/glossary#stock) is "due" to reverse after a streak, or that a series of wins means a loss is coming. Understanding this fallacy prevents costly logical errors.

Markets have memory in some ways (trends, momentum), but individual trades are often more random than we'd like to believe. Confusing pattern with randomness leads to poor decisions.

## Part 1: What Is the Gambler's Fallacy?

Understanding this classic cognitive error.

*   **Definition**: The belief that if something happens more frequently than normal during a period, it will happen less frequently in the future (or vice versa).
*   **The Classic Example**: A roulette wheel lands on red 10 times in a row. Gamblers pile on black, thinking it's "due." But the wheel has no memory—each spin is independent.
*   **The Reality**: Independent events don't affect each other. The probability of red on the 11th spin is still 47.4%, exactly the same as always.
*   **Why We Fall for It**: Our brains are pattern-seeking machines. We see streaks and expect balance to return.
*   **In Trading**: "This [stock](/glossary#stock) has been up 5 days in a row—it has to go down." Not necessarily.

## Part 2: How It Appears in Trading

Specific manifestations of the fallacy in market decisions.

*   **Expecting Reversals**: A [stock](/glossary#stock) has fallen for several days, so you buy expecting a bounce. The trend may continue.
*   **Expecting Continuations to End**: A winning streak feels unsustainable, so you exit early. The trend may continue longer.
*   **Position Sizing After Streaks**: You increase size after losses because "a win is due." But wins aren't due—they depend on your edge, not recent results.
*   **Ignoring Trends**: Trends exist because of fundamental reasons, not random chance. Trend continuation is often more likely than reversal.
*   **"It Can't Go Lower"**: Famous last words. [Stocks](/glossary#stock) can go to zero. There's no floor based on how much they've already fallen.
*   **Overconfidence After Wins**: Several wins in a row don't mean you've figured it out. Some wins are luck.
*   **Fatalism After Losses**: Several losses feel like "bad luck" that should end. But if your strategy is broken, losses will continue.

## Part 3: The Difference Between Random and Non-Random

Not all sequences in trading are purely random.

*   **Random Events**: A coin flip, roulette spin, or the exact price movement in the next minute.
*   **Non-Random Elements**: Trends, momentum, value factors, earnings surprises—these create predictable patterns.
*   **The Confusion**: Traders often mistake which is which.
    *   Treating random noise as if it's a pattern (seeing meaning in randomness).
    *   Treating actual patterns as if they're random (ignoring valid trends).
*   **Trend Following Works**: Momentum strategies beat the market because trends persist longer than expected. This is NOT the Gambler's Fallacy—trends have fundamental drivers.
*   **Mean Reversion Works**: Over long periods, extremes do tend to correct. But this is based on fundamentals, not random chance.
*   **The Key**: Understand WHY something might continue or reverse. "It's been going up" alone is not a reason.

## Part 4: Why the Fallacy Is Dangerous

The costs of following this faulty logic.

*   **Fighting Trends**: Shorting uptrends or buying downtrends because they're "due to reverse" loses money.
*   **Averaging Down**: Buying more as a [stock](/glossary#stock) falls because it "has to" bounce back. It doesn't have to do anything.
*   **Premature Exits**: Selling winners too early because you don't believe the streak can continue.
*   **Oversized Bets**: Betting big after losses believing the odds have shifted in your favor. They haven't.
*   **Ignoring [Stop-Losses](/glossary#stop-loss)**: Holding past your [stop](/glossary#stop-loss) because the [stock](/glossary#stock) is "due" to come back.
*   **Emotional Attachment to Expectation**: When the market doesn't behave as you "know" it should, frustration clouds judgment.
*   **Account Destruction**: If a [stock](/glossary#stock) can "only go up" from here, there's no need for [risk management](/glossary#risk-management). This leads to catastrophic losses.

## Part 5: Overcoming the Gambler's Fallacy

Practical strategies to think more clearly.

*   **Each Trade Is Independent**: Your next trade's probability isn't affected by your last trades' results.
*   **Focus on Edge, Not Streaks**: Your long-term results depend on your edge, not on balancing short-term wins and losses.
*   **Use Probabilities, Not Expectations**: Think in terms of "60% chance of success" rather than "it has to work this time."
*   **Respect Trends**: Trends don't randomly reverse. They reverse when the underlying conditions change.
*   **Ask Why, Not When**: Instead of "when will this reverse?" ask "why would this reverse? What would cause that?"
*   **Position Sizing Rules**: Don't change size based on recent results. Stick to your predetermined sizing rules.
*   **Track Your Thinking**: Journal why you expect something to happen. Review later to see if your reasoning was sound.
*   **Accept Randomness**: Some price movements are noise. Stop looking for patterns in noise.

## Part 6: The Inverse: Hot Hand Fallacy

Understanding the related opposite error.

*   **Definition**: The belief that success breeds more success beyond what probability suggests.
*   **In Trading**: "I'm on a hot streak—I can't lose!" You increase size and take riskier trades.
*   **The Reality**: Short-term winning streaks are often luck, not skill. They will end.
*   **Combined Danger**: Traders flip between both fallacies—expecting streaks to end when losing (Gambler's) and expecting them to continue when winning (Hot Hand). Both are errors.
*   **The Solution**: Treat each trade on its own merits. Recent results don't change the probability of the next trade.
*   **Stay Humble**: A winning streak doesn't mean you've figured out the market. It means you had favorable conditions.

## Part 7: Thinking Probabilistically

The mindset that overcomes these fallacies.

*   **Trade in Sample Sizes**: One trade means nothing. 100 trades reveal your edge. Think long-term.
*   **Accept Variance**: Even with a 60% win rate, you'll have streaks of 5-10 losses. That's normal statistics.
*   **Define Your Edge**: Know why you have an advantage. If you can't articulate it, you may not have one.
*   **Trust the Process**: If your strategy is sound, execute it regardless of recent results.
*   **Separate Luck from Skill**: After wins, ask: "Was that skill or luck?" Be honest.
*   **Separate Bad Luck from Bad Process**: After losses, ask: "Was my process correct?" If yes, the loss may just be variance.
*   **Keep Learning**: The more you understand market mechanics, the better you can separate random from non-random.
*   **Stay Curious, Not Certain**: The traders who think they've figured it out are the most vulnerable.

The Gambler's Fallacy tricks us because our brains desperately want to find patterns. But sometimes there is no pattern—just randomness that we interpret through biased eyes. Trade based on analysis and edge, not on streaks and expectations.
\`,
        keyTakeaways: [
            "The Gambler's Fallacy is believing past events affect future independent events—'due' reversals.",
            "In trading, this leads to fighting trends, averaging down, and ignoring stop-losses.",
            "Not all market events are random—trends exist—but individual short-term moves often are.",
            "Focus on your edge and strategy, not on expecting streaks to balance out.",
            "Think in probabilities and sample sizes—one trade's outcome means very little."
        ]
    },`;

const startMarker = '"tp_5": {';
const endMarker = '"tp_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_5: The Gamblers Fallacy - VALIDATION ===');
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
console.log('✓ Successfully updated tp_5!');
