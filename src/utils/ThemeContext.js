import React from 'react';

const ThemeContext = React.createContext({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  // Initialize from storage or system preference
  React.useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    } else if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(isDark ? 'theme-dark' : 'theme-light');
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');

    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = React.useMemo(() => ({
    theme,
    toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')),
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
