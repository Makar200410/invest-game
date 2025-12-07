const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_8": {
        title: "Oil & Energy Markets",
        content: \`
# The Lifeblood of Civilization: Understanding Oil and Energy Trading

Crude oil is the most important [commodity](/glossary#commodity) in the world. It is the lifeblood of the global economy, powering transportation, manufacturing, agriculture, and heating. The oil market is the largest and most liquid commodity market, with trillions of dollars changing hands daily. Understanding oil and energy markets is essential for any serious trader—price movements ripple through every corner of the global economy.

Energy markets are also among the most geopolitically charged. Wars have been fought over oil. Empires have risen and fallen based on access to energy. OPEC's decisions move markets overnight. For traders, this creates both enormous opportunity and significant [risk](/glossary#risk).

## Part 1: Understanding Crude Oil Markets

Crude oil is a complex market with multiple benchmarks, grades, and trading dynamics that every trader must understand.

*   **What Is Crude Oil?**: A mixture of hydrocarbons extracted from underground reservoirs. Refined into gasoline, diesel, jet fuel, plastics, and thousands of petrochemicals.
*   **Global Consumption**: The world consumes about 100 million barrels per day. The US alone uses about 20 million barrels/day.
*   **Key Benchmarks**:
    *   **WTI (West Texas Intermediate)**: The US benchmark. Light, sweet crude. Delivered at Cushing, Oklahoma. Traded on NYMEX/CME.
    *   **Brent Crude**: The international benchmark. Priced about 2/3 of global crude. Originates from the North Sea. Traded on ICE.
    *   **Dubai/Oman**: Benchmark for Middle Eastern crude sold to Asia.
*   **Light vs. Heavy**: Light crude has lower density and is easier to refine into valuable products (gasoline). Heavy crude is denser and yields more residual fuel oil.
*   **Sweet vs. Sour**: Sweet crude has low sulfur content (easier to refine). Sour crude has high sulfur (more expensive to process).
*   **Brent-WTI [Spread](/glossary#spread)**: The price difference between Brent and WTI. This spread fluctuates based on US production, export capacity, and global demand. Spread trading is a major strategy in oil markets.

## Part 2: What Drives Oil Prices?

Oil prices are driven by a complex interplay of supply, demand, geopolitics, and speculation.

### Supply Factors
*   **OPEC+**: The Organization of Petroleum Exporting Countries (Saudi Arabia, UAE, Kuwait, Iraq, Iran, etc.) plus Russia controls about 40% of global production. Their production decisions move markets.
    *   **Production Cuts**: When OPEC cuts production, prices rise.
    *   **Price Wars**: When members fight for market share, prices crash (2020: Saudi-Russia price war).
*   **US Shale Production**: The shale revolution made the US the world's largest oil producer. Shale production is more flexible than conventional drilling—production can ramp up or down faster.
*   **Non-OPEC Supply**: Norway, Brazil, Canada, Mexico. Canadian oil sands are a significant (but expensive) source.
*   **Disruptions**: Hurricanes in the Gulf of Mexico, pipeline explosions, sanctions (Iran, Venezuela, Russia), and wars (Libya, Iraq).

### Demand Factors
*   **Global Economic Growth**: Oil demand is closely tied to GDP. When the economy grows, factories produce more, people travel more, and trucks ship more goods.
*   **China**: The world's largest oil importer. Chinese economic data (PMI, industrial production) heavily influence oil prices.
*   **Transportation**: About 60% of oil is used for transportation (cars, trucks, planes, ships).
*   **Seasonality**:
    *   **Summer**: Driving season in the US increases gasoline demand.
    *   **Winter**: Heating oil demand spikes (especially in cold snaps).
*   **Energy Transition**: Electric vehicles and renewable energy are slowly reducing long-term oil demand growth.

### Geopolitical Factors
*   **Middle East Tension**: Any conflict in the Persian Gulf (through which 20% of global oil transits) spikes prices.
*   **Sanctions**: US sanctions on Iran, Venezuela, and Russia reduce supply and increase prices.
*   **Strategic Reserves**: Governments hold emergency stockpiles (US SPR). Releases can temporarily lower prices (Biden released SPR in 2022 to combat high prices).
*   **Dollar Strength**: Oil is priced in dollars. A strong dollar makes oil more expensive for non-US buyers, reducing demand.

## Part 3: Natural Gas — The "Widowmaker"

Natural gas is one of the most [volatile](/glossary#volatility) markets in the world. It has destroyed many traders, earning the nickname "Widowmaker."

*   **Uses**: Heating (residential and commercial), electricity generation, industrial processes, petrochemical feedstock.
*   **Seasonality**: Extremely seasonal. Demand spikes in winter (heating) and summer (air conditioning driving electricity demand).
*   **Weather Dependence**: A cold snap can send prices up 20% in a day. A mild winter can crash prices.
*   **Regional Markets**: Unlike oil, natural gas is not easily transported globally. It moves via pipelines or liquified natural gas (LNG) ships.
    *   **Henry Hub (US)**: The US benchmark, delivered in Louisiana.
    *   **European TTF (Netherlands)**: The European benchmark.
    *   **Asian LNG**: Asian buyers pay different prices than US or Europe.
*   **Storage Reports**: The EIA weekly natural gas storage report is a major market mover. Unexpectedly low storage = bullish; high storage = bearish.
*   **Volatility**: Natural gas routinely moves 5-10% in a single day. It is not for the faint of heart.
*   **Contango/Backwardation**: Natural gas often shows extreme contango in summer (cheap now, expensive in winter) and backwardation in winter.

## Part 4: Refined Products and the Crack Spread

Oil refineries take crude oil and "crack" it into refined products. Understanding this process is key to energy trading.

*   **Refined Products**:
    *   **Gasoline (RB)**: The largest refined product by value. Seasonal (summer driving season).
    *   **Heating Oil/Diesel (HO)**: Used for heating and trucking. Seasonal (winter).
    *   **Jet Fuel**: Airlines hedge this exposure (often using heating oil proxies).
    *   **Residual Fuel Oil**: Heavy, low-value product used for shipping and power plants.
*   **The Crack [Spread](/glossary#spread)**: The difference between crude oil input cost and refined product output value. Refineries' profit margin.
    *   **3-2-1 Crack**: A common benchmark. Assumes 3 barrels of crude oil produce 2 barrels of gasoline and 1 barrel of distillate (heating oil/diesel).
    *   **Trading**: You can trade the crack spread by going long gasoline/heating oil and short crude oil (or vice versa).
*   **Refinery Utilization**: When refineries operate at high capacity, they bid up crude prices. Refinery outages (maintenance, hurricanes) reduce demand for crude and can widen cracks.
*   **RINs (Renewable Identification Numbers)**: Regulatory credits for blending biofuels. Complex but increasingly important in US fuel markets.

## Part 5: Key Reports and Data

Energy traders live and die by weekly and monthly data releases. Know the key reports.

*   **EIA Weekly Petroleum Status Report** (Wednesdays):
    *   Crude oil inventories (rising = bearish, falling = bullish)
    *   Gasoline and distillate inventories
    *   Refinery utilization rates
    *   Imports and exports
*   **API Weekly Report** (Tuesdays): Similar data from the American Petroleum Institute. Released the evening before the EIA report. Often moves markets.
*   **Baker Hughes Rig Count** (Fridays): Number of active drilling rigs. Rising rig count = more future supply.
*   **EIA Natural Gas Storage Report** (Thursdays): Weekly change in natural gas inventories.
*   **OPEC Monthly Report**: Supply/demand forecasts and production figures.
*   **IEA (International Energy Agency) Monthly Report**: Demand forecasts from the Paris-based agency.
*   **COT Report** (Fridays): Commitment of Traders shows positioning of commercials (hedgers) and speculators.

## Part 6: Trading Energy Markets

There are multiple ways to trade oil and energy, each with unique characteristics.

### Futures Contracts
*   **WTI Crude (CL)**: 1,000 barrels per contract. The most liquid oil contract.
*   **Brent Crude (BZ)**: 1,000 barrels. ICE exchange.
*   **Natural Gas (NG)**: 10,000 MMBtu per contract.
*   **Gasoline (RB)**: 42,000 gallons (1,000 barrels).
*   **Heating Oil (HO)**: 42,000 gallons.
*   **Micro WTI (MCL)**: 100 barrels. Good for smaller accounts.

### [ETFs](/glossary#etf)
*   **USO (United States Oil Fund)**: Tracks WTI futures. WARNING: Suffers from severe contango decay. Poor for long-term holding.
*   **BNO (Brent Oil Fund)**: Tracks Brent crude futures.
*   **UNG (United States Natural Gas Fund)**: Tracks natural gas futures. Same contango warning applies.
*   **XLE (Energy Select Sector SPDR)**: Holds oil company [stocks](/glossary#stock) (Exxon, Chevron). Better for long-term exposure than commodity [ETFs](/glossary#etf).

### Energy Stocks
*   **Integrated Majors**: ExxonMobil (XOM), Chevron (CVX), Shell (SHEL), BP. These explore, produce, refine, and market.
*   **E&P (Exploration & Production)**: ConocoPhillips (COP), EOG Resources (EOG), Pioneer Natural Resources (PXD). More leveraged to oil prices.
*   **Refiners**: Valero (VLO), Marathon Petroleum (MPC). Profits depend on crack spreads, not crude prices alone.
*   **Services**: Schlumberger (SLB), Halliburton (HAL). Benefit when drilling activity increases.

## Part 7: Risks and Trading Strategies

Energy markets offer huge opportunities but come with significant [risks](/glossary#risk).

### Risks
*   **Extreme [Volatility](/glossary#volatility)**: Oil can move 5-10% in a day on OPEC news, inventory data, or geopolitical events. Natural gas is even more [volatile](/glossary#volatility).
*   **Geopolitical Surprise**: Wars, sanctions, and political decisions are unpredictable. You can be technically right but geopolitically wrong.
*   **[Leverage](/glossary#leverage)**: Futures [leverage](/glossary#leverage) magnifies gains and losses. Risk management is essential.
*   **Contango Decay**: Long-term [ETF](/glossary#etf) holders can lose money even when prices rise due to roll costs.
*   **Gap [Risk](/glossary#risk)**: Weekend OPEC meetings can cause massive Monday opening gaps.

### Trading Strategies
*   **Macro Trading**: Trade oil based on your view of global growth, OPEC policy, and geopolitics.
*   **Inventory Trading**: Trade around the weekly EIA report. Build a position ahead of expected data; close after the release.
*   **Seasonal Patterns**: Go long gasoline before summer driving season; go long heating oil before winter.
*   **[Spread Trading](/glossary#spread)**: Trade Brent-WTI spread, crack spreads, or calendar spreads (front month vs. deferred).
*   **Technical Analysis**: Oil trends well. Use [breakout](/glossary#breakout) strategies, [moving averages](/glossary#moving-average), and [support](/glossary#support)/[resistance](/glossary#resistance) levels.
*   **Event Trading**: Position ahead of OPEC meetings, Fed announcements, or geopolitical flashpoints.
\`,
        keyTakeaways: [
            "Crude oil is the world's most important and liquid commodity market.",
            "OPEC+ production decisions, economic growth, and geopolitics are the primary price drivers.",
            "Natural gas is extremely volatile and weather-dependent—the 'Widowmaker' of commodities.",
            "The crack spread measures refiners' profit margins between crude input and product output.",
            "Avoid holding commodity ETFs long-term in contango markets; use energy stocks for sustained exposure."
        ]
    },`;

const startMarker = '"cf_8": {';
const endMarker = '"cf_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_8: Oil & Energy Markets - VALIDATION ===');
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
console.log('✓ Successfully updated cf_8!');
