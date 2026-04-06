"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: "MovieDB Explorer",
    description: "A high-performance movie database explorer powered by the TMDB API. It features real-time search, dynamic category filtering, and a custom-built immersive UI with smooth React transitions.",
    tags: ["React", "API Integration", "Tailwind", "Motion"],
    liveUrl: "https://portfolio-phi-self-13.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "Glitch Realm E-Commerce",
    description: "A full-stack e-commerce experience featuring a minimalist 'Glitch' aesthetic. Includes integrated inventory tracking, a high-velocity checkout system, and a robust PostgreSQL/Redis backend.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Redis"],
    liveUrl: "https://portfolio-phi-self-13.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "Internal Systems Architecture",
    description: "A specialized internal logistics dashboard built for high-scale fleet operations. It optimizes delivery routes using real-time geolocation data and provides a unified command center for managers.",
    tags: ["Architect", "AWS", "Node.js", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

/**
 * ProjectGrid Component
 * Displays the preserved projects in the new high-aesthetic card format.
 * Uses a staggered reveal animation.
 */
export default function ProjectGrid() {
  return (
    <section className="relative w-full px-6 py-32" id="projects">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start gap-4">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Featured Work</div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">EXPERIENCE <span className="text-neon-cyan">DNA.</span></h2>
          <div className="h-1 w-20 bg-primary/40 rounded-full" />
        </div>

        {/* The Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Decorative Light Streak */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-full -translate-y-1/2 overflow-hidden opacity-10">
          <div className="absolute left-[10%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent" />
        </div>
      </div>
    </section>
  )
}
