const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_9": {
        title: "Agricultural Commodities",
        content: \`
# Feeding the World: Understanding Agricultural Commodity Markets

Agricultural [commodities](/glossary#commodity)—grains, softs, and livestock—feed the world. They are among the oldest traded commodities, with futures markets for grain dating back centuries. Today, agricultural markets are a multi-trillion-dollar industry that affects the price of everything from your morning coffee to the cost of a hamburger.

Unlike energy or metals, agricultural commodities are **renewable** but **perishable** and **weather-dependent**. This creates unique trading dynamics. A drought at the wrong time can destroy a crop and send prices soaring. A perfect growing season can flood the market with supply and crash prices. Understanding these markets requires knowledge of seasonality, weather patterns, and global trade flows.

## Part 1: The Major Grain Markets

Grains are the staples of global food supply—corn, wheat, and soybeans dominate agricultural trading.

### Corn
*   **The King of Grains**: Corn is the most widely grown grain in the world. The US is the largest producer (~35% of global production).
*   **Uses**: Animal feed (40%), ethanol (30%), food/industrial (~30%).
*   **Contract Specs**: CBOT Corn futures = 5,000 bushels. Ticker: ZC.
*   **Growing Season (US)**: Planted April-May, harvested September-October.
*   **Key Drivers**: Weather in the US Midwest (the "Corn Belt"—Iowa, Illinois, Nebraska), ethanol policy (Renewable Fuel Standard), and exports to China and Mexico.
*   **Price Range**: Historically $3-$8 per bushel. Spikes to $8+ during droughts or demand shocks.

### Wheat
*   **The Staff of Life**: Wheat is the primary grain for human food consumption (bread, pasta, cereals).
*   **Types**:
    *   Hard Red Winter (HRW): Used for bread flour. Kansas is the main growing region.
    *   Soft Red Winter (SRW): Used for cakes and pastries. Traded on CBOT.
    *   Hard Red Spring (HRS): High protein content. North Dakota.
*   **Global Nature**: Unlike corn, wheat is truly global. Major exporters: US, Russia, Ukraine, Canada, Australia, France.
*   **Contract Specs**: CBOT Wheat futures = 5,000 bushels. Ticker: ZW.
*   **Key Drivers**: Weather in major growing regions, geopolitics (Russia-Ukraine war disrupted ~30% of global wheat exports), and currency movements (a weak ruble makes Russian wheat cheaper).

### Soybeans
*   **The Versatile Bean**: Soybeans are crushed into soybean meal (protein for animal feed) and soybean oil (cooking, biodiesel).
*   **Production**: US and Brazil are the top producers, with Argentina a close third. Brazil has surpassed the US as the largest exporter.
*   **Contract Specs**: CBOT Soybean futures = 5,000 bushels. Ticker: ZS.
*   **The Crush Spread**: Traders trade the margin between soybeans and their products (meal + oil). Long soybeans, short meal and oil = long the crush.
*   **Key Drivers**: China (world's largest importer), South American crop, biodiesel policy, and the meal-to-oil ratio.

## Part 2: The Softs — Tropical Commodities

"Softs" refer to agricultural products grown primarily in tropical regions—coffee, sugar, cocoa, cotton, and orange juice.

### Coffee
*   **The World's Drug of Choice**: Coffee is the most traded tropical [commodity](/glossary#commodity) and the second-most traded commodity overall (after oil, by some measures).
*   **Two Types**:
    *   Arabica (KC - ICE): Higher quality, grown at higher altitudes. Brazil, Colombia. Price premium.
    *   Robusta (RC - ICE London): Bitter, higher caffeine. Vietnam, Indonesia. Cheaper.
*   **Brazil Dominance**: Brazil produces ~35% of global coffee. A frost or drought in Brazil moves the world market.
*   **Key Drivers**: Weather in Brazil and Colombia, currency (Brazilian Real), and disease (coffee leaf rust devastated Central American crops).
*   **Volatility**: Coffee is notoriously [volatile](/glossary#volatility). Prices can double in a year or crash 50%.

### Sugar
*   **The Sweet [Commodity](/glossary#commodity)**: Sugar comes from sugarcane (tropical) and sugar beets (temperate).
*   **Key Producers**: Brazil (largest), India, Thailand, EU.
*   **Dual Use**: Sugar is used for food AND ethanol. In Brazil, mills shift between producing sugar and ethanol based on prices.
*   **Contract Specs**: ICE Sugar No. 11 (SB) = 112,000 lbs. Ticker: SB.
*   **Key Drivers**: Brazilian production, Indian monsoon (affects their massive crop), oil prices (ethanol alternative), and government policies (import tariffs, export subsidies).

### Cocoa
*   **Chocolate's Essential Ingredient**: Cocoa beans are processed into cocoa butter and cocoa powder.
*   **Geographic Concentration**: 70% of cocoa comes from West Africa (Ivory Coast, Ghana). This concentration creates massive supply [risk](/glossary#risk).
*   **Contract Specs**: ICE Cocoa = 10 metric tonnes. Ticker: CC.
*   **Key Drivers**: Weather in West Africa, disease (swollen shoot virus, black pod), political instability (Ivory Coast has had civil wars), and demand from chocolate manufacturers.
*   **Price Spikes**: Cocoa prices can spike when crops fail. In 2024, disease and weather pushed prices above $10,000/tonne.

### Cotton
*   **The Fiber [Commodity](/glossary#commodity)**: Cotton is used for textiles (clothing, bedding) and is grown in warmer climates.
*   **Key Producers**: China, India, US, Brazil, Pakistan.
*   **Contract Specs**: ICE Cotton No. 2 = 50,000 lbs. Ticker: CT.
*   **Key Drivers**: Weather in key growing regions (Texas, India), textile demand (linked to consumer spending), and competition from synthetic fibers (polyester).

## Part 3: Livestock Markets

Livestock [commodities](/glossary#commodity)—cattle and hogs—are unique because you're trading live animals. These markets have distinct dynamics.

### Live Cattle
*   **Definition**: Cattle ready for slaughter, weighing 1,050-1,250 lbs.
*   **Contract Specs**: CME Live Cattle = 40,000 lbs. Ticker: LE.
*   **Supply Cycle**: Cattle take 2-3 years from birth to slaughter. Supply is slow to respond to price changes.
*   **Key Drivers**: Consumer beef demand (restaurant sales, retail), feed costs (corn), drought (pasture conditions), and herd size (cow inventory report).
*   **Seasonality**: BBQ season (summer) increases demand. Holiday season demand for prime cuts.

### Feeder Cattle
*   **Definition**: Young cattle (under 800 lbs) sold to feedlots for finishing.
*   **Contract Specs**: CME Feeder Cattle = 50,000 lbs. Ticker: GF.
*   **Relationship to Corn**: Feeder cattle prices are inversely related to corn prices. High corn = expensive to feed = lower feeder prices.
*   **Cattle Crush**: Long live cattle, short feeder cattle and corn = betting on feedlot profitability.

### Lean Hogs
*   **Definition**: Hogs ready for slaughter, standardized to 50-52% lean.
*   **Contract Specs**: CME Lean Hogs = 40,000 lbs. Ticker: HE.
*   **Faster Cycle**: Hogs reproduce faster than cattle. Supply can respond more quickly to price signals.
*   **Key Drivers**: Consumer pork demand (especially exports to China/Japan), corn prices (feed), and disease outbreaks (African Swine Fever devastated China's herd in 2018-2019).
*   **Volatility**: Hogs are very [volatile](/glossary#volatility). Disease scares can cause 20%+ moves.

## Part 4: Seasonality and the Crop Year

Agricultural markets are intensely seasonal. Understanding the crop calendar is essential for trading.

### The US Grain Calendar
*   **April-May**: Planting. Prices often rise on uncertainty—will weather cooperate? Will farmers plant expected acreage?
*   **June-July**: Growing season. Weather is critical. Hot, dry weather = crop stress = bullish.
*   **August**: Pollination window for corn. The make-or-break period.
*   **September-October**: Harvest. Supply floods the market. Prices typically drop (harvest pressure).
*   **November-March**: Storage period. Prices slowly rise as supply gets consumed.

### Southern Hemisphere
*   Brazil and Argentina plant soybeans in October-November and harvest in February-April. Their harvest fills the gap before the US harvest.
*   This creates **two harvests per year** globally for soybeans, smoothing supply.

### Soft Commodity Seasonality
*   **Coffee**: Brazil's main harvest is April-August. Frost risk is June-August (Brazilian winter).
*   **Sugar**: Brazil's crush season is April-November. India's harvest is December-March.
*   **Cocoa**: Main harvest October-March (Ivory Coast). Mid-crop April-June.

## Part 5: Key Reports and Data

Agricultural traders must track USDA and other government data releases.

*   **WASDE (World Agricultural Supply and Demand Estimates)**: Published monthly by USDA. THE most important report. Contains supply, demand, and ending stock forecasts.
*   **Crop Progress Report**: Weekly during growing season. Shows planting/harvest progress and crop condition ratings (excellent, good, fair, poor).
*   **Export Sales Report**: Weekly. Shows how much grain is being exported. Strong exports = bullish demand.
*   **Prospective Plantings**: March. Shows farmer planting intentions. Sets expectations for the year.
*   **Acreage Report**: June. Actual planted acreage (corrects March intentions).
*   **Quarterly Grain Stocks**: Key measure of inventory levels.
*   **Cattle on Feed Report**: Monthly. Shows number of cattle in feedlots and placements.
*   **Hogs and Pigs Report**: Quarterly. Herd inventory and pig crop.

## Part 6: Weather Trading

Weather is the most important variable in agricultural markets. Learning to read and trade weather is a key skill.

*   **El Niño / La Niña**: Pacific Ocean temperature cycles affect global weather patterns.
    *   **El Niño**: Warming. Tends to be positive for US crops, negative for Australia/Indonesia.
    *   **La Niña**: Cooling. Often brings drought to US Midwest and South America.
*   **Brazilian Frost**: A frost in Brazil's coffee-growing regions (June-August) can devastate the crop. Prices spike on forecasts of cold air.
*   **US Midwest Drought**: The US Corn Belt needs consistent rain during the growing season. Hot, dry conditions in July-August stress crops.
*   **Indian Monsoon**: India's monsoon season (June-September) determines their grain, sugar, and cotton crops. Weak monsoon = production shortfall.
*   **Weather Models**: Traders follow NWS (National Weather Service), ECMWF (European model), and private services. Forecasts beyond 7-10 days become unreliable.
*   **Weather [Volatility](/glossary#volatility)**: Grain [volatility](/glossary#volatility) spikes during key growing periods when weather uncertainty is highest.

## Part 7: Trading Strategies for Ag Markets

Agricultural markets require specific strategies tailored to their unique characteristics.

*   **Seasonal Trades**: Buy grains during harvest (low prices) and sell during spring (high prices due to uncertainty).
*   **Spread Trading**: Trade old crop vs. new crop (July corn vs. December corn). Play the supply/demand transition.
*   **Weather Event Trading**: Build positions ahead of weather threats (drought, frost) based on forecasts.
*   **Report Trading**: Trade around WASDE releases. Take positions based on expected vs. actual data.
*   **Crush/Livestock [Spreads](/glossary#spread)**: Trade soybean crush, cattle crush, or hog crush spreads for margin-based exposure.
*   **Technical Analysis**: Agricultural markets trend well during supply shocks but chop in quiet periods. Use [breakout](/glossary#breakout) strategies.
*   **Fundamental Analysis**: Track planting, crop conditions, exports, ethanol demand, and feed usage.
*   **[COT Report](/glossary#cot-report) Analysis**: Watch commercial hedger positions. They know the physical market. Extreme commercial positions can signal turns.
*   **Currency Plays**: Trade soybeans or coffee to bet on emerging market currencies (Brazilian Real, Argentine Peso).
\`,
        keyTakeaways: [
            "Corn, wheat, and soybeans are the major grains; coffee, sugar, cocoa, and cotton are the key soft commodities.",
            "Agricultural markets are highly seasonal—knowing the crop calendar is essential for trading.",
            "Weather is the dominant driver of agricultural prices; droughts and freezes can double prices overnight.",
            "The USDA WASDE report is the most important monthly release for grain traders.",
            "Use seasonal patterns, weather forecasts, and spread trading for agricultural market strategies."
        ]
    },`;

const startMarker = '"cf_9": {';
const endMarker = '"cf_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_9: Agricultural Commodities - VALIDATION ===');
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
console.log('✓ Successfully updated cf_9!');
