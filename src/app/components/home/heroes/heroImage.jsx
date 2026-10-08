import Image from 'next/image'

/**
 * Capa de imagen de fondo con tratamiento duotono.
 *
 * Pasa la foto a escala de grises y le aplica el azul de marca con
 * `mix-blend-mode: color` (toma el tono del overlay y la luminosidad de la foto),
 * más un toque cálido en las luces. El efecto: cualquier foto de stock queda en la
 * paleta de Inicia Chile sin retoque previo, y el texto blanco encima siempre lee.
 *
 * `intensity` regula cuánto tiñe: 'full' para fondos a sangre bajo el titular,
 * 'soft' para imágenes contenidas donde conviene que la foto se reconozca.
 */
export const HeroImage = ({
  src,
  alt = '',
  priority = false,
  intensity = 'full',
  className = ''
}) => {
  const isFull = intensity === 'full'

  return (
    <div className={`absolute inset-0 overflow-hidden bg-brandDeep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{
          filter: isFull ? 'grayscale(1) contrast(1.08) brightness(0.92)' : 'grayscale(0.55)'
        }}
      />

      {/* Tinte de marca: conserva la luminosidad de la foto y le impone el tono azul */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand"
        style={{ mixBlendMode: 'color', opacity: isFull ? 1 : 0.7 }}
      />

      {/* Calidez del naranjo en las luces, para que el duotono no quede frío */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_25%,rgba(217,119,6,0.55)_0%,transparent_70%)]"
        style={{ mixBlendMode: 'soft-light' }}
      />
    </div>
  )
}

export default HeroImage
