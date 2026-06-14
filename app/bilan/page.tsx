import FutureBanner from "../components/cadres/future-banner";
import ReflectionCard from "../components/cadres/reflection-card";
import SelfAssessmentCard from "../components/cadres/self-assessment-card";
import SkillsProgressCard from "../components/cadres/skills-progress-card";
import SummaryCard from "../components/cadres/summary-card";
import Header from "../components/header";

const skillProgress = [
  {
    label: "Réaliser",
    before: "Maîtrise des bases du dev web",
    after: "Capacité à livrer une fonctionnalité de bout en bout en autonomie",
  },
  {
    label: "Administrer",
    before: "Découverte de la CI/CD",
    after: "Mise en place complète d'un pipeline GitHub Actions",
  },
  {
    label: "Collaborer",
    before: "Communication ponctuelle en équipe",
    after: "Animation de daily, revues de code et démos régulières",
  },
];

const selfAssessment = [
  { label: "Réaliser", value: 85 },
  { label: "Optimiser", value: 65 },
  { label: "Administrer", value: 70 },
  { label: "Conduire", value: 60 },
  { label: "Collaborer", value: 90 },
];

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-white"
      aria-hidden
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-white"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-white"
      aria-hidden
    >
      <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.33.629c.26.24.445.576.445.96v.075a.75.75 0 01-1.5 0v-.075c0-.24-.12-.465-.33-.629a2.25 2.25 0 00-1.134-1.623A6.75 6.75 0 1118.75 9a.75.75 0 00-1.5 0 8.25 8.25 0 10-5.25 0z" />
      <path d="M9.25 20.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM10.5 22.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H11.25a.75.75 0 01-.75-.75z" />
    </svg>
  );
}

export default function BilanPage() {
  return (
    <>
      <Header />

      <main className="bg-blobs flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
            Posture réflexive
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mon <span className="gradient-text">bilan</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Un retour honnête sur mon parcours, mes apprentissages et les axes
            que je souhaite continuer à développer.
          </p>

          <div className="mt-10 text-left">
            <SummaryCard
              title="Synthèse du stage"
              description={`[Quelques lignes pour résumer le stage : contexte, objectifs visés et principaux résultats obtenus. Cette synthèse répond à la question : "Qu'ai-je accompli pendant ces semaines ?"]`}
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-8 px-6 pb-24">
          <SkillsProgressCard skills={skillProgress} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReflectionCard
              title="Ce qui m'a plu"
              items={[
                "L'autonomie accordée",
                "L'entraide dans l'équipe",
                "Voir un projet en production",
              ]}
              icon={<HeartIcon />}
              iconClassName="bg-pink-500"
            />
            <ReflectionCard
              title="Mes difficultés"
              items={[
                "Estimation des délais",
                "Demander de l'aide à temps",
                "Maîtrise du legacy code",
              ]}
              icon={<AlertIcon />}
              iconClassName="bg-pink-500"
            />
            <ReflectionCard
              title="À développer"
              items={[
                "Tests automatisés",
                "Communication écrite",
                "Connaissances DevOps",
              ]}
              icon={<LightbulbIcon />}
              iconClassName="bg-gradient-to-br from-orange-400 to-pink-500"
            />
          </div>

          <SelfAssessmentCard skills={selfAssessment} />

          <FutureBanner
            title="Et la suite ?"
            description="[Quelques phrases sur mes projets futurs : poursuite d'études, alternance, spécialisation... Cette section traduit ma vision à court et moyen terme.]"
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
