'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-indigo/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Build Together
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
                Whether you want to discuss full-stack projects, internship opportunities, startup ideas, or just connect—I&apos;d love to hear from you!
              </p>
            </div>

            {/* Quick Links Cards */}
            <div className="space-y-4">
              <a
                href="mailto:navadheer.dev@gmail.com"
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-brand-emerald hover:bg-slate-800 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-brand-emerald border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-brand-emerald transition-colors">
                    navadheer.dev@gmail.com
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Navadheer1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-brand-indigo hover:bg-slate-800 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-700 text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block">GitHub</span>
                    <span className="text-xs font-bold text-white group-hover:text-brand-indigo">Navadheer1</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nayudu-navadheer-b27212414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-brand-indigo hover:bg-slate-800 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block">LinkedIn</span>
                    <span className="text-xs font-bold text-white group-hover:text-brand-indigo">Nayudu Navadheer</span>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-emerald" />
                  Based in Guntur, AP, India
                </span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-indigo font-bold hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" /> Resume PDF
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form Glass Card */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-emerald transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-emerald transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or role..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-emerald transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-80 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
