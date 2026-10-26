import Image from 'next/image'

// WebP rasterizado desde el SVG original de Illustrator (1,9 MB → 32 KB), a 3× de la
// altura máxima en pantalla para que se vea nítido en retina.
const FLAGS_SRC = '/images/refresh/banderas-latam.webp'

/**
 * Tira continua de banderas (recurso decorativo).
 * Dos copias consecutivas de la tira, con la misma imagen cargada como archivo externo, se
 * desplazan con una animación CSS lenta: al salir la primera, la segunda ya ocupa su lugar y
 * el ciclo vuelve a empezar sin saltos. Cada copia repite la imagen lo justo para ser más ancha
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
              width={4204}
              height={168}
              unoptimized
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
