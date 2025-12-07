const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_7": {
        title: "Gold & Precious Metals",
        content: \`
# The Safe Haven: Understanding Gold and Precious Metals Trading

[Gold](/glossary#gold) is not just a commodity—it is money. For over 5,000 years, gold has served as a store of value, a medium of exchange, and a symbol of wealth. Today, it remains one of the most actively traded [assets](/glossary#asset) in the world, held by central banks, institutional investors, and millions of individuals as protection against economic uncertainty. Understanding precious metals is essential for any serious trader or investor.

Unlike other [commodities](/glossary#commodity), which are consumed (you burn oil, you eat wheat), gold is hoarded. Nearly all the gold ever mined still exists. This unique characteristic gives gold its monetary properties and makes its price dynamics different from other raw materials.

## Part 1: Gold — The Ultimate Store of Value

[Gold](/glossary#gold) occupies a unique place in the financial universe. It is simultaneously a commodity, a currency, and a financial [asset](/glossary#asset).

*   **A 5,000-Year Track Record**: From ancient Egypt to modern-day central banks, gold has been valued as money. No other [asset](/glossary#asset) has this pedigree.
*   **Stock vs. Flow**: Unlike oil (which is consumed each year), almost all gold ever mined exists today. Annual production adds only ~1.5% to the total above-ground stock. This makes supply extremely stable.
*   **Above-Ground Supply**: Approximately 200,000 tonnes of gold have been mined. Of this:
    *   ~45% is jewelry
    *   ~20% is private investment (bars, coins)
    *   ~17% is held by central banks
    *   ~15% is industrial use + unaccounted for
*   **Central Bank Holdings**: Central banks collectively hold about 35,000 tonnes. The US holds ~8,100 tonnes at Fort Knox and the NY Fed. This gives gold quasi-official monetary status.
*   **Indestructible**: Gold doesn't tarnish, rust, or decay. An ounce of gold from Roman times is still an ounce of gold today.
*   **Universally Recognized**: Unlike fiat currencies or cryptocurrencies, gold is accepted everywhere in the world without requiring trust in a government or technology.

## Part 2: What Drives Gold Prices?

[Gold](/glossary#gold) prices are driven by a complex interplay of macroeconomic factors, quite different from supply/demand dynamics of industrial [commodities](/glossary#commodity).

*   **Real Interest Rates**: The #1 driver. Gold pays no interest or [dividends](/glossary#dividend). When real rates (nominal rates minus inflation) are high, holding gold has a high opportunity cost. When real rates are low or negative, gold becomes more attractive.
    *   **Negative Real Rates**: If inflation is 4% and the 10-year Treasury yields 2%, real rates are -2%. Your cash loses purchasing power. Gold thrives.
    *   **Positive Real Rates**: If the Fed raises rates to 5% and inflation is 2%, holding bonds pays a real 3% return. Gold struggles.
*   **US Dollar Strength**: Gold is priced in dollars. When the dollar strengthens, gold becomes more expensive for foreign buyers, reducing demand. When the dollar weakens, gold typically rises.
    *   **Inverse [Correlation](/glossary#correlation)**: Gold and the Dollar Index (DXY) often move in opposite directions.
*   **Inflation Expectations**: Gold is an inflation hedge. When investors expect future inflation, they buy gold to preserve purchasing power.
*   **Geopolitical Risk**: The "fear trade." Wars, political instability, financial crises, and social unrest drive demand for gold as a safe haven.
    *   **Examples**: Gold spiked during 9/11, the 2008 financial crisis, Brexit, and the Russia-Ukraine war.
*   **Central Bank Purchases**: When central banks (especially China, Russia, India) buy gold, it signals concerns about the dollar-based monetary system and supports prices.
*   **Currency Debasement Fears**: When governments print massive amounts of money (quantitative easing), investors fear long-term currency devaluation and buy gold.

## Part 3: Silver — Gold's Volatile Cousin

Silver is often called "poor man's gold," but it's actually a hybrid—part monetary metal, part industrial commodity. This dual nature makes it more [volatile](/glossary#volatility) than gold.

*   **Monetary History**: Like gold, silver has been used as money for millennia. The US was on a silver standard for much of its history. "Sterling" comes from the silver standard.
*   **Industrial Demand**: Unlike gold, about 50% of silver demand is industrial:
    *   **Electronics**: Silver is the most conductive metal. Used in smartphones, computers, and appliances.
    *   **Solar Panels**: Each panel contains 10-20 grams of silver. Solar boom = silver demand.
    *   **Medical**: Antibacterial properties for wound dressings and coatings.
    *   **Photography**: Once huge (now minimal due to digital).
*   **Gold-Silver Ratio**: Traders watch the gold-to-silver price ratio (currently around 80-85, meaning 80 ounces of silver buys 1 ounce of gold). Historically, this ratio averaged 15-20. Extreme ratios signal potential trades.
    *   **High Ratio (>80)**: Silver is "cheap" vs. gold. Some traders go long silver, short gold.
    *   **Low Ratio (<50)**: Silver is "rich" vs. gold. Consider the opposite.
*   **Volatility**: Silver is notoriously [volatile](/glossary#volatility)—2-3x more than gold. It swings wildly in both directions.
*   **Smaller Market**: The silver market is much smaller than gold, making it susceptible to manipulation and violent moves.
*   **Storage**: Silver is bulky relative to value (you need a lot of space to store $1 million of silver vs. gold).

## Part 4: Platinum and Palladium — The Industrial Precious Metals

Platinum and palladium are precious metals with very different dynamics than gold—they are primarily industrial.

### Platinum
*   **Primary Use**: Catalytic converters in diesel vehicles (reduces emissions). Also jewelry and industrial processes.
*   **Supply Constraint**: 70% of supply comes from South Africa. Power grid problems and labor strikes frequently disrupt production.
*   **Demand Shift**: The shift from diesel to gasoline and electric vehicles has hurt platinum demand. Diesel vehicle sales collapsed after the Volkswagen emissions scandal.
*   **Historically Premium**: Platinum used to trade at a premium to gold. Now it often trades below gold—a historical anomaly.
*   **Investment Demand**: Limited compared to gold. Fewer [ETFs](/glossary#etf) and less central bank buying.

### Palladium
*   **Primary Use**: Catalytic converters in gasoline vehicles. As diesel cars fell out of favor, gasoline (and thus palladium) demand surged.
*   **Supply Constraint**: 40% comes from Russia, 40% from South Africa. Highly concentrated and prone to disruption.
*   **Wild Price Action**: Palladium went from ~$500/oz in 2016 to over $3,000/oz in 2022 before crashing. Extreme [volatility](/glossary#volatility).
*   **EV Threat**: Electric vehicles don't need catalytic converters. Long-term demand is uncertain.
*   **Substitution**: Automakers are trying to substitute cheaper platinum for expensive palladium in catalytic converters.

## Part 5: How to Trade Precious Metals

There are multiple ways to gain exposure to precious metals, each with pros and cons.

### Physical Ownership
*   **Coins and Bars**: Buy gold/silver coins (American Eagles, Canadian Maples) or bars from dealers.
*   **Pros**: You own the actual metal. No [counterparty risk](/glossary#counterparty-risk). Privacy.
*   **Cons**: Dealer markups (premiums over spot price), storage costs, insurance, and [liquidity](/glossary#liquidity) challenges.
*   **Allocated Storage**: Services like Brinks or Loomis International store gold in vaults on your behalf.

### Futures Contracts
*   **COMEX Gold Futures**: Each contract = 100 troy ounces. Traded on CME Group.
*   **Pros**: High [leverage](/glossary#leverage), [liquidity](/glossary#liquidity), ability to go [short](/glossary#short-selling).
*   **Cons**: Requires significant capital, complex mechanics, roll costs.
*   **Mini and Micro Contracts**: Smaller contracts (10 oz, 1 oz) for retail traders.

### ETFs
*   **GLD (SPDR Gold Trust)**: The largest gold [ETF](/glossary#etf). Holds physical gold in vaults. Each share represents ~1/10 oz of gold.
*   **IAU (iShares Gold Trust)**: Similar to GLD but with lower expense ratio.
*   **SLV (iShares Silver Trust)**: Physical silver [ETF](/glossary#etf).
*   **Pros**: Easy to trade like [stocks](/glossary#stock), highly liquid, no storage concerns.
*   **Cons**: You don't own physical metal directly. Management fees. [Counterparty risk](/glossary#counterparty-risk) in extreme scenarios.

### Mining Stocks
*   **Examples**: Newmont (NEM), Barrick Gold (GOLD), Franco-Nevada (FNV), Wheaton Precious Metals (WPM).
*   **Leverage to Metal Price**: Miners' profits leverage gold price moves. If gold rises 10%, miner [earnings](/glossary#earnings) might rise 30%.
*   **Operational [Risk](/glossary#risk)**: Miners face risks gold bullion doesn't—management decisions, accidents, nationalization, cost overruns.
*   **[Dividends](/glossary#dividend)**: Unlike physical gold, some miners pay [dividends](/glossary#dividend).

## Part 6: Gold as Portfolio Insurance

Many investors hold gold not for trading profits but as **insurance** against extreme events.

*   **Non-Correlated [Asset](/glossary#asset)**: Gold often moves independently of [stocks](/glossary#stock) and [bonds](/glossary#bond). During the 2008 crisis, gold rose while stocks crashed.
*   **Standard Allocation**: Financial advisors often recommend 5-10% of a [portfolio](/glossary#portfolio) in gold as a permanent hedge.
*   **Tail [Risk](/glossary#risk) Protection**: Gold protects against "black swan" events—hyperinflation, currency collapse, war, financial system breakdown.
*   **Ray Dalio's View**: The legendary investor recommends a 5-10% gold allocation, calling it a "risk-reducing diversifier."
*   **Rebalancing Alpha**: Holding gold and rebalancing periodically can improve risk-adjusted returns, even if gold's absolute return is modest.
*   **The Problem With Timing**: Many investors buy gold after a crisis (when it's expensive) and sell during calm (when it's cheap). A steady allocation avoids this trap.

## Part 7: Gold Trading Strategies

For active traders, gold offers numerous strategies beyond simple buy-and-hold.

*   **Macro Trading**: Trade gold based on your view on [interest rates](/glossary#interest-rate), inflation, and the dollar. Long gold when real rates are falling; short when they're rising.
*   **Technical Analysis**: Gold trends well. Use [moving averages](/glossary#moving-average), [trend lines](/glossary#trendline), and [breakout](/glossary#breakout) strategies. Key levels: $1,900, $2,000, $2,100 are significant in recent history.
*   **[Spread Trading](/glossary#spread)**: Trade gold versus silver (gold-silver ratio), gold versus platinum, or gold versus currencies.
*   **Event Trading**: Position ahead of Fed announcements, inflation data (CPI), or geopolitical flashpoints.
*   **Seasonal Patterns**: Gold often rallies in January (Chinese New Year demand), weakens in summer, and strengthens in fall (Indian wedding season + Diwali).
*   **Miner vs. Metal [Spread](/glossary#spread)**: Sometimes miners diverge from gold prices. Trading the relationship can offer opportunities.
*   **Options Strategies**: Use [options](/glossary#options) to bet on gold [volatility](/glossary#volatility) or to structure defined-[risk](/glossary#risk) trades around events.
\`,
        keyTakeaways: [
            "Gold is money, not just a commodity—it's held as a store of value and hedge against uncertainty.",
            "Real interest rates are the primary driver of gold prices; gold thrives when real rates are low or negative.",
            "Silver is a hybrid—part monetary metal, part industrial commodity—and is much more volatile than gold.",
            "Platinum and palladium are primarily industrial metals dependent on auto industry demand.",
            "Consider a 5-10% gold allocation as portfolio insurance against extreme events."
        ]
    },`;

const startMarker = '"cf_7": {';
const endMarker = '"cf_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_7: Gold & Precious Metals - VALIDATION ===');
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
console.log('✓ Successfully updated cf_7!');
