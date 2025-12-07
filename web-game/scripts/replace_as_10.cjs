const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_10": {
        title: "Arbitrage Opportunities",
        content: \`
# Arbitrage: The Holy Grail of Risk-Free Profits

**[Arbitrage](/glossary#arbitrage)** is the simultaneous purchase and sale of the same (or equivalent) [asset](/glossary#asset) in different markets to profit from price differences. In theory, [arbitrage](/glossary#arbitrage) is [risk](/glossary#risk)-free profit—you exploit a temporary mispricing before the market corrects it.

In practice, pure [arbitrage](/glossary#arbitrage) opportunities are rare, fleeting, and quickly captured by algorithms. But understanding [arbitrage](/glossary#arbitrage) concepts reveals how markets maintain efficiency and provides insight into more accessible trading strategies that capture [arbitrage](/glossary#arbitrage)-like profits.

## Part 1: What Is Arbitrage?

**[Arbitrage](/glossary#arbitrage)** exploits price discrepancies to generate profit without net [risk](/glossary#risk).

*   **Definition**: Buying low in one market and simultaneously selling high in another market for the same [asset](/glossary#asset).
*   **Key Principle**: The same [asset](/glossary#asset) cannot have two different prices in an efficient market. [Arbitrage](/glossary#arbitrage) enforces this.
*   **[Risk](/glossary#risk)-Free (In Theory)**: Because you're buying and selling simultaneously, you lock in the profit with no directional exposure.
*   **Self-Correcting**: [Arbitrage](/glossary#arbitrage) activity itself closes the price gap:
    *   Buying in the cheap market raises the price there.
    *   Selling in the expensive market lowers the price there.
    *   Eventually, prices converge, and the opportunity disappears.
*   **Speed Is Everything**: In modern markets, [arbitrage](/glossary#arbitrage) opportunities exist for milliseconds. High-frequency traders with co-located servers capture most of them.
*   **Simple Example**:
    *   Gold trades at $2,000/oz on NYSE.
    *   Gold trades at $2,005/oz on the London exchange.
    *   Buy on NYSE, sell on London, pocket $5/oz (minus costs).

## Part 2: Types of Arbitrage

Different [assets](/glossary#asset) and markets offer different [arbitrage](/glossary#arbitrage) opportunities.

### 1. Spatial (Geographic) Arbitrage
*   Same [asset](/glossary#asset) trades at different prices in different locations or exchanges.
*   **Example**: [Bitcoin](/glossary#bitcoin) trading at different prices on Coinbase vs. Binance.
*   Execution challenges: transfer times, transaction fees, regulatory differences.

### 2. Temporal (Time) Arbitrage
*   Price discrepancy based on timing.
*   **Example**: Insider trading (illegal) exploits future information.
*   Legal forms: Trading on faster news or data feeds.

### 3. Triangular [Arbitrage](/glossary#arbitrage)
*   Exploits inconsistencies between three currency pairs.
*   **Example**: EUR/USD, USD/GBP, and EUR/GBP should be mathematically consistent. If not, arbitrage.
*   Common in [forex](/glossary#forex) and [crypto](/glossary#cryptocurrency) markets.

### 4. Statistical [Arbitrage](/glossary#arbitrage)
*   Not true [arbitrage](/glossary#arbitrage), but exploits statistical mispricings.
*   **Example**: Pairs trading—if two correlated [stocks](/glossary#stock) diverge, bet on convergence.
*   Involves [risk](/glossary#risk)—the "mispricing" may persist or worsen.

### 5. [Merger](/glossary#merger) [Arbitrage](/glossary#arbitrage)
*   When Company A announces acquisition of Company B, B's stock jumps but usually trades below the offer price (reflecting deal [risk](/glossary#risk)).
*   [Arbitrage](/glossary#arbitrage): Buy B's stock, profit when the deal closes.
*   [Risk](/glossary#risk): The deal may fail.

### 6. Convertible [Arbitrage](/glossary#arbitrage)
*   Exploit mispricings between convertible [bonds](/glossary#bond) and the underlying [stock](/glossary#stock).
*   Complex strategy common among hedge funds.

### 7. [Futures](/glossary#futures)/Spot [Arbitrage](/glossary#arbitrage)
*   The [futures](/glossary#futures) price should equal the spot price plus cost of carry.
*   **Cash-and-Carry**: Buy the spot [asset](/glossary#asset), sell the [futures](/glossary#futures).
*   **Reverse Cash-and-Carry**: Sell the spot, buy the [futures](/glossary#futures).

## Part 3: Why Arbitrage Opportunities Are Rare

In efficient markets, [arbitrage](/glossary#arbitrage) is nearly impossible for retail traders.

*   **Speed**: Algorithms detect and exploit opportunities in milliseconds. By the time you see a price difference, it's gone.
*   **Transaction Costs**: Commissions, [spreads](/glossary#spread), and fees often exceed the [arbitrage](/glossary#arbitrage) profit.
*   **Execution [Risk](/glossary#risk)**: By the time your orders fill, prices may have moved.
*   **Capital Requirements**: [Arbitrage](/glossary#arbitrage) profits are tiny per unit. You need large positions to make meaningful money.
*   **Access**: Some [arbitrage](/glossary#arbitrage) requires expensive data feeds, co-location, or specialized accounts.
*   **Competition**: Hedge funds and HFT firms invest millions in [arbitrage](/glossary#arbitrage) infrastructure.
*   **Regulatory Barriers**: Some [arbitrage](/glossary#arbitrage) across jurisdictions has legal or tax complications.

### The Efficient Market Implication
*   [Arbitrage](/glossary#arbitrage) activity keeps markets efficient.
*   When prices diverge, arbitrageurs quickly close the gap.
*   This is why prices across exchanges are usually nearly identical.

## Part 4: Practical Arbitrage Opportunities for Retail Traders

While pure [arbitrage](/glossary#arbitrage) is out of reach, retail traders can exploit related opportunities.

### Cryptocurrency Arbitrage
*   [Crypto](/glossary#cryptocurrency) markets are less efficient than traditional markets.
*   Price differences between exchanges do exist, especially for smaller coins.
*   **Challenges**: Withdrawal times, fees, regulatory issues.
*   **Tools**: Bots that scan multiple exchanges for opportunities.

### [Merger](/glossary#merger) [Arbitrage](/glossary#arbitrage)
*   When a [merger](/glossary#merger) is announced, the target [stock](/glossary#stock) trades at a discount to the offer price.
*   **Example**: Company A offers $100 to buy Company B. B trades at $97.
*   **Strategy**: Buy B's stock at $97. If the deal closes, you receive $100 = $3 profit.
*   **[Risk](/glossary#risk)**: Deal may fail (regulatory block, funding failure), causing the stock to crash.
*   **Edge for Retail**: Requires research into deal likelihood, not speed.

### [ETF](/glossary#etf) [Arbitrage](/glossary#arbitrage) (Observational)
*   [ETF](/glossary#etf) prices should track their Net [Asset](/glossary#asset) Value (NAV).
*   When [ETFs](/glossary#etf) trade at premiums or discounts to NAV, authorized participants [arbitrage](/glossary#arbitrage).
*   **Retail [Opportunity](/glossary#opportunity)**: Avoid buying [ETFs](/glossary#etf) at significant premiums to NAV.

### [Options](/glossary#options) Mispricings
*   [Options](/glossary#options) prices should follow put-call parity and other relationships.
*   Sophisticated traders exploit violations.
*   **Retail Access**: Requires deep [options](/glossary#options) knowledge and fast execution.

## Part 5: Statistical Arbitrage Explained

**Statistical [arbitrage](/glossary#arbitrage)** uses quantitative models to identify mean-reverting price relationships.

*   **Not [Risk](/glossary#risk)-Free**: Unlike pure [arbitrage](/glossary#arbitrage), stat arb involves [risk](/glossary#risk). Mispricings may persist or worsen.
*   **Pairs Trading**: The most common form.
    *   Identify two correlated [assets](/glossary#asset) (e.g., Coca-Cola and Pepsi).
    *   When they diverge from their historical relationship, bet on convergence.
    *   Long the underperformer, short the outperformer.
*   **Basket Trading**: Extends pairs trading to multiple [assets](/glossary#asset).
*   **Quantitative Models**: Use statistical methods (cointegration, z-scores) to identify and size positions.
*   **[Risk](/glossary#risk) Management**: Tight [stop-losses](/glossary#stop-loss) if the relationship breaks down permanently.
*   **Institutional Use**: Hedge funds like Renaissance Technologies made billions with stat arb strategies.

## Part 6: Risks of Arbitrage Strategies

Even "low-[risk](/glossary#risk)" [arbitrage](/glossary#arbitrage) strategies carry dangers.

*   **Execution [Risk](/glossary#risk)**: Prices move before your orders fill.
*   **Model [Risk](/glossary#risk)**: Your model may be wrong. Correlations break down.
*   **[Liquidity](/glossary#liquidity) [Risk](/glossary#risk)**: You may not be able to exit positions at expected prices.
*   **Counterparty [Risk](/glossary#risk)**: In [merger](/glossary#merger) arb, the deal may collapse.
*   **[Leverage](/glossary#leverage) [Risk](/glossary#risk)**: [Arbitrage](/glossary#arbitrage) profits are small, so traders use [leverage](/glossary#leverage). Leverage magnifies losses when things go wrong.
*   **Crowding**: When many traders pursue the same [arbitrage](/glossary#arbitrage), the edge disappears—and exits become congested.
*   **Black Swan Events**: In 2008, many "low-[risk](/glossary#risk)" [arbitrage](/glossary#arbitrage) strategies blew up when correlations changed and [liquidity](/glossary#liquidity) vanished.

### Famous [Arbitrage](/glossary#arbitrage) Failures
*   **Long-Term Capital Management (LTCM)**: Hedge fund run by Nobel laureates. Used stat arb with extreme [leverage](/glossary#leverage). Nearly collapsed the financial system in 1998.
*   Lesson: [Arbitrage](/glossary#arbitrage) that looks [risk](/glossary#risk)-free can still blow up spectacularly.

## Part 7: Arbitrage Mindset for Everyday Traders

Even if you never execute true [arbitrage](/glossary#arbitrage), the mindset is valuable.

*   **Price Inconsistencies Signal Opportunity**: When prices diverge from "fair value," investigate.
*   **Understand Why Prices Should Align**: Learn put-call parity, currency triangles, [ETF](/glossary#etf) NAV relationships.
*   **Efficiency Has Limits**: Markets are mostly efficient, but not always. Temporary mispricings exist.
*   **Speed Matters**: In modern markets, the fastest wins. Retail traders must focus on timescales (days/weeks) where speed is less critical.
*   **[Risk](/glossary#risk) is Never Zero**: Even [arbitrage](/glossary#arbitrage) involves execution, [liquidity](/glossary#liquidity), and model [risks](/glossary#risk).
*   **Do the Math**: [Arbitrage](/glossary#arbitrage) profits are small. Ensure they exceed costs before trading.
*   **Follow the Pros**: Institutional [arbitrage](/glossary#arbitrage) activity influences markets. Understanding it helps you understand why prices move.

[Arbitrage](/glossary#arbitrage) represents the theoretical ideal of [risk](/glossary#risk)-free profit. While pure [arbitrage](/glossary#arbitrage) is beyond most retail traders, understanding its principles reveals how markets work and opens the door to [arbitrage](/glossary#arbitrage)-adjacent strategies.
\`,
        keyTakeaways: [
            "Arbitrage profits from price differences for the same asset in different markets—theoretically risk-free.",
            "Types: spatial, temporal, triangular, statistical, merger, convertible, and futures/spot arbitrage.",
            "Pure arbitrage opportunities are rare—captured by algorithms in milliseconds.",
            "Retail traders can access merger arbitrage and crypto arbitrage; statistical arbitrage involves risk.",
            "Even 'risk-free' arbitrage carries execution, liquidity, and model risks—LTCM is a cautionary tale."
        ]
    },`;

const startMarker = '"as_10": {';
const endMarker = '"as_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_10: Arbitrage Opportunities - VALIDATION ===');
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
console.log('✓ Successfully updated as_10!');
