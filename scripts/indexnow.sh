#!/usr/bin/env bash
# Indexation instantanée Bing / Yandex via IndexNow.
# Bing alimente ChatGPT Search et Copilot : c'est le chemin le plus court
# entre une mise en ligne et une citation par une IA.
#
# Usage : ./scripts/indexnow.sh          (toutes les URL du sitemap)
#         ./scripts/indexnow.sh /tarifs  (une seule page)
set -euo pipefail

KEY="802e8afb276824f563c312edb7c59d9a"
HOST="trackmycars.fr"
SITE="https://$HOST"

# La clé doit être accessible à https://$HOST/$KEY.txt
KEY_LOCATION="$SITE/$KEY.txt"

if [ $# -gt 0 ]; then
  URLS="$(printf '"%s%s"' "$SITE" "$1")"
  echo "IndexNow : 1 URL"
else
  echo "Lecture du sitemap…"
  URLS=$(curl -s --max-time 30 "$SITE/sitemap.xml" \
    | grep -oE '<loc>[^<]+' | sed 's|<loc>||' \
    | head -10000 | awk '{printf "\"%s\",", $0}' | sed 's/,$//')
  COUNT=$(echo "$URLS" | tr ',' '\n' | wc -l | tr -d ' ')
  echo "IndexNow : $COUNT URL"
fi

PAYLOAD=$(cat <<JSON
{
  "host": "$HOST",
  "key": "$KEY",
  "keyLocation": "$KEY_LOCATION",
  "urlList": [$URLS]
}
JSON
)

CODE=$(curl -s -o /tmp/indexnow-response.txt -w '%{http_code}' \
  -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  --max-time 60 \
  -d "$PAYLOAD")

case "$CODE" in
  200) echo "OK — URL acceptées" ;;
  202) echo "OK — acceptées, clé en cours de validation" ;;
  400) echo "ERREUR 400 — format invalide" ; cat /tmp/indexnow-response.txt ;;
  403) echo "ERREUR 403 — clé introuvable à $KEY_LOCATION" ;;
  422) echo "ERREUR 422 — URL hors du domaine déclaré" ;;
  429) echo "ERREUR 429 — trop de requêtes, réessayer plus tard" ;;
  *)   echo "Réponse inattendue : $CODE" ; cat /tmp/indexnow-response.txt ;;
esac
