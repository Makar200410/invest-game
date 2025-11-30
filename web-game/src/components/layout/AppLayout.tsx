import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TrendingUp, Trophy, Zap, Newspaper, User as UserIcon, LogOut, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { AuthModal } from '../auth/AuthModal';
import { TutorialManager } from '../tutorial/TutorialManager';
import { LanguageSelectionModal } from '../auth/LanguageSelectionModal';
type OnboardingStep = 'language' | 'intro' | 'auth' | 'tour' | 'complete';

export const AppLayout = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { user, login, logout, startTutorial, hasCompletedTutorial, tutorialActive } = useGameStore();

    // Onboarding State
    const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('complete');
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    // Initial Check
    useEffect(() => {
        const hasSelectedLanguage = localStorage.getItem('hasSelectedLanguage');
        // const hasSeenIntro = localStorage.getItem('hasSeenIntro'); // Removed Intro step
        // const hasCompletedTour = localStorage.getItem('hasCompletedTour'); // Use store instead

        if (!hasSelectedLanguage) {
            setOnboardingStep('language');
        } else if (!user) {
            // If not logged in, show auth
            if (!hasCompletedTutorial) {
                setOnboardingStep('auth');
                setIsAuthOpen(true);
            } else {
                setOnboardingStep('complete');
            }
        } else if (!hasCompletedTutorial && !tutorialActive) {
            // Only start tour if not already active (prevent reset on reload)
            setOnboardingStep('tour');
        } else {
            setOnboardingStep('complete');
        }
    }, [user, hasCompletedTutorial, tutorialActive]);

    // Step 1: Language Selected
    const handleLanguageSelected = () => {
        localStorage.setItem('hasSelectedLanguage', 'true');
        // Skip intro, go to auth or tour
        if (!user && !hasCompletedTutorial) {
            setOnboardingStep('auth');
            setIsAuthOpen(true);
        } else if (!hasCompletedTutorial) {
            setOnboardingStep('tour');
        } else {
            setOnboardingStep('complete');
        }
    };

    // Step 2: Intro Finished - Removed

    // Step 3: Auth Finished (Login/Register)
    const handleAuthFinished = (userData: any) => {
        login(userData);
        setIsAuthOpen(false);
        // Start tutorial after login
        startTutorial();
        setOnboardingStep('complete');
    };

    // Manage Tutorial Trigger
    useEffect(() => {
        if (onboardingStep === 'tour') {
            startTutorial();
            setOnboardingStep('complete');
        }
    }, [onboardingStep, startTutorial]);

    const navItems = [
        { path: '/', icon: TrendingUp, label: t('market'), id: 'nav-market' },
        { path: '/ranking', icon: Trophy, label: t('rank'), id: 'nav-ranking' },
        { path: '/skills', icon: Zap, label: t('skills'), id: 'nav-skills' },
        { path: '/news', icon: Newspaper, label: t('news'), id: 'nav-news' },
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
                        onClick={startTutorial}
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

            {/* Fixed Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t flex justify-around items-center py-2 px-2 transition-all duration-300"
                style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)'
                }}>
                {navItems.map(({ path, icon: Icon, label, id }) => {
                    const isActive = location.pathname === path;
                    return (
                        <NavLink
                            key={path}
                            id={id}
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
                    setIsAuthOpen(false);
                    if (onboardingStep === 'auth') {
                        // If they skip auth, show tour anyway
                        setOnboardingStep('tour');
                    }
                }}
                onLogin={handleAuthFinished}
            />

            <TutorialManager />
        </div>
    );
};
