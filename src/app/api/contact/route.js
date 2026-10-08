import { NextResponse } from 'next/server'

const REQUIRED = [
  'nombre',
  'email',
  'telefono',
  'nacionalidad',
  'pais',
  'situacion',
  'necesidad',
  'urgencia',
  'mensaje'
]

/**
 * Recepción de consultas del formulario.
 *
 * ⚠️ PENDIENTE DE INTEGRACIÓN: hoy sólo valida y deja el lead en el log del
 * servidor. Conecta aquí el destino real (correo transaccional, CRM o
 * Google Sheets) antes de salir a producción.
 */
export async function POST(request) {
  let payload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'JSON inválido' }, { status: 400 })
  }

  const missing = REQUIRED.filter((field) => !payload?.[field]?.toString().trim())
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: 'Faltan campos obligatorios', fields: missing },
      { status: 422 }
    )
  }

  if (!payload.privacidad) {
    return NextResponse.json(
      { ok: false, error: 'Debes aceptar la política de privacidad' },
      { status: 422 }
    )
  }

  const lead = {
    ...payload,
    recibidoEn: new Date().toISOString()
  }

  console.info('[iniciachile] nueva consulta', lead)

  return NextResponse.json({ ok: true })
}
