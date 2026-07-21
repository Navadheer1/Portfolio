'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, FileText, Send, Code2, LayoutDashboard, Smartphone, TrendingUp, Sparkles, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Ambient Glowing Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200/80 mb-6 shadow-xs"
            >
              <Image
                src="/navadheer.jpg"
                alt="Navadheer"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full object-cover border border-emerald-500"
              />
              <span className="text-slate-700 font-bold">CS Student & Product Builder</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-indigo font-semibold">Building Restora MVP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6"
            >
              Turning ideas into <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-500 via-indigo-600 to-amber-500 bg-clip-text text-transparent">
                products.
              </span>{' '}
              One project at a time.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-semibold text-brand-indigo tracking-wide uppercase mb-4"
            >
              Computer Science Student • Full Stack Developer • Product Builder • Aspiring Entrepreneur
            </motion.p>

            {/* Story Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
            >
              I&apos;m passionate about building software that solves meaningful problems. Every project teaches me something new about engineering, design, and users while bringing me closer to my dream of building a technology company.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10 hover:bg-brand-indigo hover:shadow-indigo-glow transition-all duration-300 transform active:scale-95 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 rounded-2xl shadow-xs hover:bg-emerald-100 transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                Let&apos;s Connect
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Floating Glass Illustration */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center">
              {/* Floating Profile Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-2.5 z-30 flex items-center gap-3 pr-4"
              >
                <Image
                  src="/navadheer.jpg"
                  alt="Navadheer"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-brand-emerald shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Navadheer</h4>
                  <p className="text-[10px] text-brand-emerald font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                    Product Builder
                  </p>
                </div>
              </motion.div>
              {/* Laptop Browser Shell */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 relative z-10 glass-card"
              >
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-brand-indigo" />
                    restora-app.com
                  </div>
                  <div className="w-4" />
                </div>

                {/* Dashboard Inner Canvas */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-900 text-white p-3 rounded-xl">
                    <div className="flex items-center gap-2.5">
                      <LayoutDashboard className="w-4 h-4 text-brand-emerald" />
                      <span className="text-xs font-semibold">Kitchen OS Dashboard</span>
                    </div>
                    <span className="text-[10px] bg-brand-emerald/20 text-brand-emerald font-bold px-2 py-0.5 rounded-full">
                      LIVE MVP
                    </span>
                  </div>

                  {/* Analytics Mini Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[10px] text-slate-500 font-medium">QR Orders Today</p>
                      <p className="text-base font-bold text-slate-900 mt-0.5">142</p>
                      <p className="text-[10px] text-brand-emerald font-semibold flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> +28% this week
                      </p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[10px] text-slate-500 font-medium">Kitchen Efficiency</p>
                      <p className="text-base font-bold text-slate-900 mt-0.5">99.4%</p>
                      <p className="text-[10px] text-brand-indigo font-semibold flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> Avg 8m dispatch
                      </p>
                    </div>
                  </div>

                  {/* Code Snippet Card */}
                  <div className="p-3 bg-slate-950 text-slate-200 rounded-xl font-mono text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1 pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-brand-emerald" /> RestoraEngine.ts
                      </span>
                      <span>Next.js 16</span>
                    </div>
                    <p className="text-brand-emerald">
                      <span className="text-purple-400">export function</span>{' '}
                      <span className="text-blue-300">processOrder</span>(tableId: <span className="text-amber-300">number</span>) &#123;
                    </p>
                    <p className="pl-4 text-slate-400">
                      <span className="text-purple-400">const</span> order = await <span className="text-blue-300">createQROrder</span>(tableId);
                    </p>
                    <p className="pl-4 text-slate-400">
                      return dispatchToKitchen(order.<span className="text-brand-indigo">id</span>);
                    </p>
                    <p>&#125;</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 1: Phone Preview */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-2 sm:-right-4 w-40 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 z-20 hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-4 h-4 text-brand-indigo" />
                  <span className="text-[11px] font-bold text-slate-800">Mobile QR App</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-brand-indigo" />
                </div>
                <p className="text-[10px] text-slate-500 mt-2">Dine-in menu loaded in 0.2s</p>
              </motion.div>

              {/* Floating Card 2: FounderX Product Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 z-20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">FounderX Platform</h4>
                  <p className="text-[10px] text-slate-500">React • Django • PostgreSQL</p>
                </div>
              </motion.div>

              {/* Floating Card 3: MediQuick Healthcare */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-6 bg-white rounded-xl border border-slate-200 shadow-lg p-2.5 z-20 hidden md:flex items-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-[11px] font-bold text-slate-800">MediQuick Healthcare</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}