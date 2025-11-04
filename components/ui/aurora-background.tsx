"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-white dark:bg-zinc-900 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `[--aurora:repeating-linear-gradient(100deg,oklch(0.98_0.01_210)_10%,oklch(0.97_0.02_210)_15%,oklch(0.94_0.04_210)_20%,oklch(0.98_0.01_210)_25%,oklch(0.97_0.02_210)_30%)]
            [background-image:var(--aurora)]
            [background-size:200%]
            [background-position:50%_50%]
            blur-xl
            after:content-[""] after:absolute after:inset-0 
            after:[background-image:var(--aurora)] 
            after:[background-size:200%] 
            after:animate-aurora 
            after:[background-attachment:fixed] 
            pointer-events-none
            absolute -inset-[10px] opacity-60 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
