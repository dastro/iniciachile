'use client'
import { useState } from 'react'

/** Acordeón de preguntas frecuentes. La primera abre por defecto. */
export const Accordion = ({ items, defaultOpen = 0 }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-brand100">
      {items.map((item, index) => {
        const isOpen = open === index

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-bold text-brand md:text-lg">{item.question}</span>
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                    isOpen
                      ? 'rotate-180 border-accent bg-accent text-white'
                      : 'border-brand100 text-brand'
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-base leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
