import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { commitments, expectations } from '@/app/data/content'

export const WhyUs = () => (
  <section className="bg-brand50/60 py-20 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Compromiso profesional"
        title="Criterio jurídico, no sólo trámite administrativo"
        subtitle="Regularizar o avanzar en tu residencia no es sólo completar un formulario en Extranjería: requiere evaluar antecedentes, identificar la vía correcta y anticipar riesgos."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {expectations.map((item) => (
          <article key={item.title} className="card-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-lg font-extrabold text-brand">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 rounded-2xl border border-brand100 bg-white p-8 md:grid-cols-12 md:p-10">
        <div className="md:col-span-5">
          <h3 className="text-2xl font-extrabold leading-snug text-brand">
            Qué puedes esperar de trabajar con nosotros
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Te decimos con franqueza qué es viable y qué no. Si tu caso no tiene vía legal, también
            te lo diremos.
          </p>
          <Link href="/nosotros" className="btn-secondary mt-7">
            Conocer al equipo
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid gap-3 md:col-span-7 md:grid-cols-2">
          {commitments.map((commitment) => (
            <li
              key={commitment}
              className="flex items-start gap-3 rounded-xl bg-brand50/70 px-4 py-3.5"
            >
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-slate-700">{commitment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default WhyUs
