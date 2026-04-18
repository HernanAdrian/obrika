const stats = [
  {
    number: '0',
    label: 'llamadas\nnecesarias',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    number: '1',
    label: 'solicitud para\ntodos los almacenes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    number: '0€',
    label: 'coste para\nel comprador',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Hero({ config = {} }) {
  const {
    badge = 'Materiales de construcción en Málaga',
    headline = (
      <>
        Pide precio a{' '}
        <span style={{ color: '#E8882A' }}>todos tus almacenes</span>
        {' '}sin hacer{' '}
        <span style={{ color: '#E8882A' }}>una sola llamada</span>
      </>
    ),
    subheadline = 'Envíanos tu lista de materiales — contactamos a los distribuidores de tu zona en Málaga en tu nombre y te mandamos la comparativa de precios. Sin llamadas, sin seguimientos.',
  } = config

  return (
    <section className="relative bg-[#111827] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
        alt="Obra de construcción con materiales y trabajadores"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.22] pointer-events-none"
      />

      <div className="relative z-10 px-6 md:px-12 py-6 md:py-8">
        <div className="max-w-[1100px] mx-auto text-center">

          <span className="inline-block bg-accent text-white font-sans text-xs font-medium tracking-widest uppercase px-3.5 py-1 rounded-[20px]">
            {badge}
          </span>

          <h1
            className="mt-4 font-display font-extrabold text-white max-w-3xl mx-auto leading-[1.15] md:leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            {headline}
          </h1>

          <p
            className="mt-3 font-display font-medium text-[#9CA3AF] max-w-[560px] mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.6' }}
          >
            {subheadline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center rounded-xl px-7 py-5 min-w-[140px] overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(27,45,79,0.85) 0%, rgba(17,24,39,0.70) 100%)',
                  border: '1px solid rgba(232,136,42,0.25)',
                  borderTop: '2px solid #E8882A',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span className="text-accent mb-3 opacity-90">{s.icon}</span>
                <p
                  className="font-display font-extrabold text-white leading-none"
                  style={{ fontSize: '3rem', lineHeight: 1, textShadow: '0 0 24px rgba(232,136,42,0.35)' }}
                >
                  {s.number}
                </p>
                <div className="mt-2 mb-2.5 w-8 h-[2px] rounded-full bg-accent opacity-60" />
                <p className="font-sans text-[11px] font-medium text-white/75 leading-tight whitespace-pre-line">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA → scroll al formulario */}
          <div className="mt-8">
            <a
              href="#solicitar"
              className="inline-flex items-center gap-2 bg-accent text-white font-display font-bold rounded-btn px-8 py-3.5 hover:brightness-110 transition-all"
            >
              Pedir presupuesto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
