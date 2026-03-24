import React from "react";

export function GlowPanel({ children, className = "" }) {
  return <div className={`nubbin-glow-panel ${className}`}>{children}</div>;
}
