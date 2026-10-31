"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = true }: ThemeToggleProps) {
  const { theme, toggleTheme } = useSettings();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-200 font-bold min-h-[44px] min-w-[44px] cursor-pointer",
        "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100",
        "border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700",
        className
      )}
      title={isDark ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}
      aria-label="Chuyển chế độ sáng tối"
    >
      <div
        className={cn(
          "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0",
          isDark
            ? "bg-amber-400/10 text-amber-300"
            : "bg-amber-500/10 text-amber-600"
        )}
      >
        {isDark ? <Moon size={18} className="fill-current" /> : <Sun size={18} className="fill-amber-500" />}
      </div>

      {showLabel && (
        <div className="flex flex-col items-start leading-none text-left pr-1">
          <span className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
            Giao diện
          </span>
          <span className="text-xs font-black mt-0.5">
            {isDark ? "Tối" : "Sáng"}
          </span>
        </div>
      )}
    </motion.button>
  );
}
