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
    slug: "sae-1-01",
    category: "scolaire",
    code: "SAÉ 1.01",
    title: "Implémentation d'un besoin client",
    semester: "Semestre 1",
    description:
      "Développement d'une application web répondant à un cahier des charges fourni par un client fictif.",
    fullDescription:
      "Première SAÉ du BUT : concevoir et développer une application web complète à partir d'un cahier des charges client. Le projet m'a permis de découvrir le cycle de vie d'un projet informatique, de l'analyse du besoin à la livraison d'une solution fonctionnelle.",
    context:
      "Réalisé en équipe de 3 au semestre 1, dans le cadre du parcours BUT. Un client fictif (association locale) a fourni un cahier des charges décrivant ses besoins de gestion. L'équipe devait proposer une solution web répondant aux contraintes fonctionnelles et techniques imposées.",
    objectives: [
      "Analyser et reformuler le cahier des charges client",
      "Concevoir l'architecture et l'interface de l'application",
      "Développer les fonctionnalités principales en respectant les délais",
      "Tester l'application et corriger les anomalies identifiées",
      "Présenter la solution lors d'une soutenance devant le client fictif",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    skills: ["Réaliser", "Collaborer"],
    competences: [
      { title: "Réaliser", level: 2 },
      { title: "Collaborer", level: 2 },
    ],
  },
  {
    slug: "sae-2-02",
    category: "scolaire",
    code: "SAÉ 2.02",
    title: "Exploration algorithmique d'un problème",
    semester: "Semestre 2",
    description:
      "Analyse et résolution d'un problème complexe avec comparaison d'approches algorithmiques.",
    fullDescription:
      "SAÉ centrée sur la résolution algorithmique d'un problème ouvert. L'enjeu était d'explorer plusieurs approches, d'en comparer la complexité et les performances, puis de justifier le choix de la solution retenue par des tests et une analyse rigoureuse.",
    context:
      "Projet individuel réalisé au semestre 2 dans le cadre du module d'algorithmique avancée. Le problème proposé portait sur l'optimisation de parcours (variante du voyageur de commerce simplifié), avec des contraintes de temps et de mémoire à respecter.",
    objectives: [
      "Modéliser le problème et identifier les contraintes",
      "Implémenter au moins deux approches algorithmiques différentes",
      "Analyser la complexité théorique de chaque solution",
      "Mesurer les performances sur des jeux de tests variés",
      "Rédiger un rapport comparatif argumenté",
    ],
    technologies: ["Python", "Algorithmique", "Complexité"],
    skills: ["Optimiser", "Réaliser"],
    competences: [
      { title: "Optimiser", level: 3 },
      { title: "Réaliser", level: 2 },
    ],
  },
  {
    slug: "sae-3-01",
    category: "scolaire",
    code: "SAÉ 3.01",
    title: "Développement d'une application complexe",
    semester: "Semestre 3",
    description:
      "Conception et déploiement d'une application full-stack avec base de données, authentification et CI/CD.",
    fullDescription:
      "SAÉ la plus technique du parcours : développer une application full-stack complète, de la conception de la base de données au déploiement automatisé. Ce projet a consolidé mes compétences en développement, administration et gestion de projet.",
    context:
      "Projet réalisé en équipe de 4 sur 8 semaines au semestre 3. L'application devait répondre à un besoin réel identifié en amont (gestion de ressources partagées). L'équipe a adopté une méthode agile avec des sprints de 2 semaines et des revues régulières.",
    objectives: [
      "Concevoir l'architecture technique et modéliser la base de données",
      "Implémenter l'authentification et les fonctionnalités métier",
      "Mettre en place un pipeline CI/CD avec tests automatisés",
      "Déployer l'application en environnement de production",
      "Documenter l'API et rédiger un guide utilisateur",
    ],
    technologies: ["Next.js", "PostgreSQL", "Docker", "GitHub Actions"],
    skills: ["Réaliser", "Administrer"],
    competences: [
      { title: "Réaliser", level: 4 },
      { title: "Administrer", level: 3 },
    ],
  },
  {
    slug: "sae-3-02",
    category: "scolaire",
    code: "SAÉ 3.02",
    title: "Gestion de projet pluridisciplinaire",
    semester: "Semestre 3",
    description:
      "Coordination d'une équipe de 6 personnes pour livrer un produit à un client externe.",
    fullDescription:
      "SAÉ transversale mêlant compétences techniques et gestion de projet. En tant que chef de projet, j'ai coordonné une équipe pluridisciplinaire pour livrer un produit numérique à un client externe, en respectant délais, budget et exigences qualité.",
    context:
      "Projet mené sur 10 semaines avec une équipe de 6 étudiants (2 développeurs, 1 designer, 1 chef de projet, 2 spécialistes métier). Le client, une PME locale, attendait un outil de suivi de commandes accessible en ligne. Des réunions hebdomadaires avec le client ont rythmé le projet.",
    objectives: [
      "Planifier le projet et répartir les tâches entre les membres",
      "Animer les cérémonies agiles (daily, sprint review, rétrospective)",
      "Assurer le suivi de l'avancement et la gestion des risques",
      "Coordonner la livraison et la recette avec le client",
      "Restituer les résultats lors d'une présentation finale",
    ],
    technologies: ["Figma", "Git", "Méthode agile", "Notion"],
    skills: ["Conduire", "Collaborer"],
    competences: [
      { title: "Conduire", level: 3 },
      { title: "Collaborer", level: 4 },
    ],
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
      "Site vitrine présentant mon parcours BUT, mes SAÉ, mon stage et mon bilan réflexif.",
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
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    skills: ["Next.js", "React", "Tailwind CSS"],
    competences: [],
  },
  {
    slug: "application-mobile",
    category: "personnel",
    code: "Perso",
    title: "Application mobile de suivi",
    semester: "2025",
    description:
      "Application mobile développée en autonomie pour organiser des tâches et suivre des objectifs personnels.",
    fullDescription:
      "Application mobile conçue pour aider à organiser des tâches quotidiennes et suivre des objectifs personnels sur la durée. Le projet m'a permis de consolider mes compétences en développement mobile et en intégration d'API.",
    context:
      "Projet personnel réalisé en dehors du cursus, motivé par le besoin d'un outil simple de suivi d'habitudes. Développement itératif sur 3 mois, avec retours d'utilisateurs testeurs (proches) pour améliorer l'expérience.",
    objectives: [
      "Concevoir une interface mobile intuitive et accessible",
      "Implémenter la gestion de tâches avec persistance locale",
      "Synchroniser les données via une API REST",
      "Publier une version beta testable sur appareil réel",
    ],
    technologies: ["React Native", "TypeScript", "Expo", "API REST"],
    skills: ["React Native", "TypeScript", "API REST"],
    competences: [],
  },
];

export const projects = [...schoolProjects, ...personalProjects];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
