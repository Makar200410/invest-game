import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Lock, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/ui/Card';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import { fetchCryptoMarket, fetchMarketChart, fetchMarketChartByInterval, fetchIndicators, fetchFundamentals, type MarketItem } from '../../services/api';
import { OrderForm } from '../../components/trading/OrderForm';

export const StockDetail: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { balance, buyAsset, portfolio, skills, shortPositions } = useGameStore();
    const [asset, setAsset] = useState<MarketItem | null>(null);
    const [history, setHistory] = useState<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [hoverData, setHoverData] = useState<{ price: number; date: string; index: number; open?: number; high?: number; low?: number; close?: number } | null>(null);

    // Initialize interval based on skill
    const [interval, setIntervalState] = useState(skills.multiTimeframe ? '5m' : '1d');
    const [indicatorInterval, setIndicatorInterval] = useState('1d');
    const [chartType, setChartType] = useState<'candle' | 'line'>('line');
    const [cachedDaily, setCachedDaily] = useState<any[]>([]);
    const [chartLoaded, setChartLoaded] = useState(false);

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
                    if (['1w', '1M', 'All'].includes(interval)) {
                        // Use cached 1d data or fetch it
                        let dailyData = cachedDaily;
                        if (dailyData.length === 0) {
                            dailyData = await fetchMarketChartByInterval(id, '1d');
                            setCachedDaily(dailyData);
                        }

                        // Aggregate Data
                        if (interval === 'All') {
                            chartHistory = dailyData;
                        } else {
                            const isCrypto = id.includes('-USD');
                            const groupSize = interval === '1w'
                                ? (isCrypto ? 7 : 5)
                                : (isCrypto ? 30 : 21);

                            const aggregated: any[] = [];
                            for (let i = 0; i < dailyData.length; i += groupSize) {
                                const chunk = dailyData.slice(i, i + groupSize);
                                if (chunk.length === 0) continue;

                                const first = chunk[0];
                                const last = chunk[chunk.length - 1];
                                const high = Math.max(...chunk.map((c: any) => c.high || c.price));
                                const low = Math.min(...chunk.map((c: any) => c.low || c.price));

                                aggregated.push({
                                    date: first.date,
                                    open: first.open || first.price,
                                    close: last.close || last.price,
                                    high,
                                    low,
                                    price: last.close || last.price, // Use close as price
                                    volume: chunk.reduce((acc: number, c: any) => acc + (c.volume || 0), 0)
                                });
                            }
                            chartHistory = aggregated;
                        }
                    } else {
                        // Standard fetch for 5m, 1h, 1d
                        chartHistory = interval === '5m'
                            ? await fetchMarketChart(id)
                            : await fetchMarketChartByInterval(id, interval);

                        // If we fetched 1d, cache it
                        if (interval === '1d') {
                            setCachedDaily(chartHistory);
                        }
                    }
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
                    // Remove the last point to avoid incomplete/incorrect data
                    const cleanHistory = chartHistory.length > 1 ? chartHistory.slice(0, -1) : chartHistory;

                    if (interval === 'All') {
                        setHistory(cleanHistory); // Show full history for All (minus last point)
                    } else {
                        setHistory(cleanHistory.slice(-90)); // Last 90 points for consistent display
                    }
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

    // Scroll to hash after loading
    useEffect(() => {
        if (!loading && asset && window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight effect
                    element.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2', 'ring-offset-black');
                    setTimeout(() => {
                        element.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2', 'ring-offset-black');
                    }, 2000);
                }
            }, 500);
        }
    }, [loading, asset]);

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

    const padding = 10;
    const availableHeight = 100 - (padding * 2);

    const chartData = history.map((point, index) => ({
        x: history.length > 1 ? (index / (history.length - 1)) * 100 : 50,
        y: 100 - padding - ((point.price - minPrice) / priceRange) * availableHeight,
        open: point.open !== undefined ? 100 - padding - ((point.open - minPrice) / priceRange) * availableHeight : undefined,
        high: point.high !== undefined ? 100 - padding - ((point.high - minPrice) / priceRange) * availableHeight : undefined,
        low: point.low !== undefined ? 100 - padding - ((point.low - minPrice) / priceRange) * availableHeight : undefined,
        close: point.close !== undefined ? 100 - padding - ((point.close - minPrice) / priceRange) * availableHeight : undefined,
    }));

    const pathData = chartData.length > 0 ? `M ${chartData.map(p => `${p.x} ${p.y}`).join(' L ')}` : '';

    // Trading Logic


    const handleCoverShort = (positionId: string, positionAmount: number) => {
        buyAsset(asset.id, asset.price, positionAmount, 1, positionId);
    };

    return (
        <div className="space-y-6 pb-40">
            {/* Header */}
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <ArrowLeft />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold leading-none" style={{ color: 'var(--text-primary)' }}>{asset.name}</h1>
                        <p className="text-xs font-bold opacity-50 mt-1" style={{ color: 'var(--text-primary)' }}>{asset.symbol}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="opacity-70 hover:opacity-100"><TrendingUp size={20} /></button>
                    <button className="opacity-70 hover:opacity-100">★</button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
                <button className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                    {t('overview', 'Overview')}
                </button>
                <button
                    onClick={() => !skills.technicalAnalyst && navigate('/skills')}
                    className={`px-4 py-1.5 rounded-full hover:bg-white/5 text-sm font-bold whitespace-nowrap flex items-center gap-1 ${!skills.technicalAnalyst ? 'opacity-50 cursor-pointer' : 'opacity-60'}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('indicators', 'Indicators')}
                    {!skills.technicalAnalyst && <Lock size={12} />}
                </button>
                <button
                    onClick={() => !skills.newsAlert && navigate('/skills')}
                    className={`px-4 py-1.5 rounded-full hover:bg-white/5 text-sm font-bold whitespace-nowrap flex items-center gap-1 ${!skills.newsAlert ? 'opacity-50 cursor-pointer' : 'opacity-60'}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('news', 'News')}
                    {!skills.newsAlert && <Lock size={12} />}
                </button>
            </div>

            {/* Main Price Card */}
            <div className="space-y-1">
                <h2 className="text-4xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    ${formatPrice(displayPrice)}
                </h2>
                <div className={`flex items-center text-sm font-bold ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change24h >= 0 ? '▲' : '▼'} {Math.abs(asset.change24h).toFixed(2)}% • {asset.change24h >= 0 ? '+' : ''}{formatPrice(asset.price * (asset.change24h / 100))}
                </div>
            </div>

            {/* Chart Area */}
            <div id="tutorial-chart-area" className="relative w-full" onMouseLeave={() => setHoverData(null)}>
                <div className="h-72 w-full overflow-hidden">
                    {history.length > 0 ? (
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
                            {/* Grid Lines */}
                            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((y) => (
                                <line key={`h-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="var(--text-primary)" strokeOpacity="0.1" strokeWidth="0.5" />
                            ))}
                            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x) => (
                                <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="100" stroke="var(--text-primary)" strokeOpacity="0.1" strokeWidth="0.5" />
                            ))}

                            {/* Current Price Line */}
                            {(chartType === 'line' || (chartType === 'candle' && !history[0].open)) && (() => {
                                const lastPoint = chartData[chartData.length - 1];
                                const currentPrice = history[history.length - 1].price;
                                const yCurrent = lastPoint.y;

                                return (
                                    <>
                                        <line x1="0" y1={yCurrent} x2="100" y2={yCurrent} stroke="var(--text-primary)" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="1 1" />
                                        <circle cx="0" cy={yCurrent} r="1" fill="var(--text-primary)" />
                                        <text x="2" y={yCurrent - 2} fill="var(--text-primary)" fontSize="3" textAnchor="start" fontWeight="bold">${formatPrice(currentPrice)}</text>
                                    </>
                                );
                            })()}

                            {/* Min/Max Points */}
                            {(chartType === 'line' || (chartType === 'candle' && !history[0].open)) && (() => {
                                let minIdx = 0;
                                let maxIdx = 0;
                                history.forEach((h, i) => {
                                    if (h.price < history[minIdx].price) minIdx = i;
                                    if (h.price > history[maxIdx].price) maxIdx = i;
                                });

                                const minP = history[minIdx];
                                const maxP = history[maxIdx];
                                const minData = chartData[minIdx];
                                const maxData = chartData[maxIdx];

                                const getAnchor = (x: number) => {
                                    if (x < 10) return 'start';
                                    if (x > 90) return 'end';
                                    return 'middle';
                                };

                                return (
                                    <>
                                        {/* Max Point */}
                                        <circle cx={maxData.x} cy={maxData.y} r="1" fill="var(--text-primary)" />
                                        <text
                                            x={maxData.x}
                                            y={maxData.y - 3}
                                            fill="var(--text-primary)"
                                            fontSize="3"
                                            textAnchor={getAnchor(maxData.x)}
                                            fontWeight="bold"
                                        >
                                            ${formatPrice(maxP.price)}
                                        </text>

                                        {/* Min Point */}
                                        <circle cx={minData.x} cy={minData.y} r="1" fill="var(--text-primary)" />
                                        <text
                                            x={minData.x}
                                            y={minData.y + 5}
                                            fill="var(--text-primary)"
                                            fontSize="3"
                                            textAnchor={getAnchor(minData.x)}
                                            fontWeight="bold"
                                        >
                                            ${formatPrice(minP.price)}
                                        </text>
                                    </>
                                );
                            })()}

                            {/* Chart Lines/Candles */}
                            {chartType === 'candle' && chartData.map((point, i) => {
                                if (point.open === undefined) return null;
                                const candleWidth = (100 / chartData.length) * 0.7;
                                const rawPoint = history[i];
                                const isGreenColor = (rawPoint.close || 0) >= (rawPoint.open || 0);
                                const color = isGreenColor ? '#10B981' : '#EF4444';

                                return (
                                    <g key={i}>
                                        <line x1={point.x + candleWidth / 2} y1={point.high} x2={point.x + candleWidth / 2} y2={point.low} stroke={color} strokeWidth="0.7" />
                                        <rect
                                            x={point.x}
                                            y={Math.min(point.open!, point.close!)}
                                            width={candleWidth}
                                            height={Math.max(0.5, Math.abs(point.close! - point.open!))}
                                            fill={color}
                                            rx="0"
                                        />
                                    </g>
                                );
                            })}

                            {(chartType === 'line' || (chartType === 'candle' && !history[0].open)) && (
                                <>
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        d={`${pathData} L 100 100 L 0 100 Z`}
                                        fill="url(#chartGradient)"
                                        initial={!chartLoaded ? { opacity: 0 } : false}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                    <motion.path
                                        d={pathData}
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="0.8"
                                        initial={!chartLoaded ? { pathLength: 0 } : false}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        onAnimationComplete={() => setChartLoaded(true)}
                                    />
                                </>
                            )}

                            {/* Hover Line */}
                            {hoverData && chartData[hoverData.index] && (
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
                            )}
                        </svg>
                    ) : (
                        <div className="flex items-center justify-center h-full text-sm opacity-50">Loading chart...</div>
                    )}
                </div>

                {/* Hover Info Tooltip */}
                {hoverData && (
                    <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none"
                    >
                        {new Date(hoverData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • ${formatPrice(hoverData.price)}
                    </div>
                )}
            </div>

            {/* Timeframe Selector */}
            <div id="timeframe-selector" className="flex justify-between items-center px-2">
                <div className="flex gap-4">
                    {['1m', '5m', '1h', '1d', '1w', '1M', 'All'].map((t) => {
                        const isLocked = !skills.multiTimeframe && ['1m', '5m', '1h', '1w', '1M'].includes(t);
                        return (
                            <button
                                key={t}
                                onClick={() => !isLocked ? setIntervalState(t) : navigate('/skills')}
                                className={`text-sm font-bold transition-colors flex items-center ${interval === t ? 'bg-white/20 px-3 py-1 rounded-full' : 'opacity-40 hover:opacity-100'} ${isLocked ? 'opacity-50 cursor-pointer' : ''}`}
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {t}
                                {isLocked && <span className="ml-1 text-[10px]">🔒</span>}
                            </button>
                        );
                    })}
                </div>
                <button
                    onClick={() => setChartType(prev => prev === 'candle' ? 'line' : 'candle')}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <TrendingUp size={20} style={{ color: 'var(--text-primary)' }} />
                </button>
            </div>

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
            <Card id="technical-analysis" className="p-5 space-y-6 mb-6 relative" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                {/* Lock Overlay */}
                {!skills.technicalAnalyst && (
                    <div
                        onClick={() => navigate('/skills')}
                        className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-2xl z-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-black/50 transition-colors"
                    >
                        <Lock size={48} className="text-white/90" />
                        <div className="text-center">
                            <p className="text-white font-bold text-lg">{t('skill_locked')}</p>
                            <p className="text-white/70 text-sm mt-1">{t('unlock_technical_analyst')}</p>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{t('technical_analysis')}</h3>

                    {/* Indicator Interval Selector */}
                    <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
                        {['5m', '15m', '1h', '3h', '1d'].map((t) => (
                            <button
                                key={t}
                                onClick={() => skills.technicalAnalyst && setIndicatorInterval(t)}
                                disabled={!skills.technicalAnalyst}
                                className={`px-2 py-1 rounded text-xs font-bold transition-all ${indicatorInterval === t ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'} disabled:cursor-not-allowed`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4">
                    {/* Bollinger Bands Toggle (Overlay) */}
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
                        <span className="text-sm font-bold opacity-80">{t('overlays')}</span>
                        <button
                            onClick={() => skills.technicalAnalyst && setShowBB(!showBB)}
                            disabled={!skills.technicalAnalyst}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showBB ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent text-blue-400 border-blue-500/50'} disabled:cursor-not-allowed disabled:opacity-50`}
                        >
                            {t('bollinger_bands')}
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
                        <p className="text-xs font-bold text-purple-400 mb-2">{t('rsi')}</p>
                        <div className="h-full w-full relative border-t border-b border-white/5 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
                        <p className="text-xs font-bold text-orange-400 mb-2">{t('macd')}</p>
                        <div className="h-full w-full relative border-t border-b border-white/5 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
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



            {/* Market Timer */}
            <Card id="market-timer" className="p-5 relative mb-6" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                {/* Lock Overlay */}
                {!skills.marketTimer && (
                    <div
                        onClick={() => navigate('/skills')}
                        className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-2xl z-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-black/50 transition-colors"
                    >
                        <Lock size={48} className="text-white/90" />
                        <div className="text-center">
                            <p className="text-white font-bold text-lg">{t('skill_locked')}</p>
                            <p className="text-white/70 text-sm mt-1">{t('unlock_market_timer')}</p>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <Target size={20} className="text-blue-500" />
                        {t('market_timer')}
                    </h3>
                    {skills.marketTimer && (
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold">{t('active')}</span>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-black/20 border border-white/5 text-center">
                        <p className="text-xs opacity-50 uppercase mb-1">{t('signal')}</p>
                        <p className="font-bold text-lg text-green-400">{t('strong_buy')}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/20 border border-white/5 text-center">
                        <p className="text-xs opacity-50 uppercase mb-1">{t('confidence')}</p>
                        <p className="font-bold text-lg">87%</p>
                    </div>
                </div>
                <p className="text-xs opacity-50 mt-3 text-center">
                    {t('market_timer_analysis')}
                </p>
            </Card>

            {/* Fundamentals */}
            <Card id="fundamentals" className="p-5 relative" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                {/* Lock Overlay */}
                {!skills.fundamentalAnalyst && (
                    <div
                        onClick={() => navigate('/skills')}
                        className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-2xl z-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-black/50 transition-colors"
                    >
                        <Lock size={48} className="text-white/90" />
                        <div className="text-center">
                            <p className="text-white font-bold text-lg">{t('skill_locked')}</p>
                            <p className="text-white/70 text-sm mt-1">{t('unlock_fundamental_analyst')}</p>
                        </div>
                    </div>
                )}

                <h3 className="font-bold text-lg mb-4">{t('fundamentals')}</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('market_cap')}</p>
                        <p className="font-bold">{fundamentals?.summaryDetail?.marketCap ? `$${(fundamentals.summaryDetail.marketCap / 1e9).toFixed(2)}B` : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('pe_ratio')}</p>
                        <p className="font-bold">{fundamentals?.summaryDetail?.trailingPE?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('eps')}</p>
                        <p className="font-bold">{fundamentals?.defaultKeyStatistics?.trailingEps?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('week_high')}</p>
                        <p className="font-bold">${fundamentals?.summaryDetail?.fiftyTwoWeekHigh?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('week_low')}</p>
                        <p className="font-bold">${fundamentals?.summaryDetail?.fiftyTwoWeekLow?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-50 uppercase">{t('volume')}</p>
                        <p className="font-bold">{fundamentals?.summaryDetail?.volume ? (fundamentals.summaryDetail.volume / 1e6).toFixed(2) + 'M' : 'N/A'}</p>
                    </div>
                </div>
            </Card>

            {/* About */}
            <Card className="p-5" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                <h3 className="font-bold text-lg mb-2">{t('about')} {asset.name}</h3>
                <p className="text-sm leading-relaxed opacity-80">
                    {asset.description}
                </p>
            </Card>



            {/* Fixed Trading Buttons - Portalled to escape parent transforms */}
            {
                createPortal(
                    <div className="fixed bottom-[72px] left-0 right-0 px-4 pb-2 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none">
                        <div id="tutorial-trade-buttons" className="max-w-md mx-auto grid grid-cols-2 gap-4 pointer-events-auto">
                            {owned > 0 ? (
                                <button
                                    onClick={() => navigate(`/trade/${asset.id}?type=sell`)}
                                    className="py-4 rounded-2xl bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 hover:bg-red-400 transition-all active:scale-95"
                                >
                                    {t('sell')}
                                </button>
                            ) : (
                                skills.shortSelling ? (
                                    <button
                                        onClick={() => navigate(`/trade/${asset.id}?type=short`)}
                                        className="py-4 rounded-2xl bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-all active:scale-95"
                                    >
                                        {t('short_sell')}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate('/skills')}
                                        className="py-4 rounded-2xl bg-white/5 text-white/20 font-bold cursor-pointer border border-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                                    >
                                        {t('short_sell')} <Lock size={14} />
                                    </button>
                                )
                            )}
                            <button
                                onClick={() => navigate(`/trade/${asset.id}?type=buy`)}
                                className="py-4 rounded-2xl bg-white text-black font-bold shadow-lg shadow-white/10 hover:bg-gray-200 transition-all active:scale-95"
                            >
                                {t('buy')}
                            </button>
                        </div>
                    </div>,
                    document.body
                )
            }

            {/* Active Short Positions */}
            {
                skills.shortSelling && assetShorts.length > 0 && (
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
                )
            }

            {/* Order Form (Stop Loss / Take Profit) */}
            <div id="order-form">
                <OrderForm
                    assetId={asset.id}
                    currentPrice={asset.price}
                    ownedAmount={owned}
                />
            </div>
        </div >
    );
};
