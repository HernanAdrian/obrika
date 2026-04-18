import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import Materials from '../components/Materials'
import QuoteForm from '../components/QuoteForm'
import ProcessFAQ from '../components/ProcessFAQ'
import ExampleResult from '../components/ExampleResult'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function LandingSegmento({ segment }) {
  useEffect(() => {
    document.title = `Obrika — ${segment.homeCard.title} en Málaga`
  }, [segment])

  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero config={segment.hero} />

      {/* Zona de acción — formulario */}
      <section
        id="solicitar"
        className="bg-[#F0EDE8] border-t-[3px] border-[#E8882A] px-6 md:px-12 lg:px-24 py-10 md:py-14"
      >
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="inline-block font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E8882A] mb-3">
              {segment.form.sectionLabel}
            </span>
            <h2
              className="font-display font-extrabold text-[#1B2D4F] leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
            >
              {segment.form.sectionTitle}
            </h2>
            <p className="mt-2.5 font-sans text-sm text-[#6B7280] max-w-md mx-auto">
              {segment.form.sectionSubtitle}
            </p>
            <div className="mt-5">
              <Materials chips={segment.pills} />
            </div>
          </div>

          {/* Human layer — personal note */}
          <div className="mb-4 flex items-start gap-3.5 bg-white/70 border border-[#1B2D4F]/08 rounded-xl px-4 py-3.5">
            <span className="w-8 h-8 rounded-full bg-[#1B2D4F] text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
              O
            </span>
            <div>
              <p className="font-display font-semibold text-sm text-[#1B2D4F]">
                Revisamos cada solicitud personalmente
              </p>
              <p className="font-body text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                Antes de contactar a ningún distribuidor, confirmamos contigo que hemos entendido bien tu lista. Cualquier duda, estamos disponibles por WhatsApp.
              </p>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#1B2D4F]/10 ring-1 ring-[#1B2D4F]/08">
            {/* Amber top bar */}
            <div className="h-1.5 bg-[#E8882A]" />
            <QuoteForm config={segment.form} />
          </div>
        </div>
      </section>

      <ProcessFAQ />
      <ExampleResult config={segment.example} />
      <FAQ faqs={segment.faqs} />
      <FinalCTA config={{ ...segment.cta, segmento: segment.id }} />
      <Footer />
    </div>
  )
}
