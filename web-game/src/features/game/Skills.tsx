import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
    Zap, Lock, Unlock, PlayCircle,
    Shield, TrendingDown, BarChart3, Clock,
    LineChart, PieChart, Target, AlertCircle, Eye,
    ChevronDown, ChevronUp, ExternalLink
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
    const { skills, skillPoints, unlockSkill, canUnlockSkill, getSkillCost, addPoints, checkDailyLogin } = useGameStore();
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
        <div className="pb-24 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center p-4 rounded-2xl shadow-sm border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Zap className="text-yellow-500 fill-yellow-500" size={24} />
                    {t('skills')}
                </h2>
                <div className="px-4 py-1.5 rounded-full font-bold bg-blue-50 text-blue-600 border border-blue-100">
                    {skillPoints} SP
                </div>
            </div>

            {/* Earn Points Section */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 px-1 opacity-60" style={{ color: 'var(--text-primary)' }}>{t('earn_points')}</h3>
                <div className="grid gap-3 grid-cols-2">
                    <button
                        id="ad-btn"
                        onClick={handleWatchAd}
                        className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
                    >
                        <PlayCircle size={24} className="fill-white/20" />
                        <span className="font-bold text-sm whitespace-nowrap">{t('watch_ad')}</span>
                    </button>

                    <button
                        onClick={() => {
                            if (checkDailyLogin()) {
                                alert(t('daily_bonus_collected'));
                            } else {
                                alert(t('come_back_tomorrow'));
                            }
                        }}
                        className="flex items-center justify-center gap-3 p-4 rounded-2xl border shadow-sm transition-all active:scale-[0.98]"
                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
                    >
                        <Zap size={24} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm whitespace-nowrap">{t('daily_login')} (+3)</span>
                    </button>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
                {skillKeys.map((skillKey) => {
                    const isUnlocked = skills[skillKey];
                    const canUnlock = canUnlockSkill(skillKey);
                    const Icon = SKILL_ICONS[skillKey];
                    const cost = getSkillCost(skillKey);

                    return (
                        <div
                            key={skillKey}
                            className={`p-5 rounded-2xl transition-all border shadow-sm`}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: isUnlocked ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'
                            }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-4 flex-1 cursor-pointer" onClick={() => {
                                    if (isUnlocked) {
                                        // Navigate to feature
                                        switch (skillKey) {
                                            case 'stopLossMaster':
                                                navigate('/stock/BTC-USD#order-form');
                                                break;
                                            case 'leverageTrading':
                                                navigate('/trade/BTC-USD?type=buy#leverage-selector');
                                                break;
                                            case 'shortSelling':
                                                navigate('/trade/BTC-USD?type=short#trade-type-selector');
                                                break;
                                            case 'multiTimeframe':
                                                navigate('/stock/BTC-USD#timeframe-selector');
                                                break;
                                            case 'dayTrader':
                                                navigate('/market');
                                                break;
                                            case 'technicalAnalyst':
                                                navigate('/stock/BTC-USD#technical-analysis');
                                                break;
                                            case 'fundamentalAnalyst':
                                                navigate('/stock/BTC-USD#fundamentals');
                                                break;
                                            case 'portfolioManager':
                                                navigate('/portfolio#portfolio-manager');
                                                break;
                                            case 'marketTimer':
                                                navigate('/stock/BTC-USD#market-timer');
                                                break;
                                            case 'riskManager':
                                                navigate('/trade/BTC-USD?type=buy#risk-manager');
                                                break;
                                            case 'newsAlert':
                                                navigate('/news#general');
                                                break;
                                            case 'insiderInfo':
                                                navigate('/news#insider');
                                                break;
                                            default:
                                                toggleSkill(skillKey);
                                        }
                                    } else {
                                        toggleSkill(skillKey);
                                    }
                                }}>
                                    <div className={`p-3 rounded-2xl h-fit ${isUnlocked ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-lg leading-tight" style={{ color: 'var(--text-primary)' }}>
                                                {t(`skill_${skillKey}_name`)}
                                            </h3>
                                            {!isUnlocked && (expandedSkill === skillKey ? <ChevronUp size={16} className="opacity-50" /> : <ChevronDown size={16} className="opacity-50" />)}
                                            {isUnlocked && <ExternalLink size={16} className="opacity-50" />}
                                        </div>
                                        <p className="text-sm mt-1 leading-relaxed opacity-60" style={{ color: 'var(--text-primary)' }}>
                                            {t(`skill_${skillKey}_desc`)}
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    {isUnlocked && <Unlock className="text-green-500" size={20} />}
                                    {!isUnlocked && <Lock className="text-red-500" size={20} />}
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
                                        <div className="pt-2 pb-4 pl-[60px] pr-2">
                                            <p className="text-sm leading-relaxed opacity-80" style={{ color: 'var(--text-primary)' }}>
                                                {t(`skill_${skillKey}_details`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isUnlocked ? (
                                <div className="flex items-center gap-2 text-green-600 text-sm font-bold bg-green-50 px-3 py-2 rounded-xl w-fit ml-[60px]">
                                    <Shield size={14} />
                                    {t('active')}
                                </div>
                            ) : (
                                <button
                                    onClick={() => unlockSkill(skillKey)}
                                    disabled={!canUnlock}
                                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 mt-2 ${canUnlock
                                        ? 'bg-black text-white shadow-lg shadow-black/20 hover:shadow-xl active:scale-[0.98]'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                    style={canUnlock ? { backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' } : {}}
                                >
                                    {t('unlock_skill')}
                                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs">
                                        {cost} SP
                                    </span>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
