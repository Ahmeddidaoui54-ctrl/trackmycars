# Stratégie SEO — Track My Cars

## 1. Qui occupe la première page aujourd'hui

### Nationaux (autorité de domaine forte, contenu générique)

| Concurrent | Positionnement | Faiblesse exploitable |
|---|---|---|
| Quartix | Leader flotte entreprise, très forte autorité | Aucun ancrage local, pas d'e-commerce, pas de prix affiché |
| Suivideflotte / Flottech | SaaS flotte, blog fourni | Vendent un abonnement, pas de matériel ; pas d'installation sur site |
| Fleetlize / Traxelio | SaaS, essai gratuit 14 j | Zéro contenu local, pages villes inexistantes |
| Geotraceur / PAJ-GPS / Antivol-store | E-commerce pur produit | Aucune installation, aucun conseil métier, aucun ancrage régional |

### Le concurrent PACA direct

**Expert GPS (réseau Jalis)** — `expertgps.fr`
- H1 : « Installation traceur GPS de véhicule d'entreprise en PACA »
- Ne cite que **3 villes** : Marseille, Toulon, Nice
- Revendeur TomTom Business — pas de matériel propre
- Page unique et mince, produite par une agence en série
- **C'est la cible à dépasser.**

### Constat central

Personne n'occupe le triplet **produit × secteur × ville** en PACA.
Les nationaux sont génériques, les e-commerçants n'ont pas de local, et le seul acteur régional se contente d'une page pour toute la région.

---

## 2. Ce qui est déjà en place sur le nouveau site

- **12 secteurs** avec contenu propre (constat, bénéfices, FAQ, produits recommandés)
- **12 métropoles PACA** avec contexte économique, quartiers et axes routiers réels
- **66 pages secteur × ville** — le cœur du dispositif, aucun concurrent ne l'a
- **103 URLs** au sitemap, maillage interne croisé (secteur ↔ ville ↔ produit)
- **JSON-LD complet** : Organization, WebSite, LocalBusiness, Product + Offer,
  Service, FAQPage, BreadcrumbList, ItemList, HowTo
- Canonicals, robots.txt, metadata par page, geo meta PACA

---

## 3. Les 5 leviers à activer, par ordre d'impact

### Levier 1 — Google Business Profile (le plus rentable, et il manque)

Le pack local (les 3 fiches sur la carte) ne s'atteint **que** par une fiche
Google Business Profile. Le site actuel n'affiche aucune adresse physique,
ce qui rend la fiche impossible à valider.

**À faire :**
1. Créer la fiche avec une adresse réelle en PACA (siège ou atelier)
2. Catégorie principale : « Magasin de systèmes de sécurité » ou
   « Installateur d'équipements automobiles »
3. Définir la zone desservie : les 5 départements PACA
4. Publier 15–20 photos réelles (poses, boîtiers, atelier, véhicules équipés)
5. Collecter les avis clients de façon continue — c'est le facteur n°1 du pack local
6. Publier un post Google toutes les deux semaines

Sans cette fiche, aucune des pages villes ne remontera dans le pack local,
quelle que soit la qualité du contenu.

### Levier 2 — L'angle juridique, que personne ne traite

Les requêtes « ai-je le droit de géolocaliser un salarié », « géolocalisation
véhicule société légal », « RGPD géolocalisation flotte » ont un volume réel et
une **intention commerciale forte** : celui qui pose la question est en train
d'équiper sa flotte.

Aucun concurrent ne traite ce sujet sérieusement. Le site le fait déjà dans la
FAQ et sur `/secteurs/flotte-entreprise`. À pousser avec :
- Un guide dédié « Géolocaliser les véhicules de son entreprise en toute légalité »
- Un modèle de note d'information aux salariés en téléchargement (capture de leads)
- Un modèle de mention au registre RGPD

C'est le contenu qui fera les backlinks et l'autorité.

### Levier 3 — Les secteurs que personne ne cible

Tout le monde se bat sur « traceur GPS voiture » et « GPS flotte ».
Personne ne travaille :
- **Engins de chantier / BTP** — Arles, Gap, Salon-de-Provence, Avignon
- **Remorques et porte-engins** — sans alimentation, argument technique unique
- **Bateaux et jet-skis** — Antibes, Cannes, Hyères, Fréjus : marché réel, zéro concurrence SEO
- **Loueurs de véhicules** — non-restitution, coupe-moteur : niche à forte valeur

Ces pages existent déjà. Elles sortiront vite car la concurrence est nulle.

### Levier 4 — Preuves et signaux de confiance

Le site actuel affiche des compteurs vides (« YEARS OF EXPERIENCE », « Users »,
« Awards & Recognitions » sans chiffres). C'est un signal négatif, pour Google
comme pour le visiteur.

**À faire :**
- Remplacer par des chiffres réels et vérifiables, ou supprimer le bloc
- Ajouter des avis clients avec nom, ville et secteur (`Review` + `AggregateRating`)
- Publier des cas clients courts : « 14 fourgons équipés pour un plombier à Toulon »
- Afficher SIRET, adresse et mentions légales complètes (E-E-A-T)

### Levier 5 — Contenu long courrier

Un article par mois, chacun visant une requête d'intention :
1. Que faire quand son véhicule est volé — les 6 premières heures
2. Traceur GPS avec ou sans abonnement : le vrai calcul sur 3 ans
3. Comment choisir un traceur GPS pour une flotte de 10 à 50 véhicules
4. Vol de matériel de chantier : ce que couvre vraiment votre assurance
5. OBD, aimanté ou câblé : le comparatif technique
6. Géolocalisation et droit du travail : ce que dit la CNIL

---

## 4. Mots-clés à déclarer dans Google Search Console

### Priorité 1 — Local commercial (conversion immédiate)

```
traceur gps marseille
tracker gps marseille
traceur gps nice
traceur gps toulon
traceur gps aix en provence
antivol gps marseille
geolocalisation flotte marseille
installation traceur gps paca
boitier gps entreprise marseille
traceur gps var
traceur gps bouches du rhone
traceur gps alpes maritimes
```

### Priorité 2 — Secteur × intention

```
geolocalisation flotte entreprise
traceur gps camion
gps poids lourd entreprise
traceur gps utilitaire artisan
traceur gps engin de chantier
gps antivol btp
traceur gps remorque sans alimentation
traceur gps moto discret
gps antivol scooter
traceur gps bateau mouillage
gps camping car antivol
gps location de voiture non restitution
traceur gps taxi vtc
```

### Priorité 3 — Produit

```
tracker gps coupe moteur
traceur gps obd2
traceur gps aimante longue autonomie
mini traceur gps discret
traceur gps sans installation
traceur gps 30 jours autonomie
coupe moteur a distance gps
```

### Priorité 4 — Juridique et informationnel (autorité)

```
geolocalisation salarie legal
rgpd geolocalisation vehicule entreprise
droit geolocaliser vehicule societe
cnil geolocalisation flotte
peut on mettre un gps sur une voiture de fonction
information salarie geolocalisation modele
```

### Priorité 5 — Longue traîne secteur × ville

Générée automatiquement par les 66 pages `/secteurs/{secteur}/{ville}`.
Exemples : `traceur gps camion marseille`, `gps engin chantier arles`,
`traceur gps bateau antibes`, `geolocalisation flotte aix en provence`.

---

## 5. Ordre d'exécution

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Créer la fiche Google Business Profile | Faible | **Très fort** |
| 2 | Soumettre le sitemap à Search Console | Faible | Fort |
| 3 | Remplacer les compteurs vides par des chiffres réels | Faible | Moyen |
| 4 | Compléter mentions légales (SIRET, adresse) | Faible | Moyen |
| 5 | Collecter 20 avis Google | Moyen | **Très fort** |
| 6 | Guide juridique + modèle RGPD téléchargeable | Moyen | Fort |
| 7 | 6 articles de blog | Élevé | Fort à 6 mois |
| 8 | Cas clients par ville | Moyen | Fort |

---

## 6. Ce qui manque encore côté site

- [ ] Adresse physique réelle (bloque le Google Business Profile)
- [ ] SIRET / forme juridique dans les mentions légales
- [ ] Avis clients avec `Review` + `AggregateRating` en JSON-LD
- [ ] Blog (les 6 articles ci-dessus)
- [ ] Guide juridique + modèles téléchargeables
- [ ] Chiffres réels pour le bloc statistiques
- [ ] Boîte mail `contact@trackmycars.fr` réellement relevée
