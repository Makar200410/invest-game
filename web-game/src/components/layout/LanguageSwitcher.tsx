import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

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

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"
                title="Switch Language"
            >
                <Globe size={20} className="text-gray-600 dark:text-gray-300" />
                <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-blue-500 text-white px-1 rounded-full">
                    {i18n.language.toUpperCase()}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden z-50">
                    <div className="py-1">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${i18n.language === lang.code
                                    ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20'
                                    : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-base">{lang.flag}</span>
                                    {lang.label}
                                </span>
                                {i18n.language === lang.code && <Check size={16} />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
