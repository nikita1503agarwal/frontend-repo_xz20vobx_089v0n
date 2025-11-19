import Hero from './components/Hero'
import Announcements from './components/Announcements'
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.06),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.05),transparent_30%)]" />
      <div className="relative">
        <nav className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="font-extrabold tracking-tight text-cyan-300">Miau League</div>
            <a href="#register" className="text-sm bg-cyan-500 text-slate-900 px-4 py-1.5 rounded-lg font-semibold hover:bg-cyan-400 transition">Register</a>
          </div>
        </nav>

        <Hero />
        <Announcements />
        <div id="register">
          <RegisterForm />
        </div>

        <footer className="py-10 text-center text-cyan-200/70">
          <p>Made with love for the community • Miau League Volleyball</p>
        </footer>
      </div>
    </div>
  )
}

export default App
