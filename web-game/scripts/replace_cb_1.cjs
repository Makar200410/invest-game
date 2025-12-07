const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    // Module 8: Crypto & Blockchain
    "cb_1": {
        title: "Blockchain Technology 101",
        content: \`
# The Trust Machine: Understanding Blockchain Technology

Blockchain is not just about Bitcoin or cryptocurrencies—it is a fundamental innovation in how humans organize information and trust. For thousands of years, we have relied on centralized authorities (governments, banks, corporations) to maintain records and validate transactions. Blockchain offers an alternative: a decentralized, immutable ledger that no single entity controls. This technology has the potential to reshape finance, supply chains, healthcare, voting systems, and more.

## Part 1: What is a Blockchain?

At its core, a blockchain is a distributed database or ledger.

**The Basic Structure**:
*   **Block**: A container that holds a batch of transactions (or other data).
*   **Chain**: Each block is linked to the previous block using cryptography, forming a chain.
*   **Distributed**: The blockchain is copied across thousands of computers (nodes) worldwide.

**Key Properties**:
*   **Immutability**: Once data is recorded, it cannot be altered without changing every subsequent block and getting consensus from the network. Practically impossible.
*   **Transparency**: Anyone can view the blockchain (on public chains like Bitcoin and Ethereum).
*   **Decentralization**: No single point of failure. No central authority to trust or bribe.

**Analogy**:
Imagine a Google Spreadsheet that everyone can see, but no one can edit past entries. Every change is recorded, time-stamped, and agreed upon by thousands of computers. If one computer lies about the data, the others will reject it.

## Part 2: How Blocks Are Created

The process of adding new blocks is called **consensus**. Different blockchains use different methods.

**Proof of Work (PoW) — Bitcoin's Method**:
*   Miners compete to solve a complex mathematical puzzle.
*   The first to solve it gets to add the next block and receives a reward (newly minted Bitcoin + transaction fees).
*   This requires enormous computing power and electricity.
*   Security: To attack the network, you would need 51% of the world's mining power—practically impossible.

**Proof of Stake (PoS) — Ethereum's Method (Post-Merge)**:
*   Validators "stake" their cryptocurrency as collateral.
*   The network randomly selects a validator to propose the next block.
*   If the validator acts honestly, they earn rewards. If they cheat, they lose their stake.
*   This uses 99.9% less energy than PoW.

**Other Consensus Mechanisms**:
*   **Delegated Proof of Stake (DPoS)**: Token holders vote for "delegates" who validate transactions (used by Solana, Cardano).
*   **Proof of Authority (PoA)**: A set of pre-approved validators (used in private blockchains).

## Part 3: Decentralization — Why It Matters

**The Problem with Centralization**:
*   **Single Point of Failure**: If a bank's server goes down, your money is inaccessible.
*   **Censorship**: Governments can freeze accounts, seize assets, or block transactions.
*   **Trust Requirement**: You must trust the central authority not to cheat, hack, or go bankrupt (e.g., FTX collapse).

**The Decentralization Solution**:
*   **No Single Point of Failure**: The network runs on thousands of nodes. Take down one, and the rest continue.
*   **Censorship Resistance**: No government can block a Bitcoin transaction (though they can try to regulate off-ramps).
*   **Trustless**: You don't need to trust anyone. The code and cryptography enforce the rules.

**The Trade-off (Blockchain Trilemma)**:
*   **Decentralization**: Many nodes, no central control.
*   **Security**: Resistance to attacks.
*   **Scalability**: Ability to process many transactions per second.
*   You can only optimize for two. Bitcoin prioritizes decentralization and security (slow, ~7 TPS). Solana prioritizes scalability and security (faster, but more centralized).

## Part 4: Cryptography — The Security Layer

Blockchain relies on advanced cryptography.

**Hash Functions**:
*   A hash function takes any input and produces a fixed-size string of characters (the "hash").
*   Example: SHA-256 (used by Bitcoin).
*   Properties: Deterministic (same input = same hash), one-way (you can't reverse it), collision-resistant (virtually impossible for two inputs to produce the same hash).
*   Each block contains the hash of the previous block. If you change a single character in Block 5, Block 5's hash changes, which breaks the link to Block 6.

**Public-Key Cryptography**:
*   You have two keys: a Public Key (your address, shareable) and a Private Key (your password, never share).
*   To send crypto, you sign the transaction with your Private Key.
*   Anyone can verify the signature using your Public Key, but no one can forge your signature without your Private Key.

**Digital Signatures**:
*   Prove that you authorized a transaction.
*   Prove that the transaction has not been tampered with.

## Part 5: Types of Blockchains

Not all blockchains are created equal.

**Public Blockchains**:
*   Open to anyone. Anyone can read, write, and participate.
*   Examples: Bitcoin, Ethereum, Solana.
*   Fully decentralized and censorship-resistant.

**Private Blockchains**:
*   Controlled by a single organization.
*   Only authorized participants can read/write.
*   Examples: Hyperledger (used by IBM), internal corporate ledgers.
*   More efficient but less trustless.

**Consortium Blockchains**:
*   Controlled by a group of organizations.
*   Example: R3 Corda (banking consortium).
*   A middle ground between public and private.

**Permissioned vs. Permissionless**:
*   Permissionless: Anyone can join (Bitcoin).
*   Permissioned: You need approval (private chains).

## Part 6: Smart Contracts — Programmable Money

Ethereum introduced the concept of smart contracts.

**What is a Smart Contract?**:
*   A self-executing program stored on the blockchain.
*   "If X happens, then do Y." The code runs automatically when conditions are met.
*   No lawyers, no intermediaries, no human judgment needed.

**Example: Escrow**:
*   Traditional: You pay a lawyer to hold funds until a house sale closes.
*   Smart Contract: The code holds funds. When the deed is recorded on-chain, funds are released automatically.

**Use Cases**:
*   Decentralized Finance (DeFi): Lending, borrowing, trading without banks.
*   NFTs: Proving ownership of digital assets.
*   DAOs: Decentralized Autonomous Organizations (governance by code).

**Risks**:
*   Bugs in the code can be exploited (hacks have stolen billions).
*   "Code is law" — if the code says something wrong, it executes anyway.

## Part 7: Real-World Applications

Blockchain is being used beyond crypto.

**Finance & Banking**:
*   Cross-border payments (Ripple, Stellar).
*   Tokenized securities (stocks on blockchain).
*   Central Bank Digital Currencies (CBDCs).

**Supply Chain**:
*   Tracking goods from factory to store (Walmart uses blockchain for food safety).
*   Verifying authenticity (luxury goods, diamonds).

**Healthcare**:
*   Secure storage of medical records.
*   Tracking pharmaceutical supply chains.

**Identity & Voting**:
*   Self-sovereign identity (you control your ID, not the government).
*   Tamper-proof voting systems.

**Gaming & Metaverse**:
*   True ownership of in-game assets (NFTs).
*   Interoperable items across games.

## Part 8: Limitations and Challenges

Blockchain is not a magic solution for everything.

**Scalability**:
*   Bitcoin processes ~7 transactions per second. Visa does 65,000+.
*   Layer 2 solutions (Lightning Network, Rollups) aim to solve this.

**Energy Consumption**:
*   Proof of Work consumes enormous electricity (though PoS is much greener).

**User Experience**:
*   Managing private keys is difficult. Lose your key, lose your funds forever.
*   Wallet interfaces are improving but still not as easy as Venmo.

**Regulation**:
*   Governments are still figuring out how to regulate crypto.
*   Uncertainty creates risk for businesses and investors.

**Immutability is a Bug, Too**:
*   If you send funds to the wrong address, there's no "undo."
*   If a smart contract has a bug, there's no customer service to call.

## Part 9: Summary and Key Takeaways

*   **Blockchain is a distributed, immutable ledger** maintained by a decentralized network.
*   **Consensus mechanisms** (PoW, PoS) ensure all nodes agree on the state of the ledger.
*   **Cryptography** (hashing, digital signatures) secures transactions and identities.
*   **Smart Contracts** enable programmable, self-executing agreements.
*   **Decentralization** removes the need for trusted intermediaries but introduces trade-offs (scalability, complexity).
*   **Real-world applications** go beyond crypto: supply chain, healthcare, identity, gaming.
*   **Challenges remain**: scalability, energy, UX, regulation.
*   **The future is uncertain, but blockchain is here to stay** as a foundational technology.
\`,
        keyTakeaways: [
            "Blockchain is a distributed, immutable ledger maintained by a decentralized network.",
            "Consensus mechanisms (PoW, PoS) ensure agreement across nodes.",
            "Cryptography (hashing, digital signatures) secures the system.",
            "Smart contracts enable programmable, self-executing agreements.",
            "Decentralization removes intermediaries but introduces scalability trade-offs."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find the position to insert (after forex module, before commodities or crypto section)
const insertPosition = content.indexOf('// Module 8: Crypto');
if (insertPosition !== -1) {
    // Already exists, need to replace
    const endOfCryptoModule = content.indexOf('// Module 9:', insertPosition);
    if (endOfCryptoModule !== -1) {
        // Replace the entire crypto module section
        console.log('Found existing Module 8, will add cb_1');
    }
}

// Check if cb_1 already exists
const cb1Exists = content.indexOf('"cb_1":');
if (cb1Exists !== -1) {
    console.log('cb_1 already exists! Replacing...');
    const startPattern = /    "cb_1": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    // Find where to insert - after fx_13
    const fx13End = content.indexOf('"fx_13":');
    if (fx13End !== -1) {
        // Find the end of fx_13 lesson
        const fx13KeyTakeaways = content.indexOf('keyTakeaways:', fx13End);
        const fx13EndBracket = content.indexOf('},', fx13KeyTakeaways);
        if (fx13EndBracket !== -1) {
            const insertPos = fx13EndBracket + 2;
            content = content.slice(0, insertPos) + '\n\n' + newContent + content.slice(insertPos);
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('cb_1 added successfully!');

// Verify character count
const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
