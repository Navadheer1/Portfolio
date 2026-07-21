import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatDrivesMe from './components/WhatDrivesMe'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import CurrentFocus from './components/CurrentFocus'
import CurrentlyLearning from './components/CurrentlyLearning'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import NowSection from './components/NowSection'
import BeyondCoding from './components/BeyondCoding'
import QuoteSection from './components/QuoteSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-brand-emerald/20 selection:text-brand-emerald">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhatDrivesMe />
      <About />
      <FeaturedProject />
      <Projects />
      <CurrentFocus />
      <CurrentlyLearning />
      <Skills />
      <Achievements />
      <NowSection />
      <BeyondCoding />
      <QuoteSection />
      <Contact />
      <Footer />
    </main>
  )
}