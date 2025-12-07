const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_9": {
        title: "Order Types",
        content: \`
# Order Types: How to Buy and Sell

Knowing how to place an order is as important as knowing what to buy. The wrong order type can cost you money or lead to unexpected executions. This lesson covers all the order types you'll encounter, from basic market orders to advanced conditional orders. Master these tools to trade more effectively.

## Part 1: Market Orders — Guaranteed Execution

A [Market Order](/glossary#market-order) is the simplest order type. You're saying "execute immediately at whatever the current price is."

*   **What It Is**: Buy or sell immediately at the best available price right now.
*   **Guarantee**: Execution is guaranteed (assuming the market is open and there's [liquidity](/glossary#liquidity)). You WILL get filled.
*   **No Guarantee**: Price is NOT guaranteed. In fast-moving markets, you might get a worse price than expected ([slippage](/glossary#slippage)).
*   **Best For**: Large, liquid [stocks](/glossary#stock) and [ETFs](/glossary#etf) (Apple, SPY) during market hours. [Slippage](/glossary#slippage) is minimal.
*   **Risky For**: Illiquid [stocks](/glossary#stock), after-hours trading, or during extreme [volatility](/glossary#volatility). Spreads can be wide.
*   **Example**: You place a market order to buy Apple at 10:30 AM. It shows $175. You get filled at $175.02. That's normal [slippage](/glossary#slippage).
*   **Pro Tip**: For regular investing in large [ETFs](/glossary#etf), market orders during trading hours are perfectly fine.

## Part 2: Limit Orders — Guaranteed Price

A [Limit Order](/glossary#limit-order) lets you specify the exact price you're willing to pay (or receive).

*   **What It Is**: Buy only at your specified price or lower. Sell only at your specified price or higher.
*   **Guarantee**: Price is guaranteed — you will never pay more than your limit (on buys) or receive less than your limit (on sells).
*   **No Guarantee**: Execution is NOT guaranteed. If the market never reaches your price, your order won't fill.
*   **Example**: Apple is at $175. You set a limit buy at $170. If Apple drops to $170 or lower, your order fills. If it doesn't drop, nothing happens.
*   **Best For**: Buying during [corrections](/glossary#correction) (set lower limits), illiquid [stocks](/glossary#stock), or when you want price control.
*   **Common Mistake**: Setting limits too far from market price. Your order sits unfilled while the [stock](/glossary#stock) moves away.

## Part 3: Stop Orders — Protection Against Losses

A [Stop Order](/glossary#stop-loss) (Stop-Loss) becomes a market order when a trigger price is reached. It's designed to limit your losses.

*   **What It Is**: Automatically sell if the price falls to a specified level ("stop price").
*   **Mechanism**: Once the stop price is touched, it becomes a [market order](/glossary#market-order) and executes immediately.
*   **Example**: You own Apple at $175. You set a [stop-loss](/glossary#stop-loss) at $160. If Apple drops to $160, your shares are automatically sold at the next available price.
*   **[Slippage](/glossary#slippage) Warning**: In a fast crash, the execution price may be lower than your stop price. It's a market order after trigger.
*   **Gap Risk**: If a [stock](/glossary#stock) gaps down overnight (opens much lower without trading at prices in between), your stop won't help.
*   **Use Case**: Protecting profits or limiting losses on individual positions. Not typically needed for [index fund](/glossary#index-fund) long-term investors.

## Part 4: Stop-Limit Orders — More Control

A Stop-Limit Order combines stop and limit orders for more precise control, but less certainty of execution.

*   **What It Is**: When the stop price is triggered, instead of becoming a market order, it becomes a [limit order](/glossary#limit-order).
*   **Two Prices**: Stop Price (trigger) and Limit Price (minimum acceptable execution price).
*   **Example**: Apple at $175. Stop at $160, Limit at $158. If Apple hits $160, a limit sell at $158 activates. You won't sell below $158.
*   **Advantage**: Prevents selling at a terrible price in a flash crash.
*   **Disadvantage**: If the price gaps below your limit, your order WON'T execute at all. You're left holding while it crashes further.
*   **Use With Caution**: In severe crashes, stop-limits often don't execute because prices blow through both levels instantly.

## Part 5: Trailing Stop Orders — Lock in Profits

A [Trailing Stop](/glossary#trailing-stop) moves with the price, locking in gains as the [stock](/glossary#stock) rises while protecting against reversals.

*   **What It Is**: A stop order that follows the price upward by a fixed amount or percentage, but never moves down.
*   **Trailing Amount**: Set as dollars ($5 trailing stop) or percentage (5% trailing stop).
*   **Mechanism**: If Apple rises from $175 to $200, your trailing stop rises from $170 to $195. If Apple then drops to $195, you sell automatically.
*   **Benefit**: Captures the upside while providing automatic downside protection without constant monitoring.
*   **Drawback**: Can get "stopped out" by normal [volatility](/glossary#volatility), then watch the [stock](/glossary#stock) resume its climb.
*   **Best For**: Locking in profits on individual [stocks](/glossary#stock) during strong runs. Not for [index fund](/glossary#index-fund) long-term investors.

## Part 6: Time-In-Force Conditions

Every order needs a time limit. How long should your order stay active?

*   **Day Order**: Valid only for today's trading session. Expires at 4 PM ET if unfilled. Default setting.
*   **[GTC](/glossary#gtc) (Good Til Canceled)**: Stays active until filled or you cancel it. Most brokers limit to 60-90 days.
*   **IOC (Immediate or Cancel)**: Execute immediately (partially or fully), cancel any unfilled portion right away.
*   **FOK (Fill or Kill)**: Execute the entire order immediately, or cancel 100% of it. No partial fills allowed.
*   **Extended Hours**: You can often specify orders valid for pre-market (4 AM - 9:30 AM ET) or after-hours (4 PM - 8 PM ET) trading.
*   **Recommendation**: For regular investing, "Day" orders work fine. For limit orders waiting for a price dip, use [GTC](/glossary#gtc).

## Part 7: All-or-None and Other Conditions

Special conditions can be added to orders for specific situations.

*   **All-or-None (AON)**: Fill the entire order or don't fill any of it. Useful if you need exactly 100 shares.
*   **Do Not Reduce (DNR)**: Your limit order won't automatically adjust downward when a [dividend](/glossary#dividend) is paid.
*   **Not Held**: Gives the broker discretion on execution timing. Rare for retail investors.
*   **Trade Minimum**: Some orders have minimum quantities (e.g., bonds often trade in $1,000 minimums).
*   **Reality**: Most retail investors never need these special conditions. Stick to market and limit orders.

## Part 8: The Bid-Ask Spread — The Hidden Cost

Every [stock](/glossary#stock) has two prices at any moment. Understanding the [spread](/glossary#bid-ask-spread) is crucial.

*   **[Bid Price](/glossary#bid-ask-spread)**: The highest price buyers are currently willing to pay. What you get when you sell.
*   **Ask Price**: The lowest price sellers are currently willing to accept. What you pay when you buy.
*   **The [Spread](/glossary#bid-ask-spread)**: The difference between bid and ask. This is profit for [market makers](/glossary#market-maker).
*   **Tight [Spread](/glossary#bid-ask-spread)** (Large Liquid [Stocks](/glossary#stock)): Apple might be $175.00 bid / $175.02 ask. [Spread](/glossary#bid-ask-spread) = $0.02 (basically nothing).
*   **Wide [Spread](/glossary#bid-ask-spread)** (Illiquid [Stocks](/glossary#stock)): A penny stock might be $1.50 bid / $1.70 ask. [Spread](/glossary#bid-ask-spread) = $0.20 (13% cost just to buy and immediately sell).
*   **Your Cost**: The [spread](/glossary#bid-ask-spread) is an invisible transaction cost. Wide spreads eat your returns.
*   **Strategy**: Trade liquid securities. Avoid illiquid [stocks](/glossary#stock) with wide spreads. Use [limit orders](/glossary#limit-order) on less liquid names.

## Part 9: Common Mistakes and Best Practices

Avoid these common order entry errors that can cost you money.

*   **Market Orders on Illiquid [Stocks](/glossary#stock)**: You might get terrible execution with huge [slippage](/glossary#slippage). Always use [limit orders](/glossary#limit-order).
*   **Fat Finger Errors**: Typing wrong quantities (100 vs 1000 shares) or wrong prices. Double-check before confirming.
*   **After-Hours Market Orders**: Spreads widen dramatically. Use [limit orders](/glossary#limit-order) or wait for regular hours.
*   **Chasing with Market Orders**: After news, prices move fast. Market orders might fill at much higher prices than expected.
*   **Setting [Stop Losses](/glossary#stop-loss) Too Tight**: Normal daily [volatility](/glossary#volatility) triggers your stop, you sell, then the [stock](/glossary#stock) resumes climbing. Give it room.
*   **Best Practice for Beginners**: For large, liquid [ETFs](/glossary#etf) like SPY, VTI, or QQQ, simple market orders during trading hours are perfectly acceptable.
*   **Best Practice for Individual [Stocks](/glossary#stock)**: Use [limit orders](/glossary#limit-order), especially for less liquid names or larger positions.
\`,
        keyTakeaways: [
            "Market Orders guarantee execution but not price — best for liquid stocks during trading hours.",
            "Limit Orders guarantee price but not execution — use for illiquid stocks or specific price targets.",
            "Stop-Loss Orders provide automatic downside protection but can suffer slippage in fast markets.",
            "The Bid-Ask Spread is a hidden cost — avoid stocks with wide spreads."
        ]
    },`;

const startMarker = '"ib_9": {';
const endMarker = '"ib_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_9: Order Types - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');
if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_9!');
