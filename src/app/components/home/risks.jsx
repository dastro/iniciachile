import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { risks } from '@/app/data/content'

/** Bloque de urgencia: por qué una situación sin resolver se agrava. */
export const Risks = () => (
  <section className="grid-overlay relative overflow-hidden bg-brand py-20 md:py-28">
    <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[130px]" />

    <div className="container-site relative grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading
          light
          align="left"
          eyebrow="Por qué no conviene esperar"
          title="Una situación migratoria no resuelta puede agravarse con el tiempo"
          subtitle="Mientras más pronto se evalúe tu caso, más alternativas pueden estar disponibles. Los plazos y los criterios de la autoridad cambian."
        />
        <Link href="/contacto" className="btn-primary mt-9">
          Evaluar mi situación
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>

      <ul className="grid gap-4 self-center lg:col-span-7">
        {risks.map((risk) => (
          <li
            key={risk}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-5"
          >
            <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-accentLight" />
            <p className="text-[15px] leading-relaxed text-white/80">{risk}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Risks
