const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fx_3": {
        title: "Pips, Lots, and Leverage",
        content: \`
# The Mechanics of Forex: Pips, Lots, and Leverage

To trade Forex, you must speak the language. You don't buy "shares"; you buy "lots." You don't measure profit in "dollars"; you measure it in "pips." And most importantly, you use "leverage" to amplify your results. This lesson covers the mathematical foundation of currency trading.

## Part 1: What is a Pip?

A **Pip** stands for "Percentage in Point" or "Price Interest Point." It is the unit of measurement for currency movement.

*   **Standard Definition**: For most pairs (like EUR/USD), a pip is the **4th decimal place** (0.0001).
    *   *Example*: If EUR/USD moves from 1.1050 to 1.1051, that is a **1 pip** rise.
    *   *Example*: If EUR/USD moves from 1.1050 to 1.1060, that is a **10 pip** rise.
*   **The JPY Exception**: For pairs involving the Japanese Yen (like USD/JPY), a pip is the **2nd decimal place** (0.01).
    *   *Example*: If USD/JPY moves from 109.50 to 109.51, that is a **1 pip** rise.
*   **Pipettes**: Brokers often quote to the 5th decimal place (or 3rd for JPY). These are fractional pips.
    *   1.10505 -> 1.10506 is a 0.1 pip move (1 pipette).

## Part 2: What is a Lot?

In stocks, you can buy 1 share. In Forex, you trade in standardized blocks called **Lots**.

*   **Standard Lot (1.0)**: 100,000 units of the base currency.
    *   *Value per Pip*: ~$10 (for EUR/USD).
    *   *Capital Required*: High (without leverage).
*   **Mini Lot (0.1)**: 10,000 units.
    *   *Value per Pip*: ~$1.
    *   *Best for*: Intermediate traders.
*   **Micro Lot (0.01)**: 1,000 units.
    *   *Value per Pip*: ~$0.10.
    *   *Best for*: Beginners.
*   **Nano Lot**: 100 units. (Rare, but offered by some brokers).
*   **The Math**: If you buy 1 Standard Lot of EUR/USD and it moves up 10 pips, you make $100 ($10 x 10). If you buy 1 Micro Lot, you make $1 ($0.10 x 10).

## Part 3: What is Leverage?

Leverage is using borrowed money to increase your trading power. It is the superpower (and kryptonite) of Forex.

*   **The Concept**: You put down a small deposit (Margin), and the broker lends you the rest to open a large position.
*   **Ratios**: Leverage is expressed as a ratio (e.g., 100:1).
    *   *100:1 Leverage*: For every $1 you deposit, you can control $100 in the market.
*   **Example**:
    *   You want to buy 1 Standard Lot ($100,000) of EUR/USD.
    *   *Without Leverage*: You need $100,000 cash.
    *   *With 100:1 Leverage*: You only need **$1,000** cash (Margin). The broker "lends" you the other $99,000.
*   **Why it exists**: Currencies move very little (often < 1% a day). Without leverage, a 1% move on $1,000 is just $10. With 100:1 leverage, that 1% move becomes $1,000 (100% return).

## Part 4: Margin and Margin Call

Understanding the deposit required to trade.

*   **Used Margin**: The amount of money locked up to keep your trades open.
    *   *Formula*: Position Size / Leverage.
    *   *Example*: $100,000 position / 100 leverage = $1,000 Used Margin.
*   **Free Margin**: The money left in your account to open new trades or absorb losses.
    *   *Formula*: Equity - Used Margin.
*   **Margin Level**: A health meter for your account.
    *   *Formula*: (Equity / Used Margin) * 100.
    *   *Safe Zone*: > 200%.
    *   *Danger Zone*: < 100%.
*   **Margin Call**: When your Margin Level drops to 100% (or broker specific level), you can no longer open new trades.
*   **Stop Out**: When your Margin Level drops further (e.g., 50%), the broker automatically closes your losing trades to prevent you from going into debt. This is the "Game Over" screen.

## Part 5: Calculating Profit and Loss

Let's put it all together.

*   **Scenario**: You have a $5,000 account. You buy 2 Mini Lots (0.2) of GBP/USD at 1.3000.
*   **Position Size**: 20,000 units (2 * 10,000).
*   **Pip Value**: $2 per pip ($1 per mini lot * 2).
*   **Outcome A (Win)**: Price goes to 1.3050 (+50 pips).
    *   Profit: 50 pips * $2 = **$100**.
    *   Return: 2% of account.
*   **Outcome B (Loss)**: Price goes to 1.2950 (-50 pips).
    *   Loss: 50 pips * $2 = **-$100**.
    *   Loss: -2% of account.
*   **The Leverage Effect**: If you had bought 2 Standard Lots (2.0) instead:
    *   Pip Value: $20.
    *   Profit/Loss: **$1,000** (20% of account).
    *   Same market move, massive difference in result.

## Part 6: The Dangers of Over-Leverage

Why 90% of traders fail.

*   **The Greed Trap**: Beginners see 500:1 leverage and think "I can turn $100 into $1,000 in one day!"
*   **The Math of Ruin**:
    *   Account: $1,000.
    *   Trade: 1 Standard Lot ($100,000). Leverage 100:1.
    *   Pip Value: $10.
    *   Stop Out: If the market moves **100 pips** against you, you lose $1,000. You are wiped out.
    *   Reality: 100 pips can happen in 1 hour during news.
*   **Professional Leverage**: Most professional hedge funds use effective leverage of 3:1 or 5:1. Retail traders use 100:1. That is why pros survive and retail traders blow up.

## Part 7: Risk Management Rules

How to survive.

*   **The 1% Rule**: Never risk more than 1% of your account equity on a single trade.
    *   *Account*: $10,000.
    *   *Max Loss*: $100.
    *   *Stop Loss*: 50 pips.
    *   *Pip Value*: $2 ($100 / 50).
    *   *Position Size*: 2 Mini Lots (0.2).
*   **Use Stop Losses**: Always set a hard stop loss. Never trade without a safety net.
*   **Don't Marry a Trade**: If it hits your stop, accept the loss. Don't move the stop hoping it comes back.

## Part 8: Swaps (Rollover)

The hidden cost (or profit) of holding overnight.

*   **The Concept**: Forex is borrowing one currency to buy another. You pay interest on what you borrow and earn interest on what you buy.
*   **The Swap Rate**: The difference between the interest rates of the two countries.
*   **Negative Swap**: If you buy a low-yield currency (EUR) against a high-yield currency (USD), you **pay** interest every night.
*   **Positive Swap**: If you buy a high-yield currency (USD) against a low-yield currency (JPY), you **earn** interest every night (Carry Trade).
*   **Wednesday Triple Swap**: On Wednesdays, swaps are usually triple to account for the weekend settlement.

## Part 9: Summary and Checklist

Before placing a trade:

1.  **Identify the Pair**: EUR/USD.
2.  **Determine Stop Loss**: Where is the trade invalid? (e.g., 20 pips away).
3.  **Calculate Risk**: 1% of account ($100).
4.  **Calculate Lot Size**: $100 / 20 pips = $5 per pip = 0.5 Lots (5 Mini Lots).
5.  **Check Margin**: Do I have enough free margin?
6.  **Execute**: Buy or Sell.
7.  **Monitor**: Keep an eye on the trade, but don't obsess. Trust your plan.
\`,
        keyTakeaways: [
            "A Pip is the unit of movement (usually 0.0001).",
            "A Standard Lot is 100,000 units; a Micro Lot is 1,000 units.",
            "Leverage amplifies both gains and losses. Use it with extreme caution.",
            "Never risk more than 1-2% of your account on a single trade."
        ]
    },`;

const startMarker = '"fx_3": {';
const endMarker = '"fx_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fx_3: Pips & Lots - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 7000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 7000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fx_3!');
