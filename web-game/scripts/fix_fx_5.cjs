const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "fx_5": {
        title: "Forex Market Sessions",
        content: \`
# The 24-Hour Global Marketplace: Understanding Forex Market Sessions

Unlike the stock market, which has fixed opening and closing times, the Forex market operates 24 hours a day, 5 days a week. However, not all hours are created equal. The market is divided into distinct trading sessions, each with its own personality, volatility, and trading opportunities. Understanding when to trade is just as important as knowing what to trade.

## Part 1: The Three Major Trading Sessions

The Forex market is anchored by three major financial centers that define the trading day. Each session has unique characteristics driven by the economic activity of that region.

**The Asian Session (Tokyo)**:
*   **Hours**: 7:00 PM - 4:00 AM EST (12:00 AM - 9:00 AM GMT).
*   **Key Markets**: Tokyo, Hong Kong, Singapore, Sydney.
*   **Personality**: Typically the quietest session. Low volatility and narrow ranges are common. Price often consolidates within the previous day's range.
*   **Best Pairs**: JPY pairs (USD/JPY, EUR/JPY, AUD/JPY) and AUD/NZD pairs.
*   **Strategy**: Range trading works well. Look for support and resistance levels to hold.

**The European Session (London)**:
*   **Hours**: 3:00 AM - 12:00 PM EST (8:00 AM - 5:00 PM GMT).
*   **Key Markets**: London, Frankfurt, Zurich, Paris.
*   **Personality**: The most active session. London is the financial capital of Forex, handling over 30% of all daily volume. Trends often start here with powerful breakouts.
*   **Best Pairs**: EUR pairs, GBP pairs, and all majors.
*   **Strategy**: Trend following and breakout trading excel. Look for Asian session ranges to break.

**The North American Session (New York)**:
*   **Hours**: 8:00 AM - 5:00 PM EST (1:00 PM - 10:00 PM GMT).
*   **Key Markets**: New York, Chicago, Toronto.
*   **Personality**: Second most active session. The first half overlaps with London, creating explosive moves. The second half is quieter as London closes.
*   **Best Pairs**: All USD pairs, CAD pairs.
*   **Strategy**: News trading is common (NFP, CPI releases). Watch for reversals after European moves.

## Part 2: The Power of Session Overlaps

The most volatile and profitable trading opportunities occur when two major sessions overlap. This is when liquidity is at its peak and large institutions are most active.

**The London/New York Overlap (8:00 AM - 12:00 PM EST)**:
*   This is the "Golden Window" of Forex trading.
*   Over 70% of the daily volume passes through during these 4 hours.
*   Spreads are tightest, liquidity is highest, and moves are cleanest.
*   Major US economic data is released, causing massive volatility.
*   **Strategy**: This is prime time for day traders. Place your best trades here.

**The Asian/London Overlap (3:00 AM - 4:00 AM EST)**:
*   Shorter and less significant but can produce early momentum.
*   European traders react to Asian session developments.
*   GBP/JPY and EUR/JPY can be particularly volatile.

**The New York/Asian Overlap (7:00 PM - 8:00 PM EST)**:
*   The quietest overlap. New York is winding down, and Asia is just starting.
*   Often see low volatility and consolidation patterns forming.
*   Not ideal for active trading.

## Part 3: Volatility by Session

Understanding the average volatility of each session helps set realistic expectations and position sizes.

**Average Daily Pip Ranges by Session**:
*   **EUR/USD**: Asian (20-40 pips), London (70-100 pips), New York (50-80 pips).
*   **GBP/USD**: Asian (30-50 pips), London (100-150 pips), New York (60-100 pips).
*   **USD/JPY**: Asian (30-50 pips), London (50-80 pips), New York (50-70 pips).
*   **GBP/JPY**: Asian (50-80 pips), London (150-250 pips), New York (100-150 pips).

**The Implication**: If you trade GBP/JPY during the Asian session expecting 200-pip moves, you will be disappointed. Always match your expectations to the session.

## Part 4: The Weekly Cycle

Not all days are equal. The Forex market has a weekly rhythm.

**Monday**:
*   Often the slowest day. Markets are digesting weekend news.
*   Gaps can occur if major news broke over the weekend.
*   Strategy: Wait and observe. Don't force trades.

**Tuesday to Thursday**:
*   The "meat" of the trading week. Highest volume and cleanest trends.
*   Most major economic data is released during this period.
*   Strategy: This is when you should be most active.

**Friday**:
*   Volatility in the morning (especially during London/NY overlap).
*   Afternoon is often quiet as traders close positions before the weekend.
*   Strategy: Trade early, exit early. Avoid holding trades over the weekend unless you have a strong reason.

## Part 5: Time Zones and Daylight Saving Time

Forex hours are complicated by daylight saving time (DST). The US and Europe change clocks at different times, creating a period of confusion each spring and fall.

**Best Practice**:
*   Use GMT (Greenwich Mean Time) as your anchor. It doesn't observe DST.
*   Use a Forex session clock tool (available on most trading platforms).
*   Mark major session opens on your charts.

**Key Opening Times (EST)**:
*   Sydney: 5:00 PM
*   Tokyo: 7:00 PM
*   London: 3:00 AM
*   New York: 8:00 AM

## Part 6: The Sunday Open and Friday Close

The Forex week starts Sunday 5:00 PM EST (Sydney open) and ends Friday 5:00 PM EST (New York close).

**The Sunday Open**:
*   Liquidity is extremely low. Spreads can be massive.
*   If major news broke over the weekend, prices can "gap" significantly.
*   **Strategy**: Do not place market orders near the Sunday open. Wait for Monday to assess the market.

**The Friday Close**:
*   Traders unwind positions to avoid weekend risk.
*   Unexpected reversals can occur as positions are closed.
*   **Strategy**: Close day trades by Friday afternoon. If holding a swing trade, ensure your stop loss accounts for potential weekend gaps.

## Part 7: Choosing the Right Session for Your Style

Your trading style should match the session you trade.

**Scalpers**:
*   Need high volatility and tight spreads.
*   Best Session: London/NY Overlap.
*   Avoid: Asian session (too slow).

**Day Traders**:
*   Need strong trends that develop and complete within a session.
*   Best Session: London session (for European pairs) or NY session (for USD pairs).

**Swing Traders**:
*   Hold trades for days or weeks. Less sensitive to session timing.
*   Focus on Daily charts. Session doesn't matter as much.
*   Entry Tip: Still try to enter during the London session for best fills.

**Position Traders**:
*   Hold trades for weeks or months based on fundamental analysis.
*   Session is irrelevant. Focus on central bank announcements and economic cycles.

## Part 8: Common Mistakes and Pitfalls

Avoid these session-related errors:

**Trading the Wrong Hours**:
*   If you're in New York trying to trade the Asian session at 2 AM, you're fighting an uphill battle. Low volatility, wide spreads, and fatigue make this a losing proposition.

**Ignoring News Schedules**:
*   Economic releases happen at specific times. NFP is always the first Friday of the month at 8:30 AM EST. If you're long EUR/USD 5 minutes before NFP, you're gambling.

**Expecting Asian Trends**:
*   The Asian session rarely trends. It consolidates. Don't buy breakouts during Tokyo hours—they're often fake.

**Overtrading During Slow Periods**:
*   Just because the market is open doesn't mean you should trade. If it's 3 PM New York time and nothing is moving, close the charts.

## Part 9: Summary and Best Practices

*   **Best Time to Trade**: London session and the London/NY overlap.
*   **Best Days**: Tuesday, Wednesday, Thursday.
*   **Avoid**: Sunday open, Friday afternoon, and major holidays.
*   **Match Your Style**: Scalpers need volatility; swing traders need trends.
*   **Use Tools**: Session indicators, Forex clocks, economic calendars.
*   **Respect the Rhythm**: The market has a heartbeat. Learn it and trade in harmony with it.
\`,
        keyTakeaways: [
            "The Forex market operates 24/5 across three major sessions: Asian, London, and New York.",
            "The London/New York overlap is the most volatile and liquid trading window.",
            "Tuesday through Thursday are the best days to trade.",
            "Match your trading style to the session's volatility profile.",
            "Avoid the Sunday open and Friday close due to low liquidity and weekend risk."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old fx_5 content
const startPattern = /    "fx_5": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('fx_5 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('fx_5 not found!');
}
