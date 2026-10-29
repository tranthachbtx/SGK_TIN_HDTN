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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "rounded-3xl p-6 md:p-8 my-6 relative overflow-hidden transition-all duration-300 focus-ring-hover",
        "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10",
        className
      )}
      {...(props as any)}
    >
      {title && (
        <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-900 dark:text-white border-b-2 border-primary/20 pb-2">
          {title}
        </h3>
      )}

      <div className="relative z-10 text-slate-800 dark:text-slate-100 leading-relaxed font-semibold text-base md:text-lg">
        {children}
      </div>
    </motion.div>
  );
}
