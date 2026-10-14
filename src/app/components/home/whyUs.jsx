import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { commitments, expectations } from '@/app/data/content'

export const WhyUs = () => (
  <section className="py-14 md:py-28">
    <div className="container-site">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Compromiso profesional"
            title="Criterio jurídico, no sólo trámite administrativo"
            subtitle="Regularizar o avanzar en tu residencia no es sólo completar un formulario en Extranjería: requiere evaluar antecedentes, identificar la vía correcta y anticipar riesgos."
          />
        </div>

        <figure className="relative hidden aspect-[16/11] overflow-hidden md:block rounded-3xl shadow-[0_28px_60px_-34px_rgba(15,37,68,0.4)] lg:col-span-7 lg:aspect-[4/3]">
          <Image
            src="/images/refresh/consulta-abogada.jpg"
            alt="Abogada orientando a una pareja durante una consulta, con documentos sobre el escritorio"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover object-[88%_45%]"
          />
        </figure>
      </div>

      <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
        {expectations.map((item) => (
          <article key={item.title} className="card-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent50 text-accentDark">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-lg font-bold text-brand">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 hidden gap-8 rounded-3xl bg-sand p-8 md:grid md:grid-cols-12 md:gap-10 md:p-12">
        <div className="md:col-span-5">
          <h3 className="text-2xl font-bold leading-snug text-brand">
            Qué puedes esperar de trabajar con nosotros
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
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
              className="flex items-start gap-3 rounded-xl bg-white/80 px-4 py-4 ring-1 ring-brand100/60"
            >
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-ink">{commitment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default WhyUs
