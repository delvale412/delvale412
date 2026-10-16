export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  { number: "01", title: "Entender", description: "Qual é o problema e o que você quer alcançar." },
  { number: "02", title: "Estruturar", description: "O que o projeto precisa ter e como ele vai funcionar." },
  { number: "03", title: "Projetar", description: "Como vai ficar a experiência, do visual ao protótipo." },
  { number: "04", title: "Desenvolver", description: "Tudo o que faz o site ou sistema funcionar de verdade." },
  { number: "05", title: "Integrar", description: "Conexão com dados, serviços e outras ferramentas." },
  { number: "06", title: "Testar", description: "Garantir qualidade e uma boa experiência de uso." },
  { number: "07", title: "Entregar", description: "Colocar no ar e acompanhar a evolução." },
];
