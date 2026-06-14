type CompetenceCardProps = {
  title: string;
  description: string;
  level: number;
  maxLevel?: number;
  accentClass: string;
  components: string[];
  projects?: string[];
};

function LayersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5 text-gray-300"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-4.179 2.25"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3 w-3 text-white"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CompetenceCard({
  title,
  description,
  level,
  maxLevel = 4,
  accentClass,
  components,
  projects,
}: CompetenceCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <div className={`h-1 ${accentClass}`} />

      <div className="p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <LayersIcon />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Niveau atteint
            </p>
            <p className="text-sm font-bold text-gray-900">
              {level} / {maxLevel}
            </p>
          </div>

          <div className="mt-3 flex gap-1.5">
            {Array.from({ length: maxLevel }, (_, index) => (
              <div
                key={index}
                className={
                  index < level
                    ? `h-2 flex-1 rounded-full ${accentClass}`
                    : "h-2 flex-1 rounded-full bg-gray-100"
                }
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Composantes du référentiel
          </p>
          <ul className="mt-4 space-y-3">
            {components.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {projects && projects.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Projets illustrant cette compétence
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {projects.map((project) => (
                <span
                  key={project}
                  className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
