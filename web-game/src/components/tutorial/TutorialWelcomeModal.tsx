import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle } from 'lucide-react';

interface TutorialWelcomeModalProps {
    isOpen: boolean;
    onStart: () => void;
    onSkip: () => void;
}

export const TutorialWelcomeModal: React.FC<TutorialWelcomeModalProps> = ({ isOpen, onStart, onSkip }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-3xl w-full max-w-sm shadow-2xl relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <PlayCircle size={32} className="text-white" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('tutorial_welcome_title', 'Welcome!')}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {t('tutorial_welcome_desc', 'Invest Game is a real-market simulator. Would you like a quick tour to learn the basics?')}
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={onStart}
                            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <PlayCircle size={20} />
                            {t('start_tutorial', 'Start Tutorial')}
                        </button>

                        <button
                            onClick={onSkip}
                            className="w-full py-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 font-bold text-base transition-all active:scale-[0.98]"
                        >
                            {t('skip_tutorial', 'Skip for now')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
