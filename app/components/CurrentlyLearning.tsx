'use client'

import { motion } from 'framer-motion'
import { BookOpen, Compass, CheckCircle2, ArrowRight } from 'lucide-react'

const currentLearning = [
  { name: 'JavaScript', level: 'Advanced', note: 'ES6+, Async/Await, Web APIs' },
  { name: 'React', level: 'Intermediate', note: 'Hooks, State Mgmt, Performance' },
  { name: 'Next.js 16', level: 'Intermediate', note: 'App Router, RSC, Server Actions' },
  { name: 'Django', level: 'Intermediate', note: 'ORM, REST Framework, Auth' },
  { name: 'REST APIs', level: 'Intermediate', note: 'Endpoint architecture, JWT' },
  { name: 'Git & GitHub', level: 'Intermediate', note: 'Branching, PRs, Versioning' },
  { name: 'AI Integration', level: 'Emerging', note: 'LLM APIs, Prompting, RAG' },
  { name: 'System Design', level: 'Learning', note: 'Caching, DB indexing, Scaling' },
]

const futureGoals = [
  { name: 'Cloud (AWS / Vercel)', desc: 'Deploying scalable microservices & serverless workloads.' },
  { name: 'Docker & Containers', desc: 'Containerizing environments for consistent local & cloud builds.' },
  { name: 'DevOps & CI/CD', desc: 'Automating testing pipelines and seamless production deployments.' },
  { name: 'Machine Learning', desc: 'Integrating predictive models directly into software web apps.' },
  { name: 'React Native', desc: 'Building cross-platform mobile apps for iOS and Android.' },
]

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-brand-indigo border border-slate-200 shadow-xs mb-4"
          >
            <BookOpen className="w-3.5 h-3.5 text-brand-indigo" />
            Continuous Growth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Learning Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed"
          >
            Instead of progress bars, here is what I&apos;m actively mastering and where I&apos;m heading next.
          </motion.p>
        </div>

        {/* Dual Column Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card-soft"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                  Currently Learning
                </h3>
                <p className="text-xs text-slate-500 mt-1">Actively building projects with these technologies every week.</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                8 Active Skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentLearning.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-emerald/30 hover:bg-emerald-50/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">{tech.name}</span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{tech.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Next Goals / Future Learning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-brand-indigo" />
                    Future Learning Goals
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Target technologies on my engineering horizon.</p>
                </div>
                <span className="px-3 py-1 bg-brand-indigo/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-400/30">
                  Next Focus
                </span>
              </div>

              <div className="space-y-4">
                {futureGoals.map((goal) => (
                  <div key={goal.name} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-indigo/50 transition-all">
                    <h4 className="text-sm font-bold text-white flex items-center justify-between">
                      {goal.name}
                      <ArrowRight className="w-3.5 h-3.5 text-brand-indigo" />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{goal.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Always learning, always building</span>
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
