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
    <div className="py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[1.5rem] font-semibold tracking-tight">Matrice des compétences</h1>
          <p className="mt-2 text-[14px] text-muted-foreground max-w-xl leading-relaxed">
            Correspondance projets / compétences du référentiel BTS SIO.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Légende</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center shadow-sm">
              <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-[12px] text-muted-foreground font-medium">Travaillée</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-border rounded-md bg-card" />
            <span className="text-[12px] text-muted-foreground font-medium">Non concernée</span>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="border border-border rounded-lg bg-card overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px] min-w-[750px]">
              <thead>
                <tr className="bg-secondary/60">
                  <th className="text-left p-4 font-semibold border-b border-border min-w-[220px] sticky left-0 bg-secondary/60 z-10">
                    Projet
                  </th>
                  {competencies.map((comp) => (
                    <th
                      key={comp.id}
                      className="p-3 font-mono font-bold border-b border-l border-border text-center w-16 text-[11px]"
                      title={comp.name}
                    >
                      {comp.code}
                    </th>
                  ))}
                  <th className="p-3 border-b border-l border-border w-12" />
                </tr>
              </thead>
              <tbody>
                {projectGroups.map((group, groupIndex) => (
                  <>
                    {/* Group Header */}
                    <tr key={`group-${groupIndex}`} className="bg-muted/60">
                      <td
                        colSpan={competencies.length + 2}
                        className="px-4 py-3 text-[11px] font-semibold text-muted-foreground border-b border-border uppercase tracking-wider"
                      >
                        {group.label}
                      </td>
                    </tr>
                    {/* Projects in Group */}
                    {group.projects.map((project) => (
                      <tr
                        key={project.id}
                        className="hover:bg-secondary/40 transition-colors"
                      >
                        <td className="p-4 border-b border-border sticky left-0 bg-card hover:bg-secondary/40 z-10 transition-colors">
                          <div className="flex flex-col">
                            <span className="font-semibold text-[13px]">{project.title}</span>
                            <span className="text-[11px] text-muted-foreground font-medium mt-0.5">{project.period}</span>
                          </div>
                        </td>
                        {competencies.map((comp) => {
                          const hasCompetency = project.competencies.includes(comp.id);
                          return (
                            <td
                              key={comp.id}
                              className="p-3 border-b border-l border-border text-center"
                            >
                              {hasCompetency ? (
                                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center mx-auto shadow-sm">
                                  <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={2.5} />
                                </div>
                              ) : (
                                <div className="w-6 h-6 border border-border rounded-md mx-auto bg-card" />
                              )}
                            </td>
                          );
                        })}
                        <td className="p-3 border-b border-l border-border text-center">
                          <Link
                            href={`/projets/${project.id}`}
                            className="inline-flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                            title="Voir les preuves"
                          >
                            <ArrowRight className="h-4 w-4" />
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
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[14px] font-semibold">Référentiel compétences</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((comp) => (
              <div key={comp.id} className="flex items-start gap-3.5 p-4 rounded-lg border border-border bg-card">
                <span className="shrink-0 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-primary text-primary-foreground">
                  {comp.code}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium leading-snug">{comp.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-5 rounded-lg bg-secondary/50 border border-border">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-semibold">Note :</strong> Chaque case cochée indique que la compétence a été mobilisée dans le projet. 
            Cliquez sur la flèche pour accéder aux preuves détaillées du projet.
          </p>
        </div>
      </div>
    </div>
  );
}
