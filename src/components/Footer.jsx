export default function Footer() {
  return (
    <footer className="bg-[#0d1520] border-t border-white/[0.06] px-6 md:px-12 lg:px-24 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src="/logotipo.png" alt="Obrika" className="h-8 w-auto" />
          <span className="text-white/20 text-xs">·</span>
          <span className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} &middot; Málaga
          </span>
        </div>
        <div className="flex items-center gap-4 font-body text-xs text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">
            Privacidad
          </a>
          <span className="text-white/15">·</span>
          <a href="#" className="hover:text-white/60 transition-colors">
            Legal
          </a>
          <span className="text-white/15">·</span>
          <a href="mailto:contacto@obrika.es" className="hover:text-white/60 transition-colors">
            contacto@obrika.es
          </a>
        </div>
      </div>
    </footer>
  )
}
