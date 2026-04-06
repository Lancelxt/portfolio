"use client"

import React from 'react'
import { InteractiveDots } from './InteractiveDots'

interface GlowContainerProps {
  children: React.ReactNode
}

/**
 * GlowContainer
 * Wraps the application and provides the interactive particle background.
 * Part of the 'Midnight Minimalist' design overhaul.
 */
export function GlowContainer({ children }: GlowContainerProps) {
  return (
    <div className="relative min-h-screen w-full bg-black text-slate-200 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Deep Black Gradient Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_#0a0a0a_0%,_#000000_100%)]" />

      {/* Global Particle Background */}
      <InteractiveDots />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle Noise/Grain Effect for premium texture */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />
    </div>
  )
}
