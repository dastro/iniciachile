/** Encabezado estándar de sección: píldora + título + bajada. */
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) => (
  <div
    className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'} ${className}`}
  >
    {eyebrow && <div className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</div>}
    <h2
      className={`mt-5 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-[40px] ${
        light ? 'text-white' : 'text-brand'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
)

export default SectionHeading
