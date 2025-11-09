import { motion } from 'framer-motion'
import { Trophy, BookOpen, Gamepad2, Sparkles } from 'lucide-react'

const cards = [
  { title: 'Learn AI', icon: BookOpen, desc: 'Foundations, ethics, and creative skills.' },
  { title: 'Play with AI Tools', icon: Gamepad2, desc: 'Hands-on labs with safe guidance.' },
  { title: 'Create Projects', icon: Sparkles, desc: 'Build mini apps, stories, and art.' },
  { title: 'Win Badges', icon: Trophy, desc: 'Level up with challenges and rewards.' },
]

export default function VidhyAIWorld() {
  return (
    <section id="vidhyai" className="relative bg-[#050510] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">VidhyAI World — Students Portal</h2>
        <p className="mb-10 text-center text-white/70">A playful space where learning feels like a game.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, icon: Icon, desc }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl transition group-hover:opacity-80" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="mt-6 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${70 + i * 7}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-2 rounded-full bg-gradient-to-r from-[#4C9FFF] via-[#B95FFF] to-[#FF80E6]"
                />
              </div>
              <div className="mt-4 flex gap-2">
                {[...Array(3 + (i % 2))].map((_, b) => (
                  <motion.div key={b} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="h-6 w-6 rounded-full bg-yellow-400/20 ring-1 ring-yellow-300/40" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
