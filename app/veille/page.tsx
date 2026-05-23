import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const methodSteps = [
  "Choisir des sujets liés au développement, à mes stages et à mon parcours SLAM.",
  "Sélectionner peu de sources, mais fiables : documentations officielles, plateformes techniques et articles spécialisés.",
  "Consulter les informations régulièrement ou lorsqu'un besoin apparaît dans un projet.",
  "Conserver les liens, notes, captures et synthèses utiles dans le portfolio.",
  "Relier les informations retenues à mes AP, mes stages ou mes choix techniques.",
];

const watches = [
  {
    title: "Découverte de Flutter",
    type: "Veille technique",
    subject: "Flutter, Dart, développement mobile multiplateforme, widgets, pub.dev et Firebase.",
    axis:
      "Comprendre dans quels cas Flutter est intéressant pour créer une application mobile moderne avec une base de code commune.",
    why:
      "J'ai choisi ce sujet parce que le développement mobile complète bien le parcours SLAM. Flutter permet de créer une application visuelle, testable rapidement, et il est cohérent avec mon stage mobile autour de FIND.",
    retained: [
      "Flutter permet de viser plusieurs plateformes avec une même base de code.",
      "Dart est le langage utilisé pour structurer la logique et les interfaces.",
      "Les écrans sont construits avec des widgets assemblés dans le code.",
      "Le hot reload facilite les tests visuels et les corrections rapides.",
      "pub.dev permet d'ajouter des packages, à condition de vérifier leur qualité.",
      "Firebase peut compléter une application Flutter avec Auth, Firestore, Storage ou notifications.",
      "Flutter est pertinent pour un projet mobile étudiant, personnel ou MVP, mais demande une organisation claire.",
    ],
    projectLink:
      "Cette veille est liée à mon stage de deuxième année sur FIND, à la découverte de Firebase et à la structuration d'une application mobile Flutter.",
    skills: ["B1.6.2 principale", "B1.6.1 pour la démarche d'apprentissage", "B1.6.4 si reliée au projet professionnel"],
    sources: [
      ["Flutter Docs", "https://docs.flutter.dev/"],
      ["Dart Docs", "https://dart.dev/docs"],
      ["Dart Language", "https://dart.dev/language"],
      ["Flutter Hot Reload", "https://docs.flutter.dev/tools/hot-reload"],
      ["pub.dev", "https://pub.dev/"],
      ["Firebase Flutter Setup", "https://firebase.google.com/docs/flutter/setup"],
    ],
  },
  {
    title: "Évolution des outils de développement",
    type: "Veille générale / professionnelle",
    subject: "GitHub, GitLab, Docker, CI/CD, Linear, documentation, gestion d'issues et assistants IA.",
    axis:
      "Comprendre comment les outils modernes aident les développeurs à coder, collaborer, tester, documenter et livrer des projets.",
    why:
      "Ce sujet est utile parce qu'un développeur ne fait pas seulement du code. Dans mes AP, mes stages et ce portfolio, j'utilise aussi des issues, Git, Docker, des README, des workflows et des outils de suivi.",
    retained: [
      "GitHub et GitLab servent à versionner, gérer les branches, suivre les issues et parfois automatiser les livraisons.",
      "Les issues structurent les demandes, corrections et évolutions applicatives.",
      "La CI/CD automatise des étapes comme les tests, la construction ou le déploiement.",
      "Docker facilite la reproductibilité d'un environnement de développement.",
      "Linear, GitHub Projects ou GitLab Boards aident à suivre les tâches et l'avancement.",
      "Les assistants IA peuvent aider à produire ou relire du code, mais les résultats doivent être vérifiés et testés.",
    ],
    projectLink:
      "Cette veille se retrouve dans mes AP avec GitHub/GitLab, Docker, les tickets de suivi, Linear pendant le stage, et GitHub Actions pour le déploiement du portfolio.",
    skills: ["B1.6.2 principale", "B1.6.1 pour progresser dans la méthode de travail", "B1.6.4 pour le profil de futur développeur"],
    sources: [
      ["GitHub Actions", "https://docs.github.com/actions"],
      ["GitLab CI/CD", "https://docs.gitlab.com/ci/"],
      ["Docker Compose", "https://docs.docker.com/compose/"],
      ["Linear Docs", "https://linear.app/docs"],
      ["GitLab Docs", "https://docs.gitlab.com/"],
      ["Docker Docs", "https://docs.docker.com/"],
    ],
  },
];

export default function VeillePage() {
  return (
    <div className="py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-[1.5rem] font-semibold tracking-tight">Veille technologique</h1>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            Cette page regroupe mes deux veilles réalisées dans le cadre du BTS SIO SLAM.
            La veille me permet de rester à jour, de suivre des technologies utiles au
            développement, de comparer des outils et de relier ces recherches à mes projets.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-border bg-card p-5 md:p-6">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-[15px] font-semibold">Méthode de veille</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {methodSteps.map((step) => (
              <div key={step} className="flex gap-3 rounded-md border border-border/70 bg-background p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <p className="text-[12px] leading-relaxed text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-8">
          {watches.map((watch, index) => (
            <article key={watch.title} className="rounded-lg border border-border bg-card">
              <div className="border-b border-border p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="font-mono text-[10px]">
                    Veille {index + 1}
                  </Badge>
                  <Badge variant="outline" className="text-[10px]">
                    {watch.type}
                  </Badge>
                </div>
                <h2 className="text-[1.15rem] font-semibold tracking-tight">{watch.title}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {watch.subject}
                </p>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.45fr_0.95fr]">
                <div className="space-y-6 p-5 md:p-6">
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Axe de veille
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed">{watch.axis}</p>
                  </section>

                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Pourquoi ce sujet
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{watch.why}</p>
                  </section>

                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Informations retenues
                    </p>
                    <div className="mt-3 grid gap-2">
                      {watch.retained.map((item) => (
                        <div key={item} className="rounded-md bg-secondary/60 px-3 py-2 text-[12px] leading-relaxed text-muted-foreground">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Lien avec mes projets
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {watch.projectLink}
                    </p>
                  </section>
                </div>

                <aside className="border-t border-border bg-secondary/30 p-5 md:p-6 lg:border-l lg:border-t-0">
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Sources suivies
                    </p>
                    <div className="mt-3 space-y-2">
                      {watch.sources.map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2 text-[12px] font-medium transition-colors hover:bg-background"
                        >
                          <span>{label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Compétences BTS associées
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {watch.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px]">
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

        <section className="mt-10 rounded-lg border border-border bg-secondary/40 p-5 md:p-6">
          <h2 className="text-[15px] font-semibold">Synthèse</h2>
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">
            Flutter représente une veille technique ciblée sur le développement mobile.
            Les outils de développement représentent une veille plus générale sur les pratiques
            utilisées pour organiser, tester et livrer un projet. Ces deux sujets montrent une
            démarche de progression continue, liée à mes AP, à mes stages et à mon évolution
            professionnelle.
          </p>
        </section>
      </div>
    </div>
  );
}
