"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react'

/**
 * ContactSection
 * Part of the 'Midnight Minimalist' overhaul.
 * Focuses on extreme clarity and bold typography.
 */
export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Let's build <br />
              <span className="text-amber-400 italic">something</span> great.
            </h2>
            <p className="mb-12 max-w-md text-lg leading-relaxed text-slate-400">
              Currently open to new opportunities and technical collaborations. 
              Reach out if you're looking for resilient engineering and premium interfaces.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-amber-400 group-hover:bg-amber-400/10 transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-semibold text-white">malyaj@armory.io</div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-amber-400 group-hover:bg-amber-400/10 transition-all">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg font-semibold text-white">New Delhi, India</div>
                </div>
              </div>
            </div>

            {/* Simple Social Icons */}
            <div className="mt-12 flex gap-4">
              <a href="#" className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/[0.01] p-10 backdrop-blur-3xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="ml-1 text-[11px] font-medium text-slate-500">Your name</label>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 text-sm font-medium text-white outline-none focus:border-amber-400/30 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-[11px] font-medium text-slate-500">Email address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 text-sm font-medium text-white outline-none focus:border-amber-400/30 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-[11px] font-medium text-slate-500">Message</label>
                <textarea 
                  placeholder="Tell me about your project"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 text-sm font-medium text-white outline-none focus:border-amber-400/30 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-400 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300 active:scale-95">
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
