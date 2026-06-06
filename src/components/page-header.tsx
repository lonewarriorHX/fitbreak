type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream border-b border-line">
      <div className="absolute inset-0 bg-grain opacity-50" aria-hidden />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
          <span className="h-px w-8 bg-primary-dark" />
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
