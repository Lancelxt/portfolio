"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useMouseGlow } from '../hooks/use-mouse-glow'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

/**
 * ProjectCard Component
 * A premium, glassmorphic card for displaying portfolio projects.
 * Implements 'Antigravity' features: 3D tilt/parallax and mouse-glow interaction.
 */
export default function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }: ProjectCardProps) {
  const { containerRef, getTiltStyles, mousePos } = useMouseGlow()

  return (
    <div 
      ref={containerRef}
      className="group relative h-full w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={getTiltStyles(12)}
        className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300"
      >
        {/* Mouse Glow Overlay (Local to Card) */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.elementX}px ${mousePos.elementY}px, oklch(0.6 0.3 330 / 0.15), transparent 80%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-neon-magenta transition-colors">
            {title}
          </h3>
          <p className="mb-8 flex-grow text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Footer Actions */}
          <div className="mt-auto flex items-center gap-4">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                Codebase
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-neon-cyan hover:brightness-125 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Live Preview
              </a>
            )}
          </div>
        </div>

        {/* Decorative Corner Light */}
        <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/20 blur-3xl transition-transform group-hover:scale-150" />
      </motion.div>
    </div>
  )
}
