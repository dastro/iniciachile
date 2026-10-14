import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/app/components/ui/icons'
import { whatsappUrl } from '@/app/data/site'

export const CtaBanner = ({
  title = 'Evalúa tu situación migratoria antes de que se agrave',
  subtitle = 'Mientras más pronto se evalúe tu caso, más opciones pueden estar disponibles. No esperes a que los plazos se cierren.',
  note = 'Confidencial. Sin compromiso. Respuesta en 48 horas hábiles.'
}) => (
  <section className="py-14 md:py-24">
    <div className="container-site">
      <div className="relative overflow-hidden rounded-[28px] bg-sand md:bg-[linear-gradient(100deg,#FBF2EF_0%,#F6F1E9_58%,#F6F1E9_100%)]">
        <div className="relative aspect-[16/10] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-1/2">
          <Image
            src="/images/refresh/familia-barrio.jpg"
            alt="Familia caminando por una calle de barrio, con una carpeta de documentos"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover object-[78%_35%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand to-transparent md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-sand via-sand/60 to-transparent md:block"
          />
        </div>

        <div className="relative px-6 pb-12 pt-4 md:max-w-[58%] md:px-14 md:py-20">
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-0.022em] text-brand md:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">{subtitle}</p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Link href="/contacto" className="btn-primary px-8 py-4">
              Evaluar mi situación migratoria
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark px-8 py-4"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </div>

          <p className="mt-7 text-sm font-medium text-muted">{note}</p>
        </div>
      </div>
    </div>
  </section>
)

export default CtaBanner
