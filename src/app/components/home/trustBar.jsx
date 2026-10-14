import Icon from '@/app/components/ui/icons'
import Counter from '@/app/components/ui/counter'
import FlagsMarquee from '@/app/components/ui/flagsMarquee'
import { trustItems } from '@/app/data/content'
import { metrics, site } from '@/app/data/site'

// Las tres primeras métricas del estudio; la cuarta vive sólo en /nosotros.
const stats = metrics.slice(0, 3)

/**
 * Barra de confianza y cifras: tarjeta clara que se monta sobre el borde inferior del hero,
 * las cifras del estudio con mucho aire y, debajo, la tira de banderas.
 */
export const TrustBar = () => (
  <section className="relative z-10 -mt-14 md:-mt-16">
    <div className="container-site">
      <div className="hidden overflow-hidden rounded-3xl border md:block border-brand100/80 bg-white shadow-[0_28px_60px_-34px_rgba(15,37,68,0.35)]">
        <div className="grid md:grid-cols-3">
          {trustItems.map((item, index) => (
            <article
              key={item.title}
              className={`flex items-start gap-4 px-6 py-7 md:px-8 md:py-9 ${
                index < trustItems.length - 1
                  ? 'border-b border-brand100/80 md:border-b-0 md:border-r'
                  : ''
              }`}
            >
              <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent50 text-accentDark">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[17px] font-bold leading-tight text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="container-site mt-20 text-center md:mt-20">
      <p className="eyebrow after:h-px after:w-6 after:bg-accent after:content-['']">
        Inicia Chile en cifras
      </p>
      <dl className="mx-auto mt-8 grid max-w-4xl grid-cols-3 divide-x divide-brand100">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 sm:px-8">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="block text-[26px] font-extrabold leading-none tracking-tight text-brand sm:text-[36px] md:text-[52px]"
              />
              <span className="mt-3 block text-[13px] font-medium leading-snug text-muted md:text-base">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <a
        href={site.phoneHref}
        className="mt-9 inline-flex items-center gap-2 text-[15px] font-semibold text-brand transition-colors hover:text-accentDark"
      >
        <Icon name="phone" className="h-4 w-4 text-accent" />
        {site.phone}
      </a>
    </div>

    <FlagsMarquee className="mt-10 md:mt-16" />
  </section>
)

export default TrustBar
