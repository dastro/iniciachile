#!/usr/bin/env bash
#
# Genera los tres fondos de marca del header como MP4 reales.
#
# No reemplazan a un clip de stock: son fondos abstractos en los colores de
# Inicia Chile, pensados para (a) poder evaluar los tres headers con video de
# verdad y (b) servir de respaldo si finalmente no se compra metraje.
#
# Uso:  ./scripts/generate-hero-videos.sh
# Salida: public/videos/hero-{1,2,3}.mp4 + hero-{1,2,3}.jpg
#
set -euo pipefail

cd "$(dirname "$0")/.."
OUT="public/videos"
mkdir -p "$OUT"

command -v ffmpeg >/dev/null || { echo "Falta ffmpeg. Instálalo con: brew install ffmpeg"; exit 1; }

# Paleta Inicia Chile
NAVY_DEEP="0x061120"
NAVY="0x0F2544"
NAVY_LIGHT="0x16365E"
NAVY_DARK="0x0A1A31"
EMBER="0x4A2604"   # brasa: el naranjo de marca al 25% de luz. A pleno #D97706 el fondo
                   # se come el texto blanco y deja de leerse como estudio jurídico.

# Se generan 6 s y luego se espeja (ida + vuelta) para que el loop no tenga corte.
HALF=6
SIZE="2040x1160"     # se genera más grande para poder desplazar la malla al recortar
CROP="1920:1080"

render () {
  local name="$1" speed="$2" seed="$3" c0="$4" c1="$5" c2="$6" c3="$7" grid_alpha="$8"
  local tmp="$OUT/.tmp-$name.mp4"

  echo "→ $name"

  ffmpeg -hide_banner -loglevel error -y \
    -f lavfi -i "gradients=s=$SIZE:c0=$c0:c1=$c1:c2=$c2:c3=$c3:nb_colors=4:seed=$seed:speed=$speed:duration=$HALF:rate=25" \
    -t "$HALF" \
    -vf "drawgrid=w=60:h=60:t=1:c=white@$grid_alpha,\
crop=$CROP:x='30+28*sin(t/7)':y='40+22*cos(t/9)',\
noise=alls=5:allf=t,\
vignette=PI/4.2,\
format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 30 -an "$tmp"

  # Palíndromo: ida + vuelta, para que el loop sea continuo
  ffmpeg -hide_banner -loglevel error -y \
    -i "$tmp" -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1:a=0,format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 30 -an -movflags +faststart \
    "$OUT/$name.mp4"

  # Póster (primer fotograma) para la carga inicial
  ffmpeg -hide_banner -loglevel error -y \
    -i "$OUT/$name.mp4" -ss 0.5 -vframes 1 -q:v 4 "$OUT/$name.jpg"

  rm -f "$tmp"
}

# 1 · Deriva azul — la más calma, para el mensaje de regularización
render hero-1 0.010 7  "$NAVY_DEEP" "$NAVY"       "$NAVY_LIGHT" "$NAVY_DARK"   0.055

# 2 · Azul profundo — más oscura y lenta, para el mensaje de demoras
render hero-2 0.006 23 "$NAVY_DEEP" "$NAVY_DARK"  "$NAVY"       "$NAVY_DEEP"   0.07

# 3 · Brasa — el naranjo apenas insinuado sobre azul, para el mensaje de tranquilidad
render hero-3 0.009 41 "$NAVY_DEEP" "$NAVY"       "$EMBER"      "$NAVY_DARK"   0.045

echo
echo "Listo:"
ls -lh "$OUT"/hero-*.mp4 "$OUT"/hero-*.jpg | awk '{print "  " $9 "  " $5}'
