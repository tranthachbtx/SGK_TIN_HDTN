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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/10 rounded-3xl p-6 md:p-7 my-6 relative overflow-hidden transition-all duration-300 focus-ring-hover shadow-sm backdrop-blur-xl",
        className
      )}
      {...(props as any)}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

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
