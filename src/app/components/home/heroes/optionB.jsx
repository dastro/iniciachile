'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from '@/app/components/ui/icons'
import Counter from '@/app/components/ui/counter'
import HeroVideo from '@/app/components/home/heroes/heroVideo'
import { heroDisclaimer, heroSlides } from '@/app/data/heroSlides'
import { metrics, whatsappUrl } from '@/app/data/site'
import { trustItems } from '@/app/data/content'

/**
 * OPCIÓN B — Ventana partida.
 * Texto sobre azul sólido a la izquierda y el video contenido en una ventana
 * redondeada a la derecha. El clip se ve limpio (sin overlay pesado encima) y
 * el texto tiene contraste garantizado. La más sobria de las tres.
 */
export const HeroOptionB = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), 8000)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[current]

  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <div className="grid-overlay absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
              Estudio jurídico migratorio
            </div>

            <div key={slide.id} className="animate-fadeInUp">
              <h1 className="mt-7 text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[50px]">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                {slide.subtitle}
              </p>
            </div>

            <div className="mt-9 flex flex-col flex-wrap gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-primary cta-sheen px-8 py-4 text-[15px]">
                Evaluar mi situación migratoria
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light px-8 py-4 text-[15px]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>

            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/45">
              {heroDisclaimer}
            </p>

            {/* Cifras en línea, para no competir con la ventana de video */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {metrics.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="block text-2xl font-extrabold tracking-tight text-white md:text-3xl"
                    />
                    <span className="mt-1.5 block text-xs font-semibold leading-snug text-white/55">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Ventana de video */}
              <div className="border-white/12 relative aspect-[4/5] overflow-hidden rounded-[32px] border shadow-[0_40px_80px_-40px_rgba(6,17,32,0.9)] sm:aspect-[3/2] lg:aspect-[4/5]">
                <HeroVideo slides={heroSlides} active={current} overlay="soft" />

                {/* Indicadores dentro de la ventana */}
                <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Ver mensaje ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === index ? 'w-9 bg-accent' : 'w-4 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Insignia flotante sobre la esquina de la ventana */}
              <div className="absolute -bottom-7 -left-4 hidden max-w-[17rem] rounded-2xl border border-brand100 bg-white p-5 shadow-[0_24px_50px_-24px_rgba(6,17,32,0.65)] sm:block">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={trustItems[0].icon} className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-extrabold leading-snug text-brand">
                  {trustItems[0].title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {trustItems[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOptionB
