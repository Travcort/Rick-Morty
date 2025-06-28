// theme/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "shared/store/colours";

type ThemeType = keyof typeof Theme;

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeType;
    if (stored && Theme[stored]) {
      setTheme(stored);
      applyTheme(Theme[stored]);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      applyTheme(Theme.light);
    }
  }, []);

  const applyTheme = (themeObject: typeof Theme.light) => {
    Object.entries(themeObject).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(Theme[newTheme]);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};