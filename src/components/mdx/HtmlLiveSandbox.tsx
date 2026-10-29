"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Eye,
  RotateCcw,
  Copy,
  Check,
  Maximize2,
  Sparkles,
  Columns,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HtmlLiveSandboxProps {
  initialCode?: string;
  title?: string;
  preset?: "tags_demo" | "skeleton_demo" | "hello_world" | "card_demo";
  className?: string;
}

const PRESETS: Record<string, { name: string; code: string }> = {
  tags_demo: {
    name: "Thẻ HTML cơ bản",
    code: `<h1>Chào mừng đến với lớp Tin học 12</h1>
<hr>
<p>Đây là dòng văn bản đầu tiên.<br>Đây là dòng văn bản thứ hai.</p>`,
  },
  skeleton_demo: {
    name: "Bộ khung chuẩn HTML5",
    code: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Trang web của tôi</title>
    </head>
    <body>
        <h1>Tiêu đề chính trên trang</h1>
        <p>Nội dung văn bản hiển thị cho người đọc.</p>
    </body>
</html>`,
  },
  hello_world: {
    name: "Bài thực hành cá nhân",
    code: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hồ sơ cá nhân - Nguyễn Văn An</title>
</head>
<body>
    <h1>Xin chào! Tôi là Nguyễn Văn An</h1>
    <p>Học sinh lớp 12 - Đang chinh phục ngôn ngữ HTML.</p>
</body>
</html>`,
  },
  card_demo: {
    name: "Danh thiếp số (Mẫu)",
    code: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Danh thiếp số - Lê Mai Anh</title>
</head>
<body>
    <h1>Lê Mai Anh</h1>
    <h2>Học sinh Lớp 12A1 - THPT Chuyên</h2>
    <hr>
    <p>Sở thích: Lập trình web, chơi bóng rổ, chụp ảnh.<br>Châm ngôn sống: "Hành trình vạn dặm bắt đầu từ một dòng code".</p>
    <p>Định hướng nghề nghiệp: Kỹ sư Phần mềm / AI Engineer.<br>Liên hệ: maianh@school.edu.vn</p>
</body>
</html>`,
  },
};

export function HtmlLiveSandbox({
  initialCode,
  title = "Trình soạn thảo & Thử nghiệm HTML Trực tiếp",
  preset = "tags_demo",
  className,
}: HtmlLiveSandboxProps) {
  const defaultCode =
    initialCode ||
    (PRESETS[preset] ? PRESETS[preset].code : PRESETS["tags_demo"].code);

  const [code, setCode] = useState<string>(defaultCode);
  const [activeTab, setActiveTab] = useState<"split" | "code" | "preview">(
    "split"
  );
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = (presetKey?: string) => {
    if (presetKey && PRESETS[presetKey]) {
      setCode(PRESETS[presetKey].code);
    } else {
      setCode(defaultCode);
    }
  };

  return (
    <div
      className={cn(
        "my-8 rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose",
        className
      )}
    >
      {/* Top Bar */}
      <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-1">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Code size={18} className="text-sky-400" />
            <span className="font-black text-sm tracking-wide">{title}</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("split")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 min-h-[36px]",
              activeTab === "split"
                ? "bg-sky-500 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            )}
            title="Song song (Code + Trình duyệt)"
          >
            <Columns size={14} />
            <span className="hidden sm:inline">Song song</span>
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 min-h-[36px]",
              activeTab === "code"
                ? "bg-sky-500 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            )}
            title="Chỉ xem mã lệnh"
          >
            <Code size={14} />
            <span className="hidden sm:inline">Mã nguồn</span>
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 min-h-[36px]",
              activeTab === "preview"
                ? "bg-sky-500 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            )}
            title="Chỉ xem kết quả trình duyệt"
          >
            <Eye size={14} />
            <span className="hidden sm:inline">Trình duyệt</span>
          </button>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Sao chép mã nguồn"
          >
            {copied ? (
              <Check size={16} className="text-emerald-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
          <button
            onClick={() => handleReset()}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Khôi phục mã ban đầu"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Preset selector bar */}
      <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center flex-wrap gap-2 text-xs">
        <span className="font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <Sparkles size={14} className="text-amber-500" />
          Mẫu nhanh:
        </span>
        {Object.entries(PRESETS).map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleReset(key)}
            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-colors font-bold min-h-[32px]"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Editor & Preview Panes */}
      <div
        className={cn(
          "grid min-h-[320px] transition-all",
          activeTab === "split"
            ? "grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800"
            : "grid-cols-1"
        )}
      >
        {/* Code Editor Pane */}
        {(activeTab === "split" || activeTab === "code") && (
          <div className="flex flex-col bg-[#1e293b] text-slate-100 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2 pb-2 border-b border-slate-700/60">
              <span>index.html (UTF-8)</span>
              <span>Gõ trực tiếp vào khung dưới</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="flex-1 w-full bg-transparent font-mono text-sm md:text-base leading-relaxed text-sky-200 focus:outline-none resize-none custom-scrollbar min-h-[260px]"
              aria-label="HTML code editor"
            />
          </div>
        )}

        {/* Live Preview Pane */}
        {(activeTab === "split" || activeTab === "preview") && (
          <div className="flex flex-col bg-white">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-100 text-xs text-slate-600 border-b border-slate-200 font-sans">
              <span className="font-bold flex items-center gap-1.5">
                <Eye size={14} className="text-emerald-600" />
                Kết quả hiển thị trên Trình duyệt
              </span>
              <span className="text-[11px] text-slate-400">
                Khung xem trước thực tế
              </span>
            </div>
            <iframe
              srcDoc={code}
              title="HTML Preview Sandbox"
              sandbox="allow-scripts"
              className="flex-1 w-full min-h-[260px] border-0 bg-white"
            />
          </div>
        )}
      </div>
    </div>
  );
}
