import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Zap, TrendingUp, TrendingDown, DollarSign, Wallet, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/ui/Card';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import { fetchCryptoMarket, type MarketItem } from '../../services/api';
import { motion } from 'framer-motion';

export const TradePage: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const initialType = searchParams.get('type') as 'buy' | 'sell' | 'short' || 'buy';
    const navigate = useNavigate();

    const { balance, buyAsset, sellAsset, portfolio, skills } = useGameStore();
    const [asset, setAsset] = useState<MarketItem | null>(null);
    const [amount, setAmount] = useState('1');
    const [leverage, setLeverage] = useState(1);
    const [tradeType, setTradeType] = useState<'buy' | 'sell' | 'short'>(initialType);

    useEffect(() => {
        const loadData = async () => {
            if (!id) return;
            try {
                const market = await fetchCryptoMarket();
                const currentAsset = market.find(m => m.id === id);
                if (currentAsset) {
                    setAsset(currentAsset);
                }
            } catch (error) {
                console.error('Error loading asset:', error);
            }
        };
        loadData();
    }, [id]);

    if (!asset) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );

    const owned = portfolio.find(p => p.id === asset.id)?.amount || 0;
    const numAmount = parseFloat(amount) || 0;

    // Smart Sell Logic
    const amountToSell = tradeType === 'sell' ? Math.min(numAmount, owned) : 0;
    const amountToShort = tradeType === 'sell' ? Math.max(0, numAmount - owned) : (tradeType === 'short' ? numAmount : 0);

    // Calculate max affordable amount based on trade type
    const maxBuyAmount = (balance * leverage) / asset.price;
    // For smart sell, max short amount considers proceeds from selling owned assets
    const estimatedSellProceeds = owned * asset.price;
    const maxSmartSellAmount = owned + ((balance + estimatedSellProceeds) * leverage) / asset.price;
    const maxShortAmount = (balance * leverage) / asset.price;

    const totalCost = (numAmount * asset.price) / leverage;
    const canBuy = balance >= totalCost;

    // Short checks
    // If selling and flipping to short, we use projected balance
    const projectedBalance = balance + (amountToSell * asset.price);
    const marginRequired = (amountToShort * asset.price) / leverage;
    const canShort = skills.shortSelling && marginRequired <= projectedBalance;

    const handleTrade = () => {
        if (tradeType === 'buy') {
            if (canBuy) {
                buyAsset(asset.id, asset.price, numAmount, leverage);
                navigate(-1);
            }
        } else if (tradeType === 'sell') {
            // Smart Sell: Sell owned first, then short the rest
            if (amountToSell > 0) {
                sellAsset(asset.id, asset.price, amountToSell);
            }
            if (amountToShort > 0) {
                if (canShort) {
                    sellAsset(asset.id, asset.price, amountToShort, undefined, true, leverage);
                }
            }
            navigate(-1);
        } else if (tradeType === 'short') {
            if (canShort) {
                sellAsset(asset.id, asset.price, numAmount, undefined, true, leverage);
                navigate(-1);
            }
        }
    };

    const getThemeColor = () => {
        switch (tradeType) {
            case 'buy': return 'text-green-600';
            case 'sell': return 'text-red-600';
            case 'short': return 'text-yellow-600';
            default: return 'text-blue-600';
        }
    };

    const getBgColor = () => {
        switch (tradeType) {
            case 'buy': return 'bg-green-50';
            case 'sell': return 'bg-red-50';
            case 'short': return 'bg-yellow-50';
            default: return 'bg-blue-50';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <ArrowLeft size={24} className="text-gray-600" />
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                {asset.name}
                                <span className="text-sm font-normal text-gray-500">{asset.symbol}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                        <Wallet size={16} className="text-gray-500" />
                        <span className="font-bold text-gray-900">${formatPrice(balance)}</span>
                    </div>
                </div>
                {!skills.dayTrader && (
                    <div className="max-w-2xl mx-auto px-4 pb-2">
                        <p className="text-xs text-center text-gray-400">
                            {t('daily_trades')}: {useGameStore.getState().tradesToday} / 50
                        </p>
                    </div>
                )}
            </div>

            <div className="max-w-2xl mx-auto p-4 space-y-6">
                {/* Trade Type Selector */}
                <div className="grid grid-cols-3 gap-2 bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
                    {(['buy', 'sell', 'short'] as const).map((type) => (
                        <button
                            key={type}
                            onClick={() => setTradeType(type)}
                            className={`py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${tradeType === type
                                ? type === 'buy' ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                                    : type === 'sell' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                                        : 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30'
                                : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {type === 'buy' && <TrendingUp size={16} />}
                            {type === 'sell' && <DollarSign size={16} />}
                            {type === 'short' && <TrendingDown size={16} />}
                            {t(type === 'short' ? 'short_sell' : type)}
                        </button>
                    ))}
                </div>

                {/* Main Trading Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    {/* Price Header */}
                    <div className={`p-6 ${getBgColor()} border-b border-gray-100`}>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-sm font-medium opacity-60 mb-1">{t('market_price')}</p>
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-4xl font-bold text-gray-900">${formatPrice(asset.price)}</h2>
                                    <span className={`text-sm font-bold ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium opacity-60 mb-1">{t('your_position')}</p>
                                <p className="text-xl font-bold text-gray-900">{owned} {asset.symbol}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Amount Input */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-500">{t('amount_to')} {t(tradeType === 'short' ? 'short_sell' : tradeType)}</label>
                                {tradeType !== 'sell' && (
                                    <button
                                        onClick={() => setAmount(Math.floor(tradeType === 'buy' ? maxBuyAmount : maxShortAmount).toString())}
                                        className={`text-xs font-bold px-2 py-1 rounded-md ${getBgColor()} ${getThemeColor()} hover:opacity-80 transition-opacity`}
                                    >
                                        {t('max')}: {Math.floor(tradeType === 'buy' ? maxBuyAmount : maxShortAmount)}
                                    </button>
                                )}
                                {tradeType === 'sell' && (
                                    <button
                                        onClick={() => setAmount(Math.floor(maxSmartSellAmount).toString())}
                                        className={`text-xs font-bold px-2 py-1 rounded-md ${getBgColor()} ${getThemeColor()} hover:opacity-80 transition-opacity`}
                                    >
                                        {t('max_flip')}: {Math.floor(maxSmartSellAmount)}
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setAmount(Math.max(1, parseFloat(amount) - 1).toString())}
                                    className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-2xl font-bold hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-600"
                                >
                                    -
                                </button>
                                <div className="flex-1 relative">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full h-14 text-center font-bold text-3xl outline-none bg-transparent text-gray-900 placeholder-gray-300"
                                        placeholder="0"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                                        <div className={`h-full ${tradeType === 'buy' ? 'bg-green-500' : tradeType === 'sell' ? 'bg-red-500' : 'bg-yellow-500'} transition-all`} style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAmount((parseFloat(amount) + 1).toString())}
                                    className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-2xl font-bold hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-600"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Leverage Selector */}
                        {(tradeType === 'buy' || tradeType === 'short' || (tradeType === 'sell' && amountToShort > 0)) && skills.leverageTrading && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap size={16} className="text-purple-500" />
                                    <label className="text-sm font-bold text-gray-500">{t('leverage_multiplier')}</label>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[1, 2].map((lev) => (
                                        <button
                                            key={lev}
                                            onClick={() => setLeverage(lev)}
                                            className={`py-3 rounded-xl font-bold transition-all border-2 ${leverage === lev
                                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                                : 'border-transparent bg-gray-50 text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {lev}x
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Order Summary */}
                        <div className="bg-white rounded-2xl p-5 space-y-3 border border-gray-100 shadow-sm">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('order_summary')}</h3>

                            {tradeType === 'sell' && amountToShort > 0 && (
                                <div className="bg-yellow-50 p-2 rounded-lg text-xs text-yellow-700 mb-2">
                                    <span className="font-bold">{t('smart_sell')}:</span> {t('sell')} {amountToSell} {t('your_position')}, {t('short_sell')} {amountToShort}
                                </div>
                            )}

                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">{t('asset_value')}</span>
                                <span className="font-medium">${formatPrice(numAmount * asset.price)}</span>
                            </div>

                            {(leverage > 1 && (tradeType === 'buy' || amountToShort > 0)) && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-purple-600 flex items-center gap-1"><Zap size={12} /> Leverage</span>
                                    <span className="font-bold text-purple-600">{leverage}x</span>
                                </div>
                            )}

                            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                                <span className="text-sm font-bold text-gray-700">
                                    {tradeType === 'buy' ? t('total_cost') :
                                        tradeType === 'short' ? t('margin_required') :
                                            amountToShort > 0 ? t('net_proceeds') : t('est_proceeds')}
                                </span>
                                <div className="text-right">
                                    <span className={`text-xl font-bold ${tradeType === 'buy' ? (canBuy ? 'text-gray-900' : 'text-red-500') :
                                        (tradeType === 'short' || amountToShort > 0) ? (canShort ? 'text-gray-900' : 'text-red-500') :
                                            'text-green-600'
                                        }`}>
                                        ${formatPrice(
                                            tradeType === 'buy' ? totalCost :
                                                tradeType === 'short' ? marginRequired :
                                                    (amountToSell * asset.price) - marginRequired // Net for smart sell
                                        )}
                                    </span>
                                    {(tradeType === 'short' || amountToShort > 0) && !canShort && (
                                        <p className="text-xs text-red-500 mt-1">{t('insufficient_balance')} (Need {Math.round(100 / leverage)}% margin)</p>
                                    )}
                                    {tradeType === 'buy' && !canBuy && (
                                        <p className="text-xs text-red-500 mt-1">{t('insufficient_balance')}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={handleTrade}
                            disabled={
                                tradeType === 'buy' ? !canBuy :
                                    tradeType === 'sell' ? (amountToShort > 0 && !canShort) :
                                        !canShort
                            }
                            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all transform active:scale-[0.98] ${tradeType === 'buy'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-500/30 hover:shadow-green-500/40'
                                : tradeType === 'sell'
                                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-red-500/30 hover:shadow-red-500/40'
                                    : 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-yellow-500/30 hover:shadow-yellow-500/40'
                                } disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none`}
                        >
                            {tradeType === 'buy' ? `${t('buy')} ${asset.symbol}` :
                                tradeType === 'sell' ? (amountToShort > 0 ? `${t('sell')} & ${t('short_sell')} ${asset.symbol}` : `${t('sell')} ${asset.symbol}`) :
                                    `${t('short_sell')} ${asset.symbol}`}
                        </button>
                    </div>
                </motion.div>

                {/* Market Stats / Info */}
                <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 !bg-white border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-gray-500">
                            <BarChart3 size={16} />
                            <span className="text-xs font-bold uppercase">{t('week_high').replace('52 ', '24h ')}</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">${formatPrice(asset.high24h || asset.price * 1.05)}</p>
                    </Card>
                    <Card className="p-4 !bg-white border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-gray-500">
                            <BarChart3 size={16} />
                            <span className="text-xs font-bold uppercase">{t('week_low').replace('52 ', '24h ')}</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">${formatPrice(asset.low24h || asset.price * 0.95)}</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
