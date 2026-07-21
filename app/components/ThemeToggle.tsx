'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (newTheme: 'dark' | 'light') => {
    document.documentElement.setAttribute('data-theme', newTheme === 'light' ? 'light' : '')
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full glass cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90,
            scale: theme === 'dark' ? 1 : 0.5
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon 
            size={20} 
            className="text-gray-300 group-hover:text-white transition-colors"
            style={{ color: 'var(--text-secondary)' }} 
          />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 90,
            scale: theme === 'light' ? 1 : 0.5
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun 
            size={20} 
            className="text-yellow-500 group-hover:text-yellow-400 transition-colors" 
          />
        </motion.div>
      </div>
      
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'light' 
            ? '0 0 20px rgba(234, 179, 8, 0.3)' 
            : '0 0 20px rgba(148, 163, 184, 0.2)'
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )
}
