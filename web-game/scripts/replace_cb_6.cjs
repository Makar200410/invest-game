const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_6": {
        title: "DeFi: Decentralized Finance",
        content: \`
# The Financial Revolution: Understanding DeFi

Decentralized Finance—or DeFi—aims to recreate traditional financial services (lending, borrowing, trading, insurance) without intermediaries like banks. Instead of trusting a corporation, you trust code running on a blockchain. DeFi has grown from zero to over $100 billion in total value locked (TVL), creating a parallel financial system accessible to anyone with an internet connection.

## Part 1: What is DeFi?

The core concept and philosophy.

**Definition**:
*   Financial services built on blockchain, primarily Ethereum.
*   No banks, no brokers, no middlemen.
*   Open-source code. Anyone can inspect, use, or build on it.
*   Permissionless: No KYC, no credit checks, no accounts to open.

**The Traditional Finance Problem**:
*   Banks can freeze your account.
*   High fees for services (3% for wire transfers, 2-3% for credit cards).
*   Slow (international wires take days).
*   Exclusionary (billions are unbanked).
*   Opaque (you don't know what banks do with your money).

**The DeFi Solution**:
*   You control your assets (non-custodial).
*   Transactions settle in minutes, 24/7.
*   Global access—only an internet connection required.
*   Transparent—all code and transactions are on-chain.

## Part 2: Decentralized Exchanges (DEXs)

Trade without a centralized exchange.

**The Problem with Centralized Exchanges**:
*   You give up custody ("not your keys, not your coins").
*   Exchange hacks (Mt. Gox, FTX).
*   KYC/AML requirements.
*   Listing restrictions (not all tokens available).

**How DEXs Work**:
*   Smart contracts facilitate trades directly between users.
*   No order books (in AMM-based DEXs). Trades happen against liquidity pools.
*   You connect your wallet (MetaMask), approve, and swap.

**Automated Market Makers (AMMs)**:
*   Liquidity providers deposit pairs of tokens into a pool (e.g., ETH/USDC).
*   The price is determined by a formula: x * y = k (constant product).
*   When you swap, you trade against the pool, not another person.
*   Uniswap pioneered this model.

**Major DEXs**:
*   **Uniswap**: Largest on Ethereum.
*   **Curve**: Optimized for stablecoin swaps (low slippage).
*   **SushiSwap**: Fork of Uniswap with additional features.
*   **PancakeSwap**: Largest on BNB Chain.
*   **Jupiter**: Aggregator on Solana.

## Part 3: Lending and Borrowing

Earn interest or get a loan without a bank.

**How It Works (Lending)**:
*   You deposit crypto into a lending protocol.
*   Borrowers pay interest to borrow your crypto.
*   You earn a portion of that interest (APY).

**How It Works (Borrowing)**:
*   You deposit collateral (e.g., ETH).
*   You borrow another asset (e.g., USDC) against your collateral.
*   You must repay the loan + interest or risk liquidation.

**Over-Collateralization**:
*   DeFi loans require collateral worth more than the loan.
*   Example: Deposit $1,500 of ETH to borrow $1,000 of USDC.
*   If your collateral value drops too low (loan-to-value ratio too high), your position is liquidated.

**Major Lending Protocols**:
*   **Aave**: Largest lending protocol. Supports many assets.
*   **Compound**: Pioneer of lending. COMP governance token.
*   **MakerDAO**: You deposit ETH, mint DAI (stablecoin). Pay stability fee (interest).

## Part 4: Yield Farming and Liquidity Mining

Earning rewards for providing liquidity.

**Liquidity Providing (LP)**:
*   You deposit tokens into a DEX pool.
*   You receive LP tokens representing your share of the pool.
*   You earn a portion of trading fees.

**Impermanent Loss**:
*   If the price of one asset moves significantly relative to the other, you may have been better off just holding.
*   Called "impermanent" because the loss is only realized when you withdraw.
*   The more volatile the pair, the greater the risk.

**Yield Farming**:
*   Protocols incentivize LPs with extra token rewards.
*   Example: Provide ETH/USDC on Uniswap and receive UNI tokens on top of fees.
*   Farmers chase the highest yields, often moving funds between protocols.

**Risks**:
*   Smart contract bugs (hacks).
*   Impermanent loss.
*   Token rewards may lose value.
*   Rug pulls (malicious projects).

## Part 5: Stablecoins in DeFi

The backbone of DeFi.

**Why Stablecoins Matter**:
*   Trading pairs (most trades are against USDC or USDT).
*   Borrowing (you borrow stables, not volatile assets).
*   Yield farming (stable-stable pools have lower impermanent loss).
*   Paying for real-world expenses without off-ramping.

**Centralized Stablecoins (USDC, USDT)**:
*   Issued by centralized entities (Circle, Tether).
*   Backed by reserves (cash, treasuries).
*   Can be frozen by the issuer (regulatory risk).

**Decentralized Stablecoins (DAI)**:
*   Issued by smart contracts.
*   Backed by crypto collateral (over-collateralized).
*   Governance by token holders.

**Algorithmic Stablecoins (UST — Failed)**:
*   Used algorithms to maintain peg without collateral.
*   UST/LUNA collapsed in May 2022, wiping out $40 billion.
*   Considered high risk.

## Part 6: Risks in DeFi

DeFi is powerful but dangerous.

**Smart Contract Risk**:
*   Bugs in the code can be exploited.
*   Billions have been stolen through hacks.
*   Even audited contracts can have vulnerabilities.

**Oracle Manipulation**:
*   DeFi relies on price feeds from oracles (Chainlink).
*   If an oracle is manipulated, attackers can drain protocols.

**Rug Pulls**:
*   Developers create a project, attract funds, then disappear with the money.
*   Common with new, unvetted projects.

**Liquidation Risk**:
*   If your collateral value drops, your position can be liquidated.
*   During market crashes, liquidations cascade and amplify losses.

**Regulatory Risk**:
*   Governments may crack down on DeFi protocols.
*   Sanctions (OFAC) can blacklist addresses.

## Part 7: DeFi Tools and Dashboards

Navigating the ecosystem.

**Portfolio Trackers**:
*   **Zapper**: View all your DeFi positions in one place.
*   **DeBank**: Track assets across multiple chains.
*   **Zerion**: Portfolio and transaction history.

**Analytics**:
*   **DeFiLlama**: Track TVL across protocols and chains.
*   **Dune Analytics**: Custom dashboards and on-chain data.

**Gas Trackers**:
*   **Etherscan Gas Tracker**: Current gas prices.
*   **GasNow**: Real-time gas estimates.

**Safety Tools**:
*   **Revoke.cash**: Revoke token approvals (reduce risk of exploit drains).
*   **DeFiSafety**: Security scores for protocols.

## Part 8: Getting Started with DeFi

A practical guide.

**Step 1: Get a Wallet**:
*   Install MetaMask (browser extension) or use a hardware wallet.
*   Fund with ETH for gas and assets you want to use.

**Step 2: Bridge Assets (if needed)**:
*   If you're using Layer 2 (Arbitrum, Optimism), bridge assets from Ethereum.
*   Use official bridges or aggregators (Hop Protocol, Stargate).

**Step 3: Connect to a dApp**:
*   Go to the protocol website (e.g., app.uniswap.org).
*   Click "Connect Wallet."
*   Approve the connection in MetaMask.

**Step 4: Start Small**:
*   Swap a small amount on Uniswap.
*   Deposit a small amount into Aave.
*   Learn the mechanics before committing large sums.

**Step 5: Manage Approvals**:
*   When you interact with a contract, you often "approve" it to spend your tokens.
*   Revoke unnecessary approvals to reduce risk.

## Part 9: Summary and Key Takeaways

*   **DeFi recreates traditional finance on blockchain** without intermediaries.
*   **DEXs (Uniswap, Curve)** allow you to trade directly from your wallet.
*   **Lending platforms (Aave, Compound)** let you earn interest or borrow against collateral.
*   **Yield farming** rewards liquidity providers but comes with impermanent loss and smart contract risks.
*   **Stablecoins (USDC, DAI)** are the backbone of DeFi trading and lending.
*   **Risks are significant**: hacks, exploits, rug pulls, liquidations.
*   **Start small and learn** before committing large amounts.
*   **Use portfolio trackers and safety tools** to manage your DeFi exposure.
\`,
        keyTakeaways: [
            "DeFi recreates traditional finance on blockchain without intermediaries.",
            "DEXs (Uniswap) use liquidity pools and AMMs for trustless trading.",
            "Lending protocols (Aave, Compound) offer interest and borrowing against collateral.",
            "Risks include smart contract bugs, hacks, rug pulls, and liquidation.",
            "Start small, use safety tools, and never invest more than you can lose."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_6":');
if (cbExists !== -1) {
    console.log('cb_6 already exists! Replacing...');
    const startPattern = /    "cb_6": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_5":');
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
console.log('cb_6 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
