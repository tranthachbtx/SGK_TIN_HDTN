import { getAllLessons } from "@/lib/mdx";
import SubjectGradePortal from "@/components/home/SubjectGradePortal";
import { BookOpen, Sparkles } from "lucide-react";

export default function Home() {
  const subjects = ["informatics", "experiential"];
  const grades = ["grade-10", "grade-11", "grade-12"];

  // Flatten all lessons into one array
  const allLessons = subjects.flatMap((subject) =>
    grades.flatMap((grade) => getAllLessons(subject, grade))
  );

  return (
    <div className="space-y-8 pb-24 pt-2 md:pt-4 max-w-7xl mx-auto">
      {/* Top Header Banner - Minimalist, Sophisticated, Clean */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900/40">
              <Sparkles size={14} /> Kế hoạch bài dạy tương tác
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Bộ sách Kết nối tri thức với cuộc sống
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Thư Viện Bài Giảng Trực Tuyến & Trình Chiếu Lớp Học
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1 font-normal">
            Chọn môn học và khối lớp bên dưới để mở bài học tương tác hoặc trình chiếu bài giảng.
          </p>
        </div>
      </div>

      {/* Subject & Grade Portal */}
      <SubjectGradePortal initialLessons={allLessons} />
    </div>
  );
}
