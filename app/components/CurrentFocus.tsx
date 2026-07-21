'use client'

import { motion } from 'framer-motion'
import { Rocket, Code2, Palette, Briefcase, Brain, Network, Sparkles } from 'lucide-react'

const focusItems = [
  {
    icon: Rocket,
    title: 'Building Restora MVP',
    status: 'In Progress',
    description: 'Developing the core QR ordering and kitchen console modules for launch.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Code2,
    title: 'Learning React & Next.js 16',
    status: 'Active Daily',
    description: 'Deep-diving into App Router, React Server Components, and performance tuning.',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    icon: Palette,
    title: 'Improving UI/UX Craftsmanship',
    status: 'Design Systems',
    description: 'Studying Apple, Linear, and Stripe design patterns for world-class micro-interactions.',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: Briefcase,
    title: 'Preparing for Internships',
    status: 'Goal 2026',
    description: 'Building production-grade projects and refining technical communication skills.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: Brain,
    title: 'Practicing DSA & Problem Solving',
    status: 'Daily Habit',
    description: 'Solving algorithmic problems to sharpen logical efficiency and data structure mastery.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Network,
    title: 'Learning System Design',
    status: 'Architecture',
    description: 'Understanding scalable web APIs, database index optimization, and server caching.',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
]

export default function CurrentFocus() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 shadow-xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            Active Priorities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Current Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed"
          >
            What I&apos;m actively dedicating my time and energy toward right now.
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft hover:shadow-lg hover:border-brand-indigo/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 group-hover:bg-brand-indigo group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.color}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-indigo transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
