import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';


type Theme = 'swiss' | 'dark';

export const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'swiss';
    });

    useEffect(() => {
        const root = window.document.body.parentElement; // html element
        if (root) {
            root.classList.remove('glass', 'cyber', 'swiss', 'dark');
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'swiss' ? 'dark' : 'swiss');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 hover:bg-white/10"
            style={{
                color: 'var(--text-primary)'
            }}
            title={theme === 'swiss' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
            {theme === 'swiss' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};

