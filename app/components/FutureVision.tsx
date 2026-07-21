'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, TrendingUp } from 'lucide-react'
import { personalData } from '../config/data'

export default function FutureVision() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Where I&apos;m heading, not where I&apos;ve been
          </p>
        </motion.div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-8 h-8" style={{ color: 'var(--accent)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>What I&apos;m Building Next</h3>
            </div>
            <ul className="space-y-4">
              {personalData.futureVision.building.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-8 h-8" style={{ color: 'var(--accent)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Where I Want to Grow</h3>
            </div>
            <ul className="space-y-4">
              {personalData.futureVision.growing.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}