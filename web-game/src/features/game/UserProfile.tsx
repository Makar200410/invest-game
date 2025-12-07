import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Shield, Award, Wallet, Activity, Briefcase, TrendingDown, Zap, TrendingUp, List, BadgeCheck } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { AssetIcon } from '../../components/ui/AssetIcon';
import { fetchUserProfile, type UserProfile as IUserProfile } from '../../services/api';
import { formatPrice } from '../../utils/format';

const getLevelColor = (tier: number) => {
    if (tier <= 3) return 'text-orange-400';
    if (tier <= 6) return 'text-gray-300';
    if (tier <= 9) return 'text-yellow-400';
    if (tier <= 12) return 'text-cyan-400';
    if (tier <= 14) return 'text-purple-400';
    return 'text-red-500';
};

import { useGameStore } from '../../store/gameStore';

export const UserProfile: React.FC = () => {
    const { t } = useTranslation();
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();
    const [profile, setProfile] = useState<IUserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    const { user, portfolio, skills, shortPositions, leveragedPositions, orders, balance, loan, skillPoints, tradesToday, lastTradeDate, lastLogin } = useGameStore();

    useEffect(() => {
        const loadProfile = async () => {
            if (username) {
                setLoading(true);
                try {
                    let data = await fetchUserProfile(username);
                    console.log('Fetched profile data:', data);

                    // If viewing own profile, merge/override with local state to ensure data visibility
                    if (user && user.username === username) {
                        console.log('Viewing own profile, using local state');
                        data = {
                            ...(data || {}),
                            username: user.username,
                            joinDate: data?.joinDate || new Date().toISOString(),
                            rankTier: data?.rankTier || user.rankTier || 1,
                            portfolioValue: data?.portfolioValue || balance, // Fallback
                            levelName: data?.levelName || 'Investor',
                            balance,
                            loan,
                            skillPoints,
                            tradesToday,
                            lastTradeDate: lastTradeDate || new Date().toISOString(),
                            lastLogin: lastLogin || new Date().toISOString(),
                            skills: skills as unknown as { [key: string]: boolean },
                            portfolio,
                            shortPositions,
                            leveragedPositions,
                            orders,
                            stats: data?.stats || { winRate: 0, totalTrades: 0, bestTrade: 0 }
                        } as IUserProfile;
                    }

                    setProfile(data);
                } catch (error) {
                    console.error('Error loading profile:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        loadProfile();
    }, [username, user, portfolio, skills, shortPositions, leveragedPositions, orders, balance]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen pb-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen pb-24 space-y-4">
                <p className="text-xl font-bold text-red-500">{t('user_not_found', 'User not found')}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                    {t('go_back', 'Go Back')}
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-4 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 px-1 mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <ArrowLeft />
                </button>
                <h1 className="text-xl font-bold">{t('player_profile', 'Player Profile')}</h1>
            </div>

            {/* Profile Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl p-6 shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, var(--accent-color), #8b5cf6)',
                    color: 'white'
                }}
            >
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Shield size={120} />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold border-4 border-white/30 shadow-inner">
                        {profile.username.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-2">
                            <h2 className="text-2xl font-bold">{profile.username}</h2>
                            {profile.isPremium && (
                                <BadgeCheck size={20} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" />
                            )}
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-1 opacity-90">
                            <Award size={16} className={getLevelColor(profile.rankTier)} />
                            <span className={`font-bold uppercase tracking-wider text-sm ${getLevelColor(profile.rankTier)}`}>
                                {profile.isPremium ? t('pro_investor', 'PRO Investor') : (profile.levelName ? t(profile.levelName.toLowerCase().replace(/ /g, '_'), profile.levelName) : t('investor'))}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm text-center">
                        <p className="text-[10px] opacity-70 uppercase tracking-wider mb-1">{t('portfolio_value', 'Portfolio Value')}</p>
                        <p className="text-lg font-bold">${formatPrice(profile.portfolioValue)}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm text-center">
                        <p className="text-[10px] opacity-70 uppercase tracking-wider mb-1">{t('last_active', 'Last Active')}</p>
                        <p className="text-lg font-bold">{profile.lastActive ? new Date(profile.lastActive).toLocaleDateString() : new Date(profile.joinDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section (Mocked for now if not available) */}

            {/* Financial Overview */}
            <div className="space-y-2">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2">{t('financials', 'Financials')}</h3>
                <div className="grid grid-cols-2 gap-3">
                    <Card className="p-4 flex flex-col items-center justify-center gap-2">
                        <Wallet size={24} className="text-emerald-500" />
                        <div className="text-center">
                            <p className="text-lg font-bold">${formatPrice(profile.balance || 0)}</p>
                            <p className="text-[10px] opacity-50 uppercase">{t('balance', 'Balance')}</p>
                        </div>
                    </Card>
                    {profile.loan && profile.loan > 0 ? (
                        <Card className="p-4 flex flex-col items-center justify-center gap-2 border-red-500/20 bg-red-500/5">
                            <TrendingDown size={24} className="text-red-500" />
                            <div className="text-center">
                                <p className="text-lg font-bold text-red-500">-${formatPrice(profile.loan)}</p>
                                <p className="text-[10px] opacity-50 uppercase">{t('loan', 'Loan')}</p>
                            </div>
                        </Card>
                    ) : (
                        <Card className="p-4 flex flex-col items-center justify-center gap-2">
                            <Zap size={24} className="text-yellow-500" />
                            <div className="text-center">
                                <p className="text-lg font-bold">{profile.skillPoints || 0}</p>
                                <p className="text-[10px] opacity-50 uppercase">{t('skill_points', 'Skill Points')}</p>
                            </div>
                        </Card>
                    )}
                </div>
            </div>

            {/* Activity */}
            <div className="space-y-2">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2 flex items-center gap-2">
                    <Activity size={16} />
                    {t('activity', 'Activity')}
                </h3>
                <Card className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">{t('last_active', 'Last Active')}</span>
                        <span className="font-bold">{profile.lastLogin || '-'}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">{t('last_trade', 'Last Trade')}</span>
                        <span className="font-bold">{profile.lastTradeDate || '-'}</span>
                    </div>
                </Card>
            </div>

            {/* Skills */}
            {profile.skills && Object.keys(profile.skills).length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2">{t('skills', 'Skills')}</h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(profile.skills).map(([skill, active]) => (
                            active && (
                                <div key={skill} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                                    {t(skill, skill.replace(/([A-Z])/g, ' $1').trim())}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}

            {/* Portfolio */}
            {profile.portfolio && profile.portfolio.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2 flex items-center gap-2">
                        <Briefcase size={16} />
                        {t('portfolio', 'Portfolio')}
                    </h3>
                    <div className="space-y-2">
                        {profile.portfolio.map((asset) => (
                            <Card key={asset.id} className="p-3 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <AssetIcon symbol={asset.id} className="w-8 h-8" />
                                    <div>
                                        <p className="font-bold">{asset.id}</p>
                                        <p className="text-xs opacity-50">{asset.amount} {t('units', 'Units')}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold">${formatPrice(asset.avgPrice)}</p>
                                    <p className="text-xs opacity-50">{t('avg_price', 'Avg Price')}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Leveraged Positions */}
            {profile.leveragedPositions && profile.leveragedPositions.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2 flex items-center gap-2">
                        <TrendingUp size={16} />
                        {t('leveraged_positions', 'Leveraged Positions')}
                    </h3>
                    <div className="space-y-2">
                        {profile.leveragedPositions.map((pos: any) => (
                            <Card key={pos.id} className="p-3 flex justify-between items-center border-purple-500/20 bg-purple-500/5">
                                <div className="flex items-center gap-3">
                                    <AssetIcon symbol={pos.assetId} className="w-8 h-8" />
                                    <div>
                                        <p className="font-bold">{pos.assetId}</p>
                                        <p className="text-xs opacity-50">{pos.amount}x{pos.leverage}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-purple-400">${formatPrice(pos.entryPrice)}</p>
                                    <p className="text-xs opacity-50">{t('entry', 'Entry')}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Active Orders */}
            {profile.orders && profile.orders.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2 flex items-center gap-2">
                        <List size={16} />
                        {t('active_orders', 'Active Orders')}
                    </h3>
                    <div className="space-y-2">
                        {profile.orders.map((order: any) => (
                            <Card key={order.id} className="p-3 flex justify-between items-center border-blue-500/20 bg-blue-500/5">
                                <div className="flex items-center gap-3">
                                    <AssetIcon symbol={order.assetId} className="w-8 h-8" />
                                    <div>
                                        <p className="font-bold">{order.assetId}</p>
                                        <p className="text-xs opacity-50">{order.type === 'stop-loss' ? 'Stop Loss' : 'Take Profit'}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-blue-400">${formatPrice(order.triggerPrice)}</p>
                                    <p className="text-xs opacity-50">{t('trigger', 'Trigger')}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Short Positions */}
            {profile.shortPositions && profile.shortPositions.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2 text-red-400">{t('short_positions', 'Short Positions')}</h3>
                    <div className="space-y-2">
                        {profile.shortPositions.map((pos) => (
                            <Card key={pos.id} className="p-3 flex justify-between items-center border-red-500/20 bg-red-500/5">
                                <div className="flex items-center gap-3">
                                    <AssetIcon symbol={pos.assetId} className="w-8 h-8" />
                                    <div>
                                        <p className="font-bold">{pos.assetId}</p>
                                        <p className="text-xs opacity-50">{pos.amount}x{pos.leverage}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-red-400">${formatPrice(pos.entryPrice)}</p>
                                    <p className="text-xs opacity-50">{t('entry', 'Entry')}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
