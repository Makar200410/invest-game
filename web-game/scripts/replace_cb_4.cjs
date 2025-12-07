const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_4": {
        title: "Altcoins & Tokens",
        content: \`
# Beyond Bitcoin: Understanding Altcoins and Tokens

Bitcoin was the first cryptocurrency, but it is far from the only one. Today, there are over 20,000 cryptocurrencies—collectively called "altcoins" (alternative coins). Some aim to improve on Bitcoin's technology; others serve entirely different purposes. Understanding the landscape of altcoins and tokens is essential for navigating the crypto ecosystem, whether you're investing, building, or simply trying to avoid scams.

## Part 1: What is an Altcoin?

**Definition**:
*   An altcoin is any cryptocurrency that is not Bitcoin.
*   The term comes from "alternative coin."
*   Ethereum is technically an altcoin, though it is often considered in its own category due to its size and influence.

**Why Do Altcoins Exist?**:
*   Some aim to solve Bitcoin's limitations (speed, scalability, energy use).
*   Some introduce new features (smart contracts, privacy, cross-chain interoperability).
*   Some are outright scams or cash grabs.

**Categories of Altcoins**:
*   **Payment Coins**: Designed for transactions (Litecoin, Bitcoin Cash).
*   **Platform Coins**: Power smart contract platforms (Ethereum, Solana, Cardano).
*   **Privacy Coins**: Focus on anonymity (Monero, Zcash).
*   **Meme Coins**: Started as jokes but gained popularity (Dogecoin, Shiba Inu).
*   **Stablecoins**: Pegged to fiat currencies (USDC, USDT, DAI).
*   **Utility Tokens**: Used within specific applications (Chainlink, Uniswap).

## Part 2: Coins vs. Tokens

These terms are often used interchangeably but have different meanings.

**Coins**:
*   Have their own independent blockchain.
*   Examples: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA).
*   Coins are typically used to pay transaction fees on their native network.

**Tokens**:
*   Built on top of an existing blockchain (usually Ethereum).
*   Do not have their own blockchain.
*   Examples: USDC (ERC-20 on Ethereum), LINK (ERC-20), UNI (ERC-20).
*   Tokens rely on the underlying blockchain for security and consensus.

**Token Standards**:
*   **ERC-20**: The most common Ethereum token standard. Fungible tokens (each unit is the same).
*   **ERC-721**: Non-fungible tokens (NFTs). Each token is unique.
*   **ERC-1155**: Multi-token standard (can be both fungible and non-fungible).
*   Other chains have their own standards (SPL on Solana, BEP-20 on BNB Chain).

## Part 3: Major Altcoins Overview

A tour of the largest altcoins by market cap.

**Ethereum (ETH)**:
*   The second-largest cryptocurrency.
*   Powers DeFi, NFTs, and thousands of dApps.
*   Transitioned to Proof of Stake in 2022.

**BNB (Binance Coin)**:
*   Native coin of Binance Smart Chain (BSC).
*   Used for trading fee discounts on Binance exchange.
*   Powers a large DeFi ecosystem on BSC.

**Solana (SOL)**:
*   High-speed blockchain (~400 TPS currently, theoretically 65,000 TPS).
*   Uses Proof of History + Proof of Stake.
*   Popular for NFTs and gaming.

**Cardano (ADA)**:
*   Developed with a research-first approach.
*   Uses Proof of Stake (Ouroboros).
*   Slower development but focus on security and formal verification.

**XRP (Ripple)**:
*   Designed for cross-border payments.
*   Used by financial institutions.
*   Faced SEC lawsuit (partially resolved in 2023).

**Polkadot (DOT)**:
*   Multi-chain network (parachains).
*   Enables interoperability between different blockchains.

## Part 4: Utility Tokens and Their Purpose

Tokens that power specific applications.

**Chainlink (LINK)**:
*   Provides decentralized oracles (off-chain data for smart contracts).
*   Essential for DeFi (price feeds, random numbers, external APIs).

**Uniswap (UNI)**:
*   Governance token for Uniswap (the largest decentralized exchange).
*   Holders vote on protocol changes.

**Aave (AAVE)**:
*   Governance and safety token for Aave (lending protocol).
*   Can be staked to secure the protocol.

**The Graph (GRT)**:
*   Indexes blockchain data for querying.
*   Powers many dApp frontends.

**Tokenomics**:
*   Utility tokens have specific economic designs:
    *   Total supply, inflation schedule, burn mechanisms.
    *   Use cases (governance, staking, fees).
    *   Distribution (team, investors, community).

## Part 5: Stablecoins — The Bridge to Fiat

Cryptocurrencies designed to maintain a stable value.

**Types of Stablecoins**:
*   **Fiat-Collateralized**: Backed 1:1 by USD in a bank account (USDC, USDT).
*   **Crypto-Collateralized**: Backed by other crypto assets (DAI, backed by ETH).
*   **Algorithmic**: Use algorithms to maintain peg (often failed, e.g., UST collapse).

**Major Stablecoins**:
*   **USDT (Tether)**: Largest by market cap. Controversial reserve transparency.
*   **USDC (Circle)**: Regulated, transparent reserves. Widely used in DeFi.
*   **DAI (MakerDAO)**: Decentralized, backed by crypto collateral.
*   **BUSD (Binance USD)**: Issued by Paxos, regulated.

**Use Cases**:
*   Trading pairs on exchanges (BTC/USDT, ETH/USDC).
*   Parking value during volatility without off-ramping to fiat.
*   Payments and remittances.
*   DeFi yield farming.

## Part 6: Meme Coins and Speculation

The wild side of crypto.

**Dogecoin (DOGE)**:
*   Created in 2013 as a joke, featuring the Shiba Inu meme.
*   Gained mainstream attention when Elon Musk tweeted about it.
*   No real utility, but strong community.

**Shiba Inu (SHIB)**:
*   "Dogecoin killer." Created in 2020.
*   Community-driven with an ecosystem (Shibaswap, Shibarium).

**Pepe (PEPE)**:
*   Meme coin based on the Pepe the Frog meme.
*   Skyrocketed in 2023.

**The Risks**:
*   Meme coins are highly speculative. Most go to zero.
*   Extreme volatility: 100x gains and 99% crashes are common.
*   Lack of fundamentals—price is driven purely by hype and social media.
*   Rug pulls and scams are rampant.

**The Appeal**:
*   Low entry price (fractions of a cent).
*   Community and meme culture.
*   Lottery-ticket potential for massive gains.

## Part 7: How to Evaluate Altcoins

Due diligence is essential.

**Red Flags**:
*   Anonymous team with no verifiable history.
*   No working product (just a whitepaper and promises).
*   Unrealistic promises ("guaranteed 100x").
*   Heavy insider allocation (team holds 50%+ of supply).
*   Copy-paste code from other projects.

**Green Flags**:
*   Experienced, doxxed team.
*   Working product with real users.
*   Clear tokenomics and use case.
*   Active developer community (check GitHub).
*   Funding from reputable VCs.

**Research Checklist**:
1.  Read the whitepaper.
2.  Check the team's background (LinkedIn, Twitter).
3.  Examine tokenomics (supply, distribution, vesting).
4.  Use the product (if possible).
5.  Check community sentiment (Discord, Twitter, Reddit).
6.  Look for audits (smart contract security).

## Part 8: Altcoin Investment Strategies

How to approach altcoin investing.

**Diversification**:
*   Don't put everything in one altcoin.
*   A portfolio might be 50% BTC, 30% ETH, 20% diversified altcoins.

**Laddering In**:
*   Don't buy all at once. Dollar-cost average over time.

**Taking Profits**:
*   Altcoins can pump 10x and then crash 90%.
*   Have a plan to take profits (e.g., sell 25% at 2x, another 25% at 4x).

**Risk Management**:
*   Only invest what you can afford to lose entirely.
*   Small-cap altcoins are high risk, high reward.

**Cycle Awareness**:
*   Altcoins tend to outperform Bitcoin in bull markets ("altseason").
*   In bear markets, altcoins crash harder than Bitcoin.

## Part 9: Summary and Key Takeaways

*   **Altcoins are all cryptocurrencies other than Bitcoin**.
*   **Coins have their own blockchain; tokens are built on existing chains** (usually Ethereum).
*   **Major categories include platform coins, utility tokens, stablecoins, and meme coins**.
*   **Stablecoins bridge crypto to fiat** and are essential for trading and DeFi.
*   **Meme coins are highly speculative**—most go to zero, but some produce massive gains.
*   **Due diligence is critical**: check team, product, tokenomics, and community.
*   **Diversify and manage risk**—altcoins are far more volatile than Bitcoin.
*   **Altseason**: Altcoins tend to outperform in bull markets and underperform in bear markets.
\`,
        keyTakeaways: [
            "Altcoins are all cryptocurrencies other than Bitcoin.",
            "Coins have their own blockchain; tokens are built on existing chains.",
            "Stablecoins (USDC, USDT) bridge crypto to fiat for trading and DeFi.",
            "Meme coins are highly speculative—most go to zero.",
            "Due diligence is critical: check team, product, tokenomics, and audits."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Check if cb_4 already exists
const cb4Exists = content.indexOf('"cb_4":');
if (cb4Exists !== -1) {
    console.log('cb_4 already exists! Replacing...');
    const startPattern = /    "cb_4": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    // Find cb_3 and insert after it
    const cb3End = content.indexOf('"cb_3":');
    if (cb3End !== -1) {
        const cb3KeyTakeaways = content.indexOf('keyTakeaways:', cb3End);
        const cb3EndBracket = content.indexOf('},', cb3KeyTakeaways);
        if (cb3EndBracket !== -1) {
            const insertPos = cb3EndBracket + 2;
            content = content.slice(0, insertPos) + '\n' + newContent + content.slice(insertPos);
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('cb_4 added successfully!');

// Verify character count
const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
