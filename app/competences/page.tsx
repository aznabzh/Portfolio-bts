import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, competencies } from "@/lib/data";
import type { Project } from "@/lib/data";

// Group projects by academic category/year
interface ProjectGroup {
  label: string;
  projects: Project[];
}

const projectGroups: ProjectGroup[] = [
  {
    label: "Formation - 1ère année",
    projects: projects.filter((p) => p.category === "atelier" && p.year === "2023"),
  },
  {
    label: "Formation - 2nde année",
    projects: projects.filter((p) => p.category === "atelier" && p.year === "2024"),
  },
  {
    label: "Stages",
    projects: projects.filter((p) => p.category === "stage"),
  },
  {
    label: "Projets personnels",
    projects: projects.filter((p) => p.category === "personnel"),
  },
].filter((group) => group.projects.length > 0);

export default function CompetencesPage() {
  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold tracking-tight">Matrice des compétences</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Correspondance projets / compétences du référentiel BTS SIO.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-muted-foreground">Travaillée</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 border border-border rounded bg-card" />
            <span className="text-muted-foreground">Non concernée</span>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="border border-border rounded-md bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs min-w-[700px]">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left p-3 font-medium border-b border-border min-w-[200px] sticky left-0 bg-secondary/50 z-10">
                    Projet
                  </th>
                  {competencies.map((comp) => (
                    <th
                      key={comp.id}
                      className="p-2 font-mono font-medium border-b border-l border-border text-center w-14"
                      title={comp.name}
                    >
                      {comp.code}
                    </th>
                  ))}
                  <th className="p-2 border-b border-l border-border w-10" />
                </tr>
              </thead>
              <tbody>
                {projectGroups.map((group, groupIndex) => (
                  <>
                    {/* Group Header */}
                    <tr key={`group-${groupIndex}`} className="bg-muted/50">
                      <td
                        colSpan={competencies.length + 2}
                        className="p-2 text-[11px] font-medium text-muted-foreground border-b border-border uppercase tracking-wider"
                      >
                        {group.label}
                      </td>
                    </tr>
                    {/* Projects in Group */}
                    {group.projects.map((project) => (
                      <tr
                        key={project.id}
                        className="hover:bg-secondary/30 transition-colors"
                      >
                        <td className="p-3 border-b border-border sticky left-0 bg-card z-10">
                          <div className="flex flex-col">
                            <span className="font-medium text-xs">{project.title}</span>
                            <span className="text-[10px] text-muted-foreground">{project.period}</span>
                          </div>
                        </td>
                        {competencies.map((comp) => {
                          const hasCompetency = project.competencies.includes(comp.id);
                          return (
                            <td
                              key={comp.id}
                              className="p-2 border-b border-l border-border text-center"
                            >
                              {hasCompetency ? (
                                <div className="w-5 h-5 bg-primary rounded flex items-center justify-center mx-auto">
                                  <Check className="h-3 w-3 text-primary-foreground" />
                                </div>
                              ) : (
                                <div className="w-5 h-5 border border-border rounded mx-auto bg-card" />
                              )}
                            </td>
                          );
                        })}
                        <td className="p-2 border-b border-l border-border text-center">
                          <Link
                            href={`/projets/${project.id}`}
                            className="inline-flex items-center justify-center w-5 h-5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            title="Voir les preuves"
                          >
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Competencies Reference */}
        <div className="mt-8">
          <h2 className="text-sm font-medium mb-4">Référentiel compétences</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((comp) => (
              <div key={comp.id} className="flex items-start gap-2 p-3 rounded-md border border-border bg-card">
                <span className="shrink-0 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-primary text-primary-foreground">
                  {comp.code}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium">{comp.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-4 rounded-md bg-secondary/30 border border-border">
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Note :</strong> Chaque case cochée indique que la compétence a été mobilisée. 
            Cliquez sur la flèche pour accéder aux preuves du projet.
          </p>
        </div>
      </div>
    </div>
  );
}
