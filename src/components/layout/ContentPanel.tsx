"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowLeft,
  Tv,
  CheckCircle2,
} from "lucide-react";
import { TeacherToggle } from "@/components/ui/TeacherToggle";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function ContentPanel() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const sidebarNavRef = useRef<HTMLElement>(null);

  // Initialize collapse preference from localStorage (default to closed/collapsed for clean projection)
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("lesson_toc_collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    } else {
      setIsCollapsed(true);
    }
  }, []);

  // Sync CSS variable for dynamic layout padding on desktop
  useEffect(() => {
    const width = isCollapsed ? "0px" : "340px";
    document.documentElement.style.setProperty("--toc-width", width);

    return () => {
      document.documentElement.style.setProperty("--toc-width", "0px");
    };
  }, [isCollapsed]);

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("lesson_toc_collapsed", String(next));
      return next;
    });
  }, []);

  // Keyboard shortcut: Alt + T or Escape to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "t" || e.key === "T")) {
        e.preventDefault();
        toggleCollapsed();
      } else if (e.key === "Escape" && !isCollapsed) {
        toggleCollapsed();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleCollapsed, isCollapsed]);

  useEffect(() => {
    const queryElements = () => {
      const elements = Array.from(
        document.querySelectorAll(
          "h2, h3, h4, section[id], div[id^='activity-'], div[id^='slide-']"
        )
      )
        .map((elem) => {
          let id = elem.id;
          let text = elem.textContent || "";
          let level = 0;

          if (elem.tagName === "H2") {
            level = 2;
          } else if (elem.tagName === "H3") {
            level = 3;
          } else if (elem.tagName === "H4") {
            level = 4;
          } else {
            return null;
          }

          // Clean up text
          text = text.trim();
          if (!text || text.length > 80) {
            text = text.slice(0, 70) + "...";
          }

          if (!id) {
            id =
              "nav-" +
              text
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-")
                .slice(0, 30);
            elem.id = id;
          }

          return { id, text, level };
        })
        .filter((h): h is Heading => h !== null && !!h.id);

      const uniqueElements = elements.filter(
        (h, index) => elements.findIndex((item) => item.id === h.id) === index
      );

      setHeadings(uniqueElements);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-100px 0px -60%" }
      );

      uniqueElements.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) observer.observe(el);
      });

      return observer;
    };

    // Slight delay to allow MDX hydration
    const timer = setTimeout(() => {
      queryElements();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll sidebar when active item changes
  useEffect(() => {
    if (activeId && sidebarNavRef.current) {
      const activeElement = sidebarNavRef.current.querySelector(
        `[href="#${activeId}"]`
      );
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeId]);

  // Calculate progression percentage based on active index
  const activeIndex = headings.findIndex((h) => h.id === activeId);
  const progress =
    headings.length > 0
      ? Math.round(
          ((activeIndex >= 0 ? activeIndex + 1 : 1) / headings.length) * 100
        )
      : 0;

  return (
    <>
      {/* Floating Smart Trigger Button on the LEFT */}
      <AnimatePresence>
        {(isCollapsed || !isMounted) && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-4 md:left-6 top-20 md:top-24 z-40"
          >
            <button
              onClick={toggleCollapsed}
              className={cn(
                "group relative flex items-center gap-3 p-3 md:p-3.5 rounded-2xl md:rounded-3xl",
                "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/60 dark:border-white/10",
                "shadow-neu-flat hover:shadow-float active:shadow-neu-pressed transition-all duration-300",
                "text-slate-800 dark:text-slate-100 hover:scale-105 active:scale-95",
                "min-w-[48px] min-h-[48px] cursor-pointer"
              )}
              title="Hiện tiến trình bài học [Alt + T]"
            >
              {/* Circular Progress Ring */}
              <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200 dark:text-slate-700"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary transition-all duration-500 ease-out"
                    strokeDasharray={`${progress}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <PanelLeftOpen size={16} className="absolute text-primary" />
              </div>

              {/* Progress Text */}
              <div className="hidden sm:flex flex-col text-left pr-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Tiến trình
                </span>
                <span className="text-xs font-black text-slate-900 dark:text-white leading-none">
                  {progress}%
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for mobile & focused reading when drawer is open */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCollapsed}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Drawer on the LEFT side */}
      <motion.aside
        initial={false}
        animate={{
          x: isCollapsed ? -360 : 0,
          opacity: isCollapsed ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed left-0 top-0 bottom-0 w-80 sm:w-88 z-50 flex flex-col",
          "bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-2xl border-r border-slate-200/80 dark:border-white/10 shadow-2xl",
          isCollapsed && "pointer-events-none"
        )}
      >
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Top Bar: Return Link, Title & Close Button */}
          <div className="pt-5 px-5 pb-3 border-b border-slate-100 dark:border-slate-800">
            {/* Quick Home / Back Link */}
            <div className="mb-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Trang chủ / Chọn bài</span>
              </Link>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <List size={18} />
                </div>
                <div className="truncate">
                  <h3 className="font-black text-sm text-slate-900 dark:text-white truncate leading-none">
                    Tiến trình bài học
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    {progress}% hoàn thành
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={toggleCollapsed}
                className={cn(
                  "p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white",
                  "hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0",
                  "cursor-pointer active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
                )}
                title="Thu gọn tiến trình [Alt + T]"
              >
                <PanelLeftClose size={20} />
              </button>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav
            ref={sidebarNavRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scrollbar scroll-smooth"
          >
            {headings.length > 0 ? (
              headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(heading.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "flex items-start gap-2.5 py-2 px-3 rounded-2xl transition-all duration-200 relative group/item",
                      "font-bold leading-snug cursor-pointer",
                      heading.level === 2
                        ? "text-[15px] font-black mt-2 bg-slate-50/70 dark:bg-slate-800/40"
                        : heading.level === 3
                        ? "ml-2 text-[14px]"
                        : "ml-4 text-[13px] font-medium opacity-90",
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.01]"
                        : heading.level === 2
                        ? "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1.5 w-2 h-2 rounded-full shrink-0 transition-all",
                        isActive
                          ? "bg-white scale-125 shadow-sm"
                          : heading.level === 2
                          ? "bg-primary"
                          : "bg-slate-300 dark:bg-slate-600"
                      )}
                    />

                    <span className="leading-snug break-words">
                      {heading.text}
                    </span>
                  </a>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                Đang nạp cấu trúc bài học...
              </div>
            )}
          </nav>

          {/* Footer Controls: Teacher Mode & Fullscreen TV Mode */}
          <div className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <TeacherToggle />

            <button
              onClick={toggleCollapsed}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary text-xs font-bold shadow-sm transition-all cursor-pointer min-h-[44px]"
            >
              <Tv size={15} className="text-primary shrink-0" />
              <span>Chế độ TV: Ẩn thanh mở rộng màn hình [Alt+T]</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
