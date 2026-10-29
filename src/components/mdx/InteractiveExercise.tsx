"use client";

import React, { useState } from "react";
import { Check, X, HelpCircle, Trophy, Sparkles, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrueFalseItem {
  id: string;
  statement: string;
  correctAnswer: boolean; // true = Đúng, false = Sai
  explanation: string;
}

const TF_ITEMS: TrueFalseItem[] = [
  {
    id: "a",
    statement: "Phần tử <html> là phần tử gốc chứa toàn bộ các phần tử khác.",
    correctAnswer: true,
    explanation: "Đúng. <html> là Root element bao trùm toàn bộ cây DOM của trang web.",
  },
  {
    id: "b",
    statement: "Phần tử <head> có 2 phần tử con là <title> và <h1>.",
    correctAnswer: false,
    explanation: "Sai. <h1> là phần tử con của <body> (vùng hiển thị nội dung), không phải con của <head>.",
  },
  {
    id: "c",
    statement:
      'Trên màn hình nội dung chính của trình duyệt sẽ hiển thị 3 dòng chữ: "Bài 7", "Tin học 12" và "Học HTML thật thú vị!".',
    correctAnswer: false,
    explanation:
      'Sai. Dòng chữ "Bài 7" nằm trong thẻ <title> nên hiển thị trên thanh Tab của trình duyệt, không xuất hiện ở vùng nội dung chính (Viewport).',
  },
  {
    id: "d",
    statement: "Phần tử <body> là phần tử cha của <h1> và <p>.",
    correctAnswer: true,
    explanation: "Đúng. Trong đoạn mã trên, <h1> và <p> đều nằm lồng bên trong khối <body>.",
  },
];

export function SpeedQuizExercise() {
  const [q1, setQ1] = useState<string | null>(null);
  const [q1Submitted, setQ1Submitted] = useState<boolean>(false);

  const [q2, setQ2] = useState<string | null>(null);
  const [q2Submitted, setQ2Submitted] = useState<boolean>(false);

  // True/False answers for Q3
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean | null>>({
    a: null,
    b: null,
    c: null,
    d: null,
  });
  const [tfSubmitted, setTfSubmitted] = useState<boolean>(false);

  const handleTfSelect = (id: string, val: boolean) => {
    if (!tfSubmitted) {
      setTfAnswers((prev) => ({ ...prev, [id]: val }));
    }
  };

  const handleTfSubmit = () => {
    setTfSubmitted(true);
  };

  const handleTfReset = () => {
    setTfAnswers({ a: null, b: null, c: null, d: null });
    setTfSubmitted(false);
  };

  return (
    <div className="my-8 rounded-[2rem] border-2 border-indigo-100 dark:border-indigo-900/50 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
          <Trophy size={24} className="text-yellow-300" />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-indigo-600 dark:text-indigo-400 block">
            Thử thách 1 • Hoạt động 3
          </span>
          <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
            Thử thách Trắc nghiệm Tốc độ (Cá nhân - 05 phút)
          </h4>
        </div>
      </div>

      {/* CÂU 1 */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <span className="font-black text-sm uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Câu 1 (Nhận diện thẻ đơn)
          </span>
          {q1Submitted && (
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-black",
                q1 === "C"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
              )}
            >
              {q1 === "C" ? "Chính xác! 🎉" : "Chưa đúng 😅"}
            </span>
          )}
        </div>
        <p className="font-bold text-base text-slate-900 dark:text-white mb-4">
          Trong các thẻ sau, thẻ nào là <strong>thẻ đơn</strong> (không cần thẻ
          đóng)?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { key: "A", label: "A. <title>" },
            { key: "B", label: "B. <p>" },
            { key: "C", label: "C. <br> (Đáp án đúng)" },
            { key: "D", label: "D. <body>" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                setQ1(opt.key);
                setQ1Submitted(true);
              }}
              className={cn(
                "p-3.5 px-4 rounded-xl text-left font-bold text-sm border-2 transition-all flex items-center justify-between min-h-[44px]",
                q1Submitted
                  ? opt.key === "C"
                    ? "bg-emerald-100 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100"
                    : q1 === opt.key
                    ? "bg-rose-100 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-100"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-60"
                  : q1 === opt.key
                  ? "bg-indigo-100 border-indigo-500 text-indigo-950"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400"
              )}
            >
              <span>{opt.label.replace(" (Đáp án đúng)", "")}</span>
              {q1Submitted && opt.key === "C" && (
                <Check size={18} className="text-emerald-600" />
              )}
              {q1Submitted && q1 === opt.key && opt.key !== "C" && (
                <X size={18} className="text-rose-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CÂU 2 */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <span className="font-black text-sm uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Câu 2 (Cấu trúc bộ khung)
          </span>
          {q2Submitted && (
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-black",
                q2 === "B"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
              )}
            >
              {q2 === "B" ? "Chính xác! 🎉" : "Chưa đúng 😅"}
            </span>
          )}
        </div>
        <p className="font-bold text-base text-slate-900 dark:text-white mb-4">
          Phần tử <code>&lt;meta charset="utf-8"&gt;</code> phải được đặt nằm bên
          trong phần tử nào để đúng chuẩn cấu trúc HTML?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { key: "A", label: "A. Nằm trong <body>" },
            { key: "B", label: "B. Nằm trong <head>" },
            { key: "C", label: "C. Nằm ngoài <html>" },
            { key: "D", label: "D. Nằm trong <title>" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                setQ2(opt.key);
                setQ2Submitted(true);
              }}
              className={cn(
                "p-3.5 px-4 rounded-xl text-left font-bold text-sm border-2 transition-all flex items-center justify-between min-h-[44px]",
                q2Submitted
                  ? opt.key === "B"
                    ? "bg-emerald-100 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100"
                    : q2 === opt.key
                    ? "bg-rose-100 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-100"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-60"
                  : q2 === opt.key
                  ? "bg-indigo-100 border-indigo-500 text-indigo-950"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400"
              )}
            >
              <span>{opt.label}</span>
              {q2Submitted && opt.key === "B" && (
                <Check size={18} className="text-emerald-600" />
              )}
              {q2Submitted && q2 === opt.key && opt.key !== "B" && (
                <X size={18} className="text-rose-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CÂU 3: ĐÚNG / SAI MATRIX */}
      <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-900/50">
        <div className="flex items-center justify-between mb-3">
          <span className="font-black text-sm uppercase text-indigo-700 dark:text-indigo-300 tracking-wider">
            Câu 3 (Dạng thức Đúng / Sai chuẩn Bộ GD&ĐT)
          </span>
          <span className="text-xs font-bold text-slate-500">4 nhận định</span>
        </div>

        <p className="font-bold text-base text-slate-900 dark:text-white mb-3">
          Xét đoạn mã HTML sau:
        </p>
        <div className="p-3 bg-[#1e293b] text-sky-300 font-mono text-xs md:text-sm rounded-xl mb-4 overflow-x-auto">
          <code>
            &lt;html&gt;&lt;head&gt;&lt;title&gt;Bài
            7&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Tin học
            12&lt;/h1&gt;&lt;p&gt;Học HTML thật thú
            vị!&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;
          </code>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 font-medium">
          Cho biết mỗi nhận định sau là <strong>Đúng</strong> hay{" "}
          <strong>Sai</strong>:
        </p>

        {/* Matrix items */}
        <div className="space-y-3">
          {TF_ITEMS.map((item) => {
            const currentAns = tfAnswers[item.id];
            const isAnswered = currentAns !== null;
            const isCorrect = isAnswered && currentAns === item.correctAnswer;

            return (
              <div
                key={item.id}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all bg-white dark:bg-slate-800",
                  tfSubmitted
                    ? isCorrect
                      ? "border-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20"
                      : "border-rose-400 bg-rose-50/40 dark:bg-rose-950/20"
                    : "border-slate-200 dark:border-slate-700"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                    <span className="font-black text-indigo-600 dark:text-indigo-400 mr-2">
                      {item.id})
                    </span>
                    {item.statement}
                  </div>

                  {/* True / False Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleTfSelect(item.id, true)}
                      disabled={tfSubmitted}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-black transition-all min-h-[44px] min-w-[64px] border",
                        currentAns === true
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-200"
                      )}
                    >
                      ĐÚNG
                    </button>
                    <button
                      onClick={() => handleTfSelect(item.id, false)}
                      disabled={tfSubmitted}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-black transition-all min-h-[44px] min-w-[64px] border",
                        currentAns === false
                          ? "bg-rose-600 text-white border-rose-600 shadow-md"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-200"
                      )}
                    >
                      SAI
                    </button>
                  </div>
                </div>

                {/* Explanation on submit */}
                {tfSubmitted && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 dark:border-slate-700 text-xs flex items-start gap-2">
                    <span
                      className={cn(
                        "font-black px-2 py-0.5 rounded",
                        item.correctAnswer
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-rose-100 text-rose-800"
                      )}
                    >
                      Đáp án: {item.correctAnswer ? "ĐÚNG" : "SAI"}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 flex-1 leading-relaxed">
                      {item.explanation}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit / Reset for Câu 3 */}
        <div className="mt-4 flex items-center justify-end gap-2">
          {!tfSubmitted ? (
            <button
              onClick={handleTfSubmit}
              disabled={Object.values(tfAnswers).some((v) => v === null)}
              className={cn(
                "px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-md transition-all min-h-[44px]",
                Object.values(tfAnswers).every((v) => v !== null)
                  ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30"
                  : "bg-slate-300 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
              )}
            >
              Kiểm tra Câu 3
            </button>
          ) : (
            <button
              onClick={handleTfReset}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <RotateCcw size={14} />
              <span>Làm lại Câu 3</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
