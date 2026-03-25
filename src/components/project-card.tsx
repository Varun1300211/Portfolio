import Image from "next/image";
import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white shadow-[0_14px_32px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] sm:p-7">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={640}
        height={360}
        className="h-48 w-full rounded-2xl border border-white/10 object-cover"
      />
      <div className="mt-6 flex flex-1 flex-col">
        <div className="mb-3 h-px w-12 bg-accent/70" />
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 sm:text-[15px]">
          {project.shortDescription}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          <ExternalLink
            href={project.githubLink}
            ariaLabel={`${project.title} GitHub repository`}
            className="inline-flex items-center text-sm font-semibold text-slate-100 transition duration-200 hover:text-accent"
          >
            GitHub
          </ExternalLink>
          {project.liveDemoLink ? (
            <ExternalLink
              href={project.liveDemoLink}
              ariaLabel={`${project.title} live demo`}
              className="inline-flex items-center text-sm font-semibold text-slate-100 transition duration-200 hover:text-accent"
            >
              Live Demo
            </ExternalLink>
          ) : null}
          {project.architectureLink ? (
            <ExternalLink
              href={project.architectureLink}
              ariaLabel={`${project.title} architecture and design`}
              className="inline-flex items-center text-sm font-semibold text-slate-100 transition duration-200 hover:text-accent"
            >
              Design
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
