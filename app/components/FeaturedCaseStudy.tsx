'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalData } from '../config/data'

export default function FeaturedCaseStudy() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const featuredProject = personalData.projects.find(
    (p) => p.id === personalData.featuredCaseStudy.projectId
  ) || personalData.projects[0]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Case Study</span>
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Deep dive into engineering decisions
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{featuredProject.title}</h3>
            <p className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>{featuredProject.approach}</p>
            <div style={{ color: 'var(--text-secondary)' }}>{featuredProject.outcome}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>Architecture</h3>
            <div className="space-y-4">
              {personalData.featuredCaseStudy.architecture.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-6 border-l-4"
                  style={{ borderColor: 'var(--accent)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>{layer.layer}</div>
                      <div className="mb-2" style={{ color: 'var(--accent)' }}>{layer.tech}</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{layer.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>User Flow</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalData.featuredCaseStudy.userFlow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass rounded-lg p-6 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: 'var(--accent)' }}>
                    {index + 1}
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>{step}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>Key Engineering Decisions</h3>
            <div className="space-y-6">
              {personalData.featuredCaseStudy.decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.3 + index * 0.15 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                    {decision.decision}
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>{decision.reasoning}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}