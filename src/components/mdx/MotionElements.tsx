"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionH2(props: any) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl font-black mt-12 mb-6 scroll-m-28 pb-4 border-b-2 border-primary/20 text-slate-900 dark:text-white flex items-center gap-3",
        props.className
      )}
      {...props}
    />
  );
}

export function MotionH3(props: any) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-2xl sm:text-3xl font-black mt-10 mb-4 text-slate-900 dark:text-white",
        props.className
      )}
      {...props}
    />
  );
}

export function MotionTable({ children, ...props }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="my-10 w-full overflow-x-auto rounded-[2rem] border-2 border-slate-200/80 dark:border-white/10 shadow-float bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
    >
      <table className="w-full text-base md:text-lg text-left border-collapse" {...props}>
        {children}
      </table>
    </motion.div>
  );
}
