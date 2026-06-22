export type CompetenceDefinition = {
  title: string;
  description: string;
  accentClass: string;
  components: string[];
};

export type ProjectCompetence = {
  title: string;
  level: number;
};

export type StageMission = {
  number: number;
  title: string;
  description: string;
  deliverables: string[];
  competences: ProjectCompetence[];
};

export type ProjectCategory = "scolaire" | "personnel";

export type Project = {
  slug: string;
  category: ProjectCategory;
  code: string;
  title: string;
  semester: string;
  description: string;
  fullDescription: string;
  context: string;
  objectives: string[];
  technologies: string[];
  skills: string[];
  competences: ProjectCompetence[];
  externalUrl?: string;
};

export const competenceDefinitions: Record<string, CompetenceDefinition> = {
  Réaliser: {
    title: "Réaliser",
    description:
      "Concevoir, développer, déployer et maintenir des solutions informatiques de qualité.",
    accentClass: "bg-gradient-to-r from-pink-500 to-rose-500",
    components: [
      "Concevoir une architecture logicielle adaptée",
      "Implémenter des fonctionnalités",
      "Tester et déboguer",
      "Déployer et maintenir en production",
    ],
  },
  Optimiser: {
    title: "Optimiser",
    description:
      "Analyser, mesurer et améliorer les performances d'une solution informatique.",
    accentClass: "bg-gradient-to-r from-pink-500 to-rose-400",
    components: [
      "Analyser la complexité algorithmique",
      "Profiler et identifier les goulots d'étranglement",
      "Améliorer les performances",
    ],
  },
  Administrer: {
    title: "Administrer",
    description:
      "Installer, configurer et maintenir un environnement informatique sécurisé.",
    accentClass: "bg-gradient-to-r from-orange-500 to-red-500",
    components: [
      "Configurer des serveurs et services",
      "Automatiser le déploiement (CI/CD)",
      "Surveiller et sécuriser l'infrastructure",
    ],
  },
  Gérer: {
    title: "Gérer",
    description:
      "Organiser et piloter la gestion des données et des connaissances.",
    accentClass: "bg-gradient-to-r from-violet-500 to-pink-500",
    components: [
      "Modéliser les données",
      "Implémenter et optimiser les accès",
      "Assurer la qualité et la sécurité des données",
    ],
  },
  Conduire: {
    title: "Conduire",
    description:
      "Piloter un projet informatique de la conception à la livraison.",
    accentClass: "bg-gradient-to-r from-pink-500 to-red-500",
    components: [
      "Planifier et estimer",
      "Animer une équipe",
      "Présenter et restituer les résultats",
    ],
  },
  Collaborer: {
    title: "Collaborer",
    description:
      "Travailler efficacement en équipe et communiquer avec les parties prenantes.",
    accentClass: "bg-gradient-to-r from-red-500 to-orange-400",
    components: [
      "Communiquer à l'oral et à l'écrit",
      "Faire de la revue de code",
      "Travailler en méthode agile",
    ],
  },
};

export const schoolProjects: Project[] = [
  {
    slug: "fete-des-lumieres",
    category: "scolaire",
    code: "Java",
    title: "Fête des Lumières",
    semester: "Semestre 2",
    description:
      "Optimisation du trajet de touristes entre les lieux à visiter lors de la Fête des Lumières à Lyon.",
    fullDescription:
      "Projet du BUT Informatique (semestre 2) : concevoir un programme capable d'optimiser le parcours de touristes souhaitant réduire leur temps de déplacement entre les différents lieux à visiter pendant la Fête des Lumières.",
    context:
      "Projet réalisé dans le cadre du BUT Informatique au semestre 2. L'objectif était de modéliser un problème de parcours et d'y appliquer des approches algorithmiques pour proposer un itinéraire optimisé.",
    objectives: [
      "Modéliser le problème de parcours touristique",
      "Implémenter des algorithmes d'optimisation de trajet",
      "Comparer les performances des solutions proposées",
      "Valider les résultats sur des jeux de tests",
    ],
    technologies: ["Java", "Algorithmique", "NetBeans", "Git"],
    skills: ["Optimiser", "Réaliser"],
    competences: [
      { title: "Optimiser", level: 3 },
      { title: "Réaliser", level: 2 },
    ],
    externalUrl: "https://github.com/fionaRadi/fete-des-lumieres",
  },
  {
    slug: "blog-complot",
    category: "scolaire",
    code: "PHP",
    title: "Blog du Complot",
    semester: "BUT Informatique",
    description:
      "Blog collaboratif sur le thème du complot, avec articles, authentification et espace administrateur.",
    fullDescription:
      "Blog web développé en équipe sur le thème du complot. Les visiteurs peuvent lire des articles, rejoindre la communauté et partager leurs meilleures théories. L'application inclut un système d'authentification et un espace d'administration.",
    context:
      "Projet scolaire réalisé en équipe (Fiona Radi, Corentin Schiano di Schabica, Sacha Pitalot), supervisé par Alexis Monnet. Développé en PHP avec une base de données MySQL.",
    objectives: [
      "Concevoir l'architecture et la base de données du blog",
      "Implémenter la consultation et la création d'articles",
      "Mettre en place l'authentification des utilisateurs",
      "Développer l'espace administrateur pour la gestion des catégories",
    ],
    technologies: ["PHP", "MySQL", "CSS", "HTML", "Draw.io", "Git"],
    skills: ["Réaliser", "Collaborer"],
    competences: [
      { title: "Réaliser", level: 3 },
      { title: "Collaborer", level: 3 },
    ],
    externalUrl: "https://github.com/fionaRadi/blogComplot",
  },
  {
    slug: "mc-info",
    category: "scolaire",
    code: "Python",
    title: "McInfo",
    semester: "BUT Informatique",
    description:
      "Application de gestion de stocks pour restaurant avec interface graphique et historique des commandes.",
    fullDescription:
      "McInfo simule un système de gestion de restaurant simplifié. L'application permet d'accéder à une borne sur laquelle on peut commander, s'identifier, et offre une partie administrateur pour suivre les stocks en temps réel, voir les commandes en cuisine et obtenir un historique.",
    context:
      "Projet scolaire développé en Python avec une interface graphique CustomTkinter. L'application distingue l'espace client (borne de commande) et l'espace administrateur (suivi des stocks et des commandes).",
    objectives: [
      "Concevoir l'interface graphique de la borne de commande",
      "Implémenter la gestion des stocks en temps réel",
      "Permettre le suivi des commandes en cuisine",
      "Fournir un historique des commandes passées",
    ],
    technologies: ["Python", "CustomTkinter", "Tkinter", "Git"],
    skills: ["Réaliser", "Gérer"],
    competences: [
      { title: "Réaliser", level: 3 },
      { title: "Gérer", level: 2 },
    ],
    externalUrl: "https://github.com/fionaRadi/mcInfo",
  },
  {
    slug: "liste-courses-symfony",
    category: "scolaire",
    code: "Symfony",
    title: "Liste2Courses",
    semester: "BUT Informatique",
    description:
      "Application web de gestion de listes de courses partagées, développée avec Symfony.",
    fullDescription:
      "Application web Liste2Courses permettant de créer et gérer des listes de courses. Développée avec le framework Symfony, elle inclut un système d'authentification utilisateur et un compte administrateur.",
    context:
      "Projet scolaire réalisé avec Symfony. L'application permet aux utilisateurs de s'inscrire, se connecter et gérer leurs listes de courses. Un compte administrateur (mini@ad.fr) donne accès aux fonctionnalités de gestion.",
    objectives: [
      "Configurer l'environnement Symfony et la base de données",
      "Implémenter l'authentification et la gestion des utilisateurs",
      "Développer les fonctionnalités de listes de courses partagées",
      "Mettre en place les migrations Doctrine et les fixtures",
    ],
    technologies: ["Symfony", "PHP", "Twig", "MySQL", "Doctrine", "Git"],
    skills: ["Réaliser", "Gérer"],
    competences: [
      { title: "Réaliser", level: 3 },
      { title: "Gérer", level: 2 },
    ],
    externalUrl: "https://github.com/fionaRadi/listeCoursesSymfony",
  },
  {
    slug: "app-kotlin",
    category: "scolaire",
    code: "Kotlin",
    title: "Application mobile restaurants",
    semester: "BUT Informatique",
    description:
      "Application Android pour rechercher des restaurants, les filtrer et les ajouter aux favoris.",
    fullDescription:
      "Application mobile Android développée en Kotlin avec Jetpack Compose. Elle permet de rechercher des restaurants via l'API Geoapify, de les afficher sur une carte, de consulter leurs détails et de les ajouter à une liste de favoris avec authentification.",
    context:
      "Projet scolaire de développement mobile. L'application suit une architecture MVVM avec des ViewModels, des repositories et une navigation entre les écrans (liste, carte, favoris, authentification).",
    objectives: [
      "Concevoir l'interface mobile avec Jetpack Compose",
      "Intégrer l'API Geoapify pour la recherche de restaurants",
      "Implémenter la carte interactive et les filtres",
      "Gérer l'authentification et les favoris utilisateur",
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Geoapify API",
      "Android",
      "Android Studio",
      "Gradle",
      "Git",
    ],
    skills: ["Réaliser", "Collaborer"],
    competences: [
      { title: "Réaliser", level: 3 },
      { title: "Collaborer", level: 2 },
    ],
    externalUrl: "https://github.com/fionaRadi/AppKotlin",
  },
  {
    slug: "astuschool",
    category: "scolaire",
    code: "SAÉ",
    title: "astuSchool",
    semester: "Semestre 3",
    description:
      "Projet de conduite et de documentation pour une application de gestion scolaire.",
    fullDescription:
      "Projet scolaire de conduite de projet autour d'une application de gestion pour une école (astuSchool). Le dépôt regroupe la documentation, les diagrammes UML et le suivi des tâches de l'équipe.",
    context:
      "Projet mené en équipe dans le cadre du BUT Informatique. Le dépôt contient les diagrammes de séquence (PlantUML), l'avant-projet détaillé et les fiches de suivi des tâches pour l'année 2025-2026.",
    objectives: [
      "Rédiger l'avant-projet et la documentation technique",
      "Modéliser les cas d'utilisation et les diagrammes de séquence",
      "Organiser le suivi des tâches en équipe",
      "Préparer la conception de l'application astuSchool",
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "SQL",
      "CSS",
      "PlantUML",
      "Figma",
      "Draw.io",
      "Excel",
      "Git",
      "Méthode agile",
    ],
    skills: ["Conduire", "Collaborer"],
    competences: [
      { title: "Conduire", level: 3 },
      { title: "Collaborer", level: 3 },
    ],
    externalUrl: "https://github.com/fionaRadi/astuschool",
  },
];

export const personalProjects: Project[] = [
  {
    slug: "portfolio",
    category: "personnel",
    code: "Perso",
    title: "Ce portfolio",
    semester: "2026",
    description:
      "Site vitrine présentant mon parcours BUT, mes projets, mon stage et mon bilan réflexif.",
    fullDescription:
      "Portfolio professionnel développé en autonomie pour valoriser mon parcours en BUT. Il centralise mes projets scolaires et personnels, mon expérience de stage et mon bilan réflexif, dans une interface moderne et responsive.",
    context:
      "Projet personnel lancé en parallèle de ma formation pour disposer d'une vitrine professionnelle avant la recherche de stage et d'alternance. Développé avec les technologies apprises en cours et en autodidacte.",
    objectives: [
      "Créer une interface claire mettant en valeur mon parcours",
      "Structurer mes projets par catégories avec fiches détaillées",
      "Relier chaque projet aux compétences du référentiel BUT",
      "Optimiser le référencement et l'accessibilité du site",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Figma",
      "Git",
    ],
    skills: ["Next.js", "React", "Tailwind CSS"],
    competences: [],
    externalUrl: "https://github.com/fionaRadi/Portfolio",
  },
];

export const projects = [...schoolProjects, ...personalProjects];

export const stageMissions: StageMission[] = [
  {
    number: 1,
    title: "Refonte de l'interface admin",
    description:
      "Conception et développement d'un nouveau back-office pour faciliter la gestion quotidienne des contenus par les équipes métier.",
    deliverables: [
      "Maquettes Figma",
      "Code React",
      "Documentation utilisateur",
    ],
    competences: [
      { title: "Réaliser", level: 3 },
      { title: "Collaborer", level: 3 },
    ],
  },
  {
    number: 2,
    title: "Mise en place d'une CI/CD",
    description:
      "Automatisation du pipeline de déploiement avec GitHub Actions, tests automatisés et déploiement continu vers la pré-production.",
    deliverables: ["Workflows YAML", "Documentation technique"],
    competences: [
      { title: "Administrer", level: 3 },
      { title: "Optimiser", level: 2 },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
