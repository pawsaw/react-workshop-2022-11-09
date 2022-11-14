import React, { useContext } from 'react';
import { defaultTheme, Theme } from './Theme';

const ThemeContext = React.createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  // ...

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
