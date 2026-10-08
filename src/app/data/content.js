/** Bloques de contenido reutilizables entre la home y las landings. */

/* Riesgos de no actuar — bloque de urgencia */
export const risks = [
  'Un permiso vencido sin gestión puede derivar en multa, sanción o inadmisibilidad futura.',
  'La permanencia irregular limita el acceso a trabajo formal, contratos y servicios básicos.',
  'Cada día sin resolución puede reducir las opciones legales disponibles.',
  'Los criterios de la autoridad migratoria cambian según antecedentes y plazos.',
  'Proceder sin evaluación previa puede cerrar vías de regularización.',
  'Existen alternativas legales que dependen de la situación específica de cada persona.'
]

/* Situaciones concretas que evaluamos */
export const situations = [
  {
    title: 'Residencia temporal vencida',
    description:
      'Evaluación de opciones para personas cuyo permiso de residencia temporal expiró sin renovación.'
  },
  {
    title: 'Situación migratoria irregular',
    description:
      'Análisis de alternativas para personas sin documentación vigente que necesitan regularizar su permanencia en Chile.'
  },
  {
    title: 'Trámite pendiente o en observación',
    description:
      'Revisión de solicitudes observadas, archivadas o que llevan tiempo sin resolución por parte de Extranjería.'
  },
  {
    title: 'Visa rechazada con posibilidad de recurso',
    description:
      'Evaluación de si el rechazo admite reconsideración, recurso administrativo u otra vía de defensa.'
  },
  {
    title: 'Trámite detenido hace más de 6 meses',
    description:
      'La Ley 19.880 fija plazos de respuesta al Estado. Revisamos si corresponde exigir un pronunciamiento por vía judicial.'
  },
  {
    title: 'Orden de expulsión o de abandono',
    description:
      'Revisión de la notificación y de las vías de reclamación administrativa y judicial disponibles dentro de plazo.'
  }
]

/* Cómo trabajamos — proceso en cuatro pasos */
export const processSteps = [
  {
    step: '01',
    title: 'Revisión inicial',
    description:
      'Nos cuentas tu situación migratoria actual, desde cuándo estás en Chile y qué necesitas resolver.'
  },
  {
    step: '02',
    title: 'Diagnóstico legal',
    description:
      'El equipo jurídico revisa tus antecedentes para identificar el tipo de caso, su complejidad y los riesgos asociados.'
  },
  {
    step: '03',
    title: 'Gestión o representación',
    description:
      'Definimos la vía que corresponde y asumimos la tramitación o la representación ante la autoridad migratoria y los tribunales.'
  },
  {
    step: '04',
    title: 'Seguimiento',
    description:
      'Monitoreamos el estado del trámite, respondemos observaciones y te informamos cada avance hasta el cierre del caso.'
  }
]

/* Qué puedes esperar de la evaluación */
export const expectations = [
  {
    icon: 'stethoscope',
    title: 'Diagnóstico de tu situación',
    description:
      'Evaluamos tu caso para determinar el tipo de irregularidad, su gravedad y las implicancias legales.'
  },
  {
    icon: 'route',
    title: 'Alternativas identificadas',
    description:
      'Revisamos las vías disponibles según la normativa vigente y tus antecedentes específicos.'
  },
  {
    icon: 'check',
    title: 'Próximos pasos claros',
    description:
      'Te informamos qué puedes hacer, qué riesgos existen y cuál es la ruta más pertinente para tu situación.'
  }
]

/* Compromiso profesional — diferenciadores */
export const commitments = [
  'Evaluación caso a caso según antecedentes individuales',
  'Enfoque jurídico especializado en derecho migratorio chileno',
  'Análisis de la situación antes de recomendar cualquier acción',
  'Comunicación clara sobre alcances, limitaciones y riesgos',
  'Estrategia adaptada al marco normativo vigente',
  'Acompañamiento en español y seguimiento por WhatsApp'
]

/* Barra de confianza bajo el hero */
export const trustItems = [
  {
    icon: 'clipboard',
    title: 'Evaluación inicial sin costo',
    description: 'Revisamos tu caso y te decimos con franqueza si tiene vía legal.'
  },
  {
    icon: 'scale',
    title: 'Abogados especialistas',
    description: 'Dedicación exclusiva a derecho migratorio chileno.'
  },
  {
    icon: 'chat',
    title: 'Un mismo interlocutor',
    description: 'Seguimiento directo por WhatsApp durante todo el proceso.'
  }
]

export const faqs = [
  {
    question: '¿Puedo regularizar mi situación si mi visa está vencida?',
    answer:
      'Depende de tus antecedentes específicos: el tiempo transcurrido, el tipo de visa original, la existencia de multas o sanciones y otros factores. La evaluación identifica las opciones disponibles en tu caso concreto.'
  },
  {
    question: '¿Qué pasa si llevo mucho tiempo en situación irregular?',
    answer:
      'Cada caso es distinto. Evaluamos las alternativas según la normativa vigente, tus antecedentes y tus circunstancias personales. No todas las situaciones irregulares tienen la misma solución.'
  },
  {
    question: '¿La regularización garantiza que me aprueben la residencia?',
    answer:
      'No. La evaluación identifica opciones y riesgos, pero la decisión final corresponde a la autoridad migratoria según los antecedentes del caso. Ningún estudio serio puede garantizarte un resultado.'
  },
  {
    question: 'Mi trámite lleva más de 6 meses sin respuesta. ¿Qué puedo hacer?',
    answer:
      'La Ley 19.880 establece plazos de respuesta para los órganos del Estado. Cuando una solicitud supera los seis meses sin resolución, puede corresponder un recurso de protección ante la Corte de Apelaciones de tu domicilio para exigir un pronunciamiento.'
  },
  {
    question: '¿Presentar un recurso puede perjudicar mi solicitud de visa?',
    answer:
      'No. Ejercer una acción para exigir que la autoridad responda dentro de plazo es un derecho y no constituye un antecedente negativo en la tramitación de tu solicitud.'
  },
  {
    question: '¿Atienden casos con observaciones o trámites archivados?',
    answer:
      'Sí. Revisamos el estado del trámite y las observaciones emitidas, y evaluamos las vías para reactivar, complementar o presentar un nuevo trámite según corresponda.'
  },
  {
    question: '¿El porcentaje de avance que muestra la plataforma indica el estado real?',
    answer:
      'No necesariamente. Los indicadores de avance en línea no reflejan de forma confiable en qué etapa se encuentra la revisión de tu solicitud, ni el pago de derechos garantiza su aprobación.'
  },
  {
    question: '¿Qué necesito para solicitar la evaluación?',
    answer:
      'Completa el formulario con tus datos y una breve descripción de tu situación. Con eso el equipo puede identificar el tipo de caso y orientarte sobre los próximos pasos. Tu información es confidencial.'
  }
]

/**
 * ⚠️ MOCK DATA — testimonios INVENTADOS, puestos sólo para ver la sección
 * funcionando en local. NO publicar: reemplazar por testimonios reales de
 * clientes del estudio, con autorización expresa de cada persona.
 */
export const testimonials = [
  {
    name: 'Yorbelis M.',
    origin: 'Venezuela',
    service: 'Permanencia definitiva',
    rating: 5,
    quote:
      'Llevaba dos años intentando ordenar mis papeles sola y siempre me faltaba algo. Acá me revisaron todo antes de presentar y me explicaron qué podía salir mal. Salió aprobada a la primera.'
  },
  {
    name: 'Andrés G.',
    origin: 'Colombia',
    service: 'Regularización migratoria',
    rating: 5,
    quote:
      'Mi visa estaba vencida hacía más de un año y pensaba que ya no había nada que hacer. Me dijeron con claridad qué opciones tenía y cuáles no, sin prometerme cosas imposibles.'
  },
  {
    name: 'Luzmila Q.',
    origin: 'Perú',
    service: 'Demoras en trámites',
    rating: 5,
    quote:
      'Mi solicitud llevaba ocho meses sin respuesta. Presentaron un recurso y por fin me resolvieron. Lo que más agradecí fue que me avisaban cada vez que había una novedad.'
  },
  {
    name: 'Jean-Pierre D.',
    origin: 'Haití',
    service: 'Subsanaciones y observaciones',
    rating: 5,
    quote:
      'Me habían observado el trámite y no entendía el documento que me llegó. Me lo explicaron en palabras simples y armaron la respuesta dentro del plazo.'
  },
  {
    name: 'Carolina R.',
    origin: 'Argentina',
    service: 'Reunificación familiar',
    rating: 5,
    quote:
      'Necesitaba traer a mis dos hijos. Me ordenaron la documentación de allá y de acá, que era lo más enredado, y me acompañaron hasta que quedaron los dos con su visa.'
  },
  {
    name: 'Ernesto V.',
    origin: 'Cuba',
    service: 'Nacionalización chilena',
    rating: 5,
    quote:
      'Me prepararon el expediente y me orientaron para el examen. Después de doce años en Chile, por fin tengo la carta de nacionalización.'
  }
]

/**
 * ⚠️ MOCK DATA — equipo INVENTADO para la vista previa.
 * Reemplazar por el equipo real (nombre, cargo, universidad, colegiatura y foto).
 */
export const team = [
  {
    name: 'María José Alcaíno',
    role: 'Socia directora',
    focus: 'Residencias y permanencia definitiva',
    detail: 'Abogada, Universidad de Chile. 12 años en derecho migratorio.'
  },
  {
    name: 'Rodrigo Fuentealba',
    role: 'Socio',
    focus: 'Litigación y recursos migratorios',
    detail: 'Abogado, Pontificia Universidad Católica de Valparaíso.'
  },
  {
    name: 'Camila Sepúlveda',
    role: 'Abogada asociada',
    focus: 'Regularización y subsanaciones',
    detail: 'Abogada, Universidad Diego Portales. Diplomada en migraciones.'
  },
  {
    name: 'Tomás Barría',
    role: 'Coordinador de casos',
    focus: 'Seguimiento y atención de clientes',
    detail: 'Punto de contacto directo durante toda la tramitación.'
  }
]
