import { Badge } from "@/components/ui/badge";
import { watchEntries } from "@/lib/data";

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
        <div className="space-y-4">
          {watchEntries.map((entry, index) => (
            <article
              key={entry.id}
              className="p-5 rounded-lg border border-border bg-card hover:border-foreground/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Date */}
                <div className="md:w-32 shrink-0">
                  <p className="text-[13px] font-semibold">{entry.date}</p>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{entry.source}</p>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[14px] font-semibold leading-snug">{entry.title}</h2>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                    {entry.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-medium px-2.5 py-0.5 font-mono">
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
        <div className="mt-10 p-5 rounded-lg bg-secondary/50 border border-border">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Méthodologie
          </p>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            Veille réalisée via documentation officielle, blogs techniques, newsletters et réseaux professionnels. 
            Sujets en lien avec les compétences BTS SIO SLAM.
          </p>
        </div>
      </div>
    </div>
  );
}
