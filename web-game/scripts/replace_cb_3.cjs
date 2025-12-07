const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_3": {
        title: "Ethereum & Smart Contracts",
        content: \`
# Ethereum: The World Computer and Smart Contract Platform

If Bitcoin is digital gold, Ethereum is a digital economy. While Bitcoin was designed primarily as a currency and store of value, Ethereum was built as a programmable blockchain—a platform where developers can build decentralized applications (dApps). Ethereum introduced smart contracts: self-executing code that runs on the blockchain. This innovation spawned DeFi, NFTs, DAOs, and an entire ecosystem of decentralized services.

## Part 1: The Vision of Vitalik Buterin

Ethereum was born from a vision of a more programmable blockchain.

**The Origin Story**:
*   Vitalik Buterin, a young programmer and Bitcoin enthusiast, proposed Ethereum in late 2013.
*   His insight: Bitcoin's scripting language was too limited. What if blockchain could run any program, not just money transfers?
*   He called it a "World Computer"—a decentralized virtual machine accessible to anyone.

**The Crowdsale (2014)**:
*   Ethereum raised ~$18 million in a public crowdsale (an early ICO).
*   Contributors received ETH in exchange for Bitcoin.
*   Ethereum launched on July 30, 2015.

**Key Figures**:
*   **Vitalik Buterin**: The visionary co-founder.
*   **Gavin Wood**: Created Solidity (the programming language for Ethereum).
*   **Joseph Lubin**: Founded ConsenSys, a major Ethereum development company.

## Part 2: What Makes Ethereum Different from Bitcoin

Ethereum is more than digital money.

**Turing-Complete**:
*   Ethereum's virtual machine (EVM) can run any computation (given enough gas).
*   Bitcoin can only do simple scripts (e.g., multi-sig wallets).

**Smart Contracts**:
*   Self-executing programs stored on the blockchain.
*   "If X happens, do Y." No human intervention required.
*   Example: An escrow contract that releases funds when certain conditions are met.

**Ether (ETH)**:
*   The native currency of Ethereum.
*   Used to pay "gas" (transaction fees) and interact with smart contracts.
*   Unlike Bitcoin's 21 million cap, ETH has no hard cap—but the issuance rate is low and controlled.

**Account-Based Model**:
*   Bitcoin uses UTXOs (Unspent Transaction Outputs).
*   Ethereum uses accounts (like a bank account with a balance).

## Part 3: The Ethereum Virtual Machine (EVM)

The engine that runs Ethereum.

**What is the EVM?**:
*   A decentralized computer that runs on every Ethereum node.
*   When you deploy a smart contract, every node executes the code and stores the result.
*   This ensures consensus—everyone agrees on the state of the blockchain.

**Gas and Fees**:
*   Every operation on the EVM costs "gas."
*   Gas is paid in ETH. More complex operations = more gas.
*   Gas prevents infinite loops and spam (you can't run endless code for free).
*   During high demand, gas prices spike (users bid up fees to get their transactions processed).

**Gas Limit and Gas Price**:
*   Gas Limit: Maximum gas you're willing to pay.
*   Gas Price: How much ETH per unit of gas.
*   Total Fee = Gas Used × Gas Price.
*   EIP-1559 (2021) introduced a base fee that is burned, plus an optional tip to validators.

## Part 4: Smart Contracts in Practice

How smart contracts work in the real world.

**Deployment**:
*   A developer writes code in Solidity (or Vyper).
*   The code is compiled to EVM bytecode.
*   The bytecode is deployed to the blockchain as a transaction.
*   The contract gets its own address on the blockchain.

**Interaction**:
*   Users send transactions to the contract address.
*   The contract executes its code based on the input.
*   The result is recorded on-chain (if it changes state) or returned (if it's a read operation).

**Immutability**:
*   Once deployed, a smart contract's code cannot be changed.
*   This is a feature (no one can tamper) and a bug (bugs are permanent).
*   Developers use "proxy" patterns for upgradability, but this introduces centralization.

**Example: A Simple Token**:
*   A smart contract that tracks balances of a token.
*   Functions: transfer(to, amount), balanceOf(address).
*   This is the basis of ERC-20 tokens (like USDC, LINK, UNI).

## Part 5: Ethereum 2.0 and The Merge

Ethereum's transition to Proof of Stake.

**The Problem with Proof of Work**:
*   High energy consumption.
*   Scalability limited to ~15 transactions per second.

**The Merge (September 2022)**:
*   Ethereum transitioned from Proof of Work to Proof of Stake.
*   Miners were replaced by validators who stake ETH as collateral.
*   Energy consumption dropped by ~99.95%.

**Staking**:
*   To become a validator, you stake 32 ETH.
*   Validators propose and attest to blocks.
*   Honest behavior earns rewards (~4-5% APY).
*   Dishonest behavior results in "slashing" (losing your staked ETH).

**Liquid Staking**:
*   Services like Lido let you stake any amount of ETH.
*   You receive stETH (a liquid staking token) that can be traded or used in DeFi.

## Part 6: The Ethereum Ecosystem

Ethereum has spawned an entire industry.

**DeFi (Decentralized Finance)**:
*   Lending/borrowing (Aave, Compound).
*   Decentralized exchanges (Uniswap, Curve).
*   Stablecoins (USDC, DAI).
*   Billions of dollars locked in DeFi protocols.

**NFTs (Non-Fungible Tokens)**:
*   Digital art, collectibles, gaming items.
*   Each NFT is unique (unlike fungible tokens).
*   Marketplaces: OpenSea, Blur.

**DAOs (Decentralized Autonomous Organizations)**:
*   Organizations governed by token holders.
*   Proposals and votes happen on-chain.
*   Examples: MakerDAO, Uniswap governance.

**Layer 2 Scaling Solutions**:
*   Rollups (Optimism, Arbitrum, zkSync) process transactions off-chain and settle on Ethereum.
*   Dramatically increase throughput while inheriting Ethereum's security.

## Part 7: Ethereum's Challenges

The road ahead is not without obstacles.

**Scalability**:
*   Even with The Merge, Ethereum mainnet is limited (~15 TPS).
*   Layer 2s solve this, but they introduce complexity.

**Gas Fees**:
*   During high demand, gas fees can exceed $50-$100 per transaction.
*   This prices out small users. Layer 2s offer relief.

**Competition**:
*   "Ethereum Killers" (Solana, Avalanche, Cardano) offer higher throughput.
*   But Ethereum has the strongest developer ecosystem and network effects.

**Security Risks**:
*   Smart contract bugs have led to billions in losses (DAO Hack 2016, various exploits).
*   Audits help but can't guarantee safety.

**Centralization Concerns**:
*   Lido controls ~30% of staked ETH.
*   A small number of entities build most blocks.

## Part 8: Investment Considerations

Should you invest in ETH?

**Bull Case**:
*   Ethereum is the dominant smart contract platform.
*   DeFi, NFTs, and dApps drive real usage and fee revenue.
*   Post-Merge, ETH has become deflationary during high activity (more ETH burned than issued).
*   Staking yield provides passive income.

**Bear Case**:
*   Competition from faster, cheaper chains.
*   Regulatory uncertainty (is ETH a security?).
*   Technical execution risk (upgrades can go wrong).
*   High correlation with Bitcoin (if BTC crashes, ETH crashes harder).

**ETH vs. BTC**:
*   Bitcoin: Store of value, digital gold.
*   Ethereum: Utility, programmable money.
*   Many investors hold both.

## Part 9: Summary and Key Takeaways

*   **Ethereum is a programmable blockchain** that enables smart contracts and dApps.
*   **Smart contracts are self-executing code** stored and run on the blockchain.
*   **Ether (ETH) is the native currency** used to pay gas fees and interact with the network.
*   **The Merge transitioned Ethereum to Proof of Stake**, reducing energy use by 99.95%.
*   **The ecosystem includes DeFi, NFTs, DAOs**, and Layer 2 scaling solutions.
*   **Challenges include scalability, gas fees, and competition** from other chains.
*   **ETH is the second-largest cryptocurrency** and a bet on the future of decentralized applications.
\`,
        keyTakeaways: [
            "Ethereum is a programmable blockchain enabling smart contracts and dApps.",
            "Smart contracts are self-executing code stored on the blockchain.",
            "The Merge transitioned Ethereum to Proof of Stake, cutting energy use by 99.95%.",
            "The ecosystem includes DeFi, NFTs, DAOs, and Layer 2 solutions.",
            "ETH is the second-largest crypto and powers the largest dApp ecosystem."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Check if cb_3 already exists
const cb3Exists = content.indexOf('"cb_3":');
if (cb3Exists !== -1) {
    console.log('cb_3 already exists! Replacing...');
    const startPattern = /    "cb_3": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    // Find cb_2 and insert after it
    const cb2End = content.indexOf('"cb_2":');
    if (cb2End !== -1) {
        const cb2KeyTakeaways = content.indexOf('keyTakeaways:', cb2End);
        const cb2EndBracket = content.indexOf('},', cb2KeyTakeaways);
        if (cb2EndBracket !== -1) {
            const insertPos = cb2EndBracket + 2;
            content = content.slice(0, insertPos) + '\n' + newContent + content.slice(insertPos);
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('cb_3 added successfully!');

// Verify character count
const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
