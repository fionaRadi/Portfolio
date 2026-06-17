"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "../data/referentiel";

type TabId = "scolaire" | "personnel";

const tabs: { id: TabId; label: string }[] = [
  { id: "scolaire", label: "Projets scolaires" },
  { id: "personnel", label: "Projets personnels" },
];

function CodeIcon() {
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
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

function ProjectCard({
  slug,
  category,
  code,
  title,
  semester,
  description,
  skills,
}: Project) {
  const badgeClassName =
    category === "scolaire"
      ? "bg-pink-500"
      : "bg-gradient-to-r from-violet-500 to-pink-500";

  return (
    <article className="card-shadow card-shadow-hover flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${badgeClassName}`}
        >
          {code}
        </span>
        <CodeIcon />
      </div>

      <h2 className="mt-4 text-lg font-bold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-400">{semester}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        href={`/projets/${slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800"
      >
        Voir le projet
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

type ProjectsTabsProps = {
  schoolProjects: Project[];
  personalProjects: Project[];
};

export default function ProjectsTabs({
  schoolProjects,
  personalProjects,
}: ProjectsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("scolaire");

  const activeProjects =
    activeTab === "scolaire" ? schoolProjects : personalProjects;

  return (
    <>
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm">
          {tabs.map(({ id, label }) => {
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={
                  isActive
                    ? "gradient-bg rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                    : "rounded-full px-5 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {activeProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </>
  );
}
