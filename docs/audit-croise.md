# Audit croisé — Track My Cars vs concurrence

Objet : identifier les prestations que Track My Cars propose et que les
concurrents ne proposent pas, puis les transformer en angles de référencement.

---

## 1. Ce que fait Track My Cars

| Prestation | Détail relevé sur le site |
|---|---|
| Coupe-moteur à distance | Tracker Coupe moteur, 199 € |
| Micro embarqué / écoute à distance | Mini, OBD, Aimanté |
| Alertes SMS sans smartphone | FAQ Q4 — accessible depuis n'importe quel téléphone |
| Interface web sans installation | FAQ Q4 |
| Application 100 % gratuite | FAQ Q6 — aucun frais caché |
| Tracker aimanté 30 j d'autonomie | 179 €, pose sans câblage |
| Prix affichés et achat en ligne | E-commerce direct, 79 € à 199 € |
| Boîtier acheté, pas loué | Le client reste propriétaire |
| Abonnement 1 mois sans engagement | 15 €/mois |
| Traitement le jour même, livraison 48 h | FAQ Q5 |
| Rétractation 14 jours | FAQ Q8 |
| Support français direct + WhatsApp | Bandeau et footer |
| Particuliers **et** professionnels | Gamme mixte |

---

## 2. Croisement avec les concurrents

Légende : ✅ proposé · ❌ absent · ⚠️ partiel ou non documenté

| Prestation | Track My Cars | Quartix | Suivideflotte / Flottech | Fleetlize / Traxelio | Geotraceur | Expert GPS (PACA) |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **Coupe-moteur à distance** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Micro embarqué** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Prix publics affichés** | ✅ | ❌ | ❌ | ⚠️ | ✅ | ❌ |
| **Achat du boîtier (propriété)** | ✅ | ❌ location | ❌ location | ❌ location | ✅ | ❌ revendeur |
| **Sans engagement (1 mois)** | ✅ | ❌ 12 mois mini | ❌ | ⚠️ essai 14 j | ⚠️ | ❌ |
| **Alertes SMS sans smartphone** | ✅ | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| **Aimanté autonome 30 j** | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Vente aux particuliers** | ✅ | ❌ B2B | ❌ B2B | ❌ B2B | ✅ | ❌ B2B |
| **Achat en ligne immédiat** | ✅ | ❌ devis | ❌ devis | ❌ devis | ✅ | ❌ devis |
| Rapports flotte / éco-conduite | ❌ | ✅ | ✅ | ✅ | ⚠️ | ✅ |
| API / intégration SI | ❌ | ✅ | ✅ | ✅ | ❌ | ⚠️ |
| Télésurveillance 24/7 | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Attestation assurance | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Essai gratuit | ❌ | ⚠️ | ⚠️ | ✅ | ❌ | ❌ |

---

## 3. Les quatre monopoles réels

### Monopole 1 — Le coupe-moteur à distance

**Aucun concurrent identifié ne le propose.** Quartix, Suivideflotte, Flottech,
Fleetlize et Geotraceur font du suivi ; ils ne font pas de l'immobilisation.

C'est la différence entre « je sais où est mon véhicule volé » et « mon véhicule
volé ne redémarrera pas ». Commercialement, c'est l'argument le plus fort du
catalogue, et il est aujourd'hui **noyé dans la fiche produit** au lieu d'être
un axe de communication.

**Requêtes à capter, aujourd'hui non travaillées :**
```
coupe moteur a distance gps
immobiliser vehicule a distance
gps coupe moteur voiture
bloquer demarrage voiture volee
antivol coupe circuit a distance
gps coupe moteur camion
coupe moteur vehicule loue non restitue
```

**À produire :** une page dédiée `/coupe-moteur` traitant le sujet en entier —
comment ça marche, pourquoi ça ne coupe jamais en roulant, le cadre légal, les
cas d'usage (vol, non-restitution de location, impayé sur véhicule financé).
Cette page devient la tête de pont sur une requête sans concurrence.

### Monopole 2 — Particuliers ET professionnels

Quartix, Suivideflotte, Flottech, Fleetlize et Expert GPS sont **exclusivement
B2B**, avec parcours devis obligatoire. Geotraceur est B2C mais sans installation.

Track My Cars est le seul à couvrir les deux avec achat immédiat et prix affiché.
Or le volume de recherche particulier (« traceur gps voiture », « gps moto
volée ») est très supérieur au volume B2B, et personne ne le convertit sur un
parcours local.

**À exploiter :** garder les pages secteurs B2B (flotte, camion, BTP) mais
assumer un tunnel particulier distinct — moto, voiture, camping-car, bateau —
avec achat direct plutôt que devis.

### Monopole 3 — Le prix affiché

Quartix, Flottech, Fleetlize et Expert GPS masquent leurs tarifs derrière un
formulaire. C'est un point de friction majeur, et une opportunité SEO immédiate :
les requêtes contenant « prix », « tarif » et « combien » n'ont **aucune réponse
directe** en première page.

```
prix traceur gps voiture
combien coute un traceur gps
tarif geolocalisation flotte
traceur gps prix abonnement
gps vehicule societe prix
traceur gps sans abonnement prix
```

**À produire :** une page `/tarifs` avec le coût total sur 1 an et sur 3 ans,
boîtier + abonnement, comparé au coût d'un vol non couvert. Personne ne l'a.

### Monopole 4 — Le sans-engagement

Quartix impose 12 mois minimum. Track My Cars propose 15 € pour un mois,
résiliable. C'est l'argument d'entrée pour les PME et artisans réticents à
signer un contrat annuel.

```
traceur gps sans engagement
gps flotte sans contrat
location traceur gps courte duree
traceur gps 1 mois
```

---

## 4. Le micro embarqué : un différenciateur à cadrer juridiquement

Trois produits sur cinq embarquent un micro permettant l'écoute à distance.
Aucun concurrent ne le propose — et c'est probablement délibéré de leur part.

**Le risque.** L'article 226-1 du Code pénal punit d'un an d'emprisonnement et
45 000 € d'amende le fait de capter, sans le consentement de leur auteur, des
paroles prononcées à titre privé. Un micro dans un véhicule d'entreprise utilisé
à l'insu du conducteur relève directement de ce texte. La CNIL a par ailleurs
sanctionné à plusieurs reprises l'écoute de salariés.

**Recommandation.** Ne pas retirer la fonction, mais ne jamais la mettre en
avant comme argument de surveillance. La présenter uniquement comme fonction
de **sécurité en cas de vol** — écouter l'environnement d'un véhicule dérobé
pour appuyer une plainte — et l'accompagner systématiquement d'une mention sur
l'obligation d'information.

Traité correctement, c'est un contenu E-E-A-T fort : « Micro embarqué dans un
traceur GPS : ce que la loi autorise vraiment ». Traité comme un argument de
surveillance, c'est un risque pénal pour le client et un risque de
déclassement pour le site.

---

## 5. Ce que les concurrents ont et qu'il manque

| Manque | Détenteur | Impact | Effort |
|---|---|---|---|
| **Attestation assurance** | Geotraceur | Fort — plusieurs assureurs exigent un dispositif agréé et accordent une réduction de prime | Faible : accord avec un ou deux assureurs |
| **Rapports de flotte** | Tous les SaaS | Fort en B2B — c'est ce qui justifie l'abonnement au-delà de l'antivol | Élevé : développement plateforme |
| **Essai gratuit** | Fleetlize (14 j) | Moyen — lève la friction | Faible : formule 1 mois offerte |
| **Télésurveillance 24/7** | Geotraceur | Moyen — segment premium | Élevé : astreinte humaine |
| **API** | Quartix, Flottech | Faible sauf grands comptes | Élevé |

**Priorité : l'attestation assurance.** C'est le manque le moins cher à combler
et celui qui ouvre le plus de requêtes commerciales
(« traceur gps agréé assurance », « gps reduction prime assurance auto »).

---

## 6. Incohérences à corriger sur le site actuel

Relevées lors de l'audit, elles nuisent à la conversion **et** à la crédibilité
aux yeux de Google :

1. **Garantie : 3 ans en page d'accueil, 2 ans en FAQ.** Le nouveau site retient
   2 ans (la mention FAQ, la plus engageante juridiquement). À trancher.
2. **« Sans engagement » affiché en bandeau, alors que deux formules sur trois
   sont à 6 et 12 mois.** Reformuler en « Formule sans engagement disponible ».
3. **Contradiction majeure sur la carte SIM.** La FAQ dit « carte SIM non
   incluse », « aucun frais mensuel », « prenez un forfait à 2–3 € » ; la page
   abonnements vend une connectivité à 15 €/mois. Le visiteur ne peut pas
   savoir ce qu'il achète. **À trancher en priorité** — c'est un point de
   friction direct sur la vente.
4. **Mot de passe par défaut « 123456 » publié en clair dans la FAQ.** À
   retirer et remplacer par « un identifiant unique fourni avec votre commande ».
5. **Compteurs vides** (« YEARS OF EXPERIENCE », « Users », « Awards ») sans
   aucun chiffre. Signal négatif. À remplir ou supprimer.
6. **Le Tracker GPS Batterie (139 €) n'apparaît pas sur la page d'accueil**,
   seulement dans le catalogue. Manque à gagner sur un produit de milieu de gamme.

---

## 7. Plan d'action issu de l'audit

| # | Action | Fondement | Effort |
|---|---|---|---|
| 1 | Trancher la contradiction carte SIM / abonnement | Bloque la vente | Décision |
| 2 | Page `/coupe-moteur` dédiée | Monopole absolu | Moyen |
| 3 | Page `/tarifs` avec coût total 1 an / 3 ans | Requêtes sans réponse | Moyen |
| 4 | Retirer le mot de passe par défaut de la FAQ | Sécurité | Immédiat |
| 5 | Reformuler « sans engagement » | Honnêteté commerciale | Immédiat |
| 6 | Guide « micro embarqué : ce que la loi autorise » | E-E-A-T, zéro concurrence | Moyen |
| 7 | Démarcher un assureur pour l'attestation | Comble le seul manque rentable | Moyen |
| 8 | Mettre le Tracker Batterie en avant | Manque à gagner | Faible |

---

## 8. Positionnement à retenir

> Les concurrents vous disent **où** est votre véhicule.
> Track My Cars vous permet de **l'arrêter**.

C'est la seule promesse que personne d'autre ne peut tenir sur ce marché.
Elle doit devenir le fil conducteur du site, pas une ligne dans une fiche produit.
