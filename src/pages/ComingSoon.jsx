import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'

export default function ComingSoon({ segment }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = `Obrika — ${segment?.homeCard?.title ?? 'Próximamente'}`
  }, [segment])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'obrika-interes', segmento: segment?.id ?? 'desconocido', email }).toString(),
      })
      setSent(true)
    } catch {
      setSent(true) // mostramos éxito de todos modos en dev
    }
  }

  return (
    <div className="min-h-screen bg-[#111827]">
      <TopBar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <span className="text-accent mb-6 opacity-70">{segment?.homeCard?.icon}</span>
        <p className="font-sans text-xs text-accent/70 uppercase tracking-widest mb-3">
          {segment?.homeCard?.badge ?? 'Próximamente'}
        </p>
        <h1
          className="font-display font-extrabold text-white max-w-lg leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          {segment?.homeCard?.title ?? 'Próximamente'}
        </h1>
        <p className="font-sans text-sm text-white/50 max-w-sm mb-10">
          Estamos preparando esta sección. Déjanos tu email y te avisamos cuando esté disponible.
        </p>

        {sent ? (
          <p className="font-display font-bold text-white text-lg">
            ¡Anotado! Te avisamos en cuanto esté listo.
          </p>
        ) : (
          <form
            name="obrika-interes"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
          >
            <input type="hidden" name="form-name" value="obrika-interes" />
            <input type="hidden" name="segmento" value={segment?.id ?? ''} />
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/[0.06] border border-white/15 rounded-btn px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white font-display font-bold rounded-btn px-6 py-3 hover:brightness-110 transition-all whitespace-nowrap"
            >
              Avisarme →
            </button>
          </form>
        )}

        <Link to="/" className="mt-10 font-sans text-xs text-white/30 hover:text-white/50 transition-colors">
          ← Volver a todos los sectores
        </Link>
      </div>
    </div>
  )
}
