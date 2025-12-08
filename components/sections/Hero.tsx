"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

const techIcons = ["React", "Node.js", "AWS", "Docker", "TypeScript", "DevOps"]

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="text-center">
          <motion.div variants={itemVariants}>
            <p className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4">
              Welcome to my portfolio
            </p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Software Engineer <br />
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              to DevOps
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8">
            Transitioning from full-stack development to DevOps engineering with 2 years of experience in building
            scalable cloud infrastructure and automating deployment pipelines.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" href="#projects">
              View Projects
            </Button>
            <Button variant="secondary" href="#contact">
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 justify-center"
          >
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full border border-[#2d2d44] text-muted text-sm hover:border-[#6366f1] transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating animation for scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center mt-20"
        >
          <div className="text-muted">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
