"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/stage", label: "Stage" },
  { href: "/bilan", label: "Bilan" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="gradient-bg h-8 w-8 rounded-full shadow-sm" />
          <span className="text-lg font-semibold text-gray-900">Portfolio</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "gradient-bg rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                    : "rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
