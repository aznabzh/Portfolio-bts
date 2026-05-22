# Guide d'ajout de preuves

## Structure des dossiers

```
public/preuves/
├── gestion-stock/
├── site-vitrine/
├── api-rest/
├── stage-entreprise/
├── portfolio-personnel/
└── app-mobile/
```

## Convention de nommage

```
{proofId}-{slug}.{extension}
```

- `proofId` : identifiant de la preuve dans `lib/data/projects.ts` (p1, p2, ..., p23)
- `slug` : 2-4 mots-clés du titre en minuscules, sans accents, séparés par des tirets
- `extension` : `.png`, `.jpg`, ou `.pdf`

**Exemples :**
- `p1-schema-bdd.png`
- `p5-captures-interface.png`
- `p7-maquettes-figma.png`
- `p17-rapport-stage.pdf`

## Ajouter une preuve

### 1. Placer le fichier

Déposer la capture ou le document dans le dossier du projet correspondant :
```
public/preuves/{projet}/{proofId}-{slug}.{extension}
```

### 2. Vérifier le chemin dans les données

Ouvrir `lib/data/projects.ts` et vérifier que le champ `path` de la preuve correspond au fichier ajouté.

Les chemins sont déjà pré-remplis pour toutes les preuves mock avec la convention ci-dessus.

Exemple :
```ts
{
  id: "p1",
  title: "Schéma base de données",
  path: "/Portfolio-bts/preuves/gestion-stock/p1-schema-bdd.png",
  thumbnail: "/Portfolio-bts/preuves/gestion-stock/p1-schema-bdd.png",
}
```

### 3. Vérifier le rendu

- **Captures & schémas** : cliquables, ouvrent une lightbox avec navigation entre les images
- **PDF & documentation** : lien "Ouvrir" dans un nouvel onglet
- **Preuves sans fichier** : affichent un placeholder "À ajouter"

## Types de fichiers acceptés

| Type             | Extension | Affichage                        |
|------------------|-----------|----------------------------------|
| Capture d'écran  | .png, .jpg | Lightbox cliquable              |
| Schéma           | .png, .jpg | Lightbox cliquable              |
| Document PDF     | .pdf      | Lien "Ouvrir" (nouvel onglet)   |
| Documentation    | .pdf      | Lien "Ouvrir" (nouvel onglet)   |
| Code source      | .png      | Lien "Ouvrir" (nouvel onglet)   |

## Ajouter une nouvelle preuve

1. Ajouter un objet `Proof` dans le tableau `proofs[]` du projet dans `lib/data/projects.ts`
2. Définir `id`, `title`, `type`, `description`, `competencyId`, `subCompetencyIds`
3. Ajouter `path` et `thumbnail` selon le chemin attendu
4. Créer le fichier dans `public/preuves/{projet}/`

## Résumé rapide

1. Capture → `public/preuves/{projet}/{proofId}-{slug}.png`
2. Vérifier le `path` dans `lib/data/projects.ts`
3. `pnpm dev` → vérifier l'affichage
4. Commit + push → déploiement automatique sur GitHub Pages
