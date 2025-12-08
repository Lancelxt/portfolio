"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export function Button({ children, href, onClick, variant = "primary" }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all"
  const primaryStyle = {
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "white",
  }
  const secondaryClasses = "border border-purple-500 text-purple-500 hover:bg-purple-500/10"

  if (variant === "primary") {
    const content = (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} shadow-lg shadow-purple-500/50`}
        style={primaryStyle}
        onClick={onClick}
      >
        {children}
      </motion.button>
    )

    if (href) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      )
    }
    return content
  }

  const classes = `${baseClasses} ${secondaryClasses}`
  const content = (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={classes} onClick={onClick}>
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return content
}
