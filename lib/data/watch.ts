import type { WatchEntry } from "./types";

// Technology watch entries
export const watchEntries: WatchEntry[] = [
  {
    id: "w1",
    date: "Mars 2024",
    source: "Blog officiel React",
    title: "React Server Components",
    summary: "Les React Server Components permettent de rendre des composants côté serveur, réduisant le JavaScript envoyé au client et améliorant les performances.",
    tags: ["React", "Performance", "SSR"],
  },
  {
    id: "w2",
    date: "Février 2024",
    source: "Documentation Next.js",
    title: "App Router et nouvelles conventions",
    summary: "Next.js 14 introduit l'App Router comme standard, avec de nouvelles conventions de routing et le support natif des Server Components.",
    tags: ["Next.js", "Routing", "Framework"],
  },
  {
    id: "w3",
    date: "Janvier 2024",
    source: "MDN Web Docs",
    title: "CSS Container Queries",
    summary: "Les Container Queries permettent d'adapter le style d'un élément en fonction de la taille de son conteneur parent, offrant plus de flexibilité que les media queries.",
    tags: ["CSS", "Responsive", "Web"],
  },
  {
    id: "w4",
    date: "Décembre 2023",
    source: "GitHub Blog",
    title: "GitHub Copilot et IA générative",
    summary: "L'IA générative transforme le développement logiciel. GitHub Copilot utilise des modèles de langage pour suggérer du code en temps réel.",
    tags: ["IA", "Productivité", "Outils"],
  },
  {
    id: "w5",
    date: "Novembre 2023",
    source: "TypeScript Blog",
    title: "TypeScript 5.3 - Nouvelles fonctionnalités",
    summary: "TypeScript 5.3 apporte des améliorations de performance, de nouveaux types utilitaires et une meilleure inférence de types.",
    tags: ["TypeScript", "JavaScript", "Types"],
  },
];
