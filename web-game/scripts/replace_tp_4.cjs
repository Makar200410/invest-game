const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_4": {
        title: "Revenge Trading",
        content: \`
# Revenge Trading: The Path to Account Destruction

**Revenge trading** is the dangerous practice of making impulsive trades immediately after a loss in an attempt to quickly recover the money. It's driven by emotions—anger, frustration, wounded ego—rather than rational analysis. Revenge trading is one of the fastest ways to blow up a trading account.

When you're trading for revenge, you're not trading to make money—you're trading to feel better. And the market doesn't care about your feelings.

## Part 1: What Is Revenge Trading?

Understanding this destructive pattern.

*   **Definition**: Making impulsive trades after a loss to "get your money back" from the market.
*   **The Emotional Sequence**:
    1. You take a loss.
    2. You feel angry, frustrated, or embarrassed.
    3. You immediately enter another trade without proper analysis.
    4. You often size up to "recover faster."
    5. The trade goes against you.
    6. You lose more. Repeat until devastation.
*   **Characteristics**:
    *   Trading outside your plan.
    *   Larger than normal position sizes.
    *   Little or no analysis before entry.
    *   Feeling urgent, almost compulsive.
    *   Fixating on recovering the specific amount lost.
*   **The Illusion**: You believe recovering the loss will make you feel better. It won't—and you'll likely lose more trying.

## Part 2: The Psychology Behind Revenge Trading

Why we fall into this trap.

*   **Loss Aversion**: Losses hurt twice as much as equivalent gains feel good. We desperately want to undo the pain.
*   **Ego Threat**: A loss feels like proof we're wrong. We need to "prove" ourselves right immediately.
*   **Sunk Cost Fallacy**: We feel attached to the lost money and can't let it go mentally.
*   **Control Illusion**: We believe we can control the market outcome through sheer will or effort.
*   **Tilting**: Like in poker, emotional disturbance from losses impairs judgment. We're no longer playing optimally.
*   **Fight Response**: Losses trigger the "fight" part of fight-or-flight. We want to attack back—but the market can't be attacked.
*   **Denial**: We refuse to accept the loss as final. "I'll get it back right now" is denial in action.

## Part 3: How Revenge Trading Destroys Accounts

The mechanical process of destruction.

*   **Worse Entries**: No analysis means poor entry points. You're already at a disadvantage.
*   **Oversized Positions**: To recover fast, you trade larger. This amplifies losses when the trade fails.
*   **Ignoring [Stop-Losses](/glossary#stop-loss)**: You can't afford another loss, so you widen or remove stops. The loss gets worse.
*   **Compounding Losses**: Each revenge trade that fails creates more anger and more urgency. The spiral accelerates.
*   **Exhaustion of Capital**: What started as one loss becomes many. The account drains rapidly.
*   **Psychological Damage**: Beyond money, you damage your confidence and mental state, making future trading harder.
*   **Cascade Effect**: One bad day becomes a bad week, then a blown account.
*   **Example**: Lost $500 → Revenge trade lost $750 → Revenge trade lost $1,000 → Account down 50% in one session.

## Part 4: Recognizing Revenge Trading in Yourself

Self-awareness is your first defense.

*   **Physical Signs**: Heart racing, tension, clenched jaw, rapid breathing.
*   **Mental Signs**: "I need to get that back," "The market owes me," "One more trade."
*   **Behavioral Signs**: Entering trades seconds after a loss, increasing position size, abandoning your watchlist.
*   **Time Awareness**: Revenge trades happen fast—usually within minutes of the triggering loss.
*   **The Anger Test**: Are you angry? If yes, don't trade. Angry trading is almost always revenge trading.
*   **The Motivation Check**: "Am I entering because this is a valid setup, or because I just lost money?" Be honest.
*   **Account of the Day**: If your P&L is red and you're about to take another trade, stop and question your motivation.

## Part 5: Strategies to Prevent Revenge Trading

Break the pattern before it starts.

*   **Walk Away Rule**: After any significant loss, leave the computer. Mandated break: 15 minutes minimum, preferably an hour.
*   **Daily Loss Limit**: Pre-define a maximum daily loss. When hit, trading is over for the day. Period.
*   **"Three Strikes" Rule**: Three losing trades in a row = done for the day. No exceptions.
*   **Physical Separation**: Leave the trading room. Go outside. The change of environment breaks the emotional loop.
*   **Turn Off Screens**: Kill the platform. If you can't trade, you can't revenge trade.
*   **Call a Friend**: Talk to someone. Explaining what happened often reveals how irrational the impulse is.
*   **Journal Before Trading**: Before the next trade, write down why you're entering. If you can't articulate it, don't trade.
*   **Cool-Down Timer**: Set an actual timer. No trades for the next 30 minutes.

## Part 6: Recovering from a Revenge Trading Session

When you've already done damage, what now?

*   **Stop Immediately**: The moment you realize you're revenge trading, stop. Any further losses are preventable.
*   **Assess the Damage**: Calculate exactly how much you've lost today. Face it honestly.
*   **No More Trading Today**: You're not in a state to trade well. Accept it and walk away.
*   **Emotional Processing**: Allow yourself to feel frustrated, but don't let it drive further action.
*   **Physical Recovery**: Exercise, sleep, eat well. Your body affects your mental state.
*   **Journal the Episode**: Write down what happened, how you felt, what triggered it. This is learning material.
*   **Adjust Your Rules**: What rule could have prevented this? Add it to your trading plan.
*   **Forgive Yourself**: Everyone does this at least once. Learn from it and move forward.

## Part 7: Building Long-Term Resilience

Develop the mindset that prevents revenge trading.

*   **Accept Losses as Part of Trading**: Every trader loses. Losses are a cost of doing business, not a personal failure.
*   **Detach Ego from Results**: Your value as a person is not determined by your P&L.
*   **Focus on Process, Not Outcome**: Did you follow your plan? That's success, regardless of the trade result.
*   **Think in Probabilities**: Each trade is one of thousands. One loss is statistically insignificant.
*   **Smaller Position Sizes**: If losses trigger revenge trading, you're trading too large. Reduce size.
*   **Trading is a Marathon**: The goal is consistent performance over years, not recovering today's loss.
*   **Review Past Revenge Trades**: Look at the data. Revenge trades almost always lose. Let evidence convince you.
*   **Build Discipline Muscles**: Practice stopping when you want to continue. It gets easier with repetition.

Revenge trading is the ego's attempt to undo reality. But the market doesn't negotiate. The only way to "win" against a loss is to accept it, learn from it, and show up tomorrow with a clear head and proper plan.
\`,
        keyTakeaways: [
            "Revenge trading is impulsively trading after a loss to 'get your money back'—it almost always fails.",
            "It's driven by ego, loss aversion, and tilting—not by any rational analysis.",
            "Recognize it by physical tension, urgency, and trades made within minutes of losses.",
            "Prevent it with mandatory breaks, daily loss limits, and the 'three strikes' rule.",
            "Accept losses as a normal cost of trading—your ego doesn't belong in the market."
        ]
    },`;

const startMarker = '"tp_4": {';
const endMarker = '"tp_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_4: Revenge Trading - VALIDATION ===');
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
console.log('✓ Successfully updated tp_4!');
