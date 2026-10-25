'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from '@/app/components/ui/icons'
import { whatsappUrl } from '@/app/data/site'

const slides = [
  {
    title: 'Regulariza tu situación migratoria en Chile',
    subtitle:
      'Si tu permiso está vencido, observado o pendiente de resolución, evaluamos qué alternativas legales tienes según tus antecedentes.',
    image: {
      src: '/images/refresh/hero-familia.jpg',
      alt: 'Familia latinoamericana sonriendo junto a la entrada de un edificio de servicios',
      position: 'object-[90%_35%] xl:object-[85%_30%]'
    }
  },
  {
    title: '¿Tu trámite lleva meses sin respuesta?',
    subtitle:
      'La ley fija plazos al Estado. Revisamos el estado real de tu solicitud y las vías para exigir un pronunciamiento.',
    image: {
      src: '/images/refresh/hero-madre-hijo-2.jpg',
      alt: 'Madre e hijo adolescente sonriendo mientras caminan juntos frente a un edificio de servicios, con documentos en la mano',
      position: 'object-[96%_30%]'
    }
  },
  {
    title: 'Vive en Chile en regla y con tranquilidad',
    subtitle:
      'Residencia temporal, permanencia definitiva y nacionalización, con un equipo dedicado sólo a derecho migratorio.',
    image: {
      src: '/images/refresh/hero-plaza-documentos.jpg',
      alt: 'Dos mujeres sonriendo mientras revisan documentos sentadas en una banca de una plaza de Santiago',
      position: 'object-[50%_35%]'
    }
  }
]

const headlineClass =
  'mt-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px] md:text-brand lg:text-[44px] xl:text-[52px]'
const subtitleClass = 'mt-5 max-w-xl text-[17px] leading-relaxed text-white/85 md:text-xl md:text-muted'

export const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // Con "reducir movimiento" el titular no rota solo: se cambia con los indicadores.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div className="container-site pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <div className="relative z-10 xl:max-w-[600px]">
          <div className="eyebrow max-md:text-accentLight max-md:before:bg-accentLight">
            Estudio jurídico migratorio
          </div>

          {/* Los tres mensajes comparten celda: se reserva la altura del más largo y nada salta al rotar */}
          <div className="grid">
            {slides.map((slide) => (
              <div
                key={slide.title}
                aria-hidden="true"
                className="invisible col-start-1 row-start-1 select-none"
              >
                <p className={headlineClass}>{slide.title}</p>
                <p className={subtitleClass}>{slide.subtitle}</p>
              </div>
            ))}
            <div key={current} className="animate-fadeSoft col-start-1 row-start-1">
              <h1 className={headlineClass}>{slides[current].title}</h1>
              <p className={subtitleClass}>{slides[current].subtitle}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Link href="/contacto" className="btn-primary px-8 py-4">
              Evaluar mi situación migratoria
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark px-8 py-4 max-md:border-white max-md:text-white max-md:hover:bg-white max-md:hover:text-brand"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Indicadores del carrusel de titulares */}
          <div className="mt-8 flex items-center gap-2.5">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ver mensaje ${index + 1}`}
                aria-current={current === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === index
                    ? 'w-10 bg-accent'
                    : 'w-5 bg-white/40 hover:bg-white md:bg-brand200 md:hover:bg-brand'
                }`}
              />
            ))}
          </div>
        </div>

        {/*
          Fotografía: en móvil es el fondo del hero, con overlay para que el texto se lea;
          en tablet va bajo el mensaje y en escritorio a sangre a la derecha.
        */}
        <figure className="absolute inset-0 overflow-hidden md:relative md:inset-auto md:mt-10 md:aspect-[16/9] md:rounded-3xl xl:absolute xl:inset-y-0 xl:right-0 xl:mx-0 xl:mt-0 xl:aspect-auto xl:w-[52%] xl:rounded-none 2xl:w-[46%]">
          {/* Una fotografía por mensaje: todas apiladas, cambian con el mismo estado que el titular */}
          {slides.map((slide, index) => (
            <Image
              key={slide.image.src}
              src={slide.image.src}
              alt={slide.image.alt}
              aria-hidden={current !== index}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : 'eager'}
              sizes="(min-width: 1280px) 52vw, 100vw"
              className={`object-cover transition-opacity duration-[900ms] ease-out ${slide.image.position} ${
                current === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Overlay sólo en móvil: oscurece la foto para el texto blanco */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-brandDeep/75 via-brandDeep/55 to-brandDeep/85 md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-20 bg-gradient-to-b from-cream to-transparent md:block xl:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-[16%] bg-gradient-to-r from-cream via-cream/50 to-transparent xl:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-cream/75 to-transparent xl:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-cream to-transparent xl:block"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
