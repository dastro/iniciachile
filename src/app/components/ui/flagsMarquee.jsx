import Image from 'next/image'

const FLAGS_SRC = '/images/refresh/banderas-latam.svg'

/**
 * Tira continua de banderas (recurso decorativo).
 * Dos copias consecutivas de la tira, con el mismo SVG cargado como archivo externo, se
 * desplazan con una animación CSS lenta: al salir la primera, la segunda ya ocupa su lugar y
 * el ciclo vuelve a empezar sin saltos. Cada copia repite el SVG lo justo para ser más ancha
 * que cualquier pantalla (si no, en monitores anchos quedaría un hueco al cerrar el ciclo).
 * Con `prefers-reduced-motion` la tira queda quieta.
 */
const REPEATS_PER_COPY = 3

export const FlagsMarquee = ({ className = '' }) => (
  <div aria-hidden="true" className={`flags-mask relative overflow-hidden ${className}`}>
    <div className="flex w-max animate-marquee will-change-transform">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0">
          {Array.from({ length: REPEATS_PER_COPY }, (_, index) => (
            <Image
              key={index}
              src={FLAGS_SRC}
              alt=""
              width={15841}
              height={633}
              draggable={false}
              className="h-12 w-auto max-w-none shrink-0 select-none md:h-14"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default FlagsMarquee
