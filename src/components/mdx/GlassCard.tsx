"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "default" | "hover";
}

export function GlassCard({
  title,
  children,
  className,
  variant = "default",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-3xl p-6 md:p-8 my-6 relative overflow-hidden transition-all duration-200",
        "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md",
        className
      )}
      {...(props as any)}
    >
      {title && (
        <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          {title}
        </h3>
      )}

      <div className="relative z-10 text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base md:text-lg">
        {children}
      </div>
    </motion.div>
  );
}
