import Link from 'next/link'
import Accordion from '@/app/components/ui/accordion'
import Icon from '@/app/components/ui/icons'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { faqs } from '@/app/data/content'
import { whatsappUrl } from '@/app/data/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
}

export const Faq = ({ items = faqs }) => (
  <section className="py-14 md:py-28">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-16 md:gap-12">
      <div className="lg:col-span-4">
        <SectionHeading
          align="left"
          eyebrow="Preguntas frecuentes"
          title="Dudas que nos llegan todas las semanas"
          subtitle="Si la tuya no está acá, escríbenos y te respondemos sin compromiso."
        />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-dark mt-8"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Hacer mi pregunta
        </a>
      </div>

      <div className="lg:col-span-8">
        {/* En móvil sólo las cuatro primeras preguntas */}
        <div className="md:hidden">
          <Accordion items={items.slice(0, 4)} />
        </div>
        <div className="hidden md:block">
          <Accordion items={items} />
        </div>
        <p className="mt-8 rounded-2xl bg-sand px-6 py-5 text-[13px] leading-relaxed text-muted">
          Esta información es general y no reemplaza una asesoría para tu caso particular.{' '}
          <Link href="/contacto" className="font-bold text-brand underline underline-offset-2">
            Cuéntanos tu situación
          </Link>{' '}
          para una respuesta ajustada a tus antecedentes.
        </p>
      </div>
    </div>
  </section>
)

export default Faq
