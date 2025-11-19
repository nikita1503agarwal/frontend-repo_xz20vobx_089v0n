import { useEffect, useState } from 'react'

function Announcements() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/announcements`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Announcements unavailable right now')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return null

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Announcements</h2>
      {error ? (
        <p className="text-cyan-200/80">{error}</p>
      ) : items.length === 0 ? (
        <p className="text-cyan-200/80">No announcements yet. Stay tuned!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((a, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold">{a.title}</h3>
              <p className="text-cyan-100/90 mt-1">{a.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Announcements
