export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "anvisa",
    company: "ANVISA (Agência Nacional de Vigilância Sanitária)",
    role: "Desenvolvedor de sistemas",
    period: "Desde setembro de 2025",
    location: "Brasília, DF",
    current: true,
    summary:
      "Criação de sistemas do primeiro rascunho até o sistema pronto e em uso, participando de cada etapa do processo.",
    highlights: [
      "Sistemas internos feitos do início ao fim, da tela que o usuário vê até o que funciona por trás",
      "Ligação entre diferentes sistemas, para tudo funcionar de forma integrada",
      "Organização das informações para que sejam fáceis de consultar e seguras",
      "Cuidado para que os sistemas fiquem sempre no ar, estáveis e protegidos",
      "Conversa com as áreas para entender a necessidade e entregar a solução certa",
    ],
  },
  {
    id: "policia-federal",
    company: "Polícia Federal",
    role: "Desenvolvedor de sistemas",
    period: "Março de 2024 a setembro de 2025",
    location: "Brasília, DF",
    current: false,
    summary:
      "Criação de sistemas web para atender as mais diversas necessidades internas, do entendimento do problema até a entrega final.",
    highlights: [
      "Sistemas entregues com agilidade, permitindo que diferentes áreas tivessem suas soluções rapidamente",
      "Criação e manutenção de sistemas usados por toda a instituição",
      "Conversas com as áreas para entender exatamente o que cada sistema precisava fazer",
      "Planejamento de como cada sistema e suas informações deveriam ser organizados",
      "Manuais e guias para facilitar o uso dos sistemas",
    ],
  },
];
