"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, X, HelpCircle, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizData {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function Quiz({ data, className, ...rest }: any) {
  const quizData = data || rest;
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!quizData || !quizData.options || !Array.isArray(quizData.options)) {
    return null;
  }

  const isCorrect = selected === quizData.correctAnswer;

  const handleSelect = (index: number) => {
    if (!submitted) {
      setSelected(index);
    }
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "bg-white/95 dark:bg-slate-900/90 border-2 border-primary/20 dark:border-white/10 p-6 md:p-8 my-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 shadow-xl backdrop-blur-xl",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-5 opacity-10 pointer-events-none">
        <HelpCircle size={72} className="text-primary" />
      </div>

      <h4 className="text-lg md:text-xl font-black mb-4 flex items-center gap-3 text-primary">
        <Trophy size={26} className="text-amber-500 fill-amber-500" />
        Thử thách củng cố kiến thức
      </h4>

      <p className="text-lg md:text-xl mb-6 font-black text-slate-900 dark:text-white leading-relaxed">
        {quizData.question}
      </p>

      <div className="space-y-3">
        {quizData.options.map((option: string, index: number) => {
          let optionStyle =
            "bg-slate-50/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800";
          if (selected === index) {
            optionStyle =
              "border-primary bg-primary/10 dark:bg-primary/20 text-slate-950 dark:text-white ring-2 ring-primary/30";
          }
          if (submitted) {
            if (index === quizData.correctAnswer) {
              optionStyle =
                "bg-emerald-100/70 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-black";
            } else if (selected === index && !isCorrect) {
              optionStyle =
                "bg-rose-100/70 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100";
            } else {
              optionStyle = "opacity-40 grayscale-[0.5]";
            }
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleSelect(index)}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full text-left p-4 px-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between text-base md:text-lg font-bold min-h-[50px]",
                optionStyle,
                !submitted && "cursor-pointer active:scale-95"
              )}
              disabled={submitted}
            >
              <span>{option}</span>
              {submitted && index === quizData.correctAnswer && (
                <Check size={22} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              )}
              {submitted && selected === index && !isCorrect && (
                <X size={22} className="text-rose-600 dark:text-rose-400 shrink-0" />
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 flex justify-end"
          >
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className={cn(
                "px-8 py-3.5 rounded-full font-black text-base md:text-lg transition-all shadow-lg min-h-[44px]",
                selected !== null
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-primary/30 hover:shadow-primary/50 cursor-pointer active:scale-95"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              )}
            >
              Kiểm tra câu trả lời
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-6 p-6 rounded-3xl border-2",
              isCorrect
                ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100"
                : "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100"
            )}
          >
            <div className="font-black text-lg md:text-xl mb-2 flex items-center gap-2">
              {isCorrect ? (
                <span className="text-emerald-600 dark:text-emerald-400">Chính xác! Xuất sắc 🎉</span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400">Chưa chính xác! Cùng xem giải thích 💡</span>
              )}
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              {quizData.explanation}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer min-h-[44px]"
            >
              Làm lại thử thách
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
