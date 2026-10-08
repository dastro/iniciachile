import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { situations } from '@/app/data/content'
import { whatsappUrl } from '@/app/data/site'

export const Situations = () => (
  <section className="bg-brand50/60 py-20 md:py-28">
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
            className="relative overflow-hidden rounded-2xl border border-brand100 bg-white p-7 transition-shadow hover:shadow-[0_20px_45px_-28px_rgba(15,37,68,0.55)]"
          >
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg font-extrabold leading-snug text-brand">
              {situation.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              {situation.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-brand100 bg-white p-8 text-center md:flex md:items-center md:justify-between md:gap-8 md:p-9 md:text-left">
        <p className="text-[15px] leading-relaxed text-slate-600 md:max-w-2xl">
          Si no sabes si tu situación corresponde a alguna de estas categorías, descríbenos tu caso
          y el equipo identificará la vía adecuada.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-0 md:shrink-0">
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
  </section>
)

export default Situations
