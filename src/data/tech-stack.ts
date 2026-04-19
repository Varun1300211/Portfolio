import type { TechStackCategory } from "@/types/portfolio";

export const techStackCategories: TechStackCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Java", "C", "C++", "Python", "Go (Golang)", "TypeScript"]
  },
  {
    id: "databases-and-warehousing",
    title: "Databases & Warehousing",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "MSSQL", "Teradata", "Databricks"]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    skills: ["Spring Boot", "FastAPI", "Flask", "NodeJS", "ExpressJS", "Kafka"]
  },
  {
    id: "ai-ml-and-mlops",
    title: "AI / ML & MLOps",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "MLflow",
      "AWS Bedrock",
      "AWS SageMaker",
      "Streamlit"
    ]
  },
  {
    id: "devops-and-cloud",
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Jenkins",
      "GitLab CI/CD",
      "Helm",
      "Grafana",
      "AWS"
    ]
  },
  {
    id: "systems-and-tools",
    title: "System & Tools",
    skills: [
      "Linux",
      "Git",
      "Selenium",
      "MS Power Platform",
      "SonarQube",
      "Veracode"
    ]
  }
];
