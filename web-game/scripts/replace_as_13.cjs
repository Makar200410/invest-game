const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_13": {
        title: "Creating a Trading Plan",
        content: \`
# Creating a Trading Plan: Your Blueprint for Success

A **trading plan** is a comprehensive document that outlines your trading approach, rules, and [risk management](/glossary#risk-management) framework. Successful traders treat trading like a business, and every successful business needs a plan. Without one, you're not trading—you're gambling.

The difference between profitable traders and the 90% who fail often comes down to discipline, and discipline starts with a plan. Your plan removes emotion from decision-making, creates consistency in your approach, and provides a framework for continuous improvement.

## Part 1: Why You Need a Trading Plan

A trading plan provides structure, discipline, and a path to improvement.

*   **Removes Emotion**: Trading decisions are made in advance, not in the heat of the moment when fear or greed clouds judgment.
*   **Creates Consistency**: The same rules applied every time leads to measurable, repeatable results that can be analyzed and improved.
*   **Defines [Risk](/glossary#risk)**: You know exactly how much you can lose on any trade and in any day/week before you enter.
*   **Enables Improvement**: A documented plan can be reviewed, tested, and refined based on actual results.
*   **Builds Confidence**: Knowing you have a tested plan reduces anxiety and second-guessing.
*   **Professional Approach**: Every institutional trader operates under strict rules. Retail traders who succeed do the same.
*   **Accountability**: A written plan holds you accountable to your own rules.

## Part 2: Core Components of a Trading Plan

Every comprehensive trading plan should include these essential elements.

### Trading Goals
*   What do you want to achieve? Set specific, measurable targets.
*   Define realistic monthly and annual return targets. 20%/year consistently is excellent. 100%/month is fantasy.
*   Set goals beyond money: skill development, consistency, following the plan, reduced emotional trading.
*   Consider your risk tolerance—how much can you afford to lose while still sleeping at night?

### Markets and Instruments
*   What will you trade? [Stocks](/glossary#stock), [options](/glossary#options), [forex](/glossary#forex), [futures](/glossary#futures), [crypto](/glossary#cryptocurrency)?
*   Which specific instruments? Large-cap [stocks](/glossary#stock)? Penny [stocks](/glossary#stock)? Major [forex](/glossary#forex) pairs? [Index](/glossary#index) [futures](/glossary#futures)?
*   Specialization is better than trying to trade everything. Become an expert in your chosen instruments.
*   Consider [liquidity](/glossary#liquidity): avoid instruments where you can't enter and exit easily.

### Trading Style and Timeframe
*   [Day trading](/glossary#day-trading), [swing trading](/glossary#swing-trading), or position trading?
*   What chart timeframes will you use? 1-minute? 5-minute? Daily? Weekly?
*   How many hours per day/week can you realistically dedicate to trading?
*   Does your chosen style fit your personality and lifestyle?

### Strategy Rules
*   Exact entry criteria. What must be true for you to enter a trade?
*   Exact exit criteria. When do you take profits? When do you cut losses?
*   Write it down in plain language. If you can't explain it simply, you don't understand it.
*   Test the rules historically before trading real money.

## Part 3: Risk Management Rules

This is the most critical section of your trading plan. [Risk management](/glossary#risk-management) determines survival.

*   **[Risk](/glossary#risk) Per Trade**: Maximum percentage of capital to [risk](/glossary#risk) on any single trade. Typically 1-2%. Never more.
*   **Daily Loss Limit**: Maximum total loss in a day before you stop trading. 3-5% of capital is common. Walk away; tomorrow is another day.
*   **Weekly/Monthly Limits**: Maximum drawdown before you stop trading and review your approach.
*   **Position Sizing**: Calculate the right number of shares/contracts based on your [stop-loss](/glossary#stop-loss) distance and [risk](/glossary#risk) per trade.
*   **[Stop-Loss](/glossary#stop-loss) Rules**: Define where and how to place [stops](/glossary#stop-loss). A trade without a [stop](/glossary#stop-loss) is not a trade—it's a gamble.
*   **Correlation Management**: Avoid multiple correlated positions that multiply your [risk](/glossary#risk) exposure.
*   **Maximum Open Positions**: How many trades can you effectively manage at once without losing focus?
*   **[Leverage](/glossary#leverage) Limits**: Maximum [leverage](/glossary#leverage) you'll use. New traders should use minimal or no [leverage](/glossary#leverage).

## Part 4: Entry and Exit Criteria

Define exactly when to get in and out. No ambiguity allowed.

### Entry Criteria Example
*   [Stock](/glossary#stock) must be above the 50-day [moving average](/glossary#moving-average) (trading with the trend).
*   [RSI](/glossary#rsi) must be between 30-70 (not overbought or oversold).
*   Price must break above [resistance](/glossary#resistance) with above-average [volume](/glossary#volume) confirmation.
*   A clear [stop-loss](/glossary#stop-loss) level must be defined before entry.
*   Minimum 2:1 reward-to-[risk](/glossary#risk) ratio required.
*   No trades within 15 minutes of market open (too noisy) or 15 minutes of close.

### Exit Criteria
*   **[Stop-Loss](/glossary#stop-loss)**: Exit immediately if price hits the [stop](/glossary#stop-loss). No exceptions. No hesitation.
*   **Profit Target**: Exit when the target is reached, or trail the [stop-loss](/glossary#stop-loss) to lock in profits.
*   **Time [Stop](/glossary#stop-loss)**: Exit if the expected move doesn't happen within a set time (e.g., 3 days).
*   **Indicator Exit**: Exit when a technical signal reverses (e.g., [RSI](/glossary#rsi) crosses back above 70).
*   **Partial Exits**: Consider taking half profits at the first target and letting the rest run.

### Why Specificity Matters
*   Ambiguity leads to bad decisions under pressure.
*   Written, specific rules can be [backtested](/glossary#backtesting) and reviewed objectively.
*   If you can't follow your own rules, trading isn't for you—work on discipline first.

## Part 5: Trading Routine and Schedule

Consistency requires routine. Trading is a job—treat it like one.

### Pre-Market Routine (30-60 minutes before open)
*   Review overnight news and the economic calendar for the day.
*   Check all open positions and pending orders.
*   Scan for setups based on your criteria. Run your screeners.
*   Create a watchlist for the day with specific entry/exit levels.
*   Mental preparation: check your mindset. Are you focused? Rested? Emotionally stable?

### During Trading Hours
*   Focus on your watchlist. Execute your plan, nothing else.
*   Avoid distractions: no social media, no news that isn't on your calendar.
*   Log trades as you take them—don't rely on memory later.
*   Respect your daily loss limit. If you hit it, stop.

### Post-Market Routine (15-30 minutes after close)
*   Review all trades taken. Did you follow the plan on each trade?
*   Update your trading journal with details.
*   Analyze what worked and what didn't. Be honest.
*   Prepare initial notes for the next trading day.

### Weekly/Monthly Review
*   Calculate performance metrics: win rate, average win, average loss, expectancy.
*   Review all trades in detail. Look for patterns in both wins and losses.
*   Adjust the plan if needed—but don't change after every single loss.

## Part 6: The Trading Journal

A trading journal is essential for improvement. Without it, you're flying blind.

### What to Record for Every Trade
*   Date, time, and instrument traded.
*   Entry price, [stop-loss](/glossary#stop-loss) level, and profit target.
*   Exit price and actual result (profit or loss in dollars and percentage).
*   Why you took the trade (the setup that met your entry criteria).
*   Screenshot of the chart at entry and exit.
*   Your emotional state before and after the trade.
*   Whether you followed your plan completely—and if not, why not.

### Reviewing the Journal
*   **Weekly**: Look for mistakes, patterns, and recurring errors.
*   **Monthly**: Calculate comprehensive stats—win rate, average win/loss ratio, expectancy, profit factor.
*   **Quarterly**: Identify major areas for improvement. Make thoughtful adjustments to the plan.

### The Long-Term Payoff
*   Over time, you'll discover what works specifically for you.
*   Different traders have different strengths. Your journal helps you find yours.
*   Data-driven improvement beats random experimentation every time.

## Part 7: Common Mistakes and How to Avoid Them

Even with a plan, traders make predictable errors. Awareness helps you avoid them.

### Mistakes to Avoid
*   **Not Following the Plan**: The plan only works if you execute it. Selective adherence is failure.
*   **Overtrading**: Trading too often, outside your plan, out of boredom or frustration.
*   **Moving [Stops](/glossary#stop-loss)**: Hoping a losing trade will recover. It usually won't. Honor your [stop](/glossary#stop-loss).
*   **Revenge Trading**: Trying to immediately recover losses with bigger, riskier trades. This guarantees bigger losses.
*   **Risking Too Much**: One blown trade should never significantly damage your account.
*   **Changing the Plan Constantly**: Don't overhaul your approach after every losing trade. Give strategies time to prove themselves.
*   **Ignoring the Journal**: If you're not reviewing and analyzing, you're not improving.

### Building Discipline
*   Start with small positions. Practice discipline at low stakes before increasing size.
*   Accept losses as a normal cost of doing business—not a personal failure.
*   Celebrate following the plan perfectly, not just making money.
*   Take breaks when frustrated. Emotions lead to mistakes.

### The Ultimate Test
*   Can you follow your plan for 30 consecutive trades without deviation?
*   If not, focus on discipline and psychology before worrying about strategy refinement.

A trading plan is your edge in a game where most participants lose. Create one, follow it, refine it, and you'll separate yourself from the 90% of traders who fail.
\`,
        keyTakeaways: [
            "A trading plan removes emotion and creates consistency—treat trading like a business.",
            "Key components: specific goals, defined markets, strategy rules, and most importantly risk management.",
            "Define exact entry and exit criteria that can be tested and followed without any ambiguity.",
            "Maintain a trading journal to track every trade and enable data-driven improvement.",
            "The plan only works if you follow it—discipline is more important than any strategy."
        ]
    },`;

const startMarker = '"as_13": {';
const endMarker = '"pm_1": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_13: Creating a Trading Plan - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    // Module 12: Portfolio Management\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated as_13!');
