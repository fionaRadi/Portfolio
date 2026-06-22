import CompetenceCard from "./competence-card";
import type { ProjectCompetence } from "../../data/referentiel";
import { competenceDefinitions } from "../../data/referentiel";

type MissionCardProps = {
  number: number;
  title: string;
  description: string;
  competences: ProjectCompetence[];
  deliverables: string[];
};

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-gray-400"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
        clipRule="evenodd"
      />
      <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
    </svg>
  );
}

export default function MissionCard({
  number,
  title,
  description,
  competences,
  deliverables,
}: MissionCardProps) {
  const resolvedCompetences = competences.map(({ title, level }) => ({
    ...competenceDefinitions[title],
    level,
  }));

  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-start gap-4">
        <span className="gradient-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-500">{description}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <DocumentIcon />
          Livrables
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-gray-500">
          {deliverables.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      {resolvedCompetences.length > 0 && (
        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Compétences mobilisées
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Niveaux atteints et composantes du référentiel BUT mobilisées lors
            de cette mission.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {resolvedCompetences.map((competence) => (
              <CompetenceCard key={competence.title} {...competence} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
