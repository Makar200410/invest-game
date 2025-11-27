import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Zap, Lock, Unlock, PlayCircle,
    Shield, TrendingDown, BarChart3, Clock,
    LineChart, PieChart, Target, AlertCircle, Eye
} from 'lucide-react';
import { useGameStore, SKILL_DEFINITIONS, type SkillKey } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';

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
    const { skills, skillPoints, unlockSkill, canUnlockSkill, getSkillCost, addPoints, checkDailyLogin } = useGameStore();

    const handleWatchAd = () => {
        const btn = document.getElementById('ad-btn') as HTMLButtonElement;
        if (btn) {
            btn.disabled = true;
            btn.innerText = 'Watching...';
            setTimeout(() => {
                addPoints(1);
                btn.disabled = false;
                btn.innerText = t('watch_ad');
            }, 3000);
        }
    };

    const skillKeys = Object.keys(SKILL_DEFINITIONS) as SkillKey[];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Zap className="text-yellow-500" />
                    {t('skills')}
                </h2>
                <div className="px-4 py-2 rounded-full font-bold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                    {skillPoints} SP
                </div>
            </div>

            <div className="grid gap-4">
                {skillKeys.map((skillKey) => {
                    // const skill = SKILL_DEFINITIONS[skillKey]; // No longer used directly for text
                    const isUnlocked = skills[skillKey];
                    const canUnlock = canUnlockSkill(skillKey);
                    const Icon = SKILL_ICONS[skillKey];
                    const cost = getSkillCost(skillKey);

                    return (
                        <Card
                            key={skillKey}
                            className={`p-5 relative overflow-hidden group ${isUnlocked ? 'border-green-500/50' : ''}`}
                            style={{
                                backgroundColor: isUnlocked ? 'rgba(34, 197, 94, 0.05)' : 'var(--card-bg)',
                                borderColor: isUnlocked ? undefined : 'var(--card-border)'
                            }}
                        >
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex gap-4 flex-1">
                                    <div
                                        className={`p-3 rounded-xl ${isUnlocked ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : ''}`}
                                        style={{
                                            backgroundColor: isUnlocked ? undefined : 'var(--bg-primary)',
                                            color: isUnlocked ? undefined : 'var(--text-primary)'
                                        }}
                                    >
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                                            {t(`skill_${skillKey}_name`)}
                                        </h3>
                                        <p className="text-sm mt-1 opacity-70" style={{ color: 'var(--text-primary)' }}>
                                            {t(`skill_${skillKey}_desc`)}
                                        </p>
                                    </div>
                                </div>
                                {isUnlocked ? (
                                    <Unlock className="text-green-500 flex-shrink-0" />
                                ) : (
                                    <Lock className="opacity-50 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                                )}
                            </div>
                            <div className="mt-6 relative z-10">
                                {isUnlocked ? (
                                    <div className="w-full py-2 bg-green-500/10 text-green-600 rounded-xl font-bold text-center border border-green-500/20">
                                        {t('active')}
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => unlockSkill(skillKey)}
                                        disabled={!canUnlock}
                                        className="w-full py-3 text-white rounded-xl font-bold shadow-lg disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
                                        style={{
                                            backgroundColor: 'var(--accent-color)',
                                            boxShadow: canUnlock ? '0 4px 14px 0 rgba(0,0,0,0.2)' : 'none'
                                        }}
                                    >
                                        {t('unlock_skill')} ({cost} SP)
                                    </button>
                                )}
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="mt-8">
                <h3 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{t('earn_points')}</h3>
                <div className="grid gap-4 grid-cols-2">
                    <button
                        id="ad-btn"
                        onClick={handleWatchAd}
                        className="flex flex-col items-center justify-center p-4 rounded-xl transition-colors hover:opacity-80"
                        style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                    >
                        <PlayCircle size={32} className="mb-2" style={{ color: 'var(--accent-color)' }} />
                        <span>{t('watch_ad')}</span>
                    </button>

                    <button
                        onClick={() => {
                            if (checkDailyLogin()) {
                                alert('Daily bonus collected!');
                            } else {
                                alert('Come back tomorrow!');
                            }
                        }}
                        className="flex flex-col items-center justify-center p-4 rounded-xl transition-colors hover:opacity-80"
                        style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
                    >
                        <Zap size={32} className="mb-2 text-yellow-500" />
                        <span>{t('daily_login')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
