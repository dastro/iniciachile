import SectionHeading from '@/app/components/ui/sectionHeading'
import { processSteps } from '@/app/data/content'

export const Process = () => (
  <section className="py-20 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso claro, en cuatro pasos"
        subtitle="Sabes en todo momento en qué etapa está tu caso y cuál es el siguiente movimiento."
      />

      <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {/* Línea que conecta los pasos en escritorio */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand100 via-accent/40 to-brand100 md:block"
        />

        {processSteps.map((item) => (
          <li key={item.step} className="relative md:pr-4">
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-base font-extrabold text-white ring-8 ring-white">
              {item.step}
            </span>
            <h3 className="mt-6 text-lg font-extrabold text-brand">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default Process
