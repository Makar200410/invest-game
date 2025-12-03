import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RefreshCcw, Lock, TrendingUp, TrendingDown, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, type MarketItem, updateScore } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { AssetIcon } from '../../components/ui/AssetIcon';

export const House: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { balance, loan, portfolio, leveragedPositions, shortPositions, user, skills, tradesToday, getDiversificationBonus, checkOrders, favorites } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);

    const [prevPrices, setPrevPrices] = useState<Record<string, number>>({});
    const [priceFlashes, setPriceFlashes] = useState<Record<string, 'up' | 'down' | null>>({});

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
        // Fetch prices only is enough for House if we don't show charts, 
        // but we need names and symbols which are in the full list or we can use a lighter fetch if available.
        // For consistency with existing logic, we'll fetch what Market did but maybe optimize later.
        // Actually, fetchCryptoMarket(false) fetches everything.
        const allAssets = await fetchCryptoMarket(false);
        setItems(allAssets);

        // Check for stop-loss/take-profit triggers
        allAssets.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });

        setLoading(false);
    };

    const updatePricesOnly = async () => {
        const priceUpdates = await fetchCryptoMarket(true); // pricesOnly = true

        setItems(prevItems => {
            const newFlashes: Record<string, 'up' | 'down' | null> = {};
            const newPrevPrices: Record<string, number> = { ...prevPrices };

            const updatedItems = prevItems.map(item => {
                const update = priceUpdates.find(u => u.id === item.id);
                if (update) {
                    if (update.price > item.price) {
                        newFlashes[item.id] = 'up';
                    } else if (update.price < item.price) {
                        newFlashes[item.id] = 'down';
                    }
                    newPrevPrices[item.id] = item.price;

                    return {
                        ...item,
                        price: update.price,
                        change24h: update.change24h,
                        high24h: update.high24h,
                        low24h: update.low24h,
                    };
                }
                return item;
            });

            setPriceFlashes(newFlashes);
            setPrevPrices(newPrevPrices);

            setTimeout(() => {
                setPriceFlashes({});
            }, 1000);

            return updatedItems;
        });

        priceUpdates.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });
    };

    useEffect(() => {
        loadFullData();
    }, []);

    useEffect(() => {
        const interval = setInterval(updatePricesOnly, 15000);
        return () => clearInterval(interval);
    }, []);

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

    // Calculations
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

    if (loading) {
        return (
            <div className="flex justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="space-y-3 pb-24">
            {/* Balance Card */}
            <div className="px-4 pt-0 pb-2">
                <div id="tutorial-balance-card" className="rounded-3xl overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
                    <div className="absolute inset-0 bg-[#0f172a]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] rounded-3xl pointer-events-none"></div>

                    <div className="relative p-3 text-white">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                    {t('net_worth')}
                                </h2>
                                <p className="text-3xl font-black tracking-tight text-white drop-shadow-lg">
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
                            {/* Selected Assets Badge */}
                            <div
                                onClick={() => navigate('/favorites')}
                                className="px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer select-none bg-gradient-to-b from-amber-500/10 to-amber-900/20 border-amber-500/20 text-amber-400 shadow-[0_4px_12px_rgba(245,158,11,0.1)] hover:bg-amber-500/20"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
                                {t('selected_assets', 'Selected Assets')} ({favorites.length})
                            </div>
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

            {/* Buy Assets Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="px-4"
            >
                <button
                    onClick={() => navigate('/')}
                    className="w-full group relative"
                >
                    {/* Animated Gradient Glow */}
                    {/* Animated Gradient Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-3xl opacity-50 blur transition duration-500"></div>

                    {/* Main Content */}
                    <div className="relative flex items-center justify-between bg-[#0f172a] p-4 rounded-3xl border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-4">
                            {/* Icon Container */}
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <BarChart2 size={24} className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                            </div>

                            {/* Text */}
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-md">{t('buy_assets')}</h3>
                                <p className="text-xs font-medium text-slate-400 group-hover:text-blue-300 transition-colors">{t('explore_market')}</p>
                            </div>
                        </div>

                        {/* Arrow Action */}
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowRight size={20} className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                </button>
            </motion.div>

            {/* Active Assets Section */}
            {allPositions.length > 0 ? (
                <div className="px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                            {t('your_assets')}
                        </h3>
                    </div>

                    <div className="flex gap-3 mb-4">
                        {allPositions.some(p => p.type !== 'short') && (
                            <button
                                onClick={() => navigate('/trade/batch?type=long')}
                                className="flex-1 relative overflow-hidden group bg-[#0f172a] border border-violet-500/30 hover:border-violet-500/50 rounded-2xl p-3 transition-all shadow-lg shadow-violet-900/10"
                            >
                                <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors"></div>
                                <div className="relative flex items-center justify-center gap-2">
                                    <span className="text-violet-400 font-bold text-xs uppercase tracking-wider">{t('close_all_longs')}</span>
                                </div>
                            </button>
                        )}
                        {allPositions.some(p => p.type === 'short') && (
                            <button
                                onClick={() => navigate('/trade/batch?type=short')}
                                className="flex-1 relative overflow-hidden group bg-[#0f172a] border border-blue-500/30 hover:border-blue-500/50 rounded-2xl p-3 transition-all shadow-lg shadow-blue-900/10"
                            >
                                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                                <div className="relative flex items-center justify-center gap-2">
                                    <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">{t('close_all_shorts')}</span>
                                </div>
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 pb-2">
                        {allPositions.map((pos) => {
                            const item = items.find(i => i.id === pos.assetId);
                            if (!item) return null;

                            const flash = priceFlashes[item.id];


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
                                    className="w-full group relative cursor-pointer"
                                >
                                    {/* Animated Gradient Glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-3xl opacity-50 blur transition duration-500"></div>

                                    <div className={`relative p-4 rounded-3xl border border-white/10 shadow-xl overflow-hidden transition-colors duration-300 ${flash === 'up' ? 'bg-emerald-900/90' : flash === 'down' ? 'bg-rose-900/90' : 'bg-[#0f172a]'}`}>
                                        {/* Price Flash Overlay - Removed as we are changing background directly */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                {/* Asset Icon / Symbol */}
                                                {/* Asset Icon / Symbol */}
                                                <AssetIcon symbol={item.symbol} type={item.type} className="w-10 h-10 rounded-xl shadow-inner" />

                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-base text-white tracking-tight">{item.name}</span>
                                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${pos.type === 'short' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/20' :
                                                            pos.type === 'leverage' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' :
                                                                'bg-blue-500/20 text-blue-400 border border-blue-500/20'
                                                            }`}>
                                                            {pos.type === 'short' ? t('short') :
                                                                pos.type === 'leverage' ? t('leverage_fmt', { x: pos.leverage }) :
                                                                    t('long')}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs font-medium text-slate-400 mt-0.5">
                                                        {pos.amount} • {t('avg_price')} ${formatPrice(pos.entryPrice)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <div className={`text-sm font-black flex items-center justify-end gap-1 drop-shadow-sm ${pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {pnl >= 0 ? <TrendingUp size={14} strokeWidth={3} /> : <TrendingDown size={14} strokeWidth={3} />}
                                                    {pnl >= 0 ? '+' : ''}${item.price >= 1 ? Math.abs(pnl).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : formatPrice(Math.abs(pnl))}
                                                </div>
                                                <div className={`text-xs font-bold ${pnl >= 0 ? 'text-emerald-500/60' : 'text-rose-500/60'}`}>
                                                    ({pnlPercent.toFixed(2)}%)
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (pos.type === 'short') {
                                                    navigate(`/trade/${pos.assetId}?type=buy`);
                                                } else {
                                                    navigate(`/trade/${pos.assetId}?type=sell`);
                                                }
                                            }}
                                            className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${pos.type === 'short'
                                                ? 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 text-blue-400'
                                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white'
                                                }`}
                                        >
                                            {pos.type === 'short' ? t('close_short') : t('sell_position')}
                                        </button>
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                </div>
            ) : (
                <div className="px-4 py-8 text-center opacity-50">
                    <p className="text-sm">{t('no_assets', 'No active assets')}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-4 py-2 rounded-xl bg-blue-500 text-white font-bold text-sm"
                    >
                        {t('go_to_market', 'Go to Market')}
                    </button>
                </div>
            )}
        </div>
    );
};
