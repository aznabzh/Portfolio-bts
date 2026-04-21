import type { Competency, Project, WatchEntry } from "@/lib/data";

export interface HomeProjectCardViewModel {
  project: Project;
  categoryShortLabel: string;
  previewTechnologies: string[];
  remainingTechnologyCount: number;
}

export interface HomeViewModel {
  featuredProjectCards: HomeProjectCardViewModel[];
  featuredCompetencies: Competency[];
  featuredWatchEntries: WatchEntry[];
}

export function getHomeViewModel(
  projects: Project[],
  competencies: Competency[],
  watchEntries: WatchEntry[],
  getCategoryLabel: (category: Project["category"]) => string,
): HomeViewModel {
  return {
    featuredProjectCards: projects.slice(0, 3).map((project) => ({
      project,
      categoryShortLabel: getCategoryLabel(project.category).split(" ")[0],
      previewTechnologies: project.technologies.slice(0, 3),
      remainingTechnologyCount: Math.max(project.technologies.length - 3, 0),
    })),
    featuredCompetencies: competencies.slice(0, 6),
    featuredWatchEntries: watchEntries.slice(0, 3),
  };
}
