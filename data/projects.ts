import type { Shape } from "@/components/ui/ParticleField";

export type SpotlightTheme = {
  shape: Shape;
  /** main highlight, hex */
  accent: string;
  /** secondary highlight, hex */
  accent2: string;
  /** dark base of the section background, hex */
  base: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  problem: string;
  build: string[];
  /** short plain-language highlights shown as tags */
  highlights: string[];
  liveUrl: string;
  githubUrl: string | null;
  image: {
    desktop: string;
    mobile: string;
  };
  demonstrates: string;
  stats?: { value: string; label: string }[];
  /** projects with a theme get a full-bleed 3D spotlight section */
  spotlight?: SpotlightTheme;
};

export const projects: Project[] = [
  {
    slug: "falha-critica-3d",
    title: "Falha Crítica 3D",
    category: "Loja virtual de estúdio de impressão 3D",
    featured: true,
    problem:
      "Dar a um estúdio de miniaturas e estatuetas em resina uma vitrine online completa, que mostra o catálogo e transforma cada visita em um pedido ou orçamento pelo WhatsApp.",
    build: [
      "Site com várias páginas (Home, Catálogo Pronta Entrega, página de produto, Projetos Personalizados), com visual temático de RPG e cultura geek",
      "Catálogo com filtros por universo, escala e acabamento, para o cliente achar a peça certa rápido",
      "Página de produto com detalhes da peça e botão de pedido direto no WhatsApp",
      "Formulário de orçamento para peças sob medida, que monta a mensagem pronta para o WhatsApp do estúdio",
      "Preferências e pedidos salvos no próprio navegador, sem precisar de cadastro",
      "No ar na internet, pronto para receber clientes",
    ],
    highlights: ["Catálogo com filtros", "Pedido pelo WhatsApp", "Orçamento sob medida", "Funciona no celular"],
    liveUrl: "https://falha-critica3d.vercel.app/",
    githubUrl: "https://github.com/delvale412/falha_critica3d",
    image: {
      desktop: "/projects/falha-critica-3d-desktop.webp",
      mobile: "/projects/falha-critica-3d-mobile.webp",
    },
    demonstrates:
      "Capacidade de montar uma vitrine comercial completa para um negócio real, com identidade visual própria, filtros interativos e um caminho curto entre o interesse e o pedido.",
    stats: [
      { value: "4", label: "páginas conectadas" },
      { value: "3", label: "filtros de catálogo" },
      { value: "0", label: "cadastros exigidos" },
    ],
    spotlight: { shape: "icosahedron", accent: "#fbc531", accent2: "#ef3b4c", base: "#0b1020" },
  },
  {
    slug: "clinica-aurea",
    title: "Auréa Odontologia",
    category: "Site de clínica odontológica",
    featured: false,
    problem:
      "Apresentar uma clínica odontológica integrada (conteúdo fictício, projeto de portfólio), passar confiança antes da primeira consulta e levar quem visita a agendar uma avaliação.",
    build: [
      "Site com várias páginas (Procedimentos, Equipe, Estrutura, Convênios, Depoimentos, Contato), de navegação clara",
      "Uma página própria para cada um dos 11 procedimentos, do clareamento aos implantes",
      "Três caminhos para marcar horário: WhatsApp com mensagem pronta, formulário de agendamento e telefone",
      "Visual elegante e acolhedor, pensado para passar segurança, com selos de confiança logo na primeira tela",
      "Aviso de cookies com opções de escolha, seguindo a lei de proteção de dados (LGPD), e página de política de privacidade",
      "No ar na internet, pronto para receber clientes",
    ],
    highlights: ["Agendamento pelo WhatsApp", "11 páginas de procedimentos", "Funciona no celular", "Segue a LGPD"],
    liveUrl: "https://clinica-aurea-odonto.vercel.app/",
    githubUrl: null,
    image: {
      desktop: "/projects/clinica-aurea-desktop.webp",
      mobile: "/projects/clinica-aurea-mobile.webp",
    },
    demonstrates:
      "Capacidade de organizar um site grande e cheio de conteúdo, com foco em transmitir confiança, facilitar o agendamento e cuidar de privacidade desde o início.",
    stats: [
      { value: "7", label: "páginas principais" },
      { value: "11", label: "páginas de procedimentos" },
      { value: "3", label: "formas de agendar" },
    ],
    spotlight: { shape: "octahedron", accent: "#3cc4b0", accent2: "#e0b866", base: "#06161a" },
  },
  {
    slug: "swiss-gourmert",
    title: "Swiss Gourmert",
    category: "Site de restaurante com sistema próprio",
    featured: false,
    problem:
      "Apresentar o cardápio, a história e a localização de um restaurante, com um site rápido e fácil de manter atualizado.",
    build: [
      "Site com várias páginas (Início, Cardápio, História, Mídia & Eventos, Localização), organizadas por um sistema próprio, que facilita as atualizações",
      "Menu que se adapta ao celular",
      "Seções visuais contando a história e os diferenciais do restaurante",
      "No ar na internet, pronto para receber clientes",
    ],
    highlights: ["Cardápio completo", "Fácil de atualizar", "Localização e horários", "Funciona no celular"],
    stats: [
      { value: "5", label: "páginas no ar" },
      { value: "1", label: "sistema próprio por trás" },
    ],
    spotlight: { shape: "torus", accent: "#ff5a64", accent2: "#f5e6c8", base: "#150a0d" },
    liveUrl: "https://swiss-gourmert.vercel.app/",
    githubUrl: "https://github.com/delvale412/Swiss-Gourmert",
    image: {
      desktop: "/projects/swiss-gourmert-desktop.webp",
      mobile: "/projects/swiss-gourmert-mobile.webp",
    },
    demonstrates:
      "Capacidade de construir um site com sistema próprio por trás (não só páginas prontas), o que facilita atualizações e crescimento no futuro.",
  },
  {
    slug: "ironbase",
    title: "IronBase",
    category: "Site institucional completo",
    featured: false,
    problem:
      "Apresentar a metodologia de um consultor de alta performance física e transformar visitas em contatos interessados.",
    build: [
      "Site completo com várias páginas conectadas (Home, Minha História, O Método, Resultados, Planos, Consultoria), fácil de navegar",
      "Visual de alto impacto, com identidade escura e dourada",
      "Calculadora de IMC interativa, que já mostra o resultado na hora",
      "A calculadora gera automaticamente uma mensagem pronta pra enviar no WhatsApp",
      "Botão de WhatsApp sempre visível e chamadas para contato em todas as páginas",
    ],
    highlights: ["Calculadora de IMC", "Mensagem pronta no WhatsApp", "Várias páginas", "Funciona no celular"],
    liveUrl: "https://ironbase-two.vercel.app/",
    githubUrl: null,
    image: {
      desktop: "/projects/ironbase-desktop.webp",
      mobile: "/projects/ironbase-mobile.webp",
    },
    demonstrates:
      "Capacidade de montar um site completo do zero, criar interações sob medida e manter o foco em gerar contatos reais.",
  },
  {
    slug: "landingpage",
    title: "Landing Page",
    category: "Landing page institucional",
    featured: false,
    problem:
      "Criar uma landing page completa pra um escritório de advocacia (conteúdo fictício, projeto de portfólio), cobrindo apresentação, prova social e conversão de quem visita.",
    build: [
      "Menu fixo que se adapta ao celular, virando um painel lateral",
      "Primeira tela de impacto, com ilustração própria e selos de confiança",
      "Números animados e abas organizando as áreas de atuação",
      "Depoimentos em carrossel automático e perguntas frequentes",
      "Mapa incorporado e formulário que leva direto pro WhatsApp",
      "Animações suaves conforme a pessoa rola a página",
    ],
    highlights: ["Prova social e perguntas frequentes", "Contato pelo WhatsApp", "Mapa incorporado", "Funciona no celular"],
    liveUrl: "https://landingpage-mu-pink-35.vercel.app/",
    githubUrl: "https://github.com/delvale412/landingpage",
    image: {
      desktop: "/projects/landingpage-desktop.webp",
      mobile: "/projects/landingpage-mobile.webp",
    },
    demonstrates:
      "Capacidade de criar interfaces ricas em interação sem depender de ferramentas prontas, com atenção aos detalhes de uso e uma ilustração própria.",
  },
];
