const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "ib_12": {
        title: "Tax Implications",
        content: \`
# Tax Implications: Keeping What You Earn

Benjamin Franklin said only two things are certain: death and taxes. But smart investors understand how to legally minimize taxes and keep more of their returns. The difference between tax-smart and tax-dumb investing can be worth hundreds of thousands of dollars over a lifetime. This lesson covers the essential tax rules every investor must understand.

## Part 1: Capital Gains — The Core Tax

When you sell an investment for more than you paid, you owe [capital gains](/glossary#capital-gains) tax on the profit. The rate depends on how long you held it.

*   **[Cost Basis](/glossary#cost-basis)**: Your original purchase price. This is what you subtract from the sale price to calculate gain.
*   **Short-Term [Capital Gains](/glossary#capital-gains)**: For [assets](/glossary#asset) held less than 1 year. Taxed as ordinary income (10-37% depending on your tax bracket).
*   **Long-Term [Capital Gains](/glossary#capital-gains)**: For [assets](/glossary#asset) held 1 year or longer. Taxed at preferential rates: 0%, 15%, or 20%.
*   **2024 Long-Term Rates**:
    *   0% if income under ~$47,000 (single) or ~$94,000 (married filing jointly)
    *   15% for most middle-class and upper-middle-class investors
    *   20% for highest earners (over ~$518,000 single / ~$583,000 married)
*   **Key Lesson**: HOLD FOR AT LEAST 1 YEAR whenever possible. The tax savings are significant.
*   **Example**: Earn $10,000 profit. Short-term = pay up to $3,700. Long-term = pay $1,500 or less.

## Part 2: Dividends — Qualified vs. Ordinary

Not all [dividends](/glossary#dividend) are taxed the same. Understanding the difference matters.

*   **Qualified [Dividends](/glossary#dividend)**: From US corporations or qualified foreign companies on stocks held 60+ days. Taxed at long-term [capital gains](/glossary#capital-gains) rates (0%, 15%, 20%).
*   **Ordinary [Dividends](/glossary#dividend)**: Everything else — [REITs](/glossary#reit), some foreign [stocks](/glossary#stock), [bonds](/glossary#bond) interest. Taxed as ordinary income (up to 37%).
*   **Why It Matters**: A 3% [dividend yield](/glossary#dividend-yield) on a qualified [dividend](/glossary#dividend) stock keeps ~2.55% after taxes. An ordinary [dividend](/glossary#dividend) might keep only ~1.9%.
*   **REIT Warning**: [REITs](/glossary#reit) pay high [dividends](/glossary#dividend) but they're mostly ordinary income. Consider holding REITs in tax-advantaged accounts.
*   **Your 1099-DIV**: This tax form at year end shows your total [dividends](/glossary#dividend) and separates qualified from ordinary.

## Part 3: Tax-Advantaged Accounts

The government offers special accounts that reduce or eliminate taxes. Use them to the maximum.

*   **[401(k)](/glossary#401k)**: Employer-sponsored. Contributions are pre-tax (reduces taxable income). Grows tax-deferred. Taxed as income when withdrawn in retirement.
*   **Traditional [IRA](/glossary#ira)**: Individual account. Similar to 401(k) — pre-tax contributions, tax-deferred growth, taxed on withdrawal.
*   **Roth [IRA](/glossary#roth-ira)**: Contributions are after-tax (no deduction). Grows TAX-FREE. Withdrawals in retirement are TAX-FREE. Best deal if you expect higher future taxes.
*   **[HSA](/glossary#hsa)**: Health Savings Account. Triple tax benefit — pre-tax contributions, tax-free growth, tax-free withdrawals for medical expenses. The holy grail.
*   **Contribution Limits (2024)**:
    *   [401(k)](/glossary#401k): $23,000 ($30,500 if over 50)
    *   [IRA](/glossary#ira)/[Roth IRA](/glossary#roth-ira): $7,000 ($8,000 if over 50)
    *   [HSA](/glossary#hsa): $4,150 individual / $8,300 family
*   **Priority Order**: 1) [401k](/glossary#401k) match 2) Max [HSA](/glossary#hsa) 3) Max [Roth IRA](/glossary#roth-ira) 4) Max [401k](/glossary#401k) 5) Taxable account

## Part 4: Tax-Loss Harvesting

[Tax-Loss Harvesting](/glossary#tax-loss-harvesting) is a strategy to turn investment losses into tax savings.

*   **What It Is**: Selling investments at a loss to offset [capital gains](/glossary#capital-gains), reducing your tax bill.
*   **How It Works**: You have $5,000 in gains from selling Stock A. You sell Stock B at a $5,000 loss. They cancel out — no tax owed.
*   **Excess Losses**: If losses exceed gains, you can deduct up to $3,000 per year against ordinary income. Remainder carries forward to future years.
*   **The Benefit**: You get a tax deduction while reinvesting in a similar (but not identical) investment to maintain market exposure.
*   **[Wash Sale Rule](/glossary#wash-sale-rule)**: You CANNOT claim the loss if you repurchase the "substantially identical" security within 30 days before or after the sale.
*   **Workaround**: Sell VTI (at a loss) and buy ITOT (different fund, same exposure). Not "substantially identical."

## Part 5: Asset Location Strategy

Asset Location is placing investments in the right account type to minimize taxes.

*   **The Concept**: Different investments generate different types of taxable income. Match them to appropriate accounts.
*   **In Tax-Advantaged Accounts ([401k](/glossary#401k), [IRA](/glossary#ira))**: Hold investments that generate ordinary income:
    *   [Bonds](/glossary#bond) (interest is ordinary income)
    *   [REITs](/glossary#reit) (high ordinary [dividends](/glossary#dividend))
    *   Actively managed funds (high turnover generating short-term gains)
*   **In Taxable Accounts**: Hold tax-efficient investments:
    *   Stock [index funds](/glossary#index-fund) (low turnover, qualified [dividends](/glossary#dividend))
    *   Tax-managed funds
    *   [Municipal bonds](/glossary#muni-bonds) (tax-free interest)
*   **In [Roth IRA](/glossary#roth-ira)**: Hold highest-growth investments:
    *   [Small cap](/glossary#market-cap) [stocks](/glossary#stock) (highest expected growth, all gains tax-free)
    *   Growth stocks
*   **Impact**: Proper asset location can add 0.5-1% to after-tax returns annually.

## Part 6: Net Investment Income Tax (NIIT)

High earners face an additional 3.8% tax on investment income. Know the threshold.

*   **What It Is**: An additional 3.8% Medicare surtax on net investment income for high earners.
*   **Who Pays**: Single filers with Modified AGI over $200,000. Married filing jointly over $250,000.
*   **What's Taxed**: [Capital gains](/glossary#capital-gains), [dividends](/glossary#dividend), interest, rental income, passive business income.
*   **Impact**: Top earners pay 23.8% on long-term [capital gains](/glossary#capital-gains) (20% + 3.8% NIIT) instead of 20%.
*   **Mitigation**: [Tax-loss harvesting](/glossary#tax-loss-harvesting), maximizing retirement accounts, [Roth conversions](/glossary#roth-ira), [municipal bonds](/glossary#muni-bonds).

## Part 7: Cost Basis Methods

When you sell shares, you must determine which shares you're selling for tax purposes.

*   **[FIFO](/glossary#fifo) (First In, First Out)**: Sell oldest shares first. Default method. May result in larger gains (older shares often have larger gains).
*   **Specific Identification**: Choose exactly which shares to sell. Allows tax optimization. Requires good record-keeping.
*   **Average Cost**: Average all purchase prices. Only allowed for [mutual funds](/glossary#mutual-fund), not individual [stocks](/glossary#stock).
*   **Tax-Optimized Strategy**: Sell highest-cost shares first to minimize gains (or maximize losses). This is why specific identification is powerful.
*   **Broker Help**: Most brokers now offer automatic tax-lot optimization. Enable this feature.

## Part 8: State Taxes

Federal taxes aren't the only taxes. State taxes add another layer.

*   **No State Income Tax**: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming (NH no tax on wages/salaries but taxes [dividends](/glossary#dividend))
*   **High State Tax States**: California (13.3%), New York (10.9%), New Jersey (10.75%). Combined top rate can exceed 50%.
*   **[Capital Gains](/glossary#capital-gains) Treatment**: Some states tax [capital gains](/glossary#capital-gains) as ordinary income (California). Others have preferential rates or exemptions.
*   **[Municipal Bonds](/glossary#muni-bonds)**: Interest from your own state's [muni bonds](/glossary#muni-bonds) is usually exempt from both federal AND state taxes. Double tax-free.
*   **Retirement Account Taxation**: Some states don't tax retirement income. Consider this when planning where to retire.

## Part 9: Key Tax Strategies Summary

Here's your tax-smart investing checklist:

1.  **Hold 1+ Year**: Always trigger long-term [capital gains](/glossary#capital-gains) rates when possible.
2.  **Max Retirement Accounts**: [401k](/glossary#401k) match → [HSA](/glossary#hsa) → [Roth IRA](/glossary#roth-ira) → [401k](/glossary#401k) max.
3.  **Use Asset Location**: [Bonds](/glossary#bond) in tax-advantaged, [stocks](/glossary#stock) in taxable.
4.  **[Tax-Loss Harvest](/glossary#tax-loss-harvesting)**: Annually review for loss harvesting opportunities. Avoid [wash sales](/glossary#wash-sale-rule).
5.  **Choose Tax-Efficient Funds**: Low turnover [index funds](/glossary#index-fund) generate fewer taxable events.
6.  **[Roth](/glossary#roth-ira) Conversions**: Consider converting Traditional IRA to Roth in low-income years.
7.  **Keep Records**: Track [cost basis](/glossary#cost-basis), purchases, and sales. Your broker's records may not be complete.
*   **Professional Help**: For complex situations (business owners, high [net worth](/glossary#net-worth), inheritances), a tax advisor can pay for themselves many times over.
*   **The Bottom Line**: Tax-smart investing can add 1-2% to your after-tax returns annually. Over 30 years, that's hundreds of thousands of dollars.
\`,
        keyTakeaways: [
            "Hold investments 1+ year for preferential long-term capital gains rates.",
            "Maximize tax-advantaged accounts in order: 401k match → HSA → Roth IRA → 401k max.",
            "Tax-loss harvest to offset gains — but beware the 30-day wash sale rule.",
            "Asset location matters — put bonds in tax-advantaged accounts, stocks in taxable."
        ]
    },`;

const startMarker = '"ib_12": {';
const endMarker = '"sm_1": {';  // Next module starts here
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== ib_12: Tax Implications - VALIDATION ===');
console.log('Character Count:', charCount, charCount >= 6000 ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');
if (charCount < 6000 || partCount < 5 || partCount > 9) { console.log('FAILED'); process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n// Module 3: Stock Market Deep Dive\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated ib_12!');
console.log('\n=== ALL MODULE 2 LESSONS UPDATED SUCCESSFULLY! ===');
