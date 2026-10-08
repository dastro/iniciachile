'use client'
import { useEffect, useRef, useState } from 'react'

/** Contador que se anima la primera vez que entra en viewport. */
export const Counter = ({ value, prefix = '', suffix = '', duration = 1800, className = '' }) => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setCurrent(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animated.current) return
          animated.current = true

          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = progress * (2 - progress) // ease-out cuadrático
            setCurrent(Math.floor(value * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toLocaleString('es-CL')}
      {suffix}
    </span>
  )
}

export default Counter
