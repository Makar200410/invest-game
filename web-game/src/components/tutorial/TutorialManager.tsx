import React, { useEffect, useState, useRef } from 'react';
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
    position: 'top' | 'bottom' | 'left' | 'right' | 'center';
    path?: string; // Path to navigate to
    waitForElement?: boolean; // Wait for element to appear
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
        targetId: 'tutorial-stock-item-1', // Target Ethereum (usually 2nd)
        titleKey: 'tutorial_market_title',
        contentKey: 'tutorial_market_content',
        position: 'top',
        path: '/'
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
        position: 'top',
        path: '/stock/ETH-USD'
    },
    {
        id: 'ranking',
        targetId: 'nav-ranking',
        titleKey: 'tutorial_ranking_title',
        contentKey: 'tutorial_ranking_content',
        position: 'top',
        path: '/ranking'
    },
    {
        id: 'skills',
        targetId: 'nav-skills',
        titleKey: 'tutorial_skills_title',
        contentKey: 'tutorial_skills_content',
        position: 'top',
        path: '/skills'
    },
    {
        id: 'news',
        targetId: 'nav-news',
        titleKey: 'tutorial_news_title',
        contentKey: 'tutorial_news_content',
        position: 'top',
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
    const observerRef = useRef<ResizeObserver | null>(null);

    const currentStep = STEPS[tutorialStep];

    useEffect(() => {
        if (!tutorialActive) return;

        const nextStep = STEPS[tutorialStep + 1];

        // Auto-advance if user navigates to the next step's path manually
        if (nextStep && nextStep.path && location.pathname === nextStep.path) {
            setTutorialStep(tutorialStep + 1);
            return;
        }

        // Handle Navigation Enforcement
        // Only enforce if we are NOT on the correct path AND we are not transitioning to the next step's path
        if (currentStep.path && location.pathname !== currentStep.path) {
            // Special case for dynamic routes like /stock/:id
            const isOnStockPage = location.pathname.startsWith('/stock/');
            const targetIsStockPage = currentStep.path.includes('/stock/');

            if (targetIsStockPage && isOnStockPage) {
                // Already on a stock page, assume it's fine (or strict check if needed)
            } else {
                // Prevent redirecting if user is navigating TO the next step
                if (nextStep && location.pathname === nextStep.path) {
                    // Do nothing, let the auto-advance above handle it on next render
                } else {
                    navigate(currentStep.path);
                }
            }
        }

        const findTarget = () => {
            const element = document.getElementById(currentStep.targetId);
            if (element) {
                const updateRect = () => {
                    const newRect = element.getBoundingClientRect();
                    // Check if rect is valid (visible)
                    if (newRect.width > 0 && newRect.height > 0) {
                        setRect(newRect);
                        setIsVisible(true);
                    }
                };

                updateRect();

                // Observe resize
                if (observerRef.current) observerRef.current.disconnect();
                observerRef.current = new ResizeObserver(updateRect);
                observerRef.current.observe(element);

                // Also listen to window resize/scroll
                window.addEventListener('resize', updateRect);
                window.addEventListener('scroll', updateRect, true);

                return () => {
                    window.removeEventListener('resize', updateRect);
                    window.removeEventListener('scroll', updateRect, true);
                    if (observerRef.current) observerRef.current.disconnect();
                };
            } else {
                // Element not found yet, retry
                setIsVisible(false);
                const timer = setTimeout(findTarget, 500);
                return () => clearTimeout(timer);
            }
        };

        const cleanup = findTarget();
        return () => {
            if (cleanup && typeof cleanup === 'function') cleanup();
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
                top = rect.top - padding;
                left = rect.left + rect.width / 2;
                return { top, left, transform: 'translate(-50%, -100%)' };
            case 'bottom':
                top = rect.bottom + padding;
                left = rect.left + rect.width / 2;
                return { top, left, transform: 'translate(-50%, 0)' };
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
            default:
                return {};
        }
    };

    return createPortal(
        <AnimatePresence>
            {isVisible && rect && (
                <div className="fixed inset-0 z-[9999] pointer-events-none">
                    {/* Dark Overlay with Cutout */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-auto">
                        <defs>
                            <mask id="tutorial-mask">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <rect
                                    x={rect.left - 5}
                                    y={rect.top - 5}
                                    width={rect.width + 10}
                                    height={rect.height + 10}
                                    rx="8"
                                    fill="black"
                                />
                            </mask>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="rgba(0,0,0,0.7)"
                            mask="url(#tutorial-mask)"
                        />
                        {/* Highlight Border */}
                        <rect
                            x={rect.left - 5}
                            y={rect.top - 5}
                            width={rect.width + 10}
                            height={rect.height + 10}
                            rx="8"
                            fill="none"
                            stroke="var(--accent-color)"
                            strokeWidth="2"
                            className="animate-pulse"
                        />
                    </svg>

                    {/* Tooltip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute pointer-events-auto max-w-xs w-full"
                        style={getTooltipStyle()}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-2xl border border-white/10 text-left">
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
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};
