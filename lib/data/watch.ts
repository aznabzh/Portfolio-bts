import type { WatchEntry } from "./types";

export const watchEntries: WatchEntry[] = [
  {
    id: "veille-flutter",
    date: "2026",
    source: "Documentation Flutter, Dart, pub.dev et Firebase",
    title: "Découverte de Flutter",
    summary:
      "Veille technique sur Flutter et Dart pour comprendre le développement mobile multiplateforme, les widgets, le hot reload, l'écosystème pub.dev et l'intégration avec Firebase.",
    tags: ["Flutter", "Dart", "Mobile", "Firebase", "Veille"],
    previewVariant: "framework",
  },
  {
    id: "veille-outils-developpement",
    date: "2026",
    source: "GitHub, GitLab, Docker, Linear et documentations officielles",
    title: "Évolution des outils de développement",
    summary:
      "Veille générale sur les outils modernes des développeurs : GitHub, GitLab, CI/CD, Docker, Linear, documentation, gestion d'issues et assistants IA.",
    tags: ["GitHub", "GitLab", "Docker", "CI/CD", "Linear"],
    previewVariant: "docs",
  },
];
