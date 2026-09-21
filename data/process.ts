export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  { number: "01", title: "Entender", description: "Problema e objetivo." },
  { number: "02", title: "Estruturar", description: "Requisitos e arquitetura." },
  { number: "03", title: "Projetar", description: "UX, UI e protótipo." },
  { number: "04", title: "Desenvolver", description: "Frontend, backend e APIs." },
  { number: "05", title: "Integrar", description: "Dados, serviços e automações." },
  { number: "06", title: "Testar", description: "Qualidade e experiência." },
  { number: "07", title: "Entregar", description: "Deploy e evolução." },
];
