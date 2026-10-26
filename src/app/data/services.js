/**
 * Catálogo de servicios de Inicia Chile.
 *
 * `icon` referencia una clave del mapa en components/ui/icons.jsx.
 * `featured` marca los que aparecen en la grilla de la home (los tres primeros
 * son los únicos visibles en móvil). `popular` destaca los de mayor demanda.
 */
export const services = [
  {
    id: 'regularizacion',
    icon: 'compass',
    title: 'Regularización migratoria',
    short:
      'Si tu permiso está vencido, irregular u observado, evaluamos las alternativas disponibles según la normativa vigente.',
    featured: true,
    popular: true,
    href: '/regularizacion',
    description:
      'Regularizar no es solo completar un formulario en Extranjería: requiere evaluar antecedentes, identificar la vía correcta y anticipar riesgos. Analizamos el tipo de irregularidad, su gravedad y las implicancias legales antes de recomendar cualquier acción.',
    bullets: [
      'Diagnóstico del tipo de irregularidad y su gravedad',
      'Identificación de vías legales según la normativa vigente',
      'Análisis de plazos, observaciones y notificaciones previas',
      'Evaluación de riesgos antes de iniciar cualquier trámite'
    ]
  },
  {
    id: 'permanencia-definitiva',
    icon: 'shield',
    title: 'Permanencia definitiva',
    short:
      'Revisamos tus antecedentes y te acompañamos en la solicitud para avanzar hacia una permanencia estable en Chile.',
    featured: true,
    popular: true,
    description:
      'La permanencia definitiva te permite residir en Chile de forma indefinida y sin sujeción a un empleador o actividad determinada. Antes de presentarla verificamos el cumplimiento de plazos de permanencia, ausencias del país y antecedentes, porque un requisito no acreditado es la causa más frecuente de rechazo.',
    bullets: [
      'Cómputo de días de permanencia efectiva y revisión de ausencias',
      'Revisión de antecedentes penales, tributarios y previsionales',
      'Preparación y presentación de la solicitud',
      'Gestión de observaciones y subsanaciones posteriores'
    ]
  },
  {
    id: 'subsanaciones',
    icon: 'document',
    title: 'Subsanaciones y observaciones',
    short:
      'Respondemos observaciones de la autoridad migratoria y preparamos los documentos que falten o deban corregirse.',
    featured: true,
    popular: true,
    description:
      'Cuando el Servicio Nacional de Migraciones observa una solicitud, el plazo para responder es acotado y una respuesta incompleta puede terminar en archivo o rechazo. Revisamos qué se está objetando exactamente y preparamos una respuesta fundada dentro de plazo.',
    bullets: [
      'Lectura y análisis de la observación notificada',
      'Preparación de documentos faltantes o corregidos',
      'Respuesta fundada dentro del plazo legal',
      'Reactivación de trámites archivados cuando procede'
    ]
  },
  {
    id: 'residencia-temporal',
    icon: 'card',
    title: 'Residencia temporal',
    short:
      'Asesoría para solicitar, renovar o revisar tu residencia temporal según tu situación laboral, familiar, de estudios o inversión.',
    featured: true,
    description:
      'La residencia temporal es la puerta de entrada para vivir y trabajar en Chile de forma regular. Revisamos cuál de las subcategorías vigentes se ajusta a tu caso, preparamos los antecedentes y te acompañamos durante toda la tramitación ante el Servicio Nacional de Migraciones.',
    bullets: [
      'Determinación de la subcategoría migratoria que corresponde a tu situación',
      'Revisión y preparación de antecedentes antes de ingresar la solicitud',
      'Solicitud inicial, cambio de categoría y renovación',
      'Seguimiento del trámite y respuesta a observaciones'
    ]
  },
  {
    id: 'nacionalizacion',
    icon: 'star',
    title: 'Nacionalización chilena',
    short:
      'Te orientamos en la preparación, revisión y presentación de antecedentes para iniciar tu nacionalización.',
    featured: true,
    description:
      'La carta de nacionalización es el paso final del proyecto migratorio. Evaluamos si cumples los requisitos de residencia y arraigo, preparamos la documentación y te orientamos sobre el examen y las etapas del procedimiento.',
    bullets: [
      'Evaluación previa de requisitos de residencia y arraigo',
      'Preparación del expediente y documentos de respaldo',
      'Orientación sobre el examen de nacionalización',
      'Seguimiento hasta la resolución'
    ]
  },
  {
    id: 'demoras-y-recursos',
    icon: 'clock',
    title: 'Demoras en trámites',
    short:
      'Actuamos cuando tu solicitud lleva demasiado tiempo sin respuesta o se encuentra detenida.',
    featured: true,
    description:
      'La Ley 19.880 fija plazos de respuesta para los órganos del Estado. Cuando una solicitud migratoria supera los seis meses sin resolución, existen vías para exigir un pronunciamiento, incluido el recurso de protección ante la Corte de Apelaciones del domicilio del solicitante.',
    bullets: [
      'Revisión del estado real del trámite y de sus notificaciones',
      'Presentaciones administrativas para apurar la resolución',
      'Recurso de protección por demora superior a seis meses',
      'Seguimiento judicial hasta obtener respuesta'
    ]
  },
  {
    id: 'amparo-y-expulsion',
    icon: 'route',
    title: 'Expulsión, abandono y amparo',
    short:
      'Defensa frente a órdenes de expulsión, órdenes de abandono y medidas que afectan tu libertad personal.',
    description:
      'Una orden de expulsión o de abandono tiene plazos breves para ser impugnada. Revisamos la notificación, evaluamos las vías de reclamación administrativa y judicial —incluido el recurso de amparo— y asumimos la representación ante la autoridad y los tribunales.',
    bullets: [
      'Revisión de la orden y de su notificación',
      'Reclamación administrativa dentro de plazo',
      'Recurso de amparo ante la Corte de Apelaciones',
      'Representación en audiencias y gestiones asociadas'
    ]
  },
  {
    id: 'reunificacion-familiar',
    icon: 'users',
    title: 'Reunificación familiar',
    short:
      'Tramitamos las vías disponibles para que tu familia pueda residir contigo en Chile de forma regular.',
    description:
      'La vinculación familiar con un residente o nacional chileno abre alternativas migratorias específicas. Revisamos el vínculo, la documentación de respaldo y la vía más pertinente según la situación de cada integrante del grupo familiar.',
    bullets: [
      'Evaluación del vínculo y de la documentación que lo acredita',
      'Legalización y apostilla de documentos emitidos en el extranjero',
      'Solicitudes por vínculo con residente o con chileno',
      'Regularización de hijos e hijas menores de edad'
    ]
  },
  {
    id: 'permisos-de-trabajo',
    icon: 'briefcase',
    title: 'Permisos de trabajo y permanencia transitoria',
    short:
      'Revisamos tus opciones legales para trabajar o permanecer temporalmente en Chile según tu situación actual.',
    description:
      'Trabajar sin el permiso correspondiente expone a sanciones y compromete solicitudes futuras. Revisamos si corresponde un permiso de trabajo para titular de visa en trámite, una autorización especial u otra vía según tu categoría migratoria.',
    bullets: [
      'Permiso de trabajo para solicitantes con visa en trámite',
      'Autorizaciones especiales para permanencia transitoria',
      'Revisión de contratos y cláusulas migratorias',
      'Orientación a empleadores sobre contratación de personas extranjeras'
    ]
  }
]

export const featuredServices = services.filter((service) => service.featured)
