import { useState } from 'react'
import { CheckCircle2, Shield, Book, Users, ArrowRight, Star, LineChart, Instagram, Youtube, Linkedin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const gradient = 'from-[#4C9FFF] via-[#B95FFF] to-[#FF80E6]'

const testimonials = [
  {
    name: 'Neha (Parent)',
    quote: 'My son now builds small AI projects confidently. The mentors are patient and inspiring!',
  },
  {
    name: 'Arjun (Grade 8)',
    quote: 'Classes feel like a game. I earned badges and showcased my first AI app!',
  },
  {
    name: 'Priya (Parent)',
    quote: 'Safe, structured, and super fun. Highly recommend BrahmaByte.',
  },
]

export default function ParentsAndCTA() {
  const [active, setActive] = useState(0)

  return (
    <section id="parents" className="relative bg-gradient-to-b from-white to-[#E6EEFF] py-20 text-[#050510]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Learning You Can Trust</h2>
        <p className="mb-10 text-center text-black/70">Built for families: safety, structure, and real mentors.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow/10 ring-1 ring-black/5">
              <div className="mb-2 flex items-center gap-3 font-semibold"><Shield className="h-5 w-5 text-cyan-600" /> Safe Learning Environment</div>
              <p className="text-sm text-black/70">Child-friendly spaces, privacy-first tools, and gentle guidance at every step.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow/10 ring-1 ring-black/5">
              <div className="mb-2 flex items-center gap-3 font-semibold"><Book className="h-5 w-5 text-cyan-600" /> Structured Curriculum</div>
              <p className="text-sm text-black/70">Clear weekly goals, bite-sized lessons, and hands-on projects.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow/10 ring-1 ring-black/5">
              <div className="mb-2 flex items-center gap-3 font-semibold"><Users className="h-5 w-5 text-cyan-600" /> Guided by Real Mentors</div>
              <p className="text-sm text-black/70">Live mentors who motivate, explain, and celebrate progress.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow/10 ring-1 ring-black/5">
              <div className="mb-3 text-sm font-semibold text-black/70">AI Skill Growth</div>
              <div className="relative h-36 w-full">
                <div className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-black/10" />
                <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className={`absolute inset-x-auto bottom-0 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                <div className="absolute bottom-3 left-0 text-xs text-black/60">Start</div>
                <div className="absolute bottom-3 right-0 text-xs text-black/60">Week 8</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white p-6 shadow/10 ring-1 ring-black/5">
              <div className="mb-3 text-sm font-semibold text-black/70">What families say</div>
              <div className="relative min-h-[96px]">
                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="text-base">
                    “{testimonials[active].quote}”
                    <div className="mt-2 text-sm text-black/60">— {testimonials[active].name}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-2 w-6 rounded-full transition ${active === i ? 'bg-[#7B5CFF]' : 'bg-black/10'}`} />
                ))}
              </div>
            </div>

            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${gradient} p-8 text-white`}>
              <div className="mb-2 text-sm uppercase tracking-widest text-white/80">Join the Journey</div>
              <h3 className="text-2xl font-bold md:text-3xl">Join 10 000+ Students Building Their Future with AI.</h3>
              <p className="mt-2 text-white/90">8 Weeks • Live Mentors • Gujarati + English.</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </button>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
            </div>

            <div className="flex items-center justify-center gap-4 text-black/60">
              <a href="#" aria-label="LinkedIn" className="hover:text-black"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-black"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
