'use client'

import { motion } from 'framer-motion'
import { Award, Code2, Rocket, HeartHandshake } from 'lucide-react'

const stats = [
  {
    number: '4+',
    label: 'Products Built',
    subtext: 'FounderX, ServiceHub, MediQuick, Restora',
    icon: Rocket,
    accent: 'text-brand-emerald bg-emerald-50 border-emerald-200',
  },
  {
    number: '3+',
    label: 'Major Full Stack Projects',
    subtext: 'End-to-end frontend, APIs, and databases',
    icon: Code2,
    accent: 'text-brand-indigo bg-indigo-50 border-indigo-200',
  },
  {
    number: '1',
    label: 'Hackathon Achievement',
    subtext: 'Rapid prototyping & teamwork under pressure',
    icon: Award,
    accent: 'text-brand-orange bg-amber-50 border-amber-200',
  },
  {
    number: '100%',
    label: 'Passion for Building',
    subtext: 'Dedicated to craftsmanship and constant growth',
    icon: HeartHandshake,
    accent: 'text-rose-600 bg-rose-50 border-rose-200',
  },
]

export default function Achievements() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Real Impact & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Authentic Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            No bloated numbers. Just real work, real builds, and continuous progress.
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl hover:border-brand-emerald/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${stat.accent} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Verified</span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-sans">
                    {stat.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-200 mt-2">{stat.label}</h3>
                </div>
                <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-700/60 leading-relaxed">
                  {stat.subtext}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
