import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VisualPreview } from "@/components/portfolio/visual-preview";
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

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map(
                  ({
                    project,
                    competencyCodes,
                    remainingCompetencyCount,
                    previewImage,
                    previewImageAlt,
                    previewVariant,
                  }) => (
                    <Link
                      key={project.id}
                      href={`/projets/${project.id}`}
                      className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md"
                    >
                      <VisualPreview
                        image={previewImage}
                        imageAlt={previewImageAlt}
                        label="Projet"
                        variant={previewVariant}
                      />

                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2.5 flex items-center justify-between gap-3">
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-semibold text-foreground">
                            {project.year}
                          </span>
                          {project.featured && (
                            <span className="rounded-md border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                              Projet clé
                            </span>
                          )}
                        </div>

                        <h3 className="text-[14px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground/80">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
                          {project.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground font-mono font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {competencyCodes.map((code) => (
                            <span
                              key={`${project.id}-${code}`}
                              className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground"
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

                        <div className="mt-auto flex items-center justify-between border-t border-border pt-3.5">
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {project.period}
                          </span>
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </span>
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
