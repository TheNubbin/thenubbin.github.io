import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, description, className }) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      <p className="nubbin-eyebrow text-xs font-medium">{eyebrow}</p>
      <h2 className="nubbin-section-title text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="nubbin-muted text-sm leading-7 md:text-base">{description}</p>
    </div>
  );
}
