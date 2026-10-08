import HeaderOptionsPreview from '@/app/opciones-header/preview'

export const metadata = {
  title: 'Opciones de header',
  description: 'Comparador interno de las tres propuestas de header con video de fondo.',
  robots: { index: false, follow: false }
}

export default function OpcionesHeaderPage() {
  return <HeaderOptionsPreview />
}
