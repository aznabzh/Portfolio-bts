import { Badge } from "@/components/ui/badge";
import { watchEntries } from "@/lib/data";

export default function VeillePage() {
  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold tracking-tight">Veille technologique</h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            Suivi des évolutions dans le développement web et logiciel.
          </p>
        </div>

        {/* Watch Entries */}
        <div className="space-y-3">
          {watchEntries.map((entry) => (
            <article
              key={entry.id}
              className="p-4 rounded-md border border-border bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Date */}
                <div className="md:w-28 shrink-0">
                  <p className="text-xs font-medium">{entry.date}</p>
                  <p className="text-[11px] text-muted-foreground">{entry.source}</p>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-medium">{entry.title}</h2>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {entry.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-normal px-1.5 py-0 font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Methodology */}
        <div className="mt-8 p-4 rounded-md bg-secondary/30 border border-border">
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Méthodologie
          </p>
          <p className="text-xs text-muted-foreground">
            Veille réalisée via documentation officielle, blogs techniques, newsletters et réseaux professionnels. 
            Sujets en lien avec les compétences BTS SIO SLAM.
          </p>
        </div>
      </div>
    </div>
  );
}
