"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"

const experiences = [
  {
    company: "Infinitraq",
    role: "Software Engineer",
    period: "Dec 2024 - Jan 2026",
    description:
      "Spearheading full-stack engineering initiatives using cloud-native architectures. Focused on developing high-availability APIs and deploying scalable systems to AWS with a focus on enterprise-grade stability.",
  },
  {
    company: "Parcelpicks",
    role: "Frontend Developer",
    period: "Oct 2025 - Present",
    description: "Architecting a secure, role-based logistics portal using React 18. Optimized complex state management and implemented real-time shipment tracking with high performance and cinematic UI responsiveness.",
  },
  {
    company: "Parcelpicks",
    role: "WordPress Developer",
    period: "Jun 2025 - Aug 2025",
    description: "Advanced custom theme and plugin engineering, optimizing Core Web Vitals and implementing secure server-side logic for high-traffic logistics platforms.",
  },
  {
    company: "Callo",
    role: "Software Engineer",
    period: "Jun 2025 - Sep 2025",
    description: "Built scalable full-stack applications leveraging Next.js and Nest.js. Integrated PostgreSQL for optimized data persistence and deployed redundant systems via robust CI/CD pipelines.",
  },
  {
    company: "Amigo",
    role: "Full Stack Developer",
    period: "May 2024 - Sep 2024",
    description: "Developed performance-optimized mobile applications using React Native and Nest.js. Implemented sophisticated UI/UX patterns and secured cross-platform data synchronization.",
  },
  {
    company: "ThokBajaar",
    role: "Frontend Developer",
    period: "Sep 2023 - June 2024",
    description: "Engineered responsive frontend architectures for high-growth e-commerce platforms. Focused on performance optimization, SEO best practices, and accessible design systems.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <SlideUp>
          <div className="mb-20 border-b border-white/5 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Experience & timeline</h2>
              <p className="text-slate-400 text-base italic">The professional journey of a systems architect.</p>
            </div>
          </div>
        </SlideUp>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <SlideUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 8 }}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 transition-all hover:bg-white/[0.04] hover:border-amber-400/20 backdrop-blur-3xl"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-amber-400/80 font-mono text-xs uppercase tracking-[0.2em] mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm max-w-2xl">{exp.description}</p>
                
                {/* Visual Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
