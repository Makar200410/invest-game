import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Lock, Target, MessageCircle, ThumbsUp, Send, Trash2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/ui/Card';
import { useGameStore } from '../../store/gameStore';
import { formatPrice } from '../../utils/format';
import {
    fetchCryptoMarket,
    fetchMarketChartByInterval,
    fetchIndicators,
    fetchFundamentals,
    fetchCompanyNews,
    fetchAssetComments,
    postAssetComment,
    likeAssetComment,
    deleteAssetComment,
    type MarketItem,
    type Comment
} from '../../services/api';
import { OrderForm } from '../../components/trading/OrderForm';

export const StockDetail: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { balance, buyAsset, portfolio, skills, shortPositions, user } = useGameStore();

    // State
    const [asset, setAsset] = useState<MarketItem | null>(null);
    const [newsLoading, setNewsLoading] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentInput, setCommentInput] = useState('');
    const [replyTo, setReplyTo] = useState<Comment | null>(null);
    const commentsEndRef = useRef<HTMLDivElement>(null);
    const [history, setHistory] = useState<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [hoverData, setHoverData] = useState<{ price: number; date: string; index: number; open?: number; high?: number; low?: number; close?: number } | null>(null);
    const [interval, setIntervalState] = useState(skills.multiTimeframe ? '5m' : '1d');

    interface TechnicalAnalysisData {
        pivotPoints: any;
        movingAverages: any[];
        indicators: any[];
        summary: any;
    }
    const [indicators, setIndicators] = useState<TechnicalAnalysisData | null>(null);
    const [indicatorInterval, setIndicatorInterval] = useState('1d');

    const [chartType, setChartType] = useState<'candle' | 'line'>('line');
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'overview');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [fundamentals, setFundamentals] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [companyNews, setCompanyNews] = useState<any[]>([]);
    const [chartLoaded, setChartLoaded] = useState(false);

    // Derived State
    const assetShorts = shortPositions.filter(p => p.assetId === asset?.id);

    // Fetch Data
    // Fetch Data
    useEffect(() => {
        const loadData = async (isBackground = false) => {
            if (!id) return;
            if (!isBackground) setLoading(true);
            try {
                // 1. Fetch Asset Details (using crypto market for now as generic)
                const marketData = await fetchCryptoMarket();
                const foundAsset = marketData.find(a => a.id === id);

                if (foundAsset) {
                    setAsset(foundAsset);

                    // 2. Fetch Chart Data
                    if (!isBackground) console.log(`Fetching chart data for ${id} with interval ${interval}`);
                    const chartData = await fetchMarketChartByInterval(id, interval);
                    setHistory(chartData);

                    // 3. Fetch Additional Data
                    // Always fetch indicators data for the Indicators tab
                    const indicatorsData = await fetchIndicators(id, indicatorInterval);
                    setIndicators(indicatorsData);

                    if (skills.fundamentalAnalyst) {
                        const fundData = await fetchFundamentals(id);
                        setFundamentals(fundData);
                    }

                    if (skills.newsAlert) {
                        if (!isBackground) setNewsLoading(true);
                        fetchCompanyNews(foundAsset.symbol).then(news => {
                            setCompanyNews(news);
                            setNewsLoading(false);
                        });
                    }

                    // Fetch Comments
                    fetchAssetComments(id).then(setComments);
                }
            } catch (error) {
                console.error('Failed to load asset data:', error);
            } finally {
                if (!isBackground) setLoading(false);
            }
        };

        loadData();

        // Polling for price updates
        const pollInterval = setInterval(() => loadData(true), 60000); // 60s polling
        return () => clearInterval(pollInterval);
    }, [id, interval, indicatorInterval, skills]);

    // Handlers
    const handlePostComment = async () => {
        if (!id || !commentInput.trim() || !user) return;
        try {
            await postAssetComment(id, commentInput, user.username, replyTo?.id);
            setCommentInput('');
            setReplyTo(null);
            const updatedComments = await fetchAssetComments(id);
            setComments(updatedComments);
            // Scroll to bottom
            setTimeout(() => {
                commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!user || !id) return;
        if (!confirm(t('confirm_delete_comment', 'Are you sure you want to delete this comment?'))) return;
        try {
            await deleteAssetComment(commentId, user.username);
            const updatedComments = await fetchAssetComments(id);
            setComments(updatedComments);
        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };

    const handleLike = async (commentId: string) => {
        if (!user) return;
        try {
            // Optimistic update
            setComments(prev => prev.map(c => {
                if (c.id === commentId) {
                    const hasLiked = c.likes.includes(user.username);
                    return {
                        ...c,
                        likes: hasLiked
                            ? c.likes.filter(u => u !== user.username)
                            : [...c.likes, user.username]
                    };
                }
                return c;
            }));

            await likeAssetComment(commentId, user.username);
        } catch (error) {
            console.error('Failed to like comment:', error);
            if (id) {
                fetchAssetComments(id).then(setComments);
            }
        }
    };

    const handleReply = (comment: Comment) => {
        setReplyTo(comment);
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.focus();
        }
    };

    const handleCoverShort = (positionId: string, positionAmount: number) => {
        if (!asset) return;
        buyAsset(asset.id, asset.price, positionAmount, 1, positionId);
    };

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
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'bg-white/10' : 'opacity-60 hover:opacity-100'}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('overview', 'Overview')}
                </button>
                <button
                    onClick={() => setActiveTab('indicators')}
                    className={`px-4 py-1.5 rounded-full hover:bg-white/5 text-sm font-bold whitespace-nowrap flex items-center gap-1 transition-colors ${activeTab === 'indicators' ? 'bg-white/10' : 'opacity-60'}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('indicators', 'Indicators')}
                </button>
                <button
                    onClick={() => skills.newsAlert ? setActiveTab('news') : navigate('/skills')}
                    className={`px-4 py-1.5 rounded-full hover:bg-white/5 text-sm font-bold whitespace-nowrap flex items-center gap-1 transition-colors ${activeTab === 'news' ? 'bg-white/10' : (!skills.newsAlert ? 'opacity-50 cursor-pointer' : 'opacity-60')}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('news', 'News')}
                    {!skills.newsAlert && <Lock size={12} />}
                </button>
                <button
                    onClick={() => setActiveTab('comments')}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'comments' ? 'bg-white/10' : 'opacity-60 hover:opacity-100'}`}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('comments', 'Comments')}
                </button>
            </div>

            {/* Main Price Card - Always Visible */}
            <div className="space-y-1 mb-6">
                <h2 className="text-4xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    ${formatPrice(displayPrice)}
                </h2>
                <div className={`flex items-center text-sm font-bold ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change24h >= 0 ? '▲' : '▼'} {Math.abs(asset.change24h).toFixed(2)}% • {asset.change24h >= 0 ? '+' : ''}{formatPrice(asset.price * (asset.change24h / 100))}
                </div>
            </div>

            {(activeTab === 'overview') && (
                <>
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

                                    {/* Bollinger Bands */}


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
                                {(() => {
                                    const date = new Date(hoverData.date);
                                    let dateStr;
                                    if (['1d', '1w', '1mo', 'All'].includes(interval)) {
                                        dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
                                    } else {
                                        // For short intervals, show Date AND Time
                                        dateStr = `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                                    }
                                    return `${dateStr} • $${formatPrice(hoverData.price)}`;
                                })()}
                            </div>
                        )}
                    </div>

                    {/* X-Axis Labels */}
                    <div className="flex justify-between text-[10px] opacity-50 px-1 mt-1 font-mono">
                        <span>{history.length > 0 ? (['1d', '1w', '1mo', 'All'].includes(interval) ? new Date(history[0].date).toLocaleDateString() : new Date(history[0].date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) : ''}</span>
                        <span>{history.length > 0 ? (['1d', '1w', '1mo', 'All'].includes(interval) ? new Date(history[history.length - 1].date).toLocaleDateString() : new Date(history[history.length - 1].date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) : ''}</span>
                    </div>

                    {/* Timeframe Selector */}
                    <div id="timeframe-selector" className="flex justify-between items-center px-2">
                        <div className="flex gap-4">
                            {['1m', '5m', '1h', '1d', 'All'].map((t) => {
                                const isLocked = !skills.multiTimeframe && ['1m', '5m', '1h'].includes(t);
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

                    </div>

                    {/* Chart Type Selector */}
                    <div className="flex justify-start px-2 mt-2">
                        <button
                            onClick={() => setChartType(prev => prev === 'candle' ? 'line' : 'candle')}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            <TrendingUp size={16} />
                            {chartType === 'candle' ? t('candles') : t('line')}
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
                </>
            )}

            {activeTab === 'indicators' && (
                <div className="space-y-6 mb-6 relative">

                    {/* Indicator Interval Selector */}
                    <div className="flex justify-between items-center px-1">
                        <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{t('technical_analysis')}</h3>
                        <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
                            {['5m', '15m', '1h', '3h', '1d'].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setIndicatorInterval(t)}
                                    className={`px-3 py-1 rounded text-xs font-bold transition-all`}
                                    style={{
                                        color: indicatorInterval === t ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        backgroundColor: indicatorInterval === t ? 'var(--card-bg)' : 'transparent',
                                        opacity: indicatorInterval === t ? 1 : 0.6
                                    }}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="flex justify-end mb-2 px-1">
                        <span className="text-[10px] opacity-50 uppercase tracking-wider font-bold">
                            Interval: {indicatorInterval === '1d' ? 'Daily (24h)' : indicatorInterval}
                        </span>
                    </div>

                    {/* Loading or No Data State */}
                    {!indicators ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-sm opacity-50">Loading technical indicators...</p>
                        </div>
                    ) : (
                        <>
                            {/* Summary */}
                            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-bold text-lg">Technical Summary</h4>
                                    <div className={`px-4 py-1.5 rounded text-sm font-bold ${indicators.summary?.recommendation.includes('Buy') ? 'bg-green-500 text-white' :
                                        indicators.summary?.recommendation.includes('Sell') ? 'bg-red-500 text-white' :
                                            'bg-gray-500 text-white'
                                        }`}>
                                        {indicators.summary?.recommendation || 'Neutral'}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                                    <div className="p-3 rounded bg-white/5 border border-white/10">
                                        <div className="opacity-50 mb-1 uppercase tracking-wider">Buy</div>
                                        <div className="text-green-400 text-xl">{indicators.summary?.buy || 0}</div>
                                    </div>
                                    <div className="p-3 rounded bg-white/5 border border-white/10">
                                        <div className="opacity-50 mb-1 uppercase tracking-wider">Sell</div>
                                        <div className="text-red-400 text-xl">{indicators.summary?.sell || 0}</div>
                                    </div>
                                    <div className="p-3 rounded bg-white/5 border border-white/10">
                                        <div className="opacity-50 mb-1 uppercase tracking-wider">Neutral</div>
                                        <div className="text-gray-400 text-xl">{indicators.summary?.neutral || 0}</div>
                                    </div>
                                </div>
                            </Card>

                            {/* Pivot Points */}
                            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                                <h4 className="font-bold mb-4 text-lg">Pivot Points</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs">
                                        <thead>
                                            <tr className="opacity-50 border-b border-white/10">
                                                <th className="text-left py-2">Level</th>
                                                <th className="text-right py-2">Classic</th>
                                                <th className="text-right py-2">Fibonacci</th>
                                            </tr>
                                        </thead>
                                        <tbody className="font-mono">
                                            {['r3', 'r2', 'r1', 'p', 's1', 's2', 's3'].map((level) => (
                                                <tr key={level} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className="py-2.5 font-bold uppercase text-blue-400">{level}</td>
                                                    <td className="py-2.5 text-right">{formatPrice(indicators.pivotPoints?.classic[level] || 0)}</td>
                                                    <td className="py-2.5 text-right">{formatPrice(indicators.pivotPoints?.fibonacci[level] || 0)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>

                            {/* Moving Averages */}
                            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                                <h4 className="font-bold mb-4 text-lg">Moving Averages</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs">
                                        <thead>
                                            <tr className="opacity-50 border-b border-white/10">
                                                <th className="text-left py-2">Period</th>
                                                <th className="text-right py-2">Simple</th>
                                                <th className="text-right py-2">Exponential</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {indicators.movingAverages?.map((ma: any) => (
                                                <tr key={ma.period} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className="py-2.5 font-bold text-blue-400">MA{ma.period}</td>
                                                    <td className="py-2.5 text-right">
                                                        <div className="flex justify-end items-center gap-2">
                                                            <span className="font-mono opacity-80">{formatPrice(ma.simple || 0)}</span>
                                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${ma.simpleAction === 'Buy' ? 'bg-green-500/20 text-green-500' :
                                                                ma.simpleAction === 'Sell' ? 'bg-red-500/20 text-red-500' :
                                                                    'bg-gray-500/20 text-gray-500'
                                                                }`}>
                                                                {ma.simpleAction || 'Neutral'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="py-2.5 text-right">
                                                        <div className="flex justify-end items-center gap-2">
                                                            <span className="font-mono opacity-80">{formatPrice(ma.exponential || 0)}</span>
                                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${ma.exponentialAction === 'Buy' ? 'bg-green-500/20 text-green-500' :
                                                                ma.exponentialAction === 'Sell' ? 'bg-red-500/20 text-red-500' :
                                                                    'bg-gray-500/20 text-gray-500'
                                                                }`}>
                                                                {ma.exponentialAction || 'Neutral'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>

                            {/* Technical Indicators */}
                            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                                <h4 className="font-bold mb-4 text-lg">Technical Indicators</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs">
                                        <thead>
                                            <tr className="opacity-50 border-b border-white/10">
                                                <th className="text-left py-2">Indicator</th>
                                                <th className="text-right py-2">Value</th>
                                                <th className="text-right py-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {indicators.indicators?.map((ind: any) => (
                                                <tr key={ind.name} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className="py-2.5 font-bold">{ind.name}</td>
                                                    <td className="py-2.5 text-right font-mono opacity-80">{ind.value?.toFixed(4) || '-'}</td>
                                                    <td className="py-2.5 text-right">
                                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${['Buy', 'Strong Buy'].includes(ind.action) || ind.action?.includes('Upside') ? 'bg-green-500 text-white' :
                                                            ['Sell', 'Strong Sell'].includes(ind.action) || ind.action?.includes('Downside') ? 'bg-red-500 text-white' :
                                                                ['Overbought', 'High Volatility'].includes(ind.action) ? 'bg-orange-500 text-white' :
                                                                    'bg-gray-500 text-white'
                                                            }`}>
                                                            {ind.action?.replace('_', ' ') || 'Neutral'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </>
                    )}
                </div>
            )}
            {activeTab === 'overview' && (
                <>
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
                    <Card id="fundamentals" className="p-5 relative mb-6" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
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

                        <h3 className="font-bold text-lg mb-6">{t('fundamentals')}</h3>

                        {(!fundamentals?.financialData && fundamentals?.summaryDetail) ? (
                            /* Crypto / Alternative View */
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Market Statistics</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">Market Cap</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.marketCap ? `$${(fundamentals.summaryDetail.marketCap / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Volume (24h)</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.volume ? `$${(fundamentals.summaryDetail.volume / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Circulating Supply</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.circulatingSupply ? `${(fundamentals.summaryDetail.circulatingSupply / 1e6).toFixed(2)}M` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Max Supply</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.maxSupply ? `${(fundamentals.summaryDetail.maxSupply / 1e6).toFixed(2)}M` : '∞'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Price Statistics</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">52 Week High</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.fiftyTwoWeekHigh ? `$${fundamentals.summaryDetail.fiftyTwoWeekHigh.toLocaleString()}` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">52 Week Low</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.fiftyTwoWeekLow ? `$${fundamentals.summaryDetail.fiftyTwoWeekLow.toLocaleString()}` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Day High</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.dayHigh ? `$${fundamentals.summaryDetail.dayHigh.toLocaleString()}` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Day Low</p>
                                            <p className="font-bold">{fundamentals.summaryDetail.dayLow ? `$${fundamentals.summaryDetail.dayLow.toLocaleString()}` : 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Standard Stock View */
                            <div className="space-y-8">
                                {/* Valuation Measures */}
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Valuation Measures</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">Market Cap</p>
                                            <p className="font-bold">{fundamentals?.summaryDetail?.marketCap ? `$${(fundamentals.summaryDetail.marketCap / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Enterprise Value</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.enterpriseValue ? `$${(fundamentals.defaultKeyStatistics.enterpriseValue / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Trailing P/E</p>
                                            <p className="font-bold">{fundamentals?.summaryDetail?.trailingPE?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Forward P/E</p>
                                            <p className="font-bold">{fundamentals?.summaryDetail?.forwardPE?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">PEG Ratio</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.pegRatio?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Price/Sales</p>
                                            <p className="font-bold">{fundamentals?.summaryDetail?.priceToSalesTrailing12Months?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Price/Book</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.priceToBook?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Financial Highlights */}
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Financial Highlights</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">Profit Margin</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.profitMargins ? `${(fundamentals.defaultKeyStatistics.profitMargins * 100).toFixed(2)}%` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Operating Margin</p>
                                            <p className="font-bold">{fundamentals?.financialData?.operatingMargins ? `${(fundamentals.financialData.operatingMargins * 100).toFixed(2)}%` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Return on Assets</p>
                                            <p className="font-bold">{fundamentals?.financialData?.returnOnAssets ? `${(fundamentals.financialData.returnOnAssets * 100).toFixed(2)}%` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Return on Equity</p>
                                            <p className="font-bold">{fundamentals?.financialData?.returnOnEquity ? `${(fundamentals.financialData.returnOnEquity * 100).toFixed(2)}%` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Revenue (ttm)</p>
                                            <p className="font-bold">{fundamentals?.financialData?.totalRevenue ? `$${(fundamentals.financialData.totalRevenue / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Revenue Per Share</p>
                                            <p className="font-bold">{fundamentals?.financialData?.revenuePerShare?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Gross Profit</p>
                                            <p className="font-bold">{fundamentals?.financialData?.grossProfits ? `$${(fundamentals.financialData.grossProfits / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">EBITDA</p>
                                            <p className="font-bold">{fundamentals?.financialData?.ebitda ? `$${(fundamentals.financialData.ebitda / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Diluted EPS</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.trailingEps?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Balance Sheet */}
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Balance Sheet</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">Total Cash</p>
                                            <p className="font-bold">{fundamentals?.financialData?.totalCash ? `$${(fundamentals.financialData.totalCash / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Total Debt</p>
                                            <p className="font-bold">{fundamentals?.financialData?.totalDebt ? `$${(fundamentals.financialData.totalDebt / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Debt/Equity</p>
                                            <p className="font-bold">{fundamentals?.financialData?.debtToEquity?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Current Ratio</p>
                                            <p className="font-bold">{fundamentals?.financialData?.currentRatio?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Book Value</p>
                                            <p className="font-bold">{fundamentals?.defaultKeyStatistics?.bookValue?.toFixed(2) || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cash Flow */}
                                <div>
                                    <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">Cash Flow</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <div>
                                            <p className="text-xs opacity-50">Operating Cash Flow</p>
                                            <p className="font-bold">{fundamentals?.financialData?.operatingCashflow ? `$${(fundamentals.financialData.operatingCashflow / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-50">Levered Free Cash Flow</p>
                                            <p className="font-bold">{fundamentals?.financialData?.freeCashflow ? `$${(fundamentals.financialData.freeCashflow / 1e9).toFixed(2)}B` : 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}      {/* Revenue & Earnings Chart */}
                        {fundamentals?.earnings?.financialsChart?.yearly && (
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-xs font-bold opacity-50 uppercase tracking-wider mb-4">Revenue & Earnings (Yearly)</h4>
                                <div className="h-40 w-full flex items-end gap-2">
                                    {fundamentals.earnings.financialsChart.yearly.map((item: any) => {
                                        const maxVal = Math.max(...fundamentals.earnings.financialsChart.yearly.map((i: any) => Math.max(i.revenue, i.earnings)));
                                        return (
                                            <div key={item.date} className="flex-1 flex flex-col justify-end gap-2 h-full">
                                                <div className="flex items-end justify-center gap-1 h-full relative group">
                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black/90 text-white text-[10px] p-2 rounded z-10 whitespace-nowrap border border-white/10 shadow-xl">
                                                        <div className="font-bold mb-1">{item.date}</div>
                                                        <div className="text-blue-400">Rev: ${(item.revenue / 1e9).toFixed(2)}B</div>
                                                        <div className="text-green-400">Earn: ${(item.earnings / 1e9).toFixed(2)}B</div>
                                                    </div>

                                                    {/* Revenue */}
                                                    <div className="w-2 sm:w-4 bg-blue-500/50 rounded-t hover:bg-blue-500 transition-colors" style={{ height: `${Math.max(4, (item.revenue / maxVal) * 100)}%` }}></div>
                                                    {/* Earnings */}
                                                    <div className="w-2 sm:w-4 bg-green-500/50 rounded-t hover:bg-green-500 transition-colors" style={{ height: `${Math.max(4, (item.earnings / maxVal) * 100)}%` }}></div>
                                                </div>
                                                <div className="text-[10px] opacity-50 text-center">{item.date}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center gap-4 mt-4 text-[10px] font-bold uppercase tracking-wider">
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Revenue</div>
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Earnings</div>
                                </div>
                            </div>
                        )}

                    </Card>

                    {/* About */}
                    <Card className="p-5" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                        <h3 className="font-bold text-lg mb-2">{t('about')} {asset.name}</h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            {asset.description}
                        </p>
                    </Card>
                </>
            )
            }

            {
                activeTab === 'news' && (
                    <div className="space-y-4">
                        {newsLoading ? (
                            <div className="flex justify-center p-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            </div>
                        ) : companyNews.length > 0 ? (
                            companyNews.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="p-5 rounded-2xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                {item.favicon_url ? (
                                                    <img src={item.favicon_url} alt="" className="w-5 h-5 rounded-full" />
                                                ) : (
                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                                        <span className="text-[10px] opacity-60">NEWS</span>
                                                    </div>
                                                )}
                                                <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{item.site}</span>
                                                <span className="text-xs opacity-60" style={{ color: 'var(--text-primary)' }}>• {new Date(item.time || item.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <div className="text-center p-8 opacity-50">
                                {t('no_news_found', 'No recent news found for this asset.')}
                            </div>
                        )}
                    </div>
                )
            }
            {
                activeTab === 'comments' && (
                    <div className="relative h-[75vh] -mx-5 border-t mt-4 flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--card-border)' }}>

                        {/* Input Area - Moved to Top */}
                        <div className="p-4 border-b" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--bg-primary)' }}>
                            {replyTo && (
                                <div className="flex items-center justify-between mb-2 px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <div className="flex items-center gap-2 text-xs text-blue-400">
                                        <MessageCircle size={12} />
                                        <span>{t('replying_to', 'Replying to')} <span className="font-bold">{replyTo.username}</span></span>
                                    </div>
                                    <button
                                        onClick={() => setReplyTo(null)}
                                        className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                                        title={t('cancel_reply', 'Cancel reply')}
                                    >
                                        <X size={14} style={{ color: 'var(--text-primary)', opacity: 0.6 }} />
                                    </button>
                                </div>
                            )}
                            <div className="relative flex items-end gap-2 rounded-2xl p-2 pl-4 border focus-within:ring-1 transition-all shadow-sm"
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--card-border)',
                                    '--tw-ring-color': 'var(--accent-color)'
                                } as React.CSSProperties}
                            >
                                <textarea
                                    value={commentInput}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                    placeholder={t('write_comment', 'Leave your comment...')}
                                    className="flex-1 bg-transparent text-sm outline-none resize-none scrollbar-hide py-3 max-h-[100px]"
                                    rows={1}
                                    style={{ color: 'var(--text-primary)' }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handlePostComment();
                                        }
                                    }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = Math.min(target.scrollHeight, 100) + 'px';
                                    }}
                                />
                                <button
                                    onClick={handlePostComment}
                                    disabled={!commentInput.trim()}
                                    className="p-2.5 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shrink-0 mb-[2px]"
                                    style={{ backgroundColor: 'var(--accent-color)' }}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Comments List */}
                        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent">
                            {comments.length > 0 ? (
                                comments.filter(c => !c.parentId).sort((a, b) => b.timestamp - a.timestamp).map((comment) => (
                                    <div key={comment.id} className="animate-fade-in">
                                        {/* Parent Comment */}
                                        <div className="flex gap-3">
                                            {/* Avatar */}
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 shadow-sm"
                                                style={{
                                                    backgroundColor: `hsl(${comment.username.length * 40}, 70%, 50%)`,
                                                    color: '#fff'
                                                }}
                                            >
                                                {comment.username.substring(0, 2).toUpperCase()}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{comment.username}</span>
                                                        <span className="text-xs opacity-40" style={{ color: 'var(--text-primary)' }}>{new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    </div>
                                                    {user?.username === comment.username && (
                                                        <button
                                                            onClick={() => handleDeleteComment(comment.id)}
                                                            className="opacity-60 hover:opacity-100 text-red-500/50 hover:text-red-500 transition-all p-1"
                                                            title={t('delete_comment', 'Delete comment')}
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    )}
                                                </div>

                                                <div
                                                    className="text-sm leading-relaxed whitespace-pre-wrap break-words mb-3"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {comment.content}
                                                </div>

                                                {/* Actions */}
                                                <div className="flex items-center gap-6">
                                                    <button
                                                        onClick={() => handleReply(comment)}
                                                        className="flex items-center gap-1.5 text-xs font-medium opacity-60 hover:opacity-100 transition-opacity"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        <MessageCircle size={16} />
                                                        <span>{t('reply', 'Reply')}</span>
                                                    </button>
                                                    <div className="flex items-center gap-4">
                                                        <button
                                                            onClick={() => handleLike(comment.id)}
                                                            className={`flex items-center gap-1.5 text-xs font-medium transition-all ${comment.likes.includes(user?.username || '') ? 'opacity-100 text-blue-500' : 'opacity-60 hover:opacity-100'}`}
                                                            style={{ color: comment.likes.includes(user?.username || '') ? '#3b82f6' : 'var(--text-primary)' }}
                                                        >
                                                            <ThumbsUp size={16} fill={comment.likes.includes(user?.username || '') ? 'currentColor' : 'none'} />
                                                            <span>{comment.likes.length}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Replies */}
                                        {comments.filter(r => r.parentId === comment.id).sort((a, b) => a.timestamp - b.timestamp).map(reply => (
                                            <div key={reply.id} className="flex gap-3 mt-4 ml-10 pl-4 border-l-2 border-white/5">
                                                {/* Avatar */}
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-sm"
                                                    style={{
                                                        backgroundColor: `hsl(${reply.username.length * 40}, 70%, 50%)`,
                                                        color: '#fff'
                                                    }}
                                                >
                                                    {reply.username.substring(0, 2).toUpperCase()}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <div className="flex items-baseline gap-2">
                                                            <span className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>{reply.username}</span>
                                                            <span className="text-[10px] opacity-40" style={{ color: 'var(--text-primary)' }}>{new Date(reply.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                        </div>
                                                        {user?.username === reply.username && (
                                                            <button
                                                                onClick={() => handleDeleteComment(reply.id)}
                                                                className="opacity-60 hover:opacity-100 text-red-500/50 hover:text-red-500 transition-all p-1"
                                                                title={t('delete_comment', 'Delete comment')}
                                                            >
                                                                <Trash2 size={12} />
                                                            </button>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="text-sm leading-relaxed whitespace-pre-wrap break-words mb-2"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {reply.content}
                                                    </div>

                                                    {/* Actions for Reply */}
                                                    <div className="flex items-center gap-4">
                                                        <button
                                                            onClick={() => handleLike(reply.id)}
                                                            className={`flex items-center gap-1.5 text-[10px] font-medium transition-all ${reply.likes.includes(user?.username || '') ? 'opacity-100 text-blue-500' : 'opacity-60 hover:opacity-100'}`}
                                                            style={{ color: reply.likes.includes(user?.username || '') ? '#3b82f6' : 'var(--text-primary)' }}
                                                        >
                                                            <ThumbsUp size={12} fill={reply.likes.includes(user?.username || '') ? 'currentColor' : 'none'} />
                                                            <span>{reply.likes.length}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full opacity-40 gap-4">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'var(--card-bg)' }}>
                                        <span className="text-4xl">💬</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{t('no_comments', 'Start the conversation!')}</p>
                                        <p className="text-xs opacity-50" style={{ color: 'var(--text-primary)' }}>{t('be_first', 'Be the first to share your thoughts on this asset.')}</p>
                                    </div>
                                </div>
                            )}
                            <div ref={commentsEndRef} />
                        </div>
                    </div>
                )
            }

            {
                activeTab !== 'comments' && createPortal(
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
            {
                activeTab === 'overview' && (
                    <div id="order-form">
                        <OrderForm
                            assetId={asset.id}
                            currentPrice={asset.price}
                            ownedAmount={owned}
                        />
                    </div>
                )
            }
        </div >
    );
};
