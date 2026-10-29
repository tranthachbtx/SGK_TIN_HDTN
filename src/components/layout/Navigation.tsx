"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Settings } from "lucide-react";
import { TeacherToggle } from "@/components/ui/TeacherToggle";

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
        "flex flex-col items-center gap-1 p-2 transition-all min-h-[44px] min-w-[44px] justify-center",
        active ? "text-primary scale-105 font-black" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
    <div className="md:hidden fixed bottom-3 left-4 right-4 glass dark:bg-slate-900/90 border border-white/60 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.15)] z-40 px-6 py-2 flex justify-around items-center rounded-[2rem] backdrop-blur-2xl">
      <BottomNavItem
        href="/"
        icon={<Home size={20} />}
        label="Trang chủ"
        active={pathname === "/"}
      />

      <div className="px-2">
        <TeacherToggle className="!py-1.5 !px-3 !rounded-xl !text-xs !w-auto !border-slate-200 dark:!border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white" />
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
