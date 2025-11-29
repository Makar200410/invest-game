import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Wallet, Lock, Shield } from 'lucide-react';
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
                <div className="max-w-md mx-auto px-4 h-12 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} style={{ color: 'var(--text-primary)' }} />
                    </button>
                    <div className="text-center">
                        <h1 className="text-sm font-bold leading-tight">
                            {asset.name}
                        </h1>
                        <p className="text-[10px] font-medium opacity-60">{asset.symbol}</p>
                    </div>
                    <div className="w-9" /> {/* Spacer for centering */}
                </div>
            </div>

            <div className="flex-1 max-w-md mx-auto w-full px-4 pb-4 flex flex-col gap-[180px] overflow-y-auto">

                <div className="space-y-1">
                    {/* Balance Pill */}
                    <div className="flex justify-center">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <Wallet size={12} className="opacity-60" />
                            <span className="text-xs font-bold">${formatPrice(balance)}</span>
                        </div>
                    </div>

                    {/* Trade Type Selector */}
                    <div className="p-1 rounded-xl flex relative" style={{ backgroundColor: 'var(--card-bg)' }}>
                        {(['buy', 'sell', 'short'] as const).map((type) => {
                            const isLocked = type === 'short' && !skills.shortSelling;
                            return (
                                <button
                                    key={type}
                                    onClick={() => setTradeType(type)}
                                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all relative z-10 flex items-center justify-center gap-1 ${tradeType === type ? 'shadow-sm' : 'opacity-50 hover:opacity-80'}`}
                                    style={{
                                        backgroundColor: tradeType === type ? 'var(--bg-primary)' : 'transparent',
                                        color: tradeType === type ? 'var(--text-primary)' : 'var(--text-primary)'
                                    }}
                                >
                                    {t(type === 'short' ? 'short_sell' : type)}
                                    {isLocked && <Lock size={10} />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Input Area */}
                <div className="text-center space-y-1 relative">
                    {/* Lock Overlay for Short Selling */}
                    {tradeType === 'short' && !skills.shortSelling && (
                        <div className="absolute inset-0 z-20 backdrop-blur-sm bg-black/10 rounded-xl flex flex-col items-center justify-center">
                            <Lock size={32} className="opacity-50 mb-2" />
                            <p className="text-xs font-bold opacity-70">Short Selling Locked</p>
                            <p className="text-[10px] opacity-50">Unlock skill to enable</p>
                        </div>
                    )}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{t('amount_to')} {t(tradeType)}</p>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => setAmount(Math.max(1, parseFloat(amount) - 1).toString())}
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-xl font-light transition-colors"
                                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                            >
                                -
                            </button>
                            <div className="relative min-w-[100px]">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full text-center font-black text-4xl outline-none bg-transparent placeholder-opacity-30"
                                    style={{ color: 'var(--text-primary)' }}
                                    placeholder="0"
                                />
                            </div>
                            <button
                                onClick={() => setAmount((parseFloat(amount) + 1).toString())}
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-xl font-light transition-colors"
                                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex justify-center gap-2 mt-1.5">
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
                    {(tradeType === 'buy' || tradeType === 'short' || (tradeType === 'sell' && amountToShort > 0)) && (
                        <div className="flex flex-col gap-1 mt-1">
                            <div className="flex justify-center gap-2">
                                {[1, 2, 5].map((lev) => {
                                    const isLocked = lev > 1 && !skills.leverageTrading;
                                    return (
                                        <button
                                            key={lev}
                                            onClick={() => !isLocked && setLeverage(lev)}
                                            disabled={isLocked}
                                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border flex items-center gap-1 ${leverage === lev ? '' : 'opacity-50'} ${isLocked ? 'cursor-not-allowed opacity-30' : ''}`}
                                            style={{
                                                backgroundColor: leverage === lev ? 'var(--text-primary)' : 'transparent',
                                                color: leverage === lev ? 'var(--bg-primary)' : 'var(--text-primary)',
                                                borderColor: leverage === lev ? 'transparent' : 'var(--card-border)'
                                            }}
                                        >
                                            {lev}x
                                            {isLocked && <Lock size={8} />}
                                        </button>
                                    );
                                })}
                            </div>
                            {!skills.leverageTrading && (
                                <p className="text-[10px] text-center opacity-40">Unlock Leverage Trading to use 2x/5x</p>
                            )}
                        </div>
                    )}
                </div>

                <div className="space-y-1.5">
                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-2xl border text-center transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <p className="text-[10px] uppercase font-bold mb-0.5 tracking-wider opacity-50">{t('market_price')}</p>
                            <p className="text-sm font-black">${formatPrice(asset.price)}</p>
                        </div>
                        <div className="p-2 rounded-2xl border text-center transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <p className="text-[10px] uppercase font-bold mb-0.5 tracking-wider opacity-50">{t('total_cost')}</p>
                            <p className={`text-sm font-black ${canBuy && canShort ? '' : 'text-red-500'}`}>
                                ${formatPrice(tradeType === 'buy' ? totalCost : tradeType === 'short' ? marginRequired : (amountToSell * asset.price) - marginRequired)}
                            </p>
                        </div>
                    </div>

                    {/* Risk Manager Info */}
                    <div className={`p-2 rounded-2xl border flex items-center justify-between px-3 transition-all ${skills.riskManager ? 'bg-green-500/10 border-green-500/20' : 'opacity-50 border-dashed'}`} style={{ borderColor: skills.riskManager ? undefined : 'var(--card-border)' }}>
                        <div className="flex items-center gap-2">
                            <Shield size={14} className={skills.riskManager ? 'text-green-500' : 'opacity-50'} />
                            <span className="text-xs font-bold">Risk Manager</span>
                        </div>
                        {skills.riskManager ? (
                            <span className="text-[10px] font-bold text-green-500">Active (-20% Loss)</span>
                        ) : (
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] font-bold opacity-50">Locked</span>
                                <Lock size={10} className="opacity-50" />
                            </div>
                        )}
                    </div>

                    {/* Action Button */}
                    <div className="pb-1">
                        <button
                            onClick={handleTrade}
                            disabled={
                                tradeType === 'buy' ? !canBuy :
                                    tradeType === 'sell' ? (amountToShort > 0 && !canShort) :
                                        !canShort
                            }
                            className={`w-full py-3 rounded-xl font-black text-sm shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
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
