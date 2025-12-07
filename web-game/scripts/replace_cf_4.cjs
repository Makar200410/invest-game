const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_4": {
        title: "Margin & Leverage in Futures",
        content: \`
# High-Octane Trading: The Double-Edged Sword

[Margin](/glossary#margin) and [leverage](/glossary#leverage) are what make [futures](/glossary#futures) trading both incredibly powerful and incredibly dangerous. Unlike buying [stocks](/glossary#stock), where you typically pay full price for each share, futures trading allows you to control massive positions with a fraction of the total value. This is the fuel that can rocket your account to new heights—or burn it to the ground overnight.

Understanding margin and leverage is absolutely essential before trading futures. These concepts are the most common reason new traders blow up their accounts. The math is simple, but the psychology of handling leveraged losses is not.

## Part 1: Understanding Margin in Futures

[Margin](/glossary#margin) in futures trading is fundamentally different from margin in stock trading. It's not a loan from your broker—it's a good-faith deposit.

*   **Performance Bond**: Futures margin is a deposit you make to prove you can meet your financial obligations. It's held by the clearinghouse as a guarantee that you'll honor the contract.
*   **Not a Loan**: Unlike stock margin where you borrow money from your broker and pay interest, futures margin is your own money posted as collateral. No interest is charged.
*   **Initial Margin**: The amount you must deposit to open a new position. This is set by the exchange and varies by contract. Typically 3-15% of the contract's notional value.
*   **Maintenance Margin**: The minimum amount that must remain in your account to keep the position open. Usually 70-80% of the initial margin. If your account falls below this, you get a margin call.
*   **[Margin](/glossary#margin) Call**: A demand from your broker to deposit additional funds immediately. If you can't meet the call, your position will be liquidated—often at the worst possible price.
*   **Variation [Margin](/glossary#margin)**: The daily cash flow based on mark-to-market. Gains are credited to your account; losses are debited. This process happens every trading day.
*   **Dynamic Adjustments**: Exchanges can raise margin requirements during periods of high [volatility](/glossary#volatility). This can force traders to close positions or deposit more capital.

## Part 2: The Math of Leverage

[Leverage](/glossary#leverage) is the ratio between the contract value you control and the [margin](/glossary#margin) you deposit. The numbers can be staggering.

### Example: Crude Oil Futures
*   **Contract Size**: 1,000 barrels
*   **Oil Price**: $80 per barrel
*   **Notional Value**: 1,000 × $80 = **$80,000**
*   **Initial [Margin](/glossary#margin)**: Approximately $6,000 (varies by broker/exchange)
*   **[Leverage](/glossary#leverage) Ratio**: $80,000 ÷ $6,000 = **13.3x leverage**

### What This Means
*   With $6,000, you control $80,000 worth of oil
*   A 1% move in oil ($0.80) = $800 change in contract value
*   $800 ÷ $6,000 margin = **13.3% return** on your capital
*   But if oil moves against you by 1%, you lose 13.3% of your capital
*   A 7.5% adverse move wipes out your entire margin

### Leverage Across Markets
*   **Equity Index Futures (S&P 500)**: ~20x leverage
*   **Agricultural Futures (Corn, Wheat)**: ~10-15x leverage
*   **Interest Rate Futures (Bonds)**: ~50x leverage or more
*   **Cryptocurrency Futures**: Some offshore exchanges offer 100x leverage

## Part 3: The Power of Leverage — When It Works

When you're on the right side of a trade, [leverage](/glossary#leverage) is magical. Small market moves generate outsized returns.

*   **Amplified Gains**: A 5% move in your favor on a 10x leveraged position = 50% profit on your [margin](/glossary#margin).
*   **Capital Efficiency**: You can take significant positions without tying up large amounts of capital. The rest can be invested elsewhere or held as a buffer.
*   **Multiple Positions**: With the capital that would buy 100 shares of stock, you could control multiple futures contracts across different markets, improving [diversification](/glossary#diversification).
*   **[Short Selling](/glossary#short-selling)**: [Leverage](/glossary#leverage) works equally well in both directions. You can profit from falling prices as easily as rising prices.
*   **Overnight Moves**: If a major news event moves the market while you're positioned correctly, the leveraged gains can be substantial.
*   **Compounding**: Successful leveraged trades can compound rapidly, growing a small account into a large one (though the reverse is also true).

### Real-World Example
*   **Scenario**: You expect a cold snap to spike natural gas prices.
*   **Position**: Buy 1 natural gas contract at $3.00 per MMBtu. Contract size = 10,000 MMBtu. Notional = $30,000.
*   **[Margin](/glossary#margin)**: $2,500
*   **Result**: Natural gas spikes to $3.60 (20% move).
*   **Profit**: ($3.60 - $3.00) × 10,000 = $6,000
*   **Return on [Margin](/glossary#margin)**: $6,000 ÷ $2,500 = **240% return**

## Part 4: The Danger of Leverage — When It Fails

The same force that amplifies gains amplifies losses. [Leverage](/glossary#leverage) is the #1 account killer in futures trading.

*   **Magnified Losses**: A 5% move against you on a 10x leveraged position = 50% loss of your [margin](/glossary#margin). Many new traders don't emotionally grasp this until it happens.
*   **You Can Lose More Than You Invested**: Unlike buying stocks where your max loss is your investment, futures [leverage](/glossary#leverage) means you can owe money. If the market gaps against you, you may receive a bill.
*   **[Margin](/glossary#margin) Calls**: When the market moves against you, your broker demands more money immediately. If you can't pay, your position is liquidated at the current (bad) price.
*   **Forced Liquidation**: Brokers don't wait for you to recover. They will close your position to protect themselves, often crystallizing losses at the worst moment.
*   **Gap Risk**: Markets can open significantly higher or lower than the previous close due to overnight news. A [stop-loss](/glossary#stop-loss) order doesn't protect you if the market gaps past it.
*   **Psychological Trap**: Large leveraged losses trigger emotional responses—revenge trading, overtrading, or abandoning your strategy. This usually makes things worse.

### Real-World Disaster
*   **Scenario**: You're long 5 oil contracts at $80. Oil drops $4 overnight due to a demand forecast.
*   **Loss**: $4 × 1,000 barrels × 5 contracts = **$20,000**
*   **Your [Margin](/glossary#margin)**: $30,000 (for 5 contracts)
*   **Result**: You've lost 67% of your capital in one overnight move. And you're still in the position.

## Part 5: Risk Management — Survival Rules

Professional traders survive because they respect [leverage](/glossary#leverage) and manage [risk](/glossary#risk) religiously. Here's how.

*   **Never Risk More Than 1-2% Per Trade**: Calculate your [stop-loss](/glossary#stop-loss) distance and position size so that even if stopped out, you lose no more than 1-2% of your total account.
*   **Use [Stop-Loss](/glossary#stop-loss) Orders**: Always have a predetermined exit point. Never "hope" a losing position will come back.
*   **Understand Notional Exposure**: Don't just look at [margin](/glossary#margin). Know the full dollar value you're controlling. A $5,000 [margin](/glossary#margin) might control $100,000+ in contracts.
*   **Account for [Volatility](/glossary#volatility)**: More [volatile](/glossary#volatility) markets need wider stops and smaller position sizes. Don't use the same parameters for natural gas as for gold.
*   **Keep Excess [Margin](/glossary#margin)**: Don't use 100% of your capital as [margin](/glossary#margin). Keep a buffer so you can survive adverse moves without getting margin called.
*   **Avoid Overnight Positions Until Experienced**: Gaps can be devastating. Many new traders should close positions before the market closes and reopen if appropriate.
*   **Start Small**: Trade the smallest possible position size while learning. Micro-futures (1/10 the size of standard contracts) exist for this purpose.
*   **Paper Trade First**: Practice with simulated money until you understand the mechanics and your own psychology.

## Part 6: Margin Mechanics — The Daily Process

Understanding the daily settlement process is important for managing your account.

*   **Daily Mark-to-Market**: At the end of each trading day, the exchange calculates the settlement price for each contract. Your position is marked against this price.
*   **Variation [Margin](/glossary#margin) Flow**:
    *   If the settlement price moved in your favor, the gain is credited to your account in cash.
    *   If it moved against you, the loss is debited from your account.
*   **Example**:
    *   Day 1: You buy oil at $80. Settlement: $81. You're credited $1,000 (1,000 barrels × $1).
    *   Day 2: Settlement: $79. You're debited $2,000 ($81 to $79 = -$2 × 1,000).
    *   Net after 2 days: -$1,000 loss.
*   **Maintenance [Margin](/glossary#margin) Check**: After daily settlement, if your account balance is below the maintenance level, you must deposit funds to bring it back to the initial margin level.
*   **Timing**: [Margin](/glossary#margin) calls are typically due by the market open the next day. Some brokers give you as little as one hour.
*   **Interest on Excess [Margin](/glossary#margin)**: Most brokers pay interest on the cash balance above your [margin](/glossary#margin) requirements.

## Part 7: Practical Examples — Putting It All Together

Let's walk through concrete examples showing how [margin](/glossary#margin) and [leverage](/glossary#leverage) work in practice.

### Example 1: Gold Trade
*   **Contract**: 1 gold futures (100 oz)
*   **Gold Price**: $2,000/oz
*   **Notional Value**: $200,000
*   **Initial [Margin](/glossary#margin)**: ~$10,000 (5%)
*   **[Leverage](/glossary#leverage)**: 20x
*   **Scenario**: Gold rises to $2,050 (2.5% move)
*   **Profit**: $50 × 100 oz = $5,000
*   **Return on [Margin](/glossary#margin)**: 50%

### Example 2: Corn Trade Gone Wrong
*   **Contract**: 1 corn futures (5,000 bushels)
*   **Corn Price**: $6.00/bushel
*   **Notional Value**: $30,000
*   **Initial [Margin](/glossary#margin)**: ~$2,000 (6.7%)
*   **[Leverage](/glossary#leverage)**: 15x
*   **Scenario**: Perfect weather report crushes prices. Corn drops to $5.50 (8.3% move).
*   **Loss**: $0.50 × 5,000 = $2,500
*   **Your [Margin](/glossary#margin)**: $2,000
*   **Result**: You've lost MORE than your margin. You owe $500.

### Example 3: Proper Risk Management
*   **Account**: $50,000
*   **Risk per Trade**: 2% = $1,000
*   **Contract**: WTI Oil
*   **Entry**: $80.00
*   **[Stop-Loss](/glossary#stop-loss)**: $79.00 ($1.00 risk)
*   **Tick Value**: $10 per $0.01
*   **Risk per Contract**: $1.00 × 100 ticks = $1,000
*   **Position Size**: 1 contract (exactly 2% risk)
*   **[Leverage](/glossary#leverage) Used**: $80,000 notional ÷ $50,000 account = 1.6x effective [leverage](/glossary#leverage)

This is a reasonable, survivable trade. Even if the market gaps and stops you out at $78.50. Your loss is $1,500 (3%)—painful but not fatal.
\`,
        keyTakeaways: [
            "Futures margin is a good-faith deposit, not a loan—no interest is charged.",
            "Leverage in futures typically ranges from 10x to 50x, dramatically amplifying both gains and losses.",
            "You can lose more than your initial margin deposit—this is the key danger of leverage.",
            "Risk management is essential: never risk more than 1-2% of your account on a single trade.",
            "Understand the notional value you're controlling, not just the margin requirement."
        ]
    },`;

const startMarker = '"cf_4": {';
const endMarker = '"cf_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_4: Margin & Leverage in Futures - VALIDATION ===');
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
console.log('✓ Successfully updated cf_4!');
