#!/usr/bin/env bash
#
# Comprime un clip de stock (Shutterstock u otro) al formato que espera el header.
#
# Uso:  ./scripts/compress-hero-video.sh <archivo-original> <hero-1|hero-2|hero-3> [segundos] [crf]
# Ej.:  ./scripts/compress-hero-video.sh ~/Downloads/SBV-347281.mp4 hero-1
#
# Deja el MP4 y su póster en public/videos/ y avisa si se pasa del peso objetivo.
#
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="${1:?Falta el archivo de origen}"
NAME="${2:?Falta el nombre de destino (hero-1, hero-2 o hero-3)}"
SECONDS_LEN="${3:-10}"
CRF="${4:-28}"
OUT="public/videos"

command -v ffmpeg >/dev/null || { echo "Falta ffmpeg. Instálalo con: brew install ffmpeg"; exit 1; }
[ -f "$SRC" ] || { echo "No existe: $SRC"; exit 1; }
mkdir -p "$OUT"

echo "Origen:  $SRC ($(du -h "$SRC" | cut -f1))"
echo "Destino: $OUT/$NAME.mp4  ·  ${SECONDS_LEN}s  ·  crf $CRF"

ffmpeg -hide_banner -loglevel error -y \
  -i "$SRC" -t "$SECONDS_LEN" -an \
  -vf "scale=1920:-2,fps=25" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf "$CRF" -preset slow \
  -movflags +faststart \
  "$OUT/$NAME.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$OUT/$NAME.mp4" -ss 1 -vframes 1 -q:v 4 "$OUT/$NAME.jpg"

BYTES=$(stat -f%z "$OUT/$NAME.mp4")
MB=$(echo "scale=1; $BYTES/1048576" | bc)
echo "Resultado: ${MB} MB"

if [ "$BYTES" -gt 3145728 ]; then
  echo "⚠️  Sobre los 3 MB objetivo. Repite subiendo el crf:"
  echo "   ./scripts/compress-hero-video.sh \"$SRC\" $NAME $SECONDS_LEN $((CRF + 3))"
fi
