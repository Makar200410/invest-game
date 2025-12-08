import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Lock, AlertTriangle, ExternalLink, ShieldAlert, Globe, Newspaper, TrendingUp } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { useTranslation } from 'react-i18next';

interface TickerTickStory {
    id: string;
    title: string;
    url: string;
    site: string;
    time: number;
    favicon_url?: string;
    tags?: string[];
    tickers?: string[];
}

interface InsiderTip {
    id: string;
    title: string;
    content: string;
    impact: 'High' | 'Medium' | 'Low';
    reliability: string;
    date: number;
    url?: string;
}

export const NewsPage: React.FC = () => {
    const { t } = useTranslation();
    const { skills } = useGameStore();
    const [searchParams] = useSearchParams();
    const initialTab = searchParams.get('tab') as 'general' | 'insider' || 'general';
    const activeTabState = useState<'general' | 'insider'>(initialTab);
    const [activeTab, setActiveTab] = activeTabState;
    const [news, setNews] = useState<TickerTickStory[]>([]);
    const [insiderTips, setInsiderTips] = useState<InsiderTip[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (activeTab === 'general' && skills.newsAlert) {
            fetchNews();
        } else if (activeTab === 'insider' && skills.insiderInfo) {
            fetchInsiderTips();
        }
    }, [activeTab, skills.newsAlert, skills.insiderInfo]);

    // Handle hash navigation
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#insider') {
            setActiveTab('insider');
        } else if (location.hash === '#general') {
            setActiveTab('general');
        }
    }, [location.hash]);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const data = await import('../../services/api').then(m => m.fetchNews());
            if (Array.isArray(data)) {
                setNews(data);
            }
        } catch (error) {
            console.error('Failed to fetch news:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchInsiderTips = async () => {
        setLoading(true);
        try {
            const data = await import('../../services/api').then(m => m.fetchInsiderTips());
            if (Array.isArray(data)) {
                setInsiderTips(data);
            }
        } catch (error) {
            console.error('Failed to fetch insider tips:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="pb-24 space-y-4 pt-4 px-4">
            {/* Header */}
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {t('market_news', 'Market News')}
                </h1>

                <div className="flex p-1 rounded-2xl w-full max-w-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'general'
                            ? 'shadow-sm'
                            : 'opacity-60 hover:opacity-100'
                            }`}
                        style={{
                            backgroundColor: activeTab === 'general' ? 'var(--bg-primary)' : 'transparent',
                            color: activeTab === 'general' ? 'var(--text-primary)' : 'var(--text-primary)'
                        }}
                    >
                        <Globe size={16} />
                        {t('news')}
                    </button>
                    <button
                        onClick={() => setActiveTab('insider')}
                        className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'insider'
                            ? 'shadow-sm'
                            : 'opacity-60 hover:opacity-100'
                            }`}
                        style={{
                            backgroundColor: activeTab === 'insider' ? 'var(--bg-primary)' : 'transparent',
                            color: activeTab === 'insider' ? '#ef4444' : 'var(--text-primary)'
                        }}
                    >
                        <ShieldAlert size={16} />
                        {t('insider_channel')}
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'general' ? (
                    <motion.div
                        key="general"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                    >
                        {!skills.newsAlert ? (
                            <div className="p-8 rounded-3xl text-center relative overflow-hidden shadow-xl" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 z-0"></div>
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Lock className="text-white" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{t('news_alert_locked')}</h3>
                                        <p className="max-w-xs mx-auto text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>{t('skill_newsAlert_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                                        <p className="text-sm font-medium">{t('loading_chart_data')}</p>
                                    </div>
                                ) : (
                                    news.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block group"
                                        >
                                            <div className="p-2 rounded-2xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        {item.favicon_url ? (
                                                            <img src={item.favicon_url} alt="" className="w-4 h-4 rounded-full" />
                                                        ) : (
                                                            <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                                                <Newspaper size={10} className="opacity-60" style={{ color: 'var(--text-primary)' }} />
                                                            </div>
                                                        )}
                                                        <span className="text-[10px] font-bold" style={{ color: 'var(--text-primary)' }}>{item.site}</span>
                                                        <span className="text-[10px] opacity-60" style={{ color: 'var(--text-primary)' }}>• {formatDate(item.time)}</span>
                                                    </div>
                                                    <ExternalLink size={12} className="opacity-40 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }} />
                                                </div>

                                                <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                    {item.title}
                                                </h3>

                                                {item.tickers && (
                                                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                                        {item.tickers.slice(0, 4).map(ticker => (
                                                            <span key={ticker} className="text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                                                                style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                                                                <TrendingUp size={10} />
                                                                {ticker}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                    ))
                                )}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="insider"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                    >
                        {!skills.insiderInfo ? (
                            <div className="p-8 rounded-3xl text-center border border-red-500/20 relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                                        <Lock className="text-red-500" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-red-500 mb-2">{t('insider_info_locked')}</h3>
                                        <p className="text-red-500/70 max-w-xs mx-auto text-sm leading-relaxed">{t('skill_insiderInfo_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                                        <p className="text-sm font-medium">{t('decrypting')}</p>
                                    </div>
                                ) : (
                                    insiderTips.map((tip) => (
                                        <div key={tip.id} className="rounded-2xl overflow-hidden shadow-lg relative group" style={{ backgroundColor: 'var(--card-bg)' }}>
                                            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest z-10">
                                                {t('confidential')}
                                            </div>

                                            <div className="p-3 relative z-10">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                                                        <AlertTriangle size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <span className="text-xs font-bold text-red-400 uppercase tracking-wide">{t('high_priority_intel')}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                                            <span>{formatDate(tip.date)}</span>
                                                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                                            <span className="text-green-400 font-bold">Reliability: {tip.reliability}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>{tip.title}</h3>

                                                <div className="p-3 rounded-xl border backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--card-border)', opacity: 0.8 }}>
                                                    <p className="text-xs leading-relaxed font-mono" style={{ color: 'var(--text-primary)' }}>
                                                        {tip.content}
                                                    </p>
                                                </div>

                                                {tip.url && tip.url !== '#' && (
                                                    <a href={tip.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wide">
                                                        {t('view_source')} <ExternalLink size={12} />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
