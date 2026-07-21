'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Layers, Target, CheckCircle2, Terminal } from 'lucide-react'

export interface ProjectData {
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
  github: string
  live: string
  badge: string
  stats: string
}

interface ProjectModalProps {
  project: ProjectData | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="inline-block px-3 py-1 bg-brand-emerald/20 text-brand-emerald text-xs font-bold rounded-full mb-3 border border-brand-emerald/30">
              {project.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2">{project.subtitle}</p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
                  <Target className="w-4 h-4" />
                  The Problem
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  The Solution
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-indigo" /> Key Core Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-emerald" /> Architecture & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-500">{project.stats}</span>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:border-slate-400 shadow-xs"
              >
                <Github className="w-4 h-4" /> Code Repository
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-brand-indigo rounded-xl hover:bg-indigo-700 shadow-md"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
