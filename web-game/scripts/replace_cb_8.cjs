const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_8": {
        title: "Stablecoins",
        content: \`
# The Stable Foundation: Understanding Stablecoins

In a world of extreme cryptocurrency volatility, stablecoins provide an anchor. They are cryptocurrencies designed to maintain a stable value, typically pegged to the US dollar. Stablecoins have become the backbone of the crypto ecosystem—used for trading, payments, remittances, and DeFi. But not all stablecoins are created equal. Understanding their mechanisms, risks, and use cases is essential for any crypto participant.

## Part 1: Why Stablecoins Exist

The problem they solve.

**Volatility is a Barrier**:
*   Bitcoin can move 10% in a day. Ethereum can move 20%.
*   This makes crypto impractical for everyday payments. Who wants to pay for coffee with an asset that might be worth 30% less tomorrow?
*   Merchants don't want to accept something that could halve in value before they convert it.

**The Need for On-Chain Dollars**:
*   Traders need to exit volatile positions without off-ramping to banks (which is slow and has fees).
*   DeFi needs a stable unit of account for lending, borrowing, and liquidity pools.
*   Crypto-native applications need a dollar equivalent that lives on-chain.

**Stablecoins = On-Chain Fiat**:
*   1 USDC = 1 USD (in theory).
*   You can transact, store value, and earn yield—all without leaving crypto.

## Part 2: Types of Stablecoins

Different mechanisms, different risks.

**Fiat-Collateralized (Centralized)**:
*   Backed 1:1 by fiat currency in a bank account.
*   Issuer holds reserves (cash, treasuries, bonds).
*   You can redeem 1 token for $1 from the issuer.
*   Examples: USDC (Circle), USDT (Tether), BUSD (Paxos).

**Crypto-Collateralized (Decentralized)**:
*   Backed by other cryptocurrencies.
*   Over-collateralized to absorb volatility. Deposit $150 of ETH to mint $100 of stablecoin.
*   Examples: DAI (MakerDAO), LUSD (Liquity).

**Algorithmic (Unsecured)**:
*   No collateral. Uses algorithms to expand/contract supply to maintain peg.
*   Extremely risky. Most have failed.
*   Example: UST (Terra/Luna—collapsed in May 2022, lost $40 billion).

**Real-World Asset (RWA) Backed**:
*   Backed by traditional assets like short-term treasuries.
*   Example: USDY (Ondo Finance).

## Part 3: Major Stablecoins Explained

The market leaders.

**USDT (Tether)**:
*   Largest stablecoin by market cap (~$100+ billion).
*   Controversial: Tether has been opaque about its reserves for years.
*   Periodic audits (not full audits) show a mix of cash, treasuries, and commercial paper.
*   Despite FUD, USDT has maintained its peg through multiple crises.

**USDC (Circle)**:
*   Second largest. Considered more transparent and regulated.
*   Monthly attestations from major accounting firms.
*   Reserves: Cash and short-term US treasuries.
*   More popular in DeFi and with institutions.
*   Risk: Circle can freeze USDC at specific addresses (centralization).

**DAI (MakerDAO)**:
*   Largest decentralized stablecoin.
*   Over-collateralized by crypto (primarily ETH, but also USDC, RWA).
*   No single entity controls it—governed by MKR token holders.
*   Risk: Relies on proper liquidation mechanisms. In extreme crashes, undercollateralization is possible.

**BUSD (Paxos/Binance)**:
*   Issued by Paxos, regulated in New York.
*   Binance stopped minting new BUSD in 2023 (regulatory pressure).
*   Winding down.

## Part 4: The De-Peg Risk

What happens when stablecoins lose their peg.

**The Peg Mechanism**:
*   USDC = $1 because Circle guarantees redemption at $1.
*   If market price drops below $1, arbitrageurs buy USDC at 0.99 and redeem for $1, pocketing the difference.
*   This buying pressure pushes the price back to $1.

**De-Peg Events**:
*   USDC briefly de-pegged to ~$0.88 in March 2023 when Silicon Valley Bank (a Circle reserve holder) collapsed.
*   It recovered within days after the government guaranteed depositors.
*   USDT has survived many FUD cycles but faces persistent skepticism.

**Algorithmic Stablecoin Failure (UST/LUNA)**:
*   UST was an algorithmic stablecoin. Users could swap 1 UST for $1 of LUNA and vice versa.
*   When confidence collapsed, massive UST redemptions flooded the market with LUNA.
*   LUNA hyperinflated. UST lost its peg entirely—falling to near zero.
*   $40+ billion in value was wiped out in days. Many were ruined.

## Part 5: Regulatory Landscape

Governments are paying attention.

**US Regulation**:
*   Stablecoins are increasingly regulated.
*   Circle is based in the US and complies with state and federal regulations.
*   Tether is offshore (British Virgin Islands) and has faced legal actions.
*   Proposed legislation could require stablecoin issuers to hold bank-like reserves.

**Sanctions Compliance**:
*   USDC and USDT issuers comply with OFAC sanctions.
*   They can freeze or blacklist addresses.
*   This introduces centralization and censorship risk.

**CBDC Competition**:
*   Central banks are developing Central Bank Digital Currencies (CBDCs).
*   CBDCs could compete with or replace stablecoins for payments.
*   Crypto purists prefer decentralized stablecoins to government-controlled CBDCs.

## Part 6: Stablecoins in DeFi

The lifeblood of decentralized finance.

**Trading Pairs**:
*   Most trading pairs on DEXs are against stablecoins (ETH/USDC, BTC/USDT).
*   Stablecoins provide a stable reference point.

**Lending and Borrowing**:
*   You deposit USDC to earn interest.
*   You borrow USDC against your crypto collateral.
*   Interest rates fluctuate based on supply and demand.

**Liquidity Pools**:
*   Stablecoin pools (USDC/USDT, DAI/USDC) have low impermanent loss.
*   Popular for conservative yield farming.

**Yield Farming**:
*   Stablecoin yields can range from 2-10% APY depending on the protocol and risk.
*   Higher yields often involve higher risks (smart contract, protocol).

## Part 7: Earning Yield on Stablecoins

Putting your dollars to work.

**Centralized Options**:
*   Exchanges like Coinbase offer yield on USDC (currently ~4-5%).
*   Custodial risk: you're trusting the exchange.

**DeFi Options**:
*   **Aave/Compound**: Lend stablecoins for 2-5% APY.
*   **Curve**: Provide liquidity to stablecoin pools for fees + CRV rewards.
*   **Yearn Finance**: Automated yield optimization across DeFi protocols.

**T-Bill Backed Yield**:
*   Protocols like MakerDAO now invest reserves in US treasuries.
*   DAI Savings Rate (DSR) offers ~5% (as of 2024), backed by treasury yield.
*   USDY from Ondo distributes treasury yield to token holders.

**Risks**:
*   Smart contract bugs.
*   Protocol insolvency.
*   Regulatory action (protocol shutdowns).

## Part 8: Choosing the Right Stablecoin

Factors to consider.

**For Trading**:
*   USDT has the deepest liquidity on centralized exchanges.
*   USDC is widely supported and more trusted by institutions.

**For DeFi**:
*   DAI if you value decentralization.
*   USDC for broad DeFi support and liquidity.

**For Holding**:
*   Consider reserve transparency. USDC is more transparent than USDT.
*   Consider jurisdiction. USDC is US-regulated and can be frozen.

**For Payments/Remittances**:
*   Either USDC or USDT work for most use cases.
*   Layer 2s (Arbitrum, Optimism) or other chains (Solana, Tron) offer cheap transfers.

## Part 9: Summary and Key Takeaways

*   **Stablecoins are crypto tokens pegged to fiat**, usually the US dollar.
*   **Fiat-collateralized (USDC, USDT)** are backed by reserves; **crypto-collateralized (DAI)** are over-collateralized.
*   **Algorithmic stablecoins (UST) failed catastrophically**—avoid them.
*   **De-peg risk exists**: even major stablecoins can briefly lose their peg in crises.
*   **Stablecoins are essential for DeFi**: trading, lending, borrowing, yield farming.
*   **Regulatory scrutiny is increasing**: centralized stablecoins can freeze funds.
*   **Earn yield** on stablecoins through lending, LPing, or T-bill-backed products.
*   **Choose based on your needs**: liquidity, decentralization, transparency, and jurisdiction.
\`,
        keyTakeaways: [
            "Stablecoins are crypto tokens pegged to fiat, typically the US dollar.",
            "Fiat-collateralized (USDC, USDT) are backed by reserves; crypto-collateralized (DAI) are over-collateralized.",
            "Algorithmic stablecoins like UST have failed catastrophically—avoid them.",
            "Stablecoins are essential for DeFi trading, lending, and yield farming.",
            "Choose based on liquidity, decentralization, and transparency needs."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_8":');
if (cbExists !== -1) {
    console.log('cb_8 already exists! Replacing...');
    const startPattern = /    "cb_8": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_7":');
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
console.log('cb_8 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
