import React from 'react';
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize theme from localStorage on mount
    // Default is always 'light' mode
    useEffect(() => {
        const stored = localStorage.getItem('logiflow-theme') as Theme | null;
        if (stored === 'dark' || stored === 'light') {
            setTheme(stored);
        }
        // If no stored preference, keep the default 'light' theme
        setIsInitialized(true);
    }, []);

    // Apply theme class to document
    useEffect(() => {
        if (!isInitialized) return;

        const root = window.document.documentElement;

        // Remove both classes first
        root.classList.remove('dark', 'light');

        // Add the current theme class
        root.classList.add(theme);

        // Save to localStorage
        localStorage.setItem('logiflow-theme', theme);

        console.log('Theme changed to:', theme); // Debug log
    }, [theme, isInitialized]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            console.log('Toggling theme from', prevTheme, 'to', newTheme); // Debug log
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
