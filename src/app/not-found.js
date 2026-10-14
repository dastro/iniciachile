import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-sand">
      <div className="container-site text-center">
        <p className="text-sm font-semibold text-accentDark">Error 404</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.02em] text-brand md:text-5xl">
          No encontramos esta página
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          Puede que el enlace haya cambiado. Vuelve al inicio o cuéntanos tu caso directamente.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-outline-dark">
            Ir a contacto
          </Link>
        </div>
      </div>
    </section>
  )
}
