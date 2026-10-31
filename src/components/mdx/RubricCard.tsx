"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, Star, Eye, Code, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface RubricItem {
  id: number;
  criterion: string;
  maxScore: number;
  requirement: string;
}

const RUBRIC_DATA: RubricItem[] = [
  {
    id: 1,
    criterion: "1. Chuẩn cấu trúc HTML5",
    maxScore: 4.0,
    requirement:
      "Đầy đủ <!DOCTYPE html>, <html>, <head>, <meta charset=\"utf-8\">, <title>, <body>; đóng/mở thẻ chính xác tuyệt đối.",
  },
  {
    id: 2,
    criterion: "2. Sử dụng thẻ nội dung",
    maxScore: 3.0,
    requirement:
      "Phối hợp đúng chức năng của cả thẻ đôi (<h1>, <h2>, <p>) và thẻ đơn (<hr>, <br>); phân cấp thông tin rõ ràng.",
  },
  {
    id: 3,
    criterion: "3. Hiển thị & Trình bày Code",
    maxScore: 3.0,
    requirement:
      "Không lỗi phông chữ tiếng Việt; mã nguồn thụt lề (indentation) sạch sẽ theo đúng cấp độ cha – con; nội dung sáng tạo.",
  },
];

export function RubricCard() {
  const [scores, setScores] = useState<Record<number, number>>({
    1: 4.0,
    2: 3.0,
    3: 3.0,
  });
  const [showSample, setShowSample] = useState(false);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div className="my-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm not-prose p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <Award size={26} />
          </div>
          <div>
            <span className="text-xs uppercase font-black tracking-widest text-amber-600 dark:text-amber-400 block">
              Tiêu chí Đánh giá Sản phẩm (Rubric)
            </span>
            <h4 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white !m-0">
              Bảng Đánh giá Dự án Mini "Danh thiếp số của tôi"
            </h4>
          </div>
        </div>

        {/* Total Score Badge */}
        <div className="flex items-center gap-3 self-start sm:self-auto bg-amber-50 dark:bg-amber-950/40 p-2.5 px-4 rounded-2xl border border-amber-200 dark:border-amber-800">
          <span className="text-xs uppercase font-black text-amber-700 dark:text-amber-300">
            Tổng điểm:
          </span>
          <span className="text-2xl font-mono font-black text-amber-600 dark:text-amber-400">
            {totalScore.toFixed(1)} / 10.0
          </span>
        </div>
      </div>

      {/* Rubric Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700 text-xs font-black uppercase text-slate-500 tracking-wider">
              <th className="py-3 px-4">Tiêu chí đánh giá</th>
              <th className="py-3 px-4 w-28 text-center">Điểm tối đa</th>
              <th className="py-3 px-4">Yêu cầu kiểm tra chi tiết</th>
              <th className="py-3 px-4 w-32 text-center">Chấm thử</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
            {RUBRIC_DATA.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
              >
                <td className="py-4 px-4 font-black text-slate-900 dark:text-white">
                  {item.criterion}
                </td>
                <td className="py-4 px-4 text-center font-mono font-bold text-amber-600 dark:text-amber-400 text-base">
                  {item.maxScore.toFixed(1)} đ
                </td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.requirement}
                </td>
                <td className="py-4 px-4 text-center">
                  <select
                    value={scores[item.id]}
                    onChange={(e) =>
                      setScores((prev) => ({
                        ...prev,
                        [item.id]: parseFloat(e.target.value),
                      }))
                    }
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono font-bold text-xs cursor-pointer min-h-[44px]"
                    aria-label={`Điểm cho ${item.criterion}`}
                  >
                    {[...Array(Math.round(item.maxScore * 2) + 1)].map((_, i) => {
                      const val = i * 0.5;
                      return (
                        <option key={val} value={val}>
                          {val.toFixed(1)} đ
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to toggle Sample Digital Business Card */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={() => setShowSample(!showSample)}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 min-h-[44px]"
        >
          <Eye size={16} />
          <span>{showSample ? "Ẩn mẫu sản phẩm" : "Xem sản phẩm mẫu điểm 10"}</span>
        </button>
      </div>

      {/* Sample Digital Business Card Preview */}
      {showSample && (
        <div className="mt-4 p-6 rounded-2xl border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 to-white dark:from-slate-800 dark:to-slate-900 shadow-inner space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Star size={16} className="fill-current text-yellow-500" />
            <span>Mô phỏng hiển thị tệp danhthiep_NguyenVanAn.html</span>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1">
              Nguyễn Văn An
            </h1>
            <h2 className="text-base font-bold text-sky-600 dark:text-sky-400 mb-4">
              Thành viên CLB Tin học trẻ & Đội tuyển Bóng rổ
            </h2>
            <hr className="my-4 border-slate-300 dark:border-slate-700" />
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              <strong>Sở thích:</strong> Lập trình Web với HTML/CSS, đọc sách
              công nghệ và leo núi.
              <br />
              <strong>Châm ngôn sống:</strong> "Không có gì là không thể với một
              tâm trí kiên trì và một bàn phím kết nối."
            </p>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Định hướng tương lai:</strong> Kỹ sư Khoa học Dữ liệu / Trí
              tuệ nhân tạo.
              <br />
              <strong>Email liên hệ:</strong> an.nguyen12@school.edu.vn
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
