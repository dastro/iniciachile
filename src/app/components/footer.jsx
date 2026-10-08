import Link from 'next/link'
import Logo from '@/app/components/ui/logo'
import Icon from '@/app/components/ui/icons'
import { services } from '@/app/data/services'
import { site, whatsappUrl } from '@/app/data/site'

const year = new Date().getFullYear()

const socialLinks = [
  {
    label: 'Instagram',
    href: site.social.instagram,
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.4 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.8c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .4 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.4-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.2-1-.4-2.1-.4-1.3-.07-1.7-.07-4.8-.07zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8a3.1 3.1 0 100-6.2 3.1 3.1 0 000 6.2zm6.3-8.2a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z'
  },
  {
    label: 'Facebook',
    href: site.social.facebook,
    path: 'M13.5 21.9v-8.1h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3v3.2h2.8v8.1h3.4z'
  },
  {
    label: 'LinkedIn',
    href: site.social.linkedin,
    path: 'M6.9 20.5H3.6V9.6h3.3v10.9zM5.2 8.1a1.9 1.9 0 110-3.9 1.9 1.9 0 010 3.9zM20.5 20.5h-3.3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8v5.4H10V9.6h3.1v1.5h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.1z'
  },
  {
    label: 'TikTok',
    href: site.social.tiktok,
    path: 'M16.6 2.4c.4 2.5 1.8 4 4.2 4.2v2.8c-1.4.1-2.7-.3-4.1-1.2v5.3c0 6.7-7.3 8.8-10.3 4-1.9-3.1-.7-8.5 5.4-8.7v2.9c-.5.1-1 .2-1.4.4-1.4.5-2.2 1.4-2 2.9.4 3 5.8 3.9 5.4-2V2.4h2.8z'
  }
]

export const Footer = () => (
  <footer className="grid-overlay bg-brandDeep text-white">
    <div className="container-site py-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
            Estudio jurídico dedicado exclusivamente a derecho migratorio chileno. Evaluamos cada
            caso según sus antecedentes y te decimos con franqueza qué vías existen.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>

          <ul className="mt-7 flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accentLight"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Servicios</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href || `/servicios#${service.id}`}
                  className="text-sm text-white/75 transition-colors hover:text-accentLight"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Contacto</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 hover:text-accentLight">
                <Icon name="phone" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accentLight" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 hover:text-accentLight"
              >
                <Icon name="mail" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accentLight" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accentLight" />
              {site.address}
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accentLight" />
              {site.schedule}
            </li>
          </ul>

          <h3 className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Sitio
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link href="/nosotros" className="hover:text-accentLight">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-accentLight">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/politicas-privacidad" className="hover:text-accentLight">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-7">
        <p className="text-xs leading-relaxed text-white/45">
          La información de este sitio es de carácter general y no constituye asesoría legal para un
          caso particular. Ningún servicio garantiza la aprobación de una solicitud: la decisión
          final corresponde siempre a la autoridad migratoria.
        </p>
        <p className="mt-4 text-xs text-white/45">
          © {year} {site.legalName}. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
