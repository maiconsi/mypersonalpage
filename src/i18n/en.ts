import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: "Maicon da Silva Evangelista | Senior Cloud Architect & SRE",
    description: "Professional portfolio and blog of Maicon da Silva Evangelista. Specialist in Cloud Architecture (AWS), DevOps, SRE, Kubernetes, and mission-critical platform automation.",
    keywords: "Maicon da Silva Evangelista, Cloud Architect, SRE, DevOps, AWS, Kubernetes, Terraform, Observability, FinOps, Software Engineering, Astro, GitHub Pages"
  },
  nav: {
    skip: "Skip to main content",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    mentorship: "Mentorship",
    articles: "Articles",
    contact: "Contact"
  },
  hero: {
    roleBadge: "Senior Cloud Architect & SRE Specialist",
    statusBadge: "Available for New Opportunities",
    name: "Maicon da Silva",
    nameHighlight: "Evangelista",
    subtitle: "Senior Cloud Architect & SRE Specialist | Lead Solution Consultant",
    bio: "With over 26 years of experience in Software Engineering and Infrastructure, I specialize in designing, migrating, and sustaining mission-critical distributed architectures and resilient cloud platforms.",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "E-mail"
  },
  techBadges: {
    tag: "Technical Ecosystem",
    title: "Featured Core Competencies",
    items: [
      "Cloud Architecture",
      "SRE",
      "DevOps",
      "Observability",
      "CI/CD",
      "Terraform",
      "Kubernetes"
    ]
  },
  about: {
    title: "About Me",
    p1: "With over 26 years of established experience in Software Engineering and Infrastructure, I design, migrate, and maintain high-resilience distributed architectures for mission-critical operations. Specialized in Cloud Native ecosystems (AWS), Infrastructure as Code (IaC) automation, microservices orchestration, and SRE/DevOps culture adoption.",
    p2: "My career spans from legacy software modernization to technical leadership in high-impact digital transformation initiatives. Currently, I focus on the intersection of operational resilience, cloud financial engineering (FinOps), and advanced observability, preparing to undertake an academic specialization in Artificial Intelligence for IT Operations (AIOps)."
  },
  skills: {
    title: "Skills & Expertise",
    cloud: {
      title: "Cloud & Infrastructure",
      desc: "AWS (EKS, EC2, S3, IAM, VPC), Cloud Architecture, High Availability, Disaster Recovery, FinOps."
    },
    devops: {
      title: "DevOps & Automation (IaC)",
      desc: "Terraform, Ansible, GitHub Actions, Jenkins, CI/CD Pipelines, GitOps, Shell Scripting."
    },
    sre: {
      title: "SRE & Observability",
      desc: "Kubernetes, Docker, Prometheus, Grafana, Datadog, SLIs/SLOs, Incident Management, Continuous Observability."
    },
    leadership: {
      title: "Leadership & Methodologies",
      desc: "Solutions Architecture Consulting, Agile/Scrum, Tech Mentorship, Software Architecture."
    }
  },
  projects: {
    title: "Featured Projects",
    tag: "Architectural Cases",
    p1: {
      category: "Observability & SRE",
      title: "Kubernetes Observability & Telemetry Platform",
      desc: "Architecture and implementation of a distributed observability ecosystem with Prometheus, Grafana, and operational metrics for proactive MTTR reduction.",
      tags: ["Kubernetes", "Prometheus", "Grafana"]
    },
    p2: {
      category: "Cloud Architecture",
      title: "Multi-Cloud Infrastructure as Code & FinOps",
      desc: "Standardization of reusable Terraform modules for automated AWS EKS and VPC provisioning, coupled with continuous FinOps governance.",
      tags: ["AWS", "Terraform", "FinOps"]
    },
    p3: {
      category: "DevOps & GitOps",
      title: "GitOps CI/CD Pipeline with GitHub Actions & ArgoCD",
      desc: "End-to-end continuous integration and delivery automation with automated security gates, code linting, and declarative Kubernetes deployments.",
      tags: ["GitHub Actions", "ArgoCD", "GitOps"]
    }
  },
  experience: {
    title: "Recent Professional Experience",
    role1: {
      title: "Lead Solution Consultant / Cloud Architect",
      company: "FICO | Recent Role",
      desc: "Technical leadership in architecting and delivering cloud analytics and decision management platforms. Designed scalable and secure architectures for enterprise clients, ensuring governance, high availability, and cost efficiency across AWS."
    },
    role2: {
      title: "Senior Specialist Systems Engineer",
      company: "Previous Experience",
      desc: "Engineered mission-critical systems, leading infrastructure automation programs, standardizing CI/CD pipelines, and establishing end-to-end observability frameworks."
    }
  },
  mentorship: {
    sectionTitle: "Free Social Mentorship",
    badge: "Free Mentorship",
    title: "Social Mentorship in Tech & Career",
    desc: "If you are looking for guidance to accelerate your journey in Cloud, SRE, DevOps, or career transition, 'Sessão de Mentoria' is a community social initiative offering 100% free mentorship. Voluntary support in resume review, LinkedIn optimization, interview prep, and career strategy.",
    cta: "Schedule Mentorship with Me",
    zoomText: "Click to enlarge",
    escText: "Press ESC or click outside to close",
    imageAlt: "Mentorship Session with Maicon Evangelista - Free Mentorship in Tech and Career",
    imageEnlargedAlt: "Mentorship Session with Maicon Evangelista - Enlarged image"
  },

  blog: {
    title: "Technical Articles & Blog",
    viewDevTo: "View articles on Dev.to →",
    featured: {
      badge: "High-Impact Architectural Guide",
      tag1: "Astro & AI",
      tag2: "DevOps & Cloud",
      date: "October 26, 2026",
      readTime: "Read time: 8 min",
      title: "How to Build a High-Impact Portfolio and Blog from Scratch with Astro, GitHub Pages, and AI Agents",
      summary: "A step-by-step architectural blueprint for engineers to establish their digital presence with zero hosting cost, automated deployments, and AI acceleration.",
      intro: "In today's tech landscape, owning a high-performance portfolio and independent technical blog is a key strategic advantage for Cloud Architects, SREs, and DevOps Engineers. This article details the full architectural blueprint used to build this site, blending Astro's SSG speed, Tailwind CSS v4 styling, CI/CD automation via GitHub Pages, and AI agent productivity.",
      step1: {
        title: "Step 1: SSG Architecture Planning",
        desc: "Astro was chosen as the SSG framework for its 'Zero JavaScript by Default' philosophy. Pages render to static HTML/CSS at build time, guaranteeing instant loading and perfect Google Lighthouse scores.",
        points: [
          "Migration & Framework: Adopted Astro v7 for pure static rendering and featherlight routes.",
          "Native Styling: Direct integration with Tailwind CSS v4 via @tailwindcss/vite for sub-second build times.",
          "Zero-Cost Hosting: Fully static assets hosted reliably on GitHub Pages with custom domain support."
        ]
      },
      step2: {
        title: "Step 2: Semantic Layout & Design System",
        desc: "The design system uses a Dark/Slate palette engineered for reading comfort and technical focus.",
        points: [
          "Astro Componentization: Modular layouts in Layout.astro with semantic slots.",
          "Semantic HTML5 & A11y: Clean markup (<main>, <header>, <article>, <section>, <footer>) and keyboard-friendly skip links.",
          "Utility-First Styling: Backdrop blur (backdrop-blur-sm) effects and dynamic hover elevations."
        ]
      },
      step3: {
        title: "Step 3: Advanced SEO, Metadata & Static Assets",
        desc: "Implemented comprehensive discovery and social sharing strategies across LinkedIn and Twitter.",
        points: [
          "Canonical URLs via Astro.site: Dynamic absolute URL generation adhering to SEO standards.",
          "Open Graph & Twitter Cards: Rich social preview tags pointing directly to /og-image.png.",
          "Schema.org JSON-LD: Structured Person and ProfilePage schemas using the is:inline attribute.",
          "Public Directory Assets: Well-organized static files including CNAME, favicons, and social images."
        ]
      },
      step4: {
        title: "Step 4: CI/CD Pipeline Automation with GitHub Actions",
        desc: "Frictionless continuous deployment pipeline running natively on every commit to the main branch.",
        points: [
          "Node.js LTS Build: Automated astro build process outputting optimized static bundles to dist/.",
          "OIDC Authentication: Ephemeral, secure credentials eliminating long-lived static tokens.",
          "Zero-Downtime Deployment: Official actions/deploy-pages integration for fast, reliable releases."
        ]
      },
      step5: {
        title: "Step 5: Development Acceleration with AI Agents on WSL",
        desc: "Enhanced software development lifecycle using context-aware AI tools in an advanced engineering workstation.",
        points: [
          "Autonomous Coding Agent: Driven by Cline integrated with Gemini 3.6 Flash.",
          "VS Code Remote WSL: Linux-native development on WSL2 ensuring exact production parity.",
          "Refactoring & Code Quality: Autonomous diff generation, automated validation, and code standards enforcement."
        ]
      },
      author: "Author: Maicon da Silva Evangelista",
      githubSource: "Source code on GitHub →"
    },
    sec1: {
      tag: "Research & Trends",
      year: "2026",
      type: "Technical Article",
      title: "Exploring Artificial Intelligence in Infrastructure Monitoring (AIOps)",
      desc: "An architectural exploration of how predictive models and anomaly detection can reduce MTTR and assist incident mitigation in Kubernetes clusters.",
      cta: "Read article on Dev.to →"
    },
    sec2: {
      tag: "DevOps & SRE",
      year: "2026",
      type: "Technical Article",
      title: "Building Resilient CI/CD Pipelines with GitHub Actions and Terraform",
      desc: "Best practices for Infrastructure as Code (IaC) provisioning, remote state management, and zero-downtime multi-environment pipelines.",
      cta: "Read article on Dev.to →"
    }
  },
  community: {
    title: "Education & Community Contribution",
    p1: "Academic Specialization: Preparing to start a graduate specialization in Artificial Intelligence for IT Operations (AIOps).",
    p2: "Tech Mentorship: Career mentorship for tech professionals transitioning or upskilling in Cloud Engineering and SRE.",
    p3: "Content Creation: Authoring structured learning paths focusing on platform fundamentals, culture, and DevOps practices."
  },
  footer: {
    copyright: "© 2026 Maicon da Silva Evangelista. Architected for Cloud & SRE."
  }
};
