const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_6": {
        title: "Buybacks",
        content: \`
# Stock Buybacks: Companies Buying Themselves

A [stock buyback](/glossary#buyback) (or share repurchase) is when a company uses its cash to buy back its own shares from the open market. This reduces the number of shares outstanding, effectively concentrating ownership among remaining shareholders. Buybacks have become a dominant way for companies to return value to shareholders — sometimes at the expense of long-term investment.

## Part 1: What Is a Stock Buyback?

A [buyback](/glossary#buyback) is when a company purchases its own outstanding shares, reducing the total share count.

*   **Definition**: Company uses cash or debt to repurchase its own [stock](/glossary#stock) on the open market or through tender offers.
*   **The Mechanics**: Company announces a buyback program (e.g., "$50 billion over 3 years"). It then gradually buys shares like any investor.
*   **Where Shares Go**: Repurchased shares are either retired (cancelled) or held as "treasury stock" for potential future use (employee compensation).
*   **Shrinking Pie**: Fewer shares outstanding means each remaining share represents a larger percentage of ownership.
*   **[EPS](/glossary#eps) Boost**: Earnings Per Share ([EPS](/glossary#eps)) automatically increases when share count decreases, even if total earnings are flat.
*   **Scale**: In 2022, S&P 500 companies spent over $1 trillion on buybacks — more than on [dividends](/glossary#dividend).

## Part 2: Why Companies Buy Back Stock

Buybacks serve multiple purposes. Understanding management's motivations helps you evaluate if they're creating or destroying value.

*   **Return Cash to Shareholders**: Alternative to [dividends](/glossary#dividend). Returns excess cash without committing to ongoing payments.
*   **Signal Undervaluation**: Management signaling they believe shares are underpriced. "We'd rather invest in ourselves than anything else."
*   **Boost [EPS](/glossary#eps) and Stock Price**: Reducing share count increases [EPS](/glossary#eps), which can boost stock price (especially for companies valued on [P/E ratio](/glossary#pe-ratio)).
*   **Offset [Dilution](/glossary#dilution)**: Counteract shares issued for employee stock options. Without buybacks, compensation programs gradually [dilute](/glossary#dilution) existing shareholders.
*   **Tax Efficiency**: [Capital gains](/glossary#capital-gains) from share price appreciation (from buybacks) can be deferred. [Dividends](/glossary#dividend) are taxed immediately. Shareholders choose when to sell.
*   **Flexibility**: Unlike [dividends](/glossary#dividend), buybacks don't create expectation of ongoing payments. Can pause if cash is needed.

## Part 3: How Buybacks Create Shareholder Value

When done right, buybacks are value-creating transactions that benefit remaining shareholders.

*   **Example**: Company earns $100M with 100M shares = $1 [EPS](/glossary#eps). At [P/E](/glossary#pe-ratio) of 15, stock = $15.
*   **After Buyback**: Company buys back 10M shares. Now 90M shares. $100M earnings ÷ 90M shares = $1.11 [EPS](/glossary#eps). At same P/E 15, stock = $16.67.
*   **Your Ownership**: You owned 1% before (1M of 100M). You own 1.11% after (1M of 90M). Your slice of the pie grew.
*   **[Intrinsic Value](/glossary#intrinsic-value)**: If shares are purchased below their true value, remaining shareholders capture the difference as a gain.
*   **[Compounding](/glossary#compound-interest)**: Repeated buybacks over decades can dramatically reduce share count, concentrating [earnings](/glossary#eps) among fewer owners.
*   **Real Example**: Apple has reduced its share count by ~40% since 2013 through aggressive buybacks, massively boosting [EPS](/glossary#eps).

## Part 4: When Buybacks Destroy Value

Buybacks aren't always good. Executives often make costly mistakes or have misaligned incentives.

*   **Buying at High Prices**: If management buys shares at inflated valuations, they're wasting shareholder money. Value is destroyed.
*   **Debt-Financed Buybacks**: Borrowing money to buy back shares is risky. If the economy turns, the debt remains even as earnings fall.
*   **At the Expense of R&D**: Some companies starve investment in innovation to fund buybacks, sacrificing long-term growth for short-term [EPS](/glossary#eps) flattery.
*   **Executive Compensation Games**: If executive bonuses are tied to [EPS](/glossary#eps), they're incentivized to buyback regardless of whether it creates value.
*   **Pre-Crash Buying**: Many companies bought back billions at peak prices before crashes (2007, 2020), then had to cut buybacks at cheap prices.
*   **The Critics' View**: Some argue buybacks enrich executives and don't benefit the real economy. They're a form of financial engineering, not true growth.

## Part 5: Buybacks vs. Dividends

Both return cash to shareholders, but they do so differently. Each has advantages and disadvantages.

*   **[Dividends](/glossary#dividend)**: Regular cash payments. Taxed immediately. Create expectation of continuation. Equal per-share payout.
*   **Buybacks**: Boost share price. [Capital gains](/glossary#capital-gains) taxed only when you sell. Flexible — can stop anytime. Benefit all shareholders proportionally.
*   **Tax Advantage**: Buybacks are more tax-efficient for most investors. You control when to realize the gain.
*   **Certainty vs. Flexibility**: [Dividends](/glossary#dividend) are predictable income. Buybacks are discretionary.
*   **Retirees Prefer [Dividends](/glossary#dividend)**: Living on investment income is easier with regular [dividend](/glossary#dividend) checks than selling shares periodically.
*   **Hybrid Approach**: Many companies do both. Apple pays [dividends](/glossary#dividend) AND buys back hundreds of billions.

## Part 6: Tracking and Analyzing Buybacks

How do you know if a company is buying back stock? Here's where to find the information.

*   **Earnings Releases**: Companies announce buyback authorizations in press releases. "Board authorizes $10 billion buyback program."
*   **10-Q and 10-K Filings**: Quarterly and annual reports detail actual repurchases, prices paid, and remaining authorization.
*   **Share Count Trend**: Track "Diluted Shares Outstanding" over time. Decreasing share count = buybacks exceeding [dilution](/glossary#dilution).
*   **Cash Flow Statement**: Shows "Repurchases of common stock" as a use of cash under financing activities.
*   **Buyback [Yield](/glossary#yield)**: Annual buybacks divided by [market cap](/glossary#market-cap). A 5% buyback [yield](/glossary#yield) is like a 5% bonus on top of [dividends](/glossary#dividend).
*   **Total Shareholder [Yield](/glossary#yield)**: [Dividend Yield](/glossary#dividend-yield) + Buyback [Yield](/glossary#yield) + Debt Paydown. Comprehensive view of cash returns to shareholders.

## Part 7: The Politics of Buybacks

Buybacks have become politically controversial. Understanding the debate helps you see the full picture.

*   **The Criticism**: Politicians argue buybacks enrich executives and Wall Street while workers get nothing. "Stock manipulation for the rich."
*   **The 1% Excise Tax**: Starting 2023, companies pay 1% tax on buyback value. This may shift preference toward [dividends](/glossary#dividend).
*   **The Defense**: Companies argue buybacks efficiently return capital to shareholders who can then reinvest. They're better than forcing companies to hoard cash.
*   **Pre-1982 History**: Before 1982, buybacks were essentially illegal (considered market manipulation). SEC Rule 10b-18 created a safe harbor.
*   **Seasonal Patterns**: Buybacks spike after earnings reports when insiders can trade. They slow during "blackout" periods pre-earnings.
*   **Your Perspective**: Evaluate buybacks on business merit, not political spin. Good buybacks at fair prices create value. Bad buybacks at inflated prices destroy it.

## Part 8: Buybacks During Crises

How companies behave with buybacks during tough times reveals management quality.

*   **The 2008-2009 Test**: Many companies that bought back billions at peak prices in 2007 had to issue shares at trough prices in 2009 to survive.
*   **The 2020 COVID Test**: Airlines received bailouts after spending billions on buybacks. Critics asked why taxpayers should rescue companies that chose buybacks over reserves.
*   **The Right Approach**: Conservative companies maintain cash reserves for crises, then buyback aggressively when their shares are cheap (e.g., Berkshire post-2008).
*   **When Buybacks Stop**: Sudden suspension of buybacks signals cash flow concerns. Watch for this red flag.
*   **Opportunistic Buying**: Great management increases buybacks during crashes when shares are cheapest. Poor management does the opposite.
*   **Your Due Diligence**: Check a company's buyback history. Did they buy high and sell low? Or were they disciplined value investors?

## Part 9: Buybacks and Your Investment Strategy

How should buybacks factor into your investment decisions?

*   **Positive Signal**: Consistent buybacks at reasonable valuations indicate shareholder-friendly management.
*   **Watch [Dilution](/glossary#dilution)**: If buybacks barely offset option grants, shareholders aren't really gaining. Net repurchases are what matter.
*   **Price Discipline**: The best buyback programs include price limits. "We'll buy below $X per share" is disciplined. "We'll buy $50B regardless of price" is not.
*   **[Index Fund](/glossary#index-fund) Benefit**: As an [index fund](/glossary#index-fund) holder, you automatically benefit from buybacks across hundreds of companies without analyzing each one.
*   **Don't Chase Announcements**: Stock often rises on buyback announcements, but the value is created over time as shares are actually repurchased.
*   **Long-Term Focus**: Buybacks compound best over decades. Short-term traders don't capture the full benefit.
\`,
        keyTakeaways: [
            "Buybacks reduce share count, increasing each remaining share's claim on earnings.",
            "Well-executed buybacks at fair prices create shareholder value; buying at peaks destroys it.",
            "Buybacks are more tax-efficient than dividends — gains are deferred until you sell.",
            "Watch for debt-funded buybacks and companies neglecting investment for EPS manipulation."
        ]
    },`;

const startMarker = '"sm_6": {';
const endMarker = '"sm_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_6: Buybacks - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_6!');
