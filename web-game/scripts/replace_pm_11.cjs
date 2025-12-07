const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "pm_11": {
        title: "Tax-Loss Harvesting",
        content: \`
# Tax-Loss Harvesting: Turning Losses into Tax Savings

**Tax-loss harvesting** is the strategy of selling investments at a loss to offset capital gains and reduce your tax bill. It's one of the few ways investors can extract value from losing positions. While you can't control market returns, you can control your tax liability—and tax-loss harvesting is a powerful tool for doing so.

## Part 1: What Is Tax-Loss Harvesting?

Tax-loss harvesting turns paper losses into tax deductions.

*   **Definition**: Selling an investment at a loss, realizing that loss for tax purposes, and using it to offset gains.
*   **How It Works**:
    1. You sell a losing investment, realizing a capital loss.
    2. That loss offsets capital gains from other investments.
    3. Net result: lower taxable gains, lower tax bill.
*   **Excess Losses**: If losses exceed gains, you can deduct up to $3,000/year against ordinary income (US rules). Remaining losses carry forward to future years indefinitely.
*   **Stay Invested**: After selling, you typically buy a similar (but not "substantially identical") investment to maintain market exposure.
*   **Example**:
    *   You have $20,000 in [stock](/glossary#stock) gains this year.
    *   You also have $10,000 in unrealized losses in another [stock](/glossary#stock).
    *   Sell the loser, realize the $10,000 loss.
    *   Taxable gains now = $20,000 - $10,000 = $10,000.
    *   You've cut your tax bill significantly.

## Part 2: The Tax Benefits

Understanding the math of tax savings.

*   **Short-Term vs. Long-Term Gains**: Short-term gains (held < 1 year) are taxed as ordinary income (up to 37% in the US). Long-term gains have lower rates (0%, 15%, or 20%).
*   **Offsetting Priority**: Losses first offset gains of the same type. Short-term losses offset short-term gains; long-term offset long-term. Excess can cross over.
*   **Savings Calculation**:
    *   $10,000 loss × 37% tax rate = $3,700 saved (if offsetting short-term gains).
    *   $10,000 loss × 20% tax rate = $2,000 saved (if offsetting long-term gains).
*   **$3,000 Ordinary Income Deduction**: If losses exceed gains, deduct up to $3,000 against wages or other income.
*   **Carry Forward**: Unused losses carry forward indefinitely. Large losses in a bad year can offset gains for many years.
*   **Compounding Benefit**: Tax savings can be reinvested, compounding over time.

## Part 3: The Wash Sale Rule

The IRS prevents harvesting losses without truly exiting a position.

*   **Definition**: The wash sale rule disallows a loss if you buy a "substantially identical" security within 30 days before or after the sale.
*   **61-Day Window**: You must wait 31 days to repurchase the same security (30 before + sale + 30 after = 61 days).
*   **"Substantially Identical"**: The same [stock](/glossary#stock) or [bond](/glossary#bond). Also applies to [options](/glossary#options) on the same security.
*   **What's Allowed**:
    *   Sell S&P 500 [ETF](/glossary#etf), buy a total market [ETF](/glossary#etf)—different, not substantially identical.
    *   Sell Apple [stock](/glossary#stock), buy Microsoft [stock](/glossary#stock)—different companies.
    *   Sell a growth [ETF](/glossary#etf), buy a value [ETF](/glossary#etf)—different style.
*   **What's NOT Allowed**:
    *   Sell SPY, buy IVV after 15 days—both track the S&P 500, arguably substantially identical.
    *   Sell [stock](/glossary#stock), buy it back within 30 days.
*   **Consequence of Violation**: The loss is disallowed. Its added to the replacement position's cost basis (you'll benefit when you eventually sell for good).
*   **Across Accounts**: The wash sale rule applies across all your accounts, including IRAs.

## Part 4: Implementing Tax-Loss Harvesting

How to execute the strategy effectively.

### Step-by-Step Process
1.  **Identify Losses**: Review your portfolio for positions with unrealized losses.
2.  **Calculate Benefit**: How much would harvesting this loss save? (Loss × tax rate)
3.  **Check Holding Period**: Is it a short-term or long-term loss? Long-term losses are more valuable against long-term gains.
4.  **Sell the Loser**: Place the sale order to realize the loss.
5.  **Buy a Replacement**: Immediately buy a similar but not identical investment to maintain exposure.
6.  **Wait 31 Days**: If you want to repurchase the identical security, wait the full period.
7.  **Document**: Keep records for tax reporting.

### Finding Replacement Investments
*   If you sell an S&P 500 [ETF](/glossary#etf), buy a total market [ETF](/glossary#etf) or a different S&P 500 [ETF](/glossary#etf) (careful—the latter may trigger wash sale).
*   If you sell a tech [stock](/glossary#stock), buy a tech [ETF](/glossary#etf) or different tech [stock](/glossary#stock).
*   The goal: maintain similar market exposure while complying with wash sale rules.

### Timing
*   Year-end is common for tax-loss harvesting.
*   But opportunities exist year-round. Market dips create harvesting opportunities.
*   Robo-advisors often harvest losses automatically throughout the year.

## Part 5: When Tax-Loss Harvesting Makes Sense

Not every loss is worth harvesting.

### Good Candidates for Harvesting
*   Significant losses that will generate meaningful tax savings.
*   Short-term losses that can offset short-term gains (taxed at higher rates).
*   Positions you wanted to exit anyway.
*   [Assets](/glossary#asset) with similar replacements available (to maintain exposure).

### Poor Candidates for Harvesting
*   Small losses where transaction costs exceed tax benefit.
*   Positions you strongly want to hold (replacement may not be identical).
*   When you have little or no gains to offset.
*   In tax-advantaged accounts (IRAs, 401(k)s)—no taxable gains there anyway.

### Considerations
*   **Transaction Costs**: Commissions and bid/ask [spreads](/glossary#spread) reduce benefit.
*   **Cost Basis Reset**: If you buy back, your cost basis resets to the new purchase price. Future gains may be larger.
*   **Long-Term Holding Plans**: If you plan to hold forever and bequeath, the step-up in basis at death may make harvesting unnecessary.

## Part 6: Automated Tax-Loss Harvesting

Technology has made tax-loss harvesting accessible to everyone.

*   **Robo-Advisors**: Services like Betterment, Wealthfront, and Schwab Intelligent Portfolios automatically harvest losses throughout the year.
*   **How They Work**:
    *   Monitor portfolios daily for harvesting opportunities.
    *   Sell losers, buy similar replacement investments.
    *   Track wash sale rules automatically.
*   **Frequency**: Automated systems harvest more frequently—capturing small losses that humans might miss.
*   **Reported Benefits**: Robo-advisors claim to add 0.5%-1.5% annually through tax-loss harvesting (though the actual benefit varies by investor situation).
*   **DIY vs. Automated**: For small portfolios, DIY is fine. Larger portfolios benefit from automated, continuous monitoring.
*   **Coordination**: If using multiple accounts, ensure harvesting in one doesn't trigger wash sales in another.

## Part 7: Common Mistakes to Avoid

Tax-loss harvesting requires care.

*   **Triggering Wash Sales**: Buying back the same security within 30 days negates the loss.
*   **Forgetting IRAs**: Purchasing a security in your IRA after selling in taxable can trigger a wash sale.
*   **Ignoring Transaction Costs**: Small losses may not be worth it after costs.
*   **Resetting Basis to Lower Amount**: Buying back at a lower price resets your basis lower—future gains will be larger.
*   **Harvesting for No Benefit**: If you have no gains to offset and losses exceed $3,000, additional harvesting provides no immediate benefit (though losses carry forward).
*   **Sacrificing Investment Quality**: Don't sell a great investment just to harvest a loss. Tax tail shouldn't wag the investment dog.
*   **Poor Record Keeping**: Losing track of cost basis and wash sales can create problems at tax time.

Tax-loss harvesting is a disciplined practice that turns the pain of losses into tax savings. Done correctly, it can add meaningful value over time—especially for investors in high tax brackets with significant taxable accounts.
\`,
        keyTakeaways: [
            "Tax-loss harvesting sells losers to realize losses that offset gains and reduce taxes.",
            "Wash sale rule: can't buy 'substantially identical' securities within 30 days before or after sale.",
            "Short-term losses are most valuable—they offset short-term gains taxed at higher rates.",
            "Buy similar but not identical investments to maintain market exposure after selling.",
            "Robo-advisors automate harvesting throughout the year, capturing more opportunities."
        ]
    },`;

const startMarker = '"pm_11": {';
const endMarker = '"pm_12": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== pm_11: Tax-Loss Harvesting - VALIDATION ===');
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
console.log('✓ Successfully updated pm_11!');
