import type { Project } from "@/lib/data";

export interface CompetencyMatrixProjectRowViewModel {
  project: Project;
  coveredCompetencyIds: Set<string>;
}

export interface CompetencyMatrixGroupViewModel {
  label: string;
  projects: CompetencyMatrixProjectRowViewModel[];
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
      projects: projects
        .filter(group.matches)
        .map((project) => ({
          project,
          coveredCompetencyIds: new Set(project.competencies),
        })),
    }))
    .filter((group) => group.projects.length > 0);
}
