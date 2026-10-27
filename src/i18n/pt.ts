import type { Translation } from './types';

export const pt: Translation = {
  meta: {
    title: "Maicon da Silva Evangelista | Senior Cloud Architect & SRE",
    description: "Portfólio profissional e blog de Maicon da Silva Evangelista. Especialista em Arquitetura Cloud (AWS), DevOps, SRE, Kubernetes e automação de plataformas de missão crítica.",
    keywords: "Maicon da Silva Evangelista, Cloud Architect, SRE, DevOps, AWS, Kubernetes, Terraform, Observabilidade, FinOps, Engenharia de Software, Astro, GitHub Pages"
  },
  nav: {
    skip: "Pular para o conteúdo principal",
    about: "Sobre",
    skills: "Competências",
    projects: "Projetos",
    experience: "Experiência",
    mentorship: "Mentoria",
    articles: "Artigos",
    contact: "Contato"
  },
  hero: {
    roleBadge: "Senior Cloud Architect & SRE Specialist",
    statusBadge: "Disponível para Novas Oportunidades",
    name: "Maicon da Silva",
    nameHighlight: "Evangelista",
    subtitle: "Senior Cloud Architect & SRE Specialist | Lead Solution Consultant",
    bio: "Com mais de 26 anos de experiência em Engenharia de Software e Infraestrutura, atuo na concepção, migração e sustentação de arquiteturas distribuídas e plataformas resilientes de missão crítica em nuvem.",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "E-mail"
  },
  techBadges: {
    tag: "Ecossistema Técnico",
    title: "Principais Competências em Destaque",
    items: [
      "Cloud Architecture",
      "SRE",
      "DevOps",
      "Observabilidade",
      "CI/CD",
      "Terraform",
      "Kubernetes"
    ]
  },
  about: {
    title: "Sobre Mim",
    p1: "Com mais de 26 anos de experiência consolidada em Engenharia de Software e Infraestrutura, atuo na concepção, migração e sustentação de arquiteturas distribuídas e plataformas resilientes de missão crítica. Especializado em ecossistemas Cloud Native (AWS), automação de infraestrutura como código (IaC), orquestração de microsserviços e implementação da cultura SRE e DevOps.",
    p2: "Minha trajetória abrange desde o desenvolvimento e modernização de aplicações legadas até a liderança técnica em projetos de transformação digital de alta complexidade. Atualmente, foco na interseção entre resiliência operacional, eficiência de custos em nuvem (FinOps) e observabilidade avançada, preparando-me para iniciar especialização acadêmica em inteligência artificial aplicada a operações de TI (AIOps)."
  },
  skills: {
    title: "Especialidades e Habilidades",
    cloud: {
      title: "Cloud & Infraestrutura",
      desc: "AWS (EKS, EC2, S3, IAM, VPC), Cloud Architecture, High Availability, Disaster Recovery, FinOps."
    },
    devops: {
      title: "DevOps & Automação (IaC)",
      desc: "Terraform, Ansible, GitHub Actions, Jenkins, CI/CD Pipelines, GitOps, Shell Scripting."
    },
    sre: {
      title: "SRE & Observabilidade",
      desc: "Kubernetes, Docker, Prometheus, Grafana, Datadog, SLIs/SLOs, Incident Management, Observabilidade Contínua."
    },
    leadership: {
      title: "Liderança & Metodologias",
      desc: "Consultoria Técnica de Soluções, Agile/Scrum, Mentoria Tech, Arquitetura de Software."
    }
  },
  projects: {
    title: "Projetos em Destaque",
    tag: "Cases Arquiteturais",
    p1: {
      category: "Observabilidade & SRE",
      title: "Plataforma de Observabilidade e Telemetria em Kubernetes",
      desc: "Arquitetura e implementação de ecossistema de observabilidade distribuída com Prometheus, Grafana e métricas para redução proativa de MTTR.",
      tags: ["Kubernetes", "Prometheus", "Grafana"]
    },
    p2: {
      category: "Cloud Architecture",
      title: "Infraestrutura como Código Multi-Cloud & FinOps",
      desc: "Padronização de módulos Terraform reutilizáveis para provisionamento automatizado AWS EKS, VPC e governança contínua de custos FinOps.",
      tags: ["AWS", "Terraform", "FinOps"]
    },
    p3: {
      category: "DevOps & GitOps",
      title: "Pipeline CI/CD GitOps com GitHub Actions & ArgoCD",
      desc: "Automação de esteiras de integração e entrega contínua com validações de segurança, testes estáticos de código e deploy declarativo em Kubernetes.",
      tags: ["GitHub Actions", "ArgoCD", "GitOps"]
    }
  },
  experience: {
    title: "Experiência Profissional Recente",
    role1: {
      title: "Lead Solution Consultant / Cloud Architect",
      company: "FICO | Atuação Recente",
      desc: "Liderança na arquitetura e implementação de soluções de tomada de decisão e análise preditiva na nuvem. Responsável por desenhar ambientes escaláveis e seguros para grandes clientes corporativos, garantindo governança, alta disponibilidade e otimização de custos em ecossistemas AWS."
    },
    role2: {
      title: "Senior Specialist Systems Engineer",
      company: "Atuações Anteriores",
      desc: "Atuação em engenharia de sistemas de missão crítica, liderando iniciativas de automação de infraestrutura, padronização de pipelines de entrega contínua (CI/CD) e estruturação de monitoramento de observabilidade ponta a ponta."
    }
  },
  mentorship: {
    sectionTitle: "Mentoria Social Gratuita",
    badge: "Mentoria Gratuita",
    title: "Mentoria Social em Tecnologia & Carreira",
    desc: "Se você busca orientação para acelerar sua jornada em Cloud, SRE, DevOps ou transição de carreira, o 'Sessão de Mentoria' é um projeto social que oferece mentorias 100% gratuitas. Apoio voluntário em revisão de currículo, otimização de perfil no LinkedIn, preparação para entrevistas e direcionamento de carreira.",
    cta: "Agendar Mentoria Comigo",
    zoomText: "Clique para ampliar",
    escText: "Pressione ESC ou clique fora para fechar",
    imageAlt: "Sessão de Mentoria com Maicon Evangelista - Mentoria Gratuita em Tecnologia e Carreira",
    imageEnlargedAlt: "Sessão de Mentoria com Maicon Evangelista - Imagem ampliada"
  },

  blog: {
    title: "Artigos Técnicos & Blog",
    viewDevTo: "Ver publicações no Dev.to →",
    featured: {
      badge: "Guia Arquitetural de Alto Impacto",
      tag1: "Astro & IA",
      tag2: "DevOps & Cloud",
      date: "26 de Outubro, 2026",
      readTime: "Tempo de leitura: 8 min",
      title: "Como Construir um Portfólio Profissional de Alto Impacto e Blog do Zero com Astro, GitHub Pages e Agentes de IA",
      summary: "Um guia arquitetural passo a passo para engenheiros de tecnologia estruturarem sua presença digital com custo zero, deploy automatizado e aceleração por IA.",
      intro: "No cenário atual de tecnologia, possuir um portfólio de alta performance e um blog técnico independente é um diferencial estratégico para Arquitetos de Nuvem, Engenheiros SRE e DevOps. Este artigo apresenta a blueprint arquitetural completa utilizada para construir este portal, combinando a velocidade do gerador de sites estáticos (SSG) Astro, estilização moderna com Tailwind CSS v4, automação CI/CD no GitHub Pages e produtividade aumentada por Agentes de IA.",
      step1: {
        title: "Etapa 1: Planejamento da Arquitetura SSG",
        desc: "A escolha do Astro como framework SSG (Static Site Generation) baseia-se no seu modelo inovador de 'Zero JavaScript por Padrão'. O site é renderizado inteiramente no momento do build em HTML/CSS estático, garantindo pontuação máxima no Google Lighthouse e carregamento instantâneo.",
        points: [
          "Migração & Framework: Adoção do Astro v7 para geração estática pura e rotas ultra leves.",
          "Estilização Nativa: Integração com Tailwind CSS v4 via plugin oficial @tailwindcss/vite para build instantâneo.",
          "Hospedagem Custo Zero: Deploy de arquivos estáticos hospedados com alta disponibilidade e segurança no GitHub Pages."
        ]
      },
      step2: {
        title: "Etapa 2: Estruturação Semântica e Design System",
        desc: "O design system adota a paleta Dark/Slate Theme, projetada para conforto visual e foco no conteúdo técnico.",
        points: [
          "Componentização Astro: Layouts reaproveitáveis em Layout.astro com suporte a slots semânticos.",
          "Acessibilidade & Semântica: Marcação estrita com tags HTML5 (<main>, <header>, <article>, <section>, <footer>) e navegação facilitada com links de salto (skip-link).",
          "Estilização por Utilitários: Efeitos modernos com transparência e desfoque (backdrop-blur-sm) e microinterações de hover dinâmicas."
        ]
      },
      step3: {
        title: "Etapa 3: SEO Avançado, Metadados e Assets Estáticos",
        desc: "Implementação de estratégias robustas de indexação orgânica e compartilhamento rico em redes sociais como LinkedIn e Twitter.",
        points: [
          "URLs Canônicas & Astro.site: Resolução canônica de links absolutos com a API Astro.site.",
          "Open Graph & Twitter Cards: Tags completas de preview social apontando para o asset /og-image.png.",
          "Schema.org JSON-LD: Estruturação com entidades Person e ProfilePage com marcação is:inline.",
          "Assets em /public: Organização estática de arquivos essenciais como CNAME, favicons e thumbnails."
        ]
      },
      step4: {
        title: "Etapa 4: Automação da Pipeline CI/CD com GitHub Actions",
        desc: "Esteira contínua e sem atritos de entrega de software executada nativamente em cada commit na branch de release.",
        points: [
          "Build com Node.js LTS: Execução do build do Astro gerando a saída estática otimizada em dist/.",
          "Autenticação OIDC: Permissões seguras via GitHub OIDC dispensando o uso de chaves secretas longas ou estáticas.",
          "Deploy em Memória: Utilização da GitHub Action oficial actions/deploy-pages para publicação contínua sem downtime."
        ]
      },
      step5: {
        title: "Etapa 5: Aceleração com Agentes de IA no WSL",
        desc: "Aceleração do ciclo de vida de desenvolvimento de software com inteligência artificial contextual em ambiente de engenharia avançado.",
        points: [
          "Agente Autônomo: Execução com Cline integrado ao modelo Gemini 3.6 Flash.",
          "Ambiente VS Code Remote WSL: Desenvolvimento direto em ecossistema Linux no WSL garantindo paridade com produção.",
          "Refatoração e Manutenção: Aplicação autônoma de diffs pontuais, testes e auditoria de padrões de código."
        ]
      },
      author: "Autor: Maicon da Silva Evangelista",
      githubSource: "Código-fonte no GitHub →"
    },
    sec1: {
      tag: "Estudo & Tendências",
      year: "2026",
      type: "Artigo Técnico",
      title: "Explorando Inteligência Artificial no Monitoramento de Infraestrutura (AIOps)",
      desc: "Um estudo arquitetural sobre como modelos preditivos e detecção de anomalias prometem apoiar a redução do MTTR e a automação de remediação em clusters Kubernetes.",
      cta: "Ler artigo no Dev.to →"
    },
    sec2: {
      tag: "DevOps & SRE",
      year: "2026",
      type: "Artigo Técnico",
      title: "Estruturando Pipelines de CI/CD Resilientes com GitHub Actions e Terraform",
      desc: "Boas práticas para provisionamento de infraestrutura como código (IaC), gestão de estados remotos e automação de deploys multi-ambiente sem downtime.",
      cta: "Ler artigo no Dev.to →"
    }
  },
  community: {
    title: "Educação e Contribuição para a Comunidade",
    p1: "Especialização Acadêmica: Em preparação para iniciar pós-graduação focada em Inteligência Artificial aplicada a Operações de TI (AIOps).",
    p2: "Mentoria Tech: Oferta de mentoria de carreira para profissionais de tecnologia que buscam transição ou aprimoramento em Cloud Engineering e SRE.",
    p3: "Criação de Conteúdo: Desenvolvimento de trilhas e cursos estruturados focados em fundamentos de plataforma, cultura e transição para o ecossistema DevOps."
  },
  footer: {
    copyright: "© 2026 Maicon da Silva Evangelista. Arquitetado para Cloud & SRE."
  }
};
