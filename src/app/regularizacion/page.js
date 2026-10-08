import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import Accordion from '@/app/components/ui/accordion'
import PageHero from '@/app/components/layout/pageHero'
import SectionHeading from '@/app/components/ui/sectionHeading'
import ContactForm from '@/app/components/contact/contactForm'
import CtaBanner from '@/app/components/home/ctaBanner'
import { commitments, expectations, processSteps, risks, situations } from '@/app/data/content'
import { whatsappUrl } from '@/app/data/site'

export const metadata = {
  title: 'Regularización migratoria en Chile',
  description:
    'Si tu situación migratoria está vencida, irregular, observada o pendiente de resolución, evaluamos las alternativas disponibles según la normativa vigente.',
  alternates: { canonical: '/regularizacion' }
}

const faqs = [
  {
    question: '¿Puedo regularizar mi situación si mi visa está vencida?',
    answer:
      'Depende de los antecedentes específicos: tiempo transcurrido, tipo de visa original, existencia de multas o sanciones y otros factores. La evaluación identifica las opciones disponibles.'
  },
  {
    question: '¿Qué pasa si estoy en situación irregular hace mucho tiempo?',
    answer:
      'Cada caso es distinto. Se evalúan las alternativas según la normativa vigente, los antecedentes y las circunstancias personales. No todas las situaciones irregulares tienen la misma solución.'
  },
  {
    question: '¿La regularización garantiza que me aprueben la residencia?',
    answer:
      'No. La evaluación identifica opciones y riesgos, pero la decisión final corresponde a la autoridad migratoria según los antecedentes del caso.'
  },
  {
    question: '¿Atienden casos con observaciones o trámites archivados?',
    answer:
      'Sí. Se revisa la situación del trámite, las observaciones emitidas y se evalúan las vías para reactivar, complementar o presentar un nuevo trámite según corresponda.'
  },
  {
    question: '¿Qué necesito para solicitar la evaluación?',
    answer:
      'Completa el formulario con tus datos y una breve descripción de tu situación. Esto permite al equipo identificar el tipo de caso y orientar los próximos pasos.'
  }
]

const legalPoints = [
  'Evaluación de la situación migratoria actual y sus implicancias',
  'Identificación de alternativas legales según la normativa vigente',
  'Análisis de plazos, observaciones y notificaciones previas',
  'Revisión de antecedentes que puedan afectar el resultado',
  'Orientación sobre la documentación necesaria',
  'Definición de próximos pasos según el tipo de irregularidad',
  'Evaluación de riesgos antes de iniciar cualquier trámite'
]

export default function RegularizacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Regularización migratoria en Chile"
        title="Regulariza tu situación antes de que se cierren los plazos"
        subtitle="Si tu situación migratoria está vencida, irregular, observada o pendiente de resolución, evaluamos las alternativas disponibles según la normativa vigente."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#evaluacion" className="btn-primary cta-sheen px-8 py-4">
            Evaluar mi situación migratoria
          </a>
          <a href="#situaciones" className="btn-outline-light px-8 py-4">
            Ver situaciones que evaluamos
          </a>
        </div>
        <p className="mt-6 max-w-lg text-[13px] leading-relaxed text-white/45">
          La evaluación identifica opciones y riesgos según tus antecedentes. No garantiza
          aprobación ni resultado migratorio.
        </p>
      </PageHero>

      {/* Riesgos de no actuar */}
      <section className="border-b border-brand100 bg-brand50/60 py-16 md:py-20">
        <div className="container-site">
          <h2 className="max-w-2xl text-2xl font-extrabold leading-snug text-brand md:text-3xl">
            Una situación migratoria no resuelta puede agravarse con el tiempo
          </h2>
          <ul className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((risk) => (
              <li
                key={risk}
                className="flex items-start gap-3 rounded-2xl border border-brand100 bg-white px-5 py-5"
              >
                <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-slate-600">{risk}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Situaciones que evaluamos */}
      <section id="situaciones" className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Casos que atendemos"
            title="Situaciones que evaluamos"
            subtitle="Si no sabes si tu situación corresponde a regularización, descríbenos tu caso para que el equipo identifique la vía adecuada."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((situation) => (
              <article key={situation.title} className="card-soft">
                <h3 className="text-lg font-extrabold leading-snug text-brand">
                  {situation.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {situation.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#evaluacion" className="btn-primary">
              Evaluar mi situación migratoria
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Describir mi caso
            </a>
          </div>
        </div>
      </section>

      {/* Qué esperar */}
      <section className="bg-brand50/60 py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="La evaluación" title="Qué puedes esperar de la evaluación" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {expectations.map((item) => (
              <article key={item.title} className="card-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-brand">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Criterio jurídico */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Enfoque"
              title="Regularización con criterio jurídico, no sólo administrativo"
              subtitle="Regularizar una situación migratoria no es sólo completar un formulario en Extranjería. Requiere evaluar antecedentes, identificar la vía correcta y anticipar riesgos."
            />
          </div>
          <ul className="grid gap-3 self-center lg:col-span-7">
            {legalPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-brand100 bg-white px-5 py-4"
              >
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-[15px] leading-relaxed text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="grid-overlay relative overflow-hidden bg-brand py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[130px]" />
        <div className="container-site relative">
          <SectionHeading light eyebrow="Proceso" title="Cómo funciona la evaluación" />

          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7"
              >
                <span className="text-3xl font-extrabold text-accentLight">{item.step}</span>
                <h3 className="mt-4 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-white/10 pt-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-accentLight">
              Compromiso profesional
            </p>
            <ul className="mt-7 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3 text-white/75">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accentLight" />
                  <span className="text-[15px] leading-relaxed">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="evaluacion" className="bg-brand50/60 py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Evaluación de tu caso"
              title="Evalúa tu situación migratoria antes de que se agrave"
              subtitle="Completa tus datos y describe brevemente tu situación. Esta información permite identificar alternativas, riesgos y próximos pasos para tu regularización."
            />
            <div className="mt-9 space-y-4 rounded-2xl border border-brand100 bg-white p-6">
              <p className="text-sm font-bold text-brand">¿Necesitas avanzar más rápido?</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark w-full"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm source="regularizacion" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              eyebrow="Preguntas frecuentes"
              title="Sobre la regularización migratoria"
            />
            <Link href="/contacto" className="btn-outline-dark mt-8">
              Hacer otra pregunta
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner subtitle="Mientras más pronto se evalúe tu situación, más opciones pueden estar disponibles. No esperes a que los plazos se cierren." />
    </>
  )
}
