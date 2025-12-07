const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_12": {
        title: "Regulatory Landscape",
        content: \`
# Navigating Crypto Regulation: The Global Landscape

Cryptocurrency exists in a complex and evolving regulatory environment. Governments worldwide are grappling with how to classify, tax, and regulate digital assets. For investors and builders, understanding the regulatory landscape is essential—both to stay compliant and to anticipate market-moving events. Regulation can kill projects overnight or legitimize them for institutional adoption.

## Part 1: Why Regulation Matters

The intersection of technology and law.

**The Wild West Phase**:
*   Early crypto operated in a regulatory gray zone.
*   Few laws addressed digital assets specifically.
*   This allowed innovation but also enabled scams, hacks, and market manipulation.

**The Shift**:
*   As crypto grew, regulators took notice.
*   Major events (ICO bubble 2017, FTX collapse 2022) accelerated regulatory action.
*   Today, no serious crypto project ignores regulatory considerations.

**Why It Matters to You**:
*   Tax obligations: You may owe taxes on crypto gains.
*   Exchange access: Some exchanges restrict users by jurisdiction.
*   Project risk: Tokens deemed securities may be delisted or their issuers prosecuted.
*   Custody: Regulations affect how and where you can hold crypto.

## Part 2: Key Regulatory Questions

The fundamental issues regulators address.

**Is It a Security or a Commodity?**:
*   **Security**: Subject to securities laws (registration, disclosure). Think stocks.
*   **Commodity**: Subject to commodity laws (less restrictive). Think gold.
*   Bitcoin is widely considered a commodity.
*   Ethereum: The SEC has hinted it's a commodity, but debates continue.
*   Most altcoins/ICO tokens: Likely securities (if they pass the Howey Test).

**The Howey Test (US)**:
*   Is there an investment of money?
*   In a common enterprise?
*   With an expectation of profit?
*   Derived from the efforts of others?
*   If yes to all, it's a security.

**AML/KYC**:
*   Anti-Money Laundering and Know Your Customer rules.
*   Exchanges must verify user identity and report suspicious activity.
*   Privacy coins and mixers face extra scrutiny.

**Taxation**:
*   Most jurisdictions treat crypto as property—gains are taxable.
*   Trading, selling, or spending crypto triggers taxable events.

## Part 3: United States Regulation

The global bellwether.

**SEC (Securities and Exchange Commission)**:
*   Focuses on tokens that may be securities.
*   Has brought enforcement actions against ICOs, exchanges (Coinbase, Binance).
*   The SEC's classification of tokens is a major industry concern.

**CFTC (Commodity Futures Trading Commission)**:
*   Oversees Bitcoin and Ethereum futures.
*   Considers BTC and ETH commodities.
*   Regulates derivatives markets.

**Treasury/FinCEN**:
*   Focuses on AML/KYC.
*   Proposed rules for wallet verification and transaction reporting.

**IRS (Internal Revenue Service)**:
*   Crypto is taxable property.
*   Capital gains tax on sales. Income tax on staking rewards, mining income.
*   Form 8949 for crypto transactions.

**State Level**:
*   New York's BitLicense: Strict licensing requirement for crypto businesses.
*   Wyoming: Crypto-friendly laws attracting companies.

## Part 4: European Union Regulation

MiCA and beyond.

**Markets in Crypto-Assets (MiCA)**:
*   Comprehensive regulatory framework passed in 2023.
*   Covers stablecoins, utility tokens, crypto service providers.
*   Requires licensing for exchanges and wallet providers.
*   Sets reserves requirements for stablecoin issuers.

**Stablecoin Rules**:
*   Issuers must hold reserves and be authorized.
*   USDT (Tether) faces challenges meeting MiCA requirements.

**Travel Rule**:
*   Crypto transfers over €1,000 require sender/receiver identification.
*   Applies to exchanges and wallets.

**Taxation**:
*   Varies by country. Germany: No tax on crypto held > 1 year. Others tax every sale.

## Part 5: Asia-Pacific Regulation

A mixed landscape.

**China**:
*   Banned crypto trading and mining (2021).
*   Developing a Central Bank Digital Currency (CBDC): Digital Yuan.
*   Crypto remains in underground/gray markets.

**Japan**:
*   One of the first to regulate crypto exchanges (after Mt. Gox).
*   Crypto is legal tender for payments.
*   Exchanges must register with the FSA.

**Singapore**:
*   Crypto-friendly but tightening.
*   MAS licenses crypto service providers.
*   Retail trading restrictions increasing.

**South Korea**:
*   Strict AML/KYC.
*   Exchanges must partner with banks.
*   High taxes on crypto gains.

**India**:
*   30% tax on crypto gains.
*   No clear regulatory framework. Uncertainty remains.

## Part 6: Other Key Jurisdictions

**United Kingdom**:
*   FCA regulates crypto marketing and promotions.
*   Exchanges must register.
*   No comprehensive crypto law yet (post-Brexit).

**Switzerland**:
*   Crypto-friendly "Crypto Valley" (Zug).
*   Clear legal framework.
*   Many crypto foundations and projects based here.

**UAE (Dubai)**:
*   Aggressive courting of crypto industry.
*   Virtual Asset Regulatory Authority (VARA) licensing.
*   Binance, Bybit, others setting up regional HQs.

**El Salvador**:
*   First country to make Bitcoin legal tender (2021).
*   Controversial experiment. IMF criticism.
*   Bitcoin bonds and geothermal mining initiatives.

## Part 7: Regulatory Risks for Investors

What to watch.

**Delistings**:
*   If a token is deemed a security, exchanges may delist it.
*   Price crashes often follow.
*   Example: SEC sued Ripple; many US exchanges delisted XRP.

**Exchange Shutdowns**:
*   Regulators can force exchanges to stop serving certain jurisdictions.
*   Binance has exited multiple countries.

**Sanctions**:
*   OFAC can sanction addresses (e.g., Tornado Cash).
*   Holding or interacting with sanctioned addresses can put you at legal risk.

**Tax Enforcement**:
*   Tax authorities are getting better at tracking crypto.
*   Exchanges report to tax agencies. On-chain analysis firms assist.
*   Failure to report can result in penalties, audits, or prosecution.

## Part 8: The Future of Crypto Regulation

**Trends**:
*   **Increasing Clarity**: More laws and frameworks globally.
*   **Stablecoin Focus**: Regulators want control over dollar-pegged assets.
*   **CBDC Competition**: Governments launching their own digital currencies.
*   **Self-Custody Threats**: Proposed rules to track/report self-custody wallets.
*   **DeFi Scrutiny**: Regulators figuring out how to apply laws to decentralized protocols.

**Scenarios**:
*   **Optimistic**: Clear rules, institutional adoption, crypto becomes mainstream finance.
*   **Pessimistic**: Heavy-handed rules, privacy eroded, innovation moves offshore.
*   **Reality**: Likely a mix, varying by jurisdiction.

**Investor Implications**:
*   Stay informed on regulatory developments.
*   Diversify across jurisdictions.
*   Use compliant platforms for fiat on/off-ramps.
*   Keep records for tax purposes.

## Part 9: Summary and Key Takeaways

*   **Regulation is evolving rapidly**—what's legal today may change tomorrow.
*   **Key questions**: Is it a security or commodity? What are the tax implications?
*   **US SEC** is the most impactful regulator; its classification decisions move markets.
*   **MiCA (EU)** provides comprehensive framework for Europe.
*   **Asia is mixed**: China banned, Japan/Singapore regulated, India uncertain.
*   **Regulatory risks**: delistings, exchange shutdowns, sanctions, tax enforcement.
*   **Future trends**: stablecoin rules, CBDC competition, DeFi scrutiny.
*   **Stay compliant**: Use regulated platforms, report taxes, keep records.
*   **Watch the news**: Regulatory announcements can crash or pump markets overnight.
\`,
        keyTakeaways: [
            "Crypto regulation varies widely by jurisdiction and is evolving rapidly.",
            "US SEC classification (security vs commodity) is market-moving.",
            "MiCA provides comprehensive EU framework; Asia is mixed.",
            "Regulatory risks include delistings, exchange shutdowns, and tax enforcement.",
            "Stay informed, use compliant platforms, and keep records for taxes."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_12":');
if (cbExists !== -1) {
    console.log('cb_12 already exists! Replacing...');
    const startPattern = /    "cb_12": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_11":');
    if (prevEnd !== -1) {
        const prevKeyTakeaways = content.indexOf('keyTakeaways:', prevEnd);
        const prevEndBracket = content.indexOf('},', prevKeyTakeaways);
        if (prevEndBracket !== -1) {
            const insertPos = prevEndBracket + 2;
            content = content.slice(0, insertPos) + '\n' + newContent + content.slice(insertPos);
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('cb_12 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
