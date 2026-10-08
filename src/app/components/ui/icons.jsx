/**
 * Set de iconos de línea del sitio. Todos comparten trazo 1.8 y `currentColor`,
 * para que hereden el color del contenedor.
 */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

const paths = {
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21s7.5-3.6 7.5-9.2V5.6L12 2.8 4.5 5.6v6.2C4.5 17.4 12 21 12 21z" />
      <path d="M9 11.8l2.2 2.2L15.4 9.8" />
    </>
  ),
  star: <path d="M12 3.2l2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.4 8.6l-1.9 5-5 1.9 1.9-5z" />
    </>
  ),
  document: (
    <>
      <path d="M14 2.8H7a2 2 0 00-2 2v14.4a2 2 0 002 2h10a2 2 0 002-2V7.8z" />
      <path d="M14 2.8v5h5" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3.5v17" />
      <path d="M7 20.5h10" />
      <path d="M5 7h14" />
      <path d="M5.2 7L2.5 13h5.4z" />
      <path d="M18.8 7l-2.7 6h5.4z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20a6.2 6.2 0 0112.4 0" />
      <path d="M16.5 5.4a3.2 3.2 0 010 5.6" />
      <path d="M17.8 14.3A6.2 6.2 0 0121.2 20" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.8" y="7.2" width="18.4" height="12.6" rx="2.2" />
      <path d="M8.6 7.2V5.6a2 2 0 012-2h2.8a2 2 0 012 2v1.6" />
      <path d="M2.8 12.4h18.4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.4" width="14" height="16" rx="2.2" />
      <path d="M9 4.4a1.6 1.6 0 011.6-1.6h2.8A1.6 1.6 0 0115 4.4v1.2H9z" />
      <path d="M9 12.6l1.9 1.9 3.6-3.8" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.2c0 4-3.8 7.2-8.5 7.2a9.9 9.9 0 01-2.8-.4L4 21l1.4-3.6a6.9 6.9 0 01-1.9-4.6c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2z" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3v5a4 4 0 008 0V3" />
      <path d="M10 15v1.5a4.5 4.5 0 009 0V15" />
      <path d="M10 12v3" />
      <circle cx="19" cy="13" r="2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="5.5" r="2.5" />
      <path d="M8.5 18.5H14a3.5 3.5 0 000-7h-4a3.5 3.5 0 010-7h5.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.2 12.3l2.6 2.6 5-5.4" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.9L2.2 17.8A2 2 0 004 20.8h16a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
      <path d="M12 9.3v4.2" />
      <path d="M12 17h.01" />
    </>
  ),
  phone: (
    <>
      <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s6.5-5.6 6.5-10.4A6.5 6.5 0 005.5 10.8C5.5 15.6 12 21.2 12 21.2z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </>
  ),
  arrowRight: <path d="M4.5 12h14m-5.5-5.5L18.5 12 13 17.5" />,
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.93.96-3.47-.23-.36a9.4 9.4 0 01-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.37 9.37 0 019.43 9.44c0 5.2-4.24 9.43-9.44 9.43z"
    />
  )
}

export const Icon = ({ name, className = 'h-6 w-6', ...rest }) => {
  const path = paths[name]
  if (!path) return null

  return (
    <svg {...base} className={className} aria-hidden="true" {...rest}>
      {path}
    </svg>
  )
}

export default Icon
