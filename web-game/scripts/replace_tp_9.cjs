const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_9": {
        title: "Overtrading",
        content: \`
# Overtrading: When More Is Less

**Overtrading** is one of the most common and costly mistakes traders make. It's taking too many trades, trading too large, or trading when you shouldn't be trading at all. Overtrading destroys profits through transaction costs, poor entries, and emotional exhaustion—and it often ends in blown accounts.

Less is more in trading. Quality beats quantity every time.

## Part 1: What Is Overtrading?

Understanding the different forms this problem takes.

*   **Too Many Trades**: Entering more trades than your strategy justifies
*   **Too Large Positions**: [Risking](/glossary#risk) more than appropriate on individual trades.
*   **Trading Without Setups**: Entering when there's no valid signal—just because you want to trade.
*   **Trading Wrong Market Conditions**: Trading a trend strategy in a range, or vice versa.
*   **Trading for Entertainment**: Using the market for excitement rather than profit.
*   **Signs You're Overtrading**:
    *   Commissions eat a significant portion of your gains.
    *   You're in trades constantly, rarely flat.
    *   Most trades are impulsive, not planned.
    *   You feel exhausted from trading.
    *   You can't articulate why you're in half your positions.

## Part 2: Why Traders Overtrade

The psychological and practical drivers.

*   **Boredom**: Trading is exciting. Waiting is boring. We trade to feel something.
*   **FOMO**: Fear of missing out drives entries on every move.
*   **Overconfidence**: After wins, we feel invincible and take more trades.
*   **Revenge Trading**: After losses, we trade to recover.
*   **Addiction**: The dopamine hit from trading creates addictive patterns.
*   **Mistaking Activity for Progress**: "I'm trading a lot, so I must be making progress." Not necessarily.
*   **Commission Pressure**: If you're paying for platform/data through commission rebates, there's incentive to trade.
*   **Market Noise**: Every price movement looks like an opportunity if you're looking hard enough.

## Part 3: The Costs of Overtrading

How overtrading destroys performance.

*   **Transaction Costs**: Commissions, [spreads](/glossary#spread), and slippage add up. 10 round trips per day × $10 = $100/day or $25,000/year.
*   **Worse Entries**: When you force trades, you enter at suboptimal points.
*   **Diluted Edge**: Your strategy works on specific setups. Trading everything dilutes your edge.
*   **Emotional Exhaustion**: More trades = more stress = worse decisions.
*   **Increased Variance**: More trades means more exposure to randomness.
*   **Missed Winners**: Overtrading often involves exiting winners early to take new positions.
*   **Compounding Errors**: Each trade is an opportunity for a mistake. More trades = more mistakes.
*   **Account Destruction**: The combination of costs, poor entries, and emotional decisions devastates accounts.

## Part 4: Diagnosing Overtrading

How to recognize if you have a problem.

*   **Trade Frequency Analysis**: How many trades do you take per day/week? Is it justified by your strategy?
*   **Commission vs. Profit Ratio**: If commissions are more than 20% of gross profits, you're likely overtrading.
*   **Win Rate by Trade Number**: Are your first few trades of the day better than later trades? That's overtrading.
*   **Setup Quality Score**: Rate each trade's setup quality 1-10. If many are below 7, you're taking weak trades.
*   **Time Analysis**: Are you trading during every hour the market is open? That's probably too much.
*   **Motivation Check**: Ask before each trade: "Why am I entering this?" If you can't give a clear answer, don't enter.
*   **The Boredom Test**: Did you enter because you were bored? Honest answer.

## Part 5: Strategies to Reduce Overtrading

Practical solutions to trade less but better.

*   **Define Maximum Trades**: Set a daily limit (e.g., 3 trades max). When you hit it, stop.
*   **Define Minimum Quality**: Only take A+ setups. Pass on B and C setups.
*   **Use Alerts, Not Screens**: Set alerts for your criteria. Don't watch every tick.
*   **Trade Larger Timeframes**: Daily charts have fewer, higher-quality signals than 5-minute charts.
*   **Increase Holding Time**: Hold winners longer rather than flipping for quick profits.
*   **Physical Barriers**: Walk away from the computer. Can't trade if you're not there.
*   **Pre-Plan Only**: Only take trades identified in pre-market analysis. No intraday discoveries.
*   **Trade Only Specific Times**: For example, only trade the first hour and lunch hour. Reduces exposure.

## Part 6: Building a Quality-Over-Quantity Mindset

Reframing your approach to trading.

*   **Patience Is a Strategy**: Waiting for quality is an active choice, not laziness.
*   **Cash Is a Position**: Being flat is a legitimate position—often the best one.
*   **One Great Trade > Ten Mediocre Trades**: Focus on finding the best opportunities.
*   **Opportunity Cost**: A marginal trade ties up mental capital and can cause you to miss the great trade.
*   **Professional Sniper Mentality**: Wait, observe, and when everything aligns, strike.
*   **Celebrate Not Trading**: If there were no valid setups today and you didn't trade, that's a win.
*   **Track Quality, Not Quantity**: Measure the quality of your trades, not how many you took.
*   **Long-Term Thinking**: Over a year, you need maybe 50-100 great trades, not 1,000 mediocre ones.

## Part 7: Creating Sustainable Trading Habits

Building practices that prevent overtrading long-term.

*   **Trading Plan Rules**: Include maximum trade frequency in your plan.
*   **Pre-Market Routine**: Identify setups BEFORE the market opens. Trade only those.
*   **Post-Trade Waiting Period**: After any trade, wait 30 minutes before the next one.
*   **End-of-Day Review**: Track trade frequency and quality daily.
*   **Weekly Trade Audits**: Were all trades valid setups? Score yourself.
*   **Accountability Partner**: Report your trades to someone who will call out overtrading.
*   **Diversify Activities**: Have interests outside trading. Trading shouldn't be entertainment.
*   **Physical Health**: Exercise, sleep, and nutrition affect impulse control. Take care of yourself.

Overtrading is the silent killer of trading accounts. It feels productive but destroys capital, edge, and mental health. Trade less, trade better, and watch your results improve.
\`,
        keyTakeaways: [
            "Overtrading means too many trades, too large positions, or trading without valid setups.",
            "Causes: boredom, FOMO, overconfidence, revenge trading, and addiction to trading excitement.",
            "Costs: transaction fees, worse entries, diluted edge, emotional exhaustion, and blown accounts.",
            "Solution: set maximum trade limits, define minimum setup quality, use alerts instead of watching.",
            "Quality over quantity—one great trade beats ten mediocre ones every time."
        ]
    },`;

const startMarker = '"tp_9": {';
const endMarker = '"tp_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_9: Overtrading - VALIDATION ===');
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
console.log('✓ Successfully updated tp_9!');
