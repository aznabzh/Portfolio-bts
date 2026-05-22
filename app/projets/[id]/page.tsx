import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  competencies,
  getCategoryLabel,
  getProjectById,
  projects,
} from "@/lib/data";
import { getProjectDetailViewModel } from "@/lib/view-models/project-detail";
import { ProofSection } from "@/components/proof-section";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
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
            <ProofSection proofGroups={projectDetail.proofGroups} />
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
