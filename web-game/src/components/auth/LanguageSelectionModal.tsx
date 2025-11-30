import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

interface LanguageSelectionModalProps {
    isOpen: boolean;
    onSelect: () => void;
}

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

export const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({ isOpen, onSelect }) => {
    const { i18n } = useTranslation();

    if (!isOpen) return null;

    const handleSelect = (langCode: string) => {
        i18n.changeLanguage(langCode);
        onSelect();
    };

    return (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[70] p-4">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl w-full max-w-sm shadow-2xl relative">
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Select Language</h2>
                <p className="text-slate-400 text-center mb-6 text-sm">Choose your preferred language to continue</p>

                <div className="grid grid-cols-2 gap-3">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${i18n.language === lang.code
                                    ? 'bg-blue-600/20 border-blue-500 text-white'
                                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="font-medium">{lang.label}</span>
                            {i18n.language === lang.code && <Check size={16} className="ml-auto text-blue-400" />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
