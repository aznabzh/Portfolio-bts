import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Image, Code, FileCode, File, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  competencies,
  getProjectById,
  getCategoryLabel,
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
    <div className="py-10 md:py-12">
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
        <header className="mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-primary text-primary-foreground uppercase tracking-wide">
              {getCategoryLabel(project.category)}
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">{project.period}</span>
          </div>
          <h1 className="text-[1.5rem] font-semibold tracking-tight">{project.title}</h1>
          <p className="mt-3 text-[14px] text-muted-foreground max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </header>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr,300px]">
          {/* Left Column - Details */}
          <div className="space-y-10">
            {/* Info Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-5 rounded-lg border border-border bg-card">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Contexte
                </p>
                <p className="text-[13px] leading-relaxed">{project.context}</p>
              </div>
              <div className="p-5 rounded-lg border border-border bg-card">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Objectif
                </p>
                <p className="text-[13px] leading-relaxed">{project.objective}</p>
              </div>
              <div className="p-5 rounded-lg border border-border bg-card">
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
                    className="rounded-lg border border-border bg-card overflow-hidden"
                  >
                    {/* Competency Header */}
                    <div className="flex items-center gap-3.5 px-5 py-4 bg-secondary/50 border-b border-border">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-primary text-primary-foreground">
                        {group.competencyCode}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold">{group.competencyName}</p>
                      </div>
                    </div>

                    {/* Proofs List */}
                    <div className="divide-y divide-border">
                      {group.proofs.map((proof) => (
                        <div
                          key={proof.id}
                          className="flex items-start gap-4 px-5 py-4 hover:bg-secondary/30 transition-colors"
                        >
                          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-muted-foreground shrink-0">
                            <ProofIcon type={proof.type} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-medium">{proof.title}</p>
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
            <div className="p-5 rounded-lg border border-border bg-card">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="p-5 rounded-lg border border-border bg-card">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Compétences mobilisées
              </p>
              <div className="space-y-2.5">
                {projectDetail.competencies.map((competency) => (
                  <div key={competency.id} className="flex items-start gap-2.5">
                    <span className="shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-border text-muted-foreground">
                      {competency.code}
                    </span>
                    <span className="text-[12px] text-muted-foreground leading-snug">{competency.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-5 rounded-lg border border-border bg-secondary/40">
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
              className="flex items-center justify-center gap-2.5 p-4 rounded-lg border border-border text-[12px] text-muted-foreground font-medium hover:text-foreground hover:bg-secondary/50 transition-all"
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
