import type { PersonalInfo } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  siteTitle: "Varun's Portfolio",
  footerTitle: "Varun's Developer Portfolio",
  copyright: "Copyright © varunkrgportfolio.netlify.app | All rights reserved",
  greeting: "I’m",
  name: "Varun",
  introLines: [
    "Software Engineer focused on backend systems, distributed platforms, and AI-driven automation.",
    "Building production software across enterprise platforms, developer tooling, and data-intensive systems."
  ],
  expertise: [
    "Backend Engineering",
    "Platform Automation",
    "Distributed Systems",
    "Applied AI/ML",
    "Developer Tooling"
  ],
  heroImage: {
    src: "/img/laptop wave.png",
    alt: "Illustration of a laptop with a waving hand"
  },
  navItems: [
    { href: "#hero", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ],
  heroLinks: [
    {
      href: "https://drive.google.com/file/d/1KuTtRc-hv6w2Y8Ap1zg45NoJyBKV2Qek/view?usp=sharing",
      label: "View Resume",
      variant: "primary"
    },
    {
      href: "https://github.com/Varun1300211",
      label: "GitHub",
      variant: "secondary"
    }
  ]
};
