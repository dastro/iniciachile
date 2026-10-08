/**
 * Mensajes del hero, compartidos por las tres opciones de header,
 * para que la comparación sea sólo de diseño y no de copy.
 *
 * `video` y `poster` apuntan a /public/videos; `image` a /public/images/hero.
 * Mientras el MP4 no exista, el hero con video muestra el fondo animado de marca
 * (ver heroVideo.jsx).
 */
export const heroSlides = [
  {
    id: 'regulariza',
    title: 'Regulariza tu situación migratoria en Chile',
    subtitle:
      'Si tu permiso está vencido, observado o pendiente de resolución, evaluamos qué alternativas legales tienes según tus antecedentes.',
    video: '/videos/hero-1.mp4',
    poster: '/videos/hero-1.jpg',
    image: '/images/hero/bg-1.jpg'
  },
  {
    id: 'demoras',
    title: '¿Tu trámite lleva meses sin respuesta?',
    subtitle:
      'La ley fija plazos al Estado. Revisamos el estado real de tu solicitud y las vías para exigir un pronunciamiento.',
    video: '/videos/hero-2.mp4',
    poster: '/videos/hero-2.jpg',
    image: '/images/hero/bg-2.jpg'
  },
  {
    id: 'tranquilidad',
    title: 'Vive en Chile en regla y con tranquilidad',
    subtitle:
      'Residencia temporal, permanencia definitiva y nacionalización, con un equipo dedicado sólo a derecho migratorio.',
    video: '/videos/hero-3.mp4',
    poster: '/videos/hero-3.jpg',
    image: '/images/hero/bg-3.jpg'
  }
]

export const heroDisclaimer =
  'La evaluación identifica opciones y riesgos según tus antecedentes. No garantiza aprobación ni resultado migratorio.'
