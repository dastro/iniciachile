'use client'
import { useEffect, useRef, useState } from 'react'

const OVERLAYS = {
  // Full-bleed: oscurece parejo y refuerza el lado del texto
  gradient:
    'bg-[linear-gradient(100deg,rgba(6,17,32,0.90)_0%,rgba(6,17,32,0.74)_45%,rgba(6,17,32,0.42)_100%)]',
  // Ventana contenida: apenas tiñe para que el clip se vea
  soft: 'bg-[linear-gradient(180deg,rgba(6,17,32,0.35)_0%,rgba(6,17,32,0.15)_50%,rgba(6,17,32,0.55)_100%)]',
  // Panel de vidrio: oscurece fuerte y parejo
  even: 'bg-brandDeep/80'
}

/**
 * Capa de fondo del hero.
 *
 * Monta los tres clips apilados una sola vez y hace cross-fade entre ellos, en
 * vez de remontar el <video> en cada cambio de mensaje: así el clip no se vuelve
 * a descargar ni parpadea al rotar.
 *
 * Si un MP4 no existe (o el navegador no puede reproducirlo, o el usuario pidió
 * reducir movimiento), ese clip simplemente no se muestra y queda a la vista el
 * fondo animado de marca que va debajo. El hero nunca se ve roto ni negro.
 */
export const HeroVideo = ({ slides, active = 0, overlay = 'gradient' }) => {
  const containerRef = useRef(null)
  const [readyIds, setReadyIds] = useState(() => new Set())

  // Marca cada clip como listo. `canplay` puede dispararse antes de que React
  // enganche el handler, así que además se consulta readyState al montar.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videos = Array.from(container.querySelectorAll('video'))
    const markReady = (id) => setReadyIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))

    const cleanups = videos.map((video) => {
      const id = video.dataset.slideId
      if (video.readyState >= 2) markReady(id)

      const onReady = () => markReady(id)
      video.addEventListener('loadeddata', onReady)
      video.addEventListener('canplay', onReady)
      return () => {
        video.removeEventListener('loadeddata', onReady)
        video.removeEventListener('canplay', onReady)
      }
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  // Sólo reproduce el clip visible: los ocultos se pausan para no gastar batería.
  // Depende también de `readyIds` porque un play() lanzado antes de que el clip
  // pueda reproducirse se rechaza en silencio y nunca se reintentaría.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const videos = Array.from(container.querySelectorAll('video'))

    videos.forEach((video, index) => {
      if (index === active && !reduceMotion) {
        const played = video.play()
        if (played?.catch) played.catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [active, readyIds])

  // Adelanta la descarga del clip siguiente mientras se ve el actual, para que
  // el cambio de mensaje no caiga al fondo de respaldo esperando el buffer.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videos = Array.from(container.querySelectorAll('video'))
    const next = videos[(active + 1) % videos.length]
    if (next && next.readyState < 2) next.load()
  }, [active])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Fondo animado de marca — visible mientras el clip no esté listo */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,#16365E_0%,#0F2544_45%,#061120_100%)]" />
      <div className="grid-overlay hero-grid-drift absolute inset-0 opacity-70" />
      <div className="hero-halo absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-[140px]" />
      <div className="hero-halo hero-halo-delayed absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#2A5A98]/40 blur-[150px]" />

      {slides.map((slide, index) => (
        <video
          key={slide.id}
          data-slide-id={slide.id}
          src={slide.video}
          poster={slide.poster}
          loop
          muted
          playsInline
          // Sólo el primero se descarga completo de entrada; el resto espera.
          preload={index === 0 ? 'auto' : 'metadata'}
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === active && readyIds.has(slide.id) ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className={`absolute inset-0 ${OVERLAYS[overlay]}`} />
    </div>
  )
}

export default HeroVideo
