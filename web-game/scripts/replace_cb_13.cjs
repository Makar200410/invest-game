const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_13": {
        title: "Avoiding Crypto Scams",
        content: \`
# Protecting Your Assets: How to Avoid Crypto Scams

The crypto world is a paradise for scammers. The combination of irreversible transactions, pseudonymity, and widespread financial illiteracy creates endless opportunities for fraud. Billions of dollars are stolen every year through phishing, rug pulls, Ponzi schemes, and social engineering. Learning to identify and avoid scams is not optional—it is a survival skill in crypto.

## Part 1: Why Crypto Attracts Scammers

The perfect storm.

**Irreversibility**:
*   Once you send crypto, it's gone. There's no bank to reverse the transaction. No customer service to file a complaint with.
*   Scammers exploit this finality.

**Pseudonymity**:
*   Scammers can operate anonymously behind wallet addresses.
*   Even if you know you've been scammed, tracking down the criminal is extremely difficult.

**Lack of Regulation**:
*   The crypto industry is still lightly regulated.
*   No deposit insurance. No consumer protections. You're on your own.

**FOMO and Greed**:
*   Crypto's history of massive gains (1000x returns) makes people desperate to get in.
*   Scammers exploit this with "guaranteed" returns and "limited-time" offers.

**Technical Complexity**:
*   Many people don't understand how wallets, smart contracts, or blockchains work.
*   Scammers take advantage of this ignorance.

## Part 2: Phishing Attacks

The most common attack vector.

**What It Is**:
*   Attackers create fake websites, emails, or messages that impersonate legitimate services.
*   Victims enter their seed phrases, private keys, or passwords—which are captured by the attacker.

**Common Phishing Methods**:
*   **Fake Websites**: Lookalike domains (e.g., "metamaask.io" instead of "metamask.io").
*   **Fake Support DMs**: "Hello, I'm from MetaMask support. Please give me your seed phrase to verify your account."
*   **Malicious Links**: Clicking a link executes a malicious script or leads to a fake site.
*   **Email Phishing**: Emails that look like they're from exchanges or wallets, asking you to log in.

**How to Protect Yourself**:
*   **Bookmark official sites**. Never Google and click on ads.
*   **No legitimate service will ever ask for your seed phrase**. Ever.
*   **Enable 2FA** on all accounts (use an authenticator app, not SMS).
*   **Verify URLs carefully**. Look for https://, check spelling.
*   **Be skeptical of all DMs**. Official teams rarely DM first.

## Part 3: Rug Pulls

When the project creators steal everything.

**What It Is**:
*   Developers create a new token or NFT project.
*   They hype it up, attract investment, and build liquidity pools.
*   Once enough money is in, they drain the funds and disappear.

**Types of Rug Pulls**:
*   **Liquidity Rug**: Developers remove all liquidity from a DEX pool, making the token unsellable.
*   **Selling Rug**: Team dumps their tokens all at once, crashing the price.
*   **Honeypot**: The smart contract is coded so only the creators can sell.

**Red Flags**:
*   Anonymous team with no track record.
*   Unverified or unaudited smart contracts.
*   Suspicious token distribution (team holds 90%+ of supply).
*   Too-good-to-be-true APYs or guarantees.
*   "Can't sell" errors on DEXs (honeypot).

**How to Protect Yourself**:
*   Research the team. Are they doxxed? Do they have a history?
*   Check if the contract is verified and audited.
*   Use tools like Token Sniffer, RugDoc, or DEXTools to analyze tokens.
*   Never ape into brand-new tokens without research.

## Part 4: Ponzi Schemes

The classic scam, crypto edition.

**What It Is**:
*   A scheme that pays existing investors with funds from new investors.
*   Appears profitable until new money stops flowing.
*   Guaranteed to collapse eventually.

**Crypto Ponzi Examples**:
*   **Bitconnect (2017)**: Promised 1% daily returns. Collapsed, billions lost.
*   **OneCoin**: Wasn't even a real cryptocurrency. $4 billion fraud.
*   **PlusToken (2019)**: $2+ billion stolen in Asia.

**Red Flags**:
*   "Guaranteed" high returns (10% per month, etc.).
*   Returns come from "trading bots" or undisclosed strategies.
*   Strong emphasis on recruiting new investors.
*   No clear, auditable source of yield.

**How to Protect Yourself**:
*   If it sounds too good to be true, it is.
*   Ask: Where does the yield come from? If the answer is vague, run.
*   Real DeFi yields are transparent (you can see the fees and staking rewards on-chain).

## Part 5: Fake Projects and Impersonation

Exploiting trust.

**Fake Tokens**:
*   Scammers create tokens with names similar to real projects (e.g., "Uniswap V4 Token").
*   They list them on DEXs, hoping people will buy by mistake.
*   Always verify the contract address on official channels.

**Impersonation Scams**:
*   Fake Twitter/X accounts with similar handles (Vitalik_Buterinn vs. VitalikButerin).
*   Scammers reply to famous people's tweets: "Send me 1 ETH, I'll send back 10."
*   No one is giving away free money.

**Fake Airdrops**:
*   "You've received a free airdrop! Connect your wallet to claim."
*   The site drains your wallet upon connection.
*   Real airdrops don't require you to connect first. Check official announcements.

**Fake Apps**:
*   Malicious apps on App Store/Play Store pretending to be legitimate wallets.
*   Download only from official links.

## Part 6: Social Engineering

Manipulating you psychologically.

**Romance Scams ("Pig Butchering")**:
*   Scammers build relationships over weeks or months.
*   Eventually, they introduce you to a "great investment opportunity" (crypto platform).
*   You deposit funds, see "gains" on the platform, but withdrawals are blocked.
*   Billions stolen globally through this method.

**Discord/Telegram Scams**:
*   "Admin" or "Support" DMs you with a fake issue.
*   Asks for seed phrase or directs you to a phishing site.
*   Legitimate admins never DM first.

**Urgency and Pressure**:
*   "Limited time offer! Only 10 spots left!"
*   Designed to make you act without thinking.
*   Take your time. Legit opportunities don't disappear in 10 minutes.

## Part 7: Smart Contract Exploits

When the code is the scam.

**Malicious Contract Approvals**:
*   When you interact with a dApp, you often approve the contract to spend tokens on your behalf.
*   A malicious contract can take unlimited approvals and drain your wallet later.
*   Solution: Use Revoke.cash to cancel old approvals.

**Honeypots**:
*   Contracts coded so only the creator can withdraw or sell.
*   You buy in, but you can never sell.
*   Use honeypot checkers (Token Sniffer, Honeypot Detector).

**Flash Loan Attacks**:
*   Not a scam against retail users, but protocols.
*   Attackers borrow massive amounts, manipulate prices, and drain protocols.
*   If a protocol is exploited, your funds may be lost.

## Part 8: Protecting Yourself — Best Practices

**General Rules**:
*   **Never share your seed phrase**. Not with "support," not with "partners," not with anyone.
*   **Bookmark official sites**. Don't trust Google ads or Discord links.
*   **Verify contract addresses** on official sources before interacting.
*   **Use a hardware wallet** for significant holdings.
*   **Enable 2FA** on all exchange accounts (authenticator app, not SMS).
*   **Revoke approvals** regularly using Revoke.cash.

**Due Diligence**:
*   Research teams, audits, and tokenomics before investing.
*   If it sounds too good to be true, assume it's a scam.
*   Check for verified contracts and community sentiment.

**Cold Storage**:
*   Keep long-term holdings in a hardware wallet.
*   Only keep what you're actively using in hot wallets or on exchanges.

**Stay Skeptical**:
*   No one is giving away free money.
*   Urgency is a manipulation tactic.
*   If you feel pressured, step back.

## Part 9: Summary and Key Takeaways

*   **Crypto scams are rampant** due to irreversibility, pseudonymity, and FOMO.
*   **Phishing** is the most common attack—never share your seed phrase.
*   **Rug pulls** drain funds from new projects—research before investing.
*   **Ponzi schemes** promise unrealistic returns—they always collapse.
*   **Impersonation scams** use fake accounts and tokens—verify everything.
*   **Social engineering** manipulates emotions—be skeptical of urgent or romantic approaches.
*   **Smart contract exploits** can drain wallets—revoke approvals and use honeypot checkers.
*   **Best practices**: hardware wallets, 2FA, bookmark official sites, never rush.
*   **If it sounds too good to be true, it is**.
\`,
        keyTakeaways: [
            "Never share your seed phrase with anyone—no legitimate service will ask for it.",
            "Phishing, rug pulls, and Ponzi schemes are the most common scams.",
            "Verify contract addresses and team backgrounds before investing.",
            "Use hardware wallets, 2FA, and regularly revoke smart contract approvals.",
            "If it sounds too good to be true, it is—always stay skeptical."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_13":');
if (cbExists !== -1) {
    console.log('cb_13 already exists! Replacing...');
    const startPattern = /    "cb_13": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_12":');
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
console.log('cb_13 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
