"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

export function TeacherToggle({
  className,
  onToggle,
  showLabel = true,
}: {
  className?: string;
  onToggle?: () => void;
  showLabel?: boolean;
}) {
  const { isTeacherMode, setIsTeacherMode } = useSettings();

  return (
    <motion.button
      onClick={() => {
        setIsTeacherMode(!isTeacherMode);
        if (onToggle) {
          onToggle();
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-300 font-bold min-h-[44px] cursor-pointer",
        "bg-[#e0e0e0] dark:bg-[#212121] text-slate-800 dark:text-slate-100",
        isTeacherMode
          ? "shadow-neu-pressed text-indigo-700 dark:text-indigo-300 border border-indigo-400/50"
          : "shadow-neu-sm hover:shadow-neu border border-white/60 dark:border-white/10",
        className
      )}
      title={isTeacherMode ? "Chuyển sang chế độ Học sinh" : "Chuyển sang chế độ Giáo viên (hiển thị gợi ý & rubric)"}
      aria-label="Chuyển chế độ giảng dạy"
    >
      <div
        className={cn(
          "w-8 h-8 rounded-xl flex items-center justify-center text-lg transition-all duration-300 shrink-0",
          isTeacherMode
            ? "bg-indigo-500 text-white shadow-sm"
            : "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm border border-white/40 dark:border-white/10"
        )}
      >
        {isTeacherMode ? "👩‍🏫" : "👨‍🎓"}
      </div>
      {showLabel && (
        <div className="flex flex-col items-start leading-none text-left pr-1">
          <span className="text-[9px] uppercase tracking-wider opacity-60 font-black">
            Chế độ
          </span>
          <span className="text-xs font-black mt-0.5">
            {isTeacherMode ? "Giáo viên" : "Học sinh"}
          </span>
        </div>
      )}
    </motion.button>
  );
}
