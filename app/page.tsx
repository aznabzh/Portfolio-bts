import Link from "next/link";
import { ArrowRight, ArrowUpRight, Folder, BookOpen, Rss, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { studentInfo, projects, competencies, watchEntries, getCategoryLabel } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredCompetencies = competencies.slice(0, 6);
  const featuredWatch = watchEntries.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr,300px] lg:gap-16">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-primary text-primary-foreground tracking-wide">
                  BTS SIO SLAM
                </span>
                <span className="text-[11px] text-muted-foreground font-medium">Portfolio E5</span>
              </div>
              <h1 className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight text-balance leading-tight">
                {studentInfo.name}
              </h1>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-xl">
                {studentInfo.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-9 px-4 text-[13px] font-medium">
                  <Link href="/projets">
                    Voir les projets
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-9 px-4 text-[13px] font-medium">
                  <Link href="/competences">
                    Matrice compétences
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-3">
              <Link 
                href="/projets" 
                className="group flex items-center gap-3.5 p-4 rounded-lg border border-border bg-card hover:border-foreground/15 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border">
                  <Folder className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-none">{projects.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 font-medium">Projets</p>
                </div>
              </Link>
              <Link 
                href="/competences" 
                className="group flex items-center gap-3.5 p-4 rounded-lg border border-border bg-card hover:border-foreground/15 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border">
                  <BookOpen className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-none">{competencies.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 font-medium">Compétences</p>
                </div>
              </Link>
              <Link 
                href="/veille" 
                className="group flex items-center gap-3.5 p-4 rounded-lg border border-border bg-card hover:border-foreground/15 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border">
                  <Rss className="h-4.5 w-4.5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-none">{watchEntries.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 font-medium">Articles veille</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Projets récents</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/projets"
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 font-medium"
            >
              Tous les projets
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projets/${project.id}`}
                className="group flex flex-col p-5 rounded-lg border border-border bg-card hover:border-foreground/15 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-secondary text-muted-foreground uppercase tracking-wide">
                    {getCategoryLabel(project.category).split(" ")[0]}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium">{project.year}</span>
                </div>
                <h3 className="text-[14px] font-semibold group-hover:text-foreground/80 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-[12px] text-muted-foreground line-clamp-2 flex-1 leading-relaxed">
                  {project.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 text-muted-foreground font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-10 md:py-12 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Compétences BTS SIO</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/competences"
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 font-medium"
            >
              Voir la matrice
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featuredCompetencies.map((comp) => (
              <div
                key={comp.id}
                className="flex items-start gap-3.5 p-4 rounded-lg border border-border bg-card"
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
      <section className="py-10 md:py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold">Veille technologique</h2>
              <div className="h-px w-8 bg-border" />
            </div>
            <Link
              href="/veille"
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 font-medium"
            >
              Toute la veille
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredWatch.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-3 font-medium">
                  <span>{entry.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="truncate">{entry.source}</span>
                </div>
                <h3 className="text-[13px] font-semibold leading-snug">{entry.title}</h3>
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
