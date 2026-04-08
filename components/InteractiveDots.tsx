"use client"

import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseX: number
  baseY: number
  density: number
}

/**
 * InteractiveDots
 * A high-performance canvas-based particle system.
 * Particles move continuously and gravitate towards the mouse cursor.
 */
export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 480

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 1.0,
          baseX: x,
          baseY: y,
          density: Math.random() * 30 + 1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Base velocity (Subtle jitter)
        p.x += p.vx
        p.y += p.vy

        // Mouse chasing force (Applied to ALL particles)
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy) || 1

        // Force decreases with distance, but always attracts
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        
        // Attraction constant - higher makes them move faster toward cursor
        const attractionBase = 0.05
        const force = attractionBase * p.density * (1 / Math.sqrt(distance + 50)) 

        p.x += forceDirectionX * force * 15
        p.y += forceDirectionY * force * 15

        // Boundary check (Bounce off edges to keep swarming)
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.fillStyle = "rgba(251, 191, 36, 0.4)" // Amber 400
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      style={{ filter: "blur(0.8px)" }}
    />
  )
}
