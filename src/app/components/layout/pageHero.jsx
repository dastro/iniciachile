/**
 * Cabecera compacta para páginas interiores.
 * `compact` reduce aún más la altura en móvil (p. ej. para que el formulario
 * de contacto quede a la vista); en escritorio no cambia nada.
 */
export const PageHero = ({ eyebrow, title, subtitle, children, compact = false }) => (
  <section
    className={`relative overflow-hidden border-b border-brand100/70 bg-sand md:pb-24 md:pt-44 ${
      compact ? 'pb-8 pt-28' : 'pb-16 pt-36'
    }`}
  >
    <div className="container-site relative">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1
        className={`max-w-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-brand md:mt-5 md:text-[50px] ${
          compact ? 'mt-3 text-[28px]' : 'mt-5 text-[34px]'
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`max-w-2xl leading-relaxed text-muted md:mt-6 md:text-lg ${
            compact ? 'mt-3 text-[15px]' : 'mt-6 text-lg'
          }`}
        >
          {subtitle}
        </p>
      )}
      {children && <div className="mt-9">{children}</div>}
    </div>
  </section>
)

export default PageHero
