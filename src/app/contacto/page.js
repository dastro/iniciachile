import Icon from '@/app/components/ui/icons'
import PageHero from '@/app/components/layout/pageHero'
import SectionHeading from '@/app/components/ui/sectionHeading'
import ContactForm from '@/app/components/contact/contactForm'
import { processSteps } from '@/app/data/content'
import { site, whatsappUrl } from '@/app/data/site'

export const metadata = {
  title: 'Contacto',
  description:
    'Cuéntanos tu situación migratoria y recibe orientación de abogados especialistas en derecho migratorio chileno. Respuesta en 48 horas hábiles.',
  alternates: { canonical: '/contacto' }
}

const channels = [
  {
    icon: 'whatsapp',
    label: 'Teléfono / WhatsApp',
    value: site.phone,
    href: whatsappUrl,
    external: true
  },
  { icon: 'mail', label: 'Correo', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Oficina', value: site.address },
  { icon: 'clock', label: 'Horario', value: site.schedule }
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contacto"
        title="Cuéntanos tu caso"
        subtitle="Completa el formulario y el equipo te responde dentro de 48 horas hábiles."
      />

      <section className="py-6 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading align="left" eyebrow="Canales directos" title="Hablemos" />

            <ul className="mt-8 space-y-3">
              {channels.map((channel) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand50 text-brand">
                      <Icon name={channel.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold text-muted">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block text-[15px] font-bold text-brand">
                        {channel.value}
                      </span>
                    </span>
                  </>
                )

                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 rounded-2xl border border-brand100 bg-white px-5 py-4 transition-colors hover:border-accent"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-brand100 bg-white px-5 py-4">
                        {inner}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 rounded-2xl bg-brand p-7 text-white">
              <h3 className="text-lg font-bold">Qué pasa después de escribirnos</h3>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step) => (
                  <li key={step.step} className="flex gap-3">
                    <span className="text-sm font-bold text-accentLight">{step.step}</span>
                    <span className="text-sm leading-relaxed text-white/75">
                      <strong className="font-bold text-white">{step.title}.</strong>{' '}
                      {step.description}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* En móvil el formulario va primero; en escritorio queda a la derecha */}
          <div className="order-first lg:order-none lg:col-span-8">
            <ContactForm source="contacto" />
          </div>
        </div>
      </section>
    </>
  )
}
