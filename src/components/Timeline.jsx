import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const weeks = [
  'Week 1 · AI Basics',
  'Week 2 · Prompting Power',
  'Week 3 · Vision & Speech',
  'Week 4 · Build a Mini App',
  'Week 5 · Data & Ethics',
  'Week 6 · Creative AI',
  'Week 7 · Real-world Tools',
  'Week 8 · AI Careers',
]

export default function Timeline() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      el.scrollTo({ left: (i % weeks.length) * 240, behavior: 'smooth' })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-[#050510] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">8‑Week Learning Journey</h2>
        <div ref={ref} className="flex snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none]" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-4 pr-6 [scrollbar-width:none]">
            {weeks.map((w, idx) => (
              <motion.div
                key={w}
                whileHover={{ scale: 1.05 }}
                className="snap-center min-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
              >
                <div className={`mx-auto mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#4C9FFF] via-[#B95FFF] to-[#FF80E6] ${idx === 0 ? 'animate-pulse' : ''}`} />
                <div className="text-sm font-semibold">{w}</div>
                <div className="mt-2 text-xs text-white/70">Hover to preview topics</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
