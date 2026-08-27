# Track My Cars — Instructions pour toute IA intervenant sur ce projet

## Stack
- **Framework** : Next.js 15 App Router, TypeScript strict
- **CSS** : Tailwind v4 avec `@theme` dans `globals.css`
- **BDD** : Supabase (schéma `public`)
- **Hosting** : Vercel (deploy via CLI uniquement)
- **Domaine prod** : https://trackmycars.fr

## Contacts
- **Téléphone** : +33 6 51 11 16 09
- **Email** : contact@trackmycars.fr
- **WhatsApp** : wa.me/33651111609

## Règles ABSOLUES

### Avant de toucher au code
```bash
git pull origin main
```

### Avant de déployer
```bash
./scripts/pre-deploy-check.sh
```

### Déploiement
```bash
npx --cache /tmp/npm-cache-tmc vercel@latest deploy --prod --yes
```

### Après chaque session
```bash
git add -A && git commit -m "description" && git push origin main
```

## Design system
- **Primary** : `#1a3a52` (navy foncé)
- **Accent** : `#e8a535` (orange)
- **Background** : `#fafaf8` (off-white)
- **Serif** : Playfair Display (titres)
- **Sans** : Inter (corps)

## Secteurs
- Auto
- Moto
- Camion
- Taxi
- Bus

## Produits
- Tracker Aimanté (179€)
- Tracker Coupe moteur (199€)
- Tracker Mini (79€)
- Tracker OBD (89€)

## État du projet
- ⏳ Structure de base (en cours)
- ⏳ Pages par secteur
- ⏳ Catalogue produits + SEO
- ⏳ Abonnements
- ⏳ JSON-LD complet
- ⏳ Formulaire demande devis
