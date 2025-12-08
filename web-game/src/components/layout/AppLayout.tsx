import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Trophy, Zap, GraduationCap, User as UserIcon, Home, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { AuthModal } from '../auth/AuthModal';
import { TutorialManager } from '../tutorial/TutorialManager';
import { TutorialWelcomeModal } from '../tutorial/TutorialWelcomeModal';
import { LanguageSelectionModal } from '../auth/LanguageSelectionModal';
import { Avatar } from '../ui/Avatar';
import { ProBadge } from '../ui/ProBadge';
import { ToastContainer } from '../ui/ToastContainer';

type OnboardingStep = 'language' | 'intro' | 'auth' | 'tutorial-confirm' | 'tour' | 'complete';

export const AppLayout = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const prevPathRef = useRef(location.pathname);

    // Scroll to top when route changes
    useEffect(() => {
        if (location.pathname !== prevPathRef.current) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            prevPathRef.current = location.pathname;
        }
    }, [location.pathname]);
    const { user, login, startTutorial, completeTutorial, hasCompletedTutorial, tutorialActive, settings, isPremium } = useGameStore();

    // Scroll tracking for floating back button
    const [showFloatingBack, setShowFloatingBack] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Show floating button when scrolled past 100px (header + a bit more)
            setShowFloatingBack(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            // Ask user if they want to start tutorial
            setOnboardingStep('tutorial-confirm');
        } else {
            setOnboardingStep('complete');
        }
    }, [user, hasCompletedTutorial, tutorialActive]);

    // Step 1: Language Selected
    const handleLanguageSelected = () => {
        localStorage.setItem('hasSelectedLanguage', 'true');
        // Skip intro, go to auth or tutorial confirm
        if (!user && !hasCompletedTutorial) {
            setOnboardingStep('auth');
            setIsAuthOpen(true);
        } else if (!hasCompletedTutorial) {
            setOnboardingStep('tutorial-confirm');
        } else {
            setOnboardingStep('complete');
        }
    };

    // Step 2: Intro Finished - Removed

    // Step 3: Auth Finished (Login/Register)
    const handleAuthFinished = (userData: any) => {
        login(userData);
        setIsAuthOpen(false);

        // Request Notification Permission
        if (settings.notificationsEnabled && 'Notification' in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }

        // Ask for tutorial after login
        if (!hasCompletedTutorial) {
            setOnboardingStep('tutorial-confirm');
        } else {
            setOnboardingStep('complete');
        }
    };

    // Step 4: Tutorial Confirmation
    const handleStartTutorial = () => {
        startTutorial();
        setOnboardingStep('complete'); // TutorialManager handles the rest
    };

    const handleSkipTutorial = () => {
        completeTutorial();
        setOnboardingStep('complete');
    };

    const navItems = [
        { path: '/', icon: TrendingUp, label: t('market'), id: 'nav-market' },
        { path: '/house', icon: Home, label: t('house', 'House'), id: 'nav-house' },
        { path: '/ranking', icon: Trophy, label: t('rank'), id: 'nav-ranking' },
        { path: '/skills', icon: Zap, label: t('skills'), id: 'nav-skills' },
        { path: '/learning', icon: GraduationCap, label: t('learning', 'Learning'), id: 'nav-learning' },
    ];

    return (
        <div className="min-h-screen font-sans transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 flex justify-between items-center backdrop-blur-md border-b shadow-sm transition-all duration-300"
                style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)'
                }}>
                {/* Logo */}
                <div className="flex items-center">
                    <div
                        className="flex items-center gap-2 cursor-pointer transform transition-all duration-300 hover:scale-105"
                        onClick={() => window.location.href = '/'}
                    >
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        <span className="font-extrabold tracking-wide text-sm" style={{ color: 'var(--text-primary)' }}>
                            InvestGame
                        </span>
                    </div>
                </div>

                {/* Profile / Auth Entry */}
                <div className="flex items-center gap-2">
                    {user ? (
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => `
                                flex items-center gap-2 pl-2 pr-1 py-1 rounded-full transition-all duration-300
                                ${isActive ? 'bg-white/10 ring-2 ring-blue-500/20' : 'hover:bg-white/5'}
                            `}
                        >
                            <div className="text-right mr-1">
                                <p className="text-xs font-bold leading-none">{user.username}</p>
                                <p className="text-[10px] opacity-50 leading-none mt-0.5 hidden sm:block">{t('profile', 'Profile')}</p>
                            </div>
                            <div className="relative">
                                <Avatar username={user.username} size="sm" />
                                {isPremium && (
                                    <div className="absolute -top-1 -right-1">
                                        <ProBadge size="xs" />
                                    </div>
                                )}
                            </div>
                        </NavLink>
                    ) : (
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95"
                        >
                            <UserIcon size={16} />
                            <span className="text-xs font-bold">{t('login', 'Login')}</span>
                        </button>
                    )}
                </div>
            </header>

            {/* Floating Back Button - Shows only when scrolled down past 100px */}
            {location.pathname !== '/' && showFloatingBack && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={() => navigate(-1)}
                    className="fixed bottom-24 left-4 z-[100] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 active:scale-90 hover:scale-110 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]"
                    style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                        boxShadow: '0 6px 25px rgba(139, 92, 246, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <motion.div
                        animate={{ x: [-2, 0, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ArrowLeft size={22} className="text-white drop-shadow-lg" />
                    </motion.div>
                </motion.button>
            )}

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
                            onClick={() => {
                                // Always scroll to top when clicking on a tab
                                window.scrollTo({ top: 0, behavior: 'instant' });
                            }}
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

            <ToastContainer />

            <LanguageSelectionModal
                isOpen={onboardingStep === 'language'}
                onSelect={handleLanguageSelected}
            />

            <AuthModal
                isOpen={isAuthOpen}
                onClose={() => {
                    setIsAuthOpen(false);
                    if (onboardingStep === 'auth') {
                        // If they skip auth, show tutorial confirm anyway
                        setOnboardingStep('tutorial-confirm');
                    }
                }}
                onLogin={handleAuthFinished}
            />

            <TutorialWelcomeModal
                isOpen={onboardingStep === 'tutorial-confirm'}
                onStart={handleStartTutorial}
                onSkip={handleSkipTutorial}
            />

            <TutorialManager />
        </div >
    );
};
