'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, Server, Network, ShoppingBag, HeartPulse, Utensils, Flag, Sparkles } from 'lucide-react'

const timelineSteps = [
  {
    icon: GraduationCap,
    title: 'Started B.Tech Computer Science',
    date: 'Step 1',
    description: 'Began CS degree focusing on algorithms, data structures, and software engineering fundamentals.',
    color: 'bg-blue-500 text-white',
    badge: 'Education',
  },
  {
    icon: Code,
    title: 'Learned HTML, CSS & JavaScript',
    date: 'Step 2',
    description: 'Mastered web fundamentals, responsive layouts, DOM manipulation, and interactive client logic.',
    color: 'bg-emerald-500 text-white',
    badge: 'Foundation',
  },
  {
    icon: Server,
    title: 'Started Full Stack Development',
    date: 'Step 3',
    description: 'Expanded into React, Next.js, Django, REST APIs, and relational database architecture.',
    color: 'bg-indigo-500 text-white',
    badge: 'Skill Shift',
  },
  {
    icon: Network,
    title: 'Built FounderX',
    date: 'Step 4',
    description: 'Architected a networking platform concept connecting founders, developers, investors, and innovators.',
    color: 'bg-purple-500 text-white',
    badge: 'Project 1',
  },
  {
    icon: ShoppingBag,
    title: 'Built ServiceHub',
    date: 'Step 5',
    description: 'Engineered a service marketplace connecting users with trusted service providers, ratings, and booking systems.',
    color: 'bg-amber-500 text-white',
    badge: 'Project 2',
  },
  {
    icon: HeartPulse,
    title: 'Built MediQuick',
    date: 'Step 6',
    description: 'Created a healthcare platform simplifying medicine discovery, inventory, order tracking, and vendor dashboards.',
    color: 'bg-rose-500 text-white',
    badge: 'Project 3',
  },
  {
    icon: Utensils,
    title: 'Currently Building Restora',
    date: 'Active Focus',
    description: 'Building an all-in-one Restaurant Operating System featuring QR Ordering, Kitchen OS, Reservations & Analytics.',
    color: 'bg-emerald-600 text-white ring-4 ring-emerald-100',
    badge: 'Active MVP',
    isCurrent: true,
  },
  {
    icon: Flag,
    title: 'Future Goal',
    date: 'Long-Term Vision',
    description: 'Launch products used by millions of people while building a category-defining technology company.',
    color: 'bg-slate-900 text-white',
    badge: 'Dream Goal',
    isGoal: true,
  },
]

export default function About() {
  return (
    <section id="journey" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 shadow-xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            Interactive Roadmap
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            My Journey as a Builder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            From writing my first line of JavaScript to architecting full-stack web platforms and building active startup MVPs.
          </motion.p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-emerald via-brand-indigo to-slate-300 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-0`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-2xl ${step.color} shadow-md flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:pr-6' : 'sm:pl-6'}`}>
                    <div
                      className={`p-6 rounded-2xl border ${
                        step.isCurrent
                          ? 'bg-emerald-50/50 border-emerald-300 shadow-md ring-2 ring-emerald-500/20'
                          : step.isGoal
                          ? 'bg-slate-900 text-white border-slate-800 shadow-xl'
                          : 'bg-white border-slate-200/80 shadow-card-soft hover:shadow-md hover:border-brand-indigo/30'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            step.isGoal
                              ? 'bg-brand-indigo text-white'
                              : step.isCurrent
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {step.badge}
                        </span>
                        <span className={`text-xs font-semibold ${step.isGoal ? 'text-slate-400' : 'text-slate-400'}`}>
                          {step.date}
                        </span>
                      </div>

                      <h3
                        className={`text-lg font-bold ${
                          step.isGoal ? 'text-white' : 'text-slate-900'
                        } mb-2`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          step.isGoal ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}