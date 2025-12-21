"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"

const experiences = [
  {
    company: "Infinitraq",
    role: "Software Engineer",
    period: "Dec 2024 - Present",
    description:
      "Full-stack development with cloud technologies, building scalable APIs and deploying to cloud infrastructure.",
  },
  {
    company: "Parcelpicks",
    role: "Frontend Developer",
    period: "Oct 2025 - Present",
    description: "Developing a role based portal for handling or performing courier shipment related actions using React.js",
  },
  {
    company: "Parcelpicks",
    role: "WordPress Developer",
    period: "Jun 2025 - Aug 2025",
    description: "Website development and maintenance, customizing themes and plugins for client requirements.",
  },
  {
    company: "Callo",
    role: "Software Engineer",
    period: "Jun 2025 - Sep 2025",
    description: "Full-stack development with Next.js,Nest,js building UI/UX and scalable APIs and deploying to cloud infrastructure.",
  },
  {
    company: "Amigo",
    role: "Full Stack Developer",
    period: "May 2024 - Sep 2024",
    description: "Full-stack mobile application development with React Native and Nest.js with improved performance and optimisation and with good UI/UX.",
  },
  {
    company: "ThokBajaar",
    role: "Frontend Developer",
    period: "Sep 2023 - June 2024",
    description: "Full-stack mobile application development with React Native and Nest.js with improved performance and optimisation and with good UI/UX.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Experience{" "}
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
            Timeline
          </h2>
        </SlideUp>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <SlideUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="bg-[#1a1a2e] border border-[#2d2d44] rounded-lg p-6 md:p-8 transition-all hover:border-[#6366f1]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-[#6366f1] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </motion.div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
