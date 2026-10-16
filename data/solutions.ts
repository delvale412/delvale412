export type Solution = {
  title: string;
  description: string;
  scenario: string;
  proof?: {
    label: string;
    href: string;
  };
};

export const solutions: Solution[] = [
  {
    title: "Sites institucionais e para profissionais liberais",
    description: "Pra quem vive de reputação e precisa passar confiança antes da primeira conversa.",
    scenario:
      "É comum um profissional ser bem indicado de boca a boca, mas, quando alguém pesquisa o nome dele, só encontra redes sociais desatualizadas — nada que passe segurança antes do primeiro contato.",
    proof: { label: "Veja o projeto Landing Page", href: "#projeto-landingpage" },
  },
  {
    title: "Sites para restaurantes e comércio local",
    description: "Cardápio, história, localização e contato — tudo num só lugar, fácil de manter atualizado.",
    scenario:
      "Um restaurante que depende de indicação e do Instagram, mas não tem um lugar fixo onde o cliente veja o cardápio completo, o endereço e os horários sem precisar rolar um feed inteiro.",
    proof: { label: "Veja o projeto Swiss Gourmert", href: "#projeto-swiss-gourmert" },
  },
  {
    title: "Sites para prestadores de serviço e consultores",
    description: "Com ferramentas interativas e um caminho direto pro WhatsApp, sem fricção até o primeiro contato.",
    scenario:
      "Um consultor com um método próprio recebe sempre as mesmas perguntas antes de fechar negócio — e se beneficia de uma ferramenta simples (uma calculadora, um teste, um formulário) que já qualifica quem chega.",
    proof: { label: "Veja o projeto IronBase", href: "#projeto-ironbase" },
  },
  {
    title: "Landing pages de conversão",
    description: "Pensadas pra uma única missão: transformar quem chega em contato ou venda.",
    scenario:
      "Um lançamento, uma campanha de anúncios ou uma nova oferta que precisa de uma página só dela, direta, sem distrações, levando quem chegou até o botão de contato.",
  },
  {
    title: "Sistemas sob medida",
    description: "Pra quando uma planilha ou um grupo de WhatsApp já não dá mais conta do processo.",
    scenario:
      "É comum um negócio crescer até o ponto em que pedidos, cadastros ou tarefas ficam espalhados em várias planilhas soltas — e passar a precisar de um sistema simples que organize tudo num só lugar, sob medida pra forma como o negócio realmente funciona.",
    proof: { label: "Veja minha experiência profissional", href: "#experiencia" },
  },
  {
    title: "Lojas e páginas de venda simples",
    description: "Uma vitrine online pra vender sem depender só de marketplace ou rede social.",
    scenario:
      "Um pequeno negócio que vende bem pelo Instagram, mas perde clientes porque não tem um link fixo e profissional pra mandar quando alguém pergunta: \"vocês têm site?\"",
  },
];

export const extraCapabilities = ["Integrações", "Automação", "Inteligência Artificial", "Design de Interface"];
