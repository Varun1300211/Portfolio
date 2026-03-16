"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal-info";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const resetActiveSection = () => setActiveSection(null);

    window.addEventListener("footer-navigation", resetActiveSection);

    return () => {
      window.removeEventListener("footer-navigation", resetActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111216]/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="text-xl font-semibold tracking-tight text-white transition hover:text-accent sm:text-2xl"
        >
          {personalInfo.siteTitle}
        </Link>
        <ul className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-slate-300 sm:text-[15px]">
          {personalInfo.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`inline-flex rounded-full px-4 py-2 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                  activeSection === item.href
                    ? "bg-accent text-black shadow-sm"
                    : "hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
