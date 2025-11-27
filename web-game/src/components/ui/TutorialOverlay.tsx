import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

export interface TutorialStep {
    title: string;
    description: string;
    image: string;
}

interface TutorialOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    steps: TutorialStep[];
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ isOpen, onClose, steps }) => {
    const { t } = useTranslation();
    const [step, setStep] = useState(0);

    // Reset step when opened
    useEffect(() => {
        if (isOpen) setStep(0);
    }, [isOpen]);

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    key={step}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-200 dark:border-slate-700"
                >
                    {/* Header Image/Icon */}
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl shadow-inner">
                        {steps[step].image}
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                            {steps[step].title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {steps[step].description}
                        </p>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mb-6">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-6 bg-blue-500' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                                />
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 rounded-xl font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {t('tutorial_skip', 'Skip')}
                            </button>
                            <button
                                onClick={handleNext}
                                className="flex-[2] py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                {step === steps.length - 1 ? (
                                    <>
                                        {t('tutorial_finish', 'Start Game')} <Check size={18} />
                                    </>
                                ) : (
                                    <>
                                        {t('tutorial_next', 'Next')} <ChevronRight size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
