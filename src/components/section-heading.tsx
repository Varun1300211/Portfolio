export type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
