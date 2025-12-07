const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_2": {
        title: "Bitcoin: Digital Gold",
        content: \`
# Bitcoin: The Original Cryptocurrency and Digital Gold

Bitcoin is the first and most famous cryptocurrency, created in 2008 by the pseudonymous Satoshi Nakamoto. It introduced the world to blockchain technology and sparked a financial revolution. Bitcoin is often called "Digital Gold" because, like gold, it is scarce, durable, divisible, and increasingly seen as a store of value. But Bitcoin is more than a digital commodity—it is a political statement, a technological marvel, and a bet on the future of money.

## Part 1: The Genesis of Bitcoin

Bitcoin was born from crisis.

**The 2008 Financial Crisis**:
*   Banks had made reckless bets on subprime mortgages.
*   When the housing market collapsed, the entire financial system nearly failed.
*   Governments bailed out the banks with taxpayer money. Trillions of dollars were printed.
*   Trust in the traditional financial system plummeted.

**The Bitcoin Whitepaper (October 31, 2008)**:
*   Satoshi Nakamoto published "Bitcoin: A Peer-to-Peer Electronic Cash System."
*   The goal: a currency that requires no trusted third party (banks, governments).
*   The innovation: blockchain + proof of work = trustless, decentralized money.

**The Genesis Block (January 3, 2009)**:
*   Satoshi mined the first Bitcoin block.
*   Embedded in the block was a message: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."
*   This was a political statement: Bitcoin was born as an alternative to a broken financial system.

**Who is Satoshi Nakamoto?**:
*   No one knows. Satoshi communicated only through forums and email.
*   Satoshi disappeared in 2011, never to be heard from again.
*   Satoshi's wallet contains ~1 million BTC (worth tens of billions), never moved.

## Part 2: How Bitcoin Works

The mechanics behind the magic.

**Transactions**:
*   You create a transaction: "Send 0.1 BTC from Alice's address to Bob's address."
*   You sign it with your private key.
*   The transaction is broadcast to the Bitcoin network.

**The Mempool**:
*   Unconfirmed transactions sit in the "mempool" waiting to be picked up by miners.
*   You can attach a fee to incentivize faster processing.

**Mining and Proof of Work**:
*   Miners bundle transactions into a block.
*   They compete to find a "nonce" (a number) that, when combined with the block data, produces a hash below a target difficulty.
*   This requires trillions of guesses (brute force). The first to find it wins.
*   The winner broadcasts the block. Other nodes verify it. If valid, it's added to the chain.
*   The miner receives the block reward (currently 6.25 BTC, halving every 4 years) + transaction fees.

**Difficulty Adjustment**:
*   Every 2016 blocks (~2 weeks), the network adjusts the difficulty to maintain ~10-minute block times.
*   If more miners join, difficulty increases. If miners leave, it decreases.

## Part 3: Bitcoin's Monetary Policy

Bitcoin is programmatically scarce.

**The 21 Million Cap**:
*   There will only ever be 21 million Bitcoins. This is written in the code.
*   As of 2024, ~19.5 million have been mined. The last will be mined around 2140.

**The Halving**:
*   Every 210,000 blocks (~4 years), the block reward is cut in half.
*   2009: 50 BTC/block. 2012: 25 BTC. 2016: 12.5 BTC. 2020: 6.25 BTC. 2024: 3.125 BTC.
*   This creates a deflationary supply schedule.

**Inflation Rate**:
*   Bitcoin's current inflation rate is ~1.7% per year (new coins minted).
*   After the next halving, it will be ~0.85%.
*   Compare to the US Dollar, which can be printed infinitely.

**Lost Coins**:
*   It is estimated that 3-4 million BTC are lost forever (lost keys, forgotten wallets, Satoshi's coins).
*   This makes the effective supply even more scarce.

## Part 4: Bitcoin as "Digital Gold"

Why the comparison?

**Properties of Gold**:
*   **Scarcity**: Hard to mine, limited supply.
*   **Durability**: Doesn't rust or decay.
*   **Divisibility**: Can be melted into smaller units.
*   **Portability**: Valuable relative to weight.
*   **Fungibility**: One ounce of gold = another ounce.
*   **Store of Value**: Has maintained purchasing power for thousands of years.

**Bitcoin has the same properties—digitally**:
*   **Scarcity**: 21 million cap, ever-decreasing emission.
*   **Durability**: Digital, can't be destroyed (as long as one node exists).
*   **Divisibility**: 1 BTC = 100,000,000 satoshis. You can send 0.00000001 BTC.
*   **Portability**: Send $1 billion across the world in 10 minutes for $1 in fees.
*   **Fungibility**: 1 BTC = 1 BTC (though some argue "tainted" coins are less fungible).
*   **Store of Value**: Still being tested, but increasingly adopted.

**Bitcoin vs. Gold**:
*   Bitcoin is easier to store (a seed phrase vs. a vault).
*   Bitcoin is easier to transport (internet vs. armored trucks).
*   Bitcoin is easier to verify (on-chain vs. assay tests).
*   Gold has 5,000 years of history; Bitcoin has 15.

## Part 5: Bitcoin Security

The most secure network ever created.

**The Hashrate**:
*   Hashrate = the total computing power securing the network.
*   Bitcoin's hashrate is measured in exahashes per second (EH/s). Currently ~500+ EH/s.
*   To attack Bitcoin (51% attack), you would need more computing power than half the network—practically impossible.

**Energy Consumption Debate**:
*   Bitcoin uses ~120+ TWh per year—similar to some countries.
*   Critics: "It's wasteful." Supporters: "It's the cost of security" and "It incentivizes renewable energy."
*   Miners seek the cheapest power, often stranded or renewable (hydro in China, geothermal in Iceland, flared gas in Texas).

**Immutability**:
*   Once a transaction has 6 confirmations (~1 hour), it is considered irreversible.
*   Changing a block would require re-mining all subsequent blocks faster than the rest of the network.

## Part 6: Risks and Criticisms

Bitcoin is not without challenges.

**Volatility**:
*   Bitcoin has experienced 80%+ drawdowns multiple times.
*   This makes it a poor currency for everyday transactions (who wants to buy coffee with an asset that might double or halve in a month?).

**Scalability**:
*   Bitcoin processes ~7 transactions per second.
*   Visa does 65,000+.
*   Solution: Layer 2 (Lightning Network) enables fast, cheap transactions off-chain.

**Environmental Concerns**:
*   Proof of Work is energy-intensive.
*   Counter-argument: Bitcoin mining increasingly uses renewable energy and can stabilize grids.

**Regulatory Risk**:
*   Governments can ban or restrict Bitcoin (China did).
*   Regulation of exchanges and custodians is increasing globally.

**User Error**:
*   Lose your private key? Your Bitcoin is gone forever. No customer service.
*   Estimated 20% of all Bitcoin is lost.

## Part 7: The Bitcoin Ecosystem

Bitcoin is a global phenomenon.

**Layer 2: Lightning Network**:
*   A second layer built on top of Bitcoin.
*   Enables instant, near-free transactions.
*   You open a "channel" with someone, transact off-chain, and settle on-chain later.

**Bitcoin ETFs**:
*   In 2024, the SEC approved spot Bitcoin ETFs.
*   Institutions can now buy Bitcoin exposure through traditional brokerage accounts.
*   This has brought billions of dollars of institutional money.

**El Salvador**:
*   In 2021, El Salvador became the first country to make Bitcoin legal tender.
*   Controversial but a major milestone for adoption.

**Mining Industry**:
*   Multi-billion dollar industry.
*   Public mining companies (Marathon, Riot, CleanSpark).
*   Mining hardware (Bitmain, MicroBT).

## Part 8: Investment Considerations

Should you buy Bitcoin?

**Bull Case**:
*   "Digital Gold" narrative: a hedge against inflation and currency debasement.
*   Institutional adoption is accelerating (BlackRock, Fidelity).
*   Network effects: the more people use it, the more valuable it becomes.
*   Mathematically guaranteed scarcity.

**Bear Case**:
*   Extreme volatility and potential for 80%+ drawdowns.
*   No cash flows or earnings (unlike stocks).
*   Regulatory crackdowns could limit adoption.
*   Competition from other cryptocurrencies (though Bitcoin's first-mover advantage is strong).

**Portfolio Allocation**:
*   Many advisors suggest 1-5% of a portfolio in Bitcoin for diversification.
*   Never invest more than you can afford to lose.

**Long-Term Holding (HODL)**:
*   Historically, holding Bitcoin for 4+ years has been profitable regardless of entry point.
*   "Zoom out" is a common mantra—ignore short-term volatility.

## Part 9: Summary and Key Takeaways

*   **Bitcoin was created in 2009** as a decentralized, trustless alternative to traditional finance.
*   **21 million cap** makes Bitcoin scarce by design. Halvings reduce new supply every 4 years.
*   **Proof of Work** secures the network but consumes significant energy.
*   **"Digital Gold"**: Bitcoin shares gold's properties—scarcity, durability, divisibility—in digital form.
*   **Volatility is extreme**: 80%+ drawdowns are normal. Only invest what you can lose.
*   **Layer 2 (Lightning)** enables fast, cheap transactions.
*   **Institutional adoption** is accelerating (ETFs, corporate treasuries).
*   **HODL**: Bitcoin rewards long-term holders who survive the volatility.
\`,
        keyTakeaways: [
            "Bitcoin was created in 2009 as a decentralized alternative to traditional finance.",
            "Only 21 million BTC will ever exist, making it scarce by design.",
            "Bitcoin is often called 'Digital Gold' for its store-of-value properties.",
            "Volatility is extreme—80%+ drawdowns are normal.",
            "Institutional adoption is accelerating with ETFs and corporate treasuries."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Check if cb_2 already exists
const cb2Exists = content.indexOf('"cb_2":');
if (cb2Exists !== -1) {
    console.log('cb_2 already exists! Replacing...');
    const startPattern = /    "cb_2": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    // Find cb_1 and insert after it
    const cb1End = content.indexOf('"cb_1":');
    if (cb1End !== -1) {
        const cb1KeyTakeaways = content.indexOf('keyTakeaways:', cb1End);
        const cb1EndBracket = content.indexOf('},', cb1KeyTakeaways);
        if (cb1EndBracket !== -1) {
            const insertPos = cb1EndBracket + 2;
            content = content.slice(0, insertPos) + '\n' + newContent + content.slice(insertPos);
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('cb_2 added successfully!');

// Verify character count
const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
