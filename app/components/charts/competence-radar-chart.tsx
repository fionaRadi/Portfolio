"use client";

import { useEffect, useState } from "react";

type DataPoint = {
  label: string;
  value: number;
};

type CompetenceRadarChartProps = {
  data: DataPoint[];
};

const SIZE = 340;
const CENTER = SIZE / 2;
const MAX_RADIUS = 118;
const LEVELS = 5;

function polarToCartesian(index: number, total: number, radius: number) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export default function CompetenceRadarChart({
  data,
}: CompetenceRadarChartProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const polygonPoints = data
    .map((point, index) => {
      const radius = animated ? (point.value / 100) * MAX_RADIUS : 0;
      const { x, y } = polarToCartesian(index, data.length, radius);
      return `${x},${y}`;
    })
    .join(" ");

  const average = Math.round(
    data.reduce((sum, point) => sum + point.value, 0) / data.length,
  );

  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Profil de compétences
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Vue radar de mon auto-évaluation BUT à la fin du stage.
          </p>
        </div>
        <div className="shrink-0 rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 px-4 py-2 text-center">
          <p className="text-2xl font-bold gradient-text">{average}%</p>
          <p className="text-xs text-gray-500">Moyenne</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="h-auto w-full max-w-[340px]"
          role="img"
          aria-label="Graphique radar des compétences BUT"
        >
          <defs>
            <linearGradient id="radar-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="radar-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {Array.from({ length: LEVELS }, (_, level) => {
            const radius = ((level + 1) / LEVELS) * MAX_RADIUS;
            const points = data
              .map((_, index) => {
                const { x, y } = polarToCartesian(index, data.length, radius);
                return `${x},${y}`;
              })
              .join(" ");
            return (
              <polygon
                key={level}
                points={points}
                fill="none"
                stroke="#e9d5ff"
                strokeWidth={level === LEVELS - 1 ? 1.5 : 1}
                opacity={0.6 + level * 0.08}
              />
            );
          })}

          {data.map((_, index) => {
            const { x, y } = polarToCartesian(index, data.length, MAX_RADIUS);
            return (
              <line
                key={index}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="#ede9fe"
                strokeWidth={1}
              />
            );
          })}

          <polygon
            points={polygonPoints}
            fill="url(#radar-fill)"
            stroke="url(#radar-stroke)"
            strokeWidth={2.5}
            strokeLinejoin="round"
            className="transition-all duration-1000 ease-out"
          />

          {data.map((point, index) => {
            const radius = animated ? (point.value / 100) * MAX_RADIUS : 0;
            const { x, y } = polarToCartesian(index, data.length, radius);
            const labelPos = polarToCartesian(
              index,
              data.length,
              MAX_RADIUS + 28,
            );
            return (
              <g key={point.label}>
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  fill="white"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  className="transition-all duration-1000 ease-out"
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-700 text-[11px] font-semibold"
                >
                  {point.label}
                </text>
                <text
                  x={labelPos.x}
                  y={labelPos.y + 14}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-violet-500 text-[10px] font-bold"
                >
                  {point.value}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </article>
  );
}
