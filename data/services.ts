export type Service = {
  slug: string;
  name: string;
  /** Must match one of the options in components/forms/QuoteForm.tsx's projectTypes. */
  formType: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  notIncluded: string[];
  scenarios: { text: string; proof?: { label: string; href: string } }[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    name: "Landing pages",
    formType: "Landing page",
    summary: "Uma página com uma única missão: apresentar e converter.",
    scope: [
      "Página única, focada numa oferta, lançamento ou campanha",
      "Design responsivo, pensado pra quem chega pelo celular",
      "Formulário ou botão de contato direto (WhatsApp)",
      "SEO técnico básico (título, descrição, Open Graph)",
      "Publicação no ar",
    ],
    deliverables: ["Página publicada e no ar", "Ajustes de conteúdo durante o desenvolvimento", "Orientação de uso após a entrega"],
    notIncluded: ["Identidade visual/logotipo do zero", "Gestão de tráfego pago", "Hospedagem paga de domínio próprio"],
    scenarios: [
      {
        text: "Um lançamento, uma campanha de anúncios ou uma nova oferta que precisa de uma página só dela, direta, sem distrações, levando quem chegou até o botão de contato.",
      },
      {
        text: "Um profissional que é bem indicado de boca a boca, mas, quando alguém pesquisa o nome dele, só encontra redes sociais desatualizadas — nada que passe segurança antes do primeiro contato.",
        proof: { label: "Veja o projeto Landing Page", href: "/projetos/landingpage" },
      },
    ],
  },
  {
    slug: "sites-institucionais",
    name: "Sites institucionais",
    formType: "Site institucional",
    summary: "Presença digital completa pra representar bem um negócio ou uma marca pessoal.",
    scope: [
      "Múltiplas páginas conectadas (início, sobre, serviços/cardápio, contato)",
      "Apresentação de produtos, serviços ou portfólio",
      "Formulários e integração com WhatsApp",
      "SEO técnico básico",
      "Publicação no ar",
    ],
    deliverables: ["Site completo publicado", "Estrutura de páginas definida junto com você", "Orientação de uso após a entrega"],
    notIncluded: ["Fotos e textos profissionais (redação e fotografia)", "Suporte ilimitado após a entrega", "Integrações além do combinado no escopo"],
    scenarios: [
      {
        text: "Um restaurante que depende de indicação e do Instagram, mas não tem um lugar fixo onde o cliente veja o cardápio completo, o endereço e os horários sem precisar rolar um feed inteiro.",
        proof: { label: "Veja o projeto Swiss Gourmert", href: "/projetos/swiss-gourmert" },
      },
      {
        text: "Um consultor com um método próprio recebe sempre as mesmas perguntas antes de fechar negócio — e se beneficia de uma ferramenta simples (uma calculadora, um teste) que já qualifica quem chega.",
        proof: { label: "Veja o projeto IronBase", href: "/projetos/ironbase" },
      },
    ],
  },
  {
    slug: "sistemas-web",
    name: "Sistemas web personalizados",
    formType: "Sistema web",
    summary: "Aplicações feitas sob medida pra um processo específico do seu negócio.",
    scope: [
      "Levantamento do processo atual e do que precisa mudar",
      "Login e controle de acesso, quando necessário",
      "Cadastro, consulta e gestão de informações (CRUD)",
      "Integrações com outras ferramentas, quando previstas no escopo",
      "Relatórios e fluxos de trabalho sob medida",
    ],
    deliverables: ["Sistema publicado e funcionando", "Documentação básica de uso", "Escopo fechado antes do início do desenvolvimento"],
    notIncluded: ["Funcionalidades fora do escopo combinado", "Suporte 24/7", "Infraestrutura de servidor própria (quando não prevista)"],
    scenarios: [
      {
        text: "É comum um negócio crescer até o ponto em que pedidos, cadastros ou tarefas ficam espalhados em várias planilhas soltas — e passar a precisar de um sistema simples que organize tudo num só lugar, sob medida pra forma como o negócio realmente funciona.",
        proof: { label: "Veja minha experiência profissional", href: "/sobre#experiencia" },
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce e catálogos",
    formType: "E-commerce",
    summary: "Uma vitrine online pra vender sem depender só de marketplace ou rede social.",
    scope: [
      "Catálogo de produtos com categorias e variações",
      "Gestão de produtos e estoque, quando prevista no escopo",
      "Fluxo de pedidos, do carrinho à confirmação",
      "Integrações com pagamento e entrega, quando contratadas",
    ],
    deliverables: ["Loja ou catálogo publicado", "Estrutura de produtos definida junto com você", "Orientação de uso após a entrega"],
    notIncluded: ["Taxas de gateways de pagamento (cobradas pelo próprio serviço escolhido)", "Fotografia de produtos", "Gestão de logística"],
    scenarios: [
      {
        text: "Um pequeno negócio que vende bem pelo Instagram, mas perde clientes porque não tem um link fixo e profissional pra mandar quando alguém pergunta: \"vocês têm site?\"",
      },
    ],
  },
  {
    slug: "manutencao",
    name: "Manutenção e melhorias",
    formType: "Manutenção",
    summary: "Acompanhamento contínuo pra um site ou sistema que já está no ar.",
    scope: [
      "Correções de problemas e ajustes pontuais",
      "Atualizações de conteúdo e pequenas melhorias",
      "Monitoramento básico de funcionamento",
      "Backups, quando aplicável à hospedagem usada",
    ],
    deliverables: ["Suporte dentro dos limites combinados em cada acordo", "Registro das alterações feitas"],
    notIncluded: ["Desenvolvimento de novas funcionalidades grandes (tratado como projeto à parte)", "Suporte fora do horário combinado"],
    scenarios: [
      {
        text: "É comum um site ficar esquecido depois de pronto — sem atualização, sem backup — até que algo para de funcionar bem na hora que mais importa.",
      },
    ],
  },
];
