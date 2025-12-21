"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "React Native"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "REST APIs"],
    color: "from-green-400 to-emerald-400",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
    color: "from-orange-400 to-red-400",
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Terraform"],
    color: "from-purple-400 to-pink-400",
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Linux", "Electron.js", "Webpack", "ESLint"],
    color: "from-indigo-400 to-purple-400",
  },
]

export function Skills() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e]">
      <div className="max-w-4xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Skills{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &
            </span>{" "}
            Expertise
          </h2>
        </SlideUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-[#1a1a2e] border border-[#2d2d44] rounded-lg p-6"
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-[#2d2d44] text-sm text-[#94a3b8] hover:bg-[#6366f1] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
