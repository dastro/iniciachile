import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { featuredServices } from '@/app/data/services'

export const ServiceCard = ({ service }) => (
  <article className="group flex flex-col rounded-2xl border border-brand100/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-brand hover:shadow-[0_24px_50px_-24px_rgba(15,37,68,0.65)]">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand50 text-brand transition-colors group-hover:bg-accent group-hover:text-white">
      <Icon name={service.icon} className="h-6 w-6" />
    </span>
    <h3 className="mt-6 text-xl font-extrabold leading-snug text-brand transition-colors group-hover:text-white">
      {service.title}
    </h3>
    <p className="mt-3 flex-grow text-[15px] leading-relaxed text-slate-600 transition-colors group-hover:text-white/75">
      {service.short}
    </p>
    <Link
      href={service.href || `/servicios#${service.id}`}
      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-accent transition-colors group-hover:text-accentLight"
    >
      Ver más
      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </article>
)

export const Services = () => (
  <section className="py-20 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Podemos ayudarte"
        title="Servicios legales migratorios en Chile"
        subtitle="Te asesoramos en residencia, nacionalización, subsanaciones, demoras y representación frente a la autoridad migratoria."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/servicios" className="btn-outline-dark">
          Ver todos los servicios
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default Services
