import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import { whatsappUrl } from '@/app/data/site'

export const CtaBanner = ({
  title = 'Evalúa tu situación migratoria antes de que se agrave',
  subtitle = 'Mientras más pronto se evalúe tu caso, más opciones pueden estar disponibles. No esperes a que los plazos se cierren.',
  note = 'Confidencial. Sin compromiso. Respuesta en 48 horas hábiles.'
}) => (
  <section className="grid-overlay relative overflow-hidden bg-brandDeep py-20 md:py-24">
    <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
    <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#2A5A98]/30 blur-[140px]" />

    <div className="container-site relative text-center">
      <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[42px]">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/contacto" className="btn-primary cta-sheen px-9 py-4 text-[15px]">
          Evaluar mi situación migratoria
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light px-9 py-4 text-[15px]"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Escribir por WhatsApp
        </a>
      </div>

      <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/40">
        {note}
      </p>
    </div>
  </section>
)

export default CtaBanner
