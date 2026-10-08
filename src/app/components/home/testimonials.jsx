'use client'
import { useEffect, useState } from 'react'
import SectionHeading from '@/app/components/ui/sectionHeading'
import { testimonials } from '@/app/data/content'

const Stars = ({ rating = 5 }) => (
  <div className="flex gap-1" aria-label={`${rating} de 5 estrellas`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${index < rating ? 'text-accent' : 'text-brand100'}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 3.2l2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8z" />
      </svg>
    ))}
  </div>
)

const Card = ({ item }) => (
  <figure className="flex h-full flex-col rounded-2xl border border-brand100 bg-white p-7">
    <Stars rating={item.rating} />
    <blockquote className="mt-5 flex-grow text-[15px] leading-relaxed text-slate-700">
      “{item.quote}”
    </blockquote>
    <figcaption className="mt-7 flex items-center gap-3 border-t border-brand100 pt-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
        {item.name.charAt(0)}
      </span>
      <span>
        <span className="block text-sm font-extrabold text-brand">{item.name}</span>
        <span className="block text-xs text-slate-500">
          {item.origin} · {item.service}
        </span>
      </span>
    </figcaption>
  </figure>
)

export const Testimonials = () => {
  const [page, setPage] = useState(0)
  const perPage = 3
  const pages = Math.ceil(testimonials.length / perPage)

  useEffect(() => {
    const id = setInterval(() => setPage((prev) => (prev + 1) % pages), 8000)
    return () => clearInterval(id)
  }, [pages])

  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="bg-brand50/60 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonios"
          title="Personas que ya ordenaron su situación"
          subtitle="Cada caso es distinto y ningún resultado está garantizado, pero así se vive el acompañamiento."
        />

        {/* Escritorio: rotación por páginas de tres */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {visible.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        {/* Móvil: la lista completa, apilada */}
        <div className="mt-12 grid gap-5 md:hidden">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-10 hidden items-center justify-center gap-2.5 md:flex">
            {Array.from({ length: pages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Ver testimonios ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  page === index ? 'w-10 bg-accent' : 'w-5 bg-brand200 hover:bg-brand'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
