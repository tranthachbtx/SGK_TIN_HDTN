"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Scale, HeartHandshake, Eye } from "lucide-react";

export function CyberSafetyScenario() {
  const [activeCase, setActiveCase] = useState<number>(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<number, number>>({});
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);

  const cases = [
    {
      id: 0,
      title: "Tình huống 1: Video 'Bóc phốt' nghi vấn dùng công nghệ Deepfake",
      situation: "Bạn thấy một video lan truyền chóng mặt trên TikTok quay cảnh một bạn cùng trường có hành vi gian lận thi cử. Nhiều bạn bè rủ nhau chia sẻ (share) và để lại bình luận chỉ trích gay gắt. Tuy nhiên, quan sát kỹ khẩu hình miệng của bạn đó có dấu hiệu giật lag bất thường nghi do ghép mặt Deepfake.",
      options: [
        {
          id: 0,
          text: "A. Chia sẻ ngay về Facebook cá nhân kèm caption cảnh báo các bạn khác để tăng tương tác.",
          isCorrect: false,
          feedback: "Sai lầm nghiêm trọng! Hành vi chia sẻ thông tin chưa kiểm chứng, có dấu hiệu làm giả mạo xúc phạm danh dự người khác vi phạm Điều 8 Luật An ninh mạng 2018 và Nghị định 15/2020/NĐ-CP (xử phạt 10 - 20 triệu đồng)."
        },
        {
          id: 1,
          text: "B. Không chia sẻ, báo cáo (Report) video giả mạo lên nền tảng và khuyên bạn bè dừng lan truyền.",
          isCorrect: true,
          feedback: "Xử lý tuyệt vời và chuẩn mực đạo đức! Đây là hành động thể hiện trách nhiệm công dân số, bảo vệ danh dự bạn bè và ngăn chặn tin giả lan rộng."
        },
        {
          id: 2,
          text: "C. Nhắn tin riêng chế giễu bạn xuất hiện trong clip để thỏa mãn trí tò mò.",
          isCorrect: false,
          feedback: "Hành vi bắt nạt qua mạng (Cyberbullying), gây tổn hại tâm lý nặng nề cho nạn nhân, vi phạm nghiêm trọng tính nhân văn trong môi trường số."
        }
      ]
    },
    {
      id: 1,
      title: "Tình huống 2: Bản quyền nội dung và Trí tuệ nhân tạo (AI Art)",
      situation: "Nhóm của bạn cần thiết kế poster tuyên truyền ngày 26/3. Một thành viên lấy nguyên bức tranh vẽ độc quyền của một họa sĩ trên mạng về, dùng Photoshop xóa chữ ký tác giả rồi nộp cho giáo viên và tự nhận nhóm tự vẽ.",
      options: [
        {
          id: 0,
          text: "A. Đồng tình vì mục đích dùng cho phong trào trường học phi thương mại nên không cần xin phép.",
          isCorrect: false,
          feedback: "Sai! Theo Luật Sở hữu trí tuệ, việc tự ý xóa tên tác giả và mạo nhận quyền tác giả là hành vi xâm phạm bản quyền nghiêm trọng, bất kể dùng cho mục đích gì."
        },
        {
          id: 1,
          text: "B. Đề nghị nhóm xin phép tác giả hoặc tìm ảnh miễn phí bản quyền (Unsplash/Freepik có giấy phép CC), ghi rõ nguồn.",
          isCorrect: true,
          feedback: "Hoàn toàn chính xác! Tôn trọng quyền tác giả và liêm chính học thuật là phẩm chất cốt lõi của công dân trong thời đại số."
        },
        {
          id: 2,
          text: "C. Đưa vào công cụ AI để vẽ lại na ná rồi tiếp tục nhận là tranh của mình.",
          isCorrect: false,
          feedback: "Hành vi đạo nhái phong cách thiếu trung thực, né tránh trách nhiệm tôn trọng quyền sở hữu trí tuệ."
        }
      ]
    },
    {
      id: 2,
      title: "Tình huống 3: Bảo vệ danh tính số và Phòng chống lừa đảo mạo danh",
      situation: "Tài khoản Messenger của một người bạn thân nhắn tin: 'Bạn ơi tớ đang có việc gấp cần mượn 500k chuyển khoản hộ vào số tài khoản này, tối về tớ trả ngay nhé'.",
      options: [
        {
          id: 0,
          text: "A. Vì là bạn thân nên chuyển khoản ngay lập tức mà không cần hỏi lại.",
          isCorrect: false,
          feedback: "Rất nguy hiểm! Đây là thủ đoạn lừa đảo chiếm quyền điều khiển (hack) tài khoản mạng xã hội phổ biến nhất hiện nay."
        },
        {
          id: 1,
          text: "B. Gọi điện thoại thoại trực tiếp (Voice call hoặc gặp mặt) để xác minh chính chủ trước khi thực hiện giao dịch.",
          isCorrect: true,
          feedback: "Quy tắc vàng bảo vệ an toàn tài chính số! Luôn xác minh đa kênh khi có yêu cầu chuyển tiền, phòng ngừa Deepfake giọng nói bằng cách hỏi câu hỏi bí mật mà chỉ 2 người biết."
        },
        {
          id: 2,
          text: "C. Chụp màn hình đăng lên trang cá nhân hỏi xem có ai bị như vậy không.",
          isCorrect: false,
          feedback: "Làm lộ thông tin cá nhân và số tài khoản ngân hàng, có thể bị kẻ gian lợi dụng tiếp."
        }
      ]
    }
  ];

  const currentCase = cases[activeCase];
  const userChoice = selectedChoices[activeCase];

  const handleSelect = (choiceIdx: number) => {
    setSelectedChoices(prev => ({ ...prev, [activeCase]: choiceIdx }));
    setShowAnalysis(true);
  };

  return (
    <div className="my-8 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
            <Scale className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">Tình huống Pháp luật & Đạo đức Không gian mạng</h4>
            <p className="text-xs text-rose-100">Bảo vệ tính nhân văn, bản quyền số và ứng xử chuẩn mực (Bài 6 Tin học 12)</p>
          </div>
        </div>

        {/* Case selector buttons */}
        <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-xl text-xs font-semibold">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCase(idx);
                setShowAnalysis(selectedChoices[idx] !== undefined);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCase === idx ? "bg-white text-rose-700 shadow-sm font-bold" : "text-white/80 hover:text-white"
              }`}
            >
              Tình huống {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Situation Card */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-100 text-sm">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>{currentCase.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {currentCase.situation}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Lựa chọn hành vi ứng xử của bạn:
          </span>

          <div className="space-y-2">
            {currentCase.options.map((opt, oIdx) => {
              const isSelected = userChoice === oIdx;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(oIdx)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 min-h-[44px] ${
                    isSelected
                      ? opt.isCorrect
                        ? "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 ring-2 ring-emerald-400"
                        : "border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 ring-2 ring-rose-400"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    isSelected
                      ? opt.isCorrect
                        ? "bg-emerald-600 text-white"
                        : "bg-rose-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {opt.text}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback / Legal Assessment */}
        {showAnalysis && userChoice !== undefined && (
          <div className={`p-4 rounded-xl border transition-all text-xs sm:text-sm space-y-1.5 ${
            currentCase.options[userChoice].isCorrect
              ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200"
              : "border-rose-300 dark:border-rose-800 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200"
          }`}>
            <div className="flex items-center gap-2 font-bold">
              {currentCase.options[userChoice].isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>ĐÁNH GIÁ CHUẨN MỰC PHÁP LUẬT & ĐẠO ĐỨC: CHÍNH XÁC!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>CẢNH BÁO VI PHẠM PHÁP LUẬT & ĐẠO ĐỨC SỐ!</span>
                </>
              )}
            </div>
            <p className="leading-relaxed">
              {currentCase.options[userChoice].feedback}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
