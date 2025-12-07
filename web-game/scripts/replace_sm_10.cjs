const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_10": {
        title: "Margin Trading",
        content: \`
# Margin Trading: Borrowing to Invest

[Margin trading](/glossary#margin-account) means borrowing money from your broker to buy more securities than you could afford with just your own cash. It's like using a mortgage to buy a bigger house — [leverage](/glossary#leverage) amplifies both gains and losses. For most investors, margin is unnecessary and dangerous. But understanding how it works is essential knowledge.

## Part 1: What Is Margin?

[Margin](/glossary#margin-account) is a loan from your broker, using your securities as collateral.

*   **Definition**: Borrowing power provided by your broker against the value of your portfolio.
*   **[Margin Account](/glossary#margin-account)**: A brokerage account type that allows borrowing. Different from a [cash account](/glossary#cash-account).
*   **Initial Margin**: Minimum down payment when buying on margin. Typically 50% (you can borrow up to half).
*   **Example**: You want to buy $20,000 of stock. With 50% margin, you need $10,000 cash, borrow $10,000 from broker.
*   **[Leverage](/glossary#leverage)**: At 50% margin, you have 2x [leverage](/glossary#leverage). $10,000 of your money controls $20,000 of stock.
*   **Collateral**: Your securities secure the loan. If their value falls, your collateral is worth less.

## Part 2: The Mathematics of Leverage

[Leverage](/glossary#leverage) amplifies BOTH gains AND losses equally. The math is crucial to understand.

*   **2x Leverage**: If the stock rises 10%, you gain 20%. If it falls 10%, you lose 20%.
*   **Upside Example**: Buy $20,000 stock with $10,000 cash + $10,000 margin. Stock rises 20% to $24,000. Profit: $4,000. Return on YOUR $10,000: 40%.
*   **Downside Example**: Same position. Stock falls 20% to $16,000. Loss: $4,000. Return on YOUR $10,000: -40%.
*   **Break-Even**: Stock must rise enough to cover margin interest costs before you profit.
*   **The Trap**: Good returns feel amazing. Bad returns come faster than you can react.
*   **Compounding Losses**: A 50% loss requires a 100% gain to recover. [Leverage](/glossary#leverage) makes this worse.

## Part 3: Margin Interest — The Cost of Borrowing

You pay interest on borrowed money. This continuous cost eats into returns.

*   **Interest Rates**: Vary by broker. Typically 5-10%+ annually on borrowed funds.
*   **Continuous Charge**: Interest accrues daily, billed monthly. You pay regardless of whether the [stock](/glossary#stock) rises.
*   **Example**: Borrow $50,000 at 8% margin rate = $4,000/year in interest. Your investments must return >8% just to break even.
*   **Compounding Drag**: If you're paying 8% and the market returns 10%, you only net 2%.
*   **Rate Tiers**: Some brokers offer lower rates for larger borrowed amounts. Interactive Brokers is known for low margin rates.
*   **Tax Deductibility**: Margin interest may be deductible against investment income (consult a tax advisor).

## Part 4: Margin Calls — The Danger Zone

If your collateral falls too low, the broker demands immediate action. This is the dreaded [margin call](/glossary#margin-call).

*   **Maintenance Margin**: Minimum equity you must maintain. Typically 25-30% of position value.
*   **Example**: You have $20,000 position (10,000 yours, $10,000 borrowed). Maintenance margin = 25% = $5,000 equity required.
*   **Trigger**: If stock falls 50% to $10,000, your equity = $0. You've hit maintenance before this!
*   **[Margin Call](/glossary#margin-call)**: Broker demands you deposit more cash or sell securities immediately.
*   **Forced Liquidation**: If you don't meet the call, the broker can sell your positions at market price — no permission needed.
*   **Worst Timing**: [Margin calls](/glossary#margin-call) happen during crashes when prices are lowest. You're forced to sell at the worst time.

## Part 5: Pattern Day Trader (PDT) Rule

Active traders using margin face additional restrictions designed to protect (or limit) them.

*   **Definition**: You're flagged as a "[Pattern Day Trader](/glossary#pdt-rule)" if you make 4+ day trades within 5 business days.
*   **Day Trade**: Buying and selling the same security in the same day.
*   **$25,000 Requirement**: PDT accounts must maintain minimum $25,000 equity at all times.
*   **Consequences**: Below $25,000, your account is restricted. Limited to 3 day trades per 5 days.
*   **Exception**: [Cash accounts](/glossary#cash-account) don't have PDT limits (but you must wait for settlement).
*   **The Intent**: Regulators assume traders with less capital are higher [risk](/glossary#risk) and need protection from themselves.

## Part 6: When Margin Might Make Sense

Margin isn't purely evil. In limited circumstances, it can be used responsibly.

*   **Bridge Financing**: Cover short-term cash needs while waiting for a transfer, rather than selling investments.
*   **Tax Efficiency**: Borrow against portfolio for a large purchase instead of realizing [capital gains](/glossary#capital-gains) to raise cash.
*   **Professionals**: Hedge funds use margin as part of sophisticated strategies with strict [risk](/glossary#risk) management.
*   **Home Down Payment**: Some use [Securities Backed Lines of Credit](/glossary#sbloc) (SBLOC) for home purchases.
*   **Emergency Funds**: Access cash without selling in a down market (use very cautiously).
*   **Key Rule**: If using margin, keep [leverage](/glossary#leverage) very low (20% of portfolio max) and have a clear repayment plan.

## Part 7: Risk Management for Margin Users

If you choose to use margin, strict discipline is mandatory.

*   **Low [Leverage](/glossary#leverage)**: Never borrow more than 10-20% of your portfolio value. Leave massive buffer before [margin call](/glossary#margin-call) territory.
*   **Diversification**: Don't use margin on a concentrated position. One bad [stock](/glossary#stock) can wipe you out.
*   **Emergency Cash**: Keep cash reserves outside the margin account to meet potential calls.
*   **[Stop-Losses](/glossary#stop-loss)**: Consider [stop orders](/glossary#stop-loss) to limit how far positions can fall against you.
*   **Stress Test**: Calculate what happens if your [portfolio](/glossary#portfolio) drops 30%, 40%, 50%. Can you survive?
*   **Avoid During [Volatility](/glossary#volatility)**: Reduce or eliminate margin during high-[VIX](/glossary#vix) periods. Crashes are when margin kills.

## Part 8: Real Stories of Margin Disasters

History is littered with examples of margin destroying seemingly sophisticated investors.

*   **1929 Crash**: Margin requirements were just 10%. Massive [leverage](/glossary#leverage) led to devastating forced selling, deepening the Depression.
*   **Long-Term Capital Management (1998)**: Nobel Prize winners' hedge fund used extreme [leverage](/glossary#leverage). Nearly collapsed the financial system.
*   **Bill Hwang / Archegos (2021)**: Used hidden [leverage](/glossary#leverage) via swaps. Lost $20 billion in days. Banks lost billions more.
*   **COVID Crash (March 2020)**: Margin calls across markets caused forced selling, accelerating the downturn.
*   **The Pattern**: Even "experts" blow up when [leverage](/glossary#leverage) meets unexpected [volatility](/glossary#volatility). If they can't manage it, neither can you.

## Part 9: The Bottom Line on Margin

For the vast majority of investors, margin should be avoided entirely.

*   **Unnecessary**: You can build wealth perfectly well without ever borrowing a dollar.
*   **Psychological Danger**: [Leverage](/glossary#leverage) amplifies emotions. Panic selling is worse when you're seeing magnified losses.
*   **Returns Aren't Worth [Risk](/glossary#risk)**: The market returns 10% on average. Is risking financial ruin worth maybe getting 15%?
*   **The Safe Path**: Invest with money you actually have. Sleep well. Compound peacefully for decades.
*   **Warren Buffett's View**: "If you're smart, you don't need [leverage](/glossary#leverage). If you're not smart, you have no business using it."
*   **Final Word**: Understand margin so you recognize its dangers. Then don't use it.
\`,
        keyTakeaways: [
            "Margin allows borrowing against your portfolio, amplifying both gains and losses.",
            "Margin interest costs 5-10%+ annually — investments must beat this just to break even.",
            "Margin calls force you to sell at the worst possible time during market crashes.",
            "For most investors, margin is unnecessary and dangerous — avoid it entirely."
        ]
    },`;

const startMarker = '"sm_10": {';
const endMarker = '"sm_11": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_10: Margin Trading - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_10!');
