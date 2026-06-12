import { type ReactNode } from "react";

type CompanyCardProps = {
  companyName: string;
  role: string;
  period: string;
  location: string;
  description: string;
  icon?: ReactNode;
};

function BuildingIcon() {
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
        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.812-1.259a3 3 0 01-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.413 8.287-1.184.237-.082.487-.162.713-.31V18.4c0 1.452-1.034 2.637-2.262 2.955A24.556 24.556 0 0112 21.75c-2.305 0-4.563-.29-6.738-.831-1.228-.318-2.262-1.503-2.262-2.955z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      <path
        fillRule="evenodd"
        d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 .621.504 1.125 1.125 1.125H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.036-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.25 3.75a2.25 2.25 0 00-2.25-2.25H5.625a.375.375 0 00-.375.375v.75c0 .621.504 1.125 1.125 1.125h5.25a.375.375 0 00.375-.375V5.25zm8.25 3.75a2.25 2.25 0 00-2.25-2.25h-1.5a.375.375 0 00-.375.375v.75c0 .621.504 1.125 1.125 1.125h3.375a.375.375 0 00.375-.375V9zm-1.5 4.5a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 00-.75-.75zm-9 0a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 00-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CompanyCard({
  companyName,
  role,
  period,
  location,
  description,
  icon,
}: CompanyCardProps) {
  return (
    <article className="rounded-3xl border border-violet-100/80 bg-gradient-to-r from-violet-50/90 to-pink-50/90 p-8 shadow-[0_4px_20px_rgba(139,92,246,0.06)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="gradient-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm">
          {icon ?? <BuildingIcon />}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-gray-900">{companyName}</h2>
          <p className="mt-1 text-sm text-gray-600">{role}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon />
              {period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LocationIcon />
              {location}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-gray-500">{description}</p>
    </article>
  );
}
