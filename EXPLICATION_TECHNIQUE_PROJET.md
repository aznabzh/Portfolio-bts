# 1. Résumé très simple du projet

Ce projet est un portfolio web réalisé pour présenter un dossier BTS SIO SLAM, en particulier pour l'épreuve E5.
Il sert à montrer les projets réalisés, les compétences BTS associées, les preuves liées à chaque projet, une petite veille technologique et une page de contact.
Le site existe surtout comme support d'oral : il aide à naviguer rapidement entre les projets, les compétences et les éléments de preuve.
Techniquement, c'est une application Next.js avec React, TypeScript et Tailwind CSS.
Les données ne viennent pas d'un serveur : elles sont écrites directement dans des fichiers TypeScript du projet.
Il n'y a pas de backend, pas de base de données, pas d'API externe pour afficher le contenu principal.
Il n'y a pas d'authentification, pas d'espace admin, pas de formulaire réellement envoyé côté serveur.
Le formulaire de contact ouvre simplement le client mail de l'utilisateur avec un lien `mailto:`.

# 2. Schéma mental global

Schéma mental simple :

`données locales dans lib/data/` -> `fonctions de préparation dans lib/view-models/` -> `pages dans app/` -> `composants de layout / composants UI` -> `affichage dans le navigateur`

Autre manière de le dire :

`contenu statique` -> `mise en forme logique` -> `rendu des pages` -> `navigation utilisateur`

# 3. Architecture générale

## `app/`
Rôle :
Contient les pages du site avec le système de routage App Router de Next.js.

Explication simple :
Chaque sous-dossier correspond à une route du site. Par exemple `app/projets/page.tsx` correspond à la page `/projets`, et `app/projets/[id]/page.tsx` correspond à une page de détail dynamique pour un projet précis.

Comment il communique avec le reste :
Les pages importent les données depuis `lib/data/` et, quand c'est utile, passent d'abord par `lib/view-models/` pour préparer l'affichage.

Phrase orale :
`app/`, c'est le point d'entrée des pages du site : c'est là qu'on définit les routes et ce que l'utilisateur voit.

## `components/`
Rôle :
Contient les composants réutilisables.

Explication simple :
On y trouve surtout les composants de layout comme la barre de navigation et le footer, et aussi beaucoup de composants UI génériques réutilisables.

Comment il communique avec le reste :
Les pages de `app/` importent ces composants pour construire l'interface sans réécrire le même code partout.

Phrase orale :
`components/`, ce sont les briques d'interface réutilisables du projet.

## `components/layout/`
Rôle :
Contient les composants qui structurent globalement le site.

Explication simple :
Ici, on trouve la navbar, le footer et le bouton de changement de thème. Ce sont des composants présents sur plusieurs pages.

Comment il communique avec le reste :
Ils sont injectés dans `app/layout.tsx`, donc ils encadrent toutes les pages du site.

Phrase orale :
`components/layout/`, c'est la structure commune du site autour du contenu principal.

## `components/ui/`
Rôle :
Contient des composants d'interface génériques.

Explication simple :
Ce sont des composants techniques comme `Button`, `Input`, `Textarea`, `DropdownMenu`, `Badge` ou `Toast`. Le projet n'utilise pas tout ce dossier, mais il sert de boîte à outils UI.

Comment il communique avec le reste :
Les pages et les composants de layout importent seulement les éléments dont ils ont besoin.

Phrase orale :
`components/ui/`, c'est la bibliothèque de composants visuels réutilisables.

## `lib/data/`
Rôle :
Contient les données métier du portfolio.

Explication simple :
On y trouve les informations sur l'étudiant, les projets, les compétences BTS, la veille, ainsi que les types TypeScript et quelques fonctions d'accès aux données.

Comment il communique avec le reste :
Les pages et les view-models importent ces données pour construire l'affichage.

Phrase orale :
`lib/data/`, c'est la source de vérité du contenu du portfolio.

## `lib/view-models/`
Rôle :
Contient la logique de préparation des données pour l'affichage.

Explication simple :
Les données brutes sont stockées dans `lib/data/`, mais les pages n'affichent pas toujours ces données telles quelles. Les view-models filtrent, regroupent, limitent ou réorganisent les données pour répondre aux besoins d'une page précise.

Comment il communique avec le reste :
Les pages appellent ces fonctions, récupèrent un résultat déjà prêt, puis affichent ce résultat.

Phrase orale :
`lib/view-models/`, c'est la couche qui prépare les données avant le rendu des pages.

## `hooks/`
Rôle :
Contient des hooks React réutilisables.

Explication simple :
Dans ce projet, il y a notamment un hook pour détecter le mobile et un hook pour gérer des toasts. Ils sont secondaires par rapport au cœur du portfolio.

Comment il communique avec le reste :
Ils sont utilisés par certains composants UI, pas par la logique principale du portfolio.

Phrase orale :
`hooks/`, ce sont des petits outils React réutilisables pour certains comportements d'interface.

## `old/`
Rôle :
Contient une ancienne documentation de travail.

Explication simple :
Ce dossier rassemble des notes d'architecture, de design et de planification. Il n'est pas utilisé à l'exécution du site.

Comment il communique avec le reste :
Il ne participe pas au rendu du site. C'est seulement de la documentation annexe.

Phrase orale :
`old/`, c'est de la documentation de conception, pas du code exécuté par l'application.

# 4. Parcours de la donnée

## Flux 1 : informations générales de l'étudiant

Flux :

`lib/data/student.ts` -> `lib/data/index.ts` -> `app/page.tsx` / `app/contact/page.tsx` / `components/layout/footer.tsx` -> affichage

Ce qui entre :
Les données de base de l'étudiant : nom, texte d'introduction, email, GitHub, LinkedIn.

Ce qui est transformé :
Il y a très peu de transformation. Les pages réutilisent presque directement ces données.

Ce qui est affiché :
Le nom et l'introduction sur l'accueil, les liens de contact sur la page contact, et les informations de bas de page.

À l'oral :
Les informations personnelles sont stockées localement dans un fichier TypeScript et réutilisées à plusieurs endroits du site.

## Flux 2 : projets affichés sur la page d'accueil

Flux :

`lib/data/projects.ts` + `lib/data/competencies.ts` + `lib/data/watch.ts` + `lib/data/selectors.ts` -> `lib/view-models/home.ts` -> `app/page.tsx` -> cartes affichées

Ce qui entre :
La liste complète des projets, des compétences et des articles de veille.

Ce qui est transformé :
`getHomeViewModel()` sélectionne seulement une partie des données utiles pour la page d'accueil :
- les 3 premiers projets ;
- les 6 premières compétences ;
- les 3 premières entrées de veille ;
- un label de catégorie raccourci ;
- un petit aperçu des technologies.

Ce qui est affiché :
Des cartes résumées sur la page d'accueil.

À l'oral :
La page d'accueil n'affiche pas toutes les données brutes. Elle passe par un view-model pour préparer une version plus compacte.

## Flux 3 : liste des projets

Flux :

`lib/data/projects.ts` + `lib/data/competencies.ts` + `lib/data/selectors.ts` -> `lib/view-models/projects.ts` -> `app/projets/page.tsx` -> liste des projets par catégorie

Ce qui entre :
Tous les projets et toutes les compétences.

Ce qui est transformé :
`getProjectCategorySections()` :
- classe les projets par catégorie ;
- construit le libellé de chaque catégorie ;
- récupère les codes de compétences liés à chaque projet ;
- limite l'affichage à quelques codes de compétences visibles.

Ce qui est affiché :
Une liste structurée par catégories : ateliers, stages, projets personnels.

À l'oral :
La page projets ne fait pas juste un `map` brut. Elle prépare d'abord des sections prêtes à afficher.

## Flux 4 : détail d'un projet

Flux :

`lib/data/projects.ts` -> `lib/data/selectors.ts` -> `app/projets/[id]/page.tsx` -> `lib/view-models/project-detail.ts` + `lib/data/competencies.ts` -> affichage détaillé

Ce qui entre :
L'identifiant du projet dans l'URL, par exemple `/projets/portfolio-personnel`.

Ce qui est transformé :
1. `getProjectById(id)` retrouve le projet correspondant.
2. `getProjectDetailViewModel(project, competencies)` :
- regroupe les preuves par compétence ;
- retrouve les codes et noms des compétences ;
- récupère seulement les sous-compétences réellement utilisées ;
- prépare les liens éventuels des preuves.

Ce qui est affiché :
La fiche complète du projet : contexte, objectif, rôle, technologies, compétences mobilisées et preuves classées par compétence.

À l'oral :
La page détail part de l'id dans l'URL, récupère le projet correspondant, puis reconstruit un affichage plus riche à partir des compétences et des preuves.

## Flux 5 : matrice des compétences

Flux :

`lib/data/projects.ts` -> `lib/view-models/competencies.ts` -> `app/competences/page.tsx` + `lib/data/competencies.ts` -> tableau de correspondance

Ce qui entre :
La liste des projets et la liste du référentiel de compétences.

Ce qui est transformé :
`getCompetencyMatrixGroups()` range les projets en groupes logiques :
- formation 1ère année ;
- formation 2nde année ;
- stages ;
- projets personnels.

Il construit aussi, pour chaque projet, un ensemble des compétences couvertes.

Ce qui est affiché :
Un tableau croisant les projets et les compétences BTS, puis une fiche descriptive des compétences et sous-compétences.

À l'oral :
Ici, la logique sert à transformer une simple liste de projets en matrice lisible pour l'épreuve E5.

## Flux 6 : veille technologique

Flux :

`lib/data/watch.ts` -> `lib/data/index.ts` -> `app/veille/page.tsx` -> affichage

Ce qui entre :
Une liste statique d'articles ou sujets de veille.

Ce qui est transformé :
Il n'y a quasiment pas de transformation. La page parcourt directement le tableau.

Ce qui est affiché :
La date, la source, le titre, le résumé et les tags.

À l'oral :
La veille est stockée localement et affichée directement, sans traitement complexe.

## Flux 7 : contact

Flux :

`lib/data/student.ts` -> `app/contact/page.tsx` -> formulaire local -> lien `mailto:`

Ce qui entre :
Les coordonnées de contact et les champs saisis par l'utilisateur.

Ce qui est transformé :
La page construit une URL `mailto:` avec un sujet et un corps préremplis.

Ce qui est affiché :
Le formulaire, puis l'ouverture du client mail de l'utilisateur.

À l'oral :
Il n'y a pas d'envoi serveur ; la page prépare juste un email localement.

# 5. Rôle des fichiers importants

## `app/layout.tsx`
Rôle :
Layout racine de toute l'application.

Ce qu'il contient :
L'enveloppe globale du site, l'import du CSS global, la navbar, le footer, le provider de thème et les métadonnées principales.

Pourquoi c'est important :
Toutes les pages passent par ce fichier.

Phrase orale simple :
Ce fichier définit la structure commune du site et ce qui entoure toutes les pages.

## `app/page.tsx`
Rôle :
Page d'accueil.

Ce qu'il contient :
Le hero principal, les statistiques rapides, un aperçu des projets, des compétences et de la veille.

Pourquoi c'est important :
Il montre bien comment une page combine données brutes et view-model.

Phrase orale simple :
La page d'accueil synthétise le contenu principal du portfolio à partir des données locales.

## `app/projets/page.tsx`
Rôle :
Page liste des projets.

Ce qu'il contient :
Un affichage des projets regroupés par catégorie.

Pourquoi c'est important :
Il montre l'organisation centrale du portfolio par type de projet.

Phrase orale simple :
Cette page présente tous les projets en les classant pour faciliter la lecture.

## `app/projets/[id]/page.tsx`
Rôle :
Page dynamique de détail d'un projet.

Ce qu'il contient :
La récupération de l'id dans l'URL, la recherche du projet, puis l'affichage détaillé des preuves par compétence.

Pourquoi c'est important :
C'est la page la plus intéressante pour expliquer le lien entre projet, compétence et preuve.

Phrase orale simple :
Cette page prend un projet précis et l'affiche de manière détaillée à partir de son identifiant dans l'URL.

## `app/competences/page.tsx`
Rôle :
Page de matrice des compétences.

Ce qu'il contient :
Un tableau croisant les projets avec les compétences, puis le détail du référentiel.

Pourquoi c'est important :
Elle relie directement le portfolio à la logique de l'épreuve BTS.

Phrase orale simple :
Cette page sert à montrer quelles compétences BTS sont mobilisées dans quels projets.

## `app/veille/page.tsx`
Rôle :
Page de veille technologique.

Ce qu'il contient :
Une liste d'entrées de veille avec source, résumé et tags.

Pourquoi c'est important :
Elle montre une autre partie attendue du portfolio, mais avec une logique simple.

Phrase orale simple :
Cette page affiche la veille technologique de manière statique.

## `app/contact/page.tsx`
Rôle :
Page de contact.

Ce qu'il contient :
Un formulaire React côté client et des liens de contact.

Pourquoi c'est important :
C'est l'une des rares pages clairement interactives côté client.

Phrase orale simple :
Cette page permet de préparer un email de contact, sans backend.

## `lib/data/types.ts`
Rôle :
Définition des types TypeScript du projet.

Ce qu'il contient :
Les structures des projets, des compétences, des preuves, de la veille et des infos de l'étudiant.

Pourquoi c'est important :
Il fixe le modèle de données du portfolio.

Phrase orale simple :
Ce fichier décrit la forme des données pour sécuriser le code avec TypeScript.

## `lib/data/student.ts`
Rôle :
Stockage des informations générales de l'étudiant.

Ce qu'il contient :
Le nom, l'intro, l'email et les liens externes.

Pourquoi c'est important :
Plusieurs pages réutilisent ce contenu.

Phrase orale simple :
C'est le fichier central pour les informations de présentation et de contact.

## `lib/data/projects.ts`
Rôle :
Stockage de tous les projets du portfolio.

Ce qu'il contient :
Chaque projet avec son résumé, son contexte, ses technologies, ses compétences et ses preuves.

Pourquoi c'est important :
C'est l'un des fichiers les plus importants du projet.

Phrase orale simple :
Ce fichier contient le cœur du portfolio : la liste structurée des projets.

## `lib/data/competencies.ts`
Rôle :
Stockage du référentiel de compétences.

Ce qu'il contient :
Les compétences principales et les sous-compétences BTS avec leurs codes et descriptions.

Pourquoi c'est important :
Il permet de relier les projets au référentiel officiel.

Phrase orale simple :
Ce fichier traduit le référentiel BTS dans une structure exploitable par le site.

## `lib/data/watch.ts`
Rôle :
Stockage des entrées de veille.

Ce qu'il contient :
Des entrées avec date, source, titre, résumé et tags.

Pourquoi c'est important :
Il alimente directement la page de veille.

Phrase orale simple :
Ce fichier contient les sujets de veille affichés sur le site.

## `lib/data/selectors.ts`
Rôle :
Petites fonctions d'accès et de recherche dans les données.

Ce qu'il contient :
Des fonctions comme `getProjectById`, `getCategoryLabel` ou `getProofTypeLabel`.

Pourquoi c'est important :
Il évite de dupliquer de petites logiques un peu partout.

Phrase orale simple :
Ce fichier regroupe les fonctions utilitaires pour retrouver ou convertir des données.

## `lib/data/index.ts`
Rôle :
Point d'entrée central des données.

Ce qu'il contient :
Les exports des données, des types et des fonctions de sélection.

Pourquoi c'est important :
Il simplifie les imports dans le reste du projet.

Phrase orale simple :
Ce fichier sert de porte d'entrée unique pour accéder aux données.

## `lib/view-models/home.ts`
Rôle :
Préparation des données de la page d'accueil.

Ce qu'il contient :
Une fonction qui limite et reformate certains contenus pour les cartes d'accueil.

Pourquoi c'est important :
Il montre la séparation entre données brutes et données prêtes à afficher.

Phrase orale simple :
Ce fichier prépare une version résumée des données pour la page d'accueil.

## `lib/view-models/projects.ts`
Rôle :
Préparation des données de la page liste des projets.

Ce qu'il contient :
Une fonction qui regroupe les projets par catégorie et prépare les codes de compétences à afficher.

Pourquoi c'est important :
Il structure la page projets.

Phrase orale simple :
Ce fichier transforme la liste de projets en sections d'affichage.

## `lib/view-models/project-detail.ts`
Rôle :
Préparation des données de la page détail d'un projet.

Ce qu'il contient :
Une fonction qui regroupe les preuves par compétence et remonte les sous-compétences utiles.

Pourquoi c'est important :
C'est le meilleur exemple de logique métier du projet.

Phrase orale simple :
Ce fichier reconstruit la relation projet, compétences et preuves pour la page détail.

## `lib/view-models/competencies.ts`
Rôle :
Préparation des données de la matrice de compétences.

Ce qu'il contient :
Une fonction qui regroupe les projets et construit les cases cochées de la matrice.

Pourquoi c'est important :
Il transforme une liste simple en vue synthétique de type tableau.

Phrase orale simple :
Ce fichier prépare la matrice qui relie les projets aux compétences BTS.

## `components/layout/navbar.tsx`
Rôle :
Barre de navigation principale.

Ce qu'il contient :
Les liens du site, la gestion du menu mobile et l'appel au changement de thème.

Pourquoi c'est important :
Il montre une partie interactive réutilisée partout.

Phrase orale simple :
La navbar gère la navigation du site et l'adaptation mobile.

## `components/layout/footer.tsx`
Rôle :
Pied de page.

Ce qu'il contient :
Les liens GitHub, LinkedIn et email, plus les informations générales.

Pourquoi c'est important :
Il réutilise les données de l'étudiant et montre la cohérence globale du site.

Phrase orale simple :
Le footer centralise les liens de contact et les infos de bas de page.

## `components/layout/theme-toggle.tsx`
Rôle :
Gestion du changement de thème clair, sombre ou système.

Ce qu'il contient :
Un composant client avec un menu déroulant connecté à `next-themes`.

Pourquoi c'est important :
Il montre un vrai comportement côté client, différent des pages statiques.

Phrase orale simple :
Ce composant gère l'apparence du site côté navigateur.

## `components/theme-provider.tsx`
Rôle :
Fournir le contexte de thème à l'application.

Ce qu'il contient :
Un wrapper autour de `next-themes`.

Pourquoi c'est important :
Sans lui, le changement de thème ne fonctionnerait pas globalement.

Phrase orale simple :
Ce composant rend le système de thème disponible dans toute l'application.

## `app/globals.css`
Rôle :
Feuille de style globale du projet.

Ce qu'il contient :
Les variables de couleurs, les styles communs et plusieurs classes utilitaires du design du portfolio.

Pourquoi c'est important :
Il centralise l'identité visuelle et évite de répéter les mêmes styles partout.

Phrase orale simple :
Ce fichier définit le style global et les règles visuelles communes du site.

## `next.config.mjs`
Rôle :
Configuration Next.js.

Ce qu'il contient :
Un export statique du site, un `basePath` et un `assetPrefix` pour `/Portfolio-bts`, ainsi que des images non optimisées.

Pourquoi c'est important :
Il montre que le site est pensé pour être déployé en statique, par exemple sur GitHub Pages.

Phrase orale simple :
Ce fichier adapte Next.js à un déploiement statique du portfolio.

# 6. Fichiers à maîtriser en priorité

## À connaître absolument

- `app/layout.tsx`
- `app/page.tsx`
- `app/projets/page.tsx`
- `app/projets/[id]/page.tsx`
- `app/competences/page.tsx`
- `lib/data/projects.ts`
- `lib/data/competencies.ts`
- `lib/data/types.ts`
- `lib/data/selectors.ts`
- `lib/view-models/project-detail.ts`

## À comprendre globalement

- `lib/view-models/home.ts`
- `lib/view-models/projects.ts`
- `lib/view-models/competencies.ts`
- `lib/data/student.ts`
- `lib/data/watch.ts`
- `components/layout/navbar.tsx`
- `components/layout/footer.tsx`
- `components/layout/theme-toggle.tsx`
- `components/theme-provider.tsx`
- `app/contact/page.tsx`
- `app/veille/page.tsx`
- `app/globals.css`
- `next.config.mjs`

## À ne pas prioriser

- `components/ui/` dans son ensemble, sauf éventuellement `button.tsx`, `input.tsx`, `textarea.tsx`, `badge.tsx` et `dropdown-menu.tsx` pour comprendre les imports
- `hooks/use-mobile.ts`
- `hooks/use-toast.ts`
- `components.json`
- `postcss.config.mjs`
- `tsconfig.json`
- `README.md`
- `old/`
- `.next/`
- `out/`
- `node_modules/`
- `pnpm-lock.yaml`
- fichiers d'images de capture présents à la racine

# 7. Questions que le jury pourrait poser

## Pourquoi cette architecture ?

Réponse :
J'ai séparé les données, la préparation des données et l'affichage. Ça rend le projet plus lisible et évite de mélanger tout dans les pages.

## Où sont stockées les données ?

Réponse :
Les données sont stockées localement dans `lib/data/` sous forme d'objets et de tableaux TypeScript.

## Pourquoi utiliser TypeScript ?

Réponse :
TypeScript permet de définir la forme des projets, compétences et preuves, donc le code est plus sûr et plus clair.

## Quel est le rôle des composants ?

Réponse :
Les composants servent à réutiliser des morceaux d'interface, comme la navbar, le footer ou les boutons.

## Quel est le rôle des view-models ?

Réponse :
Les view-models préparent les données pour une page précise, par exemple en regroupant, filtrant ou limitant ce qu'on veut afficher.

## Comment une page récupère ses données ?

Réponse :
Elle importe les données depuis `lib/data/`, puis elle peut passer par un view-model avant de faire le rendu.

## Que se passe-t-il quand on clique sur un projet ?

Réponse :
On va vers la route `/projets/[id]`, la page récupère l'id dans l'URL, retrouve le projet correspondant et affiche son détail.

## Comment est géré le lien entre projets et compétences ?

Réponse :
Chaque projet contient une liste d'identifiants de compétences, puis les pages vont chercher les libellés dans le référentiel `competencies.ts`.

## Comment est géré le lien entre compétences et preuves ?

Réponse :
Chaque preuve contient un `competencyId`, ce qui permet de regrouper les preuves sous la bonne compétence dans le détail du projet.

## Pourquoi il n'y a pas de backend ?

Réponse :
Le besoin du projet est surtout de présenter un contenu stable. Un backend n'était pas nécessaire pour cet objectif.

## Le formulaire de contact envoie-t-il vraiment un message ?

Réponse :
Non, il ne passe pas par un serveur. Il prépare un email avec `mailto:` et ouvre le client mail de l'utilisateur.

## Que se passe-t-il si l'id du projet n'existe pas ?

Réponse :
La page appelle `notFound()` et Next.js affiche une page 404.

## Pourquoi `next.config.mjs` est important ?

Réponse :
Il montre que le site est exporté en statique et configuré pour être servi sous `/Portfolio-bts`.

## Qu'est-ce que tu améliorerais ?

Réponse :
Je pourrais ajouter un vrai stockage des contenus, une gestion d'administration, un envoi réel du formulaire et des preuves réellement liées à des fichiers ou documents.

# 8. Explication orale en 2 minutes

Ce projet est un portfolio web que j'ai réalisé pour présenter mon parcours BTS SIO SLAM, surtout dans le cadre de l'épreuve E5. L'idée principale, ce n'est pas de faire une grosse application métier, mais un site clair qui permet de naviguer entre mes projets, les compétences BTS associées, les preuves et ma veille technologique.

Techniquement, le projet est fait avec Next.js, React, TypeScript et Tailwind CSS. Il n'y a pas de backend ni de base de données. Toutes les données sont stockées localement dans des fichiers TypeScript dans `lib/data/`. Par exemple, j'ai un fichier pour les projets, un pour les compétences, un pour la veille et un pour mes informations personnelles.

Ensuite, j'ai une couche intermédiaire dans `lib/view-models/`. Son rôle est de préparer les données pour les pages. Par exemple, la page d'accueil n'affiche qu'un résumé, donc un view-model sélectionne seulement quelques projets, quelques compétences et quelques articles de veille. Pour le détail d'un projet, un autre view-model regroupe les preuves par compétence et récupère aussi les sous-compétences concernées.

Dans `app/`, j'ai les pages du site : l'accueil, la liste des projets, le détail dynamique d'un projet, la page compétences, la veille et le contact. La page la plus importante à expliquer est `app/projets/[id]/page.tsx`, parce qu'elle montre bien le lien entre l'URL, les données du projet, les compétences et les preuves.

Enfin, les composants réutilisables sont dans `components/`, avec notamment la navbar, le footer et des composants UI. Donc, mon architecture peut se résumer comme ça : données locales, préparation logique, pages, composants, affichage.

# 9. Explication si un fichier random est ouvert

## Si le fichier est dans une page

Phrase type :
Ce fichier correspond à une route du site. Son rôle est de récupérer ou préparer les données nécessaires, puis de construire l'affichage de cette page.

## Si le fichier est dans les composants

Phrase type :
Ce fichier contient un composant réutilisable. Il sert à éviter de répéter le même code d'interface dans plusieurs pages.

## Si le fichier est dans les données

Phrase type :
Ce fichier contient le contenu métier du portfolio, donc les informations que le site affiche, sans logique d'affichage complexe.

## Si le fichier est dans la logique de préparation

Phrase type :
Ce fichier prépare les données pour une page précise. Il ne stocke pas le contenu, il le réorganise pour le rendre plus simple à afficher.

## Si le fichier est dans la configuration

Phrase type :
Ce fichier sert à configurer l'environnement technique du projet, par exemple le build, les chemins ou le comportement du framework.

## Si je ne comprends pas entièrement le fichier

Phrase type :
Je ne le connais pas ligne par ligne, mais je peux expliquer son rôle général, à quel dossier il appartient, ce qu'il importe et dans quelle partie du fonctionnement il intervient.

## Méthode simple en 4 étapes

1. Regarder dans quel dossier se trouve le fichier.
2. Regarder ce qu'il importe.
3. Regarder ce qu'il exporte ou ce qu'il rend.
4. Expliquer s'il stocke des données, prépare des données, ou affiche une interface.

# 10. Limites du projet

Le projet est volontairement simple sur la partie technique serveur : il n'y a pas de backend, pas de base de données et pas de gestion d'administration.
Les données sont écrites directement dans le code, donc le contenu n'est pas modifiable par une interface.
Le formulaire de contact n'envoie pas réellement de message côté serveur.
Les preuves des projets sont décrites dans les données, mais elles ne sont pas toutes forcément reliées à de vrais fichiers externes.
Le dossier `components/ui/` est assez large par rapport aux besoins réels du portfolio, donc tout n'est pas essentiel au projet.
Le site reste cependant cohérent pour un projet étudiant, parce que l'objectif principal est la présentation structurée du dossier E5, pas la création d'un produit complet avec back-office.
Pour aller plus loin, on pourrait ajouter une vraie persistance des données, une gestion de contenu, des uploads de preuves, un vrai formulaire de contact et des contenus reliés à des fichiers réels.

# Résumé à mémoriser

## 5 phrases clés

- Le projet est un portfolio web statique pour présenter mes projets, mes compétences BTS et mes preuves.
- Les données sont stockées localement dans `lib/data/`.
- Les pages sont dans `app/` avec le système de routage de Next.js.
- Les view-models dans `lib/view-models/` préparent les données avant l'affichage.
- La relation centrale du projet est : projet -> compétence -> preuve.

## 5 fichiers clés

- `app/projets/[id]/page.tsx`
- `app/competences/page.tsx`
- `lib/data/projects.ts`
- `lib/data/competencies.ts`
- `lib/view-models/project-detail.ts`

## 5 questions probables

- Où sont stockées les données ?
- Pourquoi avoir séparé `data` et `view-models` ?
- Que se passe-t-il quand on ouvre un projet ?
- Pourquoi utiliser TypeScript ?
- Pourquoi il n'y a pas de backend ?

## 5 réponses ultra-courtes

- Elles sont dans `lib/data/`, en TypeScript.
- Pour séparer le contenu et la logique de préparation.
- L'id est lu dans l'URL, puis le projet est retrouvé et affiché.
- Pour sécuriser et clarifier la structure des données.
- Parce que le besoin principal est un portfolio statique de présentation.
