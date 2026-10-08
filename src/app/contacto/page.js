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
  { icon: 'whatsapp', label: 'WhatsApp', value: site.phone, href: whatsappUrl, external: true },
  { icon: 'phone', label: 'Teléfono', value: site.phone, href: site.phoneHref },
  { icon: 'mail', label: 'Correo', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Oficina', value: site.address },
  { icon: 'clock', label: 'Horario', value: site.schedule }
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos tu caso y te decimos qué vías tienes"
        subtitle="Completa el formulario con tus datos y una breve descripción de tu situación. El equipo revisa los antecedentes y te responde dentro de 48 horas hábiles."
      />

      <section className="py-16 md:py-24">
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
                      <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
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
              <h3 className="text-lg font-extrabold">Qué pasa después de escribirnos</h3>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step) => (
                  <li key={step.step} className="flex gap-3">
                    <span className="text-sm font-extrabold text-accentLight">{step.step}</span>
                    <span className="text-sm leading-relaxed text-white/75">
                      <strong className="font-bold text-white">{step.title}.</strong>{' '}
                      {step.description}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm source="contacto" />
          </div>
        </div>
      </section>
    </>
  )
}
