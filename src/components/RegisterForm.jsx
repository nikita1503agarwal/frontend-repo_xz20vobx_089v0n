import { useEffect, useState } from 'react'

function RegisterForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    pronouns: '',
    division: '',
    team_name: '',
    free_agent: false,
    notes: '',
  })
  const [divisions, setDivisions] = useState(["Recreational", "Intermediate", "Advanced"])
  const [status, setStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    // try to load divisions from league settings
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/league`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data[0]?.divisions) {
            setDivisions(data[0].divisions)
          }
        }
      } catch {}
    }
    load()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ type: 'success', message: 'Thanks! We received your registration.' })
      setForm({ full_name: '', email: '', phone: '', pronouns: '', division: '', team_name: '', free_agent: false, notes: '' })
    } catch (e) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white">Register</h2>
        <p className="text-cyan-100/80 mb-6">Sign up as a team or free agent</p>
        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Full name</label>
            <input name="full_name" value={form.full_name} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Pronouns</label>
            <input name="pronouns" value={form.pronouns} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Division</label>
            <select name="division" value={form.division} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option value="">Select division</option>
              {divisions.map((d) => (
                <option value={d} key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-cyan-200 text-sm mb-1">Team Name</label>
            <input name="team_name" value={form.team_name} onChange={handleChange} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <input id="free_agent" type="checkbox" name="free_agent" checked={form.free_agent} onChange={handleChange} className="w-4 h-4" />
            <label htmlFor="free_agent" className="text-cyan-100">I’m registering as a free agent</label>
          </div>
          <div className="col-span-2">
            <label className="block text-cyan-200 text-sm mb-1">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full rounded-lg bg-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="col-span-2">
            <button className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-2 rounded-lg transition">Submit</button>
          </div>
        </form>
        {status.type === 'success' && <p className="text-emerald-300 mt-4">{status.message}</p>}
        {status.type === 'error' && <p className="text-rose-300 mt-4">{status.message}</p>}
        {status.type === 'loading' && <p className="text-cyan-200 mt-4">{status.message}</p>}
      </div>
    </section>
  )
}

export default RegisterForm
