import type { Project } from "@/lib/data";

export interface CompetencyMatrixGroupViewModel {
  label: string;
  projects: Project[];
}

const projectGroupDefinitions: Array<{
  label: string;
  matches: (project: Project) => boolean;
}> = [
  {
    label: "Formation - 1ère année",
    matches: (project) => project.category === "atelier" && project.year === "2023",
  },
  {
    label: "Formation - 2nde année",
    matches: (project) => project.category === "atelier" && project.year === "2024",
  },
  {
    label: "Stages",
    matches: (project) => project.category === "stage",
  },
  {
    label: "Projets personnels",
    matches: (project) => project.category === "personnel",
  },
];

export function getCompetencyMatrixGroups(
  projects: Project[],
): CompetencyMatrixGroupViewModel[] {
  return projectGroupDefinitions
    .map((group) => ({
      label: group.label,
      projects: projects.filter(group.matches),
    }))
    .filter((group) => group.projects.length > 0);
}
