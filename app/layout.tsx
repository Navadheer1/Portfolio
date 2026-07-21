import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Navadheer — CS Student & Product Builder',
  description: 'Turning ideas into products. One project at a time. Computer Science Student, Full Stack Developer, Product Builder, and Aspiring Entrepreneur.',
  keywords: [
    'Navadheer',
    'Product Builder',
    'Full Stack Developer',
    'Computer Science Student',
    'Restora MVP',
    'FounderX',
    'Software Engineer',
    'Startup Founder',
  ],
  authors: [{ name: 'Navadheer' }],
  openGraph: {
    title: 'Navadheer — CS Student & Product Builder',
    description: 'Turning ideas into products. One project at a time.',
    type: 'website',
    url: 'https://navadheer.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navadheer — CS Student & Product Builder',
    description: 'Turning ideas into products. One project at a time.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-brand-dark font-sans selection:bg-brand-indigo/10 selection:text-brand-indigo">
        {children}
      </body>
    </html>
  )
}