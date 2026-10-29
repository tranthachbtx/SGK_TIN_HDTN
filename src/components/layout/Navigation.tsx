"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { TeacherToggle } from "@/components/ui/TeacherToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface Lesson {
  slug: string;
  subject: string;
  grade: string;
  title: string;
  order: number;
}

interface NavigationProps {
  lessons: Lesson[];
}

export function BottomNavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center gap-1 p-2 transition-all min-h-[44px] min-w-[44px] justify-center rounded-2xl",
        active
          ? "bg-[#e0e0e0] dark:bg-[#212121] shadow-neu-pressed text-sky-600 dark:text-sky-400 font-black border border-sky-400/30"
          : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
      )}
    >
      <div className="shrink-0">{icon}</div>
      <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
        {label}
      </span>
    </Link>
  );
}

export function BottomNav({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 bg-[#e0e0e0]/90 dark:bg-[#212121]/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-neu z-40 px-4 py-2 flex justify-between items-center rounded-3xl">
      <BottomNavItem
        href="/"
        icon={<Home size={20} />}
        label="Trang chủ"
        active={pathname === "/"}
      />

      <div className="flex items-center gap-2">
        <TeacherToggle showLabel={false} className="!py-1.5 !px-2.5 !rounded-xl !min-h-[40px]" />
        <ThemeToggle showLabel={false} className="!py-1.5 !px-2.5 !rounded-xl !min-h-[40px]" />
      </div>
    </div>
  );
}

export function Navigation({ lessons }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav>
      {/* Mobile Bottom Navigation */}
      <BottomNav pathname={pathname} />
    </nav>
  );
}
