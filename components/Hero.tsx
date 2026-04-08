"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronRight, ArrowDown } from 'lucide-react'

/**
 * Hero Component
 * The central focus of the 'Midnight Minimalist' design.
 * Uses bold Inter typography and clean motion without parallax interference.
 */
export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 max-w-5xl"
      >
        {/* Minimal Status Indicator */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-medium text-amber-400">Available for new projects.</span>
        </motion.div>

        {/* High-Impact Typography (Inter) */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl font-extrabold tracking-tight text-white md:text-8xl lg:text-9xl"
        >
          Crafting <br />
          <span className="text-amber-400 italic">resilient</span> <br />
          systems.
        </motion.h1>

        {/* Optimized Lead Text for SEO */}
        <motion.p 
          variants={itemVariants}
          className="mt-10 mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          Malyaj Singh — Full-stack software engineer specializing in 
          resilient cloud architecture, automated DevOps pipelines, and high-performance digital systems.
        </motion.p>

        {/* Minimalist CTAs */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <button onClick={() => window.location.href = "#projects"} className="group flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-300 hover:scale-[1.02] active:scale-95">
            View projects
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          
          <button onClick={() => window.location.href = "#contact"} className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
