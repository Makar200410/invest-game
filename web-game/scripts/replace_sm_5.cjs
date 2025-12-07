const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_5": {
        title: "Stock Splits",
        content: \`
# Stock Splits: More Shares, Same Value

A [stock split](/glossary#stock-split) is when a company divides its existing shares into multiple shares. It's like breaking a $20 bill into two $10 bills — you have more pieces, but the total value is unchanged. While splits don't create any real value, they can have psychological and practical effects on trading. Understanding splits helps you avoid confusion when they happen.

## Part 1: What Is a Stock Split?

A [stock split](/glossary#stock-split) increases the number of shares outstanding while proportionally reducing the price per share.

*   **Definition**: A corporate action that divides existing shares into multiple shares, reducing share price proportionally.
*   **Common Ratios**: 2-for-1 (most common), 3-for-1, 4-for-1, 10-for-1, or any ratio the company chooses.
*   **Example (2-for-1)**: You own 100 shares at $200. After split, you own 200 shares at $100. Total value: $20,000 (unchanged).
*   **Example (4-for-1)**: Apple split 4-for-1 in 2020. A shareholder with 1 share at $400 became 4 shares at $100.
*   **[Market Cap](/glossary#market-cap) Unchanged**: Shares × Price remains the same. The company's total value doesn't change from a split.
*   **Why It Matters**: The [stock](/glossary#stock) appears "cheaper" after a split, even though proportionally nothing changed.

## Part 2: Why Companies Split Their Stock

Splits seem pointless since value doesn't change. But companies have legitimate reasons to do them.

*   **Accessibility**: Lower share prices allow smaller investors to buy whole shares. Before [fractional shares](/glossary#fractional-shares), a $3,000 stock excluded many investors.
*   **[Liquidity](/glossary#liquidity)**: More shares in circulation can increase trading volume and tighten [bid-ask spreads](/glossary#bid-ask-spread).
*   **Psychological Effect**: Investors perceive lower-priced [stocks](/glossary#stock) as having more room to grow. "$100 to $200 feels easier than $1,000 to $2,000."
*   **[Options](/glossary#options) Trading**: Standard [options](/glossary#options) contracts are for 100 shares. Lower prices make contracts more affordable.
*   **[Index](/glossary#index-fund) Inclusion**: Some indexes (like the Dow Jones) are price-weighted. A very high share price can distort the [index](/glossary#index-fund).
*   **Signal of Confidence**: Splits often happen during strong performance. It signals management's confidence that growth will continue.

## Part 3: Reverse Stock Splits — The Opposite

A [reverse stock split](/glossary#reverse-split) combines multiple shares into one, increasing the share price. This is usually a warning sign.

*   **How It Works**: In a 1-for-10 reverse split, 10 shares at $1 become 1 share at $10.
*   **Why Companies Do It**: To avoid [delisting](/glossary#delisting). Exchanges like NYSE require minimum share prices (often $1). A reverse split artificially boosts the price.
*   **Warning Sign**: Reverse splits often signal deep trouble. The company is desperate to stay listed.
*   **Shareholder Dilution**: Fractional shares from reverse splits are often cashed out, forcing small shareholders to sell.
*   **Historical Performance**: [Stocks](/glossary#stock) that undergo reverse splits tend to underperform the market over the following year.
*   **Exception**: Sometimes healthy companies reverse split for legitimate reasons (index inclusion), but it's rare.

## Part 4: How Splits Affect Your Portfolio

When a split happens, your brokerage should handle everything automatically. But you should understand what changes.

*   **Share Count**: Automatically multiplied by the split ratio. You'll see more shares in your account.
*   **Price Per Share**: Divided by the split ratio. Chart history is adjusted retroactively.
*   **Total Value**: Unchanged immediately after split. Same [market cap](/glossary#market-cap).
*   **[Cost Basis](/glossary#cost-basis)**: Automatically adjusted. Your original purchase price per share is divided by the split ratio.
*   **[Dividend](/glossary#dividend) Per Share**: Future [dividends](/glossary#dividend) adjust proportionally. If [dividend](/glossary#dividend) was $1/share pre-split, it becomes $0.50/share after a 2-for-1 split.
*   **Tax Impact**: No taxable event. You don't owe taxes just because a split occurred.

## Part 5: Historical Chart Adjustments

After a split, historical price charts are adjusted to reflect the new share structure. This can initially be confusing.

*   **Retroactive Adjustment**: All historical prices are divided by the split ratio to maintain a continuous chart.
*   **Apple Example**: Apple [IPO](/glossary#ipo)'d at $22 in 1980. After 5 splits, the adjusted [IPO](/glossary#ipo) price is about $0.10 on modern charts.
*   **Why Adjust?**: Without adjustment, the chart would show a massive "crash" on the split date. Adjustment shows true performance.
*   **Volume Adjustment**: Historical volume is also multiplied to maintain consistency.
*   **Compare Correctly**: Always use adjusted prices when comparing historical performance. Unadjusted prices are misleading.
*   **[Dividend](/glossary#dividend) Charts**: [Dividend](/glossary#dividend) histories should also be adjusted. This can make historical [yields](/glossary#dividend-yield) look oddly low if not adjusted.

## Part 6: Famous Stock Splits

Major companies have split their [stocks](/glossary#stock) multiple times throughout history. These examples illustrate the practice.

*   **Apple**: Split 2-for-1 in 1987, 2000, 2005, and 4-for-1 in 2020. Original 1980 shareholders have 224x more shares.
*   **Tesla**: Split 5-for-1 in August 2020 when shares hit $2,000+. Later split 3-for-1 in 2022.
*   **Amazon**: First split since 1999 came in 2022 (20-for-1) when shares exceeded $2,500.
*   **NVIDIA**: Split 4-for-1 in 2021 during the AI/GPU boom.
*   **Google (Alphabet)**: 20-for-1 split in 2022 after shares exceeded $2,800.
*   **Berkshire Hathaway**: Warren Buffett famously refuses to split. Class A shares trade at $500,000+. He created Class B shares ($350) for smaller investors instead.

## Part 7: Do Splits Affect Returns?

Academically, splits shouldn't matter. In practice, there are some measurable effects.

*   **Short-Term Pop**: Stocks often rise temporarily after split announcements due to increased retail interest and perceived affordability.
*   **Long-Term**: No meaningful effect. A company's fundamentals drive returns, not share count.
*   **Research Findings**: Studies show slight positive returns around split announcements, but this is largely psychological.
*   **Selection Bias**: Companies that split are usually growing. The performance comes from business success, not the split itself.
*   **[Fractional Shares](/glossary#fractional-shares) Era**: With [fractional share](/glossary#fractional-shares) trading now common, splits matter less than ever for accessibility.
*   **Trading Lesson**: Don't buy a [stock](/glossary#stock) just because it's splitting. Focus on fundamentals.

## Part 8: Spin-Offs vs. Splits

Don't confuse [stock splits](/glossary#stock-split) with spin-offs. They're completely different corporate actions.

*   **[Stock Split](/glossary#stock-split)**: Same company, more shares, lower price. Nothing fundamental changes.
*   **Spin-Off**: Company separates a division into a new independent company. Shareholders receive shares of the new company.
*   **Spin-Off Example**: eBay spun off PayPal in 2015. eBay shareholders received PayPal shares proportionally.
*   **Value Creation**: Spin-offs can unlock hidden value by separating unrelated businesses that investors can value independently.
*   **Tax Treatment**: Spin-offs are generally tax-free if structured correctly. You receive shares of the new entity.
*   **[Cost Basis](/glossary#cost-basis) Allocation**: After a spin-off, your original [cost basis](/glossary#cost-basis) is allocated between old and new shares based on relative market values.

## Part 9: What to Do When Your Stock Splits

Practical advice for handling splits as an investor.

*   **Do Nothing**: Your broker handles everything automatically. Share counts and prices adjust overnight.
*   **Don't Panic**: If you see many more shares at a lower price, it's the split, not a crash.
*   **Update Records**: If you track [cost basis](/glossary#cost-basis) manually, adjust your records.
*   **Tax Lots**: Each tax lot's per-share price is adjusted. Your total basis is unchanged.
*   **Check [Limit Orders](/glossary#limit-order)**: Outstanding [limit orders](/glossary#limit-order) are typically cancelled before splits. Re-enter them at appropriate new prices.
*   **Review [Options](/glossary#options)**: If you hold [options](/glossary#options), they're adjusted for splits. Strike prices and contracts change proportionally.
*   **Long-Term Perspective**: A split is administrative housekeeping, not a fundamental change. Your investment thesis shouldn't change.
\`,
        keyTakeaways: [
            "A stock split increases share count while reducing price proportionally — total value is unchanged.",
            "Companies split to improve accessibility, liquidity, and psychological perception.",
            "Reverse splits (combining shares) are usually a warning sign of trouble.",
            "Splits don't affect long-term returns — they're cosmetic, not fundamental."
        ]
    },`;

const startMarker = '"sm_5": {';
const endMarker = '"sm_6": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_5: Stock Splits - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_5!');
