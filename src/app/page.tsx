'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Metrics from '@/components/Metrics'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
