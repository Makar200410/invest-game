import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Target, AlertTriangle, Shield, ChevronLeft, ChevronRight, Crown, Users, TrendingUp, ArrowLeft, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { fetchLeaderboard, registerForTournament, fetchTournamentStatus } from '../../services/api';
import { useTranslation } from 'react-i18next';

interface LeaderboardUser {
    username: string;
    portfolioValue: number;
    rankTier: number;
    isInTournament: boolean;
    isPremium?: boolean;
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

    // Scroll to top when switching views
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [activeView]);

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
        <div className="space-y-5 pb-24 pt-4 px-4">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
            >
                <ArrowLeft size={18} />
                {t('back')}
            </button>

            {/* Premium Header Card */}
            <div className="relative overflow-hidden rounded-3xl p-5 border shadow-xl" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
                <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-2 right-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-2 left-6 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl"
                />

                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 4, -4, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
                        >
                            <Trophy size={24} className="text-white drop-shadow-lg" />
                        </motion.div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                {t('ranking', 'Ranking')}
                            </h1>
                            <p className="text-[10px] opacity-60 font-medium" style={{ color: 'var(--text-primary)' }}>
                                {t('compete_climb', 'Compete & Climb')}
                            </p>
                        </div>
                    </div>
                    {tournamentStatus?.isInTournament && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`px-3 py-1.5 rounded-xl border backdrop-blur-md ${getLevelColor(tournamentStatus.rankTier)} bg-white/5 border-white/20 shadow-lg`}
                        >
                            <div className="text-[9px] font-bold opacity-60 uppercase tracking-wider">{t('your_tier')}</div>
                            <div className="text-xs font-black">{t(getTierTranslationKey(tournamentStatus.levelName))}</div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Premium Segmented Control */}
            <div className="p-1 rounded-2xl backdrop-blur-xl border relative shadow-lg" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="flex relative z-10">
                    <button
                        onClick={() => setActiveView('tournament')}
                        className="flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 z-10"
                        style={{ color: activeView === 'tournament' ? '#ffffff' : 'var(--text-primary)', opacity: activeView === 'tournament' ? 1 : 0.5 }}
                    >
                        <Trophy size={15} className={activeView === 'tournament' ? 'text-yellow-300 drop-shadow-[0_0_6px_rgba(253,224,71,0.6)]' : ''} />
                        <span>{t('weekly_tournament')}</span>
                    </button>
                    <button
                        onClick={() => setActiveView('global')}
                        className="flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 z-10"
                        style={{ color: activeView === 'global' ? '#ffffff' : 'var(--text-primary)', opacity: activeView === 'global' ? 1 : 0.5 }}
                    >
                        <Crown size={15} className={activeView === 'global' ? 'text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.6)]' : ''} />
                        <span>{t('global_ranking')}</span>
                    </button>
                </div>
                <motion.div
                    className={`absolute top-1 bottom-1 rounded-xl shadow-xl ${activeView === 'tournament' ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-indigo-500/25' : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 shadow-orange-500/25'}`}
                    initial={false}
                    animate={{ left: activeView === 'tournament' ? '4px' : '50%', width: 'calc(50% - 6px)' }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {activeView === 'tournament' ? (
                    <motion.div
                        key="tournament"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -25 }}
                        transition={{ duration: 0.35, type: "spring" }}
                        className="space-y-5"
                    >
                        {/* Tournament Status Card */}
                        <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-0 right-0 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            />
                            <motion.div
                                animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.25, 0.15] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                            />

                            <div className="relative p-5">
                                {!tournamentStatus?.isInTournament ? (
                                    <div className="text-center py-6">
                                        <motion.div
                                            animate={{ y: [0, -12, 0], rotateZ: [0, 3, -3, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-500/35 border border-white/20"
                                        >
                                            <Trophy size={40} className="text-white drop-shadow-lg" />
                                        </motion.div>
                                        <h3 className="text-lg font-black mb-1.5" style={{ color: 'var(--text-primary)' }}>
                                            {t('join_weekly_challenge', 'Join Weekly Challenge')}
                                        </h3>
                                        <p className="text-xs opacity-60 mb-5 max-w-[250px] mx-auto" style={{ color: 'var(--text-primary)' }}>
                                            {t('tournament_desc', 'Compete with traders worldwide!')}
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleRegister}
                                            disabled={registering}
                                            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-black uppercase tracking-wider shadow-xl shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                                                {registering ? t('joining') : t('join_now')}
                                                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>→</motion.span>
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                                animate={{ x: ['-100%', '100%'] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </motion.button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                                                <div className="flex items-center gap-1.5 mb-1.5 opacity-60">
                                                    <TrendingUp size={12} />
                                                    <span className="text-[9px] font-bold uppercase tracking-wider">{t('weekly_pnl')}</span>
                                                </div>
                                                <div className={`text-xl font-black ${tournamentStatus.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {tournamentStatus.profit >= 0 ? '+' : ''}{(tournamentStatus.profitPercent * 100).toFixed(2)}%
                                                </div>
                                                <div className="text-[10px] font-bold opacity-40 mt-0.5">${Math.abs(tournamentStatus.profit).toLocaleString()}</div>
                                            </div>

                                            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 backdrop-blur-sm">
                                                <div className="flex items-center gap-1.5 mb-1.5 opacity-70">
                                                    <Target size={12} className="text-emerald-400" />
                                                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">{t('target')}</span>
                                                </div>
                                                <div className="text-xl font-black text-emerald-400">≥{(tournamentStatus.requirements.promote * 100).toFixed(0)}%</div>
                                                <div className="text-[10px] font-bold opacity-40 mt-0.5" style={{ color: 'var(--text-primary)' }}>{t('to_rank_up', 'to rank up')}</div>
                                            </div>
                                        </div>

                                        {/* Next Tier Progress */}
                                        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                                            <motion.div
                                                animate={{ x: ['-100%', '200%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                            />

                                            <div className="flex justify-between items-center mb-3 relative z-10">
                                                <div>
                                                    <div className="text-[9px] font-bold uppercase tracking-wider opacity-50 mb-0.5">{t('next_tier')}</div>
                                                    <div className={`text-lg font-black ${getLevelColor(tournamentStatus.rankTier + 1)}`}>
                                                        {t(getTierTranslationKey(tournamentStatus.nextLevelName))}
                                                    </div>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center"
                                                >
                                                    <Crown size={18} className={getLevelColor(tournamentStatus.rankTier + 1)} />
                                                </motion.div>
                                            </div>

                                            <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${Math.min(Math.abs(tournamentStatus.profitPercent / tournamentStatus.requirements.promote) * 100, 100)}%` }}
                                                    transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
                                                    className={`h-full rounded-full ${tournamentStatus.profit >= 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-red-400'} shadow-[0_0_12px_currentColor]`}
                                                />
                                            </div>
                                            {tournamentStatus.requirements.demote !== null && (
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-[9px] font-bold text-red-400/70 flex items-center gap-1 mt-2"
                                                >
                                                    <AlertTriangle size={9} />
                                                    {t('demote_if')} &lt;{(tournamentStatus.requirements.demote * 100).toFixed(1)}%
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Leaderboard Section */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                                        <Users size={16} className="text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{t('league_standings')}</h3>
                                        <p className="text-[9px] opacity-50" style={{ color: 'var(--text-primary)' }}>{tournamentPlayers.length} {t('participants', 'participants')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-0.5 p-1 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-white/10 backdrop-blur-sm">
                                    <button onClick={() => changeTier(-1)} disabled={selectedTier <= 1} className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/10 disabled:opacity-30 transition-all active:scale-90">
                                        <ChevronLeft size={12} />
                                    </button>
                                    <div className={`px-2.5 py-1 rounded-lg text-[10px] font-black ${getLevelColor(selectedTier)} bg-white/5 min-w-[70px] text-center`}>
                                        {selectedLevelConfig.name}
                                    </div>
                                    <button onClick={() => changeTier(1)} disabled={selectedTier >= 15} className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/10 disabled:opacity-30 transition-all active:scale-90">
                                        <ChevronRight size={12} />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {tournamentPlayers.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-14 rounded-2xl border border-dashed border-white/10"
                                        style={{ backgroundColor: 'var(--card-bg)' }}
                                    >
                                        <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border border-white/10">
                                            <Shield size={24} className="text-slate-500" />
                                        </motion.div>
                                        <p className="text-sm font-bold opacity-60" style={{ color: 'var(--text-primary)' }}>{t('no_players_yet')}</p>
                                        <p className="text-[10px] opacity-40 mt-0.5" style={{ color: 'var(--text-primary)' }}>{t('be_first', 'Be the first!')}</p>
                                    </motion.div>
                                ) : (
                                    tournamentPlayers.map((player, idx) => {
                                        const isUser = user?.username === player.username;
                                        const isTop3 = idx < 3;

                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                transition={{ delay: idx * 0.06, type: "spring", stiffness: 180 }}
                                                onClick={() => navigate(`/profile/${player.username}`)}
                                                className={`relative overflow-hidden rounded-2xl border cursor-pointer group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isUser ? 'bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border-blue-500/40 shadow-[0_0_18px_rgba(59,130,246,0.12)]'
                                                    : idx === 0 ? 'bg-gradient-to-r from-yellow-400/15 to-orange-500/15 border-yellow-500/40 shadow-lg shadow-yellow-500/10'
                                                        : idx === 1 ? 'bg-gradient-to-r from-slate-300/15 to-slate-500/15 border-slate-400/40 shadow-lg shadow-slate-400/10'
                                                            : idx === 2 ? 'bg-gradient-to-r from-orange-600/15 to-orange-800/15 border-orange-600/40 shadow-lg shadow-orange-500/10'
                                                                : ''
                                                    }`}
                                                style={{ backgroundColor: (!isUser && !isTop3) ? 'var(--card-bg)' : undefined, borderColor: (!isUser && !isTop3) ? 'var(--card-border)' : undefined }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                                <div className="relative p-3.5 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <motion.div
                                                            whileHover={{ scale: 1.08, rotate: 3 }}
                                                            className={`relative w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shadow-lg ${idx === 0 ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-yellow-900 shadow-yellow-500/25'
                                                                : idx === 1 ? 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 text-slate-800 shadow-slate-400/25'
                                                                    : idx === 2 ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-orange-100 shadow-orange-500/25'
                                                                        : 'bg-white/10 text-slate-400 border border-white/10'
                                                                }`}
                                                        >
                                                            {idx + 1}
                                                            {idx === 0 && (
                                                                <motion.div animate={{ scale: [1, 1.25, 1], rotate: [0, 8, -8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-1.5 -right-1.5">
                                                                    <Crown size={11} className="text-yellow-300 drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]" />
                                                                </motion.div>
                                                            )}
                                                        </motion.div>

                                                        <div>
                                                            <div className="flex items-center gap-1.5">
                                                                <span className={`font-bold text-sm ${isUser ? 'text-blue-400' : ''}`} style={{ color: isUser ? undefined : 'var(--text-primary)' }}>{player.username}</span>
                                                                {player.isPremium && (
                                                                    <BadgeCheck size={14} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" />
                                                                )}
                                                                {isUser && <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[8px] font-black uppercase border border-blue-500/30">{t('you')}</span>}
                                                            </div>
                                                            {isTop3 && <div className="text-[9px] font-bold opacity-50 mt-0.5" style={{ color: 'var(--text-primary)' }}>{idx === 0 ? '🏆' : idx === 1 ? '🥈' : '🥉'} {t('top_performer', 'Top Performer')}</div>}
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <div className="font-mono font-black text-sm" style={{ color: 'var(--text-primary)' }}>${player.portfolioValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                                        <div className="text-[9px] font-bold text-emerald-400/70">{t('total_value', 'Total Value')}</div>
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
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -25 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-3"
                    >
                        {loading ? (
                            <div className="flex justify-center py-16">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-16 text-red-500 text-sm font-medium">{error}</div>
                        ) : leaderboard.length === 0 ? (
                            <div className="text-center opacity-50 py-16 text-sm" style={{ color: 'var(--text-primary)' }}>{t('no_players_yet')}</div>
                        ) : (
                            leaderboard.map((player, index) => {
                                const isCurrentUser = user && player.username === user.username;
                                const isTop3 = index < 3;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.04 }}
                                        onClick={() => navigate(`/profile/${player.username}`)}
                                        className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer group transition-all duration-300 hover:scale-[1.01] ${isCurrentUser ? 'bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border-blue-500/40 shadow-[0_0_18px_rgba(59,130,246,0.12)]'
                                            : index === 0 ? 'bg-gradient-to-r from-yellow-400/15 to-orange-500/15 border-yellow-500/40'
                                                : index === 1 ? 'bg-gradient-to-r from-slate-300/15 to-slate-500/15 border-slate-400/40'
                                                    : index === 2 ? 'bg-gradient-to-r from-orange-600/15 to-orange-800/15 border-orange-600/40'
                                                        : ''
                                            }`}
                                        style={{ backgroundColor: (!isCurrentUser && !isTop3) ? 'var(--card-bg)' : undefined, borderColor: (!isCurrentUser && !isTop3) ? 'var(--card-border)' : undefined }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shadow-lg ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-600 text-yellow-900'
                                                : index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-slate-800'
                                                    : index === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-700 text-orange-100'
                                                        : 'bg-white/10 text-slate-400 border border-white/10'
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className={`font-bold text-sm ${isCurrentUser ? 'text-blue-400' : ''}`} style={{ color: isCurrentUser ? undefined : 'var(--text-primary)' }}>{player.username}</span>
                                                    {player.isPremium && (
                                                        <BadgeCheck size={14} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" />
                                                    )}
                                                    {player.isInTournament && <Shield size={10} className={getLevelColor(player.rankTier)} />}
                                                </div>
                                                {isCurrentUser && <span className="text-[8px] font-bold text-blue-500/60 uppercase">{t('you')}</span>}
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
