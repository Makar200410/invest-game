import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertTriangle, ExternalLink, ShieldAlert, Globe } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';

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
    const { skills } = useGameStore();
    const [activeTab, setActiveTab] = useState<'general' | 'insider'>('general');
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
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Market Intel
                </h1>
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'general'
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                            }`}
                    >
                        News
                    </button>
                    <button
                        onClick={() => setActiveTab('insider')}
                        className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'insider'
                            ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                            }`}
                    >
                        <ShieldAlert size={16} />
                        Insider
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'general' ? (
                    <motion.div
                        key="general"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        {!skills.newsAlert ? (
                            <Card className="p-8 flex flex-col items-center text-center space-y-4 border-dashed border-2 border-gray-700">
                                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                                    <Lock className="text-gray-400" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">News Alert Locked</h3>
                                    <p className="text-gray-400 mt-2">Unlock the News Alert skill to access real-time market news.</p>
                                </div>
                            </Card>
                        ) : (
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="text-center py-12 text-gray-500">Loading market news...</div>
                                ) : (
                                    news.map((item) => (
                                        <Card key={item.id} className="p-4 hover:bg-gray-800/80 transition-colors group cursor-pointer">
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        {item.favicon_url ? (
                                                            <img src={item.favicon_url} alt="" className="w-4 h-4 rounded-full" />
                                                        ) : (
                                                            <Globe size={14} className="text-gray-500" />
                                                        )}
                                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                                                            {item.site}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {formatDate(item.time)}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                    {item.tickers && (
                                                        <div className="flex gap-2 overflow-x-auto">
                                                            {item.tickers.slice(0, 5).map(ticker => (
                                                                <span key={ticker} className="text-xs font-bold bg-gray-700/50 px-2 py-1 rounded text-gray-300">
                                                                    {ticker}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <ExternalLink className="text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" size={20} />
                                            </a>
                                        </Card>
                                    ))
                                )}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="insider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        {!skills.insiderInfo ? (
                            <Card className="p-8 flex flex-col items-center text-center space-y-4 border-dashed border-2 border-red-900/30 bg-red-900/5">
                                <div className="w-16 h-16 rounded-full bg-red-900/20 flex items-center justify-center">
                                    <Lock className="text-red-400" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-red-100">Insider Info Locked</h3>
                                    <p className="text-red-300/70 mt-2">Unlock Insider Info to access high-impact market rumors and tips.</p>
                                </div>
                            </Card>
                        ) : (
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="text-center py-12 text-gray-500">Decrypting insider data...</div>
                                ) : (
                                    insiderTips.map((tip) => (
                                        <Card key={tip.id} className="p-0 overflow-hidden border-l-4 border-l-red-500 relative">
                                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-widest">
                                                Confidential
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                                        <AlertTriangle size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-bold text-red-400">High Priority Intel</span>
                                                            <span className="text-xs text-gray-500">• {formatDate(tip.date)}</span>
                                                        </div>
                                                        <div className="text-xs text-gray-400 flex items-center gap-2">
                                                            Reliability: <span className="text-green-400 font-bold">{tip.reliability}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                                                <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                                                    {tip.content}
                                                </p>
                                                {tip.url && tip.url !== '#' && (
                                                    <a href={tip.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300">
                                                        View Source <ExternalLink size={12} />
                                                    </a>
                                                )}
                                            </div>
                                        </Card>
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
