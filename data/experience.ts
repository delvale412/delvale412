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
    company: "ANVISA (Agência Nacional de Vigilância Sanitária)",
    role: "Desenvolvedor de Software / Full Stack",
    period: "Desde setembro de 2025",
    location: "Brasília, DF",
    current: true,
    summary:
      "Desenvolvimento de sistemas de software do primeiro rascunho até o sistema pronto e em uso, participando de cada etapa do processo.",
    highlights: [
      "Desenvolvimento completo de sistemas internos, da interface ao que roda por trás",
      "Conexão entre diferentes sistemas, pra tudo funcionar de forma integrada",
      "Organização e estruturação de bancos de dados",
      "Desenvolvimento de soluções com tecnologias Oracle",
      "Cuidado da infraestrutura que mantém os sistemas no ar, estáveis e seguros",
      "Levantamento de necessidades e implementação de soluções sob medida",
    ],
    tech: ["SQL", "Oracle", "APIs", "Docker", "Kubernetes", "Full Stack"],
  },
  {
    id: "policia-federal",
    company: "Polícia Federal",
    role: "Desenvolvimento de Sistemas / Full Stack",
    period: "Março de 2024 a setembro de 2025",
    location: "Brasília, DF",
    current: false,
    summary:
      "Desenvolvimento de sistemas web para atender as mais diversas demandas internas, do entendimento da necessidade até a entrega final.",
    highlights: [
      "Desenvolvimento ágil de sistemas, permitindo que diferentes áreas tivessem suas soluções rapidamente",
      "Desenvolvimento e manutenção de sistemas web",
      "Apoio no desenvolvimento de sistemas para atender toda a instituição",
      "Conversas com as áreas pra entender exatamente o que cada sistema precisava fazer",
      "Planejamento de como cada sistema e suas informações deveriam ser organizados",
      "Criação de manuais e guias pra facilitar o uso dos sistemas",
    ],
    tech: ["Low-Code", "Modelagem de Dados", "Requisitos", "Documentação Técnica"],
  },
];
