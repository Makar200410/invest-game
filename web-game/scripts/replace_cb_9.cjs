const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_9": {
        title: "Crypto Exchanges (CEX vs DEX)",
        content: \`
# Trading Venues: Centralized vs Decentralized Exchanges

Cryptocurrency exchanges are where people buy, sell, and trade digital assets. There are two main types: Centralized Exchanges (CEXs) like Coinbase and Binance, and Decentralized Exchanges (DEXs) like Uniswap and Curve. Each has distinct advantages and risks. Understanding these differences is essential for navigating the crypto ecosystem safely and efficiently.

## Part 1: Centralized Exchanges (CEX)

The traditional model.

**What is a CEX?**:
*   A company that operates a trading platform.
*   Acts as an intermediary between buyers and sellers.
*   Examples: Coinbase, Binance, Kraken, OKX, Bybit.

**How CEXs Work**:
*   You create an account, complete KYC (identity verification), and deposit funds.
*   The exchange holds your crypto in their wallets (custodial).
*   You place orders on an order book; the exchange matches buyers and sellers.
*   You can withdraw to your own wallet or leave funds on the exchange.

**Order Book Model**:
*   Buyers place bids (what they're willing to pay).
*   Sellers place asks (what they're willing to sell for).
*   The spread is the difference between the best bid and best ask.
*   Market orders execute immediately at the best available price.
*   Limit orders wait until the price reaches your specified level.

## Part 2: CEX Advantages

Why most trading still happens on CEXs.

**User Experience**:
*   Intuitive interfaces, mobile apps, customer support.
*   Fiat on/off ramps: Buy crypto with credit card, bank transfer.

**Liquidity**:
*   CEXs have the deepest liquidity, especially for BTC, ETH, and major pairs.
*   Tight spreads, fast execution, minimal slippage.

**Advanced Features**:
*   Margin trading, futures, options.
*   API access for algorithmic trading.
*   Earn programs, staking, lending.

**Fiat Integration**:
*   Deposit and withdraw in USD, EUR, etc.
*   Direct integration with banks.

**Speed**:
*   Trades execute instantly (off-chain).
*   No blockchain transaction delays.

## Part 3: CEX Risks

"Not your keys, not your coins."

**Custodial Risk**:
*   The exchange holds your private keys.
*   If the exchange is hacked, you can lose everything.
*   History: Mt. Gox (2014, $450M lost), Bitfinex (2016, $72M), FTX (2022, billions lost).

**Regulatory Risk**:
*   Exchanges comply with laws and can freeze accounts.
*   If you're in a restricted jurisdiction, you may lose access.

**Privacy**:
*   KYC means your identity is linked to your trading history.
*   Data breaches can expose personal information.

**Counter-Party Risk (FTX Collapse)**:
*   FTX was a top-5 exchange. It appeared trustworthy.
*   Behind the scenes, customer funds were used for risky bets.
*   When revealed, the exchange collapsed. Billions were lost.
*   Lesson: Never leave more on an exchange than you need for trading.

## Part 4: Decentralized Exchanges (DEX)

The permissionless alternative.

**What is a DEX?**:
*   A smart contract that facilitates trading directly from your wallet.
*   No company, no intermediary, no KYC.
*   You retain custody of your funds at all times.

**How DEXs Work**:
*   You connect your wallet (MetaMask, Phantom).
*   You swap tokens directly with the smart contract.
*   The contract uses liquidity pools (not order books) to facilitate trades.

**Automated Market Makers (AMMs)**:
*   Liquidity providers deposit token pairs into a pool (e.g., ETH/USDC).
*   The price is determined algorithmically: x * y = k.
*   When you swap, you trade against the pool and pay a small fee.
*   Uniswap, Curve, and SushiSwap use this model.

**Order Book DEXs**:
*   Some DEXs use order books like CEXs but on-chain or hybrid.
*   Examples: dYdX, Serum (on Solana).
*   More familiar to traders but less common for spot trading.

## Part 5: DEX Advantages

Why use a DEX?

**Self-Custody**:
*   You never give up your keys.
*   No risk of exchange insolvency or hacks affecting your funds.

**Permissionless**:
*   No KYC. Anyone can trade.
*   Access to new tokens before they list on CEXs.

**Transparency**:
*   All trades are on-chain. Verifiable.
*   Smart contract code is open-source.

**Censorship Resistance**:
*   No one can block your trades.
*   Important in authoritarian jurisdictions.

**Token Availability**:
*   DEXs list any token (anyone can create a liquidity pool).
*   Access to obscure altcoins, meme coins, and new projects.

## Part 6: DEX Risks

The trade-offs.

**Smart Contract Risk**:
*   Bugs in the code can be exploited.
*   DEX hacks have resulted in millions of dollars lost.

**Slippage**:
*   On low-liquidity pairs, large trades move the price significantly.
*   You may receive fewer tokens than expected.

**MEV (Miner/Maximal Extractable Value)**:
*   Bots can front-run your transactions, sandwiching your trade.
*   You buy at a worse price; the bot profits.
*   Solutions: Private mempools, MEV-protected RPC endpoints.

**User Error**:
*   Interacting with smart contracts involves risk.
*   Approving the wrong contract can drain your wallet.
*   No customer support if you make a mistake.

**Fake Tokens**:
*   Scammers create fake tokens with similar names.
*   Always verify the contract address.

## Part 7: Hybrid and Aggregated Solutions

The best of both worlds.

**DEX Aggregators**:
*   Combine liquidity from multiple DEXs to get the best price.
*   Examples: 1inch, Paraswap, Jupiter (Solana).
*   You swap once; the aggregator routes through multiple pools.

**Hybrid Exchanges**:
*   CEX-like experience with self-custody.
*   Examples: dYdX (decentralized perpetuals), GMX (Arbitrum).

**Layer 2 DEXs**:
*   DEXs on Layer 2s (Arbitrum, Optimism) offer lower fees and faster transactions.
*   Still decentralized but more practical for frequent trading.

## Part 8: Choosing Between CEX and DEX

It depends on your needs.

**Use a CEX When**:
*   You're new to crypto and need a simple on-ramp.
*   You need fiat deposits/withdrawals.
*   You're trading high volume and need deep liquidity.
*   You want advanced features (margin, futures).

**Use a DEX When**:
*   You value self-custody and privacy.
*   You're trading tokens not listed on CEXs.
*   You're in a jurisdiction where CEXs restrict access.
*   You want to participate in DeFi.

**Best Practice**:
*   Use CEXs for fiat on/off-ramps.
*   Transfer funds to your own wallet for long-term holding.
*   Use DEXs for DeFi interactions and obscure tokens.
*   Never leave more on a CEX than you're actively trading.

## Part 9: Summary and Key Takeaways

*   **CEXs are centralized platforms** with custodial accounts, deep liquidity, and fiat integration.
*   **DEXs are decentralized smart contracts** where you trade directly from your wallet.
*   **CEX advantages**: ease of use, liquidity, advanced features.
*   **CEX risks**: custodial risk (hacks, insolvency), KYC, regulatory exposure.
*   **DEX advantages**: self-custody, permissionless, censorship-resistant.
*   **DEX risks**: smart contract bugs, slippage, MEV, fake tokens.
*   **Aggregators (1inch, Jupiter)** help get the best DEX prices.
*   **Best practice**: Use CEX for fiat, DEX for DeFi, and self-custody for holding.
\`,
        keyTakeaways: [
            "CEXs (Coinbase, Binance) are centralized, custodial platforms with fiat integration.",
            "DEXs (Uniswap, Curve) are decentralized smart contracts—you trade from your wallet.",
            "CEX risks include hacks, insolvency (FTX), and regulatory exposure.",
            "DEX risks include smart contract bugs, slippage, and MEV exploitation.",
            "Best practice: CEX for fiat, DEX for DeFi, self-custody for long-term holding."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_9":');
if (cbExists !== -1) {
    console.log('cb_9 already exists! Replacing...');
    const startPattern = /    "cb_9": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_8":');
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
console.log('cb_9 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
