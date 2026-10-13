#!/bin/bash
# Audit automatique avant deploiement TrackMyCars — a lancer avant tout
# `vercel deploy --prod`. Ne bloque pas si tout est vert, alerte sinon.
set -uo pipefail
cd "$(dirname "$0")/.."

FAIL=0
ok()   { echo "  OK   $1"; }
bad()  { echo "  FAIL $1"; FAIL=1; }

echo "=== 1. TypeScript ==="
if npx tsc --noEmit > /tmp/tsc-tmc.log 2>&1; then ok "0 erreur"; else bad "erreurs tsc — voir /tmp/tsc-tmc.log"; fi

echo "=== 2. Git : auteur du dernier commit lie a GitHub ==="
AUTHOR=$(git log -1 --format="%ae")
if [ "$AUTHOR" = "ahmeddidaoui54@gmail.com" ]; then
  ok "auteur = $AUTHOR"
else
  bad "auteur = $AUTHOR (attendu: ahmeddidaoui54@gmail.com — Vercel bloquera le deploy)"
fi

echo "=== 3. Git : arbre propre (rien d'oublie) ==="
if [ -z "$(git status --short)" ]; then ok "clean"; else bad "changements non commites"; fi

echo "=== 4. package.json : nom du projet correct ==="
if grep -q '"name": *"vtc-platform"' package.json 2>/dev/null; then
  bad "name=vtc-platform residuel (clone) — renommer en trackmycars-platform"
else
  ok "nom de projet propre"
fi

echo "=== 5. Domaine : pas de placeholder/cross-projet (staging/preview Vercel autorises) ==="
# N'impose PAS trackmycars.fr : les URLs *.vercel.app (preview/prod sans domaine) sont valides.
# On bloque seulement les domaines d'AUTRES projets ou les placeholders de dev.
if grep -rlq "varvtc\|sourciagroup\|example\.com\|localhost:300" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v node_modules > /dev/null; then
  bad "domaine d'un autre projet ou placeholder trouve dans src/"
else
  ok "aucun domaine etranger residuel (vercel.app OK)"
fi

echo "=== 6. .env.local : cles dupliquees ==="
if [ -f .env.local ]; then
  DUPES=$(grep -oE "^[A-Z_]+=" .env.local | sort | uniq -d)
  if [ -z "$DUPES" ]; then ok "aucun doublon"; else bad "doublons: $DUPES"; fi
else
  ok "(.env.local absent, ignore)"
fi

echo "=== 7. Pages orphelines (existent mais liees nulle part) ==="
ORPHANS=""
while read -r page; do
  [ "$page" = "/" ] && continue
  echo "$page" | grep -qE '\[' && continue
  [ "$page" = "/admin" ] && continue
  count=$(grep -rl "\"$page\"\|'$page'\|$page\`" src/ --include="*.tsx" 2>/dev/null | grep -v "^src/app$page/page.tsx" | wc -l | tr -d ' ')
  [ "$count" -eq 0 ] && ORPHANS="$ORPHANS $page"
done < <(find src/app -name "page.tsx" | sed 's|src/app||;s|/page.tsx||;s|^$|/|')
if [ -z "$ORPHANS" ]; then ok "aucune"; else bad "orphelines:$ORPHANS"; fi

echo "=== 8. TODO/FIXME dans le code ==="
COUNT=$(grep -rc "TODO\|FIXME" src/ 2>/dev/null | awk -F: '{s+=$2} END{print s+0}')
echo "  INFO $COUNT occurrence(s) — informatif, non bloquant"

echo ""
if [ "$FAIL" -eq 0 ]; then
  echo "✅ Tout est vert — deploy possible."
else
  echo "❌ Au moins un point rouge — corriger avant de deployer."
fi
exit $FAIL
