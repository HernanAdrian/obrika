import { useState, useRef } from 'react'
import { WA_URL } from '../config'

const FORM_NAME = 'obrika-presupuesto'
const emptyRow = () => ({ material: '', marca: '' })

const defaultFormConfig = {
  hint: 'Escríbelo como lo harías en un WhatsApp a tu almacén — no hace falta la referencia exacta. Si tienes dudas sobre algún material, escríbelo igualmente: nuestro equipo revisa la lista antes de pedir ningún precio.',
  placeholder0: 'Ej: 50 placas pladur 13mm (Knauf aprox.), 20 sacos mortero cola, 1 grifo lavabo Grohe…',
  segmento: 'construccion',
}

const URGENCIA_OPTS = [
  {
    value: 'urgente',
    label: 'Hoy / mañana',
    sub: 'Urgente',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    value: 'esta-semana',
    label: 'Esta semana',
    sub: 'Normal',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
  },
  {
    value: 'sin-prisa',
    label: 'Sin prisa',
    sub: 'Planificando',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="flex items-start gap-4 pb-5 mb-6 border-b border-[#1B2D4F]/08">
      <span className="w-9 h-9 rounded-full bg-[#1B2D4F] text-white font-display font-extrabold text-base flex items-center justify-center shrink-0 mt-0.5">
        {number}
      </span>
      <div>
        <h3 className="font-display font-extrabold text-[#1B2D4F] text-xl leading-tight">{title}</h3>
        {subtitle && (
          <p className="mt-1 font-body text-sm text-[#6B7280] leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default function QuoteForm({ compact = false, config = {} }) {
  const { hint, placeholder0, segmento } = { ...defaultFormConfig, ...config }

  const [rows, setRows] = useState([emptyRow()])
  const [archivo, setArchivo] = useState(null)
  const [urgencia, setUrgencia] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [notas, setNotas] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  const updateRow = (i, field) => (e) =>
    setRows((prev) => prev.map((r, j) => (j === i ? { ...r, [field]: e.target.value } : r)))
  const addRow = () => setRows((prev) => [...prev, emptyRow()])
  const removeRow = (i) => {
    if (rows.length <= 1) return
    setRows((prev) => prev.filter((_, j) => j !== i))
  }
  const handleFileChange = (e) => setArchivo(e.target.files?.[0] ?? null)
  const clearFile = () => {
    setArchivo(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const materialesText = rows
        .filter((r) => r.material.trim())
        .map((r, i) => `${i + 1}. ${r.material}${r.marca ? ` (Marca: ${r.marca})` : ''}`)
        .join('\n')
      const formData = new FormData()
      formData.append('form-name', FORM_NAME)
      formData.append('segmento', segmento)
      formData.append('material', materialesText)
      formData.append('urgencia', urgencia)
      formData.append('ubicacion', ubicacion)
      formData.append('empresa', empresa)
      formData.append('notas', notas)
      formData.append('nombre', nombre)
      formData.append('telefono', telefono)
      formData.append('email', email)
      if (archivo) formData.append('archivo', archivo)
      const res = await fetch('/', { method: 'POST', body: formData })
      if (!res.ok) throw new Error('bad response')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-white border border-[#1B2D4F]/12 rounded-lg px-4 py-3.5 font-body text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E8882A] focus:ring-2 focus:ring-[#E8882A]/15 transition-all'

  const labelBase =
    'block font-display font-semibold text-[11px] uppercase tracking-[0.08em] text-[#1B2D4F]/60 mb-2'

  // ── Success ──────────────────────────────────────────────────────────────
  if (status === 'success') {
    const successContent = (
      <div className="text-center py-10 px-6 space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#E8882A]/10 flex items-center justify-center mx-auto">
          <svg className="w-7 h-7 text-[#E8882A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="font-display font-extrabold text-[#1B2D4F] text-2xl">¡Solicitud recibida!</p>
        <p className="font-body text-sm text-[#6B7280] max-w-xs mx-auto leading-relaxed">
          Antes de contactar a los distribuidores, te confirmamos que hemos entendido bien tu lista.
          Recibirás la comparativa de precios
          {email ? <> en <strong className="text-[#1B2D4F]">{email}</strong></> : ' en tu email'} en
          cuanto tengamos respuesta de los distribuidores.
        </p>
        {telefono && (
          <p className="font-body text-xs text-[#9CA3AF]">
            Te contactamos al {telefono} para confirmar tu solicitud.
          </p>
        )}
      </div>
    )
    if (compact) return <div className="w-full">{successContent}</div>
    return <div className="bg-white">{successContent}</div>
  }

  // ── Compact variant ───────────────────────────────────────────────────────
  if (compact) {
    return (
      <form
        name={FORM_NAME}
        data-netlify="true"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <input type="hidden" name="segmento" value={segmento} />
        <input
          type="text"
          name="material"
          placeholder="¿Qué material necesitas?"
          value={rows[0].material}
          onChange={updateRow(0, 'material')}
          className={`${inputBase} sm:flex-1`}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className={`${inputBase} sm:w-44`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-[#E8882A] text-white font-display font-bold rounded-lg px-8 py-3 hover:brightness-110 transition-all whitespace-nowrap disabled:opacity-60"
        >
          {status === 'submitting' ? 'Enviando...' : 'Pedir mis presupuestos →'}
        </button>
        {status === 'error' && (
          <p className="w-full text-red-500 text-xs mt-1">Algo ha fallado. Escríbenos a contacto@obrika.es</p>
        )}
      </form>
    )
  }

  // ── Full form ─────────────────────────────────────────────────────────────
  return (
    <form
      name={FORM_NAME}
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="divide-y divide-[#1B2D4F]/06"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="segmento" value={segmento} />

      {/* ── Sección 1: El encargo ───────────────────────────────────────── */}
      <div className="px-6 md:px-8 py-7 bg-white space-y-5">
        <SectionHeader
          number="1"
          title="El encargo"
          subtitle="Dónde y cuándo necesitas los materiales"
        />

        <div>
          <label className={labelBase}>
            Municipio o código postal <span className="text-[#E8882A] not-italic">*</span>
          </label>
          <input
            type="text"
            name="ubicacion"
            required
            placeholder="Ej: Málaga capital, Marbella, 29680…"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className={inputBase}
          />
          <p className="mt-1.5 font-body text-xs text-[#9CA3AF]">
            Necesitamos la zona para contactar a los distribuidores correctos
          </p>
        </div>

        {/* Urgencia — segmented control */}
        <div>
          <label className={labelBase}>¿Cuándo necesitas los materiales?</label>
          <div className="flex rounded-xl overflow-hidden border border-[#1B2D4F]/12">
            {URGENCIA_OPTS.map((opt, idx) => {
              const active = urgencia === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setUrgencia(active ? '' : opt.value)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-4 px-2 transition-all duration-200 ${
                    idx > 0 ? 'border-l border-[#1B2D4F]/08' : ''
                  } ${active ? 'bg-[#E8882A]' : 'bg-[#F9FAFB] hover:bg-white'}`}
                >
                  <span className={`transition-colors ${active ? 'text-white' : 'text-[#9CA3AF]'}`}>
                    {opt.icon}
                  </span>
                  <p className={`font-display font-bold text-xs leading-tight ${active ? 'text-white' : 'text-[#1B2D4F]'}`}>
                    {opt.label}
                  </p>
                  <p className={`font-body text-[10px] ${active ? 'text-white/80' : 'text-[#9CA3AF]'}`}>
                    {opt.sub}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Sección 2: Lista de materiales ──────────────────────────────── */}
      <div className="px-6 md:px-8 py-7 bg-[#FAFAF9] space-y-5">
        <SectionHeader
          number="2"
          title="Lista de materiales"
          subtitle="Escríbelo como puedas — revisamos la lista contigo antes de pedir precios"
        />

        {/* Hint */}
        <div className="flex gap-3 bg-white border-l-[3px] border-[#E8882A] rounded-r-lg px-4 py-3 shadow-sm">
          <svg className="w-4 h-4 text-[#E8882A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="font-body text-xs text-[#6B7280] leading-relaxed">{hint}</p>
        </div>

        {/* Column headers */}
        <div className="hidden sm:flex gap-2 items-center px-1">
          <span className="w-7 shrink-0" />
          <span className="flex-1 font-display font-semibold text-[10px] uppercase tracking-[0.08em] text-[#1B2D4F]/40">
            Material y cantidad
          </span>
          <span className="w-[148px] shrink-0 font-display font-semibold text-[10px] uppercase tracking-[0.08em] text-[#1B2D4F]/40">
            Marca / referencia
          </span>
          <span className="w-8 shrink-0" />
        </div>

        {/* Material rows */}
        <div className="space-y-2.5">
          {rows.map((row, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="w-7 h-[46px] flex items-center justify-center shrink-0">
                <span className="w-5 h-5 rounded-full bg-[#1B2D4F]/08 text-[#1B2D4F]/50 font-display font-bold text-[10px] flex items-center justify-center">
                  {i + 1}
                </span>
              </span>
              <input
                type="text"
                value={row.material}
                onChange={updateRow(i, 'material')}
                placeholder={i === 0 ? placeholder0 : 'Material, cantidad…'}
                className={`${inputBase} flex-1 min-w-0`}
              />
              <input
                type="text"
                value={row.marca}
                onChange={updateRow(i, 'marca')}
                placeholder={i === 0 ? 'Knauf, Weber… o vacío' : 'Sin preferencia'}
                className={`hidden sm:block ${inputBase} sm:w-[148px] sm:shrink-0`}
              />
              <button
                type="button"
                onClick={() => removeRow(i)}
                disabled={rows.length <= 1}
                className="w-8 h-[46px] shrink-0 flex items-center justify-center text-[#9CA3AF] hover:text-red-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                aria-label="Eliminar fila"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Add row */}
        <button
          type="button"
          onClick={addRow}
          className="inline-flex items-center gap-2 font-display font-semibold text-sm text-[#1B2D4F]/60 hover:text-[#E8882A] transition-colors group"
        >
          <span className="w-6 h-6 rounded-full border-2 border-dashed border-[#1B2D4F]/20 group-hover:border-[#E8882A] flex items-center justify-center transition-colors">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
          Añadir otro material
        </button>

        {/* File upload */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            name="archivo"
            accept=".xlsx,.xls,.csv,.pdf,.jpg,.jpeg,.png,.heic"
            onChange={handleFileChange}
            className="hidden"
          />
          {archivo ? (
            <div className="flex items-center justify-between gap-3 bg-[#E8882A]/06 border border-[#E8882A]/25 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-5 h-5 text-[#E8882A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-sm text-[#1B2D4F] truncate">{archivo.name}</p>
                  <p className="font-body text-xs text-[#9CA3AF]">Archivo adjunto</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearFile}
                className="text-[#9CA3AF] hover:text-red-400 transition-colors shrink-0"
                aria-label="Quitar archivo"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center gap-3 border border-dashed border-[#1B2D4F]/12 hover:border-[#E8882A]/40 rounded-xl px-4 py-4 transition-all group"
            >
              <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#E8882A] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <div className="text-left">
                <p className="font-display font-semibold text-sm text-[#1B2D4F]/70 group-hover:text-[#1B2D4F] transition-colors">
                  ¿Tienes la lista en un archivo?
                </p>
                <p className="font-body text-xs text-[#9CA3AF]">Excel, PDF, foto de lista manuscrita</p>
              </div>
            </button>
          )}
        </div>

        {/* Notas */}
        <div>
          <label className={labelBase}>
            Notas adicionales{' '}
            <span className="normal-case font-normal text-[#9CA3AF] tracking-normal">(opcional)</span>
          </label>
          <textarea
            name="notas"
            rows={2}
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            placeholder="Condiciones de entrega, acceso a la obra, marcas alternativas aceptables…"
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* ── Sección 3: Tus datos ─────────────────────────────────────────── */}
      <div className="px-6 md:px-8 py-7 bg-white space-y-5">
        <SectionHeader
          number="3"
          title="Tus datos"
          subtitle="Para enviarte la comparativa y confirmar tu lista"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelBase}>
              Nombre <span className="text-[#E8882A]">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre y apellido"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelBase}>
              Empresa{' '}
              <span className="normal-case font-normal text-[#9CA3AF] tracking-normal">(opcional)</span>
            </label>
            <input
              type="text"
              name="empresa"
              placeholder="Nombre de tu empresa o autónomo"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelBase}>
              Teléfono <span className="text-[#E8882A]">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              required
              placeholder="600 000 000"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className={inputBase}
            />
            <p className="mt-1.5 font-body text-xs text-[#9CA3AF]">
              Te llamamos si necesitamos aclarar algo de tu lista
            </p>
          </div>
          <div>
            <label className={labelBase}>
              Email <span className="text-[#E8882A]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBase}
            />
            <span className="inline-flex items-center gap-1 mt-1.5 font-body text-xs text-[#9CA3AF]">
              <svg className="w-3 h-3 text-[#E8882A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Aquí recibirás la comparativa de precios
            </span>
          </div>
        </div>
      </div>

      {/* ── Footer: proceso + CTA ────────────────────────────────────────── */}
      <div className="px-6 md:px-8 py-7 bg-[#FAFAF9] space-y-5">

        {/* ¿Cómo funciona? */}
        <div className="border border-[#1B2D4F]/08 rounded-xl overflow-hidden bg-white">
          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="w-full flex items-center justify-between gap-4 px-4 py-3.5 hover:bg-[#F9FAFB] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#E8882A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <span className="font-display font-semibold text-sm text-[#1B2D4F]">¿Cómo funciona esta solicitud?</span>
            </div>
            <svg
              className={`w-4 h-4 text-[#9CA3AF] transition-transform duration-200 ${showHelp ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${showHelp ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
                    title: 'Rellena tu lista',
                    text: 'Escríbelo como puedas. No hace falta la referencia exacta.',
                  },
                  {
                    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                    title: 'Confirmamos tu lista',
                    text: 'Te contactamos antes de pedir precios para asegurarnos de haberlo entendido bien.',
                  },
                  {
                    icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
                    title: 'Pedimos precios',
                    text: 'Contactamos a los distribuidores de tu zona. Tú no tienes que llamar a nadie.',
                  },
                  {
                    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
                    title: 'Recibes la comparativa',
                    text: 'Precios de cada almacén lado a lado. Hacemos todo lo posible por tenerla el mismo día laborable.',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#F9FAFB] rounded-lg p-3">
                    <span className="w-7 h-7 rounded-full bg-[#1B2D4F] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display font-bold text-xs text-[#1B2D4F]">{step.title}</p>
                      <p className="font-body text-xs text-[#6B7280] leading-relaxed mt-0.5">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proceso visible antes del CTA */}
        <div className="flex items-start gap-3 bg-[#E8882A]/06 border border-[#E8882A]/20 rounded-xl px-4 py-3.5">
          <svg className="w-5 h-5 text-[#E8882A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-body text-sm text-[#6B7280] leading-relaxed">
            Antes de contactar a los distribuidores,{' '}
            <strong className="font-semibold text-[#1B2D4F]">confirmamos que hemos entendido bien tu lista</strong>.
            Si algo no está claro, te llamamos.
          </p>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Sin registro' },
            { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Respuesta el mismo día laborable' },
            { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', text: '0€ para el comprador' },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-1.5 font-body text-xs text-[#9CA3AF]">
              <svg className="w-3.5 h-3.5 text-[#E8882A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
              </svg>
              {t.text}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#E8882A] text-white font-display font-extrabold text-lg rounded-xl py-4 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60 shadow-md shadow-[#E8882A]/25"
        >
          {status === 'submitting' ? 'Enviando…' : 'Pedir mis presupuestos →'}
        </button>

        {status === 'error' && (
          <p className="text-center text-red-500 text-sm">
            Algo ha fallado. Escríbenos a contacto@obrika.es
          </p>
        )}

        {/* WhatsApp alternative */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#1B2D4F]/08" />
          <span className="font-body text-xs text-[#9CA3AF]">o</span>
          <div className="flex-1 h-px bg-[#1B2D4F]/08" />
        </div>
        <a
          href={WA_URL()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 border border-[#1B2D4F]/12 rounded-xl py-3.5 font-display font-semibold text-sm text-[#1B2D4F]/70 hover:text-[#1B2D4F] hover:border-[#1B2D4F]/25 hover:bg-white transition-all"
        >
          <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escríbenos por WhatsApp
        </a>
      </div>
    </form>
  )
}
