const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "fx_8": {
        title: "Carry Trade Strategy",
        content: \`
# The Carry Trade: Profiting from Interest Rate Differentials

The carry trade is one of the most popular and potentially lucrative strategies in Forex. It involves borrowing money in a currency with a low interest rate and investing it in a currency with a high interest rate, pocketing the difference. When it works, you earn money just for holding a position. When it fails, it can blow up your account in spectacular fashion. This lesson covers the mechanics, risks, and strategies for trading the carry.

## Part 1: Understanding the Carry Trade Concept

At its core, the carry trade is simple: borrow cheap, invest expensive.

**The Basic Mechanics**:
*   You borrow Japanese Yen at 0.1% interest (Japan has near-zero rates).
*   You convert the Yen to Australian Dollars and invest at 4.5% interest.
*   You earn the interest rate differential: 4.5% - 0.1% = 4.4% per year.
*   As long as the exchange rate stays stable, you make 4.4% annually just for holding the position.

**In Forex Terms**:
*   Buying AUD/JPY = You are long AUD (earning Australian interest) and short JPY (paying Japanese interest).
*   If AUD rates > JPY rates, you receive "positive swap" daily.
*   The broker credits your account every day at rollover time (usually 5 PM EST).

**The Swap Rate**:
*   Brokers display the swap rate in pips or cash per lot.
*   Example: Long AUD/JPY might pay +5.0 points per day per lot.
*   Over a year, this adds up to significant income on top of any price gains.

## Part 2: High-Yield vs. Low-Yield Currencies

Not all currencies are created equal. Interest rates vary dramatically.

**High-Yield Currencies (Funding Targets)**:
*   **AUD (Australian Dollar)**: Historically high rates due to commodity exports.
*   **NZD (New Zealand Dollar)**: Similar to AUD, often has attractive yields.
*   **MXN (Mexican Peso)**: Emerging market with very high rates (often 10%+).
*   **TRY (Turkish Lira)**: Extremely high rates (50%+ at times), but very risky.
*   **ZAR (South African Rand)**: High yields but volatile.

**Low-Yield Currencies (Funding Sources)**:
*   **JPY (Japanese Yen)**: The classic funding currency. Rates near 0% for decades.
*   **CHF (Swiss Franc)**: Very low or even negative rates historically.
*   **EUR (Euro)**: ECB kept rates very low or negative for years (rising recently).

**Popular Carry Pairs**:
*   AUD/JPY, NZD/JPY (classic carry trades).
*   MXN/JPY, ZAR/JPY (exotic carries with higher risk and reward).
*   USD/JPY (when Fed rates are high).

## Part 3: Calculating the Carry

Let's walk through a practical example.

**Scenario**:
*   You buy 1 standard lot (100,000 units) of AUD/JPY at 95.00.
*   Australian interest rate: 4.35%.
*   Japanese interest rate: 0.10%.
*   Differential: 4.25%.

**Annual Carry**:
*   100,000 AUD × 4.25% = 4,250 AUD per year.
*   At AUD/USD = 0.65, that's approximately $2,762 USD per year.

**Daily Carry (Swap)**:
*   $2,762 / 365 = ~$7.57 per day.
*   Your broker will credit roughly this amount to your account each night.

**Important Notes**:
*   Wednesday swaps are typically "triple" (to account for the weekend settlement).
*   Swap rates fluctuate with central bank policy. Always check your broker's current rates.

## Part 4: The Golden Era of Carry Trades

The carry trade was a money-printing machine in the early 2000s.

**2003-2007: The Glory Days**:
*   Japanese rates: 0.10%. Australian rates: 6.50%.
*   AUD/JPY rose from 60 to 107 (78% appreciation).
*   Traders earned 6%+ in carry PLUS 78% in capital gains.
*   Hedge funds made billions. Retail traders got rich.

**What Made It Work**:
*   Low volatility. The market was calm and predictable.
*   Strong global growth. Risk appetite was high.
*   Consistent rate differentials. Central banks were predictable.

**The Lesson**: When conditions are right, the carry trade is incredibly profitable. But those conditions don't last forever.

## Part 5: The Unwinding: When Carry Trades Fail

The carry trade's Achilles' heel is its vulnerability to risk-off events.

**The 2008 Crisis**:
*   Global financial panic. Stock markets crashed.
*   Traders fled to safety. They sold AUD, NZD, and emerging market currencies.
*   They bought JPY and USD (safe havens).
*   AUD/JPY crashed from 107 to 55 in just 6 months. A 50% drop.
*   The 6% annual carry was meaningless when the exchange rate fell 50%.

**The Dynamic**:
*   In "Risk On" environments: Carry works. High-yield currencies appreciate.
*   In "Risk Off" environments: Carry unwinds. High-yield currencies collapse. JPY and CHF surge.
*   The carry profit cannot compensate for a currency crash.

**Warning Signs of Unwind**:
*   Stock market sell-off (S&P 500 drops).
*   VIX (fear index) spikes above 30.
*   JPY and CHF strengthen rapidly.
*   Emerging market outflows (headlines about capital flight).

## Part 6: Risk Management for Carry Trades

Surviving the unwind requires discipline.

**Position Sizing**:
*   Never go "all-in" on carry trades. Use small position sizes.
*   The overnight swap income is steady; you don't need leverage to make it worthwhile.
*   A good rule: Risk no more than 1-2% of your account on any carry position.

**Stop Losses**:
*   Always use stop losses, but place them at meaningful technical levels.
*   A tight stop will be hit by normal volatility. A wide stop allows room for the trade to work.
*   Consider a trailing stop to lock in profits as the position moves in your favor.

**Hedging**:
*   Advanced traders hedge carry trades by buying put options on the currency pair or the stock market.
*   This caps losses during a crash while preserving the carry income during calm markets.

**Diversification**:
*   Don't put all your carry eggs in one basket.
*   Example: Hold AUD/JPY, NZD/JPY, and USD/JPY instead of just one pair.
*   If one pair underperforms, others may compensate.

## Part 7: Exotic Carry Trades: The High-Risk Game

Emerging market currencies offer massive carry but come with massive risk.

**USD/TRY (Turkish Lira)**:
*   Turkish rates have been 50%+ at times. Huge potential carry income.
*   But the Lira has collapsed 90%+ in recent years. All the carry was wiped out by currency depreciation.
*   Political instability and inflation make TRY unpredictable.

**USD/MXN (Mexican Peso)**:
*   Mexican rates often exceed 10%. Attractive carry.
*   More stable than TRY but still vulnerable to US trade policy and oil prices.

**USD/ZAR (South African Rand)**:
*   High yields but sensitive to commodity prices and political headlines.

**The Lesson**: Exotic carries are for experienced traders only. The interest income looks attractive, but currency crashes can (and do) erase years of carry in a single week.

## Part 8: Carry Trade Strategies

**Strategy 1: The Long-Term Holder**:
*   Buy a high-yield pair (AUD/JPY, NZD/USD) and hold for months or years.
*   Collect daily swap payments.
*   Use wide stop losses and low leverage.
*   Best when: Global growth is strong and central bank policies are stable.

**Strategy 2: The Trend Rider**:
*   Only enter carry trades when the trend is in your favor (e.g., AUD/JPY is already rising).
*   Use technical analysis (moving averages, trendlines) to confirm direction.
*   Exit when the trend breaks down, regardless of carry income.

**Strategy 3: The Volatility Filter**:
*   Only hold carry trades when volatility is low (VIX < 20).
*   If VIX spikes above 25, reduce position size. If above 30, exit entirely.
*   Re-enter when volatility calms down.

**Strategy 4: The Pairs Basket**:
*   Hold a diversified basket of carry pairs (AUD/JPY, NZD/JPY, USD/JPY, MXN/JPY).
*   Rebalance monthly.
*   The diversification smooths returns and reduces single-pair risk.

## Part 9: Summary and Key Takeaways

*   **The Carry Trade** profits from interest rate differentials by borrowing low-yield currencies and investing in high-yield currencies.
*   **Positive Swap**: You earn daily income just for holding a carry position (long high-yield, short low-yield).
*   **Risk Off Kills Carry**: When fear spikes, high-yield currencies crash. The carry profit cannot offset a 20-50% currency depreciation.
*   **Risk Management**: Use small positions, stop losses, and diversification.
*   **The Golden Rule**: Trade carry with the trend, not against it. If the chart is falling, no amount of swap income makes the trade worth holding.
*   **Best Conditions**: Low volatility, rising stock markets, stable central bank policies.
*   **Worst Conditions**: Financial crises, geopolitical shocks, sudden central bank pivots.
\`,
        keyTakeaways: [
            "The carry trade profits from interest rate differentials between currencies.",
            "High-yield currencies (AUD, NZD, MXN) are attractive but risky during market downturns.",
            "JPY and CHF are classic 'funding' currencies due to low interest rates.",
            "Carry trades unwind violently during risk-off events; the swap income cannot compensate for a 50% currency crash.",
            "Use small positions, stop losses, and volatility filters to manage risk."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the old fx_8 content
const startPattern = /    "fx_8": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
const match = content.match(startPattern);

if (match) {
    content = content.replace(startPattern, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('fx_8 successfully replaced!');

    // Verify character count
    const contentStart = newContent.indexOf('content: `');
    const contentEnd = newContent.lastIndexOf('`');
    const textContent = newContent.substring(contentStart + 10, contentEnd);
    const parts = (newContent.match(/## Part \d+/g) || []).length;
    console.log(`New content: ${textContent.length} characters, ${parts} parts`);
} else {
    console.log('fx_8 not found!');
}
