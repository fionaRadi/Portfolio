import ButtonRainbow from "../components/Buttons/button-rainbow";
import CompanyCard from "../components/cadres/company-card";
import MissionCard from "../components/cadres/mission-card";
import Header from "../components/header";
import Balise from "../components/items/balise";

const missions = [
  {
    number: 1,
    title: "Refonte UX/UI du système de filtres catalogue",
    description:
      "Conception sur Figma puis développement d'une sidebar de filtres avec système d'accordéon, sliders de plage et pastilles de couleur dynamiques, en remplacement de l'ancien système basé sur les paramètres d'URL. Migration de la gestion d'état vers TanStack Store avec persistance localStorage pour des filtres plus rapides et conservés entre les visites.",
    skills: ["Réaliser", "Collaborer"],
    deliverables: [
      "Maquettes Figma",
      "Composants React (sidebar, accordéon, sliders, pastilles couleur)",
      "Migration SQL (hex_color)",
    ],
  },
  {
    number: 2,
    title: "Intégration du système de mailing",
    description:
      "Mise en place d'un formulaire de contact connecté à Mailjet : création du template d'email, configuration de l'API et gestion de la confirmation d'envoi.",
    skills: ["Administrer", "Réaliser"],
    deliverables: [
      "Template d'email Mailjet",
      "Formulaire de contact (popup React)",
      "Documentation technique (configuration API)",
    ],
  },
  {
    number: 3,
    title: "Conception UX/UI des filtres et de la recherche",
    description:
      "Rédaction des cahiers des charges (benchmark des sites concurrents, recueil des règles de gestion), maquettage sur Figma de plusieurs versions desktop et mobile, réalisation de diagrammes de séquence pour formaliser les interactions front/back, et rédaction d'un rapport de conception technique servant de base au développement.",
    skills: ["Conduire", "Collaborer"],
    deliverables: [
      "Cahiers des charges",
      "Maquettes Figma (desktop & mobile)",
      "Diagrammes de séquence",
      "Rapport de conception technique",
    ],
  },
  {
    number: 4,
    title: "Migration de la gestion d'état vers TanStack Store",
    description:
      "Refonte de la logique de filtres, auparavant gérée via les paramètres d'URL, vers un store TanStack couplé à localStorage, pour des filtres persistants entre les visites et des performances de navigation améliorées.",
    skills: ["Optimiser", "Réaliser"],
    deliverables: [
      "Store TanStack (lib/catalog/store.ts)",
      "Module de synchronisation localStorage (filter-storage.ts)",
      "Hooks personnalisés (useCatalogFilters, useCatalogFilterActions, etc.)",
    ],
  },
  {
    number: 5,
    title: "Filtre qualité 1er choix / 2nd choix",
    description:
      "Mise en place complète du pipeline : migration SQL, composant de filtre, badge sur les fiches produit et alerte d'information dans les résultats de recherche.",
    skills: ["Réaliser", "Gérer"],
    deliverables: [
      "Migration SQL (quality_grade)",
      "Composant de filtre qualité (textile-quality-filter.tsx)",
      "Badge produit et alerte UI",
    ],
  },
  {
    number: 6,
    title: "Corrections de design et de responsivité",
    description:
      "Refonte complète du header (navigation), corrections de bugs d'affichage liés aux fusions de branches, réorganisation des onglets de la sidebar mobile, et améliorations UX sur les fiches produit et le tunnel de commande.",
    skills: ["Réaliser", "Optimiser"],
    deliverables: [
      "Header refondu (composant navigation)",
      "Corrections de responsivité (mobile)",
      "Corrections de bugs post-fusion",
    ],
  },
];

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
              description="Feat coop est une société coopérative (SCOP) lyonnaise fondée en 2020, spécialisée dans la valorisation des stocks dormants textiles. La plateforme met en relation des fabricants français disposant de surplus de production avec des acheteurs professionnels (créateurs, stylistes, ateliers de confection), 
              qui peuvent ainsi s'approvisionner en matières premières de qualité à prix réduit, dans une démarche de mode plus durable."
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Missions réalisées
          </h2>
          <p className="mt-2 text-gray-500">
            Chaque mission est reliée aux compétences du référentiel BUT.
          </p>

          <div className="mt-8 space-y-6">
            {missions.map((mission) => (
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
