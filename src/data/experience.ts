import type { ExperienceEntry } from "@/types/portfolio";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "barclays-execution-services-technology-developer",
    company: "Barclays Execution Services Ltd. | Knutsford, United Kingdom",
    role: "Technology Developer",
    period: "August 2024 - Present",
    description:
      "Working across customer communications and wholesale lending platforms on backend services, CI/CD, observability, performance testing, and cloud-native deployment workflows in an enterprise engineering environment.",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Helm",
      "OpenShift",
      "GitLab CI/CD",
      "Grafana",
      "MSSQL",
      "Teradata",
      "SonarQube",
      "Veracode",
      "Databricks",
      "AWS"
    ],
    highlights: [
      "Designed health, security, and cost dashboards tracking latency, throughput, concurrency, and traffic metrics for platform services.",
      "Built and maintained GitLab CI/CD pipelines with automated quality checks using unit tests, integration tests, JMeter, SonarQube, and Veracode.",
      "Developed containerized deployment workflows with Docker, Helm, and OpenShift for scalable service and ML delivery.",
      "Built a FastAPI-based automation service to scale non-production Kubernetes environments, reducing infrastructure costs by 20%.",
      "Contributed to Java 21 and Spring Boot 3 microservice upgrades and document-generation workflows integrated with AWS S3.",
      "Delivered ML-assisted incident triage and monitoring automation that reduced manual effort by 180+ hours per month."
    ],
    image: {
      src: "/img/BarclaysLogo.png",
      alt: "Barclays logo"
    }
  },
  {
    id: "jk-paper-data-science-intern",
    company: "JK Paper Ltd. | New Delhi, India",
    role: "Data Science Intern",
    period: "January 2024 - June 2024",
    description:
      "Delivered internal automation and portal workflows supporting digital transformation initiatives across operational teams.",
    technologies: ["Python", "Streamlit", "MySQL", "Power Platform"],
    highlights: [
      "Built internal tools and dashboards to reduce manual operational work.",
      "Developed Python and Streamlit workflows backed by MySQL for business visibility and reporting."
    ],
    image: {
      src: "/img/JKPaperLogo.png",
      alt: "JK Paper logo"
    }
  },
  {
    id: "barclays-developer-analyst-summer-intern",
    company: "Barclays Execution Services Ltd. | Knutsford, United Kingdom",
    role: "Developer Analyst Summer Intern",
    period: "June 2023 - August 2023",
    description:
      "Contributed to enterprise API onboarding, monitoring, and service documentation within Barclays engineering teams.",
    technologies: ["Java", "Spring Boot", "Gradle", "MongoDB", "REST APIs"],
    highlights: [
      "Supported API onboarding and monitoring improvements for internal engineering workflows.",
      "Worked in Java and Spring Boot services to improve delivery readiness and maintainability."
    ],
    image: {
      src: "/img/BarclaysLogo.png",
      alt: "Barclays logo"
    }
  },
  {
    id: "hero-information-systems-summer-intern",
    company: "Hero MotoCorp Ltd. | Gurugram, India",
    role: "Information Systems Summer Intern",
    period: "June 2022 - July 2022",
    description:
      "Automated internal workflows and built data extraction utilities to streamline repetitive business processes.",
    technologies: ["Python", "Selenium", "XPath", "BeautifulSoup", "Automation Anywhere"],
    highlights: [
      "Built web-scraping utilities for supplier data collection and processing.",
      "Automated internal data-entry tasks to reduce repetitive manual effort."
    ],
    image: {
      src: "/img/HeroMLogo.png",
      alt: "Hero MotoCorp logo"
    }
  },
  {
    id: "wipe-software-engineer-intern",
    company: "The Wipe Hotwire India Thermal Equipments Private Ltd. | Neemrana, India",
    role: "Software Engineer Intern",
    period: "November 2021 - January 2022",
    description:
      "Built an internal IT portal to support asset and content management workflows for operational teams.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    highlights: [
      "Developed maintainable backend and UI flows for internal administrative use cases.",
      "Structured the portal around day-to-day operational workflows and usability."
    ],
    image: {
      src: "/img/WipeLogo.png",
      alt: "Wipe logo"
    }
  }
];
