const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

const fx10Content = `    "fx_10": {
        title: "Risk Management in Forex",
        content: \`
# Surviving the Market: Risk Management in Forex Trading

In Forex, 90% of retail traders lose money. The difference between the winning 10% and the losing 90% is not a secret strategy or a magic indicator—it's risk management. You can have the best trading strategy in the world, but without proper risk management, you will blow up your account. This lesson will teach you how to survive long enough to profit.

## Part 1: The Fundamental Truth About Trading

Before we discuss techniques, you must accept a harsh reality.

**You Will Have Losing Trades**:
*   No strategy has a 100% win rate. Not even 80%.
*   Professional traders often have win rates of 40-60%.
*   The key is not avoiding losses—it's controlling their size.

**The Math of Ruin**:
*   Lose 50% of your account → You need 100% gain just to break even.
*   Lose 25% → You need 33% gain to recover.
*   Lose 10% → You need 11% to recover.
*   Small losses are easy to recover from. Large losses are devastating.

**The Survival Imperative**: Rule #1 is survival. You cannot make money if you're out of the game.

## Part 2: The 1% Rule (Position Sizing)

The most important rule in trading: Never risk more than 1-2% of your account on a single trade.

**How It Works**:
*   Account Balance: $10,000.
*   Maximum Risk per Trade: 1% = $100.
*   If your stop loss is 50 pips away, you can only trade a position where 50 pips = $100.
*   Pip Value Needed: $100 / 50 = $2 per pip = 2 Mini Lots (0.2).

**Why It Works**:
*   You can lose 10 trades in a row and only be down 10%.
*   You can still recover.
*   You stay calm because the loss is manageable.

**The 2% Variation**:
*   Some traders use 2% max risk.
*   This allows for larger positions but requires higher confidence in your strategy.
*   Never exceed 2%.

## Part 3: The Stop Loss — Your Insurance Policy

A stop loss is an order that automatically closes your trade at a predetermined price to limit losses.

**Types of Stop Losses**:
*   **Fixed Pip Stop**: "I will exit if price moves 30 pips against me."
*   **Technical Stop**: "I will exit if price closes below this support level."
*   **Volatility Stop**: "I will exit if price moves 2x the Average True Range (ATR) against me."

**Placement Rules**:
*   **Too Tight**: Gets hit by normal market noise. You lose even when your direction is correct.
*   **Too Wide**: Allows massive losses before triggering. Defeats the purpose.
*   **Sweet Spot**: Place it at a level where, if hit, your trade idea is proven wrong.

**The Golden Rule**: Never move your stop loss further away to avoid a loss. This is the #1 cause of blown accounts.

## Part 4: Risk-to-Reward Ratio (R:R)

The R:R ratio compares how much you risk to how much you stand to gain.

**Calculating R:R**:
*   Risk: 50 pips (your stop loss).
*   Reward: 100 pips (your target profit).
*   R:R = 1:2 (for every $1 risked, you aim to make $2).

**Why It Matters**:
*   With 1:2 R:R, you can be wrong 66% of the time and still break even.
*   With 1:3 R:R, you can be wrong 75% of the time and still break even.

**Minimum Standards**:
*   Never take a trade with less than 1:1 R:R.
*   Aim for 1:2 or higher for most trades.
*   Scalpers may accept 1:1 due to high win rates.

## Part 5: Margin and Leverage Management

Leverage is a double-edged sword. It amplifies gains AND losses.

**Understanding Margin**:
*   Margin is the "deposit" required to open a leveraged position.
*   At 100:1 leverage, a $1,000 margin controls $100,000 in currency.
*   If the trade moves 1% against you, you lose $1,000 (100% of your margin).

**Margin Call and Stop Out**:
*   **Margin Call**: Your broker warns you that your account is running low on free margin.
*   **Stop Out**: The broker forcibly closes your positions to prevent you from going negative.

**Safe Leverage Practices**:
*   Use effective leverage of 5:1 or less.
*   Never use full broker-offered leverage (100:1, 500:1).
*   Keep your margin level above 200% at all times.

## Part 6: The Psychology of Loss

Risk management is 50% math and 50% psychology.

**Common Emotional Mistakes**:
*   **Revenge Trading**: After a loss, you immediately enter a new trade to "win it back." This leads to more losses.
*   **Moving Stops**: You move your stop loss further away, hoping price will reverse. It rarely does.
*   **Doubling Down**: You add to a losing position. If it continues to fall, you lose even more.
*   **Overtrading**: After a winning streak, you increase position size dramatically. The next loss wipes out all gains.

**The Solution**:
*   Accept losses as a cost of doing business.
*   Take a break after a big loss (or a big win).
*   Follow your plan robotically. Emotions are your enemy.

## Part 7: Drawdown Management

Drawdown is the peak-to-trough decline in your account balance.

**Understanding Drawdown**:
*   If your account peaks at $12,000 and falls to $10,000, your drawdown is $2,000 (16.7%).
*   Even winning traders experience drawdowns. It's inevitable.

**Maximum Drawdown Rules**:
*   Set a maximum drawdown limit (e.g., 20%).
*   If you hit this limit, stop trading. Re-evaluate your strategy.
*   Pros aim for maximum drawdowns of 10-15%.

**Daily/Weekly Loss Limits**:
*   Some traders limit losses to 3% per day or 6% per week.
*   If you hit the limit, stop trading until the next period.
*   This prevents "tilt" from causing catastrophic losses.

## Part 8: The Trading Journal

What gets measured gets managed.

**What to Record**:
*   Date and time of trade.
*   Currency pair and direction (Long/Short).
*   Entry price, stop loss, take profit.
*   Position size and risk (in dollars and percentage).
*   Outcome (Win/Loss/Break-even) and P&L.
*   Screenshot of the chart at entry.
*   Notes: Why did you take this trade? What did you learn?

**Analyzing the Journal**:
*   After 50+ trades, look for patterns.
*   Are you losing more on Fridays? (Stop trading Fridays.)
*   Are you better at shorts than longs? (Focus on shorts.)
*   Are your losses bigger than calculated? (Your stops are too wide.)

## Part 9: Practical Risk Management Checklist

Before every trade, ask yourself:

1.  **What is my stop loss?** (Specific price, not "I'll watch it.")
2.  **What is my position size?** (Calculated based on 1% rule.)
3.  **What is my R:R?** (Minimum 1:2.)
4.  **What is my margin usage?** (Below 50%.)
5.  **Am I emotional?** (If yes, don't trade.)
6.  **Is there a major news event coming?** (If yes, reduce size or wait.)
7.  **Does this trade fit my trading plan?** (If no, skip it.)

**The Final Rule**: Preserve capital above all else. You can always find another trade. You cannot find more capital after you've lost it all.
\`,
        keyTakeaways: [
            "Never risk more than 1-2% of your account on a single trade.",
            "Always use a stop loss and never move it further away.",
            "Aim for a minimum risk-to-reward ratio of 1:2.",
            "Use low effective leverage (5:1 or less) to survive volatility.",
            "Keep a trading journal to identify patterns and improve."
        ]
    },`;

const fx11Content = `    "fx_11": {
        title: "Correlation in Forex",
        content: \`
# Trading Relationships: Understanding Forex Correlations

Currency pairs do not move in isolation. They are interconnected through economic relationships, risk sentiment, and commodity links. Understanding correlations helps you avoid hidden risks (double exposure) and uncover trading opportunities (confirmation or diversification). This lesson explores how to use correlations to become a smarter trader.

## Part 1: What is Correlation?

Correlation measures how two assets move in relation to each other.

**The Correlation Coefficient**:
*   Ranges from -1.0 to +1.0.
*   **+1.0**: Perfect positive correlation. Both pairs move in the same direction 100% of the time.
*   **0.0**: No correlation. Movements are random relative to each other.
*   **-1.0**: Perfect negative correlation. Pairs move in opposite directions 100% of the time.

**Practical Interpretation**:
*   +0.80 and above: Strong positive correlation.
*   -0.80 and below: Strong negative correlation.
*   -0.50 to +0.50: Weak or no meaningful correlation.

## Part 2: Positive Correlations in Forex

Pairs that tend to move together.

**EUR/USD and GBP/USD**:
*   Both are "anti-dollar" pairs.
*   When the US Dollar weakens, both EUR and GBP tend to rise against it.
*   Correlation: Typically +0.70 to +0.90.

**AUD/USD and NZD/USD**:
*   Both are commodity currencies from the Pacific region.
*   Move with risk sentiment (risk-on = up, risk-off = down).
*   Correlation: Very high, often +0.85 to +0.95.

**EUR/USD and EUR/GBP (Indirect)**:
*   If EUR strengthens, both EUR/USD and EUR/GBP tend to rise.
*   However, GBP strength can offset gains in EUR/GBP.

## Part 3: Negative Correlations in Forex

Pairs that tend to move in opposite directions.

**EUR/USD and USD/CHF**:
*   Nearly a perfect mirror image (-0.90 or stronger).
*   If EUR/USD goes up, USD/CHF almost always goes down.
*   Why: Both are measuring the Dollar against stable European currencies.

**USD/CAD and Oil**:
*   Not a currency pair, but a key correlation.
*   When oil rises, CAD strengthens (Canada exports oil).
*   This means USD/CAD falls.
*   Correlation: Often -0.70 to -0.85.

**Stock Market (S&P 500) and USD/JPY**:
*   When stocks rise (risk-on), USD/JPY tends to rise.
*   When stocks fall (risk-off), USD/JPY tends to fall.
*   Correlation: Positive but varies (around +0.50 to +0.70).

## Part 4: Why Correlations Matter for Risk

Understanding correlations prevents you from accidentally doubling your risk.

**The Hidden Danger**:
*   You go long EUR/USD with $1,000 risk.
*   You also go long GBP/USD with $1,000 risk.
*   You think you have two independent trades with $1,000 risk each.
*   Reality: Because they are correlated (+0.85), you effectively have double exposure to a weaker Dollar. Your true risk is closer to $2,000.

**The Opposite Trap**:
*   You go long EUR/USD and short USD/CHF.
*   These are negatively correlated. Both bets are essentially saying "Dollar will weaken."
*   Again, you have doubled your risk.

**The Solution**:
*   Check correlations before opening multiple positions.
*   If pairs are highly correlated, reduce position size on each.
*   Or choose only one and allocate full risk to it.

## Part 5: Using Correlations for Confirmation

Correlations can validate your trade ideas.

**Confirmation Signal**:
*   You see a bullish setup on EUR/USD.
*   You check GBP/USD—it also shows bullish structure.
*   This confirms that the move is driven by Dollar weakness, not just EUR strength.
*   Higher confidence = potentially larger position.

**Divergence Warning**:
*   EUR/USD is breaking out higher.
*   But GBP/USD is failing to follow. It's flat or falling.
*   This divergence suggests the EUR/USD breakout may be a fakeout.
*   Lower confidence = smaller position or skip the trade.

## Part 6: Correlation with Commodities

Some currencies are intimately linked to commodity prices.

**CAD and Oil**:
*   Canada is a major oil exporter.
*   Oil up → CAD up → USD/CAD down.
*   Always check oil charts when trading USD/CAD or CAD crosses.

**AUD and Gold**:
*   Australia is a major gold producer.
*   Gold up → AUD up → AUD/USD up.
*   Check gold before trading AUD pairs.

**NZD and Dairy**:
*   New Zealand exports massive amounts of dairy (milk powder).
*   Dairy prices up → NZD up.
*   Less commonly watched but still relevant.

**Oil and JPY (via Imports)**:
*   Japan imports almost all its energy.
*   Oil up → Japan pays more for imports → JPY weakens.
*   This is a weaker but notable correlation.

## Part 7: How Correlations Change Over Time

Correlations are not static. They evolve with market conditions.

**During Normal Markets**:
*   Correlations are relatively stable.
*   EUR/USD and GBP/USD maintain their +0.80 relationship.

**During Crises (Risk-Off)**:
*   Correlations spike to extremes.
*   Everything becomes "Dollar vs. Everything Else."
*   Safe havens (USD, JPY, CHF) move together against risky assets.

**Central Bank Divergence**:
*   If the Fed hikes while the ECB holds, EUR/USD and GBP/USD can decouple.
*   GBP/USD might follow USD strength while EUR/USD lags.

**Practical Implication**: Recalculate correlations monthly or quarterly. What worked last year may not work now.

## Part 8: Tools for Tracking Correlations

**Correlation Calculators**:
*   Many Forex websites offer free correlation matrices (Investing.com, Myfxbook).
*   Input a timeframe (1 week, 1 month, 1 year) to see current correlations.

**Trading Platform Tools**:
*   MT4/MT5 has correlation indicators you can add to charts.
*   Some brokers provide built-in correlation displays.

**Spreadsheet Approach**:
*   Download historical data for pairs.
*   Use Excel's CORREL function to calculate correlation.
*   This gives you full control over timeframes and data sources.

## Part 9: Practical Strategies Using Correlations

**Strategy 1: Diversification**:
*   If you want to be long "risk-on," split your position between AUD/JPY and NZD/JPY.
*   Lower correlation within the basket reduces volatility.

**Strategy 2: Pair Trading**:
*   If EUR/USD and GBP/USD diverge temporarily (correlation breaks down):
*   Go long the underperformer and short the outperformer.
*   Profit when they converge back to normal correlation.
*   This is a mean-reversion strategy.

**Strategy 3: Hedging**:
*   You have a long-term long position in AUD/USD.
*   A short-term risk-off event is expected (e.g., Fed speech).
*   Short USD/JPY as a hedge. If risk-off hits, your short profits offset AUD/USD losses.

**Final Thought**: Correlations are a lens, not a crystal ball. They describe what usually happens, not what will happen. Always combine correlation analysis with technical and fundamental analysis.
\`,
        keyTakeaways: [
            "Correlation ranges from -1.0 (opposite) to +1.0 (identical movement).",
            "EUR/USD and USD/CHF are nearly perfect negative correlations (-0.90).",
            "Trading correlated pairs without adjustment doubles your risk.",
            "Commodity currencies (CAD, AUD) correlate with oil and gold respectively.",
            "Correlations change over time; recalculate regularly."
        ]
    },`;

const fx12Content = `    "fx_12": {
        title: "Trading News Events",
        content: \`
# Trading the Headlines: Forex News Event Strategies

Economic news releases are the most volatile moments in the Forex market. A single number—Non-Farm Payrolls, CPI, or an interest rate decision—can move a currency pair 100+ pips in seconds. Some traders avoid news entirely. Others specialize in it. This lesson covers how to trade (or survive) news events.

## Part 1: The Economic Calendar

Your essential tool for news trading is the economic calendar.

**High-Impact Events**:
*   **Interest Rate Decisions**: Fed, ECB, BOE, BOJ. The most important events.
*   **Non-Farm Payrolls (NFP)**: US jobs report. First Friday of every month.
*   **CPI (Consumer Price Index)**: Inflation data. Monthly.
*   **GDP**: Quarterly measure of economic growth.
*   **Retail Sales**: Monthly consumer spending data.

**Medium-Impact Events**:
*   PMI (Purchasing Managers' Index).
*   Trade Balance.
*   Consumer Confidence.
*   Housing Data.

**Low-Impact Events**:
*   Often ignored by traders.
*   Can occasionally surprise if the number is extreme.

**Best Calendar Sources**: ForexFactory, Investing.com, DailyFX.

## Part 2: How News Moves the Market

Understanding the mechanics of news-driven moves.

**The Expectation Game**:
*   Markets price in expectations before the news.
*   If NFP is expected to be +150k jobs, the market prepares for that.
*   **Surprise = Movement**: Only deviations from expectations cause big moves.
*   +200k (better than expected) → USD rallies.
*   +100k (worse than expected) → USD falls.

**The Immediate Reaction**:
*   Within seconds of release, prices spike.
*   Spreads widen dramatically (EUR/USD may go from 1 pip to 10 pips).
*   Slippage occurs (your stop might be skipped).
*   This is pure chaos—no one knows the fair price yet.

**The Secondary Move**:
*   After 5-15 minutes, the market digests the data.
*   Revisions, details, and context are analyzed.
*   The initial spike may reverse or continue.
*   This is often a better time to trade.

## Part 3: Strategies for News Trading

**Strategy 1: Stand Aside**:
*   If you are not a news specialist, simply close all positions before high-impact news.
*   Re-enter after the dust settles.
*   This is the safest approach for most traders.

**Strategy 2: Straddle (Pre-News)**:
*   Place a Buy Stop above and a Sell Stop below the current price.
*   When news hits, one order triggers.
*   Cancel the other order or use it as a stop.
*   Risk: Whipsaws can trigger both orders, causing double loss.

**Strategy 3: Fade the Spike**:
*   Wait for the initial 1-2 minute spike.
*   If it looks overdone (huge candle), trade against it.
*   Use a tight stop because reversals can be violent.
*   Risk: The spike may continue. You're fighting momentum.

**Strategy 4: Breakout Confirmation**:
*   Wait for initial volatility to peak.
*   Wait for a clear break of pre-news support/resistance.
*   Enter in the direction of the break with confirmation (e.g., a retest).
*   This is the most conservative news trading approach.

## Part 4: Non-Farm Payrolls (NFP) — The King of News

NFP deserves its own section. It is the most traded news event in Forex.

**When**: First Friday of every month, 8:30 AM EST.

**What It Measures**: The number of jobs added or lost in the US economy (excluding farms).

**Why It Matters**:
*   Jobs = Consumer spending = Economic growth.
*   A strong NFP suggests the Fed might raise rates (USD bullish).
*   A weak NFP suggests the Fed might cut rates (USD bearish).

**Typical Reaction**:
*   EUR/USD can move 50-150 pips within 30 minutes.
*   USD/JPY can move 50-100 pips.
*   GBP/USD can move 80-150 pips.

**Trading Tips**:
*   Avoid opening positions in the 5 minutes before NFP.
*   If trading, use reduced position size (1/4 to 1/2 of normal).
*   Wait for the initial spike to settle before entering.

## Part 5: Central Bank Announcements

These are the nuclear bombs of Forex.

**The Decision**:
*   Rate Hike: Currency strengthens (higher yield attracts capital).
*   Rate Cut: Currency weakens.
*   Hold (No Change): Market focuses on the statement.

**The Statement**:
*   The accompanying statement is often more important than the decision.
*   Hawkish language ("We are prepared to act further") = Currency up.
*   Dovish language ("We see no need for immediate action") = Currency down.

**The Press Conference**:
*   Fed Chair, ECB President, etc., answer questions.
*   New information can cause additional moves hours after the decision.

**Trading Tips**:
*   Never trade during the initial decision (spreads are insane).
*   Wait for the press conference to end before taking positions.
*   Watch for "dot plot" changes (Fed) or forward guidance shifts.

## Part 6: Risk Management During News

**Widen Your Stops**:
*   Normal stops (e.g., 20 pips) will be hit by noise.
*   Use wider stops (40-60 pips) or no stop at all with tiny position size.

**Reduce Position Size**:
*   Cut your position to 1/4 or 1/2 of normal.
*   The increased volatility compensates for smaller size.

**Expect Slippage**:
*   Your broker may fill you 20 pips worse than your stop price.
*   Factor this into your risk calculation.
*   Use brokers with good execution during news (check reviews).

**Avoid Exotic Pairs**:
*   Spreads on exotics can explode to 50+ pips during news.
*   Stick to majors (EUR/USD, USD/JPY) for fastest execution.

## Part 7: The "Fade the Reaction" Pattern

A common phenomenon after news events.

**Initial Spike**:
*   Great news → Massive rally.
*   Traders pile in, creating an overshoot.

**The Reversal**:
*   Within 30-60 minutes, price retraces 50-100% of the spike.
*   Why? Traders take profit. Algorithms rebalance. Reality sets in.

**Trading the Fade**:
*   Wait for the spike to exhaust (look for doji or pin bar candles).
*   Enter against the spike with a stop beyond the extreme.
*   Target 50-100% retracement.

**Example**:
*   NFP beats expectations. EUR/USD drops 80 pips to 1.0920.
*   A hammer candle forms at 1.0920.
*   You buy with stop at 1.0900 (20 pips).
*   Target 1.0960 (40 pips). R:R = 1:2.

## Part 8: Building a News Trading Routine

**Before the Week**:
*   Review the economic calendar for the week.
*   Mark high-impact events on your trading chart.
*   Decide which events you will trade (if any) and which you will avoid.

**Day of the Event**:
*   Know the expected number and previous number.
*   Be in front of your screen 15 minutes before release.
*   Decide your strategy: straddle, fade, or stand aside.

**During the Event**:
*   Watch the initial reaction.
*   Do not panic. Volatility is temporary.
*   Execute your pre-planned strategy.

**After the Event**:
*   Review what happened. Did the market react as expected?
*   Record the trade (or non-trade) in your journal.
*   Learn for next time.

## Part 9: Summary and Best Practices

*   **Know the Calendar**: High-impact news can wipe out your trade in seconds.
*   **Expect the Unexpected**: Surprises move markets. Trade the surprise, not the news.
*   **Stand Aside If Unsure**: It's okay to skip news events. There are 100+ trades per month in Forex.
*   **Reduce Risk**: Smaller size, wider stops during news.
*   **Trade the Reaction, Not the News**: Let the initial chaos subside before entering.
*   **Never Chase**: If you missed the move, wait for the next setup. Chasing leads to losses.
\`,
        keyTakeaways: [
            "Economic news causes the most volatile moves in Forex.",
            "Only surprises (deviation from expectations) move markets.",
            "NFP and central bank decisions are the highest-impact events.",
            "Reduce position size and widen stops during news.",
            "Consider 'fading' the initial spike after the reaction settles."
        ]
    },`;

const fx13Content = `    "fx_13": {
        title: "Forex vs. Stocks",
        content: \`
# The Great Debate: Forex vs. Stock Trading

Many traders wonder whether they should trade Forex or stocks. Both markets offer opportunities, but they have fundamentally different characteristics. This lesson compares the two to help you choose the right market for your style, capital, and goals.

## Part 1: Market Size and Liquidity

**Forex**:
*   Daily volume: $6+ trillion.
*   By far the largest financial market in the world.
*   You can enter and exit positions of any size instantly.
*   Spreads are tight (1-3 pips on majors).
*   No worry about getting "stuck" in a position.

**Stocks**:
*   Global stock market capitalization: ~$100 trillion.
*   Individual stocks can have limited liquidity.
*   Large orders can move the market (especially small caps).
*   Spreads vary widely depending on the stock.

**Winner**: Forex for pure liquidity. Stocks for long-term wealth building.

## Part 2: Trading Hours

**Forex**:
*   Open 24 hours a day, 5 days a week (Sunday 5 PM to Friday 5 PM EST).
*   Trade whenever you want: early morning, late night, weekends are off.
*   Best hours: London and New York sessions overlap.

**Stocks**:
*   NYSE/NASDAQ: 9:30 AM - 4:00 PM EST (6.5 hours).
*   Pre-market and after-hours trading available but with low liquidity.
*   You must trade during specific hours.

**Winner**: Forex for flexibility. Stocks if you prefer structured hours.

## Part 3: Leverage and Capital Requirements

**Forex**:
*   Brokers offer leverage up to 500:1 (offshore) or 50:1 (US regulated).
*   You can open an account with $100 and control significant positions.
*   Leverage amplifies both gains and losses.
*   Pattern Day Trader (PDT) rule does NOT apply.

**Stocks**:
*   Typical margin is 2:1 for overnight, 4:1 for day trading.
*   PDT rule in the US requires $25,000 minimum for frequent day trading.
*   Lower leverage means slower account growth but less risk of blowup.

**Winner**: Forex for small accounts. Stocks for those with more capital seeking lower risk.

## Part 4: Volatility and Movement

**Forex**:
*   Major pairs move 0.5-1% on average days.
*   80-150 pips range on most days for EUR/USD.
*   Extreme events (NFP, central banks) can cause 200+ pip moves.
*   Lower base volatility but amplified by leverage.

**Stocks**:
*   Individual stocks can move 5-10% or more in a single day.
*   Earnings reports can cause 20-50% gaps overnight.
*   Much higher base volatility but lower leverage dampens it.

**Winner**: Tie. Forex offers consistent small moves amplified by leverage. Stocks offer explosive moves with less leverage.

## Part 5: What Drives the Market

**Forex**:
*   Macroeconomics: Interest rates, inflation, GDP, employment.
*   Central bank policy is paramount.
*   Political events (elections, trade wars) cause volatility.
*   Currencies are relative—you're betting one economy vs. another.

**Stocks**:
*   Company fundamentals: Earnings, revenue, guidance.
*   Sector trends: Tech, healthcare, energy.
*   Macroeconomic conditions matter but are secondary to company performance.
*   You're betting on a single entity's success.

**Winner**: Depends on your interest. Forex for macro traders. Stocks for those who love analyzing companies.

## Part 6: Costs of Trading

**Forex**:
*   No commissions from most brokers (spread is the cost).
*   Tight spreads: 1-3 pips on majors.
*   Swap fees (rollover) for holding overnight.
*   Overall very low cost.

**Stocks**:
*   Commission-free trading now common (Robinhood, Schwab, etc.).
*   But: You pay the spread and potential SEC/FINRA fees.
*   Options have contract fees.
*   Margin interest if borrowing to trade.

**Winner**: Forex for active trading. Stocks are competitive for buy-and-hold investors.

## Part 7: Direction Flexibility (Shorting)

**Forex**:
*   Shorting is built into the market.
*   Buying EUR/USD = Long Euro, Short Dollar.
*   Selling EUR/USD = Short Euro, Long Dollar.
*   No restrictions, no borrowing fees.

**Stocks**:
*   Shorting requires borrowing shares.
*   Hard-to-borrow stocks have high fees.
*   Short squeezes can cause massive losses (GameStop 2021).
*   Uptick rule and other restrictions in some markets.

**Winner**: Forex for short selling flexibility.

## Part 8: Learning Curve and Analysis

**Forex**:
*   Fewer instruments to master (7-8 major pairs cover most volume).
*   Technical analysis dominates.
*   Fundamentals are macro-level (easier to track).
*   Fast-paced and unforgiving.

**Stocks**:
*   Thousands of stocks to choose from.
*   Fundamental analysis (balance sheets, P/E ratios) is essential.
*   More information available (earnings calls, SEC filings).
*   Can be slower (swing trading, investing) or fast (day trading).

**Winner**: Forex for simplicity. Stocks for those who enjoy deep research.

## Part 9: Which is Right for You?

**Choose Forex If**:
*   You have limited capital (under $5,000).
*   You want to trade at any hour.
*   You prefer technical analysis over fundamentals.
*   You want to profit in both directions easily.
*   You're comfortable with high leverage and its risks.

**Choose Stocks If**:
*   You have larger capital ($25,000+ for day trading in the US).
*   You enjoy researching companies and industries.
*   You want to build long-term wealth through dividends and appreciation.
*   You prefer lower leverage and more stability.
*   You're interested in options trading (more complex strategies).

**Or Trade Both**:
*   Many professional traders operate in both markets.
*   Forex for short-term, high-frequency trading.
*   Stocks for long-term investment and portfolio growth.
*   Diversification across markets reduces risk.

**Final Thought**: There is no "better" market. The best market is the one that fits your personality, schedule, capital, and risk tolerance. Try both on demo accounts before committing real money.
\`,
        keyTakeaways: [
            "Forex is larger and more liquid; stocks offer ownership in companies.",
            "Forex offers 24-hour trading; stocks have fixed market hours.",
            "Forex has higher leverage (50:1-500:1); stocks typically 2:1-4:1.",
            "Forex is driven by macroeconomics; stocks by company fundamentals.",
            "The right market depends on your capital, schedule, and trading style."
        ]
    },`;

let content = fs.readFileSync(filePath, 'utf8');

// Find the position after fx_9 (last occurrence) to add fx_10, fx_11, fx_12, fx_13
// We need to add these after the LAST fx_9 entry and before Module 7 (ta_1)

// Find Module 7 marker
const module7Marker = '// Module 7: Technical Analysis';
const module7Index = content.indexOf(module7Marker);

if (module7Index === -1) {
    console.log('Module 7 marker not found!');
    process.exit(1);
}

// Insert the new lessons before Module 7
const before = content.substring(0, module7Index);
const after = content.substring(module7Index);

const newLessons = fx10Content + '\n' + fx11Content + '\n' + fx12Content + '\n' + fx13Content + '\n    ';

content = before + newLessons + after;

fs.writeFileSync(filePath, content, 'utf8');
console.log('fx_10, fx_11, fx_12, fx_13 added successfully!');

// Verify character counts
[['fx_10', fx10Content], ['fx_11', fx11Content], ['fx_12', fx12Content], ['fx_13', fx13Content]].forEach(([name, lesson]) => {
    const contentStart = lesson.indexOf('content: `');
    const contentEnd = lesson.lastIndexOf('`');
    const textContent = lesson.substring(contentStart + 10, contentEnd);
    const parts = (lesson.match(/## Part \d+/g) || []).length;
    console.log(`${name}: ${textContent.length} characters, ${parts} parts`);
});
