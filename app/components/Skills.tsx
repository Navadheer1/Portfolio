'use client'

import { motion } from 'framer-motion'
import { Code2, Layers, Database, Wrench, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    skills: ['React', 'Next.js 16', 'Django', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Cloud Storage',
    icon: Database,
    color: 'bg-amber-50 text-amber-800 border-amber-200',
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    category: 'Developer Tools & Workflows',
    icon: Wrench,
    color: 'bg-purple-50 text-purple-800 border-purple-200',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 shadow-xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-indigo" />
            Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Skills & Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed"
          >
            Modern tools and technologies I use to build fast, scalable, and intuitive applications.
          </motion.p>
        </div>

        {/* Categories & Floating Skill Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-xl hover:border-brand-indigo/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl border ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.category}</h3>
                </div>

                {/* Interactive Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}