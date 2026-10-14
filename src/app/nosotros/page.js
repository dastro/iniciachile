import Icon from '@/app/components/ui/icons'
import PageHero from '@/app/components/layout/pageHero'
import SectionHeading from '@/app/components/ui/sectionHeading'
import Counter from '@/app/components/ui/counter'
import CtaBanner from '@/app/components/home/ctaBanner'
import { commitments, processSteps, team } from '@/app/data/content'
import { metrics, offices } from '@/app/data/site'

export const metadata = {
  title: 'Nosotros',
  description:
    'Inicia Chile es un estudio jurídico dedicado exclusivamente a derecho migratorio chileno. Conoce nuestro enfoque, equipo y forma de trabajo.',
  alternates: { canonical: '/nosotros' }
}

const values = [
  {
    icon: 'scale',
    title: 'Especialización',
    description:
      'Trabajamos sólo derecho migratorio. Esa dedicación exclusiva nos permite conocer los criterios de la autoridad y anticipar dónde se traba un caso.'
  },
  {
    icon: 'chat',
    title: 'Claridad',
    description:
      'Explicamos en palabras simples qué es viable, qué riesgos existen y cuánto puede demorar. Sin promesas que no podamos sostener.'
  },
  {
    icon: 'shield',
    title: 'Cuidado del caso',
    description:
      'Antes de presentar cualquier solicitud revisamos antecedentes, plazos y notificaciones previas, porque un error de forma puede cerrar una vía.'
  }
]

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Un estudio dedicado exclusivamente a derecho migratorio"
        subtitle="Acompañamos a personas extranjeras que quieren vivir, trabajar y establecerse en Chile de forma regular, con un enfoque jurídico y no sólo administrativo."
      />

      {/* Métricas */}
      <section className="border-b border-brand100 bg-white py-14">
        <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center lg:text-left">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                className="block text-4xl font-bold tracking-tight text-brand md:text-5xl"
              />
              <span className="mt-2 block text-sm font-semibold text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Nuestro enfoque"
            title="Cómo entendemos el trabajo migratorio"
            subtitle="Cada expediente tiene antecedentes propios. Nuestro trabajo parte por entenderlos antes de recomendar cualquier acción."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="card-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon name={value.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-brand">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-brand50/60 py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Equipo"
            title="Quiénes revisarán tu caso"
            subtitle="Un mismo equipo te acompaña desde la evaluación inicial hasta el cierre del trámite."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-brand100 bg-white"
              >
                {/* Marcador de posición para la fotografía del profesional */}
                <div className="relative flex h-48 items-center justify-center bg-brand">
                  <span className="text-4xl font-bold tracking-tight text-white/90">
                    {initials(member.name)}
                  </span>
                  <svg
                    viewBox="0 0 80 80"
                    className="absolute bottom-3 right-3 h-10 w-10 opacity-25"
                    aria-hidden="true"
                  >
                    <circle cx="28" cy="56" r="6.5" fill="#F59E0B" />
                    <path
                      d="M28 44C28 34 35 25 45 25C52 25 57 29 59 34"
                      stroke="#FFFFFF"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M59 18L60.5 22.5L65 22.5L61.5 25.2L63 29.5L59 26.8L55 29.5L56.5 25.2L53 22.5L57.5 22.5Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold leading-snug text-brand">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accentDark">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-ink">{member.focus}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{member.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisos + proceso */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Compromiso profesional"
              title="Lo que puedes esperar de nosotros"
            />
            <ul className="mt-8 space-y-3">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[15px] leading-relaxed text-ink">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  className="flex gap-5 rounded-2xl border border-brand100 bg-white p-6"
                >
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                  <div>
                    <h3 className="text-lg font-bold text-brand">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Oficinas */}
      <section className="bg-brand50/60 py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Dónde estamos"
            title="Atendemos presencial y a distancia"
            subtitle="Si estás fuera de Santiago o fuera de Chile, el caso se lleva igual por videollamada y WhatsApp."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <article key={office.city} className="card-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-brand">{office.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{office.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Conversamos sobre tu caso?"
        subtitle="Cuéntanos tu situación y te decimos con franqueza qué alternativas existen."
      />
    </>
  )
}
