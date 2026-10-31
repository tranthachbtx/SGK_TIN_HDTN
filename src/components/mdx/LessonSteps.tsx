"use client";

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useSettings } from '@/contexts/SettingsContext';

interface StepProps {
    title?: string;
    children: React.ReactNode;
}

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export function StepEngagement({ title = "1. Mở đầu (Engagement)", children }: StepProps) {
    return (
        <motion.section
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 border-l-4 border-l-sky-500 shadow-sm"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/40 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white !m-0">{title}</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{children}</div>
        </motion.section>
    );
}

export function StepKnowledge({ title = "2. Hình thành kiến thức (Knowledge)", children }: StepProps) {
    return (
        <motion.section
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 border-l-4 border-l-indigo-500 shadow-sm"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40 flex items-center justify-center">
                    <span className="text-xl">📖</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white !m-0">{title}</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{children}</div>
        </motion.section>
    );
}

export function StepPractice({ title = "3. Luyện tập (Practice)", children }: StepProps) {
    return (
        <motion.section
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 border-l-4 border-l-emerald-500 shadow-sm"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-center">
                    <span className="text-xl">🧩</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white !m-0">{title}</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{children}</div>
        </motion.section>
    );
}

export function StepApplication({ title = "4. Vận dụng (Application)", children }: StepProps) {
    return (
        <motion.section
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 border-l-4 border-l-amber-500 shadow-sm"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center">
                    <span className="text-xl">🌟</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white !m-0">{title}</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{children}</div>
        </motion.section>
    );
}

export function TeacherNotes({ children }: { children: React.ReactNode }) {
    const { isTeacherMode } = useSettings();

    return (
        <AnimatePresence>
            {isTeacherMode && (
                <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="overflow-hidden mt-4"
                >
                    <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60">
                        <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold uppercase text-xs tracking-wider">
                            <span className="text-lg">👩‍🏫</span> Ghi chú Sư phạm
                        </div>
                        <div className="prose prose-indigo dark:prose-invert max-w-none text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                            {children}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function RawContent({ children }: { children: React.ReactNode }) {
    return <div className="raw-content-wrapper">{children}</div>;
}

export const LessonSteps = {
    StepEngagement,
    StepKnowledge,
    StepPractice,
    StepApplication,
    TeacherNotes,
    RawContent
};
