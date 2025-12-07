const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_5": {
        title: "Contango vs. Backwardation",
        content: \`
# The Shape of the Curve: Understanding Futures Market Structure

When you trade [futures](/glossary#futures), you're not just betting on where prices will go—you're navigating a complex term structure of prices across different expiration dates. Understanding **Contango** and **Backwardation** is essential for anyone trading [commodities](/glossary#commodity) or holding commodity-based [ETFs](/glossary#etf).

These concepts are among the most misunderstood in commodity trading. Many investors have lost money in commodity [ETFs](/glossary#etf) during extended contango periods, not understanding why their investment underperformed the underlying commodity. This lesson will demystify these critical market structures.

## Part 1: The Futures Curve Explained

[Futures contracts](/glossary#futures) exist for multiple expiration months into the future. The prices of these contracts form the "futures curve" or "term structure."

*   **Spot Price**: The current cash market price for immediate delivery. If you wanted to buy a barrel of oil right now, you'd pay the spot price.
*   **Front Month Contract**: The nearest futures contract to expiration—the most actively traded and closely tracks the spot price.
*   **Deferred Contracts**: Contracts expiring further in the future (2 months, 6 months, 12 months, etc.). These may trade at different prices.
*   **The Curve**: Plot all available contracts by expiration date—the curve can slope upward, downward, or be flat.
*   **Dynamic Nature**: The curve changes constantly based on supply/demand, storage costs, interest rates, and market expectations.
*   **Convergence**: As a futures contract approaches expiration, its price converges with the spot price. At expiration, they become equal.

## Part 2: Contango — The "Normal" Market Structure

**Contango** is when futures prices are higher than the current spot price—the curve slopes upward. This is considered the "normal" state for most commodities.

*   **Definition**: A market is in contango when: Front Month < Next Month < Later Months. The curve slopes upward to the right.
*   **Example**: Spot Oil: $75, 1-Month Future: $76, 3-Month Future: $78, 6-Month Future: $80
*   **The Cost of Carry**: Contango reflects the costs of storing and financing the commodity until delivery.
    *   Storage costs (tanks for oil, silos for grain, vaults for gold).
    *   Insurance costs for stored commodities.
    *   Financing costs—capital tied up in inventory.
*   **Arbitrage Equilibrium**: In theory, futures price ≈ spot price + cost of carry.
*   **When Contango Occurs**: In well-supplied markets with ample storage capacity. No urgency to buy now versus later.

### Why Contango Matters
*   **Negative Roll [Yield](/glossary#yield)**: When you roll contracts, you sell low (expiring contract) and buy high (next contract). This erodes returns over time.
*   **[ETF](/glossary#etf) Decay**: Commodity [ETFs](/glossary#etf) like USO suffered massive losses during extended contango. Even if oil prices went sideways, the [ETF](/glossary#etf) lost value due to roll costs.
*   **Long-Term Warning**: Buy-and-hold doesn't work well for futures-based investments in contango markets.

## Part 3: Backwardation — The Tight Market Signal

**Backwardation** is when futures prices are lower than the current spot price—the curve slopes downward. This signals that supply is tight *right now*.

*   **Definition**: A market is in backwardation when: Spot > Front Month > Later Months. The curve slopes downward to the right.
*   **Example**: Spot Oil: $85, 1-Month Future: $83, 3-Month Future: $80, 6-Month Future: $78
*   **Why It Happens**: People need the [commodity](/glossary#commodity) urgently. They're willing to pay a premium for immediate delivery.
    *   **Supply Shortage**: Inventories are low. Not enough product to meet current demand.
    *   **Geopolitical Crisis**: Sanctions, wars, or export bans create immediate scarcity.
    *   **Weather Events**: Hurricanes or droughts disrupt current production.
*   **The Convenience [Yield](/glossary#yield)**: Having physical commodity in hand has value—a refinery that runs out of oil must shut down.

### Why Backwardation Matters
*   **Bullish Signal**: Backwardation often indicates a tight physical market—demand exceeds supply.
*   **Positive Roll [Yield](/glossary#yield)**: When you roll contracts, you sell high (expiring contract) and buy low (next contract). This adds to your returns.
*   **[ETF](/glossary#etf) Tailwind**: During backwardation, commodity [ETFs](/glossary#etf) benefit from roll yield. However, extended backwardation is less common.

## Part 4: Reading the Term Structure — Practical Analysis

Learning to analyze the futures curve provides valuable insights for trading and investment decisions.

*   **Shape of the Curve**: 
    *   Steep Contango: Well-supplied, storage full, weak near-term demand.
    *   Flat Curve: Market is balanced, no strong signals.
    *   Steep Backwardation: Severe shortage, panic buying, potential price spike.
*   **Changes Over Time**: Watch how the curve shape evolves. A transition from contango to backwardation signals tightening supply.
*   **Spread Trading**: Many professionals trade the difference between contract months (calendar [spreads](/glossary#spread)) rather than outright direction.
*   **Inventory Reports**: Track inventory data (EIA for oil, USDA for grains). Falling inventories often precede a move toward backwardation.
*   **Seasonal Patterns**: Some commodities show predictable seasonal shifts. Heating oil often moves into backwardation going into winter.

## Part 5: Real-World Examples

Understanding how contango and backwardation have played out in real markets helps cement these concepts.

### Oil Market 2020 — Extreme Contango
*   **Situation**: COVID-19 crushed oil demand. Storage tanks worldwide filled to capacity.
*   **Result**: May 2020 WTI futures briefly went NEGATIVE (-$37/barrel). Traders paid people to take oil they couldn't store.
*   **Curve Shape**: Extreme contango. Front month vastly cheaper than deferred months.
*   **Impact on Investors**: Oil [ETFs](/glossary#etf) suffered catastrophic losses. USO dropped over 80%.

### Oil Market 2022 — Backwardation
*   **Situation**: Russia-Ukraine war disrupted supply. Sanctions on Russian oil. OPEC+ constrained production.
*   **Result**: Oil spiked to $130/barrel. Immediate supply was scarce.
*   **Curve Shape**: Deep backwardation. Spot traders paid large premiums for immediate delivery.
*   **Impact on Investors**: Oil [ETFs](/glossary#etf) actually outperformed spot prices due to positive roll [yield](/glossary#yield).

### Gold Market — Typically Contango
*   **Situation**: Gold is always in contango under normal conditions because of financing costs.
*   **Exception**: During extreme stress (2008 Lehman Brothers collapse), physical gold became scarce and briefly showed backwardation—extremely rare.

### Agricultural Markets — Seasonal Shifts
*   **Harvest Time**: After harvest, grains flood the market. Massive supply = contango.
*   **Planting Season**: As inventories are consumed and uncertainty rises, the curve can flatten or invert into backwardation.

## Part 6: Impact on Trading and Investment Strategies

The curve structure should directly influence your trading approach.

### For Long-Term Investors
*   **In Contango**: Avoid futures-based [ETFs](/glossary#etf) for long-term holds. Consider commodity producer [stocks](/glossary#stock), physical ownership (metals), or [ETFs](/glossary#etf) with alternative strategies.
*   **In Backwardation**: Long commodity [ETFs](/glossary#etf) can provide enhanced returns. The roll [yield](/glossary#yield) works in your favor.
*   **Check the Curve Before Investing**: Before buying any commodity [ETF](/glossary#etf), look up the current term structure.

### For Active Traders
*   **Contango Trades**: In steep contango, consider calendar [spreads](/glossary#spread)—short front month, long back month.
*   **Backwardation Trades**: When you see backwardation developing, consider outright long positions or bull [spreads](/glossary#spread).
*   **Roll Timing**: If you hold [futures](/glossary#futures), time your rolls strategically. Don't roll right before major reports.

### Understanding [ETF](/glossary#etf) Mechanics
*   **Roll Frequency**: Monthly rolling in contango is worse than quarterly.
*   **Optimized Strategies**: Some [ETFs](/glossary#etf) use optimization strategies to reduce roll costs.
*   **Physical Backing**: Gold [ETFs](/glossary#etf) like GLD hold physical metal and don't suffer from roll [yield](/glossary#yield) issues.

## Part 7: Conclusion — The Hidden Tax and Tailwind

Contango and backwardation are hidden forces that significantly impact commodity returns. They are often invisible to casual investors but are well-known to professional traders.

*   **Contango is a Hidden Tax**: Long-term holders of commodity [futures](/glossary#futures) or [ETFs](/glossary#etf) in a contango market face persistent erosion of returns.
*   **Backwardation is a Tailwind**: When markets are tight, the roll [yield](/glossary#yield) adds to returns, enhancing gains.
*   **Market Structure Matters**: You can be 100% correct on the direction of a commodity and still lose money if the term structure works against you.
*   **Do Your Homework**: Before trading commodities, understand the current shape of the futures curve and how it will affect your position.
*   **Professional Edge**: Understanding these dynamics gives you a significant edge over retail investors who only look at spot prices.
\`,
        keyTakeaways: [
            "Contango (future prices > spot) is 'normal' and reflects storage/financing costs—creates negative roll yield.",
            "Backwardation (spot > futures) signals a tight market with supply shortage—creates positive roll yield.",
            "The term structure significantly impacts returns for futures holders and commodity ETFs.",
            "Long-term commodity ETF holders can suffer in contango even if prices rise.",
            "Reading the futures curve provides valuable information about supply/demand dynamics."
        ]
    },`;

const startMarker = '"cf_5": {';
const endMarker = '"cf_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_5: Contango vs. Backwardation - VALIDATION ===');
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
console.log('✓ Successfully updated cf_5!');
