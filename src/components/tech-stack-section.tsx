import { SectionHeading } from "@/components/section-heading";
import { techStackCategories } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="section-anchor border-t border-white/5 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-24">
        <SectionHeading
          id="tech-stack-heading"
          eyebrow="Tech Stack"
          title="Technologies I use across backend systems, distributed services, data platforms, and AI-driven tooling."
          description="Core tools and platforms used across backend engineering, platform automation, data-intensive systems, and applied machine learning work."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techStackCategories.map((category) => (
            <article
              key={category.id}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
