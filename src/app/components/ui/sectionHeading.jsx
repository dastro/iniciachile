/** Encabezado estándar de sección: etiqueta + título + bajada. */
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) => {
  const centered = align === 'center'
  const eyebrowClass = light ? 'eyebrow-light' : 'eyebrow'
  // En títulos centrados la etiqueta lleva una línea a cada lado.
  const eyebrowSide = centered
    ? `after:h-px after:w-6 after:content-[''] ${light ? 'after:bg-accentLight' : 'after:bg-accent'}`
    : ''

  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'} ${className}`}
    >
      {eyebrow && <div className={`${eyebrowClass} ${eyebrowSide}`}>{eyebrow}</div>}
      <h2
        className={`mt-4 text-[30px] font-bold leading-[1.18] tracking-[-0.022em] md:text-[40px] ${
          light ? 'text-white' : 'text-brand'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-[17px] leading-relaxed md:text-lg ${
            light ? 'text-white/75' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
