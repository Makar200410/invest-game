const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_3": {
        title: "What is a Futures Contract?",
        content: \`
# Locking in Tomorrow's Price Today

A [futures contract](/glossary#futures) is one of the oldest and most powerful financial instruments ever created. It is a legally binding agreement to buy or sell a specific [commodity](/glossary#commodity) (or financial instrument) at a predetermined price at a specified time in the future. Futures contracts are the backbone of commodity trading and play a crucial role in global commerce, allowing businesses to manage [risk](/glossary#risk) and traders to speculate on price movements.

Understanding futures is essential for anyone interested in commodity markets. They are not just abstract financial products—they are the reason the farmer in Kansas can plant wheat with confidence and the bakery in New York can price its bread months in advance.

## Part 1: The Origin and Purpose of Futures

Futures contracts didn't emerge from Wall Street speculation—they were born from the practical needs of farmers and merchants who needed to manage uncertainty.

*   **Historical Origins**: The first organized futures exchange was the Dojima Rice Exchange in Osaka, Japan (1710). In the US, the Chicago Board of Trade (CBOT) was founded in 1848 to help Midwestern farmers manage grain price [volatility](/glossary#volatility).
*   **The Core Problem**: Imagine you're a wheat farmer. You plant in spring and harvest in fall. But you don't know what wheat will sell for in the fall. Weather, global supply, and demand could cause prices to crash, wiping out your profit.
*   **The Solution**: You sell a futures contract in spring, agreeing to deliver wheat in the fall at today's price. You've "locked in" your price. Whether the market goes up or down, you know what you'll get paid.
*   **Two-Sided Benefit**: On the other side, a flour mill worried about rising wheat prices can buy futures to lock in their input costs. Both parties benefit from certainty.
*   **Price Discovery**: Futures markets aggregate information from thousands of participants worldwide, creating transparent, real-time prices that reflect global supply and demand.
*   **Standardization**: Unlike private forward contracts, futures are standardized (quantity, quality, delivery location) and traded on exchanges, making them liquid and accessible.

## Part 2: Anatomy of a Futures Contract

Every [futures contract](/glossary#futures) has specific terms that define exactly what is being traded. Understanding these specifications is crucial before trading.

*   **Underlying Asset**: What is being bought or sold. Examples: 1,000 barrels of WTI crude oil, 5,000 bushels of corn, 100 troy ounces of gold.
*   **Contract Size**: The quantity of the [commodity](/glossary#commodity) covered by one contract. Size varies by commodity. One gold contract = 100 oz. One oil contract = 1,000 barrels.
*   **Contract Months**: Futures have specific expiration months. Not all months are traded for all commodities. For example, corn trades March, May, July, September, December.
*   **Tick Size & Value**: The minimum price movement and its dollar value. For WTI oil, one tick = $0.01 per barrel = $10 per contract.
*   **Delivery Date**: The date when the contract expires and physical delivery (or cash settlement) occurs. Also called the "expiration date."
*   **Delivery Location**: Where physical delivery takes place. For WTI oil, it's Cushing, Oklahoma. For CBOT grains, it's specific warehouses in Chicago.
*   **Settlement Type**: Most commodity futures are physically settled (actual delivery of goods). Some are cash-settled (cash payment for the difference between contract price and market price).
*   **Trading Hours**: Futures trade nearly 24 hours on electronic platforms, with brief maintenance breaks.

## Part 3: How Futures Trading Works

The mechanics of buying and selling [futures contracts](/glossary#futures) differ from stock trading in important ways.

*   **Going Long**: You buy a futures contract because you believe the price will rise. If oil is at $80 and you buy one contract, you profit if oil rises to $85. You lose if it falls to $75.
*   **Going Short**: You sell a futures contract because you believe the price will fall. You can "short" futures without first owning them—unlike stocks, there's no borrowing required.
*   **No Full Payment Upfront**: You don't pay $80,000 to buy one oil contract. You deposit [margin](/glossary#margin)—a small fraction of the contract value—as a performance bond.
*   **Mark to Market**: Every day, your account is adjusted based on the settlement price. If the market moves in your favor, money is added to your account. If it moves against you, money is deducted.
*   **Margin Calls**: If your account balance falls below the maintenance [margin](/glossary#margin) requirement, you receive a margin call and must deposit more funds immediately or your position is liquidated.
*   **Closing a Position**: Most traders don't want physical delivery. They close their position before expiration by entering an opposite trade (sell if they bought, buy if they sold). The difference is their profit or loss.
*   **Rolling Over**: To maintain exposure, traders "roll" their position—closing the expiring contract and opening a new one in a later month. This is common for [ETFs](/glossary#etf) that track commodities.

## Part 4: Hedgers vs. Speculators — The Two Sides of the Market

Every futures trade has a buyer and a seller. Understanding who these participants are and their motivations is key to understanding market dynamics.

### Hedgers (Commercials)
These are the original reason futures markets exist. They are producers or consumers of the physical [commodity](/glossary#commodity) who use futures to manage business [risk](/glossary#risk).

*   **Producer Hedge (Farmer/Miner)**: A coffee grower in Brazil worries prices might fall before harvest. He sells coffee futures now, locking in a price. If prices fall, he loses on his physical coffee but gains on his futures position, offsetting the loss.
*   **Consumer Hedge (Manufacturer/Airline)**: An airline fears jet fuel prices will rise. It buys crude oil futures. If prices rise, the airline pays more for physical fuel but profits on its futures, reducing the net cost.
*   **Goal**: Price certainty and [risk](/glossary#risk) reduction, not profit maximization. Hedgers accept potentially lower profits in exchange for eliminating [downside](/glossary#downside) [risk](/glossary#risk).

### Speculators (Traders)
These are participants with no commercial interest in the physical commodity. They trade purely to profit from price movements.

*   **Role**: Speculators provide [liquidity](/glossary#liquidity) to the market. Without them, hedgers might not find someone to take the other side of their trades.
*   **Risk Absorption**: They absorb the [risk](/glossary#risk) that hedgers want to offload, acting as "insurance providers" in exchange for potential profit.
*   **Price Discovery**: By analyzing supply, demand, and other factors, speculators help markets find the "correct" price.
*   **Types**: Individual traders, [hedge funds](/glossary#hedge-fund), proprietary trading firms, and commodity trading advisors (CTAs).
*   **Profit Motive**: They profit when their analysis is correct and the market moves in their favor. They lose when they're wrong.

## Part 5: The Role of Exchanges and Clearinghouses

The exchange and its clearinghouse are the backbone that makes futures trading possible, safe, and efficient.

*   **The Exchange**: A centralized marketplace where standardized contracts are traded. Examples: CME Group (CBOT, NYMEX, COMEX), ICE, Eurex.
*   **Order Matching**: The exchange matches buy and sell orders electronically, ensuring fair and transparent execution.
*   **Contract Standardization**: The exchange defines the exact terms of each contract (size, quality, delivery). This standardization enables [liquidity](/glossary#liquidity).
*   **The Clearinghouse**: The clearinghouse acts as the [counterparty](/glossary#counterparty-risk) to every trade. When you buy a contract, you're technically buying from the clearinghouse, not the specific seller.
*   **Elimination of [Counterparty Risk](/glossary#counterparty-risk)**: Because the clearinghouse guarantees every trade, you don't need to worry about whether the person on the other side can pay. This is a massive advantage over private over-the-counter contracts.
*   **[Margin](/glossary#margin) Requirements**: The clearinghouse sets [margin](/glossary#margin) requirements—the amount of capital you must deposit to open and maintain positions.
*   **Daily Settlement**: The clearinghouse conducts daily mark-to-market settlement, debiting or crediting accounts based on price movements.
*   **Financial Integrity**: Major clearinghouses have never defaulted, even during extreme market events. They maintain large guarantee funds for protection.

## Part 6: Physical Delivery vs. Cash Settlement

Understanding how a futures contract is ultimately settled is important, especially if you're new to trading.

### Physical Delivery
Most commodity futures are designed for physical delivery of the underlying good.

*   **Process**: If you hold a long position to expiration, you're obligated to take delivery of the physical [commodity](/glossary#commodity). If short, you must deliver it.
*   **Delivery Notice**: As expiration approaches, the short position holder may issue a delivery notice, and the exchange assigns it to a long holder.
*   **Delivery Location**: Physical delivery occurs at exchange-specified locations (e.g., Cushing, Oklahoma for WTI oil; Chicago for grains).
*   **Retail Traders**: Almost no retail traders intend to take physical delivery. They close positions before the "first notice day." Brokers often force-close positions if you forget.
*   **The April 2020 WTI Crash**: When oil storage ran out, traders who couldn't take delivery had to pay people to take their contracts. WTI briefly traded at -$40/barrel!

### Cash Settlement
Some contracts settle in cash rather than physical goods.

*   **Process**: At expiration, no goods change hands. Profit or loss is calculated based on the difference between your entry price and the final settlement price.
*   **Examples**: Stock index futures (S&P 500), interest rate futures, many cryptocurrency futures.
*   **Advantage**: Eliminates delivery logistics. Makes trading more accessible to speculators.

## Part 7: Risks and Rewards of Futures Trading

[Futures](/glossary#futures) are powerful instruments that can generate significant profits—or devastating losses. Understanding the [risk](/glossary#risk)/reward profile is essential.

### The Rewards
*   **[Leverage](/glossary#leverage)**: Control large positions with small capital. This magnifies gains when you're right.
*   **Two-Way Market**: Profit from both rising and falling prices. You can go [short](/glossary#short-selling) as easily as going [long](/glossary#long-position).
*   **[Liquidity](/glossary#liquidity)**: Major futures contracts are extremely liquid—millions of contracts trade daily in oil, gold, and equity indices.
*   **Transparency**: Exchange-traded with real-time pricing. No "bid-ask" games with dealers.
*   **24-Hour Trading**: React to news events around the clock.
*   **Diversification**: Access markets (commodities, currencies, interest rates) that may be difficult to trade otherwise.

### The Risks
*   **[Leverage](/glossary#leverage) Magnifies Losses**: The same lever that amplifies gains also amplifies losses. A 10% adverse move could wipe out your entire account if you're over-leveraged.
*   **[Margin](/glossary#margin) Calls**: You can be forced to deposit additional funds at the worst possible time—when the market is moving against you.
*   **[Volatility](/glossary#volatility)**: Commodity markets can move dramatically on news, weather, or geopolitical events. Limit moves can lock you into positions.
*   **Complexity**: Futures have unique characteristics (expiration, roll, delivery) that require understanding.
*   **Not for Everyone**: Futures trading requires significant capital, discipline, and risk tolerance. It's not suitable for beginners or those who can't afford to lose.
\`,
        keyTakeaways: [
            "A futures contract is a legal agreement to buy or sell a commodity at a set price on a future date.",
            "Futures were invented to help farmers and merchants manage price risk.",
            "Hedgers use futures to reduce risk; speculators use them to profit from price movements.",
            "Clearinghouses guarantee every trade, eliminating counterparty risk.",
            "Leverage magnifies both profits and losses—risk management is essential."
        ]
    },`;

const startMarker = '"cf_3": {';
const endMarker = '"cf_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_3: What is a Futures Contract? - VALIDATION ===');
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
console.log('✓ Successfully updated cf_3!');
