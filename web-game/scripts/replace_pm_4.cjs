const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_4": {
        title: "Risk Management 101",
        content: \`
# Risk Management: Protecting Your Capital

**[Risk management](/glossary#risk-management)** is the practice of identifying, assessing, and controlling threats to your capital. It's not about avoiding [risk](/glossary#risk)—[risk](/glossary#risk) is necessary for return. It's about managing [risk](/glossary#risk) intelligently so that you can survive bad periods, take advantage of opportunities, and achieve your long-term goals.

The most successful investors aren't necessarily the best at picking winners. They're the best at controlling losses. As the saying goes: take care of the downside, and the upside takes care of itself.

## Part 1: Understanding Investment Risk

[Risk](/glossary#risk) comes in many forms, and understanding them is the first step to managing them.

### Types of Risk
*   **Market [Risk](/glossary#risk) ([Systematic Risk](/glossary#systematic-risk))**: The [risk](/glossary#risk) of the entire market declining. Cannot be diversified away.
*   **[Unsystematic Risk](/glossary#unsystematic-risk) (Specific [Risk](/glossary#risk))**: [Risk](/glossary#risk) unique to a company or industry. Can be reduced through [diversification](/glossary#diversification).
*   **[Volatility](/glossary#volatility) [Risk](/glossary#risk)**: The magnitude of price swings. Higher [volatility](/glossary#volatility) = more uncertain outcomes.
*   **[Liquidity](/glossary#liquidity) [Risk](/glossary#risk)**: The [risk](/glossary#risk) of not being able to sell at a fair price when needed.
*   **Credit [Risk](/glossary#risk)**: The [risk](/glossary#risk) that a borrower defaults ([bonds](/glossary#bond), lending).
*   **[Interest Rate](/glossary#interest-rate) [Risk](/glossary#risk)**: The [risk](/glossary#risk) that rate changes affect [asset](/glossary#asset) values, especially [bonds](/glossary#bond).
*   **[Inflation](/glossary#inflation) [Risk](/glossary#risk)**: The [risk](/glossary#risk) that purchasing power erodes over time.
*   **Currency [Risk](/glossary#risk)**: The [risk](/glossary#risk) from exchange rate fluctuations (international investments).
*   **Concentration [Risk](/glossary#risk)**: The [risk](/glossary#risk) of having too much in one [asset](/glossary#asset), sector, or geography.

### [Risk](/glossary#risk) vs. Reward
*   Higher expected returns require accepting higher [risk](/glossary#risk).
*   [Risk management](/glossary#risk-management) isn't about eliminating [risk](/glossary#risk)—it's about getting adequate return for the [risk](/glossary#risk) you take.
*   The goal is optimal [risk-adjusted returns](/glossary#risk-adjusted-return).

## Part 2: Diversification — The First Line of Defense

[Diversification](/glossary#diversification) is the simplest and most effective [risk management](/glossary#risk-management) tool.

*   **Principle**: Don't put all your eggs in one basket. Spread investments across multiple [assets](/glossary#asset).
*   **How It Works**: Different [assets](/glossary#asset) respond differently to the same event. When one zigs, another zags. Losses are partially offset.
*   **Across [Asset Classes](/glossary#asset-class)**: [Stocks](/glossary#stock), [bonds](/glossary#bond), real estate, [commodities](/glossary#commodities).
*   **Within [Asset Classes](/glossary#asset-class)**: Different sectors, industries, companies.
*   **Across Geographies**: US, international developed, emerging markets.
*   **Correlation Matters**: Low or negative [correlation](/glossary#correlation) between [assets](/glossary#asset) provides the best [diversification](/glossary#diversification).
*   **Diminishing Returns**: Most [diversification](/glossary#diversification) benefit comes from the first 15-20 [stocks](/glossary#stock). Holding 500 [stocks](/glossary#stock) doesn't add much more.
*   **Limitation**: In severe crises, [correlations](/glossary#correlation) spike. [Diversification](/glossary#diversification) helps less when you need it most.

## Part 3: Position Sizing

How much to invest in each position is critical to [risk management](/glossary#risk-management).

*   **Never Bet the Farm**: No single position should be large enough to devastate your portfolio if it fails.
*   **Rule of Thumb**: Most [risk](/glossary#risk) managers suggest no single position exceed 5-10% of the portfolio.
*   **Based on Conviction**: Higher conviction positions can be larger (within limits).
*   **Based on [Volatility](/glossary#volatility)**: Higher [volatility](/glossary#volatility) [assets](/glossary#asset) warrant smaller positions.
*   **Formula Approach**: Position size = (Account [Risk](/glossary#risk) % × Account Value) / (Entry Price - [Stop-Loss](/glossary#stop-loss) Price)
*   **Example**: $100,000 account, 1% [risk](/glossary#risk) per trade ($1,000 max loss). Entry at $50, [stop-loss](/glossary#stop-loss) at $48. Position size = $1,000 / $2 = 500 shares ($25,000).
*   **Avoid Overlapping [Risks](/glossary#risk)**: Five different tech [stocks](/glossary#stock) aren't diversified—they'll move together. Count them as one correlated position.

## Part 4: Stop-Losses and Risk Controls

Setting boundaries limits losses before they become devastating.

*   **[Stop-Loss](/glossary#stop-loss) Orders**: Automatically sell if price falls below a threshold. Limits maximum loss.
*   **Types**:
    *   Fixed [stop-loss](/glossary#stop-loss): Static price level (e.g., 10% below entry).
    *   Trailing [stop-loss](/glossary#stop-loss): Moves up as price rises, locks in profits.
    *   [Volatility](/glossary#volatility)-based [stop-loss](/glossary#stop-loss): Set [stops](/glossary#stop-loss) based on ATR (Average True Range).
*   **Drawdown Limits**: Set rules for maximum portfolio loss (e.g., "If I'm down 15%, I reduce exposure").
*   **Daily Loss Limits**: For active traders, stop trading if daily losses exceed a threshold.
*   **Circuit Breakers**: Pre-defined rules that trigger defensive action regardless of emotion.
*   **Discipline**: A [stop-loss](/glossary#stop-loss) only works if you honor it. Never move a [stop](/glossary#stop-loss) further away to "give it room."

## Part 5: Hedging

[Hedging](/glossary#hedging) reduces [risk](/glossary#risk) by taking offsetting positions.

*   **Definition**: A [hedge](/glossary#hedging) is an investment that offsets potential losses in another investment.
*   **Common [Hedges](/glossary#hedging)**:
    *   **[Put Options](/glossary#put-option)**: Buy [puts](/glossary#put-option) on [stocks](/glossary#stock) you own to limit downside.
    *   **Inverse [ETFs](/glossary#etf)**: Rise when the market falls.
    *   **Short Positions**: Short an [index](/glossary#index) or correlated [asset](/glossary#asset).
    *   **Gold**: Often rises during market turmoil.
    *   **Treasury Bonds**: Usually appreciate during [stock](/glossary#stock) crashes.
*   **Cost of [Hedging](/glossary#hedging)**: [Hedges](/glossary#hedging) have a cost (option premiums, drag from inverse [ETFs](/glossary#etf)). They reduce returns when not needed.
*   **Tail [Risk](/glossary#risk) [Hedging](/glossary#hedging)**: Buy out-of-the-money [puts](/glossary#put-option) to protect against catastrophic moves. Cheap most of the time, valuable in crashes.
*   **Natural [Hedges](/glossary#hedging)**: Some [assets](/glossary#asset) naturally [hedge](/glossary#hedging) each other (e.g., [stocks](/glossary#stock) vs. [bonds](/glossary#bond)). [Diversification](/glossary#diversification) is a form of [hedging](/glossary#hedging).

## Part 6: Measuring Risk

You can't manage what you don't measure.

*   **Standard Deviation ([Volatility](/glossary#volatility))**: Measures the dispersion of returns. Higher = more [risk](/glossary#risk).
*   **[Beta](/glossary#beta)**: Measures sensitivity to market movements. [Beta](/glossary#beta) > 1 means more volatile than the market.
*   **Maximum Drawdown**: The largest peak-to-trough decline. Critical for understanding worst-case scenarios.
*   **Value at [Risk](/glossary#risk) (VaR)**: Estimates the maximum loss over a period at a given confidence level (e.g., "5% chance of losing more than $50,000").
*   **[Sharpe Ratio](/glossary#sharpe-ratio)**: [Risk-adjusted return](/glossary#risk-adjusted-return). Higher is better. Compares excess return to [volatility](/glossary#volatility).
*   **[Sortino Ratio](/glossary#sortino-ratio)**: Like [Sharpe](/glossary#sharpe-ratio), but only penalizes downside [volatility](/glossary#volatility). Better for asymmetric returns.
*   **[Correlation](/glossary#correlation)**: Measures how [assets](/glossary#asset) move together. Low [correlation](/glossary#correlation) = better [diversification](/glossary#diversification).

## Part 7: Building a Risk Management System

Integrate [risk management](/glossary#risk-management) into every aspect of your investing.

*   **Before You Invest**:
    *   Determine your overall [risk](/glossary#risk) tolerance and maximum drawdown you can accept.
    *   Set target [asset allocation](/glossary#asset-allocation) consistent with your [risk](/glossary#risk) tolerance.
    *   Define position sizing rules for individual investments.
*   **During the Investment**:
    *   Set [stop-losses](/glossary#stop-loss) or know your exit criteria before entering.
    *   Monitor portfolio [risk](/glossary#risk) (concentration, [correlation](/glossary#correlation), total exposure).
    *   Rebalance to maintain target allocation.
*   **After Unexpected Events**:
    *   Review what happened and why.
    *   Adjust rules if needed (but avoid overreacting to single events).
    *   Learn from mistakes.
*   **Mindset**:
    *   Accept that losses are part of investing.
    *   Focus on process, not outcomes. Good [risk management](/glossary#risk-management) sometimes still results in losses.
    *   Never [risk](/glossary#risk) more than you can afford to lose.
    *   Survive first, then thrive.

[Risk management](/glossary#risk-management) isn't glamorous, but it's what separates sustainable investors from those who blow up. Protect your capital, and you'll always have the opportunity to grow it.
\`,
        keyTakeaways: [
            "Risk comes in many forms: market, volatility, liquidity, credit, inflation, concentration, and more.",
            "Diversification is the first line of defense—spread investments across uncorrelated assets.",
            "Position sizing limits damage from any single failure—never bet the farm on one trade.",
            "Stop-losses and risk controls set hard limits before emotion takes over.",
            "Measure risk with metrics like standard deviation, beta, max drawdown, and Sharpe ratio."
        ]
    },`;

const startMarker = '"pm_4": {';
const endMarker = '"pm_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_4: Risk Management 101 - VALIDATION ===');
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
console.log('✓ Successfully updated pm_4!');
