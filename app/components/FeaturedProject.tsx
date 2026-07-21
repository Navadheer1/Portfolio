'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils, QrCode, Calendar, ChefHat, LayoutDashboard, BarChart3, CheckCircle2, Clock, ShieldCheck, Sparkles, Smartphone } from 'lucide-react'

const restoraFeatures = [
  {
    icon: QrCode,
    title: 'QR Ordering System',
    description: 'Instant contactless digital menus allowing customers to order directly from their phone.',
  },
  {
    icon: Calendar,
    title: 'Smart Reservations',
    description: 'Real-time table allocation, waitlist management, and automated booking notifications.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Operations Display',
    description: 'Live order queue display for kitchen staff with status tracking and preparation timers.',
  },
  {
    icon: Smartphone,
    title: 'Waiter Dashboard',
    description: 'Mobile-first tablet interface for waitstaff to modify orders, call tables, and process bills.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Revenue tracking, dish popularity analysis, and peak hour operational metrics.',
  },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    name: 'Restaurant Website & Menu System',
    status: 'Completed',
    statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: CheckCircle2,
    details: 'Digital storefront, dynamic menu rendering, multi-category food catalogs.',
  },
  {
    phase: 'Phase 2',
    name: 'QR Code Ordering Engine',
    status: 'In Progress',
    statusBg: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: Clock,
    details: 'Table-specific session management, cart persistence, instant kitchen notifications.',
  },
  {
    phase: 'Phase 3',
    name: 'Unified Kitchen & Staff Dashboard',
    status: 'Planned',
    statusBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: ShieldCheck,
    details: 'Real-time WebSocket order sync, ticket printing integration, waiter call buttons.',
  },
  {
    phase: 'Phase 4',
    name: 'Multi-Tenant SaaS Engine',
    status: 'Future Goal',
    statusBg: 'bg-slate-100 text-slate-700 border-slate-300',
    icon: Sparkles,
    details: 'Subscription billing, multi-location management, inventory predictive ordering.',
  },
]

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState<'overview' | 'roadmap'>('overview')

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Spotlight Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 mb-4">
              <Utensils className="w-3.5 h-3.5" />
              Active Flagship Build
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Restora — Restaurant OS
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
              An all-in-one operating system helping modern restaurants streamline reservations, QR ordering, kitchen operations, and analytics.
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex bg-slate-800/80 p-1 rounded-2xl border border-slate-700/80">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'overview'
                  ? 'bg-brand-emerald text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              System Features
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Product Roadmap
            </button>
          </div>
        </div>

        {/* Tab 1: Overview & System Features */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Mockup Frame */}
            <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  Restora Kitchen Console v1.0
                </span>
              </div>

              {/* Mock Interface Display */}
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Active Table #08</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">Dine-in Order • 4 Items</h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                    Preparing (04m 12s)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Dish</span>
                    <span className="font-semibold text-slate-200">Woodfired Margherita</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Dish</span>
                    <span className="font-semibold text-slate-200">Truffle Pasta x2</span>
                  </div>
                </div>

                {/* Dispatch Button Mock */}
                <div className="pt-2">
                  <div className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <ChefHat className="w-4 h-4" />
                    Dispatch to Table #08
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="lg:col-span-6 space-y-4">
              {restoraFeatures.map((feat) => {
                const Icon = feat.icon
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-brand-emerald/40 hover:bg-slate-800/80 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Tab 2: Product Roadmap */}
        {activeTab === 'roadmap' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {roadmapPhases.map((phase) => {
              const Icon = phase.icon
              return (
                <div
                  key={phase.phase}
                  className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 flex flex-col justify-between hover:border-brand-indigo/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold font-mono text-slate-400">{phase.phase}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${phase.statusBg}`}>
                        {phase.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{phase.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{phase.details}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-300 text-xs font-semibold">
                    <Icon className="w-4 h-4 text-brand-emerald" />
                    <span>Deliverable milestone</span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
