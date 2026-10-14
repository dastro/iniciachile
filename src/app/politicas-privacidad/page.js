import PageHero from '@/app/components/layout/pageHero'
import { site } from '@/app/data/site'

export const metadata = {
  title: 'Política de privacidad',
  description:
    'Cómo Inicia Chile trata los datos personales entregados a través de este sitio, conforme a la Ley 19.628 sobre protección de la vida privada.',
  alternates: { canonical: '/politicas-privacidad' },
  robots: { index: false, follow: true }
}

/**
 * ⚠️ BORRADOR — texto base que debe ser revisado y ajustado por el estudio
 * antes de publicarse (Ley 19.628 y Ley 21.719 sobre protección de datos).
 */
const sections = [
  {
    title: '1. Responsable del tratamiento',
    body: `${site.legalName} es responsable del tratamiento de los datos personales recogidos a través de ${site.url}. Para cualquier consulta sobre esta política puedes escribir a ${site.email}.`
  },
  {
    title: '2. Datos que recopilamos',
    body: 'A través del formulario de contacto recogemos nombre, correo electrónico, teléfono, nacionalidad, país de residencia actual, situación migratoria, trámite requerido, nivel de urgencia y la descripción del caso que decidas compartir. También podemos registrar datos técnicos de navegación, como dirección IP y páginas visitadas.'
  },
  {
    title: '3. Finalidad',
    body: 'Los datos se utilizan exclusivamente para evaluar tu consulta, contactarte, prestar los servicios jurídicos solicitados y, si lo autorizas expresamente, enviarte comunicaciones sobre nuestros servicios. No vendemos ni cedemos tus datos a terceros con fines comerciales.'
  },
  {
    title: '4. Base de legitimación',
    body: 'El tratamiento se funda en tu consentimiento expreso, otorgado al marcar la casilla correspondiente en el formulario, y en la ejecución de la relación profesional que eventualmente se establezca.'
  },
  {
    title: '5. Conservación',
    body: 'Conservamos los datos mientras dure la relación con el estudio y, posteriormente, durante los plazos exigidos por la normativa aplicable a la actividad profesional. Cumplidos esos plazos, los datos se eliminan o anonimizan.'
  },
  {
    title: '6. Confidencialidad',
    body: 'La información que compartas está amparada por el deber de reserva profesional del abogado. Sólo accede a ella el personal del estudio que interviene en la evaluación o tramitación de tu caso.'
  },
  {
    title: '7. Tus derechos',
    body: `Puedes solicitar el acceso, la rectificación, la eliminación o el bloqueo de tus datos, así como revocar el consentimiento otorgado, escribiendo a ${site.email}. Responderemos tu solicitud en los plazos que fija la ley.`
  },
  {
    title: '8. Cookies',
    body: 'Este sitio puede utilizar cookies propias y de terceros con fines de medición y mejora de la experiencia. Puedes configurar tu navegador para bloquearlas o eliminarlas en cualquier momento.'
  },
  {
    title: '9. Cambios en esta política',
    body: 'Podemos actualizar esta política para reflejar cambios legales o de nuestros servicios. La versión vigente será siempre la publicada en esta página.'
  }
]

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidad"
        subtitle="Cómo tratamos los datos personales que nos entregas a través de este sitio."
      />

      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <div className="rounded-xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-ink">
            Documento en revisión. El estudio debe validar este texto antes de su publicación
            definitiva.
          </div>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-bold text-brand">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
