import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competencies, projects, getCategoryLabel } from "@/lib/data";
import { getProjectCategorySections } from "@/lib/view-models/projects";

export default function ProjectsPage() {
  const projectSections = getProjectCategorySections(
    projects,
    competencies,
    getCategoryLabel,
  );

  return (
    <div className="py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[1.5rem] font-semibold tracking-tight">Projets</h1>
          <p className="mt-2 text-[14px] text-muted-foreground max-w-xl leading-relaxed">
            Projets réalisés durant ma formation BTS SIO SLAM et en dehors.
          </p>
        </div>

        {/* Projects by Category */}
        <div className="space-y-12">
          {projectSections.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.label}
                </h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-[11px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                  {section.projects.length}
                </span>
              </div>

              <div className="space-y-3">
                {section.projects.map(
                  ({ project, competencyCodes, remainingCompetencyCount }) => (
                    <Link
                      key={project.id}
                      href={`/projets/${project.id}`}
                      className="group flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-foreground/15 hover:shadow-sm transition-all"
                    >
                      {/* Main Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <h3 className="text-[14px] font-semibold group-hover:text-foreground/80 transition-colors truncate">
                            {project.title}
                          </h3>
                          <span className="shrink-0 text-[11px] text-muted-foreground font-medium">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-[12px] text-muted-foreground line-clamp-1 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex items-center gap-5 md:gap-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground font-mono font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Competencies Codes */}
                        <div className="hidden lg:flex items-center gap-1.5">
                          {competencyCodes.map((code) => (
                            <span
                              key={`${project.id}-${code}`}
                              className="text-[10px] px-2 py-0.5 rounded-md border border-border text-muted-foreground font-mono font-medium"
                            >
                              {code}
                            </span>
                          ))}
                          {remainingCompetencyCount > 0 && (
                            <span className="text-[10px] text-muted-foreground font-medium">
                              +{remainingCompetencyCount}
                            </span>
                          )}
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
