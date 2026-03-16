import type { ContactLink } from "@/types/portfolio";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "varunkumarg246@gmail.com",
    href: "mailto:varunkumarg246@gmail.com",
    icon: {
      src: "/img/gmail.webp",
      alt: "Gmail icon"
    }
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/varun-kumar-gupta-400860220",
    href: "https://www.linkedin.com/in/varun-kumar-gupta-400860220/",
    icon: {
      src: "/img/linkedin.png",
      alt: "LinkedIn icon"
    }
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Varun1300211",
    href: "https://github.com/Varun1300211",
    icon: {
      src: "/img/github.webp",
      alt: "GitHub icon"
    }
  }
];
