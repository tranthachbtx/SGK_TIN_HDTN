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
   1. LESSON PLAN HEADER
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
  badge,
}: LessonPlanHeaderProps) {
  const displayBadge = badge && !badge.includes("5512") ? badge : undefined;

  return (
    <div className="relative mb-10 p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-sky-50/70 to-rose-50/50 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-2xl border-2 border-white/60 dark:border-white/10 shadow-2xl">
      {/* Top Tag Badges */}
      <div className="flex flex-wrap items-center gap-2.5 mb-5">
        {displayBadge && (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            <ShieldCheck size={15} />
            {displayBadge}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          <BookOpen size={15} />
          {bookSeries}
        </span>
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Clock size={15} />
          {duration}
        </span>
      </div>

      {/* Main Subject & Topic */}
      <div className="mb-3">
        <p className="text-sm md:text-base font-black tracking-widest uppercase text-slate-600 dark:text-slate-300">
          {subject} • {topic}
        </p>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h1>
    </div>
  );
}

/* =========================================================================
   2. LEARNING OBJECTIVES (I. MỤC TIÊU BÀI HỌC)
   ========================================================================= */

interface LearningObjectivesProps {
  knowledge?: string[];
  competencies?: string[];
  qualities?: string[];
  children?: React.ReactNode;
}

export function LearningObjectives({
  knowledge,
  competencies,
  qualities,
  children,
}: LearningObjectivesProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Fallback default knowledge if nothing passed
  const defaultKnowledge = [
    "Trình bày được khái niệm và chức năng cốt lõi của ngôn ngữ đánh dấu siêu văn bản HTML trong việc tạo bộ khung trang web.",
    "Phân biệt được khái niệm thẻ HTML (Tag) và phần tử HTML (Element).",
    "Giải thích được cấu trúc chuẩn của một trang web HTML và biết các công cụ soạn thảo HTML thông dụng.",
  ];

  const defaultCompetencies = [
    "Năng lực Tin học: Nhận dạng thẻ đơn/đôi, phần tử HTML trong mã nguồn thực tế; giải thích cấu trúc cây DOM; viết và chạy tệp .html đầu tiên.",
    "Năng lực số: Tự thao tác viết mã lệnh HTML theo đúng cú pháp; áp dụng tư duy cấu trúc phân cấp (DOM) tổ chức web.",
    "Năng lực chung: Chủ động đọc hiểu code, thảo luận nhóm giải quyết vấn đề và gỡ lỗi hiển thị.",
  ];

  const defaultQualities = [
    "Tính cẩn thận, tỉ mỉ khi gõ các kí hiệu đóng/mở thẻ HTML và kiểm tra phần mở rộng tệp tin.",
    "Tinh thần trách nhiệm khi phối hợp nhóm thực hành và tích cực trao đổi hỗ trợ bạn cùng lớp.",
  ];

  const renderKnowledge = knowledge && knowledge.length > 0 ? knowledge : defaultKnowledge;
  const renderCompetencies = competencies && competencies.length > 0 ? competencies : defaultCompetencies;
  const renderQualities = qualities && qualities.length > 0 ? qualities : defaultQualities;

  return (
    <section
      id="muc-tieu-bai-hoc"
      className="my-10 rounded-[2.5rem] bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-sky-100 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 md:p-8 flex items-center justify-between cursor-pointer bg-gradient-to-r from-sky-500/10 via-transparent to-transparent hover:bg-sky-500/15 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
            <Target size={28} />
          </div>
          <div>
            <span className="text-xs uppercase font-black tracking-widest text-sky-600 dark:text-sky-400 block mb-1">
              Phần I • Đầu giờ học
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight !m-0">
              I. MỤC TIÊU BÀI HỌC
            </h2>
          </div>
        </div>
        <button
          className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={isExpanded ? "Thu gọn mục tiêu" : "Mở rộng mục tiêu"}
        >
          {isExpanded ? <ChevronUp size={26} /> : <ChevronDown size={26} />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 md:p-8 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-6">
          {children ? (
            children
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 1. Về kiến thức */}
              <div className="p-6 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-sky-800 dark:text-sky-300 font-black text-lg md:text-xl">
                    <BookOpen size={22} className="shrink-0" />
                    <span>1. Về kiến thức</span>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    {renderKnowledge.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-sky-500 font-black text-xl leading-none mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Về năng lực */}
              <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-indigo-800 dark:text-indigo-300 font-black text-lg md:text-xl">
                    <Cpu size={22} className="shrink-0" />
                    <span>2. Về năng lực</span>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    {renderCompetencies.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-indigo-500 font-black text-xl leading-none mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Về phẩm chất */}
              <div className="p-6 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-rose-800 dark:text-rose-300 font-black text-lg md:text-xl">
                    <Sparkles size={22} className="shrink-0" />
                    <span>3. Về phẩm chất</span>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    {renderQualities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-rose-500 font-black text-xl leading-none mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

interface EquipmentItem {
  name: string;
  description: string;
  status?: string;
}

interface EquipmentChecklistProps {
  items?: EquipmentItem[];
  children?: React.ReactNode;
}

export function EquipmentChecklist({ items, children }: EquipmentChecklistProps) {
  const defaultItems: EquipmentItem[] = [
    {
      name: "Màn hình trình chiếu lớp học / Smart TV",
      description: "Hiển thị slide bài giảng tương tác, đồng hồ đếm ngược và câu hỏi thảo luận trực quan.",
    },
    {
      name: "Tài liệu & Máy tính cá nhân",
      description: "Sách giáo khoa, vở ghi bài, hoặc máy tính học sinh phục vụ quan sát và thực hành trực tiếp.",
    },
    {
      name: "Học liệu số tương tác",
      description: "Hệ thống bài tập mô phỏng, đồng hồ đếm ngược và phiếu đánh giá Rubric cho từng hoạt động.",
    },
  ];

  const renderItems = items && items.length > 0 ? items : defaultItems;

  const [checkedState, setCheckedState] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  });

  const toggleCheck = (idx: number) => {
    setCheckedState((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="thiet-bi-va-hoc-lieu"
      className="my-10 p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 dark:bg-slate-900/90 backdrop-blur-xl border border-emerald-200/80 dark:border-white/10 shadow-xl"
    >
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
          <Laptop size={24} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
            Phần II • Sẵn sàng trước khi học
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight !m-0">
            II. THIẾT BỊ VÀ HỌC LIỆU CHUẨN BỊ
          </h2>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg mb-6">
        Thầy cô và các em học sinh kiểm tra thiết bị học tập trước khi bắt đầu (nhấn vào từng mục để xác nhận sẵn sàng):
      </p>

      {children ? (
        children
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {renderItems.map((item, idx) => {
            const isChecked = !!checkedState[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]",
                  isChecked
                    ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-400 text-emerald-950 dark:text-emerald-100 shadow-md"
                    : "bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                )}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-black text-lg md:text-xl flex items-center gap-2">
                    {item.name}
                  </span>
                  <CheckCircle2
                    size={24}
                    className={cn(
                      "shrink-0 transition-transform mt-0.5",
                      isChecked ? "text-emerald-600 dark:text-emerald-400 scale-110" : "text-slate-300 dark:text-slate-600"
                    )}
                  />
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
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
      border: "border-sky-200 dark:border-sky-800/70",
      badge: "bg-sky-500 text-white",
      icon: "🚀",
    },
    "2": {
      bg: "from-indigo-500/10 via-purple-500/5 to-transparent",
      text: "text-indigo-700 dark:text-indigo-300",
      border: "border-indigo-200 dark:border-indigo-800/70",
      badge: "bg-indigo-600 text-white",
      icon: "📖",
    },
    "3": {
      bg: "from-emerald-500/10 via-teal-500/5 to-transparent",
      text: "text-emerald-700 dark:text-emerald-300",
      border: "border-emerald-200 dark:border-emerald-800/70",
      badge: "bg-emerald-600 text-white",
      icon: "🩺",
    },
    "4": {
      bg: "from-amber-500/10 via-orange-500/5 to-transparent",
      text: "text-amber-700 dark:text-amber-300",
      border: "border-amber-200 dark:border-amber-800/70",
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
          "bg-white/95 dark:bg-slate-900/95"
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4">
            <div
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg shrink-0",
                theme.badge
              )}
            >
              {theme.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={cn(
                    "text-xs md:text-sm uppercase font-black tracking-widest",
                    theme.text
                  )}
                >
                  Hoạt động {number}
                </span>
                {duration && (
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-black bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                    <Clock size={12} />
                    {duration}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-snug !m-0">
                {title}
              </h2>
            </div>
          </div>

          {(objective || content || product) && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="self-start md:self-center px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 min-h-[44px] cursor-pointer"
            >
              <span>{showDetails ? "Thu gọn yêu cầu" : "Xem mục tiêu hoạt động"}</span>
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Pedagogical Spec Drawer (Mục tiêu, Nội dung, Sản phẩm) */}
        {showDetails && (objective || content || product) && (
          <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
            {objective && (
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <span className="text-xs font-black uppercase text-sky-600 dark:text-sky-400 block mb-1">
                  a) Mục tiêu
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {objective}
                </p>
              </div>
            )}
            {content && (
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                  b) Nội dung
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {content}
                </p>
              </div>
            )}
            {product && (
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                  c) Sản phẩm cần đạt
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {product}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Activity Body / Steps */}
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
    <div
      id={id}
      className="my-10 p-6 md:p-8 rounded-[2rem] bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-lg scroll-mt-28"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-lg bg-indigo-600 text-white font-black text-xs uppercase tracking-wider">
              Nhiệm vụ {number}
            </span>
            {duration && (
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                ⏱️ {duration}
              </span>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white !m-0">
            {title}
          </h3>
        </div>

        {(objective || content || product) && (
          <button
            onClick={() => setShowPedagogy(!showPedagogy)}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1 self-start sm:self-auto py-2 min-h-[44px] cursor-pointer"
          >
            <span>{showPedagogy ? "Thu gọn yêu cầu" : "Xem mục tiêu nhiệm vụ"}</span>
            {showPedagogy ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>

      {showPedagogy && (
        <div className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm md:text-base space-y-2">
          {objective && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                a) Mục tiêu:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300">{objective}</span>
            </div>
          )}
          {content && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                b) Nội dung:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300">{content}</span>
            </div>
          )}
          {product && (
            <div>
              <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
                c) Sản phẩm cần đạt:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300">{product}</span>
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
  slide?: string;
  stepNumber?: string;
  step?: 1 | 2 | 3 | 4 | number;
  title?: string;
  duration?: string;
  showTimer?: boolean;
  timerSeconds?: number;
  children?: React.ReactNode;
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
    border: "border-blue-200 dark:border-blue-800/60",
    bgBadge: "bg-blue-600 text-white",
    lightBg: "bg-blue-50/50 dark:bg-blue-950/20",
  },
  2: {
    label: "Bước 2: Thực hiện nhiệm vụ",
    icon: "⚙️",
    color: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800/60",
    bgBadge: "bg-amber-600 text-white",
    lightBg: "bg-amber-50/50 dark:bg-amber-950/20",
  },
  3: {
    label: "Bước 3: Báo cáo, thảo luận",
    icon: "💬",
    color: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800/60",
    bgBadge: "bg-purple-600 text-white",
    lightBg: "bg-purple-50/50 dark:bg-purple-950/20",
  },
  4: {
    label: "Bước 4: Kết luận, nhận định",
    icon: "📌",
    color: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800/60",
    bgBadge: "bg-emerald-600 text-white",
    lightBg: "bg-emerald-50/50 dark:bg-emerald-950/20",
  },
};

export function SlideStep({
  id,
  slide,
  stepNumber,
  step,
  title,
  duration,
  showTimer = false,
  timerSeconds,
  children,
}: SlideStepProps) {
  let resolvedStep = step;
  if (!resolvedStep && stepNumber) {
    const parts = stepNumber.split(".");
    const lastPart = parseInt(parts[parts.length - 1], 10);
    if (!isNaN(lastPart) && lastPart >= 1 && lastPart <= 4) {
      resolvedStep = lastPart;
    }
  }
  const currentStep = resolvedStep || 1;
  const meta = STEP_METADATA[currentStep] || STEP_METADATA[1];
  const elementId =
    id ||
    (slide
      ? `slide-${slide.toLowerCase().replace(/[^a-z0-9]/g, "-")}-buoc-${currentStep}`
      : `step-${currentStep}`);

  return (
    <div
      id={elementId}
      className={cn(
        "p-6 md:p-8 rounded-[2rem] border-2 shadow-lg backdrop-blur-xl relative transition-all duration-300 hover:shadow-2xl scroll-mt-28",
        "bg-white/95 dark:bg-slate-900/90",
        meta.border
      )}
    >
      {/* Top Step Indicator (Cleaned of administrative 'SLIDE X.X' labels) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {/* Step Badge */}
          <span
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-black tracking-wider uppercase flex items-center gap-2 shadow-sm",
              meta.bgBadge
            )}
          >
            <span>{meta.icon}</span>
            <span>{meta.label}</span>
          </span>
        </div>

        {duration && (
          <span className="flex items-center gap-1.5 text-xs md:text-sm font-black px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Clock size={15} />
            {duration}
          </span>
        )}
      </div>

      {/* Step Title */}
      {title && (
        <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-snug mb-4">
          {title}
        </h4>
      )}

      {/* Optional Timer */}
      {showTimer && (
        <ClassTimer
          initialSeconds={timerSeconds || 180}
          label={title ? `Thời gian: ${title}` : "Đồng hồ thực hiện nhiệm vụ"}
        />
      )}

      {/* Step Content */}
      <div className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
