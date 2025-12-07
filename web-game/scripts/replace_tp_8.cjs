const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_8": {
        title: "Handling Losses",
        content: \`
# Handling Losses: The True Test of a Trader

Losses are an inevitable part of trading. Even the best traders in the world lose on many of their trades. What separates successful traders from failures isn't avoiding losses—it's how they handle them. Your response to losses will determine your long-term success more than your wins ever will.

Learning to lose well is a skill that takes practice. Master it, and no single trade can derail your journey to becoming a successful trader.

## Part 1: The Inevitability of Losses

Accepting losses as a fundamental, unavoidable part of trading.

*   **The Numbers**: Most successful traders have win rates between 40-60%. That means losing nearly half the time—or even more frequently.
*   **Even Legends Lose**: Warren Buffett, George Soros, Ray Dalio—all have made major losing trades throughout their careers.
*   **Statistical Certainty**: Over hundreds of trades, losing streaks of 5-10 are statistically normal, even with a 50% win rate.
*   **Cost of Doing Business**: Losses are like operating expenses in a business. They're not failures; they're costs of participation.
*   **The Alternative**: A strategy with 100% win rate probably doesn't exist—and if it does, the winning trades likely can't cover the eventual losses when they come.
*   **Reframe Your Thinking**: A loss isn't "bad" if it was a valid trade taken with proper [risk management](/glossary#risk-management). It's simply a trade that didn't work this time.
*   **The Mathematical Edge**: Your edge is in the aggregate. Individual losses are meaningless data points.

## Part 2: The Psychology of Losing

Understanding why losses hurt so much emotionally and mentally.

*   **Loss Aversion**: Psychologically, losses hurt twice as much as equivalent gains feel good. This is hardwired in our brains.
*   **Ego Threat**: A loss feels like being "wrong," which threatens our self-image and identity.
*   **Money = Security**: Losing money triggers primal fears about survival, safety, and our ability to provide.
*   **Sunk Cost Attachment**: We become emotionally attached to the money we've "invested" in a position.
*   **Compounding Negative Thoughts**: One loss leads to self-doubt, which leads to poor decisions, which leads to more losses.
*   **The Trap**: The emotional pain of losses drives destructive behaviors—revenge trading, removing [stops](/glossary#stop-loss), abandoning proven strategies.
*   **Mind-Body Connection**: Losses trigger physical stress responses—elevated cortisol, increased heart rate, impaired cognition.

## Part 3: Healthy Responses to Losses

Constructive ways to process and learn from every losing trade.

*   **Accept Immediately**: Don't deny or avoid the loss. It happened. Acknowledge it and move forward.
*   **Don't Personalize**: A losing trade doesn't make you a loser. Separate your identity from your P&L completely.
*   **Review Objectively**: Was the trade valid? Did you follow your rules? If yes, it was a good trade that happened to lose.
*   **Learn the Lesson**: If you made a mistake, identify it specifically. What would you do differently next time?
*   **Journal the Trade**: Write it down while it's fresh. Document what happened, why, and how you felt.
*   **Move On**: Once analyzed and journaled, let it go completely. Dwelling serves no purpose whatsoever.
*   **Maintain Perspective**: This is one trade among thousands in your career. Its impact is tiny in the long run.
*   **Tomorrow Is New**: Each trading day offers fresh opportunities. Don't let yesterday's loss infect today's trades.

## Part 4: Unhealthy Responses to Avoid

Destructive patterns that losses often trigger—recognize and avoid them.

*   **Revenge Trading**: Immediately entering another trade to "get back" what you lost. Almost always makes the situation worse.
*   **Removing [Stop-Losses](/glossary#stop-loss)**: Hoping a losing trade will magically come back. It often doesn't, and losses compound.
*   **Increasing Size**: Betting bigger to recover faster. This accelerates losses when the next trade also fails.
*   **Abandoning Strategy**: A few losses don't prove a strategy is broken. Don't jump ship prematurely.
*   **Denial**: Pretending the loss didn't happen or isn't significant. Face reality.
*   **Blame**: Blaming the market, manipulation, bad luck, or others. Blame prevents learning.
*   **Quitting**: Some traders quit after a bad streak, right before their strategy would have started working.
*   **Paralysis**: Being too scared to take the next valid trade because of fear from recent losses.

## Part 5: Building Loss Tolerance

Developing the capacity to handle losses without emotional or financial damage.

*   **Trade Smaller**: If losses shake you emotionally, your position size is too large. Reduce until losses feel manageable.
*   **Pre-Define [Risk](/glossary#risk)**: Know exactly how much you can lose before entering any trade. No surprises.
*   **Expect Losses**: Before every trade, mentally accept that this particular trade might lose. Enter anyway if it's valid.
*   **Probability Mindset**: Think of each trade as one of a hundred. One outcome doesn't matter much.
*   **Focus on Process**: Judge yourself on whether you followed rules, not on outcomes you can't control.
*   **Keep a "Loss Budget"**: Mentally allocate a certain amount for learning and losing. Consider it tuition.
*   **Physical and Mental Health**: Sleep, exercise, and stress management improve emotional resilience to losses.
*   **Experience Helps**: The more losses you handle well, the easier they become to handle in the future. It's a skill.

## Part 6: The Mechanics of Managing Losses

Practical tools and rules for loss control in your trading.

*   **[Stop-Losses](/glossary#stop-loss)**: Always use them. They limit maximum damage and remove emotional decision-making in the heat of the moment.
*   **Position Sizing**: [Risk](/glossary#risk) a fixed percentage (1-2%) per trade. No single loss can devastate your account.
*   **Daily Loss Limits**: If you lose X% in a day, stop trading for the day. This prevents spirals from getting worse.
*   **"Three Strikes" Rule**: Three losses in a row = done for the day. No exceptions.
*   **Cooling-Off Periods**: After significant losses, take mandatory time away from the screens.
*   **Track Drawdowns**: Know your current drawdown from peak. Have a plan for when it reaches uncomfortable levels.
*   **Correlation Limits**: Avoid multiple positions that will all lose together due to correlation.
*   **Regular Reviews**: Weekly review of all losses to identify patterns and improvement areas.

## Part 7: Losses as Teachers

The valuable lessons hidden in every losing trade—if you look for them.

*   **What the Market Tells You**: Losses reveal when your thesis was wrong. The market is giving you valuable feedback.
*   **Exposing Weaknesses**: Losses often reveal flaws in your strategy, discipline, or psychology that need work.
*   **Building Resilience**: Each loss you handle well strengthens your ability to handle the next one.
*   **Humility**: Losses remind you that you don't control the market. Stay humble and respectful.
*   **Testing Your Edge**: If losses are consistent and significant, your strategy may need work. This is valuable information.
*   **The Education You Pay For**: Trading losses are tuition for market education. Either learn or waste the money.
*   **Future Prevention**: Every mistake understood is a mistake less likely to repeat in the future.
*   **Character Development**: How you handle adversity defines who you become as a trader and as a person.

Losses are not the enemy. The inability to handle losses well is the enemy. Master your response to losing trades, and you'll have an edge over the vast majority of traders who never develop this crucial skill.
\`,
        keyTakeaways: [
            "Losses are inevitable—even the best traders lose 40-60% of their trades.",
            "Loss aversion makes losses hurt disproportionately; separate ego from P&L.",
            "Healthy response: accept, review objectively, learn the lesson, journal, move on.",
            "Unhealthy responses: revenge trading, removing stops, increasing size, or quitting.",
            "Build loss tolerance by trading smaller, pre-defining risk, and focusing on process over outcome."
        ]
    },`;

const startMarker = '"tp_8": {';
const endMarker = '"tp_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_8: Handling Losses - VALIDATION ===');
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
console.log('✓ Successfully updated tp_8!');
