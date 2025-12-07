const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to append content to a lesson
function appendToLesson(lessonId, newText) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) return false;

    const contentStart = content.indexOf('content: `', lessonStart);
    if (contentStart === -1) return false;

    const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);

    let contentEnd;
    if (keyTakeawaysStart !== -1) {
        contentEnd = content.lastIndexOf('`,', keyTakeawaysStart);
    } else {
        contentEnd = content.indexOf('`,', contentStart + 10);
    }

    if (contentEnd === -1 || (keyTakeawaysStart !== -1 && contentEnd > keyTakeawaysStart)) {
        console.error(`Could not find end of content for ${lessonId}`);
        return false;
    }

    const before = content.substring(0, contentEnd);
    const after = content.substring(contentEnd);

    content = before + '\n' + newText + after;
    return true;
}

const ib_1_append = `
## Part 11: The Rule of 72 Deep Dive
This is the most useful mental math trick in finance.
*   **Formula**: 72 / Interest Rate = Years to Double.
*   **Examples**:
    *   **Savings Account (0.1%)**: 72 / 0.1 = **720 Years**. (You will be dead).
    *   **Bonds (5%)**: 72 / 5 = **14.4 Years**.
    *   **Stocks (10%)**: 72 / 10 = **7.2 Years**.
    *   **Credit Card Debt (-20%)**: 72 / 20 = **3.6 Years**. (Your debt doubles every 3.6 years against you).
*   **Lesson**: You need a high rate of return to build wealth in a human lifetime.

## Part 12: Case Study: The Coffee Spender vs. The Coffee Investor
*   **The Spender**: Buys a $5 latte every day.
    *   Cost: $150/month.
    *   Over 40 years: Spent **$72,000**.
*   **The Investor**: Invests $150/month in the S&P 500 (10% return).
    *   Over 40 years: Grows to **$948,000**.
*   **The Reality**: That coffee didn't cost $5. It cost almost a million dollars in lost opportunity.
*   **Balance**: You can still drink coffee. Just make it at home for $0.50 and invest the difference.

## Part 13: The Psychology of Saving
Why is it so hard to save?
*   **Present Bias**: We value immediate pleasure (pizza now) over future reward (wealth later).
*   **Social Proof**: "Everyone else has a new car, so I need one too."
*   **The Fix**: "Pay Yourself First." Automate the investment to happen on payday. You can't spend what you don't see.

## Part 14: Recommended Reading
*   *The Little Book of Common Sense Investing* by John Bogle
*   *The Psychology of Money* by Morgan Housel
*   *A Random Walk Down Wall Street* by Burton Malkiel
`;

const ib_2_append = `
## Part 11: Sequence of Returns Risk
This is the risk that the market crashes right when you retire.
*   **Scenario**: You retire with $1M. You plan to withdraw 4% ($40k/year).
*   **Bad Luck**: The market drops 50% in Year 1. Your portfolio is now $500k.
*   **The Spiral**: You still withdraw $40k. That is now 8% of your portfolio. You deplete your money too fast and never recover.
*   **The Fix**: Have a "Cash Tent" (2-3 years of expenses in cash) when you retire to ride out the storm.

## Part 12: The VIX Index (The Fear Gauge)
*   **What it is**: A measure of expected volatility in the S&P 500.
*   **VIX < 15**: Calm. Complacency. (Good time to be cautious).
*   **VIX > 30**: Panic. Fear. (Great time to buy).
*   **VIX > 80**: 2008 Crisis / COVID Crash. (Generational buying opportunity).
*   **Usage**: Use VIX as a contrarian indicator. When VIX spikes, stocks are usually on sale.

## Part 13: Risk Parity Strategy
A strategy used by hedge funds (Bridgewater).
*   **Concept**: Instead of allocating by capital (60% stocks / 40% bonds), allocate by *risk*.
*   **Problem**: Stocks are much riskier than bonds. In a 60/40 portfolio, 90% of the risk comes from stocks.
*   **Solution**: Leverage up the bonds so they have the same risk impact as stocks.
*   **Goal**: A truly balanced portfolio that performs well in all environments.

## Part 14: The Tale of Bob (The World's Worst Market Timer)
*   **Bob**: Only invests at the absolute peak of the market (1972, 1987, 1999, 2007).
*   **Strategy**: He never sold. He just held.
*   **Result**: He still became a millionaire.
*   **Lesson**: Even if you have terrible timing, **Time in the Market** saves you. The only way to lose is to sell.
`;

const ib_3_append = `
## Part 11: Modern Portfolio Theory (MPT)
Harry Markowitz won a Nobel Prize for this.
*   **The Insight**: An asset's risk should not be viewed in isolation, but by how it contributes to the overall portfolio's risk.
*   **The Math**: Adding a risky asset (like Gold) to a portfolio of Stocks can actually *lower* the overall risk if they are uncorrelated.
*   **The Free Lunch**: You can optimize a portfolio to get the maximum return for a given level of risk.

## Part 12: The Efficient Frontier
*   **Visual**: A curve on a graph (Risk on X-axis, Return on Y-axis).
*   **Efficient**: Portfolios on the curve offer the best possible return for that risk.
*   **Inefficient**: Portfolios below the curve are taking unnecessary risk for low returns.
*   **Goal**: You want your portfolio to be on the Efficient Frontier.

## Part 13: International Diversification (Emerging Markets)
Why invest in China, India, Brazil?
*   **Growth**: These economies are growing faster than the US.
*   **Demographics**: They have young populations (labor force).
*   **Valuation**: They are often cheaper (lower P/E ratios) than US stocks.
*   **Risk**: Political instability, currency risk.
*   **Role**: High risk, high reward potential. Keep allocation small (5-10%).

## Part 14: The "Lost Decade" of US Stocks
Recency bias makes us think US stocks always win.
*   **2000-2009**: The S&P 500 return was **-9%** (negative!).
*   **Emerging Markets**: Returned **+162%** in the same period.
*   **Lesson**: If you only owned US stocks, you lost money for 10 years. If you were diversified, you made money. Winners rotate.
`;

const ib_4_append = `
## Part 11: Peer-to-Peer (P2P) Lending
*   **What it is**: You play the bank. You lend money to individuals (for credit card consolidation, etc.) via platforms like LendingClub or Prosper.
*   **Return**: 5-8%.
*   **Risk**: The borrower defaults. (Unsecured debt).
*   **Status**: Has fallen out of favor due to rising defaults and institutional takeover.

## Part 12: Farmland Investing
*   **What it is**: Owning productive agricultural land.
*   **Role**: Inflation hedge. People gotta eat.
*   **Performance**: Historically has beaten the S&P 500 with lower volatility.
*   **Access**: Platforms like AcreTrader allow you to buy shares of a farm.
*   **Bill Gates**: Is the largest private owner of farmland in the US. (Follow the smart money).

## Part 13: Intellectual Property (Royalties)
*   **What it is**: Owning the rights to music, books, patents.
*   **Income**: Every time the song is played on Spotify, you get paid.
*   **Platform**: Royalty Exchange.
*   **Asset**: Uncorrelated to the stock market. (People listen to music even in a recession).

## Part 14: Human Capital (Investing in Yourself)
The most overlooked asset class.
*   **What it is**: Your ability to earn money.
*   **ROI**: A $50 book or a $500 course can increase your salary by $10k/year. That is a 2,000% return.
*   **Risk**: Zero. No one can steal your skills.
*   **Action**: Learn a high-income skill (Coding, Sales, Copywriting). It is the best hedge against inflation.
`;

// Execute updates
if (appendToLesson('ib_1', ib_1_append)) console.log('Updated ib_1 append');
if (appendToLesson('ib_2', ib_2_append)) console.log('Updated ib_2 append');
if (appendToLesson('ib_3', ib_3_append)) console.log('Updated ib_3 append');
if (appendToLesson('ib_4', ib_4_append)) console.log('Updated ib_4 append');

fs.writeFileSync(filePath, content);
console.log('Append updates for ib_1 to ib_4 complete.');
