"use client"

import { useState, useEffect, useCallback, useRef } from 'react'

interface MouseState {
  x: number
  y: number
  elementX: number
  elementY: number
  isHovering: boolean
}

/**
 * useMouseGlow
 * A specialized hook for the 'Antigravity' hover effect.
 * Tracks mouse position relative to both the window and a specific container.
 * Returns coordinates for the radial glow and tilt/parallax factors.
 */
export function useMouseGlow() {
  const [mousePos, setMousePos] = useState<MouseState>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    isHovering: false,
  })

  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({
      x: e.clientX,
      y: e.clientY,
      elementX: x,
      elementY: y,
      isHovering: true,
    })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setMousePos((prev) => ({ ...prev, isHovering: true }))
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, isHovering: false }))
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  /**
   * getTiltStyles
   * Calculates the rotation based on mouse position within the element.
   * Useful for the 'Tilt/Parallax' effect.
   */
  const getTiltStyles = (intensity: number = 10) => {
    if (!mousePos.isHovering || !containerRef.current) return {}
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((mousePos.elementY - centerY) / centerY) * -intensity
    const rotateY = ((mousePos.elementX - centerX) / centerX) * intensity

    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    }
  }

  return { 
    containerRef, 
    mousePos, 
    getTiltStyles 
  }
}
