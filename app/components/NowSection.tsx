'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, GraduationCap, Laptop, BookOpen, Dumbbell, Rocket, Clock } from 'lucide-react'

const nowItems = [
  { icon: MapPin, text: 'Guntur, India', label: 'Location', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { icon: GraduationCap, text: 'B.Tech Computer Science Student', label: 'Education', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { icon: Laptop, text: 'Building Restora (Restaurant OS MVP)', label: 'Active Project', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { icon: BookOpen, text: 'Learning React & Next.js Ecosystem', label: 'Tech Focus', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { icon: Dumbbell, text: 'Going to the Gym & Staying Fit', label: 'Health', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: Rocket, text: 'Working toward launching my own tech startup', label: 'Long-term Goal', color: 'text-purple-600 bg-purple-50 border-purple-200' },
]

export default function NowSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 shadow-xs mb-4">
            <Clock className="w-3.5 h-3.5 text-brand-emerald" />
            Live Status Page
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I&apos;m Doing Now
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A real-time snapshot of my life, current studies, active project, and daily habits.
          </p>
        </div>

        {/* Profile Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-12 p-5 rounded-3xl bg-slate-900 text-white shadow-xl flex items-center gap-5 border border-slate-800"
        >
          <Image
            src="/navadheer.jpg"
            alt="Navadheer"
            width={80}
            height={80}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-emerald shadow-md shrink-0"
          />
          <div>
            <h3 className="text-lg font-extrabold text-white">Navadheer</h3>
            <p className="text-xs text-brand-emerald font-semibold mt-0.5">B.Tech Computer Science Student</p>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              &ldquo;Building software that solves real-world problems while working toward launching my own technology startup.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* 6 Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nowItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-card-soft hover:border-brand-indigo/30 transition-all flex items-start gap-4"
              >
                <div className={`p-3 rounded-2xl border ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.label}
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-snug">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
