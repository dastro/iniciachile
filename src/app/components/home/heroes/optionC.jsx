'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Icon from '@/app/components/ui/icons'
import HeroVideo from '@/app/components/home/heroes/heroVideo'
import { heroDisclaimer, heroSlides } from '@/app/data/heroSlides'
import { trustItems } from '@/app/data/content'
import { site, whatsappUrl } from '@/app/data/site'

/**
 * OPCIÓN C — Panel de vidrio.
 * Video a sangre con el contenido dentro de un panel traslúcido centrado y la
 * barra de confianza integrada abajo, sin tarjeta flotante aparte. Incluye
 * control de pausa, porque el clip queda muy visible detrás del panel.
 */
export const HeroOptionC = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), 8000)
    return () => clearInterval(id)
  }, [paused])

  // El botón actúa sobre el clip visible. HeroVideo apila los tres, así que se
  // busca por el id del slide activo y no por el primer <video> del contenedor.
  const togglePlayback = () => {
    const video = wrapperRef.current?.querySelector(
      `video[data-slide-id="${heroSlides[current].id}"]`
    )
    if (!video) {
      setPaused((prev) => !prev)
      return
    }
    if (video.paused) {
      video.play().catch(() => {})
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  const slide = heroSlides[current]

  return (
    <section ref={wrapperRef} className="relative isolate overflow-hidden bg-brandDeep">
      <HeroVideo slides={heroSlides} active={current} overlay="even" />

      <div className="container-site relative flex min-h-[42rem] flex-col justify-center pb-14 pt-36 md:min-h-[46rem] md:pt-44">
        <div className="border-white/12 mx-auto w-full max-w-3xl rounded-[32px] border bg-brandDeep/55 p-8 text-center backdrop-blur-xl md:p-12">
          <div className="mx-auto w-fit">
            <div className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
              Estudio jurídico migratorio
            </div>
          </div>

          <div key={slide.id} className="animate-fadeInUp">
            <h1 className="mt-7 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[48px]">
              {slide.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {slide.subtitle}
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
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

          <p className="mx-auto mt-6 max-w-lg text-[13px] leading-relaxed text-white/45">
            {heroDisclaimer}
          </p>

          <div className="mt-8 flex items-center justify-center gap-5">
            <div className="flex items-center gap-2.5">
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

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={paused ? 'Reanudar el video de fondo' : 'Pausar el video de fondo'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-accent hover:text-accentLight"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                {paused ? (
                  <path d="M8 5l11 7-11 7z" />
                ) : (
                  <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Barra de confianza integrada, sin tarjeta flotante aparte */}
        <div className="mx-auto mt-12 grid w-full max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3.5 bg-brandDeep/70 px-5 py-5 backdrop-blur-md"
            >
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-accentLight">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-extrabold leading-tight text-white">{item.title}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <a
          href={site.phoneHref}
          className="mx-auto mt-8 flex w-fit items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-accentLight"
        >
          <Icon name="phone" className="h-4 w-4 text-accentLight" />
          {site.phone}
        </a>
      </div>
    </section>
  )
}

export default HeroOptionC
