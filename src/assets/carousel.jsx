import React from "react";

export function Carousel({ logos }) {
  return (
    <div className="w-full relative flex overflow-x-hidden bg-scrollerColor gap-4">
      <div className="animate-marquee top-0 py-6 flex whitespace-nowrap flex-shrink-0 gap-4">
        {logos.map((logo) => (
          <div
            key={`A${logo.name}`}
            className="w-48 h-24 px-5 py-4 bg-(--bg-panel) border-(--border-soft) border rounded-lg flex items-center justify-center shrink-0"
          >
            <img
              src={logo.logo}
              alt="Placeholder"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
  
      <div className="animate-marquee top-0 py-6 flex whitespace-nowrap flex-shrink-0 gap-4">
        {logos.map((logo) => (
          <div
            key={`B${logo.name}`}
            className="w-48 h-24 px-5 py-4 bg-(--bg-panel) border-(--border-soft) border rounded-lg flex items-center justify-center shrink-0"
          >
            <img
              src={logo.logo}
              alt="Placeholder"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}