type SkillProgress = {
  label: string;
  before: string;
  after: string;
};

type SkillsProgressCardProps = {
  skills: SkillProgress[];
};

function ChartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-violet-500"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 000 2v11a3 3 0 003 3h11a1 1 0 100-2H6a1 1 0 01-1-1V3zM15.293 6.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 11H9a1 1 0 110-2h7.586l-1.293-1.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SkillsProgressCard({ skills }: SkillsProgressCardProps) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
        <ChartIcon />
        Montée en compétences
      </h2>

      <div className="mt-8 space-y-6">
        {skills.map(({ label, before, after }) => (
          <div
            key={label}
            className="grid items-center gap-3 sm:grid-cols-[auto_1fr_auto_1fr] sm:gap-4"
          >
            <span className="text-sm font-bold text-gray-900">{label}</span>

            <span className="rounded-xl bg-violet-50 px-4 py-2.5 text-sm text-gray-600">
              {before}
            </span>

            <span className="hidden text-violet-400 sm:block" aria-hidden>
              →
            </span>

            <span className="rounded-xl border border-pink-200/80 bg-gradient-to-r from-pink-50 to-violet-50 px-4 py-2.5 text-sm text-gray-700">
              {after}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
