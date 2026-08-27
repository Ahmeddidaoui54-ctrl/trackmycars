# Audit SEO complet — Track My Cars

Méthode : récolte des suggestions réelles Google et Bing (API autocomplete,
marché FR), 3 000 requêtes sondées, **7 539 expressions récupérées**, filtrées
puis classées. Analyse technique du site actuel et des neuf concurrents
principaux. Recherche sur le référencement dans les moteurs génératifs.

Données brutes exploitables : `mots-cles.csv` (2 332 lignes) et
`mots-cles-prioritaires.csv` (255 expressions confirmées sur Google **et** Bing).

---

## 1. Réponse directe : le coupe-moteur est-il le bon argument ?

**Oui pour vendre. Non pour être trouvé.**

Les chiffres de la récolte sont sans appel :

| Cluster | Expressions trouvées | Confirmées Google + Bing |
|---|---:|---:|
| Sans abonnement | 275 | **58** |
| Prix / tarif | 69 | 9 |
| Moto | 127 | 14 |
| Comparatif / avis | 136 | 15 |
| Flotte / entreprise | 117 | 8 |
| **Coupe-moteur** | **23** | **0** |
| BTP / engin | 6 | 1 |

Le coupe-moteur ne génère **aucune expression confirmée sur les deux moteurs**,
et la plupart des 23 remontées portent en réalité sur l'immobilisation
administrative par la police — un tout autre sujet.

**Conclusion.** Le coupe-moteur reste le meilleur argument de **conversion** du
catalogue : celui qui fait choisir Track My Cars plutôt qu'un concurrent une
fois le visiteur sur le site. Mais il n'amènera presque personne. Il doit vivre
sur les pages produit et dans les arguments commerciaux, **pas** être la
promesse principale du site.

La promesse qui amène du trafic, c'est autre chose.

---

## 2. La vraie requête reine : « sans abonnement »

275 variantes, 58 confirmées sur les deux moteurs. C'est, de très loin, le
premier volume du marché :

```
traceur gps sans abonnement          balise gps sans abonnement
tracker gps sans abonnement          traceur voiture sans abonnement
traceur gps moto sans abonnement     traceur gps auto sans abonnement
traceur gps 4g sans abonnement       mini traceur gps sans abonnement
traceur gps voiture sans carte sim   traceur gps sans abonnement avis
```

Les requêtes associées révèlent l'intention : `traceur gps sans abonnement
action`, `... lidl`, `... amazon`, `... fnac`, `... darty`, `... temu`. Le
public cherche du pas cher en grande distribution.

**Le problème.** Track My Cars vend **avec** abonnement (15 €/mois, ou 7,50 €
sur 12 mois). Ignorer cette requête, c'est renoncer au premier gisement du
marché. Y répondre par un produit qu'on n'a pas serait malhonnête.

**La solution — et c'est un angle que personne n'occupe.** Les comparateurs le
reconnaissent déjà : *le « sans abonnement » n'existe pas vraiment, le coût du
réseau est toujours payé, soit dans le prix d'achat, soit par un abonnement.*

Une page `/tarifs` qui démonte le mythe avec des calculs vérifiables :

- Un boîtier Action ou Temu à 30 € nécessite une carte SIM à 2–5 €/mois, soit
  **150 à 210 € sur trois ans**, sans garantie, sans support, sans installation.
- Un Tracker Mini Track My Cars à 79 € + 90 €/an revient à **349 € sur trois
  ans**, avec garantie 2 ans, support français et matériel professionnel.
- Un Invoxia à 149 € + 59,85 €/an revient à ~269 € sur trois ans.

Cette page capte simultanément le cluster « sans abonnement » (341 expressions
dans le CSV) **et** le cluster « prix ». Aucun concurrent français ne publie ce
calcul. C'est la première page à écrire.

---

## 3. Le titre de la page d'accueil : la faille immédiate

```
Actuel  : "Accueil - Track My Cars"
```

Zéro mot-clé. Sur une balise `<title>`, c'est la plus grosse perte du site.
Comparaison avec les concurrents :

| Site | Title |
|---|---|
| Quartix | Traceur GPS de véhicules d'entreprise \| Géolocalisation de véhicules |
| Fleetlize | Traceurs GPS et Gestion de Flotte Entreprise/Particulier - N°1 Europe |
| Traceur-entreprise | Traceurs GPS professionnels pour voiture et camion |
| Flottech | Géolocalisation véhicule professionnel \| suivi de flotte |
| **Track My Cars** | **Accueil - Track My Cars** |

Le nouveau site corrige déjà ce point :
`Traceur GPS Véhicules & Flottes — Suivi Temps Réel | PACA`

---

## 4. Le piège du mot « GPS »

Découverte importante de la récolte : **« GPS » seul désigne la navigation**,
pas le traçage. Les suggestions sur `gps voiture` remontent massivement
`gps voiture gratuit`, `gps voiture waze`, `application gps` — des internautes
qui cherchent un itinéraire, pas un antivol.

Sur 7 539 expressions récoltées, **5 090 ont été écartées** pour cette raison
(navigation, animaux, enfants, objets, traceurs de dessin).

**Règle à appliquer partout :** cibler `traceur GPS`, `tracker GPS`,
`balise GPS`, `antivol GPS`, `géolocalisation` — jamais `GPS voiture` seul.
Le trafic serait volumineux et sans aucune valeur commerciale.

---

## 5. Google et Bing ne portent pas les mêmes requêtes

C'est le résultat le plus utile de la comparaison des deux sources.

| | Google | Bing |
|---|---|---|
| Expressions récoltées | 6 119 | 2 795 |
| Nature dominante | requêtes **produit** (`traceur gps tk905`, `traceur gps fnac`) | requêtes **question** (`comment fonctionne un traceur gps`) |

Bing renvoie massivement les formulations en « comment », « pourquoi »,
« quel » — Google beaucoup moins. Or **ChatGPT search s'appuie sur l'index
Bing**, et Copilot en dépend directement.

Questions confirmées côté Bing :
```
comment fonctionne un traceur gps            comment choisir un traceur gps
comment fonctionne un traceur sans abonnement comment installer un traceur gps
comment géolocaliser un véhicule             comment localiser un véhicule
comment détecter un traceur gps              comment détecter un traceur sur une voiture
comment activer un traceur gps               comment fonctionne une balise gps
```

**Conséquence opérationnelle :** chaque page doit contenir une section de
questions-réponses rédigées **exactement dans cette formulation**, avec une
réponse directe en un paragraphe court extractible. C'est ce qui fait citer
par ChatGPT.

À noter : `comment détecter un traceur gps` et `comment détecter un traceur sur
une voiture` sont des requêtes de volume — quelqu'un qui soupçonne un mouchard
sur sa propre voiture. Un article honnête sur le sujet attire du trafic,
installe l'autorité, et permet de traiter frontalement la question du micro.

---

## 6. Ce que la concurrence fait techniquement

| Site | JSON-LD | Points notables |
|---|---|---|
| **Fleetlize** | AggregateRating, FAQPage, MerchantReturnPolicy, Brand, ContactPoint | Le mieux équipé. Compteurs **remplis** : 300 voitures retrouvées, 2 000 clients, 165 pays |
| **Traxelio** | Service, FAQPage, Question/Answer, Organization, Person | Stratégie pages villes + comparatif « sans suivi / avec » |
| Geotraceur | WebSite, WebPage, Breadcrumb | Catalogue produit pur, PC de surveillance 24/7 |
| Quartix | Breadcrumb seulement | Très forte autorité, très faible technique |
| Flottech | Organization, PostalAddress | Adresse postale exposée (bon pour le local) |
| Suivideflotte | **aucun** | |
| **Track My Cars** | Organization, WebSite, WebPage, SearchAction | Pas de Product, pas de FAQPage, pas de LocalBusiness |

Deux enseignements :

1. **Fleetlize affiche des compteurs remplis** là où Track My Cars affiche
   « YEARS OF EXPERIENCE » et « Awards & Recognitions » **vides**. C'est une
   comparaison directement défavorable sur le même marché.
2. **Aucun concurrent n'a de balisage `Product` avec `Offer` et prix.**
   Track My Cars vend des produits à prix fixe : c'est la porte d'entrée vers
   les résultats enrichis avec prix et disponibilité, que personne n'occupe.

Le nouveau site implémente déjà : Organization, WebSite, LocalBusiness,
Product + Offer + MerchantReturnPolicy, Service, FAQPage, BreadcrumbList,
ItemList, HowTo.

---

## 7. Volumétrie : le site actuel est minuscule

Relevé des sitemaps de `trackmycars.fr` :

| Type | Nombre |
|---|---:|
| Articles | 1 |
| Pages | 10 |
| Produits | 9 |
| Catégories | 2 |
| **Total indexable** | **22** |

Le nouveau site en compte **109**, soit un facteur cinq — et surtout, chacune
répond à une requête identifiée dans la récolte.

Trois anomalies à corriger sur le site actuel :

1. `sample-page` — la page d'exemple WordPress est toujours en ligne et dans le
   sitemap.
2. `cart`, `checkout`, `my-account` sont dans le sitemap. Ces pages ne doivent
   jamais être indexées.
3. Pas de `llms.txt` (point mineur, voir §9).

---

## 8. Concurrents que l'audit précédent avait manqués

La récolte fait apparaître des acteurs absents de la première analyse, parce
qu'ils sortent sur les requêtes produit plutôt que sur les requêtes flotte :

**Distribution :** Norauto (`traceur gps norauto`, confirmé Google + Bing),
Action, Lidl, Fnac, Darty, Amazon, Temu.

**Marques citées nommément :** TK905, Winnes, GF-07, Invoxia, Beepings ZEN L,
GeoRide (moto), Coyote Secure, Comfexia, Kippy, Yonis, Dimova, Helix.

**Éditeurs de contenu qui captent le comparatif :** trakmy.fr,
meilleurs-traceurs-gps.fr, trackeo.fr, meilleurs.fr — ce sont eux qui
occupent « meilleur traceur GPS » et « comparatif », pas les vendeurs.

**Opportunité.** Les requêtes de marque (`traceur gps tk905`,
`traceur gps invoxia`, `traceur gps georide`) sont peu disputées par les
vendeurs. Des pages de comparaison honnêtes — « Track My Cars ou TK905 : ce qui
change vraiment » — captent un trafic déjà en phase d'achat.

---

## 9. Référencement dans ChatGPT et les moteurs génératifs

L'intuition est juste : Bing compte parce que ChatGPT s'appuie sur son index.

**Ce qui augmente réellement la citation par une IA** (mesuré) :

| Élément | Effet sur la probabilité de citation |
|---|---|
| Citations et guillemets | **+41 %** |
| Statistiques chiffrées | **+32 %** |
| Sources citées en ligne | **+30 %** |

**Ce qui ne sert à rien pour l'instant :** `llms.txt`. Sur ~38 000 domaines
qui en publient un valide, **97 % n'ont reçu aucune requête** sur ce fichier, et
aucune corrélation avec le taux de citation n'a été établie. À ajouter parce
que c'est gratuit, pas à prioriser.

**Les six actions qui comptent vraiment :**

1. **Soumettre le sitemap à Bing Webmaster Tools** — pas seulement à Google
   Search Console. C'est la condition d'entrée dans ChatGPT search.
2. **Structurer chaque réponse en un paragraphe court et autonome**, placé
   juste sous la question. Une IA extrait des blocs, pas des pages.
3. **Injecter des statistiques sourcées** — l'audit en fournit (§10).
4. **Nommer un auteur et dater les pages** : signal E-E-A-T déterminant.
5. **Balisage `FAQPage` et `Question/Answer`** sur toutes les pages — déjà en
   place sur le nouveau site.
6. **Reprendre la formulation exacte des questions Bing** listées au §5.

---

## 10. Statistiques à intégrer au contenu

Chiffres vérifiables, à citer avec leur source — ils augmentent la citation par
les IA de ~32 % et renforcent la crédibilité auprès des visiteurs.

**Vol de véhicules (2025, ministère de l'Intérieur / Argos) :**
- 125 200 vols de véhicules recensés en France
- Un véhicule volé toutes les quatre minutes
- 64 088 vols déclarés aux assurances, en baisse de 9 % sur un an
- 44 104 voitures particulières volées
- **40 % des voitures volées sont retrouvées** — un tiers en moins d'une
  semaine, deux tiers en moins d'un mois
- Coût moyen d'un sinistre vol : **+138 % en dix ans**
- Primes auto en hausse d'environ 5 % en 2026

**Vol de matériel de chantier (2025) :**
- Vols d'engins **en hausse de 14 %**, à contre-courant de la baisse générale
- **68 % des professionnels du BTP** confrontés au vol en 2025, contre 50 % en
  2022
- Perte moyenne par entreprise : **31 000 €**
- Plus de **400 millions d'euros** de pertes annuelles pour le secteur

Ce dernier bloc est décisif : le secteur BTP est celui où la douleur est la plus
forte et la concurrence SEO la plus faible (6 expressions récoltées seulement).

---

## 11. Cadre légal — à corriger dans le contenu

La recherche sur les obligations CNIL révèle une erreur dans ce qui a été
rédigé jusqu'ici.

| Point | Ce qui avait été écrit | Ce que dit réellement la CNIL |
|---|---|---|
| Conservation des données | 3 à 12 mois | **Deux mois en principe** |
| Trajets domicile-travail | non traité | **Jamais traçables** |
| Consultation du CSE | mentionnée | Obligatoire — **art. L.2312-38** |
| Information du salarié | mentionnée | Obligatoire — **art. L.1222-4** |
| Déclaration CNIL | « déclarer au registre » | **Aucune déclaration préalable requise** ; registre des traitements, et DPIA le cas échéant |
| Géolocalisation permanente | non traité | **Interdite** |

Finalités admises par la CNIL : facturation d'une prestation, sécurité des
biens et des personnes, optimisation des tournées, et suivi du temps de travail
**à titre subsidiaire uniquement**.

À corriger dans `sectors.ts`, la FAQ et la politique de confidentialité. Une
page erronée sur un sujet juridique détruit l'E-E-A-T qu'on cherche justement à
construire dessus.

---

## 12. Le local : une nuance à connaître

La récolte ne remonte que **six expressions locales** :
```
traceur gps marseille          traceur gps voiture marseille
traceur voiture marseille      magasin traceur gps marseille
traceur gps aix en provence    suivi gps marseille cassis
```

Il ne faut pas en conclure que le local est sans intérêt — l'autocomplete
sous-représente structurellement ces requêtes, parce que Google applique la
géolocalisation implicite : quelqu'un à Marseille qui tape `traceur gps` reçoit
déjà des résultats marseillais sans écrire le nom de sa ville.

**Ce qu'il faut en retenir :**
- Les 66 pages secteur × ville gardent leur valeur, mais comme **filet de
  longue traîne**, pas comme moteur principal.
- Le vrai levier local reste la **fiche Google Business Profile** et les avis.
- `magasin traceur gps marseille` révèle une intention de retrait physique :
  s'il existe un point d'accueil, il faut l'exposer.

---

## 13. Plan d'action priorisé

### Immédiat — avant même Search Console

| # | Action | Pourquoi |
|---|---|---|
| 1 | Corriger le title `Accueil - Track My Cars` | Perte la plus coûteuse du site |
| 2 | Trancher la contradiction carte SIM / abonnement | Bloque la vente (voir audit croisé) |
| 3 | Supprimer `sample-page` et sortir cart/checkout/account du sitemap | Hygiène d'indexation |
| 4 | Retirer le mot de passe `123456` de la FAQ | Sécurité |
| 5 | Remplir ou supprimer les compteurs vides | Fleetlize affiche les siens |
| 6 | Corriger les durées de conservation RGPD | Erreur juridique |

### Semaine 1 — inscription aux outils

| # | Action |
|---|---|
| 7 | Google Search Console + soumission du sitemap |
| 8 | **Bing Webmaster Tools** + soumission du sitemap (accès ChatGPT) |
| 9 | Google Business Profile — nécessite une adresse physique |

### Mois 1 — les pages qui manquent

| # | Page | Cluster capté | Expressions |
|---|---|---|---:|
| 10 | `/tarifs` — le vrai coût sur 3 ans | sans abonnement + prix | **341** |
| 11 | `/comparatif` — face aux marques du marché | comparatif + avis | **128** |
| 12 | `/guide-legal` — CNIL, RGPD, droit du travail | légal | **46** |
| 13 | `/blog/detecter-un-traceur-gps` | détection | 8 + fort volume Bing |
| 14 | `/blog/vehicule-vole-que-faire` | vol / récupération | 34 |

### Mois 2–3 — autorité

| # | Action |
|---|---|
| 15 | Collecter 20 avis Google |
| 16 | Cas clients chiffrés par ville |
| 17 | Modèle de note d'information salariés en téléchargement |
| 18 | Démarcher un assureur pour l'attestation |

---

## 14. Le positionnement qui ressort de la donnée

L'audit croisé avait proposé : *« les concurrents vous disent où est votre
véhicule, vous pouvez l'arrêter »*. La récolte de mots-clés montre que cette
promesse ne correspond à presque aucune recherche.

Le marché cherche, dans cet ordre : **un traceur sans abonnement**, **son
prix**, **le meilleur modèle**, **la légalité**, puis le secteur d'usage.

D'où un positionnement en deux étages :

> **Pour attirer** — « Ce que coûte vraiment un traceur GPS, abonnement
> compris. » Le seul acteur du marché qui publie le calcul complet.
>
> **Pour convertir** — « Et le seul dont vous pouvez couper le moteur à
> distance. »

Le premier étage amène le trafic. Le second gagne la vente. Les inverser serait
l'erreur.

---

## Annexes

- `mots-cles.csv` — 2 332 expressions, avec page cible, intention et moteur
- `mots-cles-prioritaires.csv` — 255 expressions confirmées sur Google **et**
  Bing, à charger en premier dans Search Console
- `audit-croise.md` — comparaison des prestations
- `strategie-seo.md` — analyse concurrentielle initiale

**Sources :** [CNIL — géolocalisation des véhicules professionnels](https://www.cnil.fr/fr/cnil-direct/question/geolocalisation-des-vehicules-professionnels-des-employes-que-faire) ·
[Observatoire Coyote Secure 2026](https://www.moncoyote.com/blog/vol-tracking/observatoire-des-vols-et-de-la-recuperation-apres-vol-coyote-secure-2026/) ·
[Silexo — cadre légal RGPD](https://silexo.fr/article/182/geolocalisation-des-vehicules-professionnels-cadre-legal-limites-et-risques-pour-l-entreprise-rgpd-droit-du-travail) ·
[TRAKmy — vol BTP](https://trakmy.fr/traceur-gps-engins-chantier/) ·
[Similarweb — guide GEO 2026](https://aisearch.similarweb.com/blog/what-is-geo/) ·
[Yotpo — être cité par ChatGPT](https://www.yotpo.com/blog/chatgpt-seo-geo-tips/)
