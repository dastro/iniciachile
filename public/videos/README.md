# Videos del header

Los tres headers (`src/app/components/home/heroes/`) buscan estos archivos:

```
public/videos/
├── hero-1.mp4   +  hero-1.jpg    ← "Regulariza tu situación migratoria"
├── hero-2.mp4   +  hero-2.jpg    ← "¿Tu trámite lleva meses sin respuesta?"
└── hero-3.mp4   +  hero-3.jpg    ← "Vive en Chile en regla y con tranquilidad"
```

**Ahora mismo esos archivos existen**, pero son fondos abstractos generados con
ffmpeg en los colores de la marca — no metraje real. Sirven para dos cosas:

1. Poder evaluar los tres headers con video de verdad, sin esperar la compra.
2. Quedar como respaldo si finalmente no se compra stock. Son livianos
   (275 KB – 1 MB), tienen loop sin corte y no arrastran licencias.

Se regeneran con `./scripts/generate-hero-videos.sh`.

Para reemplazarlos por metraje real basta con sobrescribir los archivos con los
mismos nombres. **No hay que tocar código.**

El `.jpg` es el póster (primer fotograma) que se ve mientras carga el MP4.

## Licencia

Shutterstock es contenido licenciado. Descarga los clips desde tu propia cuenta con
una licencia vigente. **No uses los previews con marca de agua** en el sitio: son
material con derechos y la marca de agua además se ve en producción.

Guarda el comprobante de licencia de cada clip; para un estudio jurídico conviene
tener la trazabilidad.

## Qué buscar en Shutterstock

Prioriza clips **horizontales, sin texto incrustado, sin rostros reconocibles en
primer plano** y con movimiento lento. El hero lleva texto encima: mientras más
tranquilo el clip, mejor se lee.

| Archivo | Idea | Términos de búsqueda |
| ------- | ---- | -------------------- |
| `hero-1` | Trámite, documentos, orden | `paperwork documents hands slow motion`, `signing documents office`, `passport documents desk` |
| `hero-2` | Espera, tiempo, oficina pública | `waiting room office`, `clock time lapse office`, `person waiting window light` |
| `hero-3` | Vida en Chile, familia, ciudad | `santiago chile aerial`, `family walking city sunset`, `diverse people walking street slow motion` |

Para la **opción B** (ventana partida) el clip se ve en formato **vertical 4:5**, así
que elige uno cuyo sujeto quede al centro, o recórtalo al exportar.

## Especificaciones técnicas

| Parámetro | Valor |
| --------- | ----- |
| Resolución | 1920×1080 (descarga HD, no 4K — pesa de más para un fondo) |
| Duración | 8 a 12 s, con corte que permita loop |
| Códec | H.264 (`.mp4`), perfil `high`, `yuv420p` |
| Audio | **Sin audio** — el hero va en `muted` y el audio sólo suma peso |
| Peso objetivo | **menos de 3 MB por clip** |

Tres clips de 3 MB son 9 MB en la portada. Pasado eso, el hero se nota lento en
móvil con datos.

## Comprimir el clip que bajaste

Shutterstock entrega archivos pesados (30–150 MB). Hay que recomprimir. Ya está
todo en un script — genera el MP4 y su póster, y avisa si se pasa del peso:

```bash
./scripts/compress-hero-video.sh ~/Downloads/SBV-347281.mp4 hero-1
```

Acepta duración y calidad como argumentos opcionales:

```bash
./scripts/compress-hero-video.sh <archivo> <hero-1|hero-2|hero-3> [segundos] [crf]
```

El `crf` es la palanca calidad/peso: más alto, más liviano. Si el resultado supera
los 3 MB el script mismo te sugiere el comando con el `crf` subido.

## Legibilidad del texto sobre el clip

El overlay del header es agresivo a propósito: sobre la zona del titular deja un
86 % de azul `#061120`. Eso mantiene el texto blanco sobre 14:1 de contraste
**incluso con un clip completamente blanco**, así que no hace falta elegir el
metraje pensando en la legibilidad. Elígelo por el contenido.

## Comparar los tres headers

Con el dev server corriendo: **`/opciones-header`**. Esa página es `noindex` y sólo
sirve para elegir; una vez decidido, se cambia el hero en `src/app/page.js` y se
puede borrar la carpeta `src/app/opciones-header/`.
