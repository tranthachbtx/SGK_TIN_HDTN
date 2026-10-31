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
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-200 font-bold min-h-[44px] cursor-pointer",
        "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100",
        "border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700",
        isTeacherMode && "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800/60",
        className
      )}
      title={isTeacherMode ? "Chuyển sang chế độ Học sinh" : "Chuyển sang chế độ Giáo viên (hiển thị gợi ý & rubric)"}
      aria-label="Chuyển chế độ giảng dạy"
    >
      <div
        className={cn(
          "w-8 h-8 rounded-xl flex items-center justify-center text-lg transition-all duration-200 shrink-0",
          isTeacherMode
            ? "bg-indigo-600 text-white shadow-xs"
            : "bg-slate-100 dark:bg-slate-800"
        )}
      >
        {isTeacherMode ? "👩‍🏫" : "👨‍🎓"}
      </div>
      {showLabel && (
        <div className="flex flex-col items-start leading-none text-left pr-1">
          <span className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
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
