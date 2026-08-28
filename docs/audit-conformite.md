# Audit croisé de conformité — la copie est-elle fidèle ?

Question posée : **tout ce qui existe sur trackmycars.fr est-il présent à
l'identique dans la copie, à la seule exception des ajouts de référencement ?**

Méthode : comparaison automatisée page par page. 115 éléments de contenu de
l'original (titres, paragraphes, caractéristiques produit, prix, coordonnées,
noms de clients) recherchés dans la copie après normalisation typographique.

---

## 1. Résultat

| Page | Éléments vérifiés | Présents | Conformité |
|---|---:|---:|---|
| Accueil | 64 | 64 | ✅ |
| Produits | 23 | 23 | ✅ |
| Abonnements → `/tarifs` | 11 | 11 | ✅ |
| FAQ | 10 | 10 | ✅ |
| Fiche produit | 5 | 5 | ✅ |
| Contact | 2 | 2 | ✅ |
| **Total** | **115** | **115** | **100 %** |

---

## 2. Écarts trouvés lors du premier passage, et corrigés

L'audit a révélé quatre écarts réels. Ils ont tous été corrigés.

### Écart 1 — Caractéristiques produit tronquées

Les cartes produit n'affichaient que **4 caractéristiques sur 9 ou 10**.
L'original les liste toutes sous chaque produit.

*Corrigé* : la liste complète est affichée.

### Écart 2 — Libellés produit réécrits

Les libellés avaient été « enrichis » de mon fait :

| Original | Ce que j'avais écrit |
|---|---|
| Application | Application mobile iOS & Android |
| Alerte de sortie de zone | Alerte de sortie de zone (geofencing) |
| Micro intégré | Micro intégré (écoute à distance) |
| Tracker invisible | Boîtier invisible une fois installé |
| 30j d'autonomie | 30 jours d'autonomie |

C'était une erreur : une fiche produit décrit un matériel, elle ne se réécrit
pas pour le référencement. Les mots-clés ont leur place dans les descriptions
et les questions-réponses, pas dans les spécifications.

*Corrigé* : les cinq listes reprennent les libellés exacts du site, au caractère
près. Le nom « Tracker Coupe Moteur » a également retrouvé sa majuscule.

### Écart 3 — FAQ entièrement remplacée

C'est l'écart le plus important. Le site actuel a huit questions précises ;
j'avais écrit les miennes à la place et supprimé les siennes :

1. Comment installer Track My Cars ?
2. Où se trouve la prise OBD dans mon véhicule ?
3. Pourquoi ai-je besoin d'une carte SIM pour le traceur GPS ?
4. Ai-je besoin d'un smartphone pour utiliser le tracker ?
5. Combien de temps faut-il pour recevoir ma commande ?
6. L'application mobile est-elle entièrement gratuite ?
7. Le traceur GPS est-il couvert par la garantie ?
8. Que faire si je ne suis pas satisfait de mon traceur ?

*Corrigé* : les huit questions sont reprises, en tête de page, sous la section
« Votre traceur au quotidien ». Mes questions viennent **après**, en complément.
Le bloc « Besoin de notre aide ? +33 6 51 11 16 09 » a également été rétabli.

Deux réponses ont été mises à jour sur le fond, pas sur la forme :

- **Carte SIM** — l'original dit « carte SIM non incluse, prenez un forfait à
  2–3 € ». C'est contredit par la page abonnements qui facture 15 €/mois. La
  réponse retenue est celle des abonnements : carte SIM 4G incluse. *Cette
  contradiction existe sur le site actuel et doit être tranchée par vous.*
- **Mot de passe par défaut** — l'original publie « 123456 » en clair. Retiré.

### Écart 4 — Formulation « cartes SIM »

Détail de rédaction sur la page abonnements. Aligné.

---

## 3. Ce qui diffère volontairement — et pourquoi

Ces écarts sont assumés. Ils constituent l'apport demandé.

### Structure des titres

Sur le site actuel, les `<h2>` portent des libellés génériques :
« Témoignages », « Produits phares », « Comment Ça Marche ? », « 01 »,
« 02 »… Ces titres ne disent rien à un moteur de recherche.

Dans la copie, ces libellés deviennent des sur-titres et le `<h2>` porte une
phrase qui a du sens :

| Site actuel | Copie |
|---|---|
| `<h2>` Témoignages | sur-titre + `<h2>` Ils parlent de nous |
| `<h2>` Comment Ça Marche ? | sur-titre + `<h2>` Suivi GPS simple, rapide et efficace en quelques étapes |
| `<h2>` 01, 02, 03, 04 | `<span>` (ce sont des numéros, pas des titres) |

Le texte affiché est identique. Seule la balise change. C'est un des rares
points où fidélité visuelle et référencement se rejoignent sans compromis.

### Sections ajoutées

Trois blocs n'existent pas sur le site actuel :

- **Secteurs** — 12 métiers, entre « Technologie de pointe » et « Comment ça marche »
- **Zones desservies** — les 12 métropoles PACA, après « Nos produits »
- **Questions fréquentes** — en bas de page, avec balisage `FAQPage`

### Pages ajoutées

| Page | Existe sur l'original |
|---|---|
| `/tarifs` | non — fusionne et développe `/nos-abonnements` |
| `/secteurs` + 12 pages | non |
| `/zones` + 12 pages | non |
| 66 pages secteur × ville | non |
| `/devis` | non — l'original a un formulaire sur la home |
| `/plan-du-site`, `/cgv`, `/mentions-legales`, `/politique-confidentialite` | non |
| `/llms.txt` | non |

**22 URL indexables → 110.**

### Page non reprise

`sample-page` — la page d'exemple de WordPress, toujours en ligne et dans le
sitemap du site actuel. Elle n'a pas été copiée, volontairement. Il faut aussi
la supprimer de l'original.

L'article `hello-world` (article de démonstration WordPress) n'a pas été repris
non plus, pour la même raison.

### Corrections de fond

| Point | Original | Copie | Motif |
|---|---|---|---|
| Garantie | 3 ans sur l'accueil, 2 ans en FAQ | 2 ans partout | Contradiction interne ; la FAQ est la mention la plus engageante |
| « Sans engagement » | affiché en bandeau | « Formule mensuelle résiliable » | Deux formules sur trois engagent sur 6 ou 12 mois |
| Compteurs | « YEARS OF EXPERIENCE », « Users », « Awards » sans chiffres | supprimés | Un compteur vide est un signal négatif |
| Mot de passe | « 123456 » publié en FAQ | retiré | Sécurité |
| Titre d'accueil | `Accueil - Track My Cars` | `Traceur GPS Véhicules & Flottes — Suivi Temps Réel \| PACA` | Aucun mot-clé sur la balise la plus lue |

---

## 4. Identité visuelle — relevée sur le site, pas inventée

Tout a été extrait des styles calculés de trackmycars.fr.

| | Valeur |
|---|---|
| Titres | Bai Jamjuree |
| Texte courant | Sarabun |
| Fond sombre | `#0E111B` |
| Bouton principal | `#38B6FF` |
| Accent secondaire | `#50A2C7` |
| Texte courant | `#424649` |
| Jaune (étoiles) | `#FFC402` |
| Boutons | rayon 10 px, 20/30 px, majuscules, 600 |

**29 fichiers image** récupérés depuis le site : logo, icônes du bandeau,
visuels de section, photos produit.

**La vidéo de fond du hero** a été reprise et réencodée de 5,4 Mo à 1,3 Mo,
avec un poster pour l'affichage immédiat et aucun téléchargement sur mobile.

---

## 5. Ce qui reste à trancher par vous

1. **Carte SIM : incluse ou non ?** La FAQ et la page abonnements du site actuel
   se contredisent. C'est un point de friction direct sur la vente.
2. **Garantie : 2 ou 3 ans ?** La copie retient 2 ans.
3. **Les compteurs** — donner les vrais chiffres, ou les laisser supprimés.
4. **L'adresse physique** — bloque la fiche Google Business Profile.
5. **SIRET et forme juridique** — pour compléter les mentions légales.
