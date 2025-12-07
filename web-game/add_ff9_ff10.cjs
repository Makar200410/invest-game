const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const lessons = {
    ff_9: {
        title: "Risk Management",
        content: `
# Protecting Your Wealth: Risk Management Essentials

[Risk](/glossary#risk) is the price of returns. Without [risk](/glossary#risk), there is no reward. But unmanaged [risk](/glossary#risk) is gambling. Smart investors don't avoid [risk](/glossary#risk) — they understand it, measure it, and control it.

## Part 1: Types of Risk

Not all risks are equal:
*   **Systematic [Risk](/glossary#risk)** (Market Risk): Affects everything. [Recessions](/glossary#recession), wars, pandemics. Cannot be diversified away.
*   **Unsystematic [Risk](/glossary#risk)**: Company-specific. Bad CEO, fraud, product failure. CAN be diversified away.
*   **[Inflation](/glossary#inflation) [Risk](/glossary#risk)**: Your returns don't beat rising prices.
*   **[Liquidity](/glossary#liquidity) [Risk](/glossary#risk)**: Can't sell when you need to.
*   **Currency [Risk](/glossary#risk)**: Exchange rates move against you.

[Diversification](/glossary#diversification) eliminates unsystematic [risk](/glossary#risk) but not systematic [risk](/glossary#risk).

## Part 2: Risk Tolerance vs. Risk Capacity

Two different concepts:
*   **[Risk Tolerance](/glossary#risk-tolerance)**: Emotional — can you sleep when [portfolio](/glossary#portfolio) drops 30%?
*   **[Risk Capacity](/glossary#risk-capacity)**: Financial — can you afford to lose 30%?

A retiree might have high tolerance but low capacity. A young professional might have low tolerance but high capacity. Your investments should match BOTH.

## Part 3: Measuring Risk

*   **Standard Deviation**: How much returns vary from average. Higher = more [volatile](/glossary#volatility).
*   **Beta**: Measures [volatility](/glossary#volatility) relative to market. Beta 1.5 = 50% more [volatile](/glossary#volatility) than market.
*   **[Sharpe Ratio](/glossary#sharpe-ratio)**: Risk-adjusted return. Higher = better return per unit of [risk](/glossary#risk).
*   **Maximum Drawdown**: Worst peak-to-trough loss. The real [risk](/glossary#risk) you feel.

## Part 4: Diversification — The Only Free Lunch

Harry Markowitz proved [diversification](/glossary#diversification) is the only free lunch in investing:
*   Hold 20-30 [stocks](/glossary#stock) minimum to eliminate company-specific [risk](/glossary#risk)
*   Mix [asset](/glossary#asset) classes: [stocks](/glossary#stock), [bonds](/glossary#bond), real estate
*   Mix geographies: US, international, emerging markets
*   [Correlation](/glossary#correlation) matters: Assets that don't move together reduce [portfolio](/glossary#portfolio) [volatility](/glossary#volatility)

Warning: In crashes, correlations rise. Everything falls together.

## Part 5: Position Sizing

How much to put in any single investment:
*   **2% Rule**: Never risk more than 2% of [portfolio](/glossary#portfolio) on one trade
*   **10% Max**: No single [stock](/glossary#stock) should exceed 10% of [portfolio](/glossary#portfolio)
*   **[Leverage](/glossary#leverage) Kills**: Borrowed money amplifies both gains AND losses

The goal isn't maximum returns. It's maximum returns you can actually hold through [volatility](/glossary#volatility).

## Part 6: Stop Losses and Hedging

Protection mechanisms:
*   **Stop Loss**: Automatic sell order if price drops below threshold
*   **[Hedge](/glossary#hedge)**: Opposite position that profits when main position loses
*   **Options**: Insurance policies for your [portfolio](/glossary#portfolio)

[Hedging](/glossary#hedge) has costs. Over-hedging destroys returns. Under-hedging risks ruin.

## Part 7: The Psychology of Risk

Your biggest [risk](/glossary#risk) is yourself:
*   **Panic selling** locks in losses
*   **Overconfidence** after wins leads to excessive [risk](/glossary#risk)
*   **Recency bias** makes recent events feel permanent
*   **Loss aversion** makes losses hurt 2x more than equivalent gains feel good

Have a written investment plan. Follow it when emotions scream otherwise.
`,
        keyTakeaways: [
            "Systematic risk affects everything; unsystematic risk can be diversified away.",
            "Risk tolerance (emotional) and risk capacity (financial) are different.",
            "Diversification is the only free lunch — hold 20-30+ positions.",
            "Never risk more than 2% of portfolio on a single trade.",
            "Your biggest risk is yourself — have a plan and follow it."
        ]
    },
    ff_10: {
        title: "Building Your First Portfolio",
        content: `
# From Zero to Invested: Building Your First Portfolio

Theory is useless without action. This lesson provides a concrete roadmap to build your first investment [portfolio](/glossary#portfolio), step by step.

## Part 1: Open a Brokerage Account

Choose a platform based on your needs:
*   **Fidelity, Schwab, Vanguard**: Best for long-term investors. No fees. Great [index funds](/glossary#index-fund).
*   **Robinhood, Webull**: Best for beginners. Simple interface. Be careful of gamification.
*   **Interactive Brokers**: Best for advanced traders. Lowest fees for active trading.

Requirements: Social Security number, government ID, bank account for transfers.

## Part 2: Emergency Fund First

Before investing, secure your foundation:
*   **3-6 months expenses** in high-yield savings account
*   Not invested — this is insurance, not investment
*   This prevents forced selling during emergencies

Never invest money you might need in less than 5 years.

## Part 3: The Three-Fund Portfolio

The simplest effective [portfolio](/glossary#portfolio):
*   **Total US Stock Market [Index Fund](/glossary#index-fund)** (e.g., VTI, FXAIX): ~60%
*   **Total International Stock [Index Fund](/glossary#index-fund)** (e.g., VXUS): ~20%
*   **Total [Bond](/glossary#bond) Market [Index Fund](/glossary#index-fund)** (e.g., BND): ~20%

This gives you instant [diversification](/glossary#diversification) across thousands of securities for near-zero cost. Adjust percentages based on age and [risk tolerance](/glossary#risk-tolerance).

## Part 4: Asset Allocation by Age

A simple rule of thumb:
*   **Age in [bonds](/glossary#bond)**: If you're 30, hold 30% [bonds](/glossary#bond), 70% [stocks](/glossary#stock)
*   **Age minus 10 in [bonds](/glossary#bond)**: More aggressive version for young investors  
*   **Target Date Funds**: Automatically adjust as you age

Younger = more [stocks](/glossary#stock) (time to recover from crashes). Older = more [bonds](/glossary#bond) (preserve what you have).

## Part 5: Tax-Advantaged Accounts

Maximize these before taxable accounts:
1.  **401(k)**: Contribute at least enough to get full employer match (free money!)
2.  **[Roth IRA](/glossary#roth-ira)**: $7,000/year limit (2024). Tax-free growth forever.
3.  **Traditional IRA**: Pre-tax contributions if no 401(k) access.
4.  **HSA**: If eligible, triple tax advantage. Best account in tax code.

Order of priority: 401(k) match → [Roth IRA](/glossary#roth-ira) → 401(k) max → Taxable.

## Part 6: Dollar-Cost Averaging

Don't try to time the market. Invest consistently:
*   **Set automatic transfers** on payday
*   **Same amount every month** regardless of market
*   **[DCA](/glossary#dollar-cost-averaging)** reduces impact of [volatility](/glossary#volatility) — you buy more shares when cheap, fewer when expensive

Time in market beats timing the market. Consistency beats timing.

## Part 7: Rebalancing

Over time, winners grow and losers shrink, changing your allocation:
*   **Annual [rebalancing](/glossary#rebalancing)**: Check once per year, adjust if allocation drifts >5%
*   **Threshold [rebalancing](/glossary#rebalancing)**: Rebalance whenever any [asset](/glossary#asset) class moves >5% from target
*   **Use new contributions**: Direct new money to underweight assets

[Rebalancing](/glossary#rebalancing) forces you to buy low and sell high automatically.
`,
        keyTakeaways: [
            "Emergency fund of 3-6 months expenses before investing.",
            "Three-Fund Portfolio: US stocks + International stocks + Bonds.",
            "Maximize tax-advantaged accounts before taxable accounts.",
            "Dollar-cost average: invest consistently, don't time the market.",
            "Rebalance annually to maintain target allocation."
        ]
    }
};

const ff8End = content.indexOf('"ff_8":');
if (ff8End === -1) { console.error('Could not find ff_8'); process.exit(1); }
const ff8CloseMatch = content.indexOf('    },', content.indexOf('keyTakeaways:', ff8End));
const insertPoint = ff8CloseMatch + 6;

let insertContent = '\n';
for (const [id, lesson] of Object.entries(lessons)) {
    insertContent += `    "${id}": {
        title: "${lesson.title}",
        content: \`${lesson.content}
        \`,
        keyTakeaways: [
            "${lesson.keyTakeaways.join('",\n            "')}"
        ]
    },
`;
}

content = content.substring(0, insertPoint) + insertContent + content.substring(insertPoint);
fs.writeFileSync(filePath, content);
console.log('Added ff_9 and ff_10');
