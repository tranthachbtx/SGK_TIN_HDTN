"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface AlertProps {
  children: React.ReactNode;
  type?: "info" | "success" | "warning" | "error" | "danger" | "tip" | "idea" | "memo";
  title?: string;
  className?: string;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
  danger: AlertCircle,
  tip: CheckCircle2,
  idea: Info,
  memo: AlertCircle,
};

const styles = {
  info: "border-l-sky-500 text-sky-700 dark:text-sky-300",
  success: "border-l-emerald-500 text-emerald-700 dark:text-emerald-300",
  warning: "border-l-amber-500 text-amber-700 dark:text-amber-300",
  error: "border-l-rose-500 text-rose-700 dark:text-rose-300",
  danger: "border-l-rose-600 text-rose-700 dark:text-rose-300",
  tip: "border-l-indigo-500 text-indigo-700 dark:text-indigo-300",
  idea: "border-l-violet-500 text-violet-700 dark:text-violet-300",
  memo: "border-l-teal-500 text-teal-700 dark:text-teal-300",
};

export function Alert({ children, type = "info", title, className }: AlertProps) {
  const safeType = icons[type] ? type : "info";
  const Icon = icons[safeType];
  const accentStyle = styles[safeType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex gap-4 p-5 md:p-6 rounded-2xl transition-all my-5 focus-ring-hover border-l-6",
        "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10",
        accentStyle,
        className
      )}
    >
      <div className="shrink-0 mt-1">
        <Icon size={28} />
      </div>
      <div className="flex-1 text-slate-800 dark:text-slate-100">
        {title && (
          <h5 className="font-black text-lg md:text-xl mb-2 uppercase tracking-wider text-inherit">
            {title}
          </h5>
        )}
        <div className="text-base md:text-lg leading-relaxed font-medium">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
