"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
}

export function SlideUp({ children, delay = 0 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
