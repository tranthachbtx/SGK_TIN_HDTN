"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Code, Zap, Sparkles } from "lucide-react";
import { Lesson } from "@/lib/mdx";

interface SubjectGradePortalProps {
  initialLessons: Lesson[];
}

const subjects = [
  {
    id: "informatics",
    title: "Tin học",
    description: "Khám phá lập trình Python, thuật toán, cơ sở dữ liệu và thiết kế web HTML/CSS chuẩn GDPT 2018.",
    icon: Code,
    color: "from-sky-500 to-cyan-400",
    badgeColor: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/30",
  },
  {
    id: "experiential",
    title: "HĐ Trải nghiệm",
    description: "Phát triển kỹ năng sống, năng lực thích ứng, định hướng nghề nghiệp và phục vụ cộng đồng.",
    icon: Users,
    color: "from-rose-500 to-amber-400",
    badgeColor: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-400/30",
  },
];

const grades = [
  { id: "grade-10", label: "Lớp 10" },
  { id: "grade-11", label: "Lớp 11" },
  { id: "grade-12", label: "Lớp 12" },
];

export default function SubjectGradePortal({ initialLessons }: SubjectGradePortalProps) {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].id);
  const [selectedGrade, setSelectedGrade] = useState(grades[0].id);

  const filteredLessons = useMemo(() => {
    return initialLessons.filter(
      (lesson) => lesson.subject === selectedSubject && lesson.grade === selectedGrade
    );
  }, [initialLessons, selectedSubject, selectedGrade]);

  const currentSubjectInfo = subjects.find((s) => s.id === selectedSubject)!;

  return (
    <div className="space-y-12">
      {/* Subject Picker - Pure Neumorphic Dual-Card Selection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => {
          const isActive = selectedSubject === subject.id;
          const Icon = subject.icon;

          return (
            <motion.button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden p-6 md:p-8 rounded-3xl text-left transition-all duration-300 focus-ring-hover cursor-pointer border group ${
                isActive
                  ? "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed border-sky-500/40"
                  : "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu hover:shadow-neu-sm border-white/60 dark:border-white/10"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-neu-sm border border-white/50 dark:border-white/10 ${
                  isActive
                    ? `bg-gradient-to-br ${subject.color} text-white`
                    : "bg-[#e0e0e0] dark:bg-[#212121] text-slate-600 dark:text-slate-400"
                }`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900 dark:text-white">
                {subject.title}
              </h3>
              <p className="text-base leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                {subject.description}
              </p>

              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-6 right-8 text-sky-600 dark:text-sky-400"
                >
                  <Sparkles size={24} className="animate-pulse" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </section>

      {/* Grade Selector & Content List */}
      <section id="lessons" className="space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Zap className="text-amber-500 fill-amber-500" size={26} />
              Danh sách bài giảng
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-base">
              {currentSubjectInfo.title} • {grades.find((g) => g.id === selectedGrade)?.label} (
              {filteredLessons.length} bài)
            </p>
          </div>

          {/* Neumorphic Inset Grade Switcher */}
          <div className="flex bg-[#d6d6d6] dark:bg-[#181818] shadow-neu-pressed-sm p-1.5 rounded-2xl border border-black/5 dark:border-white/5">
            {grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer min-h-[44px] ${
                  selectedGrade === grade.id
                    ? "bg-[#e0e0e0] dark:bg-[#212121] text-sky-600 dark:text-sky-400 shadow-neu-sm font-black border border-white/60 dark:border-white/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {grade.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedSubject}-${selectedGrade}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.subject}/${lesson.grade}/${lesson.slug}`}
                  className="group bg-[#e0e0e0] dark:bg-[#212121] shadow-neu hover:shadow-neu-sm p-6 md:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 block h-full border border-white/60 dark:border-white/10 relative overflow-hidden focus-ring-hover cursor-pointer"
                >
                  {/* Decorative number watermark */}
                  <span className="absolute -right-4 -top-4 text-8xl font-black text-black/5 dark:text-white/5 select-none group-hover:text-sky-500/10 transition-colors">
                    {lesson.frontmatter.order}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full ${currentSubjectInfo.badgeColor} text-[11px] font-black uppercase tracking-wider border shadow-neu-sm`}
                      >
                        {selectedSubject === "experiential" ? "Chủ đề" : "Bài"}{" "}
                        {lesson.frontmatter.order}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black mb-3 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-slate-900 dark:text-white leading-snug">
                      {lesson.frontmatter.title.split(":")[1]?.trim() || lesson.frontmatter.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium line-clamp-3 mb-6 leading-relaxed">
                      {lesson.frontmatter.description}
                    </p>

                    <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-black group-hover:gap-2 transition-all">
                      MỞ BÀI GIẢNG{" "}
                      <ArrowRight
                        size={18}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-[#e0e0e0] dark:bg-[#212121] shadow-neu rounded-3xl border border-white/60 dark:border-white/10">
                <div className="bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-700 dark:text-slate-300 mb-2">
                  Đang cập nhật nội dung...
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  Chúng tôi sẽ sớm bổ sung tài liệu cho khối lớp này.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
