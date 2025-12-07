const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_9": {
        title: "Covered Calls Strategy",
        content: \`
# Covered Calls: Earning Income from Your Stock Holdings

The **[covered call](/glossary#covered-call)** strategy is one of the most popular and conservative [options](/glossary#options) strategies. It involves selling [call options](/glossary#call-option) against [stocks](/glossary#stock) you already own, generating income from the premiums while accepting limited upside potential.

This strategy is beloved by income-focused investors and retirees because it provides consistent cash flow while reducing [volatility](/glossary#volatility). If you own [stocks](/glossary#stock) and want to boost your returns, covered calls might be the perfect introduction to [options](/glossary#options) trading.

## Part 1: What Is a Covered Call?

A **[covered call](/glossary#covered-call)** combines stock ownership with option selling.

*   **Definition**: You own 100 shares of a [stock](/glossary#stock) and sell one [call option](/glossary#call-option) against those shares.
*   **"Covered"**: The sold [call](/glossary#call-option) is "covered" by your stock ownership. If assigned, you deliver your shares.
*   **Premium Income**: You receive the option premium upfront—this is yours to keep no matter what.
*   **Obligation**: If the [stock](/glossary#stock) price exceeds the strike at expiration, you must sell your shares at the strike price.
*   **Example**:
    *   You own 100 shares of AAPL at $150.
    *   You sell a $160 [call](/glossary#call-option) expiring in 30 days for $3 premium.
    *   You receive $300 (100 shares × $3).
    *   If AAPL stays below $160, you keep the shares AND the $300.
    *   If AAPL rises above $160, your shares are sold at $160, but you still keep the $300.

## Part 2: The Profit and Loss Profile

Understanding the payoff diagram is essential.

### Maximum Profit
*   **Formula**: (Strike Price - Stock Purchase Price) + Premium Received
*   Using the example: ($160 - $150) + $3 = $13 per share, or $1,300 total.
*   **When It Occurs**: Stock price at or above the strike at expiration.

### Maximum Loss
*   **Formula**: Stock Purchase Price - Premium Received (if stock goes to zero)
*   Using the example: $150 - $3 = $147 per share max loss.
*   **When It Occurs**: Stock falls to zero. The premium provides a small cushion.

### Breakeven
*   **Formula**: Stock Purchase Price - Premium Received
*   Using the example: $150 - $3 = $147. You break even if AAPL is at $147 at expiration.

### Key Insight
*   Your upside is **capped** at the strike price.
*   Your downside is **the same as owning the stock** (minus the small premium buffer).
*   This is a **neutral to mildly bullish** strategy.

## Part 3: Selecting the Right Strike and Expiration

Choosing the right parameters is crucial for success.

### Strike Price Selection
*   **Out-of-the-Money (OTM)**: Strike above current price. More upside potential, lower premium.
*   **At-the-Money (ATM)**: Strike near current price. Higher premium, less upside.
*   **In-the-Money (ITM)**: Strike below current price. Highest premium, immediate profit but very limited upside.
*   **Rule of Thumb**: Most covered call sellers choose strikes 5-10% above the current price (slightly OTM).

### Expiration Selection
*   **Shorter Expiration (Weekly to 30 days)**: Faster time decay, more premium per day. Requires more management.
*   **Longer Expiration (45-60 days)**: Less frequent trading, good balance of premium and decay.
*   **Very Long Expiration (3+ months)**: Higher absolute premium but lower annualized return.
*   **Sweet Spot**: Many traders prefer 30-45 days to expiration for optimal theta decay.

### Delta as a Guide
*   [Delta](/glossary#delta) indicates probability of assignment.
*   20-30 delta [calls](/glossary#call-option): ~20-30% chance of being assigned. Good balance.
*   50 delta: ATM, 50% chance. Higher premium but often assigned.
*   10 delta: Very low chance of assignment, minimal premium.

## Part 4: Mechanics of Execution

How to actually implement the strategy.

### Opening the Position
*   Ensure you own at least 100 shares (or buy them simultaneously).
*   Sell-to-open one [call option](/glossary#call-option) per 100 shares owned.
*   Select your strike and expiration based on your outlook.
*   Receive the premium credit into your account immediately.

### Managing the Position
*   **If Stock Stays Below Strike**: Let the option expire worthless. Keep premium and shares. Sell another [call](/glossary#call-option) next month.
*   **If Stock Exceeds Strike**: 
    *   Let assignment happen: Shares sold at strike, you keep premium.
    *   Roll the position: Buy back the [call](/glossary#call-option), sell a new one at a higher strike or later date.
*   **If Stock Falls Significantly**: The premium provides a small buffer. Consider holding or rolling down.

### Rolling Covered Calls
*   **Rolling Out**: Buy back the current [call](/glossary#call-option), sell a new one with a later expiration (same strike).
*   **Rolling Up**: Buy back the current [call](/glossary#call-option), sell a new one at a higher strike (same expiration).
*   **Rolling Up and Out**: Combination—higher strike AND later expiration.
*   **Purpose**: Avoid assignment while continuing to collect premium.

### Closing Early
*   You can buy back your sold [call](/glossary#call-option) anytime.
*   If the option has lost 50-80% of its value early, consider closing to lock in profits.

## Part 5: Covered Calls on Your Long-Term Holdings

Many investors use covered calls on their buy-and-hold portfolio.

*   **Enhancing Returns**: Instead of just holding, sell [calls](/glossary#call-option) monthly to generate 1-3% additional income.
*   **Dividend [Stocks](/glossary#stock)**: Combine [dividend](/glossary#dividend) income with covered call income for boosted [yield](/glossary#yield).
*   **[Volatility](/glossary#volatility) Reduction**: Selling [calls](/glossary#call-option) reduces the effective [volatility](/glossary#volatility) of your holding.
*   **Psychological Benefit**: Premium income cushions drawdowns, making dips easier to stomach.
*   **Tax Consideration**: Covered call premiums may be taxed as short-term capital gains. [Dividends](/glossary#dividend) may be taxed more favorably. Consult a tax advisor.
*   **[Risk](/glossary#risk)**: In a strong bull market, your upside is capped. You may feel like you "left money on the table."

## Part 6: Risks and Pitfalls

Covered calls are conservative, but risks exist.

### Risks
*   **Capped Upside**: If the [stock](/glossary#stock) soars, you miss gains above the strike.
*   **Downside Exposure**: You still bear full [risk](/glossary#risk) if the [stock](/glossary#stock) falls. The premium provides only a small buffer.
*   **Opportunity Cost**: Capital is tied to the [stock](/glossary#stock). If the [stock](/glossary#stock) underperforms, so does the strategy.
*   **Assignment [Risk](/glossary#risk)**: If assigned, you may face tax consequences or miss intended holding periods.
*   **[Dividend](/glossary#dividend) [Risk](/glossary#risk)**: [Call](/glossary#call-option) options are sometimes exercised early before an ex-[dividend](/glossary#dividend) date. Monitor this on high-[dividend](/glossary#dividend) [stocks](/glossary#stock).

### Common Mistakes
*   **Selling [Calls](/glossary#call-option) on [Stocks](/glossary#stock) You Don't Want to Own**: Only do this strategy on [stocks](/glossary#stock) you're happy to hold long-term.
*   **Ignoring [Earnings](/glossary#earnings) and Events**: Avoid selling [calls](/glossary#call-option) into [earnings](/glossary#earnings). Big moves can result in surprise assignments.
*   **Using [Stocks](/glossary#stock) You'd Be Upset to Lose**: If you'd hate to sell your shares, covered calls may not be appropriate.
*   **Chasing Premium**: High premiums often mean high [volatility](/glossary#volatility) or [risk](/glossary#risk). Don't sell [calls](/glossary#call-option) just because the premium looks juicy.

## Part 7: When to Use (and Not Use) Covered Calls

Matching the strategy to the right market conditions.

### Ideal Conditions
*   **Neutral to Mildly Bullish Outlook**: You think the [stock](/glossary#stock) will stay flat or rise moderately.
*   **High Implied [Volatility](/glossary#volatility)**: Premiums are rich—you get paid more for the same [risk](/glossary#risk).
*   **[Stocks](/glossary#stock) You Want to Own Anyway**: Long-term holdings where you're happy to collect income.
*   **Income Focus**: Investors seeking consistent cash flow.

### Poor Conditions
*   **Strongly Bullish Outlook**: Don't cap your upside if you expect a big rally.
*   **Bearish Outlook**: If you think the [stock](/glossary#stock) will fall, selling [calls](/glossary#call-option) won't protect you—consider [puts](/glossary#put-option) instead.
*   **Low [Volatility](/glossary#volatility)**: Premiums are tiny, not worth the effort.
*   **[Earnings](/glossary#earnings) or Major Events**: Assignment [risk](/glossary#risk) and unpredictable moves make covered calls risky.

### The Takeaway
Covered calls are a low-[risk](/glossary#risk) entry into [options](/glossary#options) trading. They won't make you rich, but they can steadily boost your portfolio income while you hold [stocks](/glossary#stock) you already love. Start with one position, learn the mechanics, and expand from there.
\`,
        keyTakeaways: [
            "A covered call = own 100 shares + sell one call option against them.",
            "You earn premium income immediately but cap your upside at the strike price.",
            "Choose strikes 5-10% OTM and 30-45 days to expiration for a balanced approach.",
            "Rolling allows you to extend the position and continue collecting premium.",
            "Use covered calls on stocks you want to own, in neutral to mildly bullish conditions."
        ]
    },`;

const startMarker = '"as_9": {';
const endMarker = '"as_10": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_9: Covered Calls Strategy - VALIDATION ===');
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
console.log('✓ Successfully updated as_9!');
