import { competencies } from "./competencies";
import { projects } from "./projects";
import type { Competency, Proof, Project } from "./types";

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
