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
  info: "bg-sky-50 dark:bg-sky-950/40 text-sky-950 dark:text-sky-100 border-sky-200 dark:border-sky-800",
  success: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 border-emerald-200 dark:border-emerald-800",
  warning: "bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 border-amber-200 dark:border-amber-800",
  error: "bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 border-rose-200 dark:border-rose-800",
  danger: "bg-red-50 dark:bg-red-950/40 text-red-950 dark:text-red-100 border-red-200 dark:border-red-800",
  tip: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 border-indigo-200 dark:border-indigo-800",
  idea: "bg-violet-50 dark:bg-violet-950/40 text-violet-950 dark:text-violet-100 border-violet-200 dark:border-violet-800",
  memo: "bg-teal-50 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 border-teal-200 dark:border-teal-800",
};

export function Alert({ children, type = "info", title, className }: AlertProps) {
  const safeType = icons[type] ? type : "info";
  const Icon = icons[safeType];
  const styleClass = styles[safeType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex gap-4 p-5 md:p-6 rounded-2xl border shadow-sm transition-all my-5 focus-ring-hover",
        styleClass,
        className
      )}
    >
      <div className="shrink-0 mt-1">
        <Icon size={28} />
      </div>
      <div className="flex-1">
        {title && (
          <h5 className="font-black text-lg md:text-xl mb-2 uppercase tracking-wider text-inherit">
            {title}
          </h5>
        )}
        <div className="text-base md:text-lg leading-relaxed font-semibold opacity-95">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
