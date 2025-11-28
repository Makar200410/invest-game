import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import { fetchCryptoMarket, type MarketItem } from '../../services/api';

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
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-color)]"></div>
        </div>
    );

    const owned = portfolio.find(p => p.id === asset.id)?.amount || 0;
    const numAmount = parseFloat(amount) || 0;

    // Smart Sell Logic
    const amountToSell = tradeType === 'sell' ? Math.min(numAmount, owned) : 0;
    const amountToShort = tradeType === 'sell' ? Math.max(0, numAmount - owned) : (tradeType === 'short' ? numAmount : 0);

    // Calculate max affordable amount based on trade type
    const maxBuyAmount = (balance * leverage) / asset.price;
    const maxShortAmount = (balance * leverage) / asset.price;

    const totalCost = (numAmount * asset.price) / leverage;
    const canBuy = balance >= totalCost;

    // Short checks
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

    return (
        <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Header */}
            <div className="shrink-0 sticky top-0 z-10 backdrop-blur-md" style={{ backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)' }}>
                <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} style={{ color: 'var(--text-primary)' }} />
                    </button>
                    <div className="text-center">
                        <h1 className="text-base font-bold leading-tight">
                            {asset.name}
                        </h1>
                        <p className="text-[10px] font-medium opacity-60">{asset.symbol}</p>
                    </div>
                    <div className="w-9" /> {/* Spacer for centering */}
                </div>
            </div>

            <div className="flex-1 max-w-md mx-auto w-full px-6 pb-6 flex flex-col justify-between overflow-y-auto">

                <div className="space-y-4">
                    {/* Balance Pill */}
                    <div className="flex justify-center pt-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <Wallet size={12} className="opacity-60" />
                            <span className="text-xs font-bold">${formatPrice(balance)}</span>
                        </div>
                    </div>

                    {/* Trade Type Selector */}
                    <div className="p-1 rounded-xl flex relative" style={{ backgroundColor: 'var(--card-bg)' }}>
                        {(['buy', 'sell', 'short'] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setTradeType(type)}
                                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all relative z-10 ${tradeType === type ? 'shadow-sm' : 'opacity-50 hover:opacity-80'}`}
                                style={{
                                    backgroundColor: tradeType === type ? 'var(--bg-primary)' : 'transparent',
                                    color: tradeType === type ? 'var(--text-primary)' : 'var(--text-primary)'
                                }}
                            >
                                {t(type === 'short' ? 'short_sell' : type)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Input Area */}
                <div className="text-center space-y-4 flex-1 flex flex-col justify-center py-2">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{t('amount_to')} {t(tradeType)}</p>

                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={() => setAmount(Math.max(1, parseFloat(amount) - 1).toString())}
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-light transition-colors"
                                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                            >
                                -
                            </button>
                            <div className="relative min-w-[100px]">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full text-center font-black text-5xl outline-none bg-transparent placeholder-opacity-30"
                                    style={{ color: 'var(--text-primary)' }}
                                    placeholder="0"
                                />
                            </div>
                            <button
                                onClick={() => setAmount((parseFloat(amount) + 1).toString())}
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-light transition-colors"
                                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                            {tradeType !== 'sell' && (
                                <button
                                    onClick={() => setAmount(Math.floor(tradeType === 'buy' ? maxBuyAmount : maxShortAmount).toString())}
                                    className="text-[10px] font-bold px-3 py-1 rounded-full border transition-colors opacity-60 hover:opacity-100"
                                    style={{ borderColor: 'var(--card-border)' }}
                                >
                                    {t('max')}: {Math.floor(tradeType === 'buy' ? maxBuyAmount : maxShortAmount)}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Leverage */}
                    {(tradeType === 'buy' || tradeType === 'short' || (tradeType === 'sell' && amountToShort > 0)) && skills.leverageTrading && (
                        <div className="flex justify-center gap-2 mt-2">
                            {[1, 2, 5].map((lev) => (
                                <button
                                    key={lev}
                                    onClick={() => setLeverage(lev)}
                                    className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border ${leverage === lev ? '' : 'opacity-50'}`}
                                    style={{
                                        backgroundColor: leverage === lev ? 'var(--text-primary)' : 'transparent',
                                        color: leverage === lev ? 'var(--bg-primary)' : 'var(--text-primary)',
                                        borderColor: leverage === lev ? 'transparent' : 'var(--card-border)'
                                    }}
                                >
                                    {lev}x
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-2xl border text-center transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <p className="text-[10px] uppercase font-bold mb-0.5 tracking-wider opacity-50">{t('market_price')}</p>
                            <p className="text-base font-black">${formatPrice(asset.price)}</p>
                        </div>
                        <div className="p-3 rounded-2xl border text-center transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <p className="text-[10px] uppercase font-bold mb-0.5 tracking-wider opacity-50">{t('total_cost')}</p>
                            <p className={`text-base font-black ${canBuy && canShort ? '' : 'text-red-500'}`}>
                                ${formatPrice(tradeType === 'buy' ? totalCost : tradeType === 'short' ? marginRequired : (amountToSell * asset.price) - marginRequired)}
                            </p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="pb-2">
                        <button
                            onClick={handleTrade}
                            disabled={
                                tradeType === 'buy' ? !canBuy :
                                    tradeType === 'sell' ? (amountToShort > 0 && !canShort) :
                                        !canShort
                            }
                            className={`w-full py-4 rounded-xl font-black text-base shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                            style={{
                                backgroundColor: tradeType === 'buy' ? 'var(--text-primary)' : tradeType === 'sell' ? '#ef4444' : '#eab308',
                                color: tradeType === 'buy' ? 'var(--bg-primary)' : '#ffffff'
                            }}
                        >
                            {tradeType === 'buy' ? t('buy') : tradeType === 'sell' ? t('sell') : t('short_sell')} {asset.symbol}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
