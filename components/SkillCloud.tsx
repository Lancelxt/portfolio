"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Layout, Server, Settings, ShieldCheck, Zap } from 'lucide-react'

const SKILL_GROUPS = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Orchestration",
    icon: <Server className="h-6 w-6 text-accent" />,
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma", "Go"]
  },
  {
    title: "Cloud & DevOps Architecture",
    icon: <Cpu className="h-6 w-6 text-secondary" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"]
  },
  {
    title: "Security & Monitoring",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    skills: ["JWT Auth", "Prometheus", "Grafana", "Vercel Analytics"]
  }
]

/**
 * SkillCloud Component
 * A specialized skill grid for a high-performance engineer.
 * Groups technical competencies and uses a high-aesthetic tech grid style.
 */
export default function SkillCloud() {
  return (
    <section className="relative w-full px-6 py-20 bg-black/40 backdrop-blur-3xl" id="skills">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
             <Zap className="h-3 w-3 text-primary animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl font-black tracking-tight md:text-6xl">THE CORE <span className="text-neon-magenta underline decoration-primary/20 underline-offset-8 italic">STACK.</span></h2>
        </div>

        {/* The Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative flex flex-col rounded-3xl p-8 hover:bg-white/5 transition-all group overflow-hidden border-white/5"
            >
              {/* Decorative Glow */}
              <div className="absolute -left-10 -top-10 h-20 w-20 bg-primary/20 blur-2xl group-hover:bg-primary/40 transition-colors" />
              
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Core Group</div>
              </div>

              <h3 className="mb-6 text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-muted-foreground group-hover:border-primary/20 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Technical Indicator */}
              <div className="mt-8 flex items-center gap-2">
                <Settings className="h-3 w-3 text-white/20 animate-spin-slow" />
                <div className="h-[1px] flex-grow bg-white/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric Background Noise (Scanning Lines) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] overflow-hidden">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    </section>
  )
}
