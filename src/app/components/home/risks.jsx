import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { risks } from '@/app/data/content'

/** Por qué una situación sin resolver se agrava: tono sereno, sin alarmas visuales. */
export const Risks = () => (
  <section className="bg-sand py-14 md:py-28">
    <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading
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

      <ul className="self-center overflow-hidden rounded-3xl border border-brand100/70 bg-white shadow-[0_1px_2px_rgba(15,37,68,0.04),0_18px_40px_-28px_rgba(15,37,68,0.22)] lg:col-span-7">
        {risks.map((risk) => (
          <li
            key={risk}
            className="flex items-start gap-4 border-b border-brand100/70 px-6 py-5 last:border-b-0 md:px-8"
          >
            <span
              aria-hidden="true"
              className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-accent/70"
            />
            <p className="text-[15px] leading-relaxed text-ink md:text-base">{risk}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Risks
