const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "tp_11": {
        title: "Stress Management",
        content: \`
# Stress Management: Protecting Your Mental Capital

Trading is inherently stressful. Money is on the line, outcomes are uncertain, and markets move unpredictably. Without proper **stress management**, this pressure erodes decision-making, health, and ultimately trading performance. Learning to manage stress isn't just about wellbeing—it's about profitability.

Your mental capital is as important as your financial capital. Protect it.

## Part 1: Understanding Trading Stress

The sources and nature of stress in trading.

*   **Financial [Risk](/glossary#risk)**: Real money is at stake. Losses hurt materially for most traders.
*   **Uncertainty**: You can do everything right and still lose. This is inherently stressful.
*   **Time Pressure**: Markets move fast. Quick decisions feel necessary.
*   **Information Overload**: News, charts, opinions, data—endless stimuli demanding attention.
*   **Ego Involvement**: Being "wrong" feels personal. Trades become about identity.
*   **Comparison**: Seeing others win (or claim to) while you struggle.
*   **Performance Pressure**: If trading is your income, the pressure intensifies.
*   **Isolation**: Many traders work alone, without colleagues or support.

## Part 2: The Impact of Stress on Trading

How stress damages your performance.

*   **Cognitive Impairment**: Stress narrows focus, reduces creativity, and impairs complex thinking.
*   **Poor Decisions**: Under stress, we take shortcuts, act impulsively, and miss important information.
*   **Emotional Reactions**: Stress amplifies fear and greed. Revenge trading and panic exits increase.
*   **Physical Effects**: Stress causes fatigue, poor sleep, and health issues—all of which hurt trading.
*   **Risk Perception Changes**: Stressed traders may become either too cautious or too reckless.
*   **Burnout**: Chronic stress leads to exhaustion, cynicism, and eventual withdrawal from trading.
*   **Negative Feedback Loop**: Stress → bad trades → more stress → worse trades.
*   **Life Impact**: Trading stress spills over into relationships, health, and happiness.

## Part 3: Recognizing Your Stress Signals

Identifying when stress is becoming a problem.

*   **Physical Signs**: Tension, headaches, racing heart, trouble sleeping, fatigue, appetite changes.
*   **Emotional Signs**: Anxiety, irritability, frustration, hopelessness, feeling overwhelmed.
*   **Behavioral Signs**: Overtrading, impulsive decisions, skipping analysis, drinking more, avoiding the markets (or obsessing over them).
*   **Cognitive Signs**: Difficulty concentrating, racing thoughts, catastrophic thinking.
*   **Performance Signs**: More mistakes, breaking rules, worse P&L.
*   **The Awareness Gap**: Often we don't realize how stressed we are until something breaks. Stay vigilant.
*   **Regular Check-Ins**: Before trading, ask: "On a scale of 1-10, how stressed am I?" If above 7, reconsider.

## Part 4: Lifestyle Factors

The foundation of stress resilience.

*   **Sleep**: 7-9 hours is essential. Sleep-deprived traders make worse decisions.
*   **Exercise**: Regular physical activity is one of the best stress reducers. Move your body.
*   **Nutrition**: Stable blood sugar = stable mood. Avoid excessive caffeine and sugar.
*   **Hydration**: Dehydration affects cognition. Keep water at your desk.
*   **Breaks**: Take regular breaks during trading. Step away from screens.
*   **Social Connection**: Isolation worsens stress. Maintain relationships outside trading.
*   **Hobbies**: Have interests beyond trading. You need mental rest from markets.
*   **Environment**: A comfortable, organized workspace reduces stress.

## Part 5: In-the-Moment Stress Techniques

Immediate tools when stress hits during trading.

*   **Deep Breathing**: 4-7-8 technique (inhale 4, hold 7, exhale 8). Activates parasympathetic nervous system.
*   **Physical Reset**: Stand up, stretch, walk around. Break the physical tension.
*   **Step Away**: Leave the trading station. Even 5 minutes provides space.
*   **Ground Yourself**: Focus on physical sensations—feet on floor, hands on desk. Get out of your head.
*   **Verbal Reminders**: Say aloud: "This is just one trade. I follow my plan. I accept the outcome."
*   **Change Environment**: Go outside, look at nature, change your visual field.
*   **Cold Water**: Splash cold water on face or hold ice cubes. Physiologically calming.
*   **The Pause**: Before any trade decision, take three deep breaths. Create space between impulse and action.

## Part 6: Long-Term Stress Management Practices

Building sustainable stress resilience.

*   **Meditation**: Daily practice improves emotional regulation. Apps like Headspace or Calm help.
*   **Journaling**: Writing about stress helps process emotions. Include a stress section in your trading journal.
*   **Therapy or Coaching**: Professional support for managing the psychological demands of trading.
*   **Reduced Position Size**: If stress is persistent, you're trading too large. Size down.
*   **Simplified Strategy**: More complexity = more stress. Simplify where possible.
*   **Trading Hours Limits**: Don't trade all day. Set specific hours and stop.
*   **Regular Time Off**: Take days or weeks completely off from markets.
*   **Financial Cushion**: Having savings outside trading reduces existential pressure.

## Part 7: Creating a Sustainable Trading Life

Designing a trading practice that doesn't destroy you.

*   **Know Your Limits**: How much drawdown can you handle? How many hours? Be honest and stay within limits.
*   **Separate Identity from Trading**: You are not your P&L. Your worth isn't determined by the market.
*   **Meaningful Goals**: Why are you trading? Money is a means, not an end. What's the money for?
*   **Work-Life Balance**: Trading shouldn't consume your entire life. Maintain boundaries.
*   **Periodic Assessment**: Quarterly, ask: "Is trading improving my life or harming it?"
*   **Exit Strategy**: Have a plan for when to step back if stress becomes unmanageable.
*   **Long-Term Perspective**: Trading is a marathon. Burning out in year one serves no one.
*   **Self-Compassion**: Trading is hard. Be kind to yourself when things go wrong.

Stress management isn't a luxury—it's a requirement for sustainable trading success. The traders who last decades in the markets aren't just the smartest or the best at analysis—they're the ones who learned to protect their mental health while playing a very demanding game.
\`,
        keyTakeaways: [
            "Trading is inherently stressful due to financial risk, uncertainty, and time pressure.",
            "Stress impairs cognition, amplifies emotional reactions, and damages trading performance.",
            "Recognize stress signals: physical tension, irritability, impulsive trading, poor sleep.",
            "Lifestyle foundations: adequate sleep, exercise, nutrition, breaks, and social connection.",
            "In-the-moment techniques: deep breathing, stepping away, and pausing before decisions."
        ]
    },`;

const startMarker = '"tp_11": {';
const endMarker = '"tp_12": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== tp_11: Stress Management - VALIDATION ===');
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
console.log('✓ Successfully updated tp_11!');
