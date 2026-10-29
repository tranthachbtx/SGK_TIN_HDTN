import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { getAllLessonsSimple } from "@/lib/mdx";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { TeacherToggle } from "@/components/ui/TeacherToggle";

export const metadata: Metadata = {
  title: "Website tự học của thầy Thạch",
  description:
    "Trang website hổ trợ tự học tin học và HĐTN, HN & GDĐP của trường THPT Bùi Thị Xuân - Mũi Né",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get all lessons for navigation
  const lessons = getAllLessonsSimple().map((l) => ({
    slug: l.slug,
    subject: l.subject,
    grade: l.grade,
    title: l.frontmatter.title,
    order: l.frontmatter.order,
  }));

  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className="antialiased pb-0 bg-background selection:bg-primary/20 transition-colors duration-300"
        suppressHydrationWarning
      >
        <SettingsProvider>
          {/* Subtle Ambient Depth Lighting */}
          <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[140px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-secondary/5 blur-[140px]" />
          </div>

          <CustomCursor />

          {/* Floating Top-Right Action Controls (Theme Toggle & Teacher Toggle) */}
          <div className="fixed top-4 right-4 z-50 flex items-center gap-2.5">
            <ThemeToggle />
            <div className="hidden sm:block">
              <TeacherToggle />
            </div>
          </div>

          <Navigation lessons={lessons} />
          <main className="min-h-screen px-3 sm:px-6 md:px-8 pt-4 md:pt-6 max-w-none">
            {children}
          </main>
        </SettingsProvider>
      </body>
    </html>
  );
}
