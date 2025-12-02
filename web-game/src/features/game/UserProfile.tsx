import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Shield, Award, TrendingUp, User as UserIcon } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { fetchUserProfile, type UserProfile as IUserProfile } from '../../services/api';
import { formatPrice } from '../../utils/format';

export const UserProfile: React.FC = () => {
    const { t } = useTranslation();
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();
    const [profile, setProfile] = useState<IUserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProfile = async () => {
            if (username) {
                setLoading(true);
                const data = await fetchUserProfile(username);
                setProfile(data);
                setLoading(false);
            }
        };
        loadProfile();
    }, [username]);

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
                        <h2 className="text-2xl font-bold">{profile.username}</h2>
                        <div className="flex items-center justify-center gap-2 mt-1 opacity-90">
                            <Award size={16} className="text-yellow-300" />
                            <span className="font-bold uppercase tracking-wider text-sm">
                                {profile.levelName ? t(profile.levelName.toLowerCase().replace(/ /g, '_'), profile.levelName) : t('investor')}
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
                        <p className="text-[10px] opacity-70 uppercase tracking-wider mb-1">{t('joined', 'Joined')}</p>
                        <p className="text-lg font-bold">{new Date(profile.joinDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section (Mocked for now if not available) */}
            <div className="space-y-2">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2">{t('statistics', 'Statistics')}</h3>
                <div className="grid grid-cols-2 gap-3">
                    <Card className="p-4 flex flex-col items-center justify-center gap-2">
                        <TrendingUp size={24} className="text-green-500" />
                        <div className="text-center">
                            <p className="text-2xl font-bold">{profile.stats?.winRate || 0}%</p>
                            <p className="text-[10px] opacity-50 uppercase">{t('win_rate', 'Win Rate')}</p>
                        </div>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center gap-2">
                        <UserIcon size={24} className="text-blue-500" />
                        <div className="text-center">
                            <p className="text-2xl font-bold">{profile.stats?.totalTrades || 0}</p>
                            <p className="text-[10px] opacity-50 uppercase">{t('total_trades', 'Total Trades')}</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
