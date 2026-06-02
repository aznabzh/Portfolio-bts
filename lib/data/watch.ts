import type { WatchEntry, WatchTopic } from "./types";

export const watchMethodSteps = [
  {
    index: "01",
    title: "Sources",
    value: "Docs officielles, changelogs, release notes",
  },
  {
    index: "02",
    title: "Agrégation",
    value: "Feedly",
  },
  {
    index: "03",
    title: "Tri & synthèse",
    value: "Sélection des informations utiles, reformulation",
  },
  {
    index: "04",
    title: "Stockage",
    value: "Notes Markdown",
  },
] as const;

export const watchTopics: WatchTopic[] = [
  {
    id: "veille-flutter",
    badge: "Veille Flutter",
    title: "Veille Flutter, Dart et Firebase",
    subject: "Flutter, Dart, Firebase/FlutterFire et l'écosystème mobile.",
    workflow: [
      {
        label: "Sources",
        value: "Docs officielles, changelogs, release notes, pub.dev",
      },
      {
        label: "Agrégation",
        value: "Sources regroupées dans Feedly",
      },
      {
        label: "Tri & synthèse",
        value: "Sélection des informations utiles et reformulation",
      },
      {
        label: "Stockage",
        value: "Notes Markdown",
      },
    ],
    context:
      "J'ai choisi cette veille car Flutter est lié à mon stage de deuxième année et au développement mobile. L'objectif est de suivre les évolutions de Flutter, Dart, Firebase et des packages utilisés dans l'écosystème mobile, afin de rester à jour sur les bonnes pratiques et les changements pouvant impacter un projet Flutter.",
    practice: "Utilisée pour mieux comprendre Flutter/Firebase dans mon stage mobile.",
    skills: [
      "B1.6.2 - Mettre en œuvre des outils et stratégies de veille informationnelle",
      "B1.6.1 - Mettre en place son environnement d'apprentissage personnel",
    ],
    sources: [
      { label: "Flutter release notes", href: "https://docs.flutter.dev/release/release-notes" },
      { label: "Dart Blog / Dart Docs", href: "https://dart.dev/" },
      { label: "pub.dev", href: "https://pub.dev/" },
      { label: "Firebase release notes", href: "https://firebase.google.com/support/release-notes" },
      { label: "FlutterFire / documentation Firebase Flutter", href: "https://firebase.flutter.dev/" },
    ],
  },
  {
    id: "veille-outils-developpement",
    badge: "Veille outils de développement",
    title: "Veille GitHub, Docker et outils de projet",
    subject: "GitHub, GitLab, Docker, CI/CD, Linear, issues, documentation et déploiement.",
    workflow: [
      {
        label: "Sources",
        value: "Docs officielles, changelogs, release notes",
      },
      {
        label: "Agrégation",
        value: "Sources regroupées dans Feedly",
      },
      {
        label: "Tri & synthèse",
        value: "Sélection des nouveautés utiles aux projets",
      },
      {
        label: "Stockage",
        value: "Notes Markdown",
      },
    ],
    context:
      "J'ai choisi cette veille car ces outils reviennent dans plusieurs projets : GitHub ou GitLab pour le versioning, Docker pour relancer des environnements, Linear ou les issues pour suivre les tâches, et la CI/CD pour automatiser certaines étapes. L'objectif est de suivre les évolutions des outils qui aident à organiser, tester, documenter et déployer un projet.",
    practice:
      "Utilisée dans mes AP et stages avec GitHub, Docker, Linear et la documentation technique.",
    skills: [
      "B1.6.2 - Mettre en œuvre des outils et stratégies de veille informationnelle",
      "B1.6.1 - Mettre en place son environnement d'apprentissage personnel",
      "B1.6.4 - Développer son projet professionnel",
    ],
    sources: [
      { label: "GitHub Changelog", href: "https://github.blog/changelog/" },
      { label: "GitLab Release Notes", href: "https://about.gitlab.com/releases/" },
      { label: "Docker Release Notes", href: "https://docs.docker.com/desktop/release-notes/" },
      { label: "Docker Compose Docs", href: "https://docs.docker.com/compose/" },
      { label: "Linear Changelog", href: "https://linear.app/changelog" },
      { label: "GitHub Actions Docs", href: "https://docs.github.com/actions" },
      { label: "GitLab CI/CD Docs", href: "https://docs.gitlab.com/ci/" },
    ],
  },
];

export const watchEntries: WatchEntry[] = [
  {
    id: "veille-flutter",
    date: "2026",
    source: "Flutter, Dart, pub.dev et Firebase",
    title: "Veille Flutter",
    summary:
      "Veille sur Flutter, Dart, Firebase/FlutterFire et l'écosystème mobile pour suivre les versions, les packages et les bonnes pratiques utiles à un projet mobile.",
    tags: ["Flutter", "Dart", "Firebase", "pub.dev", "Mobile"],
    image: "/previews/watch/veille-flutter.png",
    imageAlt: "Apercu de veille sur Flutter et Dart",
    previewVariant: "framework",
  },
  {
    id: "veille-outils-developpement",
    date: "2026",
    source: "GitHub, GitLab, Docker, CI/CD et Linear",
    title: "Veille outils de développement",
    summary:
      "Veille sur les outils utilisés autour du code pour versionner, suivre les tâches, relancer un environnement, automatiser certaines étapes et documenter un projet.",
    tags: ["GitHub", "GitLab", "Docker", "CI/CD", "Linear"],
    image: "/previews/watch/veille-outils-developpement.png",
    imageAlt: "Apercu de veille sur les outils de developpement",
    previewVariant: "docs",
  },
];
