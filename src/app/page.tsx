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
      {/* Top Header Banner - Clean, Pedagogical, Distraction-Free */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-sky-500/10 via-rose-500/10 to-amber-500/10 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={14} /> Kế hoạch bài dạy tương tác
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Bộ sách Kết nối tri thức với cuộc sống
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Thư Viện Bài Giảng Trực Tuyến & Trình Chiếu Lớp Học
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1 font-medium">
            Chọn môn học và khối lớp bên dưới để mở bài học tương tác hoặc trình chiếu bài giảng.
          </p>
        </div>
      </div>

      {/* Subject & Grade Portal */}
      <SubjectGradePortal initialLessons={allLessons} />
    </div>
  );
}
