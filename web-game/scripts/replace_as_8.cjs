const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_8": {
        title: "Options: Calls & Puts",
        content: \`
# Options: The Power of Leverage and Flexibility

**[Options](/glossary#options)** are [derivative](/glossary#derivative) contracts that give you the right—but not the obligation—to buy or sell an underlying [asset](/glossary#asset) at a specific price before a specific date. They're powerful tools for [leverage](/glossary#leverage), [hedging](/glossary#hedging), and income generation, but they're also complex and risky if misunderstood.

Options trading has exploded in popularity, with retail traders drawn to the potential for outsized gains. However, most beginners lose money on options because they don't understand the mechanics. This lesson covers the fundamentals every trader needs before touching options.

## Part 1: What Is an Option?

An **option** is a contract between a buyer and a seller.

*   **Definition**: An option gives the holder the right (not obligation) to buy or sell an [asset](/glossary#asset) at a specified price (strike price) on or before a specified date (expiration).
*   **Premium**: The price you pay to buy an option. This is the most you can lose as a buyer.
*   **Strike Price**: The price at which you can exercise your right to buy or sell.
*   **Expiration Date**: The date the option expires. After this, it's worthless if not exercised.
*   **Underlying [Asset](/glossary#asset)**: The [stock](/glossary#stock), [ETF](/glossary#etf), [index](/glossary#index), or other asset the option is based on.
*   **Contract Size**: One option contract typically represents 100 shares of the underlying.
*   **American vs. European**: American options can be exercised anytime before expiration; European only at expiration.

## Part 2: Calls and Puts — The Two Types of Options

There are only two types of options: [Calls](/glossary#call-option) and [Puts](/glossary#put-option).

### Call Options
*   **Right to BUY** the underlying at the strike price.
*   **Bullish**: You profit if the underlying goes UP.
*   **Example**: You buy a $100 [call](/glossary#call-option) on AAPL expiring in 30 days. If AAPL rises to $110, you can buy shares at $100 (a $10 profit per share, minus the premium paid).
*   **Max Profit (Buyer)**: Unlimited (price can rise infinitely).
*   **Max Loss (Buyer)**: The premium paid.

### Put Options
*   **Right to SELL** the underlying at the strike price.
*   **Bearish**: You profit if the underlying goes DOWN.
*   **Example**: You buy a $100 [put](/glossary#put-option) on AAPL. If AAPL falls to $90, you can sell shares at $100 (a $10 profit per share, minus the premium paid).
*   **Max Profit (Buyer)**: Strike price - $0 (stock can't go below zero).
*   **Max Loss (Buyer)**: The premium paid.

### Options Key Terms
*   **In-The-Money (ITM)**: Option has intrinsic value. [Call](/glossary#call-option): price > strike. [Put](/glossary#put-option): price < strike.
*   **At-The-Money (ATM)**: Price ≈ strike. No intrinsic value.
*   **Out-Of-The-Money (OTM)**: No intrinsic value. [Call](/glossary#call-option): price < strike. [Put](/glossary#put-option): price > strike.

## Part 3: Why Trade Options?

Options offer unique advantages over trading [stocks](/glossary#stock) directly.

*   **[Leverage](/glossary#leverage)**: Control 100 shares for a fraction of the cost. A $5 option controls $500 worth of stock (at $5/share).
*   **Limited [Risk](/glossary#risk) (Buying)**: When you buy options, the most you can lose is the premium. No margin calls.
*   **[Hedging](/glossary#hedging)**: Protect your [stock](/glossary#stock) portfolio from downside. Buy [puts](/glossary#put-option) as "insurance."
*   **Income Generation**: Sell options to collect premium ([covered calls](/glossary#covered-call), cash-secured [puts](/glossary#put-option)).
*   **Flexibility**: Profit from up moves, down moves, sideways moves, or [volatility](/glossary#volatility) changes.
*   **Strategic Combinations**: Build complex positions ([spreads](/glossary#spread), [straddles](/glossary#straddle), [strangles](/glossary#strangle)) with defined [risk](/glossary#risk)/reward.

## Part 4: Option Pricing — What Determines Premium?

Understanding what affects option prices is essential for trading them.

### Intrinsic Value
*   The amount the option is in-the-money.
*   **[Call](/glossary#call-option)**: Max(Stock Price - Strike, 0)
*   **[Put](/glossary#put-option)**: Max(Strike - Stock Price, 0)
*   OTM options have zero intrinsic value.

### Extrinsic Value (Time Value)
*   The portion of the premium above intrinsic value.
*   Represents the probability the option could become more valuable.
*   Decays as expiration approaches (theta decay).

### Factors That Affect Premium
*   **Stock Price**: Higher stock price → higher [call](/glossary#call-option) value, lower [put](/glossary#put-option) value.
*   **Strike Price**: Closer to the money → higher premium.
*   **Time to Expiration**: More time → higher premium (more can happen).
*   **[Volatility](/glossary#volatility) (IV)**: Higher implied [volatility](/glossary#volatility) → higher premium. Volatility is the key driver.
*   **[Interest Rates](/glossary#interest-rate)**: Minor effect, increases [call](/glossary#call-option) value slightly.
*   **[Dividends](/glossary#dividend)**: Reduce [call](/glossary#call-option) value, increase [put](/glossary#put-option) value.

### The Greeks
*   **Delta**: How much the option price changes per $1 move in the underlying.
*   **Gamma**: Rate of change of delta.
*   **Theta**: Time decay—how much value the option loses per day.
*   **Vega**: Sensitivity to changes in implied [volatility](/glossary#volatility).
*   **Rho**: Sensitivity to [interest rate](/glossary#interest-rate) changes (usually minor).

## Part 5: Buying vs. Selling Options

You can be a buyer or seller of options—each has different [risk](/glossary#risk)/reward profiles.

### Buying Options (Long)
*   **Pay premium** upfront.
*   **Max Loss**: Premium paid.
*   **Max Profit**: Unlimited ([calls](/glossary#call-option)) or large ([puts](/glossary#put-option)).
*   **Probability**: Often below 50%. Most options expire worthless.
*   **Time Decay**: Works against you. Every day, your option loses value.
*   **Best For**: Directional bets with limited [risk](/glossary#risk).

### Selling Options (Short)
*   **Receive premium** upfront.
*   **Max Loss**: Potentially unlimited (naked [calls](/glossary#call-option)) or large (naked [puts](/glossary#put-option)).
*   **Max Profit**: The premium received.
*   **Probability**: Often above 50%. You profit if the option expires worthless.
*   **Time Decay**: Works in your favor. Every day, you keep more premium.
*   **Margin**: Requires margin because of unlimited [risk](/glossary#risk) potential.
*   **Best For**: Income generation, selling overpriced [volatility](/glossary#volatility).

### Risk Comparison
*   Buying has defined [risk](/glossary#risk), lower probability of profit.
*   Selling has higher probability but undefined [risk](/glossary#risk) unless covered.

## Part 6: Common Options Strategies

Basic strategies for getting started.

### Long Call
*   Buy a [call](/glossary#call-option) when bullish.
*   Profit if stock rises above strike + premium.

### Long Put
*   Buy a [put](/glossary#put-option) when bearish.
*   Profit if stock falls below strike - premium.

### Covered Call
*   Own 100 shares, sell a [call](/glossary#call-option) against them.
*   Collect premium. If stock rises above strike, shares are called away.
*   Income strategy with limited upside.

### Cash-Secured Put
*   Sell a [put](/glossary#put-option), keep cash to buy shares if assigned.
*   Profit if stock stays above strike.
*   Used to acquire [stocks](/glossary#stock) at a discount.

### Protective Put
*   Own shares, buy a [put](/glossary#put-option) for downside protection.
*   Acts as insurance.

### Vertical [Spreads](/glossary#spread)
*   Buy one option, sell another at different strike.
*   Limits both [risk](/glossary#risk) and reward.
*   Bull [call spread](/glossary#spread), bear [put spread](/glossary#spread).

## Part 7: Risks and Rules for Options Trading

Options can produce spectacular gains—and catastrophic losses.

### Key Risks
*   **Total Loss**: Buying options can result in 100% loss if they expire worthless.
*   **Time Decay**: Options lose value daily. The clock is always ticking against buyers.
*   **[Volatility](/glossary#volatility) Crush**: After events (earnings), implied [volatility](/glossary#volatility) often drops, crushing option value.
*   **Unlimited [Risk](/glossary#risk) (Selling)**: Naked [call](/glossary#call-option) sellers face theoretically unlimited losses.
*   **Complexity**: Mispricing, misunderstanding Greeks, and poor strategy selection.

### Rules for Beginners
*   **Start Small**: Trade 1-2 contracts until you understand the mechanics.
*   **Define [Risk](/glossary#risk)**: Know your maximum loss before entering.
*   **Avoid Expiration Week Drama**: Time decay accelerates. Close positions before the final week.
*   **Don't Sell Naked Options (Yet)**: Until you're experienced, the [risk](/glossary#risk) is too high.
*   **Paper Trade First**: Simulate options trades to learn without [risk](/glossary#risk).
*   **Learn the Greeks**: Understanding delta, theta, and vega is essential.
*   **Stay Liquid**: Trade options with tight bid-ask [spreads](/glossary#spread) (high [volume](/glossary#volume)).

Options are the most versatile instruments in trading. Master them, and you'll have tools to profit in virtually any market condition.
\`,
        keyTakeaways: [
            "A call gives you the right to buy; a put gives you the right to sell—at a specified price by a specified date.",
            "Buyers pay a premium with limited risk; sellers collect premium but face potentially unlimited risk.",
            "Option prices are driven by stock price, strike, time, and most importantly, implied volatility.",
            "The Greeks (delta, theta, vega, gamma) measure how options react to various factors.",
            "Start with defined-risk strategies (long calls/puts, spreads) before selling naked options."
        ]
    },`;

const startMarker = '"as_8": {';
const endMarker = '"as_9": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_8: Options: Calls & Puts - VALIDATION ===');
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
console.log('✓ Successfully updated as_8!');
