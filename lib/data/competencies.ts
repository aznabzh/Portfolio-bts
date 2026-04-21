import type { Competency } from "./types";

// Competencies based on BTS SIO SLAM referential
export const competencies: Competency[] = [
  {
    id: "c1",
    code: "B1.1",
    name: "Gérer le patrimoine informatique",
    description: "Recenser et identifier les ressources numériques",
    subCompetencies: [
      {
        id: "c1-1",
        code: "B1.1.1",
        name: "Inventorier les équipements, services et comptes",
        description: "Recenser les ressources techniques utilisées dans le contexte du projet.",
      },
      {
        id: "c1-2",
        code: "B1.1.2",
        name: "Documenter l'architecture et les accès",
        description: "Formaliser les schémas, documents techniques et informations d'exploitation.",
      },
      {
        id: "c1-3",
        code: "B1.1.3",
        name: "Mettre à jour le patrimoine et les procédures",
        description: "Maintenir des traces fiables sur l'état du service et son évolution.",
      },
    ],
  },
  {
    id: "c2",
    code: "B1.2",
    name: "Répondre aux incidents",
    description: "Collecter, suivre et orienter des demandes",
    subCompetencies: [
      {
        id: "c2-1",
        code: "B1.2.1",
        name: "Qualifier et prioriser une demande",
        description: "Identifier la nature du problème, son impact et son niveau d'urgence.",
      },
      {
        id: "c2-2",
        code: "B1.2.2",
        name: "Diagnostiquer et tracer les actions menées",
        description: "Documenter les investigations, correctifs et éléments de suivi.",
      },
      {
        id: "c2-3",
        code: "B1.2.3",
        name: "Assurer le suivi jusqu'à la résolution",
        description: "Vérifier la prise en charge et la clôture effective de l'incident.",
      },
    ],
  },
  {
    id: "c3",
    code: "B1.3",
    name: "Développer la présence en ligne",
    description: "Participer à la valorisation de l'image de l'organisation",
    subCompetencies: [
      {
        id: "c3-1",
        code: "B1.3.1",
        name: "Produire et publier un contenu en ligne",
        description: "Mettre en ligne des contenus, pages ou supports cohérents avec le besoin.",
      },
      {
        id: "c3-2",
        code: "B1.3.2",
        name: "Améliorer la visibilité et l'accessibilité",
        description: "Optimiser le référencement, la lisibilité et l'accessibilité du service.",
      },
      {
        id: "c3-3",
        code: "B1.3.3",
        name: "Maintenir l'image et la cohérence du site",
        description: "Veiller à la cohérence éditoriale, graphique et technique de la présence en ligne.",
      },
    ],
  },
  {
    id: "c4",
    code: "B1.4",
    name: "Travailler en mode projet",
    description: "Analyser les objectifs et les modalités d'organisation d'un projet",
    subCompetencies: [
      {
        id: "c4-1",
        code: "B1.4.1",
        name: "Analyser le besoin et le périmètre",
        description: "Comprendre le contexte, les attentes et les contraintes du projet.",
      },
      {
        id: "c4-2",
        code: "B1.4.2",
        name: "Planifier, répartir et suivre les tâches",
        description: "Structurer les étapes, les priorités et le pilotage du travail.",
      },
      {
        id: "c4-3",
        code: "B1.4.3",
        name: "Communiquer l'avancement et formaliser les décisions",
        description: "Conserver une trace claire des échanges, arbitrages et livrables projet.",
      },
    ],
  },
  {
    id: "c5",
    code: "B1.5",
    name: "Mettre à disposition des utilisateurs un service informatique",
    description: "Réaliser les tests d'intégration et d'acceptation d'un service",
    subCompetencies: [
      {
        id: "c5-1",
        code: "B1.5.1",
        name: "Concevoir, développer et intégrer le service",
        description: "Assembler les briques techniques nécessaires au fonctionnement du service.",
      },
      {
        id: "c5-2",
        code: "B1.5.2",
        name: "Tester, valider et corriger le service",
        description: "Vérifier la conformité du service et corriger les anomalies détectées.",
      },
      {
        id: "c5-3",
        code: "B1.5.3",
        name: "Déployer et accompagner la mise à disposition",
        description: "Préparer la mise en production et l'appropriation par l'utilisateur.",
      },
    ],
  },
  {
    id: "c6",
    code: "B1.6",
    name: "Organiser son développement professionnel",
    description: "Mettre en place son environnement d'apprentissage personnel",
    subCompetencies: [
      {
        id: "c6-1",
        code: "B1.6.1",
        name: "Organiser sa veille et capitaliser les apprentissages",
        description: "Collecter et structurer les informations utiles à sa progression technique.",
      },
      {
        id: "c6-2",
        code: "B1.6.2",
        name: "Expérimenter de nouveaux outils et pratiques",
        description: "Tester de nouvelles méthodes de travail et technologies pertinentes.",
      },
      {
        id: "c6-3",
        code: "B1.6.3",
        name: "Partager et valoriser sa progression professionnelle",
        description: "Rendre visible sa montée en compétence et ses acquis techniques.",
      },
    ],
  },
];
