#!/usr/bin/env bash
# Vérifications avant déploiement. Doit afficher ✅ partout.
# Repris du projet VTC, adapté aux règles propres à trackmycars.
set -uo pipefail
cd "$(dirname "$0")/.."

FAIL=0
ok()   { echo "✅ $1"; }
bad()  { echo "❌ $1"; FAIL=1; }
warn() { echo "⚠️  $1"; }

echo "── Git ──"
AUTHOR=$(git config user.email 2>/dev/null || echo "")
[ -z "$AUTHOR" ] && AUTHOR=$(git log -1 --format='%ae' 2>/dev/null || echo "")
if [ "$AUTHOR" = "ahmeddidaoui54@gmail.com" ]; then
  ok "auteur git = $AUTHOR"
else
  bad "auteur git = '$AUTHOR' (Vercel bloque si ≠ ahmeddidaoui54@gmail.com)"
fi

if [ -z "$(git status --porcelain)" ]; then
  ok "arbre git propre"
else
  warn "modifications non commitées"
fi

echo
echo "── TypeScript ──"
if npx tsc --noEmit 2>/dev/null; then ok "aucune erreur de type"; else bad "erreurs TypeScript"; fi

echo
echo "── Cohérence des données ──"
# Ancienne grille inventée (9,90 / 7,90 / 5,90 PAR MOIS et PAR VÉHICULE).
# On ne cible que le "par mois" : ces montants restent légitimes ailleurs,
# par exemple le tarif annuel réel d'un concurrent.
if grep -rqE '(9,90|5,90|7,90) ?€ ?(/ ?mois|par mois)' src/ 2>/dev/null; then
  bad "ancienne grille mensuelle trouvée (9,90 / 5,90 / 7,90 par mois)"
else ok "aucun tarif mensuel obsolète"; fi

# Anciens noms de formules
if grep -rqE '"(Essentiel|Pro|Flotte)"' src/lib/data/site.ts 2>/dev/null; then
  bad "anciens noms de formules dans site.ts (doivent être 1/6/12 mois)"
else ok "formules d'abonnement conformes au site d'origine"; fi

# Garantie : 2 ans partout (le site d'origine se contredit, on a tranché)
if grep -rqE 'garantie 3 ans|Garantie 3 ans|garanti 3 ans' src/ 2>/dev/null; then
  bad "mention 'garantie 3 ans' — doit être 2 ans"
else ok "garantie 2 ans partout"; fi

# Mauvais domaine
if grep -rq "trackmycar\.fr" src/ 2>/dev/null; then
  bad "domaine 'trackmycar.fr' (manque le s)"
else ok "domaine correct"; fi

# Mot de passe par défaut du site d'origine
if grep -rq "123456" src/ 2>/dev/null; then
  bad "mot de passe '123456' présent dans le contenu"
else ok "aucun mot de passe en clair"; fi

echo
echo "── Règle n°1 : prix sur les pages commerciales ──"
for f in src/app/secteurs/page.tsx src/app/zones/page.tsx \
         "src/app/secteurs/[sector]/page.tsx" "src/app/zones/[city]/page.tsx"; do
  if grep -q "PriceStrip" "$f" 2>/dev/null; then
    ok "prix affiché — ${f#src/app/}"
  else
    bad "AUCUN PRIX — ${f#src/app/}"
  fi
done

echo
echo "── SEO technique ──"
for f in src/app/sitemap.ts src/app/robots.ts src/app/llms.txt/route.ts; do
  [ -f "$f" ] && ok "${f#src/app/} présent" || bad "${f#src/app/} manquant"
done

if grep -q "GPTBot" src/app/robots.ts 2>/dev/null; then
  ok "bots IA autorisés nommément"
else bad "robots.ts n'autorise pas les bots IA (GEO/AEO)"; fi

if ls public/*.txt >/dev/null 2>&1; then
  ok "clé IndexNow publiée ($(ls public/*.txt | head -1 | xargs basename))"
else warn "aucune clé IndexNow dans public/"; fi

# Canonical sur chaque page
MISSING=$(grep -rL "canonical" --include="page.tsx" src/app 2>/dev/null \
          | grep -v "not-found\|error\|loading" || true)
if [ -z "$MISSING" ]; then ok "canonical sur toutes les pages"
else warn "canonical absent : $(echo "$MISSING" | tr '\n' ' ')"; fi

echo
echo "── Build ──"
if npx next build >/tmp/tmc-build.log 2>&1; then
  PAGES=$(grep -oE "Generating static pages \(([0-9]+)/" /tmp/tmc-build.log | grep -oE "[0-9]+" | tail -1)
  ok "build réussi — ${PAGES:-?} pages"
else
  bad "build échoué (voir /tmp/tmc-build.log)"
fi

echo
if [ "$FAIL" -eq 0 ]; then
  echo "✅ Prêt à déployer."
  echo "   npx --cache /tmp/npm-cache-tmc vercel@latest deploy --prod --yes"
  echo "   puis ./scripts/indexnow.sh"
else
  echo "❌ Corriger les points ci-dessus avant de déployer."
  exit 1
fi
