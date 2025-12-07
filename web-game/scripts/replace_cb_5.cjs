const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const newContent = `    "cb_5": {
        title: "Wallets & Security",
        content: \`
# Your Keys, Your Coins: Mastering Crypto Wallets and Security

"Not your keys, not your coins" is the foundational principle of cryptocurrency ownership. Unlike traditional finance, where a bank holds your money, crypto gives you full control—and full responsibility. Understanding wallets, private keys, and security best practices is essential to protecting your assets. A single mistake can result in permanent, irreversible loss.

## Part 1: Public Keys, Private Keys, and Addresses

The cryptographic foundation of crypto ownership.

**Private Key**:
*   A randomly generated 256-bit number.
*   This is your password—the proof that you own your crypto.
*   If someone has your private key, they have your funds.
*   **Never share your private key with anyone, ever.**

**Public Key**:
*   Derived from your private key using elliptic curve cryptography.
*   Cannot be used to reverse-engineer the private key.
*   Used to verify your digital signatures.

**Wallet Address**:
*   A hashed version of your public key.
*   This is what you share to receive funds (like an email address).
*   Example (Ethereum): 0x742d35Cc6634C0532925a3b844Bc454e4438f44e

**The Relationship**:
*   Private Key → Public Key → Address.
*   You can derive the address from the private key, but not the other way around.

## Part 2: Seed Phrases — Your Master Backup

The ultimate backup for your wallet.

**What is a Seed Phrase?**:
*   A series of 12 or 24 words generated when you create a wallet.
*   Example: "apple banana cherry dog elephant fish grape hotel igloo jungle kite lemon"
*   This phrase can regenerate your private key and all associated addresses.

**BIP-39 Standard**:
*   Seed phrases use a standardized word list (2048 words).
*   The order of words matters. "apple banana cherry" ≠ "cherry banana apple."
*   Compatible across most wallets (you can import your seed into any BIP-39 wallet).

**Security Rules**:
*   Write it down on paper. Never store it digitally (no screenshots, no cloud).
*   Store in multiple secure locations (safe deposit box, fireproof safe).
*   Never enter your seed phrase online unless you are recovering your wallet.
*   If someone asks for your seed phrase, they are trying to scam you. 100%.

## Part 3: Types of Wallets

Different wallets for different needs.

**Hot Wallets (Software Wallets)**:
*   Connected to the internet.
*   Convenient for daily use and trading.
*   Types:
    *   **Desktop**: Installed on your computer (Exodus, Electrum).
    *   **Mobile**: Apps on your phone (Trust Wallet, MetaMask mobile).
    *   **Browser Extension**: Runs in your browser (MetaMask, Phantom).
*   Risk: If your device is compromised (malware, phishing), your funds are at risk.

**Cold Wallets (Hardware Wallets)**:
*   Not connected to the internet.
*   Private key never leaves the device.
*   Types:
    *   **Hardware Wallets**: Physical devices (Ledger, Trezor, GridPlus).
    *   **Paper Wallets**: A printed private key/QR code (old method, not recommended).
*   Security: Even if your computer is infected, the hardware wallet protects your key.

**Custodial Wallets**:
*   A third party (exchange) holds your private keys.
*   You trust them to keep your funds safe.
*   Examples: Coinbase, Binance, Kraken.
*   Risk: Exchange hacks, insolvency, account freezes (FTX collapse).

**Non-Custodial Wallets**:
*   You hold your own keys.
*   Examples: MetaMask, Ledger, Trust Wallet.
*   Full control, full responsibility.

## Part 4: Hardware Wallets — The Gold Standard

For serious crypto holders.

**How They Work**:
*   Private key is generated and stored inside the device.
*   When you sign a transaction, the device does the signing internally.
*   The private key never touches your computer or the internet.

**Popular Hardware Wallets**:
*   **Ledger Nano S/X/Stax**: Most popular. Secure Element chip. Supports many coins.
*   **Trezor Model One/T/Safe**: Open-source firmware. No Secure Element but still secure.
*   **GridPlus Lattice1**: Advanced features, large touchscreen.

**Best Practices**:
*   Buy directly from the manufacturer (not Amazon or eBay—tampered devices exist).
*   Set a strong PIN.
*   Backup your seed phrase separately from the device.
*   Use a passphrase (25th word) for extra security.

## Part 5: Common Threats and How to Avoid Them

The crypto world is full of danger.

**Phishing**:
*   Fake websites that look like real wallets or exchanges.
*   You enter your seed phrase → funds stolen instantly.
*   Protection: Bookmark official sites. Double-check URLs. Never Google and click.

**Malware**:
*   Keyloggers, clipboard hijackers (swap addresses when you copy/paste).
*   Protection: Use a hardware wallet. Verify addresses on the device screen.

**Fake Apps**:
*   Scam apps on app stores that impersonate real wallets.
*   Protection: Download only from official links. Check review count and developer.

**Social Engineering**:
*   Scammers pretend to be support agents: "I need your seed phrase to help."
*   Protection: No legitimate service will ever ask for your seed phrase.

**SIM Swapping**:
*   Attackers convince your phone carrier to transfer your number to their SIM.
*   They use SMS 2FA to access your accounts.
*   Protection: Use authenticator apps (not SMS). Lock your SIM with a PIN.

## Part 6: Exchange Security

If you keep funds on an exchange.

**Choosing an Exchange**:
*   Reputation and track record.
*   Proof of reserves (do they have the funds they claim?).
*   Regulatory compliance.

**Security Features**:
*   Enable 2FA (use authenticator app, not SMS).
*   Whitelist withdrawal addresses.
*   Enable withdrawal email/phone confirmation.
*   Use a strong, unique password.

**The Custodial Risk**:
*   Exchanges can be hacked (Mt. Gox, Bitfinex, FTX).
*   Exchanges can freeze your account (compliance, legal).
*   "Not your keys, not your coins."

**Best Practice**:
*   Keep only trading funds on exchanges.
*   Move long-term holdings to cold storage.

## Part 7: Multi-Signature and Advanced Security

For large holdings or organizations.

**Multi-Sig Wallets**:
*   Require M-of-N signatures to authorize a transaction.
*   Example: 2-of-3 multisig requires 2 out of 3 signers to approve.
*   If one key is lost or compromised, funds are still safe.

**Use Cases**:
*   Company treasuries (multiple executives must sign).
*   Personal security (keys in different locations).
*   Inheritance planning.

**Popular Multi-Sig Solutions**:
*   **Gnosis Safe**: Most popular on Ethereum.
*   **Casa**: Multi-sig for personal Bitcoin.

**Passphrase (25th Word)**:
*   Add an extra word to your seed phrase.
*   Creates a completely separate set of addresses.
*   Even if someone steals your 24 words, they can't access passphrase-protected funds.

## Part 8: Backup and Recovery Planning

What happens when you're gone?

**Inheritance Planning**:
*   If you die, can your family access your crypto?
*   Options: Share seed phrase with trusted family member (risk), use a lawyer, use a service like Casa.

**Geographic Distribution**:
*   Don't keep all backups in one place.
*   Example: One copy in your safe, one in a bank safe deposit box, one with a trusted family member.

**Metal Backups**:
*   Paper can burn or get wet.
*   Stamp your seed phrase into steel plates (Cryptosteel, Billfodl).

**Regular Testing**:
*   Periodically verify your backup works.
*   Create a new wallet and restore from seed to confirm.

## Part 9: Summary and Key Takeaways

*   **Private key = ownership**. Protect it like your life depends on it.
*   **Seed phrase can restore everything**. Never share it. Never store digitally.
*   **Hot wallets are convenient but risky**. Use for small amounts.
*   **Cold wallets (hardware) are the gold standard** for security.
*   **Custodial wallets mean trusting a third party**. "Not your keys, not your coins."
*   **Phishing, malware, and social engineering** are the biggest threats.
*   **Use 2FA (authenticator app), strong passwords, and withdrawal whitelists**.
*   **Multi-sig and passphrases** provide advanced security for large holdings.
*   **Plan for inheritance** and backup recovery.
\`,
        keyTakeaways: [
            "Private key = ownership. Never share it. Never store it digitally.",
            "Seed phrase (12/24 words) can restore your entire wallet. Guard it carefully.",
            "Hardware wallets (Ledger, Trezor) are the gold standard for security.",
            "Phishing, malware, and social engineering are the biggest threats.",
            "Not your keys, not your coins—minimize funds on exchanges."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

const cbExists = content.indexOf('"cb_5":');
if (cbExists !== -1) {
    console.log('cb_5 already exists! Replacing...');
    const startPattern = /    "cb_5": \{[\s\S]*?keyTakeaways: \[[\s\S]*?\]\s*\},/;
    content = content.replace(startPattern, newContent);
} else {
    const prevEnd = content.indexOf('"cb_4":');
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
console.log('cb_5 added successfully!');

const contentStart = newContent.indexOf('content: `');
const contentEnd = newContent.lastIndexOf('`');
const textContent = newContent.substring(contentStart + 10, contentEnd);
const parts = (newContent.match(/## Part \d+/g) || []).length;
console.log(`New content: ${textContent.length} characters, ${parts} parts`);
