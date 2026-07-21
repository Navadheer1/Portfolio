'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { personalData } from '../config/data'

function ProcessStep({ step, index }: {
  step: typeof personalData.workProcess[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass rounded-2xl p-8 relative"
    >
      <div className="flex items-start gap-6">
        <div className="text-4xl">{step.icon}</div>
        <div className="flex-1">
          <div className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>{step.step}</div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
        </div>
      </div>
      
      {index < personalData.workProcess.length - 1 && (
        <motion.div
          className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </motion.div>
      )}
    </motion.div>
  )
}

export default function HowIWork() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            A systematic approach to building exceptional software
          </p>
        </motion.div>

        <div className="space-y-8">
          {personalData.workProcess.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}