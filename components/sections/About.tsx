"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e]">
      <div className="max-w-5xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
        </SlideUp>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <SlideUp delay={0.1}>
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-[#6366f1] shadow-lg shadow-[#6366f1]/20">
                <Image
                  src="/professional-developer-headshot.png"
                  alt="Professional photo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </SlideUp>

          <SlideUp delay={0.2} className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-lg text-muted leading-relaxed">
                I'm a passionate software engineer with 2 years of hands-on experience building scalable applications.
                Currently, I'm transitioning into DevOps engineering to leverage my development background in
                infrastructure automation and cloud architecture.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                My journey in tech has taught me the importance of clean code, efficient systems, and continuous
                learning. I thrive in collaborative environments where I can contribute to meaningful projects and help
                teams scale their operations.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                When I'm not coding or architecting infrastructure, I enjoy exploring new technologies, contributing to
                open-source projects, and mentoring junior developers.
              </p>
            </div>
          </SlideUp>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <SlideUp delay={0.3}>
            <div
              className="border border-[#2d2d44] rounded-lg p-6 md:p-8"
              style={{
                background: "rgba(26, 26, 46, 0.5)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Career Progression
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#6366f1] mt-2"></div>
                  <div>
                    <p className="font-semibold">Software Developer</p>
                    <p className="text-sm text-muted">Full-stack development</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#8b5cf6] mt-2"></div>
                  <div>
                    <p className="font-semibold">Cloud Infrastructure</p>
                    <p className="text-sm text-muted">AWS & containerization</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#6366f1] mt-2"></div>
                  <div>
                    <p className="font-semibold">DevOps Engineer (Current)</p>
                    <p className="text-sm text-muted">Pipeline automation & deployment</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div
              className="border border-[#2d2d44] rounded-lg p-6 md:p-8"
              style={{
                background: "rgba(26, 26, 46, 0.5)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fun Facts
              </h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-1">→</span>
                  <span>Passionate about automation and infrastructure optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1">→</span>
                  <span>Enjoy learning new tools and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-1">→</span>
                  <span>Active open-source contributor and community member</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1">→</span>
                  <span>Love mentoring and helping others grow in tech</span>
                </li>
              </ul>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
