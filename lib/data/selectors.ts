import { competencies } from "./competencies";
import { projects } from "./projects";
import type { Competency, Project, SubCompetency } from "./types";

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getCompetencyById(id: string): Competency | undefined {
  return competencies.find((competency) => competency.id === id);
}

export function getSubCompetencyById(id: string): SubCompetency | undefined {
  return competencies.flatMap((competency) => competency.subCompetencies).find((subCompetency) => subCompetency.id === id);
}

export function getCompetencyBySubCompetencyId(id: string): Competency | undefined {
  return competencies.find((competency) => competency.subCompetencies.some((subCompetency) => subCompetency.id === id));
}

export function getCategoryLabel(category: Project["category"]): string {
  const labels: Record<Project["category"], string> = {
    atelier: "Ateliers professionnels",
    stage: "Stages",
    personnel: "Réalisations personnelles",
  };

  return labels[category];
}

