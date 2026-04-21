Executive summary
Le dépôt est déjà exploitable et visuellement cohérent pour un portfolio E5, avec une base Next.js propre et une route dynamique projet.
Mais il reste très “page-centric” : gros fichiers de pages, beaucoup de classes Tailwind répétées, peu de composants métier, et une couche data encore mock/hardcodée.
Le projet est prêt pour un refactor progressif (sans redesign), à condition de commencer par structurer les données et extraire les blocs UI récurrents.

Tech stack and project structure
Framework/tooling
Next.js App Router (app/)
React 19 + TypeScript
Tailwind CSS v4
shadcn/ui + Radix
pnpm lockfile
Dossiers principaux
/app: pages/routes + layout global
/components/layout: navbar, footer
/components/ui: large librairie UI shadcn (majoritairement non utilisée)
/lib: data.ts (contenu), utils.ts
/hooks: hooks utilitaires (duplication avec components/ui/*)
/docs: vision/architecture/cibles
Routing actuel
/
/projets
/projets/[id]
/competences
/veille
/contact
Organisation actuelle
Plus propre qu’un raw v0 (data centralisée, layout global, route dynamique existante)
Mais encore proche d’un mockup implémenté directement (pages longues + stylage très inline)
Page inventory
/ (Home)
Rôle: intro + aperçu projets/compétences/veille
État: fonctionnelle, dense, majoritairement statique
Données: centralisées (lib/data.ts)
Maintenabilité: moyenne (beaucoup de blocs UI hardcodés dans la page)
/projets
Rôle: listing par catégories
État: fonctionnelle, statique côté contenu
Données: data-driven (filtrage projects)
Maintenabilité: moyenne (row UI inline)
/projets/[id]
Rôle: détail projet + preuves par compétence
État: bon point fort (template dynamique + generateStaticParams)
Données: data-driven depuis id
Maintenabilité: moyenne/faible (fichier volumineux, plusieurs sous-blocs mélangeant rendu et logique)
/competences
Rôle: matrice projets ↔ compétences + référentiel
État: fonctionnelle, statique côté structure
Données: data-driven mais grouping hardcodé dans la page
Maintenabilité: moyenne/faible (table + légende + référentiel dans un seul fichier)
/veille
Rôle: liste des entrées de veille
État: simple, statique, claire
Maintenabilité: correcte
/contact
Rôle: formulaire mailto + liens
État: client component, simple
Maintenabilité: correcte (mais logique formulaire inline)
Component inventory
components/layout/navbar.tsx
Rôle: navigation desktop/mobile
Réutilisabilité: bonne
Évaluation: à garder, léger cleanup possible (config nav externalisable)
components/layout/footer.tsx
Rôle: footer global
Réutilisabilité: bonne
Évaluation: à garder
components/ui/button|badge|input|textarea
Rôle: primitives utilisées dans les pages
Réutilisabilité: élevée
Évaluation: à garder tel quel
components/ui/* (très nombreux fichiers)
Rôle: kit complet shadcn généré
Réutilisabilité potentielle: élevée, usage réel faible
Évaluation: garder base, mais nettoyer/limiter l’empreinte (beaucoup de composants non utilisés)
Composants métier manquants
Exemples observables à extraire: page header, section header, project card/row, competency badge, proof list block
Évaluation: à créer progressivement (refactor interne sans impact visuel)
Data/content audit
Localisation des données
Tout dans lib/data.ts (projets, compétences, veille, infos étudiant, helpers)
État
Bonne centralisation initiale
Contenu encore mock/placeholder (ex: “Jean Dupont”)
Hardcoding
Contenu principalement dans data.ts (bien)
Mais logique de présentation/catégorisation souvent hardcodée dans les pages
Risques de duplication
Lien compétence présent à deux niveaux (project.competencies + project.competencyProofs[].competencyId)
Pas de modèle de preuve réutilisable transversal (preuves imbriquées dans chaque projet)
Relation projet -> compétence -> preuve
Présente fonctionnellement
Mais modèle encore simplifié (pas de mapping multi-compétence par preuve, pas de fichiers de preuve/URLs structurés)
Styling/design-system audit
Gestion actuelle
Tokens CSS variables centralisés dans app/globals.css (couleurs, radius, etc.) → bon point
Tailwind utilitaire majoritairement inline dans les pages
Centralisation
Couleurs/radius bien centralisés
Spacing/typo surtout via classes répétées (text-[14px], containers, cards, etc.)
Répétitions
Beaucoup de patterns recopiés (mx-auto max-w-6xl px-4 lg:px-6, rounded-lg border border-border bg-card, headers de section)
Maintenabilité
Correcte à court terme, fragile à moyen terme (cohérence dépendante de copier-coller de classes)
Point de vigilance
styles/globals.css existe aussi, non importé: risque de dérive/confusion
Routing audit
Project detail
Oui, templated (/projets/[id], generateStaticParams) → bon socle data-driven
Chemin data-driven
Déjà engagé via lib/data.ts
Reste à découpler davantage la logique page/présentation
Cohérence structure intentionnelle
Les routes fonctionnelles couvrent bien le besoin portfolio
Divergence docs/code sur naming de routes (/projects dans docs vs /projets en code)
Technical debt / risks
Fichiers de pages volumineux (home/détail/matrice surtout)
Duplication de patterns UI entre pages
Kit UI surdimensionné vs usage réel
Duplication de hooks (hooks/* et components/ui/* versions équivalentes)
Imports inutilisés visibles dans des pages (signal de dette de nettoyage)
next.config.mjs avec typescript.ignoreBuildErrors: true (risque de laisser passer des erreurs TS)
Modèle de données encore monolithique (un seul lib/data.ts)
Écart entre docs cibles et implémentation réelle (normal en phase transitoire, mais à aligner)
What to preserve
Keep as-is
Direction visuelle globale (sobriété noir/blanc, densité, structure)
Navigation globale (navbar/footer)
Route dynamique projet
Tokens de thème dans app/globals.css
Keep but clean/refactor internally
Pages actuelles (même rendu, extraction de composants métier)
lib/data.ts (source unique actuelle) avant découpage en modules
Matrice compétences (comportement et rendu, mais composant dédié)
Redesign/restructure technically
Modèle contenu (séparer entities/projects/competencies/watch/student)
Liens preuve↔compétence plus explicites et moins redondants
Patterns de classes répétées en composants de gabarit
Remove if unnecessary
Fichiers/style redondants non utilisés (styles/globals.css si confirmé inutile)
Composants UI jamais utilisés (ou au minimum ne plus les étendre tant qu’inutiles)
Duplicata hooks inutiles
Recommended first refactor steps
Stabiliser la base sans changement visuel
Garder routes/layout/pages inchangés visuellement
Nettoyer dettes sûres: imports inutilisés, duplicata évidents, fichier CSS redondant (après confirmation)
Découper la data
Scinder lib/data.ts en modules de contenu (projects, competencies, watch, student, helpers)
Conserver les mêmes champs au départ (migration non cassante)
Extraire composants métier récurrents
Container/page header/section header/cards & rows existants
Réduire les class strings copiées
Encapsuler la logique de mapping
Sort/group/filter hors pages (helpers dédiés), surtout pour la matrice et les catégories
Ne pas toucher en premier
Ne pas redesign UI
Ne pas changer les routes publiques en premier
Ne pas introduire backend/CMS/auth
Ne pas refaire tout le kit UI shadcn