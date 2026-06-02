import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { watchMethodSteps, watchTopics } from "@/lib/data";

export default function VeillePage() {
  return (
    <div className="pt-18 pb-14 md:pt-20 md:pb-18">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <header className="mb-14 max-w-3xl">
          <h1 className="page-title">Veille technologique</h1>
          <p className="mt-3 text-[15px] leading-7 text-foreground/80 md:text-[16px]">
            Cette page sert de support visuel pour présenter ma démarche de veille.
            Je suis deux axes : Flutter, Dart et Firebase d&apos;un côté, puis les
            outils de développement et de déploiement de l&apos;autre.
          </p>
        </header>

        <section className="surface-card mb-14 rounded-lg p-5 md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-[15px] font-semibold">Pipeline de veille</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {watchMethodSteps.map((step, index) => (
              <div key={step.index} className="contents">
                <div className="rounded-lg border border-border bg-background px-4 py-4 md:px-5 md:py-5">
                  <p className="text-[10px] font-mono font-semibold tracking-wide text-muted-foreground">
                    {step.index}
                  </p>
                  <p className="mt-2 text-[14px] font-semibold tracking-tight">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-6 text-foreground/76">
                    {step.value}
                  </p>
                </div>

                {index < watchMethodSteps.length - 1 && (
                  <div className="hidden items-center justify-center md:flex">
                    <ArrowRight className="h-4 w-4 text-foreground/35" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-10">
          {watchTopics.map((topic) => (
            <article key={topic.id} className="surface-card overflow-hidden rounded-lg">
              <div className="border-b border-border px-5 py-5 md:px-6 md:py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="font-mono text-[10px]">
                    {topic.badge}
                  </Badge>
                  <Badge variant="outline" className="text-[10px]">
                    BTS SIO SLAM
                  </Badge>
                </div>

                <h2 className="text-[1.2rem] font-semibold tracking-tight md:text-[1.3rem]">
                  {topic.title}
                </h2>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.3fr_0.95fr]">
                <div className="space-y-10 px-5 py-6 md:px-6 md:py-7">
                  <section>
                    <p className="section-kicker">Mon Workflow</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      {topic.workflow.map((step) => (
                        <div
                          key={step.label}
                          className="rounded-lg border border-border/80 bg-background px-4 py-4"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {step.label}
                          </p>
                          <p className="mt-3 text-[14px] leading-6 text-foreground/78">
                            {step.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="section-kicker">Sujets Actifs</p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {topic.activeTopics.map((item) => (
                        <span
                          key={item}
                          className="meta-chip px-3 py-1.5 text-[11px] normal-case tracking-normal"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="border-t border-border bg-secondary/30 px-5 py-6 md:px-6 md:py-7 lg:border-l lg:border-t-0">
                  <section>
                    <p className="section-kicker">Sources suivies</p>
                    <div className="mt-3 space-y-2.5">
                      {topic.sources.map((source) => (
                        <Link
                          key={source.href}
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-background hover:text-foreground"
                        >
                          <span>{source.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground/45" />
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="mt-8">
                    <p className="section-kicker">Compétences BTS</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topic.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-2.5 py-1 text-[10px]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </section>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
