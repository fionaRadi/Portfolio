import Link from "next/link";
import { type ComponentProps } from "react";

const baseClassName = "gradient-bg inline-flex h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90";

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  showArrow?: boolean;
};

export default function ButtonRainbow({
  children,
  className,
  showArrow = true,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={className ? `${baseClassName} ${className}` : baseClassName}
      {...props}
    >
      {children}
      {showArrow && <span aria-hidden>→</span>}
    </Link>
  );
}
