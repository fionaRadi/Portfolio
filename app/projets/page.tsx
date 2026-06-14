import Header from "../components/header";
import { personalProjects, schoolProjects } from "../data/referentiel";
import ProjectsTabs from "./projects-tabs";

export default function ProjetsPage() {
  return (
    <>
      <Header />

      <main className="bg-blobs flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
            Portefeuille
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mes <span className="gradient-text">projets</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Cliquez sur un projet pour découvrir les compétences qu&apos;il m&apos;a
            apportées et les traces associées.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ProjectsTabs
            schoolProjects={schoolProjects}
            personalProjects={personalProjects}
          />
        </section>
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
