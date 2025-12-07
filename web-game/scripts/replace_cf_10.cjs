const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "cf_10": {
        title: "Options on Futures",
        content: \`
# Leverage on Leverage: Mastering Options on Futures

[Options](/glossary#options) on [futures](/glossary#futures) are among the most sophisticated instruments in commodity markets. They combine the [leverage](/glossary#leverage) of [futures contracts](/glossary#futures) with the defined-[risk](/glossary#risk) and strategic flexibility of [options](/glossary#options). While complex, they offer powerful tools for [hedging](/glossary#hedging), speculation, and income generation.

Understanding [options](/glossary#options) on [futures](/glossary#futures) opens up a world of trading strategies. You can profit from directional moves, from [volatility](/glossary#volatility), from time decay, or from price ranges.

## Part 1: Understanding Options on Futures

An [option](/glossary#options) on a [future](/glossary#futures) is the right—but not the obligation—to enter a futures position at a specified price (strike) before expiration.

*   **[Call Option](/glossary#call-option)**: The right to **buy** a futures contract at the strike price. Buy calls if you're bullish.
*   **[Put Option](/glossary#put-option)**: The right to **sell** a futures contract at the strike price. Buy puts if you're bearish.
*   **The Premium**: The price you pay for the option—your maximum [risk](/glossary#risk) as a buyer.
*   **Strike Price**: The price at which you can buy (call) or sell (put) the underlying future.
*   **Expiration Date**: The date the option expires. [Options](/glossary#options) typically expire before the underlying futures contract.
*   **Underlying Future**: The specific futures contract the option is based on.
*   **American Style**: Most commodity [options](/glossary#options) can be exercised at any time before expiration.

## Part 2: Why Use Options Instead of Futures?

[Options](/glossary#options) offer advantages that make them preferable in many situations.

*   **Defined [Risk](/glossary#risk)**: Maximum loss is the premium paid. Unlike [futures](/glossary#futures), you cannot lose more than your investment.
*   **No [Margin](/glossary#margin) Calls**: Option buyers don't face margin calls—pay premium upfront and that's it.
*   **[Leverage](/glossary#leverage) with Protection**: Get leveraged exposure while capping [downside](/glossary#downside).
*   **Flexibility**: Express complex views—not just up or down, but views on [volatility](/glossary#volatility) and time.
*   **[Hedging](/glossary#hedging) with [Upside](/glossary#upside)**: Producers can protect against falling prices while keeping ability to profit if prices rise.
*   **Lower Capital**: [Options](/glossary#options) often require less capital than holding full [futures](/glossary#futures) positions.

### The Trade-Off
*   **Time Decay**: [Options](/glossary#options) lose value as expiration approaches.
*   **Premium Cost**: You pay for protection. The market must move enough to overcome the premium.
*   **Complexity**: Requires understanding of Greeks and [volatility](/glossary#volatility).

## Part 3: Key Option Concepts — The Greeks

To trade [options](/glossary#options) effectively, understand "The Greeks."

*   **Delta (Δ)**: Measures price change when the underlying moves $1. Calls: 0 to 1. Puts: 0 to -1.
*   **Gamma (Γ)**: Measures how fast delta changes. Highest for at-the-money options near expiration.
*   **Theta (Θ)**: Time decay—value lost per day. Decay accelerates near expiration.
*   **Vega (ν)**: Sensitivity to [implied volatility](/glossary#implied-volatility) changes. Critical around reports or weather events.

## Part 4: Common Options Strategies

[Options](/glossary#options) on [futures](/glossary#futures) enable a wide range of strategies.

### Directional Strategies
*   **Long Call**: Bullish. Profit from rising prices with limited [risk](/glossary#risk).
*   **Long Put**: Bearish. Profit from falling prices with limited [risk](/glossary#risk).
*   **Covered Call**: Own the underlying, sell out-of-the-money call. Generates income but caps [upside](/glossary#upside).
*   **Protective Put**: Own a long future, buy a put for protection.

### [Spread](/glossary#spread) Strategies
*   **Vertical [Spread](/glossary#spread)**: Buy one option, sell another at different strike. Reduces cost but limits profit.
*   **Calendar [Spread](/glossary#spread)**: Buy far month, sell near month (same strike).
*   **Straddle**: Buy call AND put at same strike. Profits from big moves either direction.
*   **Strangle**: Buy [out-of-the-money](/glossary#out-of-the-money) call AND put. Requires bigger move to profit.

### [Hedging](/glossary#hedging) Strategies
*   **Collar**: Long future + long put (floor) + short call (ceiling).
*   **Fence**: Similar to collar, used by producers.

## Part 5: Options for Hedging — Producer Example

[Options](/glossary#options) offer more flexible [hedging](/glossary#hedging) than straight [futures](/glossary#futures).

### Producer Hedge with Puts
*   **Situation**: Corn farmer expects 100,000 bushel harvest. Current price: $6.00. Fears prices might drop.
*   **Strategy**: Buy 20 October corn puts at $5.80 strike. Premium: $0.20/bushel ($4,000 total).
*   **If Corn Drops to $5.00**:
    *   Physical sale: $500,000
    *   Put profit: $80,000
    *   Less premium: -$4,000
    *   **Net: $576,000 ($5.76/bushel)**
*   **If Corn Rises to $7.00**:
    *   Physical sale: $700,000
    *   Put expires worthless: -$4,000
    *   **Net: $696,000 ($6.96/bushel)**
*   **vs. [Futures](/glossary#futures) Hedge**: Futures lock in ~$6.00 either way. Put hedge costs $0.04/bushel but preserves all [upside](/glossary#upside).

## Part 6: Volatility Trading with Options

[Options](/glossary#options) allow you to trade [volatility](/glossary#volatility) itself.

*   **[Implied Volatility](/glossary#implied-volatility) (IV)**: Market's forecast of future [volatility](/glossary#volatility). High IV = expensive [options](/glossary#options).
*   **[Historical Volatility](/glossary#volatility) (HV)**: Actual past [volatility](/glossary#volatility).
*   **Volatility [Spread](/glossary#spread)**: If IV > HV, options may be overpriced—consider selling. If IV < HV, consider buying.
*   **Pre-Report [Volatility](/glossary#volatility)**: IV spikes before major reports. After, IV collapses ("volatility crush").
*   **Straddle Example**: Before WASDE, buy corn straddle. If report shocks market, straddle profits. If neutral, it loses.
*   **Selling Premium**: Experienced traders sell [options](/glossary#options) when IV is high, betting actual [volatility](/glossary#volatility) will be lower.

## Part 7: Risks and Considerations

[Options](/glossary#options) on [futures](/glossary#futures) have unique risks and complexities.

*   **Two Expirations**: Track both option and underlying futures expiration dates.
*   **Exercise and Assignment**: Exercising creates an actual [futures](/glossary#futures) position with [margin](/glossary#margin) requirements.
*   **[Liquidity](/glossary#liquidity)**: Not all strikes are liquid. Stick to near-the-money in active contracts.
*   **Time Decay**: Long positions bleed value daily. Be right on direction AND timing.
*   **Volatility Crush**: After events, IV drops. Even correct direction may not offset IV decline.
*   **Selling [Risk](/glossary#risk)**: Selling naked [options](/glossary#options) creates unlimited [risk](/glossary#risk).
*   **Paper Trading**: Practice strategies before risking real capital.
\`,
        keyTakeaways: [
            "Options on futures give you the right (not obligation) to enter a futures position at a set price.",
            "Options buyers have limited risk (the premium), while sellers have potentially unlimited risk.",
            "The Greeks (Delta, Gamma, Theta, Vega) measure how option prices change with various factors.",
            "Options enable flexible hedging—producers can protect downside while keeping upside potential.",
            "Volatility is a tradable variable; options prices rise and fall with implied volatility."
        ]
    },`;

const startMarker = '"cf_10": {';
const endMarker = '"cf_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== cf_10: Options on Futures - VALIDATION ===');
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
console.log('✓ Successfully updated cf_10!');
