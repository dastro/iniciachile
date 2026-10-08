import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import Counter from '@/app/components/ui/counter'
import HeroImage from '@/app/components/home/heroes/heroImage'
import { heroDisclaimer, heroSlides } from '@/app/data/heroSlides'
import { metrics, whatsappUrl } from '@/app/data/site'

/**
 * OPCIÓN E — Mosaico.
 * Texto sobre azul sólido y tres fotos escalonadas a la derecha. En vez de rotar
 * mensajes, muestra el recorrido completo de una: la preocupación, el trabajo del
 * estudio y el resultado. Sin carrusel — no hay nada que esperar para entenderlo.
 *
 * Es un componente de servidor: no tiene estado ni temporizadores.
 */
const tiles = [
  { ...heroSlides[0], caption: 'Llegas con un problema', offset: 'mt-0' },
  { ...heroSlides[1], caption: 'Lo revisamos contigo', offset: 'mt-10' },
  { ...heroSlides[2], caption: 'Resuelves y sigues', offset: 'mt-4' }
]

export const HeroOptionE = () => (
  <section className="relative isolate overflow-hidden bg-brand">
    <div className="grid-overlay absolute inset-0 opacity-50" />
    <div className="pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />

    <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <div className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
            Estudio jurídico migratorio
          </div>

          <h1 className="mt-7 text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[48px]">
            Regulariza tu situación migratoria en Chile
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Si tu permiso está vencido, observado o pendiente de resolución, evaluamos qué
            alternativas legales tienes según tus antecedentes.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Link href="/contacto" className="btn-primary cta-sheen px-7 py-4 text-[15px]">
              Evaluar mi situación migratoria
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light px-7 py-4 text-[15px]"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>

          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/45">
            {heroDisclaimer}
          </p>

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
          <ol className="grid grid-cols-3 gap-3 md:gap-5">
            {tiles.map((tile, index) => (
              <li key={tile.id} className={tile.offset}>
                <figure className="border-white/12 relative overflow-hidden rounded-2xl border shadow-[0_30px_60px_-35px_rgba(6,17,32,0.95)]">
                  <div className="relative aspect-[3/4]">
                    <HeroImage src={tile.image} intensity="soft" priority={index === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brandDeep via-brandDeep/25 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <span className="block text-[11px] font-extrabold tracking-[0.16em] text-accentLight">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1.5 block text-sm font-extrabold leading-snug text-white md:text-base">
                      {tile.caption}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
)

export default HeroOptionE
