import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, getProjectsByCategory, getCategoryLabel, getCompetencyById } from "@/lib/data";
import type { Project } from "@/lib/data";

const categories: Project["category"][] = ["atelier", "stage", "personnel"];

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold tracking-tight">Projets</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Projets réalisés durant ma formation BTS SIO SLAM et en dehors.
          </p>
        </div>

        {/* Projects by Category */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryProjects = getProjectsByCategory(category);
            if (categoryProjects.length === 0) return null;

            return (
              <section key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {getCategoryLabel(category)}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{categoryProjects.length}</span>
                </div>

                <div className="space-y-2">
                  {categoryProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/projets/${project.id}`}
                      className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-4 rounded-md border border-border bg-card hover:border-foreground/20 transition-colors"
                    >
                      {/* Main Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-medium group-hover:text-accent transition-colors truncate">
                            {project.title}
                          </h3>
                          <span className="shrink-0 text-[11px] text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {project.summary}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Competencies Codes */}
                        <div className="hidden lg:flex items-center gap-1">
                          {project.competencies.slice(0, 3).map((compId) => {
                            const comp = getCompetencyById(compId);
                            return comp ? (
                              <span
                                key={compId}
                                className="text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground font-mono"
                              >
                                {comp.code}
                              </span>
                            ) : null;
                          })}
                          {project.competencies.length > 3 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{project.competencies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
