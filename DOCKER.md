# Hebergement local avec Docker

Ce projet peut etre lance localement avec Docker Compose sur `http://localhost:3000`.

## Prerequis

- Docker Desktop installe et demarre
- Docker Compose v2 (inclus dans Docker Desktop)

## Commandes a faire a chaque fois

### 1) Construire et lancer

```bash
docker compose up -d --build
```

### 2) Voir les logs (optionnel)

```bash
docker compose logs -f
```

### 3) Arreter

```bash
docker compose down
```

## Commandes utiles

### Relancer sans rebuild

```bash
docker compose up -d
```

### Rebuild force (apres changement de dependances)

```bash
docker compose build --no-cache
docker compose up -d
```

### Supprimer aussi les volumes anonymes

```bash
docker compose down -v
```

## Notes

- L'image est basee sur `node:22-alpine`.
- Le demarrage du conteneur execute `pnpm start` (mode production Next.js).