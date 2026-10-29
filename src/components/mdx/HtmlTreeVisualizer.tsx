"use client";

import React, { useState } from "react";
import { GitFork, Monitor, Globe, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreeNode {
  tag: string;
  name: string;
  role: string;
  location: "tab" | "viewport" | "meta" | "root";
  locationText: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode = {
  tag: "html",
  name: "<html> Phần tử gốc (Root)",
  role: "Bao bọc toàn bộ trang web, chứa 2 nhánh con trực tiếp là <head> và <body>.",
  location: "root",
  locationText: "Bao quát toàn bộ tệp HTML",
  children: [
    {
      tag: "head",
      name: "<head> Đầu trang",
      role: "Chứa các thông tin thiết lập ngầm (metadata), tiêu đề tab, không hiển thị trong vùng nội dung.",
      location: "tab",
      locationText: "Thông tin ngầm & Thanh Tab trình duyệt",
      children: [
        {
          tag: "meta",
          name: '<meta charset="utf-8">',
          role: "Khai báo bảng mã ký tự Unicode (UTF-8) giúp hiển thị tiếng Việt có dấu chuẩn xác.",
          location: "meta",
          locationText: "Bộ mã ký tự ngầm (không hiển thị chữ)",
        },
        {
          tag: "title",
          name: "<title>",
          role: "Xác định tên tiêu đề trang web hiển thị trên thanh Tab của trình duyệt.",
          location: "tab",
          locationText: "Thanh Tab trên cùng của Trình duyệt (Tab Bar)",
        },
      ],
    },
    {
      tag: "body",
      name: "<body> Thân trang",
      role: "Chứa toàn bộ nội dung hiển thị trực tiếp cho người xem trong vùng Viewport.",
      location: "viewport",
      locationText: "Vùng nội dung chính (Viewport) của cửa sổ trình duyệt",
      children: [
        {
          tag: "h1",
          name: "<h1>",
          role: "Tiêu đề chính lớn nhất trên trang web.",
          location: "viewport",
          locationText: "Dòng chữ lớn đầu tiên trong vùng Viewport",
        },
        {
          tag: "p",
          name: "<p>",
          role: "Đoạn văn bản chứa nội dung thông tin thông thường.",
          location: "viewport",
          locationText: "Đoạn văn bên dưới trong vùng Viewport",
        },
      ],
    },
  ],
};

export function HtmlTreeVisualizer() {
  const [selectedTag, setSelectedTag] = useState<TreeNode>(
    TREE_DATA.children![0].children![1] // default select <title>
  );

  return (
    <div className="my-8 rounded-[2rem] border-2 border-indigo-100 dark:border-indigo-900/50 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 shrink-0">
          <GitFork size={24} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-indigo-600 dark:text-indigo-400 block">
            Mô hình Sư phạm Tương tác
          </span>
          <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
            Sơ đồ Cây Phân cấp HTML (DOM Tree) & Vị trí Hiển thị
          </h4>
        </div>
      </div>

      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6">
        Nhấp vào bất kỳ nút nào trên sơ đồ cây để quan sát chức năng và vị trí
        tương ứng hiển thị trên trình duyệt web:
      </p>

      {/* Main Grid: Tree structure (left) vs Browser Window Mockup (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left: Interactive Tree */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <GitFork size={14} />
            Cấu trúc phân cấp Cha - Con
          </div>

          {/* Root node */}
          <div>
            <button
              onClick={() => setSelectedTag(TREE_DATA)}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-xl font-mono text-sm font-bold border transition-all flex items-center justify-between",
                selectedTag.tag === "html"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.02]"
                  : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-indigo-400"
              )}
            >
              <span>🌐 &lt;html&gt; (Phần tử gốc)</span>
              <span className="text-[10px] font-sans uppercase font-bold opacity-80">
                Root
              </span>
            </button>

            {/* Level 1 branches */}
            <div className="ml-6 pl-4 border-l-2 border-indigo-300 dark:border-indigo-800 mt-3 space-y-4">
              {/* HEAD branch */}
              <div>
                <button
                  onClick={() => setSelectedTag(TREE_DATA.children![0])}
                  className={cn(
                    "w-full text-left px-3.5 py-2 rounded-xl font-mono text-sm font-bold border transition-all flex items-center justify-between",
                    selectedTag.tag === "head"
                      ? "bg-sky-600 text-white border-sky-600 shadow-md scale-[1.02]"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-sky-400"
                  )}
                >
                  <span>📁 &lt;head&gt; (Đầu trang)</span>
                  <span className="text-[10px] font-sans font-bold opacity-80">
                    Nhánh 1
                  </span>
                </button>

                {/* HEAD children */}
                <div className="ml-5 pl-3 border-l-2 border-sky-200 dark:border-sky-900 mt-2 space-y-2">
                  <button
                    onClick={() =>
                      setSelectedTag(TREE_DATA.children![0].children![0])
                    }
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all",
                      selectedTag.tag === "meta"
                        ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300"
                    )}
                  >
                    ⚙️ &lt;meta charset="utf-8"&gt;
                  </button>
                  <button
                    onClick={() =>
                      setSelectedTag(TREE_DATA.children![0].children![1])
                    }
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all",
                      selectedTag.tag === "title"
                        ? "bg-sky-500 text-white border-sky-500 shadow-sm ring-2 ring-sky-300"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300"
                    )}
                  >
                    🏷️ &lt;title&gt; (Tiêu đề Tab)
                  </button>
                </div>
              </div>

              {/* BODY branch */}
              <div>
                <button
                  onClick={() => setSelectedTag(TREE_DATA.children![1])}
                  className={cn(
                    "w-full text-left px-3.5 py-2 rounded-xl font-mono text-sm font-bold border transition-all flex items-center justify-between",
                    selectedTag.tag === "body"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-[1.02]"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-400"
                  )}
                >
                  <span>📄 &lt;body&gt; (Thân trang)</span>
                  <span className="text-[10px] font-sans font-bold opacity-80">
                    Nhánh 2
                  </span>
                </button>

                {/* BODY children */}
                <div className="ml-5 pl-3 border-l-2 border-emerald-200 dark:border-emerald-900 mt-2 space-y-2">
                  <button
                    onClick={() =>
                      setSelectedTag(TREE_DATA.children![1].children![0])
                    }
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all",
                      selectedTag.tag === "h1"
                        ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-300"
                    )}
                  >
                    🔤 &lt;h1&gt; (Tiêu đề chính)
                  </button>
                  <button
                    onClick={() =>
                      setSelectedTag(TREE_DATA.children![1].children![1])
                    }
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all",
                      selectedTag.tag === "p"
                        ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-300"
                    )}
                  >
                    📝 &lt;p&gt; (Đoạn văn)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Browser Simulation with Highlight */}
        <div className="space-y-4">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Monitor size={14} />
            Mô phỏng Trình duyệt Trực quan
          </div>

          <div className="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-xl">
            {/* Simulated Chrome Browser Chrome Bar */}
            <div className="bg-slate-200 dark:bg-slate-800 p-2.5 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>

              {/* Tab Bar Container */}
              <div
                className={cn(
                  "px-3 py-1.5 rounded-t-xl text-xs font-bold flex items-center gap-2 max-w-[220px] transition-all",
                  selectedTag.location === "tab" || selectedTag.tag === "head"
                    ? "bg-sky-500 text-white shadow-lg ring-2 ring-sky-300 animate-pulse"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
                )}
              >
                <Globe size={12} />
                <span className="truncate">Trang web của tôi</span>
                <span className="text-[10px] ml-auto opacity-70">
                  (&lt;title&gt;)
                </span>
              </div>
            </div>

            {/* Address Bar */}
            <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 font-mono truncate">
              file:///C:/Users/Student/Desktop/index.html
            </div>

            {/* Viewport (Content area) */}
            <div
              className={cn(
                "p-6 min-h-[220px] transition-all relative",
                selectedTag.location === "viewport" ||
                  selectedTag.tag === "body"
                  ? "bg-emerald-50/40 dark:bg-emerald-950/20 ring-4 ring-inset ring-emerald-400/50"
                  : "bg-white dark:bg-slate-900"
              )}
            >
              <div
                className={cn(
                  "p-2 rounded-lg transition-all mb-3",
                  selectedTag.tag === "h1" &&
                    "bg-yellow-200 dark:bg-yellow-900/60 ring-2 ring-yellow-400"
                )}
              >
                <h1 className="text-2xl font-black text-slate-900 dark:text-white !m-0">
                  Tiêu đề chính trên trang
                </h1>
              </div>

              <div
                className={cn(
                  "p-2 rounded-lg transition-all",
                  selectedTag.tag === "p" &&
                    "bg-yellow-200 dark:bg-yellow-900/60 ring-2 ring-yellow-400"
                )}
              >
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 !m-0">
                  Nội dung văn bản hiển thị cho người đọc.
                </p>
              </div>

              {/* Viewport badge tag */}
              <div className="absolute bottom-2 right-2 text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                VÙNG NỘI DUNG (VIEWPORT)
              </div>
            </div>
          </div>

          {/* Node detail callout card */}
          <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-slate-800 dark:text-slate-200 text-sm space-y-1">
            <div className="flex items-center gap-2 font-black text-indigo-700 dark:text-indigo-300 text-base">
              <Info size={18} />
              <span>{selectedTag.name}</span>
            </div>
            <div>
              <strong>Vai trò:</strong> {selectedTag.role}
            </div>
            <div>
              <strong>Vị trí hiển thị:</strong>{" "}
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                {selectedTag.locationText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
