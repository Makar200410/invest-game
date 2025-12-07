const fs = require('fs');
const path = require('path');

// Read the glossary file
const glossaryPath = path.join(__dirname, '..', 'src', 'features', 'game', 'Glossary.tsx');
const glossaryContent = fs.readFileSync(glossaryPath, 'utf8');

// Extract existing term IDs
const existingIds = new Set();
const idMatches = glossaryContent.match(/id:\s*['"]([^'"]+)['"]/g);
if (idMatches) {
    idMatches.forEach(m => {
        const id = m.match(/id:\s*['"]([^'"]+)['"]/)[1];
        existingIds.add(id.toLowerCase());
    });
}
console.log('Existing glossary terms:', existingIds.size);

// Read the learning content
const learningPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
const learningContent = fs.readFileSync(learningPath, 'utf8');

// Common financial/investment terms to look for
const potentialTerms = [
    // Trading Terms
    { term: 'Technical Analysis', id: 'technical-analysis', category: 'Trading' },
    { term: 'Fundamental Analysis', id: 'fundamental-analysis', category: 'Trading' },
    { term: 'Day Trading', id: 'day-trading', category: 'Trading' },
    { term: 'Swing Trading', id: 'swing-trading', category: 'Trading' },
    { term: 'Position Trading', id: 'position-trading', category: 'Trading' },
    { term: 'Scalping', id: 'scalping', category: 'Trading' },
    { term: 'Breakout', id: 'breakout', category: 'Trading' },
    { term: 'Support', id: 'support', category: 'Trading' },
    { term: 'Resistance', id: 'resistance', category: 'Trading' },
    { term: 'Trend', id: 'trend', category: 'Trading' },
    { term: 'Momentum', id: 'momentum', category: 'Trading' },
    { term: 'Reversal', id: 'reversal', category: 'Trading' },
    { term: 'Consolidation', id: 'consolidation', category: 'Trading' },
    { term: 'Pullback', id: 'pullback', category: 'Trading' },
    { term: 'Rally', id: 'rally', category: 'Trading' },
    { term: 'Candlestick', id: 'candlestick', category: 'Trading' },
    { term: 'Chart Pattern', id: 'chart-pattern', category: 'Trading' },
    { term: 'Moving Average', id: 'moving-average', category: 'Trading' },
    { term: 'RSI', id: 'rsi', category: 'Trading' },
    { term: 'MACD', id: 'macd', category: 'Trading' },
    { term: 'Bollinger Bands', id: 'bollinger-bands', category: 'Trading' },
    { term: 'Volume', id: 'volume', category: 'Trading' },
    { term: 'Overbought', id: 'overbought', category: 'Trading' },
    { term: 'Oversold', id: 'oversold', category: 'Trading' },
    { term: 'Entry Point', id: 'entry-point', category: 'Trading' },
    { term: 'Exit Point', id: 'exit-point', category: 'Trading' },
    { term: 'Take Profit', id: 'take-profit', category: 'Trading' },
    { term: 'Risk-Reward Ratio', id: 'risk-reward', category: 'Trading' },
    { term: 'Trading Journal', id: 'trading-journal', category: 'Trading' },
    { term: 'Paper Trading', id: 'paper-trading', category: 'Trading' },
    { term: 'Backtesting', id: 'backtesting', category: 'Trading' },
    { term: 'Demo Account', id: 'demo-account', category: 'Trading' },

    // Forex Terms
    { term: 'Forex', id: 'forex', category: 'Forex' },
    { term: 'Currency Pair', id: 'currency-pair', category: 'Forex' },
    { term: 'Pip', id: 'pip', category: 'Forex' },
    { term: 'Lot', id: 'lot', category: 'Forex' },
    { term: 'Base Currency', id: 'base-currency', category: 'Forex' },
    { term: 'Quote Currency', id: 'quote-currency', category: 'Forex' },
    { term: 'Major Pairs', id: 'major-pairs', category: 'Forex' },
    { term: 'Minor Pairs', id: 'minor-pairs', category: 'Forex' },
    { term: 'Exotic Pairs', id: 'exotic-pairs', category: 'Forex' },
    { term: 'Spread', id: 'spread', category: 'Forex' },
    { term: 'Long Position', id: 'long-position', category: 'Forex' },
    { term: 'Short Position', id: 'short-position', category: 'Forex' },
    { term: 'Rollover', id: 'rollover', category: 'Forex' },
    { term: 'Swap', id: 'swap', category: 'Forex' },

    // Crypto Terms
    { term: 'Altcoin', id: 'altcoin', category: 'Crypto' },
    { term: 'Wallet', id: 'wallet', category: 'Crypto' },
    { term: 'Hot Wallet', id: 'hot-wallet', category: 'Crypto' },
    { term: 'Cold Wallet', id: 'cold-wallet', category: 'Crypto' },
    { term: 'Mining', id: 'mining', category: 'Crypto' },
    { term: 'Staking', id: 'staking', category: 'Crypto' },
    { term: 'DeFi', id: 'defi', category: 'Crypto' },
    { term: 'NFT', id: 'nft', category: 'Crypto' },
    { term: 'Smart Contract', id: 'smart-contract', category: 'Crypto' },
    { term: 'Gas Fee', id: 'gas-fee', category: 'Crypto' },
    { term: 'Halving', id: 'halving', category: 'Crypto' },
    { term: 'Token', id: 'token', category: 'Crypto' },
    { term: 'ICO', id: 'ico', category: 'Crypto' },
    { term: 'Proof of Work', id: 'proof-of-work', category: 'Crypto' },
    { term: 'Proof of Stake', id: 'proof-of-stake', category: 'Crypto' },
    { term: 'Decentralization', id: 'decentralization', category: 'Crypto' },
    { term: 'Hash Rate', id: 'hash-rate', category: 'Crypto' },
    { term: 'Private Key', id: 'private-key', category: 'Crypto' },
    { term: 'Public Key', id: 'public-key', category: 'Crypto' },
    { term: 'Seed Phrase', id: 'seed-phrase', category: 'Crypto' },

    // Commodities
    { term: 'Commodity', id: 'commodity', category: 'Commodities' },
    { term: 'Spot Price', id: 'spot-price', category: 'Commodities' },
    { term: 'Contango', id: 'contango', category: 'Commodities' },
    { term: 'Backwardation', id: 'backwardation', category: 'Commodities' },
    { term: 'Hedging', id: 'hedging', category: 'Commodities' },
    { term: 'Physical Delivery', id: 'physical-delivery', category: 'Commodities' },
    { term: 'Cash Settlement', id: 'cash-settlement', category: 'Commodities' },
    { term: 'COT Report', id: 'cot-report', category: 'Commodities' },

    // Options
    { term: 'Call Option', id: 'call-option', category: 'Options' },
    { term: 'Put Option', id: 'put-option', category: 'Options' },
    { term: 'Strike Price', id: 'strike-price', category: 'Options' },
    { term: 'Premium', id: 'premium', category: 'Options' },
    { term: 'Expiration', id: 'expiration', category: 'Options' },
    { term: 'In the Money', id: 'itm', category: 'Options' },
    { term: 'Out of the Money', id: 'otm', category: 'Options' },
    { term: 'At the Money', id: 'atm', category: 'Options' },
    { term: 'Implied Volatility', id: 'implied-volatility', category: 'Options' },
    { term: 'Greeks', id: 'greeks', category: 'Options' },
    { term: 'Delta', id: 'delta', category: 'Options' },
    { term: 'Theta', id: 'theta', category: 'Options' },
    { term: 'Gamma', id: 'gamma', category: 'Options' },
    { term: 'Vega', id: 'vega', category: 'Options' },
    { term: 'Covered Call', id: 'covered-call', category: 'Options' },
    { term: 'Protective Put', id: 'protective-put', category: 'Options' },
    { term: 'Straddle', id: 'straddle', category: 'Options' },
    { term: 'Strangle', id: 'strangle', category: 'Options' },
    { term: 'Iron Condor', id: 'iron-condor', category: 'Options' },

    // Portfolio Management
    { term: 'Alpha', id: 'alpha', category: 'Portfolio' },
    { term: 'Benchmark', id: 'benchmark', category: 'Portfolio' },
    { term: 'Treasury Bills', id: 'treasury-bills', category: 'Bonds' },
    { term: 'Treasury Notes', id: 'treasury-notes', category: 'Bonds' },
    { term: 'Corporate Bonds', id: 'corporate-bonds', category: 'Bonds' },
    { term: 'Junk Bonds', id: 'junk-bonds', category: 'Bonds' },
    { term: 'Zero Coupon Bond', id: 'zero-coupon-bond', category: 'Bonds' },
    { term: 'Par Value', id: 'par-value', category: 'Bonds' },
    { term: 'Default', id: 'default', category: 'Bonds' },
    { term: 'Investment Grade', id: 'investment-grade', category: 'Bonds' },

    // Psychology
    { term: 'FOMO', id: 'fomo', category: 'Behavioral' },
    { term: 'FUD', id: 'fud', category: 'Behavioral' },
    { term: 'Revenge Trading', id: 'revenge-trading', category: 'Behavioral' },
    { term: 'Overtrading', id: 'overtrading', category: 'Behavioral' },
    { term: 'Anchoring', id: 'anchoring', category: 'Behavioral' },
    { term: 'Disposition Effect', id: 'disposition-effect', category: 'Behavioral' },
    { term: 'Sunk Cost Fallacy', id: 'sunk-cost-fallacy', category: 'Behavioral' },
    { term: 'Mental Accounting', id: 'mental-accounting', category: 'Behavioral' },
    { term: 'Availability Bias', id: 'availability-bias', category: 'Behavioral' },
    { term: 'Status Quo Bias', id: 'status-quo-bias', category: 'Behavioral' },
    { term: 'Hindsight Bias', id: 'hindsight-bias', category: 'Behavioral' },
    { term: 'Endowment Effect', id: 'endowment-effect', category: 'Behavioral' },

    // Stocks
    { term: 'Earnings', id: 'earnings', category: 'Stocks' },
    { term: 'Earnings Report', id: 'earnings-report', category: 'Stocks' },
    { term: 'Earnings Season', id: 'earnings-season', category: 'Stocks' },
    { term: 'Guidance', id: 'guidance', category: 'Stocks' },
    { term: 'Stock Split', id: 'stock-split', category: 'Stocks' },
    { term: 'Buyback', id: 'buyback', category: 'Stocks' },
    { term: 'Dilution', id: 'dilution', category: 'Stocks' },
    { term: 'Penny Stock', id: 'penny-stock', category: 'Stocks' },
    { term: 'Growth Stock', id: 'growth-stock', category: 'Stocks' },
    { term: 'Value Stock', id: 'value-stock', category: 'Stocks' },
    { term: 'Dividend Yield', id: 'dividend-yield', category: 'Stocks' },
    { term: 'Payout Ratio', id: 'payout-ratio', category: 'Stocks' },
    { term: 'Float', id: 'float', category: 'Stocks' },
    { term: 'Shares Outstanding', id: 'shares-outstanding', category: 'Stocks' },

    // Risk Management
    { term: 'Risk Management', id: 'risk-management', category: 'Risk' },
    { term: 'Drawdown', id: 'drawdown', category: 'Risk' },
    { term: 'Volatility Targeting', id: 'volatility-targeting', category: 'Risk' },
    { term: 'Kelly Criterion', id: 'kelly-criterion', category: 'Risk' },
    { term: 'Value at Risk', id: 'var', category: 'Risk' },

    // Advanced
    { term: 'Arbitrage', id: 'arbitrage', category: 'Advanced' },
    { term: 'Pairs Trading', id: 'pairs-trading', category: 'Advanced' },
    { term: 'Mean Reversion', id: 'mean-reversion', category: 'Advanced' },
    { term: 'Trend Following', id: 'trend-following', category: 'Advanced' },
    { term: 'Algorithmic Trading', id: 'algo-trading', category: 'Advanced' },
    { term: 'Quantitative Trading', id: 'quant-trading', category: 'Advanced' },
];

// Find terms that appear in learning content but not in glossary
const missingTerms = [];
const learningLower = learningContent.toLowerCase();

for (const item of potentialTerms) {
    const termLower = item.term.toLowerCase();
    if (learningLower.includes(termLower) && !existingIds.has(item.id)) {
        missingTerms.push(item);
    }
}

console.log('\nMissing terms found in learning content:', missingTerms.length);
console.log('-------------------------------------------');

// Generate definitions for missing terms
const termDefinitions = {
    // Trading
    'technical-analysis': 'Analysis of price charts and patterns to predict future movements. Uses historical price and volume data.',
    'fundamental-analysis': 'Analysis of financial statements, economic factors, and industry conditions to determine intrinsic value.',
    'day-trading': 'Buying and selling securities within the same trading day. Positions are not held overnight.',
    'swing-trading': 'Holding positions for days to weeks to profit from expected price swings or momentum.',
    'position-trading': 'Long-term trading strategy holding positions for months to years based on major trends.',
    'scalping': 'Making many trades to profit from small price changes, typically holding for seconds to minutes.',
    'breakout': 'When price moves above resistance or below support with increased volume, signaling a new trend.',
    'support': 'Price level where buying pressure tends to prevent further decline. Acts as a "floor."',
    'resistance': 'Price level where selling pressure tends to prevent further rise. Acts as a "ceiling."',
    'trend': 'The general direction of price movement—uptrend (higher highs/lows) or downtrend (lower highs/lows).',
    'momentum': 'The rate of acceleration of price movement. Strong momentum often continues in the same direction.',
    'reversal': 'When price changes direction from an established trend, signaling a potential new trend.',
    'consolidation': 'Period when price trades in a narrow range, often before a significant move in either direction.',
    'pullback': 'Temporary price decline during an uptrend, often providing buying opportunities.',
    'rally': 'Sustained increase in prices, often following a period of flat or declining prices.',
    'candlestick': 'Chart type showing open, high, low, and close prices as candle-shaped bars with wicks.',
    'chart-pattern': 'Recognizable formations on price charts that suggest future price movements (e.g., head and shoulders).',
    'moving-average': 'Average price over a specific period that "moves" as new data comes in. Used to identify trends.',
    'rsi': 'Relative Strength Index. Momentum indicator measuring speed and change of price movements (0-100 scale).',
    'macd': 'Moving Average Convergence Divergence. Trend-following momentum indicator showing relationship between two moving averages.',
    'bollinger-bands': 'Volatility bands placed above and below a moving average. Width changes with volatility.',
    'volume': 'The number of shares or contracts traded in a security. High volume confirms price moves.',
    'overbought': 'Condition when a security has risen too quickly and may be due for a pullback. RSI > 70.',
    'oversold': 'Condition when a security has fallen too quickly and may be due for a bounce. RSI < 30.',
    'entry-point': 'The price at which a trader opens a position. Determined by strategy and analysis.',
    'exit-point': 'The price at which a trader closes a position, whether for profit or loss.',
    'take-profit': 'Order to automatically close a position when it reaches a specified profit target.',
    'risk-reward': 'Ratio comparing potential profit to potential loss. A 2:1 ratio means risking $1 to gain $2.',
    'trading-journal': 'Record of all trades including rationale, emotions, and outcomes. Essential for improvement.',
    'paper-trading': 'Simulated trading without real money to practice strategies and build confidence.',
    'backtesting': 'Testing a trading strategy on historical data to evaluate its effectiveness.',
    'demo-account': 'Practice account with virtual money to learn trading without financial risk.',

    // Forex
    'forex': 'Foreign Exchange market—the global marketplace for trading currencies. Largest financial market.',
    'currency-pair': 'Two currencies quoted together (e.g., EUR/USD). First is base, second is quote currency.',
    'pip': 'Smallest price move in forex. Usually 0.0001 for most pairs (4th decimal place).',
    'lot': 'Standard unit size in forex trading. Standard lot = 100,000 units of base currency.',
    'base-currency': 'The first currency in a pair. The one being bought (or sold) in a trade.',
    'quote-currency': 'The second currency in a pair. Shows how much is needed to buy one unit of base.',
    'major-pairs': 'Most traded currency pairs involving USD (EUR/USD, GBP/USD, USD/JPY, USD/CHF).',
    'minor-pairs': 'Currency pairs without USD but involving major currencies (EUR/GBP, EUR/JPY).',
    'exotic-pairs': 'Pairings of major currency with emerging market currency (USD/TRY, EUR/ZAR).',
    'spread': 'Difference between bid (buy) and ask (sell) price. The cost of trading.',
    'long-position': 'Buying an asset expecting its price to rise. You profit when price increases.',
    'short-position': 'Selling an asset expecting its price to fall. You profit when price decreases.',
    'rollover': 'Interest paid or earned for holding forex positions overnight. Based on interest rate differential.',
    'swap': 'The interest differential between two currencies in a forex pair, paid or received for overnight positions.',

    // Crypto
    'altcoin': 'Any cryptocurrency other than Bitcoin. Examples: Ethereum, Solana, Cardano.',
    'wallet': 'Software or hardware that stores your cryptocurrency private keys and allows transactions.',
    'hot-wallet': 'Cryptocurrency wallet connected to the internet. Convenient but less secure.',
    'cold-wallet': 'Cryptocurrency wallet stored offline (hardware wallet, paper wallet). Most secure option.',
    'mining': 'Process of validating transactions and adding them to blockchain, earning new coins as reward.',
    'staking': 'Locking up cryptocurrency to support network operations and earn rewards. Proof of Stake.',
    'defi': 'Decentralized Finance—financial services built on blockchain without traditional intermediaries.',
    'nft': 'Non-Fungible Token. Unique digital asset representing ownership of art, collectibles, etc.',
    'smart-contract': 'Self-executing contract with terms written in code, running on blockchain automatically.',
    'gas-fee': 'Transaction fee paid to process operations on blockchain networks like Ethereum.',
    'halving': 'Event reducing Bitcoin mining rewards by 50%. Occurs every 210,000 blocks (~4 years).',
    'token': 'Digital asset built on existing blockchain (unlike coins with their own blockchain).',
    'ico': 'Initial Coin Offering. Fundraising method where new crypto projects sell tokens to investors.',
    'proof-of-work': 'Consensus mechanism requiring computational work to validate transactions (Bitcoin).',
    'proof-of-stake': 'Consensus mechanism where validators stake coins as collateral to validate transactions.',
    'decentralization': 'Distribution of control away from a central authority. Core principle of cryptocurrency.',
    'hash-rate': 'Computational power used for mining. Higher hash rate = more secure network.',
    'private-key': 'Secret code that proves ownership and allows spending of cryptocurrency. Never share.',
    'public-key': 'Derived from private key. Used to receive cryptocurrency. Safe to share.',
    'seed-phrase': '12-24 words that can recover your entire wallet. Store securely offline.',

    // Commodities
    'commodity': 'Raw material or primary product traded on exchanges (gold, oil, wheat, copper).',
    'spot-price': 'Current market price for immediate delivery of a commodity.',
    'contango': 'Market condition where futures price exceeds spot price. Normal for storable commodities.',
    'backwardation': 'Market condition where spot price exceeds futures price. Suggests immediate supply shortage.',
    'hedging': 'Using derivatives to protect against adverse price movements in an existing position.',
    'physical-delivery': 'Settlement of futures contract with actual delivery of the underlying commodity.',
    'cash-settlement': 'Settlement of futures contract with cash payment instead of physical delivery.',
    'cot-report': 'Commitment of Traders report showing positions of commercials vs speculators. Published weekly.',

    // Options
    'call-option': 'Contract giving the right (not obligation) to BUY an asset at a set price by expiration.',
    'put-option': 'Contract giving the right (not obligation) to SELL an asset at a set price by expiration.',
    'strike-price': 'The predetermined price at which an option can be exercised.',
    'premium': 'The price paid for an option contract. The maximum loss for option buyers.',
    'expiration': 'The date an option contract expires and becomes worthless if not exercised.',
    'itm': 'In the Money. Option with intrinsic value. Call: stock above strike. Put: stock below strike.',
    'otm': 'Out of the Money. Option with no intrinsic value. Call: stock below strike. Put: stock above strike.',
    'atm': 'At the Money. Option where strike price equals current stock price.',
    'implied-volatility': 'Market expectation of future volatility, derived from option prices. Higher IV = higher premiums.',
    'greeks': 'Measures of option price sensitivity: Delta, Gamma, Theta, Vega, Rho.',
    'delta': 'Measures option price change relative to $1 move in underlying. Also probability of expiring ITM.',
    'theta': 'Time decay—how much option value decreases as expiration approaches. Negative for buyers.',
    'gamma': 'Rate of change of delta. Highest for ATM options near expiration.',
    'vega': 'Option price sensitivity to 1% change in implied volatility.',
    'covered-call': 'Selling call options on stock you own. Income strategy that caps upside.',
    'protective-put': 'Buying put options on stock you own. Insurance against downside.',
    'straddle': 'Buying both call and put at same strike. Profits from big moves in either direction.',
    'strangle': 'Buying OTM call and put. Cheaper than straddle but needs bigger move.',
    'iron-condor': 'Selling OTM call spread and put spread. Profits in range-bound markets.',

    // Portfolio
    'alpha': 'Return above benchmark. Positive alpha = outperformance. The goal of active management.',
    'benchmark': 'Standard for measuring investment performance (e.g., S&P 500 for US stocks).',
    'treasury-bills': 'Short-term government debt (under 1 year). Safest investment. T-Bills.',
    'treasury-notes': 'Medium-term government debt (2-10 years). Pay semi-annual interest.',
    'corporate-bonds': 'Debt issued by companies. Higher yield than treasuries but more risk.',
    'junk-bonds': 'High-yield bonds rated below investment grade (BB+ or lower). High risk, high reward.',
    'zero-coupon-bond': 'Bond that pays no periodic interest. Sold at discount, matures at face value.',
    'par-value': 'Face value of a bond, typically $1,000. The amount repaid at maturity.',
    'default': 'Failure to make required interest or principal payments on debt. Bankruptcy risk.',
    'investment-grade': 'Bonds rated BBB- or higher by rating agencies. Lower risk of default.',

    // Psychology
    'fud': 'Fear, Uncertainty, and Doubt. Negative sentiment often spread deliberately to drive prices down.',
    'revenge-trading': 'Trading impulsively to recover losses. Usually leads to bigger losses.',
    'overtrading': 'Trading too frequently, often from boredom or overconfidence. Generates unnecessary costs.',
    'anchoring': 'Fixating on a reference point (e.g., purchase price) when making decisions.',
    'disposition-effect': 'Tendency to sell winners too early and hold losers too long. Opposite of profit-maximizing.',
    'sunk-cost-fallacy': 'Continuing to hold losers because of money already invested. "I can\'t sell at a loss."',
    'mental-accounting': 'Treating money differently based on its source or intended use, rather than fungibly.',
    'availability-bias': 'Overweighting easily remembered events (recent crashes) when estimating probability.',
    'status-quo-bias': 'Preference for current state, even when change would be beneficial.',
    'hindsight-bias': 'Believing past events were predictable. "I knew it all along."',
    'endowment-effect': 'Valuing things more simply because you own them.',

    // Stocks
    'earnings': 'Company profits. Net income after all expenses. Drives stock valuations.',
    'earnings-report': 'Quarterly disclosure of company financial results. Major market-moving event.',
    'earnings-season': 'Periods when most companies report quarterly earnings. Increased volatility.',
    'guidance': 'Company forecasts for future performance. Often impacts stock more than actual results.',
    'stock-split': 'Dividing shares to lower price per share. 2:1 split doubles shares, halves price.',
    'buyback': 'Company repurchasing its own shares. Reduces shares outstanding, increases EPS.',
    'dilution': 'Reduction in existing ownership percentage when new shares are issued.',
    'penny-stock': 'Stocks trading under $5, often on OTC markets. Extremely speculative.',
    'growth-stock': 'Companies expected to grow faster than market. Often high P/E, low dividends.',
    'value-stock': 'Companies trading below intrinsic value. Often low P/E, higher dividends.',
    'dividend-yield': 'Annual dividend divided by stock price. Shows income return on investment.',
    'payout-ratio': 'Percentage of earnings paid as dividends. Lower ratio = more sustainable dividend.',
    'float': 'Shares available for public trading (excluding insider holdings, restricted shares).',
    'shares-outstanding': 'Total number of shares issued by company, including insider shares.',

    // Risk Management
    'risk-management': 'Identifying, assessing, and prioritizing risks to minimize negative impact on capital.',
    'drawdown': 'Peak-to-trough decline in account value. Maximum drawdown = worst historical decline.',
    'volatility-targeting': 'Adjusting position size based on current volatility to maintain consistent risk.',
    'kelly-criterion': 'Formula for optimal bet sizing based on edge and odds. Often used at half-Kelly.',
    'var': 'Value at Risk. Statistical measure of maximum expected loss over a period at a confidence level.',

    // Advanced
    'arbitrage': 'Profiting from price differences between markets. Buying low in one, selling high in another.',
    'pairs-trading': 'Trading two correlated securities, going long one and short the other.',
    'mean-reversion': 'Theory that prices eventually return to their average. Basis for some trading strategies.',
    'trend-following': 'Strategy that attempts to capture gains by riding the momentum of market trends.',
    'algo-trading': 'Using computer programs to execute trades based on predefined criteria at high speed.',
    'quant-trading': 'Using mathematical models and statistics to identify trading opportunities.',
};

// Generate the new glossary entries
console.log('\n// === NEW GLOSSARY ENTRIES TO ADD ===');
console.log('// Add these to glossaryTerms array in Glossary.tsx\n');

const newEntries = [];
for (const item of missingTerms) {
    const definition = termDefinitions[item.id] || `[DEFINITION NEEDED for ${item.term}]`;
    const entry = `    { id: '${item.id}', term: '${item.term}', definition: '${definition.replace(/'/g, "\\'")}', category: '${item.category}' },`;
    newEntries.push(entry);
    console.log(entry);
}

console.log('\n// Total new entries:', newEntries.length);

// Save to a file
const outputPath = path.join(__dirname, 'new_glossary_terms.txt');
fs.writeFileSync(outputPath, newEntries.join('\n'), 'utf8');
console.log('\nNew entries saved to:', outputPath);
