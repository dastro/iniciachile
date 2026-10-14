import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import WhatsappButton from '@/app/components/ui/whatsappButton'
import { site } from '@/app/data/site'

// Tipografía global de la interfaz.
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap'
})

// Sólo para el logotipo: conserva la tipografía original de la marca.
const logoFont = Plus_Jakarta_Sans({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Inicia Chile | Abogados especialistas en derecho migratorio',
    template: '%s | Inicia Chile'
  },
  description: site.description,
  keywords: [
    'abogado migratorio Chile',
    'residencia definitiva Chile',
    'regularización migratoria',
    'visa temporal Chile',
    'nacionalización chilena',
    'extranjería Chile'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: site.url,
    siteName: site.name,
    title: 'Inicia Chile | Abogados especialistas en derecho migratorio',
    description: site.description,
    images: ['/images/logo-inicia-chile.png']
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: 'CL',
  description: site.description,
  address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL" className={`${manrope.variable} ${logoFont.variable}`}>
      <body className="bg-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}
