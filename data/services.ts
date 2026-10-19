export type Service = {
  slug: string;
  name: string;
  badge: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  notIncluded: string[];
  scenarios: { text: string; proof?: { label: string; href: string } }[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    name: "Página de vendas ou apresentação",
    badge: "Pronto em até 7 dias úteis",
    summary: "Uma página com uma única missão: apresentar o seu negócio e fazer o cliente te chamar.",
    scope: [
      "Uma página só, focada na sua oferta, lançamento ou campanha",
      "Visual bonito no celular, onde a maioria das pessoas vai abrir",
      "Botão de WhatsApp e formulário que cai direto na sua conversa",
      "Aparece nas buscas do Google",
      "Colocada no ar pra você",
    ],
    deliverables: ["Página no ar", "Ajustes durante a criação", "Orientação de como usar depois de entregue"],
    notIncluded: ["Criação de logotipo", "Gestão contínua de anúncios", "Compra do endereço próprio (.com.br)"],
    scenarios: [
      {
        text: "Um lançamento, uma campanha de anúncios ou uma oferta nova que precisa de uma página só dela, direta, levando quem chegou até o botão de contato.",
      },
      {
        text: "Um profissional bem indicado de boca a boca, mas que, quando alguém pesquisa o nome dele, só encontra redes sociais desatualizadas, sem nada que passe segurança antes do primeiro contato.",
        proof: { label: "Veja a página de exemplo", href: "/projetos/landingpage" },
      },
    ],
  },
  {
    slug: "sites-institucionais",
    name: "Site completo para o seu negócio",
    badge: "Pronto em até 10 dias úteis",
    summary: "Presença completa na internet para o seu negócio ou a sua marca pessoal.",
    scope: [
      "Várias páginas conectadas (início, sobre, serviços ou cardápio, contato)",
      "Apresentação dos seus produtos, serviços ou trabalhos",
      "Formulários e botão de WhatsApp",
      "Seu negócio configurado no Google, com mapa",
      "Colocado no ar pra você",
    ],
    deliverables: ["Site completo no ar", "Páginas definidas junto com você", "Vídeo ensinando a usar"],
    notIncluded: ["Fotos e textos profissionais", "Suporte sem limite depois da entrega", "Recursos além do combinado"],
    scenarios: [
      {
        text: "Um restaurante que depende de indicação e do Instagram, mas não tem um lugar fixo onde o cliente veja o cardápio completo, o endereço e os horários.",
        proof: { label: "Veja o site do Swiss Gourmert", href: "/projetos/swiss-gourmert" },
      },
      {
        text: "Uma clínica que precisa passar confiança antes da primeira consulta e facilitar o agendamento.",
        proof: { label: "Veja o site da Auréa Odontologia", href: "/projetos/clinica-aurea" },
      },
    ],
  },
  {
    slug: "sistemas-web",
    name: "Sistema sob medida",
    badge: "Feito sob medida",
    summary: "Um programa feito do seu jeito, para organizar um processo específico do seu negócio.",
    scope: [
      "Conversa para entender como você trabalha hoje e o que precisa mudar",
      "Acesso com login e senha, quando necessário",
      "Cadastro, consulta e controle das suas informações",
      "Ligação com outras ferramentas que você já usa, quando combinado",
      "Relatórios e rotinas do jeito que o seu negócio precisa",
    ],
    deliverables: ["Sistema funcionando", "Guia simples de uso", "Escopo fechado antes de começar"],
    notIncluded: ["Itens fora do que foi combinado", "Suporte 24 horas", "Servidor próprio, quando não previsto"],
    scenarios: [
      {
        text: "É comum um negócio crescer até o ponto em que pedidos, cadastros e tarefas ficam espalhados em várias planilhas, e passar a precisar de um sistema simples que organize tudo num só lugar.",
        proof: { label: "Veja minha experiência profissional", href: "/sobre#experiencia" },
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "Loja e catálogo online",
    badge: "Pronto em até 20 dias úteis",
    summary: "Uma vitrine online para vender sem depender só de marketplace ou rede social.",
    scope: [
      "Catálogo de produtos com categorias e filtros",
      "Pedido pelo WhatsApp ou pedido completo, conforme o seu caso",
      "Painel simples para você atualizar os produtos",
      "Pagamento e entrega, quando contratados",
    ],
    deliverables: ["Loja ou catálogo no ar", "Produtos organizados junto com você", "Vídeo ensinando a usar"],
    notIncluded: ["Taxas do serviço de pagamento escolhido", "Fotografia dos produtos", "Cuidar da entrega"],
    scenarios: [
      {
        text: "Um negócio que vende bem pelo Instagram, mas perde clientes por não ter um link fixo e profissional para mandar quando alguém pergunta: “vocês têm site?”",
        proof: { label: "Veja a loja da Falha Crítica 3D", href: "/projetos/falha-critica-3d" },
      },
    ],
  },
  {
    slug: "manutencao",
    name: "Cuidado mensal do seu site",
    badge: "Acompanhamento mensal",
    summary: "Acompanhamento para o seu site continuar funcionando e atualizado.",
    scope: [
      "Correção de problemas e ajustes pontuais",
      "Atualização de textos, fotos e informações",
      "Hospedagem e endereço do site cuidados por mim",
      "Cópia de segurança e relatório simples todo mês",
    ],
    deliverables: ["Suporte dentro do combinado", "Registro de tudo o que foi alterado"],
    notIncluded: ["Criação de páginas ou recursos grandes (viram um projeto à parte)", "Atendimento fora do horário combinado"],
    scenarios: [
      {
        text: "É comum um site ficar esquecido depois de pronto, sem atualização, até que algo para de funcionar na hora que mais importa.",
      },
    ],
  },
];
