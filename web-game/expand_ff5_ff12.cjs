const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Additional content to append to each lesson
const expansions = {
    ff_5: `

## Part 8: The Money Multiplier and Fractional Reserve

Understanding how money is actually created:
*   Banks only keep a fraction of deposits in reserve (e.g., 10%)
*   When you deposit $1,000, bank keeps $100, lends $900
*   That $900 gets deposited elsewhere, $810 lent again
*   This creates a [money multiplier](/glossary#money-multiplier) effect

The [money supply](/glossary#money-supply) is mostly bank-created, not printed. When banks stop lending (credit crunch), the money supply contracts regardless of what the [Fed](/glossary#federal-reserve) does.

### The Shadow Banking System
Beyond traditional banks:
*   Money market funds, repo markets, commercial paper
*   $15+ trillion in [assets](/glossary#asset), largely unregulated
*   When shadow banking freezes (2008), the entire financial system seizes

The [Fed](/glossary#federal-reserve) learned to backstop shadow banking during crises.

## Part 9: Global Central Bank Coordination

Central banks don't operate in isolation:
*   Dollar is the world's reserve [currency](/glossary#fiat-currency) — Fed is the "central bank of the world"
*   When [Fed](/glossary#federal-reserve) raises rates, [capital](/glossary#capital) flows to US, emerging markets suffer
*   Currency swap lines allow central banks to lend dollars to each other during crises

The 2008 crisis and COVID-19 saw unprecedented global coordination. Understanding this interconnection is crucial for international investors.

## Conclusion

[Central banks](/glossary#central-bank) are the most important institutions affecting your money. They control the weather of finance — you can't change it, but you can prepare for it. Watch the [Fed Funds Rate](/glossary#fed-funds-rate), the [yield curve](/glossary#yield-curve), and [Fed](/glossary#federal-reserve) communication closely. Position your [portfolio](/glossary#portfolio) to align with, not fight, [monetary policy](/glossary#monetary-policy).`,

    ff_6: `

## Part 8: Black Swan Events

Some crashes come from nowhere:
*   **[Black Swan](/glossary#black-swan)**: Rare, unpredictable, massive impact
*   Examples: 9/11, COVID-19, 2008 Financial Crisis
*   Cannot be predicted by historical data
*   Occur more often than normal distributions suggest

Nassim Taleb's insight: Our models assume normal distributions but reality has "fat tails" — extreme events happen more often than expected.

### Preparing for the Unknown
*   Maintain 6-12 months expenses in cash
*   Don't use [leverage](/glossary#leverage) (magnifies [black swan](/glossary#black-swan) losses)
*   Diversify globally across [asset](/glossary#asset) classes
*   Have a written plan for what to do in a 50% crash (hint: do nothing)

## Part 9: The Long-Term Perspective

Historical market data reveals powerful truths:
*   **Every crash has recovered** — 100% track record over 200+ years
*   Average [bear market](/glossary#bear-market) lasts 14 months; average [bull market](/glossary#bull-market) lasts 4.5 years
*   Annual returns range wildly (-37% to +54%), but 20-year returns are almost always positive
*   Time in market beats timing the market every time

The stock market is a machine for transferring money from the impatient to the patient. Stay patient.

## Conclusion

Economic cycles are as natural as seasons. Winter always comes, but so does spring. Those who panic in [recessions](/glossary#recession) lock in losses. Those who buy during [recessions](/glossary#recession) become wealthy. Have an allocation you can maintain through any cycle. Review your [portfolio](/glossary#portfolio) annually, not daily. Trust the process and let time work its magic.`,

    ff_7: `

## Part 8: Reading the Notes and MD&A

Beyond the three main statements:
*   **Footnotes**: Where the bodies are buried. Accounting policy changes, contingent liabilities, off-balance-sheet items
*   **MD&A (Management Discussion & Analysis)**: Management's narrative. Read skeptically — they spin.
*   **Auditor's Opinion**: "Unqualified" = clean. Anything else = red flag.

Many frauds were revealed in footnotes for years before anyone noticed. Read them.

### Comparing Across Time and Companies
*   Track metrics year-over-year (are margins improving or declining?)
*   Compare to direct competitors (who is more profitable?)
*   Industry matters: Banks have different statements than tech companies
*   Know the benchmarks for each industry

## Part 9: Practical Reading Tips

For individual investors:
*   Start with companies you understand (your employer, products you use)
*   Read the 10-K annual report, not news articles
*   Focus on cash flow, not earnings (harder to manipulate)
*   Look for consistency over multiple years, not one quarter
*   If you can't explain where profits come from, don't invest

Warren Buffett reads 500+ pages of financial statements daily. You don't need to go that far, but reading is the foundation of fundamental analysis.

## Conclusion

Financial statements are the language of business. Learning to read them separates investors from speculators. You don't need an accounting degree — just understand where cash comes from, where it goes, and whether the trends are improving. The numbers reveal what management's words often hide. Read the statements before reading the stock price.`,

    ff_8: `

## Part 8: The Cycle of Valuation

Valuations are cyclical:
*   **Bubble Peaks**: P/E ratios expand to 25-30+. Euphoria. "This time is different."
*   **Crash Bottoms**: P/E ratios contract to 8-12. Terror. "The world is ending."
*   **Historical Average P/E**: ~16-17 for S&P 500

When valuation is high, forward returns tend to be lower. When valuation is low, forward returns tend to be higher. This isn't timing — it's math.

### The CAPE Ratio
Shiller's Cyclically Adjusted Price-to-Earnings:
*   Uses 10-year average earnings (smooths cycles)
*   CAPE above 30 = historically expensive
*   CAPE below 15 = historically cheap
*   Current CAPE levels are above historical averages — meaning lower expected returns

## Part 9: Putting It All Together

Valuation framework for your investments:
1.  For individual [stocks](/glossary#stock): Compare P/E, P/S to historical average and competitors
2.  For overall market: Track CAPE, understand we're in expensive territory
3.  For [asset](/glossary#asset) allocation: Consider tilting toward value when growth is expensive
4.  For expectations: High valuations = expect lower forward returns (6-7% vs historical 10%)

The goal isn't to perfectly value every [stock](/glossary#stock). It's to avoid catastrophically overpaying. If you can't understand why a price is justified, don't buy. When in doubt, [index funds](/glossary#index-fund) remove the burden of individual valuation.

## Conclusion

Price and value are different things. Price is visible on your screen. Value requires analysis and judgment. The gap between them is opportunity — or trap. Learn to tell the difference through reading financial statements, calculating ratios, and studying history. And remember: even if you never value a single [stock](/glossary#stock), broad [index funds](/glossary#index-fund) remain a wise choice because you're buying the whole market at fair average prices.`,

    ff_9: `

## Part 8: Tail Risk and Black Swans

Normal [risk](/glossary#risk) metrics miss the worst scenarios:
*   **Standard deviation** assumes normal distribution — real markets aren't normal
*   **Tail [risk](/glossary#risk)**: Extreme events in the "tails" of distribution
*   **[Black swans](/glossary#black-swan)**: Unpredictable events with massive impact

2008 was a 25-standard-deviation event — theoretically impossible but it happened. Fat tails are real.

### Protection Strategies
*   **Barbell strategy**: 90% ultra-safe + 10% high [risk](/glossary#risk) (Taleb's approach)
*   **Out-of-the-money puts**: Portfolio insurance (expensive)
*   **[Gold](/glossary#gold)**: Historically performs in crises
*   **Cash buffer**: Allows buying during crashes instead of forced selling

No protection is free. Accept that you'll underperform in normal times to survive rare disasters.

## Part 9: Risk Parity and Modern Approaches

Beyond simple [stock](/glossary#stock)/[bond](/glossary#bond) allocation:
*   **[Risk](/glossary#risk) parity**: Allocate based on [risk](/glossary#risk) contribution, not dollars
*   **Factor investing**: Diversify across [risk](/glossary#risk) factors (value, momentum, quality)
*   **Alternatives**: Add real [assets](/glossary#asset), [commodities](/glossary#commodities), private [equity](/glossary#equity)

These approaches are complex and typically appropriate for larger [portfolios](/glossary#portfolio). For most investors, simple diversification across [stocks](/glossary#stock), [bonds](/glossary#bond), and perhaps real estate is sufficient.

## Conclusion

[Risk](/glossary#risk) management is about survival. You can't compound wealth if you're wiped out. Diversify broadly, size positions appropriately, avoid [leverage](/glossary#leverage), and have a plan for [volatility](/glossary#volatility). Most importantly, understand your own psychology — your biggest [risk](/glossary#risk) is panicking at the wrong moment. A boring, diversified [portfolio](/glossary#portfolio) that you can hold through any storm beats a "optimal" [portfolio](/glossary#portfolio) you'll abandon during a crash.`,

    ff_10: `

## Part 8: Common Beginner Mistakes

Avoid these pitfalls:
*   **Waiting for the "right time"**: There is no perfect entry point. Start now.
*   **Checking [portfolio](/glossary#portfolio) daily**: Leads to emotional decisions. Check monthly or quarterly.
*   **Chasing past performance**: Last year's winner is often this year's loser.
*   **Market timing**: Missing the 10 best days destroys most of your returns.
*   **Penny [stocks](/glossary#stock)**: High probability of total loss. Stick to diversified funds.

The data is clear: simple, boring, consistent investing beats trying to be clever.

### When to Adjust Your Portfolio
Legitimate reasons to change:
*   Age changes (get more conservative as you near retirement)
*   Major life events (job loss, inheritance, new child)
*   Annual [rebalancing](/glossary#rebalancing) (back to target allocation)
*   Tax-loss harvesting (sell losers at year end)

NOT legitimate: Because the market is down, because your cousin gave you a hot tip, because you read something scary online.

## Part 9: The Long Game

This is a marathon, not a sprint:
*   $500/month at 10% for 30 years = $1.1 million
*   Same amount for 40 years = $2.9 million
*   The last 10 years add more than the first 30 combined

Your job is to stay in the game. Avoid catastrophic losses. Don't withdraw early. Maximize contributions. Trust the math.

## Conclusion

Building a [portfolio](/glossary#portfolio) is simple — open account, buy diversified [index funds](/glossary#index-fund), set up automatic contributions, wait decades. What's hard is the discipline: ignoring noise, not panicking in crashes, not celebrating in bubbles. Get the basics right (low cost, diversified, tax-efficient, consistent). Your [portfolio](/glossary#portfolio) doesn't need to be perfect. It needs to be good enough and held long enough. Start today.`,

    ff_11: `

## Part 8: The Illusion of Control

We seek patterns where none exist:
*   **Gambler's fallacy**: After 5 red, black must be "due" (wrong)
*   **Hot hand fallacy**: Past winners will keep winning (usually wrong)
*   **Pattern recognition**: Our brains see trends in random noise

Technical analysis feeds these biases. Charts show patterns because humans see patterns everywhere — including in random data.

### What Actually Predicts Returns
*   [Valuation](/glossary#valuation): High prices = lower future returns (decades-long horizon)
*   Costs: Lower fees = higher net returns (guaranteed)
*   Time: Longer horizon = higher probability of positive returns
*   Diversification: Broader = more consistent returns

What doesn't predict: Daily chart patterns, guru opinions, recent performance, news headlines.

## Part 9: Building Better Behavior

Practical systems to overcome psychology:
*   **Investment Policy Statement**: Write down your strategy. Review during calm times. Follow during chaos.
*   **Automatic investing**: Remove yourself from the equation entirely
*   **Never check during crashes**: Ignorance is bliss. Seriously.
*   **Study bear market history**: Prepare mentally before it happens
*   **Journaling**: Write down your reasoning. Review later to learn from mistakes.

You don't need to be smarter than the market. You just need to be more patient than other investors. That's a low bar — most people are impatient.

## Conclusion

Investing is simple. Not easy. The difference is entirely psychological. Once you understand that your emotions are your enemy, you can build systems to protect yourself. Automate. Write a plan. Stop looking at daily prices. Trust history. Get boring. The boring investor becomes wealthy. The exciting investor becomes a story at cocktail parties about how they lost it all.`,

    ff_12: `

## Part 8: The Power of Tax-Free Compounding

Comparison over 30 years ($10,000 initial, 10% annual return, 20% tax rate):
*   **Taxable account**: Final value ~$76,000 (taxes drag on compounding)
*   **Tax-deferred (Traditional)**: $174,000 minus taxes at withdrawal
*   **Tax-free ([Roth](/glossary#roth-ira))**: $174,000, all yours

Tax-advantaged accounts can nearly DOUBLE your wealth compared to taxable accounts over long periods. This is the biggest arbitrage available to regular people.

### Roth Conversion Strategy
*   Convert Traditional to [Roth](/glossary#roth-ira) in low-income years (career breaks, early retirement)
*   Pay income tax now at low rate
*   Future growth completely tax-free
*   Complex decision — consider hiring a CPA

## Part 9: Working with Professionals

When to get help:
*   **Complex situations**: Inheritance, stock options, real estate, business sale
*   **Estate planning**: Trusts, generational wealth transfer
*   **Tax planning**: Retirement distribution strategies, Roth conversions

Types of professionals:
*   **CPA**: Tax preparation and planning
*   **Fee-only financial planner**: Hourly advice, no product sales
*   **Estate attorney**: Wills, trusts, estate tax planning

Avoid: Commission-based advisors, insurance salespeople, anyone who won't disclose how they're paid.

## Conclusion

Taxes are the largest expense most investors never track. A 1% savings in taxes, compounded over decades, adds hundreds of thousands to your final wealth. Maximize tax-advantaged accounts. Hold winners longer than a year. Harvest losses. Locate [assets](/glossary#asset) efficiently. The tax code rewards long-term investors who follow the rules. Play the game wisely, and keep more of what you earn. Consult professionals for complex situations — good advice often pays for itself many times over.`
};

// Append content to each lesson
for (const [lessonId, extraContent] of Object.entries(expansions)) {
    const keyTakeawaysPos = content.indexOf('keyTakeaways:', content.indexOf(`"${lessonId}":`));
    if (keyTakeawaysPos === -1) {
        console.error(`Could not find keyTakeaways for ${lessonId}`);
        continue;
    }

    // Find the content closing backtick before keyTakeaways
    const searchStart = content.lastIndexOf('`,', keyTakeawaysPos);
    if (searchStart === -1) continue;

    // Insert extra content before the closing backtick
    const insertPos = content.lastIndexOf('`', searchStart);
    content = content.substring(0, insertPos) + extraContent + '\n        ' + content.substring(insertPos);
    console.log(`Expanded ${lessonId}`);
}

fs.writeFileSync(filePath, content);
console.log('All lessons expanded');
