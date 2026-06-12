type SkillRating = {
  label: string;
  value: number;
};

type SelfAssessmentCardProps = {
  skills: SkillRating[];
};

export default function SelfAssessmentCard({ skills }: SelfAssessmentCardProps) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <h2 className="text-lg font-bold text-gray-900">Auto-évaluation</h2>
      <p className="mt-1 text-sm text-gray-500">
        Évaluation honnête de mes compétences à la fin du stage.
      </p>

      <div className="mt-8 space-y-5">
        {skills.map(({ label, value }) => (
          <div key={label}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-900">{label}</span>
              <span className="font-semibold text-gray-900">{value}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-violet-100">
              <div
                className="gradient-bg h-full rounded-full transition-all"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
