import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RefreshCcw } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, type MarketItem, updateScore } from '../../services/api';
import { formatPrice } from '../../utils/format';


export const Market: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { balance, loan, portfolio, leveragedPositions, shortPositions, user, skills, tradesToday, getDiversificationBonus, checkOrders } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        // Fetch ALL data from backend (crypto + stocks)
        const allAssets = await fetchCryptoMarket();
        setItems(allAssets);

        // Check for stop-loss/take-profit triggers
        allAssets.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });

        setLoading(false);
    };

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

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
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-purple-600/60 to-indigo-700/60"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                    <div className="relative p-6 text-white">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">{t('net_worth', 'Net Worth')}</h2>
                                <p className="text-4xl font-black tracking-tight">
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
                                onClick={loadData}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                            >
                                <RefreshCcw size={18} className="text-white/80" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skills.portfolioManager && getDiversificationBonus() > 1 && (
                                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-green-100 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                    +5% Diversity
                                </div>
                            )}
                            {skills.dayTrader && (
                                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-blue-100 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    {tradesToday} Trades
                                </div>
                            )}
                            {skills.riskManager && (
                                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-purple-100 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                    Risk Protected
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-2 grid-cols-1 px-3">
                    {items.map((item, index) => {
                        const portfolioItem = portfolio.find(p => p.id === item.id);
                        const leveragedAmount = leveragedPositions
                            .filter(p => p.assetId === item.id)
                            .reduce((sum, p) => sum + p.amount, 0);
                        const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                        // Create sparkline data with 12 points for hourly chart (assuming 5m interval)
                        const chartHistory = item.sparkline?.slice(-12) || [];
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

                        return (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/stock/${item.id}`)}
                                className="group rounded-2xl p-4 shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                            >
                                <div className={`flex gap-4 items-center ${chartOnRight ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Left/Right Content: Icon + Info */}
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-lg leading-tight truncate" style={{ color: 'var(--text-primary)' }}>{item.symbol}</h3>
                                            <p className="text-xs font-medium truncate opacity-60" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
                                            {owned > 0 && (
                                                <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-1 font-bold">
                                                    {owned} Owned
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right/Left Content: Chart + Price */}
                                    <div className={`flex items-center gap-4 ${chartOnRight ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Larger Chart */}
                                        {chartHistory.length > 1 && (
                                            <svg width="100" height="60" className="overflow-visible opacity-70 shrink-0">
                                                <polygon
                                                    points={fillPoints}
                                                    fill={chartColor}
                                                    fillOpacity="0.2"
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
