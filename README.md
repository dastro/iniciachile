# Inicia Chile — sitio web

Sitio del estudio jurídico migratorio **Inicia Chile** (iniciachile.cl).

Construido con Next.js 15 (App Router) + Tailwind CSS 3, siguiendo la estructura
y los patrones de diseño del repositorio de referencia
[`apptec-cl/abogado-honorario-web-nextjs`](https://github.com/apptec-cl/abogado-honorario-web-nextjs),
adaptados a la identidad de Inicia Chile.

## Arranque

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run format   # prettier + orden de clases tailwind
```

## Identidad de marca

Los tokens salen del isotipo original (`public/images/logo-inicia-chile.png`) y están
definidos como variables CSS en `src/app/globals.css`, expuestas a Tailwind en
`tailwind.config.js`:

| Token           | Valor     | Uso                                          |
| --------------- | --------- | -------------------------------------------- |
| `brand`         | `#0F2544` | Azul institucional, fondo del isotipo         |
| `brandDark`     | `#0A1A31` | Hover de superficies azules                   |
| `brandDeep`     | `#061120` | Fondos a sangre (hero, footer, CTA)           |
| `brand50/100/200` | grises azulados | Fondos suaves, bordes, separadores     |
| `accent`        | `#D97706` | Naranjo de marca, CTA principal               |
| `accentLight`   | `#F59E0B` | Estrella del isotipo, detalles sobre azul     |

Tipografía: **Plus Jakarta Sans** (vía `next/font/google`), la misma del logotipo.

El logotipo se compone en `src/app/components/ui/logo.jsx`: isotipo en SVG inline +
tipografía en HTML, para que la marca siempre use la fuente cargada por la app.
Las versiones estáticas están en `public/images/` (`isotype.svg`, `logo-full.svg`).

## Estructura

```
src/app/
├── page.js                     Home
├── servicios/                  Catálogo completo de servicios
├── regularizacion/             Landing de captación (formulario + FAQ)
├── nosotros/                   Equipo, enfoque y compromisos
├── contacto/                   Canales + formulario
├── politicas-privacidad/       Borrador legal
├── api/contact/route.js        Recepción del formulario
├── data/                       Todo el contenido editable del sitio
└── components/
    ├── ui/                     Logo, iconos, acordeón, contador, botones
    ├── layout/                 Cabecera de páginas interiores
    ├── home/                   Secciones de la home (reutilizadas en landings)
    └── contact/                Formulario de evaluación
```

El contenido vive en `src/app/data/` — para editar textos no hace falta tocar componentes.

## Header — seis opciones

Todas viven en `src/app/components/home/heroes/` y comparten copy
(`src/app/data/heroSlides.js`) para que la comparación sea sólo de diseño.
**Compáralas en `/opciones-header`** (página interna, `noindex`).

### Con video

| Opción | Archivo | Qué es |
| ------ | ------- | ------ |
| **A — Cinematográfica** | `optionA.jsx` | Video a sangre, titular rotativo a la izquierda, cifras a la derecha |
| **B — Ventana partida** | `optionB.jsx` | Texto sobre azul sólido, video contenido en ventana vertical 4:5 |
| **C — Panel de vidrio** | `optionC.jsx` | Video a sangre, contenido en panel traslúcido, barra de confianza integrada |

Las tres usan `heroVideo.jsx`, que apila los clips y hace cross-fade sin recargarlos,
reproduce sólo el visible, precarga el siguiente y respeta `prefers-reduced-motion`.
Si el MP4 no existe queda a la vista un fondo animado de marca.

### Con imagen

| Opción | Archivo | Qué es |
| ------ | ------- | ------ |
| **D — Duotono a sangre** | `optionD.jsx` | Foto a pantalla completa teñida con el azul de marca |
| **E — Mosaico** | `optionE.jsx` | Texto sobre azul y tres fotos escalonadas: problema, gestión, resultado |
| **F — Editorial claro** | `optionF.jsx` | Fondo claro, texto azul, foto contenida y sin teñir |

D y E usan `heroImage.jsx`, que aplica el duotono con `mix-blend-mode: color`:
cualquier foto de stock queda en la paleta de Inicia Chile sin retoque previo.
F deja la foto sin tratar, porque su gracia es mostrarla tal cual.

E y F son componentes de servidor — no tienen estado ni carrusel.

### Elegir una

En `src/app/page.js`:

```js
import HeroOptionB from '@/app/components/home/heroes/optionB'
// ...
<HeroOptionB />
// C y F ya integran la barra de confianza: con ellas se quita <TrustBar />
```

Después se puede borrar `src/app/opciones-header/` y las opciones descartadas.

### Los archivos de fondo

Ambos tipos son **marcadores de posición generados con ffmpeg**, no metraje real:

| Carpeta | Qué hay | Script |
| ------- | ------- | ------ |
| `public/videos/` | 3 MP4 abstractos, loop sin corte, 275 KB – 1 MB | `./scripts/generate-hero-videos.sh` |
| `public/images/hero/` | 3 JPG grises con caída de luz fotográfica, ~80 KB | `./scripts/generate-hero-images.sh` |

Las imágenes son grises a propósito: así se ve trabajar el duotono de la opción D,
que con una imagen ya teñida no se notaría.

Para reemplazarlos por material real, sobrescribe los archivos con los mismos
nombres — no hay que tocar código. Para los videos:

```bash
./scripts/compress-hero-video.sh ~/Downloads/clip-original.mp4 hero-1
```

**Ver [`public/videos/README.md`](public/videos/README.md)** para licencia, términos
de búsqueda en Shutterstock y especificaciones.

## Origen del contenido

Los textos se redactaron a partir de la investigación de tres sitios del rubro
(`visadefinitiva.cl/servicios`, `solucionmigratoria.cl` y
`legalglobal.cl/es/captacion/regularizacion`), reescritos para Inicia Chile.

## ⚠️ Datos de ejemplo (mock) que hay que reemplazar

El sitio está poblado con **datos inventados** para poder verlo funcionando.
Todos están marcados con `⚠️ MOCK DATA` en el código y **ninguno debe publicarse**:

| Dónde | Qué es mock |
| ----- | ----------- |
| `src/app/data/site.js` | Teléfono, WhatsApp, correo, dirección y redes sociales |
| `src/app/data/site.js` → `metrics` | `12+ años`, `+3.200 personas` |
| `src/app/data/site.js` → `offices` | Las cuatro oficinas |
| `src/app/data/content.js` → `testimonials` | Los seis testimonios (nombres, países y citas) |
| `src/app/data/content.js` → `team` | Los cuatro integrantes del equipo |

Los testimonios son el caso más sensible: publicar reseñas inventadas como si fueran
reales es engañoso y, tratándose de un estudio jurídico, expone al estudio.
Reemplázalos por testimonios de clientes reales con autorización expresa, o elimina
la sección quitando `<Testimonials />` de `src/app/page.js`.

Las métricas son afirmaciones públicas: ajústalas a cifras que el estudio pueda respaldar.

## ⚠️ Pendientes técnicos antes de publicar

1. **Fotografías del equipo** — hoy `/nosotros` muestra las iniciales sobre el azul de
   marca como marcador de posición.
2. **`src/app/api/contact/route.js`** — el formulario sólo valida y escribe en el log
   del servidor. Falta conectar el destino real (correo transaccional, CRM o Sheets).
3. **`src/app/politicas-privacidad/page.js`** — borrador que el estudio debe revisar
   frente a la Ley 19.628 y la Ley 21.719.
4. **Analítica** — no hay GTM ni GA4 instalado; se agrega en `src/app/layout.js`.
5. **`site.url`** — confirmar dominio definitivo (afecta `sitemap.xml`, `robots.txt`
   y las metaetiquetas Open Graph).

## Nota sobre el dev server

No corras `npm run build` con `npm run dev` encendido: el build sobrescribe `.next`
y el dev server empieza a responder 500 (`Cannot find module './xxx.js'`).
Si pasa, basta con `rm -rf .next` y reiniciar el dev server.


## Jenkins

El `Jenkinsfile` sigue el pipeline de `eleva-frontend-nextjs`: checkout de `main`,
construcción de la imagen, publicación en ECR y despliegue en Kubernetes.

Configuración del job **Pipeline from SCM**:

- SCM: Git; repositorio `https://github.com/apptec-cl/iniciachile.git`.
- Rama: `*/main`; Script Path: `Jenkinsfile`.
- Credencial GitHub: `32045b55-4250-4757-9ab1-efff1b297fb4` (la del ejemplo).
- Agente Kubernetes: cloud `k8-mobysuite`, plantilla `podman-builder`, contenedor `runner`.
- Credencial AWS: `AWS-Mobysuite`, región `us-east-1`.
- Plugins: Kubernetes, Git, GitHub, Pipeline: AWS Steps, AnsiColor y Workspace Cleanup.

El agente debe tener acceso a Docker, ECR y a la API de Kubernetes, con permisos
para crear/actualizar Deployment y Service en el namespace existente `extras`.
Para ejecutar automáticamente con cada push, configura el webhook de GitHub hacia
`<URL-de-Jenkins>/github-webhook/`, como en el job de referencia.

Imágenes: `280458570481.dkr.ecr.us-east-1.amazonaws.com/apptec:iniciachile-X.Y.Z-prod`
y `iniciachile-latest-prod`. El pipeline incrementa la versión patch desde ECR.

Deployment: `iniciachile`; Service: `iniciachile-service`; puerto interno: `3000`.
El Service es ClusterIP: el dominio/Ingress se configura por separado.
El Dockerfile usa Node.js 22 y el servidor standalone de Next.js.

Verificación local de la imagen:

```bash
docker build --platform linux/amd64 -f docker/production/Dockerfile -t iniciachile:local .
docker run --rm -p 3000:3000 iniciachile:local
```
