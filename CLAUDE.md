# Track My Cars — Instructions pour toute IA intervenant sur ce projet

## Nature du projet

Refonte de **trackmycars.fr** (WordPress/WooCommerce, 22 pages) en Next.js 15.
Deux exigences qui se combinent :

1. **Copie conforme** du site actuel — design, textes, images, produits.
   Vérifié : 115/115 éléments présents (voir `docs/audit-conformite.md`).
2. **Couche SEO ajoutée par-dessus** — secteurs, zones, comparatif, guide légal,
   blog, données structurées. 22 pages → 115.

**Règle qui découle des deux :** on n'améliore jamais un contenu existant du
site pour le SEO. Les fiches produit gardent les libellés d'origine au caractère
près ; les mots-clés vont dans les descriptions, les FAQ et les pages nouvelles.
Cette règle a déjà été enfreinte une fois et corrigée.

## Stack

- Next.js 15 App Router, TypeScript strict
- Tailwind v4, `@theme` dans `globals.css`
- Hébergement Vercel
- Domaine prod : https://trackmycars.fr

## Contacts

- Téléphone : +33 6 51 11 16 09
- Email : contact@trackmycars.fr
- WhatsApp : wa.me/33651111609
- Zone : Provence-Alpes-Côte d'Azur

## Identité visuelle — relevée sur le site d'origine, ne pas inventer

| | Valeur |
|---|---|
| Titres | Bai Jamjuree |
| Texte courant | Sarabun |
| Fond sombre | `#0E111B` (`--color-primary`) |
| Bouton CTA | `#38B6FF` (`--color-cta`) |
| Accent | `#50A2C7` (`--color-accent`) |
| Texte | `#424649` (`--color-foreground`) |
| Jaune (étoiles) | `#FFC402` (`--color-gold`) |
| Boutons | rayon 10 px, padding 20/30, majuscules, 600 |

Classes utilitaires : `.btn`, `.btn-primary`, `.btn-outline`, `.btn-sm`,
`.eyebrow`, `.reveal`.

## Données — tout est dans `src/lib/data/`

| Fichier | Contenu |
|---|---|
| `site.ts` | Coordonnées, garanties, 3 formules d'abonnement |
| `products.ts` | 5 trackers — **libellés exacts du site d'origine** |
| `sectors.ts` | 12 secteurs avec contenu propre |
| `cities.ts` | 12 métropoles PACA + matrice secteur × ville |
| `competitors.ts` | 7 offres du marché, relevées publiquement |
| `articles.ts` | Articles de blog |

## Faits à ne pas réinventer

- **5 produits** : Mini 79 €, OBD 89 €, Batterie 139 €, Aimanté 179 €,
  Coupe-Moteur 199 €
- **Abonnements** : 15 € (1 mois), 60 € (6 mois), 90 € (12 mois soit 7,50 €/mois)
- **Garantie 2 ans** — le site d'origine dit 3 ans en accueil et 2 ans en FAQ,
  arbitrage fait en faveur de la FAQ
- **`/abonnements` redirige en 301 vers `/tarifs`** — fusion volontaire pour ne
  pas diviser le signal SEO

## Commandes

```bash
# Développement
./scripts-dev.sh          # port 3002

# Build + serveur de production
./scripts-prod.sh         # port 3003
```

**Ne jamais lancer un `next build` pendant que le serveur de développement
tourne** : les deux écrivent dans `.next` et le navigateur reçoit des chunks
404 avec une hydratation cassée. Symptôme trompeur qui fait perdre du temps.

## Déploiement

```bash
npx --cache /tmp/npm-cache-tmc vercel@latest deploy --prod --yes
```

## Après chaque session

```bash
git add -A && git commit -m "description" && git push origin main
```

## État — 30 août 2026

**Fait**

- 115 pages, sitemap, robots.txt, llms.txt
- JSON-LD : Organization, WebSite, LocalBusiness, Product + Offer +
  MerchantReturnPolicy, Service, FAQPage, BreadcrumbList, ItemList, HowTo,
  Article
- Vidéo de fond du hero reprise, 5,4 Mo → 1,3 Mo, non chargée sur mobile
- Toutes les images via `next/image`
- Cadre légal CNIL corrigé (conservation 2 mois, L.1222-4, L.2312-38)

**Bloqué — en attente du client**

| Question | Ce qu'elle bloque |
|---|---|
| **Adresse physique** | Google Business Profile, donc tout le pack local |
| **SIRET, forme juridique** | Mentions légales |
| **Carte SIM incluse ou non ?** | Contradiction FAQ / page abonnements sur le site d'origine — point de friction direct sur la vente |
| **Chiffres réels** | Compteurs supprimés faute de valeurs |

**Prochains chantiers**

- 4 articles de blog restants (voir `docs/audit-seo-complet.md` §13)
- Pages de comparaison par marque (TK905, Invoxia, GeoRide)
- Formulaire de devis relié à une vraie boîte mail

## Documentation

| Fichier | Contenu |
|---|---|
| `docs/audit-seo-complet.md` | 7 539 requêtes Google+Bing analysées |
| `docs/mots-cles.csv` | 2 332 expressions avec page cible |
| `docs/mots-cles-prioritaires.csv` | 255 confirmées sur les deux moteurs |
| `docs/audit-croise.md` | Prestations face aux concurrents |
| `docs/audit-conformite.md` | Vérification de la fidélité de la copie |
| `docs/acquisition-sans-ads.md` | 13 canaux hors publicité |
| `docs/checklist-inscriptions.md` | Annuaires, places de marché, avis |
| `docs/templates/` | Emails prescripteurs, modèles RGPD, communiqués |

## Ce que l'audit a établi, et qu'il ne faut pas oublier

- **Le coupe-moteur ne se cherche pas.** 23 expressions, aucune confirmée sur
  les deux moteurs. C'est un argument de conversion, jamais d'acquisition.
- **« Sans abonnement » est la requête reine.** 275 expressions. La page
  `/tarifs` y répond en démontant le mythe plutôt qu'en l'ignorant.
- **« GPS » seul désigne la navigation**, pas le traçage. Ne jamais cibler
  `gps voiture` : trafic volumineux et sans valeur.
- **Bing porte les questions, Google porte les produits.** ChatGPT s'appuie sur
  Bing : reprendre les formulations « comment… » mot pour mot.
