import Link from "next/link";
import { ArrowRight, Folder } from "lucide-react";
import { competencies, projects, getCategoryLabel } from "@/lib/data";
import { getProjectCategorySections } from "@/lib/view-models/projects";

export default function ProjectsPage() {
  const projectSections = getProjectCategorySections(
    projects,
    competencies,
    getCategoryLabel,
  );

  return (
    <div className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="page-title">Projets</h1>
          <p className="page-intro">
            Projets réalisés durant ma formation BTS SIO SLAM et en dehors.
          </p>
        </div>

        {/* Projects by Category */}
        <div className="space-y-12">
          {projectSections.map((section) => (
            <section key={section.category}>
              <div className="mb-5 flex items-center gap-4">
                <h2 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.label}
                </h2>
                <div className="section-rule" />
                <span className="meta-chip">
                  {section.projects.length}
                </span>
              </div>

              <div className="space-y-3.5">
                {section.projects.map(
                  ({ project, competencyCodes, remainingCompetencyCount }) => (
                    <Link
                      key={project.id}
                      href={`/projets/${project.id}`}
                      className="surface-card surface-card-hover group flex flex-col gap-4 rounded-lg p-5 md:flex-row md:items-center"
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-4">
                        <div className="project-thumbnail h-14 w-14">
                          <Folder className="h-5 w-5 text-primary" />
                        </div>

                        {/* Main Info */}
                        <div className="min-w-0 flex-1">
                          <div className="mb-1.5 flex items-center gap-2.5">
                            <h3 className="truncate text-[14px] font-semibold tracking-tight transition-colors group-hover:text-primary">
                              {project.title}
                            </h3>
                            <span className="shrink-0 text-[11px] font-semibold text-muted-foreground">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-[12px] text-muted-foreground line-clamp-1 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex items-center gap-5 md:gap-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="code-chip"
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
                              className="code-chip bg-card"
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
                        <div className="icon-tile flex h-8 w-8 shrink-0 items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
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
