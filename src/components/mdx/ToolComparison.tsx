"use client";

import React, { useState } from "react";
import { Laptop, Code2, Globe, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolGroup {
  id: string;
  name: string;
  badge: string;
  icon: any;
  pros: string;
  cons: string;
  when: string;
  color: string;
}

const TOOLS: ToolGroup[] = [
  {
    id: "notepad",
    name: "Notepad / TextEdit",
    badge: "Nhóm 1 • Có sẵn trên hệ điều hành",
    icon: Laptop,
    pros: "Có sẵn trên 100% máy tính, khởi động siêu nhẹ, rèn luyện trí nhớ và khả năng gõ cú pháp tỉ mỉ.",
    cons: "Không tô màu từ khóa, không tự động đóng thẻ, dễ bị lưu nhầm thành đuôi tệp .txt.",
    when: "Khi phòng máy chưa cài đặt phần mềm ngoài hoặc không có kết nối mạng Internet.",
    color: "from-slate-600 to-slate-800 text-white",
  },
  {
    id: "vscode",
    name: "VS Code / Sublime Text",
    badge: "Nhóm 2 • Phần mềm chuyên dụng",
    icon: Code2,
    pros: "Tô màu cú pháp (Syntax Highlighting), tự động gợi ý và đóng thẻ (Emmet), quản lý tệp theo thư mục chuyên nghiệp.",
    cons: "Cần tải về và cài đặt trước lên máy tính; tiêu tốn nhiều RAM hơn.",
    when: "Khi làm dự án thực tế, các bài thực hành lớn hoặc sau này làm nghề lập trình viên.",
    color: "from-blue-600 to-indigo-600 text-white",
  },
  {
    id: "w3schools",
    name: "W3Schools Tryit / CodePen",
    badge: "Nhóm 3 • Công cụ trực tuyến",
    icon: Globe,
    pros: "Không cần cài đặt, giao diện chia đôi: vừa gõ code bên trái, vừa bấm 'Run' thấy ngay kết quả bên phải.",
    cons: "Hoàn toàn phụ thuộc vào kết nối mạng Internet.",
    when: "Khi muốn thử nghiệm nhanh một đoạn mã ngắn hoặc học trên máy tính bảng / điện thoại.",
    color: "from-emerald-600 to-teal-600 text-white",
  },
];

export function ToolComparisonTable() {
  const [selectedTool, setSelectedTool] = useState<string>("vscode");

  return (
    <div className="my-8 rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 shrink-0">
          <Code2 size={24} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-indigo-600 dark:text-indigo-400 block">
            Nhiệm vụ 2.3 • So sánh & Lựa chọn
          </span>
          <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
            Bảng So sánh 03 Nhóm Công cụ Soạn thảo HTML
          </h4>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          const isSelected = selectedTool === tool.id;

          return (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={cn(
                "p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between",
                isSelected
                  ? "bg-slate-50 dark:bg-slate-800/80 border-indigo-500 shadow-lg scale-[1.02]"
                  : "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-indigo-300"
              )}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shadow-sm shrink-0 bg-gradient-to-br",
                      tool.color
                    )}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 truncate">
                    {tool.badge}
                  </span>
                </div>
                <h5 className="text-base font-black text-slate-900 dark:text-white mb-3">
                  {tool.name}
                </h5>

                <div className="space-y-2 text-xs leading-relaxed">
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
                      ✅ Ưu điểm:
                    </strong>{" "}
                    <span className="text-slate-700 dark:text-slate-300">
                      {tool.pros}
                    </span>
                  </div>
                  <div>
                    <strong className="text-rose-600 dark:text-rose-400 font-bold">
                      ⚠️ Nhược điểm:
                    </strong>{" "}
                    <span className="text-slate-700 dark:text-slate-300">
                      {tool.cons}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                <strong className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">
                  💡 Khi nào nên chọn?
                </strong>
                <span className="text-slate-600 dark:text-slate-400">
                  {tool.when}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Troubleshooting Alert Box */}
      <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 space-y-3">
        <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-300 text-sm uppercase tracking-wider">
          <AlertTriangle size={18} />
          <span>Cảnh báo 02 Lỗi Học sinh thường gặp nhất khi thực hành</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-amber-200 dark:border-amber-900/60">
            <strong className="text-rose-600 dark:text-rose-400 font-bold block mb-1">
              ⚠️ Lỗi 1: Nháy đúp vào tệp lại mở Notepad chứ không mở Trình duyệt!
            </strong>
            <p className="mb-1">
              <strong>Nguyên nhân:</strong> Khi lưu trong Notepad, ô{" "}
              <em>Save as type</em> đang để mặc định là <code>Text Documents (*.txt)</code>, nên tên tệp thực tế bị biến thành <code>index.html.txt</code>.
            </p>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold">
              👉 Cách khắc phục: Khi bấm Save As, chọn <em>Save as type: All Files (*.*)</em>, chọn Encoding: UTF-8 và gõ tên tệp là <code>index.html</code>.
            </p>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-amber-200 dark:border-amber-900/60">
            <strong className="text-rose-600 dark:text-rose-400 font-bold block mb-1">
              ⚠️ Lỗi 2: Sửa code xong nhưng trên Trình duyệt không thay đổi!
            </strong>
            <p className="mb-1">
              <strong>Nguyên nhân:</strong> Quên bấm Lưu tệp trong trình soạn thảo hoặc Trình duyệt đang tải dữ liệu bộ nhớ đệm cũ (cache).
            </p>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold">
              👉 Cách khắc phục: Nhấn phím <code>Ctrl + S</code> bên trình soạn thảo để lưu lại, sau đó chuyển sang trình duyệt bấm phím <code>F5</code> (hoặc <code>Ctrl + R</code>) để tải lại trang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
