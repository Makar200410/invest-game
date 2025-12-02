import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
    User, Moon, Sun, Globe, LogOut,
    RotateCcw, ChevronRight, Shield, Award
} from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';

export const Profile = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { user, logout, startTutorial, balance } = useGameStore();

    // Theme State
    const [theme, setTheme] = useState<'swiss' | 'dark'>(() => {
        return (localStorage.getItem('theme') as 'swiss' | 'dark') || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('swiss', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'swiss' ? 'dark' : 'swiss');
    };

    // Language State
    const LANGUAGES = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
        { code: 'ja', label: '日本語', flag: '🇯🇵' },
        { code: 'pt', label: 'Português', flag: '🇵🇹' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    ];

    const [showLanguages, setShowLanguages] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleRestartTutorial = () => {
        startTutorial();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <User size={40} className="opacity-50" />
                </div>
                <h2 className="text-xl font-bold">{t('guest_user')}</h2>
                <p className="text-sm opacity-60 max-w-xs mx-auto">
                    {t('login_prompt')}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4 pb-20">
            {/* Header */}
            <header className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">{t('profile')}</h1>
            </header>

            {/* User Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl p-3 shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, var(--accent-color), #8b5cf6)',
                    color: 'white'
                }}
            >
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Shield size={100} />
                </div>

                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold border-2 border-white/30 shadow-inner">
                        {user.username.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{user.username}</h2>
                        <p className="opacity-80 text-xs flex items-center gap-1">
                            <Award size={12} />
                            {t('investor_level')}
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex gap-3">
                    <div className="bg-white/10 rounded-xl p-2 flex-1 backdrop-blur-sm">
                        <p className="text-[10px] opacity-70 uppercase tracking-wider">{t('balance')}</p>
                        <p className="text-base font-bold">${balance?.toLocaleString() || '0'}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2 flex-1 backdrop-blur-sm">
                        <p className="text-[10px] opacity-70 uppercase tracking-wider">{t('joined')}</p>
                        <p className="text-base font-bold">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </motion.div>

            {/* Settings Section */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2">{t('settings')}</h3>

                {/* Theme Toggle */}
                <Card className="!p-0 overflow-hidden">
                    <button
                        onClick={toggleTheme}
                        className="w-full flex items-center justify-between p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-purple-500/10 text-purple-500' : 'bg-orange-500/10 text-orange-500'}`}>
                                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm">{t('appearance')}</p>
                                <p className="text-[10px] opacity-50">{theme === 'dark' ? t('dark_mode') : t('light_mode')}</p>
                            </div>
                        </div>
                        <div className={`w-10 h-5 rounded-full p-0.5 transition-colors ${theme === 'dark' ? 'bg-purple-500' : 'bg-slate-300'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                    </button>
                </Card>

                {/* Language Selector */}
                <Card className="!p-0 overflow-hidden">
                    <button
                        onClick={() => setShowLanguages(!showLanguages)}
                        className="w-full flex items-center justify-between p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-500">
                                <Globe size={16} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm">{t('language')}</p>
                                <p className="text-[10px] opacity-50">
                                    {LANGUAGES.find(l => l.code === i18n.language)?.label || 'English'}
                                </p>
                            </div>
                        </div>
                        <ChevronRight size={16} className={`opacity-40 transition-transform ${showLanguages ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Expanded Language List */}
                    {showLanguages && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20"
                        >
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        i18n.changeLanguage(lang.code);
                                        setShowLanguages(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${i18n.language === lang.code ? 'text-blue-500 font-bold' : 'opacity-70'}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-lg">{lang.flag}</span>
                                        {lang.label}
                                    </span>
                                    {i18n.language === lang.code && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </Card>
            </div>

            {/* General Section */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-wider px-2">{t('general')}</h3>

                <Card className="!p-0 overflow-hidden">
                    <button
                        onClick={handleRestartTutorial}
                        className="w-full flex items-center justify-between p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-green-500/10 text-green-500">
                                <RotateCcw size={16} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm">{t('restart_tutorial')}</p>
                                <p className="text-[10px] opacity-50">{t('restart_tutorial_desc')}</p>
                            </div>
                        </div>
                        <ChevronRight size={16} className="opacity-40" />
                    </button>
                </Card>

                <Card className="!p-0 overflow-hidden">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-between p-2 hover:bg-red-500/10 hover:text-red-500 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <LogOut size={16} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm">{t('logout')}</p>
                                <p className="text-[10px] opacity-50 group-hover:text-red-500/70">{t('switch_account')}</p>
                            </div>
                        </div>
                    </button>
                </Card>
            </div>

            <div className="text-center text-xs opacity-30 mt-8">
                InvestGame v1.0.0 • Built with ❤️
            </div>
        </div>
    );
};
