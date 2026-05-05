import Link from "next/link";
import { ArrowRight, ArrowUpRight, Folder, BookOpen, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { studentInfo, projects, competencies, watchEntries, getCategoryLabel } from "@/lib/data";
import { getHomeViewModel } from "@/lib/view-models/home";

export default function Home() {
  const homeViewModel = getHomeViewModel(
    projects,
    competencies,
    watchEntries,
    getCategoryLabel,
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-70 [background-size:16px_16px]" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),320px] lg:items-center lg:gap-16">
            <div className="border-l border-foreground/15 pl-5 md:pl-6">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-primary text-primary-foreground shadow-sm shadow-black/15">
                  BTS SIO SLAM
                </span>
                <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">Portfolio E5</span>
              </div>
              <h1 className="text-[2rem] md:text-[2.55rem] font-semibold tracking-tight text-balance leading-[1.08]">
                {studentInfo.name}
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
                {studentInfo.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-10 px-4 text-[13px] font-semibold">
                  <Link href="/projets">
                    Voir les projets
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-10 px-4 text-[13px] font-semibold">
                  <Link href="/competences">
                    Matrice compétences
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-3.5">
              <Link 
                href="/projets" 
                className="surface-card surface-card-hover group flex min-h-24 items-center gap-3.5 rounded-lg p-4 ring-1 ring-primary/5"
              >
                <div className="icon-tile h-10 w-10">
                  <Folder className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">{projects.length}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Projets</p>
                </div>
              </Link>
              <Link 
                href="/competences" 
                className="surface-card surface-card-hover group flex min-h-24 items-center gap-3.5 rounded-lg p-4 ring-1 ring-primary/5"
              >
                <div className="icon-tile h-10 w-10">
                  <BookOpen className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">{competencies.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 font-medium">Compétences</p>
                </div>
              </Link>
              <Link 
                href="/veille" 
                className="surface-card surface-card-hover group flex min-h-24 items-center gap-3.5 rounded-lg p-4 ring-1 ring-primary/5"
              >
                <div className="icon-tile h-10 w-10">
                  <Rss className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">{watchEntries.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 font-medium">Articles veille</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-border bg-slate-50 py-11 md:py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Projets récents</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/projets"
              className="flex items-center gap-1 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Tous les projets
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeViewModel.featuredProjectCards.map(({ project, categoryShortLabel, previewTechnologies, remainingTechnologyCount }) => (
              <Link
                key={project.id}
                href={`/projets/${project.id}`}
                className="surface-card surface-card-hover group flex h-full flex-col rounded-lg p-5"
              >
                <div className="flex flex-1 items-start gap-4">
                  <div className="project-thumbnail">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="meta-chip">
                        {categoryShortLabel}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-semibold">{project.year}</span>
                    </div>
                    <h3 className="text-[14px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[12px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/90 flex flex-wrap gap-1.5">
                  {previewTechnologies.map((tech) => (
                    <span key={tech} className="code-chip">
                      {tech}
                    </span>
                  ))}
                  {remainingTechnologyCount > 0 && (
                    <span className="text-[10px] px-2 py-0.5 text-muted-foreground font-medium">
                      +{remainingTechnologyCount}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="border-b border-border bg-white py-11 md:py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Compétences BTS SIO</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/competences"
              className="flex items-center gap-1 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Voir la matrice
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {homeViewModel.featuredCompetencies.map((comp) => (
              <div
                key={comp.id}
                className="surface-card flex items-start gap-3.5 rounded-lg p-4"
              >
                <span className="shrink-0 text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-primary text-primary-foreground">
                  {comp.code}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium leading-snug">{comp.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Section */}
      <section className="py-11 md:py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Veille technologique</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/veille"
              className="flex items-center gap-1 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Toute la veille
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeViewModel.featuredWatchEntries.map((entry) => (
              <div
                key={entry.id}
                className="surface-card rounded-lg p-5"
              >
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <span>{entry.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="truncate">{entry.source}</span>
                </div>
                <h3 className="text-[13px] font-semibold leading-snug tracking-tight">{entry.title}</h3>
                <p className="mt-2 text-[12px] text-muted-foreground line-clamp-2 leading-relaxed">
                  {entry.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] font-medium px-2 py-0.5 font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
