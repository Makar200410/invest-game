const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_1": {
        title: "Supply and Demand",
        content: \`
# The Law of the Market: Understanding Supply and Demand

[Supply and demand](/glossary#supply-and-demand) is the most fundamental concept in economics. It's the invisible force that determines the price of everything—from a barrel of oil to a share of Apple stock, from a cup of coffee to a house in Los Angeles. If you understand supply and demand, you understand the heartbeat of markets.

Every price you see is the result of a constant negotiation between buyers and sellers. When you buy a [stock](/glossary#stock), you're participating in this dance. Understanding these dynamics gives you a powerful framework for predicting where prices might go next.

## Part 1: What Is Demand?

**Demand** is the quantity of a good or service that consumers are willing and able to buy at various prices during a given period. It represents the buyer's side of the market.

*   **The Law of Demand**: As the price of a good decreases, the quantity demanded increases (assuming all else is equal). This inverse relationship is fundamental.
    *   **Why?** At lower prices, more people can afford the product, and existing buyers may buy more.
    *   **Example**: If iPhones cost $50, nearly everyone would buy one. At $1,500, fewer people buy them.
*   **Demand Curve**: A graphical representation showing the relationship between price and quantity demanded. It slopes downward from left to right.
*   **Factors That Shift Demand**:
    *   **Income**: As people get richer, demand for most goods increases.
    *   **Preferences**: Trends, advertising, and cultural shifts change what people want.
    *   **Price of Related Goods**: If Pepsi becomes cheaper, demand for Coca-Cola might fall (substitutes). If printers become cheaper, demand for ink might rise (complements).
    *   **Population**: More people = more demand.
    *   **Expectations**: If people expect prices to rise tomorrow, they'll buy more today.
*   **Demand for [Stocks](/glossary#stock)**: In financial markets, demand is driven by expected returns, [risk](/glossary#risk) appetite, [interest rates](/glossary#interest-rate), and market sentiment.

## Part 2: What Is Supply?

**Supply** is the quantity of a good or service that producers are willing and able to sell at various prices during a given period. It represents the seller's side of the market.

*   **The Law of Supply**: As the price of a good increases, the quantity supplied increases (assuming all else is equal). This positive relationship exists because higher prices incentivize more production.
    *   **Why?** Higher prices mean more profit, attracting more producers and encouraging existing ones to produce more.
    *   **Example**: If oil hits $150/barrel, shale producers drill more wells because it's now profitable.
*   **Supply Curve**: A graphical representation showing the relationship between price and quantity supplied. It slopes upward from left to right.
*   **Factors That Shift Supply**:
    *   **Production Costs**: If the cost of raw materials, labor, or energy increases, supply decreases (it's more expensive to produce).
    *   **Technology**: Better technology increases supply (more efficient production).
    *   **Number of Producers**: More competitors = more supply.
    *   **Expectations**: If producers expect prices to rise, they might hold supply off the market.
    *   **Government Policies**: Taxes, regulations, and subsidies affect supply. Subsides increase supply; taxes decrease it.
*   **Supply of [Stocks](/glossary#stock)**: The number of shares available is relatively fixed in the short term. Supply increases through IPOs, secondary offerings, and insider sales.

## Part 3: Market Equilibrium

Where supply meets demand, we find the **equilibrium price**—the price at which the quantity buyers want to purchase exactly matches the quantity sellers want to sell.

*   **Definition**: Equilibrium is the point where supply equals demand. There is no shortage and no surplus.
*   **The Market Clearing Price**: At equilibrium, all goods offered for sale are bought. The market "clears."
*   **Finding Equilibrium**:
    *   If the price is **too high**: Quantity supplied exceeds quantity demanded = **surplus**. Sellers must lower prices to attract buyers.
    *   If the price is **too low**: Quantity demanded exceeds quantity supplied = **shortage**. Buyers bid prices up.
    *   The market naturally moves toward equilibrium as buyers and sellers adjust.
*   **Equilibrium in [Financial Markets](/glossary#financial-market)**: Stock prices are set by the interaction of buyers (bid) and sellers (ask). The market constantly seeks equilibrium based on information, sentiment, and flows.
*   **Dynamic Equilibrium**: In reality, equilibrium is a moving target. Every piece of news, every economic report, every earnings announcement shifts supply or demand, changing the equilibrium price.

## Part 4: Price Signals and Market Efficiency

Prices are not just numbers—they carry information. Understanding this is key to appreciating how markets work.

*   **Prices as Signals**: Prices communicate information about scarcity and value to all market participants.
    *   High prices signal scarcity, encouraging producers to supply more and consumers to buy less.
    *   Low prices signal abundance, discouraging production and encouraging consumption.
*   **Coordination**: Without any central planner, prices coordinate the decisions of millions of buyers and sellers across the globe.
*   **Market Efficiency**: In competitive markets, prices reflect all available information. This is the core of the [Efficient Market Hypothesis](/glossary#efficient-market-hypothesis).
    *   **Implication for Traders**: If markets are efficient, it's hard to consistently "beat the market" because prices already reflect what's known.
*   **Mispricings**: Markets aren't perfectly efficient. Temporary mispricings occur due to behavioral biases, information asymmetry, or [liquidity](/glossary#liquidity) constraints. Finding and exploiting these is the goal of active traders.
*   **Speed of Adjustment**: In stock markets, prices adjust almost instantly to new information. In housing markets, adjustment is slower.

## Part 5: Shifts vs. Movements Along the Curve

One of the most common errors in economics is confusing a movement *along* a curve with a *shift* of the curve itself.

*   **Movement Along the Curve**: A change in price causes a change in quantity demanded or supplied. You move up or down the existing curve.
    *   **Example**: If the price of oil rises from $70 to $90, producers drill more wells. You move up along the supply curve.
*   **Shift of the Curve**: A change in a non-price factor causes the entire curve to shift left or right.
    *   **Demand Shift Example**: A health report says coffee prevents cancer. Demand for coffee increases at *every* price level. The demand curve shifts right.
    *   **Supply Shift Example**: A hurricane destroys oil refineries. Supply decreases at *every* price level. The supply curve shifts left.
*   **Impact of Shifts**:
    *   **Demand increases** (shifts right): Equilibrium price and quantity both rise.
    *   **Demand decreases** (shifts left): Equilibrium price and quantity both fall.
    *   **Supply increases** (shifts right): Equilibrium price falls, quantity rises.
    *   **Supply decreases** (shifts left): Equilibrium price rises, quantity falls.
*   **Trading Implication**: Understanding what moves curves helps you predict price changes. New technology? Supply shift right (bearish for prices). Rising incomes? Demand shift right (bullish for prices).

## Part 6: Elasticity — How Responsive Are Markets?

Not all goods react the same way to price changes. **Elasticity** measures how sensitive quantity is to price changes.

*   **Price Elasticity of Demand**: How much does quantity demanded change when price changes?
    *   **Elastic Demand**: Quantity is very responsive (luxury goods). A small price increase causes a big drop in sales.
    *   **Inelastic Demand**: Quantity is unresponsive (necessities like insulin, gasoline). Price can rise a lot, but people still buy almost as much.
*   **Price Elasticity of Supply**: How much does quantity supplied change when price changes?
    *   **Elastic Supply**: Producers can quickly increase output (digital goods, some services).
    *   **Inelastic Supply**: Hard to increase production quickly (oil, housing, skilled labor).
*   **Why It Matters for Traders**:
    *   In inelastic markets, small supply shocks cause big price moves (think oil crises).
    *   In elastic markets, price changes are muted.
*   **Determinants of Elasticity**:
    *   Availability of substitutes (more substitutes = more elastic).
    *   Time horizon (more elastic in the long run).
    *   Necessity vs. luxury.
    *   Proportion of income spent on the good.

## Part 7: Applying Supply and Demand to Trading

How do traders use supply and demand concepts every day?

*   **[Support](/glossary#support) and [Resistance](/glossary#resistance)**: In [technical analysis](/glossary#technical-analysis), support is a price level where demand overcomes supply (buyers step in). Resistance is where supply overcomes demand (sellers step in).
*   **[Order Flow](/glossary#order-flow)**: Watching the flow of buy and sell orders reveals real-time supply and demand dynamics.
*   **Inventory Data**: In commodities, inventory reports show imbalances. Low inventories = tight supply = bullish. High inventories = excess supply = bearish.
*   **Earnings and [Fundamentals](/glossary#fundamental-analysis)**: Strong earnings increase demand for a stock. Poor earnings reduce demand.
*   **Macroeconomic Announcements**: [Fed](/glossary#fed) policy, employment data, and inflation reports shift demand for all financial assets.
*   **Sentiment Indicators**: Fear and greed indices measure crowd psychology, which drives demand. Extreme fear = reduced demand = buying opportunity?
*   **Supply Constraints**: IPO lock-up expirations, share buybacks, and insider trading windows affect stock supply.

The law of supply and demand is simple, yet its applications are infinite. Every price move is a supply-demand story. Master this concept and you'll see the market with new clarity.
\`,
        keyTakeaways: [
            "Demand is how much buyers want; supply is how much sellers offer. Price is where they meet.",
            "Equilibrium is the price where supply equals demand—no shortage, no surplus.",
            "Price increases when demand rises or supply falls; price decreases when demand falls or supply rises.",
            "Elasticity measures how responsive quantity is to price changes—critical for predicting volatility.",
            "Support and resistance levels are practical applications of supply-demand dynamics in trading."
        ]
    },`;

const startMarker = '"eco_1": {';
const endMarker = '"eco_2": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_1: Supply and Demand - VALIDATION ===');
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
console.log('✓ Successfully updated eco_1!');
