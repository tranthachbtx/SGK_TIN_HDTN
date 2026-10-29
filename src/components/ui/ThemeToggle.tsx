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
      whileTap={{ scale: 0.96 }}
      className={cn(
        "relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-300 font-bold min-h-[44px] min-w-[44px] cursor-pointer",
        "bg-[#e0e0e0] dark:bg-[#212121] text-slate-800 dark:text-slate-100",
        "shadow-neu-sm hover:shadow-neu",
        "border border-white/60 dark:border-white/10",
        className
      )}
      title={isDark ? "Chuyển sang giao diện Sáng (#e0e0e0)" : "Chuyển sang giao diện Tối (#212121)"}
      aria-label="Chuyển chế độ sáng tối"
    >
      <div
        className={cn(
          "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
          isDark
            ? "bg-amber-400/20 text-amber-300 shadow-inner"
            : "bg-amber-500/10 text-amber-600 shadow-sm"
        )}
      >
        {isDark ? <Moon size={18} className="fill-current" /> : <Sun size={18} className="fill-amber-500" />}
      </div>

      {showLabel && (
        <div className="flex flex-col items-start leading-none text-left pr-1">
          <span className="text-[9px] uppercase tracking-wider opacity-60 font-black">
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
