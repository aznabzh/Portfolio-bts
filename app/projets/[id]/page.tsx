import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, File, FileCode, FileText, Image, Code, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  competencies,
  getCategoryLabel,
  getProjectById,
  getProofTypeLabel,
  projects,
  type Proof,
} from "@/lib/data";
import { getProjectDetailViewModel } from "@/lib/view-models/project-detail";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

function ProofIcon({ type }: { type: Proof["type"] }) {
  const iconClass = "h-4 w-4";
  switch (type) {
    case "screenshot":
      return <Image className={iconClass} />;
    case "pdf":
      return <FileText className={iconClass} />;
    case "documentation":
      return <File className={iconClass} />;
    case "schema":
      return <FileCode className={iconClass} />;
    case "code":
      return <Code className={iconClass} />;
    default:
      return <File className={iconClass} />;
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectDetail = getProjectDetailViewModel(project, competencies);

  return (
    <div className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground mb-8 font-medium">
          <Link href="/projets" className="hover:text-foreground transition-colors">
            Projets
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground truncate">{project.title}</span>
        </div>

        {/* Header */}
        <header className="mb-10 border-b border-border pb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-primary text-primary-foreground uppercase tracking-wide">
              {getCategoryLabel(project.category)}
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">{project.period}</span>
          </div>
          <h1 className="page-title">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </header>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr,300px]">
          {/* Left Column - Details */}
          <div className="space-y-10">
            {/* Info Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-lg p-5">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Contexte
                </p>
                <p className="text-[13px] leading-relaxed">{project.context}</p>
              </div>
              <div className="surface-card rounded-lg p-5">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Objectif
                </p>
                <p className="text-[13px] leading-relaxed">{project.objective}</p>
              </div>
              <div className="surface-card rounded-lg p-5">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Mon rôle
                </p>
                <p className="text-[13px] leading-relaxed">{project.role}</p>
              </div>
            </div>

            {/* Proofs by Competency */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-[14px] font-semibold">Preuves par compétence</h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-4">
                {projectDetail.proofGroups.map((group) => (
                  <div
                    key={group.competencyId}
                    className="surface-card overflow-hidden rounded-lg"
                  >
                    {/* Competency Header */}
                    <div className="flex items-center gap-3.5 px-5 py-4 bg-secondary/55 border-b border-border">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-primary text-primary-foreground">
                        {group.competencyCode}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold">{group.competencyName}</p>
                      </div>
                    </div>

                    {group.subCompetencies.length > 0 && (
                      <div className="px-5 py-3 border-b border-border bg-card">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Sous-compétences travaillées
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.subCompetencies.map((subCompetency) => (
                            <span
                              key={subCompetency.id}
                              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-xs"
                              title={subCompetency.name}
                            >
                              <span className="font-mono font-bold text-foreground/80">
                                {subCompetency.code}
                              </span>
                              <span>{subCompetency.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Proofs List */}
                    <div className="divide-y divide-border">
                      {group.proofs.map((proof) => (
                        <div
                          key={proof.id}
                          className="flex items-start gap-4 px-5 py-4 hover:bg-secondary/30 transition-colors"
                        >
                          <div className="icon-tile h-9 w-9 text-muted-foreground">
                            <ProofIcon type={proof.type} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <p className="text-[13px] font-medium">{proof.title}</p>
                              {proof.href && (
                                <Link
                                  href={proof.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="shrink-0 inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Ouvrir
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </Link>
                              )}
                            </div>
                            <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">
                              <span className="font-medium">{getProofTypeLabel(proof.type)}</span> — {proof.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-5">
            {/* Technologies */}
            <div className="surface-card rounded-lg p-5">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="code-chip text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="surface-card rounded-lg p-5">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Compétences mobilisées
              </p>
              <div className="space-y-2.5">
                {projectDetail.competencies.map((competency) => (
                  <div key={competency.id} className="flex items-start gap-2.5">
                    <span className="code-chip shrink-0">
                      {competency.code}
                    </span>
                    <span className="text-[12px] text-muted-foreground leading-snug">{competency.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="muted-panel rounded-lg p-5">
              <p className="text-[12px] text-muted-foreground mb-4 leading-relaxed">
                Voir la synthèse complète des compétences du référentiel BTS SIO.
              </p>
              <Button variant="outline" size="sm" className="w-full h-9 text-[12px] font-medium" asChild>
                <Link href="/competences">
                  Matrice compétences
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {/* Back Link */}
            <Link
              href="/projets"
              className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card/70 p-4 text-[12px] font-semibold text-muted-foreground shadow-xs transition-all hover:bg-secondary/60 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux projets
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
