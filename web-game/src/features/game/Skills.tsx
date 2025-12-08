import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
    Zap, Lock, Unlock, PlayCircle,
    Shield, TrendingDown, BarChart3, Clock,
    LineChart, PieChart, Target, AlertCircle, Eye,
    ChevronDown, ChevronUp, ExternalLink, Crown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore, SKILL_DEFINITIONS, type SkillKey } from '../../store/gameStore';

const SKILL_ICONS: Record<SkillKey, React.FC<{ size?: number; className?: string }>> = {
    stopLossMaster: Shield,
    leverageTrading: TrendingDown,
    shortSelling: TrendingDown,
    multiTimeframe: Clock,
    dayTrader: Zap,
    technicalAnalyst: LineChart,
    fundamentalAnalyst: BarChart3,
    portfolioManager: PieChart,
    marketTimer: Target,
    riskManager: Shield,
    newsAlert: AlertCircle,
    insiderInfo: Eye
};

export const Skills: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { skills, skillPoints, unlockSkill, canUnlockSkill, getSkillCost, addPoints, checkDailyLogin, isPremium, unlockPremium } = useGameStore();
    const [expandedSkill, setExpandedSkill] = React.useState<SkillKey | null>(null);

    const toggleSkill = (key: SkillKey) => {
        if (expandedSkill === key) {
            setExpandedSkill(null);
        } else {
            setExpandedSkill(key);
        }
    };

    const handleWatchAd = () => {
        const btn = document.getElementById('ad-btn') as HTMLButtonElement;
        if (btn) {
            btn.disabled = true;
            btn.innerText = t('watching_ad');
            setTimeout(() => {
                addPoints(1);
                btn.disabled = false;
                btn.innerText = t('watch_ad');
            }, 3000);
        }
    };

    const skillKeys = Object.keys(SKILL_DEFINITIONS) as SkillKey[];

    return (
        <div className="pb-24 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center p-2 rounded-2xl shadow-sm border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Zap className="text-yellow-500 fill-yellow-500" size={20} />
                    {t('skills')}
                </h2>
                <div className="px-3 py-1 rounded-full font-bold bg-blue-50 text-blue-600 border border-blue-100 text-sm">
                    {skillPoints} SP
                </div>
            </div>

            {/* Earn Points Section */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 px-1 opacity-60" style={{ color: 'var(--text-primary)' }}>{t('earn_points')}</h3>
                <div className="grid gap-2 grid-cols-2">
                    <button
                        id="ad-btn"
                        onClick={handleWatchAd}
                        className="flex items-center justify-center gap-2 p-2 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
                    >
                        <PlayCircle size={20} className="fill-white/20" />
                        <span className="font-bold text-xs whitespace-nowrap">{t('watch_ad')}</span>
                    </button>

                    <button
                        onClick={() => {
                            if (checkDailyLogin()) {
                                alert(t('daily_bonus_collected'));
                            } else {
                                alert(t('come_back_tomorrow'));
                            }
                        }}
                        className="flex items-center justify-center gap-2 p-2 rounded-2xl border shadow-sm transition-all active:scale-[0.98]"
                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
                    >
                        <Zap size={20} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-xs whitespace-nowrap">{t('daily_login')} (+3)</span>
                    </button>
                </div>
            </div>

            {/* Premium Unlock Offer */}
            {!isPremium && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-xl p-3 shadow-lg"
                >
                    {/* Gold Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500" />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50" />

                    <div className="relative flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            <div className="p-1.5 bg-black/10 rounded-lg backdrop-blur-sm flex-shrink-0">
                                <Crown size={18} className="text-black/80 fill-black/20" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm text-black/80 leading-tight">
                                    {t('unlock_all_skills')}
                                </h3>
                                <p className="text-[10px] font-medium text-black/60 leading-tight truncate">
                                    {t('no_ads', 'No Ads')} • 135+ {t('lessons', 'Lessons')} • {t('unlock_skills', 'All Skills')}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={unlockPremium}
                            className="bg-black text-white px-3 py-2 rounded-lg font-bold text-xs shadow-xl active:scale-95 transition-transform flex-shrink-0"
                        >
                            $4.99
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Skills Grid */}
            <div className="space-y-4">
                {skillKeys.map((skillKey) => {
                    const isUnlocked = skills[skillKey];
                    const canUnlock = canUnlockSkill(skillKey);
                    const Icon = SKILL_ICONS[skillKey];
                    const cost = getSkillCost(skillKey);

                    const handleNavigate = (e: React.MouseEvent) => {
                        e.stopPropagation();
                        switch (skillKey) {
                            case 'stopLossMaster':
                                navigate('/stock/BTC-USD?tab=orders');
                                break;
                            case 'leverageTrading':
                                navigate('/trade/BTC-USD?type=buy');
                                break;
                            case 'shortSelling':
                                navigate('/trade/BTC-USD?type=short');
                                break;
                            case 'multiTimeframe':
                                navigate('/stock/BTC-USD');
                                break;
                            case 'dayTrader':
                                navigate('/');
                                break;
                            case 'technicalAnalyst':
                                navigate('/stock/BTC-USD?tab=indicators');
                                break;
                            case 'fundamentalAnalyst':
                                navigate('/stock/BTC-USD?tab=fundamentals');
                                break;
                            case 'portfolioManager':
                                navigate('/');
                                break;
                            case 'marketTimer':
                                navigate('/stock/BTC-USD');
                                break;
                            case 'riskManager':
                                navigate('/trade/BTC-USD?type=buy');
                                break;
                            case 'newsAlert':
                                navigate('/stock/BTC-USD?tab=news');
                                break;
                            case 'insiderInfo':
                                navigate('/stock/BTC-USD?tab=news');
                                break;
                        }
                    };

                    return (
                        <div
                            key={skillKey}
                            className={`p-1.5 rounded-xl transition-all border shadow-sm`}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: isUnlocked ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'
                            }}
                        >
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSkill(skillKey)}>
                                <div className="flex gap-3 flex-1 items-center">
                                    <div className={`p-1.5 rounded-xl h-fit ${isUnlocked ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        <Icon size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                                                {t(`skill_${skillKey}_name`)}
                                            </h3>
                                            {expandedSkill === skillKey ? <ChevronUp size={14} className="opacity-50" /> : <ChevronDown size={14} className="opacity-50" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    {isUnlocked && <Unlock className="text-green-500" size={16} />}
                                    {!isUnlocked && <Lock className="text-red-500" size={16} />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedSkill === skillKey && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-2 pb-2 pl-[44px] pr-2">
                                            <p className="text-xs leading-relaxed opacity-60 mb-2" style={{ color: 'var(--text-primary)' }}>
                                                {t(`skill_${skillKey}_desc`)}
                                            </p>
                                            <p className="text-xs leading-relaxed opacity-80 mb-3" style={{ color: 'var(--text-primary)' }}>
                                                {t(`skill_${skillKey}_details`)}
                                            </p>

                                            {isUnlocked ? (
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg w-fit">
                                                        <Shield size={12} />
                                                        {t('active')}
                                                    </div>
                                                    <button
                                                        onClick={handleNavigate}
                                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors text-xs font-bold w-fit"
                                                    >
                                                        <ExternalLink size={12} />
                                                        {t('go_to_feature', 'Go to Feature')}
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => unlockSkill(skillKey)}
                                                    disabled={!canUnlock}
                                                    className={`w-full py-1.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 mt-1 ${canUnlock
                                                        ? 'bg-black text-white shadow-lg shadow-black/20 hover:shadow-xl active:scale-[0.98]'
                                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        }`}
                                                    style={canUnlock ? { backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' } : {}}
                                                >
                                                    {t('unlock_skill')}
                                                    <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                                                        {cost} SP
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
