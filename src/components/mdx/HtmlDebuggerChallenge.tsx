"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  Eye,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BUGGY_CODE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <h1>Trang thông tin lớp 12</h1>  <!-- ❌ Lỗi 1: h1 nằm trong head -->
</head>
<body>
    <title>Giới thiệu lớp 12</title> <!-- ❌ Lỗi 2: title nằm trong body -->
    <p>Chào mừng các bạn đến với trang web của lớp. <!-- ❌ Lỗi 3: Thiếu thẻ đóng </p> -->
    <hr>
    <p>Chúc các bạn một năm học rực rỡ!</p>
</html> <!-- ❌ Lỗi 4: Quên đóng </body> trước khi đóng </html> -->`;

const FIXED_CODE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Giới thiệu lớp 12</title> <!-- ✅ Đã đưa title vào đúng head -->
</head>
<body>
    <h1>Trang thông tin lớp 12</h1>  <!-- ✅ Đã đưa h1 vào đúng body -->
    <p>Chào mừng các bạn đến với trang web của lớp.</p> <!-- ✅ Đã bổ sung </p> -->
    <hr>
    <p>Chúc các bạn một năm học rực rỡ!</p>
</body> <!-- ✅ Đã bổ sung thẻ đóng </body> -->
</html>`;

export function HtmlDebuggerChallenge() {
  const [viewMode, setViewMode] = useState<"buggy" | "fixed" | "preview">(
    "buggy"
  );
  const [showDiagnostics, setShowDiagnostics] = useState<boolean>(false);
  const [foundBugs, setFoundBugs] = useState<Record<number, boolean>>({});

  const toggleBug = (index: number) => {
    setFoundBugs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const bugsList = [
    {
      id: 1,
      name: "Đổi chỗ <h1> và <title>",
      desc: "<h1> là thẻ hiển thị nội dung chính phải nằm trong <body>; ngược lại <title> chỉ thông tin tab phải nằm trong <head>.",
      fix: "Chuyển <title> lên <head>, chuyển <h1> xuống <body>.",
    },
    {
      id: 2,
      name: "Thiếu thẻ đóng </p>",
      desc: "Thẻ <p> thứ nhất có nội dung nhưng không được đóng bằng </p> trước khi đặt <hr>.",
      fix: "Bổ sung </p> vào cuối dòng văn bản thứ nhất.",
    },
    {
      id: 3,
      name: "Thiếu thẻ đóng </body>",
      desc: "Tệp HTML đóng trực tiếp </html> mà chưa đóng khối thân trang </body>.",
      fix: "Thêm </body> trước thẻ đóng </html>.",
    },
  ];

  return (
    <div className="my-8 rounded-[2rem] border-2 border-rose-200 dark:border-rose-900/50 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20 shrink-0">
            <Stethoscope size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-black tracking-widest text-rose-600 dark:text-rose-400">
                Thử thách 2 • Hoạt động 3
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                Bác sĩ mã nguồn (Debugger)
              </span>
            </div>
            <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
              Chẩn đoán và Sửa lỗi Mã nguồn HTML
            </h4>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl self-start md:self-auto">
          <button
            onClick={() => setViewMode("buggy")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 min-h-[44px]",
              viewMode === "buggy"
                ? "bg-rose-500 text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            )}
          >
            <AlertTriangle size={15} />
            <span>Mã bị lỗi (Đề bài)</span>
          </button>
          <button
            onClick={() => {
              setViewMode("fixed");
              setShowDiagnostics(true);
            }}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 min-h-[44px]",
              viewMode === "fixed"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            )}
          >
            <CheckCircle size={15} />
            <span>Mã đã chữa sạch lỗi</span>
          </button>
          <button
            onClick={() => setViewMode("preview")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 min-h-[44px]",
              viewMode === "preview"
                ? "bg-sky-600 text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            )}
          >
            <Eye size={15} />
            <span>Chạy thử</span>
          </button>
        </div>
      </div>

      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-6">
        Hãy xem đoạn mã bên dưới và tìm ra các vị trí vi phạm cấu trúc chuẩn
        HTML5. Nhấn vào{" "}
        <strong className="text-rose-600">"Chẩn đoán lỗi"</strong> để đối chiếu
        phát hiện của nhóm em:
      </p>

      {/* Main Content Area */}
      {viewMode === "buggy" && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-[#1e293b] p-5 text-slate-100 font-mono text-sm md:text-base leading-relaxed overflow-x-auto shadow-inner border border-slate-700">
            <pre className="!bg-transparent !p-0">
              <code>{BUGGY_CODE}</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 min-h-[44px]"
            >
              <Stethoscope size={16} />
              <span>
                {showDiagnostics
                  ? "Ẩn phân tích lỗi bệnh"
                  : "Chẩn đoán bệnh mã nguồn (Xem 3 vị trí lỗi)"}
              </span>
            </button>

            <button
              onClick={() => {
                setViewMode("fixed");
                setShowDiagnostics(true);
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>Xem trực tiếp mã đã sửa</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {viewMode === "fixed" && (
        <div className="space-y-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-600 shrink-0" />
            <span>
              Tệp <strong>thuchanh_bai7.html</strong> sau khi được chữa hoàn
              chỉnh (Đúng chuẩn 100% W3C HTML5):
            </span>
          </div>

          <div className="rounded-2xl bg-[#1e293b] p-5 text-emerald-300 font-mono text-sm md:text-base leading-relaxed overflow-x-auto shadow-inner border border-emerald-500/40">
            <pre className="!bg-transparent !p-0">
              <code>{FIXED_CODE}</code>
            </pre>
          </div>
        </div>
      )}

      {viewMode === "preview" && (
        <div className="rounded-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden bg-white shadow-xl">
          <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 border-b border-slate-200 flex items-center justify-between">
            <span>Trình duyệt: Giới thiệu lớp 12</span>
            <span className="text-[11px] text-emerald-600">
              Đã chạy thành công
            </span>
          </div>
          <div className="p-8 font-sans">
            <h1 className="text-3xl font-black text-slate-900 mb-4">
              Trang thông tin lớp 12
            </h1>
            <p className="text-base text-slate-700 mb-4">
              Chào mừng các bạn đến với trang web của lớp.
            </p>
            <hr className="my-4 border-slate-300" />
            <p className="text-base text-slate-700">
              Chúc các bạn một năm học rực rỡ!
            </p>
          </div>
        </div>
      )}

      {/* Diagnostics Cards */}
      {showDiagnostics && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-2">
            Bảng Chẩn đoán Bác sĩ Mã nguồn:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {bugsList.map((bug) => (
              <div
                key={bug.id}
                onClick={() => toggleBug(bug.id)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all cursor-pointer",
                  foundBugs[bug.id]
                    ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                )}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-black text-sm text-slate-900 dark:text-white">
                    Lỗi #{bug.id}: {bug.name}
                  </span>
                  <CheckCircle
                    size={18}
                    className={
                      foundBugs[bug.id]
                        ? "text-emerald-600"
                        : "text-slate-300 dark:text-slate-600"
                    }
                  />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  {bug.desc}
                </p>
                <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/50 dark:bg-emerald-900/40 p-2 rounded-lg">
                  💡 Cách chữa: {bug.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
