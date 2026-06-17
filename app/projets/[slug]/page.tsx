import CompetenceCard from "../../components/cadres/competence-card";
import Header from "../../components/header";
import {
  competenceDefinitions,
  getProjectBySlug,
  projects,
} from "../../data/referentiel";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const competences = project.competences.map(({ title, level }) => ({
    ...competenceDefinitions[title],
    level,
  }));

  const badgeClassName =
    project.category === "scolaire"
      ? "bg-pink-500"
      : "bg-gradient-to-r from-violet-500 to-pink-500";

  return (
    <>
      <Header />

      <main className="bg-blobs flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/projets"
            className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800"
          >
            <span aria-hidden>←</span>
            Retour aux projets
          </Link>

          <div className="mt-8 text-center">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${badgeClassName}`}
            >
              {project.code}
            </span>

            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-violet-500">
              {project.semester}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {project.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-500">
              {project.fullDescription}
            </p>
          </div>

          <article className="mt-10 rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Contexte du projet
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">{project.context}</p>
          </article>

          <article className="mt-6 rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Objectifs
            </p>
            <ul className="mt-4 space-y-3">
              {project.objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  {objective}
                </li>
              ))}
            </ul>
          </article>

          <article className="mt-6 rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Technologies utilisées
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-800"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>

          {project.externalUrl && (
            <div className="mt-8 flex justify-center">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {project.externalUrl.includes("github.com")
                  ? "Voir sur GitHub"
                  : "Voir le projet en ligne"}
                <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </section>

        {competences.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
                Référentiel BUT
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Compétences <span className="gradient-text">acquises</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                Niveaux atteints et composantes du référentiel mobilisées lors
                de ce projet.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {competences.map((competence) => (
                <CompetenceCard key={competence.title} {...competence} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 — Portfolio BUT. Réalisé avec passion.</p>
          <p>
            <span className="font-medium text-gray-600">Fiona Radi</span>
            {" · "}
            Étudiante BUT
          </p>
        </div>
      </footer>
    </>
  );
}
