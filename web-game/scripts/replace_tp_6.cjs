const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_6": {
        title: "Discipline & Patience",
        content: \`
# Discipline & Patience: The Cornerstones of Trading Success

**Discipline** and **patience** are the two qualities that separate successful traders from the majority who fail. Discipline means following your rules even when it's uncomfortable. Patience means waiting for the right opportunities rather than forcing trades. Together, they form the foundation of sustainable trading.

You can have the best strategy in the world, but without the discipline to follow it and the patience to wait for setups, it's worthless.

## Part 1: Why Discipline Matters

Understanding the role of discipline in trading.

*   **Definition**: Discipline is the ability to consistently follow your trading plan and rules, regardless of emotional impulses.
*   **The Gap**: Most traders know what to do. Few consistently do it. The gap is discipline.
*   **Rules Without Discipline Are Useless**: A [stop-loss](/glossary#stop-loss) only works if you honor it. Position sizing rules only work if you follow them.
*   **Consistency Creates Edge**: Random execution destroys any edge your strategy might have.
*   **Professional Mindset**: Institutions have compliance, rules, and procedures. Individual traders must self-impose this structure.
*   **Short-Term Sacrifice, Long-Term Gain**: Discipline often means doing what's uncomfortable now for better results later.
*   **The Market Tests You**: Every day, the market offers temptations to break your rules. Discipline is passing those tests.

## Part 2: Building Discipline

Practical ways to develop and maintain discipline.

*   **Write Your Rules Down**: A written trading plan is the foundation. You can't follow rules you haven't defined.
*   **Make Rules Specific**: "Use [stop-losses](/glossary#stop-loss)" is vague. "Place [stop-loss](/glossary#stop-loss) at 2x ATR below entry" is specific and actionable.
*   **Start with Small Positions**: Discipline is easier when less money is at stake. Build the habit before scaling up.
*   **Use Checklists**: Before each trade, go through a checklist. This forces systematic thinking.
*   **Automate What You Can**: Use limit orders, [stop-losses](/glossary#stop-loss), and alerts. Automation removes emotion from execution.
*   **Create Accountability**: Share your plan with a trading partner. Report your trades.
*   **Track Compliance**: Record whether each trade followed your rules. Calculate your "discipline score."
*   **Celebrate Discipline, Not Just Profits**: Reward yourself for following rules, regardless of trade outcomes.

## Part 3: Why Patience Matters

Understanding the role of patience in trading.

*   **Definition**: Patience is the ability to wait for high-probability setups rather than forcing trades.
*   **The Problem**: Trading is exciting. Waiting is boring. Most traders overtrade because they can't stand doing nothing.
*   **Quality Over Quantity**: One great trade beats ten mediocre ones.
*   **Edge Requires Patience**: Most strategies only work on specific setups. Trading anything else dilutes your edge.
*   **The Waiting Game**: Professional snipers wait hours for one shot. Professional traders wait days for one setup.
*   **Market Timing**: The market is open 252 days a year. You don't need to trade every day—or even every week.
*   **Patience in Trades**: Once in a position, patience means letting winners run rather than taking quick profits.

## Part 4: Building Patience

Practical ways to develop and maintain patience.

*   **Define Your Setups**: Know exactly what you're looking for. If it's not there, don't trade.
*   **Use Alerts, Not Staring**: Set alerts for your setup criteria. stop watching every tick.
*   **Trade Only Your Best Setups**: Not every valid setup is an A+ setup. Trade the best, skip the rest.
*   **Set Trade Frequency Limits**: "I will take a maximum of 3 trades per day." This forces selectivity.
*   **Journal Impulsive Trades**: Track trades you took without proper setups. Review results. The data teaches patience.
*   **Embrace Boredom**: Doing nothing is a skill. Get comfortable with it.
*   **Focus on Other Activities**: Have interests outside trading. This reduces the compulsion to trade.
*   **Zoom Out**: Look at weekly or monthly charts. This perspective makes daily fluctuations seem less urgent.

## Part 5: The Relationship Between Discipline and Patience

How these two qualities reinforce each other.

*   **Patience Requires Discipline**: Waiting for setups is uncomfortable. Discipline is what keeps you waiting.
*   **Discipline Requires Patience**: Following rules through a losing streak requires patient trust in the process.
*   **Both Combat Emotion**: Fear and greed push for action. Discipline and patience push for restraint.
*   **The Virtuous Cycle**: Success builds confidence. Confidence makes discipline easier. Discipline leads to more success.
*   **The Vicious Cycle**: Lack of discipline leads to losses. Losses erode confidence. Low confidence makes discipline harder.
*   **Start Small, Build Gradually**: Each act of discipline and patience reinforces the next. It compounds.
*   **Daily Practice**: These are muscles that require daily exercise. Skip today, weaker tomorrow.

## Part 6: Common Challenges and Solutions

Obstacles to discipline and patience, and how to overcome them.

### The Urge to Trade
*   **Problem**: The market is moving. You feel you should be doing something.
*   **Solution**: Remind yourself that not trading IS a decision. Cash is a position.

### Breaking Rules "Just This Once"
*   **Problem**: Special circumstances seem to justify an exception.
*   **Solution**: There are no special cases. The rules apply to every trade, or they're not rules.

### Impatience During Drawdowns
*   **Problem**: When losing, you want to trade more to recover.
*   **Solution**: Drawdowns call for LESS trading, not more. Reduce exposure and wait.

### Boredom
*   **Problem**: Waiting for setups is unexciting.
*   **Solution**: Develop other interests. Trading shouldn't be entertainment.

### Social Pressure
*   **Problem**: Others are trading, posting profits, and you feel left out.
*   **Solution**: Focus on your process. Other people's activity is irrelevant to your strategy.

### Overconfidence After Wins
*   **Problem**: Success breeds the temptation to break rules.
*   **Solution**: Stay humble. The market doesn't care about your recent P&L.

## Part 7: The Long-Term Payoff

Why discipline and patience lead to sustainable success.

*   **Compound Effect**: Consistent, disciplined execution compounds. Small edges, properly executed, create large returns over time.
*   **Survival**: Disciplined traders survive. Undisciplined traders blow up accounts and disappear.
*   **Emotional Stability**: Following a plan reduces stress and anxiety compared to improvising.
*   **Improved Decision Quality**: Fewer trades, better thought out, executed at the right time.
*   **Objective Feedback**: When you follow a system consistently, you can evaluate whether the system works—not whether you followed it.
*   **Professional Identity**: You become a professional trader, not a gambler.
*   **The Final Truth**: There is no shortcut. Every successful trader has developed discipline and patience through practice and repetition.

Discipline means doing the right thing even when it's hard. Patience means waiting for the right moment even when you're restless. Master these two qualities, and you'll be ahead of 90% of traders who never do.
\`,
        keyTakeaways: [
            "Discipline is consistently following your rules; patience is waiting for the right setups.",
            "Write specific rules, use checklists, and automate execution to build discipline.",
            "Build patience by defining setups precisely and limiting trade frequency.",
            "Both qualities combat emotional impulses—fear, greed, boredom, and FOMO.",
            "The payoff is compound: consistent small edges, properly executed, build long-term wealth."
        ]
    },`;

const startMarker = '"tp_6": {';
const endMarker = '"tp_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_6: Discipline & Patience - VALIDATION ===');
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
console.log('✓ Successfully updated tp_6!');
