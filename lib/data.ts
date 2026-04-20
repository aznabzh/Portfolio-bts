// Types
export interface Proof {
  id: string;
  title: string;
  type: "screenshot" | "pdf" | "documentation" | "schema" | "code";
  description: string;
}

export interface CompetencyProof {
  competencyId: string;
  proofs: Proof[];
}

export interface Project {
  id: string;
  title: string;
  category: "atelier" | "stage" | "personnel";
  year: string;
  period: string;
  summary: string;
  context: string;
  objective: string;
  technologies: string[];
  role: string;
  competencies: string[];
  competencyProofs: CompetencyProof[];
}

export interface Competency {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface WatchEntry {
  id: string;
  date: string;
  source: string;
  title: string;
  summary: string;
  tags: string[];
}

// Competencies based on BTS SIO SLAM referential
export const competencies: Competency[] = [
  {
    id: "c1",
    code: "B1.1",
    name: "Gérer le patrimoine informatique",
    description: "Recenser et identifier les ressources numériques",
  },
  {
    id: "c2",
    code: "B1.2",
    name: "Répondre aux incidents",
    description: "Collecter, suivre et orienter des demandes",
  },
  {
    id: "c3",
    code: "B1.3",
    name: "Développer la présence en ligne",
    description: "Participer à la valorisation de l'image de l'organisation",
  },
  {
    id: "c4",
    code: "B1.4",
    name: "Travailler en mode projet",
    description: "Analyser les objectifs et les modalités d'organisation d'un projet",
  },
  {
    id: "c5",
    code: "B1.5",
    name: "Mettre à disposition des utilisateurs un service informatique",
    description: "Réaliser les tests d'intégration et d'acceptation d'un service",
  },
  {
    id: "c6",
    code: "B1.6",
    name: "Organiser son développement professionnel",
    description: "Mettre en place son environnement d'apprentissage personnel",
  },
];

// Projects mock data
export const projects: Project[] = [
  {
    id: "gestion-stock",
    title: "Application de gestion de stock",
    category: "atelier",
    year: "2024",
    period: "Septembre 2024 - Décembre 2024",
    summary: "Développement d'une application web de gestion de stock pour une PME fictive.",
    context: "Dans le cadre d'un atelier professionnel, réalisation d'une application complète de gestion d'inventaire.",
    objective: "Concevoir et développer une application permettant de gérer les entrées/sorties de stock, générer des alertes et produire des rapports.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    role: "Développeur full-stack : conception de la base de données, développement du backend et de l'interface utilisateur.",
    competencies: ["c1", "c4", "c5"],
    competencyProofs: [
      {
        competencyId: "c1",
        proofs: [
          { id: "p1", title: "Schéma base de données", type: "schema", description: "MCD et MLD de l'application" },
          { id: "p2", title: "Documentation technique", type: "documentation", description: "Documentation des tables et relations" },
        ],
      },
      {
        competencyId: "c4",
        proofs: [
          { id: "p3", title: "Diagramme de Gantt", type: "schema", description: "Planning du projet" },
          { id: "p4", title: "Compte-rendu réunions", type: "pdf", description: "CR des réunions d'équipe" },
        ],
      },
      {
        competencyId: "c5",
        proofs: [
          { id: "p5", title: "Captures d'écran", type: "screenshot", description: "Interface de l'application" },
          { id: "p6", title: "Tests unitaires", type: "code", description: "Code des tests PHPUnit" },
        ],
      },
    ],
  },
  {
    id: "site-vitrine",
    title: "Site vitrine responsive",
    category: "atelier",
    year: "2023",
    period: "Novembre 2023 - Janvier 2024",
    summary: "Création d'un site vitrine responsive pour une association locale.",
    context: "Projet réalisé en binôme pour une association sportive souhaitant améliorer sa visibilité en ligne.",
    objective: "Développer un site moderne, accessible et optimisé pour le référencement.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    role: "Développeur front-end et designer UI : maquettage, intégration et optimisation SEO.",
    competencies: ["c3", "c4", "c5"],
    competencyProofs: [
      {
        competencyId: "c3",
        proofs: [
          { id: "p7", title: "Maquettes Figma", type: "screenshot", description: "Maquettes desktop et mobile" },
          { id: "p8", title: "Rapport SEO", type: "pdf", description: "Analyse et optimisations SEO" },
        ],
      },
      {
        competencyId: "c4",
        proofs: [
          { id: "p9", title: "Cahier des charges", type: "pdf", description: "Spécifications du projet" },
        ],
      },
      {
        competencyId: "c5",
        proofs: [
          { id: "p10", title: "Site en ligne", type: "screenshot", description: "Captures du site final" },
        ],
      },
    ],
  },
  {
    id: "api-rest",
    title: "API REST de gestion d'événements",
    category: "atelier",
    year: "2024",
    period: "Février 2024 - Avril 2024",
    summary: "Conception et développement d'une API REST pour la gestion d'événements.",
    context: "Atelier de développement avancé visant à maîtriser les architectures REST et la documentation API.",
    objective: "Créer une API sécurisée avec authentification JWT et documentation Swagger.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger", "JWT"],
    role: "Développeur backend : architecture API, implémentation des endpoints et sécurisation.",
    competencies: ["c1", "c5", "c6"],
    competencyProofs: [
      {
        competencyId: "c1",
        proofs: [
          { id: "p11", title: "Architecture API", type: "schema", description: "Schéma de l'architecture REST" },
        ],
      },
      {
        competencyId: "c5",
        proofs: [
          { id: "p12", title: "Documentation Swagger", type: "screenshot", description: "Interface Swagger UI" },
          { id: "p13", title: "Tests Postman", type: "screenshot", description: "Collection de tests" },
        ],
      },
      {
        competencyId: "c6",
        proofs: [
          { id: "p14", title: "Veille Node.js", type: "documentation", description: "Synthèse des bonnes pratiques" },
        ],
      },
    ],
  },
  {
    id: "stage-entreprise",
    title: "Stage - Développement d'un module CRM",
    category: "stage",
    year: "2024",
    period: "Mai 2024 - Juin 2024 (6 semaines)",
    summary: "Développement d'un module de suivi client pour le CRM interne de l'entreprise.",
    context: "Stage de première année effectué dans une ESN spécialisée en solutions métier.",
    objective: "Ajouter des fonctionnalités de suivi et de reporting au CRM existant.",
    technologies: ["C#", ".NET", "SQL Server", "Entity Framework"],
    role: "Développeur junior : analyse des besoins, développement et tests sous supervision.",
    competencies: ["c1", "c2", "c4", "c5"],
    competencyProofs: [
      {
        competencyId: "c1",
        proofs: [
          { id: "p15", title: "Schéma BDD étendu", type: "schema", description: "Nouvelles tables du module" },
        ],
      },
      {
        competencyId: "c2",
        proofs: [
          { id: "p16", title: "Tickets traités", type: "screenshot", description: "Exemples de tickets résolus" },
        ],
      },
      {
        competencyId: "c4",
        proofs: [
          { id: "p17", title: "Rapport de stage", type: "pdf", description: "Rapport complet du stage" },
        ],
      },
      {
        competencyId: "c5",
        proofs: [
          { id: "p18", title: "Module en production", type: "screenshot", description: "Captures du module" },
        ],
      },
    ],
  },
  {
    id: "portfolio-personnel",
    title: "Portfolio personnel",
    category: "personnel",
    year: "2024",
    period: "Projet continu",
    summary: "Développement de ce portfolio pour présenter mes compétences et projets BTS.",
    context: "Projet personnel visant à créer un support de présentation pour l'épreuve E5.",
    objective: "Concevoir un portfolio moderne, clair et professionnel pour l'oral du BTS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Développeur unique : conception, développement et déploiement.",
    competencies: ["c3", "c5", "c6"],
    competencyProofs: [
      {
        competencyId: "c3",
        proofs: [
          { id: "p19", title: "Code source GitHub", type: "code", description: "Repository du projet" },
        ],
      },
      {
        competencyId: "c5",
        proofs: [
          { id: "p20", title: "Portfolio en ligne", type: "screenshot", description: "Site déployé" },
        ],
      },
      {
        competencyId: "c6",
        proofs: [
          { id: "p21", title: "Veille React/Next.js", type: "documentation", description: "Notes d'apprentissage" },
        ],
      },
    ],
  },
  {
    id: "app-mobile",
    title: "Application mobile de quiz",
    category: "personnel",
    year: "2023",
    period: "Été 2023",
    summary: "Développement d'une application mobile de quiz sur la culture générale.",
    context: "Projet personnel pour découvrir le développement mobile avec React Native.",
    objective: "Créer une application ludique et fonctionnelle pour approfondir mes compétences.",
    technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    role: "Développeur unique : conception, développement et tests sur simulateur.",
    competencies: ["c5", "c6"],
    competencyProofs: [
      {
        competencyId: "c5",
        proofs: [
          { id: "p22", title: "Captures application", type: "screenshot", description: "Écrans de l'application" },
        ],
      },
      {
        competencyId: "c6",
        proofs: [
          { id: "p23", title: "Journal d'apprentissage", type: "documentation", description: "Notes React Native" },
        ],
      },
    ],
  },
];

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

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getCompetencyById(id: string): Competency | undefined {
  return competencies.find((c) => c.id === id);
}

export function getCategoryLabel(category: Project["category"]): string {
  const labels: Record<Project["category"], string> = {
    atelier: "Ateliers professionnels",
    stage: "Stages",
    personnel: "Réalisations personnelles",
  };
  return labels[category];
}

export function getProofTypeLabel(type: Proof["type"]): string {
  const labels: Record<Proof["type"], string> = {
    screenshot: "Capture d'écran",
    pdf: "Document PDF",
    documentation: "Documentation",
    schema: "Schéma",
    code: "Code source",
  };
  return labels[type];
}

// Student info
export const studentInfo = {
  name: "Jean Dupont",
  subtitle: "Portfolio BTS SIO SLAM - E5",
  intro: "Étudiant en BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers. Passionné par le développement web et les nouvelles technologies.",
  about: "Actuellement en deuxième année de BTS SIO option SLAM au lycée XYZ, je me forme aux métiers du développement logiciel. Ce portfolio présente les projets réalisés durant ma formation ainsi que les compétences acquises.",
  email: "jean.dupont@email.com",
  github: "https://github.com/jeandupont",
  linkedin: "https://linkedin.com/in/jeandupont",
};
