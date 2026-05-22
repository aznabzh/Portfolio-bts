import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VisualPreview } from "@/components/portfolio/visual-preview";
import { Badge } from "@/components/ui/badge";
import { watchEntries } from "@/lib/data";
import { getWatchPreviewVariant } from "@/lib/view-models/home";

export default function VeillePage() {
  return (
    <div className="py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[1.5rem] font-semibold tracking-tight">Veille technologique</h1>
          <p className="mt-2 text-[14px] text-muted-foreground max-w-xl leading-relaxed">
            Suivi des évolutions dans le développement web et logiciel.
          </p>
        </div>

        {/* Watch Entries */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {watchEntries.map((entry) => (
            <article
              key={entry.id}
              className="group flex min-h-[350px] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md"
            >
              <VisualPreview
                image={entry.image}
                imageAlt={entry.imageAlt ?? `Illustration de veille : ${entry.title}`}
                label="Veille"
                variant={getWatchPreviewVariant(entry)}
              />

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-semibold text-foreground">
                    {entry.date}
                  </span>
                  <span className="truncate text-[11px] font-medium text-muted-foreground">
                    {entry.source}
                  </span>
                </div>

                <h2 className="text-[14px] font-semibold leading-snug tracking-tight">
                  {entry.title}
                </h2>
                <p className="mt-1.5 line-clamp-3 text-[12px] leading-relaxed text-muted-foreground">
                  {entry.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-2.5 py-0.5 font-mono text-[10px] font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-3.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Veille technologique
                  </span>
                  {entry.url ? (
                    <Link
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label={`Ouvrir la source : ${entry.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-muted-foreground"
                      title="Source externe a ajouter"
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
