"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import ContactForm from '../components/ContactForm'
import { Github, Menu } from 'lucide-react'

/**
 * Home Page
 * Main assembly of the 'Midnight Minimalist' design overhaul.
 * Focuses on bold Inter typography and the high-performance particle interaction.
 */
export default function Home() {
  return (
    <main className="relative">
      {/* Minimalist Navigation */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-8 md:px-12 pointer-events-none">
        <div className="flex items-center gap-2 group pointer-events-auto">
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-sm font-bold tracking-tight text-white md:text-lg">
            Armory<span className="text-amber-400">.dev</span>
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex pointer-events-auto">
          {['Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="https://github.com/Lancelxt" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
             <Github className="h-4 w-4 text-slate-400" />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-xl bg-white/[0.02] border border-white/5 pointer-events-auto">
          <Menu className="h-5 w-5 text-slate-400" />
        </button>
      </nav>

      {/* Overhauled Sections */}
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />

      {/* Minimalist Footer */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-[11px] font-medium text-slate-600">
            © 2026 Malyaj Singh — Built with precision using Armory OS.
          </div>
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                <span className="text-[11px] font-medium text-slate-600">All systems nominal</span>
             </div>
             <div className="text-[11px] font-mono text-slate-700">v2.1.0-midnight</div>
          </div>
        </div>
      </footer>

      {/* Floating Design Elements */}
      <div className="pointer-events-none fixed left-12 bottom-12 z-40 hidden flex-col gap-4 lg:flex">
         <div className="h-16 w-[1px] bg-slate-800" />
         <div className="text-[9px] font-mono vertical-text tracking-[0.2em] text-slate-700">mms_v2</div>
      </div>
    </main>
  )
}
