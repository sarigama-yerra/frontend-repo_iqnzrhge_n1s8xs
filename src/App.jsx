import { useRef } from 'react'
import Hero from './components/Hero'
import VidhyAIWorld from './components/VidhyAIWorld'
import Timeline from './components/Timeline'
import ParentsAndCTA from './components/ParentsAndCTA'

export default function App() {
  const vidhyAIRef = useRef(null)
  const parentsRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen w-full bg-[#050510] text-white">
      <Hero onExploreVidhyAI={() => scrollTo('vidhyai')} onParents={() => scrollTo('parents')} />
      <VidhyAIWorld ref={vidhyAIRef} />
      <Timeline />
      <ParentsAndCTA ref={parentsRef} />
      <footer className="relative bg-[#050510] py-10 text-center text-white/70">
        <div className="mx-auto mb-4 h-12 w-12 overflow-hidden rounded-xl bg-white/5 backdrop-blur">
          <div className="h-full w-full bg-gradient-to-br from-[#4C9FFF] via-[#B95FFF] to-[#FF80E6] opacity-80" />
        </div>
        <div className="text-sm">© 2025 BrahmaByte | Designed with ❤️ by Batman.</div>
      </footer>
    </div>
  )
}
