import type { Competency, Project } from "@/lib/data";

export interface ProjectListItemViewModel {
  project: Project;
  competencyCodes: string[];
  remainingCompetencyCount: number;
  previewImage?: string;
  previewImageAlt: string;
  previewVariant: NonNullable<Project["previewVariant"]>;
}

export interface ProjectCategorySectionViewModel {
  category: Project["category"];
  label: string;
  projects: ProjectListItemViewModel[];
}

const orderedCategories: Project["category"][] = ["atelier", "stage", "personnel"];

function getProjectPreviewImage(project: Project): string | undefined {
  return project.image;
}

export function getProjectPreviewVariant(
  project: Project,
): NonNullable<Project["previewVariant"]> {
  if (project.previewVariant) {
    return project.previewVariant;
  }

  const title = project.title.toLowerCase();
  const technologies = project.technologies.join(" ").toLowerCase();

  if (project.category === "stage") {
    return "stage";
  }

  if (title.includes("api") || technologies.includes("swagger") || technologies.includes("express")) {
    return "api";
  }

  if (title.includes("mobile") || technologies.includes("react native") || technologies.includes("expo")) {
    return "mobile";
  }

  if (title.includes("portfolio") || technologies.includes("next.js")) {
    return "portfolio";
  }

  if (technologies.includes("c#") || technologies.includes(".net")) {
    return "desktop";
  }

  return "web";
}

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
            previewImage: getProjectPreviewImage(project),
            previewImageAlt: project.imageAlt ?? `Apercu du projet ${project.title}`,
            previewVariant: getProjectPreviewVariant(project),
          };
        }),
      };
    })
    .filter((section) => section.projects.length > 0);
}
