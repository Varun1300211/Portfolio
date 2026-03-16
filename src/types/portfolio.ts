export type SafeHref = `#${string}` | `/${string}` | `https://${string}` | `mailto:${string}`;

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ButtonVariant = "primary" | "secondary";

export type ActionLink = {
  label: string;
  href: SafeHref;
  variant?: ButtonVariant;
};

export type ExternalActionLink = {
  label: string;
  href: `https://${string}` | `mailto:${string}`;
  variant?: ButtonVariant;
};

export type PersonalInfo = {
  siteTitle: string;
  footerTitle: string;
  copyright: string;
  greeting: string;
  name: string;
  introLines: string[];
  expertise: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  navItems: NavItem[];
  heroLinks: ExternalActionLink[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: string[];
  githubLink: `https://${string}`;
  liveDemoLink?: `https://${string}`;
  architectureLink?: `https://${string}`;
};

export type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: `https://${string}` | `mailto:${string}`;
  icon: {
    src: string;
    alt: string;
  };
};
