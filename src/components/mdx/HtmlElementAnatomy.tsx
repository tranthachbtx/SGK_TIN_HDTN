"use client";

import React, { useState } from "react";
import { Layers, CheckCircle, Info, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function HtmlElementAnatomy() {
  const [activePart, setActivePart] = useState<string>("element");

  const parts: Record<
    string,
    { title: string; desc: string; example: string; note: string }
  > = {
    open: {
      title: "1. Thẻ mở (Opening Tag)",
      desc: "Bắt đầu bằng dấu < và kết thúc bằng dấu >. Báo hiệu cho trình duyệt bắt đầu một phần tử.",
      example: "<p>",
      note: "Quy ước chuẩn thế giới: Luôn viết tên thẻ bằng chữ thường.",
    },
    attr: {
      title: "2. Thuộc tính (Attribute)",
      desc: "Nằm bên trong thẻ mở, cung cấp thông tin bổ sung hoặc cấu hình cho phần tử. Viết dưới dạng: ten_thuoc_tinh=\"gia_tri\".",
      example: 'class="lead" style="color: blue;"',
      note: "Giá trị thuộc tính luôn đặt trong cặp dấu ngoặc kép \" \".",
    },
    content: {
      title: "3. Nội dung phần tử (Content)",
      desc: "Là văn bản, hình ảnh hoặc các thẻ HTML con nằm giữa thẻ mở và thẻ đóng. Đây là dữ liệu thực tế người dùng nhìn thấy.",
      example: "Chào mừng các bạn đến với lớp Tin học 12!",
      note: "HTML không nhận biết nhiều phím cách hoặc Enter xuống dòng trong nội dung.",
    },
    close: {
      title: "4. Thẻ đóng (Closing Tag)",
      desc: "Có cấu tạo giống hệt thẻ mở nhưng có thêm dấu gạch chéo / đứng trước tên thẻ. Báo hiệu kết thúc phạm vi tác dụng.",
      example: "</p>",
      note: "Quên đóng thẻ là nguyên nhân phổ biến nhất khiến giao diện web bị vỡ bố cục!",
    },
    element: {
      title: "Toàn bộ Phần tử HTML (HTML Element)",
      desc: "Bao gồm toàn bộ: Thẻ mở + Thuộc tính + Nội dung bên trong + Thẻ đóng (hoặc bản thân một thẻ đơn).",
      example: '<p class="lead">Chào mừng các bạn đến với lớp Tin học 12!</p>',
      note: "Cả trang web là một cây tập hợp các phần tử HTML lồng ghép vào nhau.",
    },
  };

  const current = parts[activePart] || parts.element;

  return (
    <div className="my-8 rounded-[2rem] border-2 border-sky-100 dark:border-sky-900/50 bg-white/95 dark:bg-slate-900/95 shadow-xl overflow-hidden backdrop-blur-xl not-prose p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
          <Layers size={24} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-sky-600 dark:text-sky-400 block">
            Nhiệm vụ 2.1 • Giải phẫu Cấu trúc
          </span>
          <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
            Sơ đồ Giải phẫu Một Phần tử HTML Hoàn chỉnh
          </h4>
        </div>
      </div>

      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
        Nhấn vào từng khối bên dưới để phân biệt rõ giữa <strong>Thẻ (Tag)</strong> và{" "}
        <strong>Phần tử (Element)</strong>:
      </p>

      {/* Visual Interactive Diagram */}
      <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white shadow-inner flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm md:text-lg lg:text-xl font-mono">
        {/* Opening Tag */}
        <button
          onClick={() => setActivePart("open")}
          className={cn(
            "p-3 rounded-xl border-2 transition-all font-bold min-h-[44px]",
            activePart === "open"
              ? "bg-sky-500 text-white border-sky-300 shadow-lg scale-105"
              : "bg-slate-800 text-sky-300 border-slate-700 hover:border-sky-400"
          )}
          title="Nhấn để xem Thẻ mở"
        >
          &lt;p
        </button>

        {/* Attribute */}
        <button
          onClick={() => setActivePart("attr")}
          className={cn(
            "p-3 rounded-xl border-2 transition-all font-bold min-h-[44px]",
            activePart === "attr"
              ? "bg-amber-500 text-white border-amber-300 shadow-lg scale-105"
              : "bg-slate-800 text-amber-300 border-slate-700 hover:border-amber-400"
          )}
          title="Nhấn để xem Thuộc tính"
        >
          class="lead"&gt;
        </button>

        {/* Content */}
        <button
          onClick={() => setActivePart("content")}
          className={cn(
            "p-3 rounded-xl border-2 transition-all font-bold min-h-[44px]",
            activePart === "content"
              ? "bg-emerald-500 text-white border-emerald-300 shadow-lg scale-105"
              : "bg-slate-800 text-emerald-300 border-slate-700 hover:border-emerald-400"
          )}
          title="Nhấn để xem Nội dung"
        >
          Chào mừng đến với lớp 12
        </button>

        {/* Closing Tag */}
        <button
          onClick={() => setActivePart("close")}
          className={cn(
            "p-3 rounded-xl border-2 transition-all font-bold min-h-[44px]",
            activePart === "close"
              ? "bg-rose-500 text-white border-rose-300 shadow-lg scale-105"
              : "bg-slate-800 text-rose-300 border-slate-700 hover:border-rose-400"
          )}
          title="Nhấn để xem Thẻ đóng"
        >
          &lt;/p&gt;
        </button>
      </div>

      {/* Button to view Whole Element */}
      <div className="flex justify-center">
        <button
          onClick={() => setActivePart("element")}
          className={cn(
            "px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 min-h-[44px]",
            activePart === "element"
              ? "bg-indigo-600 text-white border-indigo-400 shadow-md"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200"
          )}
        >
          ⭐ Xem toàn bộ Phần tử (HTML Element)
        </button>
      </div>

      {/* Explanation Detail Card */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-black text-indigo-700 dark:text-indigo-300 text-base">
          <Info size={18} />
          <span>{current.title}</span>
        </div>
        <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
          {current.desc}
        </p>
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs md:text-sm text-sky-600 dark:text-sky-400">
          Mã minh họa: <code>{current.example}</code>
        </div>
        <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold pt-1">
          💡 Lưu ý sư phạm: {current.note}
        </div>
      </div>
    </div>
  );
}
