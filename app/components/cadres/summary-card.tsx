import { type ReactNode } from "react";

type SummaryCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

function RocketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-white"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A4.495 4.495 0 0119.5 21a4.5 4.5 0 01-3.09-7.725 22.915 22.915 0 01-3.832.547 4.495 4.495 0 01-3.258-3.258 22.915 22.915 0 01.547-3.832A4.5 4.5 0 0112 2.25c.894 0 1.742.26 2.45.715l-.115.02a.75.75 0 01-.708-.133 4.5 4.5 0 00-4.712 4.712.75.75 0 01-.133-.708l.02-.115A9.006 9.006 0 009.315 7.584zM15 8.25a.75.75 0 00-.75.75c0 1.12.492 2.126 1.272 2.815.24.207.582.35.954.35a.75.75 0 00.75-.75 2.25 2.25 0 00-2.226-2.165.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SummaryCard({
  title,
  description,
  icon,
}: SummaryCardProps) {
  return (
    <article className="rounded-3xl border border-violet-100/80 bg-gradient-to-r from-violet-50/90 to-pink-50/90 p-8 shadow-[0_4px_20px_rgba(139,92,246,0.06)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="gradient-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm">
          {icon ?? <RocketIcon />}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="mt-3 leading-relaxed text-gray-500">{description}</p>
        </div>
      </div>
    </article>
  );
}
