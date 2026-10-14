import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import PageHero from '@/app/components/layout/pageHero'
import Process from '@/app/components/home/process'
import CtaBanner from '@/app/components/home/ctaBanner'
import { services } from '@/app/data/services'
import { whatsappUrl } from '@/app/data/site'

export const metadata = {
  title: 'Servicios legales migratorios en Chile',
  description:
    'Residencia temporal, permanencia definitiva, nacionalización, regularización, subsanaciones, demoras, amparo y reunificación familiar. Asesoría de abogados especialistas en derecho migratorio.',
  alternates: { canonical: '/servicios' }
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios legales migratorios en Chile"
        subtitle="Te asesoramos en residencia, nacionalización, subsanaciones, demoras y representación frente a la autoridad migratoria."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contacto" className="btn-primary px-8 py-4">
            Evaluar mi caso
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark px-8 py-4"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Índice rápido */}
      <section className="border-b border-brand100 bg-brand50/60 py-8">
        <div className="container-site flex flex-wrap gap-2.5">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-full border border-brand100 bg-white px-4 py-2 text-[13px] font-bold text-brand transition-colors hover:border-accent hover:text-accent"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site space-y-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-2xl border border-brand100 bg-white p-7 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>
                <p className="mt-5 text-[13px] font-bold tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-snug text-brand">
                  {service.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{service.short}</p>
              </div>

              <div className="md:col-span-8 md:border-l md:border-brand100 md:pl-10">
                <p className="text-base leading-relaxed text-ink">{service.description}</p>

                <h3 className="mt-7 text-sm font-semibold text-accentDark">
                  Qué incluye
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contacto" className="btn-secondary">
                    Consultar por este servicio
                  </Link>
                  {service.href && (
                    <Link href={service.href} className="btn-outline-dark">
                      Ver detalle
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-brand50/60">
        <Process />
      </div>
      <CtaBanner />
    </>
  )
}
