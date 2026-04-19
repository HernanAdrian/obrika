const defaultConfig = {
  title: 'Recibes algo así en tu email',
  subtitle: 'Comparativa real de precios — lado a lado, sin letra pequeña',
  colHeader: 'Almacén',
  mockData: [
    { material: 'Placa pladur 13mm (50 uds)', prices: ['4,20 €/ud', '4,45 €/ud', '3,95 €/ud'] },
    { material: 'Mortero cola flexible (25 kg)', prices: ['8,90 €', '9,50 €', '8,75 €'] },
    { material: 'Perfil montante 48mm (3 m)', prices: ['2,10 €/ud', '1,95 €/ud', '2,30 €/ud'] },
  ],
}

const parsePrice = (p) =>
  parseFloat(p.replace(',', '.').replace(/[^0-9.]/g, ''))

export default function ExampleResult({ config = defaultConfig }) {
  const { title, subtitle, colHeader, mockData } = { ...defaultConfig, ...config }

  return (
    <section className="bg-[#111827] px-6 md:px-12 lg:px-24 py-16 md:py-20 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E8882A] mb-3">
            Así funciona
          </span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>
          <p className="mt-2.5 font-body text-sm text-white/50">{subtitle}</p>
        </div>

        {/* Email mock */}
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          {/* Email client chrome */}
          <div className="bg-[#1B2D4F] px-5 py-4 flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#E8882A]/20 border border-[#E8882A]/30 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#E8882A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-display font-bold text-sm text-white leading-tight">
                Tu comparativa de precios — Obrika
              </p>
              <p className="font-body text-xs text-white/40 mt-0.5">
                De: obrika.info@gmail.com &nbsp;·&nbsp; Para: tu@email.com
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1B2D4F]/08 bg-[#F9FAFB]">
                  <th className="px-5 py-3.5 font-display text-xs font-bold text-[#1B2D4F] uppercase tracking-wide">
                    Material
                  </th>
                  {['A', 'B', 'C'].map((l) => (
                    <th key={l} className="px-4 py-3.5 font-display text-xs font-bold text-[#1B2D4F] uppercase tracking-wide text-center whitespace-nowrap">
                      {colHeader} {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockData.map((row, i) => {
                  const nums = row.prices.map(parsePrice)
                  const minIdx = nums.indexOf(Math.min(...nums))
                  return (
                    <tr
                      key={i}
                      className={`${i < mockData.length - 1 ? 'border-b border-[#1B2D4F]/06' : ''} ${i % 2 === 1 ? 'bg-[#F9FAFB]' : 'bg-white'}`}
                    >
                      <td className="px-5 py-4 font-body text-sm text-[#111827] max-w-[200px]">
                        {row.material}
                      </td>
                      {row.prices.map((price, j) => (
                        <td key={j} className="px-4 py-4 text-center">
                          {j === minIdx ? (
                            <div className="inline-flex flex-col items-center">
                              <span className="font-display font-extrabold text-sm text-[#E8882A]">
                                {price}
                              </span>
                              <span className="mt-0.5 font-body text-[10px] font-medium text-[#E8882A]/70 uppercase tracking-wide">
                                mejor precio
                              </span>
                            </div>
                          ) : (
                            <span className="font-body text-sm text-[#6B7280]">{price}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <div className="px-5 py-3 bg-[#F9FAFB] border-t border-[#1B2D4F]/06 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="font-body text-xs text-[#9CA3AF]">
                Ejemplo ilustrativo — los precios reales los recibes de los distribuidores de tu zona en Málaga
              </p>
            </div>
          </div>
        </div>

        {/* Supporting stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { stat: '3+', label: 'distribuidores consultados' },
            { stat: '1 día*', label: 'laborable como objetivo' },
            { stat: '0€', label: 'coste para el comprador' },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <p
                className="font-display font-extrabold text-[#E8882A]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                {item.stat}
              </p>
              <p className="mt-1 font-body text-xs text-white/40 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
