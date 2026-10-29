"use client";

import React, { useState } from "react";
import {
  BookOpen,
  CheckSquare,
  Clock,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Target,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCheck,
  CheckCircle2,
  Laptop,
  HelpCircle,
  Award,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ClassTimer } from "./ClassTimer";

/* =========================================================================
   1. LESSON PLAN HEADER (CHUẨN CÔNG VĂN 5512)
   ========================================================================= */

interface LessonPlanHeaderProps {
  subject?: string;
  bookSeries?: string;
  topic?: string;
  title: string;
  duration?: string;
  badge?: string;
}

export function LessonPlanHeader({
  subject = "TIN HỌC 12",
  bookSeries = "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG",
  topic = "CHỦ ĐỀ 4: GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH",
  title = "BÀI 7: HTML VÀ CẤU TRÚC TRANG WEB",
  duration = "02 tiết (90 phút)",
  badge = "CHUẨN CÔNG VĂN 5512 - BỘ GIÁO DỤC & ĐÀO TẠO",
}: LessonPlanHeaderProps) {
  return (
    <div className="relative mb-8 p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-sky-50/70 to-rose-50/50 dark:from-slate-900/95 dark:via-slate-800/80 dark:to-slate-900/90 backdrop-blur-2xl border-2 border-white/60 dark:border-white/10 shadow-2xl">
      {/* Top Tag Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
          <ShieldCheck size={14} />
          {badge}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          <BookOpen size={14} />
          {bookSeries}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Clock size={14} />
          {duration}
        </span>
      </div>

      {/* Main Subject & Topic */}
      <div className="mb-2">
        <p className="text-xs md:text-sm font-black tracking-widest uppercase text-slate-500 dark:text-slate-400">
          {subject} • {topic}
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
        {title}
      </h1>

      <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed flex items-start gap-3">
        <span className="text-xl">🖥️</span>
        <div>
          <strong className="text-slate-900 dark:text-white font-bold">
            Cấu hình dành cho Trình chiếu & Tương tác lớp học:
          </strong>{" "}
          Toàn bộ tiến trình bài giảng được chuẩn hóa theo quy trình sư phạm 4
          bước chuẩn Công văn 5512 (
          <em>
            1. Chuyển giao nhiệm vụ → 2. Thực hiện nhiệm vụ → 3. Báo cáo, thảo luận
            → 4. Kết luận, nhận định
          </em>
          ). Học sinh quan sát slide màn hình lớn và thao tác trực tiếp trên máy
          tính cá nhân.
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. LEARNING OBJECTIVES (I. MỤC TIÊU BÀI HỌC)
   ========================================================================= */

export function LearningObjectives({ children }: { children?: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      id="muc-tieu-bai-hoc"
      className="my-8 rounded-[2rem] bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-sky-100 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 md:p-7 flex items-center justify-between cursor-pointer bg-gradient-to-r from-sky-500/10 via-transparent to-transparent hover:bg-sky-500/15 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
            <Target size={26} />
          </div>
          <div>
            <span className="text-xs uppercase font-black tracking-widest text-sky-600 dark:text-sky-400 block">
              Phần I • Đầu giờ học
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight !m-0">
              I. MỤC TIÊU BÀI HỌC (CHUẨN ĐẦU RA 5512)
            </h2>
          </div>
        </div>
        <button className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 md:p-8 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-6">
          {children ? (
            children
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Về kiến thức */}
              <div className="p-5 rounded-2xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
                <div className="flex items-center gap-2 mb-3 text-sky-700 dark:text-sky-300 font-black text-base">
                  <BookOpen size={20} />
                  <span>1. Về kiến thức</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>
                      Trình bày được khái niệm và chức năng cốt lõi của ngôn ngữ
                      đánh dấu siêu văn bản HTML trong việc tạo bộ khung trang web.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>
                      Phân biệt được khái niệm thẻ HTML (Tag) và phần tử HTML
                      (Element).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>
                      Giải thích được cấu trúc chuẩn của một trang web HTML và biết
                      các công cụ soạn thảo HTML thông dụng.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Về năng lực */}
              <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
                <div className="flex items-center gap-2 mb-3 text-indigo-700 dark:text-indigo-300 font-black text-base">
                  <Cpu size={20} />
                  <span>2. Về năng lực</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>
                      <strong>Năng lực Tin học:</strong> Nhận dạng thẻ đơn/đôi, phần
                      tử HTML trong mã nguồn thực tế; giải thích cấu trúc cây DOM;
                      viết và chạy tệp .html đầu tiên.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>
                      <strong>Năng lực số (NC1):</strong>
                      <div className="mt-1 space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mr-1">
                          3.4.NC1.a
                        </span>
                        <span>Viết mã lệnh HTML đúng cú pháp.</span>
                        <br />
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mr-1">
                          5.3.NC1.b
                        </span>
                        <span>Áp dụng tư duy phân cấp (DOM) tổ chức web.</span>
                      </div>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>
                      <strong>Năng lực chung:</strong> Chủ động đọc hiểu code, thảo
                      luận cặp đôi gỡ lỗi hiển thị.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Về phẩm chất */}
              <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                <div className="flex items-center gap-2 mb-3 text-rose-700 dark:text-rose-300 font-black text-base">
                  <Sparkles size={20} />
                  <span>3. Về phẩm chất</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>
                      <strong>Tính cẩn thận, tỉ mỉ:</strong> Khi gõ các kí hiệu
                      đóng/mở thẻ HTML, kiểm tra đuôi mở rộng tệp (.html thay vì
                      .txt).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>
                      <strong>Trách nhiệm:</strong> Tích cực phối hợp và hỗ trợ bạn
                      cùng bàn trong quá trình thực hành trên máy tính.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* =========================================================================
   3. EQUIPMENT CHECKLIST (II. THIẾT BỊ VÀ HỌC LIỆU CHUẨN BỊ)
   ========================================================================= */

export function EquipmentChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    browser: true,
    editor: false,
    internet: true,
  });

  const toggle = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="thiet-bi-va-hoc-lieu"
      className="my-8 p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 dark:bg-slate-900/80 backdrop-blur-xl border border-emerald-100 dark:border-white/10 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
          <Laptop size={22} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block">
            Phần II • Sẵn sàng trước khi học
          </span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight !m-0">
            II. THIẾT BỊ VÀ HỌC LIỆU CHUẨN BỊ
          </h2>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6">
        Học sinh kiểm tra nhanh trên máy tính cá nhân trước khi bắt đầu bài học
        (Nhấn vào ô vuông để xác nhận đã sẵn sàng):
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Item 1: Trình duyệt */}
        <div
          onClick={() => toggle("browser")}
          className={cn(
            "p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between",
            checkedItems.browser
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-950 dark:text-emerald-100 shadow-md"
              : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          )}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <span className="font-black text-base flex items-center gap-2">
              🌐 1. Trình duyệt web
            </span>
            <CheckCircle2
              size={22}
              className={cn(
                "shrink-0 transition-transform",
                checkedItems.browser ? "text-emerald-600 scale-110" : "text-slate-300"
              )}
            />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Google Chrome, Microsoft Edge hoặc Cốc Cốc. Dùng để xem trang web và
            mở công cụ <strong>View Page Source (Ctrl + U)</strong>.
          </p>
        </div>

        {/* Item 2: Trình soạn thảo */}
        <div
          onClick={() => toggle("editor")}
          className={cn(
            "p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between",
            checkedItems.editor
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-950 dark:text-emerald-100 shadow-md"
              : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          )}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <span className="font-black text-base flex items-center gap-2">
              📝 2. Công cụ soạn thảo
            </span>
            <CheckCircle2
              size={22}
              className={cn(
                "shrink-0 transition-transform",
                checkedItems.editor ? "text-emerald-600 scale-110" : "text-slate-300"
              )}
            />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Chọn 1 trong 3: <strong>Notepad</strong> (có sẵn),{" "}
            <strong>VS Code / Sublime Text</strong>, hoặc trình soạn thảo online.
          </p>
        </div>

        {/* Item 3: W3Schools Online */}
        <div
          onClick={() => toggle("internet")}
          className={cn(
            "p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between",
            checkedItems.internet
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-950 dark:text-emerald-100 shadow-md"
              : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          )}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <span className="font-black text-base flex items-center gap-2">
              ⚡ 3. Thử nghiệm Trực tuyến
            </span>
            <CheckCircle2
              size={22}
              className={cn(
                "shrink-0 transition-transform",
                checkedItems.internet ? "text-emerald-600 scale-110" : "text-slate-300"
              )}
            />
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            <span>Sử dụng khi máy tính có kết nối mạng:</span>
            <a
              href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-bold hover:underline mt-1"
            >
              w3schools.com/tryit <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. PEDAGOGY ACTIVITY CONTAINER (HOẠT ĐỘNG 1, 2, 3, 4)
   ========================================================================= */

interface PedagogyActivityProps {
  id: string;
  number: number | string;
  title: string;
  duration?: string;
  objective?: string;
  content?: string;
  product?: string;
  children: React.ReactNode;
}

export function PedagogyActivity({
  id,
  number,
  title,
  duration,
  objective,
  content,
  product,
  children,
}: PedagogyActivityProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Activity theme color based on number
  const themeByNum: Record<
    string,
    { bg: string; text: string; border: string; badge: string; icon: string }
  > = {
    "1": {
      bg: "from-sky-500/10 via-blue-500/5 to-transparent",
      text: "text-sky-700 dark:text-sky-300",
      border: "border-sky-200 dark:border-sky-900/50",
      badge: "bg-sky-500 text-white",
      icon: "🚀",
    },
    "2": {
      bg: "from-indigo-500/10 via-purple-500/5 to-transparent",
      text: "text-indigo-700 dark:text-indigo-300",
      border: "border-indigo-200 dark:border-indigo-900/50",
      badge: "bg-indigo-600 text-white",
      icon: "📖",
    },
    "3": {
      bg: "from-emerald-500/10 via-teal-500/5 to-transparent",
      text: "text-emerald-700 dark:text-emerald-300",
      border: "border-emerald-200 dark:border-emerald-900/50",
      badge: "bg-emerald-600 text-white",
      icon: "🩺",
    },
    "4": {
      bg: "from-amber-500/10 via-orange-500/5 to-transparent",
      text: "text-amber-700 dark:text-amber-300",
      border: "border-amber-200 dark:border-amber-900/50",
      badge: "bg-amber-600 text-white",
      icon: "🌟",
    },
  };

  const theme = themeByNum[String(number)] || themeByNum["1"];

  return (
    <section id={id} className="my-14 scroll-mt-28">
      {/* Activity Header Banner */}
      <div
        className={cn(
          "p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-r border-2 shadow-xl backdrop-blur-xl relative overflow-hidden",
          theme.bg,
          theme.border,
          "bg-white/95 dark:bg-slate-900/90"
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4">
            <div
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg shrink-0",
                theme.badge
              )}
            >
              {theme.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={cn(
                    "text-xs uppercase font-black tracking-widest",
                    theme.text
                  )}
                >
                  Quy trình 5512 • Hoạt động {number}
                </span>
                {duration && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <Clock size={12} />
                    {duration}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight leading-snug !m-0">
                {title}
              </h2>
            </div>
          </div>

          {(objective || content || product) && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="self-start md:self-center px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 min-h-[44px]"
            >
              <span>{showDetails ? "Ẩn chuẩn sư phạm" : "Xem chuẩn sư phạm (a-b-c)"}</span>
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Pedagogical 5512 Spec Drawer (Mục tiêu, Nội dung, Sản phẩm) */}
        {showDetails && (objective || content || product) && (
          <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
            {objective && (
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                <span className="text-xs font-black uppercase text-sky-600 dark:text-sky-400 block mb-1">
                  a) Mục tiêu
                </span>
                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {objective}
                </p>
              </div>
            )}
            {content && (
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                  b) Nội dung
                </span>
                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {content}
                </p>
              </div>
            )}
            {product && (
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                  c) Sản phẩm cần đạt
                </span>
                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {product}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Activity Body / Slides */}
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

/* =========================================================================
   5. SUBTASK (NHIỆM VỤ 2.1, 2.2, 2.3)
   ========================================================================= */

interface SubTaskProps {
  id: string;
  number: string;
  title: string;
  duration?: string;
  objective?: string;
  content?: string;
  product?: string;
  children: React.ReactNode;
}

export function SubTask({
  id,
  number,
  title,
  duration,
  objective,
  content,
  product,
  children,
}: SubTaskProps) {
  const [showPedagogy, setShowPedagogy] = useState(false);

  return (
    <div id={id} className="my-10 p-6 md:p-8 rounded-[2rem] bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-lg scroll-mt-28">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white font-black text-xs uppercase tracking-wider">
              Nhiệm vụ {number}
            </span>
            {duration && (
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                ⏱️ {duration}
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
            {title}
          </h3>
        </div>

        {(objective || content || product) && (
          <button
            onClick={() => setShowPedagogy(!showPedagogy)}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 self-start sm:self-auto py-2"
          >
            <span>{showPedagogy ? "Thu gọn yêu cầu" : "Xem chuẩn a-b-c"}</span>
            {showPedagogy ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
      </div>

      {showPedagogy && (
        <div className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs md:text-sm space-y-2">
          {objective && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                a) Mục tiêu:
              </strong>{" "}
              {objective}
            </div>
          )}
          {content && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                b) Nội dung:
              </strong>{" "}
              {content}
            </div>
          )}
          {product && (
            <div>
              <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
                c) Sản phẩm cần đạt:
              </strong>{" "}
              {product}
            </div>
          )}
        </div>
      )}

      <div className="space-y-6">{children}</div>
    </div>
  );
}

/* =========================================================================
   6. SLIDE STEP (BƯỚC 1, 2, 3, 4 THEO CÔNG VĂN 5512)
   ========================================================================= */

interface SlideStepProps {
  id?: string;
  slide: string; // e.g. "SLIDE 1.1", "SLIDE 2.1.2"
  step: 1 | 2 | 3 | 4 | number;
  title: string;
  duration?: string;
  showTimer?: boolean;
  timerSeconds?: number;
  children: React.ReactNode;
}

const STEP_METADATA: Record<
  number,
  {
    label: string;
    icon: string;
    color: string;
    border: string;
    bgBadge: string;
    lightBg: string;
  }
> = {
  1: {
    label: "Bước 1: Chuyển giao nhiệm vụ",
    icon: "🎯",
    color: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-900/60",
    bgBadge: "bg-blue-600 text-white",
    lightBg: "bg-blue-50/50 dark:bg-blue-950/20",
  },
  2: {
    label: "Bước 2: Thực hiện nhiệm vụ",
    icon: "⚙️",
    color: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-900/60",
    bgBadge: "bg-amber-600 text-white",
    lightBg: "bg-amber-50/50 dark:bg-amber-950/20",
  },
  3: {
    label: "Bước 3: Báo cáo, thảo luận",
    icon: "💬",
    color: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-900/60",
    bgBadge: "bg-purple-600 text-white",
    lightBg: "bg-purple-50/50 dark:bg-purple-950/20",
  },
  4: {
    label: "Bước 4: Kết luận, nhận định",
    icon: "📌",
    color: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-900/60",
    bgBadge: "bg-emerald-600 text-white",
    lightBg: "bg-emerald-50/50 dark:bg-emerald-950/20",
  },
};

export function SlideStep({
  id,
  slide,
  step,
  title,
  duration,
  showTimer = false,
  timerSeconds,
  children,
}: SlideStepProps) {
  const meta = STEP_METADATA[step] || STEP_METADATA[1];
  const elementId =
    id ||
    `slide-${slide.toLowerCase().replace(/[^a-z0-9]/g, "-")}-buoc-${step}`;

  return (
    <div
      id={elementId}
      className={cn(
        "p-6 md:p-8 rounded-[2rem] border-2 shadow-lg backdrop-blur-xl relative transition-all duration-300 hover:shadow-2xl scroll-mt-28",
        "bg-white/95 dark:bg-slate-900/90",
        meta.border
      )}
    >
      {/* Top Slide & Step Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {/* Slide badge */}
          <span className="px-3 py-1 rounded-xl text-xs font-black tracking-widest uppercase bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm">
            {slide}
          </span>
          {/* Step badge */}
          <span
            className={cn(
              "px-3 py-1 rounded-xl text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm",
              meta.bgBadge
            )}
          >
            <span>{meta.icon}</span>
            <span>{meta.label}</span>
          </span>
        </div>

        {duration && (
          <span className="flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Clock size={14} />
            {duration}
          </span>
        )}
      </div>

      {/* Step Title for Table of Contents Discovery */}
      <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white leading-snug mb-4">
        {title}
      </h4>

      {/* Optional Timer */}
      {showTimer && (
        <ClassTimer
          initialSeconds={timerSeconds || 180}
          label={`Thời gian hoàn thành (${slide})`}
        />
      )}

      {/* Step Content */}
      <div className="text-base md:text-lg text-slate-800 dark:text-slate-200 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
