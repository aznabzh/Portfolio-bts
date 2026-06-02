import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { watchMethodSteps, watchTopics } from "@/lib/data";

export default function VeillePage() {
  return (
    <div className="pt-18 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-[1.65rem] font-semibold leading-tight tracking-normal md:text-[1.9rem]">
            Veille technologique
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-foreground/80 md:text-[16px]">
            Cette page sert de support visuel pour présenter ma démarche de veille.
            Je suis deux axes : Flutter, Dart et Firebase d&apos;un côté, puis les
            outils de développement et de déploiement de l&apos;autre.
          </p>
        </header>

        <section className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-[15px] font-semibold">Pipeline de veille</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-lg border border-border bg-card">
            <div className="grid gap-0 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
            {watchMethodSteps.map((step, index) => (
              <div key={step.index} className="contents">
                <div className="px-5 py-5 md:px-6 md:py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-[11px] font-mono font-semibold text-foreground/70">
                      {step.index}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold tracking-tight">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-6 text-foreground/76">
                        {step.value}
                      </p>
                    </div>
                  </div>
                </div>

                {index < watchMethodSteps.length - 1 && (
                  <div className="hidden items-center justify-center border-x border-border px-4 md:flex">
                    <ArrowRight className="h-4 w-4 text-foreground/35" />
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </section>

        <div className="space-y-12">
          {watchTopics.map((topic) => (
            <article key={topic.id} className="overflow-hidden rounded-lg border border-border bg-card">
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

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_330px]">
                <div className="space-y-10 px-5 py-7 md:px-6 md:py-9">
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Mon Workflow
                    </p>
                    <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-background">
                      {topic.workflow.map((step) => (
                        <div
                          key={step.label}
                          className="grid gap-2 px-4 py-4 md:grid-cols-[130px_1fr] md:items-center md:px-5"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {step.label}
                          </p>
                          <p className="text-[14px] leading-6 text-foreground/82">
                            {step.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Contexte de la veille
                    </p>
                    <div className="mt-4 rounded-lg border border-border bg-secondary/35 px-4 py-4 text-[14px] leading-7 text-foreground/84 md:px-5">
                      {topic.context}
                    </div>
                  </section>

                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Mise en pratique
                    </p>
                    <div className="mt-4 rounded-lg border border-border bg-background px-4 py-4 text-[14px] font-medium leading-6 text-foreground/84 md:px-5">
                      {topic.practice}
                    </div>
                  </section>
                </div>

                <aside className="border-t border-border bg-secondary/30 px-5 py-6 md:px-6 md:py-8 lg:border-l lg:border-t-0">
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Sources suivies
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {topic.sources.map((source) => (
                        <Link
                          key={source.href}
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3.5 py-3 text-[13px] font-medium text-foreground/82 transition-colors hover:bg-background hover:text-foreground"
                        >
                          <span>{source.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground/45" />
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Compétences BTS
                    </p>
                    <div className="mt-3 space-y-2">
                      {topic.skills.map((skill) => (
                        <div
                          key={skill}
                          className="rounded-md bg-secondary px-2.5 py-1.5 text-[11px] font-medium leading-5 text-secondary-foreground"
                        >
                          {skill}
                        </div>
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
