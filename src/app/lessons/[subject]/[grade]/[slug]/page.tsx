import { getLessonBySlug, getAllLessons } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { MdxComponents } from "@/components/mdx/MdxComponents";
import { ContentPanel } from "@/components/layout/ContentPanel";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface LessonPageProps {
  params: Promise<{
    subject: string;
    grade: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const subjects = ["informatics", "experiential"];
  const grades = ["grade-10", "grade-11", "grade-12"];

  const allParams = [];

  for (const subject of subjects) {
    for (const grade of grades) {
      const lessons = getAllLessons(subject, grade);
      for (const lesson of lessons) {
        allParams.push({
          subject,
          grade,
          slug: lesson.slug,
        });
      }
    }
  }

  return allParams;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { subject, grade, slug } = await params;
  const lesson = getLessonBySlug(slug, subject, grade);

  if (!lesson) {
    return {
      title: "Không tìm thấy bài học",
    };
  }

  const subjectLabel = subject === "informatics" ? "Tin học" : "HĐ Trải nghiệm";
  const gradeLabel = grade.replace("grade-", "Lớp ");

  return {
    title: `${lesson.frontmatter.title} | ${subjectLabel} ${gradeLabel}`,
    description: lesson.frontmatter.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { subject, grade, slug } = await params;
  const lesson = getLessonBySlug(slug, subject, grade);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-2 md:py-6 px-1 sm:px-3 md:px-6 transition-all duration-300">
      {/* Left-docked Smart Lesson Progress Panel */}
      <ContentPanel />

      {/* Ambient Pastel Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-sky-400/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-rose-400/5 rounded-full blur-[130px]" />
      </div>

      {/* Seamless, Frameless Presentation Canvas (No heavy enclosing borders) */}
      <article className="relative z-10 mx-auto w-full max-w-[1560px] px-2 sm:px-4 md:px-8 py-2 md:py-4">
        <div
          className="prose prose-lg md:prose-2xl dark:prose-invert max-w-none 
                    prose-headings:font-display prose-headings:font-black prose-headings:scroll-mt-28
                    prose-headings:text-slate-900 dark:prose-headings:text-white
                    prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:leading-relaxed
                    prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-black
                    prose-img:rounded-2xl md:prose-img:rounded-[2rem] prose-img:shadow-sm
                "
        >
          <MDXRemote
            source={lesson.content}
            components={MdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </div>
      </article>

      {/* Soft Footer Completion Marker */}
      <div className="mt-14 mb-10 text-center relative z-10">
        <div className="h-1 w-16 bg-sky-500/20 mx-auto rounded-full mb-3" />
        <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm">
          Tiết học hoàn thành 🏆
        </p>
      </div>
    </div>
  );
}
