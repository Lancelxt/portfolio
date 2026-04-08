"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Server, Layout, Cpu, ShieldCheck } from 'lucide-react'

const SKILL_GROUPS = [
  {
    title: "Frontend engineering",
    icon: <Layout className="h-5 w-5 text-amber-400" />,
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer motion"]
  },
  {
    title: "Backend & orchestration",
    icon: <Server className="h-5 w-5 text-amber-400" />,
    skills: ["Node.js", "Nest.js", "PostgreSQL", "Redis", "Prisma", "Go"]
  },
  {
    title: "Cloud infrastructure",
    icon: <Cpu className="h-5 w-5 text-amber-400" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub actions"]
  },
  {
    title: "Security & monitoring",
    icon: <ShieldCheck className="h-5 w-5 text-amber-400" />,
    skills: ["JWT auth", "Prometheus", "Grafana", "Sentry", "Vercel analytics"]
  }
]

/**
 * Skills Section
 * Part of the 'Midnight Minimalist' overhaul.
 * Focuses on a clean, monochromatic grid layout.
 */
export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/5 pb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Technical arsenal</h2>
          <p className="text-slate-400 text-sm italic">Specialized in building resilient digital ecosystems.</p>
        </div>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div 
              key={group.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-amber-400/20 transition-all backdrop-blur-3xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-400/5 ring-1 ring-inset ring-amber-400/10 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(251,191,36,0.1)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  {group.icon}
                </div>
                <div className="text-[10px] font-medium text-slate-600 uppercase tracking-widest hidden group-hover:block">Expertise</div>
              </div>

              <h3 className="mb-4 text-base font-semibold text-white tracking-tight">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[12px] text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                   • {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
