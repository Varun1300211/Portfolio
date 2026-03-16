import { ExternalLink } from "@/components/external-link";
import type { ExternalActionLink } from "@/types/portfolio";

type PrimaryButtonProps = ExternalActionLink;

export function PrimaryButton({
  href,
  label,
  variant = "primary"
}: PrimaryButtonProps) {
  const style =
    variant === "primary"
      ? "border-accent bg-accent text-black hover:-translate-y-0.5 hover:bg-[#e0bc4a] hover:shadow-lg hover:shadow-accent/10"
      : "border-white/12 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.06]";

  return (
    <ExternalLink
      href={href}
      ariaLabel={label}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 ${style}`}
    >
      {label}
    </ExternalLink>
  );
}
