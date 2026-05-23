# Preuves et images des cartes

Ce guide explique comment ajouter les captures d'écran des projets, et comment changer l'image affichée en haut des cartes `Projets` et `Veille`.

## 1. Où mettre les fichiers

Les fichiers visibles par le site doivent être placés dans `public/`.

Organisation conseillée :

```txt
public/
  preuves/
    gestion-stock/
      stock-liste.png
      stock-formulaire.png
      stock-tests.png
    portfolio/
      page-projets.png
  previews/
    gestion-stock.png
    veille-react.png
```

Règle importante :
- dans le code, un fichier placé dans `public/preuves/gestion-stock/stock-liste.png` se référence avec `/preuves/gestion-stock/stock-liste.png`
- un fichier placé dans `public/previews/gestion-stock.png` se référence avec `/previews/gestion-stock.png`

## 2. Ajouter des preuves à un projet

Les projets sont dans :

```txt
lib/data/projects.ts
```

Chaque preuve est dans le tableau `proofs` du projet concerné.

Exemple :

```ts
{
  id: "p-stock-interface",
  title: "Interface de gestion du stock",
  type: "screenshot",
  description: "Captures montrant la liste des produits et le formulaire d'ajout.",
  competencyId: "c5",
  subCompetencyIds: ["c5-1", "c5-2"],
  images: [
    {
      id: "stock-liste",
      src: "/preuves/gestion-stock/stock-liste.png",
      alt: "Liste des produits dans l'application de gestion de stock",
      title: "Liste des produits"
    },
    {
      id: "stock-formulaire",
      src: "/preuves/gestion-stock/stock-formulaire.png",
      alt: "Formulaire d'ajout d'un produit",
      title: "Formulaire d'ajout"
    }
  ]
}
```

Champs importants :
- `id` : identifiant unique de la preuve
- `title` : titre affiché sur la page détail projet
- `description` : phrase courte qui explique ce que la capture prouve
- `competencyId` : compétence principale concernée
- `subCompetencyIds` : sous-compétences concernées
- `images` : une ou plusieurs captures d'écran

Si une preuve contient plusieurs images, elles seront affichées sous forme de miniatures. Au clic, l'image s'ouvre en grand et les flèches permettent de passer d'une capture à l'autre.

## 3. Changer l'image de la carte d'un projet

L'image en haut d'une carte projet se règle directement dans le projet, toujours dans :

```txt
lib/data/projects.ts
```

Exemple :

```ts
{
  id: "gestion-stock",
  title: "Application de gestion de stock",
  // ...
  image: "/previews/gestion-stock.png",
  imageAlt: "Aperçu de l'application de gestion de stock",
  previewVariant: "web",
  proofs: [
    // ...
  ]
}
```

Champs utiles :
- `image` : image affichée dans la carte
- `imageAlt` : description courte de l'image
- `previewVariant` : style du placeholder si aucune image n'est renseignée

Valeurs possibles pour `previewVariant` côté projets :

```ts
"api" | "web" | "desktop" | "mobile" | "portfolio" | "stage"
```

Si `image` n'est pas renseigné, le site affiche automatiquement un aperçu abstrait propre selon `previewVariant`.

## 4. Changer l'image d'une carte de veille

Les entrées de veille sont dans :

```txt
lib/data/watch.ts
```

Exemple :

```ts
{
  id: "w1",
  date: "Mars 2024",
  source: "Blog officiel React",
  title: "React Server Components",
  summary: "Les React Server Components permettent de rendre des composants côté serveur.",
  tags: ["React", "Performance", "SSR"],
  image: "/previews/veille-react.png",
  imageAlt: "Illustration de veille sur React Server Components",
  url: "https://react.dev/",
  previewVariant: "framework"
}
```

Champs utiles :
- `image` : image affichée dans la carte de veille
- `imageAlt` : description courte de l'image
- `url` : lien vers la source si tu veux rendre le bouton de la carte cliquable
- `previewVariant` : style du placeholder si aucune image n'est renseignée

Valeurs possibles pour `previewVariant` côté veille :

```ts
"article" | "docs" | "css" | "ai" | "framework" | "typescript"
```

Si `image` n'est pas renseigné, le site affiche un aperçu abstrait lié au thème de veille.

## 5. Bonnes pratiques

- Utilise uniquement des captures utiles pour l'oral, pas des images décoratives.
- Donne un `alt` clair : il doit décrire ce qu'on voit.
- Garde des noms de fichiers simples : pas d'accents, pas d'espaces, pas de caractères spéciaux.
- Préfère le format `.png` pour les captures d'écran.
- Mets plusieurs captures dans une même preuve quand elles prouvent la même sous-compétence.
- Crée une preuve séparée quand la capture justifie une autre compétence.
- Après modification, lance :

```bash
corepack pnpm build
```

## 6. Exemple rapide

Pour ajouter une preuve au projet `gestion-stock` :

1. Ajouter le fichier :

```txt
public/preuves/gestion-stock/stock-liste.png
```

2. Ajouter l'image dans une preuve de `lib/data/projects.ts` :

```ts
images: [
  {
    id: "stock-liste",
    src: "/preuves/gestion-stock/stock-liste.png",
    alt: "Liste des produits dans l'application de gestion de stock",
    title: "Liste des produits"
  }
]
```

3. Si tu veux aussi changer l'image de la carte projet :

```ts
image: "/previews/gestion-stock.png",
imageAlt: "Aperçu de l'application de gestion de stock"
```
