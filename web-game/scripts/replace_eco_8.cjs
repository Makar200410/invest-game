const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_8": {
        title: "Economic Indicators",
        content: \`
# The Economic Dashboard: Understanding Key Indicators

The economy doesn't come with a single gauge—it's more like a complex dashboard with dozens of indicators, each telling part of the story. Learning to read this dashboard is essential for any investor. When the jobs report is released, do you know how to interpret it? When CPI comes in "hot," do you understand the implications for your portfolio?

Economic data releases move markets. Traders anticipate, react, and sometimes overreact. Understanding these key indicators—what they measure, when they're released, and what the market expects—gives you a significant edge.

## Part 1: Types of Economic Indicators

Indicators are classified by when they signal economic changes.

### Leading Indicators
*   **Definition**: Data that changes *before* the economy as a whole changes direction. They predict future activity.
*   **Examples**:
    *   **Building Permits**: New construction leads economic cycles by 12-18 months.
    *   **ISM Manufacturing PMI**: Above 50 = expansion; below 50 = contraction. Early signal.
    *   **Initial Jobless Claims**: Rising claims often precede recession.
    *   **Consumer Confidence / Sentiment**: People spend less when worried.
    *   **Stock Market**: Often rallies 6-9 months before economic recovery.
    *   **Yield Curve**: Inverted curve predicts recession.
*   **Use**: Position ahead of economic turning points.

### Coincident Indicators
*   **Definition**: Data that moves with the economy in real-time. Confirms current conditions.
*   **Examples**:
    *   **Nonfarm Payrolls**: Current job creation.
    *   **Industrial Production**: Current factory output.
    *   **Retail Sales**: Current consumer spending.
    *   **GDP**: (Though reported with delay, represents current output.)
*   **Use**: Assess the current state of the economy.

### Lagging Indicators
*   **Definition**: Data that changes *after* the economy has already changed. Confirms trends.
*   **Examples**:
    *   **Unemployment Rate**: Falls well after expansion is underway; rises after recession starts.
    *   **Core CPI** ([Inflation](/glossary#inflation)): Changes slowly.
    *   **Corporate Profits**: Reported quarterly, with delay.
    *   **Bank Lending**: Expands after confidence returns.
*   **Use**: Confirm that a trend is real and established.

## Part 2: Inflation Indicators

[Inflation](/glossary#inflation) data is among the most market-moving releases, especially when the [Fed](/glossary#fed) is focused on price stability.

### CPI (Consumer Price Index)
*   **What It Measures**: The average change in prices paid by urban consumers for a basket of goods and services.
*   **Release**: Monthly, by the Bureau of Labor Statistics (BLS). Usually mid-month.
*   **Headline vs. Core**:
    *   **Headline CPI**: Includes all items, including volatile food and energy.
    *   **Core CPI**: Excludes food and energy. Often considered more reliable for trend analysis.
*   **Market Impact**: A hotter-than-expected CPI reading is typically bearish for [stocks](/glossary#stock) and [bonds](/glossary#bond) (Fed may hike more). Cooler-than-expected is bullish (Fed may ease).

### PCE (Personal Consumption Expenditures)
*   **What It Measures**: Similar to CPI but with a broader scope and different weighting.
*   **[Fed](/glossary#fed) Preference**: The [Fed](/glossary#fed) targets 2% on **Core PCE**, not CPI.
*   **Release**: Monthly, by the Bureau of Economic Analysis (BEA).

### PPI (Producer Price Index)
*   **What It Measures**: Prices at the wholesale/producer level.
*   **Leading Signal**: Producer price increases often pass through to consumer prices. A leading indicator for CPI.

## Part 3: Employment Indicators

Jobs data is critical because the [Fed](/glossary#fed) has a dual mandate: stable prices *and* maximum employment.

### Nonfarm Payrolls (The Jobs Report)
*   **What It Measures**: The number of jobs added or lost in the economy (excluding farms).
*   **Release**: First Friday of every month at 8:30 AM ET. One of the most-watched data releases.
*   **Market Impact**: Strong job gains = bullish for economy but may mean more [Fed](/glossary#fed) tightening. Weak job gains = bearish for growth but may bring [Fed](/glossary#fed) easing.
*   **Goldilocks**: Markets like moderate job gains—strong enough for growth, not so hot that the [Fed](/glossary#fed) panics about [inflation](/glossary#inflation).

### Unemployment Rate
*   **What It Measures**: The percentage of the labor force that is unemployed and actively seeking work.
*   **Lagging Indicator**: Falls well into expansion; rises well into recession.
*   **"Natural" Unemployment**: Around 4-5%. Below that, the labor market is considered "tight" and potentially inflationary.

### Jobless Claims
*   **Initial Claims**: The number of people filing for unemployment benefits for the first time. Released weekly.
*   **Leading Indicator**: Rising claims often signal coming layoffs. Watch the 4-week moving average to smooth [volatility](/glossary#volatility).
*   **Continuing Claims**: Total number currently receiving benefits.

### JOLTS (Job Openings and Labor Turnover Survey)
*   **What It Measures**: Job openings, hires, and quits.
*   **Quits Rate**: High quit rate = workers confident they can find better jobs = strong labor market.

## Part 4: Growth and Spending Indicators

These indicators measure economic activity and consumer behavior.

### GDP (Gross Domestic Product)
*   **What It Measures**: The total value of goods and services produced.
*   **Release**: Quarterly. Advance estimate ~4 weeks after quarter-end; revised twice.
*   **Market Impact**: Stronger-than-expected = bullish for [stocks](/glossary#stock), potentially hawkish for [Fed](/glossary#fed). Weaker = opposite.

### Retail Sales
*   **What It Measures**: Total receipts at stores and restaurants.
*   **Importance**: Consumer spending is ~68% of GDP. This is the pulse of the consumer.
*   **Release**: Monthly. Usually mid-month.
*   **Interpretation**: Strong retail sales = healthy consumer = economy growing. Weak = trouble ahead.

### ISM Manufacturing and Services PMI
*   **What It Measures**: Surveys of purchasing managers. Measures business activity.
*   **Above 50**: Expansion. **Below 50**: Contraction.
*   **Leading Indicator**: PMI often turns before the broader economy.
*   **Release**: First business day of the month (Manufacturing) and third business day (Services).

### Housing Data
*   **Building Permits/Housing Starts**: Leading indicator. Rising permits = construction activity ahead.
*   **Existing Home Sales/New Home Sales**: Measures housing market activity.
*   **Case-Shiller Home Price Index**: Tracks home price changes.
*   **Importance**: Housing is interest-rate sensitive. When rates rise, housing slows—can drag the economy.

## Part 5: Consumer and Business Confidence

Expectations matter. If people expect the economy to weaken, they spend less—making the weakness self-fulfilling.

### Consumer Confidence (Conference Board)
*   **What It Measures**: How optimistic consumers feel about the economy.
*   **Impact**: High confidence = more spending. Low confidence = less spending.
*   **Release**: Monthly, late in the month.

### University of Michigan Consumer Sentiment
*   **What It Measures**: Similar to Conference Board, with different methodology.
*   **Release**: Preliminary mid-month, final late month.
*   **Inflation Expectations**: This survey includes expectations for future [inflation](/glossary#inflation)—closely watched by the [Fed](/glossary#fed).

### ISM Manufacturing / Services Index (Also Confidence)
*   **Components like New Orders**: High new orders signal optimism.

### CEO Confidence / Business Surveys
*   **What They Measure**: How corporate leaders see the outlook.
*   **Impact**: Low CEO confidence often precedes reduced investment and hiring.

## Part 6: Trading the Economic Calendar

Traders actively position around data releases. Here's how:

*   **Know the Calendar**: Use an economic calendar (Bloomberg, Investing.com, ForexFactory). Know what's coming and when.
*   **Consensus Expectations**: Before each release, economists provide forecasts. The market prices in these expectations. What matters is the *surprise*—actual vs. expected.
*   **Reaction Patterns**:
    *   **Beat Expectations**: Positive surprise. Usually bullish for related [assets](/glossary#asset).
    *   **Miss Expectations**: Negative surprise. Usually bearish.
    *   **Meet Expectations**: May be a non-event, or market moves on secondary details.
*   **The "Whisper Number"**: Sometimes traders have unofficial expectations different from consensus. These often matter more.
*   **Fade the Move**: Initial reactions are often reversed. Wait for the dust to settle before acting.
*   **Don't Trade into the Number**: Unless you have edge, avoid being positioned right before a major release. [Volatility](/glossary#volatility) spikes; you can be stopped out before the market moves your direction.

## Part 7: Building an Economic Worldview

Successful investors synthesize data into a coherent narrative.

*   **Look for Trends**: A single data point is noisy. Look at 3-6 months of data for trend direction.
*   **Cross-Reference**: Does the jobs report confirm what PMI is saying? Do retail sales match consumer confidence? Contradictions require explanation.
*   **Think About [Fed](/glossary#fed) Reaction**: Every data release matters in the context of what the [Fed](/glossary#fed) will do. Hot [inflation](/glossary#inflation) + strong jobs = more hikes likely.
*   **Leading vs. Lagging**: Prioritize leading indicators for positioning; use lagging indicators for confirmation.
*   **Global Data**: Don't just watch US data. China PMI, European [inflation](/glossary#inflation), and EM central bank decisions affect global markets.
*   **Stay Flexible**: Your thesis should evolve as data comes in. Don't fight the data.
*   **Build a Routine**: Review the economic calendar weekly. Note important releases. Prepare scenarios for different outcomes.

Mastering economic indicators transforms you from a passive observer into an informed participant. The data is public—the edge is in interpretation.
\`,
        keyTakeaways: [
            "Leading indicators (PMI, claims, permits) predict; coincident (payrolls) show now; lagging (unemployment) confirm.",
            "CPI and PCE measure inflation—hot prints are bearish for stocks/bonds; cool prints are bullish.",
            "Nonfarm Payrolls (first Friday each month) is the most-watched employment release.",
            "Markets react to surprises vs. expectations, not just the absolute number.",
            "Cross-reference multiple indicators, focus on trends, and always think about Fed implications."
        ]
    },`;

const startMarker = '"eco_8": {';
const endMarker = '"ret_1": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_8: Economic Indicators - VALIDATION ===');
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

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    // Module 11: Retirement Planning\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated eco_8!');
