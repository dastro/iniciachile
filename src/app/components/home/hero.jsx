'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from '@/app/components/ui/icons'
import Counter from '@/app/components/ui/counter'
import { metrics, site, whatsappUrl } from '@/app/data/site'

const slides = [
  {
    title: 'Regulariza tu situación migratoria en Chile',
    subtitle:
      'Si tu permiso está vencido, observado o pendiente de resolución, evaluamos qué alternativas legales tienes según tus antecedentes.'
  },
  {
    title: '¿Tu trámite lleva meses sin respuesta?',
    subtitle:
      'La ley fija plazos al Estado. Revisamos el estado real de tu solicitud y las vías para exigir un pronunciamiento.'
  },
  {
    title: 'Vive en Chile en regla y con tranquilidad',
    subtitle:
      'Residencia temporal, permanencia definitiva y nacionalización, con un equipo dedicado sólo a derecho migratorio.'
  }
]

// Las tres primeras métricas del estudio; la cuarta vive sólo en /nosotros.
const stats = metrics.slice(0, 3)

export const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-brandDeep">
      {/* Capas de fondo: degradado, malla y halos de marca */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_20%_0%,#16365E_0%,#0F2544_45%,#061120_100%)]" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-70" />
      <div className="absolute -left-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#2A5A98]/35 blur-[150px]" />

      {/* Isotipo ampliado como marca de agua */}
      <svg
        viewBox="0 0 80 80"
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 -z-10 hidden h-[34rem] w-[34rem] opacity-[0.07] lg:block"
      >
        <circle cx="28" cy="56" r="6.5" fill="#F59E0B" />
        <path
          d="M28 44C28 34 35 25 45 25C52 25 57 29 59 34"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M59 18L60.5 22.5L65 22.5L61.5 25.2L63 29.5L59 26.8L55 29.5L56.5 25.2L53 22.5L57.5 22.5Z"
          fill="#F59E0B"
        />
      </svg>

      <div className="container-site flex min-h-[41rem] flex-col justify-center pb-28 pt-36 md:min-h-[44rem] md:pb-36 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
              Estudio jurídico migratorio
            </div>

            <div key={current} className="animate-fadeInUp">
              <h1 className="mt-7 text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[54px]">
                {slides[current].title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                {slides[current].subtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              La evaluación identifica opciones y riesgos según tus antecedentes. No garantiza
              aprobación ni resultado migratorio.
            </p>

            {/* Indicadores del carrusel de titulares */}
            <div className="mt-10 flex items-center gap-2.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
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
            <div className="border-white/12 rounded-3xl border bg-white/[0.05] p-8 backdrop-blur-sm">
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

export default Hero
