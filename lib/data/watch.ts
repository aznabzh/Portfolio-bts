import type { WatchEntry, WatchTopic } from "./types";

export const watchMethodSteps = [
  "Je choisis des sujets liés à mes projets et à mon parcours SLAM.",
  "Je sélectionne un nombre limité de sources fiables.",
  "Je privilégie les documentations officielles, changelogs, release notes et blogs officiels.",
  "J'utilise Feedly ou Inoreader pour regrouper les sources.",
  "Je peux compléter avec GitHub Watch ou Releases sur certains dépôts.",
  "Je trie les informations pour ne garder que ce qui est utile à mes projets.",
  "Je stocke les informations importantes dans une note Markdown ou dans le portfolio.",
  "Je reformule les informations retenues au lieu de copier-coller les sources.",
  "Je relie la veille à mes AP, mes stages ou mes projets personnels.",
] as const;

export const watchTopics: WatchTopic[] = [
  {
    id: "veille-flutter",
    badge: "Veille Flutter",
    title: "Flutter",
    subject: "Flutter, Dart, Firebase/FlutterFire et l'écosystème mobile.",
    goal:
      "Suivre les évolutions de Flutter et de son écosystème pour rester à jour sur le développement mobile multiplateforme.",
    explanation:
      "Cette veille sert à suivre les nouvelles versions de Flutter, les nouveautés Dart, les changements Firebase, les packages pub.dev et les bonnes pratiques liées aux projets mobiles.",
    collectionTools: [
      "Feedly ou Inoreader pour regrouper les sources.",
      "GitHub Watch ou Releases pour suivre certains dépôts ou changelogs importants.",
      "pub.dev pour vérifier les packages, leur maintenance et leurs versions.",
    ],
    storage: [
      "Note Markdown ou section du portfolio.",
      "Pour chaque information retenue : date, source, lien, information importante, intérêt pour le projet.",
    ],
    monitored: [
      "Nouvelles versions de Flutter.",
      "Évolutions de Dart.",
      "Changements Firebase utiles aux applications mobiles.",
      "Packages pub.dev maintenus ou non.",
      "Bonnes pratiques d'architecture Flutter.",
    ],
    retained: [
      "Flutter évolue par versions, donc il faut suivre les release notes.",
      "Dart évolue aussi, ce qui peut influencer la manière de coder.",
      "Les packages pub.dev doivent être vérifiés avant utilisation.",
      "Firebase est utile pour un projet mobile, mais ses SDK et règles peuvent évoluer.",
      "Une veille Flutter permet d'éviter d'utiliser des dépendances dépassées.",
    ],
    projectLink:
      "Cette veille est liée à mon stage de deuxième année sur une application mobile Flutter/Firebase.",
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
    title: "Outils de développement",
    subject: "GitHub, GitLab, Docker, CI/CD, Linear, issues, documentation et déploiement.",
    goal:
      "Suivre les évolutions des outils qui aident à organiser, versionner, tester, automatiser, déployer et documenter un projet.",
    explanation:
      "Cette veille ne porte pas sur un langage précis, mais sur les outils utilisés par les développeurs pour travailler plus proprement et mieux organiser leurs projets.",
    collectionTools: [
      "Feedly ou Inoreader pour regrouper les sources.",
      "GitHub Watch ou Releases pour suivre certains outils ou dépôts.",
      "Changelogs officiels pour suivre les nouveautés importantes.",
    ],
    storage: [
      "Note Markdown ou section du portfolio.",
      "Pour chaque information retenue : date, source, lien, outil concerné, nouveauté, intérêt possible dans mes projets.",
    ],
    monitored: [
      "Nouveautés GitHub et GitLab.",
      "Évolutions des issues, projets, branches et pipelines.",
      "Changements Docker ou Docker Compose.",
      "Nouveautés CI/CD.",
      "Évolutions de Linear pour le suivi de projet.",
    ],
    retained: [
      "GitHub et GitLab ne servent pas seulement à stocker du code.",
      "Les issues permettent de structurer les demandes, bugs et évolutions.",
      "Docker rend un environnement plus facile à relancer.",
      "La CI/CD automatise certaines étapes comme les tests, le build ou le déploiement.",
      "Linear aide à suivre les tâches, priorités et retards.",
    ],
    projectLink:
      "Cette veille est reliée à mes AP et à mes stages : GitHub et GitLab pour les dépôts et issues, Docker pour relancer certains projets, Linear pendant le stage 2, CI/CD et GitHub Pages pour le portfolio, ainsi que les README et la documentation technique.",
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
