'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon from '@/app/components/ui/icons'
import { migratoryStatuses, needs, urgencies } from '@/app/data/formOptions'

const labelClass = 'block text-sm font-semibold text-brand'
const fieldClass =
  'mt-2 w-full rounded-xl border border-brand100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20'
const errorClass = 'mt-1.5 block text-xs font-semibold text-red-600'

const Field = ({ label, required, error, children }) => (
  <div>
    <label className={labelClass}>
      {label} {required && <span className="text-accent">*</span>}
    </label>
    {children}
    {error && <span className={errorClass}>{error.message}</span>}
  </div>
)

const Fieldset = ({ title, children }) => (
  <fieldset>
    <legend className="mb-4 w-full border-b border-brand100 pb-2 text-sm font-semibold text-accentDark">
      {title}
    </legend>
    <div className="grid gap-4 md:grid-cols-2">{children}</div>
  </fieldset>
)

export const ContactForm = ({ source = 'general' }) => {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source })
      })
      if (!response.ok) throw new Error('Respuesta no exitosa')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand100 bg-white p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon name="check" className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-brand">Recibimos tu solicitud</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          El equipo revisará tus antecedentes y te contactará dentro de las próximas 48 horas
          hábiles. Si tu situación es urgente, escríbenos por WhatsApp.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-outline-dark mt-8">
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-2xl border border-brand100 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,37,68,0.5)] md:p-8"
    >
      <Fieldset title="Datos personales">
        <Field label="Nombre completo" required error={errors.nombre}>
          <input
            type="text"
            className={fieldClass}
            placeholder="Nombre y apellidos"
            {...register('nombre', { required: 'Indícanos tu nombre' })}
          />
        </Field>

        <Field label="Correo electrónico" required error={errors.email}>
          <input
            type="email"
            className={fieldClass}
            placeholder="tucorreo@ejemplo.com"
            {...register('email', {
              required: 'Necesitamos un correo de contacto',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Revisa el formato del correo'
              }
            })}
          />
        </Field>

        <Field label="Teléfono / WhatsApp" required error={errors.telefono}>
          <input
            type="tel"
            className={fieldClass}
            placeholder="+56 9 1234 5678"
            {...register('telefono', {
              required: 'Necesitamos un teléfono de contacto',
              minLength: { value: 8, message: 'El número parece incompleto' }
            })}
          />
        </Field>

        <Field label="Nacionalidad" required error={errors.nacionalidad}>
          <input
            type="text"
            className={fieldClass}
            placeholder="Ej: venezolana"
            {...register('nacionalidad', { required: 'Indícanos tu nacionalidad' })}
          />
        </Field>

        <Field label="País donde te encuentras" required error={errors.pais}>
          <input
            type="text"
            className={fieldClass}
            placeholder="Ej: Chile"
            {...register('pais', { required: 'Indícanos dónde te encuentras' })}
          />
        </Field>
      </Fieldset>

      <Fieldset title="Situación migratoria">
        <Field label="Situación migratoria actual" required error={errors.situacion}>
          <select
            className={fieldClass}
            defaultValue=""
            {...register('situacion', { required: 'Selecciona una opción' })}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {migratoryStatuses.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="Trámite o necesidad principal" required error={errors.necesidad}>
          <select
            className={fieldClass}
            defaultValue=""
            {...register('necesidad', { required: 'Selecciona una opción' })}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {needs.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="Nivel de urgencia" required error={errors.urgencia}>
          <select
            className={fieldClass}
            defaultValue=""
            {...register('urgencia', { required: 'Selecciona una opción' })}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {urgencies.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </Fieldset>

      <Fieldset title="Descripción del caso">
        <div className="md:col-span-2">
          <Field label="Breve descripción de tu situación" required error={errors.mensaje}>
            <textarea
              rows={4}
              className={`${fieldClass} resize-y`}
              placeholder="Cuéntanos desde cuándo estás en Chile, qué permiso tienes o tuviste, y qué necesitas resolver."
              {...register('mensaje', {
                required: 'Descríbenos brevemente tu situación',
                minLength: { value: 20, message: 'Cuéntanos un poco más para poder orientarte' }
              })}
            />
          </Field>
        </div>
      </Fieldset>

      <div className="space-y-3">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-accent"
            {...register('privacidad', { required: 'Debes aceptar la política de privacidad' })}
          />
          <span className="text-[13px] leading-relaxed text-muted">
            He leído y acepto la{' '}
            <Link href="/politicas-privacidad" className="font-bold text-brand underline">
              Política de Privacidad
            </Link>
            . <span className="text-accent">*</span>
            {errors.privacidad && <span className={errorClass}>{errors.privacidad.message}</span>}
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-accent"
            {...register('comunicaciones')}
          />
          <span className="text-[13px] leading-relaxed text-muted">
            Acepto recibir comunicaciones de Inicia Chile relacionadas con sus servicios jurídicos.
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          No pudimos enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando…' : 'Evaluar mi situación migratoria'}
        </button>
        <p className="mt-3 text-center text-[13px] text-muted">
          Tu información es confidencial y no será compartida con terceros.
        </p>
      </div>
    </form>
  )
}

export default ContactForm
