"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  Cpu,
  Sparkles,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ClassTimer } from "./ClassTimer";

/* =========================================================================
   1. LESSON PLAN HEADER (NEUMORPHISM #e0e0e0)
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
    <div className="relative mb-8 p-6 md:p-8 rounded-3xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10">
      {/* Top Tag Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {displayBadge && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-sky-700 dark:text-sky-300 border border-sky-300/40 dark:border-sky-800/40">
            <ShieldCheck size={14} />
            {displayBadge}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-rose-600 dark:text-rose-300 border border-rose-300/40 dark:border-rose-800/40">
          <BookOpen size={14} />
          {bookSeries}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-800/40">
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

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
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
      className="my-8 rounded-3xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10 overflow-hidden transition-all duration-300"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 md:p-6 flex items-center justify-between cursor-pointer hover:bg-black/2 dark:hover:bg-white/2 transition-colors"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-white/50 dark:border-white/10">
            <Target size={24} />
          </div>
          <div>
            <span className="text-[11px] uppercase font-black tracking-widest text-sky-600 dark:text-sky-400 block mb-0.5">
              Phần I • Đầu giờ học
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight !m-0">
              I. MỤC TIÊU BÀI HỌC
            </h2>
          </div>
        </div>
        <button
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label={isExpanded ? "Thu gọn mục tiêu" : "Mở rộng mục tiêu"}
        >
          {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-5 md:p-6 pt-2 border-t border-black/5 dark:border-white/5 space-y-4">
          {children ? (
            children
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* 1. Về kiến thức */}
              <div className="p-5 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed flex flex-col justify-between border border-white/40 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-sky-700 dark:text-sky-300 font-black text-base md:text-lg">
                    <BookOpen size={20} className="shrink-0 text-sky-600 dark:text-sky-400" />
                    <span>1. Về kiến thức</span>
                  </div>
                  <ul className="space-y-2.5 text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {renderKnowledge.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-sky-500 font-bold text-lg leading-none mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Về năng lực */}
              <div className="p-5 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed flex flex-col justify-between border border-white/40 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-indigo-700 dark:text-indigo-300 font-black text-base md:text-lg">
                    <Cpu size={20} className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span>2. Về năng lực</span>
                  </div>
                  <ul className="space-y-2.5 text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {renderCompetencies.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-indigo-500 font-bold text-lg leading-none mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Về phẩm chất */}
              <div className="p-5 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed flex flex-col justify-between border border-white/40 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-rose-700 dark:text-rose-300 font-black text-base md:text-lg">
                    <Sparkles size={20} className="shrink-0 text-rose-500 dark:text-rose-400" />
                    <span>3. Về phẩm chất</span>
                  </div>
                  <ul className="space-y-2.5 text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {renderQualities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-rose-500 font-bold text-lg leading-none mt-1">•</span>
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
      className="my-8 p-5 md:p-7 rounded-3xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-white/50 dark:border-white/10">
          <Laptop size={22} />
        </div>
        <div>
          <span className="text-[11px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
            Phần II • Sẵn sàng trước khi học
          </span>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight !m-0">
            II. THIẾT BỊ VÀ HỌC LIỆU CHUẨN BỊ
          </h2>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg mb-5">
        Thầy cô và các em học sinh kiểm tra thiết bị học tập trước khi bắt đầu (nhấn vào từng mục để xác nhận sẵn sàng):
      </p>

      {children ? (
        children
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {renderItems.map((item, idx) => {
            const isChecked = !!checkedState[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={cn(
                  "p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between min-h-[130px]",
                  isChecked
                    ? "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border border-emerald-500/30 text-emerald-950 dark:text-emerald-300"
                    : "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm border border-white/50 dark:border-white/5 text-slate-700 dark:text-slate-200 hover:shadow-neu"
                )}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-black text-base md:text-lg flex items-center gap-2">
                    {item.name}
                  </span>
                  <CheckCircle2
                    size={22}
                    className={cn(
                      "shrink-0 transition-transform mt-0.5",
                      isChecked ? "text-emerald-600 dark:text-emerald-400 scale-110" : "text-slate-400 dark:text-slate-500"
                    )}
                  />
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
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
    { iconColor: string; textColor: string; icon: string }
  > = {
    "1": {
      iconColor: "text-sky-600 dark:text-sky-400",
      textColor: "text-sky-700 dark:text-sky-300",
      icon: "🚀",
    },
    "2": {
      iconColor: "text-indigo-600 dark:text-indigo-400",
      textColor: "text-indigo-700 dark:text-indigo-300",
      icon: "📖",
    },
    "3": {
      iconColor: "text-emerald-600 dark:text-emerald-400",
      textColor: "text-emerald-700 dark:text-emerald-300",
      icon: "🩺",
    },
    "4": {
      iconColor: "text-amber-600 dark:text-amber-400",
      textColor: "text-amber-700 dark:text-amber-300",
      icon: "🌟",
    },
  };

  const theme = themeByNum[String(number)] || themeByNum["1"];

  return (
    <section id={id} className="my-10 scroll-mt-28">
      {/* Activity Header Banner - Pure Neumorphism */}
      <div className="p-5 md:p-6 rounded-3xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm flex items-center justify-center text-2xl shrink-0 border border-white/50 dark:border-white/10">
              {theme.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={cn(
                    "text-xs md:text-sm uppercase font-black tracking-widest",
                    theme.textColor
                  )}
                >
                  Hoạt động {number}
                </span>
                {duration && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-slate-700 dark:text-slate-300 border border-white/50 dark:border-white/10">
                    <Clock size={11} />
                    {duration}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight leading-snug !m-0">
                {title}
              </h2>
            </div>
          </div>

          {(objective || content || product) && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="self-start md:self-center px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#e0e0e0] dark:bg-[#212121] text-slate-700 dark:text-slate-200 shadow-neu-sm hover:shadow-neu transition-all flex items-center gap-1.5 min-h-[44px] cursor-pointer border border-white/50 dark:border-white/10"
            >
              <span>{showDetails ? "Thu gọn yêu cầu" : "Xem mục tiêu hoạt động"}</span>
              {showDetails ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          )}
        </div>

        {/* Pedagogical Spec Drawer */}
        {showDetails && (objective || content || product) && (
          <div className="mt-5 pt-5 border-t border-black/5 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {objective && (
              <div className="p-4 rounded-xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border border-white/40 dark:border-white/5">
                <span className="text-xs font-black uppercase text-sky-600 dark:text-sky-400 block mb-1">
                  a) Mục tiêu
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {objective}
                </p>
              </div>
            )}
            {content && (
              <div className="p-4 rounded-xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border border-white/40 dark:border-white/5">
                <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                  b) Nội dung
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {content}
                </p>
              </div>
            )}
            {product && (
              <div className="p-4 rounded-xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border border-white/40 dark:border-white/5">
                <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                  c) Sản phẩm cần đạt
                </span>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {product}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Activity Body / Steps */}
      <div className="mt-5 space-y-5">{children}</div>
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
      className="my-8 p-5 md:p-6 rounded-2xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm border border-white/50 dark:border-white/5 scroll-mt-28"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/5 dark:border-white/5 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white font-black text-xs uppercase tracking-wider shadow-xs">
              Nhiệm vụ {number}
            </span>
            {duration && (
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                ⏱️ {duration}
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white !m-0">
            {title}
          </h3>
        </div>

        {(objective || content || product) && (
          <button
            onClick={() => setShowPedagogy(!showPedagogy)}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1 self-start sm:self-auto py-1.5 min-h-[44px] cursor-pointer"
          >
            <span>{showPedagogy ? "Thu gọn yêu cầu" : "Xem mục tiêu nhiệm vụ"}</span>
            {showPedagogy ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        )}
      </div>

      {showPedagogy && (
        <div className="mb-5 p-4 rounded-xl bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border border-white/40 dark:border-white/5 text-sm md:text-base space-y-2">
          {objective && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                a) Mục tiêu:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300 font-normal">{objective}</span>
            </div>
          )}
          {content && (
            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                b) Nội dung:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300 font-normal">{content}</span>
            </div>
          )}
          {product && (
            <div>
              <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
                c) Sản phẩm cần đạt:
              </strong>{" "}
              <span className="text-slate-700 dark:text-slate-300 font-normal">{product}</span>
            </div>
          )}
        </div>
      )}

      <div className="space-y-4">{children}</div>
    </div>
  );
}

/* =========================================================================
   6. SLIDE STEP (NEUMORPHISM #e0e0e0)
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
    accentBorder: string;
    textColor: string;
  }
> = {
  1: {
    label: "Bước 1: Chuyển giao nhiệm vụ",
    icon: "🎯",
    accentBorder: "border-l-sky-500",
    textColor: "text-sky-700 dark:text-sky-300",
  },
  2: {
    label: "Bước 2: Thực hiện nhiệm vụ",
    icon: "⚙️",
    accentBorder: "border-l-amber-500",
    textColor: "text-amber-700 dark:text-amber-300",
  },
  3: {
    label: "Bước 3: Báo cáo, thảo luận",
    icon: "💬",
    accentBorder: "border-l-indigo-500",
    textColor: "text-indigo-700 dark:text-indigo-300",
  },
  4: {
    label: "Bước 4: Kết luận, nhận định",
    icon: "📌",
    accentBorder: "border-l-emerald-500",
    textColor: "text-emerald-700 dark:text-emerald-300",
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
        "p-6 md:p-7 rounded-3xl relative transition-all duration-200 scroll-mt-28",
        "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu border border-white/60 dark:border-white/10",
        "border-l-6",
        meta.accentBorder
      )}
    >
      {/* Top Step Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center gap-2">
          {/* Step Badge */}
          <span
            className={cn(
              "px-3.5 py-1 rounded-xl text-xs md:text-sm font-black tracking-wider uppercase flex items-center gap-2",
              "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm border border-white/50 dark:border-white/10",
              meta.textColor
            )}
          >
            <span>{meta.icon}</span>
            <span>{meta.label}</span>
          </span>
        </div>

        {duration && (
          <span className="flex items-center gap-1 text-xs md:text-sm font-bold px-3 py-0.5 rounded-full bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-sm text-slate-600 dark:text-slate-300 border border-white/40 dark:border-white/10">
            <Clock size={13} />
            {duration}
          </span>
        )}
      </div>

      {/* Step Title */}
      {title && (
        <h4 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-snug mb-3">
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
      <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed space-y-3 font-normal">
        {children}
      </div>
    </div>
  );
}
