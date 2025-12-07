const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "as_6": {
        title: "Algorithmic Trading Intro",
        content: \`
# Algorithmic Trading: When Robots Take the Wheel

**Algorithmic trading** (also called algo trading, automated trading, or black-box trading) uses computer programs to execute trades based on predefined rules. These algorithms can analyze data, identify opportunities, and execute orders faster and more consistently than any human.

Today, algorithms account for over 60-75% of all stock market volume and an even higher percentage in [futures](/glossary#futures) and [forex](/glossary#forex). Understanding algorithmic trading—even if you never build an algorithm—helps you understand the modern market and the competition you face.

## Part 1: What Is Algorithmic Trading?

**Algorithmic trading** automates the trading process using computer code and predefined rules.

*   **Definition**: An algorithm is a set of instructions for accomplishing a task. In trading, these instructions specify when to buy, sell, and how much.
*   **Execution Algorithms**: Focus on HOW to execute orders (minimize market impact, get the best price).
*   **Strategy Algorithms**: Focus on WHAT to trade (identify opportunities, generate signals).
*   **Speed**: Algorithms can analyze and execute in milliseconds—far faster than humans.
*   **Consistency**: Algorithms follow rules exactly, without emotion or fatigue.
*   **Scale**: One algorithm can monitor thousands of instruments simultaneously.
*   **Common Languages**: Python (most popular for beginners), C++ (high-frequency), R (statistical analysis).
*   **Who Uses It**: Hedge funds, investment banks, proprietary trading firms, and increasingly retail traders.

## Part 2: Types of Algorithmic Trading Strategies

Different algorithms pursue different edges in the market.

### 1. Trend Following
*   Algorithms identify and follow trends using [moving averages](/glossary#moving-average), [breakouts](/glossary#breakout), and momentum indicators.
*   Buy when price crosses above a [moving average](/glossary#moving-average); sell when it crosses below.
*   Works in trending markets; struggles in choppy conditions.

### 2. Mean Reversion
*   Algorithms bet that prices stretched from their average will revert.
*   Buy oversold [stocks](/glossary#stock); sell overbought ones.
*   Works in range-bound markets.

### 3. Arbitrage
*   Exploits price discrepancies between related instruments or markets.
*   **Example**: If a [stock](/glossary#stock) is priced differently on two exchanges, buy the cheap one and sell the expensive one simultaneously.
*   Profits are tiny per trade but [risk](/glossary#risk)-free and repeatable.

### 4. Market Making
*   Provide [liquidity](/glossary#liquidity) by continuously quoting bid and ask prices.
*   Profit from the [spread](/glossary#spread) between them.
*   Requires extremely fast execution and [risk management](/glossary#risk-management).

### 5. Statistical [Arbitrage](/glossary#arbitrage)
*   Use statistical models to identify mis-priced securities based on historical relationships.
*   Often involves pairs trading or basket trading.

### 6. Sentiment Analysis
*   Parse news, social media, and earnings calls for sentiment.
*   Trade based on the detected sentiment before the market fully reacts.

### 7. High-Frequency Trading (HFT)
*   Ultra-fast algorithms that hold positions for milliseconds to seconds.
*   Exploit tiny price inefficiencies and earn [rebates](/glossary#rebate) for providing [liquidity](/glossary#liquidity).
*   Requires co-located servers and massive investment.

## Part 3: Building a Simple Trading Algorithm

The basic structure of a trading algorithm includes these components.

### 1. Data Acquisition
*   Historical price data for [backtesting](/glossary#backtesting).
*   Real-time data for live trading.
*   Sources: Yahoo Finance (free), Alpha Vantage, Polygon.io, Bloomberg (professional).

### 2. Signal Generation
*   The "brain" of the algorithm—rules that generate buy/sell signals.
*   **Example**: "If the 10-day SMA crosses above the 50-day SMA, generate a BUY signal."
*   Can use [technical indicators](/glossary#technical-analysis), [fundamentals](/glossary#fundamental-analysis), or machine learning.

### 3. [Risk Management](/glossary#risk-management)
*   Position sizing: How much to buy/sell.
*   [Stop-losses](/glossary#stop-loss): When to exit a losing trade.
*   Maximum exposure: Limits on total portfolio [risk](/glossary#risk).

### 4. Execution
*   Sending orders to the market.
*   Handling fills, partial fills, and rejections.
*   Minimizing slippage and market impact.

### 5. Logging and Monitoring
*   Record every decision and trade.
*   Alert for errors or unusual behavior.
*   Track performance metrics.

### Simple Python Pseudocode
\\\`\\\`\\\`
if sma_10 > sma_50 and not in_position:
    buy(symbol, quantity)
    in_position = True
elif sma_10 < sma_50 and in_position:
    sell(symbol, quantity)
    in_position = False
\\\`\\\`\\\`

## Part 4: Backtesting — Testing Before Trading

**[Backtesting](/glossary#backtesting)** is running your algorithm on historical data to see how it would have performed.

*   **Purpose**: Validate that your strategy has an edge before risking real money.
*   **Historical Data**: You need quality data (price, [volume](/glossary#volume), and ideally bid/ask).
*   **Key Metrics**:
    *   **Total Return**: How much did the strategy make?
    *   **Sharpe Ratio**: [Risk](/glossary#risk)-adjusted return. Higher is better (>1 is good, >2 is excellent).
    *   **Max Drawdown**: The worst peak-to-trough decline. Critical for [risk](/glossary#risk) assessment.
    *   **Win Rate**: Percentage of winning trades.
    *   **Profit Factor**: Gross profit / Gross loss. Above 1.5 is solid.
*   **Out-of-Sample Testing**: Don't just test on the data you developed the strategy on. Reserve a portion for validation.
*   **Look-Ahead Bias**: A common mistake—using data you wouldn't have had at the time.
*   **Overfitting**: A strategy that's "curve-fitted" to past data may fail in live trading. Keep strategies simple.
*   **Platforms**: QuantConnect, Backtrader (Python), TradingView (Pine Script), MetaTrader.

## Part 5: From Backtest to Live Trading

Moving from [backtesting](/glossary#backtesting) to real trading is a critical transition.

### Paper Trading (Simulation)
*   Run your algorithm in real-time with simulated money.
*   Validates that the algorithm works in live conditions without financial [risk](/glossary#risk).
*   Most broker APIs offer paper trading modes.

### Starting Small
*   Begin with a small account or position sizes.
*   Even a profitable backtest doesn't guarantee live success.
*   Slippage and execution differences can impact results.

### Monitoring
*   Never "set and forget"—monitor performance daily.
*   Watch for unexpected behavior, API errors, or market condition changes.
*   Have a kill switch to halt trading if something goes wrong.

### Iteration
*   Use live trading results to refine the algorithm.
*   Expand position sizes only after consistent live performance.
*   Be patient—it takes months to validate a strategy.

## Part 6: Advantages and Challenges

### Advantages of Algorithmic Trading
*   **Speed**: Faster than any human.
*   **Emotion-Free**: No fear, greed, or fatigue.
*   **Consistency**: Same rules applied every time.
*   **Scalability**: Monitor thousands of instruments simultaneously.
*   **[Backtesting](/glossary#backtesting)**: Test ideas on decades of data before risking capital.
*   **24/7 Trading**: Algorithms can trade [forex](/glossary#forex) and [crypto](/glossary#cryptocurrency) around the clock.

### Challenges of Algorithmic Trading
*   **Complexity**: Requires programming skills and market knowledge.
*   **Overfitting**: Strategies that work in backtests may fail live.
*   **Market Changes**: Markets evolve; yesterday's edge may disappear.
*   **Infrastructure**: Reliable servers, data feeds, and execution are critical.
*   **Regulatory Concerns**: Some strategies may have regulatory implications.
*   **Competition**: You're competing against well-funded quant funds.

## Part 7: Getting Started with Algo Trading

Practical steps for aspiring algorithmic traders.

*   **Learn Python**: The most accessible language for algo trading. Start with pandas, numpy, and basic data analysis.
*   **Study Markets**: Understand market microstructure, [order types](/glossary#order-types), and execution.
*   **Start Simple**: Begin with a basic [moving average](/glossary#moving-average) crossover. Add complexity only after mastering the basics.
*   **Use Free Resources**: QuantConnect, Alpaca, and Backtrader are free and excellent for learning.
*   **[Backtest](/glossary#backtesting) Extensively**: Never trust a strategy until you've seen years of [backtesting](/glossary#backtesting) results.
*   **Paper Trade**: Validate live before risking real money.
*   **Join Communities**: Reddit (r/algotrading), QuantConnect forums, Discord servers.
*   **Be Realistic**: Most retail algo strategies underperform after costs. The edge is hard to find.

Algorithmic trading democratizes access to sophisticated strategies. Whether you build your own algorithm or simply understand how the market's largest players operate, this knowledge is invaluable.
\`,
        keyTakeaways: [
            "Algorithmic trading uses computer programs to execute trades based on predefined rules.",
            "Common strategies: trend following, mean reversion, arbitrage, market making, and HFT.",
            "Key components: data acquisition, signal generation, risk management, execution, and monitoring.",
            "Backtesting validates strategies on historical data—but beware of overfitting.",
            "Start with Python, learn the basics, backtest extensively, and paper trade before going live."
        ]
    },`;

const startMarker = '"as_6": {';
const endMarker = '"as_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== as_6: Algorithmic Trading Intro - VALIDATION ===');
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
console.log('✓ Successfully updated as_6!');
