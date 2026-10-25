import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { situations } from '@/app/data/content'
import { whatsappUrl } from '@/app/data/site'

export const Situations = () => (
  <section className="py-20 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Casos que atendemos"
        title="Situaciones que evaluamos"
        subtitle="Cada caso se analiza según sus propios antecedentes. Estas son las situaciones que llegan con más frecuencia al estudio."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {situations.map((situation, index) => (
          <article
            key={situation.title}
            className="rounded-2xl border border-brand100/80 bg-white p-8 shadow-[0_1px_2px_rgba(15,37,68,0.04),0_14px_34px_-26px_rgba(15,37,68,0.18)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-28px_rgba(15,37,68,0.26)]"
          >
            <span className="text-sm font-bold tracking-[0.12em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg font-bold leading-snug text-brand">{situation.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{situation.description}</p>
          </article>
        ))}
      </div>

      {/* Invitación a contar el caso, sobre la fotografía de madre e hija */}
      <div className="relative mt-12 overflow-hidden rounded-3xl bg-sand md:mt-14">
        <div className="relative aspect-[16/10] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[58%]">
          <Image
            src="/images/refresh/madre-hija-2.jpg"
            alt="Madre e hija abrazadas, con una carpeta de documentos, mirando hacia adelante"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover object-[78%_30%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sand to-transparent md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-sand via-sand/60 to-transparent md:block"
          />
        </div>

        <div className="relative px-6 pb-10 pt-8 md:max-w-[52%] md:px-12 md:py-16 lg:px-14 lg:py-24">
          <p className="text-lg font-semibold leading-relaxed text-brand md:text-xl">
            Si no sabes si tu situación corresponde a alguna de estas categorías, descríbenos tu
            caso y el equipo identificará la vía adecuada.
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Describir mi caso
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Situations
