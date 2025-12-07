const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_10": {
        title: "Mining vs. Staking",
        content: \`
# Securing the Network: Mining vs. Staking

In decentralized networks, someone must validate transactions and add new blocks to the blockchain. But who does this, and how are they incentivized? The two dominant mechanisms are Proof of Work (PoW) mining and Proof of Stake (PoS) staking. Each has profound implications for security, decentralization, energy use, and how you can earn passive income in crypto.

## Part 1: Why Consensus Matters

The problem of trust in trustless systems.

**The Double-Spend Problem**:
*   In digital systems, copying is easy. How do you prevent someone from spending the same digital coin twice?
*   Traditional solution: A trusted central authority (bank) keeps the ledger.
*   Crypto solution: Decentralized consensus—the network agrees on the ledger.

**What is Consensus?**:
*   A mechanism by which all nodes in a decentralized network agree on the current state of the blockchain.
*   Without consensus, different nodes could have different versions of the truth.

**Validators/Miners**:
*   The entities that participate in consensus.
*   They are rewarded with newly minted coins and transaction fees.
*   In return, they secure the network.

## Part 2: Proof of Work (PoW) — Mining

The original consensus mechanism.

**How It Works**:
*   Miners compete to solve a complex mathematical puzzle (finding a hash below a target).
*   The puzzle is computationally expensive but easy to verify.
*   The first miner to solve it gets to propose the next block.
*   Other nodes verify the solution and add the block to their chain.

**Security**:
*   To attack the network, an attacker needs more than 50% of the total mining power.
*   This is called a 51% attack. On Bitcoin, it's practically impossible due to the massive hashrate.

**Rewards**:
*   Block reward: Newly minted coins (Bitcoin: 6.25 BTC → 3.125 BTC after 2024 halving).
*   Transaction fees: Users pay fees to have their transactions included.

**Equipment**:
*   Early days: CPUs, then GPUs.
*   Today: ASICs (Application-Specific Integrated Circuits)—specialized hardware.
*   Mining has become an industrial operation.

## Part 3: Mining Economics

Is mining profitable?

**Costs**:
*   **Hardware**: ASICs cost $2,000-$10,000+.
*   **Electricity**: Mining consumes massive power. Cost varies by location ($.03-$.15/kWh).
*   **Cooling**: Machines generate heat; cooling is necessary.
*   **Hosting**: If not home mining, you pay a hosting facility.

**Revenue**:
*   Block rewards + fees.
*   Revenue depends on the coin's price, network difficulty, and your hashrate.

**Profitability Formula**:
*   Profit = (Hashrate × Coin Price × Block Reward) – (Electricity Cost + Hardware Depreciation + Operating Costs).
*   Use mining calculators (WhatToMine) to estimate.

**Break-Even Point**:
*   Miners often operate close to break-even.
*   When prices drop, less efficient miners shut off, reducing difficulty.
*   When prices rise, more miners join, increasing difficulty.

## Part 4: Proof of Stake (PoS) — Staking

The energy-efficient alternative.

**How It Works**:
*   Validators lock up ("stake") their coins as collateral.
*   The protocol randomly selects a validator to propose the next block.
*   Selection is weighted by stake: more coins = higher chance of selection.
*   If the validator acts honestly, they earn rewards. If they cheat, they lose part of their stake (slashing).

**Security**:
*   To attack the network, an attacker needs to control 51%+ of the staked coins.
*   This is expensive (you'd have to buy a majority of the supply).
*   Slashing punishes bad actors.

**Energy Efficiency**:
*   PoS uses 99.95%+ less energy than PoW.
*   No puzzle-solving, no ASICs, no data centers.

**Examples**:
*   Ethereum (post-Merge), Solana, Cardano, Polkadot, Avalanche.

## Part 5: Staking Economics

Earning yield by securing the network.

**Staking Rewards**:
*   Varies by network. Ethereum: ~4-5% APY. Solana: ~6-8%. Cosmos: ~15-20%.
*   Rewards come from inflation (new coins) and transaction fees.

**Requirements**:
*   **Native Staking**: Some networks require a minimum (Ethereum: 32 ETH).
*   **Delegated Staking**: You can delegate your stake to a validator and share rewards.
*   **Liquid Staking**: Stake and receive a liquid token (stETH, rETH) that can be used in DeFi.

**Risks**:
*   **Slashing**: If your validator misbehaves, you can lose part of your stake.
*   **Lock-Up**: Some networks have unbonding periods (e.g., 21 days on Cosmos).
*   **Smart Contract Risk**: Liquid staking involves additional contract risk.

## Part 6: Comparing Mining and Staking

**Energy**:
*   Mining: Enormous energy consumption (Bitcoin uses ~120 TWh/year).
*   Staking: Minimal energy (a standard computer or cloud server).

**Hardware**:
*   Mining: Specialized hardware (ASICs) worth thousands.
*   Staking: Standard computer or even just a wallet (for delegation).

**Accessibility**:
*   Mining: High barrier to entry (capital, technical knowledge).
*   Staking: Low barrier (just hold coins and delegate).

**Decentralization**:
*   Mining: Tends toward centralization (industrial operations, ASIC manufacturers).
*   Staking: Can also centralize (large staking pools control significant portions).

**Security Model**:
*   Mining: Attack requires 51% of hashrate (hardware + electricity).
*   Staking: Attack requires 51% of stake (capital outlay).

## Part 7: Liquid Staking

Staking without lock-up.

**The Problem with Traditional Staking**:
*   Your assets are locked. You can't use them in DeFi.
*   Opportunity cost: While staking, you miss other yield opportunities.

**Liquid Staking Solution**:
*   You stake your ETH with a protocol like Lido.
*   You receive stETH, a liquid token representing your staked ETH + rewards.
*   You can use stETH in DeFi (lending, LPing) while earning staking rewards.

**Major Liquid Staking Providers**:
*   **Lido (stETH)**: Largest. ~30% of staked ETH.
*   **Rocket Pool (rETH)**: More decentralized.
*   **Coinbase (cbETH)**: Custodial, centralized.

**Risks**:
*   **Smart Contract Risk**: Bugs in Lido's contracts could affect your stETH.
*   **De-Peg Risk**: stETH can trade below ETH's value during market stress.
*   **Centralization**: Lido's dominance raises concerns about Ethereum's decentralization.

## Part 8: Which is Right for You?

**Choose Mining If**:
*   You have access to cheap electricity (hydro, solar, stranded gas).
*   You have capital for hardware.
*   You're interested in Bitcoin specifically (PoW-only).
*   You want to diversify into a physical asset (mining equipment).

**Choose Staking If**:
*   You hold ETH, SOL, ADA, or other PoS coins.
*   You want easy, passive income without hardware.
*   You prefer a low-energy-footprint approach.
*   You want to participate in network governance (some PoS protocols).

**Consider Liquid Staking If**:
*   You want to earn staking rewards AND use your capital in DeFi.
*   You're comfortable with smart contract risk.

## Part 9: Summary and Key Takeaways

*   **Proof of Work (Mining)**: Miners solve puzzles to add blocks. Requires hardware, electricity. Highly secure but energy-intensive.
*   **Proof of Stake (Staking)**: Validators lock coins as collateral. Energy-efficient. Selected to propose blocks based on stake.
*   **Mining is capital-intensive**; staking is more accessible.
*   **Staking rewards range from 4-20% APY** depending on the network.
*   **Liquid staking (Lido, Rocket Pool)** lets you stake and still use your assets in DeFi.
*   **Both can centralize**: Mining (large operations) and Staking (large pools).
*   **Choose based on your capital, technical ability, and coin preference**.
\`,
        keyTakeaways: [
            "Mining (PoW) uses computational puzzles; Staking (PoS) uses locked capital as collateral.",
            "Mining is energy-intensive and requires specialized hardware.",
            "Staking is energy-efficient and more accessible to average users.",
            "Liquid staking (Lido, Rocket Pool) allows earning rewards while using assets in DeFi.",
            "Both mechanisms can lead to centralization if large players dominate."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_10":');
if (cbExists !== -1) {
    console.log('cb_10 already exists! Replacing...');
    const startPattern = /    "cb_10": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_9":');
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
console.log('cb_10 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
