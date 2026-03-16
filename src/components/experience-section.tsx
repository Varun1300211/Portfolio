import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-anchor border-t border-white/5 bg-[#14161b]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-24">
        <SectionHeading
          id="experience-heading"
          eyebrow="Professional Experience"
          title="Experience"
          description="A timeline of software engineering roles across enterprise platforms, backend services, automation, and applied AI systems."
        />
        <ExperienceTimeline items={experienceEntries} />
      </div>
    </section>
  );
}
