import Link from "next/link";
import { ArrowRight, ArrowUpRight, Folder, BookOpen, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { studentInfo, projects, competencies, watchEntries, getCategoryLabel } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredCompetencies = competencies.slice(0, 6);
  const featuredWatch = watchEntries.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Compact */}
      <section className="py-10 md:py-14 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr,320px] lg:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-accent text-accent-foreground">
                  BTS SIO SLAM
                </span>
                <span className="text-[11px] text-muted-foreground">Portfolio E5</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">
                {studentInfo.name}
              </h1>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed max-w-xl">
                {studentInfo.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button size="sm" asChild>
                  <Link href="/projets">
                    Voir les projets
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/competences">
                    Matrice compétences
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-2">
              <Link 
                href="/projets" 
                className="flex items-center gap-3 p-3 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                  <Folder className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-none">{projects.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Projets</p>
                </div>
              </Link>
              <Link 
                href="/competences" 
                className="flex items-center gap-3 p-3 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-none">{competencies.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Compétences</p>
                </div>
              </Link>
              <Link 
                href="/veille" 
                className="flex items-center gap-3 p-3 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                  <Rss className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-none">{watchEntries.length}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Articles veille</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-medium">Projets récents</h2>
            <Link
              href="/projets"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Tous les projets
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projets/${project.id}`}
                className="group flex flex-col p-4 rounded-md border border-border bg-card hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                    {getCategoryLabel(project.category).split(" ")[0]}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 flex-1">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-muted-foreground">
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
      <section className="py-8 md:py-10 border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-medium">Compétences BTS SIO</h2>
            <Link
              href="/competences"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Voir la matrice
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {featuredCompetencies.map((comp) => (
              <div
                key={comp.id}
                className="flex items-start gap-3 p-3 rounded-md border border-border bg-card"
              >
                <span className="shrink-0 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-primary text-primary-foreground">
                  {comp.code}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate">{comp.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Section */}
      <section className="py-8 md:py-10 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-medium">Veille technologique</h2>
            <Link
              href="/veille"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Toute la veille
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {featuredWatch.map((entry) => (
              <div
                key={entry.id}
                className="p-4 rounded-md border border-border bg-card"
              >
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                  <span>{entry.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="truncate">{entry.source}</span>
                </div>
                <h3 className="text-sm font-medium">{entry.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {entry.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] font-normal px-1.5 py-0">
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
