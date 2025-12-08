"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"

const projects = [
  {
    title: "Cloud Infrastructure Dashboard",
    description:
      "Real-time monitoring dashboard for AWS resources with automated alerts and performance metrics visualization.",
    tags: ["React", "AWS", "Node.js", "WebSockets"],
    link: "#",
    github: "#",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Automated deployment pipeline using GitHub Actions and Docker, reducing deployment time by 60%.",
    tags: ["GitHub Actions", "Docker", "CI/CD", "Kubernetes"],
    link: "#",
    github: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and order tracking.",
    tags: ["Next.js", "MongoDB", "Stripe", "Express"],
    link: "#",
    github: "#",
  },
  {
    title: "DevOps Toolkit",
    description:
      "Collection of automation scripts and tools for infrastructure provisioning and configuration management.",
    tags: ["Terraform", "Python", "AWS", "Ansible"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </SlideUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)" }}
              className="card-bg rounded-lg p-6 md:p-8 flex flex-col transition-all group"
            >
              <h3
                className="text-xl font-semibold mb-3 transition-all"
                style={{ color: idx % 2 === 0 ? "#6366f1" : "#8b5cf6" }}
              >
                {project.title}
              </h3>
              <p className="text-muted mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded text-xs bg-[#2d2d44] text-[#6366f1]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#6366f1] hover:text-[#8b5cf6] text-sm font-medium transition-colors"
                >
                  Live Demo →
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#6366f1] hover:text-[#8b5cf6] text-sm font-medium transition-colors"
                >
                  GitHub →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
