const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_5": {
        title: "The Business Cycle",
        content: \`
# Boom and Bust: Understanding the Business Cycle

The economy doesn't grow in a straight line—it moves in waves. These predictable patterns of expansion and contraction are called the **business cycle**. Understanding where we are in the cycle is one of the most powerful tools in investing. Different [asset classes](/glossary#asset-class) and sectors perform dramatically differently depending on the phase of the cycle.

Learning to identify the business cycle's stages allows you to rotate your portfolio proactively rather than reactively. Buy growth when the cycle is young; shift to defense when it matures. This knowledge separates sophisticated investors from those who simply buy and hope.

## Part 1: The Four Phases of the Business Cycle

The business cycle consists of four distinct phases that repeat over time, though the duration and intensity of each phase varies.

### 1. Expansion (Growth Phase)
*   **Characteristics**: GDP is growing. Unemployment is falling. Consumer confidence is rising. Business investment is increasing. Credit is expanding.
*   **Duration**: The longest phase—can last 6-10 years in modern economies.
*   **Market**: [Stocks](/glossary#stock) generally rise as corporate [earnings](/glossary#earnings) grow. [Interest rates](/glossary#interest-rate) gradually increase as the [Fed](/glossary#fed) normalizes policy.
*   **Risk**: As expansion matures, excesses build—too much debt, overinvestment, asset bubbles.

### 2. Peak
*   **Characteristics**: The economy is running at full capacity. Unemployment is at its lowest. [Inflation](/glossary#inflation) pressures emerge. Resource constraints bind. The [Fed](/glossary#fed) tightens policy aggressively.
*   **Duration**: Brief—a turning point rather than a phase.
*   **Market**: [Stocks](/glossary#stock) are often at highs, but [volatility](/glossary#volatility) increases. Smart money starts rotating to defense.
*   **Warning Signs**: Yield curve inverts. [Credit spreads](/glossary#spread) widen. Consumer confidence peaks.

### 3. Contraction (Recession)
*   **Characteristics**: GDP is shrinking. Unemployment is rising. Consumer and business confidence collapse. Bankruptcies increase. Credit contracts.
*   **Duration**: Typically 6-18 months, though severe recessions (2008) can last longer.
*   **Market**: [Stocks](/glossary#stock) fall (bear market). [Bonds](/glossary#bond) rally as rates are cut. Cash and defensive sectors outperform.
*   **Opportunity**: Prices become cheap. The best buying opportunities occur during recessions.

### 4. Trough (Recovery Beginning)
*   **Characteristics**: The economy hits bottom. Layoffs slow, then stop. Inventories are depleted. The [Fed](/glossary#fed) has cut rates aggressively. Stimulus kicks in.
*   **Duration**: Brief—the turning point before expansion.
*   **Market**: [Stocks](/glossary#stock) often bottom *before* the economy does. The early recovery produces the strongest returns.

## Part 2: Key Indicators of Each Phase

Tracking the right indicators helps you identify where we are in the cycle.

### Leading Indicators (Predict Future Activity)
*   **Yield Curve**: Inverted curve = recession coming. Steep curve = expansion ahead.
*   **Building Permits**: Housing leads the economy by 12-18 months.
*   **ISM Manufacturing PMI**: Above 50 = expansion; below 50 = contraction.
*   **Consumer Confidence**: Falling confidence precedes spending cuts.
*   **Jobless Claims**: Rising claims signal layoffs coming.
*   **Stock Market**: Often leads the economy by 6-9 months.

### Coincident Indicators (Real-Time)
*   **Employment/Payrolls**: Current job creation.
*   **Industrial Production**: Current factory output.
*   **Retail Sales**: Current consumer spending.
*   **GDP**: (Though reported with a lag, represents current activity.)

### Lagging Indicators (Confirm Trends)
*   **Unemployment Rate**: Falls well into the expansion; rises well into the recession.
*   **Core CPI** ([Inflation](/glossary#inflation)): Rises late in the cycle; falls during recession.
*   **Corporate Profits**: Reported quarterly, with a delay.

## Part 3: Sector and Asset Class Performance by Phase

Different investments thrive in different phases. Rotation is key.

### Early Expansion (Coming Out of Recession)
*   **Best Performers**: Financials (banks benefit from steepening yield curve), Consumer Discretionary (pent-up demand), Real Estate, Industrials, Small-Caps.
*   **Worst Performers**: Defensive sectors (utilities, staples) that led during recession.
*   **Fixed Income**: [Bonds](/glossary#bond) underperform as rates start rising.

### Mid-Expansion
*   **Best Performers**: Technology, Industrials, Materials—cyclical growth continues.
*   **Style**: [Growth stocks](/glossary#growth-stock) outperform. Risk-on sentiment prevails.
*   **[Credit](/glossary#credit)**: High-[yield](/glossary#yield) [bonds](/glossary#bond) do well as default risk falls.

### Late Expansion / Peak
*   **Best Performers**: Energy (commodity demand high), Materials, late-cycle [value](/glossary#value-stock).
*   **Caution**: [Volatility](/glossary#volatility) increases. The [Fed](/glossary#fed) is tightening hard.
*   **Strategy**: Reduce [equity](/glossary#equity) exposure. Raise cash. Move to quality and defense.

### Contraction / Recession
*   **Best Performers**: Utilities, Healthcare, Consumer Staples—defensive sectors with steady demand.
*   **[Bonds](/glossary#bond)**: Treasury [bonds](/glossary#bond) rally as rates collapse.
*   **Gold**: Often performs well as a crisis hedge.
*   **Cash**: Outperforms falling [equities](/glossary#equity).
*   **Worst Performers**: Financials (loan losses), Industrials, Consumer Discretionary.

## Part 4: The Fed's Role in the Cycle

The [Federal Reserve](/glossary#fed) doesn't control the business cycle, but its policies heavily influence its duration and severity.

*   **During Expansion**: The [Fed](/glossary#fed) gradually raises rates to prevent the economy from overheating.
    *   Too slow: [Inflation](/glossary#inflation) spirals.
    *   Too fast: They trigger a recession prematurely.
*   **At the Peak**: The [Fed](/glossary#fed) is usually tightening aggressively. The last rate hike often comes just before recession.
*   **During Contraction**: The [Fed](/glossary#fed) cuts rates rapidly and may deploy unconventional tools (QE) to cushion the downturn.
*   **At the Trough**: Rates are near zero. Stimulus flows. The [Fed](/glossary#fed) holds until recovery is confirmed.
*   **"Soft Landing" vs. "Hard Landing"**:
    *   **Soft Landing**: The [Fed](/glossary#fed) slows the economy just enough to contain [inflation](/glossary#inflation) without causing recession. Rare and difficult.
    *   **Hard Landing**: Aggressive tightening tips the economy into recession. More common historically.
*   **Policy Lag**: Monetary policy works with a lag of 12-18 months. The [Fed](/glossary#fed) is always fighting the last battle.

## Part 5: Historical Business Cycles

Studying past cycles provides context for current conditions.

*   **Post-WWII Average**: 11 recessions since 1945. Average expansion: ~5 years. Average recession: ~11 months.
*   **The Great Moderation (1982-2007)**: Long expansions, mild recessions. Thanks to better monetary policy? Better inventory management? Just luck?
*   **2008 Financial Crisis**: The worst recession since the Great Depression. Caused by housing bubble and financial system collapse. Recovery: 2009-2020 (the longest expansion in US history).
*   **COVID Recession (2020)**: The shortest recession on record (2 months). Caused by pandemic lockdowns, not underlying economic weakness. Rapid recovery fueled by massive fiscal and monetary stimulus.
*   **2022-2024 Rate Hiking Cycle**: The [Fed](/glossary#fed) raised rates aggressively to fight post-COVID [inflation](/glossary#inflation). As of 2024, the economy has avoided recession—a potential soft landing.

## Part 6: Contrarian Investing and the Cycle

The business cycle creates opportunities for contrarian investors who buy fear and sell greed.

*   **Buy When Others Are Fearful**: The best returns come from buying during recessions when sentiment is terrible and prices are low.
    *   March 2009: S&P 500 bottomed at 666. Those who bought earned 400%+ over the next decade.
    *   March 2020: COVID panic. S&P bottomed at 2,237. Gained 100%+ in 18 months.
*   **Sell When Others Are Greedy**: When everyone is optimistic, returns become stretched, and risk/reward deteriorates.
*   **Warren Buffett's Rule**: "Be fearful when others are greedy, and greedy when others are fearful."
*   **Practical Difficulty**: It's psychologically hard to buy when portfolios are down 30% and headlines are terrifying. A systematic approach helps.
*   **Don't Fight the Trend**: Contrarian doesn't mean fighting an established trend. Wait for signs of a turn.

## Part 7: Practical Application — Positioning Your Portfolio

How to use business cycle awareness in practice:

*   **Determine Current Phase**: Use leading indicators, yield curve shape, [Fed policy](/glossary#fed), and economic data to assess where we are.
*   **Adjust [Asset Allocation](/glossary#asset-allocation)**:
    *   **Early Cycle**: Overweight [equities](/glossary#equity), especially cyclicals and small-caps.
    *   **Mid-Cycle**: Stay in [equities](/glossary#equity), favor growth, take moderate [risk](/glossary#risk).
    *   **Late Cycle**: Reduce [equity](/glossary#equity) exposure, add quality and defense, raise cash.
    *   **Recession**: Hold cash and [bonds](/glossary#bond). Look for buying opportunities in beaten-down quality.
*   **Sector Rotation**: Shift from cyclical to defensive sectors as the cycle matures.
*   **Duration Management**: Shorten bond [duration](/glossary#duration) when rates are rising; lengthen when rates are peaking.
*   **Rebalance Regularly**: Don't let gains in hot sectors make your portfolio overly concentrated.
*   **Humility**: Cycle timing is imprecise. Use ranges and probabilities, not certainty.

Understanding the business cycle won't eliminate losses, but it will help you avoid the worst mistakes—buying at peaks and selling at bottoms. It's one of the most valuable frameworks an investor can master.
\`,
        keyTakeaways: [
            "The business cycle has four phases: Expansion, Peak, Contraction (Recession), and Trough.",
            "Different sectors and asset classes outperform in different phases—rotation is key.",
            "Leading indicators (yield curve, PMI, jobless claims) help predict turning points.",
            "The Fed influences the cycle through interest rate policy—'soft landings' are rare.",
            "Buy during fear (recessions), sell during greed (peaks)—contrarian investing aligns with the cycle."
        ]
    },`;

const startMarker = '"eco_5": {';
const endMarker = '"eco_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_5: The Business Cycle - VALIDATION ===');
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
console.log('✓ Successfully updated eco_5!');
