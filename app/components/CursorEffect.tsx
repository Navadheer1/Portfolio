'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Ensure this component only renders on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isClient])

  if (!isClient) return null

  return (
    <>
      {/* Cursor trail effect */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          opacity: isHovering ? 0.3 : 0,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary-500 blur-sm" />
      </div>
    </>
  )
}