import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Image, Code, FileCode, File, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  getProjectById, 
  getCompetencyById, 
  getCategoryLabel,
  getProofTypeLabel,
  projects,
  type Proof 
} from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

function ProofIcon({ type }: { type: Proof["type"] }) {
  const iconClass = "h-3.5 w-3.5";
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

  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link href="/projets" className="hover:text-foreground transition-colors">
            Projets
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground truncate">{project.title}</span>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
              {getCategoryLabel(project.category)}
            </span>
            <span className="text-[11px] text-muted-foreground">{project.period}</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight">{project.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            {project.summary}
          </p>
        </header>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[1fr,280px]">
          {/* Left Column - Details */}
          <div className="space-y-8">
            {/* Info Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-md border border-border bg-card">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Contexte
                </p>
                <p className="text-xs leading-relaxed">{project.context}</p>
              </div>
              <div className="p-4 rounded-md border border-border bg-card">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Objectif
                </p>
                <p className="text-xs leading-relaxed">{project.objective}</p>
              </div>
              <div className="p-4 rounded-md border border-border bg-card">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Mon rôle
                </p>
                <p className="text-xs leading-relaxed">{project.role}</p>
              </div>
            </div>

            {/* Proofs by Competency */}
            <section>
              <h2 className="text-sm font-medium mb-4">Preuves par compétence</h2>

              <div className="space-y-3">
                {project.competencyProofs.map((cp) => {
                  const competency = getCompetencyById(cp.competencyId);
                  if (!competency) return null;

                  return (
                    <div
                      key={cp.competencyId}
                      className="rounded-md border border-border bg-card overflow-hidden"
                    >
                      {/* Competency Header */}
                      <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 border-b border-border">
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-primary text-primary-foreground">
                          {competency.code}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium">{competency.name}</p>
                        </div>
                      </div>

                      {/* Proofs List */}
                      <div className="divide-y divide-border">
                        {cp.proofs.map((proof) => (
                          <div
                            key={proof.id}
                            className="flex items-start gap-3 px-4 py-3"
                          >
                            <div className="flex items-center justify-center w-6 h-6 rounded bg-secondary text-muted-foreground shrink-0 mt-0.5">
                              <ProofIcon type={proof.type} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-medium">{proof.title}</p>
                              <p className="text-[11px] text-muted-foreground mt-0.5">
                                {getProofTypeLabel(proof.type)} - {proof.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-4">
            {/* Technologies */}
            <div className="p-4 rounded-md border border-border bg-card">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="p-4 rounded-md border border-border bg-card">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Compétences
              </p>
              <div className="space-y-2">
                {project.competencies.map((compId) => {
                  const comp = getCompetencyById(compId);
                  return comp ? (
                    <div key={compId} className="flex items-start gap-2">
                      <span className="shrink-0 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                        {comp.code}
                      </span>
                      <span className="text-xs text-muted-foreground">{comp.name}</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 rounded-md border border-border bg-secondary/30">
              <p className="text-xs text-muted-foreground mb-3">
                Voir la synthèse complète des compétences.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/competences">
                  Matrice compétences
                </Link>
              </Button>
            </div>

            {/* Back Link */}
            <Link
              href="/projets"
              className="flex items-center justify-center gap-2 p-3 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour aux projets
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
