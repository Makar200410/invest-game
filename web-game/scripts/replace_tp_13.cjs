const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_13": {
        title: "The Journey to Mastery",
        content: \`
# The Journey to Mastery: Becoming a Professional Trader

**Trading mastery** is not a destination—it's a journey. It takes years, not weeks or months. The path involves study, practice, mistakes, lessons, and gradual improvement. Understanding this journey helps you set realistic expectations, stay motivated through difficulties, and ultimately reach a level of competence where trading becomes sustainable.

There are no shortcuts. But for those who commit, the rewards—financial and personal—are substantial.

## Part 1: The Stages of Trader Development

Understanding where you are and where you're going.

*   **Stage 1 - Unconscious Incompetence**: You don't know what you don't know. Trading seems easy at first.
*   **Stage 2 - Conscious Incompetence**: You realize how much there is to learn. This can be discouraging but is actually progress.
*   **Stage 3 - Conscious Competence**: You can trade successfully but it requires intense focus and deliberate effort.
*   **Stage 4 - Unconscious Competence**: Good trading becomes second nature. This is mastery.
*   **Typical Timeline**: 3-5 years to reach consistent profitability. 10+ years to true mastery.
*   **Most Quit Early**: The majority of traders quit during Stage 2, never reaching competence.
*   **The Hidden Stage**: Between 2 and 3, many cycle repeatedly, never quite breaking through.

## Part 2: The 10,000 Hours Rule

Deliberate practice is the key to expertise.

*   **Concept**: Expertise in complex fields requires roughly 10,000 hours of deliberate practice.
*   **Screen Time Alone Isn't Enough**: You need structured learning, review, and improvement—not just watching prices move.
*   **Deliberate Practice Includes**:
    *   Studying market mechanics and theory.
    *   Backtesting and analyzing strategies.
    *   Trading in simulated environments.
    *   Live trading with small size.
    *   Detailed journaling and review.
*   **Quality Over Quantity**: 2 hours of focused practice beats 8 hours of unfocused screen time.
*   **Feedback Loops**: Practice without feedback doesn't improve skills. Review and analyze constantly.
*   **Commitment**: At 20 hours/week of deliberate practice, mastery takes 10 years.

## Part 3: Common Mistakes on the Journey

Pitfalls that derail traders at every stage.

*   **Seeking Shortcuts**: Looking for the magic indicator, system, or guru that makes it easy. None exist.
*   **Giving Up Too Soon**: Quitting during the inevitable difficult periods.
*   **Skipping Foundations**: Jumping to advanced strategies without mastering basics.
*   **Avoiding Losses Mentally**: Not accepting that losses are part of the process.
*   **Overtrading Period**: Most new traders go through a phase of excessive trading and losses.
*   **Strategy Hopping**: Changing strategies after every losing streak, never mastering any.
*   **Undercapitalization**: Trading with money you can't afford to lose, creating emotional pressure.
*   **Isolation**: Trying to learn everything alone, without mentors or community.

## Part 4: Building Your Foundation

Essential knowledge and skills for trading success.

*   **Market Mechanics**: How orders work, market structure, [liquidity](/glossary#liquidity), and execution.
*   **[Technical Analysis](/glossary#technical-analysis)**: Reading charts, patterns, indicators—even if you blend approaches.
*   **[Fundamental Analysis](/glossary#fundamental-analysis)**: Understanding what drives value in the markets you trade.
*   **[Risk Management](/glossary#risk-management)**: Position sizing, [stop-losses](/glossary#stop-loss), portfolio construction.
*   **Trading Psychology**: Understanding your own mind and how it affects decisions.
*   **Your Specific Strategy**: Deeply mastering one approach before expanding.
*   **Continuous Learning**: Markets evolve. Stay a student forever.

## Part 5: Learning from Masters

Leveraging the wisdom of those who've come before.

*   **Books**: "Market Wizards" by Schwager, "Trading in the Zone" by Douglas, "Reminiscences of a Stock Operator" by Lefèvre.
*   **Successful Traders**: Study how top traders think, not just what they trade.
*   **Common Themes Among Masters**:
    *   Emphasis on [risk management](/glossary#risk-management).
    *   Patience and discipline.
    *   Simplicity of approach.
    *   Focus on process, not outcomes.
    *   Humility and continuous learning.
*   **Finding Mentors**: If possible, learn from someone who's already successful.
*   **Trading Communities**: Serious communities provide accountability, ideas, and support.
*   **Be Discerning**: Not all "gurus" are legitimate. Evaluate track records carefully.

## Part 6: Milestones on the Journey

Signs of progress to look for.

*   **Milestone 1**: Your losses become smaller and more controlled.
*   **Milestone 2**: You follow your rules more consistently than not.
*   **Milestone 3**: You experience a losing streak without abandoning your strategy.
*   **Milestone 4**: Your monthly P&L becomes more consistent.
*   **Milestone 5**: You can articulate exactly why you enter and exit trades.
*   **Milestone 6**: You spend less time trading and more time waiting for quality setups.
*   **Milestone 7**: Trading feels less emotional and more mechanical.
*   **Milestone 8**: You're profitable over a full year, accounting for all costs.
*   **Milestone 9**: Others recognize your competence and seek your advice.
*   **Milestone 10**: Trading becomes sustainable—financially, emotionally, and lifestyle-wise.

## Part 7: The Rewards of Mastery

What awaits those who persist.

*   **Financial Freedom**: A skilled trader can generate income from anywhere with an internet connection.
*   **Time Flexibility**: No commute, no boss, flexible schedule.
*   **Intellectual Challenge**: Markets are endlessly complex and engaging for curious minds.
*   **Personal Growth**: The discipline, emotional control, and self-awareness developed transform your whole life.
*   **Independence**: Your success depends on your own skills, decisions, and discipline.
*   **Compound Wealth**: Over decades, consistent trading returns build substantial capital.
*   **The Pride of Mastery**: Few accomplish what you've accomplished. It's deeply satisfying.

The journey to trading mastery is long and demanding. There will be moments of doubt, stretches of frustration, and periods of stagnation. But for those who persist—who treat trading as a serious profession and commit to deliberate practice and continuous improvement—the destination is worth every step of the path.
\`,
        keyTakeaways: [
            "Trading mastery takes 3-5 years to profitability, 10+ years to true expertise—there are no shortcuts.",
            "Progress through stages: unconscious incompetence → conscious incompetence → conscious competence → mastery.",
            "Deliberate practice includes study, backtesting, journaling, and small live trading—not just screen time.",
            "Common mistakes: seeking shortcuts, giving up too soon, strategy hopping, and isolation.",
            "The rewards of mastery: financial freedom, time flexibility, independence, and the satisfaction of expertise."
        ]
    },`;

const startMarker = '"tp_13": {';
const endMarker = '// Module 10:';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found: start=' + startIdx + ' end=' + endIdx); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_13: The Journey to Mastery - VALIDATION ===');
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

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated tp_13!');
