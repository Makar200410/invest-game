const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_10": {
        title: "Risk Management in Forex",
        content: \`
# The Holy Grail: Risk Management

You can have the best strategy in the world, win 80% of your trades, and still go broke if your risk management is poor. Conversely, you can win only 40% of your trades and become a millionaire if your risk management is elite. In Forex, you are not in the business of predicting prices; you are in the business of managing risk. This lesson teaches you how to survive.

## Part 1: The Golden Rule (1%)

The most important rule in trading.

*   **The Rule**: Never risk more than **1%** of your account equity on a single trade.
*   **Why 1%?**:
    *   If you lose 1 trade, you have 99% of your capital left.
    *   If you lose 5 trades in a row (which happens), you still have 95% left. You are still in the game.
*   **The Gambler's Ruin**: If you risk 10% per trade, a 5-trade losing streak wipes out 41% of your account. To get back to breakeven, you now need to make a 70% return. That is nearly impossible without gambling.
*   **Preservation**: Your #1 job is to protect your capital. Making money is job #2.

## Part 2: Position Sizing

How to calculate the 1% rule.

*   **The Formula**:
    *   Risk Amount ($) = Account Size * 0.01.
    *   Position Size (Lots) = Risk Amount / (Stop Loss in Pips * Pip Value).
*   **Example**:
    *   Account: $10,000.
    *   Risk: $100 (1%).
    *   Trade: Buy EUR/USD. Stop Loss is 20 pips away.
    *   Pip Value: $10 per Standard Lot.
    *   Calculation: $100 / (20 * 10) = 0.5 Lots.
*   **The Mistake**: Most beginners pick a random lot size (e.g., "I'll trade 1 lot") and *then* set their stop loss. This is backwards. You must set your stop loss based on the chart, and *then* adjust your lot size to match your risk.

## Part 3: Risk to Reward Ratio (R:R)

The secret to winning while losing.

*   **Definition**: How much you plan to win vs. how much you risk losing.
    *   *Risk*: $100 (Stop Loss).
    *   *Reward*: $300 (Take Profit).
    *   *Ratio*: 1:3.
*   **The Math**:
    *   If you take 10 trades with a 1:3 ratio.
    *   You lose 7 trades (-$700).
    *   You win 3 trades (+$900).
    *   **Net Profit**: +$200.
*   **The Magic**: You only won 30% of the time, but you made money.
*   **The Trap**: Beginners often take trades with a 1:0.5 ratio (risking $100 to make $50). You need to win 67% of the time just to break even. That is hard. Always aim for at least 1:2.

## Part 4: Stop Losses

Your seatbelt.

*   **Hard Stop**: A specific price level where your broker will automatically close your trade.
    *   *Pros*: Protects you from a sudden crash while you are sleeping. Removes emotion (you can't say "I'll give it a bit more room").
    *   *Cons*: Market makers can "hunt" stops.
*   **Mental Stop**: "I'll close it manually if it hits X."
    *   *Pros*: Avoids stop hunts.
    *   *Cons*: You won't do it. You will freeze. Or the market will move too fast.
*   **Trailing Stop**: A stop that moves with the price.
    *   *Example*: "If price moves up 20 pips, move my stop to breakeven."
    *   *Benefit*: Locks in profit and creates a "Risk-Free Trade."

## Part 5: Drawdown

The pain period.

*   **Definition**: The peak-to-trough decline in your account balance.
    *   Account goes from $10,000 -> $12,000 -> $9,000.
    *   Drawdown is $3,000 (25%).
*   **The Recovery Trap**: The deeper the hole, the harder it is to climb out.
    *   Lose 10% -> Need 11% to recover.
    *   Lose 20% -> Need 25% to recover.
    *   Lose 50% -> Need **100%** to recover.
    *   Lose 90% -> Need **900%** to recover.
*   **Max Drawdown**: Professional funds aim for a max drawdown of 10-15%. If you lose 50%, you are doing it wrong.

## Part 6: Correlation Risk

Don't put all your eggs in one basket.

*   **The Scenario**: You buy EUR/USD, buy GBP/USD, and buy AUD/USD.
*   **The Reality**: You didn't take 3 trades. You took 1 giant trade: **Short USD**.
*   **The Risk**: If the USD strengthens, you lose on ALL THREE trades simultaneously. Your 1% risk becomes 3% risk.
*   **The Fix**: Check correlations. If you are long EUR/USD, look for a trade that is *not* correlated (e.g., EUR/JPY or a stock index).

## Part 7: Leverage Management

The silent killer.

*   **Effective Leverage**: The true amount of leverage you are using.
    *   *Formula*: Total Position Value / Account Equity.
    *   *Example*: $10,000 account. You open a $100,000 position (1 Lot). Effective Leverage = 10:1.
*   **The Limit**: Keep effective leverage under 10:1. Ideally 5:1.
*   **Broker Leverage vs. Your Leverage**: Your broker might offer 500:1. That doesn't mean you should use it. That's like driving a Ferrari at 200mph in a school zone. Just because the car *can* do it doesn't mean you *should*.

## Part 8: The Psychology of Loss

Accepting the inevitable.

*   **Losses are Business Expenses**: In trading, a loss is not a failure. It is the cost of doing business (COGS). Like a restaurant buying food that spoils.
*   **Revenge Trading**: Trying to win back a loss immediately by doubling your size. This is the fastest way to blow an account.
*   **The "Breakeven" Fallacy**: "I'll just wait until it comes back to my entry."
    *   *Reality*: It might never come back. Or it might take 3 years. Meanwhile, your capital is dead. Cut losers fast.

## Part 9: Summary and Checklist

Before every trade, ask:

1.  **What is my Stop Loss?** (Based on the chart, not money).
2.  **What is my Risk?** (Is it < 1% of equity?).
3.  **What is my Reward?** (Is it > 2x the risk?).
4.  **Am I correlated?** (Do I already have exposure to this currency?).
5.  **Is there News?** (Is NFP in 10 minutes?).
6.  **Acceptance**: Am I okay with losing this money? If the answer is "No," reduce your size.
\`,
        keyTakeaways: [
            "Never risk more than 1% of your account on a single trade.",
            "Aim for a Risk:Reward ratio of at least 1:2.",
            "Position sizing is the most important mathematical skill in trading.",
            "A 50% loss requires a 100% gain to recover; avoid large drawdowns."
        ]
    },`;

const marker = '"fx_9":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fx_9 not found'); process.exit(1); }

let braceCount = 0;
let endIdx = -1;
let inObj = false;
for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inObj = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inObj && braceCount === 0) { endIdx = i + 1; break; }
    }
}

if (endIdx === -1) { console.error('fx_9 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_10: Risk Management - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fx_10!');
