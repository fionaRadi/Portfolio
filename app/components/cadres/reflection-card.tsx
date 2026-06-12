import { type ReactNode } from "react";

type ReflectionCardProps = {
  title: string;
  items: string[];
  icon: ReactNode;
  iconClassName: string;
};

export default function ReflectionCard({
  title,
  items,
  icon,
  iconClassName,
}: ReflectionCardProps) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${iconClassName}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-gray-500">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}
