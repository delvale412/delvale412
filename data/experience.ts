export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "anvisa",
    company: "ANVISA — Agência Nacional de Vigilância Sanitária",
    role: "Desenvolvedor de Software / Full Stack",
    period: "Setembro de 2025 — Atual",
    location: "Brasília — DF",
    current: true,
    summary:
      "Atuação no desenvolvimento de sistemas de software, participando de diferentes etapas do ciclo de desenvolvimento — da concepção à implantação.",
    highlights: [
      "Desenvolvimento Front-end e Back-end de soluções internas",
      "Desenvolvimento e integração de APIs",
      "Modelagem e desenvolvimento de bancos de dados com SQL",
      "Soluções utilizando tecnologias do ecossistema Oracle",
      "Gestão e configuração de infraestrutura de aplicações com Docker e Kubernetes",
      "Análise de requisitos e implementação de soluções para demandas de sistemas",
    ],
    tech: ["SQL", "Oracle", "APIs", "Docker", "Kubernetes", "Full Stack"],
  },
  {
    id: "policia-federal",
    company: "Polícia Federal",
    role: "Desenvolvimento de Sistemas / Full Stack",
    period: "Março de 2024 — Setembro de 2025",
    location: "Brasília — DF",
    current: false,
    summary:
      "Desenvolvimento de sistemas web utilizando tecnologia Low-Code, com participação em todo o ciclo de vida das soluções — do levantamento de requisitos à documentação técnica.",
    highlights: [
      "Implantação e uso de Low-Code para desenvolvimento descentralizado de sistemas web",
      "Desenvolvimento e manutenção de sistemas web",
      "Apoio no desenvolvimento de sistemas centralizados para demandas institucionais",
      "Levantamento e análise de requisitos de sistemas",
      "Modelagem de sistemas e de dados",
      "Elaboração de manuais e documentação técnica",
    ],
    tech: ["Low-Code", "Modelagem de Dados", "Requisitos", "Documentação Técnica"],
  },
];
