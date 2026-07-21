'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, FileText, ArrowRight, Phone } from 'lucide-react'
import { personalData } from '../config/data'

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/40 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Let&apos;s build something{' '}
            <span className="gradient-text">impactful</span> together.
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all group"
              style={{ 
                background: 'linear-gradient(to right, var(--accent), #764ba2)',
                boxShadow: '0 10px 30px -10px var(--accent)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={`tel:${personalData.mobile}`}
              className="flex items-center gap-3 px-8 py-4 glass rounded-lg font-semibold border transition-all group"
              style={{ 
                color: 'var(--text-primary)',
                borderColor: 'var(--border)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass rounded-lg font-semibold border transition-all group"
              style={{ 
                color: 'var(--text-primary)',
                borderColor: 'var(--border)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={personalData.resume}
              download
              className="flex items-center gap-3 px-8 py-4 glass rounded-lg font-semibold border transition-all group"
              style={{ 
                color: 'var(--text-primary)',
                borderColor: 'var(--border)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p>Available for full-time roles, consulting, and interesting side projects.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}