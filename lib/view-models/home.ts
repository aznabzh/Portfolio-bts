import type { Competency, Project, WatchEntry } from "@/lib/data";
import { getProjectPreviewVariant } from "./projects";

export interface HomeProjectCardViewModel {
  project: Project;
  categoryShortLabel: string;
  previewTechnologies: string[];
  remainingTechnologyCount: number;
  previewImage?: string;
  previewImageAlt: string;
  previewVariant: NonNullable<Project["previewVariant"]>;
}

export interface HomeViewModel {
  featuredProjectCards: HomeProjectCardViewModel[];
  featuredCompetencies: Competency[];
  featuredWatchEntries: WatchEntry[];
}

export function getWatchPreviewVariant(
  entry: WatchEntry,
): NonNullable<WatchEntry["previewVariant"]> {
  if (entry.previewVariant) {
    return entry.previewVariant;
  }

  const text = `${entry.title} ${entry.source} ${entry.tags.join(" ")}`.toLowerCase();

  if (text.includes("copilot") || text.includes("ia")) {
    return "ai";
  }

  if (text.includes("typescript")) {
    return "typescript";
  }

  if (text.includes("css")) {
    return "css";
  }

  if (text.includes("documentation") || text.includes("mdn") || text.includes("docs")) {
    return "docs";
  }

  if (text.includes("react") || text.includes("next")) {
    return "framework";
  }

  return "article";
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
      previewImage: project.image,
      previewImageAlt: project.imageAlt ?? `Apercu du projet ${project.title}`,
      previewVariant: getProjectPreviewVariant(project),
    })),
    featuredCompetencies: competencies.slice(0, 6),
    featuredWatchEntries: watchEntries.slice(0, 3),
  };
}
