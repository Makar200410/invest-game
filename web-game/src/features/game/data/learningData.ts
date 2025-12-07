import { BookOpen, TrendingUp, Shield, Globe, Bitcoin, BarChart2, PieChart, Activity, DollarSign, Layers, Brain } from 'lucide-react';

export interface Lesson {
    id: string;
    title: string; // Fallback title, actual title loaded from locale
    duration: string;
    type: 'video' | 'article' | 'quiz';
    xp: number;
    image?: string;
}

export interface Module {
    id: string;
    title: string; // Fallback title
    description: string; // Fallback description
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    icon: any;
    image: string;
    lessons: Lesson[];
}

export const learningModules: Module[] = [
    {
        id: 'financial_foundations',
        title: 'Financial Foundations',
        description: 'Master the core concepts of money, economy, and personal finance.',
        level: 'Beginner',
        icon: BookOpen,
        image: '/images/modules/financial_foundations.jpg',
        lessons: [
            { id: 'ff_1', title: 'The History of Money', duration: '5 min', type: 'article', xp: 100 },
            { id: 'ff_2', title: 'Inflation & Purchasing Power', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ff_3', title: 'Interest Rates Explained', duration: '6 min', type: 'article', xp: 100 },
            { id: 'ff_4', title: 'Compound Interest Magic', duration: '8 min', type: 'article', xp: 150 },
            { id: 'ff_5', title: 'Central Banks & Monetary Policy', duration: '10 min', type: 'article', xp: 150 },
            { id: 'ff_6', title: 'Economic Cycles', duration: '8 min', type: 'article', xp: 150 },
            { id: 'ff_7', title: 'GDP & Economic Indicators', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ff_8', title: 'Assets vs. Liabilities', duration: '6 min', type: 'article', xp: 100 },
            { id: 'ff_9', title: 'Cash Flow Management', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ff_10', title: 'Debt: Good vs. Bad', duration: '8 min', type: 'article', xp: 100 },
            { id: 'ff_11', title: 'Emergency Funds', duration: '5 min', type: 'article', xp: 100 },
            { id: 'ff_12', title: 'Financial Goal Setting', duration: '6 min', type: 'article', xp: 100 },
        ]
    },
    {
        id: 'investment_basics',
        title: 'Investment Basics',
        description: 'Start your journey into the world of investing.',
        level: 'Beginner',
        icon: TrendingUp,
        image: '/images/modules/investment_basics.jpg',
        lessons: [
            { id: 'ib_1', title: 'Why Invest?', duration: '5 min', type: 'article', xp: 100 },
            { id: 'ib_2', title: 'Risk vs. Return', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ib_3', title: 'The Power of Diversification', duration: '8 min', type: 'article', xp: 150 },
            { id: 'ib_4', title: 'Asset Classes Overview', duration: '10 min', type: 'article', xp: 150 },
            { id: 'ib_5', title: 'Active vs. Passive Investing', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ib_6', title: 'Market Participants', duration: '8 min', type: 'article', xp: 100 },
            { id: 'ib_7', title: 'Bull vs. Bear Markets', duration: '6 min', type: 'article', xp: 100 },
            { id: 'ib_8', title: 'Brokerage Accounts 101', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ib_9', title: 'Order Types: Market vs. Limit', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ib_10', title: 'Reading a Quote', duration: '6 min', type: 'article', xp: 100 },
            { id: 'ib_11', title: 'Investment Costs & Fees', duration: '7 min', type: 'article', xp: 100 },
            { id: 'ib_12', title: 'Tax Implications of Investing', duration: '8 min', type: 'article', xp: 150 },
        ]
    },
    {
        id: 'stock_market_mastery',
        title: 'Stock Market Mastery',
        description: 'Deep dive into equities and company analysis.',
        level: 'Intermediate',
        icon: BarChart2,
        image: '/images/modules/stock_market_mastery.jpg',
        lessons: [
            { id: 'sm_1', title: 'What is a Stock?', duration: '6 min', type: 'article', xp: 100 },
            { id: 'sm_2', title: 'IPO: Initial Public Offering', duration: '8 min', type: 'article', xp: 150 },
            { id: 'sm_3', title: 'Market Capitalization', duration: '7 min', type: 'article', xp: 100 },
            { id: 'sm_4', title: 'Dividends & Yields', duration: '8 min', type: 'article', xp: 150 },
            { id: 'sm_5', title: 'Stock Splits & Buybacks', duration: '7 min', type: 'article', xp: 100 },
            { id: 'sm_6', title: 'Reading an Income Statement', duration: '12 min', type: 'article', xp: 200 },
            { id: 'sm_7', title: 'Analyzing the Balance Sheet', duration: '12 min', type: 'article', xp: 200 },
            { id: 'sm_8', title: 'Cash Flow Analysis', duration: '10 min', type: 'article', xp: 200 },
            { id: 'sm_9', title: 'P/E Ratio & Valuation', duration: '10 min', type: 'article', xp: 150 },
            { id: 'sm_10', title: 'EPS: Earnings Per Share', duration: '8 min', type: 'article', xp: 150 },
            { id: 'sm_11', title: 'Growth vs. Value Stocks', duration: '9 min', type: 'article', xp: 150 },
            { id: 'sm_12', title: 'Sector Analysis', duration: '8 min', type: 'article', xp: 150 },
            { id: 'sm_13', title: 'Earnings Season Strategies', duration: '10 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'bonds_fixed_income',
        title: 'Bonds & Fixed Income',
        description: 'Understanding debt markets and yield curves.',
        level: 'Intermediate',
        icon: Shield,
        image: '/images/modules/bonds_fixed_income.png',
        lessons: [
            { id: 'bf_1', title: 'What is a Bond?', duration: '6 min', type: 'article', xp: 100 },
            { id: 'bf_2', title: 'Government vs. Corporate Bonds', duration: '8 min', type: 'article', xp: 150 },
            { id: 'bf_3', title: 'Bond Ratings & Credit Risk', duration: '9 min', type: 'article', xp: 150 },
            { id: 'bf_4', title: 'Yield to Maturity (YTM)', duration: '10 min', type: 'article', xp: 200 },
            { id: 'bf_5', title: 'The Yield Curve Explained', duration: '12 min', type: 'article', xp: 200 },
            { id: 'bf_6', title: 'Interest Rate Risk', duration: '9 min', type: 'article', xp: 150 },
            { id: 'bf_7', title: 'Duration & Convexity', duration: '11 min', type: 'article', xp: 200 },
            { id: 'bf_8', title: 'Municipal Bonds', duration: '7 min', type: 'article', xp: 100 },
            { id: 'bf_9', title: 'High-Yield (Junk) Bonds', duration: '8 min', type: 'article', xp: 150 },
            { id: 'bf_10', title: 'Bond Ladders', duration: '9 min', type: 'article', xp: 150 },
            { id: 'bf_11', title: 'Inflation-Protected Securities (TIPS)', duration: '8 min', type: 'article', xp: 150 },
            { id: 'bf_12', title: 'Fixed Income ETFs', duration: '7 min', type: 'article', xp: 100 },
        ]
    },
    {
        id: 'funds_etfs',
        title: 'Funds & ETFs',
        description: 'Diversified investing through pooled vehicles.',
        level: 'Intermediate',
        icon: PieChart,
        image: '/images/modules/funds_etfs.jpg',
        lessons: [
            { id: 'fe_1', title: 'Mutual Funds Explained', duration: '8 min', type: 'article', xp: 100 },
            { id: 'fe_2', title: 'The Rise of ETFs', duration: '8 min', type: 'article', xp: 150 },
            { id: 'fe_3', title: 'Index Funds vs. Active Funds', duration: '9 min', type: 'article', xp: 150 },
            { id: 'fe_4', title: 'NAV: Net Asset Value', duration: '6 min', type: 'article', xp: 100 },
            { id: 'fe_5', title: 'Expense Ratios & Fees', duration: '7 min', type: 'article', xp: 100 },
            { id: 'fe_6', title: 'Sector & Thematic ETFs', duration: '8 min', type: 'article', xp: 150 },
            { id: 'fe_7', title: 'Leveraged ETFs', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fe_8', title: 'Inverse ETFs', duration: '9 min', type: 'article', xp: 200 },
            { id: 'fe_9', title: 'Commodity ETFs', duration: '8 min', type: 'article', xp: 150 },
            { id: 'fe_10', title: 'REITs (Real Estate)', duration: '9 min', type: 'article', xp: 150 },
            { id: 'fe_11', title: 'Smart Beta Strategies', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fe_12', title: 'Building a Fund Portfolio', duration: '12 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'forex_currencies',
        title: 'Forex & Currencies',
        description: 'Trading the worlds largest financial market.',
        level: 'Intermediate',
        icon: Globe,
        image: '/images/modules/forex_currencies.jpg',
        lessons: [
            { id: 'fx_1', title: 'What is Forex?', duration: '6 min', type: 'article', xp: 100 },
            { id: 'fx_2', title: 'Currency Pairs & Quotes', duration: '8 min', type: 'article', xp: 150 },
            { id: 'fx_3', title: 'Pips, Lots, and Leverage', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fx_4', title: 'Major, Minor, & Exotic Pairs', duration: '9 min', type: 'article', xp: 150 },
            { id: 'fx_5', title: 'Forex Market Sessions', duration: '7 min', type: 'article', xp: 100 },
            { id: 'fx_6', title: 'Factors Moving Currencies', duration: '9 min', type: 'article', xp: 150 },
            { id: 'fx_7', title: 'Central Bank Interventions', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fx_8', title: 'Carry Trade Strategy', duration: '11 min', type: 'article', xp: 200 },
            { id: 'fx_9', title: 'Forex Chart Patterns', duration: '12 min', type: 'article', xp: 200 },
            { id: 'fx_10', title: 'Risk Management in Forex', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fx_11', title: 'Correlation in Forex', duration: '9 min', type: 'article', xp: 150 },
            { id: 'fx_12', title: 'Trading News Events', duration: '10 min', type: 'article', xp: 200 },
            { id: 'fx_13', title: 'Forex vs. Stocks', duration: '7 min', type: 'article', xp: 100 },
        ]
    },
    {
        id: 'crypto_blockchain',
        title: 'Crypto & Blockchain',
        description: 'Navigating the digital asset revolution.',
        level: 'Intermediate',
        icon: Bitcoin,
        image: '/images/modules/crypto_blockchain.jpg',
        lessons: [
            { id: 'cb_1', title: 'Blockchain Technology 101', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cb_2', title: 'Bitcoin: Digital Gold', duration: '9 min', type: 'article', xp: 150 },
            { id: 'cb_3', title: 'Ethereum & Smart Contracts', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cb_4', title: 'Altcoins & Tokens', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cb_5', title: 'Wallets & Security', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cb_6', title: 'DeFi: Decentralized Finance', duration: '11 min', type: 'article', xp: 200 },
            { id: 'cb_7', title: 'NFTs Explained', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cb_8', title: 'Stablecoins', duration: '7 min', type: 'article', xp: 100 },
            { id: 'cb_9', title: 'Crypto Exchanges (CEX vs DEX)', duration: '9 min', type: 'article', xp: 150 },
            { id: 'cb_10', title: 'Mining vs. Staking', duration: '9 min', type: 'article', xp: 150 },
            { id: 'cb_11', title: 'Tokenomics', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cb_12', title: 'Regulatory Landscape', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cb_13', title: 'Avoiding Crypto Scams', duration: '7 min', type: 'article', xp: 100 },
        ]
    },
    {
        id: 'economics_101',
        title: 'Economics 101',
        description: 'Core economic concepts that drive markets.',
        level: 'Intermediate',
        icon: TrendingUp,
        image: '/images/modules/economics_101.jpg',
        lessons: [
            { id: 'eco_1', title: 'Supply and Demand', duration: '10 min', type: 'article', xp: 150 },
            { id: 'eco_2', title: 'Inflation & Deflation', duration: '10 min', type: 'article', xp: 150 },
            { id: 'eco_3', title: 'Interest Rates (The Fed)', duration: '10 min', type: 'article', xp: 200 },
            { id: 'eco_4', title: 'GDP (Gross Domestic Product)', duration: '9 min', type: 'article', xp: 150 },
            { id: 'eco_5', title: 'The Business Cycle', duration: '10 min', type: 'article', xp: 200 },
            { id: 'eco_6', title: 'Fiscal vs. Monetary Policy', duration: '11 min', type: 'article', xp: 200 },
            { id: 'eco_7', title: 'Global Economics', duration: '10 min', type: 'article', xp: 200 },
            { id: 'eco_8', title: 'Economic Indicators', duration: '10 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'technical_analysis',
        title: 'Technical Analysis',
        description: 'Mastering charts, patterns, and indicators.',
        level: 'Intermediate',
        icon: Activity,
        image: '/images/modules/technical_analysis.jpg',
        lessons: [
            { id: 'ta_1', title: 'Candlestick Basics', duration: '10 min', type: 'article', xp: 150 },
            { id: 'ta_2', title: 'Support & Resistance', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ta_3', title: 'Trend Lines & Channels', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ta_4', title: 'Moving Averages (SMA/EMA)', duration: '10 min', type: 'article', xp: 200 },
            { id: 'ta_5', title: 'RSI (Relative Strength Index)', duration: '10 min', type: 'article', xp: 200 },
            { id: 'ta_6', title: 'MACD Indicator', duration: '10 min', type: 'article', xp: 200 },
            { id: 'ta_7', title: 'Bollinger Bands', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ta_8', title: 'Volume Analysis', duration: '10 min', type: 'article', xp: 200 },
            { id: 'ta_9', title: 'Chart Patterns (Head & Shoulders)', duration: '11 min', type: 'article', xp: 200 },
            { id: 'ta_10', title: 'Flags and Pennants', duration: '9 min', type: 'article', xp: 150 },
            { id: 'ta_11', title: 'Fibonacci Retracements', duration: '10 min', type: 'article', xp: 200 },
            { id: 'ta_12', title: 'Multi-Timeframe Analysis', duration: '11 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'commodities_futures',
        title: 'Commodities & Futures',
        description: 'Trading raw materials and derivative contracts.',
        level: 'Advanced',
        icon: Layers,
        image: '/images/modules/commodities_futures.png',
        lessons: [
            { id: 'cf_1', title: 'Introduction to Commodities', duration: '7 min', type: 'article', xp: 100 },
            { id: 'cf_2', title: 'Hard vs. Soft Commodities', duration: '6 min', type: 'article', xp: 100 },
            { id: 'cf_3', title: 'What is a Futures Contract?', duration: '9 min', type: 'article', xp: 150 },
            { id: 'cf_4', title: 'Margin & Leverage in Futures', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cf_5', title: 'Contango vs. Backwardation', duration: '11 min', type: 'article', xp: 200 },
            { id: 'cf_6', title: 'Hedging with Futures', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cf_7', title: 'Gold & Precious Metals', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cf_8', title: 'Oil & Energy Markets', duration: '9 min', type: 'article', xp: 150 },
            { id: 'cf_9', title: 'Agricultural Commodities', duration: '8 min', type: 'article', xp: 150 },
            { id: 'cf_10', title: 'Options on Futures', duration: '12 min', type: 'article', xp: 250 },
            { id: 'cf_11', title: 'The Role of Speculators', duration: '10 min', type: 'article', xp: 200 },
            { id: 'cf_12', title: 'CFDs Explained', duration: '10 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'portfolio_management',
        title: 'Portfolio Management',
        description: 'Constructing and maintaining a winning portfolio.',
        level: 'Advanced',
        icon: DollarSign,
        image: '/images/modules/portfolio_management.jpg',
        lessons: [
            { id: 'pm_1', title: 'Modern Portfolio Theory', duration: '10 min', type: 'article', xp: 200 },
            { id: 'pm_2', title: 'Asset Allocation Strategies', duration: '9 min', type: 'article', xp: 150 },
            { id: 'pm_3', title: 'Rebalancing Your Portfolio', duration: '8 min', type: 'article', xp: 150 },
            { id: 'pm_4', title: 'Risk Management 101', duration: '10 min', type: 'article', xp: 200 },
            { id: 'pm_5', title: 'Position Sizing', duration: '9 min', type: 'article', xp: 150 },
            { id: 'pm_6', title: 'Stop-Loss Strategies', duration: '9 min', type: 'article', xp: 150 },
            { id: 'pm_7', title: 'Hedging Your Portfolio', duration: '11 min', type: 'article', xp: 250 },
            { id: 'pm_8', title: 'Alpha vs. Beta', duration: '8 min', type: 'article', xp: 150 },
            { id: 'pm_9', title: 'Sharpe & Sortino Ratios', duration: '10 min', type: 'article', xp: 200 },
            { id: 'pm_10', title: 'Drawdown Control', duration: '9 min', type: 'article', xp: 150 },
            { id: 'pm_11', title: 'Tax-Loss Harvesting', duration: '8 min', type: 'article', xp: 150 },
            { id: 'pm_12', title: 'Long-Term Wealth Building', duration: '10 min', type: 'article', xp: 200 },
        ]
    },
    {
        id: 'trading_psychology',
        title: 'Trading Psychology',
        description: 'Mastering the mental game of trading.',
        level: 'All Levels', // Changed from 'Advanced' to 'All Levels' as it applies to everyone
        icon: Brain,
        image: '/images/modules/trading_psychology.jpg',
        lessons: [
            { id: 'tp_1', title: 'Fear & Greed', duration: '8 min', type: 'article', xp: 150 },
            { id: 'tp_2', title: 'FOMO (Fear Of Missing Out)', duration: '7 min', type: 'article', xp: 100 },
            { id: 'tp_3', title: 'Confirmation Bias', duration: '8 min', type: 'article', xp: 150 },
            { id: 'tp_4', title: 'Revenge Trading', duration: '9 min', type: 'article', xp: 150 },
            { id: 'tp_5', title: 'The Gambler\'s Fallacy', duration: '8 min', type: 'article', xp: 150 },
            { id: 'tp_6', title: 'Discipline & Patience', duration: '9 min', type: 'article', xp: 150 },
            { id: 'tp_7', title: 'Keeping a Trading Journal', duration: '10 min', type: 'article', xp: 200 },
            { id: 'tp_8', title: 'Handling Losses', duration: '9 min', type: 'article', xp: 150 },
            { id: 'tp_9', title: 'Overtrading', duration: '8 min', type: 'article', xp: 150 },
            { id: 'tp_10', title: 'Developing a Trader\'s Mindset', duration: '10 min', type: 'article', xp: 200 },
            { id: 'tp_11', title: 'Stress Management', duration: '8 min', type: 'article', xp: 150 },
            { id: 'tp_12', title: 'Consistency is Key', duration: '7 min', type: 'article', xp: 100 },
            { id: 'tp_13', title: 'The Journey to Mastery', duration: '10 min', type: 'article', xp: 200 },
        ]
    }
];
