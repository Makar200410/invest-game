const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// New ib_4 content - Asset Classes Overview
const newIb4 = `    "ib_4": {
        title: "Asset Classes Overview",
        content: \`
# Asset Classes Overview

An "[Asset Class](/glossary#asset)" is a group of investments that share similar characteristics and behave similarly in the marketplace. Think of asset classes like food groups. You need a balanced diet. You can't just eat carbs ([Stocks](/glossary#stock)) or you'll crash. You need protein (Real Estate) and vegetables ([Bonds](/glossary#bond)) too. Each [asset class](/glossary#asset) plays a specific role in a well-constructed [portfolio](/glossary#portfolio).

## Part 1: Equities (Stocks) — Ownership

When you buy [stock](/glossary#stock), you literally own a piece of a company. You're a part-owner entitled to their profits, growth, and future success.

*   **What It Is**: Fractional ownership in a corporation. Buy 1 share of Apple and you own approximately 1/16 billionth of the company.
*   **Role in [Portfolio](/glossary#portfolio)**: The growth engine. This is where most wealth is built over long time periods.
*   **[Risk](/glossary#risk)**: High. Prices fluctuate daily, sometimes violently. Can drop 50%+ in crashes.
*   **Historical Return**: ~10% average annual return for US [stocks](/glossary#stock) over 100+ years (including [dividends](/glossary#dividend)).
*   **Types of [Stocks](/glossary#stock)**:
    *   **[Large Cap](/glossary#market-cap)** (Apple, Microsoft, Amazon) — Stable giants, lower growth, lower [risk](/glossary#risk).
    *   **[Mid Cap](/glossary#market-cap)** — Medium-sized companies, balance of growth and stability.
    *   **[Small Cap](/glossary#market-cap)** — Emerging companies, higher growth potential, higher [volatility](/glossary#volatility).
    *   **International Developed** (Europe, Japan) — [Diversification](/glossary#diversification) outside US.
    *   **Emerging Markets** (China, India, Brazil) — High growth potential, high political and currency [risk](/glossary#risk).
*   **How to Own**: Individual [stocks](/glossary#stock), [ETFs](/glossary#etf) (VTI, SPY), [Mutual Funds](/glossary#mutual-fund).

## Part 2: Fixed Income (Bonds) — Lending

[Bonds](/glossary#bond) are loans. You lend money to governments or corporations, and they promise to pay you back with [interest](/glossary#interest-rate).

*   **What It Is**: You lend $1,000 to the US Treasury. They pay you 5% [interest](/glossary#interest-rate) ([coupon](/glossary#coupon)) annually and return your $1,000 at [maturity](/glossary#maturity).
*   **Role in [Portfolio](/glossary#portfolio)**: Stability anchor, income generator, shock absorber. When [stocks](/glossary#stock) crash, investors flee to [bonds](/glossary#bond).
*   **[Risk](/glossary#risk)**: Low to Medium. Government [bonds](/glossary#bond) are nearly risk-free for default. Corporate [bonds](/glossary#bond) can default.
*   **Historical Return**: 4-6% average annually over long periods.
*   **Inverse Relationship**: When [interest rates](/glossary#interest-rate) rise, [bond](/glossary#bond) prices fall. When rates fall, [bond](/glossary#bond) prices rise.
*   **Types of [Bonds](/glossary#bond)**:
    *   **[Treasuries](/glossary#treasury)** — US government debt, considered "risk-free" for default, backed by full faith of US.
    *   **Corporate [Bonds](/glossary#bond)** — Company debt, higher [yields](/glossary#yield), more [risk](/glossary#risk) of default.
    *   **[Municipal Bonds](/glossary#muni-bonds)** — State/local government debt, often federal tax-free and sometimes state tax-free.
    *   **High-Yield (Junk) [Bonds](/glossary#bond)** — Low credit quality, high [yield](/glossary#yield), high [risk](/glossary#risk) of default.
    *   **TIPS** — Treasury Inflation-Protected Securities, adjust for [inflation](/glossary#inflation).
*   **How to Own**: Individual [bonds](/glossary#bond), [ETFs](/glossary#etf) (BND, AGG), [Bond](/glossary#bond) [Mutual Funds](/glossary#mutual-fund).

## Part 3: Cash & Cash Equivalents — Safety

Cash is the ultimate safe haven. It's boring, but absolutely essential for financial stability and opportunity seizure.

*   **What It Is**: Money in savings accounts, CDs (Certificates of Deposit), Money Market Funds, T-Bills.
*   **Role in [Portfolio](/glossary#portfolio)**: [Emergency fund](/glossary#emergency-fund), [liquidity](/glossary#liquidity) for opportunities, "dry powder" to deploy during crashes.
*   **[Risk](/glossary#risk)**: Zero from market [volatility](/glossary#volatility), but [inflation](/glossary#inflation) erodes [purchasing power](/glossary#purchasing-power) over time.
*   **Return**: 0-5% depending on [Federal Reserve](/glossary#federal-reserve) rates. Currently around 4-5% in high-yield savings accounts.
*   **Rule**: Keep 3-6 months of living expenses in cash for emergencies. This is non-negotiable.
*   **Opportunity Cost**: Don't keep too much in cash. Every dollar earning 4% while [stocks](/glossary#stock) return 10% is losing 6% annually.
*   **Where to Park**: High-Yield Savings Accounts (Ally, Marcus), Money Market Funds (VMFXX), Short-Term [Treasuries](/glossary#treasury).

## Part 4: Real Estate — Tangible Wealth

Real estate is physical property — land and buildings. It's one of the oldest and most reliable ways to build generational wealth.

*   **What It Is**: Owning land, residential homes, apartments, commercial buildings, or shares of real estate companies.
*   **Role in [Portfolio](/glossary#portfolio)**: Income generation (rent), appreciation, [inflation](/glossary#inflation) hedge, tax benefits.
*   **[Risk](/glossary#risk)**: Medium. Illiquid (hard and slow to sell). Highly local market dependent. Requires maintenance.
*   **Return**: 8-12% historically, especially with [leverage](/glossary#leverage) (mortgages magnify returns).
*   **Ways to Invest**:
    *   **Direct Ownership**: Buy a rental property. High involvement, high control, high potential returns. Requires significant capital.
    *   **REITs (Real Estate Investment Trusts)**: [Stocks](/glossary#stock) of real estate companies. Liquid like [stocks](/glossary#stock), pay high [dividends](/glossary#dividend), easy access with any amount.
    *   **Example [ETF](/glossary#etf)**: VNQ (Vanguard Real Estate [ETF](/glossary#etf)) gives exposure to all types of US real estate.
*   **Tax Benefit**: Depreciation, mortgage interest deduction, [1031 Exchange](/glossary#1031-exchange) to defer [capital gains](/glossary#capital-gains) indefinitely.

## Part 5: Commodities — Raw Materials

[Commodities](/glossary#commodities) are physical goods traded on exchanges: metals, energy, and agricultural products. They're the building blocks of the economy.

*   **What It Is**: [Gold](/glossary#gold), silver, platinum, oil, natural gas, corn, wheat, copper, lumber.
*   **Role in [Portfolio](/glossary#portfolio)**: [Inflation](/glossary#inflation) hedge. When money loses value, hard physical goods tend to gain value.
*   **[Risk](/glossary#risk)**: High [volatility](/glossary#volatility). No cash flow — [Gold](/glossary#gold) doesn't pay [dividends](/glossary#dividend). Speculative in nature.
*   **Return**: Historically matches [inflation](/glossary#inflation) over very long periods. Can spike dramatically during crises.
*   **[Gold](/glossary#gold)**: The classic "store of value." Has held its value for 5,000 years. Rises during panic and uncertainty.
*   **Oil**: Highly volatile, tied to geopolitics and economic cycles. Not recommended for typical investors.
*   **Warning**: Most [commodities](/glossary#commodities) are for trading, not long-term investing. Exception: [Gold](/glossary#gold) as a crisis hedge (5-10% of [portfolio](/glossary#portfolio)).
*   **How to Own**: [ETFs](/glossary#etf) like GLD ([Gold](/glossary#gold)), SLV (Silver), DBC (Diversified Commodities).

## Part 6: Cryptocurrencies — Digital Assets

[Cryptocurrency](/glossary#cryptocurrency) represents a new, highly speculative [asset class](/glossary#asset) that emerged in 2009 with [Bitcoin](/glossary#bitcoin).

*   **What It Is**: Decentralized digital money and platforms running on [blockchain](/glossary#blockchain) technology. [Bitcoin](/glossary#bitcoin), [Ethereum](/glossary#ethereum), and thousands of altcoins.
*   **Role in [Portfolio](/glossary#portfolio)**: Speculative growth, potential "digital [gold](/glossary#gold)," [portfolio](/glossary#portfolio) diversifier (low [correlation](/glossary#correlation) to traditional [assets](/glossary#asset)).
*   **[Risk](/glossary#risk)**: Extreme. Can drop 80% in a year. Regulatory uncertainty. Hacks, scams, and rug pulls common.
*   **Return**: Astronomical... or zero. [Bitcoin](/glossary#bitcoin) went from $0 to $70,000+, with multiple 80% crashes along the way.
*   **The Debate**: Is it a currency? A store of value? A speculative bubble? The jury is still out.
*   **Allocation Advice**: Keep it small (1-5% of [portfolio](/glossary#portfolio) maximum). It's the hot sauce, not the main meal.
*   **How to Own**: Exchanges (Coinbase, Kraken), [ETFs](/glossary#etf) (BITO, IBIT), or cold storage wallets for security.

## Part 7: Derivatives — The Casino (Advanced)

[Derivatives](/glossary#derivative) are contracts whose value is derived from another underlying [asset](/glossary#asset). They're powerful but dangerous.

*   **What It Is**: [Options](/glossary#options), [futures](/glossary#futures), swaps. Contracts to buy/sell [assets](/glossary#asset) at predetermined future prices.
*   **Role**: Hedging ([risk](/glossary#risk) insurance for professionals) or speculation (gambling for amateurs).
*   **[Risk](/glossary#risk)**: Potentially infinite. You can lose *more* than you invest with some [derivatives](/glossary#derivative). Accounts can go negative.
*   **Warren Buffett's Warning**: Called them "Financial Weapons of Mass Destruction" after they contributed to major crises.
*   **[Options](/glossary#options) Basics**:
    *   **Call [Option](/glossary#options)**: The right (not obligation) to BUY at a set price. Profits if [stock](/glossary#stock) rises.
    *   **Put [Option](/glossary#options)**: The right (not obligation) to SELL at a set price. Profits if [stock](/glossary#stock) falls.
*   **Advice**: Stay away until you are very experienced with years of investing knowledge. 90% of [options](/glossary#options) traders lose money.

## Part 8: Alternative Investments — The Exclusive Club

Alternatives are non-traditional investments typically available only to wealthy investors. They're becoming more accessible.

*   **Private Equity**: Ownership in private companies not traded on stock exchanges. High returns, locked up for 7-10 years.
*   **Venture Capital**: Investing in early-stage startups. Massive returns if one becomes the next Google. Most fail.
*   **Hedge Funds**: Sophisticated institutional [portfolios](/glossary#portfolio) using complex strategies. High fees (2% + 20% of profits).
*   **Collectibles**: Art, wine, rare cars, sports memorabilia. Illiquid, subjective value, requires expertise.
*   **Private Credit**: Loans to companies outside public markets. Higher [yields](/glossary#yield) than public [bonds](/glossary#bond).
*   **Access**: Traditionally for "Accredited Investors" only (income > $200k or [net worth](/glossary#net-worth) > $1M). Crowdfunding platforms opening access.
*   **Reality**: Like lottery tickets with better odds. Amazing when they win. Painful when they don't.

## Part 9: Building Your Asset Allocation

How do you combine these [asset classes](/glossary#asset) into a [portfolio](/glossary#portfolio)? Your allocation depends on your age, goals, and [risk tolerance](/glossary#risk-tolerance).

*   **Young Investor (20s-30s)**: Aggressive. 90% [Stocks](/glossary#stock) / 10% [Bonds](/glossary#bond). You have time to recover from crashes.
*   **Mid-Career (40s-50s)**: Balanced. 70% [Stocks](/glossary#stock) / 30% [Bonds](/glossary#bond). More stability as retirement approaches.
*   **Near Retirement (60s+)**: Conservative. 50% [Stocks](/glossary#stock) / 50% [Bonds](/glossary#bond). Capital preservation becomes priority.
*   **Add-Ons**: Consider 5-10% in Real Estate and 5% in [Gold](/glossary#gold) for additional [diversification](/glossary#diversification).
*   **The Vehicle**: For 99% of people, **[ETFs](/glossary#etf)** are the best way to access all [asset classes](/glossary#asset). They're cheap, diversified, and liquid.
*   **Popular Core [ETFs](/glossary#etf)**:
    *   VTI (Total US [Stock](/glossary#stock) Market)
    *   VXUS (International [Stocks](/glossary#stock))
    *   BND (Total [Bond](/glossary#bond) Market)
    *   VNQ (Real Estate)
    *   IAU ([Gold](/glossary#gold))
*   **Simplest [Portfolio](/glossary#portfolio)**: Just buy VT (Total World [Stock](/glossary#stock)) + BND (Total [Bond](/glossary#bond)). Two funds, global [diversification](/glossary#diversification), done.
\`,
        keyTakeaways: [
            "Asset classes are food groups — you need a balanced diet for a healthy portfolio.",
            "Stocks are for growth, Bonds are for stability, Cash is for safety and opportunities.",
            "Real Estate and Gold provide inflation protection and diversification.",
            "ETFs are the best vehicle to access all asset classes cheaply and efficiently."
        ]
    },`;

// Find and replace ib_4 section
const startMarker = '"ib_4": {';
const endMarker = '"ib_5": {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find ib_4 or ib_5 markers in the file');
    process.exit(1);
}

// Validate new content
const charCount = newIb4.length;
const partCount = (newIb4.match(/## Part \d+/g) || []).length;

console.log('=== ib_4: Asset Classes Overview - VALIDATION ===');
console.log('');
console.log('Character Count:', charCount);
console.log('Required Minimum: 6000');
console.log('Status:', charCount >= 6000 ? '✓ PASS' : '✗ FAIL');
console.log('');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');
console.log('');

if (charCount < 6000 || partCount < 5 || partCount > 9) {
    console.log('=== VALIDATION FAILED - NOT APPLYING CHANGES ===');
    process.exit(1);
}

// Replace the content
const before = content.substring(0, startIdx);
const after = content.substring(endIdx);
const newContent = before + newIb4 + '\n    ' + after;

// Write the updated file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('=== VALIDATION PASSED - CHANGES APPLIED ===');
console.log('✓ Successfully updated ib_4 lesson!');
