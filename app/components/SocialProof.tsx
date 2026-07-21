'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import { personalData } from '../config/data'

function Testimonial({ testimonial, index }: {
  testimonial: typeof personalData.testimonials[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="glass rounded-2xl p-8 relative"
    >
      <Quote className="w-12 h-12 mb-4" style={{ color: 'var(--accent)/50' }} />
      <p className="text-lg mb-6 italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="border-t pt-4" style={{ borderColor: 'var(--border)' }}>
        <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{testimonial.author}</div>
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {testimonial.role} at {testimonial.company}
        </div>
      </div>
    </motion.div>
  )
}

function Achievement({ achievement, index }: {
  achievement: typeof personalData.achievements[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
      className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
    >
      <div className="text-4xl mb-3">{achievement.icon}</div>
      <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{achievement.title}</div>
    </motion.div>
  )
}

export default function SocialProof() {
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
            What <span className="gradient-text">Others Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {personalData.testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalData.achievements.map((achievement, index) => (
            <Achievement key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}