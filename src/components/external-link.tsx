import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: `https://${string}` | `mailto:${string}`;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
