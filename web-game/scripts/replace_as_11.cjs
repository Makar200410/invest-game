const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_11": {
        title: "Short Selling Mechanics",
        content: \`
# Short Selling: Profiting When Prices Fall

**[Short selling](/glossary#short-selling)** is a strategy that allows traders to profit from declining prices. Instead of the traditional "buy low, sell high," short sellers "sell high, buy low"—in that order. It's one of the most powerful tools in a trader's arsenal, but also one of the most dangerous.

Understanding how [short selling](/glossary#short-selling) works is essential even if you never short yourself. Knowing that shorts exist helps you understand market dynamics, [short squeezes](/glossary#short-squeeze), and why [stocks](/glossary#stock) can move dramatically in either direction.

## Part 1: What Is Short Selling?

**[Short selling](/glossary#short-selling)** is the sale of an [asset](/glossary#asset) you don't own, with the intention of buying it back later at a lower price.

*   **The Mechanics**:
    1. **Borrow shares** from your broker (they lend you shares from other clients' accounts or inventory).
    2. **Sell the borrowed shares** in the open market at the current price.
    3. **Wait** for the price to fall.
    4. **Buy the shares back** (called "covering" your short) at a lower price.
    5. **Return the shares** to the lender.
    6. **Pocket the difference** as profit.
*   **Example**:
    *   XYZ [stock](/glossary#stock) is trading at $100. You think it will fall.
    *   You borrow and sell short 100 shares = $10,000 cash in your account.
    *   The [stock](/glossary#stock) falls to $80. You buy back 100 shares = $8,000.
    *   You return the shares to the lender. Profit = $2,000 (minus fees).
*   **If the [Stock](/glossary#stock) Rises**: You lose money. You still must buy back shares and return them—but now at a higher price.

## Part 2: Why Short Sell?

There are several legitimate reasons traders sell short.

*   **Profit from Declines**: The most obvious reason—you believe a [stock](/glossary#stock) is overvalued and will fall.
*   **[Hedging](/glossary#hedging)**: Protect a portfolio of long positions by shorting related [assets](/glossary#asset) or the market [index](/glossary#index).
*   **Pair Trades**: Long one [stock](/glossary#stock), short a related [stock](/glossary#stock), and profit from relative performance.
*   **Market Making**: Institutional market makers short to provide [liquidity](/glossary#liquidity).
*   **[Arbitrage](/glossary#arbitrage)**: Shorting is essential for many [arbitrage](/glossary#arbitrage) strategies.
*   **Fundamental Conviction**: Some legendary investors (Chanos, Einhorn, Burry) made fortunes identifying overvalued or fraudulent companies.

## Part 3: The Risks of Short Selling

[Short selling](/glossary#short-selling) carries unique risks not present in long positions.

### Unlimited Loss Potential
*   When you buy a [stock](/glossary#stock), the maximum loss is 100% (if it goes to zero).
*   When you short, the maximum loss is **unlimited**. A [stock](/glossary#stock) can rise from $100 to $200, $500, $1,000, or more.
*   **Example**: If you shorted GameStop at $20 and it rose to $400, you'd lose 2,000% of your position.

### Margin Requirements
*   [Short selling](/glossary#short-selling) requires a [margin](/glossary#margin) account.
*   You must maintain sufficient [margin](/glossary#margin) as collateral. If the [stock](/glossary#stock) rises, you may get a margin call requiring you to add funds or close the position.
*   Forced liquidations can happen at the worst possible time.

### Borrow Costs
*   You pay interest to borrow shares (the "borrow rate").
*   For easy-to-borrow [stocks](/glossary#stock), this might be 1-2% annually.
*   For hard-to-borrow [stocks](/glossary#stock), rates can exceed 50-100% annually.
*   If no shares are available to borrow, you cannot short at all.

### Short Squeeze
*   If a heavily shorted [stock](/glossary#stock) rises, short sellers rush to cover (buy back shares).
*   This buying pressure pushes the [stock](/glossary#stock) even higher, causing more shorts to cover.
*   A feedback loop creates explosive upward moves.
*   Famous [short squeezes](/glossary#short-squeeze): GameStop (2021), Volkswagen (2008), Tesla (multiple times).

### [Dividend](/glossary#dividend) Liability
*   If the [stock](/glossary#stock) pays a [dividend](/glossary#dividend) while you're short, you must pay the [dividend](/glossary#dividend) to the lender.

## Part 4: Short Selling in Practice

How to actually execute a short sale.

### Requirements
*   A [margin](/glossary#margin) account (not a cash account).
*   Broker approval for [short selling](/glossary#short-selling).
*   Shares available to borrow from your broker's inventory.

### Order Execution
*   Select "Sell Short" or "Short Sell" as your order type.
*   The shares are borrowed and sold automatically.
*   Your account reflects a negative share position.

### Locating Shares
*   Before shorting, your broker must "locate" shares to borrow.
*   For big, liquid [stocks](/glossary#stock), this is usually instant.
*   For small or heavily shorted [stocks](/glossary#stock), locates may be unavailable or expensive.

### Covering the Short
*   To close your position, you "Buy to Cover."
*   This buys shares in the market and returns them to the lender.
*   If you're profitable, the difference remains in your account.

### Metrics to Watch
*   **Short Interest**: The total number of shares sold short. High short interest = more potential for squeezes.
*   **Days to Cover**: Short interest / average daily [volume](/glossary#volume). Higher = more potential squeeze [risk](/glossary#risk).
*   **Borrow Rate**: The fee to borrow. High rates indicate difficulty borrowing.

## Part 5: Short Selling Strategies

Professional short sellers use various approaches.

### Fundamental Shorting
*   Identify overvalued, poorly managed, or fraudulent companies.
*   Research financials for accounting red flags.
*   Famous example: Jim Chanos shorted Enron before its collapse.

### Technical Shorting
*   Short [stocks](/glossary#stock) breaking key [support](/glossary#support) levels.
*   Short at [resistance](/glossary#resistance) in a downtrend.
*   Use [technical analysis](/glossary#technical-analysis) to time entries and set [stops](/glossary#stop-loss).

### Sector/Market Shorting
*   Short an overheated sector [ETF](/glossary#etf) or [[index](/glossary#index)](/glossary#index).
*   Hedge market exposure without picking individual [stocks](/glossary#stock).

### Pair Trading
*   Long a strong [stock](/glossary#stock), short a weak [stock](/glossary#stock) in the same sector.
*   Market-neutral: profits from relative performance, not market direction.

### Event-Driven Shorting
*   Short before anticipated negative catalysts (failed drug trial, [earnings](/glossary#earnings) miss).
*   Highly [risky](/glossary#risk)—if the event doesn't materialize, losses can be severe.

## Part 6: Short Squeeze Dynamics

Understanding [short squeezes](/glossary#short-squeeze) is essential for both shorts and longs.

*   **Trigger**: Unexpected positive news, [earnings](/glossary#earnings) beat, or coordinated buying.
*   **Mechanics**:
    1. [Stock](/glossary#stock) rises.
    2. Shorts lose money and face margin calls.
    3. Shorts cover (buy shares) to limit losses.
    4. Covering buying pushes the [stock](/glossary#stock) higher.
    5. More shorts cover. More buying. Higher prices.
    6. A feedback loop of explosive upward pressure.
*   **Signs of Squeeze Potential**:
    *   Short interest > 20% of [float](/glossary#float).
    *   Days to cover > 5.
    *   Low [float](/glossary#float) (fewer shares available to trade).
    *   High borrow rate.
*   **GameStop 2021**: 140% short interest + retail coordination = [stock](/glossary#stock) rising from $20 to $480 in weeks.
*   **Defense for Shorts**: Tight [stop-losses](/glossary#stop-loss). Don't short heavily shorted [stocks](/glossary#stock). Size positions small.

## Part 7: Ethical and Regulatory Considerations

[Short selling](/glossary#short-selling) is controversial but serves important market functions.

### Arguments For Short Selling
*   **Price Discovery**: Shorts identify overvalued or fraudulent companies.
*   **[Liquidity](/glossary#liquidity)**: Shorts add trading [volume](/glossary#volume) and tighten [spreads](/glossary#spread).
*   **[Hedge](/glossary#hedging) Function**: Enables [risk management](/glossary#risk-management) for institutional portfolios.
*   **Market Efficiency**: Shorts prevent bubbles from inflating unchecked.
*   Famous cases: Shorts exposed Enron, Lehman Brothers, Wirecard, and other frauds.

### Arguments Against Short Selling
*   **Manipulative Potential**: "Short and distort" schemes spread false info to profit.
*   **Destabilization**: Heavy shorting can accelerate crashes.
*   **Unlimited [Risk](/glossary#risk) to Amateurs**: Retail traders often underestimate [risk](/glossary#risk).

### Regulations
*   **Uptick Rule (Historical)**: Required shorts to occur only on an uptick. Removed in 2007.
*   **[Regulation SHO](/glossary#regulation)**: Requires locates before shorting.
*   **Short Sale Reporting**: Exchanges publish short interest data biweekly.
*   **Bans During Crises**: Some countries banned [short selling](/glossary#short-selling) during the 2008 crisis.

### For Retail Traders
*   [Short selling](/glossary#short-selling) is a powerful tool but requires strict [risk management](/glossary#risk-management).
*   Never short without a [stop-loss](/glossary#stop-loss). Unlimited [risk](/glossary#risk) is real.
*   Understand the mechanics, borrow costs, and squeeze dynamics before your first short.
\`,
        keyTakeaways: [
            "Short selling profits from declining prices: borrow shares, sell them, buy back cheaper, return shares.",
            "Unique risk: losses are theoretically unlimited if the stock rises indefinitely.",
            "Additional costs include borrow rates, margin requirements, and dividend liability.",
            "Short squeezes occur when heavily shorted stocks rise rapidly, forcing shorts to cover.",
            "Use strict stop-losses and small position sizes—never underestimate short selling risk."
        ]
    },`;

const startMarker = '"as_11": {';
const endMarker = '"as_12": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_11: Short Selling Mechanics - VALIDATION ===');
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
console.log('✓ Successfully updated as_11!');
