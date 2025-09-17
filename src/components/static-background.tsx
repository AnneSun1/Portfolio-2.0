"use client"

import type React from "react"

interface StaticBackgroundProps {
  children: React.ReactNode
}

export default function StaticBackground({ children }: StaticBackgroundProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Static Background aligned with hero shader palette (purple ↔ pink ↔ amber) */}
      <div className="absolute z-0 inset-0 bg-gradient-to-br from-[#3b0764]/20 via-[#ec4899]/15 to-[#1e1b4b]/20" />
      <div className="absolute z-0 inset-0 bg-gradient-to-tl from-transparent via-[#f59e0b]/12 to-[#ec4899]/12" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute z-10 inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 7, 100, 0.10) 0%, transparent 65%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.10) 0%, transparent 65%),
                           radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
