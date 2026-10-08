'use client'
import { useState } from 'react'
import HeroOptionA from '@/app/components/home/heroes/optionA'
import HeroOptionB from '@/app/components/home/heroes/optionB'
import HeroOptionC from '@/app/components/home/heroes/optionC'
import HeroOptionD from '@/app/components/home/heroes/optionD'
import HeroOptionE from '@/app/components/home/heroes/optionE'
import HeroOptionF from '@/app/components/home/heroes/optionF'
import TrustBar from '@/app/components/home/trustBar'
import Services from '@/app/components/home/services'
import Icon from '@/app/components/ui/icons'

const options = [
  {
    key: 'A',
    group: 'Video',
    name: 'Cinematográfica',
    component: HeroOptionA,
    withTrustBar: true,
    summary: 'Video a sangre, titular rotativo a la izquierda y cifras a la derecha.',
    pros: [
      'Máximo impacto: el clip ocupa toda la pantalla',
      'Mantiene la tarjeta de cifras que ya tiene el sitio',
      'Un clip distinto por cada mensaje del carrusel'
    ],
    cons: [
      'Depende de que el clip tenga zonas oscuras a la izquierda',
      'Es la que más pesa: tres videos en la portada'
    ]
  },
  {
    key: 'B',
    group: 'Video',
    name: 'Ventana partida',
    component: HeroOptionB,
    withTrustBar: true,
    summary: 'Texto sobre azul sólido y el video contenido en una ventana vertical.',
    pros: [
      'Contraste garantizado: el texto nunca compite con el video',
      'El clip se ve limpio, sin overlay oscuro encima',
      'La más sobria — lee como estudio jurídico, no como campaña'
    ],
    cons: ['Menos espectacular que el video a sangre', 'Necesita un clip que funcione en vertical']
  },
  {
    key: 'C',
    group: 'Video',
    name: 'Panel de vidrio',
    component: HeroOptionC,
    withTrustBar: false,
    summary: 'Video a sangre con el contenido en un panel traslúcido centrado.',
    pros: [
      'El clip se aprecia completo alrededor del panel',
      'Integra la barra de confianza — una sección menos',
      'Trae control de pausa para el video'
    ],
    cons: ['El desenfoque exige más al dispositivo', 'Contenido centrado: menos espacio para texto']
  },
  {
    key: 'D',
    group: 'Imagen',
    name: 'Duotono a sangre',
    component: HeroOptionD,
    withTrustBar: true,
    summary: 'Foto a pantalla completa teñida con el azul de marca.',
    pros: [
      'Cualquier foto queda en paleta sin retoque previo',
      'Carga mucho más liviana que el video',
      'El duotono disimula que la foto es de stock'
    ],
    cons: [
      'El duotono se come el color de la foto — si compraste una por su color, se pierde',
      'Sin movimiento: menos gancho que el video'
    ]
  },
  {
    key: 'E',
    group: 'Imagen',
    name: 'Mosaico',
    component: HeroOptionE,
    withTrustBar: true,
    summary: 'Texto sobre azul y tres fotos escalonadas que cuentan el recorrido completo.',
    pros: [
      'Cuenta la historia entera de una: problema, gestión y resultado',
      'Sin carrusel — no hay que esperar a que rote para entenderlo',
      'Tres fotos rinden más que una: justifica mejor la compra'
    ],
    cons: [
      'Necesita tres fotos que conversen entre sí',
      'En móvil las fotos quedan chicas y pierden fuerza'
    ]
  },
  {
    key: 'F',
    group: 'Imagen',
    name: 'Editorial claro',
    component: HeroOptionF,
    withTrustBar: false,
    summary: 'Fondo claro, texto azul y la foto contenida y sin teñir a la derecha.',
    pros: [
      'La única que no arranca en oscuro: lee institucional, no campaña',
      'La foto se ve tal cual, sin velo ni texto encima',
      'Integra la barra de confianza en claro'
    ],
    cons: [
      'Rompe con el resto del sitio, que es oscuro',
      'Sin overlay, la legibilidad depende de la foto que elijas'
    ]
  }
]

const groups = ['Video', 'Imagen']

export default function HeaderOptionsPreview() {
  const [active, setActive] = useState('A')
  // El detalle arranca plegado para no tapar el header que se está evaluando.
  const [expanded, setExpanded] = useState(false)

  const option = options.find((item) => item.key === active)
  const Hero = option.component

  return (
    <>
      <Hero />
      {option.withTrustBar && <TrustBar />}

      {/* Un poco del sitio real debajo, para ver cómo empalma cada header */}
      <Services />

      {/* Selector fijo — sólo existe en esta página de comparación */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[95] flex justify-center p-4">
        <div className="pointer-events-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-brandDeep/95 p-3 shadow-[0_20px_50px_-20px_rgba(6,17,32,0.9)] backdrop-blur-xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            {groups.map((group) => (
              <div key={group} className="flex-1">
                <p className="mb-1.5 px-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
                  Con {group.toLowerCase()}
                </p>
                <div className="flex gap-2">
                  {options
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActive(item.key)}
                        className={`flex-1 rounded-xl px-3 py-2.5 text-left transition-colors ${
                          active === item.key
                            ? 'bg-accent text-white'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] opacity-70">
                          {item.key}
                        </span>
                        <span className="mt-0.5 block text-[13px] font-extrabold leading-tight">
                          {item.name}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
          >
            {expanded ? 'Ocultar detalle' : 'Ver pros y contras'}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-3 w-3 transition-transform ${expanded ? '' : 'rotate-180'}`}
            >
              <path d="M6 15l6-6 6 6" />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              expanded ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-3 rounded-xl bg-white/5 p-4 md:grid-cols-2">
                <div>
                  <p className="text-sm leading-relaxed text-white/80">{option.summary}</p>
                  <ul className="mt-3 space-y-1.5">
                    {option.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-xs text-white/65">
                        <Icon
                          name="check"
                          className="mt-px h-3.5 w-3.5 shrink-0 text-accentLight"
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40">
                    A considerar
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {option.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-xs text-white/65">
                        <Icon name="alert" className="mt-px h-3.5 w-3.5 shrink-0 text-accent" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-3 px-1 text-[11px] leading-relaxed text-white/35">
                Página interna de comparación (noindex). Los videos e imágenes de fondo son
                marcadores de posición generados con ffmpeg, no metraje real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
