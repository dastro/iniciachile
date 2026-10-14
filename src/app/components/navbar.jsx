'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Logo from '@/app/components/ui/logo'
import Icon from '@/app/components/ui/icons'
import { services } from '@/app/data/services'
import { site } from '@/app/data/site'

const Chevron = ({ open }) => (
  <svg
    className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 9l-7 7-7-7" />
  </svg>
)

export const Navbar = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropdownRef = useRef(null)

  // Sólo la home (y la landing de regularización) tienen hero a sangre, así que sólo ahí la navbar arranca transparente.
  const overHero =
    pathname === '/' || pathname === '/regularizacion' || pathname === '/opciones-header'
  const transparent = overHero && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdown(false)
    setMobileServices(false)
  }, [pathname])

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setDropdown(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const linkClass = (href) =>
    `border-b-2 pb-1 transition-colors ${
      isActive(href) ? 'border-accent' : 'border-transparent hover:border-accent/50'
    }`

  return (
    <nav
      className={`fixed top-0 z-[80] w-full transition-all duration-300 ${
        transparent
          ? 'bg-transparent py-2'
          : 'border-b border-brand100/70 bg-cream/95 py-1 shadow-[0_8px_24px_-20px_rgba(15,37,68,0.35)] backdrop-blur'
      }`}
    >
      <div className="container-site flex items-center justify-between py-3">
        <Logo variant="dark" />

        <div className="hidden items-center gap-8 text-[15px] font-semibold text-brand lg:flex">
          <Link href="/" className={linkClass('/')}>
            Inicio
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdown((prev) => !prev)}
              aria-expanded={dropdown}
              className={`flex items-center gap-1.5 ${linkClass('/servicios')}`}
            >
              Servicios
              <Chevron open={dropdown} />
            </button>

            {dropdown && (
              <div className="absolute left-0 top-full z-50 mt-4 w-[22rem] animate-fadeIn overflow-hidden rounded-2xl bg-white p-2 shadow-[0_28px_60px_-28px_rgba(15,37,68,0.4)] ring-1 ring-brand100">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href || `/servicios#${service.id}`}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand50 text-brand transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon name={service.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-[14px] font-semibold leading-snug text-brand">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/regularizacion" className={linkClass('/regularizacion')}>
            Regularización
          </Link>
          <Link href="/nosotros" className={linkClass('/nosotros')}>
            Nosotros
          </Link>

          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors hover:text-accentDark"
          >
            <Icon name="phone" className="h-4 w-4 text-accent" />
            {site.phone}
          </a>

          <Link href="/contacto" className="btn-primary px-5 py-2.5 text-[14px]">
            Evaluar mi caso
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          className="text-brand lg:hidden"
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`absolute left-0 top-full w-full origin-top border-t border-brand100 bg-cream shadow-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? 'max-h-[85vh] overflow-y-auto opacity-100'
            : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <ul className="container-site py-2 text-brand">
          <li className="border-b border-brand100">
            <Link href="/" className="block py-4 font-semibold">
              Inicio
            </Link>
          </li>
          <li className="border-b border-brand100">
            <button
              type="button"
              onClick={() => setMobileServices((prev) => !prev)}
              className="flex w-full items-center justify-between py-4 text-left font-semibold"
            >
              Servicios
              <Chevron open={mobileServices} />
            </button>
            {mobileServices && (
              <ul className="mb-3 space-y-0.5 pl-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href || `/servicios#${service.id}`}
                      className="flex items-center gap-2.5 py-2.5 text-sm text-muted"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="border-b border-brand100">
            <Link href="/regularizacion" className="block py-4 font-semibold">
              Regularización
            </Link>
          </li>
          <li className="border-b border-brand100">
            <Link href="/nosotros" className="block py-4 font-semibold">
              Nosotros
            </Link>
          </li>
          <li className="flex flex-col gap-3 py-5">
            <Link href="/contacto" className="btn-primary w-full">
              Evaluar mi caso
            </Link>
            <a href={site.phoneHref} className="btn-outline-dark w-full">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
