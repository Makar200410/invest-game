const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_2": {
        title: "IPO: Initial Public Offering",
        content: \`
# Going Public: The IPO Process

An [IPO](/glossary#ipo) (Initial Public Offering) is one of the most significant events in a company's life. It's when a private company sells shares to the public for the first time, transforming from a closely-held business into a publicly traded corporation. Understanding how [IPOs](/glossary#ipo) work helps you make smarter decisions about whether to participate in them — and the answer is often "don't."

## Part 1: What Is an IPO?

An [IPO](/glossary#ipo) is the process by which a private company becomes a public company by selling its shares on a stock exchange.

*   **Definition**: [Initial Public Offering](/glossary#ipo) — the first sale of [stock](/glossary#stock) by a company to the public.
*   **Before IPO**: Company is "private." Only founders, employees, and private investors (VCs, angel investors) own shares. Shares cannot be freely bought or sold.
*   **After IPO**: Company is "public." Anyone can buy shares on an exchange. Must report financials publicly. Subject to SEC regulation.
*   **Money Flow**: In an [IPO](/glossary#ipo), the company receives the proceeds from selling new shares. This is different from [secondary market](/glossary#secondary-market) trading where money flows between investors.
*   **Famous IPOs**: Apple (1980), Google (2004), Facebook (2012), Alibaba (2014), Uber (2019), Airbnb (2020), Coinbase (2021).
*   **Scale**: [IPOs](/glossary#ipo) can range from small companies raising $50 million to giants like Saudi Aramco raising $25.6 billion (largest ever).

## Part 2: Why Companies Go Public

Going public is a major decision with significant trade-offs. Companies have several motivations.

*   **Raise [Capital](/glossary#capital)**: Access large amounts of money to fund expansion, acquisitions, R&D, or pay off debt. No obligation to repay like a loan.
*   **[Liquidity](/glossary#liquidity) for Investors**: Early investors (VCs, founders) can finally sell their shares and realize their gains. They've waited years for this exit.
*   **Currency for Acquisitions**: Public shares can be used to acquire other companies without spending cash. Many tech acquisitions use [stock](/glossary#stock) as payment.
*   **Employee Retention**: Stock options become more valuable and liquid, helping attract and retain talent.
*   **Prestige and Credibility**: Being publicly traded increases brand visibility and credibility with customers, partners, and suppliers.
*   **The Trade-offs**: Public companies face quarterly pressure, SEC reporting requirements, intense scrutiny, short-term thinking pressure, and loss of control.

## Part 3: The IPO Process — Step by Step

Going public is a complex, expensive, and time-consuming process that typically takes 6-12 months.

*   **Step 1 — Choose Underwriters**: Hire investment banks (Goldman Sachs, Morgan Stanley, JP Morgan) to manage the [IPO](/glossary#ipo). They provide advice, pricing, and distribute shares.
*   **Step 2 — Due Diligence**: Lawyers and accountants review everything. Financial statements are audited. Legal risks are assessed. This takes months.
*   **Step 3 — SEC Filing**: File a registration statement (S-1) with the [SEC](/glossary#sec). Contains detailed financial information, [risk](/glossary#risk) factors, use of proceeds, and management bios. Available publicly on EDGAR.
*   **Step 4 — Roadshow**: Company executives travel for 1-2 weeks presenting to institutional investors (pension funds, [mutual funds](/glossary#mutual-fund), hedge funds). Gauge demand.
*   **Step 5 — Pricing**: Night before trading, underwriters set the final offer price based on investor demand and market conditions.
*   **Step 6 — Trading Begins**: Shares start trading on the exchange. Often there's a significant "pop" on day one as demand from retail investors drives up the price.
*   **Cost**: [IPO](/glossary#ipo) fees typically run 5-7% of proceeds for underwriters, plus millions in legal and accounting fees.

## Part 4: Understanding IPO Pricing

[IPO](/glossary#ipo) pricing is both art and science. The price you see on day one has already been manipulated.

*   **The Offer Price**: Set by underwriters the night before trading. Institutional investors (the big players) buy at this price.
*   **The Pop**: On average, [IPOs](/glossary#ipo) rise 15-20% on the first day. This sounds good, but it means the company was deliberately underpriced.
*   **Why Underpricing?**: Underwriters want a successful [IPO](/glossary#ipo) (no embarrassing crash). They also want happy institutional clients who got a 20% gain in one day.
*   **Who Benefits?**: Institutional investors who got shares at the offer price profit from the pop. Retail investors buy at the inflated opening price.
*   **The [IPO](/glossary#ipo) Game**: "It's Probably Overpriced" is an industry joke. By the time retail investors can buy, the easy gains have already been captured.
*   **Long-Term Reality**: Research shows [IPOs](/glossary#ipo) underperform the market over 3-5 years after listing. The hype and publicity attract buyers, but fundamentals eventually matter.

## Part 5: The Lock-Up Period

After an [IPO](/glossary#ipo), company insiders can't immediately dump their shares. There are restrictions designed to prevent a flood of selling.

*   **What It Is**: A contractual agreement preventing insiders from selling for typically 90-180 days after the [IPO](/glossary#ipo).
*   **Who's Locked Up**: Founders, executives, employees with stock options, early investors.
*   **Why It Exists**: Without lock-ups, insiders might sell immediately, crashing the price. It builds trust with new public shareholders.
*   **Lock-Up Expiration**: When the lock-up expires, a massive amount of shares becomes available for sale. This often causes prices to drop.
*   **Smart Money Watch**: Many experienced investors wait until after lock-up expiration to buy. Let the insiders sell first, then buy at lower prices.
*   **Example**: Facebook [IPO](/glossary#ipo)'d at $38, fell to $18 after lock-up expiration as employees sold. Later recovered and grew massively. Patience paid.

## Part 6: Alternative IPO Methods

Traditional [IPOs](/glossary#ipo) are expensive and reward insiders over retail investors. Alternative methods have emerged.

*   **Direct Listing**: Company lists directly without issuing new shares or using underwriters. Spotify (2018), Slack (2019), Coinbase (2021). No [capital](/glossary#capital) raised, just [liquidity](/glossary#liquidity) for existing shareholders.
*   **SPAC (Special Purpose Acquisition Company)**: A "blank check" company [IPOs](/glossary#ipo), then merges with a private company, making it public. Popular 2020-2021, crashed in 2022. Often poor investments.
*   **Auction-Based [IPO](/glossary#ipo)**: Google used a "Dutch auction" where investors bid their desired price. More fair, but rarely used.
*   **Direct Listing Pros**: No underwriter fees (saves 5-7%), no lock-up period required, no [dilution](/glossary#dilution).
*   **Direct Listing Cons**: No new [capital](/glossary#capital) raised, no underwriter support for share price, less analyst coverage.
*   **SPAC Warning**: Most SPAC mergers have performed terribly. Retail investors often lose money. Avoid unless you're an expert.

## Part 7: IPO Red Flags — What to Watch For

Before investing in any [IPO](/glossary#ipo), look for these warning signs that suggest caution.

*   **No Profitability Path**: Losing money is okay if there's a clear path to profits. If not, be worried. WeWork [IPO](/glossary#ipo) collapsed over this.
*   **Insider Selling**: If existing investors are selling heavily in the [IPO](/glossary#ipo), they're cashing out. Why aren't they holding?
*   **Extreme Valuation**: [P/E ratios](/glossary#pe-ratio) of 100+ or companies valued at 20x revenue are pricing in perfection. Any disappointment causes crashes.
*   **Too Much Hype**: When your Uber driver mentions an [IPO](/glossary#ipo), it's probably overpriced. [Retail](/glossary#retail-investor) excitement often peaks at the worst time.
*   **Related-Party Transactions**: Management dealing with companies they own personally. Governance red flag.
*   **Dual-Class Shares**: Founders keeping supervoting shares (Snap, Facebook, Google) means you have no real say. They control the company forever.

## Part 8: Should You Invest in IPOs?

The honest answer for most retail investors: probably not. Here's why.

*   **The Data**: Academic research consistently shows [IPOs](/glossary#ipo) underperform the broader market over 3-5 years after listing.
*   **Asymmetric Information**: Company insiders know far more than you. If they're selling, what do they know that you don't?
*   **Hot Market Timing**: Most [IPOs](/glossary#ipo) happen during [bull markets](/glossary#bull-market) when valuations are stretched. You're buying at peak optimism.
*   **Better Strategy**: Wait 6-12 months post-[IPO](/glossary#ipo). Let the hype fade. Let the lock-up expire. Buy at a more reasonable price once the company has a public track record.
*   **Exceptions**: If you're a customer who deeply understands the company's value (you use the product daily and see its moat), you might have an edge.
*   **Alternative**: Own an [Index Fund](/glossary#index-fund). Successful [IPOs](/glossary#ipo) will eventually be added to the index. You'll own them automatically without gambling on day-one pops.

## Part 9: Famous IPO Disasters and Successes

History teaches valuable lessons about [IPO](/glossary#ipo) investing. Let the stories inform your approach.

*   **The Facebook Disaster (2012)**: [IPO](/glossary#ipo)'d at $38, fell to $18 within months. Everyone declared it a failure. Insiders who sold laughed. Today it's worth $300+. Patience won.
*   **The Pets.com Disaster (2000)**: [IPO](/glossary#ipo)'d during dot-com bubble. No profits, ridiculous valuation. Stock went to $0 within a year. Lesson: fundamentals eventually matter.
*   **The Google Success (2004)**: [IPO](/glossary#ipo)'d at $85. Skeptics said it was overpriced. Today it's over $150 (split-adjusted: ~$2,000+ pre-split). Great company at reasonable price = success.
*   **The WeWork Failure (2019)**: Tried to [IPO](/glossary#ipo) at $47 billion [valuation](/glossary#valuation). S-1 revealed massive losses and bizarre governance. [IPO](/glossary#ipo) cancelled. Later went public via SPAC at $9 billion. Crashed to near $0.
*   **Coinbase (2021)**: Direct listing at peak crypto mania around $350. Fell to $50 in bear market. [Volatility](/glossary#volatility) highlights [risk](/glossary#risk) of buying at peak hype.
*   **The Lesson**: Great companies can be bad investments at wrong prices. Bad companies rarely become good investments at any price.
\`,
        keyTakeaways: [
            "An IPO is when a private company sells shares to the public for the first time.",
            "IPOs are often deliberately underpriced for institutions — retail investors buy the inflated price.",
            "Lock-up expiration (90-180 days post-IPO) often causes price drops as insiders sell.",
            "Most IPOs underperform over 3-5 years — consider waiting before buying."
        ]
    },`;

const startMarker = '"sm_2": {';
const endMarker = '"sm_3": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_2: IPO - VALIDATION ===');
console.log('Character Count:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Part Count:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated sm_2!');
