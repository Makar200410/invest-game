const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_7": {
        title: "Keeping a Trading Journal",
        content: \`
# Keeping a Trading Journal: Your Path to Improvement

A **trading journal** is a detailed record of every trade you take, including your analysis, execution, emotions, and results. It's the single most valuable tool for improving as a trader. Without a journal, you're flying blind—making the same mistakes repeatedly without realizing it.

Professional traders, athletes, and performers all track their performance. If you want to trade like a professional, you need to journal like one.

## Part 1: Why Keep a Trading Journal?

The fundamental reasons for journaling.

*   **Objective Feedback**: Memory is unreliable and biased. A journal provides objective data.
*   **Pattern Recognition**: Over time, you'll see patterns in your wins and losses that you'd never notice otherwise.
*   **Accountability**: Writing down your trades forces honesty about what you did and why.
*   **Identify Strengths**: What setups work best for you? What times of day? What market conditions?
*   **Identify Weaknesses**: What mistakes do you repeat? Where does discipline break down?
*   **Track Improvement**: Measure progress over weeks, months, and years.
*   **Combat Emotional Bias**: You can't dispute what's written in your own words at the time.
*   **Professional Practice**: Every successful trader has some form of journaling system.

## Part 2: What to Record

Essential elements of each journal entry.

### Trade Details
*   **Date and time** of entry and exit.
*   **Instrument**: What [stock](/glossary#stock), [currency pair](/glossary#forex), or [asset](/glossary#asset) you traded.
*   **Direction**: Long or short.
*   **Position size**: Number of shares, contracts, or dollar amount.
*   **Entry price** and **exit price**.
*   **[Stop-loss](/glossary#stop-loss)** and **profit target** levels.
*   **Profit or loss**: Actual result in dollars and percentage.
*   **Fees/commissions**: Track costs.

### Analysis and Reasoning
*   **Setup type**: What was the signal or pattern?
*   **Why you entered**: Write out your thesis in advance.
*   **Market conditions**: Trending or ranging? Bullish or bearish overall?
*   **Screenshot**: Chart at entry and exit. A picture is worth a thousand words.

### Emotional State
*   **How you felt before the trade**: Confident? Anxious? Impulsive?
*   **How you felt during**: Did you stick to the plan? Any urge to interfere?
*   **How you felt after**: Satisfied? Regretful? Regardless of the outcome.

### Execution Quality
*   **Did you follow your rules?** Yes or no. Be honest.
*   **What would you do differently?** Even on winners, consider improvements.

## Part 3: Journal Formats and Tools

Different ways to maintain your journal.

*   **Spreadsheet (Excel/Google Sheets)**: Simple, customizable, great for tracking metrics.
*   **Dedicated Software**: Tradervue, Edgewonk, Journalytix offer advanced analytics.
*   **Notebook (Physical)**: Some traders prefer handwriting for deeper reflection.
*   **Platform Screenshots**: Platforms like TradingView allow annotations.
*   **Hybrid Approach**: Spreadsheet for data, separate document for reflections.
*   **Whatever You'll Actually Use**: The best journal is the one you maintain consistently.

### Key Columns for a Spreadsheet
*   Date | Ticker | Direction | Entry | Exit | Size | P&L |  Setup | Did I follow rules? | Notes

## Part 4: The Weekly Review Process

Raw data alone isn't enough—you need to analyze it.

*   **Set a Time**: Same day each week (Sunday evening is common).
*   **Review All Trades**: Go through each trade from the week.
*   **Calculate Metrics**:
    *   Total P&L.
    *   Win rate (wins / total trades).
    *   Average win and average loss.
    *   Largest win and largest loss.
*   **Look for Patterns**:
    *   What setups performed best?
    *   What times of day were most profitable?
    *   Did any mistakes repeat?
*   **Assess Discipline**: How many trades followed rules perfectly?
*   **Action Items**: What will you do differently next week?
*   **Document Lessons**: Write down specific insights to remember.

## Part 5: The Monthly and Quarterly Review

Longer-term analysis reveals deeper patterns.

*   **Monthly Review**:
    *   Aggregate four weeks of data.
    *   Calculate monthly metrics.
    *   Identify the month's biggest success and biggest mistake.
    *   Assess progress toward goals.
*   **Quarterly Review**:
    *   Three months provides statistical relevance.
    *   Look for consistency or variability in results.
    *   Evaluate whether your strategy is working or needs adjustment.
    *   Consider market conditions—was it a favorable or difficult environment?
*   **Ask Strategic Questions**:
    *   Is my edge consistent?
    *   Are my weaknesses improving?
    *   Should I change anything fundamental?
*   **Adjust Goals**: Update targets based on actual performance.

## Part 6: Common Journaling Mistakes

Pitfalls to avoid.

*   **Not Journaling at All**: The most common mistake. Start today.
*   **Inconsistent Entries**: Journaling some trades but not others defeats the purpose.
*   **Recording Only P&L**: Numbers without context don't teach anything.
*   **Dishonesty**: Rationalizing in your journal protects your ego but prevents learning.
*   **Ignoring Emotions**: The emotional data is often more valuable than the pure numbers.
*   **Not Reviewing**: A journal you never read is just a filing cabinet.
*   **Skipping Winning Trades**: Winners have lessons too. Don't just analyze losses.
*   **Overcomplicating**: Start simple. Add complexity as needed.

## Part 7: Turning Data Into Improvement

Making your journal work for you.

*   **Identify Your Best Trades**: What do they have in common? Do more of those.
*   **Identify Your Worst Trades**: What do they have in common? Stop doing those.
*   **Find Rule Violations**: Which rules do you break most? Address them specifically.
*   **Optimize Setups**: Refine entry criteria based on what actually works for you.
*   **Adjust Position Sizing**: Are you sizing consistently? Are losses within tolerance?
*   **Track Improvement**: Compare this quarter to last. Are you making progress?
*   **Build Confidence**: Objective evidence of improvement builds genuine confidence.
*   **The Compound Effect**: Small improvements, tracked and reinforced, compound into major progress over time.

A trading journal transforms trading from gambling into a skill-based endeavor with feedback loops. It's the difference between hoping you improve and systematically ensuring you do. Start today, and your future self will thank you.
\`,
        keyTakeaways: [
            "A trading journal provides objective feedback—memory is biased, data is not.",
            "Record trade details, reasoning, screenshots, emotional state, and rule compliance.",
            "Review weekly for patterns, monthly for trends, quarterly for strategic assessment.",
            "Common mistakes: inconsistency, dishonesty, recording only P&L, and not reviewing.",
            "Turn data into improvement by doing more of what works and eliminating what doesn't."
        ]
    },`;

const startMarker = '"tp_7": {';
const endMarker = '"tp_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_7: Keeping a Trading Journal - VALIDATION ===');
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
console.log('✓ Successfully updated tp_7!');
