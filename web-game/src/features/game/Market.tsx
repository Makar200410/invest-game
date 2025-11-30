import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RefreshCcw, Lock, TrendingUp, TrendingDown } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, fetchMarketChartByInterval, type MarketItem, updateScore } from '../../services/api';
import { formatPrice } from '../../utils/format';


export const Market: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { balance, loan, portfolio, leveragedPositions, shortPositions, user, skills, tradesToday, getDiversificationBonus, checkOrders } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [marketInterval, setMarketInterval] = useState<string>('1d'); // Default to daily
    const [activeTab, setActiveTab] = useState<string>('all');

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
                <div id="tutorial-balance-card" className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-purple-600/60 to-indigo-700/60"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                    <div className="relative p-5 text-white">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h2 className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">{t('net_worth')}</h2>
                                <p className="text-3xl font-black tracking-tight">
                                    ${totalNetWorth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-sm font-bold ${totalPnL >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                                        {totalPnL >= 0 ? '+' : ''}{totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({totalPnLPercent.toFixed(2)}%)
                                    </span>
                                    {loan > 0 && (
                                        <span className="text-sm font-bold text-red-200 opacity-80 border-l border-white/20 pl-2">
                                            Loan: ${loan.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={loadFullData}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                            >
                                <RefreshCcw size={18} className="text-white/80" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {/* Portfolio Manager Badge */}
                            <div
                                onClick={() => !skills.portfolioManager && navigate('/skills')}
                                className={`px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold flex items-center gap-1.5 ${skills.portfolioManager ? 'bg-white/10 border-white/10 text-green-100' : 'bg-black/20 border-white/5 text-white/40 cursor-pointer hover:bg-white/5 transition-colors'}`}
                            >
                                {skills.portfolioManager ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
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
                                className={`px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold flex items-center gap-1.5 ${skills.dayTrader ? 'bg-white/10 border-white/10 text-blue-100' : 'bg-black/20 border-white/5 text-white/40 cursor-pointer hover:bg-white/5 transition-colors'}`}
                            >
                                {skills.dayTrader ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
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
                                className={`px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold flex items-center gap-1.5 ${skills.riskManager ? 'bg-white/10 border-white/10 text-purple-100' : 'bg-black/20 border-white/5 text-white/40 cursor-pointer hover:bg-white/5 transition-colors'}`}
                            >
                                {skills.riskManager ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
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
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
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
                                    className="min-w-[300px] p-4 rounded-2xl backdrop-blur-md relative overflow-hidden group cursor-pointer"
                                    style={{
                                        backgroundColor: 'var(--card-bg)'
                                    }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.symbol}</span>
                                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${pos.type === 'short' ? 'bg-red-500/20 text-red-500' :
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
                                            <div className={`text-sm font-bold flex items-center justify-end gap-1 ${pnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {pnl >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                                {pnl >= 0 ? '+' : ''}{formatPrice(pnl)}
                                            </div>
                                            <div className={`text-xs font-medium ${pnl >= 0 ? 'text-green-500/70' : 'text-red-500/70'}`}>
                                                ({pnlPercent.toFixed(2)}%)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Timeframe Selector */}
            <div className="px-4 pb-2">
                <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold opacity-70" style={{ color: 'var(--text-primary)' }}>{t('chart_timeframe')}</h3>
                            {!skills.multiTimeframe && (
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40 flex items-center gap-1">
                                    <Lock size={10} /> {t('locked')}
                                </span>
                            )}
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {['1m', '5m', '1h', '1d'].map((interval) => {
                                const isLocked = !skills.multiTimeframe && interval !== '1d';
                                return (
                                    <button
                                        key={interval}
                                        onClick={() => !isLocked ? setMarketInterval(interval) : navigate('/skills')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${marketInterval === interval
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-500/10 hover:bg-gray-500/20'
                                            } ${isLocked ? 'opacity-50 cursor-pointer' : ''}`}
                                        style={{ color: marketInterval === interval ? '#ffffff' : 'var(--text-primary)' }}
                                    >
                                        {interval}
                                        {isLocked && <span className="ml-1">🔒</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="px-4 pb-2">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {[
                        { id: 'all', label: 'All' },
                        { id: 'stock', label: 'Stocks' },
                        { id: 'crypto', label: 'Crypto' },
                        { id: 'index', label: 'Indices' },
                        { id: 'future', label: 'Futures' },
                        { id: 'forex', label: 'Forex' },
                        { id: 'commodity', label: 'Commodities' }
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

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-2 grid-cols-1 px-1">
                    {items
                        .filter(item => activeTab === 'all' || item.type === activeTab)
                        .map((item, index) => {
                            const portfolioItem = portfolio.find(p => p.id === item.id);
                            const leveragedAmount = leveragedPositions
                                .filter(p => p.assetId === item.id)
                                .reduce((sum, p) => sum + p.amount, 0);
                            const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                            // Create sparkline data with full history (approx 24h) - exclude last point
                            const fullHistory = item.sparkline || [];
                            // Remove the last point if it exists to avoid incomplete/incorrect data
                            // Then limit to last 90 points for consistent display
                            let chartHistory = fullHistory.length > 1 ? fullHistory.slice(0, -1) : fullHistory;
                            chartHistory = chartHistory.slice(-90); // Show last 90 points maximum
                            const prices = chartHistory.map(p => p.price);
                            const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
                            const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
                            const priceRange = maxPrice - minPrice || 1;
                            const chartColor = item.change24h >= 0 ? '#22c55e' : '#ef4444';

                            const sparklinePoints = chartHistory.map((point, idx) => {
                                const x = (idx / (chartHistory.length - 1)) * 100; // Width 100px
                                const y = 60 - ((point.price - minPrice) / priceRange) * 60; // Height 60px
                                return `${x},${y}`;
                            }).join(' ');

                            const fillPoints = `0,60 ${sparklinePoints} 100,60`;

                            // Determine layout: even index = chart right, odd index = chart left
                            const chartOnRight = index % 2 === 0;

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
                                    <div className={`flex gap-4 items-center ${chartOnRight ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Left/Right Content: Icon + Info */}
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-lg leading-tight truncate" style={{ color: 'var(--text-primary)' }}>{item.symbol}</h3>
                                                <p className="text-xs font-medium opacity-60" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
                                                {owned > 0 && (
                                                    <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-1 font-bold">
                                                        {owned} {t('owned_badge')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right/Left Content: Chart + Price */}
                                        <div className={`flex items-center gap-4 ${chartOnRight ? 'flex-row' : 'flex-row-reverse'}`}>
                                            {/* Larger Chart */}
                                            {chartHistory.length > 1 && (
                                                <svg width="100" height="60" className="overflow-visible opacity-70 shrink-0">
                                                    <defs>
                                                        <linearGradient id={`gradient-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor={chartColor} stopOpacity="0.3" />
                                                            <stop offset="100%" stopColor={chartColor} stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polygon
                                                        points={fillPoints}
                                                        fill={`url(#gradient-${item.id})`}
                                                    />
                                                    <polyline
                                                        points={sparklinePoints}
                                                        fill="none"
                                                        stroke={chartColor}
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}

                                            {/* Price Info */}
                                            <div className={`text-${chartOnRight ? 'right' : 'left'} shrink-0`}>
                                                <p className="font-black text-lg" style={{ color: 'var(--text-primary)' }}>${formatPrice(item.price)}</p>
                                                <p className={`text-xs font-bold ${item.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                    {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Always Visible Action Buttons */}
                                    <div className="flex gap-2 mt-4 pt-3 border-t" style={{ borderColor: 'var(--card-border)' }}>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=sell`); }}
                                            disabled={owned <= 0}
                                            className="flex-1 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                        >
                                            {t('sell')}
                                        </button>
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
