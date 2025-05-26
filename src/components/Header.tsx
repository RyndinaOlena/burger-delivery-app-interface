import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Shield } from 'lucide-react';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-20 bg-slate-200 dark:bg-slate-800 shadow-md transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Shield className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                    <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                        Military Gallery
                    </h1>
                    <p>WELCOME TO MY PROJECT</p>
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors duration-200"
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                    {theme === 'light' ? (
                        <Moon className="h-5 w-5 text-slate-700" />
                    ) : (
                        <Sun className="h-5 w-5 text-slate-300" />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;