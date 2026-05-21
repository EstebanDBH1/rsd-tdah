import { useEffect } from 'react'
import Hero from './components/Hero'
import PainIntro from './components/PainIntro'
import PainSection from './components/PainSection'
import MirrorSection from './components/MirrorSection'
import SolutionSection from './components/SolutionSection'
import BenefitsSection from './components/BenefitsSection'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import FinalCta from './components/FinalCta'
import StickyBar from './components/StickyBar'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <PainIntro />
      <PainSection />
      <MirrorSection />
      <SolutionSection />
      <BenefitsSection />
      <Testimonials />
      <FaqSection />
      <FinalCta />
      <StickyBar />
    </>
  )
}
