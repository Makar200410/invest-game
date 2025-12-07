const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const lessons = {
    ff_7: {
        title: "Reading Financial Statements",
        content: `
# The Language of Business: Reading Financial Statements

Every public company publishes three key financial statements quarterly and annually. These documents reveal everything about a company's health. Learning to read them transforms you from gambler to investor.

## Part 1: The Income Statement (Profit & Loss)

Shows revenue, expenses, and profit over a period (quarter/year):
*   **Revenue** (Top Line): Money earned from sales
*   **Cost of Goods Sold (COGS)**: Direct costs to make products
*   **Gross Profit**: Revenue - COGS (shows pricing power)
*   **Operating Expenses**: Salaries, rent, marketing
*   **Operating Income**: Profit from core business
*   **Net Income** (Bottom Line): Final profit after everything

Key metric: **Profit Margin** = Net Income / Revenue. Higher is better.

## Part 2: The Balance Sheet

A snapshot of what a company owns and owes at a specific moment:
*   **[Assets](/glossary#asset)**: Cash, inventory, equipment, property
*   **[Liabilities](/glossary#liability)**: Debts, accounts payable, loans
*   **[Equity](/glossary#equity)**: [Assets](/glossary#asset) - [Liabilities](/glossary#liability) (shareholder value)

The equation: **Assets = Liabilities + Equity** (must always balance)

Key metrics:
*   **Current Ratio**: Current Assets / Current Liabilities (>1 = can pay near-term debts)
*   **Debt-to-Equity**: Total Debt / [Equity](/glossary#equity) (lower = less [risk](/glossary#risk))

## Part 3: The Cash Flow Statement

Tracks actual cash movement (profits can be manipulated, cash cannot):
*   **Operating Activities**: Cash from core business
*   **Investing Activities**: Buying/selling equipment, acquisitions
*   **Financing Activities**: Issuing [stock](/glossary#stock), paying [dividends](/glossary#dividend), borrowing

Key insight: A profitable company can go bankrupt if it runs out of cash. Cash is king.

## Part 4: Red Flags to Watch For

Warning signs in financial statements:
*   **Revenue growing, cash declining**: Possible accounting tricks
*   **Accounts receivable growing faster than revenue**: Customers not paying
*   **Inventory piling up**: Products not selling
*   **Debt growing faster than revenue**: Unsustainable
*   **Frequent "one-time" charges**: They're never one-time

## Part 5: Key Ratios to Know

Essential metrics for comparing companies:
*   **P/E Ratio**: Price / Earnings per share. How expensive is the [stock](/glossary#stock)?
*   **P/S Ratio**: Price / Sales. Useful for unprofitable companies.
*   **ROE**: Net Income / [Equity](/glossary#equity). How efficiently is management using capital?
*   **Free Cash Flow**: Operating Cash - Capital Expenditures. Real spendable cash.

## Part 6: Where to Find Statements

Financial statements are publicly available:
*   **SEC EDGAR**: Official source (sec.gov)
*   **Company Investor Relations**: Direct from the company
*   **Yahoo Finance/Google Finance**: User-friendly summaries
*   **10-K**: Annual report (most detailed)
*   **10-Q**: Quarterly report

## Part 7: From Numbers to Decisions

Reading statements isn't about memorizing formulas. It's about understanding:
*   Is revenue growing consistently?
*   Are profit margins stable or improving?
*   Is debt manageable?
*   Is cash flow positive and growing?
*   How does this compare to competitors?

Great investors spend hours reading financial statements. The numbers tell the real story.
`,
        keyTakeaways: [
            "Income Statement shows revenue, expenses, and profit over time.",
            "Balance Sheet shows assets, liabilities, and equity at a moment.",
            "Cash Flow Statement tracks actual cash movement.",
            "Cash Flow is harder to manipulate than Net Income.",
            "Key ratios: P/E, ROE, Current Ratio, Debt-to-Equity."
        ]
    },
    ff_8: {
        title: "Valuation Basics",
        content: `
# What Is Anything Worth? Valuation Fundamentals

Every [asset](/glossary#asset) has a price (what you pay) and a value (what it's worth). The difference between price and value is where profits come from. Learning valuation prevents you from overpaying.

## Part 1: Intrinsic Value vs. Market Price

*   **Market Price**: What people pay right now (constantly changes)
*   **Intrinsic Value**: True worth based on future cash flows
*   **[Margin of Safety](/glossary#margin-of-safety)**: Buy below intrinsic value for protection

Ben Graham: "Price is what you pay. Value is what you get."

When price << value = buying opportunity. When price >> value = bubble.

## Part 2: Discounted Cash Flow (DCF)

The most fundamental valuation method. An [asset](/glossary#asset) is worth the present value of all future cash flows.
*   **Step 1**: Estimate future cash flows
*   **Step 2**: Choose a discount rate (cost of [capital](/glossary#capital))
*   **Step 3**: Discount future cash back to today

A dollar today is worth more than a dollar next year because you could invest it. Higher interest rates make future cash worth less today.

## Part 3: Relative Valuation (Multiples)

Compare similar companies using ratios:
*   **P/E Ratio**: Price / Earnings. If industry average is 15x and company is 10x, might be undervalued.
*   **P/S Ratio**: Price / Sales. Useful when no earnings.
*   **EV/EBITDA**: Enterprise Value / Operating earnings. Accounts for debt.
*   **P/B Ratio**: Price / Book Value. For asset-heavy companies.

Warning: Cheap can get cheaper. A low P/E might signal a dying business.

## Part 4: Growth vs. Value

Two fundamental investing philosophies:
*   **Value Investing**: Buy beaten-down companies below intrinsic value. Wait for recovery.
*   **Growth Investing**: Pay premium for rapidly growing companies. Hope growth justifies price.

Reality: Both work. Most portfolios should blend. Overpaying for growth is dangerous. Buying value traps is equally dangerous.

## Part 5: The Art of Valuation

Valuation isn't pure science. It requires judgment on:
*   Future growth rate (will it continue?)
*   Competitive advantage (will it last?)
*   Management quality (are they honest and competent?)
*   Industry trends (rising or declining?)

Small changes in assumptions create huge changes in valuation. Be conservative.

## Part 6: When Valuation Matters (and Doesn't)

*   **Matters Most**: Concentrated bets, individual [stocks](/glossary#stock), buying businesses
*   **Matters Less**: Broad [index funds](/glossary#index-fund) (you're buying the whole market)
*   **Short-term**: Momentum and sentiment overpower fundamentals
*   **Long-term**: Valuation always wins

Warren Buffett: "In the short run, the market is a voting machine. In the long run, it is a weighing machine."

## Part 7: Practical Valuation Tips

For individual investors:
*   Never buy a [stock](/glossary#stock) you can't explain why it's worth the price
*   Compare P/E to historical average and competitors
*   Beware of "story stocks" with no earnings
*   If valuation requires heroic assumptions, pass
*   When in doubt, buy a diversified [index fund](/glossary#index-fund)
`,
        keyTakeaways: [
            "Intrinsic value = true worth; Market price = what people pay now.",
            "DCF: An asset is worth the present value of all future cash flows.",
            "P/E, P/S, EV/EBITDA are common relative valuation multiples.",
            "Value vs. Growth are two philosophies — both can work.",
            "Long-term, valuation always wins. Short-term, sentiment dominates."
        ]
    }
};

const ff6End = content.indexOf('"ff_6":');
if (ff6End === -1) {
    console.error('Could not find ff_6');
    process.exit(1);
}
const ff6CloseMatch = content.indexOf('    },', content.indexOf('keyTakeaways:', ff6End));
const insertPoint = ff6CloseMatch + 6;

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
console.log('Added ff_7 and ff_8');
