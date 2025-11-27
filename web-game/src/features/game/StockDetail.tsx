import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/ui/Card';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import { fetchCryptoMarket, fetchMarketChart, fetchMarketChartByInterval, fetchIndicators, fetchFundamentals, type MarketItem } from '../../services/api';
import { OrderForm } from '../../components/trading/OrderForm';
import { getMarketSignal } from '../../utils/signalCalculator';

export const StockDetail: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { balance, buyAsset, portfolio, skills, shortPositions } = useGameStore();
    const [asset, setAsset] = useState<MarketItem | null>(null);
    const [history, setHistory] = useState<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [hoverData, setHoverData] = useState<{ price: number; date: string; index: number; open?: number; high?: number; low?: number; close?: number } | null>(null);
    const [interval, setIntervalState] = useState('5m');
    const [indicatorInterval, setIndicatorInterval] = useState('1d');
    const [chartType, setChartType] = useState<'candle' | 'line'>('candle');

    // Technical & Fundamental State
    const [indicators, setIndicators] = useState<any[]>([]);
    const [fundamentals, setFundamentals] = useState<any>(null);
    const [showRSI, setShowRSI] = useState(false);
    const [showMACD, setShowMACD] = useState(false);
    const [showBB, setShowBB] = useState(false);

    // Trading State
    // const [amount, setAmount] = useState('1');
    // const [leverage, setLeverage] = useState(1);

    // Filter short positions for this asset (safely)
    const assetShorts = (shortPositions || []).filter(p => p.assetId === id);

    useEffect(() => {
        const loadData = async () => {
            if (!id) return;
            // Don't set loading to true on every interval refresh to avoid flickering
            if (!asset) setLoading(true);

            try {
                // 1. Fetch Market Data (List)
                let currentAsset: MarketItem | undefined;
                try {
                    const market = await fetchCryptoMarket();
                    currentAsset = market.find(m => m.id === id);
                } catch (e) {
                    console.warn('Failed to fetch market list, trying to proceed with history...', e);
                }

                // 2. Fetch History (Chart)
                let chartHistory: any[] = [];
                try {
                    chartHistory = interval === '5m'
                        ? await fetchMarketChart(id)
                        : await fetchMarketChartByInterval(id, interval);
                } catch (e) {
                    console.error('Failed to fetch history:', e);
                }

                // If we found the asset in the list, use it.
                // If not, but we have history, construct a basic asset object so the page still loads.
                if (currentAsset) {
                    setAsset({
                        ...currentAsset,
                        description: currentAsset.type === 'crypto'
                            ? `${currentAsset.name} is a decentralized digital currency.`
                            : `${currentAsset.name} is a major publicly traded company.`
                    });
                } else if (chartHistory.length > 0) {
                    // Fallback: Create asset from history if market list failed
                    const lastPoint = chartHistory[chartHistory.length - 1];
                    setAsset({
                        id: id,
                        symbol: id,
                        name: id,
                        price: lastPoint.price || lastPoint.close,
                        change24h: 0, // Unknown without market list
                        type: id.includes('-USD') ? 'crypto' : 'stock',
                        sparkline: chartHistory
                    });
                }

                if (chartHistory.length > 0) {
                    setHistory(chartHistory.slice(-90));
                }

                // 3. Fetch Advanced Data (Skills)
                if (skills.technicalAnalyst) {
                    fetchIndicators(id, indicatorInterval).then(setIndicators).catch(console.error);
                }
                if (skills.fundamentalAnalyst) {
                    fetchFundamentals(id).then(data => {
                        setFundamentals(data);
                        if (data?.assetProfile?.longBusinessSummary) {
                            setAsset(prev => prev ? ({ ...prev, description: data.assetProfile.longBusinessSummary }) : null);
                        }
                    }).catch(console.error);
                }

            } catch (error) {
                console.error('Error loading asset data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
        const timer = setInterval(loadData, 60000);
        return () => clearInterval(timer);
    }, [id, interval, indicatorInterval, skills.technicalAnalyst, skills.fundamentalAnalyst]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen pb-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!asset) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen pb-24 space-y-4">
                <p className="text-xl font-bold text-red-500">{t('asset_not_found')}</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                    {t('return_to_market')}
                </button>
            </div>
        );
    }

    const owned = portfolio.find(p => p.id === asset.id)?.amount || 0;
    const displayPrice = hoverData ? hoverData.price : asset.price;

    // Chart Calculations
    const prices = history.length > 0 ? history.map(h => h.price) : [];
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const priceRange = maxPrice - minPrice || 1;

    const chartData = history.map((point, index) => ({
        x: history.length > 1 ? (index / (history.length - 1)) * 100 : 50,
        y: 100 - ((point.price - minPrice) / priceRange) * 100
    }));

    const pathData = chartData.length > 0 ? `M ${chartData.map(p => `${p.x} ${p.y}`).join(' L ')}` : '';

    // Trading Logic


    const handleCoverShort = (positionId: string, positionAmount: number) => {
        buyAsset(asset.id, asset.price, positionAmount, 1, positionId);
    };

    return (
        <div className="space-y-6 pb-40">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full backdrop-blur-md transition-colors"
                    style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                >
                    <ArrowLeft />
                </button>
                <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{asset.name}</h1>
            </div>

            {/* Main Price Card */}
            <Card className="p-4 backdrop-blur-md border-white/20 transition-colors duration-300"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-medium opacity-70" style={{ color: 'var(--text-primary)' }}>{t('current_price')}</p>
                        <h2 className="text-3xl font-black tracking-tight mt-1" style={{ color: 'var(--text-primary)' }}>
                            ${formatPrice(displayPrice)}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <div className={`flex items-center px-2 py-1 rounded-full text-sm font-bold ${asset.change24h >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {asset.change24h >= 0 ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                            {asset.change24h.toFixed(2)}%
                        </div>
                        {skills.marketTimer && (() => {
                            const signal = getMarketSignal(history);
                            if (signal === 'buy') {
                                return (
                                    <div className="flex items-center px-2 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">
                                        {t('buy').toUpperCase()} ↑
                                    </div>
                                );
                            } else if (signal === 'sell') {
                                return (
                                    <div className="flex items-center px-2 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-300">
                                        {t('sell').toUpperCase()} ↓
                                    </div>
                                );
                            }
                            return null;
                        })()}
                    </div>
                </div>

                {/* Timeframe Selector & Chart Type Toggle */}
                <div className="flex justify-between items-center mt-4 mb-2">
                    {skills.multiTimeframe && (
                        <div className="flex gap-1 overflow-x-auto pb-1">
                            {['5m', '15m', '1h', '3h', '1d'].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setIntervalState(t)}
                                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all whitespace-nowrap`}
                                    style={{
                                        backgroundColor: interval === t ? 'var(--accent-color)' : 'rgba(128, 128, 128, 0.1)',
                                        color: interval === t ? '#ffffff' : 'var(--text-primary)',
                                        opacity: interval === t ? 1 : 0.7
                                    }}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="flex bg-black/20 rounded-lg p-0.5">
                        <button
                            onClick={() => setChartType('candle')}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${chartType === 'candle' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Candle
                        </button>
                        <button
                            onClick={() => setChartType('line')}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${chartType === 'line' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Line
                        </button>
                    </div>
                </div>



                {/* Animated Chart */}
                <div className="h-48 mt-4 relative w-full overflow-hidden group"
                    onMouseLeave={() => setHoverData(null)}>
                    {history.length > 0 ? (
                        <>
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full overflow-visible"
                                preserveAspectRatio="none"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const width = rect.width;
                                    const index = Math.floor((x / width) * history.length);
                                    if (index >= 0 && index < history.length) {
                                        setHoverData({
                                            price: history[index].price,
                                            date: history[index].date,
                                            index,
                                            open: history[index].open,
                                            high: history[index].high,
                                            low: history[index].low,
                                            close: history[index].close
                                        });
                                    }
                                }}
                            >
                                {chartType === 'candle' && history.map((point, i) => {
                                    // Render candle if we have OHLC data (even if flat)
                                    // If open is undefined, we skip (it will be handled by line fallback if strictly line mode, but here we are in candle mode)
                                    // Actually, for mixed data, we might want to show line if candle data missing?
                                    // For now, let's assume backend fix provides OHLC.
                                    if (point.open === undefined) return null;

                                    const x = (i / history.length) * 100;
                                    const candleWidth = (100 / history.length) * 0.7;

                                    const yHigh = 100 - (((point.high || 0) - minPrice) / priceRange) * 100;
                                    const yLow = 100 - (((point.low || 0) - minPrice) / priceRange) * 100;
                                    const yOpen = 100 - (((point.open || 0) - minPrice) / priceRange) * 100;
                                    const yClose = 100 - (((point.close || 0) - minPrice) / priceRange) * 100;

                                    const isGreen = (point.close || 0) >= (point.open || 0);
                                    const color = isGreen ? '#10B981' : '#EF4444'; // Green or Red

                                    return (
                                        <g key={i}>
                                            {/* Wick */}
                                            <line
                                                x1={x + candleWidth / 2}
                                                y1={yHigh}
                                                x2={x + candleWidth / 2}
                                                y2={yLow}
                                                stroke={color}
                                                strokeWidth="0.5"
                                            />
                                            {/* Body */}
                                            <rect
                                                x={x}
                                                y={Math.min(yOpen, yClose)}
                                                width={candleWidth}
                                                height={Math.max(0.5, Math.abs(yClose - yOpen))}
                                                fill={color}
                                            />
                                        </g>
                                    );
                                })}

                                {/* Line Chart (if selected or fallback) */}
                                {(chartType === 'line' || (chartType === 'candle' && !history[0].open)) && (
                                    <>
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d={`${pathData} L 100 100 L 0 100 Z`}
                                            fill="url(#chartGradient)"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                        <motion.path
                                            d={pathData}
                                            fill="none"
                                            stroke="var(--accent-color)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />
                                    </>
                                )}

                                {hoverData && (
                                    <>
                                        <line
                                            x1={chartData[hoverData.index].x}
                                            y1="0"
                                            x2={chartData[hoverData.index].x}
                                            y2="100"
                                            stroke="var(--text-primary)"
                                            strokeWidth="0.5"
                                            strokeDasharray="2 2"
                                            opacity="0.5"
                                        />
                                    </>
                                )}

                                {/* Bollinger Bands Overlay */}
                                {showBB && history.length > 20 && (() => {
                                    const period = 20;
                                    const stdDevMultiplier = 2;
                                    const bbData = history.map((_, i) => {
                                        if (i < period - 1) return null;
                                        const slice = history.slice(i - period + 1, i + 1);
                                        const prices = slice.map(p => p.close || p.price);
                                        const sum = prices.reduce((a, b) => a + b, 0);
                                        const mean = sum / period;
                                        const squaredDiffs = prices.map(p => Math.pow(p - mean, 2));
                                        const variance = squaredDiffs.reduce((a, b) => a + b, 0) / period;
                                        const stdDev = Math.sqrt(variance);
                                        return {
                                            upper: mean + (stdDev * stdDevMultiplier),
                                            middle: mean,
                                            lower: mean - (stdDev * stdDevMultiplier)
                                        };
                                    });

                                    const getPath = (type: 'upper' | 'middle' | 'lower') => {
                                        return bbData.map((d, i) => {
                                            if (!d) return null;
                                            const x = (i / history.length) * 100;
                                            const y = 100 - ((d[type] - minPrice) / priceRange) * 100;
                                            return `${x} ${y}`;
                                        }).filter(Boolean).join(' L ');
                                    };

                                    return (
                                        <>
                                            <path d={`M ${getPath('upper')}`} fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
                                            <path d={`M ${getPath('middle')}`} fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.8" strokeDasharray="4 4" />
                                            <path d={`M ${getPath('lower')}`} fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />

                                            {/* Fill area between upper and lower */}
                                            <path
                                                d={`M ${getPath('upper')} L ${bbData.map((d, i) => {
                                                    if (!d) return null;
                                                    const x = (i / history.length) * 100;
                                                    const y = 100 - ((d.lower - minPrice) / priceRange) * 100;
                                                    return `${x} ${y}`;
                                                }).filter(Boolean).reverse().join(' L ')} Z`}
                                                fill="#3b82f6"
                                                fillOpacity="0.1"
                                                stroke="none"
                                            />
                                        </>
                                    );
                                })()}
                            </svg>

                            {hoverData && (
                                <div
                                    className={`absolute bg-black/90 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md pointer-events-none transform -translate-x-1/2 flex flex-col items-start z-10 border border-white/10 ${chartData[hoverData.index].y < 20 ? 'translate-y-2' : '-translate-y-full -mt-2'
                                        }`}
                                    style={{
                                        left: `${chartData[hoverData.index].x}%`,
                                        top: `${chartData[hoverData.index].y}%`
                                    }}
                                >
                                    <span className="font-bold mb-0.5">{new Date(hoverData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    {hoverData.open ? (
                                        <>
                                            <span>O: {formatPrice(hoverData.open)}</span>
                                            <span>H: {formatPrice(hoverData.high!)}</span>
                                            <span>L: {formatPrice(hoverData.low!)}</span>
                                            <span>C: {formatPrice(hoverData.close!)}</span>
                                        </>
                                    ) : (
                                        <span>Price: {formatPrice(hoverData.price)}</span>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full text-sm opacity-50" style={{ color: 'var(--text-primary)' }}>
                            Loading chart data...
                        </div>
                    )}
                </div>
            </Card>

            {/* Position Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                    <p className="text-xs opacity-70">{t('your_position')}</p>
                    <p className="text-xl font-bold">{owned} {asset.symbol}</p>
                    <p className="text-xs opacity-50">≈ ${formatPrice(owned * asset.price)}</p>
                </Card>
                <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                    <p className="text-xs opacity-70">{t('available_balance')}</p>
                    <p className="text-xl font-bold text-green-400">${formatPrice(balance)}</p>
                </Card>
            </div>

            {/* Technical Analysis Section */}
            {skills.technicalAnalyst && (
                <Card className="p-5 space-y-6 mb-6" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">{t('technical_analysis')}</h3>

                        {/* Indicator Interval Selector */}
                        <div className="flex gap-1 bg-black/20 p-1 rounded-lg">
                            {['5m', '15m', '1h', '3h', '1d'].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setIndicatorInterval(t)}
                                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${indicatorInterval === t ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-4">
                        {/* Bollinger Bands Toggle (Overlay) */}
                        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                            <span className="text-sm font-bold opacity-80">Overlays</span>
                            <button
                                onClick={() => setShowBB(!showBB)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showBB ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent text-blue-400 border-blue-500/50'}`}
                            >
                                Bollinger Bands
                            </button>
                        </div>

                        {/* Oscillators */}
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            <button
                                onClick={() => setShowRSI(!showRSI)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showRSI ? 'bg-purple-500 text-white border-purple-500' : 'bg-transparent text-purple-400 border-purple-500/50'}`}
                            >
                                RSI
                            </button>
                            <button
                                onClick={() => setShowMACD(!showMACD)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showMACD ? 'bg-orange-500 text-white border-orange-500' : 'bg-transparent text-orange-400 border-orange-500/50'}`}
                            >
                                MACD
                            </button>
                        </div>
                    </div>

                    {/* RSI Chart */}
                    {showRSI && indicators.length > 0 && (
                        <div className="h-40 w-full">
                            <p className="text-xs font-bold text-purple-400 mb-2">Relative Strength Index (14)</p>
                            <div className="h-full w-full relative border-t border-b border-white/5 bg-black/10 rounded-lg overflow-hidden">
                                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                                    {/* Guidelines - Center line at 50 */}
                                    <line x1="0" y1="50" x2="100" y2="50" stroke="black" strokeOpacity="0.2" strokeDasharray="2 2" strokeWidth="0.5" />

                                    {/* RSI Line */}
                                    <path
                                        d={`M ${indicators.map((p, i) => {
                                            if (p.rsi === null) return null;
                                            const x = (i / (indicators.length - 1)) * 100;
                                            const y = 100 - p.rsi;
                                            return `${x} ${y}`;
                                        }).filter(Boolean).join(' L ')}`}
                                        fill="none"
                                        stroke="#a855f7"
                                        strokeWidth="1"
                                    />

                                    {/* Scale Labels */}
                                    <text x="98" y="8" fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">100</text>
                                    <text x="98" y="52" fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">50</text>
                                    <text x="98" y="95" fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">0</text>
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* MACD Chart */}
                    {showMACD && indicators.length > 0 && (
                        <div className="h-40 w-full">
                            <p className="text-xs font-bold text-orange-400 mb-2">MACD (12, 26, 9)</p>
                            <div className="h-full w-full relative border-t border-b border-white/5 bg-black/10 rounded-lg overflow-hidden">
                                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                                    {(() => {
                                        const macdValues = indicators.map(i => i.macd).filter(v => v !== null);
                                        const minVal = Math.min(...macdValues, -1);
                                        const maxVal = Math.max(...macdValues, 1);
                                        const range = maxVal - minVal;
                                        const zeroY = 100 - ((0 - minVal) / range) * 100;

                                        return (
                                            <>
                                                <line x1="0" y1={zeroY} x2="100" y2={zeroY} stroke="black" strokeOpacity="0.2" strokeWidth="0.5" />

                                                {/* Histogram */}
                                                {indicators.map((p, i) => {
                                                    if (p.macdHistogram === null) return null;
                                                    const x = (i / (indicators.length - 1)) * 100;
                                                    const width = (100 / indicators.length) * 0.8;
                                                    const y = 100 - ((p.macdHistogram - minVal) / range) * 100;
                                                    const height = Math.abs(y - zeroY);
                                                    const color = p.macdHistogram >= 0 ? '#10B981' : '#EF4444';

                                                    return (
                                                        <rect
                                                            key={i}
                                                            x={x}
                                                            y={Math.min(y, zeroY)}
                                                            width={width}
                                                            height={height}
                                                            fill={color}
                                                            opacity="0.5"
                                                        />
                                                    );
                                                })}

                                                {/* MACD Line */}
                                                <path
                                                    d={`M ${indicators.map((p, i) => {
                                                        if (p.macd === null) return null;
                                                        const x = (i / (indicators.length - 1)) * 100;
                                                        const y = 100 - ((p.macd - minVal) / range) * 100;
                                                        return `${x} ${y}`;
                                                    }).filter(Boolean).join(' L ')}`}
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="1"
                                                />

                                                {/* Signal Line */}
                                                <path
                                                    d={`M ${indicators.map((p, i) => {
                                                        if (p.macdSignal === null) return null;
                                                        const x = (i / (indicators.length - 1)) * 100;
                                                        const y = 100 - ((p.macdSignal - minVal) / range) * 100;
                                                        return `${x} ${y}`;
                                                    }).filter(Boolean).join(' L ')}`}
                                                    fill="none"
                                                    stroke="#3b82f6"
                                                    strokeWidth="0.8"
                                                />

                                                {/* Scale Labels */}
                                                <text x="98" y="10" fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">{maxVal.toFixed(2)}</text>
                                                <text x="98" y={zeroY - 2} fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">0.00</text>
                                                <text x="98" y="95" fill="black" fontSize="6" textAnchor="end" opacity="0.9" fontWeight="bold">{minVal.toFixed(2)}</text>
                                            </>
                                        );
                                    })()}
                                </svg>
                            </div>
                        </div>
                    )}
                </Card>
            )}



            {/* Fundamentals */}
            {skills.fundamentalAnalyst && fundamentals && (
                <Card className="p-5" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                    <h3 className="font-bold text-lg mb-4">{t('fundamentals')}</h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('market_cap')}</p>
                            <p className="font-bold">{fundamentals.summaryDetail?.marketCap ? `$${(fundamentals.summaryDetail.marketCap / 1e9).toFixed(2)}B` : 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('pe_ratio')}</p>
                            <p className="font-bold">{fundamentals.summaryDetail?.trailingPE?.toFixed(2) || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('eps')}</p>
                            <p className="font-bold">{fundamentals.defaultKeyStatistics?.trailingEps?.toFixed(2) || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('week_high')}</p>
                            <p className="font-bold">${fundamentals.summaryDetail?.fiftyTwoWeekHigh?.toFixed(2) || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('week_low')}</p>
                            <p className="font-bold">${fundamentals.summaryDetail?.fiftyTwoWeekLow?.toFixed(2) || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-50 uppercase">{t('volume')}</p>
                            <p className="font-bold">{fundamentals.summaryDetail?.volume ? (fundamentals.summaryDetail.volume / 1e6).toFixed(2) + 'M' : 'N/A'}</p>
                        </div>
                    </div>
                </Card>
            )}

            {/* About */}
            <Card className="p-5" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                <h3 className="font-bold text-lg mb-2">{t('about')} {asset.name}</h3>
                <p className="text-sm leading-relaxed opacity-80">
                    {asset.description}
                </p>
            </Card>



            {/* Trading Buttons (Scrolls with content) */}
            <div className="p-4 pb-8">
                <div className="grid grid-cols-2 gap-4">
                    {owned > 0 ? (
                        <button
                            onClick={() => navigate(`/trade/${asset.id}?type=sell`)}
                            className="py-4 rounded-xl bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 hover:bg-red-400 transition-all"
                        >
                            {t('sell')}
                        </button>
                    ) : (
                        skills.shortSelling ? (
                            <button
                                onClick={() => navigate(`/trade/${asset.id}?type=short`)}
                                className="py-4 rounded-xl bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-all"
                            >
                                {t('short_sell')}
                            </button>
                        ) : (
                            <button
                                disabled
                                className="py-4 rounded-xl bg-white/5 text-white/20 font-bold cursor-not-allowed"
                            >
                                {t('sell')}
                            </button>
                        )
                    )}
                    <button
                        onClick={() => navigate(`/trade/${asset.id}?type=buy`)}
                        className="py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg shadow-green-500/20 hover:bg-green-400 transition-all"
                    >
                        {t('buy')}
                    </button>
                </div>
            </div>

            {/* Active Short Positions */}
            {skills.shortSelling && assetShorts.length > 0 && (
                <Card className="p-5" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                    <h3 className="font-bold text-lg mb-4">{t('active_short_positions')}</h3>
                    <div className="space-y-3">
                        {assetShorts.map(short => {
                            const currentVal = short.amount * asset.price;
                            const entryVal = short.amount * short.entryPrice;
                            const pnl = entryVal - currentVal;
                            const pnlPercent = ((entryVal - currentVal) / entryVal) * 100;

                            return (
                                <div key={short.id} className="p-3 rounded-lg bg-black/20 border border-white/10 flex justify-between items-center">
                                    <div>
                                        <div className="text-sm font-bold">{short.amount} {asset.symbol}</div>
                                        <div className="text-xs opacity-50">Entry: ${formatPrice(short.entryPrice)}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`font-bold ${pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                            {pnl >= 0 ? '+' : ''}{formatPrice(pnl)} ({pnlPercent.toFixed(2)}%)
                                        </div>
                                        <button
                                            onClick={() => handleCoverShort(short.id, short.amount)}
                                            className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded mt-1 transition-colors"
                                        >
                                            {t('cover')}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            )}

            {/* Order Form (Stop Loss / Take Profit) */}
            <OrderForm
                assetId={asset.id}
                currentPrice={asset.price}
                ownedAmount={owned}
            />
        </div>
    );
};
