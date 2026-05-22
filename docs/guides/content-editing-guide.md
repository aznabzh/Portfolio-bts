# Guide d'édition du contenu

## 1. Vue d'ensemble

Le site est déjà bien structuré côté technique.
Le travail principal restant est de remplacer le contenu fictif actuel par le vrai contenu BTS E5.

Contenu à remplacer :
- les informations personnelles de l'étudiant
- les projets BTS / perso / stage
- les compétences BTS réellement mobilisées
- les preuves / éléments de preuve
- les entrées de veille technologique
- les liens de contact

Ce qui est déjà structurel :
- le routage des pages dans `app/`
- la navigation et le footer
- la logique de regroupement des projets et de la matrice de compétences
- la page détail projet avec affichage des preuves par compétence

Ce qui est déjà content-driven :
- les données dans `lib/data/student.ts`
- les projets dans `lib/data/projects.ts`
- les compétences dans `lib/data/competencies.ts`
- la veille dans `lib/data/watch.ts`

Important :
- le site utilise déjà ces fichiers comme source de vérité
- il ne faut pas modifier le rendu pour intégrer le vrai contenu
- plusieurs textes visibles restent encore codés en dur dans les pages, même si le cœur du contenu est bien dans `lib/data`

## 2. Où chaque type de contenu est stocké

### Informations personnelles / étudiant
- Fichier principal : [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:1)
- Type associé : [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:47)

Champs actuels :
- `name`
- `subtitle`
- `intro`
- `about`
- `email`
- `github`
- `linkedin`

### Projets
- Fichier : [lib/data/projects.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/projects.ts:1)
- Type associé : [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:16)

### Compétences
- Fichier : [lib/data/competencies.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/competencies.ts:1)
- Type associé : [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:31)

### Preuves / evidences
- Elles sont actuellement stockées à l'intérieur de chaque projet dans `competencyProofs`
- Fichier : [lib/data/projects.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/projects.ts:17)
- Types associés : [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:1), [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:11)

### Veille technologique
- Fichier : [lib/data/watch.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/watch.ts:1)
- Type associé : [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:38)

### Liens de contact
- Source des données : [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:4)
- Utilisation visible dans :
  - [app/contact/page.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/app/contact/page.tsx:24)
  - [components/layout/footer.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/components/layout/footer.tsx:11)

## 3. Comment modifier les informations personnelles

### Nom de l'étudiant
- À modifier dans `studentInfo.name` dans [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:5)
- Ce nom est affiché sur :
  - la page d'accueil
  - le footer

### Sous-titre / titre de portfolio
- `studentInfo.subtitle` existe dans [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:6)
- Mais dans l'état actuel du projet, ce champ n'est pas vraiment utilisé dans l'interface visible

Si vous voulez changer le titre visible du site, il faut aussi regarder :
- [app/layout.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/app/layout.tsx:9) pour le `title` et la `description` SEO
- [app/page.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/app/page.tsx:20) et [app/page.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/app/page.tsx:23) pour les mentions visuelles `BTS SIO SLAM` et `Portfolio E5`

### Texte d'introduction
- À modifier dans `studentInfo.intro` dans [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:7)
- Ce texte est affiché sur la page d'accueil

### Texte "about"
- À modifier dans `studentInfo.about` dans [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:8)
- Important : dans l'état actuel du site, ce champ existe mais n'est pas affiché dans les pages actuelles

### Technologies / centres d'intérêt
- Il n'existe pas aujourd'hui de champ dédié dans `StudentInfo` pour les centres d'intérêt ou la stack personnelle
- Si vous voulez simplement enrichir le texte personnel, le plus sûr est de le faire dans :
  - `studentInfo.intro`
  - éventuellement `studentInfo.about`

### GitHub / LinkedIn / email
- À modifier dans :
  - [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:9)
  - [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:10)
  - [lib/data/student.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/student.ts:11)

Ces valeurs alimentent :
- la page contact
- le footer
- le `mailto:` du formulaire de contact

## 4. Comment modifier les projets

### Où sont stockés les projets
- Tous les projets sont dans [lib/data/projects.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/projects.ts:4)

### Champs disponibles pour un projet
- `id`
- `title`
- `category`
- `year`
- `period`
- `summary`
- `context`
- `objective`
- `technologies`
- `role`
- `competencies`
- `competencyProofs`

### Champs particulièrement importants pour l'oral E5
- `title`
- `period`
- `summary`
- `context`
- `objective`
- `role`
- `competencies`
- `competencyProofs`

Ce sont eux qui servent le plus à montrer :
- ce que vous avez fait
- dans quel contexte
- avec quelles compétences
- avec quelles preuves

### Champs optionnels
Dans le modèle actuel, aucun champ de `Project` n'est techniquement optionnel.
En pratique, certains champs peuvent être plus courts que d'autres, mais il vaut mieux tous les renseigner.

### Comment ajouter un nouveau projet en sécurité
Procédure conseillée :
1. Copier un projet existant dans `projects.ts`
2. Changer d'abord `id`, `title`, `category`, `year`, `period`
3. Compléter ensuite `summary`, `context`, `objective`, `role`
4. Ajouter la liste `technologies`
5. Ajouter la liste `competencies`
6. Ajouter enfin `competencyProofs`
7. Vérifier que chaque `competencyId` existe bien dans `lib/data/competencies.ts`

### Comment fonctionnent les catégories
Les catégories autorisées dans le modèle actuel sont :
- `atelier`
- `stage`
- `personnel`

Elles sont définies indirectement dans le type `Project["category"]` dans [lib/data/types.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/types.ts:19)

Conséquences :
- la page projets groupe par catégorie
- la matrice de compétences regroupe aussi selon `category` et `year`

Il ne faut pas inventer de nouvelle catégorie sans refactor technique préalable.

## 5. Comment modifier les compétences

### Où elles sont stockées
- [lib/data/competencies.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/competencies.ts:4)

### Structure actuelle
Chaque compétence contient :
- `id`
- `code`
- `name`
- `description`

### Comment les projets référencent les compétences
Dans chaque projet :
- `competencies` contient une liste d'IDs de compétences, par exemple `["c1", "c4", "c5"]`
- `competencyProofs[].competencyId` référence aussi ces mêmes IDs

### Comment la matrice de compétences obtient ses données
La page [app/competences/page.tsx](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/app/competences/page.tsx:1) utilise :
- la liste `competencies`
- la liste `projects`

La matrice coche une case quand l'ID d'une compétence apparaît dans `project.competencies`.

### Comment éviter de casser les liens
Règle la plus importante :
- ne jamais changer un `id` de compétence sans mettre à jour tous les projets qui le référencent

En pratique :
- si vous voulez changer l'intitulé visible, changez `code`, `name` ou `description`
- ne changez `id` que si vous savez exactement où il est réutilisé

## 6. Comment modifier les preuves / evidences

### Où elles sont stockées
Les preuves sont actuellement imbriquées dans chaque projet :
- [lib/data/projects.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/projects.ts:17)

Structure actuelle :
- `competencyProofs` : groupes de preuves par compétence
- `proofs` : tableau de preuves pour cette compétence

Chaque preuve contient actuellement :
- `id`
- `title`
- `type`
- `description`
- `images` pour une ou plusieurs captures d'écran

### Comment les preuves sont liées aux projets
- une preuve appartient à un projet parce qu'elle est stockée à l'intérieur de ce projet

### Comment les preuves sont liées aux compétences
- une preuve est rattachée à une compétence via le bloc `competencyProofs`
- exemple :
  - `competencyId: "c4"`
  - puis `proofs: [...]`

### Comment ajouter une preuve utile
Pour chaque projet :
1. repérer la bonne compétence dans `competencyProofs`
2. ajouter un objet dans `proofs`
3. vérifier que l'ID de la compétence est bon

Exemple :

```ts
{
  competencyId: "c4",
  proofs: [
    {
      id: "p-nouveau",
      title: "Compte-rendu de sprint",
      type: "screenshot",
      description: "Capture montrant l'organisation et le suivi du projet"
    }
  ]
}
```

### Comment ajouter de vrais fichiers / liens en sécurité
Pour les captures d'écran :
- placer les fichiers dans `public/preuves/...`
- référencer les images avec un chemin public, par exemple `/preuves/api-rest/postman-1.png`
- utiliser `images` quand une même preuve contient plusieurs captures

Exemple :

```ts
{
  id: "p13",
  title: "Tests Postman",
  type: "screenshot",
  description: "Collection de tests utilisés pour vérifier les endpoints.",
  competencyId: "c5",
  subCompetencyIds: ["c5-2"],
  images: [
    {
      id: "postman-login",
      src: "/preuves/api-rest/postman-login.png",
      alt: "Test Postman de la route de connexion",
      title: "Connexion"
    },
    {
      id: "postman-events",
      src: "/preuves/api-rest/postman-events.png",
      alt: "Test Postman de la liste des événements",
      title: "Liste des événements"
    }
  ]
}
```

Pour les autres fichiers :
- ils doivent être exportés ou capturés sous forme d'image avant d'être ajoutés comme preuve
- un PDF, un extrait de code ou un schéma doit donc être représenté par une capture d'écran
- `thumbnail` peut être utilisé pour afficher une miniature différente de l'image originale

### Qu'est-ce qu'une bonne preuve pour E5
Une preuve utile montre concrètement :
- une action que vous avez vraiment réalisée
- une compétence réellement mobilisée
- un élément vérifiable à l'oral

Exemples utiles :
- capture d'écran d'une fonctionnalité
- capture d'un schéma UML / MCD / MLD
- capture d'un extrait de code significatif
- capture d'un cahier des charges
- capture d'un ticket traité
- capture d'une documentation technique
- capture d'une page de rapport de stage
- capture de résultats de tests

## 7. Comment modifier la veille technologique

### Où sont stockées les entrées de veille
- [lib/data/watch.ts](/c:/Users/coren/OneDrive/Bureau/portfolio/b_G8wZ4HEEm1O/lib/data/watch.ts:4)

### Champs à remplir
- `id`
- `date`
- `source`
- `title`
- `summary`
- `tags`

### Comment ajouter une entrée
1. Copier une entrée existante
2. Donner un nouvel `id`
3. Renseigner la date réelle
4. Indiquer la source
5. Ajouter un titre explicite
6. Rédiger un résumé court et clair
7. Ajouter quelques tags cohérents

Exemple :

```ts
{
  id: "w6",
  date: "Avril 2026",
  source: "Documentation officielle",
  title: "Authentification passkeys",
  summary: "Étude des passkeys et de leur intérêt pour renforcer la sécurité et l'expérience utilisateur.",
  tags: ["Sécurité", "Authentification", "Web"]
}
```

### Quel type de contenu est attendu
La veille doit rester en lien avec :
- le développement web
- le développement logiciel
- les outils / méthodes utiles à SLAM
- les sujets pertinents pour vos projets ou votre progression

## 8. Erreurs fréquentes à éviter

- Changer un `id` de projet sans vérifier les liens dynamiques
- Changer un `id` de compétence sans mettre à jour les références dans les projets
- Ajouter un projet sans `competencyProofs`
- Ajouter des compétences dans `competencies` mais ne jamais les utiliser dans les projets
- Inventer une nouvelle catégorie autre que `atelier`, `stage` ou `personnel`
- Mélanger identifiants techniques et libellés visibles
- Utiliser `name` ou `code` comme référence à la place de `id`
- Réutiliser deux fois le même `id`
- Mettre des projets incomplets "pour plus tard" puis oublier de les finaliser
- Ajouter une capture dans `public/preuves` sans l'ajouter dans le champ `images` de la preuve correspondante

## 9. Ordre recommandé pour remplacer le mock data

Ordre conseillé :

1. Remplacer les informations personnelles dans `lib/data/student.ts`
2. Mettre à jour le titre et la description du site dans `app/layout.tsx`
3. Remplacer les compétences dans `lib/data/competencies.ts`
4. Remplacer ensuite les projets dans `lib/data/projects.ts`
5. Vérifier projet par projet :
   - les compétences mobilisées
   - les preuves liées aux bonnes compétences
6. Remplacer la veille dans `lib/data/watch.ts`
7. Faire une relecture complète du site page par page

Pourquoi cet ordre :
- les infos perso sont les plus simples
- les compétences doivent être stabilisées avant les projets
- les projets dépendent des compétences
- les preuves dépendent des projets et des compétences

## 10. Checklist finale

Avant de considérer l'intégration de contenu comme terminée, vérifier :

- le nom, l'email, GitHub et LinkedIn sont corrects
- le titre/description du site sont à jour dans `app/layout.tsx`
- toutes les compétences affichées sont réelles et cohérentes
- chaque projet a un `id` unique
- chaque projet possède une catégorie valide
- chaque projet a un résumé clair, un contexte, un objectif et un rôle
- chaque projet référence seulement des compétences existantes
- chaque bloc `competencyProofs` pointe vers une vraie compétence existante
- chaque preuve a un titre explicite et une description utile
- les entrées de veille sont réelles et lisibles
- la page projets, la page détail projet, la matrice de compétences, la veille et la page contact affichent bien le bon contenu

## Notes utiles

- `studentInfo.subtitle` et `studentInfo.about` existent dans les données, mais ne sont pas vraiment exploités dans l'UI actuelle
- les mentions visuelles comme `Portfolio E5`, `BTS SIO SLAM`, certains textes d'introduction de page et les métadonnées SEO ne viennent pas toutes de la couche `lib/data`
- les preuves de type capture peuvent maintenant être ouvertes en grand depuis la page détail projet
