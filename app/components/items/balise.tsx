import { type ReactNode } from "react";

type BaliseProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const baseClassName =
  "inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-4 py-1.5 text-sm text-gray-600 shadow-sm backdrop-blur-sm";

export default function Balise({ children, icon, className }: BaliseProps) {
  return (
    <div className={className ? `${baseClassName} ${className}` : baseClassName}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
