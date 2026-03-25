import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "gatekeeper",
    title: "GateKeeper",
    shortDescription:
      "Built a low-latency feature flag and dynamic configuration platform using a control plane and data plane architecture. Implemented deterministic rollouts, Redis-backed evaluation caching, RBAC, audit logging, and SDK-side local caching to model production platform behavior.",
    image: {
      src: "/img/GateKeeper.png",
      alt: "GateKeeper project screenshot"
    },
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "React"],
    githubLink: "https://github.com/Varun1300211/gatekeeper",
    liveDemoLink: "https://gatekeeper-t5gd.netlify.app"
  },
  {
    id: "decrypto",
    title: "Decrypto",
    shortDescription:
      "Built a Python utility that detects and decrypts multiple cipher formats from ambiguous inputs. The pipeline combines candidate generation and language-based filtering to narrow outputs to likely plaintext.",
    image: {
      src: "/img/decrypto.png",
      alt: "Decrypto project screenshot"
    },
    techStack: ["Python", "Flask", "Cryptography", "JavaScript"],
    githubLink: "https://github.com/Varun1300211/Decrypto"
  },
  {
    id: "shippr",
    title: "Shippr",
    shortDescription:
      "Developed an ecommerce platform with separate customer and admin workflows for catalog, order, and product management. Covered application development alongside testing strategy and Selenium-based automation.",
    image: {
      src: "/img/Shippr.png",
      alt: "Shippr project screenshot"
    },
    techStack: ["MongoDB", "Express", "React", "Node.js", "Selenium"],
    githubLink: "https://github.com/Varun1300211/Shippr"
  },
  {
    id: "idas",
    title: "iDAS",
    shortDescription:
      "Implemented a computer vision pipeline for traffic sign and signal detection using YOLO models on PyTorch. Focused on dataset preparation, model training, and inference quality for real-world scenarios.",
    image: {
      src: "/img/iDAS.png",
      alt: "iDAS project screenshot"
    },
    techStack: ["PyTorch", "YOLOv5", "YOLOv7", "Computer Vision"],
    githubLink: "https://github.com/Varun1300211/iDAS"
  },
  {
    id: "managex",
    title: "ManageX",
    shortDescription:
      "Built an IT operations portal that consolidates asset and content workflows into a single internal system. Structured the application around maintainable backend logic, administrative workflows, and role-based access.",
    image: {
      src: "/img/ManageX.png",
      alt: "ManageX project screenshot"
    },
    techStack: ["PHP", "MySQL", "Bootstrap", "Admin Workflows"],
    githubLink: "https://github.com/Varun1300211/ManageX"
  }
];
