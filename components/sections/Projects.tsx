"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'

const PROJECTS = [
  {
    title: "Parcelpicks",
    description: "Architecting a high-performance courier aggregator platform. Engineered complex data dashboards with Recharts, integrated Google Maps API for real-time tracking, and optimized frontend performance for high-concurrency logistics.",
    tags: ["React 19", "Recharts", "Google Maps", "Tailwind"],
    image: null,
    link: "https://parcelpicks.in/",
  },
  {
    title: "Callo",
    description: "Full-stack development for a social media ecosystem dedicated to content creators. Built mission-critical features including secure document signing, automated generation workflows, and a refined account management suite.",
    tags: ["Next.js", "Full-stack", "Document Automation", "UI/UX"],
    image: null,
    link: "https://callo.co.in/",
  },
  {
    title: "Tranquilstay",
    description: "Deployment of a premium static website for an Indian homestay. Focused on superior responsive design and integrated SEO-friendly content to maximize local organic reach and lead generation through serverless contact forms.",
    tags: ["Static Site", "SEO", "Responsive Design", "Serverless"],
    image: null,
    link: "https://tranquilstay.in/",
  },
  {
    title: "Flexo ERP",
    description: "Engineered a custom ERP solution for the flex printing industry. Digitized the entire production lifecycle, eliminating paper workflows and manual inter-departmental communication through automated status-tracking nodes.",
    tags: ["ERP", "Workflow Automation", "Systems Engineering", "Operations"],
    image: null,
  },
]

/**
 * Projects Section
 * Part of the 'Midnight Minimalist' overhaul.
 * Features a media-first, premium project showcase.
 */
export function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="projects" className="py-32 px-6 bg-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 border-b border-white/5 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Featured works</h2>
            <p className="text-slate-400 text-base italic">Digital experiments and engineering feats.</p>
          </div>
        </div>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.title}
              variants={itemVariants}
              className="group relative flex flex-col"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all group-hover:border-amber-400/30">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Play className="h-10 w-10 text-amber-400/20" />
                  </div>
                )}
                
                {/* Modern Overlay (Glassmorphism - Gold Tinted) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-amber-400/5 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 ring-1 ring-inset ring-amber-400/10">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-slate-950 transition-transform active:scale-90 hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-block"
                    >
                      <h3 className="text-2xl font-bold text-white transition-colors hover:text-amber-400">
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  )}
                  <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Project</span>
                </div>
                
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-medium text-slate-500 transition-colors group-hover:text-amber-400"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
