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
      className="text-lg md:text-xl leading-relaxed [&:not(:first-child)]:mt-5 text-slate-800 dark:text-slate-200 font-normal"
      {...props}
    />
  );
}

export function MDXUl(props: any) {
  return (
    <ul
      className="my-4 ml-8 list-disc text-slate-800 dark:text-slate-200 font-normal space-y-2 text-lg md:text-xl leading-relaxed"
      {...props}
    />
  );
}

export function MDXOl(props: any) {
  return (
    <ol
      className="my-4 ml-8 list-decimal text-slate-800 dark:text-slate-200 font-normal space-y-2 text-lg md:text-xl leading-relaxed"
      {...props}
    />
  );
}

export function MDXA(props: any) {
  return (
    <a
      className="font-bold text-sky-600 dark:text-sky-400 hover:underline decoration-2 underline-offset-4 transition-all"
      {...props}
    />
  );
}

export function MDXThead(props: any) {
  return (
    <thead
      className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 uppercase font-bold text-sm md:text-base tracking-wider border-b border-slate-200 dark:border-slate-700"
      {...props}
    />
  );
}

export function MDXTbody(props: any) {
  return (
    <tbody
      className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-normal text-base md:text-lg"
      {...props}
    />
  );
}

export function MDXTr(props: any) {
  return (
    <tr
      className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
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
      className="px-6 py-4 border-r border-slate-100 dark:border-slate-800 last:border-0"
      {...props}
    />
  );
}

export function MDXHr(props: any) {
  return (
    <hr
      className="my-10 border-t border-slate-200 dark:border-slate-800 rounded-full w-1/4 mx-auto"
      {...props}
    />
  );
}

export function MDXCode(props: any) {
  return (
    <code
      className="font-mono px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold text-sm md:text-base border border-slate-200/60 dark:border-slate-700/60"
      {...props}
    />
  );
}
