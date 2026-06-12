type MissionCardProps = {
  number: number;
  title: string;
  description: string;
  skills: string[];
  deliverables: string[];
};

function TargetIcon() {
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
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM12 15a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
  skills,
  deliverables,
}: MissionCardProps) {
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

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <TargetIcon />
            Compétences mobilisées
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-violet-100 bg-violet-50/80 px-3 py-1 text-sm text-gray-700"
              >
                → {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
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
      </div>
    </article>
  );
}
