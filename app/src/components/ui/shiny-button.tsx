"use client";

import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ShinyButtonProps extends ComponentPropsWithoutRef<"a"> {
  shinyWidth?: number;
  children: ReactNode;
}

export function ShinyButton({
  shinyWidth = 160,
  className,
  style,
  children,
  ...props
}: ShinyButtonProps) {
  const mergedStyle: CSSProperties & { "--shiny-width": string } = {
    "--shiny-width": `${shinyWidth}px`,
    ...(style as CSSProperties),
  };

  return (
    <a
      {...props}
      style={mergedStyle}
      className={cn(
        // Base CTA styling
        "group relative inline-flex items-center gap-3 rounded-full bg-[var(--palette-grey-1200)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--palette-grey-900)]",
        // Shiny overlay on background
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:via-50% before:to-transparent before:opacity-80 before:blur-[1px] before:bg-[length:var(--shiny-width)_100%] before:bg-no-repeat before:bg-[position:0_0] before:animate-shiny-text",
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
    </a>
  );
}
