'use client'

import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Brand Story */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-xs sm:text-sm font-bold text-slate-900">
            Designed, developed, and continuously improved by Navadheer.
          </p>
          <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for building meaningful software. Thanks for visiting.
          </p>
        </div>

        {/* Right Back to Top Button */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-mono">© {new Date().getFullYear()} Navadheer</span>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-all shadow-xs"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}