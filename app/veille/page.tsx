import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { watchMethodSteps, watchTopics } from "@/lib/data";

export default function VeillePage() {
  return (
    <div className="pt-18 pb-12 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <header className="mb-12 max-w-3xl">
          <h1 className="page-title">Veille technologique</h1>
          <p className="mt-3 text-[15px] leading-7 text-foreground/80 md:text-[16px]">
            La veille technologique permet de rester à jour sur des technologies,
            des outils et des pratiques utiles au développement informatique.
            Dans ce portfolio, mes deux veilles portent sur Flutter, Dart, Firebase
            et l&apos;écosystème mobile, puis sur les outils de développement comme
            GitHub, GitLab, Docker, CI/CD et Linear.
          </p>
        </header>

        <section className="surface-card mb-12 rounded-lg p-5 md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-[15px] font-semibold">Méthode de veille</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            {watchMethodSteps.map((step) => (
              <div
                key={step}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground/55" />
                <p className="text-[13px] leading-6 text-foreground/78 md:text-[14px]">{step}</p>
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
                <h2 className="text-[1.15rem] font-semibold tracking-tight">
                  {topic.title}
                </h2>
                <p className="mt-3 text-[14px] leading-7 text-foreground/78 md:text-[15px]">
                  {topic.subject}
                </p>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.4fr_0.95fr]">
                <div className="space-y-8 px-5 py-6 md:px-6 md:py-7">
                  <section>
                    <p className="section-kicker">But</p>
                    <p className="mt-2 text-[14px] leading-7 text-foreground/78">
                      {topic.goal}
                    </p>
                  </section>

                  <section>
                    <p className="section-kicker">Explication</p>
                    <p className="mt-2 text-[14px] leading-7 text-foreground/78">
                      {topic.explanation}
                    </p>
                  </section>

                  <section className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="section-kicker">Outils de récolte</p>
                      <ul className="mt-3 space-y-2.5">
                        {topic.collectionTools.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[13px] leading-6 text-foreground/78"
                          >
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="section-kicker">Stockage</p>
                      <ul className="mt-3 space-y-2.5">
                        {topic.storage.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[13px] leading-6 text-foreground/78"
                          >
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <p className="section-kicker">Ce que je surveille</p>
                    <ul className="mt-3 grid gap-x-6 gap-y-2.5 md:grid-cols-2">
                      {topic.monitored.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[13px] leading-6 text-foreground/78"
                        >
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <p className="section-kicker">Informations retenues</p>
                    <ul className="mt-3 space-y-2.5">
                      {topic.retained.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[13px] leading-6 text-foreground/78"
                        >
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <p className="section-kicker">Lien avec mes projets</p>
                    <p className="mt-2 text-[14px] leading-7 text-foreground/78">
                      {topic.projectLink}
                    </p>
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

        <section className="surface-card mt-12 rounded-lg p-5 md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-[15px] font-semibold">Synthèse</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-[13px]">
              <thead>
                <tr className="bg-secondary/60">
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    Veille
                  </th>
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    Objet
                  </th>
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    Récolte
                  </th>
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    Stockage
                  </th>
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    Utilité
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Flutter</td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Flutter, Dart, Firebase, pub.dev.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Feedly ou Inoreader, GitHub Watch, release notes.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Note Markdown ou portfolio.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Rester à jour sur le développement mobile.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Outils de développement</td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    GitHub, GitLab, Docker, CI/CD, Linear.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Feedly ou Inoreader, changelogs, release notes.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Note Markdown ou portfolio.
                  </td>
                  <td className="px-4 py-3 leading-6 text-foreground/76">
                    Suivre les outils utilisés dans les projets.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
