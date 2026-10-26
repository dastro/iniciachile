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
para crear/actualizar Deployment y Service en el namespace existente `apptec`.
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


### Verificar el disparo por push

Después de un commit en `main`, revisar que Jenkins inicie una ejecución por el
webhook de GitHub y que el checkout corresponda al SHA de ese commit. Un cambio
solo en este README permite probar el pipeline sin modificar la aplicación.

El job `iniciachile` debe apuntar a `apptec-cl/iniciachile`, rama `main`, con el
trigger **GitHub hook trigger for GITScm polling** habilitado.
