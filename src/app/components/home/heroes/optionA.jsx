'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from '@/app/components/ui/icons'
import Counter from '@/app/components/ui/counter'
import HeroVideo from '@/app/components/home/heroes/heroVideo'
import { heroDisclaimer, heroSlides } from '@/app/data/heroSlides'
import { metrics, site, whatsappUrl } from '@/app/data/site'

const stats = metrics.slice(0, 3)

/**
 * OPCIÓN A — Cinematográfica.
 * Video a sangre con degradado lateral fuerte, titular rotativo a la izquierda
 * y tarjeta de cifras a la derecha. Cada mensaje trae su propio clip.
 */
export const HeroOptionA = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), 8000)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[current]

  return (
    <section className="relative isolate overflow-hidden bg-brandDeep">
      {/* Los tres clips van apilados; HeroVideo hace el cross-fade al rotar */}
      <HeroVideo slides={heroSlides} active={current} overlay="gradient" />

      <div className="container-site relative flex min-h-[41rem] flex-col justify-center pb-28 pt-36 md:min-h-[44rem] md:pb-36 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
              Estudio jurídico migratorio
            </div>

            <div key={slide.id} className="animate-fadeInUp">
              <h1 className="mt-7 text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[54px]">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                {slide.subtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row">
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

            <p className="mt-6 max-w-lg text-[13px] leading-relaxed text-white/45">
              {heroDisclaimer}
            </p>

            <div className="mt-10 flex items-center gap-2.5">
              {heroSlides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Ver mensaje ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index ? 'w-10 bg-accent' : 'w-5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-white/12 rounded-3xl border bg-brandDeep/45 p-8 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accentLight">
                Inicia Chile en cifras
              </p>
              <dl className="mt-7 space-y-7">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        className="block text-4xl font-extrabold tracking-tight text-white md:text-5xl"
                      />
                      <span className="mt-2 block text-sm font-semibold text-white/60">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.phoneHref}
                className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4 text-accentLight" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOptionA
