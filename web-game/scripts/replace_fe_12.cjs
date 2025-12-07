const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_12": {
        title: "Building a Fund Portfolio",
        content: \`
# Building a Fund Portfolio: Putting It All Together

You now understand Mutual Funds, ETFs, Indexing, Factors, and Asset Classes. It's time to build the machine. A well-constructed portfolio is greater than the sum of its parts. It balances risk and reward, minimizes fees, and aligns with your specific goals. This lesson provides the blueprints for proven portfolio models you can copy or adapt.

## Part 1: The Core Principles

Before picking tickers, adhere to these four pillars.

1.  **Asset Allocation**: The mix of Stocks vs. Bonds determines 90% of your variance.
    *   *Aggressive*: 90/10 or 100/0. For young investors with 30+ years.
    *   *Moderate*: 60/40. The classic balanced portfolio.
    *   *Conservative*: 30/70. For retirees living off income.
2.  **Diversification**: Own everything. US, International, Emerging Markets, Small Caps, Bonds. Don't bet on one country or sector.
3.  **Cost Control**: Keep the total expense ratio under 0.10%. Fees are the enemy.
4.  **Simplicity**: Complexity is not a virtue. A 3-fund portfolio often beats a 20-fund portfolio because you are less likely to tinker with it.

## Part 2: The Boglehead 3-Fund Portfolio

The gold standard for passive investors. Popularized by the Bogleheads community (followers of Jack Bogle).

*   **The Components**:
    1.  **Total US Stock Market** (VTI or VTSAX).
    2.  **Total International Stock Market** (VXUS or VTIAX).
    3.  **Total Bond Market** (BND or VBTLX).
*   **The Logic**: You own every public company in the world (~10,000 stocks) and the entire investment-grade bond market.
*   **The Allocation**:
    *   *Stocks/Bonds*: Set by age/risk (e.g., Age-20 in bonds).
    *   *US/Intl*: Market cap weight is ~60/40. Many prefer 80/20 for "home bias."
*   **Why It Wins**: Maximum diversification, near-zero fees, tax-efficient, impossible to underperform the market average. It beats 90% of pros.

## Part 3: The 2-Fund Portfolio (Global)

For those who want even more simplicity. One fund for stocks, one for bonds.

*   **The Components**:
    1.  **Total World Stock Market** (VT).
    2.  **Total World Bond Market** (BNDW).
*   **The Logic**: VT automatically rebalances between US and International stocks for you based on market cap. You make one decision: Stocks vs. Bonds.
*   **Pros**: No need to debate US vs. International performance. You just own "Earth."
*   **Cons**: You lose the foreign tax credit (a minor tax break) compared to holding VXUS separately.
*   **The 1-Fund Option**: A Target Date Fund holds both and rebalances for you. The ultimate "set it and forget it."

## Part 4: The "Core and Satellite" Approach

For those who want to scratch the itch of active investing without ruining their future.

*   **The Core (80-90%)**: The 3-Fund Portfolio (VTI + VXUS + BND). This is the "boring" foundation that ensures you retire wealthy.
*   **The Satellite (10-20%)**: High-conviction bets.
    *   *Sector*: Tech (XLK), Energy (XLE).
    *   *Theme*: Clean Energy (ICLN), Crypto (IBIT).
    *   *Factor*: Small Cap Value (VBR).
    *   *Individual Stocks*: Apple, Tesla, etc.
*   **The Rule**: If the satellites go to zero, your retirement is still safe. The Core protects you from your own mistakes. It satisfies the gambling urge safely.

## Part 5: The "Swensen Model" (Yale Endowment)

Adapted for retail investors by David Swensen. Focuses on real assets.

*   **The Allocation**:
    *   30% US Stocks (VTI)
    *   15% International Developed (VEA)
    *   5% Emerging Markets (VWO)
    *   20% Real Estate (VNQ)
    *   15% US Treasuries (GOVT)
    *   15% TIPS (TIP)
*   **The Logic**: Heavy weighting to Real Estate and TIPS provides better inflation protection than the standard 60/40.
*   **Pros**: Excellent diversification against inflation.
*   **Cons**: REITs are tax-inefficient (hold in IRA). TIPS can drag returns in low-inflation times.

## Part 6: The "All Weather" Portfolio

Ray Dalio's strategy designed to perform in any economic environment (Inflation, Deflation, Growth, Recession).

*   **The Allocation**:
    *   30% Stocks (VTI)
    *   40% Long-Term Treasuries (TLT)
    *   15% Intermediate Treasuries (IEI)
    *   7.5% Gold (GLD)
    *   7.5% Commodities (DBC)
*   **The Logic**: Stocks do well in growth. Bonds do well in deflation/recession. Gold/Commodities do well in inflation.
*   **Pros**: Extremely low volatility. You sleep well at night.
*   **Cons**: Lower long-term returns than a stock-heavy portfolio. Best for retirees or risk-averse investors who can't handle a 50% drop.

## Part 7: Rebalancing

The maintenance schedule for your machine.

*   **Why**: Over time, winners grow and losers shrink. Your 60/40 portfolio becomes 80/20. You are taking more risk than you intended.
*   **How**: Sell the asset that is overweight (high) and buy the asset that is underweight (low).
*   **The Magic**: Rebalancing forces you to "Buy Low, Sell High" systematically, without emotion.
*   **Frequency**:
    *   *Time-based*: Once a year (e.g., on your birthday).
    *   *Threshold-based*: When an asset drifts by 5% (e.g., 60% becomes 65%).
*   **Tax Tip**: In taxable accounts, try to rebalance by adding *new money* to the laggard rather than selling the winner (to avoid taxes).

## Part 8: Asset Location

Where you put the funds matters as much as which funds you pick.

*   **Taxable Brokerage**:
    *   *Best*: Broad Index ETFs (VTI, VXUS). They are tax-efficient (low turnover, few distributions).
    *   *Avoid*: REITs, Bond Funds, Active Funds.
*   **Traditional IRA / 401(k)** (Tax-Deferred):
    *   *Best*: Bond Funds (BND), REITs (VNQ), Active Funds. You don't pay tax on the dividends/interest until withdrawal.
*   **Roth IRA** (Tax-Free):
    *   *Best*: High-growth assets (Small Cap Value, Emerging Markets, Stocks). You want the asset with the highest expected return here because all growth is tax-free forever.

## Part 9: Robo-Advisors and Target Date Funds

Automating the process entirely.

*   **Target Date Funds (TDFs)**: A "fund of funds" that automatically becomes more conservative as you age.
    *   *Pros*: Zero effort. Professional allocation.
    *   *Cons*: Slightly higher fees (0.08% - 0.15%). Can be too conservative for some.
*   **Robo-Advisors**: Services like Betterment or Wealthfront.
    *   *Pros*: Automatic rebalancing, tax-loss harvesting (a huge benefit), slick interface.
    *   *Cons*: Management fee (0.25%) on top of ETF fees.
*   **Verdict**: If you can't be trusted to rebalance yourself, pay the 0.25%. It's cheaper than making a mistake.

## Part 10: Behavioral Finance: The Final Boss

The biggest enemy of your portfolio is looking back at you in the mirror.

*   **Loss Aversion**: The pain of losing $1,000 is twice as intense as the joy of gaining $1,000. This causes investors to sell at the bottom.
*   **Recency Bias**: Assuming the recent past will continue forever. "Tech stocks only go up" (2021) or "Stocks are dead" (2009).
*   **Action Bias**: The feeling that you must "do something" when the market is volatile. Usually, the best action is to do nothing.
*   **The Solution**: Write an "Investment Policy Statement" (IPS). A contract with yourself stating your asset allocation and rules. When panic strikes, read it.

## Part 11: Summary and Final Checklist

You are ready to build.

1.  **Choose Your Model**: 3-Fund? Core & Satellite? All Weather? Pick one that fits your risk tolerance.
2.  **Select the ETFs**: Use the low-cost leaders (Vanguard, iShares, Schwab).
3.  **Open the Accounts**: Roth IRA first, then 401(k) match, then Taxable.
4.  **Automate**: Set up monthly transfers. Automation is the key to wealth.
5.  **Ignore the Noise**: The market will crash. The news will be bad. Your portfolio is built to handle it.
6.  **Stay the Course**: The perfect portfolio you abandon is worse than the average portfolio you stick with. Time in the market beats timing the market.
\`,
        keyTakeaways: [
            "A portfolio is a system, not a collection of random picks.",
            "The '3-Fund Portfolio' (US Stocks, Intl Stocks, Bonds) is the gold standard.",
            "Asset Location (Taxable vs. IRA) saves money on taxes.",
            "Rebalancing forces you to buy low and sell high automatically."
        ]
    },`;

const marker = '"fe_11":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fe_11 not found'); process.exit(1); }

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

if (endIdx === -1) { console.error('fe_11 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_12: Portfolio Building - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 11) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 11) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n\n    ' + after, 'utf8');
console.log('✓ Added fe_12!');
console.log('\n=== ALL MODULE 5 LESSONS (fe_1 - fe_12) COMPLETE! ===');
