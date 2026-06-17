import Header from "../components/header";
import Balise from "../components/items/balise";

const EMAIL = "fiona.radi01@gmail.com";
const PHONE = "0671322019";
const PHONE_DISPLAY = "06 71 32 20 19";

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-violet-500"
      aria-hidden
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function MailCardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-white"
      aria-hidden
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function PhoneCardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-white"
      aria-hidden
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

const contactLinks = [
  {
    href: `mailto:${EMAIL}`,
    label: "E-mail",
    value: EMAIL,
    description: "Pour toute question ou proposition de collaboration.",
    iconBg: "bg-violet-500",
    icon: <MailCardIcon />,
  },
  {
    href: `tel:${PHONE}`,
    label: "Téléphone",
    value: PHONE_DISPLAY,
    description: "Disponible en semaine pour un échange rapide.",
    iconBg: "bg-pink-500",
    icon: <PhoneCardIcon />,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-blobs flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Balise icon={<EnvelopeIcon />} className="mb-6">
            Contact
          </Balise>

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
            Restons en contact
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Me <span className="gradient-text">contacter</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            N&apos;hésitez pas à me joindre par e-mail ou par téléphone pour
            échanger sur mes projets, mon parcours ou une opportunité
            professionnelle.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            {contactLinks.map(
              ({ href, label, value, description, iconBg, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}
                  >
                    {icon}
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-violet-500">
                    {label}
                  </p>
                  <p className="mt-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-600">
                    {value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </a>
              ),
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 — Portfolio BUT. Réalisé avec passion.</p>
          <p>
            <span className="font-medium text-gray-600">Fiona Radi</span>
            {" · "}
            Étudiante BUT
          </p>
        </div>
      </footer>
    </>
  );
}
