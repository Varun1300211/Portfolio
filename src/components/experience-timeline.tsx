import Image from "next/image";
import type { ExperienceEntry } from "@/types/portfolio";

type ExperienceTimelineProps = {
  items: ExperienceEntry[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative mt-14 space-y-8 border-l border-white/10 pl-5 sm:pl-8">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[27px] top-9 h-3.5 w-3.5 rounded-full border-[5px] border-[#14161b] bg-accent sm:-left-[39px]"
            aria-hidden="true"
          />
          <article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-accent/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-black/20 sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={160}
                height={100}
                className="h-auto w-20 rounded-2xl border border-white/10 bg-[#101115] p-3 object-contain sm:w-24 md:w-28"
              />
              <div className="min-w-0 space-y-5">
                <header className="space-y-3">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {item.company}
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>
                    <span className="w-fit shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.period}
                    </span>
                  </div>
                </header>

                <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  {item.description}
                </p>

                {item.highlights?.length ? (
                  <ul className="space-y-2.5" aria-label={`${item.role} highlights`}>
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-[15px]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.technologies?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
