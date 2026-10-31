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
    badgeColor: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-900/40",
  },
  {
    id: "experiential",
    title: "HĐ Trải nghiệm",
    description: "Phát triển kỹ năng sống, năng lực thích ứng, định hướng nghề nghiệp và phục vụ cộng đồng.",
    icon: Users,
    color: "from-rose-500 to-amber-400",
    badgeColor: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-900/40",
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
      {/* Subject Picker - Minimalist Dual-Card Selection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => {
          const isActive = selectedSubject === subject.id;
          const Icon = subject.icon;

          return (
            <motion.button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              className={`relative overflow-hidden p-6 md:p-8 rounded-3xl text-left transition-all duration-300 cursor-pointer border group ${
                isActive
                  ? "bg-white dark:bg-slate-900 border-sky-500 ring-2 ring-sky-500/20 shadow-md"
                  : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-br ${subject.color} text-white shadow-sm`
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                }`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900 dark:text-white">
                {subject.title}
              </h3>
              <p className="text-base leading-relaxed font-normal text-slate-600 dark:text-slate-400">
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
            <p className="text-slate-500 dark:text-slate-400 font-medium text-base">
              {currentSubjectInfo.title} • {grades.find((g) => g.id === selectedGrade)?.label} (
              {filteredLessons.length} bài)
            </p>
          </div>

          {/* Minimalist Segmented Pill Grade Switcher */}
          <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
            {grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-200 cursor-pointer min-h-[44px] ${
                  selectedGrade === grade.id
                    ? "bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-black border border-slate-200/50 dark:border-slate-600/50"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold"
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
            transition={{ duration: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.subject}/${lesson.grade}/${lesson.slug}`}
                  className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 p-6 md:p-7 rounded-3xl transition-all duration-200 hover:-translate-y-1 block h-full relative overflow-hidden cursor-pointer"
                >
                  {/* Subtle Order Watermark */}
                  <span className="absolute -right-3 -top-3 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none group-hover:text-sky-500/10 transition-colors">
                    {lesson.frontmatter.order}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full ${currentSubjectInfo.badgeColor} text-[11px] font-bold uppercase tracking-wider border`}
                      >
                        {selectedSubject === "experiential" ? "Chủ đề" : "Bài"}{" "}
                        {lesson.frontmatter.order}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black mb-3 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-slate-900 dark:text-white leading-snug">
                      {lesson.frontmatter.title.split(":")[1]?.trim() || lesson.frontmatter.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-normal line-clamp-3 mb-6 leading-relaxed">
                      {lesson.frontmatter.description}
                    </p>

                    <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-bold group-hover:gap-2 transition-all">
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
              <div className="col-span-full py-20 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-700 dark:text-slate-300 mb-2">
                  Đang cập nhật nội dung...
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-normal">
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
