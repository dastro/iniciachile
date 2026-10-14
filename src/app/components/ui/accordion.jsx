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
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-bold text-brand transition-colors group-hover:text-accentDark md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-accent text-white'
                      : 'bg-brand50 text-brand group-hover:bg-accent50 group-hover:text-accentDark'
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
                <p className="pb-7 pr-12 text-base leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
