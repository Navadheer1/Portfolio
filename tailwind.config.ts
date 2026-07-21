import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10B981',
          indigo: '#6366F1',
          orange: '#F59E0B',
          dark: '#111827',
          gray: '#6B7280',
          slate: '#F8FAFC',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'glass-hover': '0 20px 40px rgba(99, 102, 241, 0.08)',
        'emerald-glow': '0 10px 30px -5px rgba(16, 185, 129, 0.25)',
        'indigo-glow': '0 10px 30px -5px rgba(99, 102, 241, 0.25)',
        'card-soft': '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 10px 20px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
export default config