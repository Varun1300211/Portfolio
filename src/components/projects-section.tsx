import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-anchor border-t border-white/5 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-24">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          description="Selected work with emphasis on system behavior, implementation choices, and the engineering problems each project was built to solve."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
