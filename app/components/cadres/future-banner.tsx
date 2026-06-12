type FutureBannerProps = {
  title: string;
  description: string;
};

export default function FutureBanner({ title, description }: FutureBannerProps) {
  return (
    <article className="gradient-bg rounded-3xl px-8 py-12 text-center shadow-[0_8px_24px_rgba(139,92,246,0.2)]">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/90">
        {description}
      </p>
    </article>
  );
}
