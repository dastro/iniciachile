import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import { heroDisclaimer, heroSlides } from '@/app/data/heroSlides'
import { trustItems } from '@/app/data/content'
import { site, whatsappUrl } from '@/app/data/site'

/**
 * OPCIÓN F — Editorial claro.
 * Invierte el esquema: fondo claro, texto azul oscuro y la foto contenida en un
 * bloque grande a la derecha, sin teñir. Es la única de las seis que no arranca
 * en oscuro, y por eso lee distinto: menos campaña, más institucional.
 *
 * Como la foto no lleva texto encima, aquí sí se aprecia el metraje tal cual.
 *
 * Es un componente de servidor: no tiene estado ni temporizadores.
 */
// heroSlides[2] apunta a bg-3, la imagen con luz alta — sobre fondo claro una
// imagen oscura se ve como un agujero en la página.
const slide = heroSlides[2]

export const HeroOptionF = () => (
  <section className="relative isolate overflow-hidden bg-brand50">
    {/* Bloque azul que ancla el logotipo de la navbar sobre fondo claro */}
    <div className="absolute inset-x-0 top-0 h-24 bg-brandDeep" />
    <div className="pointer-events-none absolute -right-40 top-32 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[150px]" />

    <div className="container-site relative pb-20 pt-32 md:pb-24 md:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Estudio jurídico migratorio
          </div>

          <h1 className="mt-7 text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] text-brand md:text-[52px]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">{slide.subtitle}</p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Link href="/contacto" className="btn-primary cta-sheen px-7 py-4 text-[15px]">
              Evaluar mi situación migratoria
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark px-7 py-4 text-[15px]"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>

          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-slate-500">
            {heroDisclaimer}
          </p>

          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand transition-colors hover:text-accent"
          >
            <Icon name="phone" className="h-4 w-4 text-accent" />
            {site.phone}
          </a>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(15,37,68,0.5)]">
              <Image
                src={slide.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Sólo un velo azul muy leve, para no perder la foto */}
              <div className="absolute inset-0 bg-brand/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Barra de confianza en claro, separada por una línea fina */}
      <div className="mt-20 grid gap-8 border-t border-brand100 pt-10 md:grid-cols-3 md:gap-10">
        {trustItems.map((item) => (
          <article key={item.title} className="flex items-start gap-3.5">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-sm font-extrabold leading-tight text-brand">{item.title}</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default HeroOptionF
