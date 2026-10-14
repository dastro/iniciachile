import Hero from '@/app/components/home/hero'
import TrustBar from '@/app/components/home/trustBar'
import Services from '@/app/components/home/services'
import Risks from '@/app/components/home/risks'
import Situations from '@/app/components/home/situations'
import Process from '@/app/components/home/process'
import WhyUs from '@/app/components/home/whyUs'
import Testimonials from '@/app/components/home/testimonials'
import Faq from '@/app/components/home/faq'
import CtaBanner from '@/app/components/home/ctaBanner'

export const metadata = {
  title: 'Inicia Chile | Abogados especialistas en derecho migratorio',
  description:
    'Estudio jurídico migratorio en Chile. Residencia temporal, permanencia definitiva, nacionalización, regularización y recursos ante la autoridad migratoria. Evalúa tu caso con abogados especialistas.',
  alternates: { canonical: '/' }
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Risks />
      {/* En móvil se omite: repite lo que ya cuentan Servicios y Riesgos */}
      <div className="hidden md:block">
        <Situations />
      </div>
      <Process />
      <WhyUs />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
