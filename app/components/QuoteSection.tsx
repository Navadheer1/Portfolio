'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function QuoteSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-slate-200/60">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-100/50 via-indigo-100/50 to-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-10 shadow-xl shadow-slate-900/10"
        >
          <Quote className="w-8 h-8 text-brand-emerald" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto font-sans"
        >
          &ldquo;Don&apos;t rush the dream. <br />
          <span className="bg-gradient-to-r from-brand-emerald via-brand-indigo to-brand-orange bg-clip-text text-transparent">
            Build the person
          </span>{' '}
          who can achieve the dream.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-0.5 w-12 bg-slate-200" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
            Guiding Motto • Navadheer
          </span>
          <div className="h-0.5 w-12 bg-slate-200" />
        </motion.div>
      </div>
    </section>
  )
}
