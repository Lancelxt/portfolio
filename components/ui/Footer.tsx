"use client"

import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Email", url: "mailto:hello@example.com" },
  ]

  return (
    <footer className="bg-[#0f0f23] border-t border-[#2d2d44] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold gradient-text mb-2">Dev.</h3>
            <p className="text-muted text-sm">Software Engineer transitioning to DevOps</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="text-muted transition-colors hover:text-purple-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#2d2d44] text-center text-muted text-sm"
        >
          <p>© 2025 All rights reserved. Built with Next.js & Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  )
}
