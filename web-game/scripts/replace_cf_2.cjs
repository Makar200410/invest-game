const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_2": {
        title: "Hard vs. Soft Commodities",
        content: \`
# Rocks vs. Crops: Understanding the Two Worlds of Commodities

The [commodity](/glossary#commodity) universe is divided into two distinct categories: **Hard Commodities** and **Soft Commodities**. This fundamental distinction shapes how these markets behave, what factors drive their prices, and how traders approach them. Understanding the difference is essential for anyone looking to trade or invest in raw materials.

The terms "hard" and "soft" don't refer to physical hardness. Instead, these terms reflect the origin and nature of production: hard commodities are extracted from the earth, while soft commodities are grown or raised.

## Part 1: Hard Commodities — Mined from the Earth

Hard [commodities](/glossary#commodity) are natural resources that must be mined or extracted from the ground. They are finite resources. Production cannot be quickly ramped up in response to higher prices—you can't just drill a new oil well overnight.

*   **Energy Sector**: The largest and most liquid hard commodity market.
    *   **Crude Oil (WTI & Brent)**: Essential for transportation, manufacturing, and petrochemicals.
    *   **Natural Gas**: Used for heating and electricity generation. Highly seasonal.
    *   **Coal**: Crucial for electricity in developing nations and steel production.

*   **Precious Metals**: Valued for monetary, investment, and industrial uses.
    *   **Gold**: The ultimate store of value. Central banks hold it to hedge against inflation.
    *   **Silver**: Both a precious metal and industrial metal. More [volatile](/glossary#volatility) than gold.
    *   **Platinum & Palladium**: Critical for catalytic converters in cars.

*   **Industrial Metals**: Building blocks of infrastructure.
    *   **Copper**: Called "Dr. Copper" because its price indicates economic health.
    *   **Aluminum**: Used in packaging, transportation, and construction.
    *   **Lithium & Cobalt**: Critical for electric vehicle batteries.

*   **Key Characteristic**: Supply is **inelastic** in the short term. When demand spikes, prices can soar because supply can't respond quickly.

## Part 2: Soft Commodities — Grown from the Earth

Soft [commodities](/glossary#commodity) are agricultural products that are grown or raised. Unlike hard commodities, they are renewable—a new crop can be planted every season. However, their supply is heavily influenced by weather, disease, and pests.

*   **Grains**: The staples of global food supply.
    *   **Corn**: Used for food, animal feed, and ethanol production.
    *   **Wheat**: A global dietary staple. Major exporters: US, Russia, Ukraine.
    *   **Soybeans**: Used for animal feed and cooking oil. China is the largest importer.

*   **Softs** (Tropical Crops): Grown in specific climates.
    *   **Coffee**: Brazil is the dominant producer. Arabica traded in New York; Robusta in London.
    *   **Sugar**: Used for food and ethanol. Brazil and India are top producers.
    *   **Cocoa**: Grown almost exclusively in West Africa (Ivory Coast, Ghana).
    *   **Cotton**: US, China, and India are major producers.

*   **Livestock**: Animals raised for food.
    *   **Live Cattle**: Prices influenced by feed costs (corn) and drought.
    *   **Lean Hogs**: The US is a major exporter.

*   **Key Characteristic**: Supply is **weather-dependent** and **seasonal**. A drought can destroy a corn crop. A freeze can wipe out orange groves.

## Part 3: Price Drivers — What Moves Each Market

The factors that drive prices differ significantly between hard and soft commodities.

### Hard Commodity Drivers
*   **Geopolitics**: Oil prices spike during Middle East conflicts or sanctions on Russia.
*   **Economic Growth**: Industrial metals rise when the global economy expands.
*   **Monetary Policy**: Gold is inversely correlated with real [interest rates](/glossary#interest-rate).
*   **Supply Disruptions**: Mine strikes, hurricanes, or embargoes can spike prices.
*   **Inventory Levels**: Tracked by EIA (oil) and LME (metals). Low inventories = higher prices.

### Soft Commodity Drivers
*   **Weather**: The dominant factor. Droughts, floods, and freezes devastate crops.
*   **Seasonality**: Prices often rise during planting and fall during harvest.
*   **Government Reports**: The USDA's WASDE report moves markets violently.
*   **Disease & Pests**: African Swine Fever decimated China's hogs in 2019.
*   **Currency Movements**: A weak Brazilian Real pressures global coffee prices.

## Part 4: Volatility and Risk Profiles

Hard and soft commodities exhibit very different [volatility](/glossary#volatility) and [risk](/glossary#risk) profiles.

### Hard Commodities
*   **Moderate to High Volatility**: Oil and natural gas are highly [volatile](/glossary#volatility). Precious metals can spike during crises.
*   **Macro-Driven**: Driven by global growth, [interest rates](/glossary#interest-rate), and central bank policies.
*   **Longer-Term Trends**: Supply/demand imbalances can persist for extended periods.

### Soft Commodities
*   **Extremely High Volatility**: Weather events can cause prices to double or halve in weeks.
*   **Event-Driven**: More driven by weather and disease than macroeconomics.
*   **Seasonal Patterns**: Strong seasonality creates trading opportunities.
*   **Perishability**: Agricultural products spoil, creating urgency.

## Part 5: Trading Strategies for Each Category

Different strategies work better for hard vs. soft commodities.

### Hard Commodity Strategies
*   **Macro Plays**: Long copper during expansion; short during contraction.
*   **Currency Hedge**: Use gold to hedge against dollar weakness.
*   **Geopolitical Trades**: Go long oil or gold when tensions escalate.
*   **Inventory Plays**: Track weekly reports. Unexpected draws = bullish.
*   **[Spread Trading](/glossary#spread)**: Trade Brent-WTI spread or gold-silver ratio.

### Soft Commodity Strategies
*   **Weather Trading**: Monitor forecasts in key growing regions.
*   **Seasonal Trading**: Buy grains during harvest, sell during planting.
*   **Report Trading**: Trade around USDA reports.
*   **Fundamental Analysis**: Track planting intentions and crop conditions.

## Part 6: Investment Vehicles

Different vehicles are appropriate for each commodity category.

*   **[Futures Contracts](/glossary#futures)**: High [leverage](/glossary#leverage), high [risk](/glossary#risk). Requires understanding of expiration.
*   **Options on Futures**: Defined [risk](/glossary#risk). Good for event-driven trades.
*   **Commodity [ETFs](/glossary#etf)**: Easy access. Examples: GLD (gold), USO (oil), DBA (agriculture).
*   **Stock Proxies**: Oil companies (XOM), gold miners (NEM), agricultural giants (ADM).
*   **Physical Ownership**: For precious metals, you can buy coins or bars.

## Part 7: Conclusion — Two Different Worlds

Hard and soft commodities require different analytical frameworks and trading approaches.

*   **Hard commodities** are finite, extracted from the earth, and driven by macroeconomic forces and geopolitics.
*   **Soft commodities** are renewable, grown from the earth, and driven by weather and seasonality.
*   **Portfolio Diversification**: Including both categories provides diversification benefits.
*   **Specialization**: Successful traders often specialize in one category.
*   **Respect the Volatility**: Both categories can be extremely [volatile](/glossary#volatility). [Risk management](/glossary#risk-management) is paramount.
\`,
        keyTakeaways: [
            "Hard commodities are mined or extracted (Energy, Metals); soft commodities are grown or raised (Agriculture).",
            "Hard commodity supply is inelastic and slow to respond; soft commodity supply is weather-dependent and seasonal.",
            "Weather is the biggest risk for soft commodities; geopolitics and economic growth drive hard commodities.",
            "Different trading strategies apply to each category—macro plays for hard, weather/seasonal plays for soft.",
            "Both categories offer diversification benefits but require specialized knowledge to trade successfully."
        ]
    },`;

const startMarker = '"cf_2": {';
const endMarker = '"cf_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_2: Hard vs. Soft Commodities - VALIDATION ===');
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
console.log('✓ Successfully updated cf_2!');
