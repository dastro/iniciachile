import Icon from '@/app/components/ui/icons'
import { trustItems } from '@/app/data/content'

/** Tarjeta flotante que se monta sobre el borde inferior del hero. */
export const TrustBar = () => (
  <section className="relative z-[70] -mt-16 md:-mt-20">
    <div className="container-site">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-brand shadow-[0_26px_60px_-20px_rgba(6,17,32,0.75)]">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#2A5A98]/40 blur-3xl" />

        <div className="relative grid md:grid-cols-3">
          {trustItems.map((item, index) => (
            <article
              key={item.title}
              className={`flex items-start gap-4 px-6 py-7 md:px-8 md:py-9 ${
                index < trustItems.length - 1
                  ? 'border-b border-white/10 md:border-b-0 md:border-r'
                  : ''
              }`}
            >
              <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-accentLight">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold leading-tight text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TrustBar
