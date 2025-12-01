import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RefreshCcw, Lock, TrendingUp, TrendingDown } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, fetchMarketChartByInterval, type MarketItem, updateScore } from '../../services/api';
import { formatPrice } from '../../utils/format';


export const Market: React.FC = () => {
    const { t } = useTranslation();

    // Top 20 Popular Assets
    const POPULAR_IDS = [
        'BTC-USD', 'ETH-USD', 'SOL-USD', // Crypto
        'AAPL', 'NVDA', 'TSLA', 'MSFT', 'AMZN', 'GOOGL', 'META', // US Stocks
        'GC=F', 'CL=F', // Commodities
        'EURUSD=X', 'GBPUSD=X', // Forex
        '^GSPC', '^DJI', '^IXIC', // US Indices
        '^FTSE', '^GDAXI', '^N225' // Global Indices
    ];

    const COUNTRIES = [
        { id: 'all', label: 'country_all' },
        { id: 'us', label: 'country_us' },
        { id: 'uk', label: 'country_uk' },
        { id: 'de', label: 'country_de' },
        { id: 'fr', label: 'country_fr' },
        { id: 'es', label: 'country_es' },
        { id: 'cn', label: 'country_cn' },
        { id: 'jp', label: 'country_jp' },
        { id: 'br', label: 'country_br' },
    ];

    const getCountry = (symbol: string): string => {
        if (symbol.endsWith('.L')) return 'uk';
        if (symbol.endsWith('.DE')) return 'de';
        if (symbol.endsWith('.PA')) return 'fr';
        if (symbol.endsWith('.MC')) return 'es';
        if (symbol.endsWith('.HK') || symbol.endsWith('.SS') || symbol.endsWith('.SZ')) return 'cn';
        if (symbol.endsWith('.T')) return 'jp';
        if (symbol.endsWith('.SA')) return 'br';
        return 'us';
    };

    const navigate = useNavigate();
    const { balance, loan, portfolio, leveragedPositions, shortPositions, user, skills, tradesToday, getDiversificationBonus, checkOrders } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [marketInterval] = useState<string>('1d'); // Default to daily
    const [activeTab, setActiveTab] = useState<string>(() => localStorage.getItem('marketActiveTab') || 'popular');
    const [selectedCountry, setSelectedCountry] = useState<string>(() => localStorage.getItem('marketSelectedCountry') || 'all');

    useEffect(() => {
        localStorage.setItem('marketActiveTab', activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem('marketSelectedCountry', selectedCountry);
    }, [selectedCountry]);

    const [prevPrices, setPrevPrices] = useState<Record<string, number>>({});
    const [priceFlashes, setPriceFlashes] = useState<Record<string, 'up' | 'down' | null>>({});

    // ... (rest of the component logic) ...

    // Prepare Active Positions Data
    const allPositions = useMemo(() => {
        const spots = portfolio.map(p => ({
            uniqueId: `spot-${p.id}`,
            assetId: p.id,
            amount: p.amount,
            entryPrice: p.avgPrice,
            type: 'spot',
            leverage: 1
        }));

        const levs = leveragedPositions.map(p => ({
            uniqueId: p.id,
            assetId: p.assetId,
            amount: p.amount,
            entryPrice: p.entryPrice,
            type: 'leverage',
            leverage: p.leverage
        }));

        const shorts = shortPositions.map(p => ({
            uniqueId: p.id,
            assetId: p.assetId,
            amount: p.amount,
            entryPrice: p.entryPrice,
            type: 'short',
            leverage: p.leverage
        }));

        return [...spots, ...levs, ...shorts];
    }, [portfolio, leveragedPositions, shortPositions]);

    const loadFullData = async () => {
        setLoading(true);
        // Fetch ALL data from backend (crypto + stocks) including charts
        const allAssets = await fetchCryptoMarket(false); // pricesOnly = false

        // Fetch chart data for the selected interval if not daily
        if (skills.multiTimeframe && marketInterval !== '1d') {
            const assetsWithCharts = await Promise.all(
                allAssets.map(async (asset) => {
                    try {
                        const chartData = await fetchMarketChartByInterval(asset.id, marketInterval);
                        const cleanChartData = chartData.length > 1 ? chartData.slice(0, -1) : chartData;
                        return { ...asset, sparkline: cleanChartData };
                    } catch (e) {
                        console.error(`Failed to fetch ${marketInterval} data for ${asset.id}`);
                        return asset;
                    }
                })
            );
            setItems(assetsWithCharts);
        } else {
            setItems(allAssets);
        }

        // Check for stop-loss/take-profit triggers
        allAssets.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });

        setLoading(false);
    };

    const updatePricesOnly = async () => {
        // Fetch ONLY prices (lighter payload)
        const priceUpdates = await fetchCryptoMarket(true); // pricesOnly = true

        setItems(prevItems => {
            const newFlashes: Record<string, 'up' | 'down' | null> = {};
            const newPrevPrices: Record<string, number> = { ...prevPrices };

            const updatedItems = prevItems.map(item => {
                const update = priceUpdates.find(u => u.id === item.id);
                if (update) {
                    // Check for price change
                    if (update.price > item.price) {
                        newFlashes[item.id] = 'up';
                    } else if (update.price < item.price) {
                        newFlashes[item.id] = 'down';
                    }
                    newPrevPrices[item.id] = item.price;

                    // Update sparkline locally
                    let newSparkline = item.sparkline;
                    if (newSparkline && newSparkline.length > 0) {
                        const newPoint = { price: update.price, date: new Date().toISOString() };
                        newSparkline = [...newSparkline, newPoint].slice(-90); // Keep last 90 points
                    }

                    // Merge new price data and updated sparkline
                    return {
                        ...item,
                        price: update.price,
                        change24h: update.change24h,
                        high24h: update.high24h,
                        low24h: update.low24h,
                        sparkline: newSparkline
                    };
                }
                return item;
            });

            setPriceFlashes(newFlashes);
            setPrevPrices(newPrevPrices);

            // Clear flashes after animation
            setTimeout(() => {
                setPriceFlashes({});
            }, 1000);

            return updatedItems;
        });

        // Check triggers with new prices
        priceUpdates.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });
    };

    // Initial Load
    useEffect(() => {
        loadFullData();
    }, []);

    // Price Update Interval (60 seconds)
    useEffect(() => {
        const interval = setInterval(updatePricesOnly, 60000);
        return () => clearInterval(interval);
    }, []);

    // Initial Load only
    useEffect(() => {
        loadFullData();
    }, [marketInterval, skills.multiTimeframe]);

    // Sync score with backend if logged in
    useEffect(() => {
        if (user) {
            const portfolioValue = portfolio.reduce((acc, item) => {
                const marketItem = items.find(i => i.id === item.id);
                return acc + (marketItem ? marketItem.price * item.amount : 0);
            }, 0);
            const totalValue = balance + portfolioValue;

            updateScore(user.username, totalValue);
        }
    }, [user, balance, portfolio, items]);



    // Calculate Net Worth and PnL
    const currentPortfolioValue = portfolio.reduce((acc, item) => {
        const marketItem = items.find(i => i.id === item.id);
        return acc + (marketItem ? marketItem.price * item.amount : 0);
    }, 0);

    const leveragedEquity = leveragedPositions.reduce((acc, pos) => {
        const marketItem = items.find(i => i.id === pos.assetId);
        if (!marketItem) return acc;
        const currentValue = marketItem.price * pos.amount;
        const borrowed = (pos.entryPrice * pos.amount) * (pos.leverage - 1) / pos.leverage;
        return acc + (currentValue - borrowed);
    }, 0);

    const shortEquity = shortPositions.reduce((acc, pos) => {
        const marketItem = items.find(i => i.id === pos.assetId);
        if (!marketItem) return acc;
        const pnl = (pos.entryPrice - marketItem.price) * pos.amount;
        return acc + (pos.marginLocked + pnl);
    }, 0);

    const totalNetWorth = balance + currentPortfolioValue + leveragedEquity + shortEquity;

    // Calculate PnL of open positions
    const portfolioCost = portfolio.reduce((acc, item) => acc + (item.amount * item.avgPrice), 0);
    const portfolioPnL = currentPortfolioValue - portfolioCost;

    const leveragedPnL = leveragedPositions.reduce((acc, pos) => {
        const marketItem = items.find(i => i.id === pos.assetId);
        if (!marketItem) return acc;
        return acc + (marketItem.price - pos.entryPrice) * pos.amount;
    }, 0);

    const shortPnL = shortPositions.reduce((acc, pos) => {
        const marketItem = items.find(i => i.id === pos.assetId);
        if (!marketItem) return acc;
        return acc + (pos.entryPrice - marketItem.price) * pos.amount;
    }, 0);

    const totalPnL = portfolioPnL + leveragedPnL + shortPnL;
    const totalPnLPercent = (totalNetWorth - totalPnL) > 0 ? (totalPnL / (totalNetWorth - totalPnL)) * 100 : 0;

    return (
        <div className="space-y-4 pb-24"> {/* Removed extra top padding, AppLayout handles it */}
            {/* Balance Card - Scrollable */}
            <div className="px-4 pt-0 pb-2">
                <div id="tutorial-balance-card" className="rounded-3xl overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
                    {/* Strict 3D Background */}
                    <div className="absolute inset-0 bg-[#0f172a]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                    {/* 3D Glass Effect Overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] rounded-3xl pointer-events-none"></div>

                    <div className="relative p-6 text-white">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                    {t('net_worth')}
                                </h2>
                                <p className="text-4xl font-black tracking-tight text-white drop-shadow-lg">
                                    ${totalNetWorth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className={`px-2 py-1 rounded-md text-xs font-bold border ${totalPnL >= 0 ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                        {totalPnL >= 0 ? '+' : ''}{totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <span className={`text-xs font-bold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        ({totalPnLPercent.toFixed(2)}%)
                                    </span>
                                    {loan > 0 && (
                                        <span className="text-xs font-bold text-red-300/80 border-l border-white/10 pl-3">
                                            Loan: ${loan.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={loadFullData}
                                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95 shadow-lg"
                            >
                                <RefreshCcw size={16} className="text-white/70" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {/* Portfolio Manager Badge */}
                            <div
                                onClick={() => !skills.portfolioManager && navigate('/skills')}
                                className={`px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer select-none
                                    ${skills.portfolioManager
                                        ? 'bg-gradient-to-b from-emerald-500/10 to-emerald-900/20 border-emerald-500/20 text-emerald-400 shadow-[0_4px_12px_rgba(16,185,129,0.1)]'
                                        : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:border-white/10'}`}
                            >
                                {skills.portfolioManager ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                        {getDiversificationBonus() > 1 ? t('diversity_bonus') : t('diversity_active')}
                                    </>
                                ) : (
                                    <>
                                        <Lock size={10} />
                                        {t('portfolio_mgr')}
                                    </>
                                )}
                            </div>

                            {/* Day Trader Badge */}
                            <div
                                onClick={() => !skills.dayTrader && navigate('/skills')}
                                className={`px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer select-none
                                    ${skills.dayTrader
                                        ? 'bg-gradient-to-b from-blue-500/10 to-blue-900/20 border-blue-500/20 text-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.1)]'
                                        : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:border-white/10'}`}
                            >
                                {skills.dayTrader ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                        {tradesToday} {t('trades')}
                                    </>
                                ) : (
                                    <>
                                        <Lock size={10} />
                                        {t('day_trader')} ({tradesToday}/50)
                                    </>
                                )}
                            </div>

                            {/* Risk Manager Badge */}
                            <div
                                onClick={() => !skills.riskManager && navigate('/skills')}
                                className={`px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer select-none
                                    ${skills.riskManager
                                        ? 'bg-gradient-to-b from-purple-500/10 to-purple-900/20 border-purple-500/20 text-purple-400 shadow-[0_4px_12px_rgba(168,85,247,0.1)]'
                                        : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:border-white/10'}`}
                            >
                                {skills.riskManager ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                                        {t('risk_protected')}
                                    </>
                                ) : (
                                    <>
                                        <Lock size={10} />
                                        {t('risk_mgr')}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Assets Section */}
            {allPositions.length > 0 && (
                <div className="px-4">
                    <h3 className="text-sm font-bold opacity-70 mb-3" style={{ color: 'var(--text-primary)' }}>{t('your_assets')}</h3>
                    <div className="flex gap-2 mb-3">
                        {allPositions.some(p => p.type !== 'short') && (
                            <button
                                onClick={() => navigate('/trade/batch?type=long')}
                                className="flex-1 py-2 rounded-xl bg-violet-500/10 text-violet-500 font-bold text-xs hover:bg-violet-500/20 transition-colors"
                            >
                                {t('close_all_longs')}
                            </button>
                        )}
                        {allPositions.some(p => p.type === 'short') && (
                            <button
                                onClick={() => navigate('/trade/batch?type=short')}
                                className="flex-1 py-2 rounded-xl bg-blue-500/10 text-blue-500 font-bold text-xs hover:bg-blue-500/20 transition-colors"
                            >
                                {t('close_all_shorts')}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 pb-2">
                        {allPositions.map((pos) => {
                            const item = items.find(i => i.id === pos.assetId);
                            if (!item) return null;

                            // Calculate PnL
                            let pnl = 0;
                            let pnlPercent = 0;
                            const currentVal = item.price * pos.amount;
                            const entryVal = pos.entryPrice * pos.amount;

                            if (pos.type === 'short') {
                                pnl = entryVal - currentVal;
                                pnlPercent = (pnl / entryVal) * 100;
                            } else {
                                pnl = currentVal - entryVal;
                                pnlPercent = (pnl / entryVal) * 100;
                            }
                            return (
                                <div
                                    key={pos.uniqueId}
                                    onClick={() => navigate(`/stock/${pos.assetId}`)}
                                    className="w-full p-4 rounded-2xl backdrop-blur-md relative overflow-hidden group cursor-pointer"
                                    style={{
                                        backgroundColor: 'var(--card-bg)'
                                    }}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.symbol}</span>
                                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${pos.type === 'short' ? 'bg-orange-500/20 text-orange-500' :
                                                    pos.type === 'leverage' ? 'bg-purple-500/20 text-purple-500' :
                                                        'bg-blue-500/20 text-blue-500'
                                                    }`}>
                                                    {pos.type === 'short' ? t('short') :
                                                        pos.type === 'leverage' ? t('leverage_fmt', { x: pos.leverage }) :
                                                            t('long')}
                                                </span>
                                            </div>
                                            <div className="text-xs opacity-60" style={{ color: 'var(--text-primary)' }}>
                                                {pos.amount} • {t('avg_price')} ${formatPrice(pos.entryPrice)}
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className={`text-sm font-bold flex items-center justify-end gap-1 ${pnl >= 0 ? 'text-green-500' : 'text-orange-500'}`}>
                                                {pnl >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                                {pnl >= 0 ? '+' : '-'}${item.price >= 1 ? Math.abs(pnl).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : formatPrice(Math.abs(pnl))}
                                            </div>
                                            <div className={`text-xs font-medium ${pnl >= 0 ? 'text-green-500/70' : 'text-orange-500/70'}`}>
                                                ({pnlPercent.toFixed(2)}%)
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (pos.type === 'short') {
                                                navigate(`/trade/${pos.assetId}?type=buy`); // Buy to cover short
                                            } else {
                                                navigate(`/trade/${pos.assetId}?type=sell`); // Sell long/leverage
                                            }
                                        }}
                                        className={`w-full py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 ${pos.type === 'short'
                                            ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-500'
                                            : 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-500'
                                            }`}
                                    >
                                        {pos.type === 'short' ? t('close_short') : t('sell_position')}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}



            {/* Category Tabs */}
            <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2 justify-start pb-2">
                    {[
                        { id: 'popular', label: t('cat_popular') },
                        { id: 'stock', label: t('cat_stocks') },
                        { id: 'crypto', label: t('cat_crypto') },
                        { id: 'index', label: t('cat_indices') },
                        { id: 'future', label: t('cat_futures') },
                        { id: 'forex', label: t('cat_forex') },
                        { id: 'commodity', label: t('cat_commodities') }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white/5 text-gray-500 hover:bg-white/10'
                                }`}
                            style={{
                                color: activeTab === tab.id ? '#ffffff' : 'var(--text-primary)',
                                opacity: activeTab === tab.id ? 1 : 0.6
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Country Filter for Stocks */}
            {activeTab === 'stock' && (
                <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2 justify-start pb-2">
                        {COUNTRIES.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setSelectedCountry(country.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${selectedCountry === country.id
                                    ? 'bg-blue-500/20 text-blue-500 border border-blue-500/50'
                                    : 'bg-white/5 text-gray-500 hover:bg-white/10 border border-transparent'
                                    }`}
                            >
                                {t(country.label)}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-2 grid-cols-1 px-1">
                    {items
                        .filter(item => {
                            if (activeTab === 'popular') return POPULAR_IDS.includes(item.id);
                            if (activeTab === 'stock') {
                                if (item.type !== 'stock') return false;
                                if (selectedCountry === 'all') return true;
                                return getCountry(item.symbol) === selectedCountry;
                            }
                            return item.type === activeTab;
                        })
                        .map((item, index) => {
                            const portfolioItem = portfolio.find(p => p.id === item.id);
                            const leveragedAmount = leveragedPositions
                                .filter(p => p.assetId === item.id)
                                .reduce((sum, p) => sum + p.amount, 0);
                            const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                            // Flash Effect
                            const flash = priceFlashes[item.id];
                            const flashClass = flash === 'up' ? 'bg-green-500/20' : flash === 'down' ? 'bg-red-500/20' : '';

                            return (
                                <div
                                    key={item.id}
                                    id={index === 0 ? 'tutorial-first-stock-item' : `tutorial-stock-item-${item.id}`}
                                    onClick={() => navigate(`/stock/${item.id}`)}
                                    className={`group rounded-2xl p-3 shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden ${flashClass}`}
                                    style={{ backgroundColor: flash ? undefined : 'var(--card-bg)', borderColor: 'var(--card-border)', transition: 'background-color 0.5s ease' }}
                                >
                                    <div className="flex justify-between items-center">
                                        {/* Left Content: Name + Ticker */}
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-lg leading-tight truncate" style={{ color: 'var(--text-primary)' }}>{item.name}</h3>
                                                <p className="text-xs font-medium opacity-60" style={{ color: 'var(--text-primary)' }}>{item.symbol}</p>

                                            </div>
                                        </div>

                                        {/* Right Content: Price + Change */}
                                        <div className="text-right shrink-0">
                                            <p className="font-black text-lg" style={{ color: 'var(--text-primary)' }}>${formatPrice(item.price)}</p>
                                            <p className={`text-xs font-bold ${item.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                                            </p>
                                        </div>
                                    </div>

                                    {/* Always Visible Action Buttons */}
                                    <div className="flex gap-2 mt-4 pt-3 border-t" style={{ borderColor: 'var(--card-border)' }}>
                                        {owned > 0 ? (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=sell`); }}
                                                className="flex-1 px-3 py-1.5 rounded-lg bg-violet-50 text-violet-600 font-bold text-xs hover:bg-violet-100 transition-all"
                                            >
                                                {t('sell')}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (skills.shortSelling) {
                                                        navigate(`/trade/${item.id}?type=short`);
                                                    } else {
                                                        navigate('/skills');
                                                    }
                                                }}
                                                className={`flex-1 px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1 ${skills.shortSelling
                                                    ? 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                {t('short')} {!skills.shortSelling && <Lock size={10} />}
                                            </button>
                                        )}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=buy`); }}
                                            className="flex-1 px-3 py-1.5 rounded-lg bg-black text-white font-bold text-xs hover:bg-gray-800 transition-all"
                                        >
                                            {t('buy')}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};
