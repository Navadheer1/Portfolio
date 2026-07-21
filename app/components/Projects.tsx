'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles, FolderGit2, Info, ArrowUpRight } from 'lucide-react'
import ProjectModal, { ProjectData } from './ProjectModal'

const projectsData: ProjectData[] = [
  {
    title: 'FounderX',
    subtitle: 'Startup Networking & Pitching Platform',
    badge: 'Full Stack Concept',
    stats: 'React • Django • PostgreSQL',
    description: 'A dedicated networking ecosystem connecting founders, developers, investors, and early-stage startup innovators.',
    problem: 'Early-stage founders lack streamlined platforms to connect directly with co-founders, peer developers, and early investors without noise.',
    solution: 'Built a role-based networking engine with real-time messaging, FounderTV video showcases, founder profiles, and pitch feeds.',
    features: [
      'Role-based dashboard (Founder, Investor, Dev)',
      'Real-time communication & direct messaging',
      'FounderTV video pitching feed',
      'Custom profiles & skill matching',
      'PostgreSQL relational data model',
      'JWT Authentication & REST API design',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'REST APIs', 'Tailwind CSS'],
    github: 'https://github.com/Navadheer1/founderx',
    live: 'https://founderx.demo.app',
  },
  {
    title: 'ServiceHub',
    subtitle: 'Local Service Provider Marketplace',
    badge: 'Full Stack App',
    stats: 'Full Stack Marketplace Engine',
    description: 'A service marketplace connecting users with verified local service providers, ratings, and instant booking workflows.',
    problem: 'Finding reliable, peer-reviewed local service providers often requires fragmented directory searches with zero scheduling transparency.',
    solution: 'Designed an end-to-end marketplace with provider profile verification, user reviews, instant booking requests, and mobile responsive UI.',
    features: [
      'Provider profiles & service catalogs',
      'Interactive customer rating & review system',
      'Real-time booking reservation management',
      'Direct messaging & service status updates',
      'Search filters by domain, pricing, & distance',
      'Mobile-first responsive interface design',
    ],
    tech: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/Navadheer1/servicehub',
    live: 'https://servicehub.demo.app',
  },
  {
    title: 'MediQuick',
    subtitle: 'Healthcare & Medicine Ordering Platform',
    badge: 'Healthcare Tech',
    stats: 'Real-time Inventory Engine',
    description: 'A healthcare platform simplifying medicine discovery, inventory checks, vendor dashboards, and customer order tracking.',
    problem: 'Patients struggle to verify medicine availability across local pharmacies during urgent prescriptions.',
    solution: 'Created a centralized inventory discovery engine linking customer search with live pharmacy vendor dashboards and tracking.',
    features: [
      'Instant medicine search & stock availability',
      'Pharmacy vendor management dashboard',
      'Real-time order status tracking pipeline',
      'Prescription upload & order validation',
      'Customer dashboard with past order history',
      'Secure customer authentication & role checks',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/Navadheer1/mediquick',
    live: 'https://mediquick.demo.app',
  },
  {
    title: 'Restora',
    subtitle: 'Restaurant Operating System',
    badge: 'Active Flagship MVP',
    stats: 'Building MVP',
    description: 'All-in-one restaurant platform empowering venues with QR ordering, reservations, kitchen displays, and live analytics.',
    problem: 'Restaurants suffer from slow table turnover, order miscommunication between waiters and kitchens, and fragmented POS software.',
    solution: 'Developing a unified operating system uniting QR dine-in ordering, live kitchen ticket displays, waiter POS, and revenue analytics.',
    features: [
      'Contactless QR code dine-in ordering',
      'Live kitchen display system (KDS) queue',
      'Real-time table reservation allocation',
      'Waiter mobile dashboard & ticket modification',
      'Revenue, peak hour, & dish popularity analytics',
      'Multi-device real-time sync via WebSockets',
    ],
    tech: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    github: 'https://github.com/Navadheer1/restora',
    live: 'https://restora.demo.app',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  return (
    <section id="projects" className="py-24 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-xs mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-brand-indigo" />
            Portfolio Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Things I&apos;ve Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            Every project has taught me something new about building products, solving real problems, and writing clean code.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-card-soft hover:shadow-2xl hover:border-brand-indigo/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Visual Top Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-indigo/30 text-indigo-200 border border-indigo-400/30">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.stats}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-brand-emerald transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{project.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Problem & Solution Snippet */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs text-slate-600">
                      <span className="font-bold text-slate-900 block mb-1">Problem:</span>
                      <p className="line-clamp-2">{project.problem}</p>
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-bold text-slate-900 block mb-1">Solution:</span>
                      <p className="line-clamp-2">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-brand-indigo transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-brand-indigo" />
                    Case Study
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-brand-indigo text-white text-xs font-bold transition-colors"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}