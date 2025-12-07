const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_1": {
        title: "Day Trading vs. Swing Trading",
        content: \`
# Day Trading vs. Swing Trading: Choosing Your Time Horizon

One of the most fundamental decisions a trader must make is their **time horizon**. Are you a [day trader](/glossary#day-trading) who closes all positions before the market closes, or a [swing trader](/glossary#swing-trading) who holds for days or weeks? This choice affects everything from your strategy to your lifestyle to your psychological stress.

Both approaches can be profitable, but they require different skills, capital, and temperaments. Understanding the distinctions helps you find the style that fits your personality and circumstances. Many traders fail not because their strategy is flawed, but because they chose a time horizon incompatible with their lifestyle.

## Part 1: What Is Day Trading?

**Day trading** involves opening and closing positions within the same trading day. No positions are held overnight.

*   **Definition**: Day traders capitalize on intraday price movements. They might hold a position for seconds, minutes, or hours—but never past the market close.
*   **Capital Requirements**: In the US, the "Pattern Day Trader" rule requires $25,000 minimum equity to day trade [stocks](/glossary#stock) more than 3 times per week.
*   **Instruments**: [Stocks](/glossary#stock), [futures](/glossary#futures), [forex](/glossary#forex), and [options](/glossary#options). Futures and forex don't have the PDT rule.
*   **Leverage**: Day traders often use [margin](/glossary#margin)—typically 4:1 [leverage](/glossary#leverage) for [stocks](/glossary#stock), higher for [futures](/glossary#futures) and [forex](/glossary#forex).
*   **Trading Hours**: Requires focus during market hours. For US [stocks](/glossary#stock), that's 9:30 AM - 4:00 PM ET.
*   **Number of Trades**: Active day traders may execute 10-100+ trades per day.
*   **Goal**: Capture small moves repeatedly. A day trader might aim for 0.5%-2% profit per trade, compounding through volume.

## Part 2: What Is Swing Trading?

**Swing trading** involves holding positions for several days to several weeks to capture price "swings" or trends.

*   **Definition**: Swing traders seek to profit from multi-day or multi-week price movements. They're not concerned with intraday noise.
*   **Capital Requirements**: No special minimums beyond standard brokerage requirements. You can swing trade with any account size.
*   **Time Commitment**: Less demanding than day trading. You can analyze charts and place orders outside market hours.
*   **Overnight Risk**: Positions are held overnight and over weekends, exposing you to gap [risk](/glossary#risk)—the price may jump dramatically on news.
*   **Trade Frequency**: Swing traders might make 2-10 trades per week.
*   **Charts**: Typically use daily and 4-hour charts rather than 1-minute or 5-minute charts.
*   **Goal**: Capture larger moves (5%-20%+) over days or weeks, rather than small intraday scalps.

## Part 3: Key Differences

Understanding the core differences helps you choose the right approach.

| Factor | Day Trading | Swing Trading |
|--------|-------------|---------------|
| **Holding Period** | Same day | Days to weeks |
| **Overnight [Risk](/glossary#risk)** | None (all cash at close) | Yes (gap [risk](/glossary#risk)) |
| **Time Commitment** | Full-time (market hours) | Part-time (flexible) |
| **Capital Required** | $25,000+ (PDT rule) | Lower (no minimum) |
| **Stress Level** | Very high | Moderate |
| **Charts Used** | 1-min, 5-min, 15-min | Daily, 4-hour |
| **Trade Frequency** | High (many per day) | Low (few per week) |
| **Profit Target** | Small (0.5%-2%) | Larger (5%-20%+) |
| **Transaction Costs** | Higher (more trades) | Lower (fewer trades) |
| **Lifestyle** | Must be at screen | Can work a day job |

## Part 4: Pros and Cons of Day Trading

### Advantages
*   **No Overnight [Risk](/glossary#risk)**: You go home flat. No worrying about earnings surprises, geopolitical events, or weekend gaps.
*   **Daily Compounding**: If profitable, you can compound daily.
*   **More Trading Opportunities**: The market offers countless intraday setups every day.
*   **Quick Feedback**: You know immediately if your trade worked.

### Disadvantages
*   **High Stress**: Requires intense focus for hours. Decision fatigue is real.
*   **Transaction Costs**: Commissions and [spreads](/glossary#spread) add up with high volume.
*   **PDT Rule**: Minimum $25,000 limits accessibility for US [stock](/glossary#stock) traders.
*   **Time Demand**: Essentially a full-time job. Hard to combine with other work.
*   **Overtrading [Risk](/glossary#risk)**: The temptation to trade constantly leads to poor decisions.
*   **Low Win Rate Sensitivity**: A 50% win rate with 1:1 risk/reward barely breaks even after costs.

## Part 5: Pros and Cons of Swing Trading

### Advantages
*   **Flexibility**: Can be done alongside a day job. Analyze after hours, set orders, and let trades run.
*   **Lower Transaction Costs**: Fewer trades = less commission and [spread](/glossary#spread) cost.
*   **Larger Moves**: Capturing a 10% swing is more rewarding than a 0.5% scalp.
*   **Less Screen Time**: You don't need to watch every tick.
*   **No PDT Rule**: No capital minimums for swing trading [stocks](/glossary#stock).

### Disadvantages
*   **Overnight [Risk](/glossary#risk)**: Gaps can cause huge losses or gains—often unpredictably.
*   **Slower Feedback**: You wait days or weeks to know if your thesis was right.
*   **Patience Required**: Sitting through pullbacks and drawdowns tests your psychology.
*   **Opportunity Cost**: Capital is tied up for days or weeks.
*   **Weekend [Risk](/glossary#risk)**: Holding over weekends exposes you to news events.

## Part 6: Which Style Suits Your Personality?

Your psychology and lifestyle should drive your choice.

### Day Trading May Suit You If:
*   You can dedicate full-time hours to trading.
*   You thrive under pressure and make quick decisions well.
*   You prefer immediate feedback and resolution.
*   You have at least $25,000 in capital (for US [stocks](/glossary#stock)).
*   You can accept many small losses without emotional distress.
*   You don't want overnight [risk](/glossary#risk).

### Swing Trading May Suit You If:
*   You have a job or other commitments during market hours.
*   You prefer a slower pace with time to analyze.
*   You can hold positions through drawdowns without panicking.
*   You have patience to wait for larger moves.
*   You don't have $25,000 or want to avoid PDT rules.
*   You can manage overnight and weekend [risk](/glossary#risk).

### Hybrid Approaches
*   Many traders combine both. For example, primarily swing trade but take opportunistic day trades when conditions are ideal.
*   Some day trade [futures](/glossary#futures) or [forex](/glossary#forex) (no PDT rule) while swing trading [stocks](/glossary#stock).

## Part 7: Strategy Considerations

Your time horizon shapes your entire strategy.

### Technical Analysis Differences
*   **Day Trading**: Focus on order flow, Level 2 quotes, short-term [patterns](/glossary#chart-pattern), and 1-min/5-min charts.
*   **Swing Trading**: Focus on daily [support](/glossary#support)/[resistance](/glossary#resistance), [moving averages](/glossary#moving-average), and multi-day [patterns](/glossary#chart-pattern).

### Risk Management
*   **Day Trading**: Tighter [stop-losses](/glossary#stop-loss) (often 0.5%-1%). Size positions for the smaller move.
*   **Swing Trading**: Wider [stops](/glossary#stop-loss) (2%-8%) to accommodate normal fluctuations. Smaller position size per trade.

### News and Catalysts
*   **Day Trading**: Trade the immediate reaction to news (e.g., earnings, economic data).
*   **Swing Trading**: Position for anticipated news or ride the multi-day trend after news.

### Tools and Setup
*   **Day Trading**: Demands fast execution, direct-access brokers, multiple monitors, and Level 2 data.
*   **Swing Trading**: Standard brokerage with charting and alerts is sufficient.

### Capital Allocation
*   **Day Trading**: Often concentrate in 1-3 positions for focused attention.
*   **Swing Trading**: Can manage 5-15 positions since you're not watching every tick.

Ultimately, neither approach is superior. Success depends on matching your style to your skills, capital, and lifestyle. Many traders start with swing trading, then transition to day trading once they have the capital, experience, and time to commit.
\`,
        keyTakeaways: [
            "Day trading means closing all positions same-day; swing trading holds for days to weeks.",
            "Day trading requires $25,000+ (US PDT rule), intense focus, and full-time commitment.",
            "Swing trading is more flexible and compatible with a day job but carries overnight gap risk.",
            "Choose your time horizon based on personality, lifestyle, and capital—not just profit potential.",
            "Risk management differs: tight stops for day trading, wider stops for swing trading."
        ]
    },`;

const startMarker = '"as_1": {';
const endMarker = '"as_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_1: Day Trading vs. Swing Trading - VALIDATION ===');
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

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated as_1!');
