const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_10": {
        title: "REITs (Real Estate)",
        content: \`
# REITs: Real Estate for the Masses

[Real Estate Investment Trusts](/glossary#reit) (REITs) democratized real estate investing. Before 1960, you needed massive capital to buy commercial buildings. Today, you can own a slice of the Empire State Building, a shopping mall in Tokyo, or a data center in Virginia for the price of a lunch. REITs are a unique asset class that combines the income of bonds with the growth potential of stocks.

## Part 1: What Is a REIT?

A REIT is a company that owns, operates, or finances income-producing real estate. It is a tax designation, not just a business model.

*   **The Deal**: To qualify as a REIT and avoid corporate income tax, the company must:
    1.  Invest at least 75% of assets in real estate.
    2.  Derive at least 75% of income from rents or mortgages.
    3.  **Pay out at least 90% of taxable income to shareholders as dividends.**
*   **The Result**: High dividends for investors. The company pays no tax, so you get the full stream of income (but you pay tax on it).
*   **Liquidity**: Unlike physical real estate (which takes months to sell and requires 6% commissions), publicly traded REITs trade on stock exchanges instantly with $0 commission.
*   **Structure**: Most are "Equity REITs" (own buildings). Some are "Mortgage REITs" (own debt).

## Part 2: Types of REITs

The REIT universe covers every type of building you see in the world.

*   **Retail**: Malls, strip centers. (Simon Property Group). Sensitive to consumer spending and e-commerce trends. The "Death of the Mall" narrative hurt them, but top-tier malls are thriving.
*   **Residential**: Apartment buildings, student housing, single-family rentals. (AvalonBay, Invitation Homes). Stable demand (everyone needs a home). Often a good inflation hedge as leases reset annually.
*   **Office**: Skyscrapers, business parks. (Boston Properties). Struggling with the "Work From Home" shift. High vacancy rates in cities like San Francisco are a major headwind.
*   **Industrial**: Warehouses, logistics centers. (Prologis). Booming due to e-commerce (Amazon needs warehouses). The hottest sector of the last decade.
*   **Healthcare**: Hospitals, nursing homes, medical offices. (Welltower). Driven by aging demographics ("The Silver Tsunami").
*   **Data Centers**: Server farms for the cloud. (Equinix, Digital Realty). Powering the internet and AI. They own the physical shell where the servers live.
*   **Cell Towers**: The backbone of 5G. (American Tower, Crown Castle). They lease vertical space to carriers like Verizon and AT&T.
*   **Self-Storage**: "The 4 Ds" drive demand: Death, Divorce, Downsizing, Dislocation. (Public Storage). Recession-resistant.

## Part 3: Why Invest in REITs?

REITs offer three main benefits to a portfolio.

*   **High Income**: Because they must pay out 90% of income, REITs typically yield 3% - 6%, far higher than the S&P 500 (~1.5%). They are income machines.
*   **Capital Appreciation**: Real estate values tend to rise over time with inflation. You get the rent (dividend) PLUS the property value growth (stock price).
*   **Diversification**: Real estate is a distinct asset class. It doesn't always move perfectly with the broad stock market. It has a lower correlation to tech stocks.
*   **Inflation Hedge**: Rents can be raised. In high inflation, landlords charge more, protecting your real income. Replacement costs for buildings also rise, boosting asset values.

## Part 4: The Risks of REITs

It's not all passive income and sunshine.

*   **Interest Rate Sensitivity**: REITs behave like bonds. When interest rates rise, REIT prices often fall because:
    1.  Their borrowing costs go up (real estate runs on debt).
    2.  Their dividends look less attractive compared to safe Treasury yields (why buy a risky REIT at 4% if a risk-free Treasury pays 5%?).
*   **Economic Sensitivity**: In a recession, tenants go bankrupt and stop paying rent. Retail and Office REITs are especially vulnerable to economic cycles.
*   **Sector Risk**: Specific trends can kill a sector. E-commerce killed many Mall REITs. Work-from-home is hurting Office REITs. You must pick the right property type.
*   **Tax Inefficiency**: REIT dividends are usually taxed as "ordinary income" (up to 37%), not the lower "qualified dividend" rate (15-20%).

## Part 5: Mortgage REITs (mREITs)

A dangerous sub-sector you should likely avoid.

*   **Definition**: mREITs don't own buildings. They own mortgages (debt). They borrow money short-term to lend long-term (the "spread").
*   **The Yield Trap**: They often offer massive yields (10% - 15%). This lures in unsuspecting investors.
*   **The Risk**: They are highly leveraged hedge funds. If interest rates move unexpectedly (yield curve inversion), they can blow up.
*   **Performance**: Historically, mREITs have terrible total returns despite the high dividends. The share price erodes faster than the dividend pays you.
*   **Tickers**: NLY, AGNC. Be very careful. They are for trading, not holding.

## Part 6: How to Buy REITs

You have two main options for exposure.

*   **Individual REITs**: Pick specific companies (e.g., "I want to own cell towers, so I'll buy AMT").
    *   *Pros*: Targeted exposure. You can avoid dying sectors like malls.
    *   *Cons*: Single-company risk.
*   **REIT ETFs**: Buy the whole haystack.
    *   *VNQ (Vanguard Real Estate)*: The massive gorilla. Owns everything. Low fee (0.12%).
    *   *XLRE (Real Estate Select Sector)*: S&P 500 real estate stocks only. More concentrated in large caps.
    *   *SCHH (Schwab US REIT)*: Low cost alternative.
    *   *Global REITs (VNQI)*: Own real estate outside the US.
*   **Recommendation**: For most investors, a broad ETF like VNQ is the safest and easiest way to get exposure.

## Part 7: REITs in Your Portfolio

Where do they fit?

*   **The "Core" Argument**: Real estate is the third major asset class (Stocks, Bonds, Real Estate). It deserves a dedicated slice (e.g., 10%).
*   **The "Already Included" Argument**: The S&P 500 already includes REITs (~3%). If you own VOO, you already own real estate. Adding more is "overweighting."
*   **Overweighting**: Investors who want extra income or inflation protection might "tilt" their portfolio by adding 5-10% in VNQ on top of their S&P 500 holding.
*   **Location**: Because of the tax inefficiency (ordinary income dividends), REITs are best held in tax-advantaged accounts like IRAs or 401(k)s. Avoid holding them in a taxable brokerage account if possible.

## Part 8: Private REITs vs. Public REITs

Don't get scammed by high-fee private funds.

*   **Public REITs**: Trade on NYSE. Liquid. Transparent. Low fees.
*   **Private/Non-Traded REITs**: Sold by brokers or platforms like Fundrise or Blackstone (BREIT).
    *   *Pros*: Reported volatility is low (because they don't trade daily). They claim to offer "stability."
    *   *Cons*: High fees (often 2-3% upfront + annual fees). Illiquid (you can't sell when you want; they often gate redemptions). Valuation is opaque (they mark their own homework).
*   **The Verdict**: Stick to Public REITs (ETFs). The "stability" of private REITs is often an illusion because they just don't mark their assets to market daily. When the crash comes, you can't get your money out.

## Part 9: Summary and Strategy

Final thoughts on adding real estate to your mix.

*   **Income Powerhouse**: Use REITs to boost the yield of your portfolio.
*   **Inflation Friend**: One of the best assets to own when prices are rising.
*   **Rate Enemy**: Be prepared for volatility when the Fed raises rates.
*   **Keep It Simple**: A 5-10% allocation to VNQ in your IRA is a standard, sensible way to participate in the real estate market without fixing toilets or chasing tenants.
*   **Diversify**: Don't just buy one REIT. Buy the index to spread the risk across thousands of properties.
\`,
        keyTakeaways: [
            "REITs allow you to invest in commercial real estate like stocks.",
            "They must pay out 90% of taxable income as dividends, offering high yields.",
            "Best held in tax-advantaged accounts due to tax inefficiency.",
            "Sensitive to interest rates — prices often fall when rates rise."
        ]
    },`;

const marker = '"fe_9":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fe_9 not found'); process.exit(1); }

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

if (endIdx === -1) { console.error('fe_9 end not found'); process.exit(1); }

let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_10: REITs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fe_10!');
