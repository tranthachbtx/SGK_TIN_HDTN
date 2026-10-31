"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "light" | "dark";

interface SettingsContextType {
  isTeacherMode: boolean;
  setIsTeacherMode: (value: boolean) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isTeacherMode, setIsTeacherModeState] = useState(false);
  const [theme, setThemeState] = useState<ThemeMode>("light");

  // Load preferences from localStorage on mount (default to light mode)
  useEffect(() => {
    // Teacher mode preference
    const savedTeacher = localStorage.getItem("isTeacherMode");
    if (savedTeacher !== null) {
      setIsTeacherModeState(savedTeacher === "true");
    }

    // Theme preference (default to light mode)
    const savedTheme = localStorage.getItem("app_theme") as ThemeMode | null;
    if (savedTheme === "dark") {
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    } else {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setIsTeacherMode = (value: boolean) => {
    setIsTeacherModeState(value);
    localStorage.setItem("isTeacherMode", String(value));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("app_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SettingsContext.Provider
      value={{ isTeacherMode, setIsTeacherMode, theme, setTheme, toggleTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    return {
      isTeacherMode: false,
      setIsTeacherMode: () => {},
      theme: "light" as ThemeMode,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
