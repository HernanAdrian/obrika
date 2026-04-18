import { useState } from 'react'

const defaultFaqs = [
  {
    q: '¿Cuánto cuesta usar Obrika?',
    a: 'Para el comprador, nada. El modelo funciona cobrando a los distribuidores, no a ti.',
  },
  {
    q: '¿Tengo que registrarme para pedir presupuestos?',
    a: 'No. Solo necesitas describir el material y dejar tu email. Sin registro, sin contraseña, sin complicaciones.',
  },
  {
    q: '¿Cuánto tardo en recibir los precios?',
    a: 'Gestionamos cada solicitud personalmente. Primero confirmamos tu lista contigo, luego contactamos a los distribuidores de tu zona y te enviamos la comparativa por email. Hacemos todo lo posible por tenerla el mismo día laborable, aunque el plazo final depende de la disponibilidad de los distribuidores. En cualquier caso, te mantenemos informado.',
  },
  {
    q: '¿Qué tipo de materiales puedo solicitar?',
    a: 'Cualquier material de construcción y obra: cemento, ladrillos, ferralla, baldosas, aislamientos, impermeabilizantes, tuberías, material eléctrico, y mucho más.',
  },
  {
    q: '¿Para quién es Obrika?',
    a: 'Para profesionales: empresas de construcción, reforma u obras que compran material regularmente y trabajan en Málaga y provincia. No es para particulares que compran material de bricolaje puntual.',
  },
]

export default function FAQ({ faqs = defaultFaqs }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-[#F8F6F1] px-6 md:px-12 lg:px-24 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E8882A] mb-3">
            Resolvemos tus dudas
          </span>
          <h2
            className="font-display font-extrabold text-[#1B2D4F] leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden transition-shadow duration-200 ${
                  isOpen
                    ? 'shadow-md shadow-[#1B2D4F]/08 ring-1 ring-[#1B2D4F]/08'
                    : 'shadow-sm shadow-[#1B2D4F]/06 ring-1 ring-[#1B2D4F]/06 hover:shadow-md hover:shadow-[#1B2D4F]/08'
                }`}
              >
                {/* Amber left bar when open */}
                <div className={`h-0.5 transition-all duration-300 ${isOpen ? 'bg-[#E8882A]' : 'bg-transparent'}`} />

                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className={`font-display font-bold text-[15px] pr-6 leading-snug transition-colors duration-200 ${isOpen ? 'text-[#E8882A]' : 'text-[#1B2D4F] group-hover:text-[#E8882A]'}`}>
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#E8882A] rotate-180' : 'bg-[#1B2D4F]/06 group-hover:bg-[#E8882A]/10'
                  }`}>
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#1B2D4F]/50'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="w-8 h-px bg-[#E8882A]/30 mb-3" />
                      <p className="font-body text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
