import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGameStore } from '../../store/gameStore';
import { ArrowRight, Check, X } from 'lucide-react';

interface TutorialStep {
    id: string;
    targetId: string;
    titleKey: string;
    contentKey: string;
    position: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'screen-top';
    path?: string; // Path to navigate to
    waitForElement?: boolean; // Wait for element to appear
    offset?: number;
}

const STEPS: TutorialStep[] = [
    {
        id: 'balance',
        targetId: 'tutorial-balance-card',
        titleKey: 'tutorial_balance_title',
        contentKey: 'tutorial_balance_content',
        position: 'bottom',
        path: '/'
    },
    {
        id: 'market-item',
        targetId: 'tutorial-first-stock-item', // Target first item generically
        titleKey: 'tutorial_market_title',
        contentKey: 'tutorial_market_content',
        position: 'top',
        path: '/market',
        offset: 200
    },
    {
        id: 'stock-detail',
        targetId: 'tutorial-chart-area',
        titleKey: 'tutorial_chart_title',
        contentKey: 'tutorial_chart_content',
        position: 'bottom',
        path: '/stock/ETH-USD', // Ethereum
        waitForElement: true
    },
    {
        id: 'trade-button',
        targetId: 'tutorial-trade-buttons',
        titleKey: 'tutorial_trade_title',
        contentKey: 'tutorial_trade_content',
        position: 'screen-top',
        path: '/stock/ETH-USD'
    },
    {
        id: 'ranking',
        targetId: 'nav-ranking',
        titleKey: 'tutorial_ranking_title',
        contentKey: 'tutorial_ranking_content',
        position: 'screen-top',
        path: '/ranking'
    },
    {
        id: 'skills',
        targetId: 'nav-skills',
        titleKey: 'tutorial_skills_title',
        contentKey: 'tutorial_skills_content',
        position: 'screen-top',
        path: '/skills'
    },
    {
        id: 'news',
        targetId: 'nav-news',
        titleKey: 'tutorial_news_title',
        contentKey: 'tutorial_news_content',
        position: 'screen-top',
        path: '/news'
    }
];

export const TutorialManager: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const { tutorialActive, tutorialStep, setTutorialStep, completeTutorial } = useGameStore();
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const currentStep = STEPS[tutorialStep];

    useEffect(() => {
        if (!tutorialActive) return;

        console.log(`[Tutorial] Active. Step: ${tutorialStep}, Target: ${currentStep.targetId}, Path: ${currentStep.path}`);

        // Reset state when step changes
        setIsVisible(false);
        setRect(null);

        const nextStep = STEPS[tutorialStep + 1];

        // Helper to check path match
        const isPathMatch = (targetPath?: string) => {
            if (!targetPath) return true;
            if (location.pathname === targetPath) return true;
            if (targetPath.startsWith('/stock/') && location.pathname.startsWith('/stock/')) return true;
            return false;
        };

        const isCorrectPath = isPathMatch(currentStep.path);

        // Auto-advance if user navigates to the next step's path manually
        // BUT only if the path is actually different. We don't want to skip steps that are on the same page.
        if (nextStep && nextStep.path && isPathMatch(nextStep.path) && currentStep.path !== nextStep.path) {
            console.log('[Tutorial] Auto-advancing to next step due to navigation match.');
            setTutorialStep(tutorialStep + 1);
            return;
        }

        // Handle Navigation Enforcement
        if (!isCorrectPath && currentStep.path) {
            console.log(`[Tutorial] Wrong path (${location.pathname}). Redirecting to ${currentStep.path}`);
            navigate(currentStep.path);
            // Don't start checking elements yet, wait for path change to re-trigger effect
            return;
        }

        let cleanupFn: (() => void) | undefined;
        let retryTimer: ReturnType<typeof setTimeout>;
        let attempts = 0;

        const check = () => {
            attempts++;
            const element = document.getElementById(currentStep.targetId);

            if (element) {
                const newRect = element.getBoundingClientRect();
                if (newRect.width > 0 && newRect.height > 0) {
                    console.log(`[Tutorial] Target found: ${currentStep.targetId} (Attempt ${attempts})`);

                    const updateRect = () => {
                        const updatedRect = element.getBoundingClientRect();
                        if (updatedRect.width > 0 && updatedRect.height > 0) {
                            setRect(updatedRect);
                            setIsVisible(true);
                        }
                    };

                    updateRect();

                    const resizeObserver = new ResizeObserver(updateRect);
                    resizeObserver.observe(element);
                    window.addEventListener('resize', updateRect);
                    window.addEventListener('scroll', updateRect, true);

                    cleanupFn = () => {
                        resizeObserver.disconnect();
                        window.removeEventListener('resize', updateRect);
                        window.removeEventListener('scroll', updateRect, true);
                    };
                } else {
                    console.log(`[Tutorial] Target found but 0 size: ${currentStep.targetId}. Retrying...`);
                    retryTimer = setTimeout(check, 200);
                }
            } else {
                if (attempts % 5 === 0) console.log(`[Tutorial] Target NOT found: ${currentStep.targetId}. Retrying... (Attempt ${attempts})`);
                retryTimer = setTimeout(check, 200);
            }
        };

        // Only start checking if we are on the correct path
        if (isCorrectPath) {
            retryTimer = setTimeout(check, 300);
        } else {
            console.log('[Tutorial] Waiting for correct path before checking elements...');
        }

        return () => {
            clearTimeout(retryTimer);
            if (cleanupFn) cleanupFn();
        };

    }, [tutorialActive, tutorialStep, currentStep, location.pathname, navigate, setTutorialStep]);

    if (!tutorialActive || !currentStep) return null;

    const handleNext = () => {
        if (tutorialStep < STEPS.length - 1) {
            setTutorialStep(tutorialStep + 1);
        } else {
            completeTutorial();
        }
    };

    const handleSkip = () => {
        completeTutorial();
    };

    // Calculate tooltip position
    const getTooltipStyle = () => {
        if (!rect) return {};

        const padding = 16;

        let top = 0;
        let left = 0;

        switch (currentStep.position) {
            case 'top':
                top = rect.top - padding - (currentStep.offset || 0);
                // Center horizontally on screen for better mobile experience
                return {
                    top,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    transform: 'translateY(-100%)'
                };
            case 'bottom':
                top = rect.bottom + padding + (currentStep.offset || 0);
                // Center horizontally on screen for better mobile experience
                return {
                    top,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    transform: 'none'
                };
            case 'left':
                top = rect.top + rect.height / 2;
                left = rect.left - padding;
                return { top, left, transform: 'translate(-100%, -50%)' };
            case 'right':
                top = rect.top + rect.height / 2;
                left = rect.right + padding;
                return { top, left, transform: 'translate(0, -50%)' };
            case 'center':
                return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
            case 'screen-top':
                return {
                    top: '120px',
                    left: 0,
                    right: 0,
                    margin: '0 auto'
                };
            default:
                return {};
        }
    };

    return createPortal(
        <AnimatePresence>
            {isVisible && rect && (
                <>
                    {/* Overlay using 4 divs to allow click-through in the center */}
                    <div className="fixed inset-0 z-[9999] pointer-events-none">
                        {/* Top */}
                        <div
                            className="absolute bg-black/70 pointer-events-auto transition-all duration-300 ease-out"
                            style={{ top: 0, left: 0, right: 0, height: rect.top - 5 }}
                        />
                        {/* Bottom */}
                        <div
                            className="absolute bg-black/70 pointer-events-auto transition-all duration-300 ease-out"
                            style={{ top: rect.bottom + 5, left: 0, right: 0, bottom: 0 }}
                        />
                        {/* Left */}
                        <div
                            className="absolute bg-black/70 pointer-events-auto transition-all duration-300 ease-out"
                            style={{ top: rect.top - 5, left: 0, width: rect.left - 5, height: rect.height + 10 }}
                        />
                        {/* Right */}
                        <div
                            className="absolute bg-black/70 pointer-events-auto transition-all duration-300 ease-out"
                            style={{ top: rect.top - 5, left: rect.right + 5, right: 0, height: rect.height + 10 }}
                        />

                        {/* Highlight Border */}
                        <div
                            className="absolute border-2 border-blue-500 rounded-lg animate-pulse pointer-events-none transition-all duration-300 ease-out"
                            style={{
                                top: rect.top - 5,
                                left: rect.left - 5,
                                width: rect.width + 10,
                                height: rect.height + 10
                            }}
                        />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed z-[10000] pointer-events-auto w-[90vw] sm:max-w-xs"
                        style={getTooltipStyle()}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-2xl border border-white/10 text-left max-h-[60vh] overflow-y-auto">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                                    {t(currentStep.titleKey)}
                                </h3>
                                <button
                                    onClick={handleSkip}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {t(currentStep.contentKey)}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    {STEPS.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1.5 rounded-full transition-all ${idx === tutorialStep ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-300 dark:bg-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    {tutorialStep === STEPS.length - 1 ? t('finish') : t('next')}
                                    {tutorialStep === STEPS.length - 1 ? <Check size={16} /> : <ArrowRight size={16} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};
