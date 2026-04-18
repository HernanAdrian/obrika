// Helper para resaltar palabras clave en amber
const h = (text) => <span style={{ color: '#E8882A' }}>{text}</span>

// FAQs comunes a todos los segmentos de precio
const commonFaqs = [
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
]

// ─────────────────────────────────────────────────────────────
// CONSTRUCCIÓN
// ─────────────────────────────────────────────────────────────
export const construccion = {
  id: 'construccion',
  path: '/construccion',
  homeCard: {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    badge: 'Reforma y construcción',
    title: 'Material de obra',
    desc: 'Cemento, pladur, morteros, yeso, aislamiento, cerámica…',
  },
  hero: {
    badge: 'Material de obra · Málaga',
    headline: <>Pide precio a {h('todos tus almacenes')} sin hacer {h('una sola llamada')}</>,
    subheadline: 'Mándanos tu lista — contactamos a los distribuidores de materiales de tu zona en Málaga en tu nombre. Sin llamadas, sin seguimientos, sin perder el tiempo.',
  },
  pills: [
    { label: 'Pladur y perfilería', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" /></svg> },
    { label: 'Morteros y adhesivos', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> },
    { label: 'Pinturas', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
    { label: 'Aislamiento', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { label: 'Cerámica', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg> },
    { label: 'Fontanería', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 002.12 0l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1a1.5 1.5 0 01-2.12 0z" /></svg> },
    { label: 'y más…', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg> },
  ],
  form: {
    sectionLabel: 'Solicitar presupuesto',
    sectionTitle: <>Pide precio a {h('los distribuidores de tu zona')} en un solo paso</>,
    sectionSubtitle: 'Rellena la lista — nuestro equipo gestiona la solicitud personalmente y te manda la comparativa de precios',
    hint: 'Escríbelo como se lo dirías a tu almacén — «pladur 13mm de Knauf», «mortero cola sin marca», «50 sacos de yeso proyectable».',
    placeholder0: 'Ej: 50 placas pladur 13mm (Knauf), 20 sacos mortero…',
    segmento: 'construccion',
  },
  example: {
    title: 'Recibes algo así en tu email',
    subtitle: 'Comparativa real de precios — lado a lado, sin letra pequeña',
    colHeader: 'Almacén',
    mockData: [
      { material: 'Placa pladur 13mm (50 uds)', prices: ['4,20 €/ud', '4,45 €/ud', '3,95 €/ud'] },
      { material: 'Mortero cola flexible (25 kg)', prices: ['8,90 €', '9,50 €', '8,75 €'] },
      { material: 'Perfil montante 48mm (3 m)', prices: ['2,10 €/ud', '1,95 €/ud', '2,30 €/ud'] },
    ],
  },
  faqs: [
    ...commonFaqs,
    {
      q: '¿Qué tipo de materiales puedo solicitar?',
      a: 'Cualquier material de construcción y obra: cemento, ladrillos, ferralla, baldosas, aislamientos, impermeabilizantes, tuberías, material eléctrico y mucho más.',
    },
    {
      q: '¿Para quién es Obrika?',
      a: 'Para profesionales: empresas de construcción, reforma u obras que compran material regularmente y trabajan en Málaga y provincia. No es para particulares que compran material de bricolaje puntual.',
    },
  ],
  cta: {
    headline: 'Una lista. Sin llamadas. Los precios llegan a ti.',
    body: 'Describe los materiales que necesitas, deja tu email y nuestro equipo gestiona todo personalmente.',
  },
}

// ─────────────────────────────────────────────────────────────
// HVAC / CLIMATIZACIÓN
// ─────────────────────────────────────────────────────────────
export const hvac = {
  id: 'hvac',
  path: '/hvac',
  homeCard: {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    badge: 'Climatización',
    title: 'HVAC y clima',
    desc: 'Splits, conductos, fancoils, bombas de calor, VRV…',
  },
  hero: {
    badge: 'Empresas de climatización · Málaga',
    headline: <>Pide precio a {h('todos tus distribuidores HVAC')} sin hacer {h('una sola llamada')}</>,
    subheadline: 'Mándanos la referencia o descripción del equipo — contactamos a los distribuidores de climatización de tu zona en Málaga en tu nombre. Sin llamadas, sin seguimientos.',
  },
  pills: [
    { label: 'Unidades split', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> },
    { label: 'Conductos', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg> },
    { label: 'Refrigerante', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
    { label: 'Fancoils', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg> },
    { label: 'Bombas de calor', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg> },
    { label: 'VRV / VRF', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg> },
    { label: 'Rejillas', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> },
    { label: 'Filtros', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg> },
  ],
  form: {
    sectionLabel: 'Solicitar presupuesto HVAC',
    sectionTitle: <>Pide precio a {h('los distribuidores HVAC de tu zona')} en un solo paso</>,
    sectionSubtitle: 'Escribe la referencia o descripción del equipo — nuestro equipo gestiona la solicitud personalmente y te manda la comparativa de precios',
    hint: 'Escribe la referencia exacta si la tienes, o descríbelo: «unidad interior Mitsubishi 2.5kW para cassette», «50m conducto circular 200mm», «gas R32 botella 10kg».',
    placeholder0: 'Ej: unidad interior MLZ-KP25VF (Mitsubishi), 50m conducto Ø200…',
    segmento: 'hvac',
  },
  example: {
    title: 'Recibes algo así en tu email',
    subtitle: 'Precios de distribuidores HVAC de Málaga — comparados en un vistazo',
    colHeader: 'Distribuidor',
    mockData: [
      { material: 'Unidad interior MLZ-KP25VF', prices: ['485 €', '512 €', '461 €'] },
      { material: 'Gas R32 botella 10 kg', prices: ['89 €', '95 €', '87 €'] },
      { material: 'Conducto flexible Ø150 (m)', prices: ['12,50 €', '11,80 €', '13,20 €'] },
    ],
  },
  faqs: [
    ...commonFaqs,
    {
      q: '¿Podéis encontrar equipos con stock inmediato para obra de mañana?',
      a: 'Sí. Cuando envíes la solicitud indícalo en el campo de urgencia y lo priorizamos. Los distribuidores de nuestra red confirman disponibilidad inmediata.',
    },
    {
      q: '¿Trabajáis con todas las marcas — Mitsubishi, Daikin, Fujitsu, Panasonic?',
      a: 'Sí. Consultamos en distribuidores multimarca. Si tienes preferencia de marca, indícalo en el campo de marca; si no, te mostramos la mejor opción disponible.',
    },
    {
      q: '¿Qué pasa si no sé la referencia exacta del equipo?',
      a: 'No hay problema. Escribe la descripción: potencia, tipo de instalación y uso. Con eso consultamos y te devolvemos opciones equivalentes.',
    },
  ],
  cta: {
    headline: 'Una solicitud. Sin llamadas. Los precios llegan a ti.',
    body: 'Escribe la referencia o descripción del equipo y nuestro equipo gestiona todo personalmente.',
  },
}

// ─────────────────────────────────────────────────────────────
// ELECTRICIDAD
// ─────────────────────────────────────────────────────────────
export const electricidad = {
  id: 'electricidad',
  path: '/electricidad',
  homeCard: {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    badge: 'Instalaciones eléctricas',
    title: 'Material eléctrico',
    desc: 'Cable, cuadros, protecciones, bandejas, tubo corrugado…',
  },
  hero: {
    badge: 'Empresas instaladoras · Málaga',
    headline: <>Pide precio a {h('todos tus distribuidores eléctricos')} sin hacer {h('una sola llamada')}</>,
    subheadline: 'Mándanos tu lista — cable, cuadros, protecciones, canalización — y contactamos a los distribuidores eléctricos de tu zona en Málaga en tu nombre. Sin llamadas, sin seguimientos.',
  },
  pills: [
    { label: 'Cable RZ1-K', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
    { label: 'Cable manguera', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5a.75.75 0 01.75.75v.75m-15 0h15M4.5 5.25v15m0 0h15m-15 0a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h1.5" /></svg> },
    { label: 'Cuadros modulares', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" /></svg> },
    { label: 'Interruptores automáticos', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg> },
    { label: 'Bandejas portacables', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg> },
    { label: 'Tubo corrugado', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg> },
    { label: 'Mecanismos', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg> },
    { label: 'y más…', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg> },
  ],
  form: {
    sectionLabel: 'Solicitar presupuesto eléctrico',
    sectionTitle: <>Pide precio a {h('los distribuidores eléctricos de tu zona')} en un solo paso</>,
    sectionSubtitle: 'Escribe tu lista de material eléctrico — nuestro equipo gestiona la solicitud personalmente y te manda la comparativa de precios',
    hint: 'Escribe como se lo dirías a tu distribuidor: «bobina 100m cable RZ1-K 6mm²», «IGA 40A curva C», «50m tubo corrugado M25».',
    placeholder0: 'Ej: bobina 100m cable RZ1-K 6mm² (Prysmian), IGA 40A curva C…',
    segmento: 'electricidad',
  },
  example: {
    title: 'Recibes algo así en tu email',
    subtitle: 'Precios de distribuidores eléctricos de Málaga — en un solo email',
    colHeader: 'Distribuidor',
    mockData: [
      { material: 'Cable RZ1-K 6mm² (bobina 100m)', prices: ['148 €', '162 €', '141 €'] },
      { material: 'ICP 25A 2P (Schneider)', prices: ['38,50 €', '35,20 €', '40,00 €'] },
      { material: 'Tubo corrugado M25 (rollo 100m)', prices: ['22 €', '26 €', '24 €'] },
    ],
  },
  faqs: [
    ...commonFaqs,
    {
      q: '¿Trabajáis con referencias de Schneider, ABB, Legrand, Siemens?',
      a: 'Sí. Consultamos en distribuidores multimarca. Si tienes preferencia de fabricante, indícalo en el campo de marca referida.',
    },
    {
      q: '¿Podéis buscar tanto material de baja tensión como accesorios y canalización?',
      a: 'Sí, cualquier material eléctrico: cable, cuadros, protecciones, canalización, iluminación, mecanismos y sistemas de control.',
    },
  ],
  cta: {
    headline: 'Una lista. Sin llamadas. Los precios llegan a ti.',
    body: 'Escribe el cable, las protecciones y la canalización que necesitas y nuestro equipo gestiona todo personalmente.',
  },
}

// ─────────────────────────────────────────────────────────────
// FONTANERÍA
// ─────────────────────────────────────────────────────────────
export const fontaneria = {
  id: 'fontaneria',
  path: '/fontaneria',
  homeCard: {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 002.12 0l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1a1.5 1.5 0 01-2.12 0z" />
      </svg>
    ),
    badge: 'Instalaciones sanitarias',
    title: 'Fontanería',
    desc: 'Tubería, sanitarios, calentadores, griferías, colectores…',
  },
  hero: {
    badge: 'Empresas de fontanería · Málaga',
    headline: <>Pide precio a {h('todos tus distribuidores de fontanería')} sin hacer {h('una sola llamada')}</>,
    subheadline: 'Mándanos tu lista — tubería, sanitarios, calentadores, racores — y contactamos a los distribuidores de fontanería de tu zona en Málaga en tu nombre. Sin llamadas, sin seguimientos.',
  },
  pills: [
    { label: 'Tubería PEX', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg> },
    { label: 'Cobre', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { label: 'PVC presión', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg> },
    { label: 'Calentadores', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg> },
    { label: 'Sanitarios', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { label: 'Griferías', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { label: 'Colectores', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5a.75.75 0 01.75.75v.75m-15 0h15M4.5 5.25v15m0 0h15m-15 0a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h1.5" /></svg> },
    { label: 'Válvulas', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 002.12 0l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1a1.5 1.5 0 01-2.12 0z" /></svg> },
  ],
  form: {
    sectionLabel: 'Solicitar presupuesto fontanería',
    sectionTitle: <>Pide precio a {h('los distribuidores de fontanería de tu zona')} en un solo paso</>,
    sectionSubtitle: 'Escribe tu lista de material — nuestro equipo gestiona la solicitud personalmente y te manda la comparativa de precios',
    hint: 'Escribe como se lo dirías a tu distribuidor: «colector PEX 5 salidas Uponor», «50m tubería cobre 22mm», «calentador 50L eléctrico Junkers».',
    placeholder0: 'Ej: colector PEX 5 salidas (Uponor), 50m tubería cobre 22mm…',
    segmento: 'fontaneria',
  },
  example: {
    title: 'Recibes algo así en tu email',
    subtitle: 'Precios de distribuidores de fontanería de Málaga — en un solo email',
    colHeader: 'Distribuidor',
    mockData: [
      { material: 'Colector PEX 5 salidas (Uponor)', prices: ['94 €', '87 €', '101 €'] },
      { material: 'Tubería cobre 22mm (barra 3m)', prices: ['18,50 €', '19,20 €', '17,80 €'] },
      { material: 'Válvula de esfera 3/4"', prices: ['8,40 €', '7,95 €', '9,10 €'] },
    ],
  },
  faqs: [
    ...commonFaqs,
    {
      q: '¿Trabajáis con marcas como Uponor, Giacomini, Grohe, Junkers?',
      a: 'Sí. Consultamos en distribuidores multimarca especializados en instalaciones sanitarias. Si tienes preferencia de marca, indícalo; si no, te mostramos la mejor relación calidad-precio disponible.',
    },
    {
      q: '¿Podéis buscar también material para ACS y calefacción?',
      a: 'Sí. Tubería, colectores, circuladoras, valvulería, calentadores eléctricos y de gas — cualquier material de instalaciones sanitarias y de calefacción.',
    },
  ],
  cta: {
    headline: 'Una lista. Sin llamadas. Los precios llegan a ti.',
    body: 'Escribe la tubería, los sanitarios y los accesorios que necesitas y nuestro equipo gestiona todo personalmente.',
  },
}

// ─────────────────────────────────────────────────────────────
// MANTENIMIENTO / FM — Coming soon (producto diferente)
// ─────────────────────────────────────────────────────────────
export const mantenimiento = {
  id: 'mantenimiento',
  path: '/mantenimiento',
  comingSoon: true,
  homeCard: {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 002.12 0l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1a1.5 1.5 0 01-2.12 0zM10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    badge: 'Producto diferente',
    title: 'Técnicos en campo',
    desc: 'Control de compras descentralizadas para empresas con equipos de mantenimiento.',
    isDifferent: true,
  },
}

// Exportar todos los segmentos como array ordenado para el Home
export const allSegments = [construccion, hvac, electricidad, fontaneria, mantenimiento]
