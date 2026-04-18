import { useState } from 'react'

const GROUPS = [
  {
    label: 'Sobre la lista de materiales',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    items: [
      {
        q: '¿Tengo que saber la referencia exacta de cada material?',
        a: 'No. Escríbelo como lo harías en un mensaje a tu almacén: el nombre del material, la cantidad aproximada y la marca si la conoces. Nuestro equipo revisa tu lista antes de pedir ningún precio y te confirma que lo hemos entendido bien.',
      },
      {
        q: '¿Qué pasa si no sé qué marca necesito?',
        a: 'Deja el campo de marca en blanco o escribe "sin preferencia". Los distribuidores te ofrecerán las opciones disponibles en su stock y te indicaremos las diferencias para que puedas elegir.',
      },
      {
        q: '¿Cómo de detallada tiene que ser mi lista?',
        a: 'Cuanto más detallada, más precisos serán los precios que recibirás. Pero si tienes dudas sobre algún material, escríbelo igualmente con los datos que tengas. Lo importante es que quede claro qué estás buscando, aunque no sea con la referencia exacta.',
      },
      {
        q: '¿Qué pasa si me equivoco en las cantidades?',
        a: 'No pasa nada. Cuando confirmemos tu lista contigo, podemos ajustar cantidades si hay algo que no cuadra. Los presupuestos que recibirás también indican el precio unitario, así que puedes recalcular fácilmente.',
      },
      {
        q: '¿Puedo subir una foto de mi lista manuscrita o un Excel?',
        a: 'Sí. Usa el botón de subir archivo para adjuntar tu lista en cualquier formato: Excel, PDF, foto de lista escrita a mano o captura de pantalla. Nuestro equipo la procesa.',
      },
      {
        q: '¿Puedo pedir materiales de varias categorías en la misma solicitud?',
        a: 'Sí, puedes mezclar materiales de construcción, fontanería, electricidad o cualquier otra categoría en una sola solicitud. Lo gestionamos todo a la vez.',
      },
    ],
  },
  {
    label: 'Sobre el proceso y los plazos',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      {
        q: '¿Qué pasa exactamente después de enviar el formulario?',
        a: 'Primero te contactamos para confirmar que hemos entendido bien tu lista (por teléfono o email, según prefieras). Una vez confirmada, la enviamos a los distribuidores de tu zona. Cuando tengamos sus respuestas, te mandamos la comparativa a tu email.',
      },
      {
        q: '¿Cuándo recibo el presupuesto?',
        a: 'Trabajamos para tenerlo el mismo día laborable. El plazo final depende de cuándo nos contacten los distribuidores, pero hacemos todo lo posible para que no pase más de un día. Si hay algún retraso, te avisamos.',
      },
      {
        q: '¿Me llamáis antes de pedir los presupuestos?',
        a: 'Sí. Siempre confirmamos la solicitud contigo antes de contactar a los distribuidores. Así nos aseguramos de que los precios que recibirás sean exactamente para lo que necesitas.',
      },
      {
        q: '¿Puedo modificar mi solicitud después de enviarla?',
        a: 'Sí, en el momento de la llamada de confirmación puedes añadir, quitar o cambiar cualquier material. Si ya ha pasado la confirmación, escríbenos y lo gestionamos.',
      },
      {
        q: '¿A cuántos distribuidores se les solicita precio?',
        a: 'A todos los de nuestra red en tu zona que trabajen con los materiales que necesitas. El número varía según la categoría y la ubicación, pero siempre intentamos conseguir al menos tres opciones comparables.',
      },
    ],
  },
  {
    label: 'Sobre los precios y los distribuidores',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      {
        q: '¿Son precios reales o estimaciones?',
        a: 'Son precios reales solicitados directamente a cada distribuidor para tu pedido concreto. No son precios de catálogo ni estimaciones genéricas.',
      },
      {
        q: '¿Los precios incluyen IVA?',
        a: 'Lo indicamos en la comparativa para cada distribuidor. En general, los precios B2B se dan sin IVA, pero siempre lo especificamos claramente.',
      },
      {
        q: '¿Pueden entregar en obra?',
        a: 'Depende de cada distribuidor. En la comparativa te indicamos las condiciones de entrega de cada uno: si hacen entrega en obra, el plazo y si tiene coste adicional.',
      },
      {
        q: '¿Estoy obligado a comprar a algún distribuidor?',
        a: 'No. La comparativa es solo información. Tú decides si compras, a quién y cuándo. No hay ningún compromiso al hacer la solicitud.',
      },
      {
        q: '¿Por qué es gratuito para el comprador?',
        a: 'Porque nuestro modelo de negocio es con los distribuidores, no con los compradores. Para ti siempre será gratuito.',
      },
    ],
  },
  {
    label: 'Sobre el servicio',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    items: [
      {
        q: '¿El servicio está disponible fuera de Málaga?',
        a: 'De momento solo operamos en Málaga y provincia. Si tu obra es en otra zona, apúntate a la lista de espera y te avisamos cuando lleguemos a tu área.',
      },
      {
        q: '¿Puedo hacer varias solicitudes a la vez?',
        a: 'Sí, puedes tener varias solicitudes abiertas al mismo tiempo para distintas obras o proyectos.',
      },
      {
        q: '¿Qué hago si los precios que recibo son peores que los de mi distribuidor habitual?',
        a: 'Te recomendamos igualmente guardarlo de referencia. El servicio es más valioso en materiales con los que no tienes relación fija o en pedidos grandes donde una pequeña diferencia de precio tiene impacto real.',
      },
      {
        q: '¿Mis datos y mi lista de materiales son confidenciales?',
        a: 'Sí. Tu información solo se comparte con los distribuidores necesarios para obtener los precios que solicitas. No la vendemos ni la usamos para otros fines.',
      },
    ],
  },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#1B2D4F]/08 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <span className="font-body text-sm font-medium text-[#111827] group-hover:text-[#E8882A] transition-colors leading-snug">
          {q}
        </span>
        <svg
          className={`w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm text-[#6B7280] leading-relaxed pb-4">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

function GroupTab({ group, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs font-medium border transition-all whitespace-nowrap ${
        active
          ? 'bg-[#1B2D4F] border-[#1B2D4F] text-white'
          : 'bg-transparent border-[#1B2D4F]/20 text-[#1B2D4F]/70 hover:border-[#1B2D4F]/50 hover:text-[#1B2D4F]'
      }`}
    >
      {group.icon}
      {group.label}
    </button>
  )
}

export default function ProcessFAQ() {
  const [activeGroup, setActiveGroup] = useState(0)
  const group = GROUPS[activeGroup]

  return (
    <section className="bg-[#F8F6F1] border-t border-[#1B2D4F]/08 px-6 md:px-12 lg:px-24 py-10 md:py-12">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-7">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF] mb-2">
            Resuelve tus dudas
          </p>
          <h2
            className="font-display font-bold text-[#1B2D4F] leading-tight"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            Preguntas frecuentes antes de enviar tu solicitud
          </h2>
          <p className="mt-1.5 font-sans text-sm text-[#6B7280]">
            Todo lo que necesitas saber sobre cómo funciona el proceso.
          </p>
        </div>

        {/* Group tabs — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-6 scrollbar-hide -mx-1 px-1">
          {GROUPS.map((g, i) => (
            <GroupTab
              key={g.label}
              group={g}
              active={activeGroup === i}
              onClick={() => setActiveGroup(i)}
            />
          ))}
        </div>

        {/* FAQ items */}
        <div className="bg-white rounded-xl px-5 shadow-sm">
          {group.items.map((item) => (
            <AccordionItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

      </div>
    </section>
  )
}
