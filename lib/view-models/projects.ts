import type { Competency, Project } from "@/lib/data";

export interface ProjectListItemViewModel {
  project: Project;
  competencyCodes: string[];
  remainingCompetencyCount: number;
}

export interface ProjectCategorySectionViewModel {
  category: Project["category"];
  label: string;
  projects: ProjectListItemViewModel[];
}

const orderedCategories: Project["category"][] = ["atelier", "stage", "personnel"];

export function getProjectCategorySections(
  projects: Project[],
  competencies: Competency[],
  getCategoryLabel: (category: Project["category"]) => string,
): ProjectCategorySectionViewModel[] {
  const competencyCodeById = new Map(
    competencies.map((competency) => [competency.id, competency.code]),
  );

  return orderedCategories
    .map((category) => {
      const categoryProjects = projects.filter((project) => project.category === category);

      return {
        category,
        label: getCategoryLabel(category),
        projects: categoryProjects.map((project) => {
          const competencyCodes = project.competencies
            .slice(0, 3)
            .map((competencyId) => competencyCodeById.get(competencyId))
            .filter((code): code is string => Boolean(code));

          return {
            project,
            competencyCodes,
            remainingCompetencyCount: Math.max(project.competencies.length - 3, 0),
          };
        }),
      };
    })
    .filter((section) => section.projects.length > 0);
}
