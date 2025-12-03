import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Lock } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, type MarketItem } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { AssetIcon } from '../../components/ui/AssetIcon';

export const FavoritesPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { favorites, portfolio, leveragedPositions, skills } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async (isBackground = false) => {
            if (!isBackground) setLoading(true);
            try {
                const allAssets = await fetchCryptoMarket(true); // pricesOnly = true is enough for list
                setItems(allAssets.filter(item => favorites.includes(item.id)));
            } catch (error) {
                console.error("Failed to load favorites", error);
            } finally {
                if (!isBackground) setLoading(false);
            }
        };
        loadData();

        const interval = setInterval(() => loadData(true), 10000);
        return () => clearInterval(interval);
    }, [favorites]);

    return (
        <div className="space-y-4 pb-24 px-4 pt-4">
            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft />
                </button>
                <h1 className="text-2xl font-bold">{t('selected_assets', 'Selected Assets')}</h1>
            </div>

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : items.length > 0 ? (
                <div className="grid gap-2 grid-cols-1">
                    {items.map((item) => {
                        const portfolioItem = portfolio.find(p => p.id === item.id);
                        const leveragedAmount = leveragedPositions
                            .filter(p => p.assetId === item.id)
                            .reduce((sum, p) => sum + p.amount, 0);
                        const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                        return (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/stock/${item.id}`)}
                                className="group rounded-2xl p-3 shadow-sm border border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <AssetIcon symbol={item.symbol} type={item.type} className="w-10 h-10 rounded-xl shadow-sm" />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-base leading-tight truncate" style={{ color: 'var(--text-primary)' }}>{item.name}</h3>
                                            <p className="text-xs font-medium opacity-60" style={{ color: 'var(--text-primary)' }}>{item.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="font-black text-base" style={{ color: 'var(--text-primary)' }}>${formatPrice(item.price)}</p>
                                        <p className={`text-xs font-bold ${item.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
                                    {owned > 0 ? (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=sell`); }}
                                            className="flex-1 px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-500 font-bold text-xs hover:bg-violet-500/20 transition-all"
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
                                                : 'bg-gray-100/10 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            {t('short')} {!skills.shortSelling && <Lock size={10} />}
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=buy`); }}
                                        className="flex-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-all"
                                    >
                                        {t('buy')}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center opacity-50 py-12">
                    <p>{t('no_favorites', 'No favorites yet')}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-4 py-2 bg-blue-500 rounded-lg text-white font-bold text-sm"
                    >
                        {t('explore_market', 'Explore Market')}
                    </button>
                </div>
            )}
        </div>
    );
};
