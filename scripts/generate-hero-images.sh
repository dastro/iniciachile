#!/usr/bin/env bash
#
# Genera imágenes de reemplazo para los headers con foto de fondo.
#
# A propósito son GRISES y con rango tonal fotográfico: la luminancia se calcula
# como dos fuentes de luz gaussianas, que es como cae la luz en una foto real.
# (Un degradado radial de ffmpeg produce anillos concéntricos — parece una diana,
# no una fotografía.) Encima va grano y viñeteo.
#
# El gris es deliberado: deja ver cómo trabaja el duotono de la opción D, que con
# una imagen ya teñida no se notaría. No son fotos — son marcadores de posición.
#
# Uso:    ./scripts/generate-hero-images.sh
# Salida: public/images/hero/bg-{1,2,3}.jpg
#
set -euo pipefail

cd "$(dirname "$0")/.."
OUT="public/images/hero"
mkdir -p "$OUT"

command -v ffmpeg >/dev/null || { echo "Falta ffmpeg. Instálalo con: brew install ffmpeg"; exit 1; }

W=2400; H=1350   # 16:9 a densidad suficiente para pantallas retina

# $1 nombre · $2,$3 luz principal x,y · $4,$5 radio x,y · $6 intensidad
# $7,$8 luz de relleno x,y · $9 intensidad del relleno · ${10} piso de negros
render () {
  local name="$1" kx="$2" ky="$3" rx="$4" ry="$5" ki="$6" fx="$7" fy="$8" fi="$9" floor="${10}"

  echo "→ $name"
  ffmpeg -hide_banner -loglevel error -y \
    -f lavfi -i "color=c=black:s=${W}x${H}" -frames:v 1 \
    -vf "format=gray,\
geq=lum='${floor}\
+${ki}*exp(-(pow(X-${kx},2)/(2*pow(${rx},2))+pow(Y-${ky},2)/(2*pow(${ry},2))))\
+${fi}*exp(-(pow(X-${fx},2)/(2*pow(1100,2))+pow(Y-${fy},2)/(2*pow(900,2))))',\
noise=alls=15:allf=t+u,\
gblur=sigma=1.6,\
vignette=PI/4.6,\
eq=contrast=1.12" \
    -q:v 3 "$OUT/$name.jpg"
}

# 1 · Luz por la derecha — deja limpio el lado del titular (opciones D y F)
render bg-1  1780 430  820 620  185   500 1150  38   16

# 2 · Luz alta y difusa al centro — para el mosaico, que recorta en tres
render bg-2  1250 380  980 700  160  1900  980  45   22

# 3 · Luz alta por la izquierda — para el esquema claro, texto oscuro sobre foto
render bg-3   700 300  900 680  205  1950  900  40   30

echo
ls -lh "$OUT"/bg-*.jpg | awk '{print "  " $9 "  " $5}'
