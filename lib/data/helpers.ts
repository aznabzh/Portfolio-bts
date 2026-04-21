import { competencies } from "./competencies";
import { projects } from "./projects";

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

export interface StudentInfo {
  name: string;
  subtitle: string;
  intro: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getCompetencyById(id: string): Competency | undefined {
  return competencies.find((competency) => competency.id === id);
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
