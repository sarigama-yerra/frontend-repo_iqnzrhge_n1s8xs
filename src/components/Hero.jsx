import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { Bot, Sparkles, ArrowDown, Play } from 'lucide-react'

const gradient = 'from-[#4C9FFF] via-[#B95FFF] to-[#FF80E6]'

export default function Hero({ onExploreVidhyAI, onParents }) {
  const cursorRef = useRef(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[#050510] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-24 text-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/5 backdrop-blur">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-black tracking-wider">BB</div>
          </div>
          <span className="text-sm uppercase tracking-widest text-white/70">BrahmaByte</span>
        </div>

        <h1 className={`bg-gradient-to-br ${gradient} bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl`}>
          Let’s Learn the Future — Together.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          BrahmaByte teaches students and parents how to use AI smartly, safely, and creatively.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onExploreVidhyAI} className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] active:scale-[0.98]`}>
            <Sparkles className="h-4 w-4" /> Explore VidhyAI
          </button>
          <button onClick={onParents} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Bot className="h-4 w-4" /> Why Parents Trust Us
          </button>
        </div>

        <div className="pointer-events-none mt-10 flex items-center gap-2 text-white/60">
          <Play className="h-4 w-4" /> Interact with the 3D scene above
        </div>

        <div className="mt-10 animate-bounce text-white/60">
          <ArrowDown className="mx-auto" />
        </div>
      </div>

      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${gradient} opacity-20`}></div>
    </section>
  )
}
