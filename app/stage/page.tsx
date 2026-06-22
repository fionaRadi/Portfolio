import ButtonRainbow from "../components/Buttons/button-rainbow";
import CompanyCard from "../components/cadres/company-card";
import MissionCard from "../components/cadres/mission-card";
import Header from "../components/header";
import Balise from "../components/items/balise";
import { stageMissions } from "../data/referentiel";

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-violet-500"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.812-1.259a3 3 0 01-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.413 8.287-1.184.237-.082.487-.162.713-.31V18.4c0 1.452-1.034 2.637-2.262 2.955A24.556 24.556 0 0112 21.75c-2.305 0-4.563-.29-6.738-.831-1.228-.318-2.262-1.503-2.262-2.955z" />
    </svg>
  );
}

export default function StagePage() {
  return (
    <>
      <Header />

      <main className="bg-blobs flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Balise icon={<BriefcaseIcon />} className="mb-6">
            Stage · BUT
          </Balise>

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
            Expérience professionnelle
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mon <span className="gradient-text">stage</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Retour d&apos;expérience sur mon stage en entreprise : missions
            réalisées, compétences mobilisées et lien avec le référentiel BUT.
          </p>

          <div className="mt-10 text-left">
            <CompanyCard
              companyName="FeatCoop"
              role="Poste : Développeuse Web · Stagiaire"
              period="Mai – Juillet 2026"
              location="Lyon 7ème, France"
              description="[Description courte de l'entreprise : secteur d'activité, taille, équipe d'accueil, contexte du stage et objectifs initiaux.]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Missions réalisées
          </h2>
          <p className="mt-2 text-gray-500">
            Chaque mission est reliée aux compétences du référentiel BUT.
          </p>

          <div className="mt-8 space-y-6">
            {stageMissions.map((mission) => (
              <MissionCard key={mission.number} {...mission} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonRainbow href="/bilan">Lire mon bilan reflexif</ButtonRainbow>
          </div>
          
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
