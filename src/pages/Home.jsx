import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allSegments } from '../data/segments.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Obrika — Compara precios de materiales en Málaga'
  }, [])
  const buying = allSegments.filter((s) => s.id !== 'mantenimiento')
  const fm = allSegments.find((s) => s.id === 'mantenimiento')

  return (
    <div className="min-h-screen bg-[#111827] relative overflow-hidden">
      {/* Background foto muy sutil */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-12 lg:px-24 py-12 md:py-16">

        {/* Brand */}
        <div className="text-center mb-12 md:mb-16">
          <img src="/logotipo.png" alt="Obrika" className="h-16 w-auto mx-auto" />
          <p className="mt-2 font-sans text-xs text-white/40 uppercase tracking-widest">Málaga · Gratuito para compradores</p>
        </div>

        {/* Headline */}
        <div className="text-center mb-10 md:mb-12">
          <h1
            className="font-display font-extrabold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            ¿Qué material compra{' '}
            <span style={{ color: '#E8882A' }}>tu empresa</span>?
          </h1>
          <p className="mt-3 font-sans text-sm text-white/50 max-w-md mx-auto">
            Selecciona tu sector — contactamos a los distribuidores de tu zona en Málaga en tu nombre
          </p>
        </div>

        {/* Segment cards — buying segments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
          {buying.map((seg) => (
            <Link
              key={seg.id}
              to={seg.path}
              className="group flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(27,45,79,0.7) 0%, rgba(17,24,39,0.5) 100%)',
                border: '1px solid rgba(232,136,42,0.2)',
                borderTop: '2px solid #E8882A',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              }}
            >
              <span className="text-accent opacity-80 shrink-0 mt-0.5 group-hover:opacity-100 transition-opacity">
                {seg.homeCard.icon}
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[10px] text-accent/70 uppercase tracking-widest mb-1">
                  {seg.homeCard.badge}
                </p>
                <p className="font-display font-bold text-white text-lg leading-tight">
                  {seg.homeCard.title}
                </p>
                <p className="mt-1 font-sans text-xs text-white/55 leading-relaxed">
                  {seg.homeCard.desc}
                </p>
                <p className="mt-3 font-display text-xs font-semibold text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Ver precios
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* FM card — producto diferente */}
        {fm && (
          <div className="max-w-3xl mx-auto w-full mt-4">
            <Link
              to={fm.path}
              className="group flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:scale-[1.01]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span className="text-white/40 shrink-0 mt-0.5 group-hover:text-white/60 transition-colors">
                {fm.homeCard.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-sans text-[10px] text-white/30 uppercase tracking-widest">
                    {fm.homeCard.badge}
                  </p>
                  <span className="font-sans text-[10px] bg-white/10 text-white/50 px-2 py-0.5 rounded-full">
                    Próximamente
                  </span>
                </div>
                <p className="font-display font-bold text-white/60 text-base leading-tight">
                  {fm.homeCard.title}
                </p>
                <p className="mt-1 font-sans text-xs text-white/35 leading-relaxed">
                  {fm.homeCard.desc}
                </p>
              </div>
            </Link>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-16 text-center">
          <p className="font-sans text-xs text-white/25">
            Obra &copy; {new Date().getFullYear()} &middot; Málaga &middot;{' '}
            <a href="mailto:obrika.info@gmail.com" className="hover:text-white/40 transition-colors">
              obrika.info@gmail.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
