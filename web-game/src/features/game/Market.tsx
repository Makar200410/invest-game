import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrendingUp, TrendingDown, RefreshCcw } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, type MarketItem, updateScore } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';

export const Market: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { balance, loan, buyAsset, sellAsset, portfolio, leveragedPositions, user, skills, tradesToday, getDiversificationBonus, checkOrders } = useGameStore();
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

    const handleTrade = (item: MarketItem, type: 'buy' | 'sell') => {
        if (type === 'buy') {
            buyAsset(item.id, item.price, 1);
        } else {
            sellAsset(item.id, item.price, 1);
        }
    };

    return (
        <div className="space-y-6 pb-24">
            <Card className="sticky top-20 z-40 backdrop-blur-md border-white/20 transition-colors duration-300"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <h2 className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>{t('balance')}</h2>
                        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        {loan > 0 && (
                            <p className="text-sm font-bold text-red-500 mt-1">
                                Loan: ${loan.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                        )}
                        <div className="flex gap-3 mt-3">
                            {skills.portfolioManager && getDiversificationBonus() > 1 && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                    <span className="text-xs font-semibold text-green-600">+5% Diversity Bonus</span>
                                </div>
                            )}
                            {skills.dayTrader && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                    <span className="text-xs font-semibold text-blue-600">{tradesToday} Trades Today</span>
                                </div>
                            )}
                            {skills.riskManager && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                                    <span className="text-xs font-semibold text-purple-600">Risk Protection Active</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={loadData}
                        className="p-3 rounded-full hover:rotate-180 transition-all duration-500 shadow-sm hover:shadow-md"
                        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    >
                        <RefreshCcw size={20} />
                    </button>
                </div>
            </Card>

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {items.map((item) => {
                        const portfolioItem = portfolio.find(p => p.id === item.id);
                        const leveragedAmount = leveragedPositions
                            .filter(p => p.assetId === item.id)
                            .reduce((sum, p) => sum + p.amount, 0);
                        const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                        // Create full chart data using last 60 points
                        const chartHistory = item.sparkline?.slice(-60) || [];
                        const prices = chartHistory.map(p => p.price);
                        const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
                        const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
                        const priceRange = maxPrice - minPrice || 1;

                        const chartData = chartHistory.map((point, index) => ({
                            x: chartHistory.length > 1 ? (index / (chartHistory.length - 1)) * 100 : 50,
                            y: 100 - ((point.price - minPrice) / priceRange) * 100
                        }));

                        const pathData = chartData.length > 0 ? `M ${chartData.map(p => `${p.x} ${p.y}`).join(' L ')}` : '';

                        return (
                            <Card
                                key={item.id}
                                className="group hover:-translate-y-1 hover:shadow-2xl cursor-pointer transition-all backdrop-blur-md p-4"
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--card-border)',
                                    color: 'var(--text-primary)'
                                }}
                                onClick={() => navigate(`/stock/${item.id}`)}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    {/* Left Side: Info */}
                                    <div className="flex-1 min-w-0 pr-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className={`p-1.5 rounded-lg ${item.type === 'crypto' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'}`}>
                                                {item.type === 'crypto' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-base leading-tight truncate">{item.symbol}</h3>
                                                <p className="text-[10px] font-medium opacity-70 truncate">{item.name}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold ${item.change24h >= 0
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-red-100 text-red-600'
                                                }`}>
                                                {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xl font-black tracking-tight">${formatPrice(item.price)}</p>
                                            <p className="text-[10px] font-medium mt-0.5 opacity-70">
                                                Owned: <span style={{ color: 'var(--accent-color)' }}>{owned}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side: Chart */}
                                    <div className="w-32 h-24 opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                        {chartHistory.length > 0 ? (
                                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                <motion.path
                                                    d={pathData}
                                                    fill="none"
                                                    stroke="var(--accent-color)"
                                                    strokeWidth="2"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                />
                                            </svg>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-[10px] opacity-50">
                                                No data
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleTrade(item, 'sell'); }}
                                        disabled={owned <= 0}
                                        className="py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 disabled:opacity-50 disabled:hover:bg-red-50 transition-colors"
                                    >
                                        Sell
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleTrade(item, 'buy'); }}
                                        disabled={balance < item.price}
                                        className="py-1.5 rounded-lg text-white font-bold text-xs shadow-md disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
                                        style={{ backgroundColor: 'var(--accent-color)', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)' }}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
