import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a preference in localStorage, default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply system preference on first load if no saved theme
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkScheme ? 'dark' : 'light');
    }
  }, []);

  // Update the HTML data-theme attribute and save to localStorage when theme changes
  useEffect(() => {
    // Set the data-theme attribute on html element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage for persistence
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};