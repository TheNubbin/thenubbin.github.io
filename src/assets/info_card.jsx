import React from "react";
import { Card, CardHeader, CardTitle, CardFooter, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Info({feature, rightAligned, x, y, scale, pin, pinU, pinV}) {
  return (
      <div 
        className={cn("w-full bg-contain bg-no-repeat bg-center relative flex items-center", {
          "justify-end": rightAligned,
        })}
        style={{
          aspectRatio: feature.img_ar,
          backgroundImage: `url(${feature.img})`,
        }}
        data-nubbin-x={x}
        data-nubbin-y={y}
        data-nubbin-scale={scale}
        data-nubbin-pin={pin ? "true" : undefined}
        data-nubbin-pin-u={pinU}
        data-nubbin-pin-v={pinV}
      >
        <Card
          className={cn("max-h-[80%] w-[clamp(8rem,35%,36rem)] backdrop-blur-sm rounded-[1rem] border-white/10 text-white shadow-2xl shadow-black/20 bg-white/5 py-[clamp(0rem,2vw,2.5rem)] px-[clamp(0rem,1vw,1.5rem)]", {
            'mr-[clamp(0.1rem,3vw,5rem)]' : rightAligned,
            'ml-[clamp(0.1rem,3vw,5rem)]' : !rightAligned,

          })}
        >
          <CardHeader>
            <CardTitle
              className="
                font-bold text-white/95
                text-sm sm:text-2xl md:text-3xl lg:text-5xl"
            >
              {feature.eyebrow}
              <span 
                className={cn("block bg-gradient-to-r bg-clip-text text-transparent", {
                  "from-red-400 via-red-800 to-violet-500": !rightAligned,
                  "from-blue-400 to-violet-500": rightAligned,
                })}
              >
                {feature.keyword}

              </span>
            </CardTitle>
          </CardHeader>

          <CardContent
            className="
              overflow-auto
              text-white/90
              text-sm sm:text-base md:text-lg lg:text-xl"
              
          >
            {feature.description}
          </CardContent>
        </Card>
      </div>
  )
}