const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_6": {
        title: "Hedging with Futures",
        content: \`
# Insurance for Business: The Original Purpose of Futures

[Hedging](/glossary#hedging) is the primary reason [futures markets](/glossary#futures) exist. Long before speculators dominated trading floors, farmers and merchants used these contracts to protect their businesses from price [volatility](/glossary#volatility). Understanding hedging is crucial not only for those who run physical commodity businesses but also for any trader who wants to understand market dynamics—because hedgers are the "smart money" with real skin in the game.

A hedge is essentially an insurance policy against adverse price movements. Unlike speculation, where the goal is profit, hedging aims to reduce uncertainty and lock in margins. It's not about making money on the [futures](/glossary#futures) trade—it's about ensuring your underlying business remains profitable regardless of what prices do.

## Part 1: The Fundamental Concept of Hedging

At its core, [hedging](/glossary#hedging) involves taking an opposite position in the [futures](/glossary#futures) market to offset [risk](/glossary#risk) in the physical market.

*   **Definition**: A hedge is a position that reduces [risk](/glossary#risk) by counterbalancing potential losses in another position.
*   **The Goal**: Price certainty from the perspective of the business. The hedger wants to lock in a price, margin, or cost—not gamble on market direction.
*   **Two Legs**: Every hedge has two legs:
    1.  **The Physical Position**: The actual commodity you own or need (your crop, your inventory, your input costs).
    2.  **The Futures Position**: A contract that moves in the opposite direction to offset gains or losses in the physical position.
*   **Perfect Hedge**: In theory, if the physical position loses $10,000, the futures position gains $10,000 (or vice versa). The net result is zero gain/loss from price movement.
*   **Imperfect Hedges**: In practice, hedges are rarely perfect due to basis [risk](/glossary#risk) (the difference between spot and futures prices), timing differences, and contract specifications.
*   **The Trade-Off**: By hedging, you give up potential windfall gains in exchange for eliminating catastrophic losses. You trade opportunity for security.

## Part 2: Producer Hedging — Protecting the Seller

Producers of [commodities](/glossary#commodity) (farmers, miners, oil drillers) face the [risk](/glossary#risk) that prices will fall before they can sell their product. They use [short hedges](/glossary#short-selling) to lock in selling prices.

### The Farmer's Dilemma
*   **Situation**: A corn farmer plants 100,000 bushels in April. He won't harvest until September.
*   **Risk**: What if corn prices crash from $6.00 to $4.00 by September? He could lose $200,000.
*   **Solution**: Sell corn [futures](/glossary#futures) now to lock in the current price.

### Mechanics of a Short Hedge
1.  **April Action**: Farmer sells 20 corn futures (each = 5,000 bushels) at $6.00/bushel.
2.  **September Harvest**: Corn price is now $5.00/bushel.
3.  **Physical Sale**: Farmer sells his actual corn for $5.00 × 100,000 = $500,000.
4.  **Futures Closeout**: Farmer buys back futures at $5.00. Profit: ($6.00 - $5.00) × 100,000 = $100,000.
5.  **Net Result**: $500,000 (physical) + $100,000 (futures profit) = $600,000 — the same as if he'd sold at $6.00.

### What If Prices Rise?
1.  **September**: Corn price is $7.00/bushel.
2.  **Physical Sale**: $7.00 × 100,000 = $700,000.
3.  **Futures Loss**: ($6.00 - $7.00) × 100,000 = -$100,000.
4.  **Net Result**: $700,000 - $100,000 = $600,000 — still locked in at $6.00.

The farmer didn't "make" money either way—he achieved **certainty**. He can plan, budget, and sleep at night.

### Real-World Producers Who Hedge
*   **Farmers**: Corn, wheat, soybeans, cotton, cattle.
*   **Mining Companies**: Gold, silver, copper. Barrick Gold famously hedge their gold production (sometimes controversially).
*   **Oil Producers**: Shale drillers hedge future production to finance drilling operations. Banks require hedges as conditions for loans.
*   **Airlines**: Somewhat unique—they hedge jet fuel as *consumers*.

## Part 3: Consumer Hedging — Protecting the Buyer

Consumers of [commodities](/glossary#commodity) (manufacturers, airlines, utilities) face the [risk](/glossary#risk) that prices will rise before they can buy the inputs they need. They use [long hedges](/glossary#long-position) to lock in purchase prices.

### The Airline's Dilemma
*   **Situation**: An airline consumes millions of gallons of jet fuel annually. Fuel is 20-30% of operating costs.
*   **Risk**: What if oil prices spike from $80 to $120? Fuel costs would skyrocket. The airline might lose money on every flight.
*   **Solution**: Buy oil [futures](/glossary#futures) now to lock in fuel costs.

### Mechanics of a Long Hedge
1.  **January Action**: Airline buys 1,000 oil futures at $80/barrel to cover next year's fuel needs.
2.  **October Reality**: Oil is now $100/barrel.
3.  **Physical Purchase**: Airline buys jet fuel at $100 equivalent. Cost is $20/barrel higher than planned.
4.  **Futures Closeout**: Airline sells futures at $100. Profit: ($100 - $80) × 1,000 × 1,000 barrels = $20 million.
5.  **Net Result**: The futures profit offsets the higher fuel costs. The airline's effective cost remains around $80/barrel.

### What If Prices Fall?
1.  **October**: Oil is $60/barrel.
2.  **Physical Purchase**: Airline buys cheaper fuel—saves $20/barrel.
3.  **Futures Loss**: ($60 - $80) × 1,000,000 = -$20 million.
4.  **Net Result**: Cheaper fuel offsets by futures loss. Effective cost still around $80/barrel.

The airline didn't benefit from falling prices, but they also didn't gamble on them rising. They achieved **budget certainty**.

### Real-World Consumers Who Hedge
*   **Airlines**: Southwest Airlines built a competitive advantage through disciplined fuel hedging.
*   **Utilities**: Electricity producers hedge natural gas costs.
*   **Food Manufacturers**: Nestle, General Mills hedge wheat, corn, cocoa, sugar.
*   **Automobile Manufacturers**: Hedge steel, aluminum, palladium (for catalytic converters).

## Part 4: Basis Risk — Why Hedges Aren't Perfect

In the real world, hedges don't perfectly offset physical position gains/losses due to **basis [risk](/glossary#risk)**.

*   **Definition of Basis**: Basis = Spot Price − Futures Price. This difference varies by location, quality, and time.
*   **Why Basis Exists**:
    *   **Transportation Costs**: Corn in Iowa trades differently than corn in Chicago.
    *   **Quality Differences**: The corn you grow might not perfectly match the "basis grade" underlying the futures contract.
    *   **Timing**: The futures contract might expire in December, but you need to deliver in November.
*   **Basis [Risk](/glossary#risk)**: The risk that the basis changes unexpectedly, causing the hedge to be more or less effective than planned.
*   **Example**: You hedge corn at $6.00 futures. When you deliver, local spot is $5.90 (normally $0.10 under futures). But this time, basis widens to $0.30 under. You receive $0.20 less than expected.
*   **Managing Basis [Risk](/glossary#risk)**:
    *   Trade at the delivery location to minimize basis.
    *   Use shorter hedging horizons to reduce basis variability.
    *   Monitor historical basis patterns for your specific location and grade.
*   **Basis Trading**: Some traders specialize in trading the basis itself, betting on changes in the relationship between spot and futures prices.

## Part 5: Cross-Hedging — When a Perfect Contract Doesn't Exist

Sometimes there isn't a [futures contract](/glossary#futures) for the exact [commodity](/glossary#commodity) you need to hedge. In such cases, you use a **cross-hedge** with a related commodity.

*   **Definition**: Hedging exposure in one [commodity](/glossary#commodity) using [futures](/glossary#futures) on a correlated but different [commodity](/glossary#commodity).
*   **Example — Jet Fuel**: There is no liquid jet fuel futures contract. Airlines hedge with crude oil or heating oil futures, which are highly [correlated](/glossary#correlation) with jet fuel prices.
*   **Example — Soybean Meal**: A poultry farmer needs soybean meal (chicken feed). They might hedge with soybean futures, knowing that soybean and soybean meal prices move together.
*   **Correlation [Risk](/glossary#risk)**: The cross-hedge works only if the two commodities remain correlated. In volatile markets, correlations can break down.
*   **Hedge Ratio**: Because the two commodities don't move dollar-for-dollar, you must calculate a hedge ratio based on historical price relationships.
*   **Effectiveness**: Cross-hedges are less effective than direct hedges but are often the only option available.

## Part 6: Corporate Hedging Strategies in Practice

Large corporations have sophisticated hedging programs managed by treasury departments and risk managers.

*   **Layered Hedging**: Rather than hedging 100% of exposure at once, companies hedge in layers over time. For example, hedge 25% of next year's fuel needs each quarter.
*   **Rolling Hedges**: As contracts expire, roll them forward into later months to maintain protection.
*   **Optionality**: Some companies buy [options](/glossary#options) on [futures](/glossary#futures) instead of [futures](/glossary#futures) directly. This provides protection ([downside](/glossary#downside) limit) while preserving [upside](/glossary#upside) potential if prices move favorably.
*   **Collar Strategies**: Buy a [put option](/glossary#put-option) (floor) and sell a [call option](/glossary#call-option) (cap). This creates a price range—you're protected below the floor but give up gains above the cap.
*   **Hedge Accounting**: Companies must disclose hedging activities in financial statements. "Effective" hedges receive favorable accounting treatment.
*   **Hedge Committees**: Large firms have internal committees that set hedging policy, decide how much to hedge, and approve strategies.
*   **Policy Constraints**: Some firms have rigid policies (e.g., "Always hedge 50% of next 12 months"). Others are more discretionary.

## Part 7: Why Hedging Matters to Speculators

Even if you're a speculator with no physical commodity exposure, understanding hedging is critical to your success.

*   **Hedgers Are the Smart Money**: Commercial hedgers know the physical market intimately. They hedge based on real supply/demand knowledge, not chart patterns.
*   **[COT Report](/glossary#cot-report)**: The Commitment of Traders report shows positions of "Commercials" (hedgers) vs. "Non-Commercials" (speculators). Many traders follow commercial positioning as a signal.
*   **Liquidity Provision**: Speculators provide [liquidity](/glossary#liquidity) to hedgers. Without you, the farmer might not find a buyer for his [futures](/glossary#futures).
*   **Price Discovery**: The interaction between hedgers (with fundamental knowledge) and speculators (processing public information) creates efficient prices.
*   **Market Structure**: Understanding why hedgers buy or sell at certain times helps you anticipate order flow.
*   **Seasonal Patterns**: Farmer hedging creates predictable seasonal patterns in grains. Airlines hedge in waves throughout the year.
*   **Counterparty to Someone's Certainty**: When you take a speculative position, you may be taking the other side of a hedger's [risk](/glossary#risk)-reduction trade. Respect that they might know more than you about the physical market.
\`,
        keyTakeaways: [
            "Hedging uses futures to offset price risk in physical commodity positions.",
            "Producers (farmers, miners) sell futures to lock in selling prices; consumers (airlines, manufacturers) buy futures to lock in costs.",
            "A perfect hedge eliminates price risk—gains in one position offset losses in the other.",
            "Basis risk (spot vs. futures price difference) means real-world hedges are rarely perfect.",
            "Understanding hedgers' motivations helps speculators anticipate market flows and read the COT report."
        ]
    },`;

const startMarker = '"cf_6": {';
const endMarker = '"cf_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_6: Hedging with Futures - VALIDATION ===');
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
console.log('✓ Successfully updated cf_6!');
