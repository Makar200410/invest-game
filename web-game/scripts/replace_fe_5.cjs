const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_5": {
        title: "Expense Ratios & Fees",
        content: \`
# Expense Ratios & Fees: The Silent Wealth Killer

In investing, you don't get what you pay for. You get what you *don't* pay for. Every dollar paid in fees is a dollar that isn't compounding for your future. The [expense ratio](/glossary#expense-ratio) is the most critical number to check before buying any fund. Understanding the different types of fees and their long-term impact is essential for keeping your wealth. It is the one variable you can control with 100% certainty.

## Part 1: What Is an Expense Ratio?

The [expense ratio](/glossary#expense-ratio) is the annual fee charged by a fund to cover its operating costs. It is the price of admission.

*   **Definition**: Total annual fund operating expenses divided by average net assets. It is expressed as a percentage.
*   **How It's Paid**: You don't write a check. It is deducted automatically from the fund's assets daily. You simply see slightly lower returns than the market. It's invisible.
*   **Example**: You invest $10,000 in a fund with a 1.00% expense ratio. The fund takes $100/year. If the fund earns 8%, you get 7%.
*   **Components**: Management fees (salary for managers), administrative costs (legal, accounting), and 12b-1 fees (marketing).
*   **Range**:
    *   *Index Funds*: 0.03% - 0.20% (Cheap)
    *   *Active Funds*: 0.50% - 1.50% (Expensive)
    *   *Hedge Funds*: 2.00% + 20% of profits (Very Expensive)

## Part 2: The Math of Fee Drag

Small percentages create massive differences over time due to lost compounding. This is the "tyranny of compounding costs."

*   **Scenario**: Invest $100,000 for 30 years. Market returns 8%.
*   **Fund A (0.05% Fee)**:
    *   Net Return: 7.95%
    *   Final Value: ~$990,000
*   **Fund B (1.00% Fee)**:
    *   Net Return: 7.00%
    *   Final Value: ~$761,000
*   **The Cost**: You lost **$229,000** to fees. That's a house! That's a college education!
*   **The Lesson**: In a 1% fee world, the fund company takes ~25% of your potential 30-year growth. In a 2% fee world, they take ~40%.
*   **Vanguard's Motto**: "Costs matter." It's the only predictor of future performance that works.

## Part 3: Types of Sales Loads

Beyond the annual expense ratio, some mutual funds charge commissions just to buy or sell. These are "loads."

*   **Front-End Load (Class A)**: A fee paid upfront when you buy.
    *   *Example*: 5.75% load. You invest $1,000. $57.50 goes to the broker immediately. Only $942.50 is actually invested.
    *   *Impact*: You start the race nearly 6% behind. You need a 6.1% return just to break even. It destroys your principal.
*   **Back-End Load (Class B)**: A fee paid when you sell.
    *   *Structure*: Often starts high (e.g., 5%) and declines by 1% each year you hold. "Contingent Deferred Sales Charge." It locks you in.
*   **Level Load (Class C)**: No upfront fee, but a high annual 12b-1 fee (often 1%) forever. Over 10 years, this is the most expensive option.
*   **No-Load Funds**: The gold standard. No commission to buy or sell. 100% of your money works for you. Always choose No-Load.

## Part 4: Transaction Fees and Commissions

Costs charged by your brokerage, not the fund. These are becoming rarer but still exist.

*   **Trading Commissions**: Historically $5-$10 per trade. Now, most major brokers (Schwab, Fidelity, Robinhood) offer $0 stock/ETF trades.
*   **Mutual Fund Transaction Fees**: Many brokers still charge $20-$50 to buy mutual funds from *other* families (e.g., buying a Vanguard fund in a Schwab account).
*   **Solution**: Buy "No Transaction Fee" (NTF) funds or stick to your broker's own funds (buy Fidelity funds at Fidelity). Check the NTF list.
*   **Bid-Ask Spread**: For ETFs, the spread is a hidden transaction cost. Paying a $0.10 spread on a $10 stock is a 1% instant loss.
*   **Impact**: If you invest $100 monthly and pay a $20 fee, you are losing 20% instantly. Never pay transaction fees on recurring investments.

## Part 5: 12b-1 Fees

The "marketing fee" hidden inside the expense ratio. It's a relic of the past.

*   **Purpose**: Used to pay for advertising, brochures, and commissions to brokers who sell the fund.
*   **The Absurdity**: You are paying the fund company to advertise to *other* people to bring in more money. This rarely benefits existing shareholders. It just helps the fund manager get richer.
*   **Cap**: Capped at 1% of assets per year.
*   **Red Flag**: High 12b-1 fees are a sign of a "sales-driven" fund rather than a "performance-driven" fund. Good funds don't need to pay brokers to sell them.
*   **Index Funds**: Typically have zero 12b-1 fees. They sell themselves.

## Part 6: Tax Cost Ratio

Taxes are a fee paid to the government. Inefficient funds have a high "tax cost ratio."

*   **Turnover**: Active funds trade a lot (buy/sell stocks). This generates short-term capital gains.
*   **Distributions**: Funds must pay out these gains annually. You owe tax on them, even if you reinvested the money.
*   **Tax Drag**: An active fund might report a 10% return, but after taxes, you only keep 7%. The 3% difference is the tax cost.
*   **ETF Advantage**: ETFs rarely distribute capital gains due to their structure. They are tax-efficient.
*   **Location**: Hold tax-inefficient funds (active funds, bond funds, REITs) in tax-advantaged accounts (IRA, 401k). Hold efficient funds (Index ETFs) in taxable accounts.

## Part 7: "Free" Funds?

The race to zero has led to funds with no fees at all. Is there a catch?

*   **Fidelity Zero**: FZROX (Total Market) and FNILX (Large Cap) have 0.00% expense ratios. Zero.
*   **The Catch**: They are proprietary. You can't transfer them to another broker; you must sell (triggering taxes) to move.
*   **Loss Leaders**: Fidelity uses them to get you in the door, hoping you'll buy other services or keep cash in their accounts.
*   **Is It Worth It?**: The difference between 0.00% and 0.03% (VTI) is negligible ($3 per $10,000). Don't obsess over the last basis point if it reduces flexibility.
*   **Payment for Order Flow**: Free trading apps make money by selling your order flow to high-frequency traders. "If the product is free, you are the product."

## Part 8: How to Check Fees

Where to find the numbers before you buy. Never buy blindly.

*   **Fund Prospectus**: The legal source. Look for the "Fee Table." It must be prominently displayed.
*   **Brokerage Website**: The "Profile" or "Research" tab for any ticker will list "Net Expense Ratio."
*   **Morningstar**: Excellent resource for fee analysis. Look for "Expense Ratio" and "Load." They rate fees as Low, Average, or High.
*   **FINRA Fund Analyzer**: A tool to compare how fees impact returns over time.
*   **Rule of Thumb**:
    *   Excellent: < 0.10% (Index Funds)
    *   Okay: 0.10% - 0.40% (Smart Beta / Sector)
    *   Expensive: > 0.50% (Active)
    *   Run Away: > 1.00% or any Load

## Part 9: The Fee-Conscious Strategy

How to build a portfolio that minimizes costs and maximizes wealth.

*   **Stick to Index Funds**: The easiest way to guarantee low fees. VTI, VOO, VXUS, BND.
*   **Avoid Loads**: Never buy a load fund. There is always a no-load alternative that performs just as well.
*   **Watch the "All-In" Cost**: Expense Ratio + Transaction Fees + Tax Drag + Advisor Fee. Keep the total under 1%. Ideally under 0.5%.
*   **Advisor Fees**: If you use a financial advisor, they often charge 1% *on top* of fund fees. Ensure they provide value (planning, tax strategy) worth that cost.
*   **Robo-Advisors**: Charge ~0.25% to manage a portfolio of low-cost ETFs. A middle ground for those who want help.
*   **The Million Dollar Decision**: Saving 1% in fees over a lifetime can literally mean retiring with an extra million dollars. It is the highest ROI activity in investing.
\`,
        keyTakeaways: [
            "Expense Ratio is the annual fee deducted from your investment — invisible but deadly.",
            "Small fee differences (e.g., 1%) compound into massive losses over decades.",
            "Avoid 'Sales Loads' (commissions) — stick to No-Load funds.",
            "Index funds and ETFs typically offer the lowest costs and best long-term value."
        ]
    },`;

const startMarker = '"fe_5": {';
const endMarker = '"fe_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_5: Fees - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated fe_5!');
