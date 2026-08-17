'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';

export type ThemeMode = 'cyber-night' | 'sky-day';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isDay: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'vortex-portfolio-theme';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('theme-change', callback);
  };
}

function getSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'cyber-night';
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'sky-day' || saved === 'cyber-night') {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'cyber-night';
}

function getServerSnapshot(): ThemeMode {
  return 'cyber-night';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      window.dispatchEvent(new Event('theme-change'));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getSnapshot();
    const next: ThemeMode = current === 'cyber-night' ? 'sky-day' : 'cyber-night';
    setTheme(next);
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isDay: theme === 'sky-day'
      }}
    >
      <div className={`min-h-screen transition-colors duration-700 ${theme === 'sky-day' ? 'theme-sky-day' : 'theme-cyber-night'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

const defaultThemeContext: ThemeContextType = {
  theme: 'cyber-night',
  toggleTheme: () => {},
  setTheme: () => {},
  isDay: false
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context || defaultThemeContext;
}

