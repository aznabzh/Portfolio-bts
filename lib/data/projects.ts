import type { Project } from "./helpers";

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
