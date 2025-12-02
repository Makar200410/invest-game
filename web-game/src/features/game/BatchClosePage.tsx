import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Wallet, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import { fetchCryptoMarket, type MarketItem } from '../../services/api';

export const BatchClosePage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type') as 'long' | 'short' || 'long';

    const { balance, portfolio, leveragedPositions, shortPositions, sellAsset, buyAsset } = useGameStore();
    const [marketItems, setMarketItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const market = await fetchCryptoMarket();
                setMarketItems(market);
            } catch (error) {
                console.error('Error loading market data:', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const positionsToClose = useMemo(() => {
        if (type === 'long') {
            const spots = portfolio.map(p => ({
                ...p,
                type: 'spot' as const,
                leverage: 1,
                uniqueId: `spot-${p.id}`
            }));
            const levs = leveragedPositions.map(p => ({
                id: p.assetId,
                amount: p.amount,
                avgPrice: p.entryPrice,
                type: 'leverage' as const,
                leverage: p.leverage,
                uniqueId: p.id
            }));
            return [...spots, ...levs];
        } else {
            return shortPositions.map(p => ({
                id: p.assetId,
                amount: p.amount,
                avgPrice: p.entryPrice,
                type: 'short' as const,
                leverage: p.leverage,
                uniqueId: p.id
            }));
        }
    }, [type, portfolio, leveragedPositions, shortPositions]);

    const summary = useMemo(() => {
        let totalValue = 0;
        let totalPnL = 0;

        const items = positionsToClose.map(pos => {
            const marketItem = marketItems.find(m => m.id === pos.id);
            if (!marketItem) return null;

            const currentVal = marketItem.price * pos.amount;
            const entryVal = pos.avgPrice * pos.amount;
            let pnl = 0;

            if (type === 'short') {
                pnl = entryVal - currentVal;
                // Cost to cover
                totalValue += currentVal;
            } else {
                pnl = currentVal - entryVal;
                // Value to receive
                totalValue += (currentVal - (pos.type === 'leverage' ? (entryVal * (pos.leverage - 1) / pos.leverage) : 0));
            }
            totalPnL += pnl;

            return {
                ...pos,
                marketItem,
                currentVal,
                pnl,
                pnlPercent: (pnl / entryVal) * 100
            };
        }).filter(Boolean);

        return { items, totalValue, totalPnL };
    }, [positionsToClose, marketItems, type]);

    const handleConfirm = () => {
        if (type === 'long') {
            // Sell all spots and leverages
            summary.items.forEach(item => {
                if (item && item.marketItem) {
                    if (item.type === 'leverage') {
                        sellAsset(item.id, item.marketItem.price, item.amount, item.uniqueId);
                    } else {
                        sellAsset(item.id, item.marketItem.price, item.amount);
                    }
                }
            });
        } else {
            // Cover all shorts
            summary.items.forEach(item => {
                if (item && item.marketItem) {
                    buyAsset(item.id, item.marketItem.price, item.amount, 1, item.uniqueId);
                }
            });
        }
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-color)]"></div>
            </div>
        );
    }

    if (positionsToClose.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div className="p-4 rounded-full bg-gray-500/10">
                    <Wallet size={48} className="opacity-50" />
                </div>
                <h2 className="text-xl font-bold">{t('no_positions', 'No positions found')}</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-bold transition-colors"
                >
                    {t('go_back', 'Go Back')}
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Header */}
            <div className="sticky top-0 z-10 backdrop-blur-md border-b border-white/5" style={{ backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)' }}>
                <div className="max-w-md mx-auto px-4 h-12 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="font-bold text-base">
                        {type === 'long' ? t('close_all_longs', 'Close All Longs') : t('close_all_shorts', 'Close All Shorts')}
                    </h1>
                    <div className="w-9" />
                </div>
            </div>

            <div className="flex-1 max-w-md mx-auto w-full p-4 pb-32 overflow-y-auto space-y-3">
                {/* Summary Card */}
                <div className="p-3 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl">
                    <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider mb-1">
                        {type === 'long' ? t('total_proceeds', 'Total Proceeds') : t('total_cost', 'Total Cost')}
                    </p>
                    <p className="text-2xl font-black mb-3">
                        ${formatPrice(summary.totalValue)}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold bg-black/20 w-fit px-2 py-1 rounded-lg backdrop-blur-sm">
                        <span>{t('total_pnl')}:</span>
                        <span className={summary.totalPnL >= 0 ? 'text-green-300' : 'text-red-300'}>
                            {summary.totalPnL >= 0 ? '+' : ''}{formatPrice(summary.totalPnL)}
                        </span>
                    </div>
                </div>

                {/* Warning for Shorts */}
                {type === 'short' && summary.totalValue > balance && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 items-start">
                        <AlertTriangle className="text-red-500 shrink-0" size={20} />
                        <div>
                            <p className="text-sm font-bold text-red-500">{t('insufficient_balance', 'Insufficient Balance')}</p>
                            <p className="text-xs opacity-70 mt-1">
                                {t('insufficient_balance_desc', 'You do not have enough cash to cover all short positions.')}
                            </p>
                        </div>
                    </div>
                )}

                {/* Assets List */}
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-1">{t('assets', 'Assets')}</h3>
                    {summary.items.map((item, idx) => (
                        item && (
                            <div key={idx} className="p-2 rounded-xl border border-white/5 bg-white/5 flex justify-between items-center">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm">{item.marketItem.symbol}</span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${item.type === 'short' ? 'bg-red-500/20 text-red-500' :
                                            item.type === 'leverage' ? 'bg-purple-500/20 text-purple-500' :
                                                'bg-blue-500/20 text-blue-500'
                                            }`}>
                                            {item.type === 'leverage' ? `${item.leverage}x` : item.type.toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="text-[10px] opacity-50 mt-0.5">
                                        {item.amount} @ ${formatPrice(item.marketItem.price)}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">${formatPrice(item.currentVal)}</p>
                                    <p className={`text-[10px] font-bold ${item.pnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.pnl >= 0 ? '+' : ''}{formatPrice(item.pnl)}
                                    </p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>

            {/* Action Button */}
            {createPortal(
                <div className="fixed bottom-[72px] left-0 right-0 px-4 pb-2 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none">
                    <div className="max-w-md mx-auto pointer-events-auto">
                        <button
                            onClick={handleConfirm}
                            disabled={type === 'short' && summary.totalValue > balance}
                            className={`w-full py-3 rounded-2xl font-black text-base shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${type === 'long'
                                ? 'bg-violet-500 hover:bg-violet-400 text-white shadow-violet-500/20'
                                : 'bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/20'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {type === 'long' ? t('confirm_sell_all', 'Confirm Sell All') : t('confirm_cover_all', 'Confirm Cover All')}
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
