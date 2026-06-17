"use client";

import { useEffect, useState } from "react";

type GrowthPoint = {
  label: string;
  before: number;
  after: number;
};

type SkillGrowthChartProps = {
  data: GrowthPoint[];
};

export default function SkillGrowthChart({ data }: SkillGrowthChartProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <h2 className="text-lg font-bold text-gray-900">Progression avant / après</h2>
      <p className="mt-1 text-sm text-gray-500">
        Évolution perçue de mes compétences clés durant le stage.
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-200" />
          Avant le stage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full gradient-bg" />
          Après le stage
        </span>
      </div>

      <div className="mt-8 space-y-7">
        {data.map((point, index) => {
          const delta = point.after - point.before;
          return (
            <div key={point.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">
                  {point.label}
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                  +{delta} pts
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-12 shrink-0 text-right text-xs text-gray-400">
                    Avant
                  </span>
                  <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-violet-50">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-violet-200 transition-all duration-1000 ease-out"
                      style={{
                        width: animated ? `${point.before}%` : "0%",
                        transitionDelay: `${index * 120}ms`,
                      }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-xs font-medium text-gray-500">
                    {point.before}%
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-12 shrink-0 text-right text-xs text-gray-400">
                    Après
                  </span>
                  <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-violet-50">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full gradient-bg transition-all duration-1000 ease-out"
                      style={{
                        width: animated ? `${point.after}%` : "0%",
                        transitionDelay: `${index * 120 + 200}ms`,
                      }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-xs font-bold text-violet-600">
                    {point.after}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
