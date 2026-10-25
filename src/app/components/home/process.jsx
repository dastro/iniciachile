import Image from 'next/image'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { processSteps } from '@/app/data/content'

export const Process = () => (
  <section className="bg-brand50 py-14 md:py-28">
    <div className="container-site">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso claro, en cuatro pasos"
        subtitle="Sabes en todo momento en qué etapa está tu caso y cuál es el siguiente movimiento."
      />

      <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
        <figure className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-[0_28px_60px_-34px_rgba(15,37,68,0.4)] sm:aspect-[16/9] lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src="/images/refresh/padre-hijo-2.jpg"
            alt="Padre e hijo sonriendo mientras revisan juntos una carpeta de documentos en un paradero"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[84%_40%]"
          />
        </figure>

        <ol className="relative lg:col-span-7">
          {/* Conector vertical discreto entre los pasos */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[27px] top-8 w-px bg-brand200/70"
          />

          {processSteps.map((item) => (
            <li key={item.step} className="relative flex gap-6 pb-10 last:pb-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand100 bg-white text-base font-bold text-brand shadow-[0_8px_20px_-14px_rgba(15,37,68,0.4)] ring-[6px] ring-brand50">
                {item.step}
              </span>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold text-brand">{item.title}</h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
)

export default Process
