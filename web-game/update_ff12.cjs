const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newContent = `
# The Biggest Expense of Your Life

You will spend more money on taxes than on food, housing, and cars combined. Yet, most people don't understand how they work.
The government is your "Silent Partner." They take a cut of everything you make, spend, and own.
*   **Earn Money**: Income Tax.
*   **Spend Money**: Sales Tax.
*   **Own Property**: Property Tax.
*   **Sell Assets**: Capital Gains Tax.
*   **Die**: Estate Tax.
If you don't have a tax strategy, you are leaking wealth.

## Part 1: How Tax Brackets Actually Work
*   **The Myth**: "If I get a raise, I will move into a higher tax bracket and make less money!"
*   **The Truth**: The US has a **Progressive Tax System**.
    *   *Example*:
        *   0 - $10k: Taxed at 10%.
        *   $10k - $40k: Taxed at 12%.
        *   $40k+: Taxed at 22%.
    *   If you make $41k, only the *last* $1,000 is taxed at 22%. The first $10k is still taxed at 10%.
    *   *Lesson*: **Always take the raise.**

## Part 2: Marginal vs. Effective Tax Rate
*   **Marginal Rate**: The tax rate on your *last* dollar earned (e.g., 22%). This tells you the cost of earning more.
*   **Effective Rate**: The actual percentage of your total income that goes to the IRS (e.g., 14%). This is your "Blended" rate.
*   *Why it matters*: When making decisions (like working overtime), look at your Marginal Rate. When budgeting, look at your Effective Rate.

## Part 3: Types of Taxes
1.  **Income Tax**: Federal and State. The big one.
2.  **FICA (Payroll Tax)**: 7.65% of your paycheck goes to Social Security and Medicare. Your employer pays another 7.65%. (Self-employed people pay both = 15.3%).
3.  **Sales Tax**: Consumption tax. Varies by state (0% in Oregon, 10% in California).
4.  **Property Tax**: Tax on real estate. Funds schools and roads.
5.  **Capital Gains Tax**: Tax on profit from selling assets (Stocks, Real Estate, Crypto).

## Part 4: Deductions vs. Credits
*   **Tax Deduction**: Lowers your *Taxable Income*.
    *   *Example*: You make $50k. You have a $1,000 deduction. You are taxed as if you made $49k.
    *   *Value*: If you are in the 22% bracket, a $1,000 deduction saves you **$220**.
*   **Tax Credit**: Lowers your *Tax Bill* directly.
    *   *Example*: You owe the IRS $5,000. You have a $1,000 credit. Now you owe $4,000.
    *   *Value*: A $1,000 credit saves you **$1,000**.
    *   *Lesson*: Credits are far more valuable than deductions.

## Part 5: The Power of Tax-Advantaged Accounts
The government gives you "Tax Shelters" to encourage saving. Use them.
1.  **401(k) / Traditional IRA (Pre-Tax)**:
    *   You contribute money *before* taxes.
    *   Benefit: Lowers your taxes today.
    *   Cost: You pay taxes when you withdraw (in retirement).
    *   *Best for*: High earners who want to lower their current tax bill.
2.  **Roth IRA / Roth 401(k) (Post-Tax)**:
    *   You contribute money *after* taxes.
    *   Benefit: You pay **$0 taxes** when you withdraw. Growth is tax-free.
    *   *Best for*: Young people or low earners. (Pay the low tax now, enjoy tax-free millions later).
3.  **HSA (Health Savings Account)**: The Triple Threat.
    *   Tax-deductible contributions.
    *   Tax-free growth.
    *   Tax-free withdrawals for medical expenses.
    *   *Strategy*: Pay medical bills out of pocket and let the HSA grow as a "Stealth IRA."

## Part 6: Capital Gains: The Rich Person's Tax
Rich people don't pay Income Tax; they pay Capital Gains Tax.
*   **Short-Term Capital Gains**: Assets held for < 1 year.
    *   Taxed as Ordinary Income (up to 37%).
*   **Long-Term Capital Gains**: Assets held for > 1 year.
    *   Taxed at 0%, 15%, or 20%.
*   **The Strategy**: Never sell an asset in less than 366 days unless you have to. Holding for one extra day can save you 17% in taxes.

## Part 7: Tax Loss Harvesting
Turn your losers into winners.
*   **Scenario**: You bought Apple for $10k. It's now worth $12k (+$2k gain). You bought Tesla for $10k. It's now worth $8k (-$2k loss).
*   **Action**: Sell Tesla to realize the $2k loss.
*   **Benefit**: The $2k loss cancels out the $2k gain. You pay $0 tax.
*   **Bonus**: You can deduct up to $3,000 of net losses against your ordinary income (job salary).
*   **Warning**: The **Wash Sale Rule**. You cannot buy the same stock back within 30 days, or the loss is disallowed.

## Part 8: The "Step-Up in Basis" Loophole
How generational wealth is passed tax-free.
*   **Scenario**: Grandpa bought Amazon stock for $1. It's now worth $1,000.
*   **If he sells**: He pays tax on the $999 gain.
*   **If he dies**: He leaves the stock to you. The "Cost Basis" steps up to $1,000.
*   **Result**: You can sell it immediately for $1,000 and pay **$0 tax**.
*   *Motto*: "Buy, Borrow, Die."

## Part 9: Location Arbitrage
Where you live determines how much you keep.
*   **High Tax States**: California (13.3%), New York (10.9%).
*   **Zero Tax States**: Texas, Florida, Nevada, Washington, Tennessee.
*   **The Trade-off**: High tax states often have higher salaries. Do the math. Making $200k in CA might be worse than $150k in TX.

## Part 10: Tax Refunds: Why They Are Bad
Getting a big refund check feels good. It shouldn't.
*   **The Reality**: A refund means you overpaid the government. You gave them an interest-free loan for 12 months.
*   **The Fix**: Adjust your **W-4** form at work. Lower your withholding.
*   **Goal**: Break even. Owe nothing, get nothing. Keep your money in your pocket all year and invest it.

## Part 11: Business Expenses (Side Hustles)
The tax code is written for business owners.
*   **Employee (W-2)**: Earn -> Tax -> Spend.
*   **Business Owner**: Earn -> Spend -> Tax.
*   **Deductions**: If you have a side hustle (Uber, Etsy, Consulting), you can deduct "ordinary and necessary" expenses.
    *   Laptop, Home Office portion, Internet, Phone, Car mileage.
    *   This lowers your taxable income significantly.

## Conclusion
Taxes are complex, but ignoring them is expensive. You don't need to be a CPA, but you need to understand the rules of the game. A dollar saved in taxes is worth more than a dollar earned (because you don't have to pay tax on the savings).
`;

const keyTakeaways = [
    "Understand Marginal vs. Effective Tax Rates.",
    "Use Tax-Advantaged Accounts (401k, Roth IRA, HSA).",
    "Hold assets for >1 year to pay lower Capital Gains Tax.",
    "Tax Deductions lower income; Tax Credits lower tax bills.",
    "Don't celebrate a tax refund; it's an interest-free loan to the IRS."
];

// Find ff_12 start
const ff12Start = content.indexOf('"ff_12": {');
if (ff12Start === -1) {
    console.error('ff_12 not found');
    process.exit(1);
}

// Find content start within ff_12
const contentStart = content.indexOf('content: `', ff12Start);
if (contentStart === -1) {
    console.error('content start not found');
    process.exit(1);
}

// Find content end (the backtick)
const contentEnd = content.indexOf('`,', contentStart);
if (contentEnd === -1) {
    console.error('content end not found');
    process.exit(1);
}

// Find keyTakeaways start
const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentEnd);
if (keyTakeawaysStart === -1) {
    console.error('keyTakeaways start not found');
    process.exit(1);
}

// Find keyTakeaways end
const keyTakeawaysEnd = content.indexOf(']', keyTakeawaysStart);
if (keyTakeawaysEnd === -1) {
    console.error('keyTakeaways end not found');
    process.exit(1);
}

// Construct new file content
const beforeContent = content.substring(0, contentStart + 10); // include 'content: `'
// Note: we need to handle the backtick in the new content carefully. The newContent variable above is a string, so we can just use it.
// But wait, the newContent string in this script is delimited by backticks.
// I need to be careful about the backticks in the file.
// The file has `content: \`...\`,`
// My newContent variable has the text.

const afterContent = content.substring(contentEnd);

// Replace content
let updatedContent = beforeContent + newContent + afterContent;

// Now replace keyTakeaways
// We need to find the new positions because the string length changed
const newKeyTakeawaysStart = updatedContent.indexOf('keyTakeaways: [', ff12Start);
const newKeyTakeawaysEnd = updatedContent.indexOf(']', newKeyTakeawaysStart);

const beforeKeys = updatedContent.substring(0, newKeyTakeawaysStart + 15); // include 'keyTakeaways: ['
const afterKeys = updatedContent.substring(newKeyTakeawaysEnd);

const keysString = '\n            "' + keyTakeaways.join('",\n            "') + '"\n        ';

updatedContent = beforeKeys + keysString + afterKeys;

fs.writeFileSync(filePath, updatedContent);
console.log('Successfully updated ff_12');
