"use client";

import { useEffect, useState } from "react";

type Segment = {
  label: string;
  value: number;
  color: string;
};

type StageDonutChartProps = {
  data: Segment[];
  centerLabel?: string;
  centerValue?: string;
};

const SIZE = 220;
const CENTER = SIZE / 2;
const RADIUS = 80;
const STROKE = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function StageDonutChart({
  data,
  centerLabel = "Répartition",
  centerValue,
}: StageDonutChartProps) {
  const [animated, setAnimated] = useState(false);
  const total = data.reduce((sum, segment) => sum + segment.value, 0);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  let offset = 0;

  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <h2 className="text-lg font-bold text-gray-900">
        Temps passé par activité
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Répartition estimée de mon temps de stage par type de mission.
      </p>

      <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative shrink-0">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="h-[220px] w-[220px] -rotate-90"
            role="img"
            aria-label="Graphique en anneau de la répartition du stage"
          >
            {data.map((segment) => {
              const dash = (segment.value / total) * CIRCUMFERENCE;
              const circle = (
                <circle
                  key={segment.label}
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={STROKE}
                  strokeDasharray={`${animated ? dash : 0} ${CIRCUMFERENCE}`}
                  strokeDashoffset={-offset}
                  className="transition-all duration-1000 ease-out"
                />
              );
              offset += dash;
              return circle;
            })}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            {centerValue && (
              <span className="text-3xl font-bold gradient-text">
                {centerValue}
              </span>
            )}
            <span className="text-xs font-medium text-gray-500">
              {centerLabel}
            </span>
          </div>
        </div>

        <ul className="w-full space-y-3 sm:max-w-xs">
          {data.map((segment) => (
            <li
              key={segment.label}
              className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-2.5"
            >
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                {segment.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {segment.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
