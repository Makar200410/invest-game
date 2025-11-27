import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TrendingUp, Trophy, Zap, Newspaper, User as UserIcon, LogOut, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { AuthModal } from '../auth/AuthModal';
import { TutorialOverlay, type TutorialStep } from '../ui/TutorialOverlay';
import { LanguageSelectionModal } from '../auth/LanguageSelectionModal';

type OnboardingStep = 'language' | 'intro' | 'auth' | 'tour' | 'complete';

export const AppLayout = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { user, login, logout } = useGameStore();

    // Onboarding State
    const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('complete');
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);
    const [tutorialSteps, setTutorialSteps] = useState<TutorialStep[]>([]);

    // Initial Check
    useEffect(() => {
        const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
        const hasSelectedLanguage = localStorage.getItem('hasSelectedLanguage');

        if (!hasSelectedLanguage) {
            setOnboardingStep('language');
        } else if (!hasCompletedOnboarding) {
            setOnboardingStep('intro');
        } else if (!user) {
            // If onboarding done but not logged in, just show auth if triggered manually, 
            // but here we might want to just be in 'complete' state and let user click login.
            // However, user request implies a flow. Let's stick to manual login for returning users.
            setOnboardingStep('complete');
        }
    }, [user]);

    // Step 1: Language Selected
    const handleLanguageSelected = () => {
        localStorage.setItem('hasSelectedLanguage', 'true');
        setOnboardingStep('intro');
    };

    // Step 2: Intro Finished
    const handleIntroFinished = () => {
        setOnboardingStep('auth');
        setIsAuthOpen(true);
    };

    // Step 3: Auth Finished (Login/Register)
    const handleAuthFinished = (userData: any) => {
        login(userData);
        setIsAuthOpen(false);
        // Only show tour if it's part of the initial onboarding
        const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
        if (!hasCompletedOnboarding) {
            setOnboardingStep('tour');
        } else {
            setOnboardingStep('complete');
        }
    };

    // Step 4: Tour Finished
    const handleTourFinished = () => {
        localStorage.setItem('hasCompletedOnboarding', 'true');
        setOnboardingStep('complete');
        setIsTutorialOpen(false);
    };

    // Define Steps
    const introSteps: TutorialStep[] = [
        {
            title: t('tutorial_welcome_title', 'Welcome!'),
            description: t('tutorial_welcome_desc', 'Invest Game is a real-market simulator. Let\'s quickly go over the basics.'),
            image: '👋'
        },
        {
            title: t('tutorial_goal_title', 'Your Goal'),
            description: t('tutorial_goal_desc', 'Start with $100k virtual cash. Buy stocks and crypto to grow your portfolio and climb the leaderboard.'),
            image: '🏆'
        }
    ];

    const tourSteps: TutorialStep[] = [
        {
            title: t('tutorial_market_title', 'Market'),
            description: t('tutorial_market_desc', 'Here you see live prices for stocks and crypto. Tap any asset to see details.'),
            image: '📈'
        },
        {
            title: t('tutorial_trade_title', 'Trading'),
            description: t('tutorial_trade_desc', 'Buy low, sell high. Use "Short Sell" to profit from falling prices (requires skill).'),
            image: '💰'
        },
        {
            title: t('tutorial_skills_title', 'Skills'),
            description: t('tutorial_skills_desc', 'Earn Skill Points (SP) by leveling up or watching ads. Unlock powerful tools like Leverage and Technical Analysis.'),
            image: '⚡'
        },
        {
            title: t('tutorial_news_title', 'News'),
            description: t('tutorial_news_desc', 'Stay updated with real-time financial news to make informed decisions.'),
            image: '📰'
        }
    ];

    // Manage Tutorial Overlay Content based on step
    useEffect(() => {
        if (onboardingStep === 'intro') {
            setTutorialSteps(introSteps);
            setIsTutorialOpen(true);
        } else if (onboardingStep === 'tour') {
            setTutorialSteps(tourSteps);
            setIsTutorialOpen(true);
        } else {
            setIsTutorialOpen(false);
        }
    }, [onboardingStep, t]);

    const navItems = [
        { path: '/', icon: TrendingUp, label: t('market') },
        { path: '/ranking', icon: Trophy, label: t('rank') },
        { path: '/skills', icon: Zap, label: t('skills') },
        { path: '/news', icon: Newspaper, label: t('news') },
    ];

    return (
        <div className="min-h-screen font-sans transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b shadow-sm transition-all duration-300"
                style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)'
                }}>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                        IG
                    </div>
                    <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        InvestGame
                    </h1>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            setTutorialSteps(tourSteps);
                            setIsTutorialOpen(true);
                        }}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400"
                        title="Help / Tutorial"
                    >
                        <HelpCircle size={20} />
                    </button>
                    <LanguageSwitcher />
                    <ThemeSwitcher />

                    {user ? (
                        <div className="flex items-center gap-2 ml-2">
                            <span className="text-sm font-medium hidden sm:block">{user.username}</span>
                            <button
                                onClick={logout}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                                title="Logout"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors ml-2"
                            title="Login"
                        >
                            <UserIcon size={20} />
                        </button>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-28 px-4 max-w-md mx-auto min-h-screen relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Outlet />
                </motion.div>
            </main>

            {/* Floating Navigation */}
            <nav className="fixed bottom-6 left-4 right-4 z-50 backdrop-blur-xl rounded-2xl shadow-2xl border flex justify-around items-center py-3 px-2 max-w-md mx-auto transition-all duration-300"
                style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)'
                }}>
                {navItems.map(({ path, icon: Icon, label }) => {
                    const isActive = location.pathname === path;
                    return (
                        <NavLink
                            key={path}
                            to={path}
                            className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${isActive
                                ? '-translate-y-1 shadow-lg'
                                : 'opacity-70 hover:opacity-100'
                                }`}
                            style={{
                                color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                                backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                boxShadow: isActive ? `0 4px 14px 0 var(--accent-color)` : 'none'
                            }}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                            <span className={`text-[10px] font-bold mt-1 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 h-0 overflow-hidden'}`}>
                                {label}
                            </span>
                        </NavLink>
                    );
                })}
            </nav>

            <LanguageSelectionModal
                isOpen={onboardingStep === 'language'}
                onSelect={handleLanguageSelected}
            />

            <AuthModal
                isOpen={isAuthOpen}
                onClose={() => {
                    // If in onboarding flow, prevent closing without login? 
                    // Or allow closing but stay in 'auth' step?
                    // User said "Then comes the registration".
                    // Let's allow close, but if they are not logged in, they are just in 'complete' state (guest mode).
                    setIsAuthOpen(false);
                    if (onboardingStep === 'auth') {
                        // If they skip auth, maybe skip tour? Or show tour anyway?
                        // "Then the basic tabs... are taught".
                        // Let's show tour even if they don't login, so they know the app.
                        setOnboardingStep('tour');
                    }
                }}
                onLogin={handleAuthFinished}
            />

            <TutorialOverlay
                isOpen={isTutorialOpen}
                onClose={() => {
                    if (onboardingStep === 'intro') {
                        handleIntroFinished();
                    } else if (onboardingStep === 'tour') {
                        handleTourFinished();
                    } else {
                        setIsTutorialOpen(false);
                    }
                }}
                steps={tutorialSteps}
            />
        </div>
    );
};
