import ButtonRainbow from "./components/Buttons/button-rainbow";
import ButtonWhite from "./components/Buttons/button-white";
import Header from "./components/header";
import Link from "next/link";
import Balise from "./components/items/balise";

const stats = [
  { value: "6", label: "SAÉ réalisées" },
  { value: "1", label: "Stage en entreprise" },
  { value: "12", label: "Compétences travaillées" },
  { value: "3", label: "Années de formation" },
];

const portfolioCards = [
  {
    href: "#sae",
    title: "SAÉ",
    description:
      "Mes situations d'apprentissage et d'évaluation, avec traces et livrables.",
    iconBg: "bg-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.901a8.237 8.237 0 015.25-1.886.75.75 0 001-.707V4.636a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.368z" />
      </svg>
    ),
  },
  {
    href: "#stage",
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
    href: "#competences",
    title: "Compétences",
    description:
      "Référentiel BUT : niveaux atteints et preuves associées.",
    iconBg: "bg-orange-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
      </svg>
    ),
  },
];

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
            projets SAÉ, mon expérience de stage et ma montée en compétences à
            travers ce portfolio.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonRainbow href="#sae">Voir mes projets</ButtonRainbow>
            <ButtonWhite href="#bilan">Lire mon bilan</ButtonWhite>
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
                ma formation en BUT. Chaque SAÉ témoigne de compétences
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
