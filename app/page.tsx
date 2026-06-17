import ButtonGlass from "./components/Buttons/button-glass";
import ButtonRainbow from "./components/Buttons/button-rainbow";
import Header from "./components/header";
import Link from "next/link";
import Balise from "./components/items/balise";

const GITHUB_URL = "https://github.com/fionaRadi";
const CV_PATH = "/CV_Fiona_Radi.pdf";

const stats = [
  { value: "7", label: "Projets réalisés" },
  { value: "1", label: "Stage en entreprise" },
  { value: "12", label: "Compétences travaillées" },
  { value: "3", label: "Années de formation" },
];

const portfolioCards = [
  {
    href: "/projets",
    title: "Projets",
    description:
      "Mes projets scolaires et personnels, avec traces et livrables.",
    iconBg: "bg-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.901a8.237 8.237 0 015.25-1.886.75.75 0 001-.707V4.636a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.368z" />
      </svg>
    ),
  },
  {
    href: "/stage",
    title: "Stage",
    description:
      "Mes missions en entreprise et leur lien avec le référentiel.",
    iconBg: "bg-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.812-1.259a3 3 0 01-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.413 8.287-1.184.237-.082.487-.162.713-.31V18.4c0 1.452-1.034 2.637-2.262 2.955A24.556 24.556 0 0112 21.75c-2.305 0-4.563-.29-6.738-.831-1.228-.318-2.262-1.503-2.262-2.955z" />
      </svg>
    ),
  },
  {
    href: "/bilan",
    title: "Bilan",
    description:
      "Mon retour réflexif sur mon parcours, mes apprentissages et mes objectifs.",
    iconBg: "bg-orange-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
      </svg>
    ),
  },
];

function CvIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.097 4.5a1.125 1.125 0 100-2.25.75.75 0 000 1.5.375.375 0 11-.375.375H9a.75.75 0 000 1.5h2.25a1.125 1.125 0 100 2.25.75.75 0 000-1.5.375.375 0 11.375-.375H9a.75.75 0 010-1.5h2.722zM7.5 15.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-2.782-1.343-.546-1.385-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C19.566 20.115 22 16.379 22 12.017 22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SparkleIcon() {
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
        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.442l-1.036.258a2.25 2.25 0 00-1.91 1.91l-.258 1.036a.75.75 0 01-1.442 0l-.258-1.036a2.25 2.25 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.442l1.036-.258a2.25 2.25 0 011.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-blobs">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Balise icon={<SparkleIcon />} className="mb-8">
            Portfolio professionnel · BUT
          </Balise>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Bonjour, je suis
            <br />
            <span className="gradient-text">Fiona Radi</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Étudiante en BUT, passionnée par le développement web. Découvrez mes
            projets, mon expérience de stage et ma montée en compétences à
            travers ce portfolio.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonRainbow href="/projets">Voir mes projets</ButtonRainbow>
            <ButtonGlass
              href={CV_PATH}
              download="CV_Fiona_Radi.pdf"
              icon={<CvIcon />}
            >
              Télécharger mon CV
            </ButtonGlass>
            <ButtonGlass
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              icon={<GitHubIcon />}
            >
              Mon GitHub
            </ButtonGlass>
          </div>
        </section>

        {/* À propos */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-500">
                À propos
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Une vitrine de mon parcours
              </h2>
              <p className="mt-6 leading-relaxed text-gray-500">
                Ce portfolio regroupe l&apos;ensemble de mes réalisations durant
                ma formation en BUT. Chaque projet témoigne de compétences
                concrètes acquises en situation professionnelle.
              </p>
              <p className="mt-4 leading-relaxed text-gray-500">
                Vous y trouverez mes projets, mon retour d&apos;expérience de
                stage, ainsi qu&apos;un bilan réflexif sur ma progression et mes
                objectifs professionnels.
              </p>

              <p className="mt-4 leading-relaxed text-gray-500">
                Mon objectif : démontrer ma capacité à mobiliser des connaissances dans des situations concrètes et adopter une posture réflexive sur ma progression.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                >
                  <p className="gradient-text text-4xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explorer le portfolio */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explorer le portfolio
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioCards.map(({ href, title, description, iconBg, icon }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
                  >
                    {icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800"
                  >
                    Découvrir
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
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
