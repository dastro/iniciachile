import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { featuredServices } from '@/app/data/services'

export const ServiceCard = ({ service, className = '' }) => (
  <article className={`group flex flex-col ${className} rounded-2xl border border-brand100/80 bg-white p-8 shadow-[0_1px_2px_rgba(15,37,68,0.04),0_14px_34px_-24px_rgba(15,37,68,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accentLight hover:shadow-[0_22px_44px_-26px_rgba(15,37,68,0.28)]`}>
    <div className="flex items-start justify-between gap-3">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand50 text-brand transition-colors duration-300 group-hover:bg-accent50 group-hover:text-accentDark">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      {/* Etiqueta sólo en escritorio: en móvil ya se muestran únicamente los más solicitados */}
      {service.popular && (
        <span className="hidden rounded-full bg-accent50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-accentDark md:inline-flex">
          Más solicitado
        </span>
      )}
    </div>
    <h3 className="mt-6 text-xl font-bold leading-snug text-brand">{service.title}</h3>
    <p className="mt-3 flex-grow text-[15px] leading-relaxed text-muted">{service.short}</p>
    <Link
      href={service.href || `/servicios#${service.id}`}
      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accentDark transition-colors hover:text-accent"
    >
      Ver más
      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </article>
)

export const Services = () => (
  <section className="py-14 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Podemos ayudarte"
        title="Servicios legales migratorios en Chile"
        subtitle="Te asesoramos en residencia, nacionalización, subsanaciones, demoras y representación frente a la autoridad migratoria."
      />

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {featuredServices.map((service, index) => (
          // En móvil sólo los tres primeros; el botón lleva al listado completo
          <ServiceCard
            key={service.id}
            service={service}
            className={index >= 3 ? 'hidden md:flex' : ''}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center md:mt-12">
        <Link href="/servicios" className="btn-outline-dark">
          Ver todos los servicios
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default Services
