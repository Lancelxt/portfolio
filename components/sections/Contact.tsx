"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { SlideUp } from "../animations/SlideUp"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e]">
      <div className="max-w-2xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
        </SlideUp>

        <SlideUp delay={0.1}>
          <p className="text-center text-muted text-lg mb-12">
            I'm always interested in hearing about new opportunities and interesting projects.
          </p>
        </SlideUp>

        <SlideUp delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-lg p-8 space-y-6 border border-[#2d2d44] bg-[#1a1a2e]"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d44] border border-[#3d3d5c] text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#6366f1] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d44] border border-[#3d3d5c] text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#6366f1] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d44] border border-[#3d3d5c] text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              style={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              }}
              className="w-full py-3 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </SlideUp>
      </div>
    </section>
  )
}
