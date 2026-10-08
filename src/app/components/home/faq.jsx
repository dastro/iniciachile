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
  <section className="py-20 md:py-28">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
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
        <Accordion items={items} />
        <p className="mt-8 rounded-xl bg-brand50 px-5 py-4 text-[13px] leading-relaxed text-slate-600">
          Esta información es general y no reemplaza una asesoría para tu caso particular.{' '}
          <Link href="/contacto" className="font-bold text-brand underline">
            Cuéntanos tu situación
          </Link>{' '}
          para una respuesta ajustada a tus antecedentes.
        </p>
      </div>
    </div>
  </section>
)

export default Faq
