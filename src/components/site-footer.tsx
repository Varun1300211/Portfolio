"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personal-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            {personalInfo.footerTitle}
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
          {personalInfo.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => window.dispatchEvent(new Event("footer-navigation"))}
                className="inline-flex rounded-full border border-white/10 px-4 py-2 transition duration-200 hover:border-accent/40 hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-center text-sm text-muted">
        {personalInfo.copyright}
      </div>
    </footer>
  );
}
