import Image from "next/image";
import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#f6f4ef] p-5 text-black shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:shadow-2xl sm:p-6">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={640}
        height={360}
        className="h-48 w-full rounded-2xl border border-black/5 object-cover"
      />
      <div className="mt-5 flex flex-1 flex-col">
        <div className="mb-3 h-px w-12 bg-accent/70" />
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 sm:text-[15px]">
          {project.shortDescription}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          <ExternalLink
            href={project.githubLink}
            ariaLabel={`${project.title} GitHub repository`}
            className="inline-flex items-center text-sm font-semibold text-black transition duration-200 group-hover:text-amber-700 hover:text-amber-700"
          >
            GitHub
          </ExternalLink>
          {project.liveDemoLink ? (
            <ExternalLink
              href={project.liveDemoLink}
              ariaLabel={`${project.title} live demo`}
              className="inline-flex items-center text-sm font-semibold text-black transition duration-200 group-hover:text-amber-700 hover:text-amber-700"
            >
              Live Demo
            </ExternalLink>
          ) : null}
          {project.architectureLink ? (
            <ExternalLink
              href={project.architectureLink}
              ariaLabel={`${project.title} architecture and design`}
              className="inline-flex items-center text-sm font-semibold text-black transition duration-200 group-hover:text-amber-700 hover:text-amber-700"
            >
              Design
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
