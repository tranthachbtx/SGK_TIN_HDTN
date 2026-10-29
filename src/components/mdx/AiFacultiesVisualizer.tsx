"use client";

import React, { useState } from "react";
import { Brain, Eye, MessageSquare, Cpu, CheckCircle2, XCircle, Sparkles, HelpCircle, Layers, Lightbulb } from "lucide-react";

export function AiFacultiesVisualizer() {
  const [activeTab, setActiveTab] = useState<"faculties" | "classifier">("faculties");
  const [selectedFaculty, setSelectedFaculty] = useState<number>(0);

  // Data for 5 AI Faculties
  const faculties = [
    {
      id: "learning",
      name: "Khả năng Học (Learning)",
      sub: "Machine Learning / Deep Learning",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800",
      accent: "text-blue-600 dark:text-blue-400",
      concept: "Khả năng nắm bắt thông tin từ dữ liệu quá khứ và tự động điều chỉnh hành vi, cải thiện độ chính xác mà không cần lập trình lại từng dòng lệnh.",
      example: "Hệ thống khuyến nghị YouTube/TikTok học từ lịch sử xem và thời gian dừng hình để gợi ý video phù hợp gu từng cá nhân.",
      interactiveTitle: "Mô phỏng Học máy (Data Feedback Loop):",
      interactiveSteps: [
        { label: "1. Thu thập dữ liệu", desc: "Người dùng xem 5 video về Tin học 12, thả tim 3 video" },
        { label: "2. Huấn luyện mô hình", desc: "Thuật toán nhận diện xu hướng: 'Học sinh lớp 12 thích lập trình Web'" },
        { label: "3. Tự động thích ứng", desc: "Trang chủ ưu tiên hiển thị bài giảng HTML/CSS tiếp theo" },
      ]
    },
    {
      id: "reasoning",
      name: "Khả năng Suy luận (Reasoning)",
      sub: "Logical Deduction & Knowledge Bases",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800",
      accent: "text-purple-600 dark:text-purple-400",
      concept: "Khả năng vận dụng logic, tri thức và các quy tắc để rút ra kết luận mới hoặc đưa ra quyết định từ các dữ kiện đầu vào.",
      example: "Hệ chuyên gia y tế (như MYCIN, Watson Oncology) phân tích triệu chứng lâm sàng và xét nghiệm để chẩn đoán chủng vi khuẩn gây bệnh.",
      interactiveTitle: "Mô phỏng Cơ chế Luật suy diễn (Inference Engine):",
      interactiveSteps: [
        { label: "Luật 1", desc: "NẾU sốt > 38.5°C VÀ ho kéo dài → Nguy cơ nhiễm khuẩn đường hô hấp" },
        { label: "Luật 2", desc: "NẾU bạch cầu tăng cao → Xác nhận nhiễm trùng huyết" },
        { label: "Kết luận suy luận", desc: "Đề xuất nhóm kháng sinh đặc hiệu và liều lượng tối ưu" },
      ]
    },
    {
      id: "perception",
      name: "Khả năng Nhận thức (Perception)",
      sub: "Computer Vision & Sensor Fusion",
      icon: Eye,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
      accent: "text-amber-600 dark:text-amber-400",
      concept: "Khả năng cảm nhận và hiểu biết thế giới vật lý xung quanh thông qua camera, radar, micro và các cảm biến số.",
      example: "Xe tự lái (Tesla, Waymo) nhận diện vạch kẻ đường, biển báo tốc độ, người đi bộ và chướng ngại vật theo thời gian thực.",
      interactiveTitle: "Thị giác máy tính (Computer Vision Pipeline):",
      interactiveSteps: [
        { label: "Mắt thu nhận", desc: "Camera 4K quét khung hình 60 khung hình/giây" },
        { label: "Phân vùng vật thể", desc: "Vẽ hộp bao (Bounding Box): [Người đi bộ 98%], [Biển Stop 99%]" },
        { label: "Ra lệnh điều khiển", desc: "Giảm tốc độ và dừng trước vạch người đi bộ an toàn" },
      ]
    },
    {
      id: "nlp",
      name: "Hiểu ngôn ngữ tự nhiên (NLP)",
      sub: "Natural Language Processing & Speech",
      icon: MessageSquare,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
      accent: "text-emerald-600 dark:text-emerald-400",
      concept: "Khả năng đọc hiểu, phân tích ngữ nghĩa, tổng hợp và giao tiếp bằng ngôn ngữ của con người qua cả văn bản và giọng nói.",
      example: "ChatGPT, Trợ lý ảo Siri, Google Assistant, Google Dịch tự động hiểu ngữ cảnh và dịch đúng nghĩa thành ngữ thay vì dịch từng từ.",
      interactiveTitle: "Mô phỏng Phân tích ngữ nghĩa ngữ cảnh:",
      interactiveSteps: [
        { label: "Câu gốc", desc: "'Mặt trời chân lý chói qua tim' (Thơ Tố Hữu)" },
        { label: "Máy tính thường", desc: "Dịch nghĩa đen từng từ (Word-by-word) → Vô nghĩa, máy móc" },
        { label: "AI tạo sinh (LLM)", desc: "Hiểu phép ẩn dụ về lý tưởng cách mạng, dịch thơ chuyển tải đúng hồn bài thơ" },
      ]
    },
    {
      id: "problem_solving",
      name: "Giải quyết vấn đề (Problem Solving)",
      sub: "Heuristic Search & Planning",
      icon: Sparkles,
      color: "from-rose-500 to-red-500",
      bg: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800",
      accent: "text-rose-600 dark:text-rose-400",
      concept: "Khả năng tìm kiếm phương án tối ưu trong không gian trạng thái vô cùng lớn hoặc trong các tình huống biến đổi khó lường.",
      example: "AlphaGo đánh bại kiện tướng cờ vây thế giới; Hệ thống AI điều phối luồng bay và tránh kẹt xe đô thị.",
      interactiveTitle: "Không gian tìm kiếm nước đi tối ưu:",
      interactiveSteps: [
        { label: "Số lượng trạng thái", desc: "Cờ vây có 10^170 trạng thái (nhiều hơn số hạt nguyên tử trong vũ trụ)" },
        { label: "Phương pháp AI", desc: "Mạng nơ-ron học sâu kết hợp tìm kiếm cây Monte Carlo (MCTS)" },
        { label: "Kết quả đột phá", desc: "Tạo ra những nước cờ sáng tạo chưa từng có trong lịch sử 2500 năm" },
      ]
    },
  ];

  // Classifier challenge data
  const scenarios = [
    {
      id: 1,
      title: "Ấm đun nước siêu tốc tự ngắt khi nước sôi",
      desc: "Rơ-le lưỡng kim cong lại do nhiệt độ đạt 100°C làm ngắt mạch điện cơ học.",
      isAi: false,
      reason: "Hệ thống tự động hóa thuần cơ nhiệt, hoạt động theo quy tắc cố định, không có dữ liệu, không có khả năng học hay suy luận."
    },
    {
      id: 2,
      title: "Máy ảnh điện thoại tự khóa nét vào khuôn mặt người (Face Detection)",
      desc: "Camera phân tích ma trận điểm ảnh, nhận dạng tỉ lệ mắt - mũi - miệng để định vị người chụp.",
      isAi: true,
      reason: "Ứng dụng Thị giác máy tính (AI) với khả năng nhận thức và mô hình học nhận dạng cấu trúc khuôn mặt con người."
    },
    {
      id: 3,
      title: "Cửa siêu thị tự mở khi có người bước tới gần",
      desc: "Cảm biến hồng ngoại hoặc sóng radar phát hiện sự thay đổi bức xạ nhiệt/chuyển động cắt ngang chùm tia.",
      isAi: false,
      reason: "Hệ thống tự động hóa cảm biến đóng mở công tắc relay đơn giản, không phân biệt ai đến và không có khả năng thích nghi."
    },
    {
      id: 4,
      title: "Google Dịch dịch từ chụp ảnh bảng hiệu tiếng Nhật sang tiếng Việt",
      desc: "Nhận dạng chữ quang học (OCR) kết hợp mô hình dịch máy nơ-ron (NMT) hiểu ngữ cảnh.",
      isAi: true,
      reason: "Tích hợp cả 2 năng lực AI cao cấp: Nhận thức thị giác (Perception) và Hiểu ngôn ngữ tự nhiên (NLP)."
    },
    {
      id: 5,
      title: "Guồng nước vùng cao tự quay đưa nước lên ruộng bậc thang",
      desc: "Lực đẩy thủy năng tự nhiên của dòng suối làm quay bánh xe tre đưa máng nước lên cao.",
      isAi: false,
      reason: "Hệ thống cơ học vật lý truyền thống, không sử dụng điện toán hay thuật toán."
    },
    {
      id: 6,
      title: "YouTube đề xuất video học tập Tin học 12 vào trang chủ của bạn",
      desc: "Thuật toán học từ thói quen tìm kiếm, thời gian xem và tương tác của hàng triệu người dùng tương đồng.",
      isAi: true,
      reason: "Khả năng Học máy (Machine Learning) thích ứng theo hành vi và dữ liệu cá nhân hóa."
    },
  ];

  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSelect = (scenarioId: number, userChoice: boolean) => {
    setAnswers(prev => ({ ...prev, [scenarioId]: userChoice }));
  };

  const currentFaculty = faculties[selectedFaculty];

  return (
    <div className="my-8 rounded-2xl border border-sky-200/80 dark:border-sky-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
            <Brain className="w-5 h-5 text-yellow-300" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">Bộ công cụ khám phá Trí tuệ nhân tạo (AI Explorer)</h4>
            <p className="text-xs text-sky-100">Dành cho Trình chiếu & Tương tác lớp học chuẩn 5512</p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-black/20 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab("faculties")}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === "faculties" ? "bg-white text-indigo-700 shadow-sm" : "text-white/80 hover:text-white"}`}
          >
            5 Năng lực đặc trưng
          </button>
          <button
            onClick={() => setActiveTab("classifier")}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === "classifier" ? "bg-white text-indigo-700 shadow-sm" : "text-white/80 hover:text-white"}`}
          >
            Thử thách: AI hay Tự động hóa?
          </button>
        </div>
      </div>

      {activeTab === "faculties" ? (
        <div className="p-5 sm:p-6 space-y-6">
          {/* Faculty Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {faculties.map((f, idx) => {
              const Icon = f.icon;
              const isSelected = selectedFaculty === idx;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFaculty(idx)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col items-start gap-2 min-h-[90px] ${
                    isSelected
                      ? `ring-2 ring-indigo-500 border-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-md`
                      : `border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 hover:border-indigo-300`
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${f.color} text-white shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-slate-800 dark:text-slate-200">{f.name.split(" ")[2]}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight block">{f.id.toUpperCase()}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Faculty Card */}
          <div className={`p-5 rounded-2xl border ${currentFaculty.bg} transition-all space-y-4`}>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${currentFaculty.color} text-white`}>
                  <currentFaculty.icon className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">{currentFaculty.name}</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{currentFaculty.sub}</p>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${currentFaculty.accent} bg-white dark:bg-slate-900 shadow-sm`}>
                Đặc trưng cốt lõi #{selectedFaculty + 1}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" /> Bản chất khoa học:
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  {currentFaculty.concept}
                </p>

                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 pt-2">
                  <Layers className="w-4 h-4 text-indigo-500" /> Ví dụ thực tiễn đời sống:
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  {currentFaculty.example}
                </p>
              </div>

              {/* Interactive pipeline */}
              <div className="bg-white/80 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  {currentFaculty.interactiveTitle}
                </span>
                <div className="space-y-2.5">
                  {currentFaculty.interactiveSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                      <span className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <div className="text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200 block">{step.label}</span>
                        <span className="text-slate-600 dark:text-slate-400">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6 space-y-5">
          <div className="bg-sky-50 dark:bg-sky-950/30 p-3.5 rounded-xl border border-sky-200 dark:border-sky-800 text-xs text-sky-800 dark:text-sky-300 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Thử thách nhận diện (Hoạt động 1 SGK):</strong> Học sinh quan sát 6 tình huống kỹ thuật dưới đây, phân biệt đâu là <em>Tự động hóa thông thường</em> (làm theo quy tắc cứng cố định) và đâu là <em>Trí tuệ nhân tạo AI</em> (có khả năng học, nhận thức, thích nghi).
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {scenarios.map((sc) => {
              const currentChoice = answers[sc.id];
              const isAnswered = currentChoice !== undefined && currentChoice !== null;
              const isCorrect = isAnswered ? currentChoice === sc.isAi : null;

              return (
                <div
                  key={sc.id}
                  className={`p-4 rounded-xl border transition-all text-sm flex flex-col justify-between ${
                    showResult && isAnswered
                      ? isCorrect
                        ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20"
                        : "border-rose-300 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40"
                  }`}
                >
                  <div className="space-y-1.5 mb-3">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Tình huống #{sc.id}</span>
                    <h6 className="font-semibold text-slate-800 dark:text-slate-100">{sc.title}</h6>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{sc.desc}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleSelect(sc.id, false)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 min-h-[44px] ${
                          currentChoice === false
                            ? "bg-slate-700 text-white shadow"
                            : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        ⚙️ Tự động hóa
                      </button>
                      <button
                        onClick={() => handleSelect(sc.id, true)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 min-h-[44px] ${
                          currentChoice === true
                            ? "bg-indigo-600 text-white shadow"
                            : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        🧠 Trí tuệ nhân tạo (AI)
                      </button>
                    </div>

                    {showResult && (
                      <div className="mt-2 text-xs p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                        <div className="flex items-center gap-1 font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Chính xác! ({sc.isAi ? "Là ứng dụng AI" : "Là tự động hóa"})
                            </span>
                          ) : (
                            <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Chưa đúng! Đáp án đúng: {sc.isAi ? "Trí tuệ nhân tạo (AI)" : "Tự động hóa"}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{sc.reason}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">
              Đã trả lời: {Object.keys(answers).length}/6 tình huống
            </span>
            <button
              onClick={() => setShowResult(!showResult)}
              disabled={Object.keys(answers).length === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md hover:from-indigo-700 hover:to-sky-700 disabled:opacity-50 min-h-[44px]"
            >
              {showResult ? "Ẩn đáp án & Thử lại" : "Kiểm tra kết quả toàn lớp"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
