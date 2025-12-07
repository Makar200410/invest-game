const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "fx_7": {
        title: "Central Bank Interventions",
        content: \`
# The Ultimate Market Movers: Central Bank Interventions in Forex

Central banks are the most powerful players in the Forex market. When a central bank decides to intervene, it can move a currency by hundreds or even thousands of pips in a single day. Understanding how, why, and when central banks intervene is essential for any serious Forex trader. Ignoring the central bank is like ignoring a hurricane—it will destroy your account.

## Part 1: What is Central Bank Intervention?

Central bank intervention occurs when a country's monetary authority buys or sells its own currency in the Forex market to influence the exchange rate.

**Direct Intervention**:
*   The central bank physically enters the market and trades.
*   Example: The Bank of Japan (BOJ) sells Yen and buys USD to weaken the Yen.
*   Effect: Immediate and significant. USD/JPY can spike 200-500 pips in hours.

**Verbal Intervention (Jawboning)**:
*   Central bank officials make public statements to influence expectations.
*   Example: A Fed Chair says, "The dollar is too weak for our liking."
*   Effect: Traders anticipate action and move the market before any actual intervention.
*   This is "free" for the central bank—they move markets without spending reserves.

**Sterilized vs. Unsterilized Intervention**:
*   *Sterilized*: The central bank offsets its currency intervention with opposite domestic operations. Effect is temporary.
*   *Unsterilized*: No offsetting. The intervention directly changes the money supply, having a longer-lasting effect.

## Part 2: Why Do Central Banks Intervene?

Intervention is not random. Central banks have specific objectives.

**To Fight Currency Appreciation**:
*   A strong currency hurts exports. Japanese cars become more expensive for Americans if the Yen is strong.
*   Example: Switzerland (SNB) famously pegged EUR/CHF at 1.20 in 2011 to protect Swiss exporters. They defended this level for years by selling unlimited CHF.

**To Fight Currency Depreciation**:
*   A crashing currency causes inflation (imports become expensive) and capital flight.
*   Example: Turkey's central bank raised interest rates to 50% in 2024 to stop the Lira's collapse.

**To Reduce Volatility**:
*   Sudden, sharp moves destabilize businesses that rely on stable exchange rates.
*   Central banks may intervene to "smooth" excessive volatility even without directional bias.

**To Defend a Peg or Band**:
*   Some countries peg their currency to another (e.g., Hong Kong Dollar to USD).
*   The central bank must intervene constantly to maintain the peg.

## Part 3: Major Interventions in History

Learning from the past helps anticipate the future.

**The Plaza Accord (1985)**:
*   The G5 nations (US, UK, France, Germany, Japan) agreed to devalue the Dollar.
*   Coordinated selling of USD caused the Dollar Index to drop 50% over two years.
*   Lesson: When major central banks coordinate, resistance is futile.

**The Swiss Franc Crisis (2015)**:
*   The SNB suddenly removed the EUR/CHF 1.20 floor.
*   EUR/CHF crashed 30% in minutes. Brokers went bankrupt. Traders were wiped out.
*   Lesson: Central banks can change policy instantly. Never assume a peg is permanent.

**Japan's Yen Interventions (2022-2024)**:
*   As USD/JPY soared to 150+, the BOJ intervened directly, selling USD and buying JPY.
*   Each intervention caused 300-500 pip drops in USD/JPY within hours.
*   Lesson: When a central bank announces a "line in the sand" (e.g., 160 on USD/JPY), respect it.

**Bank of England (1992)**:
*   George Soros famously "broke the Bank of England" by shorting GBP.
*   The BOE tried to defend the pound but ran out of reserves. GBP collapsed.
*   Lesson: Central banks are not invincible. Speculators can win if the fundamentals are against the central bank.

## Part 4: How to Detect an Imminent Intervention

Central banks rarely announce interventions in advance, but they telegraph their intentions.

**Warning Signs**:
*   **Verbal Warnings**: "We are watching the exchange rate closely." "We are prepared to act if necessary."
*   **Speed of Moves**: If USD/JPY rises 10% in a month, intervention becomes likely.
*   **Political Pressure**: Exporters and politicians will publicly demand action.
*   **Historical Levels**: Central banks often defend round numbers (USD/JPY 150, EUR/CHF 1.00).

**Monitoring Tools**:
*   Central bank websites for press releases and speeches.
*   Bloomberg and Reuters terminals for headlines.
*   Social media (Twitter/X) for real-time news.

## Part 5: Trading During Interventions

Interventions are double-edged swords. They can make you rich or destroy you.

**The Initial Move**:
*   The first wave of intervention is violent and chaotic. Spreads widen. Slippage is massive.
*   Stop losses can be skipped entirely (you get filled far worse than your stop price).
*   Strategy: Do not trade during the initial chaos. Wait for the dust to settle.

**The Fade Trade**:
*   After the initial spike, the market often retraces part of the move.
*   Example: If USD/JPY drops 300 pips on BOJ intervention, it might bounce 100-150 pips.
*   Strategy: Fade the extreme move with a tight stop loss. This is high risk but high reward.

**The Trend Continuation**:
*   If the intervention is aligned with fundamentals (e.g., BOJ fights an overvalued Yen when interest rate differentials favor USD), the trend will resume after a pause.
*   Strategy: Treat intervention as a "pullback" in a larger trend. Wait for consolidation and re-enter.

## Part 6: Interest Rate Decisions — The Most Powerful Intervention

While currency buying/selling is dramatic, interest rate policy is the true weapon of central banks.

**The Fed (Federal Reserve)**:
*   The most important central bank in the world. The US Dollar is the reserve currency.
*   FOMC meetings (8 per year) are the most anticipated events in Forex.
*   A surprise rate hike can move USD by 200+ pips instantly.

**The ECB (European Central Bank)**:
*   Controls the Euro. Focused on inflation targeting.
*   Watch for divergence with the Fed. If the Fed is hiking and the ECB is holding, EUR/USD will fall.

**The BOJ (Bank of Japan)**:
*   Famous for ultra-low (even negative) interest rates.
*   Any hint of policy normalization causes massive Yen strength.

**Key Strategy**: Always know when the next central bank meeting is. Never hold a position into a rate decision unless you are prepared for extreme volatility.

## Part 7: Quantitative Easing (QE) and Quantitative Tightening (QT)

Beyond interest rates, central banks use balance sheet policy to influence currencies.

**Quantitative Easing (QE)**:
*   Central bank creates money and buys bonds.
*   Effect: Increases money supply, weakens the currency.
*   Example: The Fed's QE during 2008-2014 kept the Dollar weak for years.

**Quantitative Tightening (QT)**:
*   Central bank lets bonds mature or sells them, removing money from the system.
*   Effect: Decreases money supply, strengthens the currency.
*   Example: The Fed's QT starting 2022 contributed to massive Dollar strength.

**Cross-Border Flows**: When one central bank does QE while another does QT, the currency divergence can be explosive. This was the story of EUR/USD in 2022.

## Part 8: Trading the Central Bank Calendar

Every Forex trader must have a calendar of central bank events.

**Key Events to Track**:
*   **FOMC Statement & Press Conference**: 8 times per year. The most important event.
*   **ECB Rate Decision**: Usually monthly.
*   **BOJ Policy Statement**: Monthly.
*   **BOE (Bank of England) Rate Decision**: Monthly.
*   **Other Major Banks**: RBA (Australia), RBNZ (New Zealand), BOC (Canada).

**The "Dot Plot"**:
*   The Fed releases a dot plot showing members' projections for future rates.
*   If the dots shift higher (hawkish), USD rallies. If lower (dovish), USD falls.

**Strategy**:
*   Before the event: Reduce position size or close trades.
*   During the event: Do not trade. Volatility is unpredictable.
*   After the event: Wait 15-30 minutes for the initial chaos to subside, then trade the trend.

## Part 9: Summary and Risk Management

*   **Respect Central Banks**: They have unlimited ammunition (they print money). Fighting them is dangerous.
*   **Watch for Verbal Cues**: Intervention often starts with warnings. Listen to central banker speeches.
*   **Know the Calendar**: Never be surprised by an FOMC meeting.
*   **Manage Risk**: Reduce position size around central bank events. Widen stops or exit entirely.
*   **Adapt to Policy Shifts**: If a central bank pivots from dovish to hawkish, the currency trend reverses. Be ready to change your bias.
*   **Final Rule**: "Don't fight the Fed" applies to all central banks. Trade with them, not against them.
\`,
        keyTakeaways: [
            "Central bank intervention can move currencies hundreds of pips in hours.",
            "Intervention happens to fight appreciation, depreciation, or excessive volatility.",
            "Verbal intervention (jawboning) is often the first warning sign.",
            "Always know the central bank calendar and avoid trading during rate decisions.",
            "'Don't fight the Fed' — trade with central bank policy, not against it."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old fx_7 content
const startPattern = /    "fx_7": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('fx_7 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('fx_7 not found!');
}
