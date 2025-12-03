import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Target, AlertTriangle, Shield, ChevronLeft, ChevronRight, Crown, Users, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { fetchLeaderboard, registerForTournament, fetchTournamentStatus } from '../../services/api';
import { useTranslation } from 'react-i18next';

interface LeaderboardUser {
    username: string;
    portfolioValue: number;
    rankTier: number;
    isInTournament: boolean;
}

interface TournamentStatus {
    isInTournament: boolean;
    rankTier: number;
    levelName: string;
    startBalance: number;
    currentBalance: number;
    profit: number;
    profitPercent: number;
    requirements: {
        promote: number;
        demote: number | null;
    };
    nextLevelName: string;
}

const getLevelColor = (tier: number) => {
    if (tier <= 3) return 'text-orange-400';
    if (tier <= 6) return 'text-gray-300';
    if (tier <= 9) return 'text-yellow-400';
    if (tier <= 12) return 'text-cyan-400';
    if (tier <= 14) return 'text-purple-400';
    return 'text-red-500';
};

export const Ranking: React.FC = () => {
    const { t } = useTranslation();
    const { user } = useGameStore();
    const navigate = useNavigate();

    const LEVELS = [
        { tier: 1, name: t('bronze_i') },
        { tier: 2, name: t('bronze_ii') },
        { tier: 3, name: t('bronze_iii') },
        { tier: 4, name: t('silver_i') },
        { tier: 5, name: t('silver_ii') },
        { tier: 6, name: t('silver_iii') },
        { tier: 7, name: t('gold_i') },
        { tier: 8, name: t('gold_ii') },
        { tier: 9, name: t('gold_iii') },
        { tier: 10, name: t('platinum_i') },
        { tier: 11, name: t('platinum_ii') },
        { tier: 12, name: t('platinum_iii') },
        { tier: 13, name: t('diamond_i') },
        { tier: 14, name: t('diamond_ii') },
        { tier: 15, name: t('grandmaster') }
    ];


    // Helper function to convert backend tier name to translation key
    const getTierTranslationKey = (tierName: string): string => {
        const nameMap: { [key: string]: string } = {
            'Bronze I': 'bronze_i',
            'Bronze II': 'bronze_ii',
            'Bronze III': 'bronze_iii',
            'Silver I': 'silver_i',
            'Silver II': 'silver_ii',
            'Silver III': 'silver_iii',
            'Gold I': 'gold_i',
            'Gold II': 'gold_ii',
            'Gold III': 'gold_iii',
            'Platinum I': 'platinum_i',
            'Platinum II': 'platinum_ii',
            'Platinum III': 'platinum_iii',
            'Diamond I': 'diamond_i',
            'Diamond II': 'diamond_ii',
            'Grandmaster': 'grandmaster'
        };
        return nameMap[tierName] || tierName.toLowerCase().replace(/ /g, '_');
    };

    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
    const [tournamentStatus, setTournamentStatus] = useState<TournamentStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [registering, setRegistering] = useState(false);
    const [selectedTier, setSelectedTier] = useState<number>(1);
    const [activeView, setActiveView] = useState<'tournament' | 'global'>('tournament');

    const loadData = async () => {
        try {
            setLoading(true);
            const [lbData, statusData] = await Promise.all([
                fetchLeaderboard(),
                user ? fetchTournamentStatus(user.username) : Promise.resolve(null)
            ]);
            setLeaderboard(lbData);
            setTournamentStatus(statusData);

            if (statusData?.rankTier) {
                setSelectedTier(statusData.rankTier);
            } else if (user?.rankTier) {
                setSelectedTier(user.rankTier);
            }
        } catch (err) {
            console.error('Failed to load ranking data:', err);
            setError('Failed to load ranking.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [user]);

    const handleRegister = async () => {
        if (!user) return;
        try {
            setRegistering(true);
            await registerForTournament(user.username);
            await loadData();
        } catch (err) {
            console.error('Registration failed:', err);
            alert('Failed to register for tournament');
        } finally {
            setRegistering(false);
        }
    };

    const tournamentPlayers = leaderboard.filter(p => p.isInTournament && p.rankTier === selectedTier);
    const selectedLevelConfig = LEVELS.find(l => l.tier === selectedTier) || LEVELS[0];

    const changeTier = (delta: number) => {
        const newTier = Math.max(1, Math.min(15, selectedTier + delta));
        setSelectedTier(newTier);
    };

    return (
        <div className="space-y-6 pb-24 pt-4 px-4">
            {/* View Tabs - Premium Segmented Control */}
            <div className="p-1 rounded-2xl backdrop-blur-md border relative" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="flex relative z-10">
                    <button
                        onClick={() => setActiveView('tournament')}
                        className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 z-10`}
                        style={{ color: activeView === 'tournament' ? '#ffffff' : 'var(--text-primary)', opacity: activeView === 'tournament' ? 1 : 0.6 }}
                    >
                        <Trophy size={16} className={activeView === 'tournament' ? 'text-yellow-400 drop-shadow-md' : ''} />
                        <span className="text-center leading-tight">{t('weekly_tournament')}</span>
                    </button>
                    <button
                        onClick={() => setActiveView('global')}
                        className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 z-10`}
                        style={{ color: activeView === 'global' ? '#ffffff' : 'var(--text-primary)', opacity: activeView === 'global' ? 1 : 0.6 }}
                    >
                        <Crown size={16} className={activeView === 'global' ? 'text-purple-400 drop-shadow-md' : ''} />
                        <span className="text-center leading-3 max-w-[100px]">{t('global_ranking')}</span>
                    </button>
                </div>
                {/* Sliding Background */}
                <motion.div
                    className={`absolute top-1 bottom-1 rounded-xl shadow-lg transition-colors duration-300 ${activeView === 'tournament' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/20' : 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-orange-500/20'}`}
                    initial={false}
                    animate={{
                        left: activeView === 'tournament' ? '4px' : '50%',
                        width: 'calc(50% - 4px)',
                        x: activeView === 'global' ? '0%' : '0%'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {activeView === 'tournament' ? (
                    <motion.div
                        key="tournament"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Tournament Status Card */}
                        <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{ borderColor: 'var(--card-border)' }}>
                            <div className="absolute inset-0" style={{ backgroundColor: 'var(--card-bg)' }}></div>
                            {/* Dynamic Background Gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                                            <Trophy size={20} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                        </div>
                                        <h2 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                            {t('weekly_tournament')}
                                        </h2>
                                    </div>
                                    {tournamentStatus?.isInTournament && (
                                        <div className={`px-2 py-1 rounded-lg border bg-white/5 backdrop-blur-md ${getLevelColor(tournamentStatus.rankTier)} border-white/10 shadow-lg max-w-[100px] flex justify-center`}>
                                            <span className="text-[10px] font-black uppercase tracking-wider truncate">
                                                {t(getTierTranslationKey(tournamentStatus.levelName))}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {!tournamentStatus?.isInTournament ? (
                                    <div className="text-center py-8">
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
                                        >
                                            <Trophy size={40} className="text-white drop-shadow-md" />
                                        </motion.div>
                                        <button
                                            onClick={handleRegister}
                                            disabled={registering}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-wider shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">{registering ? t('joining') : t('join_now')}</span>
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Next Tier Card - Elongated & Prominent */}
                                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                                            <div className="flex justify-between items-end relative z-10">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1 opacity-60">
                                                        <Target size={14} />
                                                        <span className="text-[10px] font-bold uppercase tracking-wider">{t('next_tier')}</span>
                                                    </div>
                                                    <div className={`text-2xl font-black ${getLevelColor(tournamentStatus.rankTier + 1)}`}>
                                                        {t(getTierTranslationKey(tournamentStatus.nextLevelName))}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-medium opacity-50 text-emerald-400 mb-1">
                                                        Target
                                                    </div>
                                                    <div className="text-lg font-bold text-white">
                                                        ≥ {(tournamentStatus.requirements.promote * 100).toFixed(1)}%
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Progress Bar inside Next Tier */}
                                            <div className="relative pt-4">
                                                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${Math.min(Math.abs(tournamentStatus.profitPercent) * 100, 100)}%` }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        className={`h-full ${tournamentStatus.profit >= 0 ? 'bg-emerald-500' : 'bg-rose-500'} shadow-[0_0_10px_currentColor]`}
                                                    />
                                                </div>
                                                {tournamentStatus.requirements.demote !== null && (
                                                    <p className="text-[10px] font-bold text-red-400 opacity-60 flex items-center gap-1.5 mt-2">
                                                        <AlertTriangle size={10} />
                                                        {t('demote_if')} &lt; {(tournamentStatus.requirements.demote * 100).toFixed(1)}%
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Weekly P&L - Smaller, below */}
                                        <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between">
                                            <div className="flex items-center gap-2 opacity-60">
                                                <TrendingUp size={14} />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">{t('weekly_pnl')}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-sm font-black ${tournamentStatus.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {tournamentStatus.profit >= 0 ? '+' : ''}{(tournamentStatus.profitPercent * 100).toFixed(2)}%
                                                </span>
                                                <span className="text-xs font-medium opacity-50 border-l border-white/10 pl-3">
                                                    ${Math.abs(tournamentStatus.profit).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Leaderboard Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Users size={14} />
                                    {t('league_standings')}
                                </h3>

                                {/* Tier Navigator */}
                                <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1 border border-white/5">
                                    <button
                                        onClick={() => changeTier(-1)}
                                        disabled={selectedTier <= 1}
                                        className="p-1 hover:bg-white/10 rounded-md disabled:opacity-30 transition-colors"
                                    >
                                        <ChevronLeft size={14} />
                                    </button>
                                    <span className={`text-xs font-bold px-2 ${getLevelColor(selectedTier)}`}>
                                        {selectedLevelConfig.name}
                                    </span>
                                    <button
                                        onClick={() => changeTier(1)}
                                        disabled={selectedTier >= 15}
                                        className="p-1 hover:bg-white/10 rounded-md disabled:opacity-30 transition-colors"
                                    >
                                        <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {tournamentPlayers.length === 0 ? (
                                    <div className="text-center py-12 opacity-50">
                                        <Shield size={32} className="mx-auto mb-3 opacity-30" />
                                        <p className="text-sm">{t('no_players_yet')}</p>
                                    </div>
                                ) : (
                                    tournamentPlayers.map((player, idx) => {
                                        const isUser = user?.username === player.username;
                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                onClick={() => navigate(`/profile/${player.username}`)}
                                                className={`relative p-3 rounded-xl border flex items-center justify-between group transition-all duration-300 cursor-pointer ${isUser
                                                    ? 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                                                    : 'hover:opacity-80'
                                                    }`}
                                                style={{
                                                    backgroundColor: isUser ? undefined : 'var(--card-bg)',
                                                    borderColor: isUser ? undefined : 'var(--card-border)'
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${idx === 0 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                                                        idx === 1 ? 'bg-slate-400/20 text-slate-400 border border-slate-400/30' :
                                                            idx === 2 ? 'bg-orange-700/20 text-orange-600 border border-orange-700/30' :
                                                                'bg-white/5 text-slate-500'
                                                        }`}>
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <div className={`font-bold text-sm ${isUser ? 'text-blue-400' : ''}`} style={{ color: isUser ? undefined : 'var(--text-primary)' }}>
                                                            {player.username}
                                                        </div>
                                                        {isUser && <div className="text-[9px] font-bold text-blue-500/60 uppercase tracking-wider">{t('you')}</div>}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-mono font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                                                        ${player.portfolioValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="global"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {loading ? (
                            <div className="flex justify-center py-12">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-12 text-red-500 text-sm font-medium">{error}</div>
                        ) : leaderboard.length === 0 ? (
                            <div className="text-center opacity-50 py-12 text-sm" style={{ color: 'var(--text-primary)' }}>
                                {t('no_players_yet')}
                            </div>
                        ) : (
                            leaderboard.map((player, index) => {
                                const isCurrentUser = user && player.username === user.username;
                                const isTop3 = index < 3;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => navigate(`/profile/${player.username}`)}
                                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer ${isCurrentUser
                                            ? 'bg-blue-500/10 border-blue-500/30'
                                            : 'hover:opacity-80'
                                            }`}
                                        style={{
                                            backgroundColor: isCurrentUser ? undefined : 'var(--card-bg)',
                                            borderColor: isCurrentUser ? undefined : 'var(--card-border)'
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${index === 0 ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/50' :
                                                index === 1 ? 'bg-slate-300 text-black shadow-lg shadow-slate-300/50' :
                                                    index === 2 ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/50' :
                                                        'bg-white/5 text-slate-500'
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-bold text-sm ${isCurrentUser ? 'text-blue-400' : ''}`} style={{ color: isCurrentUser ? undefined : 'var(--text-primary)' }}>
                                                        {player.username}
                                                    </span>
                                                    {player.isInTournament && (
                                                        <Shield size={10} className={getLevelColor(player.rankTier)} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`font-black text-sm ${isTop3 ? 'text-emerald-400' : 'text-slate-400'}`}>
                                            ${player.portfolioValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
