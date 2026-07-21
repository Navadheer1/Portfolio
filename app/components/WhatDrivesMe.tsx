'use client'

import { motion } from 'framer-motion'
import { Compass, Lightbulb, Rocket, Users, Wrench } from 'lucide-react'

const principles = [
  {
    icon: Lightbulb,
    title: 'The Core Question',
    text: "Every project begins with one simple question: 'How can this make someone's life easier?'",
    accent: 'border-amber-200 bg-amber-50/50 text-amber-600',
  },
  {
    icon: Wrench,
    title: 'Learning by Building',
    text: 'The best way I learn is by building. Every application I create teaches me something about engineering, design, and users.',
    accent: 'border-emerald-200 bg-emerald-50/50 text-emerald-600',
  },
  {
    icon: Rocket,
    title: 'Creating Real Value',
    text: "My goal isn't simply to write code. It's to build technology that creates real value.",
    accent: 'border-indigo-200 bg-indigo-50/50 text-indigo-600',
  },
]

export default function WhatDrivesMe() {
  return (
    <section className="py-20 bg-slate-50/80 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-brand-indigo border border-slate-200 shadow-xs mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-brand-indigo" />
            Core Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            What Drives Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            I enjoy solving problems through software. Building is my vehicle for understanding the world, mastering software engineering, and creating meaningful impact.
          </motion.p>
        </div>

        {/* 3 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card-soft hover:shadow-xl hover:border-brand-indigo/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border ${item.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Principle {idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-indigo transition-colors" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Story Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-brand-emerald tracking-wide uppercase">My Long-Term Vision</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Building products that solve real-world problems.
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Every line of code I write today prepares me for tomorrow&apos;s challenges as an engineer and entrepreneur.
            </p>
          </div>
          <a
            href="#journey"
            className="shrink-0 px-6 py-3 bg-white text-slate-900 font-bold text-xs rounded-xl shadow hover:bg-brand-emerald hover:text-white transition-colors"
          >
            Explore My Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}
