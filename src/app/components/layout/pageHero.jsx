/** Cabecera compacta para páginas interiores. */
export const PageHero = ({ eyebrow, title, subtitle, children }) => (
  <section className="grid-overlay relative overflow-hidden bg-brandDeep pb-16 pt-36 md:pb-24 md:pt-44">
    <div className="absolute inset-0 -z-0 bg-[radial-gradient(110%_80%_at_15%_0%,#16365E_0%,#0F2544_50%,#061120_100%)]" />
    <div className="pointer-events-none absolute -right-24 top-6 h-80 w-80 rounded-full bg-accent/20 blur-[130px]" />

    <div className="container-site relative">
      {eyebrow && <div className="eyebrow-light">{eyebrow}</div>}
      <h1 className="mt-6 max-w-3xl text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white md:text-[50px]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
      )}
      {children && <div className="mt-9">{children}</div>}
    </div>
  </section>
)

export default PageHero
