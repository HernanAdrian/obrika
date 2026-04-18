import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="bg-[#0d1520] border-b border-white/[0.06] px-6 md:px-12 py-3 flex items-center justify-between">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-sans text-xs text-white/50 hover:text-white/80 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Todos los sectores
      </Link>
      <img src="/logotipo.png" alt="Obrika" className="h-9 w-auto" />
    </div>
  )
}
