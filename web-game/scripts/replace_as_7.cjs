const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_7": {
        title: "Backtesting Your Strategy",
        content: \`
# Backtesting: Proving Your Strategy Works Before You Risk Real Money

**[Backtesting](/glossary#backtesting)** is the process of testing a trading strategy on historical data to evaluate how it would have performed in the past. It's the scientific method of trading—you form a hypothesis (your strategy), test it against data, and analyze the results before deploying real capital.

Without [backtesting](/glossary#backtesting), you're trading blind. With rigorous [backtesting](/glossary#backtesting), you enter the market with confidence that your approach has a statistical edge. This lesson covers how to [backtest](/glossary#backtesting) correctly, avoid common pitfalls, and interpret results.

## Part 1: Why Backtesting Matters

[Backtesting](/glossary#backtesting) is essential for any serious trader or investor.

*   **Validation**: Proves (or disproves) that your strategy has worked historically.
*   **Risk Assessment**: Reveals the max drawdown and worst-case scenarios you might face.
*   **Confidence**: Allows you to trade with conviction, knowing the strategy has been tested.
*   **Optimization**: Helps you fine-tune parameters (e.g., [moving average](/glossary#moving-average) periods) to improve performance.
*   **Comparison**: Enables apples-to-apples comparison of different strategies.
*   **Expectation Setting**: Shows realistic expectations for returns, win rates, and drawdowns.
*   **Avoiding Costly Mistakes**: A strategy that fails in [backtesting](/glossary#backtesting) saves you from real losses.

## Part 2: The Backtesting Process

A structured approach to [backtesting](/glossary#backtesting) ensures reliable results.

### Step 1: Define Your Strategy Precisely
*   Write down the exact rules for entry, exit, and [position sizing](/glossary#position-sizing).
*   No ambiguity—if you can't code it or describe it mechanically, it's not testable.
*   **Example**: "Buy when [RSI](/glossary#rsi) crosses below 30; sell when [RSI](/glossary#rsi) crosses above 70. [Stop-loss](/glossary#stop-loss) at 5%."

### Step 2: Gather Historical Data
*   Obtain quality price data (OHLC: Open, High, Low, Close) and [volume](/glossary#volume).
*   Consider dividends and splits for [stock](/glossary#stock) data.
*   The longer the dataset, the more robust the test (minimum 5-10 years ideally).
*   Sources: Yahoo Finance, Alpha Vantage, Quandl, Polygon.io.

### Step 3: Implement the Strategy
*   Code the strategy in a [backtesting](/glossary#backtesting) platform (Python, TradingView, QuantConnect).
*   Ensure the logic is correct—bugs produce meaningless results.

### Step 4: Run the Backtest
*   Execute the strategy on the historical data.
*   Log every trade: entry date, exit date, prices, profit/loss.

### Step 5: Analyze Results
*   Calculate key performance metrics (see Part 3).
*   Review individual trades for patterns.
*   Compare to a benchmark (e.g., buy-and-hold S&P 500).

### Step 6: Validate and Iterate
*   Test on out-of-sample data (data not used in development).
*   Adjust strategy if needed, but avoid overfitting.

## Part 3: Key Performance Metrics

These metrics tell you whether your strategy is worth trading.

*   **Total Return**: The overall profit or loss over the test period.
*   **CAGR (Compound Annual Growth Rate)**: Annualized return—makes comparing different test periods easier.
*   **Sharpe Ratio**: (Return - Risk-Free Rate) / [Volatility](/glossary#volatility). Measures [risk](/glossary#risk)-adjusted return. >1 is acceptable, >2 is excellent.
*   **Sortino Ratio**: Like Sharpe, but only penalizes downside [volatility](/glossary#volatility). Better for strategies with asymmetric returns.
*   **Max Drawdown**: The largest peak-to-trough decline. Critical for understanding worst-case scenarios.
*   **Win Rate**: Percentage of trades that are profitable. High win rate doesn't always mean profitable (depends on profit size).
*   **Profit Factor**: Gross Profit / Gross Loss. Above 1.5 is solid; above 2 is excellent.
*   **Average Trade**: Average profit/loss per trade. Must exceed transaction costs.
*   **Trade Frequency**: Number of trades per year. More trades = more opportunities but also more costs.
*   **Expectancy**: (Win Rate × Avg Win) - (Loss Rate × Avg Loss). Must be positive.

## Part 4: Common Backtesting Mistakes

These errors render backtests meaningless—or worse, misleading.

### 1. Survivorship Bias
*   Using only [stocks](/glossary#stock) that exist today. Ignores delisted companies (bankruptcies, mergers).
*   **Solution**: Use survivorship-bias-free databases.

### 2. Look-Ahead Bias
*   Using information you wouldn't have had at the time.
*   **Example**: Using next quarter's [earnings](/glossary#earnings) to predict this quarter's price.
*   **Solution**: Strict discipline about data timing.

### 3. Overfitting (Curve Fitting)
*   Optimizing parameters to fit historical data perfectly—but the strategy fails live.
*   **Signs**: Strategy only works on one asset or one time period.
*   **Solution**: Keep strategies simple. Test on out-of-sample data.

### 4. Ignoring Transaction Costs
*   Not accounting for commissions, [slippage](/glossary#slippage), and [spread](/glossary#spread).
*   A strategy that looks profitable may lose money after costs.
*   **Solution**: Include realistic costs in your backtest.

### 5. Ignoring [Slippage](/glossary#slippage)
*   Assuming you always get the exact price you want.
*   In reality, fast-moving markets may fill you at worse prices.
*   **Solution**: Add slippage assumptions (e.g., 0.1% per trade).

### 6. Insufficient Data
*   Testing on only 1-2 years of data doesn't capture different market conditions.
*   **Solution**: Test on multiple market cycles (bull, bear, and sideways).

### 7. Data Mining Bias
*   Testing hundreds of strategies until one "works" by chance.
*   **Solution**: Have a thesis first. Limit the number of strategies tested.

## Part 5: Out-of-Sample and Walk-Forward Testing

These techniques improve the reliability of your [backtesting](/glossary#backtesting) results.

### In-Sample vs. Out-of-Sample
*   **In-Sample**: The data you use to develop and optimize the strategy.
*   **Out-of-Sample**: Data held back, used only for validation after development.
*   **Example**: Develop on 2010-2018 data; validate on 2019-2023 data.
*   If the strategy works on out-of-sample data, it's more likely to work live.

### Walk-Forward Analysis
*   A rolling approach: develop on period 1, test on period 2, then roll forward.
*   Simulates how you'd use the strategy in real time.
*   More realistic than a single in-sample/out-of-sample split.

### Monte Carlo Simulation
*   Randomly reorder trades to see how results vary.
*   Helps understand the range of possible outcomes.
*   Useful for stress-testing drawdowns.

## Part 6: Tools for Backtesting

Several platforms make [backtesting](/glossary#backtesting) accessible.

### Free Tools
*   **TradingView (Pine Script)**: Great for chart-based strategies. Limited [backtesting](/glossary#backtesting) depth.
*   **Backtrader (Python)**: Powerful open-source library. Requires coding.
*   **QuantConnect**: Cloud-based. Supports [stocks](/glossary#stock), [forex](/glossary#forex), [crypto](/glossary#cryptocurrency). Free tier available.
*   **Zipline (Python)**: Used by Quantopian (now defunct). Still usable locally.
*   **MT4/MT5**: MetaTrader for [forex](/glossary#forex). Built-in strategy tester.

### Paid Tools
*   **Amibroker**: Popular among retail traders. Fast and flexible.
*   **TradeStation**: Full-featured platform with [backtesting](/glossary#backtesting).
*   **Bloomberg Terminal**: Institutional-grade, very expensive.
*   **Portfolio Visualizer**: Simple web-based [backtesting](/glossary#backtesting) for [asset allocation](/glossary#asset-allocation) strategies.

### Choosing a Tool
*   Start free. Learn the basics on TradingView or Backtrader.
*   As you advance, consider QuantConnect for more sophisticated testing.
*   Match the tool to your asset class ([forex](/glossary#forex) vs. [stocks](/glossary#stock) vs. [crypto](/glossary#cryptocurrency)).

## Part 7: From Backtesting to Live Trading

A profitable backtest is just the beginning.

*   **Paper Trade First**: Run the strategy in real-time with simulated money. Validate execution and real-world behavior.
*   **Start Small**: When you go live, trade with a small account or position size. Real money reveals issues paper trading doesn't.
*   **Monitor Continuously**: Markets change. A strategy that worked in 2020 may not work in 2025. Review performance regularly.
*   **Expect Differences**: Live trading includes psychological factors, [slippage](/glossary#slippage), and execution issues not present in [backtesting](/glossary#backtesting).
*   **Keep a Journal**: Record deviations from the strategy. Analyze what's working and what isn't.
*   **Iterate Carefully**: Adjust the strategy based on live results, but don't over-optimize. Major changes require re-[backtesting](/glossary#backtesting).
*   **Kill Switch**: Have a rule for when to stop trading a strategy (e.g., drawdown exceeds historical max by 50%).

[Backtesting](/glossary#backtesting) is your laboratory for trading ideas. Treat it seriously, avoid the pitfalls, and you'll enter live trading with a significant edge.
\`,
        keyTakeaways: [
            "Backtesting tests your strategy on historical data before risking real money.",
            "Key metrics: Sharpe ratio, max drawdown, profit factor, win rate, and expectancy.",
            "Avoid common mistakes: survivorship bias, look-ahead bias, overfitting, and ignoring costs.",
            "Use out-of-sample and walk-forward testing to validate that results aren't curve-fitted.",
            "Paper trade and start small before scaling up—live trading always differs from backtests."
        ]
    },`;

const startMarker = '"as_7": {';
const endMarker = '"as_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_7: Backtesting Your Strategy - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated as_7!');
