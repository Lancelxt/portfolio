"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <SlideUp>
          <div className="mb-20 border-b border-white/5 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3">About me</h2>
              <p className="text-slate-400 text-base italic">The architect behind the systems.</p>
            </div>
          </div>
        </SlideUp>

        <div className="grid md:grid-cols-12 gap-12 mb-20 items-center">
          <div className="md:col-span-4 lg:col-span-3">
            <SlideUp delay={0.1}>
              <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] group"
              >
                <Image
                  src="/pfp.jfif"
                  alt="Profile photo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-amber-400/5 mix-blend-overlay" />
              </motion.div>
            </SlideUp>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <SlideUp delay={0.2}>
              <div className="space-y-6 max-w-3xl">
                <p className="text-xl text-white font-semibold leading-snug">
                  Merging technical precision with high-performance architecture.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  I am a software engineer with a strategic focus on bridging the gap between sophisticated application development and resilient cloud infrastructure. With over 2 years of hands-on experience, I specialize in building systems that are not only functional but architecturally sound and horizontally scalable.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  My philosophy is rooted in "Resilient Engineering"—ensuring every line of code contributes to a system's ability to evolve, scale, and maintain absolute reliability in production environments.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SlideUp delay={0.3}>
            <div className="border border-white/5 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-3xl hover:border-amber-400/20 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Career progression
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Software Developer", sub: "Full-stack development" },
                  { title: "Cloud Infrastructure", sub: "AWS & containerization" },
                  { title: "DevOps Engineer (Current)", sub: "Pipeline automation & deployment" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-[10px] font-mono text-amber-400/40 mt-1">0{i+1}</div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="border border-white/5 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-3xl hover:border-amber-400/20 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Fun facts
              </h3>
              <ul className="space-y-4 text-slate-400">
                {[
                  "Passionate about automation and infrastructure optimization",
                  "Enjoy learning new tools and frameworks",
                  "Active open-source contributor and community member",
                  "Love mentoring and helping others grow in tech",
                  "Exploring the convergence of AI agents and automated infrastructure"
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-amber-400 mt-1">→</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
