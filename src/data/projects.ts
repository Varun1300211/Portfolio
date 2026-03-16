import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "ipl-score-predictor",
    title: "IPL Score Predictor",
    shortDescription:
      "Built a match-state prediction workflow that estimates innings totals from live score inputs. Combined model inference, data preprocessing, and a Streamlit interface for fast, readable analysis during play.",
    image: {
      src: "/img/IPL.png",
      alt: "IPL Score Predictor screenshot"
    },
    techStack: ["Python", "Streamlit", "scikit-learn", "Pandas"],
    githubLink: "https://github.com/Varun1300211/IPLScorePredictor"
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
