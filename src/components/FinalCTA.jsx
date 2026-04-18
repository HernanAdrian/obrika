import QuoteForm from './QuoteForm'

const defaultConfig = {
  headline: 'Una lista. Sin llamadas. Los precios llegan a ti.',
  body: 'Describe los materiales que necesitas, deja tu email y nuestro equipo gestiona todo personalmente.',
  segmento: 'construccion',
}

export default function FinalCTA({ config = defaultConfig }) {
  const { headline, body, segmento } = { ...defaultConfig, ...config }

  return (
    <section className="bg-[#1B2D4F] px-6 md:px-12 lg:px-24 py-16 md:py-20 relative overflow-hidden">
      {/* Amber accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8882A]" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E8882A]/80 mb-3">
            Empieza ahora
          </span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
          >
            {headline}
          </h2>
          <p className="mt-3 font-body text-sm text-white/55 max-w-md mx-auto leading-relaxed">
            {body}
          </p>
        </div>

        {/* Compact form */}
        <QuoteForm compact config={{ segmento }} />

        {/* Trust strip */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1.5">
          {[
            'Sin compromiso',
            'Sin registro',
            '0€ para el comprador',
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 font-body text-xs text-white/35">
              <svg className="w-3 h-3 text-[#E8882A]/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
