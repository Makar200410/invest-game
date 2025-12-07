const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "sm_13": {
        title: "Earnings Season Strategies",
        content: \`
# Earnings Season: When Companies Report Results

Four times a year, publicly traded companies release their quarterly financial results. This is [Earnings Season](/glossary#earnings). These reports drive massive [stock](/glossary#stock) price movements as investors react to performance versus expectations. Understanding earnings dynamics helps you navigate the [volatility](/glossary#volatility) and avoid common mistakes made by both novice and experienced investors.

## Part 1: What Is Earnings Season?

[Earnings Season](/glossary#earnings) is the period when most public companies release their quarterly financial reports.

*   **Timing**: About 2-3 weeks after each quarter ends. Q1 earnings in April, Q2 in July, Q3 in October, Q4 in January.
*   **Concentration**: Major companies report within a 4-6 week window. The busiest weeks see hundreds of reports daily.
*   **Required Reports**: Public companies must file 10-Q (quarterly) and 10-K (annual) with the SEC.
*   **The Call**: Most companies hold [earnings calls](/glossary#earnings-call) — conference calls where management discusses results with analysts.
*   **Market Impact**: Single [stocks](/glossary#stock) can move 10-20%+ in a single day on earnings. It's the highest-[volatility](/glossary#volatility) event for individual [stocks](/glossary#stock).
*   **Information Dump**: Earnings release, guidance, management commentary, and analyst Q&A all happen simultaneously.

## Part 2: What's in an Earnings Report?

Earnings reports contain several key numbers that investors analyze intensely.

*   **Revenue (Top Line)**: Total sales. "Did the company grow its business?"
*   **[Earnings Per Share](/glossary#eps) (EPS) (Bottom Line)**: Profit divided by shares outstanding. The most-watched number.
*   **[Gross Margin](/glossary#gross-margin)**: (Revenue - Cost of Goods Sold) / Revenue. Measures pricing power.
*   **Operating [Margin](/glossary#operating-margin)**: Operating Income / Revenue. Measures operational efficiency.
*   **[Free Cash Flow](/glossary#free-cash-flow)**: Actual cash generated after capital expenditures. Cash is truth.
*   **Guidance**: Management's forecast for next quarter and/or next year.
*   **Segment Breakdown**: Performance of different business lines (e.g., iPhone vs. Services for Apple).

## Part 3: Beat/Miss — The Expectations Game

Stock reactions depend not on absolute results, but on results VERSUS expectations.

*   **[Analyst Estimates](/glossary#analyst-estimate)**: Wall Street analysts publish [EPS](/glossary#eps) and revenue estimates before earnings. The "consensus" is the average.
*   **Beat**: Company reports higher [EPS](/glossary#eps) than consensus. Stock often rises.
*   **Miss**: Company reports lower [EPS](/glossary#eps) than consensus. Stock often falls.
*   **The Trick**: Many companies deliberately set low expectations (through guidance) then "beat." This manipulation is widely understood.
*   **"Beat and Crash"**: Sometimes a company beats estimates but the stock falls. This happens when the beat was expected, guidance disappoints, or the "quality" of the beat was poor.
*   **Whisper Numbers**: Unofficial estimates that may be higher than published consensus. The real expectation may differ from the public number.

## Part 4: Guidance — The Future Matters More

Guidance — management's forecast for upcoming quarters — often matters more than past results.

*   **Why Guidance Matters**: [Stocks](/glossary#stock) are priced on FUTURE [earnings](/glossary#eps), not past [earnings](/glossary#eps). Guidance tells you what's coming.
*   **Raising Guidance**: Company increases its forecast. Very bullish signal. Stock often jumps.
*   **Lowering Guidance**: Company decreases its forecast. Very bearish. Stock crashes even if past quarter was good.
*   **No Guidance**: Some companies don't give guidance (e.g., Berkshire Hathaway). Increases uncertainty.
*   **"Beat and Raise"**: The ideal scenario. Strong quarter AND higher future expectations. Usually drives stocks sharply higher.
*   **"Beat but Lower Guidance"**: Past was good, future looks worse. Stock often falls despite the beat.

## Part 5: Earnings Volatility — The Coin Flip

Individual [stock](/glossary#stock) earnings reactions are notoriously unpredictable. Even experts get it wrong.

*   **Magnitude**: Stocks often move 5-15% on earnings. Some move 20%+. Double-digit swings are common.
*   **Unpredictability**: The reaction isn't predictable by amateurs OR professionals. Too many variables.
*   **Pre-Earnings Run-Up**: Stocks often rise before earnings (optimism). The actual report may disappoint despite a beat.
*   **Sell the News**: Sometimes [stocks](/glossary#stock) that rallied into earnings fall afterward, even on good news. "Buy the rumor, sell the news."
*   **Implied Volatility**: [Options](/glossary#options) markets price in expected [volatility](/glossary#volatility). Implied [volatility](/glossary#volatility) spikes before earnings.
*   **Post-Earnings Drift**: Research shows [stocks](/glossary#stock) that beat continue drifting higher for weeks; misses continue lower.

## Part 6: Pre-Earnings Strategies (Speculative)

Some traders try to position before earnings. These strategies are high-[risk](/glossary#risk).

*   **Buying Before Earnings**: Gambling on a beat and positive reaction. High [risk](/glossary#risk).
*   **Selling Before Earnings**: Avoiding the uncertainty. Missing potential upside if report is good.
*   **Straddle (Options)**: Buy both a call and put, profiting if [stock](/glossary#stock) moves big in either direction. Premium is expensive.
*   **History Analysis**: Some traders look at prior earnings reactions to gauge tendencies.
*   **Warning**: Pre-earnings positioning is essentially gambling. Even great analysts get earnings reactions wrong regularly.
*   **Retail Disadvantage**: Institutions have better models, more data, and management access. You're at a disadvantage.

## Part 7: Post-Earnings Strategies (Slightly Smarter)

Waiting until after earnings to trade reduces unpredictability.

*   **Wait and See**: Let the report come out, watch the reaction, then decide.
*   **Buy the Dip**: If a company you believe in drops on earnings for reasons you disagree with, consider buying.
*   **Confirmation**: A strong beat with good guidance confirms your thesis. Added confidence to hold or buy more.
*   **Disconfirmation**: If your investment thesis is broken by the report, consider selling.
*   **Multi-Quarter Trends**: One quarter doesn't define a company. Look for patterns over multiple quarters.
*   **Post-Earnings Volatility**: The first 1-2 hours after earnings are extremely volatile. [Spreads](/glossary#bid-ask-spread) widen. Consider waiting for things to settle.

## Part 8: Avoiding Common Earnings Mistakes

Investors make predictable errors around earnings. Avoid these traps.

*   **Mistake: Panic Selling on Miss**: One bad quarter doesn't mean the business is dead. Check if it's temporary or structural.
*   **Mistake: FOMO Buying on Beat**: Chasing [stocks](/glossary#stock) that already jumped 15% often leads to buying the top.
*   **Mistake: Trading on Afterhours Prices**: [Spreads](/glossary#bid-ask-spread) are wide; [liquidity](/glossary#liquidity) is thin. At-morning prices often differ from after-hours.
*   **Mistake: Ignoring Guidance**: Focusing only on EPS beat/miss. The forward-looking guidance usually matters more.
*   **Mistake: Options Gamblers**: Buying cheap [options](/glossary#options) expiring right after earnings is pure gambling.
*   **Mistake: Overweighting One Quarter**: Long-term investors shouldn't let one quarter derail years of conviction.

## Part 9: The Long-Term Investor's Approach

If you're investing for decades, earnings season is mostly noise. Here's the enlightened perspective.

*   **Don't Trade Earnings**: Most long-term investors should simply hold through earnings. Don't try to time short-term moves.
*   **Use It for Research**: Earnings reports provide valuable information about the business. Read them to understand, not to trade.
*   **Listen to Calls**: Earnings calls reveal management quality, strategy, and thinking. Highly educational.
*   **Check Thesis**: Does the quarterly result confirm or challenge your long-term investment thesis?
*   **Ignore Short-Term [Volatility](/glossary#volatility)**: A 10% swing after earnings means nothing to a 30-year investment.
*   **[Index Fund](/glossary#index-fund) Peace**: If you own [index funds](/glossary#index-fund), earnings season is just noise. Hundreds of companies report; it all averages out.
*   **The Truth**: Most [earnings](/glossary#eps)-driven price moves reverse within weeks. Short-term traders rarely beat long-term holders.
\`,
        keyTakeaways: [
            "Earnings season drives massive volatility as companies report quarterly results.",
            "Results vs. expectations matter more than absolute numbers — 'beat' or 'miss' determines reaction.",
            "Guidance for future quarters often matters more than past performance.",
            "Long-term investors should treat earnings as information, not trading signals."
        ]
    },`;

const startMarker = '"sm_13": {';
const endMarker = '// Module 4';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== sm_13: Earnings Season - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 9000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 9000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated sm_13!');
console.log('\n=== ALL MODULE 3 LESSONS UPDATED SUCCESSFULLY! ===');
