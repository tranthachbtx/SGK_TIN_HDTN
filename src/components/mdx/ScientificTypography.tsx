import React from "react";
import { cn } from "@/lib/utils";

export function MDXP(props: any) {
  const { children } = props;

  // Check if children contain a summary tag to avoid invalid HTML nesting (p > summary)
  const isSummary = React.Children.toArray(children).some(
    (child: any) =>
      child &&
      (child.type === "summary" ||
        child.type === "details" ||
        (child.props &&
          (child.props.mdxType === "summary" ||
            child.props.originalType === "summary")))
  );

  if (isSummary) {
    return <>{children}</>;
  }

  return (
    <p
      className="text-lg md:text-xl leading-relaxed [&:not(:first-child)]:mt-5 text-slate-800 dark:text-slate-100 font-medium"
      {...props}
    />
  );
}

export function MDXUl(props: any) {
  return (
    <ul
      className="my-4 ml-8 list-disc text-slate-800 dark:text-slate-100 font-medium space-y-2 text-lg md:text-xl leading-relaxed"
      {...props}
    />
  );
}

export function MDXOl(props: any) {
  return (
    <ol
      className="my-4 ml-8 list-decimal text-slate-800 dark:text-slate-100 font-medium space-y-2 text-lg md:text-xl leading-relaxed"
      {...props}
    />
  );
}

export function MDXA(props: any) {
  return (
    <a
      className="font-black text-sky-600 dark:text-sky-400 hover:underline decoration-2 underline-offset-4 transition-all"
      {...props}
    />
  );
}

export function MDXThead(props: any) {
  return (
    <thead
      className="bg-[#d5d5d5] dark:bg-[#1a1a1a] text-slate-800 dark:text-slate-100 uppercase font-black text-sm md:text-base tracking-wider"
      {...props}
    />
  );
}

export function MDXTbody(props: any) {
  return (
    <tbody
      className="divide-y-2 divide-black/5 dark:divide-white/10 text-slate-800 dark:text-slate-100 font-semibold text-base md:text-lg"
      {...props}
    />
  );
}

export function MDXTr(props: any) {
  return (
    <tr
      className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      {...props}
    />
  );
}

export function MDXTh(props: any) {
  return <th className="px-6 py-4" {...props} />;
}

export function MDXTd(props: any) {
  return (
    <td
      className="px-6 py-4 border-r border-black/5 dark:border-white/10 last:border-0"
      {...props}
    />
  );
}

export function MDXHr(props: any) {
  return (
    <hr
      className="my-10 border-t-2 border-black/10 dark:border-white/10 rounded-full w-1/3 mx-auto"
      {...props}
    />
  );
}

export function MDXCode(props: any) {
  return (
    <code
      className="font-mono px-2 py-0.5 rounded-lg bg-[#d5d5d5] dark:bg-[#2d2d2d] text-sky-700 dark:text-sky-300 font-bold text-sm md:text-base"
      {...props}
    />
  );
}
