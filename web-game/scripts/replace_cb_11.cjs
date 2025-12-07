const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_11": {
        title: "Tokenomics",
        content: \`
# The Science of Token Design: Understanding Tokenomics

Tokenomics—a blend of "token" and "economics"—is the study of how cryptocurrencies are designed, distributed, and incentivized. Just as macroeconomics studies national economies, tokenomics studies the micro-economies of individual tokens. A project's tokenomics can determine whether it thrives or dies. Understanding tokenomics is essential for evaluating any crypto investment.

## Part 1: What is Tokenomics?

The economic design of a token.

**Definition**:
*   Tokenomics encompasses all factors that affect a token's value:
    *   Total supply and emission schedule.
    *   Distribution among stakeholders.
    *   Utility and use cases.
    *   Incentive mechanisms.
    *   Governance rights.

**Why It Matters**:
*   Good tokenomics align incentives. Holders, developers, and users all benefit.
*   Bad tokenomics lead to dumps, inflation, and project failure.
*   Tokenomics is the difference between a sustainable ecosystem and a Ponzi scheme.

**Key Questions**:
*   How many tokens exist? How many will ever exist?
*   Who holds the tokens? Are insiders holding too much?
*   What can the token do? Does it have real utility?
*   What incentivizes people to hold vs. sell?

## Part 2: Supply Metrics

The foundation of scarcity.

**Total Supply**:
*   The maximum number of tokens that will ever exist.
*   Bitcoin: 21 million. Ethereum: No hard cap.
*   Lower supply ≠ higher price (market cap matters, not unit price).

**Circulating Supply**:
*   Tokens currently in circulation (excludes locked, vested, or burned tokens).
*   Market Cap = Circulating Supply × Price.

**Fully Diluted Valuation (FDV)**:
*   FDV = Total Supply × Price.
*   If FDV >> Market Cap, there's a lot of future dilution coming (tokens will unlock).

**Inflation vs. Deflation**:
*   **Inflationary**: New tokens are continuously minted (ETH pre-Merge, most PoS chains).
*   **Deflationary**: Tokens are burned faster than created (ETH post-EIP-1559, during high activity).
*   **Fixed Supply**: No new tokens ever (Bitcoin after 2140).

## Part 3: Token Distribution

Who gets the tokens?

**Initial Distribution**:
*   **Team/Founders**: 10-25% is common. Vested over 2-4 years.
*   **Investors (VC/Seed)**: Early backers often get tokens at a discount.
*   **Community/Airdrop**: Distributed to early users or supporters.
*   **Treasury/Ecosystem**: Reserved for grants, partnerships, incentives.
*   **Public Sale**: ICO, IEO, or IDO.

**Vesting and Lock-Ups**:
*   Team and investor tokens are typically locked initially.
*   Vesting schedules release tokens gradually (e.g., 25% per year for 4 years).
*   Large unlocks can cause selling pressure and price drops.

**Red Flags**:
*   Team/insiders holding 50%+ of supply.
*   Short vesting periods (quick path to dumping).
*   No transparency about distribution.

**Green Flags**:
*   Fair launch (no pre-mine, no VC allocations).
*   Long vesting for team (3-5 years).
*   Significant community allocation.

## Part 4: Utility — What is the Token For?

A token without utility is just a number.

**Types of Utility**:
*   **Gas/Transaction Fees**: ETH, SOL, AVAX. Required to use the network.
*   **Staking**: Lock tokens to earn rewards or secure the network.
*   **Governance**: Vote on protocol changes (UNI, AAVE, MKR).
*   **Access**: Token-gated features, communities, or services.
*   **Medium of Exchange**: Used for payments within an ecosystem.
*   **Collateral**: Used to borrow or mint other assets (ETH for DAI).

**The Utility Question**:
*   Does the token need to exist? Could the protocol function without it?
*   Does the utility create sustainable demand?
*   Many "governance" tokens have no real utility beyond voting—which few people do.

## Part 5: Incentive Mechanisms

Aligning behavior with rewards.

**Staking Rewards**:
*   Users stake tokens and earn yield.
*   Reduces circulating supply (staked tokens are locked).
*   Incentivizes long-term holding.

**Liquidity Mining**:
*   Users provide liquidity to DEXs and earn token rewards.
*   Effective for bootstrapping liquidity but can lead to mercenary capital (leaves when rewards end).

**Burn Mechanisms**:
*   A portion of fees is burned (removed from supply).
*   Creates deflationary pressure.
*   Ethereum EIP-1559: Base fee is burned.

**Revenue Sharing**:
*   Protocols share revenue with token holders.
*   Example: GMX, where stakers receive ETH/AVAX from trading fees.
*   Approaches a "dividend" model.

**Vote Escrow (ve)**:
*   Users lock tokens for extended periods to increase voting power and rewards.
*   Curve (veCRV), Balancer (veBAL).
*   Reduces sell pressure by locking supply.

## Part 6: Analyzing Token Supply Events

Key dates and risks.

**Unlocks and Vesting Cliffs**:
*   Large token unlocks can flood the market, crashing prices.
*   Check vesting schedules on Token Unlocks or Messari.
*   Avoid buying before a major unlock event.

**Halvings (Bitcoin)**:
*   Bitcoin's block reward halves every 4 years.
*   Historically, halvings have preceded bull markets (supply shock).

**Emissions Schedules**:
*   How many new tokens enter circulation each year?
*   High emissions = high inflation = continuous sell pressure.

**Buyback and Burns**:
*   Some protocols use revenue to buy back and burn tokens.
*   Reduces supply and supports price.

## Part 7: Red Flags in Tokenomics

Avoid these projects.

**Ponzinomics**:
*   Early holders are paid from new holder deposits.
*   Unsustainable. Guaranteed to collapse.
*   Example: Bitconnect, many "rebase" tokens.

**High Insider Allocation**:
*   If team and VCs hold 60%+ of tokens, expect massive dumps.
*   Check who's holding what and when it unlocks.

**No Real Utility**:
*   "Governance token" with no governance activity.
*   Token exists only for speculation.

**Uncontrolled Inflation**:
*   Infinite supply with no burn mechanism.
*   Perpetual dilution of holders.

**Short Vesting**:
*   Team tokens unlock in 6-12 months.
*   Founders cash out and disappear.

## Part 8: Evaluating Tokenomics — A Framework

**Step 1: Understand the Token's Purpose**:
*   What utility does it provide?
*   Is the utility essential to the protocol?

**Step 2: Analyze Supply**:
*   Total supply, circulating supply, FDV.
*   Inflation rate. Burn mechanisms.

**Step 3: Check Distribution**:
*   Who holds the tokens?
*   Vesting schedules and unlock dates.

**Step 4: Assess Incentives**:
*   What encourages holding?
*   Staking rewards, governance, revenue share.

**Step 5: Look for Red Flags**:
*   Abnormal insider allocation.
*   Ponzi-like structures.
*   Uncontrolled emissions.

**Step 6: Use Tools**:
*   Token Unlocks (unlocks schedule).
*   DeFiLlama (TVL, protocol metrics).
*   Dune Analytics (on-chain data).
*   Messari (token reports).

## Part 9: Summary and Key Takeaways

*   **Tokenomics is the economic design** of a cryptocurrency—supply, distribution, utility, incentives.
*   **Supply metrics (total, circulating, FDV)** determine scarcity and potential dilution.
*   **Distribution matters**: heavy insider allocation is a red flag.
*   **Utility drives demand**: tokens without real use cases are pure speculation.
*   **Incentives (staking, burns, revenue share)** align holder behavior with protocol success.
*   **Watch unlock schedules**: major unlocks can crash prices.
*   **Avoid Ponzi tokenomics**: if it sounds too good to be true, it is.
*   **Use analysis tools** to research before investing.
\`,
        keyTakeaways: [
            "Tokenomics covers supply, distribution, utility, and incentives of a token.",
            "Key metrics: Total Supply, Circulating Supply, and Fully Diluted Valuation (FDV).",
            "Red flags: high insider allocation, short vesting, Ponzi-like structures.",
            "Utility drives demand—governance-only tokens often lack real value.",
            "Watch unlock schedules to avoid buying before major dumps."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_11":');
if (cbExists !== -1) {
    console.log('cb_11 already exists! Replacing...');
    const startPattern = /    "cb_11": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_10":');
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
console.log('cb_11 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
