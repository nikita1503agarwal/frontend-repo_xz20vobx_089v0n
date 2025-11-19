import { Volleyball, Users, CalendarDays } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm mb-4">
            Inclusive. Fun. Competitive.
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Miau League Volleyball
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cyan-100/90 max-w-2xl mx-auto">
            An LGBTQ+ friendly adult volleyball league focused on good vibes, fair play, and building community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-cyan-300">
              <Volleyball className="w-6 h-6" />
              <h3 className="font-semibold text-white">Divisions</h3>
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">Recreational • Intermediate • Advanced</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-cyan-300">
              <Users className="w-6 h-6" />
              <h3 className="font-semibold text-white">Teams & Free Agents</h3>
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">Register a full squad or join solo — we’ll place you</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-cyan-300">
              <CalendarDays className="w-6 h-6" />
              <h3 className="font-semibold text-white">Season</h3>
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">10-week season with weekly matches and playoffs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
