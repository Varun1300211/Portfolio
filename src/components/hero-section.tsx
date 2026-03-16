import Image from "next/image";
import { PrimaryButton } from "@/components/primary-button";
import { TypewriterText } from "@/components/typewriter-text";
import { personalInfo } from "@/data/personal-info";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-anchor overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_32%),linear-gradient(180deg,#17171d_0%,#14161b_100%)]"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24 lg:py-28">
        <div className="order-2 max-w-2xl space-y-8 md:order-1">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent/80">
              Software Engineer Portfolio
            </p>
            <div className="space-y-4 text-balance text-[2rem] font-medium leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
              <h1 id="hero-heading">
              {personalInfo.greeting}{" "}
                <span className="font-semibold text-accent">{personalInfo.name}</span>,
              </h1>
            </div>
            {personalInfo.introLines.map((line) => (
              <p
                key={line}
                className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                {line}
              </p>
            ))}
            <div className="pt-2 text-xl font-medium sm:text-2xl">
              <TypewriterText words={personalInfo.expertise} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {personalInfo.heroLinks.map((link) => (
              <PrimaryButton key={link.label} {...link} />
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-[34rem] rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <Image
              src={personalInfo.heroImage.src}
              alt={personalInfo.heroImage.alt}
              width={560}
              height={420}
              priority
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
