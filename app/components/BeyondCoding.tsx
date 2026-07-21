'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Lightbulb, Cpu, Gamepad2, Brain, Sparkles } from 'lucide-react'

const interests = [
  { icon: Dumbbell, title: 'Gym & Fitness', text: 'Daily workouts keep my mind sharp, disciplined, and energized for complex problem solving.', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: Lightbulb, title: 'Building Startup Ideas', text: 'Brainstorming business models, user pain points, and product features in my free time.', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { icon: Cpu, title: 'Learning New Tech', text: 'Reading tech blogs, exploring new frameworks, and dissecting open-source codebases.', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { icon: Gamepad2, title: 'Story-Driven Games', text: 'Appreciating world-building, narrative design, and interactive user experiences in gaming.', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { icon: Brain, title: 'Problem Solving', text: 'Enjoying logic puzzles, algorithmic challenges, and spatial reasoning tasks.', color: 'text-blue-600 bg-blue-50 border-blue-200' },
]

export default function BeyondCoding() {
  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-indigo" />
            Personal Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Beyond Coding
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            The habits, interests, and creative outlets that shape how I think and work every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft hover:shadow-md hover:border-brand-indigo/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
