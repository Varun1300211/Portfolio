import Image from "next/image";
import { ExternalLink } from "@/components/external-link";
import type { ContactLink } from "@/types/portfolio";

type ContactCardProps = {
  contact: ContactLink;
};

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-200 hover:border-accent/25 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/15">
      <div className="flex items-center gap-4">
        <ExternalLink
          href={contact.href}
          ariaLabel={`${contact.label}: ${contact.value}`}
          className="rounded-2xl border border-white/10 bg-black/30 p-3 transition duration-200 hover:border-accent/40 hover:bg-black/40"
        >
          <Image
            src={contact.icon.src}
            alt={contact.icon.alt}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </ExternalLink>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {contact.label}
          </p>
          <ExternalLink
            href={contact.href}
            ariaLabel={`${contact.label}: ${contact.value}`}
            className="mt-2 block break-all text-base font-medium leading-7 text-slate-200 transition duration-200 group-hover:text-white hover:text-accent"
          >
            {contact.value}
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
