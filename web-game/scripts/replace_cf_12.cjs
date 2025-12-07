const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_12": {
        title: "CFDs Explained",
        content: \`
# Contracts for Difference: A Retail Gateway to Commodities

A **Contract for Difference (CFD)** is a popular retail trading instrument that allows you to speculate on price movements without owning the underlying [asset](/glossary#asset). CFDs are widely used by retail traders outside the United States to gain exposure to [commodities](/glossary#commodity), [stocks](/glossary#stock), [forex](/glossary#forex), and indices with high [leverage](/glossary#leverage) and flexible position sizes.

While CFDs offer convenience and accessibility, they come with significant risks and costs that traders must understand. This lesson explains how CFDs work, their advantages and disadvantages, and how they compare to [futures contracts](/glossary#futures).

## Part 1: What Is a CFD?

A **CFD (Contract for Difference)** is an agreement between a trader and a broker to exchange the difference in the price of an asset from when the contract is opened to when it is closed.

*   **Definition**: A CFD is a derivative contract where you speculate on price direction without owning the underlying [asset](/glossary#asset).
*   **No Ownership**: When you "buy" a gold CFD, you don't own gold. You simply profit or lose based on whether gold's price rises or falls.
*   **Cash Settlement**: All CFDs are cash-settled. There is no physical delivery—ever. You receive or pay the cash difference.
*   **The Counterparty**: Unlike exchange-traded [futures](/glossary#futures), CFDs are [over-the-counter (OTC)](/glossary#otc) products. Your counterparty is usually the broker itself, not another trader.
*   **Available [Assets](/glossary#asset)**: CFDs exist for virtually every market:
    *   **Commodities**: Oil, gold, silver, natural gas, corn, coffee.
    *   **[Stocks](/glossary#stock)**: Apple, Tesla, Amazon—essentially any major stock.
    *   **Indices**: S&P 500, NASDAQ, DAX, FTSE.
    *   **[Forex](/glossary#forex)**: All currency pairs.
    *   **Cryptocurrencies**: Bitcoin, Ethereum, etc.
*   **Geographic Availability**: CFDs are banned in the United States (due to regulatory restrictions) but are legal and popular in the UK, Europe, Australia, Singapore, and most of the world.

## Part 2: How CFD Trading Works

The mechanics of CFD trading are straightforward but differ from exchange-traded products.

### Opening a Position
*   **Going Long**: You expect the price to rise. You "buy" the CFD at the current ask price.
*   **Going Short**: You expect the price to fall. You "sell" the CFD at the current bid price. Unlike [stocks](/glossary#stock), you can short instantly—no need to borrow shares.
*   **[Margin](/glossary#margin)**: You deposit a percentage of the position's notional value. Typical [margin](/glossary#margin) requirements range from 5% to 20%, meaning [leverage](/glossary#leverage) of 5x to 20x.

### Holding the Position
*   **Floating P&L**: Your profit/loss updates in real-time based on the current market price.
*   **[Margin](/glossary#margin) Monitoring**: If the position moves against you, your account equity drops. If it falls below the maintenance [margin](/glossary#margin), you may receive a [margin](/glossary#margin) call or face automatic liquidation.
*   **Overnight Financing (Swap)**: If you hold a position overnight, you are charged (or credited) a financing fee. This is based on [interest rates](/glossary#interest-rate) and is typically a debit for long positions.

### Closing the Position
*   **You Choose When**: There's no expiration date (unlike [futures](/glossary#futures)). Hold as long as you like—but overnight fees accumulate.
*   **Profit/Loss**: Calculated as: (Exit Price − Entry Price) × Position Size.
*   **Example**: You buy 100 units of Gold CFD at $2,000. Price rises to $2,050. Your profit is $50 × 100 = $5,000.

## Part 3: CFD Pricing and Costs

Understanding the costs of CFD trading is crucial—they can significantly eat into profits.

### The [Spread](/glossary#spread)
*   **Definition**: The difference between the bid (sell) price and the ask (buy) price.
*   **Broker Profit**: The [spread](/glossary#spread) is how brokers make money. You pay the [spread](/glossary#spread) every time you enter and exit a trade.
*   **Variable [Spreads](/glossary#spread)**: [Spreads](/glossary#spread) widen during [volatility](/glossary#volatility) or low [liquidity](/glossary#liquidity) periods (news events, overnight hours). You might pay 2-3x normal [spreads](/glossary#spread).
*   **Example**: Gold CFD has a 0.30 [spread](/glossary#spread). If you buy 100 oz, you immediately "lose" $30 to the [spread](/glossary#spread) before the market even moves.

### Overnight Financing (Swap Rates)
*   **Long Positions**: You pay financing (simulating the cost of borrowing to hold the [asset](/glossary#asset)).
*   **Short Positions**: You may receive credit (or pay less), depending on [interest rate](/glossary#interest-rate) differentials.
*   **Calculation**: Based on the position size, the relevant [interest rate](/glossary#interest-rate) (often LIBOR/SOFR + markup), and the number of days held.
*   **Impact**: Overnight fees can add up significantly for positions held days, weeks, or months. CFDs are not ideal for long-term holding.

### Commissions
*   **Some Brokers**: Charge a commission per trade in addition to the [spread](/glossary#spread). Others offer "zero commission" but widen [spreads](/glossary#spread).
*   **Check the Fine Print**: Understand the total cost (spread + commission + swap).

### Slippage
*   **Definition**: The difference between your expected price and the actual execution price, especially during fast markets.
*   **Impact**: In volatile conditions (e.g., during news events), you may get filled at a worse price than expected.

## Part 4: Advantages of CFDs

CFDs offer several benefits that make them popular with retail traders.

*   **Accessibility**: You can trade commodities, [indices](/glossary#index), [forex](/glossary#forex), and [stocks](/glossary#stock) all from one account with one platform. No need for separate futures or forex accounts.
*   **Flexible Position Sizes**: Unlike [futures](/glossary#futures) (which have fixed contract sizes), CFDs let you trade fractional amounts. Trade 10 barrels of oil instead of 1,000.
*   **No Expiration Dates**: CFDs don't expire like [futures](/glossary#futures). You can hold as long as you want (though overnight fees accumulate).
*   **Easy [Short Selling](/glossary#short-selling)**: Go short as easily as going long. No borrowing, no locate fees. Instant execution.
*   **High [Leverage](/glossary#leverage)**: Typical [leverage](/glossary#leverage) ranges from 5x to 30x (higher in some jurisdictions). Control large positions with small capital.
*   **Low Minimum Deposits**: Many CFD brokers accept small deposits. You can start trading with as little as $100-$500 (though this is risky with [leverage](/glossary#leverage)).
*   **Demo Accounts**: Most CFD brokers offer free demo accounts for practice.

## Part 5: Disadvantages and Risks of CFDs

The advantages come with significant trade-offs. Understanding these is essential.

*   **Counterparty Risk**: Your broker is your counterparty. If the broker becomes insolvent, you may lose funds. Use regulated brokers (FCA, ASIC, CySEC).
*   **Broker Conflict of Interest**: Many CFD brokers operate as market makers. They take the other side of your trade. Their profit may be your loss. Some brokers may engage in questionable practices (widening [spreads](/glossary#spread) during [volatility](/glossary#volatility), slippage).
*   **High Costs for Long Holding**: Overnight financing fees make CFDs expensive for longer-term positions. A few weeks of holding can cost several percent of your position.
*   **[Leverage](/glossary#leverage) Danger**: High [leverage](/glossary#leverage) magnifies losses. You can lose more than your deposit (though many regulators now require negative balance protection).
*   **No Ownership Benefits**: You don't own the underlying [asset](/glossary#asset). No [dividends](/glossary#dividend) (though some brokers adjust for [dividends](/glossary#dividend)), no voting rights, no physical delivery option.
*   **Regulatory Uncertainty**: Rules differ by country. Some jurisdictions have banned CFD trading or imposed maximum [leverage](/glossary#leverage) limits (EU: 20:1 for gold, 10:1 for commodities).
*   **Wide [Spreads](/glossary#spread) on Some Products**: Exotic commodities or less liquid instruments may have very wide [spreads](/glossary#spread).

## Part 6: CFDs vs. Futures — Key Differences

Understanding how CFDs compare to exchange-traded [futures](/glossary#futures) helps you choose the right instrument.

| Feature | CFDs | Futures |
|---------|------|---------|
| **Traded On** | [OTC](/glossary#otc) (with broker) | Centralized exchanges (CME, ICE) |
| **Counterparty** | The broker | Clearinghouse (neutral third party) |
| **Standardization** | Flexible sizes | Fixed contract sizes |
| **Expiration** | No expiration | Fixed expiration dates |
| **[Leverage](/glossary#leverage)** | 5x−30x typical | 10x−50x typical |
| **Regulation** | Varies by jurisdiction | Highly regulated |
| **Costs** | [Spread](/glossary#spread) + Swap (overnight) | Commission + exchange fees |
| **Physical Delivery** | Never | Possible (you can take delivery) |
| **Ideal For** | Retail traders, small accounts | Professional traders, larger accounts |

### When to Use CFDs
*   Small account size (under $10,000).
*   Want to trade multiple [asset](/glossary#asset) classes from one account.
*   Prefer flexible position sizing.
*   Short-term trades (days, not weeks).

### When to Use Futures
*   Larger account size.
*   Want to trade on regulated exchanges with clearinghouse guarantee.
*   Lower long-term costs (no overnight financing).
*   Need to [hedge](/glossary#hedging) with standardized instruments.

## Part 7: CFD Trading Best Practices

To trade CFDs successfully, follow these best practices.

*   **Use Regulated Brokers**: Only trade with brokers regulated by reputable authorities (FCA in UK, ASIC in Australia, CySEC in EU). Check the regulatory status on the regulator's website.
*   **Understand All Costs**: Before trading, calculate total costs including [spread](/glossary#spread), commission, and overnight fees. Compare brokers.
*   **Manage [Leverage](/glossary#leverage)**: Just because 30x [leverage](/glossary#leverage) is available doesn't mean you should use it. Use the minimum [leverage](/glossary#leverage) needed for your strategy.
*   **Use [Stop-Losses](/glossary#stop-loss)**: Protect your capital. CFD [volatility](/glossary#volatility) can wipe out accounts quickly without [stops](/glossary#stop-loss).
*   **Avoid Overnight Holds When Possible**: If you can close intraday, do so to avoid swap fees. If you must hold, factor the cost into your trade plan.
*   **Be Aware of [Spread](/glossary#spread) Expansion**: During major news events, [spreads](/glossary#spread) can widen dramatically. Avoid placing market orders during high-impact events.
*   **Demo First**: Practice on a demo account until you are consistently profitable (or at least understand the platform and costs).
*   **Beware of Unregulated Offshore Brokers**: High [leverage](/glossary#leverage) and bonuses are red flags. If it sounds too good to be true, it is.
*   **Keep Records**: Track all trades for tax purposes. CFD gains are typically taxable.
*   **Accept the [Risk](/glossary#risk)**: Statistics show 70-80% of retail CFD accounts lose money. Only trade with capital you can afford to lose entirely.
\`,
        keyTakeaways: [
            "A CFD is a contract to exchange the price difference of an asset—you don't own the underlying asset.",
            "CFDs are OTC products traded against the broker, creating potential conflicts of interest.",
            "Advantages: flexible sizing, no expiration, easy shorting, low minimums. Disadvantages: counterparty risk, swap fees, broker conflicts.",
            "CFDs are ideal for short-term retail trading; futures are better for larger accounts and longer holds.",
            "Always use regulated brokers and manage leverage carefully—most retail CFD traders lose money."
        ]
    },`;

const startMarker = '"cf_12": {';
const endMarker = /\n\s*\/\/ Module 10: Economics 101|\n\s*"eco_1": \{/;
const startIdx = content.indexOf(startMarker);

// Find the end marker using regex
const afterStart = content.substring(startIdx);
const match = afterStart.match(endMarker);
if (startIdx === -1 || !match) { console.error('Markers not found'); process.exit(1); }
const endIdx = startIdx + match.index;

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_12: CFDs Explained - VALIDATION ===');
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

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    ' + content.substring(endIdx + match[0].length), 'utf8');
console.log('✓ Successfully updated cf_12!');
