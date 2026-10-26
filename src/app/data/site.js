/**
 * Datos transversales del sitio.
 *
 * ⚠️ MOCK DATA — todos los valores de contacto de abajo son INVENTADOS,
 * puestos para poder ver el sitio funcionando. Reemplázalos por los datos
 * reales de Inicia Chile antes de publicar. Ver README → "Pendientes".
 */
export const site = {
  name: 'Inicia Chile',
  legalName: 'Inicia Chile — Estudio Jurídico Migratorio',
  tagline: 'Estudio Jurídico Migratorio',
  url: 'https://iniciachile.cl',
  description:
    'Estudio jurídico especializado en derecho migratorio chileno. Te acompañamos en residencia temporal, permanencia definitiva, nacionalización, regularización y recursos ante la autoridad migratoria.',

  phone: '+56 9 5487 2310', // MOCK
  phoneHref: 'tel:+56954872310', // MOCK
  whatsapp: '56954872310', // MOCK
  whatsappMessage:
    'Hola, quiero evaluar mi situación migratoria en Chile con un abogado de Inicia Chile.',
  email: 'hola@iniciachile.cl',
  address: 'Av. Holanda 099, oficina 404, Providencia, Santiago',
  schedule: 'Lunes a viernes, 9:00 a 18:00 h',

  social: {
    instagram: 'https://instagram.com/iniciachile', // MOCK
    facebook: 'https://facebook.com/iniciachile', // MOCK
    linkedin: 'https://linkedin.com/company/iniciachile', // MOCK
    tiktok: 'https://tiktok.com/@iniciachile' // MOCK
  }
}

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`

/** ⚠️ MOCK DATA — cifras inventadas. Ajústalas a métricas reales y respaldables. */
export const metrics = [
  { value: 12, suffix: '+', label: 'Años en derecho migratorio' },
  { value: 3200, prefix: '+', label: 'Personas orientadas' },
  { value: 100, suffix: '%', label: 'Foco en materia migratoria' },
  { value: 48, suffix: ' h', label: 'Respuesta hábil a tu consulta' }
]

/** ⚠️ MOCK DATA — oficinas inventadas para la vista previa. */
export const offices = [
  { city: 'Santiago Centro', detail: 'Huérfanos 1147, oficina 402' },
  { city: 'Providencia', detail: 'Av. Holanda 099, oficina 404' },
  { city: 'Antofagasta', detail: 'Av. Grecia 750, oficina 21' },
  { city: 'Concepción', detail: 'Barros Arana 631, oficina 308' }
]
