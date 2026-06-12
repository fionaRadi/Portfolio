import Link from "next/link";
import { type ComponentProps } from "react";

const baseClassName =
  "inline-flex items-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-50";

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  showArrow?: boolean;
};

export default function ButtonWhite({
  children,
  className,
  showArrow = false,
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
