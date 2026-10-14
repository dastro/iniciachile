import Link from 'next/link'

/**
 * Logotipo Inicia Chile: isotipo en SVG + tipografía en HTML.
 * El logo no sigue el sistema de interfaz: conserva su tipografía (Plus Jakarta Sans,
 * variable --font-logo) y su naranja propio, tal como en los archivos de marca.
 *
 * `variant`: 'dark' sobre fondos claros, 'light' sobre fondos azules.
 */
const Isotype = ({ variant, className }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    {variant === 'light' ? (
      <rect
        width="80"
        height="80"
        rx="20"
        fill="#FFFFFF"
        fillOpacity="0.1"
        stroke="#FFFFFF"
        strokeOpacity="0.24"
        strokeWidth="1.5"
      />
    ) : (
      <rect width="80" height="80" rx="20" fill="#0F2544" />
    )}
    <circle cx="28" cy="56" r="6.5" fill={variant === 'light' ? '#F59E0B' : '#D97706'} />
    <path
      d="M28 44C28 34 35 25 45 25C52 25 57 29 59 34"
      stroke="#FFFFFF"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    <path
      d="M59 18L60.5 22.5L65 22.5L61.5 25.2L63 29.5L59 26.8L55 29.5L56.5 25.2L53 22.5L57.5 22.5Z"
      fill="#F59E0B"
    />
  </svg>
)

export const Logo = ({ variant = 'dark', href = '/', showTagline = true, className = '' }) => {
  const content = (
    <span className={`flex items-center gap-3 ${className}`}>
      <Isotype variant={variant} className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-logo text-[21px] font-extrabold tracking-[-0.02em] ${
            variant === 'light' ? 'text-white' : 'text-brand'
          }`}
        >
          INICIA <span className="text-[#D97706]">CHILE</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 font-logo text-[8.5px] font-bold uppercase tracking-[0.22em] ${
              variant === 'light' ? 'text-white/60' : 'text-[#64748B]'
            }`}
          >
            Estudio Jurídico Migratorio
          </span>
        )}
      </span>
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} aria-label="Inicia Chile — ir al inicio">
      {content}
    </Link>
  )
}

export default Logo
