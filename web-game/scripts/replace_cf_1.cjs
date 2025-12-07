const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_1": {
        title: "Introduction to Commodities",
        content: \`
# The Building Blocks of the Global Economy

[Commodities](/glossary#commodity) are the raw materials that power our world. Before a Tesla can be built, lithium must be mined. Before a Starbucks latte can be poured, coffee beans must be grown. Before your home is heated, natural gas must be extracted. Commodities are the physical inputs for everything we consume, build, and use. They are quite literally the foundation upon which modern civilization is built.

Unlike [stocks](/glossary#stock), which represent ownership in a company, [commodities](/glossary#commodity) represent ownership of a physical good. When you trade Apple stock, you are betting on the company's future [earnings](/glossary#earnings). When you trade Crude Oil, you are betting on the global supply and demand for energy. This fundamental difference makes commodity trading a unique discipline that requires understanding of global macroeconomics, weather patterns, geopolitics, and supply chain logistics.

## Part 1: What Are Commodities?

A [commodity](/glossary#commodity) is a basic good used in commerce that is interchangeable with other goods of the same type. The quality of a given commodity may differ slightly, but it is essentially uniform across producers.

*   **Definition**: Raw materials or primary agricultural products that can be bought and sold.
*   **Standardization**: Commodities must meet minimum quality standards (known as a "basis grade") to be traded on exchanges.
*   **Global Market**: Unlike a local farmer's market, commodity exchanges allow producers and consumers worldwide to trade.
*   **Physical vs. Paper**: You can own physical commodities (gold bars in a vault) or paper claims on commodities ([futures contracts](/glossary#futures), [ETFs](/glossary#etf)).
*   **Economic Indicator**: Commodity prices often signal the health of the global economy. Rising copper prices suggest industrial growth; falling oil prices suggest weakening demand.
*   **Historical Importance**: Civilizations have risen and fallen based on control of key commodities. Wars have been fought over oil, gold, and spices.

## Part 2: The Three Classes of Commodities

[Commodities](/glossary#commodity) are generally classified into three main groups, each with distinct characteristics and [risk](/glossary#risk) factors.

### Energy
The most actively traded sector in the commodity markets.
*   **Crude Oil (WTI & Brent)**: The lifeblood of the global economy. Used for transportation (gasoline, jet fuel), manufacturing, and plastics. WTI (West Texas Intermediate) is the US benchmark; Brent is the global benchmark.
*   **Natural Gas**: Primarily used for heating homes and electricity generation. Extremely [volatile](/glossary#volatility) due to weather sensitivity.
*   **Coal**: Used for electricity generation and steel production. Declining in developed nations due to environmental concerns but still crucial in Asia.
*   **Refined Products**: Gasoline, heating oil, diesel. These are derivatives of crude oil.

### Metals
Divided into Precious and Industrial categories.
*   **Precious Metals (Gold, Silver, Platinum, Palladium)**: Used as a store of value, jewelry, and electronics. [Gold](/glossary#gold) is unique because it acts more like a currency than a raw material—a hedge against inflation and currency debasement.
*   **Industrial Metals (Copper, Aluminum, Zinc, Nickel, Lithium)**: Used in construction, infrastructure, and batteries. Copper is often called "Dr. Copper" because its price predicts the health of the global economy—when construction booms, copper demand soars.

### Agriculture (Softs & Grains)
The food we eat and the fibers we wear.
*   **Grains**: Corn, Wheat, Soybeans, Rice. These are staples for food and animal feed. The US, Brazil, and Ukraine are major exporters.
*   **Softs**: Coffee, Sugar, Cocoa, Cotton, Orange Juice. Grown in tropical climates and highly sensitive to weather and disease.
*   **Livestock**: Live Cattle, Lean Hogs, Feeder Cattle. Affected by grain prices (feed costs) and consumer demand.

## Part 3: Key Characteristics — Fungibility and Standardization

The defining characteristic of a [commodity](/glossary#commodity) is **fungibility**. This means that one unit of the good is essentially the same as another, regardless of who produced it.

*   **Interchangeability**: A bushel of corn grown in Iowa is interchangeable with a bushel of corn grown in Nebraska. An ounce of gold mined in Australia is chemically identical to an ounce of gold mined in South Africa.
*   **Why It Matters**: Because they are standardized, they can be traded on global exchanges. If they weren't fungible (e.g., if "Brand A" corn was considered better than "Brand B" corn), they would be traded like consumer products, not commodities.
*   **Quality Grades**: Exchanges define specific quality standards. For example, WTI crude oil must meet certain sulfur content and API gravity specifications.
*   **Contract Specifications**: Each [futures contract](/glossary#futures) defines the exact quantity, quality, and delivery location. One gold contract on COMEX is 100 troy ounces of 995 fine gold.
*   **Price Discovery**: Fungibility enables transparent price discovery. The price of oil is the same whether you're in New York, London, or Singapore (adjusted for transportation costs).
*   **Benchmark Pricing**: Physical commodity trades around the world are often priced as a premium or discount to exchange-traded benchmarks.

## Part 4: The Global Exchanges

[Commodities](/glossary#commodity) are traded on massive centralized exchanges. These exchanges set the rules, ensure contract standardization, and guarantee trades through a clearinghouse.

*   **CME Group (Chicago Mercantile Exchange)**: The giant of the industry. Owns the CBOT (grains), NYMEX (energy), and COMEX (metals). Trades everything from corn to crude oil to gold.
*   **ICE (Intercontinental Exchange)**: Major player in energy (Brent Crude) and softs (Coffee, Sugar, Cocoa). Also owns the New York Stock Exchange.
*   **LME (London Metal Exchange)**: The center for industrial metals trading (Copper, Aluminum, Zinc). Unique for its system of physical delivery warehouses worldwide.
*   **Shanghai Futures Exchange (SHFE)**: China's major commodity exchange. Growing in importance as China consumes more raw materials than any other nation.
*   **Open Outcry vs. Electronic**: Traditionally, traders shouted bids in "pits." Today, most trading is electronic, allowing 24-hour global access.
*   **Clearinghouse Guarantee**: The exchange's clearinghouse stands between every buyer and seller, eliminating [counterparty risk](/glossary#counterparty-risk). This is why you don't need to worry about whether the other party can pay.

## Part 5: Who Trades Commodities?

The market is a battlefield between two very different groups with opposing motivations. Understanding this dynamic is crucial for any trader.

### The Hedgers (Commercials)
These are the producers and consumers of the physical goods. They use the market to **reduce [risk](/glossary#risk)**, not to make trading profits.
*   **The Producer (Farmer/Miner)**: A wheat farmer worries that prices will drop before harvest. He *sells* wheat [futures](/glossary#futures) now to lock in a price. If prices fall, he loses money on his physical crop but gains on his futures position—he is protected.
*   **The Consumer (Manufacturer/Airline)**: A bread factory worries that wheat prices will rise. They *buy* wheat futures now to lock in their costs. Airlines do the same with jet fuel.
*   **Goal**: Stability and predictability. They don't care about making a profit on the trade; they want to ensure their business survives regardless of price fluctuations.

### The Speculators (That's You)
These are traders, [hedge funds](/glossary#hedge-fund), and banks who have no interest in the physical good. You do not want 5,000 bushels of corn delivered to your apartment.
*   **Role**: You provide **[liquidity](/glossary#liquidity)**. You take the [risk](/glossary#risk) that the hedgers are trying to get rid of. Without speculators, hedgers couldn't easily find someone to take the other side of their trade.
*   **Goal**: Profit. You analyze supply and demand, technical charts, and macroeconomic trends to bet on price direction.
*   **Time Horizon**: Ranges from high-frequency traders (milliseconds) to macro funds (months or years).

## Part 6: Why Trade Commodities?

There are compelling reasons to include [commodities](/glossary#commodity) in your trading or investment strategy.

*   **Diversification**: Commodities often have a low or negative [correlation](/glossary#correlation) with the stock market. During the 1970s stagflation, [stocks](/glossary#stock) crashed while commodities skyrocketed. Adding them to a [portfolio](/glossary#portfolio) can lower overall [volatility](/glossary#volatility).
*   **Inflation Hedge**: Inflation is essentially "too much money chasing too few goods." When inflation rises, the price of those "goods" (commodities) usually rises. [Gold](/glossary#gold) and Oil are classic inflation hedges.
*   **Volatility & Opportunity**: Commodity markets are wild. A hurricane in the Gulf of Mexico can send oil prices up 10% in a day. A drought in Brazil can double coffee prices in a month. For a skilled trader, this [volatility](/glossary#volatility) equals opportunity.
*   **Macroeconomic Plays**: Commodities allow you to bet on entire countries or the global cycle. Bullish on China? Buy Copper (they are the biggest consumer). Bearish on the global economy? Short Oil (demand will drop). Worried about currency collapse? Buy Gold.
*   **Pure Supply/Demand**: Unlike stocks, where accounting fraud or management scandals can tank a company, commodity prices are driven by physical supply and demand. You can't fake a wheat harvest or hide a oil tanker.
*   **Leverage**: [Futures contracts](/glossary#futures) allow you to control large amounts of product with a small deposit ([margin](/glossary#margin)). This magnifies both gains and losses.

## Part 7: The Risks of Commodity Trading

Commodity trading is not for the faint of heart. It is highly leveraged and extremely [volatile](/glossary#volatility). You must understand the risks before diving in.

*   **Leverage Risk**: [Futures contracts](/glossary#futures) allow you to control huge amounts of product with a small deposit ([margin](/glossary#margin)). A 5% move against you can wipe out your entire account. Unlike stocks, you can lose more than you invested.
*   **Volatility Risk**: Prices can move dramatically in minutes based on news, weather, or geopolitical events. A Russian export ban, a OPEC meeting, or a cold snap can cause limit-up or limit-down moves.
*   **Physical Delivery**: [Futures contracts](/glossary#futures) have an expiration date. If you hold a contract until expiration, you are legally obligated to buy or sell the physical goods. Your broker will usually force-close your position before this happens, but it's a real risk.
*   **Contango Decay**: If you hold [commodity ETFs](/glossary#etf), you may suffer from "roll yield" losses as the fund sells expiring contracts and buys more expensive future contracts. This can erode your returns over time.
*   **Geopolitical Risk**: Commodity prices are heavily influenced by political decisions—OPEC production cuts, US sanctions on Iran, Russian gas pipelines to Europe. These events are unpredictable.
*   **Complexity**: Commodity markets have unique factors (seasonality, storage costs, weather, government reports) that require specialized knowledge.
\`,
        keyTakeaways: [
            "Commodities are the raw materials of the global economy (Energy, Metals, Agriculture).",
            "Fungibility (interchangeability) allows them to be traded on standardized exchanges.",
            "The market consists of Hedgers (avoiding risk) and Speculators (seeking profit).",
            "Commodities are excellent for diversification and hedging against inflation.",
            "High leverage and volatility offer great rewards but carry significant risk."
        ]
    },`;

const startMarker = '"cf_1": {';
const endMarker = '"cf_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_1: Introduction to Commodities - VALIDATION ===');
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
console.log('✓ Successfully updated cf_1!');
